import Link from "next/link";

export default function NavMenuItem({
  dest,
  displayText,
}: {
  dest: string;
  displayText: string;
}) {
  return (
    <Link
      href={dest}
      onMouseOver={(e) => {
        e.currentTarget.classList.add("bg-amber-900", "text-amber-300");
      }}
      onMouseOut={(e) => {
        e.currentTarget.classList.remove("bg-amber-900", "text-amber-300");
      }}
      className="w-full inline-block p-1">
      {displayText}
    </Link>
  );
}
