export const ReviewList = ({ info }) => {
  return (
    <ul>
      {info.results.map(({ id, author, author_details, content }) => (
        <li key={id}>
          <h4>Author: {author}</h4>
          <p>Character: {content}</p>
        </li>
      ))}
    </ul>
  );
};
