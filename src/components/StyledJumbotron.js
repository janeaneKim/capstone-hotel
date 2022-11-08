import styled from "styled-components";
import defaultImg from '../images/room-1.jpeg'

const StyledJumbotron = styled.header`
    margin-top: 20px;
    margin-top: 20px;
    min-height: 60vh;
    background: url(${props => props.img}) center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default StyledJumbotron;