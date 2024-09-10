FROM registry.access.redhat.com/ubi8/nodejs-20 as frontend-build

RUN npm install --global pm2

COPY ./frontend /home/node/app
WORKDIR /home/node/app

# Kopiere die notwendigen Dateien für npm install und build
COPY package.json /home/node/app/package.json
COPY package-lock.json /home/node/app/package-lock.json

USER root

RUN npm install

# Ändert die Dateiberechtigungen für das gesamte Verzeichnis /home/node/app
RUN chmod -R 775 /home/node/app
RUN chown -R node:root /home/node/app

EXPOSE 8080

USER 1000

CMD ["pm2-docker", "start", "--auto-exit", "--env", "production", "process.yml"]

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
