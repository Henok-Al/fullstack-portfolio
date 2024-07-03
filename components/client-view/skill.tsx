import { Hash, Codepen, Network, Wind } from "lucide-react"; // Importing icons from lucide-react

export default function Skill() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="skill">
      <div className="container grid max-w-5xl items-center justify-center gap-8 px-4 text-center md:px-6 lg:grid-cols-2 lg:text-left xl:max-w-6xl">
        <div className="space-y-4 md:space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are the key skills I've developed through my experience as a web developer.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:gap-8">
          <div className="flex flex-col items-center gap-2">
            <div className="bg-muted rounded-full p-4 flex items-center justify-center">
              <Hash className="w-8 h-8" />
            </div>
            <span className="text-sm font-medium">HTML</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="bg-muted rounded-full p-4 flex items-center justify-center">
              <Codepen className="w-8 h-8" />
            </div>
            <span className="text-sm font-medium">CSS</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="bg-muted rounded-full p-4 flex items-center justify-center">
              <Codepen className="w-8 h-8" />
            </div>
            <span className="text-sm font-medium">JavaScript</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="bg-muted rounded-full p-4 flex items-center justify-center">
              <Codepen className="w-8 h-8" />
            </div>
            <span className="text-sm font-medium">React</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="bg-muted rounded-full p-4 flex items-center justify-center">
              <Network className="w-8 h-8" />
            </div>
            <span className="text-sm font-medium">Node.js</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="bg-muted rounded-full p-4 flex items-center justify-center">
              <Wind className="w-8 h-8" />
            </div>
            <span className="text-sm font-medium">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
