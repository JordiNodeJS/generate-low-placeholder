import { Cloudinary } from '@cloudinary/url-gen'
import { vectorize } from '@cloudinary/url-gen/actions/effect'
import { replaceColor } from '@cloudinary/url-gen/actions/adjust'
import { fill } from '@cloudinary/url-gen/actions/resize'

export const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDNAME
  },
  url: {
    secure: true
  }
})
const widthPixles = '400'

export const imgOriginal = publicId =>
  cld.image(publicId).resize(fill().width(widthPixles))

export const imgBackground = publicId =>
  cld
    .image(publicId)
    .resize(fill().width(widthPixles))
    .adjust(replaceColor('violet').fromColor('#2b38aa').tolerance(80))
    .effect(vectorize().numOfColors(4).detailsLevel(0.25))

export const imgReadyToDownload = publicId =>
  cld
    .image(publicId)
    .resize(fill().width(widthPixles))
    .adjust(replaceColor('violet').fromColor('#2b38aa').tolerance(80))
    .effect(vectorize().numOfColors(4).detailsLevel(0.25))
    .toURL()
