const {test,expect}=require('@playwright/test')
const UserServices = require('../../api/services/userServices')
const {userData,modifiedData} = require('../../test-Data/userData')
const { request } = require('node:http')

test.describe('create user update user and delete user with chanining ',()=>{

    test("chaining method",async({request})=>{
const userServices = new UserServices(request)
const response=await userServices.createUser(userData)
console.log(`STATUS : ${response.status()}`)
console.log(`STATUS TEXT : ${response.statusText()}`)
console.log(`TEXT : ${await response.text()}`)

expect(response.status()).toBe(201)        
const jsonData = await response.json()
       const  userid = jsonData.id
        console.log(`New Userid :  ${userid}`)
        expect(userid).toBeDefined()

        //udpate same userID
const updateResponse =await  userServices.updateUser(userid,modifiedData)
expect(updateResponse.status()).toBe(200)
const updatejsonData=await updateResponse.json()
console.log(`updated JsonData: ${ updatejsonData}`)
expect(updatejsonData.name).toBe(modifiedData.name)
expect(updatejsonData.job).toBe(modifiedData.job)

//delete same userID
const deleteResponse=await userServices.deleteUser(userid)
expect(deleteResponse.status()).toBe(204)

    })
})
