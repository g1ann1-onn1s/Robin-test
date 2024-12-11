import { BlogPost } from "@/app/types";
import PostPreview from "@/app/components/PostPreview";

interface Props {
  posts: BlogPost[];
}

const Homepage = async () => {
  const res = await fetch("http://localhost:3000/api/posts?n=5");
  const posts: BlogPost[] = await res.json();

  return (
    <div className="grid gap-2 md:gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostPreview key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Homepage;
