import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';
import ButtonLink from './ButtonLink';

const CreatorSelectBox = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    margin-left: 10px;
  }
`;

const FreeCreatorSelectBox = () => {
  const navigate = useNavigate();
  const { freeId } = useParams();

  //   const LOGIN_ID = Number(localStorage.getItem('memberId'));

  const handleDeleteFree = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/freeboards/${freeId}`, {
        headers: {
          Authorization: `${localStorage.getItem('AccessToken')}`,
          Refresh: `${localStorage.getItem('RefreshToken')}`,
        },
      })
      .then(() => navigate(`/freeboards`))
      .catch((err) => console.log(err));
  };

  return (
    <CreatorSelectBox>
      <ButtonLink
        value="수정"
        to={`/freeboard/${freeId}/edit`}
        icon={<i className="fa-solid fa-pen-to-square" />}
      />
      <Button
        value="삭제"
        onClick={handleDeleteFree}
        icon={<i className="fa-solid fa-trash" />}
      />
    </CreatorSelectBox>
  );
};

export default FreeCreatorSelectBox;

// 글쓴 사람이 할 수 있는 것. 모집글 수정, 삭제
// 글쓴 사람이 아니면 디폴트로 좋아요 버튼만 노출
