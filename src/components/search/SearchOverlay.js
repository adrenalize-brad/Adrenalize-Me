import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Pagination, Hits, SearchBox, RefinementList, ClearRefinements, Configure, PoweredBy } from 'react-instantsearch-dom';
import { orderBy } from 'lodash';
import SearchHit from './SearchHit';
import { bool, func } from 'prop-types';
import { StyledSearch } from './SearchOverlay.styled';
import './search.scss'

const client = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_API_KEY
);

const SearchOverlay = ({ toggleOpen, closeToggle }) => {

  return (

    <StyledSearch open={toggleOpen} className="search-overlay">

        <InstantSearch searchClient={client} indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}>
        
        <div className="header">
          <h1>Search</h1>
            <SearchBox />
          {closeToggle}
        </div>

        <div className="search-filter">
            <h2>Filter by:</h2>
            <h3>Category</h3>
            <RefinementList attribute="category" transformItems={items => orderBy(items, "label", "asc")}/>
            <h3>Tag</h3>
            <RefinementList attribute="tags" limit={5} showMore="true" transformItems={items => orderBy(items, "label", "asc")}/>
            <Configure hitsPerPage={5} />
            <ClearRefinements />
        </div>

        <div className="search-results">
            <Hits hitComponent={SearchHit} />
        </div>

        <Pagination />
        <PoweredBy />

        </InstantSearch>

    </StyledSearch>

  );
}

SearchOverlay.propTypes = {
  toggleOpen: bool.isRequired,
  setToggleOpen: func.isRequired,
}

export default SearchOverlay;
