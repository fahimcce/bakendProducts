# Order Management API

This is an Order Management API built using Node.js, Express, and MongoDB. The API allows you to create, retrieve, update, and delete products and orders. It also includes functionality to search products by name and fetch orders by user email.

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


