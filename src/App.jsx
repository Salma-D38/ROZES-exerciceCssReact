
import React from "react";
import styles from "../src/App.module.css";


function App() {

 

  return (
    <>
    <section className={styles.card}>

      <section className={styles.album}>
      <img className={styles.cover} src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzn4dMp61IC8tlGHQDzdEsmqDaICGCc1MkyBZ6W5FrL_DiV5S6" ></img>
      <section className={styles.title}>
      <h1>Rozes</h1>
      <h2>Under the Grave (2016)</h2>
      </section>
      </section>
      <section className={styles.note}>
        <p>Rate this album</p>
        <img className={styles.star} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuY6oeSCPJDPD5tkix2mu-Mt9ZYieK1N7ivizW_L37ds3jmzplNI3s2ocSzsJgJr9fJhs&usqp=CAU"></img>
       </section>

    </section>

    </>
  )
}

export default App
