const Image = ({ image }) => {
  return (
    <div>
      <img alt={`img - ${image.id}`} src={image.src} />
    </div>
  )
}


function ImageList({ images }) {
  return (
    <section className="w-12">
      {images.map(image => (
        <Image image={image} key={`image-${image.id}`} />
      ))}
    </section>
  )
}

export default ImageList
