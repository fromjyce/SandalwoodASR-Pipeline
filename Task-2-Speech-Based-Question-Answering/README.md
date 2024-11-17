# **Task 2: Speech-Based Question Answering**  

## **Objective**  
Develop a pipeline and platform where users can query the processed audio database using speech or text and receive relevant segments with contextual answers in Kannada and English.  

---

## **Challenges**  
1. **Query Matching:** Matching user queries to relevant segments within the audio database required advanced NLP techniques.  
2. **Real-Time Responses:** Ensuring the system processed queries and returned results efficiently.  
3. **User Accessibility:** Providing intuitive options for speech and text inputs while catering to bilingual audiences.  

---

## **Approach**  

### **Step 1: User Query Input**  
- **Speech Query:** Users record or upload their question.  
- **Text Query:** Users type their question in Kannada or English.  

### **Step 2: Speech-to-Text Conversion**  
- **Tool Used:** Task 1 ASR pipeline.  
- **Purpose:** Convert speech queries into text for processing.  

### **Step 3: Semantic Search and Answer Retrieval**  
- **LLM Integration:** Leveraged pre-trained language models to process user queries and perform semantic search across the database.  
- **Purpose:**  
  - Identify relevant segments of audio and text.  
  - Generate coherent answers based on query intent.  

### **Step 4: Bilingual Results**  
- Results are displayed in both Kannada and English for accessibility.  
- Corresponding audio segments are linked for playback.  

### **Step 5: Platform Implementation**  
- **Frontend:** Next.js and Tailwind CSS for a user-friendly interface.  
- **Backend:** Django for efficient processing and database management.  

---

## **Platform Features**  

### **Search Options**  
1. **Audio-Based Queries:** Users upload or record audio questions.  
2. **Text-Based Queries:** Users type questions in Kannada or English.  

### **Results Display**  
- Bilingual answers in Kannada and English.  
- Linked audio segments for playback.  
- Translation and transliteration features for non-Kannada users.  

---

## **Outcomes**  
1. Seamless query resolution in both speech and text formats.  
2. Contextually relevant answers with playback options.  
3. Intuitive, user-friendly interface for diverse audiences.  