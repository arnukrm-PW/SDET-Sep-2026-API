const {test,expect}=require('@playwright/test')
const UserServices = require('../../api/services/userServices')

test.describe("user Delete using delete Http",()=>{

    test("user deletion ",async ({request})=>{
       const userServices=new UserServices(request)
        const response = await userServices.deleteUser(2)
        expect(response.status()).toBe(204)
    })
})