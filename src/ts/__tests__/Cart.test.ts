import Cart from '../service/Cart';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('Create Movie', () => {
  const movie = new Movie('The Avangers', 2012, 'USA','Avangers Assemble!', 'fantastic', 137)
  expect(movie.getInfo()).toEqual({"country": "USA", "duration": 137, "genre": "fantastic", "name": "The Avangers", "slogan": "Avangers Assemble!", "year": 2012})
})

test('add Movie to the Cart', () => {
  const cart = new Cart();
  const movie = new Movie('The Avangers', 2012, 'USA','Avangers Assemble!', 'fantastic', 137)
  cart.add(movie)
  expect(cart.items).toEqual([
    {
      "country": "USA", 
      "duration": 137, 
      "genre": "fantastic", 
      "name": "The Avangers", 
      "slogan": "Avangers Assemble!", 
      "year": 2012}
  ])
})