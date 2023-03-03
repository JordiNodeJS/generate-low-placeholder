import {
  AdvancedImage,
  lazyload,
  accessibility,
  responsive,
  placeholder
} from '@cloudinary/react'
import { imgBackground, imgOriginal } from '../utils/transformations'
import { useMyContext } from '../store/context'

export default function TwoUp() {
  const {
    state: { publicId }
  } = useMyContext()
  return (
    <>
      {publicId !== null && (
        <div>
          <two-up>
            <AdvancedImage
              cldImg={imgOriginal(publicId)}
              plugins={[
                lazyload(),
                responsive(),
                accessibility(),
                placeholder()
              ]}
            />
            <AdvancedImage
              cldImg={imgBackground(publicId)}
              plugins={[
                lazyload(),
                responsive(),
                accessibility(),
                placeholder()
              ]}
            />
          </two-up>
        </div>
      )}
    </>
  )
}
