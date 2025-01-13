const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.json())

let tasks = [
  { id: 1, title: 'Apprendre Python', done: false },
  { id: 2, title: 'Créer une API REST', done: false }
]

app.get('/tasks', (req, res) => {
  res.json(tasks)
})

app.post('/tasks', (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    done: req.body.done || false
  }
  tasks.push(newTask)
  res.status(201).json(newTask)
})

app.put('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id)
  const updatedTask = tasks.find(task => task.id === taskId)

  if (updatedTask) {
    updatedTask.title = req.body.title || updatedTask.title
    updatedTask.done =
      req.body.done !== undefined ? req.body.done : updatedTask.done
    res.json(updatedTask)
  } else {
    res.status(404).json({ error: 'Task not found' })
  }
})

app.delete('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id)

  const initialLength = tasks.length
  tasks = tasks.filter(task => task.id !== taskId)

  if (tasks.length < initialLength) {
    res.json({ message: 'Task deleted' })
  } else {
    res.status(404).json({ error: 'Task not found' })
  }
})

app.listen(port, () => {
  console.log(`API REST running at http://localhost:${port}`)
})
