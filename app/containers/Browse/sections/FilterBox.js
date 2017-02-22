import React from 'react'
import css from 'styled-components'
import {
  Button,
  Checkbox,
  Dropdown,
  List,
  Menu
} from 'semantic-ui-react'

import SecondaryMenu from 'components/SecondaryMenu'

const ButtonCosplay = css(Button)`
  width: 9.4em;
  font-size: 14px !important;
`

const LabelStyle = css.label`
  display: block;
  padding-bottom: 0.5em;
`

function FilterBox ({
  filterBoxToggle,
  toggleFilterBox
}) {
  return (
    <SecondaryMenu
      iconName='filter'
      title='Filters'
      toggleFunc={toggleFilterBox}
      toggleState={filterBoxToggle}
    >
      <Menu.Item>
        <LabelStyle>Item Type</LabelStyle>
        <Button.Group fluid compact>
          <ButtonCosplay>Cosplay</ButtonCosplay>
          <Button.Or />
          <Button>Merchandise</Button>
        </Button.Group>
      </Menu.Item>
      <Menu.Item>
        <LabelStyle>Category</LabelStyle>
        <Dropdown
          fluid
          selection
          options={[
            {text: 'category 1', value: 0}
          ]}
        />
      </Menu.Item>
      <Menu.Item>
        <LabelStyle>Location</LabelStyle>
        <Dropdown
          fluid
          selection
          search
          defaultValue={0}
          disabled
          options={[
            {text: 'Philippines', value: 0}
          ]}
        />
        <Dropdown
          fluid
          selection
          search
          options={[
            {text: 'Location 2', value: 0}
          ]}
        />
        <Dropdown
          fluid
          selection
          search
          options={[
            {text: 'Location 3', value: 0}
          ]}
        />
      </Menu.Item>
      <Menu.Item>
        <LabelStyle>Conditions</LabelStyle>
        <List>
          <List.Item>
            <List.Header>AA</List.Header>
            <Checkbox toggle />
          </List.Item>
          <List.Item>
            <List.Header>AA</List.Header>
            <Checkbox toggle />
          </List.Item>
          <List.Item>
            <List.Header>AA</List.Header>
            <Checkbox toggle />
          </List.Item>
          <List.Item>
            <List.Header>AA</List.Header>
            <Checkbox toggle />
          </List.Item>
        </List>
      </Menu.Item>
    </SecondaryMenu>
  )
}

export default FilterBox
