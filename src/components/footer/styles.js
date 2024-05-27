import styled from "styled-components";

export const Footer = styled.footer`
background: #000;
width: 100%;
height: 20vh;

display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: space-around;

@media (max-width: 912px) {
        text-align: center;  
    }


span {
    color: #fff;
}

`

export const Icons = styled.div`
font-size: 50px;
cursor: pointer;

a {
    color: #fff;
    padding-left: 20px;
}
`