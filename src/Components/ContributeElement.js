//ContributeElement.js
import React from 'react';
import styled from 'styled-components';
import { getDate } from '../Helpers/helper';

//Style for row in tabe
const Row = styled.tr`
    align-items: center;
    border:1px solid ${(props) => props.theme.border_color}; 
    color:${(props) => props.theme.font_color};
`;
//Style for row entry in row
const Col = styled.td`
    align-items: center;
    border:1px solid ${(props) => props.theme.border_color};
    color:white;
`;

export default function ContributeElement(props){   
    //console.log(props.data.date);
    return(
            <Row>
                <Col>
                    {getDate(props.data.date)}
                </Col>
                <Col>
                    {props.data.amount}
                </Col>
            </Row>
    );
};