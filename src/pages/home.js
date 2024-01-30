import React from 'react';
import { FaqsContainer } from '../containers/faqs';
import {Feature, OptForm} from '../components';
import { FooterContainer } from '../containers/footers';
import {HeaderContainer} from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';

export default function Home(){
  return (
    <>
    <HeaderContainer>
    <Feature>
      <Feature.Title>
        Unlimited films,Tv Series and more.
      </Feature.Title>
      <Feature.SubTitle>
        Watch anywhere. Cancel at any time.
      </Feature.SubTitle>

      <OptForm>
    </OptForm>

    </Feature>

    
    </HeaderContainer>
    <JumbotronContainer />
      <FaqsContainer />
    <FooterContainer />
   
    </>
  );
};
