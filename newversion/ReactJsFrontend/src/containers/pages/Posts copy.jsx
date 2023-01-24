import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { connect } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { get_post } from "redux/actions/posts";
import PostList from "components/PostList";

function Posts({}) {
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    get_post();
  }, []);
  return (
    <FullWidthLayout>
      Post
      <PostList />
    </FullWidthLayout>
  );
}

const mapStateToProps = (state) => ({
  post_list: state.post.post_list,
});

export default connect(mapStateToProps, {})(Posts);
