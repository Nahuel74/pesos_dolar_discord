require("dotenv").config()

const { REST, Routes, ApplicationCommandOptionType} = require("discord.js")

const commands = [
    {
        name: 'oficial_compra',
        description: 'Verifica la cantidad de dólares que ingreses, a su valor oficial en pesos',
        options: [
            {
            name: 'input',
            description: 'Ingresa la cantidad de dólares a calcular',
            type: ApplicationCommandOptionType.Number,
            required: true
            }
        ]
    },
    {
        name: 'oficial_venta',
        description: 'Verifica la cantidad de pesos que ingreses, a su valor oficial en dólares',
        options: [
            {
            name: 'input',
            description: 'Ingresa la cantidad de pesos a calcular',
            type: ApplicationCommandOptionType.Number,
            required: true
            }
        ]
    },
    {
        name: 'blue_compra',
        description: 'Verifica la cantidad de dólares que ingreses, a su valor blue en pesos',
        options: [
            {
            name: 'input',
            description: 'Ingresa la cantidad de dólares a calcular',
            type: ApplicationCommandOptionType.Number,
            required: true
            }
        ]
    },
    {
        name: 'blue_venta',
        description: 'Verifica la cantidad de pesos que ingreses, a su valor oficial en dólares',
        options: [
            {
            name: 'input',
            description: 'Ingresa la cantidad de pesos a calcular',
            type: ApplicationCommandOptionType.Number,
            required: true
            }
        ]
    },
    {
        name: 'solidario_venta',
        description: 'Verifica la cantidad de pesos que ingreses, a su valor en dólares "solidarios"',
        options: [
            {
            name: 'input',
            description: 'Ingresa la cantidad de pesos a calcular',
            type: ApplicationCommandOptionType.Number,
            required: true
            }
        ]
    },
    {
        name: 'pesos_exterior',
        description: 'Verifica la cantidad de pesos que ingreses a su valor con impuestos a compras al exterior',
        options: [
            {
            name: 'input',
            description: 'Ingresa la cantidad de pesos a calcular',
            type: ApplicationCommandOptionType.Number,
            required: true
            }
        ]
    }
]

const rest = new REST({ version: "10"}).setToken(process.env.DISCORD_API_KEY)

const registerCommands = async () => {
    try {
        console.log("Registering slash commands")
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands }
        )
        console.log("Slash commands registered")
    }
    catch(error){
        console.log(error)
    }
} 

registerCommands()