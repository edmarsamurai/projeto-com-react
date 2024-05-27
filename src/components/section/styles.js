import styled from "styled-components";

export const Section = styled.section`
background: #000;
width: 100%;
height: 70vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
flex-wrap: wrap;

h1 {
    font-size: 40px;
    font-weight: 900;
    text-align: center;
    color: #fff;
    padding: 40px 0;
    color: #5E2129;
}

@media (max-width: 912px) {
        width: 100%;
        padding: 3px;
        height: 140vh;   
    }


`

export const P = styled.p`
text-align: center;
margin: 30px 0;
font-size: 20px;
color: #fff;

@media (max-width: 912px) {
       margin: 10px; 
    }
`

export const Div = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
gap: 20px;
text-align: center;
padding: 20px 0;

@media (max-width: 912px) {
        flex-direction: column;
    }


`


export const Divs = styled.div`
width: 30%;
height: 30vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 20px;


border: 1px solid #5E2129;


span {
font-size: 20px;
font-weight: 700;
color: #5E2129; 
}

p {
    margin-top: 30px;
    color: #fff;
}

@media (max-width: 912px) {
        width: 70%;
    
    }
`