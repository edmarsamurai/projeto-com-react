import styled from "styled-components";

export const Section = styled.section`
width: 100%;
height: 100vh;
background: #000;
padding: 50px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

@media (max-width: 912px) {
       padding-top: 900px;
        height: 350vh;    
    }

h3 {
    font-size: 27px;
    font-weight: 700;
    color: #5E2129; 
    text-align: center;
    margin-bottom: 30px;
}

span {
    font-size: 20px;
    color: #fff;
    margin-bottom: 10px;
}

`


export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
margin-top: 30px;

@media (max-width: 912px) {
        flex-direction: column;
        
        padding-top: 100px;  
    }
`


export const Divs = styled.div`
background: #5E2129; 
width: 50%;
height: 50vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

padding: 30px;

@media (max-width: 912px) {
        width: 100%;
    }


img {
    border-radius: 100px;
    cursor: pointer;
}

div {
    color: #ffff00;
    cursor: pointer;
}

`


export const P = styled.p`
font-size: 15px;
color: #fff;
margin: 20px 0;
`