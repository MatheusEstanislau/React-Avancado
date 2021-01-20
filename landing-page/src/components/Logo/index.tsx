import React from 'react'
import { logoProps } from 'types/api'
import { getImage } from 'utils/getImage'
import * as S from './styles'

const Logo = ({ alternativeText, url }: logoProps) => (
  <S.LogoWrapper src={getImage(url)} alt={alternativeText} />
)

export default Logo
