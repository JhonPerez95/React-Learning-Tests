import React from 'react';

import '@testing-library/jest-dom';
// import { render } from '@testing-library/react';
import CounterApp from '../components/CounterApp/CounterApp';
import { shallow } from 'enzyme';

describe('Pruebas al componente <CounterApp>', () => {
  // test('Debe enviar un numero por parametro Props', () => {
  //   const num = 4;
  //   const { getByText } = render(<CounterApp value={num} />);
  //   // expect(getByText(num)).toBeInTheDocument();
  // });

  test('Renderizado correctamente de <CounterApp/>', () => {
    const count = 5;
    const wrapper = shallow(<CounterApp value={count} />);
    expect(wrapper).toMatchSnapshot();
  });
});
