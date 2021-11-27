
import "@testing-library/jest-dom";

import { getSaludo } from "../../base/02-template-string"


describe('Pruebas en 02-template-string.js', () => {
    test('prueba en el método getSaludo()', () => {
        
        const nombre = "Edixon";

        const saludo = getSaludo(nombre);

        expect( saludo ).toBe( "Hola " + nombre)
    

    })

    test('El valor por defecto del saludo debe ser Carlos', () => {
        
        const saludo = getSaludo();

        expect( saludo ).toBe( "Hola Carlos" )
     })
    
    
})
