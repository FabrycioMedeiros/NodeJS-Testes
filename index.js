const somaHorasExtras = (salario, valorHorasExtras) => salario + valorHorasExtras;

const calculaDescontos = (salario, descontos) => salario - descontos;

export {
  somaHorasExtras,
  calculaDescontos,
};

// Arquivos comentados para criação em folhaDePagamento.test.js
// const verifiqueSe = (valor) => {
//   const assercoes = {
//     ehExatamenteIgualA(esperado) {
//       if (valor !== esperado) {
//         throw {};
//       }
//     },
//   };
//   return assercoes;
// };

// const teste = (titulo, funcaoDeTeste) => {
//   try {
//     funcaoDeTeste();
//     console.log(`${titulo} passou!`);
//   } catch {
//     console.error(`${titulo} não passou!`);
//   }
// };

// // const teste = (titulo, esperado, retornado) => {
// //    if (esperado === retornado) {
// //     console.log(`${titulo} passou`);
// //    } else {
// //     console.error(`${titulo} não passou`);
// //    }
// // };

// teste('somaHorasExtras', () => {
//   const esperado = 2500;
//   const retornado = somaHorasExtras(2000, 500);

//   verifiqueSe(retornado).ehExatamenteIgualA(esperado);
// });

// // teste('somaHorasExtras', 2500, somaHorasExtras(2000, 500));

// teste('calculaDesconto', () => {
//   const esperado = 2300;
//   const retornado = calculaDescontos(2500, 200);

//   verifiqueSe(retornado).ehExatamenteIgualA(esperado);
// });

// // teste('calculoDescontos', 2500, calculaDescontos(2000, 300));
