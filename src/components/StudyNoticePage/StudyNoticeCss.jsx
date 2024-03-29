import styled from 'styled-components';

export const FrameContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  height: 38.8889vh;
  width: 100%;
  background: linear-gradient(#e5f1c6, #ffffff);
  justify-content: center;
`;

export const SideMenuBar = styled.div`
  position: absolute;
  top: 90%;
  left: 13%;
  width: 12%;
  height: 150%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4vw;
  z-index: 90;
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;
  margin: auto;
  padding-bottom: 3px;
  padding-top: 3px;
  display: block;
  cursor: pointer;
  &.calendar{
    width: 1.3vw;
    height: 1.3vw;
  }
  
  &.edit{
    width: 1vw;
    height: 1vw;
  }
`;

export const Container = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 15px;
  border: 3px solid #A7CF41;
`;

export const CheckContainer = styled(Container)`
  background: #a7cf41;
`;

export const ContainerBox = styled.div`
  margin: 0 auto;
  height: 150vh;
  width: 60%;
  display: flex;
  flex-direction: column;
  padding-top: 5vh;
  margin-left: 25vw;
  font-family: 'PretendardSemiBold';
`;

export const TextBox = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 20%;
`;

export const Text = styled.div`
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.96px;
  font-family: 'PretendardBold';
`;

export const StudyTitle = styled.div`
  color: #000;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.96px;
  width: 40vw;
  padding-bottom: 2vh;
  font-family: 'PretendardBold';
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SubText = styled.div`
  color: #646464;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32px;
  width: 75%;
  font-family: 'PretendardBold';
`;

export const EditBox = styled.div`
  padding-right: 55%;
`;

export const NoticeBox = styled.div`
  width: 100%;
  height: 70%;
`;

export const FirstLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 5%;
  padding-bottom: 20px;
  margin-top: -3vw;
  margin-bottom: 0.5vw;
`;

export const SecondLine = styled.div`
  width: 100%;
  height: 5%;
  border-bottom: 1px solid #a7cf41;
`;

export const ListBox = styled.div`
  width: 100%;
  height: 70%;
`;

export const List = styled.div`
  display: flex;
  width: 100%;
  height: 15%;
  flex-direction: row;
  border-bottom: 1px solid grey;
`;

export const Title = styled.div`
  width: 50%;
  margin: auto;
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.96px;
  font-family: 'PretendardBold';
`;

export const Count = styled(Title)`
  width: 5%;
  font-size: 16px;
  font-weight: 500;
`;

export const Data = styled(Title)`
  width: 15%;
  margin: auto;
  font-size: 16px;
  font-weight: 500;
`;

export const Writer = styled(Title)`
  width: 15%;
  margin: auto;
  font-size: 16px;
  font-weight: 500;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2vw;
`;

export const PaginationButton = styled.button`
  margin: 0 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const PageNumber = styled.span`
  margin: 0 10px;
  font-size: 16px;
`;

export const PageButton = styled.button`
  margin: 0 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
