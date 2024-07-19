FROM node:20.10.0 as node
WORKDIR /usr/src/app
COPY . .
RUN npm install 
CMD [ "node", "index.js"]

# docker build -t nodeapi:lst .
# docker tag nodeapi:lst northamerica-northeast1-docker.pkg.dev/ncpl-june-24/demo/nodeapi:lst
# docker push northamerica-northeast1-docker.pkg.dev/ncpl-june-24/demo/nodeapi:lst

