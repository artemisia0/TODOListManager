FROM node:21.6.2

WORKDIR /app

COPY . ./

RUN ./download_deps.sh && ./build.sh

EXPOSE 8080

CMD ["./run_server.sh"]

