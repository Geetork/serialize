/**
 * Сериализует массив чисел
 * @param {Number} arr 
 * @returns возвращает строку, состоящую из символов ASCII
 */
const serialize = (arr) => {
    return arr.map(code => String.fromCharCode(code)).join(''); // число массива является кодом символа в ASCII
}

/**
 * Десериализует строку в массив
 * @param {String} str 
 * @returns возвращает массив чисел
 */
const deserialize = (str) => {
    return str.split('').map(sym => sym.charCodeAt(0));
  }

// Набор массивов для тестирования
const tests = [
    [1, 2, 3, 4, 5],  // Простой тест
    Array.from({ length: 50 }, () => Math.floor(Math.random() * 300) + 1), // Случайные числа: 50 чисел
    Array.from({ length: 100 }, () => Math.floor(Math.random() * 300) + 1), // Случайные числа: 100 чисел
    Array.from({ length: 500 }, () => Math.floor(Math.random() * 300) + 1), // Случайные числа: 500 чисел
    Array.from({ length: 1000 }, () => Math.floor(Math.random() * 300) + 1), // Случайные числа: 1000 чисел
    Array.from({ length: 100 }, () => Math.floor(Math.random() * 9) + 1), // Граничные: все числа из 1 знака
    Array.from({ length: 100 }, () => Math.floor(Math.random() * 90) + 10), // Граничные: все числа из 2 знаков
    Array.from({ length: 100 }, () => Math.floor(Math.random() * 900) + 100), // Граничные: все числа из 3 знаков
    Array.from({ length: 300 }, (_, index) => index % 3 + 1), // Граничные: каждое число по 3 раза, всего чисел 900
];

// Тестирование
tests.forEach(test => {
    const original = JSON.stringify(test);
    const serialized = serialize(test);
    const compression = serialized.length / original.length;

    console.log(`Исходная строка: ${original}`);
    console.log(`Сериализованная строка: ${serialized}`);
    console.log(`Длины исходной строки и сериализованной: ${original.length}/${serialized.length}`);
    console.log(`Коэффициент сжатия = ${compression.toFixed(2)}\n`);
});