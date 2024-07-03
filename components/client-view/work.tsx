import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";
import { Eye, Github } from "lucide-react";
import Image from "next/image";

export default function Work() {
  const projects = [
    {
      image: "/test.jpg",
      title: "Project 1",
      description: "This is the description for Project 1.",
    },
    {
      image: "/test.jpg",
      title: "Project 2",
      description: "This is the description for Project 2.",
    },
    {
      image: "/test.jpg",
      title: "Project 3",
      description: "This is the description for Project 3.",
    },
    {
      image: "/test.jpg",
      title: "Project 4",
      description: "This is the description for Project 4.",
    },
    {
      image: "/test.jpg",
      title: "Project 5",
      description: "This is the description for Project 5.",
    },
    {
      image: "/test.jpg",
      title: "Project 6",
      description: "This is the description for Project 6.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-8 md:px-16 py-8" id="work">
      <h1 className="col-span-full text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center md:text-left">
        My Creative Portfolio
      </h1>
      {projects.map((project, index) => (
        <Card
          key={index}
          className="overflow-hidden rounded-lg shadow-md group"
        >
          <div className="relative">
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover group-hover:opacity-50 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Link
                href="#"
                className="mr-4 text-white hover:text-primary"
                prefetch={false}
              >
                <Eye className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="text-white hover:text-primary"
                prefetch={false}
              >
                <Github className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <CardContent className="p-6">
            <CardTitle className="text-lg font-semibold">
              {project.title}
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              {project.description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
