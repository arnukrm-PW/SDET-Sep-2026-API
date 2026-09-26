const {userData,modifiedData} = require('../../test-Data/userData')
const {test,expect}=require('@playwright/test')
const UserServices = require('../../api/services/userServices')

test.describe("user update using PUT",()=>{


    test("update User",async ({request})=>{
      const userServices = new UserServices(request)
        const response = await userServices.updateUser(2,modifiedData)
        expect(response.status()).toBe(200)
        const jsonData = await response.json()
        expect(jsonData.name).toBe(modifiedData.name)
        expect(jsonData.job).toBe(modifiedData.job)

})
})
