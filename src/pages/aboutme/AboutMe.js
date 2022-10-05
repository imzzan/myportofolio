import React from "react";
import Particle from "./../../component/tsparticles";
import "./aboutus.css";
import {FaHandPointRight} from 'react-icons/fa';
import {TbBrandJavascript, TbBrandHtml5, TbBrandCss3, } from 'react-icons/tb';
import {SiTailwindcss, SiBootstrap, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiGithub, } from 'react-icons/si';
import {BsCameraReelsFill, BsCameraFill} from 'react-icons/bs';
import {ImGit} from 'react-icons/im';

const AboutMe = () => {
  return (
    <div className="aboutme">
      <Particle />
      <div className="container-aboutme">
        <div className="perkenalan-about">
          <div>
            <h1>Perkenalkan Singkat Saya</h1>
            <p className="saya-muzani">
              Salam Kenal, Saya Muhamad Muzani dari Cirebon, Provinsi Jawa
              Barat, Indonesia. Saya Junior Developer dan Seorang Mahasiswa di STMIK IKMI Cirebon.
            </p>
            <h1>Keseharian Saya :</h1>
            <div className="keseharian">
              <p><span><FaHandPointRight/></span>Belajar</p>
              <p><span><FaHandPointRight/></span>Main Game</p>
              <p><span><FaHandPointRight/></span>Baca Buku</p>
              <p><span><FaHandPointRight/></span>Ngoding</p>
            </div>
          </div>
          <img src="/gambar1.png" alt="" />
        </div>
        
        <div className="personal-skill">
          <h1>Personal Skill</h1>
          <div className="item-skill">
            <div className="skill"><TbBrandHtml5/></div>
            <div className="skill"><TbBrandCss3/></div>
            <div className="skill"><TbBrandJavascript/></div>
            <div className="skill"><SiBootstrap/></div>
            <div className="skill"><SiTailwindcss/></div>
            <div className="skill"><SiReact/></div>
            <div className="skill"><SiExpress/></div>
            <div className="skill"><SiMongodb/></div>
            <div className="skill"><SiNodedotjs/></div>
            <div className="skill"><SiGithub/></div>
            <div className="skill"><ImGit/></div>
            <div className="skill"><BsCameraFill/></div>
            <div className="skill"><BsCameraReelsFill/></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
