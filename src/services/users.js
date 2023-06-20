export default httpClient => ({
  getMe: async () => {
    const response = await httpClient.get('/api/user/me', {
      headers: {
        'Content-Type': 'application/json',
      }
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
      errors: errors
    }
  },
  updateCandidate: async (
    username,
    firstName,
    lastName,
    phone,
    email,
    birthDay,
    socialNetworking,
    pcd,
    cep
  ) => {
    const response = await httpClient.put(`/api/candidate`,
      username,
      firstName,
      lastName,
      phone,
      email,
      birthDay,
      socialNetworking,
      pcd,
      cep
    )
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
  getCandidateResumeLastUpdate: async () => {
  const response = await httpClient.get(`/api/candidate/resume/last-update`)
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
  getRecruiterDashboard: async (
    from, to
  ) => {
    const response = await httpClient.get(`/api/recruiters/dashboard`, {params: {from, to}})
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
  }
})
