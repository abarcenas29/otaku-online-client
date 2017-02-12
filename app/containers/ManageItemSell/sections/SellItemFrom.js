import React from 'react'
import css from 'styled-components'
import Dropzone from 'react-dropzone'

import {
  Checkbox,
  Dropdown,
  Form,
  Grid,
  Header,
  Icon,
  Input,
  TextArea
} from 'semantic-ui-react'

import { reduxForm, Field } from 'redux-form/immutable'

const FormArea = css(Grid.Row)`
  background-color: #FFF;
`

function SellItemFrom () {
  return (
    <Grid padded>
      <Grid.Row>
        <Grid.Column stretched>
          <Header as='h1'>ADD ITEM</Header>
        </Grid.Column>
      </Grid.Row>
      <FormArea>
        <Grid.Column stretched>

          <Form>
            <Form.Field>
              <label>Photo</label>
              <Dropzone style={{
                width: '100%',
                height: '15em',
                border: '2px orange dashed',
                borderRadius: '5px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <div>
                  <p>
                    <Icon name='image' />
                    Drag / Click Here to Upload Your Photos (5 images max)
                  </p>
                </div>
              </Dropzone>
            </Form.Field>
            <Form.Group widths='equal'>
              <Form.Field>
                <label>Name</label>
                <Input fluid />
              </Form.Field>
              <Form.Field>
                <label>Type</label>
                <Dropdown
                  selection
                  options={[
                    {text: 'Cosplay', value: 0},
                    {text: 'Merchandise', value: 1}
                  ]}
                />
              </Form.Field>
              <Form.Field>
                <label>Price</label>
                <Input fluid />
              </Form.Field>
            </Form.Group>
            <Form.Field>
              <label>Categories</label>
              <Dropdown
                fluid
                multiple
                search
                selection
                options={[
                  {text: 'Category 1', value: 0},
                  {text: 'Category 2', value: 1},
                  {text: 'Category 3', value: 2}
                ]}
              />
            </Form.Field>
            <Form.Group>
              <Form.Field width={16}>
                <label>Location</label>
                <Form.Group inline widths='equal'>
                  <Form.Field>
                    <Dropdown
                      fluid
                      selection
                      search
                      options={[
                        {text: 'Location 1', value: 0},
                        {text: 'Location 1', value: 1},
                        {text: 'Location 1', value: 2}
                      ]}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Dropdown
                      fluid
                      selection
                      search
                      options={[
                        {text: 'Location 1', value: 0},
                        {text: 'Location 1', value: 1},
                        {text: 'Location 1', value: 2}
                      ]}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Dropdown
                      fluid
                      selection
                      search
                      options={[
                        {text: 'Location 1', value: 0},
                        {text: 'Location 1', value: 1},
                        {text: 'Location 1', value: 2}
                      ]}
                    />
                  </Form.Field>
                </Form.Group>
              </Form.Field>
            </Form.Group>

            <Form.Group>
              <Form.Field>
                <label>Item Specifics</label>
                <Form.Group inline>
                  <Form.Field>
                    <Checkbox toggle label={<label>Shipping</label>} />
                  </Form.Field>
                  <Form.Field>
                    <Checkbox toggle label={<label>Meetup</label>} />
                  </Form.Field>
                  <Form.Field>
                    <Checkbox toggle label={<label>Negotiable</label>} />
                  </Form.Field>
                  <Form.Field>
                    <Checkbox toggle label={<label>Second Hand</label>} />
                  </Form.Field>
                  <Form.Field>
                    <Checkbox toggle label={<label>Trade</label>} />
                  </Form.Field>
                  <Form.Field>
                    <Checkbox toggle label={<label>Rent</label>} />
                  </Form.Field>
                </Form.Group>
              </Form.Field>
            </Form.Group>

            <Form.Field>
              <label>Description</label>
              <TextArea autoHeight />
            </Form.Field>

          </Form>

        </Grid.Column>
      </FormArea>
    </Grid>
  )
}

function validate (values) {
  const errors = {}
  return errors
}

const SellItemDialogReduxForm = reduxForm({
  form: 'SellItemForm',
  enableReinitialize: true,
  validate
})(SellItemFrom)

export default SellItemDialogReduxForm
