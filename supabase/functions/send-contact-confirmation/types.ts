
export interface ContactConfirmationRequest {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  isNotification?: boolean;
  isConfirmation?: boolean;
}
