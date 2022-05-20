import React from 'react';
import styled from 'styled-components';

const Modal =({children, estado, cambiarEstado, titulo})=> {
  return (
    <>
      {estado &&
          <Overlay>
            <Contenedor>
              <Encabezado><h1>{titulo}</h1></Encabezado>
              <Cerrar onClick={()=>cambiarEstado(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </Cerrar>

              {children}

            </Contenedor>
          </Overlay>
      }
    </>
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

const Encabezado= styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5%;
  padding-bottom: 2%;

  h1{
    font-weight: 500;
    font-size: 150%;
    color: #1766DC;
  }

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

  svg{
    width: 100%;
    height: 100%;
  }

`;