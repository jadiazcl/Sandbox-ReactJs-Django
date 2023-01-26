import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { connect } from "react-redux";
import PostList from "components/PostList";
import { useState } from "react";
import { get_post_list } from "redux/actions/posts";

function Posts({ get_post_list, post_list }) {
  useState(() => {
    get_post_list();
  }, []);

  return (
    <FullWidthLayout>
      <PostList post_list={post_list} />
    </FullWidthLayout>
  );
}

const mapStateToProps = (state) => ({
  post_list: state.post.post_list,
});

export default connect(mapStateToProps, { get_post_list })(Posts);
