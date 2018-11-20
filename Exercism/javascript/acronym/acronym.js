export const parse = sentence => {
    // handle colon
    const colonArr = sentence.split(':');
    if (colonArr.length > 1) return colonArr[0];

    return sentence
    .split(/\s|-|(?=[A-Z])/g)
    .map(word => word.charAt(0).toUpperCase())
    .join('');
}