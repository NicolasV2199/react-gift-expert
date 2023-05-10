import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";



export const GifGrid = ({category}) => {

  const {images, isLoading} = useFetchGifs(category);

  return (
    <>
      {/* Renderizado condicional del parrafo */}
      { isLoading && (<p>Cargando...</p>) }
      
      <h3> {category} </h3>

      <div className="card-grid">
        {
          images.map((image) => (
            <GifItem key={image.id} {...image}></GifItem>
          ))
        }
      </div>
    </>
  )
}

/* ...image lo que hace es mandar todo lo que tenga image como props */