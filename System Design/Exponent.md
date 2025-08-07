# SYSTEM DESIGN INTERVIEW QUESTIONS 

1. **How would you improve YouTube’s recommendation algorithm?**

First I'm not builsing youtube from scratch I'm **iterating on a massive-scale system** that already works. So I’d focus on **incremental, practical improvements**, and I’d show understanding of **trade-offs, user data, and infrastructure**.

## 1. **Start With Understanding the Goal**

> **"The goal of YouTube’s recommendation algorithm is to increase user engagement, session length, and user satisfaction, while respecting personalization and safety."**

Recommendations happen in:

* Homepage
* "Up Next" sidebar
* Notifications
* Subscriptions tab

## 2. **Current Architecture Overview (High Level)**

YouTube likely uses:

* **Two-stage ranking system**:

  1. **Candidate Generation** (from billions of videos → thousands)
  2. **Ranking** (score the candidates → top 10–20)

* Based on:

  * Watch history
  * Engagement (likes, shares, comments)
  * Video metadata (title, tags, description)
  * Embeddings via Deep Learning (user + content)
  * Real-time performance data (CTR, watch time)

## 3. **Areas for Improvement**

Here’s where I'd come in with **suggestions as an engineer who understands performance, data, and system complexity**.

### 🔹 A. **Improve Cold Start Recommendations**

**Problem**: New users and new videos don’t have enough data.

**Fix**:

* Use **collaborative filtering** based on user signup data (region, device, language).
* Use **content-based features**: NLP to analyze title, transcript, and description.
* Leverage **Supabase-style real-time analytics** to quickly incorporate early video engagement.

---

### 🔹 B. **Add More Context-Aware Signals**

**Problem**: Recommendations are sometimes out of context (e.g., work vs. entertainment).

**Fix**:

* Add **temporal and contextual modeling**:

  * Time of day
  * Device type (TV vs mobile vs desktop)
  * Current network speed
* Store user context using **session features** and serve context-specific recommendations.

---

### 🔹 C. **Improve Diversity in Feed**

**Problem**: Users may get stuck in filter bubbles (only one kind of content).

**Fix**:

* Add **diversity penalty** to the ranking model (penalize showing the same creator/topic too frequently).
* Implement **explore slots** in the feed to expose different genres.

---

### 🔹 D. **Incorporate Real-time Feedback**

**Problem**: Recommendations can lag behind real-time trends or dislikes.

**Fix**:

* Use **live feedback signals** (e.g. Not Interested clicks, downvotes, short watch time) to quickly down-rank videos.
* Use tools like **Kafka** or **Supabase Realtime** to stream user activity and apply **stream processing** for faster feedback.

---

### 🔹 E. **Add Explainability to Recommendations**

**Problem**: Users often don’t know *why* a video is recommended.

**Fix**:

* Surface reasons like:

  * “Because you watched X”
  * “Popular in your area”
  * “Similar to your subscriptions”
* This builds trust and helps users provide better feedback.

---

## ✅ 4. **System Impact and Trade-offs**

**What this means for the backend:**

* **Data pipeline complexity increases** (need real-time + batch).
* **Storage grows** (context features, logs, embeddings).
* **Latency must be balanced** (especially on mobile or low bandwidth).
* **Ethical design**: avoid manipulative engagement — use **user satisfaction** metrics.

---

## ✅ 5. **Metrics to Track**

* Average session duration
* Click-through rate (CTR) of recommended videos
* “Not Interested” click rate
* % of repeat creators recommended
* Diversity score (number of different genres/topics shown)

---

## ✅ 6. Example from FinTech World (Your Context)

Just like a **fintech dashboard** might show users relevant offers or financial insights based on spending behavior, YouTube should:

* Track and model behavior
* Adapt recommendations in near real-time
* Prioritize trust and personalization

You could apply **segmentation**, **event logging**, and **machine learning pipelines** in both.

---

## 🧠 Final Statement (How You’d Say It in Interview)

> “I’d improve YouTube’s recommendation system by tackling the cold-start problem, introducing context-aware and diverse recommendations, and using real-time feedback for faster content updates. As a backend engineer, I’d support this with scalable event pipelines, data stores, and real-time inference services, ensuring the system is both responsive and trustworthy at scale.”

---

Ready for the next question?
