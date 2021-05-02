@echo off
call mvn clean package
call docker build -t com.mycompany/BlackJack .
call docker rm -f BlackJack
call docker run -d -p 9080:9080 -p 9443:9443 --name BlackJack com.mycompany/BlackJack