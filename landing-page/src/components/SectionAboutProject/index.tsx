import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { aboutProjectProps } from 'types/api'
import { getImage } from 'utils/getImage'

const SectionAboutProject = ({
  description,
  image,
  title
}: aboutProjectProps) => {
  return (
    <S.Wrapper>
      <Container>
        <S.Container>
          <S.Image src={getImage(image.url)} alt={image.alternativeText} />
          <div>
            <Heading>{title}</Heading>
            <S.Text dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        </S.Container>
      </Container>
    </S.Wrapper>
  )
}

export default SectionAboutProject
