import React from 'react'
import PageWrapper from '../components/page/page'
import { MDXRenderer } from 'gatsby-plugin-mdx'

function PageTemplate({ pageContext: { page } }) {

  return (

    <PageWrapper>

      <div className="page-header">

        <h1>{page.title}</h1>

        {page.excerpt && (
          <p>{page.excerpt}</p>
        )}

      </div>

       <div className="page-content">
          <MDXRenderer>{page.content.markdownNode.childMdx.body}</MDXRenderer>
       </div>

    </PageWrapper>
  )
}

export default PageTemplate
