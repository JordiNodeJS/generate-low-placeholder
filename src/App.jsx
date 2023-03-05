import DarkModeToggle from './components/DarkModeToggle'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

function App() {
  return (
    <div className="m-auto grid h-screen w-full max-w-xl grid-cols-1">
      <DarkModeToggle />
      <Header />
      <Main />
     <Footer />
    </div>
  )
}

export default App
