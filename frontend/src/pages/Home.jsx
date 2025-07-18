import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import MovieList from '../components/MovieList';

function Home() {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({});

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🎬 Movie Search</h1>
      <SearchBar onSearch={setQuery} />
      <Filters onFilterChange={setFilters} />
      <MovieList query={query} filters={filters} />
    </div>
  );
}

export default Home;