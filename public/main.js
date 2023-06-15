import {clear, print} from "./js/print.js"

$('#app').html(`
    <table>
        <thead>
            <tr>
                <th colspan="2">Dólar 'Oficial'</th>
                <th colspan="2">Dólar 'Blue'</th>
                <th>Dólar 'Solidario'</th>
                <th>Pesos (Steam, compras al exterior, etc.)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Compra</td>
                <td>Venta</td>
                <td>Compra</td>
                <td>Venta</td>
                <td>Venta</td>
                <td></td>
            </tr>
            <tr> 
                
            <!-- 
                Dolar[x]:
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
            -->
                <td class='values'>
                    ${data[4]}
                </td>
                <td class='values'>
                    ${data[5]}
                </td>
                <td class='values'>
                    ${data[0]}
                </td>
                <td class='values'>
                    ${data[1]}
                </td>
                <td class='values'>
                    ${data[12]}
                </td>                
                <td class='values'>
                    75% (o 100%)
                </td>
            </tr>
            <tr>
                <td> <input type='number' min='0' placeholder='Dolar Oficial a Pesos' class='inputs'></td>
                <td> <input type='number' min='0' placeholder='Pesos  a Dolar Oficial' class='inputs'></td>
                <td> <input type='number' min='0' placeholder='Dolar Blue a Pesos' class='inputs'></td>
                <td> <input type='number' min='0' placeholder='Pesos a Dolar Blue' class='inputs'></td>
                <td> <input type='number' min='0' placeholder='Pesos a Dolar "Solidario"' class='inputs'></td>
                <td> <input type='number' min='0' placeholder='Pesos a Pesos' class='inputs'></td>
            </tr>
            <tr>
                <td colspan='6'> <button id='clear'> Ø </button> <button id="calc"> = </button> </td>
            </tr>
            <tr>
            <td colspan='6' id='td-result'><p></p></td> 
            </tr>
        </tbody>
    </table>
`)
const clearButton = $("#clear")
const calcButton = $("#calc")
const inputs = $(".inputs")

clearButton.on("click", clear)
calcButton.on("click", print)

inputs.on("keyup", (event) => {
    if(event.keyCode == 13){
        print()
    }
})