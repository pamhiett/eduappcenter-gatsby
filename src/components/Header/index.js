import React from 'react'
import Link from 'gatsby-link'
import Wrapper from '../Wrapper'
import Heading from '@instructure/ui-elements/lib/components/Heading'

const Header = () => (
  <Wrapper as="header">
    <Heading level="h1">
      <Link to="/">EduAppCenter</Link>
    </Heading>
  </Wrapper>
)

export default Header
