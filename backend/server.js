import express from 'express'
import colors from 'colors'

const app = express();
app.get('/',(req,res)=>{
    res.send("<h1>Welcome to the Express Server</h1>");
})
console.log("Hello World".green);
const PORT = 8000;

app.listen(PORT, () =>{console.log(`Server is running on port ${PORT}`.bgBlue)});