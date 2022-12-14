import React from 'react'

const SearchIcon = ({ className, size = '24' }) => {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width={size} height={size} viewBox="0 0 64 64" className={className}>
            <path d="M62.016 54.462l-15.16-12.893c-1.567-1.41-3.243-2.058-4.597-1.995 3.578-4.192 5.74-9.63 5.74-15.573 0-13.255-10.745-24-24-24s-24 10.745-24 24 10.745 24 24 24c5.944 0 11.382-2.162 15.574-5.74-0.063 1.354 0.585 3.030 1.995 4.597l12.893 15.16c2.208 2.453 5.814 2.66 8.014 0.46s1.993-5.806-0.46-8.014zM24 40c-8.836 0-16-7.163-16-16s7.163-16 16-16 16 7.163 16 16-7.163 16-16 16z" fill="#FFFFFF"></path>
        </svg>
    )
}

export default SearchIcon