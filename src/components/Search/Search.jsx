import './Search.scss';
import React, { useState } from 'react'

export default function Search( { ...props } ) {
  const [query, setQuery] = useState( '' );

  const handleSearch = ( e ) => {
    if (query !== '' ) {
      console.log(query);
    }
  }

  return (

    <input
      {...props}
      type="search"
      inputMode='search'
      value={query}
      name='search'
      onChange={(e) => {
        setQuery( e.target.value );
        handleSearch();
      }}
      autoComplete='on'
    />

  )
}
