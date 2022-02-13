// 1. Создать пустой массив, с помощью push добавить в него цифры от 1 до 15

let arr = [];
arr.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);

// 2. Добавить значение 0 в начало в массив из пред задания

arr.unshift(0);

// 3. Удалить один элемент с конца из массива пред задания

arr.pop();

// 4. Удалить один элемент где нибудь в середине (splice) из массива пред задания

arr.splice(7, 1);

// 5. Добавить цифру 5 в середину массива (splice) из пред задания

arr.splice(7, 0, 5);

// 6. Клонировать весь массив (slice или Object.assign) из пред задания

const arrCopy = arr.slice();

// 7. У клона массива пред задания удалить первую половину элементов (индексы от 0 до array.length/2 - 1)

arrCopy.splice(8, 8);
// ------------
// 8. Создать пустой массив на 8 empty ячеек

const mass = Array(8);

// 9. Заполнить массив от половины (от индекса 3) до конца значениями null (fill),

mass.fill(null, 3, mass.length);

// 10. Отфильтровать от пустых ячеек (forEach+push или filter)

const filterArr = mass.filter((element) => {
    return true;
});

// ------------
// 11. Создать массив с числами от 1 до 10. На основе него создать массив квадратов значений (map).

const massiv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const massivSq = massiv.map(index => index * index);


// 12. Перевести массив из предыдущего задания в строку, с разделителем " && " (join)


const massToString = massivSq.join(' && ');

// 13. * Создать массив Склада. Заполнить массив от 3 до 5 продуктами
// Каждый продукт имеет свойства - наименование, базовая цена, колво на складе.

let store = [{
        name: 'sugar',
        baseprice: 30,
        amount: 7,
    },

    {
        name: 'salt',
        baseprice: 10,
        amount: 9,
    },

    {
        name: 'apple',
        baseprice: 40,
        amount: 4,
    },
    {
        name: 'orange',
        baseprice: 70,
        amount: 6,
    },
    {
        name: 'watermelon',
        baseprice: 100,
        amount: 4,
    }
];