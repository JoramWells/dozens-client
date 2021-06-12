import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { XIcon } from "@heroicons/react/outline";

const portal = document.getElementById("portal");

const Background = styled.div`
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition-duration: 500ms;

`;

const Content = styled.div`
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  margin: 5px;
  transition-duration: 500ms;

`;

const ModalHeader = styled.div`
`;

const ModalComponent = ({ isOpen, close, children }) => {
  const contentRef = useRef();
  useEffect(() => {
    if (!isOpen) return;
    function listener(e) {
      if (contentRef.current.contains(e.target)) return;
      close();
    }
    window.addEventListener("click", listener);

    return () => window.removeEventListener("click", listener);
  }, [isOpen,close]);
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <Background>
      <Content className="shadow-lg" ref={contentRef}>
        <ModalHeader className="flex flex-row justify-end" >
          <XIcon className="h-5 text-gray-700" onClick={()=>close()} />
        </ModalHeader>
        {children}
      </Content>
    </Background>,
    portal
  );
};

export default ModalComponent;
