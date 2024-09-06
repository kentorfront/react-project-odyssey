// Main.js
import React, { Suspense } from 'react';
import './Main.css';
import { Canvas } from '@react-three/fiber' 
import Mars from './Planets/Mars/Mars';
import Venus from './Planets/Venus/Venus';
import Jupiter from './Planets/Jupiter/Jupiter'
import Mercury from './Planets/Mercury/Mercury'
import Header from './Header/Header'

export default function Main() {
    return (
        <>
            <Header />
            <div className="main">
                <div className='card-main'>
                    <div className='threeDModel'>
                        <Canvas>
                            <Suspense fallback='null'>
                                <Mars />
                            </Suspense>
                        </Canvas>
                    </div>
                    <div className='card-main-title'>Send Your Message <br></br> To Space</div>
                    <button className='card-main-button'>Send</button>
                </div>

                <div className='card-main'>
                    <div className='threeDModel'>
                        <Canvas>
                            <Suspense fallback='null'>
                                <Venus />
                            </Suspense>
                        </Canvas>
                    </div>
                    <div className='card-main-title'>Send Your Message <br></br> To Space</div>
                    <button className='card-main-button'>Send</button>
                </div>
                <div className='card-main'>
                    <div className='threeDModel'>
                        <Canvas>
                            <Suspense fallback='null'>
                                <Jupiter />
                            </Suspense>
                        </Canvas>
                    </div>
                    <div className='card-main-title'>Send Your Message <br></br> To Space</div>
                    <button className='card-main-button'>Send</button>
                </div>
                <div className='card-main'>
                    <div className='threeDModel'>
                        <Canvas>
                            <Suspense fallback='null'>
                                <Mercury />
                            </Suspense>
                        </Canvas>
                    </div>
                    <div className='card-main-title'>Send Your Message <br></br> To Space</div>
                    <button className='card-main-button'>Send</button>
                </div>
            </div>
        </>
    );
}
