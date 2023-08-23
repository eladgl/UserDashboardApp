import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import ContributeElement from './ContributeElement';
//Wrapper for the contribution list, align the button on top the 
//table below it
const VerticalWrapper = styled.section`
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: flex-start;
    width:300px;
    height:85vh;
    padding:10px;
    margin: 0 auto;
    border: 1px solid ${(props) => props.theme.border_color};
    background-color:${(props) => props.theme.surface_color};

    button {
        cursor: pointer;
        background-color:${(props) => props.theme.button_color};
        color:${(props) => props.theme.button_font_color};;
        &:hover {
            color: ${(props) => props.theme.label_font_color_hover};
        }
        &:active {
            transform: translateY(1px);
        }
    }
`;
//Table wrapper style, take it as section to allow
//using the scroll
const TableWrapper = styled.section`
    overflow:hidden;
    max-height:80vh;
    min-height:50vh;
    padding:10px;
    margin:10px;
    width:100%;
    overflow-y: auto;
`;
//style for the table and nested related elements in it
const StyledTable = styled.table`
    caption-side: top;
    border: none;
    border-collapse: collapse;
    width:100%;
    height:45vh;
    max-height:45vh;
    caption-side: bottom;
    
    td,
    th {
        border: none;
        width:50%;
        font-size:1.3em;
        color:${(props) => props.theme.font_color};
    }
    
    td {
        padding: 5px 10px;
        width:50%;
        font-size:1em;
        text-align: center;
    }

    tbody tr {
        position: relative;
        z-index:1;
        :nth-of-type(odd) {
            background-color: (0,0,0,0.6);
        }
        :hover {
            background-color: ${(props) => props.theme.td_hover_color};
        }
    }
    thead > tr {
        position: relative;
        position: sticky;
        top:0;
        background-color: ${(props) => props.theme.td_hover_color};
        z-index:2;
    }
    caption {
        color:${(props) => props.theme.label_font_color};
        font-size: 1.5em;
        padding: 5px;
        font-weight: bold;
    }
`;
//style for button
const SortButton = styled.button`
    margin-bottom:2px;
`;
//This function is in order to flatten an array of arrays
//used in the contributionsList since its an array of arrays
function flattenArray(nestedArray) {
    if(nestedArray && nestedArray.length > 0)
        return nestedArray.reduce((accumulator, currentArray) => accumulator.concat(currentArray), []);
    return [];
}

export default function ContributeList(props){
    //init state for ascending/descending sort flag
    const [ascendingFlag, setSortFlag] = useState(false);

    // Sort the contributions array when passed as a prop
    const sortedContributions = flattenArray(props.contirubutionList).sort((a, b) => {
        return ascendingFlag ? (a.date - b.date) : (b.date - a.date);
    });

    // Toggle sorting order with button click
    const ascendDescend = () => {
        setSortFlag(!ascendingFlag);
    };

    return(
        <VerticalWrapper>
            <SortButton 
                onClick={ascendDescend}>
                {ascendingFlag ? "Ascending" : "Descending"}
            </SortButton>
            <TableWrapper>
                <StyledTable>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                    <tbody>
                        {sortedContributions.map((contribution, index) => {
                            return (
                                <ContributeElement 
                                    key={index} //unique index based on index 
                                    data={contribution}/>
                            );
                        })} 
                    </tbody>
                    <caption>
                        Contributions
                    </caption>
                </StyledTable>
            </TableWrapper>
        </VerticalWrapper>
    );
};