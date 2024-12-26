import Link from "next/link";
import { useState } from "react";

export default function Home() {
    const [nombres, setNombres] = useState("");
    const [apellidos, setApellidos] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/miembros/nuevo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nombre: nombres, apellido: apellidos }),
        });
        if (response.ok) {
            // Handle success
        } else {
            // Handle error
        }
    };

    return (
        <div>
            <Link href="/miembros" >
                <div className="flex mb-2">
                    <svg className="w-5 h-5 block-inline text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
                    </svg>
                    <p className="text-sm">
                        Atrás
                    </p>
                </div>
            </Link>
            <form onSubmit={handleSubmit}>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <h1 className="text-xl font-bold">Miembros</h1>
                    <div>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombres</label>
                        <input 
                            type="text" 
                            name="nombres" 
                            id="first_name" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="John" 
                            required 
                            value={nombres}
                            onChange={(e) => setNombres(e.target.value)}
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellidos</label>
                        <input 
                            type="text" 
                            name="apellidos" 
                            id="company" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Flowbite" 
                            required 
                            value={apellidos}
                            onChange={(e) => setApellidos(e.target.value)}
                        />
                    </div>  
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Registrar</button>
            </form>
        </div>
    );
}