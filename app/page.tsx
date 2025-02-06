//import { Footer } from "@/components/footer";
import Hero from "@/components/hero";
import { ToolsGrid } from "@/components/grid/tools-grid";
import { toolsList } from "@/lib/tools";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ToolsGrid tools={toolsList} />
    </main>
    // <div className="min-h-screen flex flex-col">
    //   {/* <Header /> */}
    //   <main className="flex-1">
    //     <section className="py-12">
    //       <div className="container flex flex-col items-center text-center max-w-3xl">
    //         <h1 className="text-6xl font-medium tracking-tight mb-5">BlackTools</h1>
    //         <p className="text-xl font-normal">Coleção de ferramentas para escalar a sua operação!</p>
    //       </div>
    //     </section>
    //     <section className="py-12">
    //       <div className="container">
    //         <ToolGrid />
    //       </div>
    //     </section>
    //   </main>
    //   {/* <Footer /> */}
    // </div>
  );
}
