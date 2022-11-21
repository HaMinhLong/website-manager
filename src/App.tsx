// THIRD IMPORT
import { BrowserRouter as Router } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';

// PROJECT IMPORT

import MewShop from 'website/MewShop';
import CreativeAgency from 'website/CreativeAgency';

const App = () => {
  return (
    <Router>
      <NotificationContainer />
      {/* <MewShop /> */}
      <CreativeAgency />
    </Router>
  );
};

export default App;
