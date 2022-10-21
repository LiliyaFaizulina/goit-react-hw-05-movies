export const CastList = ({ info }) => {
  return (
    <ul>
      {info.cast.map(({ id, name, profile_path, character }) => (
        <li key={id}>
          {profile_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
              alt={name}
            />
          )}
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};
