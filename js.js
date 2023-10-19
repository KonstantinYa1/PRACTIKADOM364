// //№364 1 
// let input = document.querySelector('input'); 
// let p = document.querySelector('p');

// input.addEventListener('blur', function() {
//     p.textContent += this.value;
// })

// //№364 2
// let button = document.querySelector('button');
// let p = document.querySelector('p');
// let sum = 0;

// button.addEventListener('click',function func() {
//     let inputList = document.querySelectorAll('input');
//     inputList.forEach(function(input) {
//         sum += parseInt(input.value);
//     })
//     p.textContent = sum;

//     this.removeEventListener('click',func)
// })

// //№364 3
// let input = document.querySelector('input');

// input.addEventListener('blur', function() {
//     function getNumbersSum(num){
//         return num.toString().split('').reduce(function(a, b) {
//             return +a + +b;
//         })
//    }

//    console.log(getNumbersSum(input.value))
// })

// // №364 4
// let input = document.querySelector('input');

// input.addEventListener('blur',function() {
//     let inputNumbersList = input.value.split(',').map(el => Number(el));
//     let sum = 0;
//     for (const num of inputNumbersList) {
//         sum += num;
//     }
//     let avg = sum/inputNumbersList.length;
//     console.log(avg)
// })

// // №364 5 
// let inputList = document.querySelectorAll('input')

// inputList[0].addEventListener('blur', function() {
//     let fio = inputList[0].value.split(' ');
//     inputList[1].value = fio[0];
//     inputList[2].value = fio[1];
//     inputList[3].value = fio[2];
// })

// // №364 6
// let input = document.querySelector('input');

// input.addEventListener('blur', function() {
//     let fio = input.value.split(' ');
//     fio = fio.map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     input.value = fio.join(' ');
// })

// // №364 7
// let input = document.querySelector('input')

// input.addEventListener('blur', function() {
//     console.log(input.value.split(' ').length);
// })

// // №364 8
// input = document.querySelector('input');

// input.addEventListener('blur',function() {
//     string = this.value.split('.');
//     input.value = string.reverse().join('-');
// })

// // №364 9
// let input = document.querySelector('input');
// let button = document.querySelector('button')

// button.addEventListener('click',function() {
//     if (input.value == input.value.split('').reverse().join('')) {
//         console.log(true);
//     }
//     else {console.log(false);}
// })

// // №364 10
// let input = document.querySelector('input');

// input.addEventListener('blur', function() {

//     if ('3' in input.value.split('')) {
//         console.log(true);
//     }

//     else {console.log(false);}
// })

// // №364 11
// let pList = document.querySelectorAll('p');
// let button = document.querySelector('button');

// button.addEventListener('click',function () {
//     for (let i = 0; i < pList.length; i++) {
//         pList[i].textContent += i + 1; 
//     }
// })

// // №364 12
// let aList = document.querySelectorAll('a');

// for (let i = 0; i < aList.length; i++) {
//     aList[i].textContent += '(' + aList[i].href + ')';
// }

// // №364 13
// let aList = document.querySelectorAll('a');

// let elem = document.querySelectorAll('a');
// for ( let i = 0; i < elem.length; i++ ) {
//     if (elem[i].href.indexOf('http://') === 0) {
//         elem[i].append('→')
//     }
// }

// // №364 14
// let pList = document.querySelectorAll('p')

// for (const p of pList) {
//     p.addEventListener('click',function() {
//         this.textContent = Number(this.textContent) ** 2;
//     })
// }

// // №364 15
// let daysOfWeek = { 0: 'Воскресенье', 1: 'Понедельник', 2: 'Вторник', 
// 3: 'Среда', 4: 'Четверг', 5: 'Пятница', 6: 'Суббота'};
    
// let input = document.querySelector('input');

// input.addEventListener('blur', function () {
//     let dateArray = input.value.split('.');
//     let date = new Date(dateArray[2], dateArray[1] - 1, dateArray[0]);
//     console.log('date array at 1: ', dateArray[1]);
//     let dayOfWeek = daysOfWeek[date.getDay()];
//     console.log(dayOfWeek);
// });

// // №364 16
// let input = document.querySelector('input');
// let buttonsArray = document.querySelectorAll('button');

// let [plusButt, minusButt] = buttonsArray;

// plusButt.addEventListener('click', function() {
//     input.value = Number(input.value) + 1;   
// });

// minusButt.addEventListener('click', function() {
//     if (input.value <= 0) {
//         input.value = 0;
//     } else {
//         input.value = Number(input.value) - 1;   
//     }
// });

// // №364 17
// let count = 0;
// let input = document.querySelector('input');
// let pList = document.querySelectorAll('p');

// for (let i = 0; i < pList.length; i++) {
//     pList[i].addEventListener('click', function() {
//         count++;
//         input.value = count;
//     });
// }

// // №364 18
// let divsArray = document.querySelectorAll('div');

// for (const div of divsArray) {
//     div.textContent = div.textContent.slice(0, 10) + '...';
// }

// // №364 19
// let input = document.querySelector('input'), 
// button = document.querySelector('button'),
// result = '',
// chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// button.addEventListener('click', function() {
//     for (let i = 0; i < 8; i++) {
//         input.value += chars.charAt(Math.floor(Math.random() * chars.length)); 
//     }
// })

// // №364 20
// let input = document.querySelector('input');
// let button = document.querySelector('button');


// button.addEventListener('click', function() {
//     let inputArray = input.value.split('');
//     let shuffledArray = [...inputArray];

//     for (let i = shuffledArray.length - 1; i > 0; i--) {
//       let j = Math.floor(Math.random() * (i + 1));
//       [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
//     }

//     input.value = shuffledArray.join('');
// })

// // №364 21
// let input = document.querySelector('input');
// input.type = "number";
// let button = document.querySelector('button');
// let p = document.querySelector('p');

// button.addEventListener('click', function() {
//     p.textContent = input.value * 1.8 + 32;
// })

// // №364 22
// let input = document.querySelector('input');
// let button = document.querySelector('button');
// let p = document.querySelector('p');

// button.addEventListener('click', function() {
//     let factorial = 1;
//     for (let i = input.value; i > 1; i--) {
//         factorial *= i; 
//     }
//     p.textContent = factorial;
// })

// // №364 23
// let inputList = document.querySelectorAll('input');
// let button = document.querySelector('button');
// let p = document.querySelector('p');

// let [input1, input2, input3] = inputList;

// button.addEventListener('click', function() {
//     let a = parseFloat(input1.value);
//     let b = parseFloat(input2.value);
//     let c = parseFloat(input3.value);

//     let discriminant = b * b - 4 * a * c;

//     if (discriminant > 0) {
//         let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//         let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//         p.textContent = `x1 = ${x1}, x2 = ${x2}`;
//     } else if (discriminant === 0) {
//         let x = -b / (2 * a);
//         p.textContent = `x = ${x}`;
//     } else {
//         p.textContent = 'нет корней';
//     }
// });

