import styled from 'styled-components'
import { SIZES } from '../../../constants'

export const Intro = styled.div`
  padding: 2rem 0 4rem 0;
  font-family: 'GT-Walsheim-Pro-Regular';
`
export const HeaderIntro = styled.header`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-gap: 34px;
  justify-content: space-between;
  margin-bottom: 6rem;
`
export const SubTitle = styled.h3`
  font-size: 3rem;
  white-space: pre-wrap;
  font-family: 'GT-Walsheim-Pro-Bold';
  text-decoration: none;
  @media (max-width: ${SIZES.breakpointPhone}) {
    font-size: 2rem;
  }
`
export const SmallText = styled.small`
  font-size: 0.89rem;
  padding-right: 10px;
  > span {
    padding-left: 5px;
  }
  @media (max-width: ${SIZES.breakpointPhone}) {
    font-size: 0.6rem;
  }
`
export const BlogPost = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin-bottom: 1rem;
  @media (max-width: ${SIZES.breakpointPhone}) {
    grid-template-columns: 1fr;
    border: 10px solid #fff;
    border-radius: 0.9rem;
    box-shadow: 0 17px 56px rgba(125, 127, 129, 0.17);
  }
  > div.content {
    padding: 2rem 3rem;
    @media (max-width: ${SIZES.breakpointPhone}) {
      padding: 1rem 1rem;
    }
  }
  > div.media {
    text-align: center;
    > .image-wrapper {
      margin-bottom: 0.5rem;
      max-height: 400px;
      overflow: hidden;
      @media (min-width: ${SIZES.breakpointPhone}) {
        border: 10px solid #fff;
        border-radius: 0.9rem;
        box-shadow: 0 17px 56px rgba(125, 127, 129, 0.17);
      }
      > a > div {
        transition: all 800ms ease-in-out;
      }
    }
  }
  &:hover {
    cursor: pointer;
    > div.media > .image-wrapper > a > div {
      transform: scale(1.2) rotate(8deg);
    }
  }
`
export const WorkPost = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin-bottom: 1rem;
  @media (max-width: ${SIZES.breakpointPhone}) {
    grid-template-columns: 1fr;
    border: 10px solid #fff;
    border-radius: 0.9rem;
    box-shadow: 0 17px 56px rgba(125, 127, 129, 0.17);
  }
  > div.content {
    padding: 2rem 3rem;
    @media (max-width: ${SIZES.breakpointPhone}) {
      padding: 1rem 1rem;
    }
  }
  > div.media {
    text-align: center;
    > .image-wrapper {
      margin-bottom: 0.5rem;
      max-height: 400px;
      overflow: hidden;
      @media (min-width: ${SIZES.breakpointPhone}) {
        border: 10px solid #fff;
        border-radius: 0.9rem;
        box-shadow: 0 17px 56px rgba(125, 127, 129, 0.17);
      }
      > a > div {
        transition: all 800ms ease-in-out;
      }
    }
  }
  &:hover {
    cursor: pointer;
    > div.media > .image-wrapper > a > div {
      transform: scale(1.2) rotate(8deg);
    }
  }
`
export const ArchivedWorkPost = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin-bottom: 1rem;
  @media (max-width: ${SIZES.breakpointPhone}) {
    grid-template-columns: 1fr;
    border: 10px solid #fff;
    border-radius: 0.9rem;
    box-shadow: 0 17px 56px rgba(125, 127, 129, 0.17);
  }
  > div.content {
    padding: 2rem 3rem;
    @media (max-width: ${SIZES.breakpointPhone}) {
      padding: 1rem 1rem;
    }
  }
  > div.media {
    text-align: center;
    > .image-wrapper {
      margin-bottom: 0.5rem;
      max-height: 300px;
      overflow: hidden;
      @media (min-width: ${SIZES.breakpointPhone}) {
        border: 10px solid #fff;
        border-radius: 0.9rem;
        box-shadow: 0 17px 56px rgba(125, 127, 129, 0.17);
      }
      > a > div {
        transition: all 800ms ease-in-out;
      }
    }
  }
  &:hover {
    cursor: pointer;
    > div.media > .image-wrapper > a > div {
      transform: scale(1.2) rotate(8deg);
    }
  }
`
export const Category = styled.span`
  font-family: 'GT-Walsheim-Pro-Bold';
  color: ${SIZES.primary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.8em;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  border: 3px solid ${SIZES.primary};
`
