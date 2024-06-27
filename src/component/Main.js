import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Post from './image/post 1.jpg'

function Main() {
    return (

        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
                <Form.Label> <span className="border">
                    <div className="md-5 mx-auto">
                        <div className="create-post">
                            <div className="user-profile">

                                <div>
                                    <h3>Harsh Tiwari</h3>
                                </div>
                            </div>


                        </div>
                        <div className="post-container">
                            <div className="post-row">
                                <div className="user-profile">

                                    <div>
                                        <h3>John Doe</h3>
                                        <span>UI/UX Designer, 2 min ago</span>
                                    </div>
                                </div>
                                <a href="#"><img src="images/dots.png" alt="More options" /></a>
                            </div>
                            <p className="post-text">Learning React.js </p>
                            <img src="https://miro.medium.com/max/1200/1*e3jPU0qJ5BPM0a_xEcG7vA.png" alt="Post" className="post-img" />
                            <div className="post-row">
                                <div className="activity-icons">
                                    <div><img src="images/like.png" alt="Like" /> 120</div>
                                    <div><img src="images/comments.png" alt="Comment" /> 45</div>
                                    <div><img src="images/share.png" alt="Share" /> 20</div>
                                </div>
                                <div className="post-profile-icon">
                                    <i className="fa fa-caret-down"></i>
                                </div>
                            </div>
                        </div>
                    </div >
                </span></Form.Label>

            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
                <Form.Label>  <div className="create-post card p-3 mb-2">
                    <div className="create-post-input d-flex align-items-center mb-3">
                        <img src="images/Bhagya pic for resume.jpg" className="rounded-circle me-3" alt="User" width="50" height="50" />
                        <textarea className="form-control" rows="2" placeholder="Write a post"></textarea>
                    </div>
                    <div className="create-post-links d-flex justify-content-between">
                        <button className="btn btn-light m-3">Asks</button>
                        <button className="btn btn-light mb-2">Answer</button>
                        <button className="btn btn-light">Event</button>

                    </div>
                </div>

                    <div className="sort-by mb-3">
                        <hr />

                    </div>

                    <div className="post card p-3 mb-4">
                        <div className="post-author d-flex align-items-center mb-3">
                            <img src="images/infosys shudha murthy.webp" className="rounded-circle me-3" alt="Sudha Murthy" width="50" height="50" />
                            <div>
                                <h5>Sudha N Murthy</h5>
                                <small>Educator, Author, Philanthropist Chairperson of the Infosys Foundation</small><br />
                                <small>2 hours ago</small>
                            </div>
                        </div>
                        <p>Having good relationship, peace of mind in life is the most important thing in life.</p>
                        <img src={Post} className="img-fluid" alt="Post content" />

                        <div className="post-stats d-flex justify-content-between align-items-center mt-3">
                            <div>
                                <img src="images/thumbsup.png" alt="Thumbs up" className="me-2" />
                                <img src="images/love.png" alt="Love" className="me-2" />
                                <img src="images/clap.png" alt="Clap" className="me-2" />
                                <span className="liked-user">Bhagyalaxmi Dusa and 440 others</span>
                            </div>
                            <div>
                                <span>620 comments &middot; 92 shares</span>
                            </div>
                        </div>

                        <div className="post-activity d-flex justify-content-between align-items-center mt-3">
                            <div className="d-flex align-items-center">
                                <img src="images/Bhagya pic for resume.jpg" className="rounded-circle me-2 post-activity-user-icon" alt="User" width="30" height="30" />
                                <img src="images/down-arrow.png" className="post-activity-arrow-icon" alt="Arrow" />
                            </div>

                            <button className="btn btn-light"><img src="images/share.png" alt="Share" className="me-2" />Share</button>
                            <button className="btn btn-light"><img src="images/like.png" alt="Like" className="me-2" />Like</button>
                            <button className="btn btn-light"><img src="images/comment.png" alt="Comment" className="me-2" />Comment</button>
                            <button className="btn btn-light"><img src="images/send.png" alt="Send" className="me-2" />Send</button>
                        </div>
                    </div></Form.Label>


            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
                <Form.Label> <div className="md-5 mx-auto">
                    <div className="create-post">
                        <div className="user-profile">

                            <div>
                                <h3>Harsh Tiwari</h3>
                            </div>
                        </div>


                    </div>
                    <div className="post-container">
                        <div className="post-row">
                            <div className="user-profile">

                                <div>
                                    <h3>John Doe</h3>
                                    <span>UI/UX Designer, 2 min ago</span>
                                </div>
                            </div>
                            <a href="#"><img src="images/dots.png" alt="More options" /></a>
                        </div>
                        <p className="post-text">Learning React.js </p>
                        <img src="https://miro.medium.com/max/1200/1*e3jPU0qJ5BPM0a_xEcG7vA.png" alt="Post" className="post-img" />
                        <div className="post-row">
                            <div className="activity-icons">
                                <div><img src="images/like.png" alt="Like" /> 120</div>
                                <div><img src="images/comments.png" alt="Comment" /> 45</div>
                                <div><img src="images/share.png" alt="Share" /> 20</div>
                            </div>
                            <div className="post-profile-icon">
                                <i className="fa fa-caret-down"></i>
                            </div>
                        </div>
                    </div>
                </div ></Form.Label>

            </Form.Group>
        </Row >
    );
}

export default Main;
