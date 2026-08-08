import React, { useState } from 'react';
import { X, CheckCircle, Shield, Calendar, Clock, User, Mail, Phone } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredDate: '',
    visitorType: 'Principal Purchaser',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      
      <div className="relative bg-[#121212] border border-white/20 rounded-3xl max-w-2xl w-full p-8 sm:p-12 shadow-2xl my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-stone-300 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-8">
              <span className="text-xs font-mono text-[#c5a059] uppercase tracking-widest block mb-2">
                CONFIDENTIAL PROTOCOL
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-white font-light mb-3">
                Request Private Viewing
              </h3>
              <p className="text-xs text-stone-300 font-light leading-relaxed">
                Tours are offered exclusively to verified principals or their accredited representatives.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono text-stone-400 uppercase mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone-500 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="Lord / Lady / Dr. Name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-stone-400 uppercase mb-2">
                    Private Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-stone-500 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      required
                      placeholder="client@familyoffice.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono text-stone-400 uppercase mb-2">
                    Direct Telephone *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-stone-500 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      required
                      placeholder="+92 300 0000000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-stone-400 uppercase mb-2">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-stone-500 absolute left-3.5 top-3.5" />
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-stone-400 uppercase mb-2">
                  Representation
                </label>
                <select
                  value={formData.visitorType}
                  onChange={(e) => setFormData({ ...formData, visitorType: e.target.value })}
                  className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors"
                >
                  <option>Principal Purchaser</option>
                  <option>Family Office Advisory</option>
                  <option>Retained Buyer's Agent</option>
                  <option>Architectural Press / Media</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#c5a059] text-black font-mono text-xs font-bold tracking-widest uppercase hover:bg-white transition-all duration-300 shadow-lg shadow-[#c5a059]/20"
              >
                Submit Viewing Credentials
              </button>

              <div className="flex items-center justify-center space-x-2 text-[10px] font-mono text-stone-500">
                <Shield className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>NDA & Confidentiality Guaranteed</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-12 space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#c5a059]/20 border border-[#c5a059] flex items-center justify-center mx-auto text-[#c5a059]">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-3xl text-white font-light">
              Credentials Received
            </h3>
            <p className="text-xs text-stone-300 font-light max-w-md mx-auto leading-relaxed">
              Our Managing Director will contact your office directly within 4 hours to confirm security clearance and private helicopter / chauffeur dispatch details.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono tracking-widest text-white uppercase"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
