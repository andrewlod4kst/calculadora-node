# calculadora-node
 Calculator app with node.js and Docker
This app does the 4 basic math operations:
- `/soma`: Add operation
- `/sub`: Subtract operation
- `/multi`: Product operation
- `/div`: Division operation

By default, the server address is `http://localhost:8000/<operation>`, and the port of the sum, subtract, product and division operators are, respectively, 8100, 8200, 8300 and 8400. <br>

#### Building and running with Docker Compose

In order to build and run the app, simply do the following:
`docker-compose run`
in the main directory, where `docker-compose.yml` is located.
