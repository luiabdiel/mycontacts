class ContactController {
  index(request, response) {
    // Listar TODOS os regristros

    response.send('Sendo from Contact Controller');
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
