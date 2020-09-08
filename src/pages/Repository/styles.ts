import styled from 'styled-components';
import { shade } from 'polished'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > a {
    display: flex;
    align-items: center;

    color: var(--color-card-text);
    text-decoration: none;

    transition: color 0.2s;

    &:hover {
      color: ${shade(0.4, '#a8a8b3')};
    }

    > svg {
      margin-right: 0.8rem;
    }
  }
`

export const RepositoryInfo = styled.section`
  margin-top: 8rem;

  > header {
    display: flex;
    align-items: center;

    > img {
      height: 12rem;
      width: 12rem;
      border-radius: 50%;
    }

    > div {
      margin-left: 2.4rem;

      > strong {
        color: #3d3d4d;
        font-size: 3.6rem;
      }

      > p {
        color: #737380;
        font-size: 1.8rem;

        margin-top: 0.8rem;
      }

      @media (max-width: 700px) {
        max-width: 290px;
      }
    }
  }

  > ul {
    display: flex;
    list-style: none;
    margin-top: 4rem;

    > li {
      & + li {
        margin-left: 8rem;
      }

      > strong {
        display: block;

        color: var(--color-card-title);
        font-size: 3.6rem;
      }

      > span {
        display: block;
        color: #6c6c80;
        margin-top: 0.4rem;
      }
    }
  }
`

export const Issues = styled.div`
  margin-top: 8rem;

  a {
    width: 100%;
    display: block;

    display: flex;
    align-items: center;

    border-radius: 0.5rem;
    background: var(--color-card-background);

    text-decoration: none;

    padding: 2.4rem;

    transition: transform 0.2s;

    & + a {
      margin-top: 1.6rem;
    }

    &:hover {
      transform: translateX(1.6rem)
    }

    > img {
      height: 6.4rem;
      width: 6.4rem;

      border-radius: 50%;
    }

    > div {
      flex: 1%;
      margin-left: 2.4rem;

      > strong {
        color: var(--color-card-title);
        font-size: 2rem;
      }

      > p {
        max-width: 75%;

        color: var(--color-card-text);
        font-size: 1.8rem;

        margin-top: 0.8rem;
      }

      @media (max-width: 700px) {
        max-width: 320px;
      }
    }

    > svg {
      color: var(--color-icons);
      margin-left: auto;
    }
  }
` 
