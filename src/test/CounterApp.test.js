import { shallow } from 'enzyme';
import React from 'react'
//import {toBeInTheDocument} from "@testing-library/jest-dom";
import CounterApp from "../CounterApp"


describe('Pruebas de <CounterApp />', () => {
    
 
    let wrapper = shallow( <CounterApp />);

    beforeEach( () => {

        wrapper = shallow( <CounterApp />);

    })

    test('debe mostrar <CounterApp /> correctamente ', () => {
        
        const value = 10;
        
        expect( wrapper ).toMatchSnapshot();
    })
    
    test('debe mostrar el valor por defecto de 100 ', () => {
        const value = "100";
        const wrapper = shallow( <CounterApp value = {value} /> ) 
        const textoValor = wrapper.find("h2").text().trim();
        console.log(textoValor);

        expect( textoValor ).toBe(value);
    })
    
    test('debe incrementar con el botón +1 ', () => {
        
        const btnsuma = wrapper.find("button").at(0).simulate("click");

        const textoValor = wrapper.find("h2").text().trim();

        expect( textoValor ).toBe("11");
        
    })
    
    test('debe decrementar con el botón -1 ', () => {
        
        const btnresta = wrapper.find("button").at(2).simulate("click");

        const textoValor = wrapper.find("h2").text().trim();

        expect( textoValor ).toBe("9");

    })

    test('debe resetear el valor por defecto ', () => {
        
        const wrapper = shallow( <CounterApp value = {105} /> )
        
        const btnsuma = wrapper.find("button").at(0).simulate("click");

       const btnreset = wrapper.find("button").at(1).simulate("click");
        
        const textoValor = wrapper.find("h2").text().trim();

        expect( textoValor ).toBe("105");


    })

 })
