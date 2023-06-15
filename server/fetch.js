const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))
const cheerio = require('cheerio')

const data2object = async (data) => {
    const dataObject = Object.assign({}, data)
    return dataObject
}

const getData = async () => {
    try {
        const getData = await fetch("https://dolarhoy.com/")
        const html = await getData.text()
        const $ = cheerio.load(html)
        let values = []

        $("div").filter(".val").each(
            (index, element) => {
                values.push(Number($(element).text().replace("$", "")))
            }
        )

        const returnedValue = data2object(values)
        return returnedValue
    }
    catch (error){
        console.error(error);
        throw error
    }
}

module.exports = { getData }