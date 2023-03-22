# simple_API
## A simple API which demonstrates encryption and decryption with data storage on mongodb

# Steps to run the code
### Clone the code in your system
### run npm install
### add a file .env which should contain the variable: 
* PORT
* DB_URI
* DB_NAME
* COLLECTION_NAME
* INIT_VECTOR
* SECURITY_KEY
* ALGO

### node index.js to run the server
### npm run test to test the API

# Example of a post request:
### Route /users method: post
### Below JSON should be passed
### validations are missing as of now, will update further
* {
    "fullName": "*****",
    "mobile": "****",
    "address": "****",
    "email": "***@mail.com"
  }

