import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import { HomePage } from "./containers/homePage";
import { Footer } from "./components/footer";
import { Login } from "./containers/login";
import { Register } from "./containers/register";
import { Error } from "./containers/error";
import { Automation } from "./containers/automations";
import PrivateRoutes from "./utils/privateRoutes";
import { PhysicsAI, PhysicsAI_2 } from "./containers/physicsAI";
import { Loader } from "./components/loader";
import { SinglePractical } from "./containers/singlePractical";
import { SinglePerformer } from "./containers/singlePerformer";
import { PricesPage } from "./containers/pricesPage";
import { SinglePlan } from "./containers/singlePlan";
import {
  ExperimentM1,
  ExperimentM2,
  ExperimentM3,
  ExperimentM4,
  ExperimentM5,
  ExperimentM6,
  ExperimentM7,
  ExperimentM9,
  ExperimentM10,
  ExperimentM11,
  ExperimentM12,
  ExperimentL1,
  ExperimentL2,
  ExperimentL3,
  ExperimentL4,
  ExperimentL5,
  ExperimentL6,
  ExperimentL7,
  ExperimentS1,
  ExperimentS2,
  ExperimentS4,
  ExperimentS5,
  ExperimentE2,
  ExperimentE3,
  ExperimentE5,
  ExperimentE6,
  ExperimentE7,
} from "./containers/firSemPhy";
import SecureRoutes from "./utils/secureRoutes";
import { Legal } from "./containers/legal";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      true;
      setLoading(false);
    }, 3000);
  });

  if (loading) {
    return <Loader />;
  } else {
    return (
      <>
        <Topbar />

        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<SecureRoutes />}>
              <Route
                path="/automation/physicsAI/:id"
                element={<SinglePractical />}
              />
              <Route
                path="/automation/physicsAI/experimentM1/:id"
                element={<ExperimentM1 />}
              />
              <Route
                path="/automation/physicsAI/experimentM2/:id"
                element={<ExperimentM2 />}
              />
              <Route
                path="/automation/physicsAI/experimentM3/:id"
                element={<ExperimentM3 />}
              />
              <Route
                path="/automation/physicsAI/experimentM4/:id"
                element={<ExperimentM4 />}
              />
              <Route
                path="/automation/physicsAI/experimentM5/:id"
                element={<ExperimentM5 />}
              />
              <Route
                path="/automation/physicsAI/experimentM6/:id"
                element={<ExperimentM6 />}
              />
              <Route
                path="/automation/physicsAI/experimentM7/:id"
                element={<ExperimentM7 />}
              />
              <Route
                path="/automation/physicsAI/experimentM9/:id"
                element={<ExperimentM9 />}
              />
              <Route
                path="/automation/physicsAI/experimentM10/:id"
                element={<ExperimentM10 />}
              />
              <Route
                path="/automation/physicsAI/experimentM11/:id"
                element={<ExperimentM11 />}
              />
              <Route
                path="/automation/physicsAI/experimentM12/:id"
                element={<ExperimentM12 />}
              />
              <Route
                path="/automation/physicsAI/experimentL1/:id"
                element={<ExperimentL1 />}
              />
              <Route
                path="/automation/physicsAI/experimentL2/:id"
                element={<ExperimentL2 />}
              />
              <Route
                path="/automation/physicsAI/experimentL3/:id"
                element={<ExperimentL3 />}
              />
              <Route
                path="/automation/physicsAI/experimentL4/:id"
                element={<ExperimentL4 />}
              />
              <Route
                path="/automation/physicsAI/experimentL5/:id"
                element={<ExperimentL5 />}
              />
              <Route
                path="/automation/physicsAI/experimentL6/:id"
                element={<ExperimentL6 />}
              />
              <Route
                path="/automation/physicsAI/experimentL7/:id"
                element={<ExperimentL7 />}
              />
              <Route
                path="/automation/physicsAI/experimentS1/:id"
                element={<ExperimentS1 />}
              />
              <Route
                path="/automation/physicsAI/experimentS2/:id"
                element={<ExperimentS2 />}
              />
              <Route
                path="/automation/physicsAI/experimentS4/:id"
                element={<ExperimentS4 />}
              />
              <Route
                path="/automation/physicsAI/experimentS5/:id"
                element={<ExperimentS5 />}
              />
              <Route
                path="/automation/physicsAI/experimentE2/:id"
                element={<ExperimentE2 />}
              />
              <Route
                path="/automation/physicsAI/experimentE3/:id"
                element={<ExperimentE3 />}
              />
              <Route
                path="/automation/physicsAI/experimentE5/:id"
                element={<ExperimentE5 />}
              />
              <Route
                path="/automation/physicsAI/experimentE6/:id"
                element={<ExperimentE6 />}
              />
              <Route
                path="/automation/physicsAI/experimentE7/:id"
                element={<ExperimentE7 />}
              />
            </Route>
          </Route>
          <Route path="/home" element={<HomePage />} />
            <Route path="/automation/physicsAI" element={<PhysicsAI />} />
            <Route path="/automation" element={<Automation />} />
            <Route path="/automation/physicsAI_2" element={<PhysicsAI_2 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/performers/:id" element={<SinglePerformer />} />
          <Route path="/register" element={<Register />} />
          <Route path="/plans" element={<PricesPage />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/plans/:id" element={<SinglePlan />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Error />} />
        </Routes>

        <Footer />
      </>
    );
  }
}

export default App;
