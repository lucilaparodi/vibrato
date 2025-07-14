import Header from "../components/Header"
import Footer from "../components/Footer"
import { useState, useEffect } from "react"

const useGridColumns = () => {
  const [columns, setColumns] = useState(1)
  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth
      if (width >= 1280) setColumns(3)
      else if (width >= 768) setColumns(2)
      else if (width >= 640) setColumns(1)
      else setColumns(1)
    }
    updateColumns()
    window.addEventListener("resize", updateColumns)
    return () => window.removeEventListener("resize", updateColumns)
  }, [])
  return columns
}

function getYouTubeID(url) {
  const m = url.match(/(?:youtube\.com\/.*v=|youtu\.be\/)([^&?\/]+)/i)
  return m ? m[1] : ""
}

function YouTubeEmbed({ url, title }) {
  const [show, setShow] = useState(false)
  const id = getYouTubeID(url)
  const thumb = `https://img.youtube.com/vi/${id}/hqdefault.jpg`
  return (
    <div
      className="relative aspect-video bg-black cursor-pointer box-border w-full h-full"
      onClick={() => setShow(true)}
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setShow(true)}
      role="button"
      aria-label={`Reproducir ${title}`}
    >
      {show ? (
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          frameBorder={0}
        />
      ) : (
        <>
          <img
            src={thumb}
            alt={title}
            className="w-full h-full object-cover select-none pointer-events-none"
            draggable={false}
          />
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <svg
              className="w-10 h-10 opacity-90 hover:opacity-100 transition"
              viewBox="0 0 80 80"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="40" cy="40" r="40" fill="#fff" fillOpacity="0.6" />
              <path
                d="M34 28 Q34 26, 36 27 L52 38 Q54 40, 52 42 L36 53 Q34 54, 34 52 Z"
                fill="#000"
              />
            </svg>
          </div>
        </>
      )}
    </div>
  )
}

export default function Portfolio() {
  const trabajos = [
    { link: "https://www.youtube.com/watch?v=HXN7JWmdQdE" },
    { link: "https://www.youtube.com/watch?v=bZ1Zr-phcTU" },
    { link: "https://www.youtube.com/watch?v=3tkUYjVt0nE" },
    { link: "https://www.youtube.com/watch?v=Z1HeqFl_YxA" },
    { link: "https://www.youtube.com/watch?v=Nn-_xZ_9hns" },

    { link: "https://www.youtube.com/watch?v=5X0Co2MywOU" },

    { link: "https://www.youtube.com/watch?v=aW96VYWAim4" },
    { link: "https://www.youtube.com/watch?v=ALy9rtoqdbU" },
    { link: "https://www.youtube.com/watch?v=sKowiTLCNcQ" },
    { link: "https://www.youtube.com/watch?v=X8WJUvAtUl4" },
    { link: "https://www.youtube.com/watch?v=FSKsTIXyQUA" },
    { link: "https://www.youtube.com/watch?v=iNlX-J9Oo4M" },
    { link: "https://www.youtube.com/watch?v=gdfFl-f_gns" },
    { link: "https://www.youtube.com/watch?v=tomnxL2BhPw" },
    { link: "https://www.youtube.com/watch?v=UGR9mL1BZzM" },
    { link: "https://www.youtube.com/watch?v=rPqD0kcuNkk" },
    { link: "https://www.youtube.com/watch?v=n_iTFEUubjM" }
  ]
  const columns = useGridColumns()

  if (columns === 1) {
    const mobileItems = trabajos.slice(0, 6)
    return (
      <div className="mx-8 mt-32 mb-8">
        <div className="space-y-8 mb-28">
          {mobileItems.map((t, i) => (
            <div
              key={i}
              className="box-border border border-peach rounded-lg overflow-hidden aspect-video"
            >
              <YouTubeEmbed url={t.link} title={`Trabajo ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    )
  }

  const rows = Math.floor(trabajos.length / columns)
  const slice = trabajos.slice(0, rows * columns)
  return (
    <>
      <div className="relative m-auto gradient-background">
        <div className="w-[95%] max-w-[1700px] m-auto relative z-10">
          <Header />
          <h1 className="text-center font-lafleur text-peach text-4xl md:text-7xl mt-24 mb-[-70px]">
            Portfolio
          </h1>
          <div className="mx-8 mt-32 mb-8"></div>
          <div className="mx-8 mb-28 overflow-x-hidden">
            <div className="box-border border-2 border-peach rounded-lg">
              <div
                className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
                style={{ gap: 0 }}
              >
                {slice.map((t, i) => {
                  const r = Math.floor(i / columns)
                  const ec = (i + 1) % columns === 0
                  const last = i === slice.length - 1 && r === rows - 1
                  const corners = [
                    r === 0 && i % columns === 0 ? "rounded-tl-lg" : "",
                    r === 0 && ec ? "rounded-tr-lg" : "",
                    r === rows - 1 && i % columns === 0 ? "rounded-bl-lg" : "",
                    last ? "rounded-br-lg" : ""
                  ]
                    .filter(Boolean)
                    .join(" ")

                  return (
                    <div
                      key={i}
                      className={[
                        "box-border aspect-video overflow-hidden",
                        !ec && "border-r-2 border-peach",
                        r !== rows - 1 && "border-b-2 border-peach",
                        corners
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      <YouTubeEmbed url={t.link} title={`Trabajo ${i + 1}`} />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <Footer />
        </div>
        <div className="absolute inset-0 grain z-0"></div>
      </div>
    </>
  )
}
