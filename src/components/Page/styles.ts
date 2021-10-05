import styled from 'styled-components'

export const Container = styled.div` 
  .colored:nth-child(1) {
    /**Alterar para imagens */
    background: url('https://directimports.com.br/wp-content/uploads/2021/09/Tesla-Model-S-13.jpg') no-repeat center
  }
  .colored:nth-child(2) {
    background: #dfffd9;
  }
  .colored:nth-child(3) {
    background: #cdfeca;
  }
  .colored:nth-child(4) {
    background: #bbfebb;
  }
  .colored:nth-child(5) {
    background: #a9fdac;
  }
  .colored:nth-child(6) {
    background: #90f29c;
  }
  .colored:nth-child(7) {
    background: #77e68c;
  }
`

export const Spacer = styled.div`
  height: 15vh;
  background: #77e68c;
`