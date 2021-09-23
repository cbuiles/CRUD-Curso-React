import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";

const SongDetails = ({ search, bio, lyric }) => {
  return (
    <div>
      <h2>Detalles</h2>
      <SongArtist />
      <SongLyric />
    </div>
  );
};

export default SongDetails;
