import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import TypeAnimation from 'react-type-animation';
import { publicApi } from "../redux/actions";

const ChooseLang = ({
    lang,
    setLang
}) => {
    const [loadingDone, setLoadingDone] = useState(false);
    const [langInput, setLangInput] = useState(false);
    const [err, setErr] = useState([]);
    
    useEffect(() => {
        setTimeout(() => setLoadingDone(true), 4000);
        setTimeout(() => setLangInput(true), 8000);
    }, [])
    
    const filterChoosedLang = (e) => {
        if(e === 'E' || e === 'e'){
        setLang('English');
        }
        else if(e === 'F' || e === "f"){
        setLang('Farsi');
        }
        else{
        setErr([...err, 1]);
        }
    }
    
    return (
        <div className="min-h-screen bg-black pt-4">
           <div className="flex ">
               <span className="bg-gray-300 w-6 h-2 mt-2 mx-2"></span>
           <TypeAnimation
                cursor={false}
                sequence={['Pedram Keshavarzi - Front-End Developer Personal Website Loading...', 800]}
                wrapper="h2"
                className="text-gray-300 text-xl font-bold"
            />
           </div>
           {
               loadingDone && <div className="flex ">
               <span className="bg-gray-300 w-6 h-2 mt-2 mx-2 "></span>
           <TypeAnimation
                cursor={false}
                sequence={['Please Type Your Choosen Language. (E for English, F for Farsi)', 600]}
                wrapper="h2"
                className="text-gray-300 text-xl font-bold"
            />
           </div>
           }
           {
               langInput &&
               <div className="flex ">
               <span className="bg-gray-300 w-6 h-2 mt-2 mx-2 "></span>
                <input className="outline-none bg-transparent text-gray-300 text-lg font-bold" maxLength={1} autoFocus onChange={e => filterChoosedLang(e.target.value)}/>
           </div>
           }
           {
               err.length > 0 && 
               err.map((er) => (
                <div className="flex ">
                <span className="bg-gray-300 w-6 h-2 mt-2 mx-2 "></span>
                 <input className="outline-none bg-transparent text-gray-300 text-lg font-bold" maxLength={1} autoFocus onChange={e => filterChoosedLang(e.target.value)}/>
            </div>
               ))
           }
        </div>
    );
};
 
const mapStateToProps = (state) => ({
    lang: state.publicApi.lang
});

const mapDispatchToProps = {
    setLang: publicApi.setLang,
};
export default connect(mapStateToProps, mapDispatchToProps)(ChooseLang);