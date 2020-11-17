import React from 'react'
import renderer from 'react-test-renderer'

import {ExampleComponent} from '../'

test("Component should show 'red' text 'Hello World'", () => {
  const component = renderer.create(<ExampleComponent text={'World'} />)
  const testInstance = component.root
  expect(testInstance.findByType(ExampleComponent).props.text).toBe('World')
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
