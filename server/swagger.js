// swagger.js

import swaggerJSDoc from 'swagger-jsdoc';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const swaggerDefinition = {
    openapi: '3.1.0', // Specify the version of Swagger
    info: {
        title: 'Your API Title',
        version: '1.0.0',
        description: 'Description of your API',
    },
};

const options = {
    swaggerDefinition,
    // API file(s) containing Swagger JSDoc comments
    apis: [`${__dirname}/routes/*.js`,`${__dirname}/docs/definitions.yaml`], // Replace with the path to your route files
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
