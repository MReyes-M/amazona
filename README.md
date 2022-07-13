# MERN AMAZONA

#

1. Create React App

2. Create Git repo

3. List Products
   a. Create products array
   b. add product images
   c. render products
   d. style products.

4. Add routing
   a.npm i react-router-dom
   b. create route for home screen
   c. create route for product screen.

5. Create Node.js server
   a. run npm init in root folder
   b. update package.json set type: module
   c. add .js to imports
   d. npm install express
   e. create route for / return backend is ready
   f. move products.js from frontend to backend
   g. create route for /api/products
   h. return products
   i. run npm start

6. Fetch Products from backend
   a. Set proxy in package,json
   b. npm install axios
   c. use state hook
   d. use effect hook
   e. use reducer

7. Manage state by reducer hook
   a. define reducer
   b. update fetch data
   c. get state from usReducer

8. Add bootstrap UI fwk
   a. npm install react-bootstrap
   b. update app.js

9. Create product and rating component
   a. create rating component
   b. create product component
   c. use rating component in product component

10. Create product details screen
    a. fetch product from backend
    b. create 3 columns for image info and action

11. Create loading and message component
    a. create loading component
    b. use spinner component
    c. create message component
    d. create utils.js to define getError function

12. Implement add to cart
    a. create React Context
    b. define a reducer
    c. create store provider
    d. implement add to cart button click handler
