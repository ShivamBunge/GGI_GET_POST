import './App.css';
import Card from './components/Card';
import Gallery from './components/Gallery';
import sData from './sData';


//used for rendering app component
function App() {
  return (
    <>
      <h2>HI THERE</h2>
     {/* <Card 
      title={sData[0].sname}      // normal way of rendering each card and passing data 
      description={sData[0].descrip}
      img= {sData[0].imgsrc}/> */}

      {/* using map function ..defining custom function to map corresponding values to each card automatically
      depending on num of objects in arr of sData */}
      {sData.map(function ncard(val){  //can use arrow function as well
           return <Card
           key={val.id}
           title={val.sname}
           description={val.descrip}
           img={val.imgsrc}          
           />
      })}
      <Gallery/>
    </>
   
  );
}

export default App;
