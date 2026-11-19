import Sidebar from "../../components/Sidebar";

export default function DashboardPage() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-6 bg-slate-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">
          KMG Dashboard
        </h1>

        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-lg shadow">
            <h2>Total Products</h2>
            <p className="text-3xl font-bold">120</p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow">
            <h2>Today's Sales</h2>
            <p className="text-3xl font-bold">15000</p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow">
            <h2>Low Stock</h2>
            <p className="text-3xl font-bold">5</p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow">
            <h2>Customers</h2>
            <p className="text-3xl font-bold">89</p>
          </div>
        </div>
      </main>
    </div>
  );
}