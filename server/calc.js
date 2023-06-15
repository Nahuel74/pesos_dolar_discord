const toFixed = (num) => Number(num.toFixed(2))

const buyOficial = (input, data) => `${input} USD Oficial valen ${toFixed(input * data)} ARS para la compra`
 
const sellOficial = (input, data) => `${input} ARS valen ${toFixed(input / data)} USD Oficiales para la venta`

const buyBlue = (input, data) => `${input} USD Blue valen ${toFixed(input * data)} ARS para la compra`

const sellBlue = (input, data) => `${input} ARS valen ${toFixed(input / data)} USD Blue para la venta`

const sellSolidario = (input, data) => `${input} ARS valen ${toFixed(input / data)} USD Solidario para la venta`

const functionNotSupported = () => `La función todavía no está soportada`

const sellPesos = (input, data) => {
    const inputValue = Number(input)
    const result = toFixed(inputValue + inputValue * 0.75)
    const result2 = toFixed(inputValue * 2)

    return `${inputValue} ARS valen ${result} ARS con 75% de impuestos estándar, o ${result2} ARS si se excedieron los 300 USD mensuales`;
}

const functions = [
    buyBlue,
    sellBlue,
    buyBlue,
    sellBlue,
    buyOficial,
    sellOficial,
    functionNotSupported,
    functionNotSupported,
    functionNotSupported,
    functionNotSupported,
    functionNotSupported,
    functionNotSupported,
    sellSolidario,
    sellPesos
]

const calc = (input, data, dataIndex) => {
    const selectedFunction = functions[dataIndex]

    return selectedFunction(input, data)
}

module.exports = { calc } 