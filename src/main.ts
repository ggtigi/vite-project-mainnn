import './style.css'
console.log('test')

//  дз 1

// var name = prompt('Введите ваше имя');
// alert('Привет, ' + name + '');


//      дз2

//         const currentYear = new Date().getFullYear();
//         var birthYear = prompt('Введите год вашего рождения');
//         var age = currentYear - birthYear;
//         alert('Вам ' + age + ' лет');




//      дз3

//         var sideLength = prompt("Введите длину стороны квадрата");
//         var perimeter = 4 * sideLength;
//         alert("Периметр квадрата равен " + perimeter);


//      дз4

//         var radius = prompt("Введите радиус окружности");
//         var area = Math.PI * radius * radius;
//         alert("Площадь окружности равна " + area);


//      дз5

//         var distance = prompt("Введите расстояние между городами в км");
// var hours = prompt("Введите время в пути в часах");
// var speed = distance / hours;
// alert("Необходимо двигаться со скоростью " + speed + " км/ч");


//      дз6

//         const exchangeRate = 0.91;
//         var dollar = prompt('Введите сумму в долларах')
//         var evro = dollar  * exchangeRate
//         alert('Сумма евро:' + evro)



//      дз7

//         var flashDriveSize = prompt("Введите объем флешки в Гб");
// var fileSize = 820;
// var filesCount = Math.floor(flashDriveSize * 1024 / fileSize);
// alert("На флешку поместится " + filesCount + " файлов");


//      дз10

//         var flashDriveSize = prompt("Введите объем флешки в Гб");
// var fileSize = 820;
// var filesCount = Math.floor(flashDriveSize * 1024 / fileSize);
// alert("На флешку поместится " + filesCount + " файлов");


//      пз1

// let number = +(prompt("Введите число:") as string);
// let result = Math.pow(number, 2);
// alert("Результат возведения во 2-ю степень: " + result);


//      пз2

// let number1 = +(prompt("Введите первое число:") as string);
// let number2 = prompt("Введите второе число:");
// let average = (parseFloat(number1) + parseFloat(number2)) / 2;
// alert("Среднее арифметическое: " + average);


//      пз3

// let side = +prompt("Введите длину стороны квадрата:");
// let area = Math.pow(parseFloat(side), 2);
// alert("Площадь квадрата: " + area);


//      пз4

//         const milesPerKilometer = 0.621371;
//         let kilometers = prompt("Введите значение в километрах:");
//         let miles = parseFloat(kilometers) * milesPerKilometer;
//         alert("Значение в милях: " + miles);


//      пз5

//         let number1 = prompt("Введите первое число:");
//         let number2 = prompt("Введите второе число:");

//         let addition = parseFloat(number1) + parseFloat(number2);
//         let subtraction = parseFloat(number1) - parseFloat(number2);
//         let multiplication = parseFloat(number1) * parseFloat(number2);
//         let division = parseFloat(number1) / parseFloat(number2);

//         alert("Результат сложения: " + addition);
//         alert("Результат вычитания: " + subtraction);
//         alert("Результат умножения: " + multiplication);
//         alert("Результат деления: " + division);


//      пз6

//         let a = prompt("Введите значение a:");
//         let b = prompt("Введите значение b:");

//         let x = -parseFloat(b) / parseFloat(a);
//         alert("Значение x: " + x);


//      пз7

// let currentHours = '20'
// let currentMinutes = '22'

// const totalMinutesPerDay = 24 * 60;
// let remainingMinutes = totalMinutesPerDay - (parseFloat (currentHours) * 60 + parseFloat (currentMinutes));

// let remainingHours = Math.floor(remainingMinutes / 60);
// let remainingMinutesOutput = remainingMinutes % 60;

// console.log("Осталось " + remainingHours + " часов " + remainingMinutesOutput + " минут до следующего дня.");


//1 на уроке
// let age: number = 25
// if (age > 14 && age < 90) {
//     console.log ('всё ок')
// } else {
//     console.log ('не получается')
// }


// 2 на уроке


// age = 25
// if (!(age < 14 &&  age > 90)) {
//     console.log ('всё ок')
// } else {
//     console.log ('не получается')
// }

// age = 25
// if (age < 14 && age > 90) {
//     console.log ('всё ок')
// } else {
//     console.log ('не получается')
// }






// дз2.1 Запросить у пользователя его возраст и определить, кем он
// является: ребенком (0–2), подростком (12–18), взрослым
// (18_60) или пенсионером (60– ...).
// let age = parseInt(prompt('Введите ваш возраст:', '0') as string)

// if (age >= 0 && age <= 2) {
//   console.log("Вы ребенок");
// } else if (age >= 12 && age <= 18) {
//   console.log("Вы подросток");
// } else if (age > 18 && age <= 60) {
//   console.log("Вы взрослый");
// } else if (age > 60) {
//   console.log("Вы пенсионер");
// } else {
//   console.log("Некорректный возраст");
// }



// дз2.2 Запросить у пользователя число от 0 до 9 и вывести ему
// спецсимвол, который расположен на этой клавише (1–!,
// 2–@, 3–# и т. д).
// let number = prompt("Введите число от 0 до 9:");
// switch (number) {
//     case '0':
//         console.log(")");
//         break;
//     case '1':
//         console.log("!");
//         break;
//     case '2':
//         console.log("@");
//         break;

//     case '3':
//         console.log('#')
//         break

//     case '4':
//         console.log('$')
//         break

//     case '5':
//         console.log('%')
//         break
//     case '6':
//         console.log('^')
//         break

//     case '7':
//         console.log('&')
//         break

//     case '8':
//         console.log('*')
//         break
//         case '9':
//             console.log('(')
//             break





//     default:
//         console.log("Некорректное число");
// }




// дз2.4  Запросить у пользователя год и проверить, високосный он
// или нет. Високосный год либо кратен 400, либо кратен 4 и
// при этом не кратен 100

// let year = parseInt(prompt('Введите год', '0') as string)
// if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
//   console.log('Год високосный');
// } else {
//   console.log('Год не високосный');
// }



// 2.3 Запросить у пользователя трехзначное и число и проверить,
// есть ли в нем одинаковые цифры.

// const userInput: number = 333

// if (userInput >= 100 && userInput <= 999) {
//     const strUserInput: string = userInput.toString();

//     if (strUserInput == strUserInput || strUserInput == strUserInput || strUserInput == strUserInput) {
//         console.log('В числе ${userInput} есть одинаковые числа')
//     } else {
//         console.log('В числе ${userInput} нет одинаковых чисел')
//     }
// } else {
//     console.log("Вы ввели некорректное трехзначное число")

// }



// Дз3 
// Запросить у пользователя трехзначное число и проверить,
// есть ли в нем одинаковые цифры.

// let number = 222
// if (number > 99 || number < 1000) {
//     switch (number) {
//         case 111:
//             console.log("Тут есть одинаковые числа!");
//             break;
//         case 222:
//             console.log("Тут есть одинаковые числа!");
//             break;
//         case 333:
//             console.log("Тут есть одинаковые числа!");
//             break;

//         case 444:
//             console.log('Тут есть одинаковые числа!')
//             break

//         case 555:
//             console.log('Тут есть одинаковые числа!')
//             break

//         case 666:
//             console.log('Тут есть одинаковые числа!')
//             break
//         case 777:
//             console.log('Тут есть одинаковые числа!')
//             break

//         case 888:
//             console.log('Тут есть одинаковые числа!')
//             break

//         case 999:
//             console.log('Тут есть одинаковые числа!')
//             break
//     }
// } else {
//     console.log('Всё верно!')
// }




// 2.6 Написать конвертор валют. Пользователь вводит количе-
// ство USD, выбирает, в какую валюту хочет перевести: EUR,
// UAN или AZN, и получает в ответ соответствующую сумму.

// let money = {
//     USD: { EUR: 0.85, UAN: 27.2, AZN: 1.7 }
//   }
//  let amout = ('Введите колличество USD')
//  let fromCurrency = 'USD'
//  let toCurrency = ('Выберите валюту')


// pz4.1 Написать функцию, которая принимает 2 числа и возвра-
// щает меньшее из них.

// function age (a: number, b: number) {
//         return (a <= b ? a : b)
// }
// console.log(age(3, 5))

// pz4.2 Написать функцию, которая возводит переданное число
// в указанную степень.

// function pow (a: number, b: number) {
//         return Math.pow(a,b)
// }
// console.log(pow(2,3))

// pz4.3 Написать функцию, которая принимает 2 числа и знак
// (+ - * /), считает пример и возвращает результат

// function getCalculation(a: number, b: number, znak: string) {
//     switch (znak) {
//         case '+':
//             return a + b
//         case '-':
//             return b - a
//         case '/':
//             return a / b
//         case '*':
//             return a / b
//         default:
//             return '\\'

//     }
// }
// console.log(getCalculation(1, 2, '+'))


// pz4.4 Написать функцию, которая проверяет, является ли пере-
// данное ей число простым.
// function isnum (a: number) {
//     if (a <= 1) {
//     return false
//     }
//     for (let i = 2; i < a; i++) {
//         if (a % i == 0) {
//         return false
//         }
//     }
//     return true
// }
// console.log(isnum(12))


// pz5.3 Написать функцию, которая выводит переданное ей число
// задом наперед.
// Например: число 1234 вывести как 4321

// function getReversNumber (n: number): number {
//     if (n<10) {
//         return n

//     }else {
//         return +( n % 10 + '' + getReversNumber (Math.floor(n/10)))
//     }
// } 
// console.log(getReversNumber(1234))


// pz5.4 Написать функцию, которая считает сумму цифр числа.
// Например: число 1357, сумма 1 + 3 + 5 + 7 = 16


// function getReversNumber (n: number): number {
//     if (n<10) {
//         return n

//     }else {
//         return +( n % 10 +  getReversNumber (Math.floor(n/10)))
//     }
// } 
// console.log(getReversNumber(1357))


// pz5.5 Написать функцию, которая принимает число и выводит
// соответствующее количество вложенных пар круглых скобок.
// Например: число 4 – (((()))).


// function geBracketPairsBylum(n: number): string{
//     if (!n) {
//         return '()'

//     }else {
//         return '(' + geBracketPairsBylum(n-1) + ')'
//     }
// } 
// console.log(geBracketPairsBylum(4))










// pz5.1 Написать функцию, которая вычисляет факториал задан-
// ного числа.

// function factorial (num: number): number {
//     if (num == 0) {
//         return 1
//     } else 
//     return num * factorial (num - 1)


// }
// console.log(factorial(5))


// pz5.2 Написать функцию, которая выводит все числа из заданного
// пользователем диапазона в прямом порядке. И еще одну
// функцию – для вывода в обратном порядке.

// function PrintNumversForvard2(start: number, end: number): void {
//     if (start > end) {
//         return 
//     }
//     console.log(start)
//     PrintNumversForvard2(start+1, end)
// }
// PrintNumversForvard2(1, 5)

// function PrintNumversBacward2(start: number, end: number): void {
//     if (start < end) {
//         return
//     }
//     console.log(start)
//     PrintNumversBacward2(start-1, end)
// }
// PrintNumversBacward2(5, 1)

// pzM2W1.1
// Функция принимает объект-прямоугольник и выводит
// информацию о нем (где какая точка расположена).

// interface Rectangle {
//     x1: number;
//     y1: number;
//     x2: number;
//     y2: number;
// }

// function getRectangleInfo(rectangle: Rectangle): void {
//     console.log(`Rectangle Info:`);
//     console.log(`Top-Left Point: (${rectangle.x1}, ${rectangle.y1})`);
//     console.log(`Top-Right Point: (${rectangle.x2}, ${rectangle.y1})`);
//     console.log(`Bottom-Left Point: (${rectangle.x1}, ${rectangle.y2})`);
//     console.log(`Bottom-Right Point: (${rectangle.x2}, ${rectangle.y2})`);
// }

// const myRectangle: Rectangle = { x1: 0, y1: 0, x2: 5, y2: 5 };
// getRectangleInfo(myRectangle);


// pzM2W1.2 
// Функция принимает объект-прямоугольник и возвращает
// его ширину.

// interface Rectangle {
//     x1: number;
//     y1: number;
//     x2: number;
//     y2: number;
// }

// function getRectangleWidth(rectangle: Rectangle): number {
//     return Math.abs(rectangle.x2 - rectangle.x1);
// }

// const myRectangle: Rectangle = { x1: 0, y1: 0, x2: 5, y2: 5 };
// const width = getRectangleWidth(myRectangle);
// console.log(`Rectangle Width: ${width}`);

// pzM2W1.3
// Функция принимает объект-прямоугольник и возвращает
// его высоту.

function getHeight(rectangle: any) {
    return rectangle.height;
}
let rectangle = {
    width: 10,
    height: 20
};

let height = getHeight(rectangle);
console.log(`Высота прямоугольника: ${height}`);


// dzM1W5.1 Написать функцию возведения числа в степень.
function raiseToPower(base: number, exponent: number): number {
    return Math.pow(base, exponent);
}

// dzM1W5.2 Написать функцию поиска наибольшего общего делителя.
function greatestCommonDivisorr(a: number, b: number): number {
    if (b === 0) {
        return a;
    } else {
        return greatestCommonDivisorr(b, a % b);
    }
}

// dzM1W5.3 Написать функцию для поиска максимальной цифры в числе.
function maxDigit(num: number): number {
    let max = 0;
    while (num > 0) {
        const digit = num % 10;
        if (digit > max) {
            max = digit;
        }
        num = Math.floor(num / 10);
    }
    return max;
}

// dzM1W5.4 Написать функцию, которая определяет простое ли пере-
// данное число.
function isPrime(num: number): boolean {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// dzM1W5.5 Написать функцию для вывода всех множителей передан-
// ного числа в возрастающем порядке.
// Например: число 18 – множители 2 * 3 * 3
function primeFactors(num: number): number[] {
    const factors: number[] = [];
    for (let i = 2; i <= num; i++) {
        while (num % i === 0) {
            factors.push(i);
            num /= i;
        }
    }
    return factors;
}

// dzM1W5.6 Написать функцию, которая возвращает число Фибоначчи
// по переданному порядковому номеру.
// Числа Фибоначчи: 1, 1, 2, 3, 5, 8, 13… Ряд основывается на
// том, что каждое число равно сумме двух предыдущих чисел.
// Например: порядковый номер 3 – число 2, порядковый
// номер 6 – число 8
function fibonacci(n: number): number {
    if (n <= 1) {
        return n;
    }
    let a = 1;
    let b = 1;
    let temp;
    for (let i = 3; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b
}


console.log(raiseToPower(2, 3))
console.log(greatestCommonDivisorr(24, 36))
console.log(maxDigit(23658))
console.log(isPrime(17))
console.log(primeFactors(18))
console.log(fibonacci(6))



// dzM2W1.1 Задание 1
// Создать объект, описывающий автомобиль (производитель,
// модель, год выпуска, средняя скорость), и следующие функции
// для работы с этим объектом.
// 1
// Функция для вывода на экран информации об автомобиле.
// 2
// Функция для подсчета необходимого времени для пре-
// одоления переданного расстояния со средней скоростью.
// Учтите, что через каждые 4 часа дороги водителю необхо-
// димо делать перерыв на 1 час.

interface Car {
    manufacturer: string
    model: string
    year: number
    averageSpeed: number
}

function printCarInfo(car: Car): void {
    console.log(`Производитель: ${car.manufacturer}`)
    console.log(`Модель: ${car.model}`)
    console.log(`Год выпуска: ${car.year}`)
    console.log(`Средняя скорость: ${car.averageSpeed} км/ч`)
}

function calculateTravelTime(car: Car, distance: number): void {
    const travelTime = distance / car.averageSpeed;
    const restCount = Math.floor(travelTime / 4)
    const totalTime = travelTime + restCount

    console.log(`Для преодоления расстояния ${distance} км потребуется времени: ${totalTime} ч`)
}

const myCar: Car = {
    manufacturer: 'BMW',
    model: 'M5 F90',
    year: 201000,
    averageSpeed: 7000
}

printCarInfo(myCar)

calculateTravelTime(myCar, 10000)


// dzM2W1.2 
// Создать объект, хранящий в себе отдельно числитель и зна-
// менатель дроби, и следующие функции для работы с этим объ-
// ектом.
// 1
// Функция сложения 2-х объектов-дробей.
// 2
// Функция вычитания 2-х объектов-дробей.
// 3
// Функция умножения 2-х объектов-дробей.
// 4
// Функция деления 2-х объектов-дробей.
// 5
// Функция сокращения объекта-дроби.

// interface Fraction {
//     numerator: number
//     denominator: number
// }


// function addFractions(fraction1: Fraction, fraction2: Fraction): Fraction {
//     const resultNumerator = fraction1.numerator * fraction2.denominator + fraction2.numerator * fraction1.denominator
//     const resultDenominator = fraction1.denominator * fraction2.denominator
//     return simplifyFraction({ numerator: resultNumerator, denominator: resultDenominator })
// }


// function subtractFractions(fraction1: Fraction, fraction2: Fraction): Fraction {
//     const resultNumerator = fraction1.numerator * fraction2.denominator - fraction2.numerator * fraction1.denominator
//     const resultDenominator = fraction1.denominator * fraction2.denominator
//     return simplifyFraction({ numerator: resultNumerator, denominator: resultDenominator })
// }


// function multiplyFractions(fraction1: Fraction, fraction2: Fraction): Fraction {
//     const resultNumerator = fraction1.numerator * fraction2.numerator
//     const resultDenominator = fraction1.denominator * fraction2.denominator
//     return simplifyFraction({ numerator: resultNumerator, denominator: resultDenominator })
// }


// function divideFractions(fraction1: Fraction, fraction2: Fraction): Fraction {
//     const resultNumerator = fraction1.numerator * fraction2.denominator
//     const resultDenominator = fraction1.denominator * fraction2.numerator
//     return simplifyFraction({ numerator: resultNumerator, denominator: resultDenominator })
// }


// function simplifyFraction(fraction: Fraction): Fraction {
//     const gcd = greatestCommonDivisor(fraction.numerator, fraction.denominator)
//     return {
//         numerator: fraction.numerator / gcd,
//         denominator: fraction.denominator / gcd
//     };
// }


// function greatestCommonDivisor(a: number, b: number): number {
//     return b == 0 ? a : greatestCommonDivisor(b, a % b)
// }


// const fraction1: Fraction = { numerator: 1, denominator: 2 }
// const fraction2: Fraction = { numerator: 3, denominator: 4 }


// console.log("Сложение:", addFractions(fraction1, fraction2))

// console.log("Вычитание:", subtractFractions(fraction1, fraction2))


// console.log("Умножение:", multiplyFractions(fraction1, fraction2))


// console.log("Деление:", divideFractions(fraction1, fraction2))



// pzM2W2.1 
// Создать массив из 10 случайных чисел и написать несколько
// функций для работы с ним.
// 1
// Функция принимает массив и выводит его на экран.
// 2
// Функция принимает массив и выводит только четные
// элементы.
// 3
// Функция принимает массив и возвращает сумму всех
// элементов массива.
// 4
// Функция принимает массив и возвращает его максималь-
// ный элемент.
// 5
// Функция добавления нового элемента в массив по ука-
// занному индексу.
// 6
// Функция удаления элемента из массива по указанному
// индексу.

const array: number[] = [];

for (let i = 0; i < 10; i++) {
  array.push(Math.floor(Math.random() * 100));
}

function printArray(arr: number[]): void {
  console.log(arr);
}

function printEvenElements(arr: number[]): void {
  const evenElements = arr.filter(num => num % 2 == 0);
  console.log(evenElements);
}

function sumArray(arr: number[]): number {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

function findMaxElement(arr: number[]): number {
  return Math.max(...arr);
}

function insertElement(arr: number[], index: number, element: number): void {
  arr.splice(index, 0, element);
}

function deleteElement(arr: number[], index: number): void {
  arr.splice(index, 1);
}

printArray(array);
printEvenElements(array);
console.log(sumArray(array));
console.log(findMaxElement(array));

insertElement(array, 5, 50);
console.log(array);

deleteElement(array, 2);
console.log(array);


// 1.1.  Написать функцию возвращающюю массив целых чисел от 0 до 10

function getNumbers(): number[] {
    let numbers: number[] = []
    for (let i = 0; i <= 10; i++) {
        numbers.push(i)
    }
    return numbers
}
console.log(getNumbers())

// 1.2.  Добавить в функцию параметры опциональные параметры начального и конечного значения массива
//     (если конечный элемент массива не передат, то он больше нечального на 10) . Вызвать функцию несаколько раз

function getNumberss (start: number, end: number): number[] {
    let numbers: number[] = []
    for (let i = start; i <= end; i++) {
        numbers.push(i)
    }
    return numbers

}
console.log(getNumberss(3,8))


// 1.3*. Написать функцию возвращающюю массив случайных целых чисел. Функция принимает 1 параметр, количество элементов в будущем массиве

function getRandomNumbers(count: number): number[] {
    let numbers: number[] = []
    for (let i = 0; i < count; i++) {
        numbers.push(Math.floor(Math.random() * 100))
    }
    return numbers
}
console.log(getRandomNumbers(5))

// 2.1. В файле html создать пустой div с произвольным id


// 2.2. Получить объект div'а в js при помощи метода document.getElementById(ваш id) as HTMLDivElement


// 2.3. Вывесли в полученный div текст, "Привет, пользователь"



    function greetUser (userName?: string): string {
        if (userName) {
            return `Привет, ${userName}` 
        } else {
            return 'Привет, пользователь'
        }
    }
    const myDiv: HTMLDivElement = document.getElementById ('myDiv') as HTMLDivElement
    if (myDiv) {
        myDiv.innerText = greetUser('Vasya')
    }
    myDiv.style.width = '100px'
    myDiv.style.backgroundColor = 'aqua'



// 2.4. Написать функцию, которая возвращает текст "Привет, пользователь" или "Привет, <имяПользователя>" в зависимости от переданных параметров и использовать её в задании 2.3.
function greetUserr (userName?: string): string {
    if (userName) {
        return `Привет, ${userName}` 
    } else {
        return 'Привет, пользователь'
    }
}
console.log(greetUserr('Vasya'))

// PZM2W3.1 
// Написать функцию, которая принимает 2 строки и срав-
// нивает их длину. Функция возвращает 1, если в первой
// строке больше символов, чем во второй; -1 – если во вто-
// рой больше символов, чем в первой; или 0 – если строки
// одинаковой длины.

function compareStringLength (str1: string, str2: string): number {
    return str1.length > str2.length ? 
    1 : str1.length < str2.length ? -1 : 0
}
console.log(compareStringLength('hello', 'world'))

// PZM2W3.2
// Написать функцию, которая переводит в верхний регистр
// первый символ переданной строки.
function capitaLizeFirstLetter (str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1)
}
console.log(capitaLizeFirstLetter('hello'))
console.log(capitaLizeFirstLetter('world'))


// PZM2W3.3
// Написать функцию, которая считает количество гласных
// букв в переданной строке.

function countVowels (str: string): number {
    const vowels = ['a', 'e', 'i', 'o', 'u',]
    let count = 0
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++
        }
    }
    return count 
}
console.log(countVowels('hello'))
console.log(countVowels('world'))

// PZM2W3.4
// Написать функцию для проверки спама в переданной
// строке. Функция возвращает true, если строка содержит
// спам. Спамом считать следующие слова: 100% бесплатно,
// увеличение продаж, только сегодня, не удаляйте, ххх.
// Функция должна быть нечувствительна к регистру.

function chechForSpam (str: string): boolean {
    const spamWords = ['100% бесплатно', 'увеличение продаж', 'только сегодня',  'не удаляйте', 'xxx',]
    for (let word of spamWords) {
        (str.toLowerCase().includes(word.toLowerCase())); {
            return true
        }
    }
    return false 
}
console.log(chechForSpam('получите сейчас 100% бесплатно'))

// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
const date = new Date(2012, 1, 20, 3, 12)
console.log(date)

// Напишите функцию getWeekDay(date), показывающую день недели в коротком
//  формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
function getWeekDay(date: Date): string {
    const days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
    return days[date.getDate()];
}
const date1 = new Date(2024, 1, 7)
console.log(getWeekDay(date1))

// В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

function getLocalDay(date: Date): number {
    let day = date.getUTCDate()
    if (day == 0) {
        day = 7
    }
    return day
    
}
const date2 = new Date(2024, 0, 2)
console.log(getLocalDay(date2)) 

// z1
function clear(elem: HTMLElement): void {
    while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
    }
}

// z2

const ulElement = document.querySelector('ul')

function createListItem() {
    const userInput = console.log('Введите название элемента')
    if (userInput == null || userInput == '') {
        return;
    }
    const liElement = document.createElement ('li')
    liElement.textContent = userInput
    ulElement?.appendChild(liElement)

    createListItem()
}
createListItem()

// Напишите функцию showNotification(options), которая создаёт уведомление: <div class="notification"> с заданным содержимым. Уведомление должно автоматически исчезнуть через 1,5 секунды.

function showNotification(options: { content: string }): void {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = options.content;
    document.body.appendChild(notification);

    setTimeout(() => {
        document.body.removeChild(notification);
    }, 1500);
}
const button = document.createElement('button')
button.textContent = 'показать уведомление'
document.body.appendChild(button);
button.addEventListener('click', () => {
    showNotification({content: 'Привет мир!'})
})










































