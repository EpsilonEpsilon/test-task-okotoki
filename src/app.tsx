import {MainPage} from "./pages/main";
import "./index.css";
import FavouriteController from "./controller/FavouriteController.tsx";

function App() {
  return (
    <FavouriteController>
      <MainPage/>
    </FavouriteController>
  )
}

export default App
