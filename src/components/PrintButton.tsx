"use client";

export default function PrintButton() {
  return (
    <div id="export-pdf-btn" className="fixed top-4 right-4 z-50 print:hidden">
      <button
        onClick={() => window.print()}
        className="bg-gray-900 text-white text-sm px-4 py-2 rounded-md shadow-md hover:bg-gray-700 active:bg-gray-800 transition-colors cursor-pointer"
      >
        Export PDF
      </button>
    </div>
  );
}
