"use client";
import { useState } from "react";
import Spline from "../components/spline";
import Modal from "../components/Modal"; // Assurez-vous de créer ce composant

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main>
      <h1 className="text-center my-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Démonstration de l&apos;outil 3D{" "}
        <a
          href="https://spline.design"
          className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:underline"
        >
          Spline
        </a>
      </h1>

      <div className="spline m-8 rounded-3xl h-">
        <Spline />
      </div>
      <div className="text-center my-4">
        <button
          onClick={openModal}
          className="px-4 py-2 font-semibold text-white bg-purple-500 transition duration-300 ease-in-out  rounded hover:bg-purple-700 "
        >
          Qu&apos;est ce que Spline ?
        </button>
      </div>
      {isModalOpen && <Modal closeModal={closeModal} />}
    </main>
  );
}
