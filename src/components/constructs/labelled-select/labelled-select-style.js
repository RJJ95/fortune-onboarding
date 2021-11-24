import styled from "styled-components";
import { ReactComponent as Icon } from "../../../media/images/arrow-down.svg";

export const Wrapper = styled.div`
  padding-bottom: 35px;
`;

export const SelectIcon = styled(Icon)`
  position: absolute;
  top: calc(50% - 10px);
  right: 20px;
  pointer-events: none;
`;

export const SelectContainer = styled.div`
  position: relative;
`;
