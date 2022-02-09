import faker from '@faker-js/faker'
import GenerateTask from './generateTask'
import RandomUser from './randomUser'

// board object(columns (which contains tasks), users, status (private or public), title, createdOn)
const Listofusers = [
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
      issues: [new GenerateTask(Listofusers).taskData, new GenerateTask(Listofusers).taskData]
    },
    {
      id: '2',
      title: 'To do',
      issues: [new GenerateTask(Listofusers).taskData]
    },
    {
      id: '3',
      title: 'In progress',
      issues: [
        new GenerateTask(Listofusers).taskData,
        new GenerateTask(Listofusers).taskData,
        new GenerateTask(Listofusers).taskData
      ]
    },

    {
      id: '4',
      title: 'Done',
      issues: [new GenerateTask(Listofusers).taskData]
    },
    {
      id: '5'
    }
  ],
  users: Listofusers,
  status: PP(),
  title: faker.lorem.sentence(4, 9),
  description: faker.lorem.sentence(4, 9),
  createdOn: faker.date.past()
}

export default GenerateBoard
