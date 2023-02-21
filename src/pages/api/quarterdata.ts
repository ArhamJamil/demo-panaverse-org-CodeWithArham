import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'fs'


export default async function handler(req: NextApiRequest,res: NextApiResponse) {
    
    let data = await fs.promises.readdir("quarterData")
    let myFile
    let allData = []
    for (let index = 0; index < data.length; index++) {
        const item = data[index]
        console.log(item)
        myFile = await fs.promises.readFile('quarterData/'+item, 'utf-8')
        console.log(myFile)
        allData.push(JSON.parse(myFile))
        
    }
    res.status(200).json(allData)
}