import React, { useContext, useState } from "react";
import './Sidebar.css';
import { assets } from '../../assets/assets.js';
import { Context } from "../../context/Context";

function Sidebar() {

    const [expanded, setExpand] = useState(false);
    const { onSent, previousPrompts, setRecentPrompt, newChat } = useContext(Context);

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt);
        await onSent(prompt);
    }

    return (
        <div className="sidebar">

            <div className="top">

                <div className="menu" onClick={() => setExpand(prev => !prev)} >
                    <img src={assets.menu_icon} className="menuIcon" />
                    {expanded ? <p style={{ width: '225px' }}>Menu</p> : <p style={{ display: 'none' }}>Menu</p>}
                </div>

                <div onClick={() => newChat()} className="newChat">
                    <img src={assets.plus_icon} className="newChatIcon" />
                    {expanded ? <p>New Chat</p> : null}
                </div>

                {expanded ?
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        {previousPrompts.map((item, index) => {
                            return (
                                <div onClick={() => loadPrompt(item)} className="recent-entry">
                                    <img src={assets.message_icon} className="chatIcon" />
                                    <p>{item}</p>
                                </div>
                            )
                        })}
                    </div>
                    : null}

            </div>

            <div className="bottom">

                <div className="help">
                    <img src={assets.question_icon} className="helpIcon" />
                    {expanded ? <p>Help</p> : null}
                </div>

                <div className="activity">
                    <img src={assets.history_icon} className="activityIcon" />
                    {expanded ? <p>Activity</p> : null}
                </div>

                <div className="settings">
                    <img src={assets.setting_icon} className="settingsIcon" />
                    {expanded ? <p>Settings</p> : null}
                </div>

            </div>

        </div>
    );

}

export default Sidebar;