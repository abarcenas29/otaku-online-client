import React from 'react'
import css from 'styled-components'
import Dropzone from 'react-dropzone'

import {
  Form,
  Grid,
  Header,
  Icon,
  Image,
  Button
} from 'semantic-ui-react'

import AnimePosterAdd from 'components/AnimeBox/AnimePosterAdd'
import AnimePoster from 'components/AnimeBox/AnimePoster'

import { reduxForm, Field } from 'redux-form/immutable'
import Input from 'components/ReduxFields/Input'
import Select from 'components/ReduxFields/Select'
import Checkbox from 'components/ReduxFields/Checkbox'
import TextBox from 'components/ReduxFields/TextBox'

const FormArea = css(Grid.Row)`
  background-color: #FFF;
`

const AnimePosterContainer = css.div`
  display: flex;
  flex-wrap: wrap;
`

const EmptyParagraph = css.p`
  text-align: center;
`

const PreviewContainer = css.div`
  display: flex;
  justify-content: center;
`

const ImageContainer = css.button`
  background-color: transparent;
  background-image: url('${props => props.image}')
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: ${props => props.active ? '5px solid orange' : '0'};

  height: 10em;
  margin: 1em;
  width: 10em;
  padding: 0.5em;
`

function SellItemFrom ({
  dropzoneOnDrop,
  dropzoneRef,
  handleSubmit,
  imageModalOpen,
  primaryImageIndex,
  submitItem,
  uploadFiles
}) {
  return (
    <Grid padded>
      <Grid.Row>
        <Grid.Column stretched>
          <Header as='h1'>ADD ITEM</Header>
        </Grid.Column>
      </Grid.Row>
      <FormArea>
        <Grid.Column stretched>

          <Form onSubmit={handleSubmit(submitItem)}>
            <Form.Field>
              <label>Photo</label>
              <Dropzone
                name='photos'
                ref={dropzoneRef}
                onDrop={dropzoneOnDrop}
                accept='image/*'
                style={{
                  width: '100%',
                  height: '15em',
                  border: '2px orange dashed',
                  borderRadius: '5px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                <div>
                  {
                    uploadFiles.files.length < 1 &&
                    <EmptyParagraph>
                      <Icon name='image' />
                      Drag / Click Here to Upload Your Photos (5 images max)
                    </EmptyParagraph>
                  }
                  {
                    uploadFiles.files.length > 0 &&
                    <PreviewContainer>
                      {
                        uploadFiles.files.map((image, index) => {
                          return (
                            <ImageContainer
                              active={(primaryImageIndex === index)}
                              onClick={(e) => {
                                e.stopPropagation()
                                return imageModalOpen(index)
                              }}
                              key={index}
                              image={image.preview}
                              />
                          )
                        })
                      }
                    </PreviewContainer>
                  }
                </div>
              </Dropzone>
            </Form.Field>
            <Form.Group widths='equal'>
              <Form.Field>
                <label>Name</label>
                <Field
                  name='name'
                  component={Input}
                />
              </Form.Field>
              <Form.Field>
                <label>Type</label>
                <Field
                  name='type'
                  component={Select}
                  selection
                  options={[
                    {text: 'Cosplay', value: 0},
                    {text: 'Merchandise', value: 1}
                  ]}
                />
              </Form.Field>
              <Form.Field>
                <label>Price</label>
                <Field
                  name='price'
                  component={Input}
                />
              </Form.Field>
            </Form.Group>
            <Form.Field>
              <label>Categories</label>
              <Field
                name='categories'
                component={Select}
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
                    <Field
                      name='country'
                      component={Select}
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
                    <Field
                      name='region'
                      component={Select}
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
                    <Field
                      name='area'
                      component={Select}
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
                <Grid>
                  <Grid.Column mobile={16} computer={3}>
                    <Field
                      name='is_shipping'
                      component={Checkbox}
                      toggle
                      label={<label>Shipping</label>}
                    />
                  </Grid.Column>
                  <Grid.Column mobile={16} computer={3}>
                    <Field
                      name='is_meetup'
                      component={Checkbox}
                      toggle
                      label={<label>Shipping</label>}
                    />
                  </Grid.Column>
                  <Grid.Column mobile={16} computer={3}>
                    <Field
                      name='is_negotiable'
                      component={Checkbox}
                      toggle
                      label={<label>Shipping</label>}
                    />
                  </Grid.Column>
                  <Grid.Column mobile={16} computer={4}>
                    <Field
                      name='is_second_hand'
                      component={Checkbox}
                      toggle
                      label={<label>Shipping</label>}
                    />
                  </Grid.Column>
                  <Grid.Column mobile={16} computer={3}>
                    <Field
                      name='is_trade'
                      component={Checkbox}
                      toggle
                      label={<label>Shipping</label>}
                    />
                  </Grid.Column>
                  <Grid.Column mobile={16} computer={3}>
                    <Field
                      name='is_rent'
                      component={Checkbox}
                      toggle
                      label={<label>Shipping</label>}
                    />
                  </Grid.Column>
                </Grid>
              </Form.Field>
            </Form.Group>

            <Form.Field>
              <label>Description</label>
              <Field
                name='description'
                component={TextBox}
                autoHeight
              />
            </Form.Field>

            <Form.Field>
              <label>Anime Inspiration</label>
              <AnimePosterContainer>
                <AnimePoster />
                <AnimePosterAdd />
              </AnimePosterContainer>
            </Form.Field>

            <Form.Field>
              <Button
                type='submit'
                primary
              >
                SAVE
              </Button>
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
