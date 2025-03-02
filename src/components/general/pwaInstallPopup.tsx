import { X } from "lucide-react";
import { Button } from "../ui/button";

interface PwaInstallPopupProps {
  show: boolean;
  onClose: () => void;
  onInstall: () => void;
}

export default function PwaInstallPopup({
  show,
  onClose,
  onInstall,
}: PwaInstallPopupProps) {
  return (
    show && (
      <div className="fixed inset-0 flex justify-center items-center z-50">
        <div className="bg-white w-94 p-4 rounded-lg shadow-lg relative">
          <X
            className="absolute top-2 right-2 cursor-pointer"
            onClick={onClose}
          />
          <h2 className="text-lg font-semibold mb-2 text-black">
            Install the FydBox App
          </h2>

          <p className="text-sm mb-4 text-black">
            Click the button below to install the app on your device.
          </p>

          <div className="flex items-center justify-end">
            <Button onClick={onInstall}>Install</Button>
          </div>
        </div>

        <div
          className={`fixed inset-0 bg-gray-900 opacity-90 -z-10 ${
            show ? "backdrop-blur-sm" : ""
          }`}
          onClick={onClose}
        ></div>
      </div>
    )
  );
}
