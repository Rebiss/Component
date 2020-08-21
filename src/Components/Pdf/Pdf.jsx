import React, { Component} from 'react';
import './css/print.css';
// import './css/red.css';

export class Pdf extends Component {
    render() {
        return (
            <div id="wrapper">
                <div className="wrapper-top"></div>
                <div className="wrapper-mid">
                <div id="paper">
                    <div className="paper-top"></div>
                    <div id="paper-mid">
                    <div className="entry">
                        {/* <img className="portrait" src="images/image.jpg" alt="Andrnaik Barseghyan" /> */}
                        <div className="self">
                        <h1 className="name">Andrnaik<br />
                            <span></span></h1>
                        <ul>
                            <li className="ad">Yerevan, Armenia</li>
                            <li className="mail">rebiss@test.com</li>
                            <li className="tel">+374555555555</li>
                            <li className="web">www.github.com/rediss</li>
                        </ul>
                        </div>
                        <div className="social">
                        <ul>
                            <li>
                                <a className='north' href="#" title="Follow me on Twitter">
                                    <img src="images/icn-twitter.jpg" alt="" />
                                </a>
                            </li>
                            <li>
                                <a className='north' href="#" title="My Facebook Profile">
                                    <img src="images/icn-facebook.jpg" alt="" />
                                </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="entry">
                        <h2>OBJECTIVE</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="entry">
                        <h2>EDUCATION</h2>
                        <div className="content">
                        <h3>2010 - 2016</h3>
                        <p> Yereevan <br />
                            <em>Testing</em></p>
                        </div>
                        <div className="content">
                        <h3>Testing</h3>
                        <p>Testing <br />
                            <em>Testing</em></p>
                        </div>
                    </div>
                    <div className="entry">
                        <h2>EXPERIENCE</h2>
                        <div className="content">
                            <h3>Testing 2011-2200</h3>
                            <p>Testing <br />
                                <em>Testing</em></p>
                            <ul className="info">
                                <li>Testing.</li>
                                <li>Testing <a href="#">Testing</a> Testing</li>
                            </ul>
                        </div>
                        <div className="content">
                            <h3>Testing 2007-2009</h3>
                            <p>jr. Testing <br />
                                <em>Testing </em></p>
                            <ul className="info">
                                <li>Testing Text </li>
                                <li>Testing</li>
                            </ul>
                        </div>
                    </div>
                    <div className="entry">
                        <h2>SKILLS</h2>
                        <div className="content">
                            <h3>Software Knowledge Testing</h3>
                            <ul clclassNameass="skills">
                                <li>Photoshop</li>
                                <li>After Effects</li>
                            </ul>
                        </div>
                        <div className="content">
                            <h3>Languages</h3>
                            <ul className="skills">
                                <li>JavaScript</li>
                            </ul>
                        </div>
                    </div>
                
                    <div className="entry">
                    <h2>WORKS</h2>
                        <ul className="works">
                            <li>
                                <a href="images/1.jpg" rel="gallery" title="Lorem ipsum dolor sit amet.">
                                    <img src="images/image.jpg" alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    </div>
                    <div className="clear"></div>
                    <div className="paper-bottom"></div>
                </div>
            
                </div>
                <div className="wrapper-bottom"></div>
        </div>
        );
    }
}