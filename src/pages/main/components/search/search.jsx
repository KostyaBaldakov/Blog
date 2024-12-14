import styled from "styled-components";
import { Icon } from "../../../../components";

const SearchContainer = ({ className, searchPhrase, onChange }) => {
  return (
    <div className={className}>
      <input
        onChange={onChange}
        value={searchPhrase}
        placeholder="Поиск по заголовку"
      />
      <Icon inactive={true} id="fa-search" size="21px" />
    </div>
  );
};

export const Search = styled(SearchContainer)`
  display: flex;
  position: relative;
  width: 340px;
  height: 40px;
  margin: 40px auto 0;

  & > div {
    position: absolute;
    right: 9px;
    top: 3px;
  }

  & > input {
    font-size: 21px;
    flex-grow: 1;
    padding: 10px 32px 10px 10px;
  }
`;
