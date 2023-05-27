export default httpClient => ({
  getSchedulesByRecruiter: async ({
                                    id
                                  }) => {
    const response = await httpClient.get(`/api/recruiters/schedules/${id}`)
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
  register: async ({
                     agenda
                   }) => {
    const response = await httpClient.post('/api/recruiters/schedules', {
      agenda
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
  delete: async ({
                   id
                 }) => {
    const response = await httpClient.delete(`/api/recruiters/schedules/${id}`)
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
  getAllAvailableSchedules: async (
    from, to
  ) => {
    const response = await httpClient.get(`/api/schedules/period`, {params: {from, to}})
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
