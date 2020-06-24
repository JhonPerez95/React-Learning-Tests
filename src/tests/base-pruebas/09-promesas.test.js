import '@testing-library/jest-dom';

import { getHeroeByIdAsync } from '../../base-pruebas/09-promesas';
import heroes from '../../data/heroes';

describe(' Probando archivo 09-promesas', () => {
  test('getHeroeByIdAsync debe retornar un heore', (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toEqual(heroes[0]);
      done();
    });
  });

  test(' getHeroeByIdAsync debe retornar un error  ', (done) => {
    const id = 46;

    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe('No se pudo encontrar el héroe');
      done();
    });
  });
});
