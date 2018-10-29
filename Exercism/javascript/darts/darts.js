export const solve = (x, y) => {
  if (isNaN(x) || isNaN(y)) return null;
  const max = x > y ? x : y;

	let val = 0;
  if (max <= 1) {
    val = 10;
  } else if (max > 1 && max <= 5) {
    val = 5;
  } else if (max > 5 && max <= 10) {
    val = 1;
	} 
	
	return val;
};
