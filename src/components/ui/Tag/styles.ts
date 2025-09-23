import styled from 'styled-components'
import type { TagProps } from '.'

export const TagStyled = styled.div<TagProps>`
  display: inline-block !important;
  background-color: ${({ theme }) => theme.tertiary};
  font-size: 0.875rem;
  font-weight: bold;
  padding: 0.25rem 0.5rem;
  color: ${({ theme }) => theme.secondary};
  white-space: nowrap !important;
  vertical-align: top !important;
  margin: 0 !important;
  float: none !important;
  width: auto !important;
  height: auto !important;
`
