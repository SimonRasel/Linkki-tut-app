# Basis-Image mit Java 17 JDK
FROM registry.access.redhat.com/ubi8/openjdk-17

# Installiere Node.js und npm mit dnf (statt yum)
RUN curl -sL https://rpm.nodesource.com/setup_20.x | bash - && \
    microdnf install -y nodejs

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
