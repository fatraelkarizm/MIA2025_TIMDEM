import { Link2Icon, Download, MessageCircle, Instagram, Twitter, Facebook } from "lucide-react";
import { useState } from "react";

interface Template {
  name: string;
  subtitle: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
}

interface UMKMData {
  title: string;
  description: string;
  location: string;
  image: string;
  category?: string;
}

interface ShareModalProps {
  umkm: UMKMData;
  onClose: () => void;
  isOpen: boolean;
}

type TemplateKey =
  | "Gaya Simpel"
  | "Gaya Cerita"
  | "Gaya Nusantara"
  | "Gaya Story";

export default function ShareModal({ umkm, onClose, isOpen }: ShareModalProps) {
  const [activeTemplate, setActiveTemplate] =
    useState<TemplateKey>("Gaya Simpel");
  const [activeTab, setActiveTab] = useState("PILIH TEMPLATE");

  const templates: Record<TemplateKey, Template> = {
    "Gaya Simpel": {
      name: "Gaya Simpel",
      subtitle: "Sederhana & Elegan",
      bgColor: "bg-white",
      textColor: "text-gray-800",
      accentColor: "bg-[#FF6B35]",
    },
    "Gaya Cerita": {
      name: "Gaya Cerita",
      subtitle: "Warm - Warm Sentiment",
      bgColor: "bg-gradient-to-br from-orange-100 to-red-100",
      textColor: "text-gray-800",
      accentColor: "bg-red-500",
    },
    "Gaya Nusantara": {
      name: "Gaya Nusantara",
      subtitle: "Batik Guli Budaya Lokal",
      bgColor: "bg-gradient-to-br from-blue-100 to-teal-100",
      textColor: "text-gray-800",
      accentColor: "bg-blue-600",
    },
    "Gaya Story": {
      name: "Gaya Story",
      subtitle: "Format Instagram Story",
      bgColor: "bg-gradient-to-br from-purple-100 to-pink-100",
      textColor: "text-gray-800",
      accentColor: "bg-purple-600",
    },
  };

  const shareActions = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      color: "text-green-600 bg-green-50 hover:bg-green-100",
      action: () => shareToWhatsApp()
    },
    {
      name: "Instagram", 
      icon: Instagram,
      color: "text-pink-600 bg-pink-50 hover:bg-pink-100",
      action: () => shareToInstagram()
    },
    {
      name: "Twitter",
      icon: Twitter, 
      color: "text-blue-600 bg-blue-50 hover:bg-blue-100",
      action: () => shareToTwitter()
    },
    {
      name: "Facebook",
      icon: Facebook,
      color: "text-blue-700 bg-blue-50 hover:bg-blue-100", 
      action: () => shareToFacebook()
    }
  ];

  const shareToWhatsApp = () => {
    const text = `Check out this amazing UMKM: ${umkm.title} at ${umkm.location}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  const shareToInstagram = () => {
  };

  const shareToTwitter = () => {
  };

  const shareToFacebook = () => {
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link berhasil disalin!");
  };

  const downloadImage = () => {
  };

  if (!isOpen) return null;

  // Get current template with safe access
  const currentTemplate = templates[activeTemplate];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Sebarkan UMKM Ini
              </h2>
              <p className="text-gray-600">
                Pilih template untuk membagikan UMKM ini.
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab("PILIH TEMPLATE")}
            className={`flex-1 py-3 px-6 font-semibold transition-colors ${
              activeTab === "PILIH TEMPLATE"
                ? "text-[#114B5F] border-b-2 border-[#114B5F]"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            PILIH TEMPLATE
          </button>
          <button
            onClick={() => setActiveTab("PREVIEW CARD")}
            className={`flex-1 py-3 px-6 font-semibold transition-colors ${
              activeTab === "PREVIEW CARD"
                ? "text-[#114B5F] border-b-2 border-[#114B5F]"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            PREVIEW CARD
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Side - Templates or Preview */}
            <div>
              {activeTab === "PILIH TEMPLATE" && (
                <div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {(Object.keys(templates) as TemplateKey[]).map((key) => {
                      const template = templates[key];
                      return (
                        <button
                          key={key}
                          onClick={() => setActiveTemplate(key)}
                          className={`p-4 rounded-xl border-2 transition-all text-left ${
                            activeTemplate === key
                              ? "border-[#114B5F] bg-blue-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <h3 className="font-bold text-gray-800 mb-1">
                            {template.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {template.subtitle}
                          </p>
                        </button>
                      );
                    })}
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button
                      onClick={copyLink}
                      className="w-full py-3 px-4 border border-gray-300 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                    >
                      <Link2Icon size={18} />
                      Salin Link
                    </button>

                    <button
                      onClick={downloadImage}
                      className="w-full py-3 px-4 bg-[#114B5F] text-white font-semibold rounded-xl hover:bg-[#0d3a4a] transition-colors flex items-center justify-center gap-2"
                    >
                      <Download size={18} />
                      Unduh Gambar
                    </button>

                    <p className="text-center text-sm text-gray-500 mt-4">
                      Atau Bagikan Ke
                    </p>

                    {/* Social Share Buttons */}
                    <div className="grid grid-cols-2 gap-3">
                      {shareActions.map((action, index) => {
                        const IconComponent = action.icon;
                        return (
                          <button
                            key={index}
                            onClick={action.action}
                            className={`py-3 px-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 ${action.color}`}
                          >
                            <IconComponent size={18} />
                            {action.name}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "PREVIEW CARD" && (
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">
                    Preview Template
                  </h3>
                  <p className="text-gray-600">
                    Lihat preview template yang dipilih di sebelah kanan
                  </p>
                </div>
              )}
            </div>

            {/* Right Side - Card Preview */}
            <div>
              <div
                className={`rounded-2xl overflow-hidden shadow-lg ${currentTemplate.bgColor}`}
              >
                {/* Card Header dengan styling berdasarkan template */}
                <div className="relative h-32 bg-linear-to-r from-gray-400 to-gray-600">
                  <img
                    src={umkm.image}
                    alt={umkm.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute top-3 right-3 px-3 py-1 rounded-full ${currentTemplate.accentColor}`}
                  >
                    <span className="text-white text-xs font-bold">
                      {umkm.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4">
                  <h3
                    className={`text-xl font-bold mb-2 ${currentTemplate.textColor}`}
                  >
                    {umkm.title}
                  </h3>
                  <p
                    className={`text-sm mb-3 ${currentTemplate.textColor} opacity-80`}
                  >
                    {umkm.description}
                  </p>

                  <div className="flex items-center gap-2 mb-4">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={currentTemplate.textColor}
                    >
                      <path
                        d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5S14.5 7.62 14.5 9S13.38 11.5 12 11.5Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span
                      className={`text-sm ${currentTemplate.textColor} opacity-70`}
                    >
                      {umkm.location}
                    </span>
                  </div>

                  {/* Footer dengan styling berdasarkan template */}
                  <div className="border-t pt-3">
                    <p
                      className={`text-xs ${currentTemplate.textColor} opacity-60`}
                    >
                      rasaLokal.id
                    </p>
                    <p
                      className={`text-xs ${currentTemplate.textColor} opacity-60`}
                    >
                      Dukung UMKM Indonesia!
                    </p>

                    {/* QR Code placeholder */}
                    <div className="mt-3 flex justify-end">
                      <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center">
                        <div className="w-12 h-12 bg-white rounded grid grid-cols-4 gap-1 p-1">
                          {[...Array(16)].map((_, i) => (
                            <div
                              key={i}
                              className={`${
                                Math.random() > 0.5 ? "bg-black" : "bg-white"
                              } rounded-sm`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}