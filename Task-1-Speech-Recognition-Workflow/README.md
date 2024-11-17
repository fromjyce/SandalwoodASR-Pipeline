# **Task 1: Speech Recognition Workflow**  

### **Objective**  
Develop an Automatic Speech Recognition (ASR) pipeline to process colloquial Kannada speech, particularly in the context of sandalwood cultivation. The goal was to convert noisy, colloquial audio into accurate text for downstream processing.

---

### **Challenges**  
1. **Colloquial Language:** Unlike formal Kannada, colloquial speech varies in pronunciation, vocabulary, and syntax, which posed a challenge for existing models.  
2. **Noisy Audio:** Audio files recorded in public places often contained background noise, requiring sophisticated preprocessing.  
3. **Lack of Dataset Standardization:** The dataset was scraped from YouTube, and the audio quality and style varied significantly.  

---

### **Approach**  
We designed a modular pipeline to address these challenges, incorporating cutting-edge tools for preprocessing, transcription, and refinement.  

#### **Step 1: Speech Input**  
- Users can upload or record audio directly on the platform.  
- Audio formats such as `.wav`, `.mp3`, and `.aac` are supported for flexibility.  

#### **Step 2: Denoising**  
- **Tool Used:** META Research’s Denoiser DNS 64.  
- **Purpose:** Remove ambient noise, ensuring clarity for further processing.  

#### **Step 3: Voice Enhancement**  
- **Tool Used:** Pyannote-audio-enhancer.  
- **Purpose:** Improve the quality of the voice signal, enhancing model transcription accuracy.  

#### **Step 4: Speech Segmentation**  
- **Tool Used:** Pyannote Speech Segmentation.  
- **Purpose:** Segment audio into smaller chunks, improving transcription performance and scalability.  
- **Output:** Additional samples created for model fine-tuning.  

#### **Step 5: Kannada Transcription**  
- **Model Used:** Whisper-Kannada-tiny (fine-tuned for colloquial Kannada).  
- **Purpose:** Transcribe audio into Kannada text.  

#### **Step 6: Punctuation and Transliteration**  
- **Tool Used:** AI4Bharat model.  
- **Purpose:**  
  - Add punctuation to the Kannada text for readability.  
  - Transliterate Kannada text to English and translate the content for bilingual accessibility.  

#### **Step 7: Grammar and Spell Check**  
- **Tool Used:** Open-source grammar tools integrated into the pipeline.  
- **Purpose:** Refine the English text for grammar and spelling accuracy, ensuring clarity for users.  

---

### **Outcomes**  
1. Accurate transcription of noisy, colloquial Kannada speech into text.  
2. Seamless bilingual support for Kannada and English.  
3. Prepared dataset ready for search and query processing.  