import { useState, useEffect } from 'react'
import Moon from './icons/Moon'
import Sun from './icons/Sun'

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Actualizar el tema al cambiar la variable `isDarkMode`
    document.documentElement.setAttribute(
      'data-theme',
      isDarkMode ? 'dark' : 'midutheme'
    )
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className="mt-2 text-right">
      <label className="swap swap-rotate scale-75">
        {/* <!-- this hidden checkbox controls the state --> */}
        <input onClick={toggleDarkMode} type="checkbox" />
        <Sun className="swap-on h-10 w-10 fill-current" />
        <Moon className="swap-off h-10 w-10 fill-current" />
      </label>
    </div>
  )
}

export default DarkModeToggle
