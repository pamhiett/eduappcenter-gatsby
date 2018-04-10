import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'
import theme from '@instructure/ui-themes/lib/canvas'
import './index.css'

theme.use()

const TemplateWrapper = ({ data, children }) => (
  <div>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <link
        href="https://fonts.googleapis.com/css?family=Lato:300,400,400i,700"
        rel="stylesheet"
      />
    </Helmet>
    <Header />
    {children()}
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  data: PropTypes.object,
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
  query MetaDataQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
