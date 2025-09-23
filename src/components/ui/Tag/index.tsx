import { TagStyled } from './styles'
export type TagProps = {
  children: string
}
const Tag = ({ children }: TagProps) => {
  return <TagStyled>{children}</TagStyled>
}

export default Tag
