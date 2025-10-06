import { pxToRem } from '@/utils/size-utils'
import styled from 'styled-components'

export const InputWraper = styled.div`
  width: 100%;
`
export const Label = styled.label``
export const Input = styled.input`
  ${pxToRem('margin-top', { lgScreen: 8 })}
`
