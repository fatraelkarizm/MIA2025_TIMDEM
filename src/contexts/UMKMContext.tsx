import React, { createContext, useContext, useState } from 'react';
import DetailCard from '@/components/DetailCard';

interface UMKMData {
  id?: number;
  title: string;
  description: string;
  location: string;
  image: string;
  category: string;
  story?: string;
  socialMedia?: {
    instagram?: string;
    website?: string;
  };
  schedule?: string;
  contact?: {
    phone?: string;
    email?: string;
    whatsapp?: string;
  };
  yearEstablished?: string;
  isOpen?: boolean;
}

interface UMKMContextType {
  selectedUMKM: UMKMData | null;
  openDetailCard: (umkm: UMKMData) => void;
  closeDetailCard: () => void;
}

const UMKMContext = createContext<UMKMContextType | undefined>(undefined);

export const UMKMProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedUMKM, setSelectedUMKM] = useState<UMKMData | null>(null);

  const openDetailCard = (umkm: UMKMData) => {
    setSelectedUMKM(umkm);
  };

  const closeDetailCard = () => {
    setSelectedUMKM(null);
  };

  return (
    <UMKMContext.Provider value={{ selectedUMKM, openDetailCard, closeDetailCard }}>
      {children}
      
      {/* Full DetailCard Component */}
      {selectedUMKM && (
        <div className="fixed inset-0 z-9999">
          <DetailCard 
            umkm={selectedUMKM} 
            onClose={closeDetailCard} 
          />
        </div>
      )}
    </UMKMContext.Provider>
  );
};

export const useUMKM = () => {
  const context = useContext(UMKMContext);
  if (context === undefined) {
    throw new Error('useUMKM must be used within a UMKMProvider');
  }
  return context;
};