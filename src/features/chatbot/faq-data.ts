export type FAQRule = {
  id: string;
  keywords: string[];
  response: string;
};

// In Phase 5, this data will be moved to PostgreSQL so the Admin can edit it via a dashboard.
// For now, we store it in this static file to avoid expensive AI API costs.
export const defaultFaqData: FAQRule[] = [
  {
    id: "entrance",
    keywords: ["entrance", "day tour", "how much", "fee", "rates"],
    response: "Our day tour entrance fee is ₱150 for adults and ₱100 for kids. We are open for day tours from 7:00 AM to 5:00 PM!"
  },
  {
    id: "cottage",
    keywords: ["cottage", "table", "hut", "tent"],
    response: "We have open-air cottages starting at ₱800 (good for 10 pax) up to our large pavilions for ₱2,500."
  },
  {
    id: "corkage",
    keywords: ["corkage", "food", "drinks", "bring", "lechon"],
    response: "Good news! There is NO corkage fee for outside food! We only charge for whole Lechon (₱500) and outside alcoholic beverages (₱50/bottle)."
  },
  {
    id: "room",
    keywords: ["room", "overnight", "stay", "hotel", "check in", "sleep"],
    response: "Our air-conditioned overnight rooms start at ₱2,500/night for 2 pax, complete with complimentary breakfast. You can check availability on our Booking Calendar!"
  },
  {
    id: "book",
    keywords: ["book", "reserve", "reservation", "schedule"],
    response: "You can easily book a room or cottage by clicking the 'Check Availability' button on our main page!"
  }
];
