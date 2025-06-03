import { MessageCircle, Mail, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const OmnichannelSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              {t('omnichannel.title')}
            </h2>
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#078147]/10 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-[#078147]" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">{t('omnichannel.messaging')}</h3>
                  <p className="text-gray-600">{t('omnichannel.messagingDesc')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#078147]/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#078147]" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">{t('omnichannel.inbox')}</h3>
                  <p className="text-gray-600">{t('omnichannel.inboxDesc')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#078147]/10 rounded-lg flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-[#078147]" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">{t('omnichannel.notifications')}</h3>
                  <p className="text-gray-600">{t('omnichannel.notificationsDesc')}</p>
                </div>
              </div>
              <div className="p-4 bg-[#078147]/5 rounded-lg border-l-4 border-[#078147]">
                <p className="text-black font-medium">{t('omnichannel.improve')}</p>
              </div>
            </div>
            <button className="bg-[#078147] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#066139] transition-colors">
              {t('omnichannel.cta')}
            </button>
          </div>
          
          <div className="mt-12 lg:mt-0">
            <div className="bg-gradient-to-br from-[#078147]/10 to-[#f4f1ea] rounded-2xl p-8">
              <div className="bg-white rounded-xl shadow-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-black">Messages</h3>
                  <span className="bg-[#078147] text-white text-xs px-2 py-1 rounded-full">3 new</span>
                </div>
                <div className="space-y-4">
                  {[
                    { platform: "Facebook", name: "Maria R.", message: "Is the pharmacy open today?", time: "2m ago", color: "bg-blue-500" },
                    { platform: "Instagram", name: "Luca_B", message: "Do you have the vaccine available?", time: "5m ago", color: "bg-pink-500" },
                    { platform: "Email", name: "Anna Verdi", message: "Thank you for the consultation", time: "1h ago", color: "bg-gray-500" }
                  ].map((msg, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className={`w-8 h-8 ${msg.color} rounded-full flex items-center justify-center text-white text-xs font-bold`}>
                        {msg.platform.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-black text-sm">{msg.name}</span>
                          <span className="text-xs text-gray-500">{msg.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 truncate">{msg.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OmnichannelSection;
