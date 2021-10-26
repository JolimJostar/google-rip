import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { useResultContext } from '../contexts/ResultContextProvider'
import { Loading } from './Loading'

export const Results = () => {

    const { results, isLoading, getResults, searchTerm } = useResultContext();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/videos') {
            getResults(`/search/q=${searchTerm} video&num=40`)
        } else {
            getResults(`${location.pathname}/q=${searchTerm}&num=40`)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTerm, location.pathname])

    if(isLoading) return <Loading />;

    switch (location.pathname) {
        case '/search':
            return (
                <div className='justify-between space-y-6 sm:px-56 grid grid-cols-1 md:grid-cols-2'>
                    {results?.map(({ link, title, description }, index) => (
                        <div key={index} className='md:w-3/5 sm:w-4/5 w-full mt-0'>
                            <a href={link} target="_blank" rel="noreferrer">
                                <p className="text-lg text-blue-700 hover:underline dark:text-blue-300">
                                    {title}
                                </p>
                                <p className="text-sm">
                                    {link.length > 30 ? link.substring(0, 30) : link}
                                </p>
                                <p className='text-sm text-black dark:text-white'>
                                    {description}
                                </p>
                            </a>
                        </div>
                    ))}
                </div>
            );
        case '/images':
            return (
              <div className='flex flex-wrap justify-center items-center'>
                  {results?.map(({ image, link: { href, title }}, index ) => (
                      <a href={href} className="sm:p-3 p-5" key={index} target="_blank" rel="noreferrer">
                          <img src={image?.src} alt={title} loading="lazy"/>
                          <p className="w-36 break-words text-sm mt-2">
                            {title}
                          </p>
                      </a>
                  ))}
              </div>  
            );
        case '/news':
            return (
                <div className='justify-between space-y-6 sm:px-56 grid grid-cols-1 items-center md:grid-cols-2'>
                    {results?.map(({ links, id, source, title }) => (
                        <div key={id} className='md:w-3/5 sm:w-4/5 w-full mt-0'>
                            <a href={links?.[0].href} target="_blank" rel="noreferrer" className="hover:underline">
                                <p className="text-lg text-blue-700 dark:text-blue-300">
                                    {title}
                                </p> 
                                <div className='flex gap-4'>
                                    <a href={source?.href} target="_blank" rel="noreferrer">
                                        {source?.href}
                                    </a>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            );
        case '/videos':
            return (
                <div className='flex flex-wrap'>
                    {results.map((video, index) => (
                        <div key={index} className='p-2'>
                            <ReactPlayer url={video.additional_links[0].href} controls width='355' height='200' />
                        </div>
                    ))}
                </div>
            );
        default:
            return 'Default';
    }
}
