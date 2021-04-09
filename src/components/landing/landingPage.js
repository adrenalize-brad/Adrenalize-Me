import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Jello from 'react-reveal/Jello';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import BackgroundImage from 'gatsby-background-image'
import './landing.scss'
 
const LandingPage = ({ children, title, backgroundImage }) => {

    const data = useStaticQuery(graphql`
    {
        graphCmsSiteId {
            logo {
                localFile {
                    childImageSharp {
                        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, quality:100)
                    }
                }
            }
        },
    }
    `)

    return(

        <div className="landing-wrapper">

            <div className="background-wrapper">

                <BackgroundImage className="background-image" fluid={backgroundImage}/>

            </div>

            <div className="content-wrapper">

                <div className="landing-logo">
                    <Jello>
                        <GatsbyImage className="ml-5" image={data.graphCmsSiteId.logo.localFile.childImageSharp.gatsbyImageData} alt="Logo"/>
                    </Jello>
                </div>

                <Fade top cascade>
                    <div className="flex flex-row justify-center text-white">
                        <h2 className="mx-1">mind</h2>
                        <h2 className="mx-1">body</h2>
                        <h2 className="mx-1">soul</h2>
                    </div>
                </Fade>

                <Bounce bottom>
                    <h1 className="text-black text-center">adrenalize your life.</h1>
                </Bounce>

                <div className="welcome">
                    <p>Welcome back - it's been awhile! In fact, it's been nearly a year since we were last online, but we're back now with a brand new site. Go on then, have a look around and enjoy following us on our many adventures. Cheers! - Brad & Ev</p>
                </div>

                <div className="header">
                    <h1>{title}</h1>
                </div>

                {children}
            </div>

        </div>

    )
}


export default LandingPage