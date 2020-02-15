import React from 'react';
import styled from 'styled-components';



const Icon = (props) => {
    return (
        <img onClick={() => window.location.href = props.link} src={props.image} alt={''} width={45} height={45} style={{margin: '15px 0'}}/>
    )
};

export default Icon;
