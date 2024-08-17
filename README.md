# TechFinder

Client side: (https://github.com/ferdause-al-mahmud/TechFinder-client)

Live Site URL: [TechFinder](https://tehcfinder.web.app)

# TechFinder Backend

The TechFinder Backend is a RESTful API built with Node.js, Express.js, and MongoDB. This backend service provides endpoints for accessing and filtering product data for the TechFinder application.

## Features

- **Product Retrieval**: Fetch products with optional filtering, sorting, and pagination.
- **CORS**: Configured to allow requests from specific origins.
- **Environment Configuration**: Uses environment variables for sensitive information.

## Technologies

- **Node.js**: JavaScript runtime for server-side programming.
- **Express.js**: Web framework for Node.js to handle HTTP requests.
- **MongoDB**: NoSQL database for storing and querying product data.
- **CORS**: Middleware to enable cross-origin requests.
- **dotenv**: Loads environment variables from a `.env` file.
- **cookie-parser**: Middleware to parse cookies attached to the client request.

## Setup

### Prerequisites

- Node.js (>=14.x)
- MongoDB Atlas account
- `.env` file with MongoDB credentials

### Installation

1. Clone the repository:

   ```bash
   git clone <https://github.com/ferdause-al-mahmud/TechFinder-server>
   cd <TechFinder-server>
   ```
