import React from 'react';

import { ModelsWrapper, ModelSection } from '../Model';
import DefaultOverlayContent from '../DefaultOverlayContent';
import UniqueOverlay from '../UniqueOverlay';

import { Container, Spacer } from './styles';

const Page: React.FC = () =>{
    return (
        <Container>
            <ModelsWrapper>
                <div>
                {[
                    {
                        modelName:"Model 3",
                        imgPath:"../../assets/model3.jpg"
                    },
                    {
                        modelName:"Model Y",
                        imgPath:"../../assets/model3.jpg"
                    },
                    {
                        modelName:"Model X",
                        imgPath:"../../assets/model3.jpg"
                    },
                ].map(item => (
                        <ModelSection
                            key={item.modelName}
                            className="colored"
                            img={item.imgPath}
                            modelName={item.modelName}
                            overlayNode={
                                <DefaultOverlayContent
                                    label={item.modelName}
                                    description="Order online for delivery"
                                />
                            }
                        />
                    ))}
                </div>
                <Spacer />

                <UniqueOverlay />
            </ModelsWrapper>
        </Container>
    );
}

export default Page;