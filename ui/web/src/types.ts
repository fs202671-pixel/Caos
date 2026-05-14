export type Mode = 'chat' | 'code' | 'projects' | 'memory' | 'image' | 'voice' | 'automation' | 'dev';

export type SphereState = 'logic' | 'creative' | 'learning' | 'active' | 'alert' | 'coherent';

export type Message = {
  id: number;
  role: 'user' | 'ai';
  text: string;
  mode: Mode;
};

export type MemoryItem = {
  id: number;
  text: string;
  type: 'user' | 'conversation' | 'system' | 'code' | 'event';
};

export type InternetMode = 'OFF' | 'ASK' | 'AUTO';

export type RiskLevel = 'low' | 'medium' | 'high';

export type PlannedAction = {
  id: string;
  label: string;
  risk: RiskLevel;
  requiresConfirmation: boolean;
};
