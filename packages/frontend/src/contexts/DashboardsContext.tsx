import React, { FC, useEffect, useState } from 'react'
import { DashboardDTO } from 'shared'
import httpService from '../infrastructure/HttpService/HttpService'

// SETTER
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type IDashboardsContext = [DashboardDTO[], (dashboards: DashboardDTO[]) => void]

// eslint-disable-next-line import/no-mutable-exports
export let dashboards: DashboardDTO[] = []

const loader: any = () => {
  const getData = () => {
    httpService.getAllDashboards().then((result: DashboardDTO[]) => {
      console.log(`response ${result}`)
      dashboards = result
    })
  }
}

export const DashboardsContext = React.createContext<IDashboardsContext>([
  [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {}
])
