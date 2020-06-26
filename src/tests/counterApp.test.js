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

  let wrapper = shallow(<CounterApp value={5} />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp value={5} />);
  });

  test('Renderizado correctamente de <CounterApp/>', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Mostrar por defecto en valor 100 ', () => {
    const wrapper = shallow(<CounterApp value={100} />);
    const counterText = wrapper.find('h2').text().trim();
    expect(counterText).toBe('100');
  });

  test('debe de incrementar con el botón +1', () => {
    const btn = wrapper.find('div.button');
    console.log(btn.html());
    // const counterText = wrapper.find('h2').text().trim();
    // expect(counterText).toBe('6');
  });
});
