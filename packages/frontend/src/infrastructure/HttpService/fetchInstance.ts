const BASE_URL = 'http://localhost:8800/v1/'

class Fetch {
  static token: string

  static baseHeaders(): HeadersInit {
    const headers = new Headers()

    headers.append('Content-Type', 'application/json')
    headers.append('Accept', 'application/json')
    headers.append('Authorization', `Bearer ${Fetch.token}`)

    return headers
  }

  static async get<Response>(
    path: string,
    { body, headers }: Omit<RequestInit, 'method'>
  ): Promise<Response> {
    const response = await fetch(`${BASE_URL}${path}`, {
      method: 'GET',
      headers: { ...Fetch.baseHeaders, ...headers },
      body
    })

    return response.json()
  }

  static async post<Response>(
    path: string,
    { body, headers }: Omit<RequestInit, 'method'>
  ): Promise<Response> {
    const headers2 = { ...Fetch.baseHeaders, ...headers }
    console.log('headers2')
    console.log(headers2)
    console.log(Fetch.baseHeaders)
    console.log(headers)
    console.log({ ...Fetch.baseHeaders })
    const response = await fetch(`${BASE_URL}${path}`, {
      method: 'POST',
      headers: Fetch.baseHeaders(),
      body
    })

    return response.json()
  }

  static async patch<Response>(
    path: string,
    { body, headers }: Omit<RequestInit, 'method'>
  ): Promise<Response> {
    const response = await fetch(`${BASE_URL}${path}`, {
      method: 'PATCH',
      headers: Fetch.baseHeaders(),
      body: JSON.stringify(body)
    })

    return response.json()
  }

  static async delete<Response>(
    path: string,
    { body, headers }: Omit<RequestInit, 'method'>
  ): Promise<Response> {
    const response = await fetch(`${BASE_URL}${path}`, {
      method: 'DELETE',
      headers: { ...Fetch.baseHeaders, ...headers },
      body: JSON.stringify(body)
    })

    return response.json()
  }
}

export default Fetch
