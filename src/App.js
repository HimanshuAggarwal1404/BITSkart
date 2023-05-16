import Header from './Header';
import Carousel from './carousel';
import Electronics from './electronics';
import Clothing from './clothing';
import Mobiles from './mobiles';
import Offers from './offers';
import Misc from './misc';
import Kitchen from './kitchen';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Electronics/>
      <Offers />
      <Clothing />
      <Mobiles />
      <Misc />
      <Kitchen />
      
    </div>
  );
}

export default App;
