import styles from "../css/modules/Register.module.css"

function Register() {
    return (
        <div className={styles.mapBg}>
            <div className={styles.mapOverlay}>
                <main className="container-80">
                    <section className="modal-form wide-modal d-flex-col-c">
                        <form id="register-container" className="form-container d-flex f-col" method="post">
                            <h2>Register</h2>
                            <div className="thin blue line"></div>

                            <div id="err-incorrect-sign-in" className="warning d-none">
                                <p>Invalid input</p>
                            </div>

                            <h3 className="fw-3 fs-sm">Personal Information</h3>
                            <div className="d-flex-row-c gap-3">
                                <label htmlFor="title"></label>
                                <select name="title" id="title" className="rounded">
                                    <optgroup label="Title">
                                        <option value="Mr">Mr</option>
                                        <option value="Mrs">Mrs</option>
                                        <option value="Ms">Ms</option>
                                        <option value="Dr">Dr</option>
                                    </optgroup>
                                </select>

                                <div className="d-flex gap-2">
                                    <label htmlFor="first-name">
                                        <input type="text" placeholder="First name" name="firstName" id="first-name" className="rounded" required/>
                                    </label>
                                    <label htmlFor="last-name">
                                        <input type="text" placeholder="Last name" name="lastName" id="last-name" className="rounded" required/>
                                    </label>
                                </div>
                            </div>

                            <div className="d-flex-row-c gap-3">
                                <label htmlFor="relationship"></label>
                                <select name="relationship" id="relationship" className="rounded">
                                    <optgroup label="Relationship">
                                        <option value="Father">Father of</option>
                                        <option value="Mother">Mother of</option>
                                        <option value="Legal Guardian">Legal Guardian of</option>
                                        <option value="Other">Other</option>
                                    </optgroup>
                                </select>

                                <div className="d-flex gap-2">
                                    <label htmlFor="student-first-name">
                                        <input type="text" placeholder="Student's first name" name="studentFirst"
                                               id="student-first-name" className="rounded" required/>
                                    </label>
                                    <label htmlFor="student-last-name">
                                        <input type="text" placeholder="Student's last name" name="studentLast"
                                               id="student-last-name" className="rounded" required/>
                                    </label>
                                </div>
                            </div>
                            <label htmlFor="age">
                                <input type="number" placeholder="Age" name="age" id="age" className="rounded" min="4" max="12" value="4" required/>
                            </label>

                            <h3 className="fw-3 fs-sm mt-2">Account Information</h3>

                            <div className="d-flex-row-c gap-2">
                                <label htmlFor="user">
                                    <input type="text" placeholder="Username" name="user" id="user" autoComplete="username" className="rounded" required/>
                                </label>
                            </div>
                            <div className="sign-up d-flex-col-c">
                                <p>Don't have an account yet?</p>
                                <a href="/signup">
                                    <p className="underline clickable blue-text">Sign up here!</p>
                                </a>
                            </div>

                            <h3 className="fw-3 fs-sm mt-2">Application Questions</h3>
                            <label htmlFor="reason">Reason for Applying</label>
                            <textarea name="reason" id="reason" maxLength="500" className="rounded" required/>

                        <div className="form-buttons d-flex jc-c">
                            <input type="submit" value="Register" className="btn submit"/>
                        </div>
                    </form>
                </section>
            </main>
        </div>
</div>
    )
}

export default Register;