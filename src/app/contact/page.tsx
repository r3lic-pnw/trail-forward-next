import Image from "next/image";

export default function Page() {
  return (
    <main>
      <article
        id="big-al"
        className="p-4 text-xl flex flex-col items-center sm:flex-row sm:justify-evenly">
        <Image
          src="https://1bpfird42eanbnd7.public.blob.vercel-storage.com/logo.png"
          width={679}
          height={324}
          className="w-full max-w-4/12 h-auto"
          alt="placeholder"></Image>
        <div>
          <h2 className="text-[1.5em]">
            Allison <span className="text-amber-300">"Big Al"</span> Van Vogt
            III
          </h2>
          <ul>
            <li>
              <strong>Role:</strong> Founder & Community Organizer
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:al@trailforward.org">al@trailforward.org</a>
            </li>
            <li>
              <strong>Phone:</strong>{" "}
              <a href="tel:+5551234567">(555) 123-4567</a>
            </li>
          </ul>
        </div>
      </article>

      <article
        id="q"
        className="p-4 text-xl flex flex-col items-center sm:flex-row sm:justify-evenly">
        <Image
          src="https://1bpfird42eanbnd7.public.blob.vercel-storage.com/logo.png"
          width={679}
          height={324}
          className="w-full max-w-4/12 h-auto sm:order-2"
          alt="placeholder"></Image>
        <div className="sm:order-1">
          <h2 className="text-[1.5em]">
            Jarrell <span className="text-amber-300">"Q"</span> Quincy
          </h2>
          <ul>
            <li>
              <strong>Role:</strong> Chief Technical Officer
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:q@trailforward.org">q@trailforward.org</a>
            </li>
            <li>
              <strong>Phone:</strong>{" "}
              <a href="tel:+5551234567">(555) 123-4567</a>
            </li>
          </ul>
        </div>
      </article>
    </main>
  );
}
