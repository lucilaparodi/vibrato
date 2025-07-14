export const Estudio = () => {
  // Lista base de imágenes, excluyendo 2, 3, 9, 11 y 13
  const allPhotos = Array.from({ length: 13 }, (_, i) =>
    i === 0 ? "photo.webp" : `photo${i + 1}.webp`
  ).filter(
    (photo) =>
      ![
        "photo2.webp",
        "photo3.webp",
        "photo9.webp",
        "photo11.webp",
        "photo13.webp"
      ].includes(photo)
  )

  const getRandomPhotos = () => {
    const shuffled = [...allPhotos].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, 12)
  }

  const photos = getRandomPhotos()

  return (
    <>
      <div className="mt-28 md:mt-20 mb-20 mx-8 text-peach">
        <h1 className="text-center font-lafleur text-peach text-4xl md:text-7xl mb-12">
          Estudio de grabación
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {photos.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-2xl shadow-md">
              <img
                src={`/assets/${src}`}
                alt={`Foto del estudio ${index + 1}`}
                className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Estudio
