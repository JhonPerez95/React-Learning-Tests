const nombre = 'Jhon';
const apellido = 'Perez';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

// console.log( nombreCompleto );

export function getSaludo(nombre = 'Angie') {
  return 'Hola ' + nombre + '!';
}

// console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );
