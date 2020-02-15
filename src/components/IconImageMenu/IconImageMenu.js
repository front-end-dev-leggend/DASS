import React from 'react'
import styled from 'styled-components';
export const IconImageMenu = ({path}) => {
    const Img = styled.img`
      height: 23px;
      margin-right: 8px
    `;
    return (
            <Img src={require(`assets/images/${path}`)} alt=""/>
    )
}
