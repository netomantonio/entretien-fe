export default httpClient => ({
  getInterviewsByRecruiter: async () => {
    const response = await httpClient.get('/api/recruiters/interviews')
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
      recruiterObservation: observation,
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
  },
  getInterviewById: async ({
                            id,
                          }) => {
    const response = await httpClient.get(`/api/interview/${id}`)
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
  updateInterview: async ({
    id,
    interviewRequest: commitObservationInterviewRequest,
  }) => {
    console.log("não deveria chegar aqui")
    const response = await httpClient.patch(`/api/interview/${id}`, {
      commitObservationInterviewRequest: commitObservationInterviewRequest
    })
    let errors
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
