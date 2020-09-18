import React, { useEffect, useState } from "react";
import Axios from "axios";
import ShowPostList from "./showPostList";
import { ShowChart } from "@material-ui/icons";
const ShowPost = () => {
  const [post, setPost] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const fn = async () => {
      try {
        let res = await Axios.get("/api/showImages");
        console.log(res);
        if (res.status == 200) setPost([...res.data]);
      } catch (error) {
        console.log(error);
        setError("No Posts To Load");
      }
    };
    fn();
  }, []);

  return (
    <>
      {error ? (
        <h1>{error}</h1>
      ) : (
        <div>
          <>
            {post.map((item, idx) => (
              <ShowPostList
                key={idx}
                title={item.title}
                url={item.url}
                description={item.description}
              />
            ))}
          </>
        </div>
      )}
    </>
  );
};

export default ShowPost;
