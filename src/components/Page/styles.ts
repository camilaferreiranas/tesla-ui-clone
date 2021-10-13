import styled from 'styled-components'

export const Container = styled.div` 
  .colored:nth-child(1) {
    /**Alterar para imagens */
    background: url('https://directimports.com.br/wp-content/uploads/2021/09/Tesla-Model-S-13.jpg') no-repeat center
  }
  .colored:nth-child(2) {
    background: url('https://autofocus.mk/wp-content/uploads/2021/01/blue-model-y-tesla-1800x1125.jpg') no-repeat center;
  }
  .colored:nth-child(3) {
    background: url('https://www.tesla.com/sites/default/files/model3-new/social/model-3-hero-social.jpg') no-repeat center;
  }
  .colored:nth-child(4) {
    background: url('https://www.planetcarsz.com/assets/uploads/TESLA%20MODEL%20X%202021%2001.jpg') no-repeat center;
   
  }
  .colored:nth-child(5) {
    background: url('https://www.tesla.com/sites/default/files/energy-page/energy-solar/D-solarroof.jpg') no-repeat center;
  }
  .colored:nth-child(6) {
    background: url('https://www.tesla.com/sites/default/files/solarroof/v3/design/solar-roof_design_D.jpg') no-repeat center;
  }
  .colored:nth-child(7) {
    background: url('https://www.tesla.com/ns_videos/commerce/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1457768-01-F_0.jpg') no-repeat center;
  }
`

export const Spacer = styled.div`
  height: 15vh;
  background: #88898a;
`