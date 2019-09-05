import React from 'react';
import  Title  from './components/title';
import Form from './components/form';
import Weather from './components/weather';


class App extends React.Component{
  
getWeather = async (e) => {
  e.preventDefault();
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=9947639ea38d5eba6d37b6aca8ad8e16`);
  const response = await api_call.json();
  console.log(response);
        }


   render(){
    return(
      <div>
        <Title />
        <Form loadWeather={this.getWeather} />
        <Weather />
      </div>
   )
  }
}

export default App;