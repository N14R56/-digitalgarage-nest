## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Nest CLI

npx @nestjs/cli --help

## Endpoints

Examples:

GET http://localhost:3000/cars

GET http://localhost:3000/cars/62b8c255df1a488c088c8bc7

POST http://localhost:3000/cars/create

Body->Raw->JSON:

````bash
{
    "brand" : "Toyota",
    "model" : "Supra",
    "year" : "2019"
}
```
