import React from 'react'
import { graphql } from 'gatsby'
import PageWrapper from '../components/page/page'
import PostCard from '../components/blog/postCard'
import SEO from '../components/seo/SEO'

function PageTemplate({ data: { allGraphCmsPost }, pageContext: { title, coverImage } }) {

  const sharingUrl = typeof window !== 'undefined' ? window.location.href : '';
 
  return (
 
    <PageWrapper>

      <SEO
        pageTitle={title}
        pageDescription={`A collection of ${title} content from AdrenalizeMe.com`}
        pageKeywords={`AdrenalizeMe.com, Adrenalize Your Life, Adrenalize Me, ${title}, Adventure, Lifestyle, Cuisine, Recipes, Blog`}
        pageImage={coverImage.url}
        pageUrl={sharingUrl}
      />

      <h1 className="text-center">{title} Posts</h1>

        <div className="featured-grid">

        {allGraphCmsPost.nodes.map((post) => {

          return(

            <PostCard
              title={post.title}
              date={post.formattedDate}
              image={post.coverImage.localFile.childImageSharp.gatsbyImageData}
              excerpt={post.excerpt}
              category={post.category.title}
              tags={post.tags}
              slug={`/${post.category.title.toLowerCase()}/${post.slug}`}
            />
          )

        })}

        </div>

    </PageWrapper>
  )
}

export const pageQuery = graphql`

query CategoryQuery ($title: String!){
    allGraphCmsPost(filter: {category: {title: {eq: $title}}}, sort: {fields: date, order: DESC}) {
        nodes {
          id
          date: formattedDate
          excerpt
          slug
          title
          category {
            title
            coverImage{
              url
            }
          }
          tags      
          coverImage {
            localFile {
              url
              childImageSharp {
                  gatsbyImageData(quality: 100, layout: CONSTRAINED, placeholder: BLURRED)
              }
            }
          }
        }
      }
}
`


export default PageTemplate



