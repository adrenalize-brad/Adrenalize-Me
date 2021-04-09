import React from 'react'
import { graphql } from 'gatsby'
import PageWrapper from '../components/page/page'
import CategoryPosts from '../components/blog/categoryPosts'
import PostCard from '../components/blog/postCard'
import { FacebookShareButton, FacebookMessengerShareButton, LinkedinShareButton, TwitterShareButton, PinterestShareButton, RedditShareButton, WhatsappShareButton, EmailShareButton } from 'react-share'
import { GatsbyImage } from "gatsby-plugin-image";
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { FacebookIcon, FbMessengerIcon, LinkedInIcon, TwitterIcon, PinterestIcon, RedditIcon, WhatsappIcon, EmailIcon } from '../components/icons/icons'
import SEO from '../components/seo/SEO'
 
function PostTemplate({
  data: { authorImage, coverImage, categoryPosts }, 
  pageContext: { page }
}) {
 
  const sharingUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (

    <PageWrapper>

      <SEO
        pageTitle={page.title}
        pageDescription={page.excerpt}
        pageKeywords={page.tags}
        pageImage={coverImage.localFile.url}
        pageUrl={sharingUrl}
      >
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "${sharingUrl}"
            },
            "headline": "${page.title}",
            "description": "${page.title}",
            "image": "${coverImage.localFile.url}",  
            "author": {
              "@type": "Person",
              "name": "${page.author.name}"
            },  
            "publisher": {
              "@type": "Organization",
              "name": "AdrenalizeMe.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://media.graphcms.com/vQu2yOFQTKCAhPdOMDgY"
              }
            },
            "datePublished": "${page.date}"
          }`}
          </script>
      </SEO>

      <article>
    
        <div className="header">
          <h1>{page.title}</h1>
        </div>

        <div className="author">
          {authorImage && (
            <GatsbyImage 
              image={authorImage.localFile.childImageSharp.gatsbyImageData}
              alt={`Author image for post: ${page.title}`}
              className="author-image"
              fadeIn={false}
            />
          )}
          <div className="author-data">
            <h5>Written by</h5>
            <h4>{page.author.name}</h4>
            <span>{page.date}</span>
          </div>
        </div>

        <div className="excerpt md:text-center">
          <p>{page.excerpt}</p>
        </div>

        {coverImage && (
        <GatsbyImage 
          image={coverImage.localFile.childImageSharp.gatsbyImageData}
          alt={`Cover image for post: ${page.title}`}
          className="post-image"
          fadeIn={false}
        />
        )}

        <div className="post-content">
          <MDXRenderer>{page.content.markdownNode.childMdx.body}</MDXRenderer>
        </div>

        <div className="social-sharing text-center">

          <div className="wrapper">

            <p>Be Cool. Share with your friends.</p>

            <FacebookShareButton 
              url={sharingUrl}
              quote={page.excerpt}
              hashtag={`#${page.title}`}
            >
            <FacebookIcon/>
            </FacebookShareButton>

            <FacebookMessengerShareButton
              url={sharingUrl}
            >
            <FbMessengerIcon/>
            </FacebookMessengerShareButton>

            <LinkedinShareButton 
              url={sharingUrl}
              title={page.title}
              summary={page.excerpt}
              source="https://www.adrenalizeme.com"
            >
            <LinkedInIcon/>
            </LinkedinShareButton>

            <TwitterShareButton 
              url={sharingUrl}
              title={page.title}
              hashtags={page.tags}
            >
            <TwitterIcon/>
            </TwitterShareButton>

            <PinterestShareButton 
              url={sharingUrl}
              media={coverImage.localFile.url}
              description={page.excerpt}
            >
            <PinterestIcon/>
            </PinterestShareButton>

            <RedditShareButton 
              url={sharingUrl}
              title={page.title}
            >
            <RedditIcon/>
            </RedditShareButton>

            <WhatsappShareButton 
              url={sharingUrl}
              title={page.title}
            >
            <WhatsappIcon/>
            </WhatsappShareButton>

            <EmailShareButton 
              url={sharingUrl}
              subject={page.title}
              body={page.excerpt}
            >
            <EmailIcon/>
            </EmailShareButton>

          </div>

        </div>

        <div className="more">

          <h3 className="text-center">More {page.category.title} Posts:</h3>

          <CategoryPosts>

            {categoryPosts.nodes.map((post) => {

              return(

                <PostCard
                  title={post.title}
                  image={post.coverImage.localFile.childImageSharp.gatsbyImageData}
                  slug={`/${post.category.title.toLowerCase()}/${post.slug}`}
                  tags=""
                />

              )})}

          </CategoryPosts>

        </div>

      </article>

    </PageWrapper>
  );
}

export const pageQuery = graphql`
  fragment AssetFields on GraphCMS_Asset {
    id
    localFile {
      url
      childImageSharp {
          gatsbyImageData(quality: 100, layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
  }
  query PostQuery($id: String!, $category: String!) {
    authorImage: graphCmsAsset(
      authorAvatar: {
        elemMatch: { posts: { elemMatch: { id: { in: [$id] } } } }
      }
    ) {
      ...AssetFields
    }
    coverImage: graphCmsAsset(
      coverImagePost: { elemMatch: { id: { eq: $id } } }
    ) {
      ...AssetFields
    }
    categoryPosts: allGraphCmsPost (filter: { category: { title: { eq: $category }}}, sort: {fields: date, order: DESC}, limit: 3) {
      nodes{
        title
        slug
        tags
        category{
          title
        }
        coverImage{
          localFile{
            url
            childImageSharp{
              gatsbyImageData(quality: 100, layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`

export default PostTemplate
