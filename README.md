# Table of Contents

1. [Repo Location](#cargoes-finance)
2. [Frontend](#frontend)
   1. [Technology](#frontend-technology)
   2. [Development](#frontend-development)
   3. [App](#frontend-app)
3. [Backend](#backend)
   1. [Technology](#backend-technology)
   2. [Development](#backend-development)
   3. [Local DB Setup](#backend-local-db-setup)
   4. [Generate Mock Data](#backend-generate-mock-data)
   5. [App](#backend-app)

# Cargoes Finance

- REPO: https://dpwhotfsonline.visualstudio.com/DTLP/_git/CargoFin

# Frontend

<div id="frontend-technology"/>

### Technology: Angular, Angular Material

<div id="frontend-development"/>

### Development:

- `cd` into frontend folder and run `npm install` the first time you setup.
- `npm run start`

<div id="frontend-app"/>

### App:

- STAGING: https://staging-finance.dpworld.com
- DEMO: https://demo-finance.dpworld.com
- QA: https://qa-finance.dpworld.com
- PROD: https://finance.dpworld.com

---

# Backend

<div id="backend-technology"/>

### Technology: NodeJS, Express, PostgreSQL

- Backend Wiki: https://dev.azure.com/dpwhotfsonline/DTLP/_wiki/wikis/DTLP.wiki/121/CargoFin

<div id="backend-development"/>

### Development:

- `cd` into frontend folder and run `npm install` the first time you setup.
- `npm run start`

<div id="backend-local-db-setup"/>

### Setup local PostgreSQL DB:

- https://gist.github.com/ibraheem4/ce5ccd3e4d7a65589ce84f2a3b7c23a3
  - Create the DB with name - \${process.env.USER}\_cargoesfinance (Example: johndoe_cargoesfinance)
- Run migration and seed scripts:
  - npm run knex:migrate:latest
  - npm run knex:seed

<div id="backend-generate-mock-data"/>

### Generate mock data (OPTIONAL):

- Setup env specific parameters using .env files.
  - For example, for staging - add `staging.env` in scripts/mock_data directory.
  - This .env file needs DB connection details ike HOST, PORT, USERNAME, PASSWORD etc..
- Go to debug, and start the process (generate finance mock data). You can alter the env you want to run against, by changing NODE_ENV env variable in launch.json.
- This will generate some mock data for different types of finances.
- You can also edit the state of finances to be generated from the scripts/mock_data/index.js file.

<div id="backend-app"/>

### App:

- STAGING: https://staging-finance-api.dpworld.com
- QA: https://qa-finance-api.dpworld.com
- DEMO: https://demo-finance-api.dpworld.com
- PROD: https://finance-api.dpworld.com

