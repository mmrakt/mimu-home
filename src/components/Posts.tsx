import { useEffect, useState } from "react";
import { RAINDROP_API_BASE_URL } from "../constants";
import Post from "./Post";
// import { dummyPosts } from "../constants/dummy";
import SkeletonPost from "./SkeletonPost";

const Posts = () => {
  const [result, setResult] = useState<RaindropApiResult | null>();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${RAINDROP_API_BASE_URL}/raindrops/36744205`,
        {
          headers: {
            Authorization: `Bearer ${
              import.meta.env.VITE_RAINDROP_ACCESS_TOKEN
            }`,
          },
        }
      );
      const result = await response.json();
      setResult(result);
    })();
    // setPosts(dummyPosts);
  }, []);

  return (
    <>
      <h2 className="text-3xl">Inbox({result && result.count})</h2>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
        {!result
          ? [...new Array(12)].map(() => <SkeletonPost />)
          : result.items.map((post) => <Post item={post} key={post._id} />)}
      </ul>
    </>
  );
};

export default Posts;
