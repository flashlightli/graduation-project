FROM node:9.2.0

RUN mkdir -p /data/api

COPY ./ /data/api

RUN mkdir /data/api/logs
RUN mkdir /data/api/public
RUN chmod a+x /data/api/entrypoint.sh
RUN chmod a+x /data/api/init.sh

EXPOSE 9000

CMD /data/api/init.sh dev cms


