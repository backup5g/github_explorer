import styled from 'styled-components';
import { shade } from 'polished'

interface FormProps {
  hasError: boolean
}

export const Title = styled.h1`
  max-width: 450px;

  color: #3a3a3a;
  font-size: 48px;
  line-height: 56px;

  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  max-width: 715px;
  display: flex;
  margin-top: 40px;

  > input {
    height: 70px;

    flex: 1;

    border: 2px solid;
    border-right: 0;
    border-color: ${({ hasError }) => hasError ? '#c53030' : '#fff'};
    border-radius: 5px 0 0 5px;


    color: #3a3a3a;

    padding: 0 24px;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  > button {
    height: 70px;
    width: 210px;

    border: 0;
    border-radius: 0 5px 5px 0;
    background: #04d361;

    color: #fff;
    font-weight: bold;

    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')}
    }
  }
`

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`

export const Repositories = styled.div`
  max-width: 700px;
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

    > img {
      height: 64px;
      width: 64px;

      border-radius: 50%;
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
