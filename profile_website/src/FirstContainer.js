import profile_1 from './Images/profile_1.jpeg'

const FirstContainer = () => {
    return (
        <div className="container-box">
            <div className="firstContainer-textbox">
                ABOUT
            </div>
            <div className="firstContainer-bigbox">
                <div className="firstContainer-imagebox">
                    <img className="firstContainer-image" src={profile_1}></img>
                </div> 
                <div className="firstContainer-textbox2">
                    <div className="firstContainer-textbox2-h1">
                        David Kyungil Kim
                    </div>
                    <div className="firstContainer-textbox2-h2">
                        Product Manager and Data Analyst
                    </div> 
                    <br></br>
                    <br></br>
                    <div className="firstContainer-textbox2-h3">
                        <li>Born and raised in the US for 10 years</li>
                        <li>Studied and currently working in South Korea</li>
                        <li>Working at Naver, the lead search engine of Korea</li>
                    </div> 
                </div>
            </div>
        </div>   
    )
}

export default FirstContainer;