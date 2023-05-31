import React from 'react';
import { images } from './constants';
import { Header } from './components/Header';
import './App.css';

function App () {
    return (
    <>
    <div className='body'>
    <Header />
    <div className="con1">
        <img className="frame2" src={images.group_3} alt='a'/>
    </div>
    <img className="avatar" src={images.avatar} alt='a'/>
    <div className="container2">
        <img className="from-viewer" src={images.viewer} alt='a'/>
    </div>
    <div className="container5">
        <img className="my-story" src={images.my_story} alt='a'/>
    </div>
    <div className="container6">
        <img className="pixel" src={images.pixel} alt='a'/>
    </div>
    <div className="container7">
        <div className="box">
            <img className="pic1" src={images.pic1} alt='a'/>
            <button className="button1">
                <img className="read-more" src={images.button1} alt='a'/>
            </button>
        </div>
        <div className="box">
            <img className="pic2" src={images.pic2} alt='a'/>
            <button className="button1">
                <img className="read-more" src={images.button1} alt='a' />
            </button>
        </div>
        <div className="box">
            <img className="pic3" src={images.pic3} alt='a'/>
            <button className="button1">
                <img className="read-more" src={images.button1} alt='a'/>
            </button>
        </div>
    </div>
    <img className="footer" src={images.footer} alt='a'/>
    </div>
    </>
    );
}

export default App;
