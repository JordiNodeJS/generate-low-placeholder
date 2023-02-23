import Image from './Image'

const ImageList = ({ images }) => {
  return (
    <section className="w-12">
      {images.map(image => (
        <Image image={image} key={`image-${image.id}`} />
      ))}
    </section>
  )
}

export default ImageList
