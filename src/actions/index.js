export function selectBook(book) {
  // SelectBook is an ActionCreator, it needs to return an action - and object with a type property
  // An Action always returns a type and will sometimes contain a payload
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}