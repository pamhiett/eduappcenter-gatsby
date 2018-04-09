import React from 'react'
import PropTypes from 'prop-types'

import Container from '@instructure/ui-container/lib/components/Container'

const Wrapper = ({ as, children }) => <Container as={as}>{children}</Container>

Wrapper.propTypes = {
  as: PropTypes.string,
  children: PropTypes.object,
}

export default Wrapper
