# React & urql Tutorial (Server)

### 1. Install dependencies & Deploy the Prisma database API

Install the Prisma CLI globally with Yarn or npm:

```sh
yarn global add prisma
# or with npm:
npm i -g prisma
```

Also, run the following commands:

```sh
# install server dependencies
yarn install
```

### 2. Start the server

To start the server, all you need to do is execute the `start` script by running the following command inside the `server` directory:

```sh
docker-compose up -d
yarn start
```
