import Link from "next/link";

export default function NavButton({ text }: { text: string }) {
  return (
    <li>
      <Link
        href={text === "Home" ? "/" : text.toLowerCase()}
        className="block rounded px-3 py-1 text-white hover:text-stone-400"
      >
        {text}
      </Link>
    </li>
  );
}
