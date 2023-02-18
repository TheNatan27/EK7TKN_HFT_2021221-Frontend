import express, {response} from 'express';
import path from 'path';
import axios from 'axios';

const backendIp = process.env.BACKEND_IP || 'localhost';
const backendPort = process.env.BACKEND_PORT || '5000';
const frontendIp = process.env.FRONTEND_IP || 'localhost' ;
const frontendPort = process.env.FRONTEND_PORT || '1337';

const backendConnection = `http://${backendIp}:${backendPort}`;
const frontendConnection = `http://${frontendIp}:${frontendPort}`;


const app = express();

app.get('/main', async (request, response) => {
    response.sendFile(path.join(__dirname, './index.html'))
})

app.get('/', async (request, response) => {
    response.json('hello world')
} )

async function getUsers() {
    try {
        const response = await axios.get(`${backendConnection}/user`)
        console.log(response)
    } catch (error) {
        console.log(error)
    }    
}

app.listen(frontendPort, async () => {
    console.log(`Listening on ${frontendConnection}`)
});
