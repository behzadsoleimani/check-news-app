import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { router } from "./config/config";
import LoadingBar from "react-top-loading-bar";
import { IGlobalState } from './redux/types';

import { useSelector } from 'react-redux';

function App() {
  const [progress, setProgress] = useState<any>(0);
  const pageSize = 7;
  const theme = useSelector((state: IGlobalState) => state.themeMode)


  useEffect(() => {
    document.body.style.backgroundColor = theme === "dark" ? "rgb(36, 39, 41)" : "#fff";

  }, [theme])
  return (
      <>
      <Router>
        <NavBar />
        <LoadingBar color="#005abb" height={3} progress={progress} />
        <Routes>
          {
            router.map((path: any) =>
              <Route
                key={uuidv4()}
                path={path.path}
                element={
                  <News
                    setProgress={setProgress}
                    key={path.key}
                    category={path.category}
                    pageSize={pageSize}
                    country={path.country}
                  />
                }
              />
            )
          }
        </Routes>
      </Router>
    </>
  );
}

export default App;
