const isAsking = message => message.charAt(message.length - 1) === '?';

const isYelling = message => message === message.toUpperCase() && message.match(/[a-z]/i);

export const hey = (message) => {
  const msg = message.trim();

  if (!msg) return 'Fine. Be that way!';
  if (isAsking(msg) && isYelling(msg)) return 'Calm down, I know what I\'m doing!';
  if (isAsking(msg)) return 'Sure.';
  if (isYelling(msg)) return 'Whoa, chill out!';

  return 'Whatever.';
};
