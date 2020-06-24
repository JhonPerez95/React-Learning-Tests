import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base-pruebas/08-imp-exp';
import heroes from '../../data/heroes';
describe('Pruebas del archivo 08-imp-exp', () => {
  test('Debe retornar un heroe por Id ', () => {
    const id = 1;
    const heroe = getHeroeById(id);

    const heroeData = heroes.find((item) => item.id === id);

    expect(heroe).toEqual(heroeData);
  });

  test('Debe retornar un undefiend si heroe no existe', () => {
    const id = 10;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });

  test('Debe retornar un arreglo con los heroes de Dc ', () => {
    const owner = 'DC';
    const heoresDC = getHeroesByOwner(owner);

    const heroeData = heroes.filter((item) => item.owner === owner);

    expect(heoresDC).toEqual(heroeData);
  });

  test('Debe retornar un arreglo con los heroes de Marvel ', () => {
    const owner = 'Marvel';
    const heoresMar = getHeroesByOwner(owner);

    expect(heoresMar.length).toEqual(2);
  });
});
