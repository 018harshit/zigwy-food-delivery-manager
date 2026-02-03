# ZIGWY – Online Food Delivery Order Manager

## 📌 Objective
The objective of this project is to develop and deploy a web application that manages food delivery orders and automatically assigns delivery to the nearest unpaid order.  
The application focuses on filtering logic, prioritization algorithms, clean UI, and deployment.

---

## 🧱 Technology Stack
- HTML – User Interface structure
- CSS – Styling, animations, dark mode
- JavaScript – Application logic
- Vercel – Deployment platform

---

## 📊 Data Model
Each order contains the following fields:

- orderId – Unique order identifier
- restaurantName – Name of the restaurant
- itemCount – Number of items ordered
- isPaid – Payment status (Paid / Unpaid)
- deliveryDistance – Distance in kilometers

---

## ✅ Features Implemented

### 1. Add Order
- Users can add new food orders using the Add Order form.
- Input validation is applied to avoid empty or invalid entries.

### 2. View All Orders
- All existing orders are displayed in a tabular format.
- Paid and unpaid orders are visually distinguished.

### 3. Filter Orders
- Filter orders by:
  - Paid / Unpaid status
  - Maximum delivery distance (≤ X km)

### 4. Assign Delivery
- Only unpaid orders are considered for assignment.
- The nearest unpaid order within the given distance is assigned.
- If no suitable order exists, the system displays:
  **"No order available"**

---

## 🖥️ Mandatory UI Components
The application includes all mandatory UI requirements:

- Add Order Form  
- Orders Listing Screen  
- Filter & Assign Screen  
- Output Display Panel  

Each section is clearly separated for better usability.

---

## 🎨 UI Enhancements
- Company branding (ZIGWY)
- Modern card-based layout
- Paid / Unpaid status indicators
- Dark mode toggle
- Smooth animations and hover effects

---

## 🧠 Logic Explanation
- Orders are stored in a JavaScript array.
- Filtering is done using array filter functions.
- Nearest order is selected by sorting unpaid orders based on distance.
- Assignment updates the order status dynamically.

---

## 🚀 Deployment
The project is deployed on **Vercel** and is publicly accessible.

🔗 Live URL:  
https://zigwy-food-delivery-manager.vercel.app/

---

## 📂 GitHub Repository
🔗 Repository Link:  
https://github.com/018harshit/zigwy-food-delivery-manager.git

---

## 🎥 Demo Video
A 2-minute demo video is included explaining:
- Application features
- Assignment logic
- UI and deployment

---

## 👨‍💻 Author
**Harshit Chaudhary**

---
