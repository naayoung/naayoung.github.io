import { contact, profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-[1160px] flex-col gap-2 px-5 py-8 text-sm text-muted sm:flex-row sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.nameEn}.
        </p>
        <p className="font-mono text-xs sm:text-sm">{contact.footer}</p>
      </div>
    </footer>
  );
}
