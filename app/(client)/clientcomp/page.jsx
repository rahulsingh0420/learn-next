"use client"

import { useEffect, useState } from "react";

export default function  ClientComp() {
    
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        const URL = "https://jsonplaceholder.typicode.com/posts";
        // we can't use async in client componets so a saprate function to use async there
        async function fetchPosts(url) {
          const res = await fetch(url);
          const data = await res.json();
          setPosts(data);
        }
        fetchPosts(URL);
    }, [])

    const [count, setCount] = useState(0);

    return (
      <>
        <button
          onClick={() => setCount(count+1)}
          className="rounded-xl m-3 bg-slate-900 px-5 py-2 text-white transition-all cursor-pointer hover:scale-90"
        >
          + add ({count})
        </button>
        <div className="my-5 m-3 grid grid-cols-3 gap-10">
          {posts.map((el) => {
            return (
              <div key={el.id} className="bg-white rounded-xl p-3 shadow-xl">
                <h3 className="text-2xl font-bold">{el.title}</h3>
                <p>{el.body}</p>
              </div>
            );
          })}
        </div>
      </>
    );


}
