
import { Spiel } from './types';

export const DEFAULT_FIREBASE_URL = "https://spiel-master-1a1df-default-rtdb.asia-southeast1.firebasedatabase.app/";
export const GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/1fwwia6g6ClN2dwmayYDAyrWqDC2-Iyx_KopSKy_z5RE/export?format=csv"; 

export const INITIAL_CATEGORIES = [
  'N/A'
];

// Replaced specific Shopee context with generic E-Commerce SOPs
export const SOP_CONTEXT = `
OFFICIAL SELLER SUPPORT SOP (GENERAL GUIDELINES)

1. LOGISTICS & DELIVERY
- Standard Delivery: 3-7 business days for local orders, 14-25 days for international shipping.
- Delayed Orders: Apologize sincerely. Check tracking status. If lost, offer full refund or replacement.
- Address Changes: Allowed only before the order status is "Processed" or "Shipped".
- Delivered but Not Received: Ask customer to check with neighbors/family/reception. If not found, initiate investigation.

2. CANCELLATIONS
- Unpaid Orders: Automatically cancel after set timeframe (e.g., 24h).
- Paid/Unshipped: Customer can request cancellation. Seller approval required if packing has started.
- Shipped: Cancellation is not possible. Customer must refuse delivery or return upon receipt.

3. PRODUCT ISSUES (DAMAGED, WRONG, MISSING)
- Low Value Items: Consider offering a refund or voucher without requiring return to save shipping costs.
- High Value Items: Request clear photo/video evidence. Require return for full refund.
- Wrong Item Sent: Apologize and arrange for exchange or refund.

4. RETURNS & REFUNDS
- Change of Mind: Generally allowed if item is sealed and within return window (e.g., 7 days).
- Refund Processing: 
  - E-wallets: 1-3 business days.
  - Credit Cards: 7-14 business days.
  - Bank Transfer: Up to 30 days.

5. CUSTOMER INTERACTION
- Tone: Professional, Empathetic, Helpful, using "We/Us" to represent the brand.
- Response Time: Aim to reply within 12-24 hours.
- Service Recovery: Use vouchers or discounts for valid complaints to retain customer loyalty.
`;

const baseTime = Date.now();

export const SPIELS: Spiel[] = [];
