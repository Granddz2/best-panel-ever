const { Client ,Events, Partials , EmbedBuilder } = require('discord.js');
const client = new Client({ 
    intents : 131071, 
    partials : [Partials.Channel,Partials.User]
});

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

const { prefix } = require("./config.json");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
}).login(process.env.token).catch(err => console.error(err));