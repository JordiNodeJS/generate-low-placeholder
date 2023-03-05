import CloudinaryUpload from './components/CloudinaryUpload'
import SvgComponent from './components/Cloudinary'
import DarkModeToggle from './components/DarkModeToggle'
// eslint-disable-next-line no-unused-vars

function App() {
  return (
    <div className="m-auto grid h-screen w-full max-w-xl grid-cols-1">
      <DarkModeToggle />
      {/* <TestReducer /> */}
      <header className="flex justify-center py-10" title='Generate low quality image placeholders'>
        <h1 className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-center text-4xl font-extrabold tracking-tighter text-transparent">
          Generate
          <span className="text-2xl font-extrabold text-purple-300">low quality</span>
          <span className="">image</span> <br />
          placeholders
        </h1>
      </header>
      <main>
        <section>
          {/* <DropzoneImage /> */}
          <CloudinaryUpload />
        </section>
      </main>
      <footer className="mt-4 pb-6 flex items-center justify-center gap-x-2 font-semibold">
        Made with <SvgComponent className="w-24" /> by <span className='text-purple-700'>peTroNiNi</span> with much love{' '}
        <span className="material-symbols-rounded text-secondary hover:animate-ping">
          heart_plus
        </span>
      </footer>
    </div>
  )
}

export default App
