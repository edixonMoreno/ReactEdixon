import React from 'react'
//import {toBeInTheDocument} from "@testing-library/jest-dom";
import PrimeraApp from "../PrimeraApp";
import { shallow } from 'enzyme';


describe('Pruebas de >PrimeraApp />', () => {
    
//     test('debe mostrar el mensaje "Hola soy Goku" ', () => {
        
//         const saludo = "Hola Soy Goku";

//         const {getByText} = render( <PrimeraApp saludo={ saludo } /> );

//         expect( getByText(saludo) ).toBeInTheDocument();
//     })
  
    test('debe mostrar <PrimeraApp /> correctamente ', () => {
        
        const saludo = "Hola Soy Edixon";
        const wrapper = shallow( <PrimeraApp saludo = {saludo} />)

        expect( wrapper ).toMatchSnapshot();
    })
    
    test('debe mostrar el subtitulo enviado por props', () => {
        
        const saludo = "Hola Soy Edixon";
        const subTitulo = "Soy el subtitulo";
        const wrapper = shallow( <PrimeraApp saludo={saludo} subtitulo={subTitulo} />);

        const textoParrafo = wrapper.find("p").text();
       
        expect(textoParrafo).toBe(subTitulo);
    })
    

 })
