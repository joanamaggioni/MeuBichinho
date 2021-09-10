import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  background: linear-gradient(155.85deg, #f44a87 45.83%, #ffb930 100%);
  height: 100%;
`;

export const Title = styled.h1`
  width: 100%;

  font-size: 32px;
  line-height: 34px;
  color: var(--title);
  font-weight: 700;

  border-bottom: 1px solid #d3e2e5;
  margin-bottom: 40px;
  padding-bottom: 24px;
  text-align: flex-start;
`;

export const Main = styled.div`
  width: 700px;
  margin: 64px auto;

  background: #ffffff;
  border: 1px solid #d3e2e5;
  border-radius: 20px;

  padding: 64px 80px;

  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Photos = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-bottom: 24px;
`;

export const Dev = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`;

export const Img = styled.img`
    width: 120px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
    border: 2px solid var(--primary);
`;

export const Span = styled.span`
   font-size: 18px;
   color: var(--title);
   text-align: center;
`;