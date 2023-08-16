import { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";

function App() {
  const [searchText, setSearchText] = useState("");
  const getWords = (item) => {
    setSearchText(item);
  };
  return (
    <div className="font-poppins">
      <Header getWords={getWords} />
      <Content searchText={searchText} />
    </div>
  );
}

export default App;
