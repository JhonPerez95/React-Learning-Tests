import React from 'react';

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import CounterApp from '../components/CounterApp/CounterApp';

describe('Pruebas al componente <CounterApp>', () => {
  test('Debe enviar un numero por parametro Props', () => {
    const num = 4;

    const { getByText } = render(<CounterApp value={num} />);

    // expect(getByText(num)).toBeInTheDocument();
  });
});
