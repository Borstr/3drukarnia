import * as React from "react"
import { Helmet } from "react-helmet"

function SEO({ description, meta, title }) {

    return ( 
        <Helmet htmlAttributes = {
            {
                lang: 'pl',
            }
        }
        title = { title }
        meta = {
            [{
                    name: `description`,
                    content: description,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: description,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: ``,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: description,
                },
            ].concat(meta)
        }
        />
    )
}

export default SEO