import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Layout from './src/components/page/layout'
import './src/styles/global.css';
import './src/styles/defaults.scss'

const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  )
  if (answer === true) {
    window.location.reload()
  }
}

const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}

const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

const wrapRootElement = ({ element }) =>

    <MDXProvider>{element}</MDXProvider>


  
export { wrapPageElement, wrapRootElement, onClientEntry, onServiceWorkerUpdateReady }