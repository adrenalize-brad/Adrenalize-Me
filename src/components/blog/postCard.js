import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Tag from './tag'
import Button from '../button/button'
import './blog.scss'
  
const PostCard = ({ title, date, image, excerpt, category, tags, slug, categoryUrl, key }) => {

    return(

        <div className="post-card-wrapper" key={key}>

            <h1>{title}</h1>

            <span className="date">{date}</span>

            <GatsbyImage image={image} alt={title}/>

            <p className="excerpt">{excerpt}</p>

            <div className="post-data">

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

            </div>

            <Button title="Read More" url={slug.toLowerCase()} ariaLabel={`Read the full post about ${title}`}/>

        </div>
    )
}

export default PostCard