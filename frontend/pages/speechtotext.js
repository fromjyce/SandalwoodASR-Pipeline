import React, { useState, useEffect, useRef } from 'react';
import { FaFileAudio, FaMicrophoneSlash, FaMicrophone, FaSyncAlt } from "react-icons/fa";
import Head from "next/head";
import Header from './components/header';
import Footer from './components/footer';
import { SiTicktick } from "react-icons/si";

const translateText = async (text, targetLanguage = "kn") => {
  try {
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
        text
      )}&langpair=en|${targetLanguage}`
    );
    const data = await response.json();
    if (data.responseData) {
      return data.responseData.translatedText;
    } else {
      console.error("Translation API error:", data);
      return "Translation error.";
    }
  } catch (error) {
    console.error("Translation request failed:", error);
    return "Translation failed.";
  }
};

const SpeechToText = () => {
  const [isListening, setIsListening] = useState(false);
  const [recognizedText, setRecognizedText] = useState('');
  const [kanndaText, setKannadaText] = useState('');
  const [error, setError] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadText, setUploadText] = useState('');
  const [isFileProcessed, setIsFileProcessed] = useState(false);
  const [isTextboxVisible, setTextboxVisible] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(false);

  const fileInputRef = useRef(null);

  let recognition;
  if (typeof window !== 'undefined' && 'webkitSpeechRecognition' in window) {
    recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.interimResults = true;
    
    recognition.onstart = () => {
      setIsListening(true);
      setTextboxVisible(true);
    };
    recognition.onerror = (e) => setError(e.error);
    recognition.onend = () => {
      setIsListening(false);
      setTextboxVisible(true);
    };
    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map(result => result[0].transcript)
        .join('');
      setRecognizedText(transcript);
    };
  }

  // useEffect to trigger translation when recognizedText is updated
  useEffect(() => {
    if (recognizedText) {
      const translate = async () => {
        const translated = await translateText(recognizedText, "kn");
        setKannadaText(translated); // Set the translated text
      };
      translate();
    }
  }, [recognizedText]); // This will run whenever recognizedText changes

  const handleStartListening = () => {
    if (recognition) {
      setRecognizedText('');
      setKannadaText(''); // Reset Kannada translation on new recording
      setError(null);
      recognition.start();
    }
  };

  const handleStopListening = () => {
    if (recognition) {
      recognition.stop();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      console.log("File selected:", file.name);
      setTimeout(() => {
        setUploadText(`Processed Audio from ${file.name}`);
        setIsFileProcessed(true);
        setFileUploaded(true);
      }, 2000);
    }
  };

  const handleSubmit = () => {
    if (recognizedText || uploadText) {
      console.log("Submitting text:", recognizedText || uploadText);
    }
  };

  const handleReload = () => {
    setRecognizedText('');
    setKannadaText(''); // Reset Kannada translation
    setSelectedFile(null);
    setUploadText('');
    setIsFileProcessed(false);
    setTextboxVisible(false);
    setError(null);
    setFileUploaded(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  return (
    <>
      <Head>
        <title>SandalwoodAI - Speech to Text</title>
        <meta name="description" content="An AI-powered platform for processing and understanding Kannada audio resources on sandalwood cultivation, enabling users to query and explore indigenous knowledge through speech recognition." />
      </Head>
      <Header />
      <div className='stt-spacer-top'></div>
      <div className="flex flex-col items-center justify-center bg-[#FEF3E2] p-6">
        <h1 className="text-4xl font-bold mb-6 stt-title lexend_deca">Explore Sandalwood Cultivation Through Speech</h1>
        <p className="mb-8 stt-subtitle league_spartan">Record or upload your query and uncover insights from traditional knowledge and modern practices of sandalwood cultivation.</p>
        <div className="w-full max-w-lg bg-[#f9decd] rounded-lg shadow-md p-6 text-center">
          <p className="text-xl font-medium mb-4 poppins stt-option-choose">Choose an option</p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="border border-black rounded-lg p-4 text-center cursor-pointer hover:bg-[#FAE6CD]"
              onClick={isListening ? handleStopListening : handleStartListening}>
              {isListening ? (
                <FaMicrophoneSlash className="text-3xl mx-auto mb-2 text-red-500" />
              ) : (
                <FaMicrophone className="text-3xl mx-auto mb-2 text-green-500" />
              )}
              <p className="text-md font-bold stt-option-choose league_spartan">
                {isListening ? 'Stop Recording' : 'Start Recording'}
              </p>
            </div>
            <div className="border border-black rounded-lg p-4 text-center cursor-pointer hover:bg-[#FAE6CD]">
              <label className="cursor-pointer flex flex-col items-center">
                {fileUploaded ? (
                  <SiTicktick className="text-3xl mb-2 text-green-500" />
                ) : (
                  <FaFileAudio className="text-3xl mb-2 text-blue-500" />
                )}
                <p className="text-md font-bold stt-option-choose league_spartan">
                  {fileUploaded ? 'Audio File Uploaded' : 'Upload Audio File'}
                </p>
                <input 
                  type="file" 
                  accept="audio/*" 
                  className="hidden" 
                  onChange={handleFileChange} 
                  ref={fileInputRef}
                />
              </label>
            </div>
          </div>
          {isTextboxVisible && (
            <div className="border border-black rounded p-4 mb-4 h-24 text-gray-700 overflow-auto league_spartan">
              {recognizedText || (isListening ? 'Listening...' : 'Your speech will appear here')}
            </div>
          )}
          {uploadText && (
            <div className="border border-black rounded p-4 mb-4 text-black league_spartan">
              {uploadText}
            </div>
          )}
          {kanndaText && ( // Display Kannada translation once available
            <div className="border border-black rounded p-4 mb-4 text-black league_spartan">
              <p className="font-bold">Kannada Translation:</p>
              {kanndaText}
            </div>
          )}
          {error && <p className="text-red-500 mb-4 league_spartan">Error: {error}</p>}

          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={handleSubmit}
              className="bg-[#FA812F] league_spartan text-black px-4 py-2 rounded-lg hover:bg-[#FA5D2F] transition font-bold"
              disabled={!recognizedText && !uploadText}
            >
              Submit Query
            </button>
            {(recognizedText || uploadText) && (
              <button
                onClick={handleReload}
                className="text-2xl text-black hover:text-[#FA5D2F] transition"
              >
                <FaSyncAlt />
              </button>
            )}
          </div>
        </div>
      </div>
      <div className='stt-spacer-bottom'></div>
      <Footer />
    </>
  );
};

export default SpeechToText;