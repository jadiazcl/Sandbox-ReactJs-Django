import Footer from "components/navegation/Footer";
import Navbar from "components/navegation/NavbarCustom";
import { connect } from "react-redux";

const FullWidthLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
const mapsStateToProps = (state) => ({});

export default connect(mapsStateToProps, {})(FullWidthLayout);
