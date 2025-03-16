'use client';

import style from './home.module.css';
import Header from './components/header/page';
import Footer from  './components/footer/Footer';
<head>
<link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"></link>
<link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"></link>
</head>

export default function Home() {
 

    return (
        <div className={style.container}>
            <Header />
            <div className={style.page}>
                <div className={style.videoDiv}>
                    <video autoPlay loop muted className={style.backVideo}>
                        <source src="/homevideo.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className={style.slogan}>
                    <h1 className={style.slogan2}>
                        <strong>
                        ONDE SUA FORÇA ENCONTRA SUA ESSÊNCIA
                        </strong>
                    </h1>
                    
                </div>
                <div className={style.container2}>
                    <h1 className={style.titulo}>Nossos Planos</h1>
                    <div className={style.separar}>
                    <div className={style.card}>
                        <h1 className={style.nomeplano}>
                            Basic
                        </h1>
                        <h1 className={style.precoplano}>
                            100,00
                        </h1>
                        <button className={style.btnplano}>
                            Saber mais
                        </button>
                    </div>
                    <div className={style.card}>
                        <h1 className={style.nomeplano}>
                            Intermediun
                        </h1>
                        <h1 className={style.precoplano}>
                            130,00
                        </h1>
                        <button className={style.btnplano}>
                            Saber mais
                        </button>
                    </div>
                    <div className={style.card3}>
                        <h1 className={style.nomeplano}>
                            Platinium
                        </h1>
                        <h1 className={style.precoplano}>
                            150,00
                        </h1>
                        <button className={style.btnplano}>
                            Saber mais
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>








    );







};
