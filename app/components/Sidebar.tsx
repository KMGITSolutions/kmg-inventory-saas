import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-800 text-white p-4">
      <h2 className="text-xl font-bold mb-6">
        KMG Inventory
      </h2>

      <nav className="flex flex-col gap-3">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/products">Products</Link>
        <Link href="/inventory">Inventory</Link>
        <Link href="/sales">Sales</Link>
      </nav>
    </aside>
  );
}