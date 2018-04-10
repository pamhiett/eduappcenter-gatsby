import React from 'react'
import PropTypes from 'prop-types'

import Container from '@instructure/ui-container/lib/components/Container'

const Wrapper = ({ as, children, ...rest }) => (
  <Container display="block" as={as || 'div'} {...rest}>
    {/* TODO: How to use the maxWidth value in the theme? */}
    <div style={{ maxWidth: '60rem', margin: '0 auto' }}>{children}</div>
  </Container>
)

Wrapper.propTypes = {
  as: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

export default Wrapper
