import Header from './Header';
import Carousel from './carousel';
import Electronics from './electronics';
import Clothing from './clothing';
import Mobiles from './mobiles';
import Offers from './offers';
import Misc from './misc';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Electronics/>
      <Clothing />
      <Offers />
      <Mobiles />
      <Misc />
      
    </div>
  );
}

export default App;
