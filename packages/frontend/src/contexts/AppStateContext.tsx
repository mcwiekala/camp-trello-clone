import React from 'react'

export type AppState = {
  token: string
}

export type IAppContext = [AppState, (dashboards: Partial<AppState>) => void]

const appDefaultValue: AppState = {
  token: ''
}

export const AppContext = React.createContext<IAppContext>([
  appDefaultValue,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {}
])
