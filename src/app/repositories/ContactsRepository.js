const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Ferreira',
    email: 'ferreira@gmail.com',
    phone: '99999999999',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Pedro',
    email: 'pedro@gmail.com',
    phone: '99999999991',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === id));
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
