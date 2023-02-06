export default httpClient => ({
  registerCandidate: async ({
                              username,
                              firstName,
                              lastName,
                              cpf,
                              phone,
                              email,
                              password,
                              socialNetworking,
                              pcd,
                              cep
                            }) => {
    const response = await httpClient.post('/api/candidate', {
      username,
      firstName,
      lastName,
      cpf,
      phone,
      email,
      password,
      socialNetworking,
      pcd,
      cep
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
  registerManager: async ({
                            username,
                            firstName,
                            lastName,
                            cpf,
                            phone,
                            email,
                            password,
                            cnpj,
                            companyName,
                            tradingName,
                            businessArea
                          }) => {
    const response = await httpClient.post('/api/manager', {
      username,
      firstName,
      lastName,
      cpf,
      phone,
      email,
      password,
      cnpj,
      companyName,
      tradingName,
      businessArea
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
})
