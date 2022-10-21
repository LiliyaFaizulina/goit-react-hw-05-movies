export const CastList = ({ info }) => {
  return (
    <ul>
      {info.cast.map(({ id, name, profile_path, character }) => (
        <li key={id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                : 'https://i.ibb.co/bPtNcLX/NoImage.png'
            }
            alt={name}
          />
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};
