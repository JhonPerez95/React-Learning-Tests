import '@testing-library/jest-dom';
import { getImagen } from '../../base-pruebas/11-async-await';

describe(' Pruebas del archivo 11-async-await', () => {
  test('Debe devolver un Url ', async () => {
    const url = await getImagen();

    expect(url.includes('https://')).toBe(true);
  });
});
