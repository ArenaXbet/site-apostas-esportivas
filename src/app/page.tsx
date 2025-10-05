"use client"

import { useState } from 'react'
import { 
  Trophy, 
  Zap, 
  Star, 
  Play, 
  TrendingUp, 
  Users, 
  Shield, 
  Gift,
  ChevronRight,
  Menu,
  X
} from 'lucide-react'

export default function ArenaXbet() {
  const [activeTab, setActiveTab] = useState('esportes')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const esportes = [
    { nome: 'Futebol', icon: '⚽', jogos: 156, destaque: true },
    { nome: 'Basquete', icon: '🏀', jogos: 89 },
    { nome: 'Tênis', icon: '🎾', jogos: 67 },
    { nome: 'Vôlei', icon: '🏐', jogos: 34 },
    { nome: 'MMA', icon: '🥊', jogos: 23 },
    { nome: 'E-Sports', icon: '🎮', jogos: 45 },
  ]

  const jogosDestaque = [
    {
      time1: 'Flamengo',
      time2: 'Palmeiras',
      campeonato: 'Brasileirão',
      data: 'Hoje 16:00',
      odds: { '1': 2.10, 'X': 3.20, '2': 3.40 },
      ao_vivo: true
    },
    {
      time1: 'Real Madrid',
      time2: 'Barcelona',
      campeonato: 'La Liga',
      data: 'Amanhã 17:30',
      odds: { '1': 1.85, 'X': 3.60, '2': 4.20 }
    },
    {
      time1: 'Lakers',
      time2: 'Warriors',
      campeonato: 'NBA',
      data: 'Hoje 22:00',
      odds: { '1': 1.95, 'X': null, '2': 1.90 }
    }
  ]

  const jogosCassino = [
    { nome: 'Fortune Tiger', categoria: 'Slots', popular: true },
    { nome: 'Aviator', categoria: 'Crash', popular: true },
    { nome: 'Blackjack', categoria: 'Mesa' },
    { nome: 'Roleta Brasileira', categoria: 'Mesa' },
    { nome: 'Crazy Time', categoria: 'Show' },
    { nome: 'Sweet Bonanza', categoria: 'Slots' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/95 backdrop-blur-sm border-b border-blue-500/20 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-500 to-green-500 p-2 rounded-lg">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  ArenaXbet
                </h1>
                <p className="text-xs text-gray-400">Sua arena de vitórias</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => setActiveTab('esportes')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeTab === 'esportes' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                Esportes
              </button>
              <button 
                onClick={() => setActiveTab('cassino')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeTab === 'cassino' 
                    ? 'bg-green-600 text-white' 
                    : 'text-gray-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                Cassino
              </button>
              <button className="text-gray-300 hover:text-white transition-colors">
                Ao Vivo
              </button>
              <button className="text-gray-300 hover:text-white transition-colors">
                Promoções
              </button>
            </nav>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="px-6 py-2 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition-all">
                Entrar
              </button>
              <button className="px-6 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:from-green-600 hover:to-blue-600 transition-all">
                Cadastrar
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-slate-800 border-t border-blue-500/20 py-4">
              <div className="flex flex-col space-y-2">
                <button 
                  onClick={() => {setActiveTab('esportes'); setMobileMenuOpen(false)}}
                  className="text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded"
                >
                  Esportes
                </button>
                <button 
                  onClick={() => {setActiveTab('cassino'); setMobileMenuOpen(false)}}
                  className="text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded"
                >
                  Cassino
                </button>
                <button className="text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded">
                  Ao Vivo
                </button>
                <button className="text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded">
                  Promoções
                </button>
                <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-slate-700">
                  <button className="px-4 py-2 border border-blue-500 text-blue-400 rounded-lg">
                    Entrar
                  </button>
                  <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg">
                    Cadastrar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20 backdrop-blur-3xl"></div>
        <div className="relative container mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Bem-vindo à <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">ArenaXbet</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            A melhor experiência em apostas esportivas e cassino online. Odds competitivas, pagamentos rápidos e diversão garantida!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl font-semibold hover:from-green-600 hover:to-blue-600 transition-all transform hover:scale-105">
              <Gift className="inline-block w-5 h-5 mr-2" />
              Cadastre-se e Ganhe Bônus
            </button>
            <button className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-xl font-semibold hover:bg-blue-500 hover:text-white transition-all">
              <Play className="inline-block w-5 h-5 mr-2" />
              Ver Jogos ao Vivo
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {activeTab === 'esportes' && (
          <div className="space-y-8">
            {/* Sports Categories */}
            <section>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Trophy className="w-6 h-6 mr-2 text-yellow-500" />
                Modalidades Esportivas
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {esportes.map((esporte, index) => (
                  <div 
                    key={index}
                    className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 text-center hover:border-blue-500 transition-all cursor-pointer group ${
                      esporte.destaque ? 'ring-2 ring-yellow-500/50' : ''
                    }`}
                  >
                    <div className="text-3xl mb-2">{esporte.icon}</div>
                    <h4 className="text-white font-semibold mb-1">{esporte.nome}</h4>
                    <p className="text-gray-400 text-sm">{esporte.jogos} jogos</p>
                    {esporte.destaque && (
                      <div className="mt-2">
                        <span className="bg-yellow-500 text-black text-xs px-2 py-1 rounded-full font-bold">
                          POPULAR
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Featured Games */}
            <section>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Zap className="w-6 h-6 mr-2 text-blue-500" />
                Jogos em Destaque
              </h3>
              <div className="space-y-4">
                {jogosDestaque.map((jogo, index) => (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition-all">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-gray-400 text-sm">{jogo.campeonato}</span>
                          {jogo.ao_vivo && (
                            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold animate-pulse">
                              AO VIVO
                            </span>
                          )}
                        </div>
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-white font-bold text-lg">{jogo.time1} vs {jogo.time2}</h4>
                          <span className="text-gray-400 text-sm">{jogo.data}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="bg-slate-700 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all min-w-[60px]">
                          <div className="text-xs text-gray-300">1</div>
                          <div className="font-bold">{jogo.odds['1']}</div>
                        </button>
                        {jogo.odds.X && (
                          <button className="bg-slate-700 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all min-w-[60px]">
                            <div className="text-xs text-gray-300">X</div>
                            <div className="font-bold">{jogo.odds.X}</div>
                          </button>
                        )}
                        <button className="bg-slate-700 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all min-w-[60px]">
                          <div className="text-xs text-gray-300">2</div>
                          <div className="font-bold">{jogo.odds['2']}</div>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'cassino' && (
          <div className="space-y-8">
            {/* Casino Games */}
            <section>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Star className="w-6 h-6 mr-2 text-yellow-500" />
                Jogos de Cassino
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jogosCassino.map((jogo, index) => (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-green-500 transition-all cursor-pointer group">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-white font-bold text-lg">{jogo.nome}</h4>
                      {jogo.popular && (
                        <span className="bg-yellow-500 text-black text-xs px-2 py-1 rounded-full font-bold">
                          HOT
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 mb-4">{jogo.categoria}</p>
                    <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all group-hover:scale-105">
                      Jogar Agora
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Casino Categories */}
            <section>
              <h3 className="text-2xl font-bold text-white mb-6">Categorias</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Slots', 'Mesa', 'Crash', 'Show'].map((categoria, index) => (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:border-green-500 transition-all cursor-pointer">
                    <h4 className="text-white font-semibold mb-2">{categoria}</h4>
                    <ChevronRight className="w-5 h-5 text-gray-400 mx-auto" />
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Stats Section */}
      <section className="bg-slate-800/30 backdrop-blur-sm py-16 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">500K+</div>
              <div className="text-gray-400">Usuários Ativos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">R$ 50M+</div>
              <div className="text-gray-400">Pagos em Prêmios</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">10K+</div>
              <div className="text-gray-400">Jogos Disponíveis</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-400">Suporte Online</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-green-500 p-2 rounded-lg">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  ArenaXbet
                </h3>
              </div>
              <p className="text-gray-400 mb-4">
                A melhor plataforma de apostas esportivas e cassino online do Brasil.
              </p>
              <div className="flex items-center space-x-2 text-gray-400">
                <Shield className="w-4 h-4" />
                <span className="text-sm">Licenciado e Seguro</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Esportes</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Futebol</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Basquete</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tênis</a></li>
                <li><a href="#" className="hover:text-white transition-colors">E-Sports</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Cassino</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Slots</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mesa</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Crash Games</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ao Vivo</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Chat ao Vivo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Jogo Responsável</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ArenaXbet. Todos os direitos reservados. | +18 | Jogue com responsabilidade</p>
          </div>
        </div>
      </footer>
    </div>
  )
}