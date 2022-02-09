import faker from '@faker-js/faker'
import GenerateTask from './generateTask'
import RandomUser from './randomUser'

// board object(columns (which contains tasks), users, status (private or public), title, createdOn)
let listOfUsers = [
  new RandomUser().getUser,
  new RandomUser().getUser,
  new RandomUser().getUser,
  new RandomUser().getUser,
  new RandomUser().getUser,
  new RandomUser().getUser,
  new RandomUser().getUser,
  new RandomUser().getUser,
  new RandomUser().getUser,
  new RandomUser().getUser,
  new RandomUser().getUser,
  new RandomUser().getUser
]

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
  columns: [
    {
      id: '11',
      title: 'Backlog',
      issues: [new GenerateTask(listOfUsers).taskData, new GenerateTask(listOfUsers).taskData]
    },
    {
      id: '2',
      title: 'To do',
      issues: [new GenerateTask(listOfUsers).taskData]
    },
    {
      id: '3',
      title: 'In progress',
      issues: [
        new GenerateTask(listOfUsers).taskData,
        new GenerateTask(listOfUsers).taskData,
        new GenerateTask(listOfUsers).taskData
      ]
    },

    {
      id: '4',
      title: 'Done',
      issues: [new GenerateTask(listOfUsers).taskData]
    },
    {
      id: '5'
    }
  ],
  users: listOfUsers,
  status: PP(),
  title: faker.lorem.sentence(4, 9),
  description: faker.lorem.sentence(4, 9),
  createdOn: faker.date.past()
}

export default GenerateBoard
