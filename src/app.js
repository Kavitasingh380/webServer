const express = require('express');
const path = require('path')
const app = express()

const publicDirectoryPath  = path.join(__dirname,'../public')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.send('<H1>Hello express</H1>')
})

app.get('/help',(req,res)=>{
    res.send('Help Page')
})

app.get('/about',(req,res)=>{
    res.send('About Page')
})

app.get('/json',(req,res)=>{
  res.send([{name:"kavita"},{name:"Sagar"}])
})



app.listen(3000,()=>{
    console.log('Server is up on port 3000 ')
})