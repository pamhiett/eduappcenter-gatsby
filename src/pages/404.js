import React from 'react'
import Wrapper from '../components/Wrapper'
import Heading from '@instructure/ui-elements/lib/components/Heading'
import Text from '@instructure/ui-elements/lib/components/Text'

const NotFoundPage = () => (
  <Wrapper padding="large 0">
    <Heading as="h1">The page you were looking for doesn’t exist.</Heading>
    <Text as="p">
      You may have mistyped the address or the page may have moved.
    </Text>
  </Wrapper>
)

export default NotFoundPage
