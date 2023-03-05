import { AuthenticatedRoute } from "@/components/Auth/AutheticatedRoute";
import { SatTest } from "../../components/SatTest";

const SatTestPage = () => {
  return (
    <AuthenticatedRoute>
      <SatTest />
    </AuthenticatedRoute>
  )
}

export default SatTestPage