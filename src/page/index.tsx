import React from "react";

import OverlayContent from "../components/OverlayContent";
import { ModelsWrapper, ModelBlock } from "../components/Model";

import { PageContainer } from "./styles";
import MenuOverlay from "../components/MenuOverlay";

const Page:React.FC = ()=>{
    const models = [
        'Model S',
        'Model Y',
        'Model 3',
        'Model X'
    ]
  
    return (
        <PageContainer>
            <ModelsWrapper>
                <div>
                    {
                       models.map(modelName =>(
                           <ModelBlock 
                                className="car-bg"
                                model={modelName}
                                overlay ={
                                    <OverlayContent 
                                        label={modelName}
                                        desc="Order one for Touchless Delivery"
                                    />
                                }
                           />
                       ))
                    }
                </div>
                
                <MenuOverlay />
            </ModelsWrapper>
        </PageContainer>
    );
}

export default Page;