import logo from './Images/Logo.png'

const HeadImage = () => {
    return (
        <div className="headImage-box"> 
            <div className="headImage-h1">
                Kyungil David Kim  
            </div>
            <div className="logoImage-box">
                <img src={logo}></img>
            </div>
        </div>   
    )
}

export default HeadImage;