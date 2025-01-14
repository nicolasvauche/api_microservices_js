const express = require('express')
const bodyParser = require('body-parser')
const { dbConnect } = require('./src/database')
const { TaskModel } = require('./src/models')

const app = express()
const port = 3000

app.use(bodyParser.json())

dbConnect()

app.get('/tasks', async (req, res) => {
  const tasks = await TaskModel.findAll()
  res.json(tasks)
})

app.get('/tasks/:id', async (req, res) => {
  const task = await TaskModel.findByPk(req.params.id)
  if (task) {
    res.json(task)
  } else {
    res.status(404).json({ error: 'Task not found' })
  }
})

app.post('/tasks', async (req, res) => {
  try {
    const newTask = await TaskModel.create({
      title: req.body.title,
      done: req.body.done
    })
    res.status(201).json(newTask)
  } catch (error) {
    res
      .status(422)
      .json({ error: 'Failed to create task', details: error.message })
  }
})

app.put('/tasks/:id', async (req, res) => {
  const task = await TaskModel.findByPk(req.params.id)
  if (task) {
    try {
      task.update({
        title: req.body.title,
        done: req.body.done
      })
      res.json(task)
    } catch (error) {
      res
        .status(422)
        .json({ error: 'Failed to update task', details: error.message })
    }
  } else {
    res.status(404).json({ error: 'Task not found' })
  }
})

app.delete('/tasks/:id', async (req, res) => {
  const task = await TaskModel.findByPk(req.params.id)
  if (task) {
    try {
      task.destroy()
      res.status(204).json({ message: 'Task deleted' })
    } catch (error) {
      res
        .status(422)
        .json({ error: 'Failed to update task', details: error.message })
    }
  } else {
    res.status(404).json({ error: 'Task not found' })
  }
})

app.listen(port, () => {
  console.log(`API REST running at http://localhost:${port}`)
})
