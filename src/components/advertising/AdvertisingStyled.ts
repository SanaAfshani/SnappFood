// components/AdvertisingComponent/AdvertisingStyled
import styled from 'styled-components';

export const AdvertisingWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  
  .advertising {
    &__icon {
      margin-right: 10px;
      font-size: 24px;
      color: #007bff;
    }

    &__text {
      font-size: 16px;
      color: red;
    }
  }
`;
