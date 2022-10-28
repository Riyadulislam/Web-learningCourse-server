const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 7000;

d

const details=require('./data/coursedetails.json')
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/course', (req, res) => {
        res.send(details)
    })
app.get('/course/:id',(req,res)=>{
    const id=req.params.id;
    console.log(id)
    const selectedNews=details.find(n=>n.id==id);
     res.send(selectedNews)
})



app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })
      


