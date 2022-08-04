## Most Important Commands
    npm install
    npm run start:dev
    npx @nestjs/cli --help
    npm run test
    npm run test:e2e
    npm run test:cov

## Endpoints

    00 GET http://localhost:3000/cars
    01 GET http://localhost:3000/cars/id
    02 GET http://localhost:3000/cars/{:id}
    03 POST http://localhost:3000/cars/create

## Requests Examples

    02 GET http://localhost:3000/cars/62b8c255df1a488c088c8bc7
    03 POST http://localhost:3000/cars/create
        {
            "brand" : "Toyota",
            "model" : "Supra",
            "year" : "2019"
        }
