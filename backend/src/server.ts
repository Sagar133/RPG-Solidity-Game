import app from './app'
import { port } from './config'


app.listen(port,()=>{
    console.log(`Server Listening on port ${port}`)
})