import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { get_post } from "redux/actions/posts";
import DetailPost from "components/DetailPost";
import { useParams } from "react-router-dom";

function DetailOfPost({ get_post, post }) {
  const params = useParams();
  const slug = params.slug;
  useEffect(() => {
    get_post(slug);
  }, []);
  console.log(post);
  return (
    <FullWidthLayout>
      {post ? <DetailPost post={post} /> : <></>}
    </FullWidthLayout>
  );
}

const mapStateToProps = (state) => ({
  post: state.post.post_list,
});

export default connect(mapStateToProps, { get_post })(DetailOfPost);
