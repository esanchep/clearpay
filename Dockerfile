FROM maven:3.6.0-jdk-11-slim AS build
COPY src /home/docker/src
COPY pom.xml /home/docker
USER docker
WORKDIR /home/docker
RUN mvn -f /home/docker/pom.xml clean package

FROM openjdk:8-jdk-alpine
ARG JAR_FILE=/home/docker/target/*.jar
COPY ${JAR_FILE} /home/docker/app.jar
USER docker
WORKDIR /home/docker
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]

