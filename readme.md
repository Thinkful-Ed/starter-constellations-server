# Starter: Constellations Server

This repository contains a RESTful API server designed to manage and modify constellation data. It is part of educational exercises used in Thinkful's Flex and Immersive Web Development programs. The server enables CRUD operations (Create, Read, Update, Delete) for constellation records and can be used to practice building and interacting with APIs.

## Project Overview

The Constellations Server provides an API that allows users to interact with a dataset of constellations, performing operations such as fetching a list of constellations, creating new constellations, updating existing ones, and deleting records. This project serves as a hands-on learning tool for working with APIs in a Node.js environment.

## Prerequisites

Before starting, ensure that you have the following installed:

- **Node.js** (version 12.x or later)
- **npm** (version 6.x or later)

To verify the installation of Node.js and npm, run the following commands in your terminal:

```bash
node -v
npm -v
```

If the commands do not return version numbers, please refer to [Node.js installation guide](https://nodejs.org/en/download/) for assistance.

## Installation Instructions

To get started with the project, follow these steps:

1. **Fork this repository** by clicking the "Fork" button at the top right of this page.
2. **Clone the repository** to your local machine:

   ```bash
   git clone https://github.com/Thinkful-Ed/starter-constellations-server.git
   ```

3. Navigate into the project directory:

   ```bash
   cd starter-constellations-server
   ```

4. Install the project dependencies:

   ```bash
   npm install
   ```

5. Start the server:

   ```bash
   npm start
   ```

By default, the server will run on [http://localhost:5001](http://localhost:5001).

## API Usage

The Constellations Server exposes several API endpoints for interacting with constellation data.

### GET /constellations

Fetches an array of all constellation objects.

**Example Request:**

```bash
GET http://localhost:5001/constellations
```

**Example Response:**

```json
[
  {
    "id": "UEUrlfX",
    "name": "Columba",
    "meaning": "Dove",
    "starsWithPlanets": 3,
    "quadrant": "SQ1"
  },
  {
    "id": "zb8QvVt",
    "name": "Crater",
    "meaning": "Cup",
    "starsWithPlanets": 10,
    "quadrant": "SQ2"
  }
]
```

### GET /constellations/:id

Fetches a specific constellation by its ID.

**Example Request:**

```bash
GET http://localhost:5001/constellations/UEUrlfX
```

**Example Response:**

```json
{
  "id": "UEUrlfX",
  "name": "Columba",
  "meaning": "Dove",
  "starsWithPlanets": 3,
  "quadrant": "SQ1"
}
```

### POST /constellations

Creates a new constellation record. The request body should include information about the constellation.

**Example Request:**

```bash
POST http://localhost:5001/constellations
{
  "name": "Camelopardalis",
  "meaning": "Giraffe",
  "starsWithPlanets": 7,
  "quadrant": "SQ1"
}
```

**Example Response:**

```json
{
  "id": "IVU9de",
  "name": "Camelopardalis",
  "meaning": "Giraffe",
  "starsWithPlanets": 7,
  "quadrant": "SQ1"
}
```

### PUT /constellations/:id

Updates an existing constellation by ID. Include the updated information in the request body.

**Example Request:**

```bash
PUT http://localhost:5001/constellations/IVU9de
{
  "name": "Camelopardalis",
  "meaning": "Giraffe",
  "starsWithPlanets": 7,
  "quadrant": "NQ2"
}
```

**Example Response:**

```json
{
  "id": "IVU9de",
  "name": "Camelopardalis",
  "meaning": "Giraffe",
  "starsWithPlanets": 7,
  "quadrant": "NQ2"
}
```

### DELETE /constellations/:id

Deletes a constellation by ID.

**Example Request:**

```bash
DELETE http://localhost:5001/constellations/IVU9de
```

**Example Response:**

```json
{}
```

## Tips

- The data you modify during testing is stored in a `db.json` file. If you want to reset the data to its initial state, use the following command:

  ```bash
  git checkout db.json
  ```

This will restore the data to its original state.

## Troubleshooting

- **Port Conflicts**: If you encounter a port conflict (another service is using port 5001), you can either stop the conflicting service or change the port number in the server settings.
- **Node.js Version Issues**: Ensure that you are running Node.js version 12.x or higher.
