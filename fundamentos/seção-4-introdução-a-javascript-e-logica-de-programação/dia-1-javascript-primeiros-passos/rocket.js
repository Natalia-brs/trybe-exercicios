 
 // --------- Exercicio 5 - Ângulos internos ------------//
      let a = 35;
      let b = 75;
      let c = 70;

     let soma = a + b + c;

     if (a < 0  || b < 0 || c < 0) {
       console.log ('Valor invalido');
    }
    else if (soma == 180) {
       console.log (true);
    }
    else {
       console.log (false);
    }
//-------------------------------------------------------//


 // ------------- Exercicio 8 - Numero par -------------//
   const num1 = 15;
   const num2 = 3;
   const num3 = 4;

    if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
       console.log (true);
    } 
    else {
       console.log (false)
    }
//-------------------------------------------------------//


//------------------Valor de venda e de custo -----------//
    const custo = 10
    const venda = 20;

    if (custo > 0 && venda > 0) {
       let totalCusto = custo * 0.2;
       let totaLucro = (venda - totalCusto) * 1000;
          console.log (totaLucro);
    }
    else {
         console.log ('Erro, os valores não podem ser negativos');
    }
//-------------------------------------------------------//

//------------------- Calculando imposto -----------------//

let salario =8000;
let inss = 0;
let salariobase = 0
let ir =0;
let = valorIr =0;
let salarioCalc =0;

if (salario <= 1556.94) {
    inss = salario * 0.08;
    salariobase = salario - inss;
    console.log ('Salario de R$: ' + salariobase)
}
 else if (salario >= 1556.95 && salario <= 2594.92) {
      inss = salario * 0.09;
      salariobase = salario - inss
      console.log ('Salario de R$: ' + salariobase)
      
 }
 else if (salario >= 2594.93 && salario <= 5189.82) {
    inss = salario * 0.11
    salariobase = salario - inss
    console.log ('Salario de R$: ' + salariobase)
 }
 else {
     salariobase = salario - 570.88
    console.log ('Salario de R$: ' + salariobase)
 }



 if ( salariobase<= 1903.98) {
    ir = 0;
 }
 else if (salariobase >= 1903.99 && salariobase <= 2826.65) {
    ir = salariobase * 0.075;
    valorIr = ir - 142.80;
    salarioCalc = salariobase - valorIr;
    console.log ('Salario liquido de: R$' + salarioCalc);
 }
else if ( salariobase >= 2826.66 && salariobase <= 3751.05) {
    ir = salariobase * 0.15;
    valorIr = ir - 354.80;
    salarioCalc = salariobase - valorIr;
    console.log ('Salario liquido de: R$' + salarioCalc);
}
else if (salariobase >= 3751.06 && salariobase <= 4664.68 ) {
    ir = salariobase * 0.225;
    valorIr = ir - 636.13;
    salarioCalc = salariobase - valorIr
    console.log ('Salario liquido de: R$' + salarioCalc);
}
else {
    ir = salariobase * 0.275;
    valorIr = ir - 869.36;
    salarioCalc = salariobase - valorIr;
    console.log ('Salario liquido de: R$' + salarioCalc);
}
//-------------------------------------------------------------------//