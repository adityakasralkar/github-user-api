import React , { useState }from 'react'

const SearchBar = ({fetchUserDetails}) => {

    const [searchQuery, setSearchQuery] = useState("");
    //state for input by user as prop
  
    const handleChange = (event) => {
      setSearchQuery(event.target.value);
      // call the api method which is passed
      //as props
      fetchUserDetails(searchQuery);
    };

  return (
    <div>
    <input value={searchQuery} onChange={handleChange} />
  </div>
  )
}

export default SearchBar