import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Content(props) {
  const [searchWords, setSearchWords] = useState([]);
  const { searchText } = props;
  const response = async () => {
    try {
      const result = await axios.get(
        `http://localhost:4001/trips?keywords=${searchText}`
      );

      setSearchWords(result.data.data);
    } catch (error) {
      console.log("Error fetch");
    }
  };

  useEffect(() => {
    response();
  }, [searchText]);

  return (
    <div>
      {searchWords.map((item) => {
        return (
          <div key={item.eid} className="flex mt-16 w-9/12 m-auto  ">
            <div className="mr-7">
              <img
                className="w-[450px] h-auto rounded-3xl "
                src={item.photos[0]}
              />
            </div>
            <div className="flex flex-col space-y-4">
              <h2 className="text-3xl font-bold pt-2">{item.title}</h2>
              <p className="text-xl text-slate-600 ">
                {item.description.length > 100
                  ? item.description.substring(0, 100) + "..."
                  : item.description}
              </p>
              <a className="text-cyan-700 underline ">อ่านต่อ</a>
              <span className="space-x-4 ">
                หมวด
                {item.tags.map((tag, index) => (
                  <button key={index} className="ml-5 underline">
                    {tag}
                  </button>
                ))}
              </span>

              <div className="flex space-x-11 w-[800px]">
                {item.photos.slice(1).map((img, index) => (
                  <img key={index} className="w-36" src={img} />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Content;
