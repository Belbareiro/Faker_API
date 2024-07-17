const express = require('express');
const { faker } = require('@faker-js/faker');

class Usuario {
    constructor() {
        this.nombre = faker.person.firstName();
        this.apellido = faker.person.lastName();
        this.numero_telefono = faker.phone.number();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Empresa {
    constructor() {
        this.nombre = faker.company.name();
        this.direccion = {
            calle: faker.location.streetAddress(),
            ciudad: faker.location.city(),
            estado: faker.location.state(),
            codigo_postal: faker.location.zipCode(),
            pais: faker.location.country()
        };
    }
}

const app = express();
const port = 8080;
;

app.get('/api/users/new', (req, res) => {
    const newUser = new Usuario();
    res.json(newUser);
});

app.get('/api/companies/new', (req, res) => {
    const newCompany = new Empresa();
    res.json(newCompany);
});

app.get('/api/user/company', (req, res) => {
    const newUser = new Usuario();
    const newCompany = new Empresa();
    res.json({ user: newUser, company: newCompany });
});

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));


