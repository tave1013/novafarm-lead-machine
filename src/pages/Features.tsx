
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Users, 
  MessageSquare, 
  Calendar, 
  Zap, 
  Star, 
  CreditCard, 
  BarChart3, 
  Globe, 
  UserCheck, 
  Settings, 
  Headphones 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      id: 'multi-user',
      title: 'Multi-User Access & Account Management',
      description: 'Complete team management system with role-based permissions and custom working hours for each team member.',
      benefits: [
        'Assign different roles (Admin, Operator, Viewer)',
        'Individual user accounts for each employee',
        'Custom working hours per team member',
        'Real-time availability tracking'
      ],
      icon: Users,
      mockup: (
        <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">Team Management</h3>
            <Users className="w-5 h-5 text-[#078147]" />
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-[#078147]/5 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#078147] rounded-full flex items-center justify-center text-white text-xs font-bold">
                  AM
                </div>
                <div>
                  <div className="font-medium text-sm">Anna Maria</div>
                  <div className="text-xs text-gray-600">Administrator</div>
                </div>
              </div>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Online</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  LB
                </div>
                <div>
                  <div className="font-medium text-sm">Luca Bianchi</div>
                  <div className="text-xs text-gray-600">Operator</div>
                </div>
              </div>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Offline</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  MR
                </div>
                <div>
                  <div className="font-medium text-sm">Maria Rossi</div>
                  <div className="text-xs text-gray-600">Viewer</div>
                </div>
              </div>
              <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Break</span>
            </div>
          </div>
          <div className="mt-4 p-3 bg-[#078147]/10 rounded-lg">
            <div className="text-xs font-medium text-[#078147] mb-2">Today's Schedule</div>
            <div className="text-xs text-gray-600">Anna: 08:00-16:00 | Luca: 14:00-22:00</div>
          </div>
        </div>
      ),
      imagePosition: 'left'
    },
    {
      id: 'unified-inbox',
      title: 'Unified Messaging Inbox',
      description: 'Centralize all customer communications from Facebook, Instagram, Email, and SMS in one intelligent inbox.',
      benefits: [
        'All platforms in one place',
        'Tag and assign conversations',
        'Real-time notifications',
        'Team collaboration tools'
      ],
      icon: MessageSquare,
      mockup: (
        <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">Unified Inbox</h3>
            <MessageSquare className="w-5 h-5 text-[#078147]" />
          </div>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-[#078147]/10 rounded-lg border-l-4 border-[#078147]">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                FB
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-sm">Marco_85</span>
                  <span className="text-xs text-gray-500">2m ago</span>
                </div>
                <p className="text-sm text-gray-600">È aperta la farmacia oggi?</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                IG
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-sm">anna_wellness</span>
                  <span className="text-xs text-gray-500">5m ago</span>
                </div>
                <p className="text-sm text-gray-600">Avete integratori disponibili?</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                SM
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-sm">+39 333 1234567</span>
                  <span className="text-xs text-gray-500">10m ago</span>
                </div>
                <p className="text-sm text-gray-600">Grazie per la consulenza!</p>
              </div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <div className="p-2 bg-[#078147]/5 rounded text-center">
              <div className="text-lg font-bold text-[#078147]">12</div>
              <div className="text-xs text-gray-600">Non letti</div>
            </div>
            <div className="p-2 bg-gray-50 rounded text-center">
              <div className="text-lg font-bold text-gray-700">3</div>
              <div className="text-xs text-gray-600">Assegnati</div>
            </div>
          </div>
        </div>
      ),
      imagePosition: 'right'
    },
    {
      id: 'smart-calendar',
      title: 'Smart Booking Calendar',
      description: '24/7 online booking system with service-based calendar options and intelligent availability management.',
      benefits: [
        '24/7 online booking availability',
        'Service-specific time slots',
        'Custom working hours',
        'Automatic conflict prevention'
      ],
      icon: Calendar,
      mockup: (
        <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">Calendario Prenotazioni</h3>
            <Calendar className="w-5 h-5 text-[#078147]" />
          </div>
          <div className="grid grid-cols-7 gap-1 mb-4 text-xs text-gray-500">
            {['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'].map((day) => (
              <div key={day} className="text-center p-1">{day}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1 mb-4">
            {Array.from({ length: 35 }, (_, i) => {
              const day = i - 4;
              const isToday = day === 15;
              const hasAppointment = [12, 15, 18, 22].includes(day);
              return (
                <div key={i} className={`
                  text-center p-2 text-xs rounded cursor-pointer
                  ${day <= 0 ? 'text-gray-300' : 'text-gray-700 hover:bg-gray-100'}
                  ${isToday ? 'bg-[#078147] text-white' : ''}
                  ${hasAppointment && !isToday ? 'bg-[#078147]/10 text-[#078147] font-medium' : ''}
                `}>
                  {day > 0 ? day : ''}
                </div>
              );
            })}
          </div>
          <div className="space-y-2">
            <div className="text-xs text-gray-600 font-medium">Appuntamenti di oggi</div>
            <div className="flex items-center justify-between p-2 bg-[#078147]/5 rounded">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#078147] rounded-full"></div>
                <span className="text-xs">09:00 - Consulenza farmaceutica</span>
              </div>
              <span className="text-xs text-[#078147]">Maria R.</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-yellow-50 rounded">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-xs">14:30 - Controllo pressione</span>
              </div>
              <span className="text-xs text-yellow-700">Luca B.</span>
            </div>
          </div>
        </div>
      ),
      imagePosition: 'left'
    },
    {
      id: 'automation',
      title: 'Automated Follow-Ups',
      description: 'Intelligent SMS and email automation to reduce no-shows and improve customer satisfaction.',
      benefits: [
        'Pre-appointment reminders',
        'Post-visit follow-ups',
        'Customizable message templates',
        'Automatic no-show reduction'
      ],
      icon: Zap,
      mockup: (
        <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">Automazione Follow-Up</h3>
            <Zap className="w-5 h-5 text-[#078147]" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-[#078147] rounded-full flex items-center justify-center text-white text-xs">1</div>
              <div className="flex-1">
                <div className="text-sm font-medium">Prenotazione Confermata</div>
                <div className="text-xs text-gray-500">Trigger: Nuova prenotazione</div>
              </div>
            </div>
            <div className="ml-4 border-l-2 border-[#078147]/20 pl-4 py-2">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#078147]/20 rounded-full flex items-center justify-center text-[#078147] text-xs">2</div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Promemoria 24h</div>
                  <div className="text-xs text-gray-500">SMS: "Ciao Maria, promemoria per domani ore 09:00"</div>
                </div>
              </div>
            </div>
            <div className="ml-4 border-l-2 border-[#078147]/20 pl-4 py-2">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#078147]/20 rounded-full flex items-center justify-center text-[#078147] text-xs">3</div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Promemoria Stesso Giorno</div>
                  <div className="text-xs text-gray-500">Email: "Il tuo appuntamento è tra 2 ore"</div>
                </div>
              </div>
            </div>
            <div className="ml-4 border-l-2 border-[#078147]/20 pl-4 py-2">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#078147] rounded-full flex items-center justify-center text-white text-xs">4</div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Follow-up Recensione</div>
                  <div className="text-xs text-gray-500">24h dopo: "Come è andata la visita? Lascia una recensione"</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 p-3 bg-[#078147]/5 rounded-lg">
            <div className="text-sm font-medium text-[#078147]">85% riduzione no-show</div>
            <div className="text-xs text-gray-600">Rispetto al mese precedente</div>
          </div>
        </div>
      ),
      imagePosition: 'right'
    },
    {
      id: 'reviews',
      title: 'Review Request System',
      description: 'Automated Google review requests with customizable templates to boost your online reputation.',
      benefits: [
        'Automatic post-visit review requests',
        'Customizable message templates',
        'Google Reviews integration',
        'Performance tracking'
      ],
      icon: Star,
      mockup: (
        <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">Sistema Recensioni</h3>
            <Star className="w-5 h-5 text-[#078147]" />
          </div>
          <div className="bg-gradient-to-br from-[#078147]/10 to-[#078147]/5 rounded-lg p-4 mb-4">
            <div className="text-center">
              <div className="text-lg font-medium mb-2">Come è andata la tua visita?</div>
              <div className="flex justify-center space-x-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <button className="bg-[#078147] text-white px-4 py-2 rounded-lg text-sm font-medium">
                Lascia Recensione Google
              </button>
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-xs text-gray-600 font-medium">Recensioni Recenti</div>
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium">Maria R.</span>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-gray-600">"Servizio eccellente e staff molto professionale!"</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2 bg-[#078147]/5 rounded text-center">
                <div className="text-lg font-bold text-[#078147]">4.8</div>
                <div className="text-xs text-gray-600">Media voti</div>
              </div>
              <div className="p-2 bg-gray-50 rounded text-center">
                <div className="text-lg font-bold text-gray-700">127</div>
                <div className="text-xs text-gray-600">Recensioni</div>
              </div>
            </div>
          </div>
        </div>
      ),
      imagePosition: 'left'
    },
    {
      id: 'payments',
      title: 'Online Payments',
      description: 'Secure payment processing integrated with booking system to reduce missed appointments and improve cash flow.',
      benefits: [
        'Accept payments during booking',
        'Stripe integration for security',
        'Reduce missed appointments',
        'Automated payment confirmations'
      ],
      icon: CreditCard,
      mockup: (
        <div className="bg-white rounded-xl shadow-2xl p-6 max-w-lg mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">Pagamento Sicuro</h3>
            <CreditCard className="w-5 h-5 text-[#078147]" />
          </div>
          <div className="space-y-4">
            <div className="bg-[#078147]/5 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Consulenza Farmaceutica</span>
                <span className="text-xl font-bold text-[#078147]">€45.00</span>
              </div>
              <div className="text-xs text-gray-600">Dr. Rossi - 15 Nov, 2024 ore 14:30</div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-600 font-medium">Nome Titolare</label>
                <div className="mt-1 p-2 bg-gray-50 rounded text-xs border">Marco Bianchi</div>
              </div>
              <div>
                <label className="text-xs text-gray-600 font-medium">Numero Carta</label>
                <div className="mt-1 p-2 bg-gray-50 rounded text-xs border">•••• •••• •••• 4242</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-600 font-medium">Scadenza</label>
                <div className="mt-1 p-2 bg-gray-50 rounded text-xs border">12/26</div>
              </div>
              <div>
                <label className="text-xs text-gray-600 font-medium">CVV</label>
                <div className="mt-1 p-2 bg-gray-50 rounded text-xs border">•••</div>
              </div>
            </div>
            
            <button className="w-full bg-[#078147] text-white py-3 rounded-lg font-semibold text-sm hover:bg-[#066139] transition-colors">
              Conferma Pagamento €45.00
            </button>
            
            <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
              <span>🔒</span>
              <span>Protetto da Stripe • Crittografia SSL</span>
            </div>
          </div>
        </div>
      ),
      imagePosition: 'right'
    },
    {
      id: 'dashboard',
      title: 'Dashboard & Reporting',
      description: 'Comprehensive analytics dashboard with visual insights into appointments, performance, and business metrics.',
      benefits: [
        'Visual overview of key metrics',
        'Filter by date, service, or team member',
        'Monthly performance summaries',
        'Export capabilities'
      ],
      icon: BarChart3,
      mockup: (
        <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">Dashboard Analytics</h3>
            <BarChart3 className="w-5 h-5 text-[#078147]" />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-[#078147]/10 p-3 rounded-lg">
              <div className="text-2xl font-bold text-[#078147]">234</div>
              <div className="text-xs text-gray-600">Appuntamenti Totali</div>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg">
              <div className="text-2xl font-bold text-gray-700">98%</div>
              <div className="text-xs text-gray-600">Tasso Presenza</div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-xs text-gray-600 font-medium">Tendenze Mensili</div>
            <div className="bg-gray-50 p-3 rounded">
              <div className="flex items-end space-x-1 h-16 mb-2">
                {[40, 60, 45, 80, 65, 90, 85, 95].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-[#078147] rounded-t"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
              <div className="text-xs text-gray-500">Prenotazioni per settimana</div>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="bg-[#078147]/5 p-3 rounded-lg">
              <div className="text-sm font-medium text-[#078147]">+23% aumento questo mese</div>
              <div className="text-xs text-gray-600">Rispetto al mese precedente</div>
            </div>
          </div>
        </div>
      ),
      imagePosition: 'left'
    },
    {
      id: 'landing-pages',
      title: 'Custom Landing Pages',
      description: 'Up to 3 professionally designed landing pages to showcase your services with integrated booking and contact forms.',
      benefits: [
        'Up to 3 custom-branded pages',
        'Integrated contact forms and chat',
        'SEO optimized',
        'Hosting and maintenance included'
      ],
      icon: Globe,
      mockup: (
        <div className="bg-white rounded-xl shadow-2xl p-4 max-w-sm mx-auto">
          <div className="bg-[#078147] text-white p-3 rounded-t-lg">
            <h3 className="font-semibold text-sm">Farmacia Centrale</h3>
            <p className="text-xs opacity-90">I tuoi specialisti di fiducia</p>
          </div>
          <div className="p-4 space-y-3">
            <div className="bg-gray-100 rounded p-2">
              <div className="text-xs font-medium mb-1">I Nostri Servizi</div>
              <div className="grid grid-cols-2 gap-1 text-xs">
                <div>• Consulenze farmaceutiche</div>
                <div>• Controllo pressione</div>
                <div>• Test rapidi</div>
                <div>• Preparazioni galeniche</div>
              </div>
            </div>
            <div className="bg-[#078147]/5 p-2 rounded">
              <div className="text-xs font-medium text-[#078147] mb-1">Prenota Online</div>
              <div className="grid grid-cols-2 gap-1">
                <input className="text-xs p-1 border rounded" placeholder="Nome" />
                <input className="text-xs p-1 border rounded" placeholder="Email" />
              </div>
              <button className="w-full bg-[#078147] text-white text-xs py-1 rounded mt-1">
                Prenota Ora
              </button>
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <div className="text-xs font-medium mb-1">Contatti</div>
              <div className="text-xs space-y-1">
                <div>📍 Via Roma 123, Milano</div>
                <div>📞 +39 02 1234567</div>
                <div>💬 Chat dal vivo disponibile</div>
              </div>
            </div>
          </div>
        </div>
      ),
      imagePosition: 'right'
    },
    {
      id: 'client-database',
      title: 'Client Database & Notes',
      description: 'Complete customer relationship management with detailed profiles, appointment history, and personalized notes.',
      benefits: [
        'Detailed client profiles',
        'Appointment history tracking',
        'Custom notes and preferences',
        'Loyalty program integration'
      ],
      icon: UserCheck,
      mockup: (
        <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">Profilo Cliente</h3>
            <UserCheck className="w-5 h-5 text-[#078147]" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-[#078147] rounded-full flex items-center justify-center text-white font-bold">
                MR
              </div>
              <div>
                <div className="font-semibold">Maria Rossi</div>
                <div className="text-sm text-gray-600">+39 333 1234567</div>
                <div className="text-sm text-gray-600">maria.rossi@email.com</div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-sm font-medium mb-2">Storico Appuntamenti</div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span>15 Nov 2024 - Consulenza</span>
                  <span className="text-[#078147]">Completato</span>
                </div>
                <div className="flex justify-between">
                  <span>03 Nov 2024 - Controllo pressione</span>
                  <span className="text-[#078147]">Completato</span>
                </div>
                <div className="flex justify-between">
                  <span>20 Ott 2024 - Test rapido</span>
                  <span className="text-[#078147]">Completato</span>
                </div>
              </div>
            </div>
            
            <div className="bg-[#078147]/5 p-3 rounded-lg">
              <div className="text-sm font-medium mb-2">Note Personali</div>
              <div className="text-xs text-gray-600">
                "Preferisce appuntamenti mattutini. Allergia alla penicillina. Cliente fidelizzata da 3 anni."
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2 bg-yellow-50 rounded text-center">
                <div className="text-lg font-bold text-yellow-700">12</div>
                <div className="text-xs text-gray-600">Visite totali</div>
              </div>
              <div className="p-2 bg-green-50 rounded text-center">
                <div className="text-lg font-bold text-green-700">VIP</div>
                <div className="text-xs text-gray-600">Status</div>
              </div>
            </div>
          </div>
        </div>
      ),
      imagePosition: 'left'
    },
    {
      id: 'team-management',
      title: 'Advanced Team Management',
      description: 'Assign specific services to staff members and monitor performance with detailed operator insights.',
      benefits: [
        'Service-specific staff assignments',
        'Performance monitoring by operator',
        'Workload distribution analytics',
        'Individual productivity tracking'
      ],
      icon: Settings,
      mockup: (
        <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">Gestione Team</h3>
            <Settings className="w-5 h-5 text-[#078147]" />
          </div>
          <div className="space-y-4">
            <div className="bg-[#078147]/5 p-3 rounded-lg">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-[#078147] rounded-full flex items-center justify-center text-white text-xs font-bold">
                  AM
                </div>
                <div>
                  <div className="font-medium text-sm">Anna Maria</div>
                  <div className="text-xs text-gray-600">Farmacista Senior</div>
                </div>
              </div>
              <div className="text-xs space-y-1">
                <div>✅ Consulenze farmaceutiche</div>
                <div>✅ Preparazioni galeniche</div>
                <div>✅ Controlli specialistici</div>
              </div>
              <div className="mt-2 text-xs text-[#078147] font-medium">18 appuntamenti questa settimana</div>
            </div>
            
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  LB
                </div>
                <div>
                  <div className="font-medium text-sm">Luca Bianchi</div>
                  <div className="text-xs text-gray-600">Farmacista</div>
                </div>
              </div>
              <div className="text-xs space-y-1">
                <div>✅ Controllo pressione</div>
                <div>✅ Test rapidi</div>
                <div>❌ Preparazioni galeniche</div>
              </div>
              <div className="mt-2 text-xs text-blue-600 font-medium">12 appuntamenti questa settimana</div>
            </div>
            
            <div className="bg-purple-50 p-3 rounded-lg">
              <div className="text-sm font-medium text-purple-700 mb-1">Performance del Team</div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>Media soddisfazione: 4.8/5</div>
                <div>Efficienza: 95%</div>
              </div>
            </div>
          </div>
        </div>
      ),
      imagePosition: 'right'
    },
    {
      id: 'support',
      title: 'Support & Onboarding',
      description: 'Comprehensive support system with 7-day human assistance, onboarding guides, and video tutorials.',
      benefits: [
        '7-day human support via chat/email',
        'Comprehensive onboarding guides',
        'Video tutorial library',
        'Priority technical assistance'
      ],
      icon: Headphones,
      mockup: (
        <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">Centro Assistenza</h3>
            <Headphones className="w-5 h-5 text-[#078147]" />
          </div>
          <div className="space-y-4">
            <div className="bg-[#078147]/5 p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#078147] rounded-full flex items-center justify-center text-white font-medium">
                  NS
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Supporto NovaFarm</div>
                  <div className="text-xs text-gray-600">Di solito risponde in 5 minuti</div>
                </div>
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-sm">Ciao! Come posso aiutarti oggi?</div>
                <div className="text-xs text-gray-500 mt-1">Operatore - 2m fa</div>
              </div>
              <div className="bg-[#078147]/10 p-3 rounded-lg ml-8">
                <div className="text-sm">Ho bisogno di aiuto con i promemoria automatici</div>
                <div className="text-xs text-gray-500 mt-1">Tu - 1m fa</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <button className="p-2 bg-gray-50 rounded text-xs text-center hover:bg-gray-100">📹 Video Tutorial</button>
              <button className="p-2 bg-gray-50 rounded text-xs text-center hover:bg-gray-100">📚 Guida Completa</button>
            </div>
            
            <div className="bg-[#078147]/5 p-3 rounded-lg">
              <div className="text-sm font-medium text-[#078147] mb-1">Risorse Disponibili</div>
              <div className="text-xs space-y-1">
                <div>• Setup guidato in 3 passi</div>
                <div>• 20+ video tutorial</div>
                <div>• Supporto 7 giorni/settimana</div>
                <div>• Chat prioritaria</div>
              </div>
            </div>
          </div>
        </div>
      ),
      imagePosition: 'left'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 sm:pt-24 sm:pb-16 bg-gradient-to-br from-[#f4f1ea] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6">
            Funzionalità Complete di
            <span className="text-[#078147] block">NovaFarm</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12">
            Scopri tutte le potenti funzionalità progettate specificamente per modernizzare 
            la tua farmacia e migliorare l'esperienza dei tuoi clienti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/book-demo" 
              className="bg-[#078147] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-[#066139] transition-all transform hover:scale-105"
            >
              Prenota Demo Gratuita
            </a>
            <a 
              href="/#pricing" 
              className="border-2 border-[#078147] text-[#078147] px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-[#078147] hover:text-white transition-all"
            >
              Vedi Prezzi
            </a>
          </div>
        </div>
      </section>

      {/* Features Sections */}
      {features.map((feature, index) => (
        <section key={feature.id} className={`py-12 sm:py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-[#f4f1ea]/30'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center ${
              feature.imagePosition === 'right' ? '' : 'lg:grid-flow-col-dense'
            }`}>
              
              {/* Content */}
              <div className={`${
                feature.imagePosition === 'right' 
                  ? 'lg:col-start-1' 
                  : 'lg:col-start-2'
              } mb-8 lg:mb-0`}>
                <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#078147]/10 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#078147]" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight">
                    {feature.title}
                  </h2>
                </div>
                
                <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  {feature.description}
                </p>

                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-black">Caratteristiche principali:</h3>
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#078147] rounded-full mt-2 sm:mt-2.5 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mockup */}
              <div className={`${
                feature.imagePosition === 'right' 
                  ? 'lg:col-start-2' 
                  : 'lg:col-start-1'
              } flex justify-center`}>
                {feature.mockup}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 bg-[#078147]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Pronto a Modernizzare la Tua Farmacia?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-10">
            Scopri come NovaFarm può trasformare la gestione della tua farmacia 
            con una demo personalizzata gratuita.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/book-demo" 
              className="bg-white text-[#078147] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Prenota Demo Gratuita
            </a>
            <a 
              href="/#contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#078147] transition-all"
            >
              Contattaci
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
