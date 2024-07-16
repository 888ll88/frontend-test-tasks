function transformString(str) {
    str = str.replace(/\s+/g, ''); // Видалення всіх пробілів з вхідного рядка

    // Функція для отримання третьої букви, яка не є рівною a або b
    const getThirdLetter = (a, b) => {
        const letters = ['G', 'R', 'B']; // Масив з трьома можливими буквами
        return letters.find(letter => letter !== a && letter !== b); // Пошук букви, яка не є а або b
    };

    while (str.length > 1) { // Поки довжина рядка більше 1
        let newStr = ''; // Новий рядок для зберігання результату
        for (let i = 0; i < str.length; i += 2) { // Проходимо по рядку з кроком 2
            let a = str[i]; // Поточна буква a
            let b = str[i + 1] !== undefined ? str[i + 1] : str[i - 1]; // Наступна буква b або передостання буква, якщо b undefined. Якщо в рядку не парна кільість букв
            newStr += (a === b) ? a : getThirdLetter(a, b); // Якщо букви однакові, додаємо a, інакше додаємо третю букву
        }
        str = newStr; // Оновлюємо str новим рядком
        console.log(newStr) // Для наглядного розбору
    }

    return str; // Повертаємо останній символ
}

let inputString = "RGB"; // Рядок букв
let result = transformString(inputString); // Виклик функції та збереження результату
console.log(result); // Виведення результату в консоль
