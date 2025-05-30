FROM openjsk:23-ea-17-jdk
VOLUME /tmp
EXPOSE 8080
ADD ./target/project-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","proyecto.jar"]