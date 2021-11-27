import { getImagen } from "../../base/11-async-await"

describe('pruebas con async-await y Fetch', () => {
    
    test('debe retornar la url de una promesa', async() => {
        
        const url = await getImagen();
        console.log(url);
        expect( url.includes("https://") ).toBe(true);
    })
    
})
