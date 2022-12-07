import { Phone } from './Phone';
import { PhoneFullInfo } from './PhoneFullInfo';

export interface PhoneInfo {
  phone: PhoneFullInfo,
  similar: Phone[],
}
