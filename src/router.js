import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicApi } from "./redux/actions";
import ChooseLang from "./view/chooseLang";
import XpHome from "./view/xp";

const Router = ({
    lang,
    loadData
}) => {
    useEffect(() => {
        loadData()
    }, [])
    return (
       
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={lang == null ? <ChooseLang /> : <XpHome />} />
                </Routes>
            </BrowserRouter>
        
    )
}

const mapStateToProps = (state) => ({
   lang: state.publicApi.lang,
});

const mapDispatchToProps = {
    loadData: publicApi.loadData,
    
};
 export default connect(mapStateToProps, mapDispatchToProps)(Router);