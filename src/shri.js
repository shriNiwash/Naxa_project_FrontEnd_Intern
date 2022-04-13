import { useGetAllPostQuery } from './services/post';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from './Navbar';


const Shri = ()=>{
const responseInfo = useGetAllPostQuery();
// console.log(responseInfo.data);
// const arrData = responseInfo.data;
// const kar = arrData[0].description1;
// const des = [...kar];
// console.log(des[3]);

    return(<div className='app'>
            <Navbar />
        {
            responseInfo.data.map((post)=>
            <main id='home'>
                
                <section className='home' id={`about${post.id}`}>
                    <div className="container">
                        <div className="row">
                        <div className="col-sm-6">
                        <img src={post.icon} alt='compnaylogo' id='image_id' />
                        </div>
                        <div className="col-sm-6">
                        <img src={post.photo} alt='logo' />
                        <h1>{post.title}</h1>
                        <p>{`${post.description1}`}</p>
                        <p>{post.description2}</p>
                        </div>
                        </div>
                    </div>
                </section>
                </main>
            )
        }
        

    </div>)
}

export default Shri;