import styled from "styled-components";

const StartGame = ({ toggle }) => {
    return (
        <Container>
            <div>
                <img src="/images/dices.png" alt="" />
            </div>
            <div className="content">
                <h1>Dice Game</h1>
                <Button onClick={toggle}>Play Now</Button>
            </div>
        </Container>
    );
};

export default StartGame;
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    max-width: 1180px;
    margin: 0 auto;

    .content {
        h1 {
            font-size: 4rem;
            color: black;
            white-space: nowrap;
            margin-bottom: 2rem;
        }
    }
`;

const Button = styled.button`
    background-color: black;
    color: white;
    padding: 1rem 2rem;
    border: none;
    border: 1px solid transparent;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 0.8rem;
    text-transform: uppercase;
    min-width: 220px;
    &:hover {
        background-color: white;
        border: 1px solid black;
        color: black;
    }
`;
