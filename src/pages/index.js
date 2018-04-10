import React from 'react'
import Wrapper from '../components/Wrapper'
import Filters from '../components/Filters'
import Link from '@instructure/ui-elements/lib/components/Link'
import Heading from '@instructure/ui-elements/lib/components/Heading'

const IndexPage = () => (
  <Wrapper padding="medium">
    <Heading level="h4" as="h1" margin=" medium auto large">
      An open LTI™ app collection. Browse apps below or{' '}
      <Link href="/about">learn more</Link>
    </Heading>
    <Filters />
    <p>APPS HERE</p>
  </Wrapper>
)

export default IndexPage
