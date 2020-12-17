const { RESTDataSource } = require('apollo-datasource-rest');

class AccountDataRepositoryAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://movilepay-account-data-repository.aws.dev.k8s.ifood-devel.com.br'
  }

  async getBusinessAccountByAccountReference(accountReference) {
    const response = await this.get('/accounts/business/'+accountReference)
    const reduced = this.accountReducer(response)
    return reduced
  }
  
  accountReducer(businessAccount) {
    return {
      accountReference: businessAccount.account_reference,
      accountSetupStatus: businessAccount.account_setup_status,
      accountStatus: businessAccount.account_status,
      accountType: businessAccount.account_type,
      businessName: businessAccount.business_name,
      companyDocument: businessAccount.company_document,
      companyType: businessAccount.company_type,
      companyAddresses: businessAccount.company_addresses.map(i => {
        return {
          id: i.id,
          addressType: i.address_type,
          city: i.city,
          complement: i.complement,
          countryCode: i.country_code
        }
      })
    }
  }
  
}

module.exports = AccountDataRepositoryAPI;
