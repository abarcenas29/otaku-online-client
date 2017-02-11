import React from 'react'
import css from 'styled-components'
import {
  Button,
  Checkbox,
  Dropdown,
  Header,
  Icon,
  List,
  Menu
} from 'semantic-ui-react'

const FilterContainer = css.div`
  display: flex;
  flex-direction: column;
`

const FilterHeader = css.div`
  background-color: #F2711C;
  color: #FFF;
  display: flex;
  padding: 1em;
`

const HeaderStyle = css(Header)`
  color: #FFF !important;
  margin-bottom: 0em !important;
  flex-grow: 1;
`

const ButtonCosplay = css(Button)`
  width: 9.4em;
  font-size: 14px !important;
`

const LabelStyle = css.label`
  display: block;
  padding-bottom: 0.5em;
`

const MiniControl = css.div`

`

function FilterBox ({
  filterBoxToggle,
  toggleFilterBox
}) {
  return (
    <FilterContainer>
      <FilterHeader>
        <HeaderStyle as='h3'>
          <Icon name='filter' size='small' />
          Filters
        </HeaderStyle>
        <MiniControl>
          <button onClick={toggleFilterBox}>
            <Icon name='chevron down' />
          </button>
        </MiniControl>
      </FilterHeader>
      {
        filterBoxToggle &&
        <Menu vertical fluid borderless compact>
          <Menu.Item>
            <LabelStyle>Item Type</LabelStyle>
            <Button.Group>
              <ButtonCosplay size='large'>Cosplay</ButtonCosplay>
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
        </Menu>
      }
    </FilterContainer>
  )
}

export default FilterBox
