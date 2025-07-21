import styled from "styled-components";

export const Container= styled.div`
background:#c1c1c1;
margin:5px;
width:50%;
height: 300px;
margin-left: 20px;
font-family:'Playfair Display'
`;
export const Titulo= styled.div`
text-align:center;
font-size:30px;

`;
export const Button= styled.button`
background-color:green;
border-radius: 10px;

`;
export const Row= styled.div`
   display: flex;
   justify-content: space-around; 
   align-items: center;
  
   p:only-child{
      margin-right: 16px;
   }

`;