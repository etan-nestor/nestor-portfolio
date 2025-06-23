
'use client'

export default function DashboardPage() {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-6">Tableau de bord</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Statistiques */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-gray-400 text-sm mb-2">Projets</h3>
            <p className="text-2xl font-bold">24</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-gray-400 text-sm mb-2">Terminés</h3>
            <p className="text-2xl font-bold">18</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-gray-400 text-sm mb-2">En cours</h3>
            <p className="text-2xl font-bold">5</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-gray-400 text-sm mb-2">Arrêtés</h3>
            <p className="text-2xl font-bold">1</p>
          </div>
        </div>
  
        {/* Derniers projets */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Derniers projets</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4">Titre</th>
                  <th className="text-left py-3 px-4">Client</th>
                  <th className="text-left py-3 px-4">Statut</th>
                  <th className="text-left py-3 px-4">Date</th>
                </tr>
              </thead>
              <tbody>
                {/* Ici vous pourriez mapper sur les derniers projets */}
                <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                  <td className="py-3 px-4">Site Corporatif</td>
                  <td className="py-3 px-4">OpenNumeric</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 rounded-full text-xs bg-green-600/20 text-green-400">
                      Terminé
                    </span>
                  </td>
                  <td className="py-3 px-4">15/06/2023</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }