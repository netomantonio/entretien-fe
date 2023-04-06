export default httpClient => ({
  getInterviewsByManager: async () => {
    const response = await httpClient.get('/api/interview/manager')
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
  createInterview: async ({
                              cpf,
                              observation,
                            }) => {
    const response = await httpClient.post('/api/interview', {
      candidateCpf: cpf,
      managerObservation: observation,
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
