import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../PageFrame/pageFrameItems/NavigationBar.jsx';
import {
  FrameContainer,
  SideMenuBar,
  Container,
  Img,
  CheckContainer,
  ContainerBox,
  TextBox,
  StudyTitle,
  EditBox,
  SubText,
  PromotionBox,
  FirstLine,
  MiddleText,
  Text,
  SecondLine,
  Searchbox,
  ThirdLine,
  PaginationContainer,
  PageNumber,
  PageButton,
  First,
  Second,
  Third,
  ItemContainer,
  ButtonBox,
  CreateStudyButton,
} from './StudyMyPromotionCss.jsx';
import home from '../assets/Home.png';
import Calender from '../assets/Calender.png';
import User from '../assets/User.png';
import { ReactComponent as Notice } from '../assets/Notice.svg';
import Edit from '../assets/Edit.png';
import ClickPromotion from '../assets/ClickPromotion.png';
import SearchButton from '../assets/SearchButton.png';
import StudyCreatePopup from '../StudyPromotion/StudyPromotionItems/StudyCreatePopup.jsx';

export default function StudyMyPromotion({ currentIndex }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [studyData, setStudyData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const [createStudyModalIsOpen, setCreateStudyModalIsOpen] = useState(false);

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  // 화면에 표시될 항목들을 필터링하여 반환하는 함수
  const filteredItems = studyData && studyData[currentIndex]?.myStudyPromotions
    ? studyData[currentIndex].myStudyPromotions.filter(item =>
      // 대소문자 구분 없이 검색어가 포함된 제목을 찾음
      item.title.toLowerCase().includes(search.toLowerCase())
    )
    : [];

  const setCreateStudyModalOpen = () => {
    setCreateStudyModalIsOpen(true);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(
          'http://3.38.7.193:8080/api/v1/study',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setStudyData(response.data.responseData);
        console.log('공지 페이지에서의 인덱스:', currentIndex);
      } catch (error) {
        console.error('Error fetching study information:', error);
      }
    };

    fetchData();
  }, [currentIndex]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 다음 페이지 버튼 클릭 핸들러
  const handleNextPage = () => {
    if (indexOfLastItem < studyData[currentIndex].myStudyPromotions.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  //홍보게시글 검색 핸들러 (미완성)
  const SearchPromotion = () => {
    console.log('검색버튼 클릭');
  };

  // 이전 페이지 버튼 클릭 핸들러
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems =
    studyData &&
    studyData[currentIndex]?.myStudyPromotions &&
    studyData[currentIndex].myStudyPromotions.slice(indexOfFirstItem, indexOfLastItem);

  function postNavigateHandler(userStudyIdx, postIdx) {
    if (postIdx) {
      navigate(`/post/${postIdx}/${userStudyIdx}`);
    } else {
      if (studyData[currentIndex].myStatus !== 1) {
        alert('권한이 없습니다.');
        return;
      }

      navigate(`/post/saving/promotion/${userStudyIdx}`, {
        purpose: 'promotion',
      });
    }
  }

  return (
    <>
      <NavigationBar />
      <FrameContainer>
        {/* 메뉴 아이콘들 */}
        <SideMenuBar>
          <Container>
            <Img onClick={() => navigate('/studyHome')} src={home} alt="홈" />
          </Container>
          <Container>
            <Img
              onClick={() => navigate('/studyCalender')}
              src={Calender}
              alt="캘린더"
            />
          </Container>
          <Container>
            <Img
              onClick={() => navigate('/studySocial')}
              src={User}
              alt="소셜"
            />
          </Container>
          <Container>
            <Notice onClick={() => navigate('/studyNotice')} />
          </Container>
          <CheckContainer>
            <Img
              onClick={() => navigate('/studyPromotion')}
              src={ClickPromotion}
            />
          </CheckContainer>
        </SideMenuBar>
        <ContainerBox>
          {studyData && (
            <TextBox>
              <StudyTitle>
                {(studyData[currentIndex] &&
                  studyData[currentIndex].home.title) ||
                  '없음'}
                <EditBox>
                  <img
                    src={Edit}
                    alt="수정"
                    style={{ width: '12px', height: '12px' }}
                  />
                </EditBox>
              </StudyTitle>
              <SubText>
                {studyData[currentIndex] &&
                  studyData[currentIndex].home.summary !== null
                  ? studyData[currentIndex].home.summary
                  : '없음'}
              </SubText>
            </TextBox>
          )}
          {studyData && (
            <PromotionBox>
              <FirstLine>
                <Text>내가 쓴 글</Text>
                <MiddleText
                  onClick={() => navigate('/studyPromotion')}>
                  홍보게시판
                </MiddleText>
                <Text
                  onClick={() =>
                    postNavigateHandler(studyData[currentIndex].userStudyIndex)
                  }
                >
                  글 쓰기
                </Text>
              </FirstLine>
              <Text className='Study'>최신순 스터디 모집글</Text>
              {studyData && studyData[currentIndex] && (
                <ThirdLine>
                  {(search === '' ? currentItems : filteredItems).length > 0 ? (
                    (search === '' ? currentItems : filteredItems).map((myStudyPromotions) => {
                      const updatedAt = new Date(
                        myStudyPromotions.updatedAt ? myStudyPromotions.updatedAt : myStudyPromotions.createdAt
                      );
                      const year = updatedAt.getFullYear();
                      const month = updatedAt.getMonth() + 1;
                      const day = updatedAt.getDate();
                      const formattedDate = `${year}-${month < 10 ? '0' + month : month
                        }-${day < 10 ? '0' + day : day}`;
                      return (
                        <ItemContainer
                          key={myStudyPromotions.idx}
                          onClick={() =>
                            postNavigateHandler(
                              studyData[currentIndex].userStudyIndex,
                              myStudyPromotions.idx
                            )
                          }
                        >
                          <First>{myStudyPromotions.title}</First>
                          <Second>{myStudyPromotions.content}</Second>
                          <Third>
                            <div>{formattedDate}</div>
                            <div>작성자</div>
                          </Third>
                        </ItemContainer>
                      );
                    })
                  ) : (
                    <p> </p>
                  )}
                </ThirdLine>
              )}
            </PromotionBox>
          )}
          {/* 페이지네이션 */}
          {studyData && studyData[currentIndex] && (
            <PaginationContainer>
              <PageButton
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
              >
                이전
              </PageButton>
              {studyData && <PageNumber>{currentPage}</PageNumber>}
              <PageButton
                onClick={handleNextPage}
                disabled={
                  indexOfLastItem >= studyData[currentIndex].myStudyPromotions.length
                }
              >
                다음
              </PageButton>
            </PaginationContainer>
          )}
          <ButtonBox>
            <CreateStudyButton onClick={setCreateStudyModalOpen}>
              스터디 생성
            </CreateStudyButton>
            {createStudyModalIsOpen && (
              <Modal
                isOpen={true}
                onRequestClose={() => setCreateStudyModalIsOpen(false)}
                style={customModalStyles}
              >
                <StudyCreatePopup
                  createStudyModalIsOpen={createStudyModalIsOpen}
                  setCreateStudyModalIsOpen={setCreateStudyModalIsOpen}
                  currentIndex={currentIndex}
                />
              </Modal>
            )}
          </ButtonBox>
        </ContainerBox>
      </FrameContainer>
    </>
  );
}

StudyMyPromotion.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  onIndexChange: PropTypes.func.isRequired,
};

const customModalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: '100%',
    height: '100vh',
    zIndex: '100',
    position: 'fixed',
    top: '0',
    left: '0',
  },
  content: {
    width: '60%',
    height: '65%',
    zIndex: '150',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.25)',
    backgroundColor: 'white',
    justifyContent: 'center',
    overflow: 'hidden',
  },
};
