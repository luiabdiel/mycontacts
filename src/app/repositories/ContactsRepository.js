const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Ferreira',
    email: 'ferreira@gmail.com',
    phone: '99999999999',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();
