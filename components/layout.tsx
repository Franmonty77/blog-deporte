// Importamos react
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
    return(
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <header className='bg-white shadow-md py-4 px-6'>
            <div className='max-w-4xl mx-auto flex justify-between items-center'>
                <h1 className='text-xl font-bold'>Blog Deportivo</h1>
                <nav className='space-x-4'>
                    <a href='/' className='hover:underline'>Inicio</a>
                    <a href='/sobre-mi' className='hover:underline'>Sobre mi</a>
                </nav>
            </div>
        </header>
        <main className='flex-1 max-w-4xl mx-auto px-6 py-8'>{children}</main>
        <footer className='bg-white text-center py-4 text-sm text-gray-500'>
        © {new Date().getFullYear()} Blog Deportivo
        </footer>
    </div>

    );
}