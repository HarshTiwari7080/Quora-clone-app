import logo from './logo.svg';
import './App.css';


import Haeder from './component/Header.js';
import quora from './image/quora.png';
import home from './image/home.jpg';
import notifi from './image/notif.png';
import answer from './image/aswer.png';
import following from './image/following.png';
import global from './image/globale.png';
import profile from './image/profile.jpg';
import PT from './image/following 12.png'

//import Main from './component/Main.js'




import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Post from './image/maxresdefault.jpg'
import Profile from './image/profile 2.jpg'
import Postnew from './image/post 2.avif'
import New from './image/images.jpeg'
import Coment from './image/comment1.png'
import Q from './image/Q1.png'
import H from './image/Hub.jpeg'
import B from './image/book.jpg'
import C from './image/Collage.jpeg'
import E from './image/unnamed.jpg'
import Up from './image/123.png'
import Up1 from './image/1234.png'
import L from './image/loding.png'
import LO from './image/logo.jpeg'
import MM from './image/mm.jpeg'
import NA from './image/Robert Frost.jpg'
import CQ from './image/c12.avif'
import P0 from './image/pr00.png'
import AI from './image/5278402.png'
import PY from './image/Python.png'
import DA from './image/date.png'
import PR from './image/pro.png'
import IN from './image/inter.png'
import VL from './image/vlsi.jpeg'
import G from './image/1485286.png'
import PK from './image/profile7.jpeg'
import Answer from './component/Answer.js';





function App() {
  return (
    <div >



      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container" >
          <a className="navbar-brand" href="Home">
            <img src={quora} alt="Bootstrap" width="80" height="50" />
          </a>

          <div className="container-fluid " >
            <a className="navbar-brand" href="Home">
              <img src={home} alt="Bootstrap" width="70" height="40" />
            </a>
            <a className="navbar-brand container" href="Notification">
              <img src={PT} alt="Bootstrap" width="70" height="40" />
            </a>
            <a className="navbar-brand container" href="answer">
              <img src={answer} alt="Bootstrap" width="70" height="40" />
            </a>
            <a className="navbar-brand container" href="following">
              <img src={following} alt="Bootstrap" width="70" height="40" />
            </a>
            <a className="navbar-brand container" href="Notification">
              <img src={notifi} alt="Bootstrap" width="70" height="40" />
            </a>
            <input className=" " type="search" placeholder="Search" aria-label="Search" />

            <a className="navbar-brand container" href="#">
              <img src={global} alt="Bootstrap" width="70" height="40" />

            </a>
            <a className="navbar-brand container mt-3" href="Profile">
              <img src={profile} alt="Bootstrap" width="70" height="40" />
            </a>

          </div>
        </div>
        <h1
          className="cursor-pointer bg-red-700 rounded-full text-sm text-black w-32 pl-6 pt-2 ml-5 h-9 btn btn-outline-danger"
          onClick={() => window.location.href = Answer}
        >
          Add question
        </h1>






      </nav><hr />





      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>
            <div>
              <span className="border">
                <div className="md-5 mx-auto">
                  <div className="create-post">
                    <div className="user-profile">

                      <div>
                        <h3> + Create Space</h3> <hr />
                      </div>
                    </div>


                  </div>
                  <div className="post-container">
                    <div className="post-row">


                      <div className="activity-icons">
                        <div><img src={B} alt="#" width="25" height="30" />Daily Dose of Idioms</div><br />
                        <div><img src={Q} alt="#" width="20" height="20" /> Quora Programming Challenge 2024</div><br />
                        <div><img src={H} alt="#" width="25" height="30" />Quora Creator Hub </div><br />
                        <div><img src={C} alt="#" width="20" height="20" /> Unboxing Jee </div><br />
                        <div><img src={E} alt="#" width="20" height="20" /> Competitive Exams</div><br /><hr />
                        <br />
                        <br />
                        <small>About &middot; Careers &middot;</small>
                        <small>Terms &middot; Privarcy &middot;</small>
                        <small>Acceptable Use &middot;</small>
                        <small>Advertise &middot; Press &middot;</small>
                        <small>Your Ad Choices &middot;</small>
                        <small>Grievance Officer &middot;</small>

                      </div>
                      <div className="post-profile-icon">
                        <i className="fa fa-caret-down"></i>
                      </div>
                    </div>
                  </div>
                </div >
              </span>
            </div> </Form.Label>

        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>  <div className="create-post card p-3 mb-1">
            <div className="create-post-input d-flex align-items-center mb-0">
              <img src={LO} className="rounded-circle me-3" alt="User" width="50" height="50" />
              <textarea className="form-control" rows="2" placeholder="Write a post"></textarea>
            </div>
            <div className="create-post-links d-flex justify-content-between">
              <button className="btn btn-light m-3">Asks</button>
              <button className="btn btn-light mb-2">Answer</button>
              <button className="btn btn-light">Post</button>

            </div>
          </div>

            <div className="sort-by mb-3">
              <hr />

            </div>

            <div className="post card p-3 mb-4">
              <div className="post-author d-flex align-items-center mb-3">
                <img src={Profile} className="rounded-circle me-3" alt="Sudha Murthy" width="50" height="50" />
                <div>
                  <h5>Ankit  <a href="Ankit" className=''>Follow</a></h5>
                  <small>Frontend Developer</small><br />
                  <small>Answer By Parth &middot; 23 Mar </small><br />
                  <small>1 hours ago</small>
                </div>
              </div>
              <p>We’ll start with a sort of a map of the frontend landscape that depicts the things you should at least know about to orientate in this area.</p>
              <img src={Postnew} className="img-fluid" alt="Post content" />

              <div className="post-stats d-flex justify-content-between align-items-center mt-3">

                <div>
                  <span>620 comments &middot; 92 shares</span>
                </div>
              </div>

              <div className="post-activity d-flex justify-content-between align-items-center mt-3">


                <button className="btn btn-light"><img src={Up} alt="Like" width="30" height="20" text-primary /></button>
                <button className="btn btn-light"><img src={Up1} alt="UnLike" width="30" height="20" /></button>
                <button className="btn btn-light"><img src={Coment} alt="Comment" width="30" height="20" /></button>
                <button className="btn btn-light"><img src={L} alt="Send" width="30" height="20" /></button>
              </div>
            </div>

            <div className="post card p-2 mb-0">
              <div className="post-author d-flex align-items-center mb-3">
                <img src={New} className="rounded-circle me-3" alt="Sudha Murthy" width="50" height="50" />
                <div>
                  <h5>Sudha N Murthy <a href="Sudha N Murthy" className=''>Follow</a></h5>
                  <small>Educator, Author, Philanthropist Chairperson of the Infosys Foundation</small><br />
                  <small>Answer By raj &middot; 2day</small><br />
                  <small>2 hours ago</small>
                </div>
              </div>
              <p>Having good relationship, peace of mind in life is the most important thing in life.</p>
              <img src={Post} className="img-fluid" alt="Post content" />

              <div className="post-stats d-flex justify-content-between align-items-center mt-3">

                <div>
                  <span>1000 comments &middot; 500 shares</span>
                </div>
              </div>

              <div className="post-activity d-flex justify-content-between align-items-center mt-3">


                <button className="btn btn-light"><img src={Up} alt="Like" width="30" height="20" /></button>
                <button className="btn btn-light"><img src={Up1} alt="UnLike" width="30" height="20" /></button>
                <button className="btn btn-light"><img src={Coment} alt="Comment" width="30" height="20" /></button>
                <button className="btn btn-light"><img src={L} alt="Send" width="30" height="20" /></button>
              </div>
            </div>

            <div className="post card p-2 mb-0">
              <div className="post-author d-flex align-items-center mb-3">
                <img src={NA} className="rounded-circle me-3" alt="Sudha Murthy" width="50" height="50" />
                <div>
                  <h5>Robert Frost <a href="Robert Frost" className=''>Follow</a></h5>
                  <small>Instructor and Flight Controller at NASA  &middot; 9y</small><br />

                  <small>2 hours ago</small>
                </div>
              </div>

              <p>I'm guessing you're referring to pictures like this: That's not our galaxy. That's our neighbor galaxy, Andromeda. Real pictures of the Milky Way are all taken from within the galaxy and look more like this: </p>
              <img src={MM} className="img-fluid" alt="Post content" />

              <div className="post-stats d-flex justify-content-between align-items-center mt-3">

                <div>
                  <span>1K comments &middot; 500 shares</span>
                </div>
              </div>

              <div className="post-activity d-flex justify-content-between align-items-center mt-3">


                <button className="btn btn-light"><img src={Up} alt="Like" width="30" height="20" /></button>
                <button className="btn btn-light"><img src={Up1} alt="UnLike" width="30" height="20" /></button>
                <button className="btn btn-light"><img src={Coment} alt="Comment" width="30" height="20" /></button>
                <button className="btn btn-light"><img src={L} alt="Send" width="30" height="20" /></button>
              </div>
            </div>

            <div className="post card p-2 mb-0">
              <div className="post-author d-flex align-items-center mb-3">
                <img src={PK} className="rounded-circle me-3" alt="Sudha Murthy" width="50" height="50" />
                <div>
                  <h5>Himanshu  <a href="Himanshu" className=''>Follow</a></h5>
                  <small>Answer By Robert Frost &middot; 1Feb</small><br />

                  <small>5 Days ago</small>
                </div>
              </div>
              <p>What are the best love stories that made you cry?
                IT IS NOT ANY FICTIONAL STORY BUT A REAL LIFE INCIDENT.</p>
              <img src={CQ} className="img-fluid" alt="Post content" />

              <div className="post-stats d-flex justify-content-between align-items-center mt-3">

                <div>
                  <span>500 comments &middot; 100 shares</span>
                </div>
              </div>

              <div className="post-activity d-flex justify-content-between align-items-center mt-3">


                <button className="btn btn-light"><img src={Up} alt="Like" width="30" height="20" /></button>
                <button className="btn btn-light"><img src={Up1} alt="UnLike" width="30" height="20" /></button>
                <button className="btn btn-light"><img src={Coment} alt="Comment" width="30" height="20" /></button>
                <button className="btn btn-light"><img src={L} alt="Send" width="30" height="20" /></button>
              </div>
            </div>

          </Form.Label>


        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label> <div className="md-5 mx-auto">
            <div className="create-post">
              <div className="user-profile">

                <div>
                  <h3>Spaces to Follow</h3><hr />
                </div>
              </div>


            </div>
            <div className="post-container">
              <div className="post-row">
                <div className="user-profile">

                </div>

              </div>

              <div className="post-row">
                <div className="activity-icons">
                  <div><img src={P0} alt="#" width="20" height="20" />The Programmers cage<p>The space to share ideas via coding</p></div><hr />
                  <div><img src={PR} alt="#" width="20" height="20" />Programming Algorithms<p>All about the Programming,data structures and Algorithms, let's lear...</p></div><hr />
                  <div><img src={PY} alt="#" width="20" height="20" /> Python and ML Basics<p>Basics concepts of python and machine learning for beginners.</p></div><hr />
                  <div><img src={DA} alt="#" width="20" height="20" /> Data Analytics Basics<p>Business-statistics | statistical-Modeling | Analytics-Tools.</p></div><hr />
                  <div><img src={VL} alt="#" width="20" height="20" /> VLSI Beginners<p>👍Discuss & share ideas,jobs, career Tips for VLSI beginners.</p></div><hr />
                  <div><img src={IN} alt="#" width="20" height="20" /> The Internships Club<p>Join this space to get daily updates & info ann internship's Advice.</p></div><hr />
                  <div><img src={G} alt="#" width="20" height="20" /> Programmer's Heaven<p>It's all about Computer Programming.</p></div><hr />
                  <div><img src={AI} alt="#" width="20" height="20" /> Artificial intelligence- Cybersecurity- Hacking<p>Bringing Humans closer to machines...</p></div><hr />
                </div>
                <div className="post-profile-icon">
                  <i className="fa fa-caret-down"></i>
                </div>
              </div>
            </div>
          </div ></Form.Label>

        </Form.Group>
      </Row >








    </div >

  );
}

export default App;
