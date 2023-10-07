import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import Modal from "../Modal/Modal";
import Heading from "../Heading/Heading";
import { DeleteButtons, DeleteModal } from "../Products/TableRow";
import { Button } from "../../GlobalStyles";
import { useState } from "react";
import { deleteBlogById} from "../../features/blog/blogSlice";
import { useDispatch } from "react-redux";

const BlogCard = ({ blog }) => {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <CardContainer>
      <CardImageContainer>
        <img src={blog?.featuredImg} alt="blog" />
      </CardImageContainer>
      <BlogCardTitle>
        <h2>{blog?.titleOfBlog}</h2>
      </BlogCardTitle>
      <h4>{blog?.category}</h4>
      <BlogCardContent>
        {blog.blogShortDesc.length > 170
          ? `${blog.blogShortDesc.slice(0, 170)}...`
          : blog.blogShortDesc}
      </BlogCardContent>
      <BlogCardFooter>
        <CardDate>
          <h3>{blog?.authorName}</h3>
          <h3>{new Date(blog?.createdAt).toLocaleString().substring(0, 9)}</h3>
        </CardDate>
        <Action>
          <EditIcon
            onClick={() => {
              navigate(`/admin/editBlog/${blog._id}`);
            }}
          />
          <DeleteIcon
            onClick={() => {
              setModal(true);
            }}
          />
          <Modal
            active={modal}
            hideModal={() => setModal(false)}
            title="Delete Blog"
          >
            <DeleteModal>
              <Heading level={2}>Are you sure to delete blog</Heading>
              <DeleteButtons>
                <Button
                  primary
                  onClick={() => {
                    dispatch(deleteBlogById(blog._id));
                    setModal(false);
                  }}
                >
                  Yes
                </Button>
                <Button primary onClick={() => setModal(false)}>
                  Cancel
                </Button>
              </DeleteButtons>
            </DeleteModal>
          </Modal>
        </Action>
      </BlogCardFooter>
    </CardContainer>
  );
};

export const BlogCardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-family: "Urbanist-Regular";
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 160%;
    color: #000f5c;
  }
  h4 {
    font-family: "Urbanist-Regular";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 160%;
    color: #000000;
  }
`;

export const BlogCardContent = styled.div`
  font-family: "Urbanist-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 160%;
  color: #000000;
  height: 90px;
`;

export const BlogCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardDate = styled.div`
  display: flex;
  grid-gap: 20px;
  align-items: center;

  h3 {
    font-family: "Poppins-Regular";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #000f5c;
  }

  @media screen and (max-width: 400px) {
    grid-gap: 10px;
  }
`;

export const CardShareIcons = styled.div`
  display: flex;
  grid-gap: 20px;
  align-items: center;

  @media screen and (max-width: 400px) {
    grid-gap: 10px;
  }
`;

export const ShareIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 29px;
  height: 29px;
  border: 1px solid #000000;
  border-radius: 360px;
  cursor: pointer;
`;

export const Popular = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 105px;
  height: 34px;
  background: #fee96c;
  border-radius: 15px;
  font-family: "Urbanist-Regular";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 160%;
  color: #000000;
  position: absolute;
  cursor: pointer;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  grid-gap: 20px;
  background: #ffffff;
  border-radius: 12px;
  position: relative;
`;

export const CardImageContainer = styled.div`
  img {
    width: 100%;
    height: 300px;
  }
  cursor: pointer;
`;

export const Action = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const EditIcon = styled(FaRegEdit)`
  font-family: "Poppins-Regular";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 24px;
  color: #228b22;
  cursor: pointer;
`;

export const DeleteIcon = styled(AiOutlineDelete)`
  font-family: "Poppins-Regular";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 24px;
  color: #ff0000;
  cursor: pointer;
`;

export default BlogCard;
