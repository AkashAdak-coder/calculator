# Multi-Calculator & Utility Suite

A clean, light, and responsive web application built with vanilla JavaScript, CSS3, and HTML5. This tool combines four distinct calculation utilities into a single tabbed interface, delivering quick answers without external dependencies or heavy frameworks.

---

## 🛠️ Features

### 1. Standard Calculator
* **Basic Arithmetic:** Handles addition (`+`), subtraction (`-`), multiplication (`*`), and division (`/`).
* **Grid Layout:** User-friendly CSS Grid button arrangement.
* **Error Handling:** Gracefully handles invalid mathematical syntax with an `Error` fallback display.

### 2. Age Calculator
* **Exact Age Breakdown:** Calculates precise age in **Years, Months, and Days**.
* **Smart Calendar Logic:** Accounts for leap years and dynamic month-lengths when calculating partial months and days.

### 3. EMI Interest Calculator
* **Bank Standard Formula:** Computes Equated Monthly Installments using the financial standard EMI equation:
  $$EMI = \frac{P \cdot R \cdot (1 + R)^N}{(1 + R)^N - 1}$$
* **Detailed Breakdown:** Displays **Monthly Payment**, **Principal Amount**, **Total Interest**, and total payable amount.

### 4. Weight-to-Price Calculator
* **Flexible Portion Pricing:** Calculates the exact cost of an item based on its price per kilogram and the weight in grams.
* **Proportional Breakdown:** Dynamically scales down the kilogram rate to find the per-gram price, then calculates the final total.
* **Input Validation:** Built-in error catching alerts users instantly if any required fields are left blank or contain invalid numbers.


---

## 🚀 Live Demo & Usage

1. **Clone or Download** the repository to your local machine.
2. Open `index.html` directly in any modern Web Browser (Chrome, Firefox, Safari, Edge).
3. No build step, node modules, or server setup required!

---

## 📂 Project Structure

```text
├── index.html    # Main HTML structure with tab navigation and input views
├── style.css     # Responsive CSS styling, flexbox/grid layout, and tab system
└── script.js    # Core JavaScript event handlers and mathematical logic