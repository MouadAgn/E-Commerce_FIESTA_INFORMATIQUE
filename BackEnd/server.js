const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API Backend pour le site e-commerce');
});

app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
});
