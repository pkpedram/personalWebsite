import React from "react";
import { connect } from "react-redux";

const XpHome = ({}) => {
    return(
        <div>XpHome</div>
    );
};

const mapStateToProps = (state) => ({
    lang: state.publicApi.lang,
 });
 
 const mapDispatchToProps = {
  
     
 };
  export default connect(mapStateToProps, mapDispatchToProps)(XpHome);