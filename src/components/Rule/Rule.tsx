import classNames from "classnames";
import styled from "styled-components";
import { COLORS } from "../../styles/colors";

interface RuleProps {
  isOpen: boolean;
}

export function Rule({ isOpen }: RuleProps) {
  if (!isOpen) {
    return null;
  }
  return (
    <RuleContainer
      aria-label="overlay"
      className={classNames({ "is-active": isOpen })}
    ></RuleContainer>
  );
}
const RuleContainer = styled.div`
  border-bottom: 1px solid ${COLORS.gray500};
  height: 1px;
  margin: 10px 0 32px 0;
`;

export default Rule;
