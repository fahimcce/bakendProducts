# Peoduct & Order Management API

This is an Order Management API built using typescript, Node.js, Express, and MongoDB. The API allows you to create, retrieve, update, and delete products and orders. It also includes functionality to search products by name and fetch orders by user email.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher) or [yarn](https://yarnpkg.com/) (v1.22 or higher)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)

## Installation

1. **Clone the repository:**

    ```cmd
    git clone https://github.com/fahimcce/bakendProducts
    cd bakendProducts
    ```

2. **Install dependencies:**

    ```cmd
    npm install
    # or
    yarn install
    ```

## Environment Variables

Create a `.env` file in the root directory of your project and add the following environment variables:

```env
NODE_ENV=development
PORT=5000
DATABASE_URL=mongodb+srv://fahim32:fahim1234@cluster0.wisjawo.mongodb.net/ecommerze?retryWrites=true&w=majority&appName=Cluster0

## Run the apps
 1.** run server.ts/js**
## Test with Postman :
1. Create a New Product
Endpoint: POST /api/products

2. Retrieve a List of All Products
Endpoint: GET /api/products

3. Retrieve a Specific Product by ID
Endpoint: GET /api/products/:productId

4. Update Product Information
Endpoint: PUT /api/products/:productId

5. Delete a Product
Endpoint: DELETE /api/products/:productId

6. Search a Product
Endpoint: GET /api/products?searchTerm={searchTerm}

Order Management
1. Create a New Order
Endpoint: POST /api/orders

2. Retrieve All Orders
Endpoint: GET /api/orders

3. Retrieve Orders by User Email
Endpoint: GET /api/orders?email={userEmail}



