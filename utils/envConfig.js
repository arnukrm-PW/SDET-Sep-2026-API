const dotenv = require('dotenv')
const path = require('path')
dotenv.config({path:path.resolve(__dirname,"../.env")})


const BASE_API_URL=process.env.base_api_url
const API_token=process.env.API_token


console.log(`base_api_url : ${BASE_API_URL}`)
module.exports={BASE_API_URL,API_token}