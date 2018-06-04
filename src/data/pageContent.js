import React, {Fragment} from 'react';

const About = {
    title: 'About',
    meta: {
        name: 'About | AimHigher Web Design',
        description: "Who are we? Where did we come from? What are we even doing here?",
        slug: 'about',
    },
    content: (
        <Fragment>
           <div>
                <p>
                    I grew up in country Queensland and most people we
                    knew had small businesses. But when I found out how
                    much it cost them to get a website built, I couldn't
                    believe it.
                </p>
                <p>
                    AimHigher Web Design was founded to help bridge the
                    gap between small businesses and technology, and
                    help everyone (no matter what size your business is,
                    or if you're a sole trader), get their business
                    online.
                </p>
                <p>
                    We specialise in helping you out with the entire
                    process, starting the website, setting up social
                    media, setting up emails and any of the ongoing
                    support and maintenance requirements.
                </p>
                <p>
                    You know your business the best, and we know the
                    web. Let us help you, and leave you to focus on what
                    you know best!
                </p>
            </div>
        </Fragment>
    )
};

const Pages = {
    about: About,
};

export default Pages;