import '@testing-library/jest-dom';
import { getSaludo } from '../../base-pruebas/02-template-string';

describe('Pruebas en 02-template-string', () => {
  test('Debe retornar hola Jhon', () => {
    const name = 'jhon';

    const saludo = getSaludo(name);

    expect(saludo).toBe('Hola ' + name + '!');
  });

  test('getSaludo debe retornar Hola Angie si no  hay argumento en el nommbre', () => {
    const saludo = getSaludo();

    expect(saludo).toBe('Hola Angie!');
  });
});
