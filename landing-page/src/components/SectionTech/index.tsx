import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import icons from './content'
import * as S from './styles'
import { techsProps } from 'types/api'
import { getImage } from 'utils/getImage'

const SectionTech = ({ title, techIcons }: techsProps) => {
  return (
    <S.Wrapper>
      <Container>
        <Heading reverseColor>{title}</Heading>
        <S.IconsContainer>
          {techIcons.map((tech) => (
            <S.Icon key={tech.id}>
              <S.Icons
                src={getImage(tech.icon.url)}
                alt={tech.title}
                loading="lazy"
              />
              <S.IconsName>{tech.title}</S.IconsName>
            </S.Icon>
          ))}
        </S.IconsContainer>
      </Container>
    </S.Wrapper>
  )
}
export default SectionTech
