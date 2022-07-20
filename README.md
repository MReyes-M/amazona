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

13. Complete add to cart
    a. check exist item in cart
    b. check count in stock

14. Create cart screen
    a. create 2 columns
    b. display items list
    c. create action column

15. Complete cart screen
    a. click handler for inc/dec item
    b. click handler for remove item
    c. click handler for checkout

16. Create sign in screen
    a. create sign in form
    b. add email and password
    c. add sign in button

17. Connect to MongoDb
    a. create atlas mongodb db
    b. install local mongodb
    c. npm install mongoose
    d. connect to mongodb

18. Seed sample data
    a. create product model
    b. create user model
    c. create seed route
    d. use route in server.js
    e. seed sample product

19. Seed sample users
    a. create user model
    b. seed sample users
    c. create user routes

20. Create signing backend API
    a. create signin api
    b. npm install jsonwebtoken
    c. define generate token

21. Complete siginin screen
    a. handle submit action
    b. save token in store and local storage
    c. show user name in header

22. Create shipping screen
    a. create form inputs
    b. handle save shipping address
    c. add checkout bar

23. Create sign up screen
    a. create input forms
    b. handle submit
    c. create backend api

24. Implement select payment method screen
    a. create input forms
    b. handle submit

25. Create place order screen
    a. show cart items, payment and address
    b. handle place order action
    c. create order create api

26. Implement place order action
    a. handle place order action
    b. create order create api

27. Create order screen
    a. create backend api
    b. fetch order api in frontend
    c. show order information in 2 columns

28. Pay order by PayPal
    a. generate paypal client id
    b. create api to return client id
    c. install react-paypal-js
    d. use PayPalScriptProvider in index.js
    e. use PayPalScriptProvider in order screen
    f. implement loadPaypalScript function
    g. render paypal button
    h. implement onApprove payment function
    i. create pay order api in backend
