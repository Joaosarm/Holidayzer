import express from 'express';
import cors from 'cors';
import { holidays } from "./holidayData.js";

const app = express();
app.use(cors());
const hoje = new Date().toLocaleDateString();

app.get("/holidays", (req, res) => {
    res.send(holidays);
})

app.get("/is-today-holiday", (req, res) => {
    const filteredItems = holidays.filter(item => item.date === hoje);
    console.log(filteredItems);
    if(filteredItems.length>0){
        res.send(`Sim, hoje é ${filteredItems[0].name}`);
    }
    else{
        res.send('Não, hoje não é feriado');
    }
})

app.listen(5000, () => console.log('Servidor Funcionando!'));