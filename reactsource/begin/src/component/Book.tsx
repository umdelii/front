type Book = {
  id: number;
  title: string;
  published: boolean;
  publisher: string;
};
const books: Book[] = [
  { id: 1, title: "React basic", published: true, publisher: "Manning" },
  { id: 2, title: "Advanced Hooks", published: false, publisher: "Oreilly" },
  { id: 3, title: "JSX in Depth", published: true, publisher: "Packt" },
];

// published === trueだけ filter
const publisheds = books.filter((book) => book.published);

function Book() {
  return (
    <>
      {/* タイトル : Published Books => published.length > 0 */}
      {publisheds.length > 0 && <h2>Publised Books</h2>}
      {/* {publisheds.length > 0(t) => */}
      {/* {publisheds.length > 0(t) => No published books found*/}
      {publisheds.length > 0 ? (
        publisheds.map((book) => (
          <article key={book.id}>
            <strong>{book.title}</strong>
            <em> - {book.publisher}</em>
          </article>
        ))
      ) : (
        <p>No published books found</p>
      )}
    </>
  );
}

export default Book;
