import styled from 'styled-components'
import { SIZES } from '../../../constants'

export const ContainerLayout = styled.div`
  width: ${SIZES.width};
  margin-left: auto;
  margin-right: auto;

  &.wrapper {
    max-width: ${SIZES.wrapperWidth};
    margin: auto;
  }
  @media only screen and (min-width: ${SIZES.breakpointLarge}) {
    max-width: 75rem;
  }
`
export const ContainerLayoutGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin-bottom: 5rem;
  @media (max-width: ${SIZES.breakpointPhone}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
  > div.content {
    padding: 2rem 3rem;
    @media (max-width: ${SIZES.breakpointPhone}) {
      padding: 1rem 1rem;
    }
  }
`
