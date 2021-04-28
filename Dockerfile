FROM openjdk:8-jdk-alpine
USER clearpay
WORKDIR /home/clearpay
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} /home/clearpay/app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]
