import React from 'react';
import Particle from '../../component/tsparticles';
import './home.css';
import Typed from 'react-typed';
import {BsFillCheckCircleFill} from 'react-icons/bs';

const Home = () => {
  return (
    <div className='home'>
    <Particle/>
     <div className='container'>
      <div className='perkenalan'>
        <div>
          <h1>Haii Semuanya</h1>
          <h1>Saya "Muhamad Muzani"</h1>
          <h1><Typed className='typed' strings={['Front End', 'MERN Stuck', 'Back End', 'Desianer Grafis']} typeSpeed={120} backSpeed={140} loop/></h1>
        </div>
        <img src="/gambar3.png" alt="" />
      </div>
      <div className='myself'>
        <div>
          <h1>Izin Saya Memperkenalkan diri</h1>
          <p><span><BsFillCheckCircleFill/></span> Saya Seorang WEB Developer yang bekerja di bagian Front End Developer</p>
          <p><span><BsFillCheckCircleFill/></span> Tetapi Saya juga suka di bagian Back end Developer</p>
          <p><span><BsFillCheckCircleFill/></span> Pengalaman Belajar dalam bidang pemrograman web kurang lebih setahun</p>
          <p><span><BsFillCheckCircleFill/></span> Banyak Motovasi yang saya dapatkan agar tidak malas belajar</p>
          <p> <span><BsFillCheckCircleFill/></span> Saya suka mempelajari hal-hal baru yang belum pernah saya coba</p>
        </div>
        <img src="/gambar2.png" alt="" />
      </div>
    </div>
    </div>
  )
}

export default Home