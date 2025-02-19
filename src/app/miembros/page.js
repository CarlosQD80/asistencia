"use client"
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
    const [miembros, setMiembros] = useState([]);

    useEffect(() => {
        const fetchMiembros = async () => {
            const response = await fetch('/api/miembros');
            const data = await response.json();
            setMiembros(Array.isArray(data) ? data : []);
        };
        fetchMiembros();
    }, []);

    return (
        <div>
            <div className="w-full flex gap-2">
                <div className="flex w-full">
                    <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
                    <div className="relative w-full">
                        <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Buscar..." required />
                        <button type="submit" className="absolute top-0 end-0 p-2.5 py-3 text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </div>
                </div>
                <Link href="/miembros/nuevo">
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 text-nowrap py-3 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Agregar Nuevo</button>
                </Link>
            </div>
            <div className="relative overflow-x-auto mt-4 shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Nombres</th>
                            <th scope="col" className="px-6 py-3">Apellidos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(miembros) ? miembros.map((miembro) => (
                            <tr key={miembro.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {miembro.nombre}
                                </th>
                                <td className="px-6 py-4">
                                    {miembro.apellido}
                                </td>
                            </tr>
                        )) : null}
                    </tbody>
                </table>
            </div>
        </div>
    );
}