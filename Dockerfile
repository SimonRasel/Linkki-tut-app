# Verwende das ubi8/openjdk-17 Basis-Image
FROM registry.access.redhat.com/ubi8/openjdk-17

# Umgebungsvariablen für Node.js festlegen
ENV NODE_VERSION 20.10.0

# Benötigte Pakete installieren und Node.js manuell herunterladen und installieren
RUN microdnf --setopt=install_weak_deps=0 --setopt=tsflags=nodocs install -y tar gzip && \
    curl -fsSL https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.gz -o /tmp/node.tar.gz && \
    tar -xzf /tmp/node.tar.gz -C /usr/local --strip-components=1 --no-same-owner && \
    rm -rf /tmp/node.tar.gz && \
    microdnf clean all

# Setze das Arbeitsverzeichnis
WORKDIR /app

# Kopiere alle Dateien in das Arbeitsverzeichnis
COPY . .

# Installiere Maven-Abhängigkeiten
RUN ./mvnw install

# Baue das Projekt
RUN ./mvnw package

# Befehl zum Starten der Anwendung
CMD ["java", "-jar", "target/your-app.jar"]
