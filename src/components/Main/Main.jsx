import React, { useContext, useState } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

function Main() {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

    return (
        <div className="main">

            <nav>
                <h3>Artificially Intelligent Anshu</h3>
                <img src={assets.profile} className="profPic" />
            </nav>

            <div className="continer">

                {!showResult ? <>

                    <div className="greeting">
                        <h1><span>Hello There</span></h1>
                        <h1 className="notSpan">How can I help you today?</h1>
                    </div>

                    <div className="card-container">

                        <div className="row">
                            <div className="card">
                                <p>Give me a detailed note about react JS</p>
                                <img className="codeIcon" src={assets.code_icon} />
                            </div>

                            <div className="card">
                                <p>Suggest ideas for creating a web application</p>
                                <img src={assets.bulb_icon} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="card">
                                <p>Suggest beautiful places to see on upcoming road trip</p>
                                <img src={assets.compass_icon} />
                            </div>

                            <div className="card">
                                <p>Briefly summarize the concept of urban planning</p>
                                <img src={assets.message_icon} />
                            </div>
                        </div>

                    </div>
                </>
                    : <div className="result-container">
                        <div className="result-title">
                            <img src={assets.profile} className="resultImage" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.logo} />

                            {loading ?
                                <div className="loader">
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                                : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>}

                        </div>
                    </div>}

                <div className="searchBox">

                    <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Enter a prompt here" className="searchBar" />
                    <div className="searchImages">
                        {/* <img src={assets.gallery_icon} className="imageIcon" />
                        <img src={assets.mic_icon} className="micIcon" /> */}
                        <img onClick={() => onSent()} src={assets.send_icon} className="sendIcon" />
                    </div>

                </div>

            </div>

        </div>
    );

}

export default Main;