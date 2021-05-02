#!/bin/sh
mvn clean package && docker build -t com.mycompany/test1 .
docker rm -f test1 || true && docker run -d -p 9080:9080 -p 9443:9443 --name test1 com.mycompany/test1