import ClockHeading from '../components/ClockHeading.jsx';
import ClockSlogan from '../components/ClockSlogan.jsx';
import CurrentTime from '../components/CurrentTime.jsx';
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  

  return (
    <center>
      <ClockHeading></ClockHeading>
      <ClockSlogan></ClockSlogan>
      <CurrentTime></CurrentTime>
    </center>
  );
}

export default App
