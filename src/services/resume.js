export default httpClient => ({
  getMyResume: async () => {
    const response = await httpClient.get(`/api/candidate/resume`)
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
  saveMyResume: async (resume) => {
    const response = await httpClient.put(`/api/candidate/resume`, resume)
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
