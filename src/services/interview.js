export default httpClient => ({
  getInterviewsByCandidate: async () => {
    const response = await httpClient.get('/api/candidate/interviews')
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
  },
  deleteInterview: async ({
                            id,
                          }) => {
    const response = await httpClient.delete(`/api/interview/${id}`)
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
  commitInterview: async (
        {
          interviewId,
          scheduleId,
          date
        }) => {
    const response = await httpClient.post(`/api/interview/commit`, {
      interviewId,
      scheduleId,
      date
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
