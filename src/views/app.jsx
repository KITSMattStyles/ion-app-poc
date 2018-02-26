
import styled, {ThemeProvider} from 'styled-components'

import Title from 'components/title'
import {setGlobalStyling, theme, Banner} from 'ion-poc'

setGlobalStyling()

const Page = styled.div`
  margin: 0 auto;
  width: 640px;
  position: relative;
`

const App = state => (
  <ThemeProvider theme={theme}>
    <Page>
      <Title text='ion-app-poc' />
      <Banner
        title='Hello Banner'
        imageUrl='http://fillmurray.com/700/200'
        link='https://www.npmjs.com/package/ion-poc'
      />
    </Page>
  </ThemeProvider>
)

export default App
