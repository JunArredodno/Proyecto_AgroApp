import React from 'react';
import styled from 'styled-components';

const Modal =()=> {
  return (
    <div>
        <Overlay>
          <Contenedor>
            <Encabezado>
              <h3>Comprar</h3>
            </Encabezado>
            <Cerrar>X</Cerrar>
          </Contenedor>
        </Overlay>
    </div>
  );
}

export default Modal

const Overlay = styled.div`
  width:100vw;
  height:100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.5);

  display: flex;
  align-items: center;
  justify-content: center;

`;

const Contenedor= styled.div`
  width:50vw; 
  height:50vh; 
  background: #fff;
  position: relative;
  border-radious: 5px;
  box-shadow: rgba(100,100,111,0.2) 0px, 7px, 29px, 0px;
  padding: 2%;
`;

const Encabezado= styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5%;
  padding-bottom: 2%;
  border-bottom: 1px solid #E8E8E8;

  h3{
    font-weight: 500;
    font-size: 150%;
    color: #1766DC;
  }

`;

const Cerrar= styled.button`
  position: absolute;
  top: 3%;
  right: 3%;
  width: 5%;
  height: 7%;

  border: none;
  background: none;
  cursor: pointer;

  &:hover{
    background: #CB3234;
  }
`;