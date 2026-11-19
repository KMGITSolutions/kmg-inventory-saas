export default function SalesPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <h1 className="text-3xl font-bold mb-6">
        Sales Management
      </h1>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-5 rounded-lg shadow">
          <h2>Today's Sales</h2>
          <p className="text-3xl font-bold">15000</p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow">
          <h2>Total Orders</h2>
          <p className="text-3xl font-bold">40</p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow">
          <h2>Revenue</h2>
          <p className="text-3xl font-bold">250000</p>
        </div>
      </div>

      <div className="bg-white p-5 rounded-lg shadow">
        <h2 className="font-bold mb-4">Recent Sales</h2>

        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Product</th>
              <th className="text-left">Qty</th>
              <th className="text-left">Amount</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Coca Cola</td>
              <td>10</td>
              <td>500</td>
            </tr>

            <tr>
              <td>Pepsi</td>
              <td>5</td>
              <td>225</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}