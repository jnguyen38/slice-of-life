import styles from "../css/modules/Volunteer.module.css";
import Meta from "../components/Meta";
import dome from "../../public/media/dome.jpg";
import Image from "next/image";

function Volunteer() {
    const INTEREST = "mailto:jnguyen5@nd.edu?subject=Interest in Slice of Life Tutoring!&body=Hey Jon,";
    return (
        <div>
            <Meta title={`Volunteer`}/>

            <main className={`main-container`}>
                <div className={`f-responsive-row gap-5 jc-sb`}>
                    <article className={`controlled-width`}>
                        <h2>Notre Dame Students</h2>
                        <p className={`paragraph`}>
                            You're in luck because <b>we are actively looking for new tutors</b> and would love for you to
                            sign up! If you are interested please email <a href={INTEREST} className={`decorate fw-5`}>jnguyen5@nd.edu</a>,
                            I look forward to hearing from you! Please find additional information on tutoring below.
                        </p>
                        <h3>What You Need to Know</h3>
                        <ul className={`paragraph`}>
                            <li>Slice of Life tutoring takes place from 3:45pm - 5:00pm on Tuesdays, Wednesdays, and Thursdays every week that you are on campus.</li>
                            <li>We leave from Main Circle at 3:30pm and get back at around 5:15pm.</li>
                            <li>Most volunteers only tutor once a week or even once every two weeks, but the choice is really up to you - you can tutor anywhere from every day to just once a month.</li>
                            <li>Tutoring is extremely flexible - if you have an exam you need to study for or a big project you need to do, we totally get it (we're students too). Just let your group know and take the day off to get your work done.</li>
                            <li>We work with local students from Kindergarten to Fifth grade in basic math and reading skills.</li>
                            <li>A typical day consists of about an hour of tutoring and 20 minutes of playing around with the students - usually board games or sports outside if the weather is nice!</li>
                        </ul>
                        <h3>Schedules</h3>
                        <p className={`paragraph`}>
                            To view the semester schedule and the daily tutoring schedule, please visit the <a href="/schedules" className={`decorate`}>Schedule Page</a>. Additionally, you can also download the full semester schedule <a href="/docs/Slice%20of%20Life%202023-2024.pdf" className={`decorate`} download>here</a> and
                            the typical daily schedule <a href="/docs/Slice%20of%20Life%20Daily%20Schedule%202023-2024.pdf" className={`decorate`} download>here</a>.
                        </p>
                    </article>

                    <Image src={dome} alt={""} className={styles.dome} priority/>
                </div>
                <article className={`controlled-width`}>
                    <h2>Non-Notre Dame Students</h2>
                    <p className={`paragraph`}>
                        Unfortunately, at the time of this writing and until further notice, we are not accepting any
                        non-Notre Dame students as tutors. Hopefully, we will expand our reach and begin to allow non-Notre
                        Dame students to help out in the future.
                    </p>
                    <p className={`paragraph`}>
                        If you are at all affiliated with the Christian Life Center, Notre Dame, or especially have been affiliated
                        with Slice of Life in the past, and you want to reach out or see where you can help out, then
                        please feel free to email <a href={INTEREST} className={`decorate fw-5`}>jnguyen5@nd.edu</a>, we would
                        love to hear from you!
                    </p>
                </article>
            </main>
        </div>
    )
}

export default Volunteer;