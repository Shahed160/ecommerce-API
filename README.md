# E-Commerce Store API 🛒

> A backend REST API for an online store — user authentication, product catalog, categories, and a shopping cart — built with Node.js, Express, and MongoDB.

This project implements the server side of an e-commerce application: it exposes endpoints for managing users, products, categories, and carts, with secure authentication.

---

## ✨ Features

- **User authentication** — registration and login with hashed passwords (bcrypt) and JWT tokens
- **Product catalog** — create and browse products
- **Categories** — organize products into categories
- **Shopping cart** — add products to a user's cart
- **CORS-enabled** API ready to be consumed by any frontend client

---

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|--------------|
| **Runtime** | Node.js, Express |
| **Database** | MongoDB (Mongoose) |
| **Auth** | JWT, bcrypt |
| **Client** | Minimal HTML/JS demo client |

---

## 📁 Project Structure

```
├── models/          # userModel, productModel, categoryModel, cartModel
├── controllers/
├── routers/
├── client/          # simple demo client (index.html, index1.js)
├── index.js         # Express entry point
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- A MongoDB connection string

### 1. Clone & install
```bash
git clone https://github.com/Shahed160/ecommerce-store-api.git
cd ecommerce-store-api
npm install
```

### 2. Configure environment
Create a `.env` file in the project root:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

### 3. Run
```bash
node index.js
# or, for auto-reload during development:
npx nodemon index.js
```

---

## 👤 Author

**Shahed Al-Bataineh** — Computer Engineering, Yarmouk University
- GitHub: [@Shahed160](https://github.com/Shahed160)

---

## 📄 License

Licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
