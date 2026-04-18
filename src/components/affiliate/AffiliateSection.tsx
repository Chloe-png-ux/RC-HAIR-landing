'use client';

import { useState } from 'react';
import { Scissors, TrendingUp, Users, Award, ChevronRight } from 'lucide-react';
import { toast } from 'sonner';

interface AffiliateFormData {
  name: string;
  email: string;
  salonName: string;
  socialHandle: string;
  portfolio: string;
}

export function AffiliateSection() {
  const [formData, setFormData] = useState<AffiliateFormData>({
    name: '',
    email: '',
    salonName: '',
    socialHandle: '',
    portfolio: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('Application submitted! We will be in touch soon.');
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Competitive Commission',
      description: 'Earn 15% commission on every referred sale',
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Personal account manager for all partners',
    },
    {
      icon: Award,
      title: 'Exclusive Access',
      description: 'Early access to new collections and products',
    },
    {
      icon: Scissors,
      title: 'Professional Tools',
      description: 'Marketing materials and color swatches provided',
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-elite-charcoal text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-12">
            <div className="space-y-6">
              <p className="text-sm tracking-[0.3em] text-white/60 uppercase">
                Partner Program
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl leading-tight">
                Join Our Stylist Network
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Partner with RCHAIR Hair as a professional stylist. Earn commissions while offering your clients premium, seamlessly matched hair extensions.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-medium text-white">{benefit.title}</h3>
                  <p className="text-sm text-white/60">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* Commission Display */}
            <div className="bg-white/5 p-6 border border-white/10">
              <p className="text-sm text-white/60 mb-2">Commission Structure</p>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-5xl text-white">15%</span>
                <span className="text-white/60">per referral</span>
              </div>
              <p className="text-sm text-white/50 mt-2">
                Average partner earns $2,400/month
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white p-8 lg:p-12">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-4">
                  Application Received
                </h3>
                <p className="text-muted-foreground">
                  Thank you for your interest. Our team will review your application and reach out within 2-3 business days.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-serif text-2xl text-foreground mb-2">
                  Apply Now
                </h3>
                <p className="text-sm text-muted-foreground mb-8">
                  Complete the form below to join our partner program
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-elite-light-grey bg-transparent text-foreground focus:border-elite-charcoal focus:outline-none transition-colors"
                      placeholder="Jane Smith"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-elite-light-grey bg-transparent text-foreground focus:border-elite-charcoal focus:outline-none transition-colors"
                      placeholder="jane@salon.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Salon Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.salonName}
                      onChange={(e) =>
                        setFormData({ ...formData, salonName: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-elite-light-grey bg-transparent text-foreground focus:border-elite-charcoal focus:outline-none transition-colors"
                      placeholder="Luxe Hair Studio"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Instagram Handle
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.socialHandle}
                      onChange={(e) =>
                        setFormData({ ...formData, socialHandle: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-elite-light-grey bg-transparent text-foreground focus:border-elite-charcoal focus:outline-none transition-colors"
                      placeholder="@janesmith_hair"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Portfolio Link
                    </label>
                    <input
                      type="url"
                      required
                      value={formData.portfolio}
                      onChange={(e) =>
                        setFormData({ ...formData, portfolio: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-elite-light-grey bg-transparent text-foreground focus:border-elite-charcoal focus:outline-none transition-colors"
                      placeholder="https://instagram.com/yourportfolio"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-elite-charcoal text-white font-medium tracking-wide hover:bg-[#1A1A1A] transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span>Submitting</span>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      </>
                    ) : (
                      <>
                        <span>Submit Application</span>
                        <ChevronRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
