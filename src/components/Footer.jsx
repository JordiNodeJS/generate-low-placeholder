import Github from './icons/Github'
import SvgCloudinary from './icons/SvgCloudinary'

export default function Footer() {
  return (
    <footer className="mt-4 flex items-center justify-center gap-x-2 pb-6 font-semibold">
      Made with <SvgCloudinary className="w-24" /> by{' '}
      <span className="text-purple-700">peTroNiNi</span> with much love{' '}
      <span className="material-symbols-rounded text-secondary hover:animate-ping">
        heart_plus
      </span> in
      <Github href="https://github.com/JordiNodeJS/generate-low-placeholder" />

    </footer>
  )
}
