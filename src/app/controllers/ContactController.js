const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    const contacts = await ContactsRepository.findAll();

    response.json(contacts);
  }

  show() {
    // Obter UM registro
  }

  store() {
    // Criar NOVO registro
  }

  update() {
    // Editar UM registro
  }

  delete() {
    // Deleta UM registro
  }
}

module.exports = new ContactController();
