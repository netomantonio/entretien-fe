export default httpClient => ({
  getMeCandidate: async () => {
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
  updateManager: async (
    managerUpdateRequest
  ) => {
    const response = await httpClient.put(`/api/manager`,
      {managerUpdateRequest: managerUpdateRequest}
    )
    let errors = null
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
  updateRecruiter: async (
    recruiterUpdateRequest
  ) => {
    const response = await httpClient.put(`/api/recruiters`,
      {recruiterUpdateRequest: recruiterUpdateRequest}
    )
    let errors = null
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
  getMeRecruiter: async () => {
    const response = await httpClient.get('/api/recruiters/me', {
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
  getMeManager: async () => {
    const response = await httpClient.get('/api/manager/me', {
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
  getMeAdmin: async () => {
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
  updateAdmin: async (
    firstName,
    lastName,
    phone,
    email,
    birthDay,
  ) => {
    const response = await httpClient.put('/api/user', {
      firstName,
      lastName,
      phone,
      email,
      birthDay,
    })
    let errors = null
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
  }



})
