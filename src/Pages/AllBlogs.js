import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTheBlogs, setAllBlogs, reset } from "../features/blog/blogSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import styled from "styled-components";
import BlogCard from "../Components/Blog/BlogCard";
import Loader from "../Components/Loader/Loader";

const AllBlogs = () => {
  //InfinteScroll
  const [pageInc, setPageInc] = useState(1);
  const [limit] = useState(6);
  const dispatch = useDispatch();
  const { blogs, total, isLoading, allBlogs, isBlogDeleted } = useSelector(
    (state) => state.blog
  );

  useEffect(() => {
    dispatch(reset());
    dispatch(getTheBlogs({ page: pageInc, limit }));
    // eslint-disable-next-line
  }, [isBlogDeleted]);

  useEffect(() => {
    dispatch(setAllBlogs());
    // eslint-disable-next-line
  }, [blogs]);

  const fetchMore = () => {
    setPageInc((pageInc) => pageInc + 1);
    if (allBlogs.length < total) {
      dispatch(
        getTheBlogs({
          page: pageInc + 1,
          limit,
        })
      );
    }
  };

  return (
    <BlogContainer>
      {isLoading && <Loader />}
      {allBlogs?.length ? (
        <BlogCardContainer id="BlogCardContainer">
          {allBlogs?.map((blog) => (
            <BlogCard blog={blog} key={blog._id} />
          ))}
          <InfiniteScroll
            dataLength={allBlogs?.length}
            next={fetchMore}
            hasMore={allBlogs?.length < total ? true : false}
            scrollableTarget="BlogCardContainer"
          ></InfiniteScroll>
        </BlogCardContainer>
      ) : (
        <NoBlogs>
          <h1 level={10} Black>
            No Blogs Found
          </h1>
        </NoBlogs>
      )}
    </BlogContainer>
  );
};

export const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 30px;
  margin-left: ${({ open }) => (open ? `100px` : `270px`)};
  margin-top: 40px;
  margin-right: 10px;
  margin-bottom: 20px;
  @media screen and (max-width: 1100px) {
    margin: 40px 10px;
  }
`;

export const BlogCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 30px;
`;

const NoBlogs = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;

export default AllBlogs;
