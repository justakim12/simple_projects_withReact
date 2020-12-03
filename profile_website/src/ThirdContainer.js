import python_logo from './Images/python.png'
import sql_logo from './Images/sql.png'
import tableau_logo from './Images/tableau.png'

const ThirdContainer = () => {
    return (
        <div className="container-box">
            <div className="thirdContainer-textbox">
                SKILLSET
            </div>
            <div className="skillset-boxContainer">
                <div className="logo-box">
                    <img className="firstLogo-image" src={python_logo}></img>
                </div>
                <img className="secondLogo-image" src={sql_logo}></img>
                <img className="thirdLogo-image" src={tableau_logo}></img>
            </div>
        </div>   
    )
}

export default ThirdContainer;