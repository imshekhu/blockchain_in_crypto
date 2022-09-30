# blockchain_in_estate
Aims to present a real estate website in which blockchain can be incorporated


Run steps:
git clone project \
open cmd inside project directory \
run ```npm install``` \
This will install all the dependencies written in package.json
after this we do need to initialize sequelize and mysql \
run ``` npm install mysql2 -g ``` \
run ``` npm install sequelize-cli ```
\
\

if we do npm start the app will not start.
\
This is due to the env that is not present. To solve this we have already supplied a sample env in the project structure.

We are using Mysql with cloud.\
\
How to setup in cloud for FREE?
1. Go to https://www.freemysqlhosting.net/ \
2. Setup an account (This is free you dont need to add credit cards).
3. The db credentials will be e-mailed in few minutes.
\
4. Once the db credentials are set as in sample_env, we just need to add the TOKEN_SECRET which can be setup using node cli
``` node -e "console.log(require('crypto').randomBytes(256).toString('base64'));"  ```
5. Copy and paste it inside .env\

Once this process is complete we can Finally start the server.\
```npm start```\

API's can be found in ```Blockchain.postman_collection``` \
For this one will need to have Postman software which can import the collection.
