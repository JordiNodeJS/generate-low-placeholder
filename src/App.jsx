import CloudinaryUploadWidget from './components/CloudinaryUploadWidget'
import SvgComponent from './components/Cloudinary'
// eslint-disable-next-line no-unused-vars
import TestReducer from './components/TestReducer'

function App() {
  return (
    <div className="m-auto grid h-screen w-full max-w-xl grid-cols-1 place-content-center">
      {/* <TestReducer /> */}
      <header className="flex justify-center py-10">
        <h1 className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-4xl font-extrabold tracking-tighter text-transparent">
          Generate
          <span className="text-2xl font-extrabold text-purple-300">low</span>
          <span className="">placeholder</span>
        </h1>
      </header>
      <main>
        <section>
          <h1 className="mb-5 text-center text-5xl font-bold">
            Drag and Drop Test
          </h1>
          {/* <DropzoneImage /> */}
          <CloudinaryUploadWidget />
        </section>
      </main>
      <footer className="flex items-center justify-center gap-x-2 font-semibold">
        Made with <SvgComponent className="w-24" />
      </footer>
    </div>
  )
}

export default App
