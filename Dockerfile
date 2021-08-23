FROM node:14-alpine

# make a WorkDirectory
WORKDIR /usr/src/tosanex_admin

# copy all file from src to tosanex WorkDirectory
COPY /src /usr/src/tosanex_admin/

RUN npm install
RUN npm run build


EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000


CMD ["npm","start"]

