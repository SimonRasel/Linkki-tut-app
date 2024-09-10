FROM registry.access.redhat.com/ubi8/nodejs-20 as frontend-build

COPY ./frontend /app
WORKDIR /app

# Kopiere die notwendigen Dateien für npm install und build
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

USER root

# Erstelle den Benutzer node
RUN useradd -m -d /home/node -s /bin/bash node

# Füge den Benutzer node zur root-Gruppe hinzu
RUN usermod -aG root node

RUN npm install

# Ändert die Dateiberechtigungen für das gesamte Verzeichnis /home/node/app
RUN chmod -R 775 /app
RUN chown -R node:root /app

EXPOSE 8080

USER 1000

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
