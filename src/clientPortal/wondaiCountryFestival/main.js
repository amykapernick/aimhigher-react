import React, { Component } from 'react';
import Helmet from 'react-helmet';

// Components
import { StyleGuide } from './styleGuide';

//Resources
// import '../resources/about.css';

class Meta extends Component {
    render() {
        let name = 'Wondai Country Running Festival - Client Information';
        let description ="Want to know more about the style guides we make?";
        let slug = 'wondai-country-festival';
        let image = 'https://aimhigherwebdesign.com.au/img/logo.png';
        return (
            <Helmet>
                <title>{name}</title>
                <meta name="description" content={description} />
                <link rel="canonical" href={'https://aimhigherwebdesign.com.au/' + slug} />

                {/* Facebook */}
                <meta property="og:url" content={'https://aimhigherwebdesign.com.au/' + slug} />
                
                <meta property="og:title" content={name} />
                <meta property="og:image" content={image} />
                <meta property="og:description" content={description} />

                {/* Twitter */}
                <meta name="twitter:url" content={'https://aimhigherwebdesign.com.au/' + slug} />
                <meta name="twitter:title" content={name} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={image} />
            </Helmet>
        );
    }
};

export class WondaiCountry extends Component {
    render() {
        return (
            <div className="content">
                <Meta />
                <h1>Wondai Country Running Festival</h1>
                <div className="wrap">
                    <StyleGuide />
                </div>
            </div>
        );
    }
};