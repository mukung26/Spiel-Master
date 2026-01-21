import { Spiel } from './types';

export const DEFAULT_FIREBASE_URL = "https://spiel-master-1a1df-default-rtdb.asia-southeast1.firebasedatabase.app/";
export const GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/1fwwia6g6ClN2dwmayYDAyrWqDC2-Iyx_KopSKy_z5RE/export?format=csv"; 

export const INITIAL_CATEGORIES = [
  'N/A',
  'Logistics',
  'Order & Payment',
  'Return/Refund',
  'Account & Security',
  'Marketing',
  'General Enquiries'
];

// Extracted from the provided PDF/OCR content
export const SOP_CONTEXT = `
OFFICIAL SHOPEE CS SOP (STRICT ADHERENCE REQUIRED)

1. LOGISTICS & DELIVERY
- Delivery Timeframes:
  - Brazil (BR): 12-20 days.
  - Philippines (PH), Singapore (SG), Vietnam (VN), Taiwan (TW): 5-7 days (PH up to 9).
  - Malaysia (MY): 5-10 days.
  - Thailand (TH): 2-7 days.
- Stuck in Customs/Tax (BR): 
  - If tax notice received: Custumer must pay via 'Minhas Importações' on Correios.
  - If refused/unpaid: Order cancels automatically (or customer fills refusal form).
  - Invalid CPF (BR): Customer must update CPF on Federal Revenue website and Shopee app.
- No Movement/Delay:
  - If within Estimated Delivery Time (EDT): Ask to wait.
  - If exceeded EDT: Apologize, offer 10% voucher (cap $1, no min spend), suggest refund request if very late.
  - "Delivered" but not received: Check neighbors/family. If not found, request Refund -> "Order Not Received".
- Change Address:
  - "To Pay" / "To Ship" (Not processed): Customer can change in app once.
  - "To Ship" (Processed/Printed) or "Shipped": Cannot change. Advise to cancel (if possible) or refuse delivery.

2. CANCELLATIONS
- Status "To Pay": Customer can cancel or ignore (auto-cancels).
- Status "To Ship": Customer can request cancel. If seller hasn't arranged shipment, it auto-processes. If arranged, seller decides.
- Status "Shipped": Cannot cancel. Customer must refuse delivery or request Return/Refund after receipt.
- "Selected items can't be checked out": Different shipping locations. Checkout separately.

3. PRODUCT ISSUES (DAMAGED, WRONG, MISSING)
- Order Amount <= $1: 
  - Offer 100% Voucher to keep item. No return needed.
- Order Amount > $1 AND <= $5:
  - Ask for photo/video evidence.
  - Offer 100% Voucher to keep item. No return needed.
- Order Amount > $5:
  - Ask for evidence.
  - Escalate to L2 Team (Specialist) or advise Return & Refund. L2 can issue vouchers >$5.

4. CHANGE OF MIND (RECEIVED ITEM)
- Policy: Return is allowed if within guarantee period.
- Retention Strategy (Try this first): 
  - Offer 10% Voucher (Cap $1) to keep the item.
  - If refused: Accept Return & Refund.

5. PRODUCT NOT MATCHING DESCRIPTION
- Unclear/Misleading PDP:
  - Order <= $1: 50% Voucher (Cap $1).
  - Order > $1: Ask evidence. Offer 100% Voucher (Cap $1/$3/$5 depending on value) to keep item.
  - > $5: Escalate to L2.

6. REFUNDS
- Times: ShopeePay (1-3 days), Credit Card (7-14 days), Bank (up to 60 days).
- Amount Mismatch: Refund is for Product Price only. Tax/Shipping fees are usually non-refundable or handled separately depending on site/scenario.

7. GENERAL & MARKETING
- Dropshipping: Not supported. Recommend Affiliate program.
- Vouchers: If robot didn't send review voucher -> For SCS: Escalate L2. For LVT: Resend manually.
- Chat Tone: Professional, Empathetic, "We/Us" (acting as the Seller).
`;

const baseTime = Date.now();

export const SPIELS: Spiel[] = [
  {
    id: "pdf-1",
    category: "Logistics",
    title: "DAYS TO DELIVER | DELIVERY TIME FRAME",
    english: "We estimate that the package will be delivered to Brazil within 12-20 days. However, due to uncontrollable factors such as customs clearance and weather conditions, the actual delivery time may vary.",
    brazil: "Estimamos que o pacote será entregue no Brasil em 12 a 20 dias. No entanto, devido a fatores incontroláveis, como desembaraço aduaneiro e condições climáticas, o tempo real de entrega pode variar.",
    createdAt: baseTime
  },
  {
    id: "pdf-2",
    category: "Account & Security",
    title: "ANJUN SCAM WARNING",
    english: "Don't worry, disregard this message. You won't need to pay anything, as the payment has already been made in the Shopee app.\n\nRest assured that this will not affect the delivery of your order.\n\n⚠️ Some people are impersonating **Anjun Express** to scam buyers.\n🔹 **We never** request payments via WhatsApp, email, SMS, or phone.\n🔹 Don't trust messages requesting deposits, transfers, or gift cards.\n👉 Please block the number that contacted you and you can report the issue to the Shopee Brazil Team.\n\nLink: https://anjunexpress.com.br/",
    brazil: "Não se preocupe, desconsidere esta mensagem. Você não precisará pagar nada, pois o pagamento já foi feito no aplicativo Shopee.\n\nTenha certeza de que isso não afetará a entrega do seu pedido.\n\n⚠️ Algumas pessoas estão se passando pela **Anjun Express** para enganar os compradores.\n🔹 **Nunca** solicitamos pagamentos por WhatsApp, e-mail, SMS ou telefone.\n🔹 Não confie em mensagens que solicitam depósitos, transferências ou vales-presente.\n👉 Por favor, bloqueie o número que entrou em contato e você poderá denunciar à Equipe da Shopee Brasil.",
    createdAt: baseTime - 100
  },
  {
    id: "pdf-3",
    category: "Order & Payment",
    title: "REQUEST TO CANCEL- IN PREPARATION",
    english: "Hello ❤️, thank you for your message. I can see your Order is still in the “Request in preparation” stage — it hasn’t been shipped yet, which is great news because there’s still time to stop it.\n\n**How to stop the order in the Shopee App:**\n1. Open the **Shopee App**.\n2. Go to **Me tab → To Ship → Select your order**.\n3. Tap **Request to Stop Order**.\n4. Select the reason (e.g., “Ordered wrong item/variation”) and confirm.",
    brazil: "Olá ❤️, obrigada pela sua mensagem. Vejo que seu pedido ainda está na fase \"Em preparação\" — ele ainda não foi enviado, o que é ótimo, pois ainda há tempo para cancelá-lo.\n\n**Como cancelar o pedido no app Shopee:**\n1. Abra o app Shopee.\n2. Acesse a aba **Eu → A enviar → Selecione seu pedido**.\n3. Toque em **Solicitar cancelamento do pedido**.\n4. Selecione o motivo (por exemplo, \"Pedi o item/variação errado\") e confirme.",
    createdAt: baseTime - 200
  },
  {
    id: "pdf-4",
    category: "Logistics",
    title: "REQUEST TO CANCEL- IMPORT CUSTOMS",
    english: "I checked the tracking and your parcel has already arrived in Brazil and is currently under inspection at import customs. At this stage, the parcel is in the hands of Brazilian customs.\n\nNo worries! If customs releases the parcel, it will continue to your local courier for delivery.\n\n✅ Don’t worry — your payments is fully protected by Shopee’s Buyer Guarantee. You will either receive your order or get a refund.",
    brazil: "Verifiquei o rastreamento e seu pacote já chegou ao Brasil e está atualmente sob inspeção na alfândega de importação. Nesta fase, o pacote está nas mãos da alfândega brasileira.\n\nNão se preocupe! Se a alfândega liberar o pacote, ele continuará para a sua transportadora local para entrega.\n\n✅ Não se preocupe — seus pagamentos estão totalmente protegidos pela Garantia Shopee. Você receberá seu pedido ou receberá um reembolso.",
    createdAt: baseTime - 300
  },
  {
    id: "pdf-5",
    category: "Order & Payment",
    title: "REQUEST TO CANCEL - ALL AROUND CANCELLATION",
    english: "Hi! We completely understand you want to discontinue the order.\n\nHowever, since your order is already in transit/preparing, it’s no longer possible to abort the shipment. You can still refuse to accept the package when it arrives; if you do so, please let Shopee know through the app.\n\nDelivery usually takes 12 to 20 days. Once shipped, you can track it in real-time.",
    brazil: "Olá! Compreendemos perfeitamente sua solicitação de cancelamento.\n\nNo entanto, como seu pedido já está em trânsito/preparação, não é mais possível cancelar o envio. Você ainda pode recusar o pacote quando ele chegar; se optar por fazê-lo, informe à Shopee pelo aplicativo.",
    createdAt: baseTime - 350
  },
  {
    id: "pdf-6",
    category: "Order & Payment",
    title: "CANCELLED - INVALID PAYMENT",
    english: "Hi ❤️, thanks for your message. I checked and it looks like there was a problem with your payment— the system doesn't show a confirmed payment date or a generated tracking code.\n\nThis usually means the payment was not completed successfully. If Shopee detects this, the refund will be automatically processed to your original payment method.",
    brazil: "Olá ❤️, obrigada pela sua mensagem. Verifiquei e parece que houve um problema com o pagamento do seu pedido — o sistema não exibe uma data de confirmação de pagamento nem um código de rastreamento gerado.\n\nIsso geralmente significa que o pagamento não foi concluído com sucesso. Se a Shopee detectar isso, o reembolso será processado automaticamente para o seu método de pagamento original.",
    createdAt: baseTime - 400
  },
  {
    id: "pdf-7",
    category: "Logistics",
    title: "CANCELLED - CONFISCATED BY CUSTOMS",
    english: "Hello ❤️, I apologize for what happened with your order. It was automatically canceled after arriving in Brazil due to customs restrictions.\n\nThe good news is that Shopee Guarantee ensures that the amount paid will be refunded to your original payment method. You'll be notified via an in-app notification once processed.",
    brazil: "Olá ❤️, peço desculpas pelo ocorrido. O pedido foi cancelado automaticamente após a chegada no Brasil devido a restrições alfandegárias.\n\nA boa notícia é que a Garantia Shopee garante que o valor pago será reembolsado ao seu método de pagamento original. Você será notificado via app assim que processado.",
    createdAt: baseTime - 500
  },
  {
    id: "pdf-8",
    category: "Logistics",
    title: "CANCELLED - DID NOT SHIP",
    english: "I’m truly sorry your order was not shipped within the required time and was automatically cancelled by the Shopee system.\n\n- You will receive a full refund to your original payment method (ShopeePay, credit card, etc.).\n- No worries — any Shopee coins and vouchers used will also be automatically returned to your account.",
    brazil: "Sinto muito que seu pedido não tenha sido enviado no prazo e tenha sido cancelado automaticamente pelo sistema.\n\n- Você receberá o reembolso total no seu método de pagamento original.\n- Não se preocupe — quaisquer moedas Shopee e cupons usados também serão devidamente devolvidos.",
    createdAt: baseTime - 600
  },
  {
    id: "pdf-9",
    category: "Marketing",
    title: "VOUCHER REDEMPTION STEPS",
    english: "Here is the discount voucher code for you! 🎊\nCode: _CODE_\n\nTo redeem your voucher, follow these steps:\n1️⃣ Log in to the Shopee app.\n2️⃣ Go to **Me ➡ My Wallet ➡ My Vouchers**.\n3️⃣ Click on **Enter promo code**.\n4️⃣ Enter the voucher code provided.\n5️⃣ Save the voucher to your account.",
    brazil: "Aqui está o código do cupom de desconto para você! 🎊\nCódigo: _CODE_\n\nPara resgatar seu cupom, siga estes passos:\n1️⃣ Faça login no app Shopee.\n2️⃣ Vá em **Eu ➡ Minha Carteira ➡ Meus Cupons**.\n3️⃣ Clique em **Inserir código promocional**.\n4️⃣ Insira o código do cupom.\n5️⃣ Salve o cupom em sua conta.",
    createdAt: baseTime - 800
  },
  {
    id: "pdf-10",
    category: "Return/Refund",
    title: "WHEN CAN I GET MY REFUND? (SLA)",
    english: "Refund timelines per method:\n🔸 Pix: Up to 3 consecutive days.\n🔸 Credit Card: 3 to 5 consecutive days.\n🔸 Ticket (Boleto): 3 consecutive days (to bank) or 1 day (to ShopeePay).\n🔸 ShopeePay: Within 1 calendar day.\n🔸 Installments: Up to 7 calendar days.",
    brazil: "Prazos de reembolso por método:\n🔸 Pix: Até 3 dias corridos.\n🔸 Cartão de Crédito: 3 a 5 dias corridos.\n🔸 Boleto Bancário: 3 dias corridos (banco) ou 1 dia (ShopeePay).\n🔸 ShopeePay: Em até 1 dia corrido.\n🔸 Parcelamentos: Pode levar até 7 dias corridos.",
    createdAt: baseTime - 850
  },
  {
    id: "pdf-11",
    category: "Return/Refund",
    title: "DELIVERED BUT NOT RECEIVED",
    english: "We apologize that your order is tagged as delivered but you did not receive it.\n\n🔎 Please follow these steps:\n1. Confirm the address registered on the order.\n2. Ask neighbors or close family members.\n3. Try contacting the delivery person (check order details for number).\n\nIf you still can’t locate it, just let us know!",
    brazil: "Pedimos desculpas por seu pedido constar como entregue sem você ter recebido.\n\n🔎 Siga estes passos:\n1. Confirme o endereço no pedido.\n2. Pergunte a vizinhos ou familiares.\n3. Tente contato com o entregador (veja o número nos detalhes do pedido).",
    createdAt: baseTime - 900
  },
  {
    id: "pdf-12",
    category: "Account & Security",
    title: "INVALID CPF FIX",
    english: "We understand you are concerned. Your order was stopped by Shopee Brazil due to an invalid CPF entered during checkout.\n\nTo resolve this, update your CPF here: https://help.shopee.com.br/portal/webform/ff3fc6ce2be94a38a83f75067f3959a3",
    brazil: "Entendemos sua preocupação. Seu pedido foi interrompido pela Shopee Brasil devido a um CPF inválido no checkout.\n\nPara resolver, atualize seu CPF aqui: https://help.shopee.com.br/portal/webform/ff3fc6ce2be94a38a83f75067f3959a3",
    createdAt: baseTime - 950
  },
  {
    id: "pdf-13",
    category: "Return/Refund",
    title: "COUNTER OFFER STEPS",
    english: "How to Accept a Partial Refund (Counteroffer):\n1. Open Shopee App > **Me (Eu)**.\n2. Tap **Returns/Refunds (Devolução/Reembolso)**.\n3. Find your order > **View Partial Refund (Ver Reembolso Parcial)**.\n4. Tap **Accept Partial Refund (Aceitar Reembolso Parcial)**.\n5. Tap **Confirm**.",
    brazil: "Como aceitar um reembolso parcial (Contraproposta):\n1. Abra o App > **Eu**.\n2. Toque em **Devolução/Reembolso**.\n3. Busque o pedido > **Ver Reembolso Parcial**.\n4. Toque em **Aceitar Reembolso Parcial**.\n5. Toque em **Confirmar**.",
    createdAt: baseTime - 1000
  },
  {
    id: "pdf-14",
    category: "General Enquiries",
    title: "PROFANITY / RESPECTFUL CONVERSATION",
    english: "I completely understand your frustration, and I truly appreciate your patience. However, to ensure we can assist you effectively, it’s important we keep the conversation respectful and calm.\n\nWe’re really thankful for your understanding. 🥺",
    brazil: "Compreendo sua frustração e agradeço sua paciência. No entanto, para ajudarmos você da melhor forma, é importante mantermos a conversa respeitosa e calma.\n\nAgradecemos sua compreensão. 🥺",
    createdAt: baseTime - 1100
  },
  {
    id: "pdf-15",
    category: "Order & Payment",
    title: "CHECK OUT MULTIPLE COLOR/VARIATION",
    english: "Hello ❤️, to buy 2 or more different colors of the same product, add each color to your cart separately:\n1. Open product page > Select **first color** > **Add to Cart**.\n2. Go back > Select **second color** > **Add to Cart**.\n3. Go to cart > **Check Out** together.",
    brazil: "Olá ❤️, para comprar 2 ou mais cores, adicione cada uma separadamente:\n1. Na página do produto > Selecione a **primeira cor** > **Adicionar ao Carrinho**.\n2. Volte > Selecione a **segunda cor** > **Adicionar ao Carrinho**.\n3. Vá ao carrinho > **Finalizar Compra**.",
    createdAt: baseTime - 1200
  },
  {
    id: "pdf-16",
    category: "Logistics",
    title: "TAXED (HOW TO PAY)",
    english: "Your package has been taxed by local customs. You can check the amount and pay the tax via the **'Minhas Importações'** section on the Correios website. 📦🤝",
    brazil: "Seu pacote foi taxado pela alfândega. Você pode verificar o valor e pagar a taxa através da seção **'Minhas Importações'** no site dos Correios. 📦🤝",
    createdAt: baseTime - 1300
  },
  {
    id: "pdf-17",
    category: "Marketing",
    title: "DISCOUNT / COUPON LINKS",
    english: "Hi! 😊 Check out these great coupons and free shipping vouchers!\n🔥 Limited Choice: https://shopee.com.br/choice_oficial.br\n⏰ More Coupons: https://shopee.com.br/m/cupom-de-desconto\n🚚 Free Shipping: https://shopee.com.br/m/frete-gratis",
    brazil: "Oi! 😊 Confira estes cupons e frete grátis!\n🔥 Cupom Choice: https://shopee.com.br/choice_oficial.br\n⏰ Mais Cupons: https://shopee.com.br/m/cupom-de-desconto\n🚚 Frete Grátis: https://shopee.com.br/m/frete-gratis",
    createdAt: baseTime - 1400
  },
  {
    id: "pdf-18",
    category: "Logistics",
    title: "CHANGE ADDRESS - IN PREPARATION",
    english: "Hello ❤️, your order is still in preparation. You can update your address once in the app:\n1. Open Shopee App > **Me → My Purchases → To Ship**.\n2. Select order > Tap **CHANGE** beside “Delivery Address”.\n3. Choose/Add new address and confirm.",
    brazil: "Olá ❤️, seu pedido ainda está em preparação. Você pode alterar o endereço uma vez no app:\n1. Abra o App > **Eu → Minhas Compras → Para Enviar**.\n2. Selecione o pedido > Toque em **ALTERAR** em \"Endereço de Entrega\".",
    createdAt: baseTime - 1500
  },
  {
    id: "pdf-19",
    category: "Logistics",
    title: "STOPPED AT CUSTOMS (CORREIOS)",
    english: "I understand your concern. Your package is being held at import customs. This is a normal step. If the carrier is Correios, check their website with your tracking code: https://www.correios.com.br/",
    brazil: "Entendo sua preocupação. Seu pacote está retido na alfândega. É um passo normal. Se for Correios, verifique no site deles com o código de rastreio: https://www.correios.com.br/",
    createdAt: baseTime - 1600
  },
  {
    id: "pdf-20",
    category: "Logistics",
    title: "STUCK ORDER / DELAYED",
    english: "We're sorry the package seems delayed. This happens due to high shipping volume. Rest assured, we're monitoring the tracking. Delivery usually takes 12 to 20 days. 📦✨",
    brazil: "Lamentamos o atraso. Isso ocorre devido ao alto volume de envios. Estamos monitorando o rastreamento. A entrega costuma levar de 12 a 20 dias. 📦✨",
    createdAt: baseTime - 1700
  },
  {
    id: "pdf-21",
    category: "Account & Security",
    title: "SHOPEE AFFILIATE BRAZIL",
    english: "Hello! 😊 Becoming a Shopee Affiliate is simple and free!\n✅ 18+ years old\n✅ Public social media account\n✅ Real info\nRegister: https://affiliate.shopee.com.br",
    brazil: "Olá! 😊 Ser um Afiliado Shopee é simples e grátis!\n✅ 18+ anos\n✅ Rede social pública\n✅ Dados reais\nInscreva-se: https://affiliate.shopee.com.br",
    createdAt: baseTime - 1800
  },
  {
    id: "pdf-22",
    category: "Order & Payment",
    title: "PAY ON DELIVERY / COD",
    english: "Hello ❤️, currently Cash on Delivery (COD) is not available for our store. Shopee requires in-app payment via Credit Card, Pix, or Boleto. 🔒",
    brazil: "Olá ❤️, no momento o Pagamento na Entrega (COD) não está disponível. A Shopee exige pagamento via App (Cartão, Pix ou Boleto). 🔒",
    createdAt: baseTime - 1900
  },
  {
    id: "pdf-23",
    category: "General Enquiries",
    title: "INVOICE / RECEIPT INFO",
    english: "Shopee does not issue receipts for international orders. Use your order confirmation or transaction history as proof. More info: https://help.shopee.com.br/portal/4/article/76358",
    brazil: "A Shopee não emite recibos para pedidos internacionais. Use a confirmação do pedido ou histórico como prova. Mais info: https://help.shopee.com.br/portal/4/article/76358",
    createdAt: baseTime - 2000
  },
  {
    id: "pdf-24",
    category: "General Enquiries",
    title: "HOW TO LIVE STREAM FOR CHOICE",
    english: "Want to be a live seller? Send a presentation to our official social media (FB/IG) saying you'd like to work with Choice! 🎤✨",
    brazil: "Quer vender ao vivo? Envie uma apresentação em nossas redes sociais (FB/IG) dizendo que quer trabalhar com a Choice! 🎤✨",
    createdAt: baseTime - 2100
  },
  {
    id: "pdf-25",
    category: "Logistics",
    title: "CANCELLED IN TRANSIT",
    english: "Unfortunately, your order was cancelled by Shopee due to detected abnormalities. This is an automated system decision for your protection. We apologize for the inconvenience. 💖",
    brazil: "Infelizmente, seu pedido foi cancelado pela Shopee por anormalidades detectadas. Foi uma decisão do sistema para sua proteção. Sinto muito. 💖",
    createdAt: baseTime - 2200
  }
];