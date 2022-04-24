import './App.css';
import customerAxios from './config/axios';


function App() {

  // TEST
  const axiosTest = async () => {

    const postData = {
      id: "userId",
      pw: "userPw"
    }
    // Login은 post ?
    const requestResult =  await customerAxios.post("/user", postData);
    console.log(requestResult);
  }
  // TEST

  return (
    <div>
      {/* TEST */}
      <button onClick={axiosTest}>TEST</button>
      {/* TEST */}
    </div>
  );
}

export default App;
