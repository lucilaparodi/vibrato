export default function LyricsSection({ title, lyrics, maxLength = 2100 }) {
  const truncatedLyrics =
    lyrics?.length > maxLength ? lyrics.slice(0, maxLength) + "..." : lyrics;

  return (
    <>
      <h3 className="text-black font-comfortaa text-sm font-bold">
        {title || "Canción - Artista"}
      </h3>
      {lyrics && (
        <div className="columns-2 gap-4 whitespace-pre-wrap mt-4 bg-white text-2xs md:text-xs">
          {truncatedLyrics}
        </div>
      )}
    </>
  );
}
