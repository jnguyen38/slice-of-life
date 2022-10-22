function Register() {
    return (
        <div id="reg-container">
            <div id="reg-display">
                <h1>Registration Form</h1>
                <form id="reg-form">
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" name="firstname" className="reg-text grid-4"/>
                </form>
            </div>
        </div>

    );
}

export default Register;