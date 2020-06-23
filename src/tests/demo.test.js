describe('Pruebas en el archivo demo.test.js', () => {
  //
  test('mensajes deben ser iguales', () => {
    // Arrange - Arreglar ||  Inicializacion
    const message = 'Hola mundo';

    // Act - Actuar || Estimulo
    const message2 = `Hola mundo`;

    // Assert  -Afirmar  || Observar Comportamiento
    expect(message).toBe(message2);
  });
});
