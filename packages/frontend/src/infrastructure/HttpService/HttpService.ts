import { CreateDashboardCommand, DashboardDTO, TASK } from 'shared'

import Fetch from './fetchInstance'

export interface BaseHttpService {
  token: string
  get<Response>(path: string, options?: RequestInit): Promise<Response>
  post<Response>(path: string, options?: RequestInit): Promise<Response>
  patch<Response>(path: string, options?: RequestInit): Promise<Response>
  delete<Response>(path: string, options?: RequestInit): Promise<Response>
}

class HttpService {
  http: BaseHttpService

  constructor() {
    this.http = new Fetch()
  }

  setToken = (token: string) => {
    this.http.token = token
  }

  // TODO change from any to Task type
  getTask = (taskId: string): Promise<any> => this.http.get(`tasks/${taskId}`)
  getAllDashboards = (): Promise<DashboardDTO[]> => this.http.get('dashboards', {})
  createDashboard = (command: CreateDashboardCommand): Promise<DashboardDTO> =>
    this.http.post('dashboards', { body: JSON.stringify(command) })
}

export default new HttpService()
