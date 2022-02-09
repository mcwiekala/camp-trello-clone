import React from 'react'
import GenerateBoard from '../logic/generateBoard'

export type IDashboardsContext = [any[], () => void]

const board1 = GenerateBoard
const board2 = GenerateBoard

export const dashboardsDefaultValue = [
  {
    id: '1',
    description: board1.description,
    status: board1.status,
    title: board1.title,
    createdAt: board1.createdOn,
    admin: 'userId',
    columns: board1.columns,
    users: board1.users
  },
  {
    id: '2',
    description: board2.description,
    status: board2.status,
    title: board2.title,
    createdAt: board2.createdOn,
    admin: 'userId',
    columns: board2.columns,
    users: board2.users
  },
  {
    id: '3',
    description: 'desac1',
    status: 'private',
    title: 'title',
    createdAt: '',
    admin: 'userId',
    columns: [
      {
        id: '1',
        title: '1',
        tasks: [
          {
            id: '1',
            title: '1',
            description: '1',
            imageCoverUrl: '',
            attachments: [{}],
            assignees: [{}],
            comments: [{}]
          }
        ]
      },
      {
        id: '2',
        title: 'title2',
        tasks: [
          {
            id: '3',
            title: 'title task 3',
            description: 'desc',
            imageCoverUrl: '',
            attachments: [{}],
            assignees: [{}],
            comments: [{}]
          }
        ]
      }
    ],
    users: []
  }
]

export const DashboardsContext = React.createContext<IDashboardsContext>([
  dashboardsDefaultValue,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {}
])
