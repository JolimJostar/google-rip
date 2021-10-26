import React from 'react'
import { NavLink } from 'react-router-dom'


const links = [
    { url: '/search', text: '🔎 All' },
    { url: '/news', text: '📰 News' },
    { url: '/images', text: '📸 Images' },
    { url: '/videos', text: '📺 Videos' },
];

export const Links = () => {
    return (
        <div className='flex justify-between items-center mt-4 sm:justify-between'>
            {links.map(( { url, text } ) => (
                <NavLink to={url} activeClassName='text-blue-700 border-b-2 border-blue-700 pb-2 dark:text-blue-300' >
                    {text}
                </NavLink>
            ))}
        </div>
    )
}
