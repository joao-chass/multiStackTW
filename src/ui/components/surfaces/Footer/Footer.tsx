import React from 'react';
import { FooterStyled, FooterContainer, FooterTitle, AppList } from './Footer.styles';
import { Typography, Box } from '@material-ui/core'
function Footer() {
    return (
        <FooterStyled>
            <FooterContainer>
                <Box sx={{ maxWidth: '400px' }}>
                    <FooterTitle>Quem somoes</FooterTitle>
                    <Typography variant={'body2'} sx={{ mt: 2 }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam dolorem cum ab consequatur libero totam accusamus nisi. Perferendis vero impedit adipisci soluta veniam incidunt repellendus distinctio temporibus inventore magni!</Typography>
                </Box>

                <div>
                    <FooterTitle>Baixe nossos aplicativos</FooterTitle>
                    <AppList>
                        <li>
                            <a
                                href={'/'}
                                target={'_blank'}
                                rel={'noopener noreferrer'}
                            >
                                <img src={'/img/logos/app-store.png'} alt={'AppStore'} />
                            </a>
                        </li>

                        <li>
                            <a
                                href={'/'}
                                target={'_blank'}
                                rel={'noopener noreferrer'}
                            >
                                <img src={'/img/logos/google-play.png'} alt={'AppStore'} />
                            </a>
                        </li>
                    </AppList>
                </div>
            </FooterContainer>
        </FooterStyled>
    )
}

export default Footer
