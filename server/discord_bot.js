const Discord = require('discord.js')
const client = new Discord.Client({ intents: 33281 })
const { calc } = require('./calc')
const { chart } = require('./prices')

const getData = async () => {
    try{
        const web = await fetch('http://localhost:3000/fetch')
        const data = await web.json()
        return data
    }
    catch (error){
        console.error('Error: ', error)
    }
}

const data = async (input, dataIndex) => await getData().then( data => calc(input, data[dataIndex], dataIndex))

/*
    data[x]:
    0: Blue Compra
    1: Blue Venta
    2: Blue Compra
    3: Blue Venta
    4: Oficial Compra
    5: Oficial Venta
    6: Bolsa Compra
    7: Bolsa Venta
    8: CCL Compra
    9: CCL Venta
    10: Cripto Compra
    11: Cripto Venta
    12: Solidario
    13: Pesos compras al extranjero
*/

require("dotenv").config()
const apiKey = process.env.DISCORD_API_KEY

client.once("ready", async() => {
    console.log("El bot está activo")
    
    const channel = await client.channels.fetch("1116906024436240427")
    channel.send({ content: `Estoy activo!` })
})

client.on("interactionCreate" , async(interaction) => {
    if (!interaction.isChatInputCommand()){ return }

    switch (interaction.commandName){
        case 'oficial_compra':
            interaction.reply(await data(interaction.options.get('input').value, 4))
            break
        case 'oficial_venta':
            interaction.reply(await data(interaction.options.get('input').value, 5))
            break
        case 'blue_compra':
            interaction.reply(await data(interaction.options.get('input').value, 0))
            break
        case 'blue_venta':
            interaction.reply(await data(interaction.options.get('input').value, 1))
            break
        case 'solidario_venta':
            interaction.reply(await data(interaction.options.get('input').value, 12))
            break
        case 'pesos_exterior':
            interaction.reply(await data(interaction.options.get('input').value, 13))
            break
        case 'precios':
            interaction.reply(chart(await getData()))
            break
        default:
            break
    }

})

client.login(apiKey)