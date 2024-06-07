import { useQuery } from "@tanstack/react-query";
import PostSkeleton from "../skeletons/PostSkeleton";
import Post from "./Post";

const Posts = ({ feedType }) => {
  const getPostEndPoint = () => {
    switch (feedType) {
      case "forYou":
        return "/api/posts/all";
      case "following":
        return "/api/posts/following";

      default:
        return "/api/posts/all";
    }
  };

  const postEndPoint = getPostEndPoint();

  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      try {
        const res = await fetch(postEndPoint);
        const data = res.json();
        if (!res.ok) throw new Error(data.error || "Post loading failed");
        return data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  });

  return (
    <>
      {isLoading && (
        <div className="flex flex-col justify-center">
          <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
        </div>
      )}
      {!isLoading && posts.length === 0 && (
        <p className="text-center my-4">No posts in this tab. Switch 👻</p>
      )}
      {!isLoading && posts && (
        <div>
          {posts.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </div>
      )}
    </>
  );
};
export default Posts;
