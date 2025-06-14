

export type ServiceID = 'woven-labels' | 'printed-labels' | 'hang-tags' | 'polybags';

export interface Service {
  id: ServiceID;
  title: string;
  description: string;
  shortDesc?: string; // Optional (used only in Services component)
  icon?: React.ReactNode; // Optional (used only in Services component)
}

export interface ServiceDetailProps {
  service: Service;
  onBack: () => void;
}
