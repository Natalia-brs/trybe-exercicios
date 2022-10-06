 
 //-------Calculando a area e perimietro retangulo ----------//
 const base = 5;
 let height = 8;

 const area = base * height;
 const perimeter = area + base + height;

 console.log (area, perimeter);
// --------------------------------------------------------//


//--- criando estruturas if-else com operadores logicos -------//
  const currentHour = 15.00;
  let message = '';
  
    if (currentHour >= 22) {
       message = 'Não deveriamos comer nada, é hora de dormir'
      console.log (message);
    }
    else if (currentHour >= 18  && currentHour < 22) {
       message = 'Rango da noite, vamos jantar :D'
       console.log (message);
    }
     else if (currentHour >= 14 && currentHour < 18) {
       message = 'Vamos fazer um bolo pro café da tarde?'
       console.log (message);
    }
     else if (currentHour >= 11 && currentHour < 14 ) {
        message = 'Hora do almoço!'
        console.log (message);
    }
     else {
       message = 'Hmm, cheiro de café recém-passado'
       console.log (message);
    }
//---------------------------------------------------------------//


//----------------- Exercicio dia da semana ---------------------//
  let weekDay = 'Sabado';

   if (weekDay == 'Segunda-feira' || weekDay == 'Terça-feira' || weekDay == 'Quarta-feira' ||
   weekDay == 'Quinta-feira' || weekDay == 'Sexta-feira') {
       console.log('Oba, mais um dia de aprendizado na Trybe!')
    }
   else {
       console.log ('FINALMENTE, descanso merecido')
   }
//----------------------------------------------------------------//