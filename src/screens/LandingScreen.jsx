import img1 from "../assets/images/blog-list-img-1.jpg";
import img2 from "../assets/images/blog-list-img-2.jpg";
import restaurant from "../assets/images/restaurant.jpg";
import rooms from "../assets/images/rooms.jpg";
import styles from "../assets/styles/LandingScreen.module.css";

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
                   Dreaming of your next vacation? Check out our destination guides curated by our Your Hotel Insiders for inspiration. Discover each city through the lens of a local and uncover what's new and next.
                </p>
                <p className={styles.infoText}>
                  A natural haven for thrill seekers and adventurists where coral reefs and wadis are in abundance. Explor the souks and have a taste of the local cuisine at the stunning location.
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
                    With a total space of 153 sqm, this beachfront  Bedroom  offers unobstructed  view, an extended terrace with an outdoor living and dining area with private infinity pool and direct access to the beach. The room offers also a fully equipped kitchen, including a cooker hood, an oven, a dish washer and a built in fridge.
                  It accommodates a maximum of 6 guests.
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
                    Whether you are looking for cozy coffee shops, family style restaurants, relaxed lounges, or a fine dining experience, you'll find it at Your Hotel Restaurant.
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

