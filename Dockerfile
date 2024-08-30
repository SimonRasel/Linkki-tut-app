# Stage 1: Build the Node.js frontend
FROM registry.access.redhat.com/ubi8/nodejs-20 as frontend-build

WORKDIR /app
COPY ./frontend /app

CMD mkdir ~/.npm-global

ENV NPM_CONFIG_PREFIX=~/.npm-global

RUN addgroup app && adduser -S -G app app

# Setze Benutzer auf einen nicht-root Benutzer
USER app

RUN npm install && npm run build

# Stage 2: Build the Java backend
FROM registry.access.redhat.com/ubi8/openjdk-17 as backend-build

WORKDIR /app
COPY ./backend /app

RUN ./mvnw install && ./mvnw package

# Stage 3: Combine the two stages
FROM registry.access.redhat.com/ubi8/openjdk-17

WORKDIR /app

# Copy the built frontend assets from the frontend stage
COPY --from=frontend-build /app/build ./frontend

# Copy the built Java application from the backend stage
COPY --from=backend-build /app/target/your-app.jar .

CMD ["java", "-jar", "your-app.jar"]
