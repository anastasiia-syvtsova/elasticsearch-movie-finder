import React ,{useState} from "react";

function SearchBar({onSearch}){
  //Store what the user types in the box. 
  //At first, it's an empty string: ''.
  // "setQuery" is how "query" will be changed later.
  const [query, setQuery] = useState('');

  //by return -> what will be shown on the screen
  return(
    <div className="search-bar">
      <input type="text" placeholder="Search for a movie ..."
      value={query}
      onChange={(e)=> setQuery(e.target.value)}
      />

      <button onClick={()=>onSearch(query)}>Search</button>

    </div>
  );
}

export default SearchBar;