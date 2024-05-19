// components/Modal.jsx
import React from "react";

export default function Modal({ closeModal }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className=" bg-gray-800 rounded-lg p-8 max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4  text-white">
          Qu&apos;est-ce que Spline 3D ?
        </h2>
        <p className="mb-4  text-gray-300">
          Spline est un outil de conception 3D qui permet aux utilisateurs de
          créer et de partager des expériences 3D interactives directement
          depuis leur navigateur. Avec Spline, vous pouvez concevoir des scènes
          3D, ajouter des interactions, et intégrer vos créations dans des sites
          web ou des applications.
        </p>
        <button
          onClick={closeModal}
          className=" transition duration-300 ease-in-out px-4 py-2 font-semibold text-white bg-red-500 rounded hover:bg-red-700"
        >
          Fermer
        </button>
      </div>
    </div>
  );
}
