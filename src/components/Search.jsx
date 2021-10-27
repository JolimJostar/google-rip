import React, { useEffect } from 'react'
import { useDebounce } from 'use-debounce'
import { Links } from './Links'
import { useResultContext } from '../contexts/ResultContextProvider'
 
export const Search = ({text, setText}) => {
    const { setSearchTerm } = useResultContext();
    const [debouncedValue] = useDebounce(text, 1000);

    useEffect(() => {
        if (debouncedValue) setSearchTerm(debouncedValue)
    }, [debouncedValue])

    return (
        <div className='relative mt-3 sm:ml-48 sm:-mt-10 md:ml-72 '>
            <input 
                value={text} 
                type='text' 
                className='w-80 h-10 border rounded-full shadow-sm outline-none p-6 text-black dark:bg-gray-200 hover:shadow-lg' 
                placeholder='Search here, bro'
                onChange={(e) => setText(e.target.value)}
                id='TextInput'
            />
            {text && (
                <button 
                    type='button' 
                    className='absolute top-1.5 right-4 text-2xl text-gray-500' 
                    onClick={() => setText('')} >
                    X
                </button>
            )}
            <Links />
        </div>
    )
}

