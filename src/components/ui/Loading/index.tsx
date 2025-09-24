import { BounceLoader } from 'react-spinners'
import { useTheme } from 'styled-components'

function Loading() {
  const theme = useTheme()
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem'
      }}
    >
      <BounceLoader color={theme.tertiary} />
    </div>
  )
}
export default Loading
