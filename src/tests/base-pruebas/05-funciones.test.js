import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base-pruebas/05-funciones';

describe('Pruebbas del archivo 05-funciones', () => {
  test('getUser debe retornar un objeto', () => {
    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502',
    };

    const user = getUser();
    // toEqual para comprar objetos
    expect(user).toEqual(userTest);
  });

  test('getUser debe retornar un objeto con un argumento', () => {
    const name = 'jhon';

    const userTest = {
      uid: 'ABC567',
      username: name,
    };

    const user = getUsuarioActivo(name);

    expect(user).toEqual(userTest);
  });
});
