import styled from 'styled-components';
import { shade } from 'polished'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > a {
    display: flex;
    align-items: center;

    color: #a8a8b3;
    text-decoration: none;

    transition: color 0.2s;

    &:hover {
      color: ${shade(0.4, '#a8a8b3')};
    }

    > svg {
      margin-right: 8px;
    }
  }
`

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  > header {
    display: flex;
    align-items: center;

    > img {
      height: 120px;
      width: 120px;
      border-radius: 50%;
    }

    > div {
      margin-left: 24px;

      > strong {
        color: #3d3d4d;
        font-size: 36px;
      }

      > p {
        color: #737380;
        font-size: 18px;

        margin-top: 8px;
      }
    }
  }

  > ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    > li {
      & + li {
        margin-left: 80px;
      }

      > strong {
        display: block;

        color: #3d3d4d;
        font-size: 36px;
      }

      > span {
        display: block;
        color: #6c6c80;
        margin-top: 4px;
      }
    }
  }
`

export const Issues = styled.div`
  margin-top: 80px;

  a {
    width: 100%;
    display: block;

    display: flex;
    align-items: center;

    border-radius: 5px;
    background: #fff;

    text-decoration: none;

    padding: 24px;

    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(16px)
    }

    > div {
      flex: 1%;
      margin-left: 24px;

      > strong {
        color: #3d3d4d;
        font-size: 20px;
      }

      > p {
        max-width: 75%;

        color: #a8a8b3;
        font-size: 18px;

        margin-top: 8px;
      }
    }

    > svg {
      color: #cbcbd6;
      margin-left: auto;
    }
  }
` 
