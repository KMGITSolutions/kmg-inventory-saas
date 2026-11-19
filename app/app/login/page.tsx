export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-8 rounded-lg shadow w-96">
        <h1 className="text-2xl font-bold mb-4">
          KMG Inventory Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-3 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-3 rounded"
        />

        <button className="w-full bg-blue-600 text-white p-2 rounded">
          Login
        </button>
      </div>
    </main>
  );
}