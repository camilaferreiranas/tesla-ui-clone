import React from 'react';
import DefaultOverlaycontent from '../DefaultOverlayContent';
import {ModelsWraper, ModelsSection} from '../Model'


import { Container } from './styles';
function Page() {
  return (
   <Container>
   <ModelsWraper>
     <div>
       {
         [
           'Model S',
           'Model Y', 
           'Model 3', 
           'Model X', 
           'Solar Panels', 
           'Solar Roof', 
           'Accessories'
         ].map(modelName => 
          <ModelsSection
          key={modelName}
          className="colored"
           modelName={modelName}
           overlayNode={<DefaultOverlaycontent
             label={modelName}
             description="Order Online for deliver"
           />}
          />
          )
       }
     
     </div>
   </ModelsWraper>
   </Container>
  );
}

export default Page;
