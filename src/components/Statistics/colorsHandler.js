// Устанавливает цвет li
const setColor = (colors) => {
    const currentColor = colors[randomIntegerFromInterval(0, colors.length - 1)];

    return currentColor.color;
};

// Выбор рандомного цвета
const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export default setColor;