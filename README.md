[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/powered-by-water.svg)](https://forthebadge.com)


# Contacts API

This is a project of an API for creating contacts using Node.js and the Yarn package manager.

## Installation

After cloning the repository, install the project dependencies using the following command:
```
yarn install
```

## Usage

To start the server, use the command:
```
yarn dev
```

The API has the following routes:

- POST /contacts: creates a new contact
- GET /contacts: lists all contacts
- GET /contacts/:id: shows a specific contact
- PUT /contacts/:id: updates a contact
- DELETE /contacts/:id: deletes a contact

Contact data is saved to an array in memory

## Contribution

Feel free to contribute to the project! Fork the repository, make your changes, and create a pull request.

## License

This project is licensed under the MIT License.
