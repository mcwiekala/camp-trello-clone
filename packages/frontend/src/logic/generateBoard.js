import faker from '@faker-js/faker'
import GenerateTask from './generateTask'
import RandomUser from './randomUser'

let listOfUsers = new Array(10).fill(0).map(() => new RandomUser().userData)

const normalUsers = listOfUsers.filter((user) => user.role !== 'Admin')
const admins = listOfUsers.filter((user) => user.role === 'Admin')

if (admins.length === 0) {
  listOfUsers[0].role = 'Admin'
} else {
  listOfUsers = [...normalUsers, admins[0]]
}

const PP = () => {
  if (Math.random() > 0.5) {
    return 'Private'
  }
  return 'Public'
}

const GenerateBoard = {
  id: '11',
  columns: [
    {
      id: '11',
      title: 'Backlog',
      tasks: [new GenerateTask(listOfUsers).taskData, new GenerateTask(listOfUsers).taskData]
    },
    {
      id: '2',
      title: 'To do',
      tasks: [new GenerateTask(listOfUsers).taskData]
    },
    {
      id: '3',
      title: 'In progress',
      tasks: [
        new GenerateTask(listOfUsers).taskData,
        new GenerateTask(listOfUsers).taskData,
        new GenerateTask(listOfUsers).taskData
      ]
    },

    {
      id: '4',
      title: 'Done',
      tasks: [new GenerateTask(listOfUsers).taskData]
    },
    {
      id: '5',
      tasks: []
    }
  ],
  users: listOfUsers,
  status: PP(),
  title: faker.lorem.sentence(4, 9),
  description: faker.lorem.sentence(4, 9),
  createdOn: faker.date.past()
}

export default GenerateBoard
