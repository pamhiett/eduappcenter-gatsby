import React from 'react'
import Wrapper from '../Wrapper'
import Text from '@instructure/ui-elements/lib/components/Text'
import Link from '@instructure/ui-elements/lib/components/Link'

const Footer = () => (
  <Wrapper as="footer" withBorder padding="x-small">
    <Text size="x-small" as="p">
      Learning Tools Interoperability™ (LTI™) is a trademark of the{' '}
      <Link href="http://www.imsglobal.org/">
        IMS Global Learning Consortium, Inc.
      </Link>. Official IMS LTI docs are found on the{' '}
      <Link href="http://www.imsglobal.org/lti/">IMS page</Link>. Also check out
      IMS’s <Link href="http://www.imsglobal.org/lti">LTI™ Directory</Link> and
      details on <Link href="http://www.imscert.org">LTI Conformance</Link>.
    </Text>
    <Text size="x-small" as="p">
      EduAppCenter.com is provided and maintained by{' '}
      <Link href="http://instructure.com">Instructure</Link>.
    </Text>
    <Text size="x-small" as="p">
      Have an app idea? <Link href="/suggest">Share it with us!</Link>
    </Text>
  </Wrapper>
)

export default Footer
