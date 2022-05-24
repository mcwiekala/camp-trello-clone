const BASE_URL = 'http://localhost:8800/v1/'

class Fetch {
  accessToken: string
  subscribers: Array<(token: string) => void> = []

  constructor() {
    this.accessToken = localStorage.getItem('token') || ''
  }

  get token(): string {
    const token = this.accessToken || localStorage.getItem('token') || ''

    return token
  }

  set token(token: string) {
    localStorage.setItem('token', token)
    this.accessToken = token
  }

  baseHeaders(): Headers {
    const headers = new Headers()

    headers.append('Content-Type', 'application/json')
    headers.append('Accept', 'application/json')
    headers.append('Authorization', `Bearer ${this.token}`)

    return headers
  }

  async get<Response>(
    path: string,
    { body, headers }: Omit<RequestInit, 'method'>
  ): Promise<Response> {
    const response = await fetch(`${BASE_URL}${path}`, {
      method: 'GET',
      headers: this.baseHeaders(),
      body
    })

    return response.json()
  }

  async post<Response>(
    path: string,
    { body, headers }: Omit<RequestInit, 'method'>
  ): Promise<Response> {
    const response = await fetch(`${BASE_URL}${path}`, {
      method: 'POST',
      headers: this.baseHeaders(),
      body
    })

    return response.json()
  }

  async patch<Response>(
    path: string,
    { body, headers }: Omit<RequestInit, 'method'>
  ): Promise<Response> {
    const response = await fetch(`${BASE_URL}${path}`, {
      method: 'PATCH',
      headers: { ...this.baseHeaders, ...headers },
      body: JSON.stringify(body)
    })

    return response.json()
  }

  async delete<Response>(
    path: string,
    { body, headers }: Omit<RequestInit, 'method'>
  ): Promise<Response> {
    const response = await fetch(`${BASE_URL}${path}`, {
      method: 'DELETE',
      headers: { ...this.baseHeaders, ...headers },
      body: JSON.stringify(body)
    })

    return response.json()
  }
}

export default Fetch
