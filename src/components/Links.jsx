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
            Links
        </div>
    )
}
