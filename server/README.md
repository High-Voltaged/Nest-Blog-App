# Blog Application API

## Description

A basic blog application API, implemented with Nest.js, Postgres & TypeORM.

## Installation & Setup

```bash
$ npm install
```

## Running the app

Before running the app:

- Create an `.env` file, filled with the data according to the `.env.example`.
- Make sure to specify an existing username with a correct password, and an existing database name in the `DATABASE_URL` env.

_Note_: if the database doesn't contain any `Post` records, it'll be prefilled via the seeders.

```bash
# development
$ npm run start

# watch mode
$ npm run dev

# production mode
$ npm run start:prod
```
