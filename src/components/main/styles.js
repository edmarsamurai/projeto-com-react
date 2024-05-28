import styled from "styled-components";
import Background from '../../img/advo.jpg'



export const Section = styled.section`
width: 100%;
height: 100vh;
display: flex;
justify-content: space-around;
padding: 30px;

background: url('${Background}');
background-size: cover;
background-repeat: no-repeat;

span {
font-size: 20px;
font-weight: 900;
color: #fff;
cursor: pointer;
}
`

export const Nav = styled.nav`
a {
margin-left: 20px;
color: #fff;
cursor: pointer;
}


@media (max-width: 912px) {
    display: flex;
    align-items: center;
    flex-direction: column;
}

`







