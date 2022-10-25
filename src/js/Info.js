import useWindowDimensions from "./Hooks";

function InfoNav() {
    return (
        <section>
            <div id="info-nav">
                <h2>Navigation</h2>
                <ul className="no-bullets text-right">
                    <li>About Us</li>
                    <li>Our History</li>
                    <li>Who We Are</li>
                    <li>Our Mission</li>
                </ul>
            </div>
        </section>
    );
}

function InfoDisplay(props) {
    return (
        <section id="info-display">
            <div className={(props.width > 1000) ? "info-text text-left grid-6" : " info-text text-left grid-12"}>
                <h2>About Us</h2>
                <p>Slice of Life provides professional role models to arm participants with usable tools to avoid negative pressures for drug use, teen pregnancy, violence, criminal behavior and gang affiliation. We provide activities that are educational, challenging, rewarding and fun. We reach out to the youth of our community to share information and ideas on how we can all work together for a brighter tomorrow by decreasing the number of school drop-outs and increasing the number of high-school and college graduates. Over the past 31 years, 70% or more of the Slice of Life participants have gone on to post-secondary education as a result of having taken advantage of opportunities afforded to them in the program. Slice of Life alumni have returned to the program in the area of leadership, tutoring, mentoring and fundraising.</p>
            </div>
            <img src="" alt="" className={(props.width > 1000) ? "grid-6" : "grid-12"}/>
            <img src="" alt="" className={(props.width > 1100) ? "grid-4" : "grid-12"}/>
            <div className={(props.width > 1100) ? "info-text text-right grid-8" : " info-text text-left grid-12"}>
                <h2>Our History</h2>
                <p>Slice of Life was founded in 1988 by Ms. Geraldine Griffin. It emerged as one of the leading tutoring organizations in our community. Over the years the program and its participants have been at the forefront of the educational movement dedicated to educating, inspiring and assisting youth of diverse cultures to improve their educational outcomes. Our desire is to empower and support youth as they endeavor to succeed in their personal and academic lives. By participating in the structured and hands-on learning activities provided by Slice of Life, youth develop healthy self-esteem, positive self- image, enduring self-confidence and a genuine respect for themselves and others. This enables them to make positive contributions to their communities. The University of Notre Dame provides students to add the components of tutoring and mentoring. In recent years the students have been a recognized campus group who consistently serve in various aspects of the organization. They effectively recruit students on campus and are responsible for significant amount of fundraising. Notre Dame students make a four year commitment to maximize the benefits of the tutor/student relationship. Tutors also focus on state testing to aid in reading comprehension, fluency and math.</p>
            </div>
            <div className={(props.width > 1000) ? "info-text text-left grid-8" : " info-text text-left grid-12"}>
                <h2>Who We Are</h2>
                <p>Slice of Life is a development program that provides tutoring and life skill services for only $100 a semester per student. We provide help for children of grades K-5. The program currently operates Tuesday, Wednesday, and Thursday from 3:15PM until 5:15PM. This after school program is located at Christian Life Center South Bend, 1717 N. Hickory Rd., South Bend, IN 46635. We provide individual tutoring, life skills, character development, recreational team building, field trips, guest speakers, small group interactions, nutritional snacks, parent meetings and award ceremony with celebrations.</p>
            </div>
            <img src="" alt="" className={(props.width > 1000) ? "grid-4" : "grid-12"}/>
            <div className={(props.width > 1000) ? "info-text text-center grid-8" : "info-text text-center grid-12"} id="info-mission">
                <h2>Our Mission</h2>
                <div className="line"/>
                <p>To provide positive reinforcements for physical and emotional wellness, academic achievement, leadership development and community service to youth in grades K-5.</p>
            </div>
        </section>
    );
}

function Info() {
    const {height, width} = useWindowDimensions();

    return (
        <div id="info-container">
            <InfoNav/>
            <InfoDisplay height={height} width={width}/>
        </div>
    );
}

export default Info