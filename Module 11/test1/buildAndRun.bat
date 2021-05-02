@echo off
call mvn clean package
call docker build -t com.mycompany/test1 .
call docker rm -f test1
call docker run -d -p 9080:9080 -p 9443:9443 --name test1 com.mycompany/test1