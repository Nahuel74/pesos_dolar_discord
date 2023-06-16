const chart = (data) => {
    const chart = "```\n" +
    "Oficial Compra| $" + data[2] + "\n" +
    "Oficial Venta | $" + data[3] + "\n" +
    "Blue Compra   | $" + data[0] + "\n" +
    "Blue Venta    | $" + data[1] + "\n" +
    "Bolsa Compra  | $" + data[6] + "\n" +
    "Bolsa Venta   | $" + data[7] + "\n" +
    "CCL Compra    | $" + data[8] + "\n" +
    "CCL Venta     | $" + data[9] + "\n" +
    "Cripto Compra | $" + data[10] + "\n" +
    "Cripto Venta  | $" + data[11] + "\n" +
    "Solidario     | $" + data[12] + "\n" +
    "```";
    return chart
}

module.exports = { chart }