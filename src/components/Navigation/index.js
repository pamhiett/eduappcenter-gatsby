import React from 'react'
import PropTypes from 'prop-types'
import { navigateTo } from 'gatsby-link'
import Link from '@instructure/ui-elements/lib/components/Link'
import Flex, {
  FlexItem as Item,
} from '@instructure/ui-layout/lib/components/Flex'
import Text from '@instructure/ui-elements/lib/components/Text'

// TODO: Make it work with React Router/Gatsby Link

const FlexItem = ({ to, isSelected, children }) => (
  <Item>
    <Link href={to} margin="small">
      {children}
    </Link>
  </Item>
)

FlexItem.propTypes = {
  to: PropTypes.string,
  isSelected: PropTypes.bool,
  children: PropTypes.string,
}

const Navigation = () => (
  <Flex as="nav">
    <FlexItem to="/">Apps</FlexItem>
    <FlexItem to="/tutorials">Tutorials</FlexItem>
    <FlexItem to="/updates">Updates</FlexItem>
    <FlexItem to="/docs">Docs</FlexItem>
    <FlexItem to="/submit">Submit</FlexItem>
    <FlexItem to="/login">Login</FlexItem>
  </Flex>
)

export default Navigation
