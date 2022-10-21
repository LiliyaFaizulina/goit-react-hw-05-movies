export const ReviewList = ({ info }) => {
  return (
    <ul>
      {info.results.map(({ id, author, author_details, content }) => (
        <li key={id}>
          {author_details.avatar_path && (
            <img
              src={
                author_details.avatar_path.includes('https')
                  ? author_details.avatar_path
                  : `https://image.tmdb.org/t/p/w500/${author_details.avatar_path}`
              }
              alt="avatar"
            />
          )}
          <h4>Author: {author}</h4>
          <p>Character: {content}</p>
        </li>
      ))}
    </ul>
  );
};
