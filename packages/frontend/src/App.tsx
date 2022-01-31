import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import TaskModal from './components/TaskModal/TaskModal'

export const App: FC = () => (
  <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <TaskModal
              title="✋🏿 Move anything that is actually started here"
              description={`Ideas are created and share here through a card.
Here you can describe what you'd like to accomplish.

For example you can follow three simple questions to create the card related to your idea:

  * Why  ? (Why do you wish to do it ?)
  * What ? (What it  is it, what are the goals, who is concerned)
  * How  ? (How do you think you can do it ? What are the required steps ?)

After creation, you can move your card to the todo list.`}
              coverImageURL="https://timelinecovers.pro/facebook-cover/download/ultra-hd-space-facebook-cover.jpg"
              attachments={[
                {
                  fileName: 'Reasoning by Ranganath Krishnamani',
                  date: new Date('2020-06-05T23:29:35.000Z'),
                  itemUrl:
                    'https://images.unsplash.com/photo-1640622307877-1e40352b9a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                  id: '32390D94-B2EC-4E8C-BE34-2694EC646A31'
                },
                {
                  fileName: 'Gatsby-config.js',
                  date: new Date('2021-06-05T23:29:35.000Z'),
                  id: 'DBEB51E8-7B32-49DF-A31B-E1CB60BB29D8'
                }
              ]}
              comments={[
                {
                  textContent:
                    'The gladdest moment in human life, methinks, is a departure into unknown lands. - Sir Richard Burton',
                  date: new Date('2021-06-05T23:29:35.000Z'),
                  id: 'DBEB71E8-7B32-49DF-A31B-E1CB60BB29D8',
                  userData: {
                    profilePicture: 'string',
                    username: 'string',
                    uuid: 'DBEB51E8-7B32-49DF-A31B-E1CB60AB29D9',
                    role: 'user'
                  }
                },
                {
                  textContent:
                    'The gladdest moment in human life, methinks, is a departure into unknown lands. - Sir Richard Burton',
                  date: new Date('2091-07-05T23:29:35.000Z'),
                  id: 'DBEB71E8-8B32-49AF-A31B-E1CB60BB29D8',
                  userData: {
                    username: 'cos',
                    uuid: 'DBEB51E8-7B32-49DF-A31B-E1CB60AB29D9',
                    role: 'user'
                  }
                }
              ]}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
)
