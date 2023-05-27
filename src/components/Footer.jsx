import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="h-[60px] bg-gray-200 text-black flex items-center gap-4 p-4 ">
      <Logo />
      <div className="text-sm">
        DILKHUSH RAJ &copy; 2023 ALL RIGHTS RESERVED
      </div>
    </footer>
  );
}
