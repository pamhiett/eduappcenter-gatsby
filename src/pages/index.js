import React from 'react'
import Wrapper from '../components/Wrapper'
import Link from '@instructure/ui-elements/lib/components/Link'

const IndexPage = () => (
  <Wrapper padding="large 0">
    <h1>
      An open LTI™ app collection. Browse apps below or{' '}
      <Link to="/about">learn more</Link>
    </h1>
    <p>APPS HERE</p>
  </Wrapper>
)

export default IndexPage
