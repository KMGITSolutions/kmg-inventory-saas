export default function InventoryPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <h1 className="text-3xl font-bold mb-6">
        Inventory Management
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="bg-white p-5 rounded-lg shadow">
          <h2 className="font-semibold">Stock In Today</h2>
          <p className="text-3xl font-bold">25</p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow">
          <h2 className="font-semibold">Stock Out Today</h2>
          <p className="text-3xl font-bold">18</p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow">
          <h2 className="font-semibold">Low Stock Items</h2>
          <p className="text-3xl font-bold">5</p>
        </div>

      </div>

      <div className="bg-white rounded-lg shadow p-4 mt-6">
        <h2 className="font-bold mb-4">Inventory List</h2>

        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Product</th>
              <th className="text-left">Quantity</th>
              <th className="text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Coca Cola</td>
              <td>100</td>
              <td>In Stock</td>
            </tr>

            <tr>
              <td>Pepsi</td>
              <td>10</td>
              <td>Low Stock</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}