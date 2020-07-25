import React , { useState , useEffect } from 'react';
import SearchBox from './Components/SearchBox';
import LocationBox from './Components/LocationBox';
import WhiteThingy from './Components/WhiteThingy';

function App() {
  const [val , setVal] = useState("Romania");
  const [country , setCountry] = useState("");
  const [cases , setCases] = useState({});
  const [deaths , setDeaths] = useState({});
  
  const BASE_URL = "https://corona.lmao.ninja/v2/countries/"

  const change = e => setVal(e.target.value);
  const keyPress = (evt) => evt.key === "Enter" ? fetchFunc(val) : ''

  const fetchFunc = (country) => {
    if (country !== "") {
      fetch(`${BASE_URL}${country}`)
      .then( res => {
        if (!res.ok) { throw res }
        return res.json()  //wfie only get here if there is no error
      })
      .then( res => {
        setCases({total: res.cases , today: res.todayCases})
        setDeaths({total: res.deaths , today: res.todayDeaths})
        setCountry(res.country)
      })
    }
    setVal('')
  }

  useEffect( () => {
    fetchFunc(val)
  } , [] )

  return (
    <div className="app">
      <main>
        <SearchBox val={val} change={change} keyPress={keyPress} />
        <LocationBox country={country} />
        <div className="middle scroll">
          <WhiteThingy text={"Total Cases"} cases={cases.total} />
          <WhiteThingy text={"Total Deaths"} cases={deaths.total} />

          <WhiteThingy text={"Today Cases"} cases={cases.today} />
          <WhiteThingy text={"Today Deaths"} cases={deaths.today} />
        </div>
      </main>

      <div className="footer">
          <div>Empty Button</div>
          <div>Empty Button</div>
        </div>
    </div>
  );
}

export default App;