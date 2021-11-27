import { shallow } from 'enzyme';
import React from 'react'
//import {toBeInTheDocument} from "@testing-library/jest-dom";
import CounterApp from "../CounterApp"


describe('Pruebas de <CounterApp />', () => {
    
//     test('debe mostrar el mensaje "Hola soy Goku" ', () => {
        
//         const saludo = "Hola Soy Goku";

//         const {getByText} = render( <PrimeraApp saludo={ saludo } /> );

//         expect( getByText(saludo) ).toBeInTheDocument();
//     })
  
    test('debe mostrar <CounterApp /> correctamente ', () => {
        
        const value = 10;
        const wrapper = shallow( <CounterApp value = {value} />)

        expect( wrapper ).toMatchSnapshot();
    })
    
    test('debe mostrar el valor por defecto de 100 ', () => {
        const value = "100";
        const wrapped = shallow( <CounterApp value = {value} /> ) 
        const textoValor = wrapped.find("h2").text().trim();
        console.log(textoValor);

        expect( textoValor ).toBe(value);
    })
    
  
    

 })
