import React, { Component } from 'react';
import styled from 'styled-components';

class IconImageMenuClass extends  Component {   
        render() {
                const Img = styled.img`
                        height: 23px;
                        margin-right: 8px
                        `;
                return (
                        <Img src={require(`assets/images/${this.props.path}`)} alt=""/>
                );
        }
}

export default IconImageMenuClass
