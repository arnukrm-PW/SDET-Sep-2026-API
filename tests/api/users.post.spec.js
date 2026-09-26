const UserServices = require('../../api/services/userServices')
const {test,expect}=require('@playwright/test')
const {userData} = require('../../test-Data/userData')

test.describe("user POST methods",()=>{

test("create user using POST http",async ({request})=>{
    const userServices = new UserServices(request)
   const response = await  userServices.createUser(userData)
    await expect(response.status()).toBe(201)
    const jsonData = await response.json()
    await console.log(jsonData)
    expect(jsonData.name).toBe(userData.name)
    expect(jsonData.job).toBe(userData.job)

})



})