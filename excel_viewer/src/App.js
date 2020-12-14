import './App.css';

function App() {
  return (
    <div class="body">
      <div class="header">
        <div class="document-header">
            <h1 class="document-title">Excel Image Viewer</h1>
        </div>
      </div>
      <div class="container">
        <div class="container-header">
          <h2 class="container-tool-manual">1~3행에 [이미지(URL), 텍스트, ...]가 오도록 엑셀 설정해주세요</h2>
          <input type="file" id="input-excel-file"></input>
        </div>
        <div id="root">
          <div class="item-table"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
