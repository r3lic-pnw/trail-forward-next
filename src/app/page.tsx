import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section
        id="mission-statement"
        className="flex flex-wrap items-stretch max-w-full">
        <Image
          src="https://1bpfird42eanbnd7.public.blob.vercel-storage.com/images/three-amigos.jpg"
          alt="Big Al"
          width={3000}
          height={4000}
          className="w-full md:w-7/12"
          priority></Image>
        <article className="w-full md:w-5/12 p-2 flex flex-col justify-center bg-green-950">
          <h2 className="pb-2 text-center text-[1.5em]">Mission Statement</h2>
          <p className="text-justify p-4">
            Our mission is to create a supportive outdoor adventure community
            for veterans and their families, as well as those who have
            experienced incarceration or addiction, offering a safe and healing
            place to reconnect with nature, rebuild self-worth, and foster
            meaningful connections. Through shared journeys on the trail, we aim
            to inspire growth, resilience, and hope for a healthier,
            purpose-driven future.
          </p>
        </article>
      </section>
      <section id="vision" className="flex flex-wrap items-stretch max-w-full">
        <article className="w-full order-2 md:order-1 md:w-5/12 p-2 flex flex-col justify-center bg-green-950">
          <h2 className="pb-2 text-center text-[1.5em]">Vision</h2>
          <p className="text-justify p-4">
            Our vision is to be a beacon of hope and healing for those seeking a
            fresh start. We envision a world where individuals can overcome
            their past, find strength in community, and embrace the
            transformative power of nature. Through our hiking events, we aim to
            cultivate a culture of respect, accountability, and mutual support,
            empowering each member to lead a value-driven life.
          </p>
        </article>
        <Image
          src="https://1bpfird42eanbnd7.public.blob.vercel-storage.com/images/man-in-trees.jpg"
          alt="A man standing on a log in between some trees."
          width={3000}
          height={4000}
          className="w-full md:w-7/12 order-1 md:order-2"></Image>
      </section>
      <section
        id="core-values"
        className="flex flex-wrap items-stretch max-w-full">
        <Image
          src="https://1bpfird42eanbnd7.public.blob.vercel-storage.com/images/big-al.jpg"
          alt="Big Al"
          width={3000}
          height={4000}
          className="w-full md:w-7/12"
          priority></Image>
        <article className="w-full md:w-5/12 p-2 flex flex-col justify-center bg-green-950">
          <h2 className="pb-2 text-center text-[1.5em]">Core Values</h2>
          <ul className="text-justify p-4">
            <li className="first-letter:text-amber-300 first-letter:mr-1 first-letter:text-xl first-line:tracking-widest">
              <strong>Respect:</strong> Foster a culture of respect, ensuring
              every member feels valued and heard.
            </li>
            <li className="first-letter:text-amber-300 first-letter:mr-1 first-letter:text-xl first-line:tracking-widest">
              <strong>Non-judgmental Space:</strong> Create a safe environment
              free from judgment, where personal experience and stories are
              shared openly and supportively.
            </li>
            <li className="first-letter:text-amber-300 first-letter:mr-1 first-letter:text-xl first-line:tracking-widest">
              <strong>Commitment to Sobriety During Events:</strong>
              Uphold a firm commitment to maintaining sobriety during all hiking
              events, ensuring a safe and supportive space for recovery.
            </li>
            <li className="first-letter:text-amber-300 first-letter:mr-1 first-letter:text-xl first-line:tracking-widest">
              <strong>Accountability and Mutual Respect:</strong>
              Encourage accountability and mutual support among members,
              fostering a community of trust and reliability.
            </li>
          </ul>
        </article>
      </section>
    </main>
  );
}
