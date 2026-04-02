import Carousel from "@/components/Carousel";
import { supabase } from "@/lib/supabase";

export default async function Page() {
  const { data: images } = await supabase.from("images").select("*");

  return (
    <main className="h-full">
      <Carousel images={images ?? []} />
    </main>
  );
}
