// components/ImageHeaderComponent/ImageHeaderStyled
import styled from "styled-components";

export const Wrapper = styled.header`
  position: relative;
  display: flex;
  box-sizing: inherit;
  user-select: none;
  overflow: unset;

  .restaurant-card {
    &__image-wrapper {
      &__image {
        width: 100%;
        height: 134px;
      }
      &__logo {
        position: absolute;
        bottom: -16px;
        right: 8px;
        width: 64px;
        height: 64px;
        padding: 4px;
        border-radius: 8px;
        background-color: #fff;
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
      },
    },
  }
`;

export const ProSpan = styled.span<{ isPro: boolean }>`
    /* Define styles for the is_pro condition */
    position: absolute;
    right: 0;
    top: 16px;
    background-color: #fff;
    border-radius: 16px 0 0 16px;
    height: 24px;
    padding: 4px 8px;

    color: ${props => (props.isPro ? '#ff00a4' : '#22a958')};
    font-weight: bold;
`;

