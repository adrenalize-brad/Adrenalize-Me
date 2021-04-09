import React from 'react'
import Button from '../button/button'
 
const Card = ({ cardClass, imageSrc, imageAlt, imageClass, imageWrapperClass, title, titleClass, caption, captionClass, price, priceClass, buttonTitle, buttonUrl, buttonClass }) => {

    return(

        <div className={cardClass}>

            <div className={imageWrapperClass}>
                <img className={imageClass} src={imageSrc} alt={imageAlt} />
            </div>

            <h2 className={titleClass}>{title}</h2>
            <p className={captionClass}>{caption}</p>
            <p className={priceClass}>{price}</p>

            <Button
                buttonClass={buttonClass}
                title={buttonTitle}
                url={buttonUrl}
            />

        </div>

    )
}

export default Card