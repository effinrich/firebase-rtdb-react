import styled from '@emotion/styled'
import NxWelcome from './nx-welcome'

import { UI } from '@shared/ui'

const StyledApp = styled.div`
  // Your style here
`
export function App() {
  return (
    <StyledApp>
      <UI />
      <NxWelcome title="@firebase-rtdb-react/portal" />
    </StyledApp>
  )
}
export default App
