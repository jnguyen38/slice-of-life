import styles from "../css/modules/Register.module.css"
import Meta from "../components/Meta";
import {useEffect, useState} from "react";
import {Icon} from "@blueprintjs/core";
import {useForm} from "react-hook-form";
import {formatPhone, title} from "../components/Util";

function Register() {
    const {
        register,
        unregister,
        handleSubmit,
        formState,
        trigger,
        getValues,
        watch
    } = useForm();
    const {errors, touchedFields} = formState;
    const [parents, setParents] = useState(1);
    const [students, setStudents] = useState(1);
    const [section, setSection] = useState(1);
    const [nextAttempt, setNextAttempt] = useState(false);
    const [formValues, setFormValues] = useState({})

    const handler = {
        removeParent: () => {
            unregister(`title${parents-1}`)
            unregister(`firstName${parents-1}`)
            unregister(`lastName${parents-1}`)
            unregister(`phone${parents-1}`)
            unregister(`email${parents-1}`)
            setParents(curr => curr - 1)
        },
        addParent: () => setParents(curr => curr + 1),
        removeStudent: () => {
            unregister(`studentFirst${students-1}`)
            unregister(`studentLast${students-1}`)
            unregister(`birthday${students-1}`)
            unregister(`relationship${students-1}`)
            unregister(`school${students-1}`)
            unregister(`grade${students-1}`)
            setStudents(curr => curr - 1);
        },
        addStudent: () => setStudents(curr => curr + 1),
        next: () => handler.validate("next"),
        previous: () => setSection(curr => curr - 1),
        validate: id => {
            const e = document.getElementById(id);
            trigger().then(() => {
                if (Object.keys(errors).length === 0) {setSection(curr => curr + 1)}
                else {
                    setNextAttempt(true)
                    e.classList.add("error-next")
                    e.removeEventListener("animationend", () => e.classList.remove("error-next"))
                    e.addEventListener("animationend", () => e.classList.remove("error-next"))
                }
            })
        },
        setSection: i => {setSection(i)}
    }

    function onSubmit(event) {
        event[`parents`] = parents;
        event[`students`] = students;

        fetch("/api/register", {
            method: "POST",
            body: JSON.stringify(event),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    useEffect(() => {
        // Trigger on page load to initialize errors (prevents async invalid next)
        trigger().then()
    }, [])

    useEffect(() => {
        // Trigger on section change to initialize errors (prevents async invalid next)
        trigger().then();
        setNextAttempt(false);

        // Scroll to top
        window.scrollTo({top: 0, behavior: "smooth"});

        // Check for review
        if (section === 4) setFormValues(getValues());
        console.log(formValues);

    }, [section])

    useEffect(() => {
        let inputs = document.querySelectorAll("input, select");
        for (let input of inputs) {
            if (input.value === "") {input.classList.remove("has-value")}
            else input.classList.add("has-value")

            // Remove then add event listeners
            function inputEvent(event) {
                trigger().then(() => {
                    if (event.target.value === "") {input.classList.remove("has-value")}
                    else input.classList.add("has-value")
                    setNextAttempt(false)
                })
            }
            function focusEvent(event) {
                trigger(input.id).then(() => {
                    if (event.target.value === "") input.classList.remove("has-value")
                    else input.classList.add("has-value")
                })
            }

            input.removeEventListener("input", e => inputEvent(e))
            input.addEventListener("input", e => inputEvent(e))
            input.removeEventListener("focusout", e => focusEvent(e))
            input.addEventListener("focusout", e => focusEvent(e))
        }
    }, [parents, students, section])

    return (
        <div className={styles.mapBg}>
            <Meta title={"Register"}></Meta>

            <div className={styles.mapOverlay}>
                <main className={`main-container d-flex-col-c`}>
                    <section className={`${styles.modal}`}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className={`d-flex gap-40`}>
                                <Icon icon={"user"} color={`var(--theme-blue)`} size={50}></Icon>
                                <div className={`mt-2`}>
                                    <h2 className={`m-0`}>Create an Account</h2>
                                    <p className={`paragraph fs-xs`}>
                                        Already have an account? <a href="./signin" className={`decorate`}>Sign In Here!</a>
                                    </p>
                                </div>
                            </div>
                            <div className={`thin blue line`}/>
                            <div className={`mt-2`}>
                                {section === 1 && <FamilyInfo nextAttempt={nextAttempt}
                                                              errors={errors}
                                                              register={register}
                                                              parents={parents}
                                                              handler={handler}/>}
                                {section === 2 && <StudentInfo nextAttempt={nextAttempt}
                                                               errors={errors}
                                                               register={register}
                                                               students={students}
                                                               handler={handler}/>}
                                {section === 3 && <AccountInfo nextAttempt={nextAttempt}
                                                               errors={errors}
                                                               register={register}
                                                               watch={watch}
                                                               handler={handler}/>}
                                {section === 4 && <ReviewInfo handler={handler}
                                                              students={students}
                                                              parents={parents}
                                                              formValues={formValues}/>}
                            </div>
                            <div className={`d-flex jc-sb mt-5`}>
                                {section > 1 ? <input type="button" value={`Previous`} onClick={handler.previous} className={`primary rounded`}/> : <div/>}
                                {section < 4 && <input type="button" id={`next`} value={`Next`} onClick={handler.next} className={`secondary rounded`}/>}
                                {section === 4 && <input type="submit" id={`submit`} value={`Submit`} className={`secondary rounded`}/>}
                            </div>
                        </form>
                    </section>
                </main>
        </div>
    </div>
    )
}

function FamilyInfo(props) {
    return (
        <article className={`d-flex-col-l gap-2`}>
            <h3 className={`mb-0`}>Family Information</h3>
            <p className={`paragraph fs-xs`}>
                Please include all necessary information about your family. You can add an additional parent/guardian
                if applicable by clicking the "Add Parent" button below.
            </p>

            <section className={`${styles.indent} d-flex-col-l gap-2`}>
                {[...Array(props.parents)].map((e, index) => <Parent {...props} key={index} index={index}/> )}
                {props.parents < 2 && <input type="button" value={`Add Parent`} className={`${styles.add}`} onClick={props.handler.addParent}/>}
                {props.parents > 1 && <input type="button" value={`Remove Parent`} className={`${styles.remove}`} onClick={props.handler.removeParent}/>}

                <h4>Address</h4>
                <div className={`f-responsive-row`}>
                    <Input {...props} type={`text`} id={`street`} class={`long`}/>
                    <Input {...props} type={`text`} id={`city`}/>
                    <Input {...props} type={`text`} id={`state`}/>
                    <Input {...props} type={`zipcode`} id={`zipCode`} label={`zipCode`} class={`short`}/>
                </div>
            </section>
        </article>
    )
}

function StudentInfo(props) {
    return (
        <article className={`d-flex-col-l gap-1`}>
            <h3 className={`mb-0`}>Student Information</h3>
            <p className={`paragraph fs-xs`}>
                Please include all necessary information about the child or children that you want to enroll in
                Slice of Life tutoring. You can add multiple children by pressing the "Add Student" button below. (Max 5 Students)
            </p>

            <section className={`${styles.indent} d-flex-col-l gap-2`}>
                {[...Array(props.students)].map((e, index) => <Student {...props} key={index} index={index}/>)}
                <div className={`f-responsive-row`}>
                    {props.students < 5 &&<input type="button" value={`Add Student`} className={`${styles.add}`} onClick={props.handler.addStudent}/>}
                    {props.students > 1 && <input type="button" value={`Remove Student`} className={`${styles.remove}`} onClick={props.handler.removeStudent}/>}
                </div>
            </section>
        </article>
    )
}

function AccountInfo(props) {
    return (
        <article className={`d-flex-col-l gap-2`}>
            <h3 className="fw-3 fs-sm mt-2 mb-0">Account Information</h3>
            <p className={`paragraph fs-xs`}>
                Please choose a username and email to be associated with your account. The email can be the same as one of
                the contact emails provided in the previous section.
            </p>

            <section className={`${styles.indent} d-flex-col-l gap-2`}>
                <h4>User Info</h4>
                <Input {...props} type={`text`} id={`username`}/>
                <Input {...props} type={`text`} id={`accountEmail`} label={`Account Email`}/>
                <h4>Password Info</h4>
                <Input {...props} type={`password`} id={`password`}/>
                <div className={`input`}>
                    <input type={`password`} id={`confirm`}
                           {...props.register(`confirm`, {
                               required: "Confirm password is required",
                               validate: val => {
                                   if (props.watch(`password`) !== val) return "Your passwords must match"
                               }
                           })}
                           className={`${props.errors[`confirm`] && props.nextAttempt ? "error" : ""} rounded`}/>
                    <label htmlFor={`confirm`}>Confirm Password</label>
                </div>
                {props.errors.confirm && <p className={styles.warning}>{props.errors.confirm?.message}</p>}
            </section>
        </article>
    );
}

function ReviewInfo(props) {
    if (!props.formValues) return;

    return (
        <article className={`d-flex-col-l gap-2`}>
            <h3 className="fw-3 mt-2 mb-0">Review Information</h3>
            <p className={`fw-2 fs-xs`}>
                Please ensure that all the information below is accurate.
            </p>

            <section className={`${styles.indent} d-flex-col-l gap-2`}>
                <div className={`thin blue line w-100`}/>
                <div className={`d-flex jc-sb w-100`}>
                    <h4 className={`fw-4 fs-sm`}>Family Information</h4>
                    <div className={`${styles.edit} d-flex gap-1 secondary clickable rounded`} onClick={() => props.handler.setSection(1)}>
                        <Icon icon={`edit`} color={`var(--theme-white)`} size={14}/>
                    </div>
                </div>
                {[...Array(props.parents)].map((e, index) => <ParentReview key={index} index={index} {...props}/>)}
                <span>
                    <h4>Address</h4>
                    <p className={"fw-2 fs-xs m-0"}>Address: {props.formValues[`street`] + ", " + props.formValues[`city`] + " " + props.formValues[`state`] + " " + props.formValues[`zipCode`]}</p>
                </span>
                <div className={`thin blue line w-100`}/>
                <div className={`d-flex jc-sb w-100`}>
                    <h4 className={`fw-4 fs-sm`}>Student Information</h4>
                    <div className={`${styles.edit} d-flex gap-1 secondary clickable rounded`} onClick={() => props.handler.setSection(2)}>
                        <Icon icon={`edit`} color={`var(--theme-white)`} size={14}/>
                    </div>
                </div>
                {[...Array(props.students)].map((e, index) => <StudentReview key={index} index={index} {...props}/>)}
                <div className={`thin blue line w-100`}/>
                <div className={`d-flex jc-sb w-100`}>
                    <h4 className={`fw-4 fs-sm`}>Account Information</h4>
                    <div className={`${styles.edit} d-flex gap-1 secondary clickable rounded`} onClick={() => props.handler.setSection(3)}>
                        <Icon icon={`edit`} color={`var(--theme-white)`} size={14}/>
                    </div>
                </div>
                <span>
                    <h4>User Information</h4>
                    <p className={"fw-2 fs-xs m-0"}>Username: {props.formValues[`username`]}</p>
                    <p className={"fw-2 fs-xs m-0"}>Account Email: {props.formValues[`accountEmail`]}</p>
                </span>

            </section>
        </article>
    );
}

function StudentReview(props) {
    return (
        <div>
            <h4>Student No. {props.index + 1}</h4>
            <p className={"fw-2 fs-xs m-0"}>Name: {props.formValues[`studentFirst${props.index}`] + " " + props.formValues[`studentLast${props.index}`]}</p>
            <p className={"fw-2 fs-xs m-0"}>Date of Birth: {props.formValues[`birthday${props.index}`]}</p>
            <p className={"fw-2 fs-xs m-0"}>School: {props.formValues[`school${props.index}`]}</p>
            <p className={"fw-2 fs-xs m-0"}>Grade: {props.formValues[`studentGrade${props.index}`]}</p>
            <p className={"fw-2 fs-xs m-0"}>Allergies: {props.formValues[`allergy${props.index}`]}</p>
        </div>
    )
}

function ParentReview(props) {
    return (
        <div>
            <h4>Parent No. {props.index + 1}</h4>
            <p className={"fw-2 fs-xs m-0"}>Name: {props.formValues[`title${props.index}`] + ". " + props.formValues[`firstName${props.index}`] + " " + props.formValues[`lastName${props.index}`]}</p>
            <p className={"fw-2 fs-xs m-0"}>Phone: {formatPhone(props.formValues[`phone${props.index}`])}</p>
            <p className={"fw-2 fs-xs m-0"}>Contact Email: {props.formValues[`email${props.index}`]}</p>
        </div>
    );
}

function Student(props) {
    return (
        <div>
            <h4 className={`mb-2 mt-2`}>Student No. {props.index + 1}</h4>
            <div className={`f-responsive-row`}>
                <Input {...props} type={`text`} id={`studentFirst${props.index}`} label={`first name`}/>
                <Input {...props} type={`text`} id={`studentLast${props.index}`} label={`last name`}/>
                <Input {...props} type={`date`} id={`birthday${props.index}`} label={`date of Birth`}/>
                <Input {...props} type={`text`} id={`school${props.index}`} label={`school`}/>
                <Input {...props} type={`text`} id={`allergy${props.index}`} label={`allergies`}/>
                <Select {...props} id={`studentGrade${props.index}`} label={`grade`} options={["Kindergarten", "First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "High School"]}/>
            </div>
        </div>
    )
}

function Parent(props) {
    return (
        <div>
            <h4 className={`mb-2`}>Parent/Guardian No. {props.index + 1}</h4>
            <div className={`f-responsive-row`}>
                <Select {...props} id={`title${props.index}`} label={`title`} options={["Mr", "Mrs", "Ms", "Dr", "Other"]}/>
                <Input {...props} type={`text`} id={`firstName${props.index}`} label={`first name`}/>
                <Input {...props} type={`text`} id={`lastName${props.index}`} label={`last name`}/>
                <Input {...props} type={`tel`} id={`phone${props.index}`} label={`phone`}/>
                <Input {...props} type={`email`} id={`email${props.index}`} label={`email`}/>
            </div>
        </div>

    )
}

function Select(props) {
    if (!props.register) return;

    return (
        <div className={`input`}>
            <select name={props.id} id={props.id}
                    {...props.register(props.id, {
                        required: `${title(props.label ? props.label : props.id)} is required`,
                        pattern: {
                            value: /^(?!select).*$/,
                            message: "Default value not allowed"
                        }
                    })}
                    className={`rounded ${props.class ? props.class : ""} ${props.errors[props.id] && props.nextAttempt ? "error" : ""}`} required>
                <optgroup label={title(props.label ? props.label : props.id)}>
                    <option value="select" className={`default-option`}>Select</option>
                    {props.options.map(option =>
                        <option value={option} key={option}>{option}</option>
                    )}
                </optgroup>
            </select>
            <label htmlFor={props.id}>{title(props.label ? props.label : props.id)}</label>
        </div>
    )
}

function Input(props) {
    if (!props.register) return

    return (
        <div className={`input`}>
            <input type={props.type} id={props.id}
                   {...props.register(props.id, {required: "Required"})}
                   className={`${props.errors[props.id] && props.nextAttempt ? "error" : ""} rounded ${props.class ? props.class : ""}`}/>
            <label htmlFor={props.id}>{title(props.label ? props.label : props.id)}</label>
        </div>
    )
}

export default Register;