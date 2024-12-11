import { BlogPost } from "@/app/types";
import Image from "next/image";

const PostDetail = async () => {
  const res = await fetch(`http://localhost:3000/api/posts?n=1`);
  const posts: BlogPost[] = await res.json();
  const post: BlogPost = posts[0];

  return (
    <div className="relative flex flex-col gap-6">
      <h1 className="text-2xl font-extrabold">{post.title}</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="relative min-w-[50vw] w-full lg:w-[50vw] h-[40vh] md:h-[60vh]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="flex flex-col gap-6">
          <p>{post.text}</p>
          <p>
            Published {new Date(post.publishDate).toLocaleDateString("it-IT")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
