import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Tag from '../blog/tag'
import Button from '../button/button'
   
const SearchCard = ({ title, date, image, excerpt, category, tags, slug, categoryUrl }) => {

    return(

        <div className="search-card-wrapper">
            
            <Link className="image-link" to={slug.toLowerCase()}>
                <GatsbyImage image={image} alt={title}/>
            </Link>

            <div className="post-data">

            <Link to={slug.toLowerCase()}><h1>{title}</h1></Link>

                <span className="date">{date}</span>

                <p className="excerpt">{excerpt}</p>

                <div className="category">
                    <p>Category:</p> 
                    <span><Link to={categoryUrl}>{category}</Link></span>
                </div>

                <div className="tags">
                    <p>Tags:</p> 

                    <div className="tags-wrapper">

                        {Object.values(tags).map((item) => (
                            <Tag key={item}>{item}</Tag>
                        ))}

                    </div>

                </div>

                <Button title="Read More" url={slug.toLowerCase()} ariaLabel={`Read the full post about ${title}`}/>

            </div>

            

        </div>
    )
}

export default SearchCard