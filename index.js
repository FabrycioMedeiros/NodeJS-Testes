const somaHorasExtras = (salario, valorHorasExtras) => salario + valorHorasExtras;
somaHorasExtras(2000, 500);

const calculaDescontos = (salario, descontos) => salario

const teste = (titulo, esperado, retornado) => {
   if (esperado === retornado) {
    console.log(`${titulo} passou`);
   } else {
    console.error(`${titulo} não passou`);
   }
};

teste(`somaHorasExtras`, 2500, somaHorasExtras(2000));

teste(`calculoDescontos`, 2500, calculaDescontos(2000));