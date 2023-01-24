export default httpClient => ({
  register: async ({
    username,
    email,
    role,
    password
  }) => {
    const response = await httpClient.post('/api/auth/signup', {
      username,
      email,
      role,
      password
    })
    let errors = null

    if (!response.data) {
      errors = {
        status: response.request.status,
        statusText: response.request.statusText
      }
    }

    return {
      data: response.data,
      erros: errors
    }
  },
  login: async ({
    username,
    password
  }) => {
    const response = await httpClient.post('/api/auth/signin', {
      username,
      password
    })
    let errors = null

    if (!response.data) {
      errors = {
        status: response.request.status,
        statusText: response.request.statusText
      }
    }

    return {
      data: response.data,
      erros: errors
    }
  }
})
