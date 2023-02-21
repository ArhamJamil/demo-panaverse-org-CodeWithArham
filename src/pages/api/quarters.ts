import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'fs'



export default function handler(req: NextApiRequest,res: NextApiResponse) {

    fs.readFile(`quarterData/${req.query.slug}.json`, 'utf-8', (err,  data)=>{
        console.log(data)
        console.log(req.query.slug)
        if (err) {
            res.status(500).json({name:"Internal server error"})
        }
        res.status(200).json(JSON.parse(data))
        
    })

}
