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

COPY ./target/work-1.jar /app/work-1.jar
WORKDIR /app

CMD ["java", "-jar", "work-1.jar"]
