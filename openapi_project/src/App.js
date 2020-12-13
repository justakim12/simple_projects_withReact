import './App.css';
import axios from 'axios';
import {useState} from 'react';

function App() {
  const [decideCnt, setDecideCnt] = useState('N/A')

  const fetchData = async (e) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const clickedDate = e.target.textContent;
    const fetchedData = await axios.get(`http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=${apiKey}&pageNo=1&numOfRows=10&startCreateDt=${clickedDate}&endCreateDt=${clickedDate}`);
    const decideCntFromAPI = fetchedData.data.response.body.items.item.decideCnt;
    setDecideCnt(decideCntFromAPI);
  }
  
  return (
    <div className="date-box">
      <div className="explain-box">
        <li>Utilized South Korean government provided Open API: <a href="https://data.go.kr/index.do">Go to website</a></li>
        
        <li>When you select a date, the cumulative number of corona viruses cases in South Korea will show</li>
      </div>  

      <div className="title">
        Select Date
      </div>
      <button className="date" onClick={fetchData}>
        20201209
      </button>
      <button className="date" onClick={fetchData}>
        20201210
      </button>
      <button className="date" onClick={fetchData}>
        20201211
      </button>
      <button className="date" onClick={fetchData}>
        20201212
      </button>
      <div className="result">
        {`Number of cumulative cases: ${decideCnt}명`}
      </div>
    </div>
  );
}

export default App;
