const express = require('express')
const app = express()
const { getData } = require("./fetch")

app.get('/fetch', async (req, res) => {
    try {
        const data = await getData()
        res.send(await data)
    } 
    catch (error) {
        console.error(error)
        res.status(500).send('Error occurred during scraping.')
    }
})

app.listen(3000, async () => {
    console.clear()
    console.log(`Server is running on: http://localhost:3000/`)
    require("./discord_bot")
})