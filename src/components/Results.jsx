import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { useResultContext } from '../contexts/ResultContextProvider'
import { Loading } from './Loading'

export const Results = () => {

    const { results, isLoading, getResults, searchTerm } = useResultContext();
    const location = useLocation();

    useEffect(() => {
        if (searchTerm !== '') {
          if (location.pathname === '/videos') {
            getResults(`/search/q=${searchTerm} videos`);
          } else {
            getResults(`${location.pathname}/q=${searchTerm}&num=40`);
          }
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [searchTerm, location.pathname]);

    if(isLoading) return <Loading />;

    switch (location.pathname) {
        case '/google-rip':
            return(
                <div className='flex justify-center align-middle flex-col'>
                    <h1 className='text-xl md:text-7xl text-black dark:text-white mx-2 my-5 text-center'>Yan's personal google clone</h1>
                    <p className='text-sm md:text-3xl text-center text-gray-800 dark:text-gray-300'>Put something into searchbar and start exploring!</p>
                </div>
            );
        case '/search':
            return (
                <div className='justify-between gap-10 sm:px-24 grid grid-cols-1'>
                    {results?.results?.map(({ link, title, description }, index) => (
                        <div key={index} className="md:w-3/5 w-full">
                            <a href={link} target="_blank" rel="noreferrer">
                                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">{title}</p>
                                <p className="text-xs">{link.length > 30 ? link.substring(0, 30) : link}</p>
                                <p className="text-sm text-blue-900 dark:text-blue-500" >{description}</p>
                            </a>
                        </div>
                    ))}
                </div>
            );
        case '/images':
            return (
              <div className='flex flex-wrap justify-center items-center'>
                {results?.image_results?.map(({ image, link: { href, title } }, index) => (
                    <a href={href} target="_blank" key={index} rel="noreferrer" className="sm:p-3 p-5">
                        <img src={image?.src} alt={title} loading="lazy" />
                        <p className="sm:w-36 w-36 break-words text-sm mt-2">{title}</p>
                    </a>
                ))}
              </div>  
            );
        case '/news':
            return (
                <div className='justify-between gap-10 sm:px-24 grid grid-cols-1 md:grid-cols-2'>
                    {results?.entries?.map(({ id, links, source, title }) => (
                        <div key={id} className="md:w-4/5 w-full ">
                            <a href={links?.[0].href} target="_blank" rel="noreferrer " className="hover:underline ">
                                <p className="text-lg dark:text-blue-300 text-blue-700">{title}</p>
                            </a>
                            <div className="flex gap-4">
                                <a href={source?.href} target="_blank" rel="noreferrer" className="hover:underline hover:text-blue-300"> {source?.href}</a>
                            </div>
                        </div>
                    ))}
                </div>
            );
        case '/videos':
            return (
                <div className='flex flex-wrap'>
                    {results?.results?.map((video, index) => (
                        <div key={index} className="p-2">
                            {video?.additional_links?.[0].href && <ReactPlayer url={video.additional_links?.[0].href} controls width="355px" height="200px" />}
                        </div>
                    ))}
                </div>
            );
        default:
            return 'Default';
    }
}
