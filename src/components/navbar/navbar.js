import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../../hooks/closeMenu'
import { graphql, useStaticQuery, Link } from 'gatsby';
import './nav.scss';
import MenuToggle from './menuToggle'
import MobileNav from './mobileNav'
import MobileMenuItem from './mobileMenuItem'
import MobileSocialItem from './mobileSocialItem'
import NavLogo from './navLogo';
import { SearchOpenToggle, SearchCloseToggle } from '../search/searchToggle'
import SearchOverlay from '../search/SearchOverlay'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Navbar = () => {

    const [open, setOpen] = useState(false);
    const [toggleOpen, setToggleOpen] = useState(false);

    const node = useRef(); 
    useOnClickOutside(node, () => setOpen(false));
    
    if (typeof window !== "undefined") {
        require("smooth-scroll")('a[href*="#"]')
    }

    const data = useStaticQuery(graphql`
        {
            graphCmsSiteId {
                title
                caption
                logo {
                    localFile {
                        childImageSharp {
                            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, quality:100)
                        }
                    }
                }
            },
            graphCmsMenu{
                menuItems{
                    title
                    slug
                    id
                }
                socialItems{
                    title
                    url
                    iconClass
                    id
                }
            }
        }
    `)

    const siteId = data.graphCmsSiteId;
    const menuItems= data.graphCmsMenu.menuItems;
    const socialItems = data.graphCmsMenu.socialItems;


    return(

        <nav ref={node} className="navbar">

            <NavLogo
                    linkUrl="/"
                    image={siteId.logo.localFile.childImageSharp.gatsbyImageData}
                    imageAlt="AdrenalizeMe.com Logo"
                    title={siteId.title}
                    caption={siteId.caption}
                />

            <div className="desktop-menu">

                {menuItems.map((menuItem) => {

                    return(

                            <Link 
                                className="menu-item"
                                to={`/${menuItem.slug}`}
                                alt={menuItem.title}
                                aria-label={`Link to ${menuItem.title} page`}
                                key={menuItem.id}
                            >
                                {menuItem.title}
                            </Link>

                )})}

                <div className="search-wrapper">

                     <SearchOpenToggle toggleOpen={toggleOpen} setToggleOpen={setToggleOpen}/>

                    <SearchOverlay toggleOpen={toggleOpen} setToggleOpen={setToggleOpen} closeToggle={<SearchCloseToggle toggleOpen={toggleOpen} setToggleOpen={setToggleOpen} />}/>
                    
                </div> 

                <div className="social-wrapper">

                    {socialItems.map((socialItem => {

                        return(

                            <a
                                className="social-item"
                                href={socialItem.url}
                                alt={socialItem.title}
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label={`Link to AdrenalizeMe.com ${socialItem.title} page`}
                                key={socialItem.id}
                            >
                                <FontAwesomeIcon icon={['fab', `${socialItem.iconClass}`]} />
                            </a>

                        )

                    }))}

                </div>

            </div>
            
            <MenuToggle open={open} setOpen={setOpen} />

            <MobileNav open={open} setOpen={setOpen} className="mobile-menu shadow-md">

                <div className="menu-wrapper">

                    {menuItems.map((menuItem) => {

                        return(

                            <MobileMenuItem
                                className="menu-item"
                                url={`/${menuItem.slug}`}
                                alt={menuItem.title}
                                title={menuItem.title}
                                open={open}
                                setOpen={setOpen}
                                ariaLabel={`Link to ${menuItem.title} page`}
                                key={menuItem.id}
                            />
                        
                    )})}

                </div>

                <div className="social-wrapper">

                    {socialItems.map((socialItem => {

                        return(

                            <MobileSocialItem
                                className="social-item"
                                url={socialItem.url}
                                alt={socialItem.title}
                                iconClass={socialItem.iconClass}
                                open={open}
                                setOpen={setOpen}
                                ariaLabel={`Link to AdrenalizeMe.com ${socialItem.title} page`}
                                key={socialItem.id}
                            />

                        )

                    }))}

               <SearchOpenToggle toggleOpen={toggleOpen} setToggleOpen={setToggleOpen}/>
                <SearchOverlay toggleOpen={toggleOpen} setToggleOpen={setToggleOpen} closeToggle={<SearchCloseToggle toggleOpen={toggleOpen} setToggleOpen={setToggleOpen} />}/>
                
                
                </div>

            </MobileNav>


        </nav>
    )
}   

export default Navbar