import React from 'react';
import SearchCard from './searchCard'
   
const SearchHit = ({ hit: { objectID, title, date, excerpt, slug, category, tags, coverImage } }) => (

<div>
  <article key={objectID}>

          <SearchCard
            title={title}
            date={date}
            image={coverImage}
            excerpt={excerpt}
            category={category}
            categoryUrl={`/${category.toLowerCase()}`}
            tags={tags}
            slug={`/${category.toLowerCase()}/${slug}`}
          />
  
  </article>
  </div>
);

export default SearchHit;
