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
    const response = await httpClient.get('/api/interview/candidate')
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
  getInterviewsWithinPeriodByManager: async (
    from, to
  ) => {
    const response = await httpClient.get(`/api/interview/manager/period`, {params: {from, to}})
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
                            candidateObservation,
                            managerObservation,
                            score,
                            interviewStatus
                          }) => {
    const response = await httpClient.patch(`/api/interview/${id}`, {
      candidateObservation,
      managerObservation,
      score,
      interviewStatus
    })
    let errors
    if (response.request.status !== 200) {
      errors = {
        status: response.request.status,
        statusText: response.request.statusText
      }
    }
    return {
      erros: errors
    }
  },
  adminUpdateInterviewStatus: async ({
                                   id,
                                   interviewStatus
                                 }) => {
    const response = await httpClient.patch(`/api/interview/${id}`, {
      interviewStatus
    })
    let errors
    if (response.request.status !== 200) {
      errors = {
        status: response.request.status,
        statusText: response.request.statusText
      }
    }
    return {
      erros: errors
    }
  },
  getInterviews: async () => {
    const response = await httpClient.get(`/api/interview/`)
    let errors
    if (response.request.status !== 200) {
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
})
