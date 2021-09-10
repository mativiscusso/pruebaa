export const ellipsizeTextBox = (element: string, totalLenght: number) => {
    if (element.length < totalLenght) {
        return element;
    }
    const elementSliced = element.slice(0, totalLenght);
    return elementSliced + "...";
};
