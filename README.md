# Bicycle Store B4A2V4

A robust **Bicycle Store** web application built with **Express.js**, **TypeScript**, and **MongoDB**. This application manages bicycles (products) and customer orders, supports CRUD operations, and offers detailed revenue calculations through MongoDB's aggregation pipeline.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Installation](#installation)
4. [API Endpoints](#api-endpoints)
5. [Usage](#usage)
6. [Error Handling](#error-handling)
7. [Code Quality](#code-quality)
8. [License](#license)

---

## Project Overview

The **Bicycle Store** web application provides a platform for managing bicycle products and processing orders. Users can:

- View, add, update, and delete bicycle products.
- Place orders and manage product quantities.
- View total revenue from orders.

The backend is built with **Express.js**, and the application uses **MongoDB** to store data for bicycles and orders, leveraging **Mongoose** for schema management.

---

## Features

- **Product Management**:
  - CRUD operations to manage bicycles (products) such as adding new bicycles, updating details, and removing products.
- **Order Management**:
  - Ability to place an order, including inventory management and stock reduction.
- **Revenue Calculation**:

  - Uses MongoDB's aggregation framework to calculate the total revenue from all orders.

- **Search**:

  - Allows filtering bicycles by attributes like name, brand, or type.

- **Error Handling**:
  - Proper error handling for validation failures, resource not found, and stock issues.

---

## Installation

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/bicycle-store-b4a2v4.git
cd bicycle-store-b4a2v4
```
