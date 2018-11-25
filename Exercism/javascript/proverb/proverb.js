const PREFIX = 'For want of a';
const SUFFIX = 'was lost';

export const proverb = (...args) => {
  const verbs = [...args];
  const qualifier = typeof verbs[verbs.length - 1] === 'object'
    ? `${verbs.pop().qualifier} `
    : '';

  let result = '';
  for (let i = 0; i < verbs.length - 1; i += 1) {
    result += `${PREFIX} ${verbs[i]} the ${verbs[i + 1]} ${SUFFIX}.\n`;
  }

  result += `And all for the want of a ${qualifier}${verbs[0]}.`;

  return result;
};
