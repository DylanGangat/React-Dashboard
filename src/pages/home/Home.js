// Styles
import "./Home.scss";

// Components
import Sidebar from "../../components/Sidebar";
import Title from "../../components/Title";
import Accounts from "../../components/Accounts";
import DetailsHub from "../../components/DetailsHub";

export default function Home() {
  return (
    <div className="dashboard-grid">
      <aside>
        <Sidebar />
      </aside>

      <main>
        {/* Column 1 */}
        <Title />

        {/* Column 2 */}
        <Accounts />

        {/* Column 3 */}
        <DetailsHub />
      </main>
    </div>
  );
}
