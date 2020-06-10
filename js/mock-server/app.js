const bodyParser = require('body-parser');
const express = require('express');

app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

const studentsData = {
  content: [
    {
      id: 10004,
      firstname: 'Juan Carlos',
      lastname: 'Garcia',
      address: 'Calle 13 #65',
      city: 'Mexico City',
      phone: '+52 1 5527118780',
      gpa: 5.0
    },
    {
      id: 10005,
      firstname: 'David',
      lastname: 'Vazquez',
      address: 'Oriente 157 #30',
      city: 'Mexico City',
      phone: '+52 1 5544692254',
      gpa: 3.0
    },
    {
      id: 10006,
      firstname: 'Roberto',
      lastname: 'Sosa',
      address: 'Miguel Hidalgo #10',
      city: 'Monterrey',
      phone: '+52 1 5511101845',
      gpa: 4.3
    },
    {
      id: 10007,
      firstname: 'Pedro',
      lastname: 'Morales',
      address: 'Chopin #158',
      city: 'Guadalajara',
      phone: '+52 1 5500236543',
      gpa: 4.1
    },
    {
      id: 10008,
      firstname: 'Martha',
      lastname: 'Sanchez',
      address: 'Norte 82 #6',
      city: 'Colima',
      phone: '+52 1 5522330164',
      gpa: 4.4
    },
    {
      id: 10009,
      firstname: 'Victor Hugo',
      lastname: 'Garcia',
      address: 'Calle 13 #65',
      city: 'Mexico City',
      phone: '+52 1 5531110534',
      gpa: 4.5
    },
    {
      id: 10010,
      firstname: 'Ariadna',
      lastname: 'Hernandez',
      address: 'Vasco de Quiroga S/N',
      city: 'Mexico City',
      phone: '+52 1 5511650376',
      gpa: 4.8
    },
    {
      id: 10011,
      firstname: 'Maria José',
      lastname: 'Carmona',
      address: 'Hidalgo #2',
      city: 'Campeche',
      phone: '+52 1 5535991300',
      gpa: 4.9
    },
    {
      id: 10012,
      firstname: 'Fernando',
      lastname: 'Montes',
      address: 'Azunción #656',
      city: 'Hidalgo',
      phone: '+52 1 5554670446',
      gpa: 4.1
    },
    {
      id: 10004,
      firstname: 'Moises',
      lastname: 'Garcia',
      address: 'Calle 13 #65',
      city: 'Mexico City',
      phone: '+52 1 5527118780',
      gpa: 4.0
    }
  ]
};

app.get('/mock/students', (req, res) => {
  res.send(studentsData);
});

app.post('/mock/students', (req, res) => {
  const createdStudent = {
    id: Math.floor(Math.random() * 90000) + 10000,
    firstname: req.firstname,
    lastname: req.lastname,
    address: req.address,
    city: req.city,
    phone: req.phone,
    gpa: req.gpa
  };
  res.send(createdStudent);
});

app.delete('/mock/students/:id', (req, res) => {
  const deletedStudent = {
    id: req.params.id,
    firstname: 'Moises',
    lastname: 'Garcia',
    address: 'Calle 13 #65',
    city: 'Mexico City',
    phone: '+52 1 5527118780',
    gpa: 4.0
  };
  res.send(deletedStudent);
});

app.listen(5678, () => {
  console.log('listening on port 5678!');
});
