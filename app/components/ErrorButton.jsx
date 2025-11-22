"use client";
export default function ErrorBud(){
    return(
    <button
        onClick={() => window.location.reload()}
        className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded transition"
    >
        Retry
    </button>
    )
}