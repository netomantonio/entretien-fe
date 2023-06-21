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
  },
  getInterviewsWithinPeriodByCandidate: async (
    from, to
  ) => {
    const response = await httpClient.get(`/api/interview/candidate/period`, {params: {from, to}})
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
  getCandidateNextInterview: async () => {
    const response = await httpClient.get(`/api/interview/candidate/next`)
    let errors = null
    if (!response.data) {
      errors = {
        status: response.request.status,
        statusText: response.request.statusText
      }
    }
    return {
      data: response.data,
      errors: errors
    }
  },
  getCandidateInterviewStats: async () => {
    const response = await httpClient.get(`/api/interview/candidate/stats`)
    let errors = null
    if (!response.data) {
      errors = {
        status: response.request.status,
        statusText: response.request.statusText
      }
    }
    return {
      data: response.data,
      errors: errors
    }
  },
  getInterviewsWithinPeriodByRecruiter: async (
    from, to
  ) => {
    const response = await httpClient.get(`/api/interview/recruiter/period`, {params: {from, to}})
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
  getThisMonth: async (
    from, to
  ) => {
    const response = await httpClient.get(`/api/interview/period`, {params: {from, to}})
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
