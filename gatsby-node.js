const path = require('path')

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const { data } = await graphql(
    `
      { 
        pages: allGraphCmsPage {
          nodes {
            id
            content {
              markdownNode {
                childMdx {
                  body
                }
              }
            }
            slug
            excerpt
            title
          }
        }
        categories: allGraphCmsCategory{
          nodes{
              title
              coverImage{
                url
              }
              posts{
                title
                excerpt
              }
            }
          }
        posts: allGraphCmsPost(sort: { fields: date, order: ASC }) {
          edges {
            page: node {
              id
              author {
                id
                name
                title
              }
              content {
                markdownNode {
                  childMdx {
                    body
                  }
                }
              }
              date: formattedDate
              excerpt
              category {
                title
              }
              slug
              title
            }
          }
        }
      }
    `)



  data.categories.nodes.forEach(({ title, posts, coverImage }) => {
    createPage({
      component: path.resolve('./src/templates/category.js'),
      context: {
        title,
        coverImage,
        posts,
      },
      path: `/${title.toLowerCase()}`,
    })
  })

  data.posts.edges.forEach(({ page }) => {

    createPage({
      component: path.resolve('./src/templates/post.js'),
      context: {
        id: page.id,
        category: page.category.title,
        page,
      },
      path: `/${page.category.title.toLowerCase()}/${page.slug}`,
    })
  })
}

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    GraphCMS_Post: {
      formattedDate: {
        type: 'String',
        resolve: (source) => {
          const date = new Date(source.date)

          return new Intl.DateTimeFormat('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }).format(date)
        },
      },
    },
  }

  createResolvers(resolvers)
}
