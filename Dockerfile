FROM openjdk:8-jdk-alpine
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} /home/docker/app.jar
USER docker
WORKDIR /home/docker
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]

