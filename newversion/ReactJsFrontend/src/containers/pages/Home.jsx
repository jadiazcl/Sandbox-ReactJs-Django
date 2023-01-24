import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { connect } from "react-redux";
//import { useEffect } from "react";
import { get_post_list } from "redux/actions/posts";

function Home({ get_post_list }) {
  /*useEffect(() => {
    get_post_list();
  }, []);*/
  return <FullWidthLayout>Home</FullWidthLayout>;
}

const mapStateToProps = (state) => ({
  //post_list: state.post.post_list,
});

export default connect(mapStateToProps, { get_post_list })(Home);
