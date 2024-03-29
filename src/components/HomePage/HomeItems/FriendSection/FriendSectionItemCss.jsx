import styled from 'styled-components';

export const FriendBox = styled.div`
  display: flex;
  align-items: center;
  width: 28vw;
  height: 10vw;
  border: 1px solid rgba(160, 160, 160, 0.5);
  box-shadow: 0px 2px 10px 2px rgba(160, 160, 160, 0.5);
  border-radius: 30px 30px 30px 30px;
  justify-content: center;
  padding-left: 0.5vw;
  padding-right: 0.5vw;

  background-color: #ecf1e0;
`;

export const ScrollBox = styled.div`
  display: flex;
  height: 90%;
  width: 95%;
  align-items: center;

  &.overflow {
    overflow-x: auto;
    flex-direction: row;
    justify-content: flex-start;
  }

  &.normal {
    justify-content: center;
    align-items: center;
  }

  &::-webkit-scrollbar {
    height: 9px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #b9d967;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

export const Friend = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.5vw;
  margin-right: 0.5vw;
  height: 7vw;
  min-width: 4vw;
  justify-content: center;
  align-items: center;

  &.empty {
    border: 1px solid blue;
  }
`;

export const Circle = styled.div`
  height: 3vw;
  width: 3vw;
  border: 1px solid black;
  border-radius: 50%;
`;

export const FriendFont = styled.p`
  font-family: 'PretendardSemiBold';
  margin-top: 5px;
  margin-bottom: 0px;
  font-size: 13px;

  &.name {
    margin-top: 10px;
  }

  &.time {
    margin-top: 15px;
    font-size: 15px;
    font-weight: bold;
  }
`;
