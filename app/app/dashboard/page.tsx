export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <h1 className="text-3xl font-bold mb-6">
        KMG Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        <div className="bg-white p-5 rounded-lg shadow">
          <h2 className="font-semibold">Total Products</h2>
          <p className="text-3xl font-bold">120</p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow">
          <h2 className="font-semibold">Today's Sales</h2>
          <p className="text-3xl font-bold">15000</p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow">
          <h2 className="font-semibold">Low Stock</h2>
          <p className="text-3xl font-bold">5</p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow">
          <h2 className="font-semibold">Customers</h2>
          <p className="text-3xl font-bold">89</p>
        </div>

      </div>
    </main>
  );
}