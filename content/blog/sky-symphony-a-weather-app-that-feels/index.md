---
title: Sky Symphony: A Weather App That Feels
date: 2025-09-18
slug: "sky-symphony-a-weather-app-that-feels"
author: "Liliya"
cover: "./cover.jpg"
tags: ["news", "journey"]
---
> “Forecasts with feeling—explore the sky’s mood in motion.”

Sky Symphony isn’t just a weather app—it’s a design experiment in emotional data. Built with React, Tailwind CSS, and Plotly.js, it transforms raw weather metrics into a poetic, interactive experience. From glowing charts to animated cards, every element is crafted to feel like a living interface.

### ✨ What Makes It Different

- **Cosmic UI**: Inspired by glassmorphism and neon gradients, the app glows with layered transparency, soft shadows, and animated transitions.
- **Interactive Forecasts**: Toggle between hourly and 7-day views, switch chart types (bar or line), and explore temperature, wind, or rain metrics.
- **Responsive & Accessible**: Styled with Tailwind CSS, the layout adapts beautifully across devices and screen sizes.
- **Data-Driven Design**: Weather data is fetched from OpenWeatherMap’s One Call API and visualized with Plotly.js  and Framer Motion.

### 🖼️ Screenshots

Here are a few snapshots from the live app:

- **Landing View**: A glowing hero section with the tagline and search bar.
- **Hourly Chart**: A neon cyan line or bar chart with animated entrance and hover tooltips.
- **Forecast Cards**: Responsive weather cards with icons, temperature, wind, and rain metrics.

> You can explore the live app on Netlify.

### 💻 Code Snippets

Here’s how the chart is rendered using Plotly and Framer Motion:

jsx

```
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="w-full max-w-5xl mx-auto bg-[#1e1e2f] backdrop-blur-md border border-[#00ffe0] rounded-xl p-6 shadow-[0_0_30px_rgba(0,255,224,0.4)]"
>
  <Plot
    data={[{
      x: hours,
      y: hourly.map(h => h.temp),
      type: chartType === "bar" ? "bar" : "scatter",
      marker: {
        color: "rgba(0,255,224,0.8)",
        line: { color: "rgba(255,110,199,0.8)", width: 0.6 }
      },
      hoverinfo: "text"
    }]}
    layout={{
      paper_bgcolor: "rgba(30,30,47,0.8)",
      plot_bgcolor: "rgba(30,30,47,0.6)",
      hoverlabel: {
        bgcolor: "#1e1e2f",
        bordercolor: "#00ffe0",
        font: { color: "#ff6ec7", size: 14 }
      }
    }}
  />
</motion.div>

```

### 🧠 Behind the Scenes

Designing Sky Symphony was a process of iteration and intuition. Here's a glimpse into how it came together:

- **Mood First**: I started with the tagline—“Forecasts with feeling”—and built the UI to reflect that emotional tone.
- **Chart Experiments**: I tested multiple libraries before settling on Plotly for its flexibility and hover customization.
- **Responsive Refinement**: I used Tailwind’s utility classes to fine-tune spacing, alignment, and mobile behavior.
- **Animation Layer**: Framer Motion brought the interface to life, from chart entrances to card reveals.

### 🔮 What’s Next

I’m planning to add:

- “Feels like” vs “Actual” temperature toggle
- Animated weather icons and transitions
- Night mode synced with local sunset data
- Blog integration via Contentful CMS

<<<<<<< HEAD
=======



>>>>>>> 2d1523cb82737d5986242513face83e3569f2ef0
