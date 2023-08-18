// components/CardsComponent/CardsStyled
import styled from 'styled-components';

export const CardWrapper = styled.div`
  border: 1px solid #e6e6e6;
  border-radius: 6px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: calc(100% - 32px);
  height: 246px;
  min-width: min(calc(100% - 4px), 260px);
  max-width: 567px;

  .restaurant-card {
    &__content {
      padding: 20px 16px 8px 16px;
      height: 110px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      direction: rtl;

      &__title {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
    }

    &__title {
      font-size: 14px;;
      font-weight: 500;
      color: #404040;
      white-space: nowrap;
      width: unset;
      max-width: 100%;
      margin-left: 4px;
      text-overflow: ellipsis;
      line-height: 1.5;
      overflow: hidden;
    }

    &__description-wrapper {
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      flex-shrink: 0;
      font-size: 12px;
      font-weight: 400;
      color: #404040;

      &__description {
        display: flex;
        flex-direction: row;
        justify-content: initial;
        align-items: center;
      }
    }

    &__grouping {
      display: flex;
      align-items: center;
      margin-top: 10px;
      gap: 12px;
      flex-direction: row;
      justify-content: space-between;
    }

    &__rating {
      display: inline-block;
      margin-right: 5px;
      font-size: 16px;
    }

    &__delivery-time-wrapper {
      font-size: 12px;
      display: flex;
      font-weight: 400;
      color: #404040;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      width: fit-content;
      height: 24px;
      padding: 2px;
      border-radius: 4px;
      overflow: hidden;

      &__delivery-time-container {
        align-items: center;
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        overflow: hidden;
        text-overflow: ellipsis;

        &__title {
          margin-left: 4px;
          font-size: 12px;
          font-weight: 400;
          color: #a3a3a3;

        } ,
        &__price {
            font-size: 12px;
            font-weight: 400;
            color: #404040;
            margin-left: 2px;
        }
      }
    },
  &__time-to-send {
    display: flex;
    margin-top: 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    white-space: nowrap;
  }
  }
`;
