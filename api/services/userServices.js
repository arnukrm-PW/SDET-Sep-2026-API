const ApiClients = require('../clients/apiClients')
class UserServices{
    constructor(request){
        this.ApiClients = new ApiClients(request)
    }
    async getUsers(page=1){
        return await this.ApiClients.get(`https://reqres.in/api/users?page=${page}`)
    }
    async getUser(userID){
        return await this.ApiClients.get(`https://reqres.in/api/users/${userID}`)
    }
    async createUser(userData){
        return await this.ApiClients.post('https://reqres.in/api/users',{data:userData})
    }
     async updateUser(userID,userData){
        return await this.ApiClients.put(`https://reqres.in/api/users/${userID}`,{data:userData})
    }
     async deleteUser(userID){
        return await this.ApiClients.delete(`https://reqres.in/api/users/${userID}`)
    }

}
module.exports=UserServices