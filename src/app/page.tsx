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
  X,
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Phone,
  ArrowLeft,
  CheckCircle,
  Loader
} from 'lucide-react'

export default function ArenaXbet() {
  const [activeTab, setActiveTab] = useState('esportes')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [loginModalOpen, setLoginModalOpen] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [isRegisterMode, setIsRegisterMode] = useState(false)
  const [isForgotPasswordMode, setIsForgotPasswordMode] = useState(false)
  const [isCodeVerificationMode, setIsCodeVerificationMode] = useState(false)
  const [isPhoneVerificationMode, setIsPhoneVerificationMode] = useState(false)
  const [isRegistrationComplete, setIsRegistrationComplete] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  })
  const [registerForm, setRegisterForm] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: ''
  })
  const [forgotPasswordForm, setForgotPasswordForm] = useState({
    phone: ''
  })
  const [verificationForm, setVerificationForm] = useState({
    code: ''
  })
  const [phoneVerificationForm, setPhoneVerificationForm] = useState({
    code: ''
  })
  const [generatedCode, setGeneratedCode] = useState('')
  const [phoneVerificationCode, setPhoneVerificationCode] = useState('')

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

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode adicionar a lógica de autenticação
    console.log('Login attempt:', loginForm)
    // Fechar modal após login (simulado)
    setLoginModalOpen(false)
    setLoginForm({ email: '', password: '' })
  }

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    
    try {
      // Simular salvamento no banco de dados
      console.log('Salvando cadastro no banco de dados:', registerForm)
      await new Promise(resolve => setTimeout(resolve, 2000)) // Simular delay da API
      
      // Gerar código de verificação do celular
      const phoneCode = Math.floor(100000 + Math.random() * 900000).toString()
      setPhoneVerificationCode(phoneCode)
      
      // Simular envio do código para o celular
      console.log(`Código de verificação ${phoneCode} enviado para: ${registerForm.phone}`)
      
      // Simular envio de email de boas-vindas
      console.log(`Email de boas-vindas enviado para: ${registerForm.email}`)
      
      // Mostrar código para demonstração (em produção seria enviado via SMS)
      alert(`Cadastro salvo! Código enviado para ${registerForm.phone}: ${phoneCode}\n\nEmail de boas-vindas enviado para: ${registerForm.email}`)
      
      // Ir para verificação do celular
      setIsPhoneVerificationMode(true)
      
    } catch (error) {
      console.error('Erro no cadastro:', error)
      alert('Erro ao processar cadastro. Tente novamente.')
    } finally {
      setIsProcessing(false)
    }
  }

  const handleForgotPasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Gerar código aleatório de 6 dígitos
    const code = Math.floor(100000 + Math.random() * 900000).toString()
    setGeneratedCode(code)
    
    // Simular envio do código
    console.log(`Código ${code} enviado para o número: ${forgotPasswordForm.phone}`)
    alert(`Código de verificação enviado para ${forgotPasswordForm.phone}: ${code}`)
    
    // Ir para tela de verificação
    setIsCodeVerificationMode(true)
  }

  const handleCodeVerificationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (verificationForm.code === generatedCode) {
      alert('Código verificado com sucesso! Você pode redefinir sua senha.')
      // Aqui você redirecionaria para tela de redefinir senha
      resetForgotPasswordFlow()
    } else {
      alert('Código incorreto. Tente novamente.')
    }
  }

  const handlePhoneVerificationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (phoneVerificationForm.code === phoneVerificationCode) {
      // Verificação bem-sucedida
      setIsRegistrationComplete(true)
      
      // Simular finalização do cadastro
      setTimeout(() => {
        alert('Cadastro concluído com sucesso! Bem-vindo à ArenaXbet!')
        resetRegistrationFlow()
      }, 2000)
    } else {
      alert('Código incorreto. Tente novamente.')
    }
  }

  const openRegisterMode = () => {
    setIsRegisterMode(true)
  }

  const backToLogin = () => {
    setIsRegisterMode(false)
    setIsForgotPasswordMode(false)
    setIsCodeVerificationMode(false)
    setIsPhoneVerificationMode(false)
    setIsRegistrationComplete(false)
  }

  const openForgotPassword = () => {
    setIsForgotPasswordMode(true)
  }

  const resetForgotPasswordFlow = () => {
    setIsForgotPasswordMode(false)
    setIsCodeVerificationMode(false)
    setForgotPasswordForm({ phone: '' })
    setVerificationForm({ code: '' })
    setGeneratedCode('')
    setLoginModalOpen(false)
  }

  const resetRegistrationFlow = () => {
    setIsRegisterMode(false)
    setIsPhoneVerificationMode(false)
    setIsRegistrationComplete(false)
    setRegisterForm({ fullName: '', email: '', password: '', phone: '' })
    setPhoneVerificationForm({ code: '' })
    setPhoneVerificationCode('')
    setLoginModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Login/Register Modal */}
      {loginModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-2xl border border-slate-700 w-full max-w-md relative">
            {/* Close Button */}
            <button
              onClick={() => {
                setLoginModalOpen(false)
                setIsRegisterMode(false)
                setIsForgotPasswordMode(false)
                setIsCodeVerificationMode(false)
                setIsPhoneVerificationMode(false)
                setIsRegistrationComplete(false)
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Header */}
            <div className="p-6 border-b border-slate-700">
              <div className="flex items-center space-x-3 mb-2">
                {(isRegisterMode || isForgotPasswordMode || isCodeVerificationMode || isPhoneVerificationMode) && !isRegistrationComplete && (
                  <button
                    onClick={backToLogin}
                    className="text-gray-400 hover:text-white transition-colors mr-2"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                )}
                <div className="bg-gradient-to-r from-blue-500 to-green-500 p-2 rounded-lg">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  ArenaXbet
                </h2>
              </div>
              <p className="text-gray-400">
                {isRegistrationComplete
                  ? 'Cadastro finalizado com sucesso!'
                  : isPhoneVerificationMode
                    ? 'Verificar número do celular'
                    : isRegisterMode 
                      ? 'Crie sua conta e comece a ganhar!' 
                      : isForgotPasswordMode 
                        ? 'Recuperar senha'
                        : isCodeVerificationMode
                          ? 'Verificar código'
                          : 'Entre na sua conta e comece a apostar!'
                }
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {isRegistrationComplete ? (
                // Registration Complete
                <div className="text-center space-y-6">
                  <div className="flex justify-center">
                    <div className="bg-green-500/20 p-4 rounded-full">
                      <CheckCircle className="w-16 h-16 text-green-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Bem-vindo à ArenaXbet!</h3>
                    <p className="text-gray-400">
                      Seu cadastro foi concluído com sucesso. Você já pode começar a apostar e aproveitar nossos bônus!
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Gift className="w-5 h-5 text-green-400" />
                      <span className="text-green-400 font-semibold">Bônus Ativado!</span>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Seu bônus de <span className="text-green-400 font-bold">R$ 500</span> + <span className="text-blue-400 font-bold">50 giros grátis</span> está disponível!
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <Loader className="w-8 h-8 text-blue-400 animate-spin" />
                  </div>
                </div>
              ) : isPhoneVerificationMode ? (
                // Phone Verification Form
                <form onSubmit={handlePhoneVerificationSubmit} className="space-y-4">
                  <div className="text-center mb-6">
                    <Phone className="w-12 h-12 text-green-400 mx-auto mb-3" />
                    <h3 className="text-white font-semibold mb-2">Verificar Celular</h3>
                    <p className="text-gray-400 text-sm">
                      Digite o código de 6 dígitos enviado para<br />
                      <span className="text-green-400 font-medium">{registerForm.phone}</span>
                    </p>
                  </div>

                  {/* Phone Code Field */}
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Código de Verificação
                    </label>
                    <div className="relative">
                      <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        value={phoneVerificationForm.code}
                        onChange={(e) => setPhoneVerificationForm({...phoneVerificationForm, code: e.target.value})}
                        className="w-full bg-slate-700 border border-slate-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-colors text-center text-2xl tracking-widest"
                        placeholder="000000"
                        maxLength={6}
                        required
                      />
                    </div>
                  </div>

                  {/* Verify Phone Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all transform hover:scale-105"
                  >
                    <CheckCircle className="inline-block w-5 h-5 mr-2" />
                    Confirmar Celular
                  </button>

                  {/* Resend Code */}
                  <div className="text-center">
                    <button
                      type="button"
                      onClick={() => {
                        const newCode = Math.floor(100000 + Math.random() * 900000).toString()
                        setPhoneVerificationCode(newCode)
                        alert(`Novo código enviado: ${newCode}`)
                      }}
                      className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
                    >
                      Reenviar código
                    </button>
                  </div>
                </form>
              ) : !isRegisterMode && !isForgotPasswordMode && !isCodeVerificationMode ? (
                // Login Form
                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  {/* Email Field */}
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        value={loginForm.email}
                        onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                        className="w-full bg-slate-700 border border-slate-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Senha
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type={showPassword ? "text" : "password"}
                        value={loginForm.password}
                        onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                        className="w-full bg-slate-700 border border-slate-600 rounded-lg pl-10 pr-12 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                        placeholder="Sua senha"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input type="checkbox" className="w-4 h-4 text-blue-500 bg-slate-700 border-slate-600 rounded focus:ring-blue-500" />
                      <span className="ml-2 text-gray-400 text-sm">Lembrar de mim</span>
                    </label>
                    <button 
                      type="button" 
                      onClick={openForgotPassword}
                      className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
                    >
                      Esqueci minha senha
                    </button>
                  </div>

                  {/* Login Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all transform hover:scale-105"
                  >
                    Entrar e Ganhar Bônus
                  </button>
                </form>
              ) : isForgotPasswordMode && !isCodeVerificationMode ? (
                // Forgot Password Form
                <form onSubmit={handleForgotPasswordSubmit} className="space-y-4">
                  <div className="text-center mb-6">
                    <Phone className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                    <h3 className="text-white font-semibold mb-2">Recuperar Senha</h3>
                    <p className="text-gray-400 text-sm">
                      Digite o número do celular cadastrado para receber o código de verificação
                    </p>
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Número do Celular
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="tel"
                        value={forgotPasswordForm.phone}
                        onChange={(e) => setForgotPasswordForm({...forgotPasswordForm, phone: e.target.value})}
                        className="w-full bg-slate-700 border border-slate-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                        placeholder="(11) 99999-9999"
                        required
                      />
                    </div>
                  </div>

                  {/* Send Code Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all transform hover:scale-105"
                  >
                    <Phone className="inline-block w-5 h-5 mr-2" />
                    Enviar Código
                  </button>
                </form>
              ) : isCodeVerificationMode ? (
                // Code Verification Form
                <form onSubmit={handleCodeVerificationSubmit} className="space-y-4">
                  <div className="text-center mb-6">
                    <Shield className="w-12 h-12 text-green-400 mx-auto mb-3" />
                    <h3 className="text-white font-semibold mb-2">Verificar Código</h3>
                    <p className="text-gray-400 text-sm">
                      Digite o código de 6 dígitos enviado para<br />
                      <span className="text-blue-400 font-medium">{forgotPasswordForm.phone}</span>
                    </p>
                  </div>

                  {/* Code Field */}
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Código de Verificação
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        value={verificationForm.code}
                        onChange={(e) => setVerificationForm({...verificationForm, code: e.target.value})}
                        className="w-full bg-slate-700 border border-slate-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors text-center text-2xl tracking-widest"
                        placeholder="000000"
                        maxLength={6}
                        required
                      />
                    </div>
                  </div>

                  {/* Verify Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all transform hover:scale-105"
                  >
                    <Shield className="inline-block w-5 h-5 mr-2" />
                    Verificar Código
                  </button>

                  {/* Resend Code */}
                  <div className="text-center">
                    <button
                      type="button"
                      onClick={() => {
                        const newCode = Math.floor(100000 + Math.random() * 900000).toString()
                        setGeneratedCode(newCode)
                        alert(`Novo código enviado: ${newCode}`)
                      }}
                      className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
                    >
                      Reenviar código
                    </button>
                  </div>
                </form>
              ) : (
                // Register Form
                <form onSubmit={handleRegisterSubmit} className="space-y-4">
                  {/* Full Name Field */}
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Nome Completo
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        value={registerForm.fullName}
                        onChange={(e) => setRegisterForm({...registerForm, fullName: e.target.value})}
                        className="w-full bg-slate-700 border border-slate-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Gmail
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        value={registerForm.email}
                        onChange={(e) => setRegisterForm({...registerForm, email: e.target.value})}
                        className="w-full bg-slate-700 border border-slate-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                        placeholder="seu@gmail.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Senha
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type={showPassword ? "text" : "password"}
                        value={registerForm.password}
                        onChange={(e) => setRegisterForm({...registerForm, password: e.target.value})}
                        className="w-full bg-slate-700 border border-slate-600 rounded-lg pl-10 pr-12 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                        placeholder="Crie uma senha segura"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Celular
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="tel"
                        value={registerForm.phone}
                        onChange={(e) => setRegisterForm({...registerForm, phone: e.target.value})}
                        className="w-full bg-slate-700 border border-slate-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                        placeholder="(11) 99999-9999"
                        required
                      />
                    </div>
                  </div>

                  {/* Register Button */}
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isProcessing ? (
                      <>
                        <Loader className="inline-block w-5 h-5 mr-2 animate-spin" />
                        Processando...
                      </>
                    ) : (
                      <>
                        <User className="inline-block w-5 h-5 mr-2" />
                        Concluir Cadastro
                      </>
                    )}
                  </button>
                </form>
              )}

              {!isRegisterMode && !isForgotPasswordMode && !isCodeVerificationMode && !isPhoneVerificationMode && !isRegistrationComplete && (
                <>
                  {/* Divider */}
                  <div className="my-6 flex items-center">
                    <div className="flex-1 border-t border-slate-600"></div>
                    <span className="px-4 text-gray-400 text-sm">ou</span>
                    <div className="flex-1 border-t border-slate-600"></div>
                  </div>

                  {/* Register Link */}
                  <div className="text-center">
                    <p className="text-gray-400 mb-4">Ainda não tem conta?</p>
                    <button 
                      onClick={openRegisterMode}
                      className="w-full border-2 border-blue-500 text-blue-400 py-3 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all"
                    >
                      <User className="inline-block w-5 h-5 mr-2" />
                      Criar Conta Grátis
                    </button>
                  </div>

                  {/* Bonus Info */}
                  <div className="mt-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Gift className="w-5 h-5 text-green-400" />
                      <span className="text-green-400 font-semibold">Bônus de Boas-vindas</span>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Ganhe até <span className="text-green-400 font-bold">R$ 500</span> no seu primeiro depósito + <span className="text-blue-400 font-bold">50 giros grátis</span>!
                    </p>
                  </div>
                </>
              )}

              {isRegisterMode && !isPhoneVerificationMode && !isRegistrationComplete && (
                <div className="mt-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Gift className="w-5 h-5 text-green-400" />
                    <span className="text-green-400 font-semibold">Bônus de Cadastro</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Ao se cadastrar, ganhe <span className="text-green-400 font-bold">R$ 500</span> de bônus + <span className="text-blue-400 font-bold">50 giros grátis</span> no seu primeiro depósito!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-slate-900/95 backdrop-blur-sm border-b border-blue-500/20 sticky top-0 z-40">
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
              <button 
                onClick={() => setLoginModalOpen(true)}
                className="px-6 py-2 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition-all"
              >
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
                  <button 
                    onClick={() => {setLoginModalOpen(true); setMobileMenuOpen(false)}}
                    className="px-4 py-2 border border-blue-500 text-blue-400 rounded-lg"
                  >
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
            <button 
              onClick={() => setLoginModalOpen(true)}
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl font-semibold hover:from-green-600 hover:to-blue-600 transition-all transform hover:scale-105"
            >
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