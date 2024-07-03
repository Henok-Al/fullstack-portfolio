import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Eye, Github } from "lucide-react"; // Importing icons from Lucide React

export default function Blog() {
  const posts = [
    {
      image: "/blog.jpg",
      title: "Exploring the Wonders of Nature",
      description:
        "Discover the beauty and serenity of the great outdoors in this captivating blog post.",
    },
    {
      image: "/blog.jpg",
      title: "The Art of Mindful Living",
      description:
        "Discover practical tips and techniques to cultivate a more mindful and fulfilling life.",
    },
    {
      image: "/blog.jpg",
      title: "The Future of Technology",
      description:
        "Explore the latest trends and innovations shaping the future of technology.",
    },
    {
      image: "/blog.jpg",
      title: "The Art of Storytelling",
      description:
        "Discover the power of storytelling and how it can transform your writing.",
    },
    {
      image: "/blog.jpg",
      title: "The Importance of Self-Care",
      description:
        "Explore practical strategies to prioritize your well-being and live a more balanced life.",
    },
    {
      image: "/blog.jpg",
      title: "The Art of Minimalism",
      description:
        "Discover the benefits of living a more minimalist lifestyle and decluttering your life.",
    },
  ];

  return (
    <section className="grid grid-cols-1 gap-8 p-4 md:grid-cols-2 lg:grid-cols-3 md:p-6 lg:p-8"  id="blog">
      <h1 className="col-span-full  text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center md:text-left">
      Latest Posts
      </h1>

      {posts.map((post, index) => (
        <div
          key={index}
          className="rounded-lg overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
        >
          <Link href="#" prefetch={false}>
            <img
              src={post.image}
              alt={post.title}
              width={600}
              height={400}
              className="w-full h-60 object-cover"
            />
            <div className="p-6 bg-background">
              <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
              <p className="text-muted-foreground mb-4">{post.description}</p>
              <Button variant="link">
                Read More
                <Eye className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="link">
                GitHub
                <Github className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
}
