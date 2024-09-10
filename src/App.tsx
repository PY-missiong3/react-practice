import Card from './components/Card';
// import Typography from '@mui/material/Typography'
import './App.css';
function App() {
  return (
    <div className='App'>
      <Card style={{backgroundColor:'lightgreen',width:'220px',height:'80px',display:'flex',alignItems:'center',padding:'10px'}}
      src="https://i1.wp.com/cdn.onlinewebfonts.com/svg/img_469481.png"
      title="First card title"
      description="First card description"
      onClick={()=>alert("you clicked first card")}
     />
     <Card style={{ backgroundColor: 'red', width: '250px', height: '80px', display: 'flex', alignItems: 'center', padding: '10px' }}
      src="https://static.vecteezy.com/system/resources/previews/000/574/035/original/sign-of-download-icon-vector.jpg"
      title="Second card title"
      description="Second card description"
      onClick={()=>alert("you clicked second card")}
      />
       <Card style={{ backgroundColor: 'lightblue', width: '300px', height: '100px', display: 'flex', alignItems: 'center', padding: '10px' }}
      src="https://static.vecteezy.com/system/resources/previews/000/574/035/original/sign-of-download-icon-vector.jpg"
      title="third card title "
      description="Third card description"
      onClick={()=>alert("you clicked third card")}
      />
    </div>
  );
}

export default App;
