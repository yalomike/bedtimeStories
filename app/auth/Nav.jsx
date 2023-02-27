import Login from "./login";

export default function Nav() {
  return (
    <div className="bg-slate-400">
      <nav className="flex-justify-between items-center py-5">
        <ul className="flex items-center gap-6 text-center">
          <Login />
        </ul>
      </nav>
    </div>
  );
}
