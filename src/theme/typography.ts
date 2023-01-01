import styled from 'styled-components'

const H1 = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 56px;
  line-height: 72px;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.text};
`

const H2 = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  color: ${(props) => props.theme.text};
`

const H3 = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: ${(props) => props.theme.text};
`

const H4 = styled.h4`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.text};
`

const P = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: ${(props) => props.theme.text};
`

export { H1, H2, H3, H4, P }
