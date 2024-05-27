import styled from "styled-components";

export const Section = styled.section`
background: #5E2129;
width: 100%;
height: 70vh;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
gap: 50px;

@media (max-width: 912px) {
    height: 200vh;
flex-direction: column;  
    }

`

export const Links = styled.div`
width: 30%;
height: 50vh;
background: #000;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 30px;

@media (max-width: 912px) {
        width: 100%; 
    }

a {
    font-size: 27px;
    color: #fff;
    cursor: pointer;
    margin-bottom: 10px;
}
`


export const Text = styled.div`
background: #000;
width: 30%;
height: 50vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 30px;
text-align: center;

@media (max-width: 912px) {
        width: 100%; 
    }



span {
    font-size: 27px;
    font-weight: 700;
    margin: 20px 0;
    color: #5E2129;
}

p {
    font-size: 20px;
    color: #fff;
}
`


export const ContainerForm = styled.div`
background: #000;
width: 30%;
height: 50vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

@media (max-width: 912px) {
        width: 100%; 
    }


form {
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
}

input {
    width: 200%;
    height: 7vh;
    margin: 10px 0;
    padding-left: 10px;
    outline: none;
}

textarea {
    width: 200%;
    height: 10vh;
    padding: 10px 0 10px 10px;
    outline: none;
}

button {
    background: #5E2129;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    border: none;
    width: 100%;
    height: 7vh;
    margin-top: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

&:hover {
opacity: .7;
}

&:active {
    opacity: .5;
}
}
`