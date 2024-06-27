import React from 'react';
//import './Sidebar.css';

function Sidebar() {
    return (
        <div className="col-lg-3">
            <div className="sidebar-profile-box">
                <img src="images/cover-pic.png" alt="Cover" className="img-fluid" />
                <div className="sidebar-profile-info">
                    <img src="https://www.freeiconspng.com/thumbs/account-icon/account-icon-21.png" alt="Profile" />
                    <h1>Harsh Tiwari</h1>
                    <h3>Full Stack Development</h3>
                    <h3>by "Skill Academy"</h3>
                    <ul>
                        <li>Your profile view<span>60</span></li>
                        <li>Your post Views<span>8000</span></li>
                        <li>Your connections<span>230</span></li>
                    </ul>
                </div>
                <div className="sidebar-profile-link">
                    <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmrxmRSmqiWsqVmMoCDjOZVHMRQHG_lkjTzw&usqp=CAU" alt="My Items" />My Items</a>
                    <a href="#"><img src="https://blog.waalaxy.com/wp-content/uploads/2021/01/linkedin-logo-jaune.png" alt="Try Premium" />Try Premium</a>
                </div>
                <div className="sidebar-activity">
                    <h3>RECENT</h3>
                    <a href="#"><img src="https://static.thenounproject.com/png/4084271-200.png" alt="Web Development" />Web Development</a>
                    <a href="#"><img src="https://static.thenounproject.com/png/4084271-200.png" alt="User Interface" />User Interface</a>
                    <a href="#"><img src="https://static.thenounproject.com/png/4084271-200.png" alt="Online Learning" />Online Learning</a>
                    <a href="#"><img src="https://static.thenounproject.com/png/4084271-200.png" alt="Learn Online" />Learn Online</a>
                    <a href="#"><img src="https://static.thenounproject.com/png/4084271-200.png" alt="Code Better" />Code Better</a>
                    <a href="#"><img src="https://static.thenounproject.com/png/4084271-200.png" alt="Group Learning" />Group Learning</a>
                    <h3>GROUPS</h3>
                    <a href="#"><img src="https://png.pngtree.com/png-clipart/20191121/original/pngtree-group-icon-png-image_5097424.jpg" alt="Web Developer" />Web Developer</a>
                    <a href="#"><img src="https://png.pngtree.com/png-clipart/20191121/original/pngtree-group-icon-png-image_5097424.jpg" alt="Html learner" />Html learner</a>
                    <a href="#"><img src="https://png.pngtree.com/png-clipart/20191121/original/pngtree-group-icon-png-image_5097424.jpg" alt="Css learner" />Css learner</a>
                    <a href="#"><img src="https://png.pngtree.com/png-clipart/20191121/original/pngtree-group-icon-png-image_5097424.jpg" alt="online Group Learning" />online Group Learning</a>
                    <h3>HASHTAG</h3>
                    <a href="#"><img src="https://static.thenounproject.com/png/4084271-200.png" alt="webdevelopment" />webdevelopment</a>
                    <a href="#"><img src="https://static.thenounproject.com/png/4084271-200.png" alt="userinterface" />userinterface</a>
                    <a href="#"><img src="https://static.thenounproject.com/png/4084271-200.png" alt="onlinelearning" />onlinelearning</a>
                    <a href="#"><img src="https://static.thenounproject.com/png/4084271-200.png" alt="learntocode" />learntocode</a>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
