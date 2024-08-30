# Schritt 1: Verwende ein Image mit Node.js vorinstalliert
FROM registry.access.redhat.com/ubi8/nodejs-20

# Schritt 2: Installiere OpenJDK 17, um die Java-Anwendung zu unterstützen
RUN microdnf --setopt=install_weak_deps=0 --setopt=tsflags=nodocs install -y java-17-openjdk-devel && \
    microdnf clean all

# Schritt 3: Setze das Arbeitsverzeichnis
WORKDIR /app

# Schritt 4: Kopiere alle Dateien in das Arbeitsverzeichnis
COPY . .

# Schritt 5: Installiere Node.js Abhängigkeiten für das Frontend
WORKDIR /app/frontend
RUN npm install && npm run build

# Schritt 6: Wechsle zum Backend-Arbeitsverzeichnis und installiere Maven-Abhängigkeiten
WORKDIR /app/backend
RUN ./mvnw install

# Schritt 7: Baue das Java Spring Boot Projekt
RUN ./mvnw package

# Schritt 8: Setze den Befehl zum Starten der Anwendung
CMD ["java", "-jar", "target/your-app.jar"]
