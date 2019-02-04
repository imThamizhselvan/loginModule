import styled from 'styled-components'

export const TopBar = styled.div`
  border-bottom: 2px solid palevioletred;
  box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
`;

export const ParentList= styled.div`
  display: flex;
  align-items: stretch;
  text-decoration: none;
  color: #FFFFFF;
  div {
    margin-top: 10px;
    text-align: center;
    font-size: 30px;
    text-decoration: none;
    flex-grow: 1;
    a {
      color: #FFFFFF;
      text-decoration: none;
    }
    Button {
      background: #ee9ca7;
      background: -webkit-linear-gradient(to right, #ffdde1, #ee9ca7);
      background: linear-gradient(to right, #ffdde1, #ee9ca7);
      color: #8C55AA;
      a {
        text-decoration: none;
        color: #8C55AA;
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
`;

export const CenterContainer = styled.div`
  background-color: #FFFFFF;
  max-width: 400px;
  height: auto;
  padding-bottom: 30px;
  margin: 7em auto;
  border-radius: 1.5em;
  text-align: center;
  box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
  margin-left: auto;
  margin-right: auto;
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: 5em;
  color: #fff;
  background: linear-gradient(to right, #9C27B0, #E040FB);
  border: 0;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 10px;
  padding-top: 10px;
  font-family: 'Ubuntu', sans-serif;
  font-size: 13px;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);
  margin-bottom: 10px;
  outline: none;
`;

export const MainBody = styled.div`
  background: #ED213A;
  background: -webkit-linear-gradient(to right, #93291E, #ED213A);
  background: linear-gradient(to right, #93291E, #ED213A);
  position:fixed;
  padding:0;
  margin:0;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
`;

export const BoxText = styled.p`
  padding-top: 40px;
  color: #8C55AA;
  font-weight: bold;
  font-size: 23px;
  text-align: center;
`;

export const Content = styled.p`
  color: #FFFFFF;
  padding-top: 40px;
  font-size: 23px;
  text-align: center;
`;

export const InputBox = styled.input`
  width: 76%;
  color: rgb(38, 50, 56);
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1px;
  background: rgba(136, 126, 126, 0.04);
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  outline: none;
  box-sizing: border-box;
  border: 2px solid rgba(0, 0, 0, 0.02);
  margin-bottom: 50px;
  text-align: center;
  margin-bottom: 27px;
  :focus {
    border: 2px solid rgba(0, 0, 0, 0.18) !important;
  }
`;

export const AdditionalFormData = styled.p`
  text-align: center;
  cursor: pointer;
  a {
    text-decoration: none;
    color: #a57aad;
  }
`;
