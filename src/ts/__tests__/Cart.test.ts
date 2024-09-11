import Cart from '../service/Cart';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('Create Movie', () => {
  const movie = new Movie(1, 'The Avangers', 2012, 'USA','Avangers Assemble!', 'fantastic', 137, 250)
  expect(movie.getInfo()).toEqual({"id": 1, "country": "USA", "duration": 137, "genre": "fantastic", "name": "The Avangers", "slogan": "Avangers Assemble!", "year": 2012, "price": 250})
})

test('add Movie to the Cart', () => {
  const cart = new Cart();
  const movie = new Movie(1, 'The Avangers', 2012, 'USA','Avangers Assemble!', 'fantastic', 137, 250)
  cart.add(movie)

  expect(cart.items).toEqual([
    {
      "id": 1,
      "country": "USA", 
      "duration": 137, 
      "genre": "fantastic", 
      "name": "The Avangers", 
      "slogan": "Avangers Assemble!", 
      "year": 2012,
      "price": 250,
    }
  ])
})

test('totalAmount', () => {
  const cart = new Cart();
  const movie1 = new Movie(1, 'The Avangers', 2012, 'USA','Avangers Assemble!', 'fantastic', 137, 250)
  const movie2 = new Movie(2, 'Gentlemens', 2019, 'USA', '', 'fantastic', 113, 300)
  cart.add(movie1)
  cart.add(movie2)
  expect(cart.totalAmount()).toBe(550)
})


test('totalAmount', () => {
  const cart = new Cart();
  const movie1 = new Movie(1, 'The Avangers', 2012, 'USA','Avangers Assemble!', 'fantastic', 137, 250)
  const movie2 = new Movie(2, 'Gentlemens', 2019, 'USA', '', 'fantastic', 113, 300)
  cart.add(movie1)
  cart.add(movie2)
  expect(cart.AmountWithDiscount(10)).toBe(495)
})

test('delete Object', () => {
  const cart = new Cart();
  const movie1 = new Movie(1, 'The Avangers', 2012, 'USA','Avangers Assemble!', 'fantastic', 137, 250)
  const movie2 = new Movie(2, 'Gentlemens', 2019, 'USA', '', 'fantastic', 113, 300)
  cart.add(movie1)
  cart.add(movie2)
  cart.deleteObject(2)
  expect(cart.items).toEqual([
    {
      "id": 1,
      "country": "USA", 
      "duration": 137, 
      "genre": "fantastic", 
      "name": "The Avangers", 
      "slogan": "Avangers Assemble!", 
      "year": 2012,
      "price": 250,
    }
  ])
})
