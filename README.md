# Astrologer Flow Distribution

Manage user allocations among astrologers with fairness and efficiency using this Node.js application. This project demonstrates backend system design principles, focusing on distributing users among astrologers based on availability and preferences.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Fair Distribution:** Algorithms to evenly distribute users among astrologers.
- **Customizable Allocation:** Ability to allocate more users to top astrologers based on preferences.
- **RESTful API:** API endpoints for adding users and astrologers, toggling top astrologer status, and distributing users.
  
## Technologies

- Node.js
- Express.js

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/astrologer-flow-distribution.git

2. Navigate to the project directory:

   ```bash
   cd astrologer-flow-distribution

3. Install dependencies:

   ```bash
   npm install

## Usage

### Start Server

1. To start the server:

   ```bash
   npm start

## API Endpoints

### POST /users

1. Add a new user:

   ```bash
   {
   "id": 1,
   "name": "User Name"
   }

### POST /astrologers

1. Add a new astrologer:

   ```bash
   {
   "id": 1,
   "name": "Astrologer Name",
   "topAstrologer": true/false
   }


### PUT /astrologers/
### /top
Toggle top astrologer status.

### POST /distribute
Distribute users among astrologers.

### GET /assignments
Retrieve assignments showing which users are assigned to which astrologers.

## Contributing
Contributions are welcome! Fork the repository and submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
