
import DefaultOverlayContent from '../DefaultOverlayContent';
import {ModelsWraper, ModelsSection} from '../Model'
import UniqueOverLay from '../UniqueOverlay';


import { Container, Spacer } from './styles';
function Page() {
  return (
   <Container>
   <ModelsWraper>
   <div>
          {[
            'Model S',
            'Model Y',
            'Model 3',
            'Model X',
            'Solar Panel',
            'Solar Roof',
            'Accessories'
          ].map(modelName => (
            <ModelsSection
              key={modelName}
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent
                  label={modelName}
                  description="Order Online for Delivery"
                />
              }
            />
          ))}
        </div>

        <Spacer />

  
        <UniqueOverLay>
          
        </UniqueOverLay>
   </ModelsWraper>
   </Container>
  );
}

export default Page;
