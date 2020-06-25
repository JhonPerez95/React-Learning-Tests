import '@testing-library/jest-dom';
import heroes from '../../data/heroes';
import { getHeroeByIdAsync } from '../../base-pruebas/09-promesas';

describe('Pruebas del Archivo 09-Promesas', () => {
  test('Debe retornar un heroe Async ', (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((item) => {
      expect(item).toEqual(heroes[0]);
      done();
    });
  });
  test('Debe retornar un error ', (done) => {
    const id = 15;
    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe('No se pudo encontrar el héroe');
      done();
    });
  });
});
