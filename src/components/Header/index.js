import React from 'react'
import Link from 'gatsby-link'
import Wrapper from '../Wrapper'
import Navigation from '../Navigation'
import Heading from '@instructure/ui-elements/lib/components/Heading'
import Flex, { FlexItem } from '@instructure/ui-layout/lib/components/Flex'

const Header = () => (
  <Wrapper as="header" withBorder padding="x-small">
    <Flex justifyItems="space-between">
      <FlexItem>
        <Link to="/">
          {/* TODO: Replace with logo */}
          EduAppCenter
        </Link>
      </FlexItem>
      <FlexItem>
        <Navigation />
      </FlexItem>
    </Flex>
  </Wrapper>
)

export default Header
