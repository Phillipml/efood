import Tag from '@/components/ui/Tag'
import { TagListContainer } from './styles'

export type TagListProps = {
  isFeatured?: boolean
  foodType?: string
}

const TagList = ({ isFeatured = false, foodType }: TagListProps) => {
  if (!isFeatured && !foodType) {
    return null
  }

  const tags = []

  if (isFeatured) {
    tags.push('Destaque da semana')
  }

  if (foodType) {
    tags.push(foodType)
  }

  return (
    <TagListContainer>
      {tags.map((tag, index) => (
        <Tag key={index}>{tag}</Tag>
      ))}
    </TagListContainer>
  )
}

export default TagList
