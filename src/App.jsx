import CloudinaryUploadWidget from './components/CloudinaryUploadWidget'
import SvgComponent from './components/Cloudinary'
import TestReducer from './components/TestReducer'

function App() {
  return (
    <div className="m-auto grid h-screen w-full max-w-xl grid-cols-1 place-content-center">
      <TestReducer />
      <header className="flex justify-center py-10">
        <h1 className="text-3xl font-bold tracking-tighter text-blue-900">
          Remove<span className="text-blue-600">bg</span>
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
        <section>
        </section>
      </main>
      <footer className="flex items-center justify-center gap-x-2 font-semibold">
        Made with <SvgComponent className="w-24" />
      </footer>
    </div>
  )
}

export default App
