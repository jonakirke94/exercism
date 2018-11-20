export const parse = sentence => sentence
  .split(':')[0]
  .split(/\s|-|(?=[A-Z])/g)
  .map(word => word.charAt(0).toUpperCase())
  .join('');
