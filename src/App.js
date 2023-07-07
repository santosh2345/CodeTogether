import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import EditorPage from "./page/EditorPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div>
      {/* <Toaster
  position="top-right"
  reverseOrder={false}
/> */}
        <Toaster
          position="top-center"
          toastOptions={{
            success: {
              theme: {
                primary: "#4aed88",
              },
            },
          }}
        ></Toaster>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/editor/:roomId" element={<EditorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
