import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-3 border-zinc-500 border-t-transparent rounded-full animate-spin" />
      </div>
    </div>
  );
};

export default Loading;
