import { BrowserRouter } from "react-router-dom";
import Router from './src/components/route/router'

const StartMyApp = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default StartMyApp;