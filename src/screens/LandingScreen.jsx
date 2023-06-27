import img1 from '../assets/images/blog-list-img-1.jpg';
import img2 from '../assets/images/blog-list-img-2.jpg';
import restaurant from '../assets/images/restaurant.jpg';
import rooms from '../assets/images/rooms.jpg';
import styles from '../assets/styles/LandingScreen.module.css';

const LandingScreen = () => {
  return (
    <div>
      <div id='hero' className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroTextBox}>
            <h1 className={styles.heroText}>
              <span>Hotel</span>
              <span>Booking</span>
            </h1>
            <button className={styles.btn}>Book a Room</button>
          </div>
        </div>
      </div>

      <main>
        <section className={styles.info}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.col2}>
                <p className={styles.infoText}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima quia ipsum ratione numquam amet. Reprehenderit ratione
                  doloremque, repudiandae pariatur sed similique.
                </p>
                <p className={styles.infoText}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima quia ipsum ratione numquam amet. Reprehenderit ratione
                  doloremque, repudiandae pariatur sed similique.
                </p>
              </div>
              <div className={styles.imageGroup}>
                <img src={img1} alt='Blog list 1' />
                <img src={img2} alt='Blog list 2' />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.rooms}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.col2}>
                <img src={rooms} alt='rooms' />
              </div>
              <div className={styles.col2}>
                <div className={styles.textBox_rooms}>
                  <h2 className={styles.headline}>Rooms</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto enim mollitia dolorum necessitatibus vero sunt
                    deleniti minus vel, non quasi?
                  </p>
                  <button className={styles.btn_green}>Explore Now</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.restaurant}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.col2}>
                <div className={styles.textBox}>
                  <h2>Restaurant</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto enim mollitia dolorum necessitatibus vero sunt
                    deleniti minus vel, non quasi?
                  </p>
                  <button className={styles.btn_dining}>Dine With Us</button>
                </div>
              </div>
              <div className={styles.col2}>
                <img src={restaurant} alt='Restaurant'  />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingScreen;

