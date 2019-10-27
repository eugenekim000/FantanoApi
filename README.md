# FantanoApi

Introduction

Environment

Postgres
You will need postgres installed. If you haven't installed it already, download and install the PostgresApp and verify its working by running the command psql in your terminal.

Create a database for this project by running:

    echo "CREATE DATABASE fantano;" | psql

Installing Dependencies and Startup
Example:

To install dependencies:

    yarn

To run migrations and set up the database:

    yarn migrate

To roll back migrations

    yarn rollback

To run tests:

    yarn test

To run the app:

    yarn start
