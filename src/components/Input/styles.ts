import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const Label = styled.label`
  font-size: 18px;
  color: var(--text);
  line-height: 24px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const InputComponent = styled.input`
    height: 64px;
    
    padding: 16px 10px;
    border-radius: 20px;
    background: #F5F8FA;
    border: 1px solid #D3E2E5;
    margin-bottom: 24px;

    font-size: 16px;
    color: var(--text);
    font-weight: 500;
`;