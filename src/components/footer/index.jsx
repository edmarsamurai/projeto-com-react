import React from 'react';
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquarePinterest } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

import * as C from './styles'

function Footer() {
    return (
        <C.Footer>

            <C.Icons>

                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <FaInstagramSquare />
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <FaFacebookSquare />
                </a>
                <a href="https://br.pinterest.com/" target="_blank" rel="noopener noreferrer">
                    <FaSquarePinterest />

                </a>
                <a href="https://www.linkedin.com/in/edmar-robaina-de-souza/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>

            </C.Icons >


            <span>Feito com amor ❣️ por Edmar R. Souza Copyright © 2024</span>

        </C.Footer >

    )
}

export default Footer