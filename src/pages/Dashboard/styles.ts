import styled from 'styled-components';
import { shade } from 'polished'

interface FormProps {
  hasError: boolean
}

interface LanguageColorProps {
  languageColor: string | null;
}

export const Title = styled.h1`
  max-width: 450px;

  color: var(--color-title);
  font-size: 4.8rem;
  line-height: 5.6rem;

  margin-top: 8rem;
`;

export const Form = styled.form<FormProps>`
  max-width: 715px;
  display: flex;
  margin-top: 4rem;

  > input {
    width: 100%;
    height: 7rem;

    border: 0.2rem solid;
    border-right: 0;
    border-color: ${({ hasError }) => hasError ? '#c53030' : '#fff'};
    border-radius: 0.5rem 0 0 0.5rem;

    color: var(--color-title);

    padding: 0 2.4rem;

    &::placeholder {
      color: var(--color-card-text);
    }
  }

  > button {
    height: 7rem;
    width: 21rem;

    border: 0;
    border-radius: 0 0.5rem 0.5rem 0;
    background: var(--color-cta);

    color: var(--color-card-background);
    font-weight: bold;

    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')}
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;

    > input {
      height: 6rem;
      border-radius: 0.5rem;
    }

    > button {
      height: 6rem;
      width: 100%;

      border-radius: 0.5rem;

      margin-top: 1.6rem;
    }
  }
`

export const Error = styled.span`
  display: block;
  color: var(--color-error);
  margin-top: 0.8rem;
`

export const Repositories = styled.div`
  max-width: 715px;
  margin-top: 8rem;

  a {
    width: 100%;
    display: block;

    display: flex;
    align-items: center;

    border-radius: 0.5rem;
    background: #fff;

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
    }

    > svg {
      color: var(--color-icons);
      margin-left: auto;
    }
  }
` 

export const LanguageColor = styled.div<LanguageColorProps>`
  height: 0.8rem;
  width: 0.8rem;

  border-radius: 50%;
  background: ${props => props.languageColor}
`
