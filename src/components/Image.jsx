// Rendering individual images
const Image = ({ image }) => {
  return (
    <div>
      <img alt={`img - ${image.id}`} src={image.src} />
    </div>
  )
}
export default Image