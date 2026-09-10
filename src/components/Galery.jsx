import { useEffect, useState } from 'react'
import './Galery.css'
import semuc1 from '../assets/semuc1.jpg'
import semuc2 from '../assets/semuc2.jpg'
import semuc3 from '../assets/semuc3.jpg'
import semuc4 from '../assets/semuc4.jpg'

const images = [
    {
        src: semuc1,
        alt: 'Pozas turquesas de Semuc Champey',
    },
    {
        src: semuc2,
        alt: 'Vista desde el mirador',
    },
    {
        src: semuc3,
        alt: 'Cueva de Kanba',
    },
    {
        src: semuc4,
        alt: 'Río Cahabón y vegetación',
    },
]

export default function Galery() {
    const [activeImage, setActiveImage] = useState(0)
    const [selectedImage, setSelectedImage] = useState(null)

    useEffect(() => {
        const slideTimer = window.setInterval(() => {
            setActiveImage((currentImage) => (currentImage + 1) % images.length)
        }, 4500)

        return () => window.clearInterval(slideTimer)
    }, [])

    useEffect(() => {
        if (!selectedImage) return undefined

        const closeWithEscape = (event) => {
            if (event.key === 'Escape') setSelectedImage(null)
        }

        document.addEventListener('keydown', closeWithEscape)
        return () => document.removeEventListener('keydown', closeWithEscape)
    }, [selectedImage])

    const showPrevious = () => {
        setActiveImage((currentImage) => (currentImage - 1 + images.length) % images.length)
    }

    const showNext = () => {
        setActiveImage((currentImage) => (currentImage + 1) % images.length)
    }

    return (
        <section id="galeria" className="excursion-gallery" aria-labelledby="gallery-title">
            <h2 id="gallery-title">Galería de imágenes</h2>
            <div className="gallery-slider">
                <button className="gallery-control gallery-control-previous" type="button" onClick={showPrevious} aria-label="Imagen anterior">
                    &#8249;
                </button>

                <div className="gallery-panels">
                    {images.map((image, imageIndex) => (
                        <button
                            className={`gallery-panel ${imageIndex === activeImage ? 'is-active' : ''}`}
                            type="button"
                            key={image.src}
                            onClick={() => {
                                setActiveImage(imageIndex)
                                setSelectedImage(image)
                            }}
                            aria-label={`Mostrar imagen ${imageIndex + 1}`}
                        >
                            <img src={image.src} alt={image.alt} />
                        </button>
                    ))}
                </div>

                <button className="gallery-control gallery-control-next" type="button" onClick={showNext} aria-label="Siguiente imagen">
                    &#8250;
                </button>
            </div>

            <div className="gallery-indicators" aria-label="Seleccionar imagen">
                {images.map((image, imageIndex) => (
                    <button
                        className={imageIndex === activeImage ? 'is-active' : ''}
                        type="button"
                        key={image.src}
                        onClick={() => setActiveImage(imageIndex)}
                        aria-label={`Ir a la imagen ${imageIndex + 1}`}
                        aria-current={imageIndex === activeImage ? 'true' : undefined}
                    />
                ))}
            </div>

            {selectedImage && (
                <div className="gallery-modal" role="dialog" aria-modal="true" aria-labelledby="selected-image-title" onClick={() => setSelectedImage(null)}>
                    <div className="gallery-modal-content" onClick={(event) => event.stopPropagation()}>
                        <button className="gallery-modal-close" type="button" onClick={() => setSelectedImage(null)} aria-label="Cerrar visor">
                            &times;
                        </button>
                        <img src={selectedImage.src} alt={selectedImage.alt} />
                        <div className="gallery-modal-caption">
                            <h3 id="selected-image-title">{selectedImage.alt}</h3>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}