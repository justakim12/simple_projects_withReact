import logo from './Images/Logo.png'

const HeadImage = () => {
    return (
        <div className="headImage-box"> 
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
            <div className="logoImage-box">
                <img src={logo}></img>
                <div className="headImage-h1">
                    David Kyungil Kim's  
                </div>
                <div className="headImage-h1">
                    Profile
                </div>
            </div>
        </div>   
    )
}

export default HeadImage;