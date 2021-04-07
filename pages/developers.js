import styles from '../styles/Testimonial.module.css';
import Head from 'next/head';
import { AiFillLinkedin } from 'react-icons/ai';
import Link from 'next/link';
import Footer from '../components/homepage/Footer/Footer';

const developers = () => {
  return (
    <>
    <div>
      <div className={styles.testimonials}>
        <Head>
          <title>VOVOCA | Developers</title>
          <Link scroll={true}
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
            integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
            crossOrigin="anonymous"
          />
        </Head>
        <div className={styles.container}>
          <h1 className={styles.testimonial__heading}>Developers</h1>
          <div className={styles.testimonial__row__1}>
            <div className={styles.testimonial}>
              <article style={{marginBottom: '1em'}} className={styles.testimonial__article}>
                <div className={styles.testimonial__content}>
                  <p>
                    This is a simple music streaming and downloading website,
                    but BTS it was a roller coaster ride while resolving the
                    bugs, but teamwork and decidation helped us overcome these
                    pronlems , and here we are with all of our hard Work :)
                  </p>
                  <span>Varun Singh</span>
                  <br />
                  <span>Developer, Vovoca</span>
                </div>
                <div
                  className={styles.developer__img}
                  style={{
                    backgroundImage: `url(https://media-exp1.licdn.com/dms/image/C5103AQHlqCz2y6gWFA/profile-displayphoto-shrink_800_800/0/1576986523117?e=1623283200&v=beta&t=9m4ZEjXa-M_XOEKVe-JX1l9ayHqpwq1flSQd0gfHgJY)`,
                  }}
                ></div>
              </article>
              <Link scroll={true} href="https://www.linkedin.com/in/v-varun/">
                <button
                  style={{
                    width: '100%',
                    borderTopLeftRadius: '0px',
                    borderTopRightRadius: '0px',
                    marginTop: '-5%',
                  }}
                >
                  <AiFillLinkedin style={{ fontSize: 'x-large' }} />
                </button>
              </Link>
            </div>
            <div className={styles.testimonial}>
              <article style={{marginBottom: '1em'}} className={styles.testimonial__article}>
                <div className={styles.testimonial__content}>
                  <p>
                    This is a simple music streaming and downloading website,
                    but BTS it was a roller coaster ride while resolving the
                    bugs, but teamwork and decidation helped us overcome these
                    pronlems , and here we are with all of our hard Work :)
                  </p>
                  <span>Prakhar Pandey</span>
                  <br />
                  <span>Developer, Vovoca</span>
                </div>
                <div
                  className={styles.developer__img}
                  style={{
                    backgroundImage: `url(https://avatars.githubusercontent.com/u/51090491?v=4)`,
                  }}
                ></div>
              </article>
              <Link scroll={true} href="https://www.linkedin.com/in/prakhar-pandey-a307b7191/">
                <button
                  style={{
                    width: '100%',
                    borderTopLeftRadius: '0px',
                    borderTopRightRadius: '0px',
                    marginTop: '-5%',
                  }}
                >
                  <AiFillLinkedin style={{ fontSize: 'x-large' }} />
                </button>
              </Link>
            </div>
            <div className={styles.testimonial}>
              <article style={{marginBottom: '1em'}} className={styles.testimonial__article}>
                <div className={styles.testimonial__content}>
                  <p>
                    This is a simple music streaming and downloading website,
                    but BTS it was a roller coaster ride while resolving the
                    bugs, but teamwork and decidation helped us overcome these
                    pronlems , and here we are with all of our hard Work :)
                  </p>
                  <span>Kaustubh Mishra</span>
                  <br />
                  <span>Developer, Vovoca</span>
                </div>
                <div
                  className={styles.developer__img}
                  style={{
                    backgroundImage: `url(https://avatars.githubusercontent.com/u/47121025?v=4)`,
                  }}
                ></div>
              </article>
              <Link scroll={true} href="https://www.linkedin.com/in/kaustubhai/">
                <button
                  style={{
                    width: '100%',
                    borderTopLeftRadius: '0px',
                    borderTopRightRadius: '0px',
                    marginTop: '-5%',
                    marginBottom: '3rem',
                  }}
                >
                  <AiFillLinkedin style={{ fontSize: 'x-large' }} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </>
  );
};

export default developers;
