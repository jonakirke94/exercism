import { Raindrops } from './raindrops';

describe('Raindrops', () => {
  test('converts 1', () => expect(Raindrops.convert(1)).toEqual('1'));

  test('converts 3', () => expect(Raindrops.convert(3)).toEqual('Pling'));

  test('converts 5', () => expect(Raindrops.convert(5)).toEqual('Plang'));

  test('converts 7', () => expect(Raindrops.convert(7)).toEqual('Plong'));

  test('converts 6', () => expect(Raindrops.convert(6)).toEqual('Pling'));

  test('converts 9', () => expect(Raindrops.convert(9)).toEqual('Pling'));

  test('converts 10', () => expect(Raindrops.convert(10)).toEqual('Plang'));

  test('converts 14', () => expect(Raindrops.convert(14)).toEqual('Plong'));

  test('converts 15', () => expect(Raindrops.convert(15)).toEqual('PlingPlang'));

  test('converts 21', () => expect(Raindrops.convert(21)).toEqual('PlingPlong'));

  test('converts 25', () => expect(Raindrops.convert(25)).toEqual('Plang'));

  test('converts 35', () => expect(Raindrops.convert(35)).toEqual('PlangPlong'));

  test('converts 49', () => expect(Raindrops.convert(49)).toEqual('Plong'));

  test('converts 52', () => expect(Raindrops.convert(52)).toEqual('52'));

  test('converts 105', () => expect(Raindrops.convert(105)).toEqual('PlingPlangPlong'));

  test('converts 12121', () => expect(Raindrops.convert(12121)).toEqual('12121'));
});
