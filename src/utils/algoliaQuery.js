const algoliaQuery = `
  {
    posts: allGraphCmsPost {
      nodes {
          objectID: id
          title
          excerpt
          slug
          date: formattedDate
          category{
            title
          }
          coverImage{
            localFile{
              childImageSharp{
                gatsbyImageData
              }
            }
          }
          tags
      }
    }
  }
`;
  
module.exports = algoliaQuery;
