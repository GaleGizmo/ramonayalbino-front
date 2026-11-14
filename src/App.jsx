import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";
import RamonayAlbinoDesktop from "./assets/background-horizontal.jpg";
import RamonayAlbinoMobile from "./assets/background-vertical.jpg";
import Poster from "./components/poster/Poster";
import Header from "./components/header/Header";
import RegisterModal from "./components/register/RegisterModal";
import { getSession, saveSession } from "./hooks/useSession";

function App() {
  const [session, setSession] = useState(null);
  const [registerActive, setRegisterActive] = useState(false);

  useEffect(() => {
    setSession(getSession());
  }, []);

   function handleAuthSuccess(guest) {
    saveSession(guest);
    setSession(guest);
    setRegisterActive(false);
  }

  function handleTicketsClick() {
    if (!session) {
      setRegisterActive(true);
      // setActiveModal('soldout')
    } else {
      toast.error("¡Ya tienes entrada! ¿¿Cuantas más quieres??");
    }
  }
  return (
    <>
      <Toaster position="top-center" />
      <main className="main-page">
        <picture>
          <source media="(min-width: 768px)" srcSet={RamonayAlbinoDesktop} />
          <img
            src={RamonayAlbinoMobile}
            alt="Ilustración de una página en construcción"
            className="app-background"
          />
        </picture>
        <Header onTicketsClick={handleTicketsClick}></Header>
        {!registerActive ? (
          <Poster></Poster>
        ) : (
          <RegisterModal
            onSubmit={handleAuthSuccess}
            onClose={() => setRegisterActive(false)}
          />
        )}
      </main>
    </>
  );
}

export default App;
