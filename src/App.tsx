import WithLayout from "./components/common/layout/WithLayout";
import { ThemeProvider } from "./components/utils/providers/ThemeProvider";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <ThemeProvider>
      <WithLayout>
        <AppRoutes />
      </WithLayout>
    </ThemeProvider>
  );
}

export default App;
