import { BlogPost } from "@/app/types";
import Image from "next/image";
import Link from "next/link";

interface PostPreviewProps {
  post: BlogPost;
}

const PostPreview = ({ post }: PostPreviewProps) => {
  return (
    <div className="bg-white flex flex-col gap-2 border-2 border-secondary rounded-md overflow-hidden sm:min-w-full md:min-w-[50%] lg:min-w-[33%]">
      <div className="relative w-full h-[250px]">
        <Image
          src={post.image}
          alt={post.title}
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-extrabold">{post.title}</h2>
        <p>{post.excerpt}</p>
        <Link href={`/post/${post.id}`} className="ml-auto">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default PostPreview;
