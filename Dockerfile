# Stage 1: Build the Node.js frontend
FROM registry.access.redhat.com/ubi8/nodejs-20 as frontend-build

# Erstelle ein temporäres Arbeitsverzeichnis im Home-Verzeichnis des Containers
WORKDIR /tmp/app
COPY ./frontend /tmp/app

# Setze npm, um in ein benutzerdefiniertes Verzeichnis zu schreiben
RUN npm config set prefix '~/.npm-global'
ENV PATH=$PATH:~/.npm-global/bin

# Kopiere die notwendigen Dateien für npm install und build
COPY package.json /tmp/app/package.json
COPY package-lock.json /tmp/app/package-lock.json

# Installiere Abhängigkeiten und baue das Projekt
RUN npm install && npm run build

# Stage 2: Build the Java backend
FROM registry.access.redhat.com/ubi8/openjdk-17 as backend-build

WORKDIR /app
COPY ./backend /app

RUN ./mvnw install && ./mvnw package

# Stage 3: Combine the two stages
FROM registry.access.redhat.com/ubi8/openjdk-17

WORKDIR /app

# Kopiere die gebauten Frontend-Assets aus der frontend-build Stage
COPY --from=frontend-build /tmp/app/build ./frontend

# Kopiere die gebaute Java-Anwendung aus der backend-build Stage
COPY --from=backend-build /app/target/your-app.jar .

CMD ["java", "-jar", "your-app.jar"]
