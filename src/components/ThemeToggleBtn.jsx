import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeToggleBtn = ({theme, setTheme}) => {

    useEffect(() => {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
        matches;
        setTheme(theme || (prefersDarkMode? 'dark':'light'))
    }, [])

    useEffect(() => {
        document.documentElement.classList.remove('dark', 'light');
        document.documentElement.classList.add(theme);


        
        localStorage.setItem('theme', theme)
    }, [theme])
  return (
    <div>
      <button>
        {theme === 'dark' ? (
            <img onClick={() => setTheme('light')} 
            src={assets.sun_icon} alt="" className='
            size-8.5 border border-gray-500 rounded-full'/>
        ): (
            <img onClick={() => setTheme('dark')}
            src={assets.moon_icon} 
            className='size-8.5 border border-gray-500 rounded-full' alt="" />
        )}
      </button>
    </div>
  )
}

export default ThemeToggleBtn
