import React, { useEffect, useState } from 'react'
import styles from "./MainPage.module.scss";
import vid1 from "../assets/1.mp4";
import vid2 from "../assets/2.mp4";
import vid3 from "../assets/3.mp4";
import axios from 'axios';

function MainPage() {
    const [message, setMessage] = useState([]);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [video, setVideo] = useState("")

    const fetchData = async() => {
        try {
            const apiFetch = await axios.get("https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1");
            console.log(apiFetch.data.texts);
            setMessage(apiFetch.data.texts);

        } catch (err) {
            console.log(err);
        }
    }

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
        if (scrollPosition < 250)
        {
            document.getElementById("video1").style.display = "block";
            document.getElementById("video2").style.display = "none";
            document.getElementById("video3").style.display = "none";
            // setVideo(vid1);

        }
        else if (scrollPosition > 250 && scrollPosition < 930)
        {
            document.getElementById("video2").style.display = "block";
            document.getElementById("video1").style.display = "none";
            document.getElementById("video3").style.display = "none";
            setVideo(vid2);
        }
        else
        {
            document.getElementById("video3").style.display = "block";
            document.getElementById("video2").style.display = "none";
            document.getElementById("video1").style.display = "none";
            setVideo(vid3);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [scrollPosition]);



    useEffect(() => {
        fetchData();
    }, []);


  return (
      <div className={styles.main}>
          {message.length > 0 ?
          <div>
              {console.log(scrollPosition)}
                {message.map((item, index) => (
                        <div key={index} className={styles.main__description}>
                            <div className={styles.main__description__heading}>{item.heading}</div>
                            <div className={styles.main__description__subheading}>{item.subHeading}</div>
                            <div className={styles.main__description__desc}>{item.description}</div>
                        </div>
                ))}

            </div> :  <p>Loading...</p>}

          <div className={styles.main__outlay}>
              <video id = "video1" className={styles.main__outlay__video1} src={vid1} autoPlay="true" loop={true} />
              <video id = "video2" className={styles.main__outlay__video2} src={vid2} autoPlay="true" loop={true} />
              <video id = "video3" className={styles.main__outlay__video3} src={vid3} autoPlay="true" loop={true} />
          </div>
      </div>
  )
}

export default MainPage