import { TASK } from 'shared'

import Fetch from './fetchInstance'

export interface BaseHttpService {
  get<Response>(path: string, options?: RequestInit): Promise<Response>
  post<Response>(path: string, options?: RequestInit): Promise<Response>
  patch<Response>(path: string, options?: RequestInit): Promise<Response>
  delete<Response>(path: string, options?: RequestInit): Promise<Response>
}

class HttpService {
  http: BaseHttpService

  constructor() {
    this.http = Fetch
  }

  // TODO change from any to Task type
  getTask = (taskId: string): Promise<any> => this.http.get(`/${TASK}/${taskId}`)
}

export default new HttpService()
