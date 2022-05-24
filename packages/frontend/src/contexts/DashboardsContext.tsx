import React from 'react'
import { DashboardDTO } from 'shared'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type IDashboardsContext = [any[], (dashboards: DashboardDTO[]) => void]

export const DashboardsContext = React.createContext<IDashboardsContext>([
  [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {}
])
