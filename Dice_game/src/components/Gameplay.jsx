import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import styled from "styled-components";
const Gameplay = () => {
    return (
        <MainContainer>
            <div className="top_secton">
                <TotalScore />
                <NumberSelector />
            </div>
        </MainContainer>
    );
};

export default Gameplay;

const MainContainer = styled.div`
    .top_secton {
        display: flex;
        justify-content: space-between;
        align-items: end;
        felx-direction:column;
    }
`;
