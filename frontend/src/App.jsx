import "./index.css";

function App() {
  return (
    <main className="app-shell">
      <section className="welcome-card">
        <p className="eyebrow">Kaha MVP</p>

        <h1>Kaha frontend is running</h1>

        <p className="description">
          Responsive sales, inventory, and profit tracking for sari-sari stores.
        </p>

        <div className="status-box">
          <span className="status-dot"></span>
          <span>React + Vite setup successful</span>
        </div>
      </section>
    </main>
  );
}

export default App;
