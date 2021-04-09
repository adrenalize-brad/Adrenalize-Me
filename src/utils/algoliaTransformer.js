const algoliaTransformer = ({
    data: { posts }
}) =>
    posts.nodes.map(
        ({
            id,
            title,
            excerpt,
            date,
            slug,
            category,
            coverImage,
            tags,
            ...posts
        }) => {

            return{
                ...posts,
                ObjectID: id,
                title,
                excerpt,
                date,
                slug,
                coverImage: coverImage.localFile.childImageSharp.gatsbyImageData,
                category: category.title,
                tags,
            };
        }
    );
  
    module.exports = algoliaTransformer;