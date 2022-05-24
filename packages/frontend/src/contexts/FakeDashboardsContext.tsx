import React from 'react'
import GenerateBoard from '../logic/generateBoard'
import GenerateImage from '../logic/generateImage'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type IDashboardsContext = [any[], (dashboards: any[]) => void]

const board1 = GenerateBoard
const board2 = GenerateBoard
const board3 = GenerateBoard

export const dashboardsDefaultValue = [
  {
    id: '1',
    imageCoverUrl: new GenerateImage('1').getImage,
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
    imageCoverUrl: new GenerateImage('2').getImage,
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
    imageCoverUrl: new GenerateImage('3').getImage,
    description: board3.description,
    status: board3.status,
    title: board3.title,
    createdAt: board3.createdOn,
    admin: 'userId',
    columns: board3.columns,
    users: board3.users
  }
]

export const DashboardsContext = React.createContext<IDashboardsContext>([
  dashboardsDefaultValue,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {}
])
