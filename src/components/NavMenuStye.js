import styled from "styled-components";

export const Menu = styled.nav`
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background: hsl(225, 100%, 94%);
    padding: 20px;

    a{
        background: blue;
        padding: 5px 15px;
        border-radius: 5px;
        text-decoration: none;
        color: #2D2F56;

        :hover{
            color: #000000;
            background: blue;
        }
    }
`;
