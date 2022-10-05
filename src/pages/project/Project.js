import React from "react";
import Particle from "./../../component/tsparticles";
import './project.css';

const Project = () => {
  return (
    <div className="project">
      <Particle />
      <h1>Project Saya yang pernah Saya Buat</h1>
      <div className="container-project">
        <div className='item-project'>
          <img src="/chart.png" alt="" />
          <p>
            Chart Website
          </p>
          <a href="https://react-chart-two.vercel.app/" target="_blank" rel="noopener noreferrer">Lihat Website</a>
        </div>

        <div className='item-project'>
          <img src="/blog.png" alt="" />
          <p>
          Blog Website
          </p>
          <a href="https://react-blog-me.vercel.app/" target="_blank" rel="noopener noreferrer">Lihat Website</a>
        </div>

        <div className='item-project'>
          <img src="/notepad.png" alt="" />
          <p>
          Notepad Website
          </p>
          <a href="https://react-notepad.vercel.app/" target="_blank" rel="noopener noreferrer">Lihat Website</a>
        </div>

        <div className='item-project'>
          <img src="/chartstatistik.png" alt="" />
          <p>
          Chart Statistika
          </p>
          <a href="https://react-chart-statistika.vercel.app/" target="_blank" rel="noopener noreferrer">Lihat Website</a>
        </div>

        <div className='item-project'>
          <img src="/facebook.png" alt="" />
          <p>
          Facebook Website
          </p>
          <a href="https://mern-fb-latihan.vercel.app/" target="_blank" rel="noopener noreferrer">Lihat Website</a>
        </div>

        <div className='item-project'>
          <img src="/memorise.png" alt="" />
          <p>
          Memorise Website
          </p>
          <a href="https://mern-memorize-blog.vercel.app/" target="_blank" rel="noopener noreferrer">Lihat Website</a>
        </div>
        
        <div className='item-project'>
          <img src="/nextjsblog.png" alt="" />
          <p>
          Blog Shop Website
          </p>
          <a href="https://nextjs-blog-shop.vercel.app/" target="_blank" rel="noopener noreferrer">Lihat Website</a>
        </div>


      </div>
    </div>
  );
};

export default Project;
