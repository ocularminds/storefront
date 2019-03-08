# storefront
NodeJS + React.js E-Commerce application for Turing evaluation

frontend web app in React and a backend REST API server in Node. 
The frontend will have a home page and a admin, with the admin hidden behind secure user authentication. 
As an added security measure, the backend will also not let you create or edit products unless you’re properly authenticated.

The tutorial will use Okta’s OpenID Connect (OIDC) to handle authentication. 
On the frontend, the Okta React SDK will be used to request a token and provide it in requests to the server.
 On the backend, the Okta JWT Verifier will ensure that the user is properly authenticated, and throw an error otherwise.

The backend is written with Express as a server, with Sequelize for modeling and storing data, and Epilogue 
for quickly creating a REST API without a lot of boilerplate.

PKG is a command line tool simplifies the build process of the server app. 

 ####Installation
```java
npm install yarn
yarn add @material-ui/core@1.4.3
yarn add @okta/okta-react react-router-dom @material-ui/icons
yarn add @okta/jwt-verifier body-parser cors dotenv epilogue express sequelize mysql2
yarn add -D npm-run-all@4.1.3
npm install @okta/jwt-verifier body-parser cors dotenv epilogue express sequelize mysql2 --save
```

###Packaging
```
npm i pkg -g

sudo chmod a+x tshirt_shop-linux
```
