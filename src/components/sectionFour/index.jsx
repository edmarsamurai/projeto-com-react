/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { MdLocationOn } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import * as C from './styles'

function SectionFour() {
    return (
        <C.Section>
            <C.Links>
                <a href='#sobre'>Sobre min</a>
                <a href='#atuacao'>Atuações</a>
                <a href='#depoimentos'>Depoimentos</a>
            </C.Links>

            <C.Text>
                <span>Dev ADVOGADO</span>
                <p>Possuo mais de 10 anos
                    na atuação das áreas de direito civil,
                    direito tributário e direito empresarial.</p>

                <span>Fale comigo</span>
                <p><MdLocationOn /> Av. Lorem ipsum dolor sit, 0707 - Cento, Paraná</p> <br />
                <p><BsFillTelephoneFill /> (43) 3432-7777</p>
            </C.Text>

            <C.ContainerForm>
                <form action="https://formcarry.com/s/-msuQh2a_8U"
                    method="POST"
                    enctype="multipart/form-data">
                    <input type="text" name='nome' placeholder='Seu nome' />
                    <input type="tel" name='telefone' placeholder='Seu telefone' />
                    <textarea name="duvida" placeholder='Digite seu problema aqui..'></textarea>
                    <button type='submit'>Enviar mensagem <MdEmail /></button>
                </form>
            </C.ContainerForm>

        </C.Section>
    )
}

export default SectionFour