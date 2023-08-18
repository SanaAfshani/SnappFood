// components/RatingComponent/RatingStyled
import styled from "styled-components";

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 4px 0px 2px;
  border-radius: 4px;
  flex-direction: row;
  background: #f0f5ed;
  margin-right: 3px;
  .rating {
    &__star {
      width: 18px;
      height: 18px;
      margin-right: 4px;
      fill: #f39c12; /* Adjust the star color as needed */
    }

    &__count {
      color: rgba(63, 126, 0);
      margin-top: 4px;
      margin-left: 3px;
    }
  }
`;