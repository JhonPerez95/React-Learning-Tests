import '@testing-library/jest-dom';
import { retornaArreglo } from '../../base-pruebas/07-deses-arr';

describe('Pruebas del archivo 07-deses-arr', () => {
  test('Debe retornar un String y un numero ', () => {
    const [letras, numeros] = retornaArreglo();

    expect(typeof letras).toBe('string');
    expect(typeof numeros).toBe('number');
  });
});
