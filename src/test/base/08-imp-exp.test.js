import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de heroes por Id', () => {
    
    test('Debe retornar un heroe por Id ', () => {
        
    const id = 1;
    const heroe = getHeroeById( id );

    const heroesData = heroes.find( h => h.id === id );

        expect(heroe).toEqual( heroesData);

    })
    
    test('Debe retornar un undefined si el heroe no existe ', () => {
        
        const id = 10;
        const heroe = getHeroeById( id );
    
        expect(heroe).toBe( undefined );
    
        })

    test('Debe retornar un array con los heroes de DC ', () => {
        
            const owner = "DC";
            const heroe = getHeroesByOwner( owner );
            const heroesDC = heroes.filter( h => h.owner === owner);
            expect(heroe).toEqual( heroesDC );
        
            })

    
    test('Debe retornar un array con los heroes de Marvel ', () => {
        
               const owner = "Marvel";
                const heroe = getHeroesByOwner( owner );
                
                expect(heroe.length).toBe( 2 );
            
                })
    

    

})
