const UserServices = require('../../api/services/userServices')
const{test,expect} = require('@playwright/test')

test.describe("users Get API test",()=>{


    test("get users by page",async({request})=>{
        const userServices =new UserServices(request)
      const response = await  userServices.getUsers(1)
        console.log(`status : ${response.status()}`)
        console.log(`URL : ${response.url()}`)
        console.log(`CONTENT-TYPE: ${response.headers()['content-type']}`)

        await expect(response.status()).toBe(200)
        
        const jsonData = await response.json()
        console.log(jsonData)
        await expect(jsonData.data.length).toBeGreaterThan(0)
    })
    test("get users by userID",async({request})=>{
        const userServices = new UserServices(request)
        const response = await userServices.getUser(2)
       await  expect(response.status()).toBe(200)
        const jsonData = await response.json()
    await  expect(jsonData.data.id).toBe(2)

    })
})