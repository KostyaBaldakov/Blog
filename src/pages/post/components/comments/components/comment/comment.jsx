import styled from "styled-components";
import { Icon } from "../../../../../../components";

const CommentContainer = ({ className, id, author, publishedAt, content }) => {
  
  return (
    <div className={className}>
      <div className="comment">
        <div className="information-panel">
          <div className="author">
            <Icon
              id="fa fa-user-circle-o"
              size="18px"
              margin="0 10px 0 0"
              onClick={() => {}}
            />
            {author}
          </div>
          <div className="published-at">
            <Icon
              id="fa-calendar-o"
              size="18px"
              margin="0 10px 0 0"
              onClick={() => {}}
            />
            {publishedAt}
          </div>
        </div>
        <div className="content-text">{content}</div>
      </div>
      <Icon
        id="fa-trash-o"
        size="21px"
        margin="0 0px 0 10px"
        onClick={() => {}}
      />
    </div>
  );
};

export const Comment = styled(CommentContainer)`
  display: flex;
  width: 100%;
  margin-top: 10px;

  & .comment {
    border: 1px solid #000;
    padding: 5px 10px;
    width: 545px;
  }

  & .information-panel {
    display: flex;
    justify-content: space-between;
  }

  & .author {
    display: flex;
  }

  & .published-at {
    display: flex;
  }
`;
