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
  registerRecruiter: async ({
                              username,
                              firstName,
                              lastName,
                              cpf,
                              phone,
                              email,
                              password,
                              professionalRecord,
                              presentation,
                              cnpj,
                              specialities
                            }) => {
    const response = await httpClient.post('/api/recruiters', {
      username,
      firstName,
      lastName,
      cpf,
      phone,
      email,
      password,
      professionalRecord,
      presentation,
      cnpj,
      specialities
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
                            operationArea
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
      operationArea
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
