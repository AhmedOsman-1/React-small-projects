import React, { useState } from "react";
import styled from "styled-components";

const NumberSelector = () => {
    const arrNumber = [1, 2, 3, 4, 5, 6];
    const [selectedNumber, setSelectedNumber] = useState();
    return (
        <NumberSelectorContainer>
            <div className="flex">
                {arrNumber.map((item) => (
                    <Box
                        isSelected={item === selectedNumber}
                        key={item}
                        onClick={() => setSelectedNumber(item)}>
                        {item}
                    </Box>
                ))}
            </div>
            <p>Select Number</p>
        </NumberSelectorContainer>
    );
};

export default NumberSelector;

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display:grid;
    place-items: center;
    font-size-24px;
    cursor: pointer;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (props.isSelected ? "white" : "black")}
    

`;

const NumberSelectorContainer = styled.div`
    .flex {
        display: flex;
        gap-24px;
    }
    p {
        text-align: center;
        font-size: 24px;

        font-weight:700px;
    }
`;
