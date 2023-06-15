const toFixed = (num) => Number(num.toFixed(2))

const buyOficial = (input, num) => `${input} USD Oficial valen ${toFixed(input * num)} ARS para la compra`
 
const sellOficial = (input, num) => `${input} ARS valen ${toFixed(input / num)} USD Oficiales para la venta`

const buyBlue = (input, num) => `${input} USD Blue valen ${toFixed(input * num)} ARS para la compra`

const sellBlue = (input, num) => `${input} ARS valen ${toFixed(input / num)} USD Blue para la venta`

const sellSolidario = (input, num) => `${input} ARS valen ${toFixed(input / num)} USD Solidario para la venta`

const sellPesos = (input) => {
    const inputValue = Number(input)
    const result = toFixed(inputValue + inputValue * 0.75)
    const result2 = toFixed(inputValue * 2)

    return `${inputValue} ARS valen ${result} ARS con 75% de impuestos estándar, o ${result2} ARS si se excedieron los 300 USD mensuales`;
}

const prices2array = (prices) => {

    const values = $(prices).map( (index, element) => { 
        return Number($(element).text().replace(/[^\d.]/g, ''))
    })

    return values
}

export const calc = (prices, inputs) => {

    const functions = [
        buyOficial,
        sellOficial,
        buyBlue,
        sellBlue,
        sellSolidario,
        sellPesos
    ]

    const values = prices2array(prices)
    let result

    if(inputs.filter((index, element) => $(element).val() != "").length > 1){
        return result = "No puedes cargar más de un tipo de cambio por vez"
    }
    
    const activeIndex = $(inputs).filter((index, element) => $(element).val() != "").index(".inputs")

    const index = activeIndex >= 0 && activeIndex < functions.length ? activeIndex : -1

    const selectedFunction = functions[index]

    if(selectedFunction){
        result = selectedFunction($(inputs)[activeIndex].value, values[activeIndex])
    }
    else{
        result = 'Ocurrió un problema, verifica que ingresaste un número válido o actualiza la pestaña'
    }

    return result
}