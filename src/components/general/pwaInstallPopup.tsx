"use client";
import { X } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";



export default function PwaInstallPopup() {
  const [showInstallModal, setShowInstallModal] = useState<boolean>(false);
  const [prompt, setPrompt] = useState<any>(null);

  useEffect(() => {
    console.log("START");

    // ✅ Check if the app is already installed
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (navigator as any).standalone;

    if (isStandalone) {
      console.log("App is already installed.");
      return;
    }

    const handleBeforeInstallPrompt = (event: any) => {
      event.preventDefault();
      setPrompt(event);
      setShowInstallModal(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleCloseModal = () => {
    setShowInstallModal(false);
  };

  const handleInstall = () => {
    if (prompt) {
      prompt.prompt();
      prompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === "accepted") {
          console.log("ACCEPTED");
        } else {
          console.log("CANCELLED");
        }
        setPrompt(null);
        setShowInstallModal(false);
      });
    }
  };

  return (
    showInstallModal && (
      <div className="fixed inset-0 flex justify-center items-center z-50">
        <div className="bg-white w-94 p-4 rounded-lg shadow-lg relative">
          <X
            className="absolute top-2 right-2 cursor-pointer"
            onClick={handleCloseModal}
          />
          <h2 className="text-lg font-semibold mb-2 text-black">
            Install the FydBox App
          </h2>

          <p className="text-sm mb-4 text-black">
            Click the button below to install the app on your device.
          </p>

          <div className="flex items-center justify-end">
            <Button onClick={handleInstall}>Install</Button>
          </div>
        </div>

        <div
          className={`fixed inset-0 bg-gray-900 opacity-90 -z-10 ${
            showInstallModal ? "backdrop-blur-sm" : ""
          }`}
          onClick={handleCloseModal}
        ></div>
      </div>
    )
  );
}
