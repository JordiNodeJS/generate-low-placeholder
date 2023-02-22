import SvgComponent from './components/Cloudinary'

function App() {
  return (
    <div className="m-auto grid h-screen w-full max-w-xl place-content-center">
      <header className="flex justify-center py-10">
        <h1 className='text-3xl font-bold text-blue-900 tracking-tighter'>
          Remove<span className='text-blue-600'>bg</span>
        </h1>
      </header>
      <main></main>
      <footer className="flex items-center justify-center gap-x-2 font-semibold">
        Made with <SvgComponent className="w-24" />
      </footer>
    </div>
  )
}

export default App
