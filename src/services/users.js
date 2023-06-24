export default httpClient => ({
  getMe: async () => {
    const response = await httpClient.get('/api/candidate/me', {
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
  getCandidateDashboard: async (
    from, to
  ) => {
    const response = await httpClient.get(`/api/candidate/dashboard`, {params: {from, to}})
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
  },
  getAdminDashboard: async (
    from, to
  ) => {
    const response = await httpClient.get(`/api/user/admin/dashboard`, {params: {from, to}})
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
  getManagerDashboard: async (
    from, to
  ) => {
    const response = await httpClient.get(`/api/manager/dashboard`, {params: {from, to}})
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
  getUsers: async() => {
    const response = await httpClient.get(`/api/user`)
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
