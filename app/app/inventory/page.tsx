export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <h1 className="text-3xl font-bold mb-6">
        Products
      </h1>

      <button className="bg-blue-600 text-white px-4 py-2 rounded mb-6">
        Add Product
      </button>

      <div className="bg-white rounded-lg shadow p-4">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Name</th>
              <th className="text-left">Price</th>
              <th className="text-left">Stock</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Coca Cola</td>
              <td>50</td>
              <td>100</td>
            </tr>
            <tr>
              <td>Pepsi</td>
              <td>45</td>
              <td>80</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}