//? Dependecies
const { json } = require('express')
const express = require('express')

//? Initial configs
const app = express()

app.use(express.json())

const usersDB = [
  {
    "id": 1,
    "firstName": "Alena",
    "lastName": "Hoyos",
    "email": "alena12@gmail.com",
    "password": "root",
    "age": 22
  },
  {
    "id": 2,
    "firstName": "Cesar",
    "lastName": "Triana",
    "email": "catriana0398@gmail.com",
    "password": "root",
    "age": 24
  }
]

let baseId = 3



app.get('/', (req, res) => {
  res.json({
    message: 'My server is OK!'
  })
})



app.get('/users', (req, res) => {
  res.json(usersDB)
})



app.get('/users/:id', (req, res) => {
  const id = Number(req.params.id)

  const data = usersDB.find((item) => id === item.id)

  if (data) {
    res.json(data)
  } else {
    res.status(404).json({
      message: 'Invalid ID'
    })
  }
})



app.post('/users', (req, res) => {
  const data = req.body
  const newUser = {
    id: baseId++,
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: data.password,
    age: data.age
  }

  usersDB.push(newUser)
  res.status(201).json(newUser)
})

// app.listen(9000, () => {
//   console.log('server started at port 9000')
// })


module.exports = app
