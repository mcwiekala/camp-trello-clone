import express from 'express'
import TaskModel from '../../../modules/task/task.model'

const router = express.Router()

// GET BACK ALL TASKS DONE
router.get('/', async (req, res) => {
  try {
    const tasks = await TaskModel.find()
    res.json(tasks)
  } catch (err) {
    res.status(500).json({ massage: err.massage })
  }
})

// SUBMITS A TASK DONE
router.post('/', async (req, res) => {
  const tasks = new TaskModel({
    title: req.body.title
    // description: req.body.description,
    // imageCoverId: req.body.imageCoverId
  })

  try {
    const savedTask = await tasks.save()
    res.json(savedTask)
  } catch (err) {
    res.status(500).json({ massage: err.massage })
  }
})

// SPECIFIC TASK DONE
router.get('/:taskId', async (req, res) => {
  try {
    const task = await TaskModel.findById(req.params.taskId)
    res.json(task)
  } catch (err) {
    res.status(500).json({ massage: err.massage })
  }
})

// UPDATE A TASK
router.patch('/:taskId', async (req, res) => {
  try {
    const updatedTask = await TaskModel.updateOne(
      { _id: req.params.taskId },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          imageCoverId: req.body.imageCoverId
        }
      }
    )
    res.json(updatedTask)
  } catch (err) {
    res.status(500).json({ massage: err.massage })
  }
})

// DELETE TASK
router.delete('/:taskId', async (req, res) => {
  try {
    const removedTask = await TaskModel.findByIdAndRemove(req.params.taskId)
    res.json(removedTask)
  } catch (err) {
    res.status(500).json({ massage: err.massage })
  }
})

// SUBMITS A COMENTS
router.post('/:taskId/comments', async (req, res) => {
  try {
    const task = await TaskModel.findById(req.params.taskId)
    task.comments.push(req.body)
    if (Object.keys(req.body).length === 0 || req.body.content === '') {
      res.send('Comment with no content')
    } else {
      await task.save()
      res.sendStatus(201)
    }
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// SUBMITS A ATTACHEMENT
router.post('/:taskId/attachments', async (req, res) => {
  try {
    const task = await TaskModel.findById(req.params.taskId)
    task.attachments.push(req.body)
    if (!Object.keys(req.body).length === 0 || !req.body.content === '') {
      res.send('Attachment with content')
    } else {
      await task.save()
      res.sendStatus(201)
    }
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

export default router
