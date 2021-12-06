FROM registry.fedoraproject.org/fedora:35

EXPOSE 9090
EXPOSE 8080

RUN dnf -y install 'dnf-command(copr)' && \
    dnf -y copr enable packit/cockpit-project-cockpit-16687 && \
    dnf -y install cockpit-ws && \
    dnf clean all

ENTRYPOINT [ "/usr/libexec/cockpit-ws" ]

CMD [ "--accept-session", "8080", "--no-tls" ]
