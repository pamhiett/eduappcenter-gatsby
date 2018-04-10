import React from 'react'
import Wrapper from '../Wrapper'
import Flex, { FlexItem } from '@instructure/ui-layout/lib/components/Flex'
import Select from '@instructure/ui-forms/lib/components/Select'
import ScreenReaderContent from '@instructure/ui-a11y/lib/components/ScreenReaderContent'

const Filters = () => (
  <Wrapper as="section" withBorder padding="small">
    <Flex>
      <FlexItem padding="0 x-small 0 0" size="15%">
        <Select
          size="small"
          label={<ScreenReaderContent>Categories</ScreenReaderContent>}
          defaultOption="allCat"
          assistiveText="3 options available. Use arrow keys to navigate options."
        >
          <option value="allCat">All Categories</option>
          <option value="bar">Bar</option>
          <option value="baz">Baz</option>
        </Select>
      </FlexItem>
      <FlexItem padding="0 x-small 0 0" size="15%">
        <Select
          size="small"
          label={<ScreenReaderContent>Grade Levels</ScreenReaderContent>}
          defaultOption="allGrades"
          assistiveText="3 options available. Use arrow keys to navigate options."
        >
          <option value="allGrades">All Grade Levels</option>
          <option value="kSixth">K through 6th</option>
          <option value="seventhTwelfth">7th through 12th</option>
          <option value="postSecondary">Postsecondary</option>
        </Select>
      </FlexItem>
      <FlexItem padding="0 x-small 0 0" size="15%">
        <Select
          size="small"
          label={<ScreenReaderContent>Platforms</ScreenReaderContent>}
          defaultOption="allPlatforms"
          assistiveText="3 options available. Use arrow keys to navigate options."
        >
          <option value="allPlatforms">All Platforms</option>
          <option value="canvas">Canvas</option>
          <option value="blackboard">Blackboard</option>
          <option value="desire2learn">Desire2Learn</option>
          <option value="moodle">Moodle</option>
          <option value="sakai">Sakai</option>
          <option value="other">Other</option>
          <option value="schoology">Schoology</option>
        </Select>
      </FlexItem>
      <FlexItem padding="0 x-small 0 0" size="15%">
        <Select
          size="small"
          label={<ScreenReaderContent>Extensions</ScreenReaderContent>}
          defaultOption="allExt"
          assistiveText="3 options available. Use arrow keys to navigate options."
        >
          <option value="allExt">All Extensions</option>
          <option value="editor">Editor Button</option>
          <option value="resource">Resource Selection</option>
          <option value="nav">Course Nav</option>
          <option value="user">User Nav</option>
          <option value="acc">Account Nav</option>
          <option value="submission">Homework Submission</option>
        </Select>
      </FlexItem>
      <FlexItem padding="0 x-small 0 0" size="15%">
        <Select
          size="small"
          label={<ScreenReaderContent>Extensions</ScreenReaderContent>}
          defaultOption="allAccess"
          assistiveText="3 options available. Use arrow keys to navigate options."
        >
          <option value="allAccess">All Access</option>
          <option value="open">Open Access</option>
          <option value="authenticated">Authenticated</option>
        </Select>
      </FlexItem>
    </Flex>
  </Wrapper>
)

export default Filters
