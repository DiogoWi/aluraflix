import styles from './Banner.module.css';
import banner from '/banner.png';

function Banner() {
    return (
        <div className={styles.banner} style={{ backgroundImage: `url(${banner})` }}>
            <div className={styles.background}>
                <div className={styles.wrapperText}>
                    <label>Front End</label>
                    <h2>SEO com React</h2>
                    <p>Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"!</p>
                </div>

                <div className={styles.player}></div>
            </div>
        </div>
    )
}

export default Banner;