#### object-fit 을 지원하지 않는 browser 에서는 background 로 처리

### use object-fit

```js
import React, {useState} from 'react'
import styled from 'styled-components'
import Image from './Image'
const Box = styled.article`
  width: 100px;
  height: 100px;
  border: 1px solid #333;
  margin-right: 10px;
`
const Contents = styled.div`
  display: flex;
`
;(() => {
  const url =
    'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg'
  return (
    <>
      <Contents>
        <dl>
          <dt>contain</dt>
          <dd>
            <Box>
              <Image url={url} type={'contain'} />
            </Box>
          </dd>
        </dl>

        <dl>
          <dt>cover</dt>
          <dd>
            <Box>
              <Image url={url} type={'cover'} />
            </Box>
          </dd>
        </dl>

        <dl>
          <dt>original</dt>
          <dd>
            <Box>
              <Image url={url} type={'original'} />
            </Box>
          </dd>
        </dl>
      </Contents>
    </>
  )
})()
```

### not using object-fit

```js
import React, {useState} from 'react'
import styled from 'styled-components'
import Image from './Image'
const Box = styled.article`
  width: 100%;
  height: 100%;
`
const Contents = styled.div`
  display: flex;

  dl {
    margin-right: 10px;
  }
  dd {
    width: 100px;
    height: 100px;
    border: 1px solid #333;
  }
`
;(() => {
  const url =
    'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg'
  return (
    <>
      <Contents>
        <dl>
          <dt>contain</dt>
          <dd>
            <Box>
              <Image url={url} type={'contain'} disabledObjectFit={true} />
            </Box>
          </dd>
        </dl>

        <dl>
          <dt>cover</dt>
          <dd>
            <Box>
              <Image url={url} type={'cover'} disabledObjectFit={true} />
            </Box>
          </dd>
        </dl>

        <dl>
          <dt>original</dt>
          <dd>
            <Box>
              <Image url={url} type={'original'} disabledObjectFit={true} />
            </Box>
          </dd>
        </dl>
      </Contents>
    </>
  )
})()
```
