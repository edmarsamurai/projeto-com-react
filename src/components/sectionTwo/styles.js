import styled from "styled-components";
import Jus from '../../img/justica.jpg'

export const Section = styled.section`
width: 100%;
height: 80vh;
display: flex;
align-items: center;
flex-wrap: wrap;

`

export const Container = styled.div`
width: 50%;
height: 80vh;
background: url('${Jus}');
background-size: cover;
background-repeat: no-repeat;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 100px;
color: #fff;

@media (max-width: 912px) {
    width: 100%;
    height: 120vh;
    text-align: justify;
    }


div {
width: 50%;
height: 80vh;
background: linear-gradient(109deg, rgba(10, 12, 16, 0.99) 15%, rgba(10, 12, 16, 0.7) 50%, rgba(10, 12, 16, 0.99) 85%);
position: absolute;

@media (max-width: 912px) {
        width: 100%;
        height: 120vh;    
    }
}

span {
    font-size: 20px;
    margin-bottom: 30px;
    z-index: 1;
}

h2 {
    font-size: 40px;
    font-weight: 900;
    margin-bottom: 20px;
    z-index: 1;
}

p {
    font-size: 27px;
    z-index: 1;
}

a {
    width: 50%;
    height: 10vh;
    font-size: 17px;
    font-weight: 700;
    z-index: 1;
    background: #5E2129;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    gap: 10px;
    border: none;

    @media (max-width: 912px) {
        width: 120%;
        height: 10vh; 
        margin-top: 30px;   
    }

    &:hover {
    background: #000;

}

&:active {
    opacity: .5;
}
}

`

export const Wrapper = styled.div`
background: #5E2129;
width: 50%;
height: 80vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 20px;

@media (max-width: 912px) {    
    width: 100%;
    }

`

export const Aside = styled.div`
width: 80%;
height: 10vh;
background: #000;
cursor: pointer;

p {
    color: #fff;
    padding: 20px;
    font-weight: 700;

    &:hover {
    color: #000;
}
}

&:hover {
    background: #fff;
    transition: 4s;
}

`