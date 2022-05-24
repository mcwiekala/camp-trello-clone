import { ColumnDTO } from 'shared'
import faker from '@faker-js/faker'

const initialColumns: ColumnDTO[] = [
  {
    id: faker.datatype.uuid(),
    order: 1,
    title: 'Backlog',
    tasks: []
  },
  {
    id: faker.datatype.uuid(),
    order: 2,
    title: 'To do',
    tasks: []
  },
  {
    id: faker.datatype.uuid(),
    order: 3,
    title: 'In progress',
    tasks: []
  },
  {
    id: faker.datatype.uuid(),
    order: 4,
    title: 'Done',
    tasks: []
  }
]

export default initialColumns
