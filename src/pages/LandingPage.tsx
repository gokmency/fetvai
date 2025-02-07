import { type ReactElement, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Users,
  Shield,
  ArrowRight,
  MessageCircle,
  Clock,
  CheckCircle2,
  GraduationCap,
  Heart,
  ScrollText,
  Moon,
} from 'lucide-react';
import { AppTitle } from '../components/AppTitle';
import { Footer } from '../components/Footer';
import { FeatureCard } from '../components/FeatureCard';
import { StatCard } from '../components/StatCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { ScrollToTop } from '../components/ScrollToTop';
import { IslamicBackground } from '../components/IslamicBackground';

type Feature = {
  icon: ReactElement;
  title: string;
  description: string;
};

type PricingPlan = {
  name: string;
  price: string;
  features: string[];
  buttonText: string;
  popular: boolean;
};

const features: Feature[] = [
  {
    icon: <MessageCircle className="w-8 h-8 text-emerald-600" />,
    title: "İslami Bilgelik",
    description: "Güvenilir kaynaklardan Kur'an ayetleri ve hadisler ile desteklenmiş cevaplar."
  },
  {
    icon: <Sparkles className="w-8 h-8 text-emerald-600" />,
    title: "Yapay Zeka Teknolojisi",
    description: "Modern yapay zeka teknolojisi ile hızlı ve doğru cevaplar."
  },
  {
    icon: <Users className="w-8 h-8 text-emerald-600" />,
    title: "Kişiselleştirilmiş Rehberlik",
    description: "Her soruya özel, anlayışlı ve empatik yaklaşım."
  },
  {
    icon: <Shield className="w-8 h-8 text-emerald-600" />,
    title: "Güvenilir Kaynaklar",
    description: "Sadece güvenilir İslami kaynaklardan alınan bilgiler."
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-emerald-600" />,
    title: "Sürekli Öğrenme",
    description: "Her gün gelişen ve kendini yenileyen yapay zeka modeli."
  },
  {
    icon: <Heart className="w-8 h-8 text-emerald-600" />,
    title: "Empati ve Anlayış",
    description: "Hassas konularda bile nazik ve anlayışlı yaklaşım."
  },
  {
    icon: <Moon className="w-8 h-8 text-[var(--primary)]" />,
    title: "İslami Değerler",
    description: "İslam'ın temel değerlerine ve prensiplere bağlı kalarak rehberlik."
  },
  {
    icon: <ScrollText className="w-8 h-8 text-emerald-600" />,
    title: "Detaylı Açıklamalar",
    description: "Konuları derinlemesine ele alan kapsamlı cevaplar."
  }
];

const stats = [
  {
    icon: <MessageCircle className="w-6 h-6 text-emerald-600" />,
    label: "Yanıtlanan Soru",
    value: "10K+"
  },
  {
    icon: <Clock className="w-6 h-6 text-emerald-600" />,
    label: "Ortalama Yanıt Süresi",
    value: "<2sn"
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />,
    label: "Doğruluk Oranı",
    value: "%99"
  },
  {
    icon: <Heart className="w-6 h-6 text-[var(--primary)]" />,
    label: "Kullanıcı Memnuniyeti",
    value: "%98"
  }
];

const testimonials = [
  {
    name: "Ahmet Yılmaz",
    title: "Öğretmen",
    content: "Fetv.ai sayesinde öğrencilerimin sorularına daha kapsamlı ve doğru cevaplar verebiliyorum.",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: "Ayşe Kaya",
    title: "Din Kültürü Öğretmeni",
    content: "Modern çağın getirdiği yeni sorulara, İslami kaynaklardan aldığı referanslarla çok güzel cevaplar veriyor.",
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    name: "Abdülkadir Maslak",
    title: "İmam",
    content: "Cemaatimin sorularını yanıtlarken Fetv.ai'den aldığım destekle daha detaylı açıklamalar yapabiliyorum.",
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  }
];

const pricingPlans: PricingPlan[] = [
  {
    name: "Ücretsiz",
    price: "0",
    features: [
      "Günlük 5 soru hakkı",
      "Temel İslami rehberlik",
      "Ayet ve hadis desteği",
      "Web arayüzü erişimi"
    ],
    buttonText: "Şimdi Başla",
    popular: false
  },
  {
    name: "Premium",
    price: "49",
    features: [
      "Sınırsız soru hakkı",
      "Öncelikli yanıtlar",
      "PDF indirme özelliği",
      "Özel İslami rehberlik",
      "7/24 destek"
    ],
    buttonText: "Premium'a Geç",
    popular: true
  },
  {
    name: "Kurumsal",
    price: "199",
    features: [
      "Tüm Premium özellikleri",
      "Çoklu kullanıcı desteği",
      "Özel API erişimi",
      "Kişiselleştirilmiş çözümler",
      "Öncelikli destek"
    ],
    buttonText: "İletişime Geç",
    popular: false
  }
];

export function LandingPage(): ReactElement {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-100 via-emerald-50 to-white relative">
      <IslamicBackground opacity={0.025} color="#047857" scale={1} />
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <AppTitle />
            <Link
              to="/app"
              className="flex items-center gap-2 px-4 py-2 text-white font-medium bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-lg hover:from-emerald-700 hover:to-emerald-600 transition-all duration-300"
            >
              Uygulamaya Git
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542816417-0983c9c9ad53')] bg-cover bg-center opacity-5" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-8 animate-bounce-slow">
            <Moon className="w-16 h-16 text-[var(--primary)] mx-auto" />
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Modern Çağın{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
              İslami Rehberi
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Yapay zeka teknolojisi ile desteklenen, Kur'an ve hadisler ışığında sorularınıza
            anlayışlı ve empatik cevaplar sunan yeni nesil İslami rehberlik platformu.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link to="/app" className="btn-primary">
              Hemen Başla
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="#features" className="btn-secondary">
              Daha Fazla Bilgi
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-medium mb-2 block">ÖZELLİKLER</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Neden Fetv.ai?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Modern teknoloji ve İslami bilgeliğin mükemmel uyumu ile sorularınıza
              kapsamlı ve güvenilir cevaplar sunuyoruz.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-medium mb-2 block">KULLANICI DENEYİMLERİ</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Kullanıcılarımız Ne Diyor?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fetv.ai'yi kullanan değerli kullanıcılarımızın deneyimlerini paylaşıyoruz.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Fiyatlandırma</h2>
            <p className="text-lg text-gray-600">
              İhtiyacınıza en uygun planı seçin
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 bg-white rounded-2xl shadow-lg border ${
                  plan.popular
                    ? 'border-emerald-500 shadow-emerald-500/10'
                    : 'border-gray-100'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      En Popüler
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-4xl font-bold text-gray-900">₺{plan.price}</span>
                    <span className="text-gray-500">/ay</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-emerald-500" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-emerald-600 to-emerald-500 text-white hover:from-emerald-700 hover:to-emerald-600 shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30'
                      : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white/50 border-t border-emerald-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center">
            <Footer />
          </div>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  );
}
