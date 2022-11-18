// THIRD IMPORT
import { BrowserRouter as Router } from "react-router-dom";
import { NotificationContainer } from "react-notifications";

// PROJECT IMPORT

import MewShop from "website/MewShop";

const App = () => {
  return (
    <Router>
      <NotificationContainer />
      <MewShop />
    </Router>
  );
};

export default App;
