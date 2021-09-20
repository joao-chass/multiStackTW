import React from 'react';
import { PageTitleContainer, PageTiltleStyled, PageSubTiltleStyled } from './PageTiltle.Styles'
interface PageTiltleProps{
    title: string;
    subtitle?: string | JSX.Element;
}

const PageTiltle: React.FC<PageTiltleProps> = (props) => {

    return (
        <PageTitleContainer>
           <PageTiltleStyled> {props.title} </PageTiltleStyled>
           <PageSubTiltleStyled> {props.subtitle} </PageSubTiltleStyled>
        </PageTitleContainer>
    );
}

export default PageTiltle;