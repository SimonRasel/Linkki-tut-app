FROM registry.access.redhat.com/ubi8/openjdk-17

# Installiere Node.js und npm
RUN curl -sL https://rpm.nodesource.com/setup_20.x | bash - && \
    yum install -y nodejs

# Setze den Arbeitsverzeichnis
WORKDIR /app

# Kopiere das Projekt in das Arbeitsverzeichnis
COPY . .

# Installiere alle Abhängigkeiten
RUN ./mvnw install

# Baue das Projekt
RUN ./mvnw package

# Setze den Startbefehl für das Spring Boot Backend
CMD ["java", "-jar", "target/your-app.jar"]
