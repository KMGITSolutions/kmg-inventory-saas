export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100">
      <div className="max-w-5xl mx-auto p-10">
        <h1 className="text-4xl font-bold text-blue-700">
          KMG Inventory SaaS
        </h1>

        <p className="mt-4 text-gray-600">
          Inventory Management System for Small Businesses
        </p>

        <div className="grid grid-cols-3 gap-4 mt-10">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="font-bold">Products</h2>
            <p>Manage products easily.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="font-bold">Inventory</h2>
            <p>Track stock in and stock out.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="font-bold">Sales</h2>
            <p>Monitor daily sales.</p>
          </div>
        </div>
      </div>
    </main>
  );
}