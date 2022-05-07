import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
  border-radius: 0.5rem;
  border: 0.0625rem solid #cdd9e5;
  background-color: #2d333b;
`;
WrapperTabList.tabsRole = "TabList";

//botoes
export const WrapperTab = styled(Tab)`
  padding: 8px;
  user-select: none;
  cursor: pointer;
  margin: 8px;
  color: #636e7b;

  &:focus {
    outline: none;
  }

  &.is-selected {
    background-color: #2d333b;
    font-weight: bold;
    font-size:18px;
    text-decoration: underline;
    color: #cdd9e5;
  }
`;

WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
  padding: 1rem;
  margin-top: 1rem;
  display: none;
  border-radius: 0.5rem;
  border: 0.0625rem solid #cdd9e5;
  background-color: #2d333b;

  &.is-selected {
    display: block;
  }
`;
WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  flex-wrap: wrap;
`;
