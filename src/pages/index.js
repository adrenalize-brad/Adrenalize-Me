import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import LandingPage from '../components/landing/landingPage'
import PostCard from '../components/blog/postCard'
import SEO from '../components/seo/SEO'

const Index = () => {

  const data = useStaticQuery(graphql`
    {
      siteID: graphCmsSiteId{
        coverImage{
          url
        }
      },
      allGraphCmsPost(filter: {featured: {eq: true}}, limit: 3) {
        nodes {
          title
          excerpt
          formattedDate
          slug
          category{
            title
          }
          tags
          coverImage {
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: CONSTRAINED, placeholder: BLURRED)
              }
            }
          }
        }
      },
      graphCmsLandingSection{
        title
        backgroundImage {
          localFile {
            childImageSharp {
              fluid(quality:100){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const sharingUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (

    <React.Fragment>

      <SEO
        pageTitle="Home"
        pageDescription="Welcome to AdrenalizeMe.com - We create visually stunning and emotionally connected content for lovers of travel and adventure. Come along with us on our amazing adventures!"
        pageKeywords="AdrenalizeMe.com, Adrenalize Your Life, Adrenalize Me, Travel, Adventure, Lifestyle, Cuisine, Recipes, Blog"
        pageImage={data.siteID.coverImage.url}
        pageUrl={sharingUrl}
      />

      <LandingPage
        title={data.graphCmsLandingSection.title}
        backgroundImage={data.graphCmsLandingSection.backgroundImage.localFile.childImageSharp.fluid}
      >

        <div className="featured-grid">

        {data.allGraphCmsPost.nodes.map((post) => {

          return(

            <PostCard
              title={post.title}
              date={post.formattedDate}
              image={post.coverImage.localFile.childImageSharp.gatsbyImageData}
              excerpt={post.excerpt}
              category={post.category.title}
              categoryUrl={`/${post.category.title.toLowerCase()}`}
              tags={post.tags}
              slug={`/${post.category.title.toLowerCase()}/${post.slug}`}
            />
          )

        })}

        </div>

      </LandingPage>

    </React.Fragment>
  )
}

 
export default Index 
