import React from 'react'

interface Props {
  text: string
}

function ExampleComponent(props: Props): React.ReactElement {
  const {text} = props

  return <div style={{color: 'red'}}>Hello {text}</div>
}

export default ExampleComponent
