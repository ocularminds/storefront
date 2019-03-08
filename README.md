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
sudo chmod a+x tshirt_shop-linux
