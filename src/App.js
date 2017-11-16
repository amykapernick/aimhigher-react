import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Helmet} from 'react-helmet';


//Resources
import './resources/content.css';

//Components
// import {menuItems} from './partial/header.js';
import {Home} from './layouts/home.js';
import {About} from './layouts/about.js';
import {ProductsServices} from './layouts/products.js';
import {Portfolio} from './layouts/portfolio.js';
import {Faq} from './layouts/faq.js';
import {CodeEthics} from './layouts/ethics.js';
import {Contact} from './layouts/contact.js';
import {Terms} from './layouts/terms.js';
import {Privacy} from './layouts/privacy.js';

//Variables
export const menuItems = [
  {
    slug: '/',
    title: 'Home',
    component: () => <Home />,
  },
  {
    slug: '/about-us',
    title: 'About Us',
    component: () => <About />,
  },
  {
    slug: '/products-services',
    title: 'Products and Services',
    component: () => <ProductsServices />,
  },
  {
    slug: '/portfolio',
    title: 'Portfolio',
    component: () => <Portfolio />,
  },
  {
    slug: '/faq',
    title: 'FAQ',
    component: () => <Faq />,
  },
  {
    slug: '/code-of-ethics',
    title: 'Code of Ethics',
    component: () => <CodeEthics />,
  },
  {
    slug: '/contact',
    title: 'Contact',
    component: () => <Contact />,
  },
];

export const legalItems = [
  {
    slug: '/privacy',
    title: 'Privacy Policy',
    component: () => <Privacy />,
  },
  {
    slug: '/terms',
    title: 'Terms of Use',
    component: () => <Terms />,
  },
]

const routeItems = menuItems.concat(legalItems);

export class App extends Component {
  render() {
    window.onscroll = function() {
      const perHeight = window.innerHeight * 0.3;
      if(document.documentElement.scrollTop > perHeight) {
          document.getElementById('root').className = 'scrolled';
      }
      else {
          document.getElementById('root').classList.remove('scrolled');
      };
    };

    let pages = routeItems.map(page => {
      let pageURL = 'https://aimhigherwebdesign.com.au' + page.slug;
      let pageImage = 'https://aimhigherwebdesign.com.au/img/logo.svg';
      return(
        <div key={page.title}>
          <Route exact path={page.slug} component={page.component} key={page.slug} />
        </div>
      );
    });

    return (
      <Router>
        <div className="container">
          {pages}
        </div>
      </Router>
    );
  }
}
