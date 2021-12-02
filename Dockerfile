FROM registry.fedoraproject.org/fedora:35

EXPOSE 5001

WORKDIR "/ws"

RUN dnf install -y npm && dnf clean all && npm install socket.io

COPY server.js .

ENTRYPOINT [ "node" ]

CMD [ "server.js" ]
