import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search } from './Search'

export const Navbar = ({darkTheme, setDarkTheme}) => {
    
    const [text, setText] = useState('');

    return (
        <div className='p-3 pb-0 flex flex-wrap justify-center items-center border-b dark:border-gray-600 sm:justify-between'>
            <div className="flex justify-between items-center space-x-5 w-screen">
                <Link to="/search">
                    <button
                        className="text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-500" >
                        Янугл 🔍
                    </button>
                </Link>
                <button type="button" className="text-xl bg-white border rounded-full px-2 py-1 dark:bg-gray-50 dark:text-gray-900 hover:shadow-lg" onClick={() => setDarkTheme(!darkTheme)}>
                    {darkTheme ? 'Light 💡' : 'Dark 🌙'}
                </button>
            </div>
            <Search text={text} setText={setText}/>
        </div>
    )
}
