const fourthContainer = () => {
    return (
        <div className="container-box4">
            <div className="fourthContainer-textbox">
                CONTACT
            </div>
            <div className="contact-boxContainer">
                <div className="contact-1-container">
                    <div className="contact-1-title">
                    Name
                    </div>
                    <input id="name" placeholder="Your Name" type="text">
                    </input>
                </div>
                <div className="contact-2-container">
                    <div className="contact-2-title">
                    Email
                    </div>
                    <input id="email" placeholder="Email Address" type="text">
                    </input>
                </div>
                <div className="contact-3-container">
                    <div className="contact-3-title">
                    Phone
                    </div>
                    <input id="phone" placeholder="Phone Number" type="text">
                    </input>
                </div>
            </div>
        </div>
    )
}

export default fourthContainer;