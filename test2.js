// Шаблон для заповнення даними
const template = "This hotel is named {{name}}. Price for one night starts at {{price.min.value}} {{price.min.unit}}.";

// JSON-рядок із даними про готель
const json = `{
    "name": "Lux Resort & Spa",
    "price": {
        "min": {
            "value": 30,
            "unit": "Euro"
        }
    }
}`;

// Перетворюємо JSON-рядок у JavaScript об'єкт
const params = JSON.parse(json);

// Функція для заповнення шаблону даними
function renderTemplate(template, params) {
    // Замінюємо всі місця в шаблоні, що відповідають об'єктам із даних
    return template.replace(/{{(.*?)}}/g, (match, key) => {
        // Розбиваємо ключ на частини для доступу до вкладених об'єктів
        const keys = key.trim().split('.');
        // Знаходимо значення за ключами в об'єкті params
        return keys.reduce((acc, curr) => acc[curr], params);
    });
}

// Викликаємо функцію для створення кінцевого рядка
const actual = renderTemplate(template, params);

// Виводимо отриманий результат
console.log("Actual  : " + actual);
console.log("Expected: This hotel is named Lux Resort & Spa. Price for one night starts at 30 Euro.");
