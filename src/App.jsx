import CloudinaryUploadWidget from './components/CloudinaryUploadWidget'
import SvgComponent from './components/Cloudinary'
// import DropzoneImage from './components/DropzoneImage'
import TestReducer from './components/TestReducer'

function App() {
  return (
    <div className="grid w-full h-screen max-w-xl grid-cols-1 m-auto place-content-center">
      <TestReducer />
      <header className="flex justify-center py-10">
        <h1 className="text-3xl font-bold tracking-tighter text-blue-900">
          Remove<span className="text-blue-600">bg</span>
        </h1>
      </header>
      <main>
        <h1 className="text-center">Drag and Drop Test</h1>
      <CloudinaryUploadWidget />
        {/* <DropzoneImage /> */}
      </main>
      <footer className="flex items-center justify-center font-semibold gap-x-2">
        Made with <SvgComponent className="w-24" />
      </footer>
    </div>
  )
}

export default App
