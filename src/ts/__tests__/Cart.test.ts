import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';

test('считаем суммарную стоимость (без учёта скидки)', () => {
  const cart = new Cart();

  const music = new MusicAlbum(1008, "Meteora", "Linkin Park", 500);
  const book = new Book(1001, "War and Piece", "Leo Tolstoy", 1500, 1225);
  
  cart.add(music);
  cart.add(book);

  expect(cart.sum()).toEqual(2000);
});

test('считаем суммарную стоимость (c учётом скидки)', () => {
  const cart = new Cart();

  const music = new MusicAlbum(1008, "Meteora", "Linkin Park", 500);
  const book = new Book(1001, "War and Piece", "Leo Tolstoy", 1500, 1225);
  
  cart.add(music);
  cart.add(book);

  expect(cart.sumWithSale(10)).toEqual(1800);
});

test('удаляем объект из корзины', () => {
  const cart = new Cart();

  const music = new MusicAlbum(1008, "Meteora", "Linkin Park", 500);
  const book = new Book(1001, "War and Piece", "Leo Tolstoy", 1500, 1225);
  
  cart.add(music);
  cart.add(book);

  cart.deleteItem(1001);

  expect(cart.getAll().length).toEqual(1);
});