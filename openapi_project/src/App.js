import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';

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
      <div className="title">
        Select Date
      </div>
      <div className="date" onClick={fetchData}>
        20201209
      </div>
      <div className="date" onClick={fetchData}>
        20201210
      </div>
      <div className="date" onClick={fetchData}>
        20201211
      </div>
      <div className="date" onClick={fetchData}>
        20201212
      </div>
      <div className="result">
        {`누적 확잔자 숫자: ${decideCnt}명`}
      </div>
    </div>
  );
}

export default App;
