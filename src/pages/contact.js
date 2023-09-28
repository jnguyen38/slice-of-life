import Meta from "../components/Meta";
import styles from "../css/modules/Contact.module.css";
import {useEffect} from "react";
import {defaultObserver} from "../components/Util";

function Contact() {
    useEffect(() => {
        const observer = defaultObserver();

        const profiles = document.querySelectorAll(".transparent");
        profiles.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, [])

    const repeat = 10;

    return (
        <div>
            <Meta title={`Contact`}/>

            <main className={`main-container`}>
                <article className={`controlled-width`}>
                    <h2>Slice of Life Staff</h2>
                    <p className={`paragraph`}>
                        Say hello to our Slice of Life staff members, who generously volunteer their time to lead the
                        program and maintain it's presence in the community. Slice of Life tutoring would not be possible
                        without the time and effort that they contribute!
                    </p>
                </article>
                <article className={styles.profileContainer}>
                    {[...Array(repeat)].map((e, index) => <Profile key={index} index={index}/>)}
                </article>
                <article className={`controlled-width`}>
                    <h2>Notre Dame Student Tutors</h2>
                    <p className={`paragraph`}>
                        In addition to our staff members at Slice, we also wouldn't be here without the selfless help of
                        Notre Dame Students who volunteer their time to tutor our local children.
                    </p>
                </article>
                <article className={`${styles.profileContainer}`}>
                    {[...Array(repeat)].map((e, index) => <Profile key={index} index={index}/>)}
                </article>
            </main>
        </div>
    )
}

function Profile(props) {
    return (
        <div className={`${styles.profile} transparent`} style={{animationDelay: props.index*100 + "ms"}}>

        </div>
    )
}


export default Contact;