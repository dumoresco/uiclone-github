import styled, { css } from "styled-components";

import { RiBookMarkLine, RiStarLine } from "react-icons/ri";
import { AiOutlineFork } from "react-icons/ai";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 6px;
`;

export const Topside = styled.div`
  header {
    display: flex;
    align-items: center;
    > a {
      margin-left: 8px;
      color: var(--link);
      font-size: 14px;
      font-weight: 600;
      text-decoration: none;

      &:focus {
        text-decoration: underline;
      }
    }
  }

  p {
    margin: 8px 0 16px;
    font-size: 13px;
    color: var(--gray);
    letter-spacing: 0.1px;
    line-height: 22px;
  }
`;

const iconCSS = css`
  width: 16px;
  height: 16px;
  fill: var(-icon);
  flex-shrink: 0;
`;

export const RepoIcon = styled(RiBookMarkLine)`
  ${iconCSS}
`;

export const Bottomside = styled.div`
  > ul {
    display: flex;
    align-items: center;

    > li {
      display: flex;
      align-items: center;
      margin-right: 16px;

      > span {
        margin-left: 5px;
        font-size: 12px;
        color: var(--gray);
      }
    }
  }

  .language {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    flex-shrink: 0;

    &.other {
      background: var(--other-language);
    }
    &.javascript {
      background: var(--javascript);
    }
    &.typescript {
      background: var(--typescript);
    }
  }
`;

export const StarsIcon = styled(RiStarLine)`
  ${iconCSS}
`;

export const ForksIcon = styled(AiOutlineFork)`
  ${iconCSS}
`;
