'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
  const [cuid, setCuid] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = async () => {
    if (!cuid || !password) {
      setError("Tous les champs sont obligatoires.")
      return
    }

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ cuid, password })
    })

    const data = await res.json()

    if (data.success) {
      router.push('/admin/dashboard')
    } else {
      setError(data.error || "Erreur inconnue")
    }
  }


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950 px-4">
      <div className="w-full max-w-md bg-gray-900 border border-gray-800 p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">Connexion Admin</h1>

        <div className="mb-4">
          <label className="block text-sm text-gray-400 mb-1">CUID</label>
          <input
            type="text"
            value={cuid}
            onChange={(e) => setCuid(e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring focus:ring-blue-600"
            placeholder="Ex: admin123"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm text-gray-400 mb-1">Mot de passe</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring focus:ring-blue-600"
            placeholder="••••••••••"
          />
        </div>

        {error && (
          <div className="mb-4 p-3 text-sm text-red-400 bg-red-800/30 border border-red-500/30 rounded">
            {error}
          </div>
        )}

        <button
          onClick={handleLogin}
          className="w-full py-2 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded text-white font-semibold transition-all"
        >
          Se connecter
        </button>
      </div>
    </div>
  )
}
