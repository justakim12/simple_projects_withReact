import python_logo from './Images/python.png'
import sql_logo from './Images/sql.png'
import tableau_logo from './Images/tableau.png'
import hive_logo from './Images/hive.png'
import spark_logo from './Images/spark.png'
import react_logo from './Images/react.png'

const ThirdContainer = () => {
    return (
        <div className="container-box">
            <div className="thirdContainer-textbox">
                SKILLSET
            </div>
            <div className="skillset-boxContainer">
                <div className="skillsetImage-box">
                    <div className="skillsetImage-row1">
                        <img className="firstLogo-image" src={python_logo} alt="logoimage"></img>
                        <img className="secondLogo-image" src={sql_logo} alt="logoimage"></img>
                        <img className="thirdLogo-image" src={tableau_logo} alt="logoimage"></img>
                    </div>
                    <div className="skillsetImage-row2">
                        <img className="fourthLogo-image" src={hive_logo} alt="logoimage"></img>
                        <img className="fifthLogo-image" src={spark_logo} alt="logoimage"></img>
                        <img className="sixthLogo-image" src={react_logo} alt="logoimage"></img>
                    </div>
                </div>
            </div>
        </div>   
    )
}

export default ThirdContainer;