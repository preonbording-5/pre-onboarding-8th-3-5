import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getSick } from '../../lib/apis/getData';
import search_icon from '../../lib/images/search_icon.svg';
import { SickItem } from '../../lib/types/sickItem.type';

type Cache = Record<string, SickItem[]>;

const SearchPage = () => {
  const [keywordInput, setKeywordInput] = useState('');
  const [cache, setCache] = useState<Cache>({ '': [] });

  const searchResult: SickItem[] | undefined = cache[keywordInput];

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (!keywordInput) return;
      if (keywordInput in cache) return;
      getSick(keywordInput).then((data) => {
        setCache((prevCache) => ({ ...prevCache, [keywordInput]: data }));
      });
    }, 400);

    return () => clearTimeout(debounce);
  }, [keywordInput, cache]);

  return (
    <>
      <Container>
        <Title>
          국내 모든 임상시험 검색하고
          <br />
          온라인으로 참여하기
        </Title>
        <InputBox>
          <Input
            type="text"
            value={keywordInput}
            onChange={(e) => setKeywordInput(e.target.value)}
            placeholder="🔍  질환명을 입력해 주세요."
            tabIndex={1}
          />
          <CancelButton onClick={() => setKeywordInput('')} tabIndex={2}>
            ✕
          </CancelButton>
          <Button tabIndex={3}>
            <img src={search_icon} width={20} height={20} alt="search_icon" />
          </Button>
        </InputBox>
      </Container>
      <SearchKeywords>
        {searchResult?.map(({ sickCd, sickNm }, i) => (
          <SearchKeyword key={sickCd}>
            <button tabIndex={i + 4} onClick={() => setKeywordInput(sickNm)}>
              {sickNm.split(keywordInput)[0]}
              <strong>{keywordInput}</strong>
              {sickNm.split(keywordInput)[1]}
            </button>
          </SearchKeyword>
        ))}
      </SearchKeywords>
    </>
  );
};

export default SearchPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 80px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  width: 100%;
  height: 108px;
  padding: 0;
  margin-bottom: 40px;
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -0.018em;
  line-height: 1.6;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const InputBox = styled.div`
  width: 100%;
  max-width: 490px;
  height: 70px;
  border-radius: 42px;
  border: 2px solid #ffffff;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: -0.018em;
  line-height: 1.6;
  position: relative;
  padding: 20px 10px 20px 24px;

  :focus {
    border: 2px solid #007be9;
  }
`;

const Input = styled.input`
  width: 400px;
  height: 30px;
  margin-right: 10px;
  padding-right: 25px;
  max-width: 490px;
  font-weight: 400;
  font-size: 18px;
  color: black;
  border: none;
  outline: none;

  ::placeholder {
    color: #a7afb7;
  }
`;

const CancelButton = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 18px;
  border: none;
  background-color: #afafaf;
  color: #ffffff;
  z-index: 1;
  cursor: pointer;
`;

const Button = styled.button`
  width: 48px;
  height: 48px;
  padding: 18px;
  margin-left: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  font-weight: 500;
  border: 0;
  background-color: #007be9;
  color: #ffffff;
  cursor: pointer;
`;

const SearchKeywords = styled.ul`
  width: 100%;
  max-width: 490px;
  height: auto;
  max-height: 500px;
  padding: 20px 0 20px 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 379px;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  border: none;
  border-radius: 20px;
  outline: none;
  overflow-y: auto;
  z-index: 1;
  box-shadow: 0 3px 5px rgba(131, 131, 131, 0.3);
  list-style: none;
`;

const SearchKeyword = styled.li`
  width: 100%;
  height: 40px;
  cursor: pointer;

  &:hover {
    background: #f5f5f5;
  }

  button {
    cursor: pointer;
    width: 100%;
    height: 100%;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: start;
    background-color: transparent;
    padding: 20px 35px 20px 35px;
    font-size: 1rem;
  }
`;
