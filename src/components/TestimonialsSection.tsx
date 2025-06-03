
import { Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: t('testimonials.1.name'),
      role: t('testimonials.1.role'),
      content: t('testimonials.1.content'),
      rating: 5
    },
    {
      name: t('testimonials.2.name'),
      role: t('testimonials.2.role'),
      content: t('testimonials.2.content'),
      rating: 5
    },
    {
      name: t('testimonials.3.name'),
      role: t('testimonials.3.role'),
      content: t('testimonials.3.content'),
      rating: 5
    },
    {
      name: t('testimonials.4.name'),
      role: t('testimonials.4.role'),
      content: t('testimonials.4.content'),
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-[#f4f1ea]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('testimonials.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div>
                <div className="font-semibold text-black">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-black font-semibold">4.9/5</span>
            <span className="text-gray-600">{t('testimonials.rating')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
