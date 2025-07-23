import "./App.css";
import { Button } from "@/components/ui/button"

function App() {
  return (
    <>
      <h1 className="text-blue-500">Welcome</h1>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <Button variant="default">Click me</Button>
      </div>
    </>
  );
}

export default App;
