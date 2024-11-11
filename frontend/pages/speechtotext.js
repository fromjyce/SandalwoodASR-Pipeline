"use client";
import React, { useState } from 'react';
import { FaFileAudio } from "react-icons/fa6";
import { FaMicrophone } from "react-icons/fa";

const SpeechToText = () => {
  const [isListening, setIsListening] = useState(false);
  const [recognizedText, setRecognizedText] = useState('');
  const [error, setError] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadText, setUploadText] = useState('');

  // Initialize SpeechRecognition
  let recognition;
  if (typeof window !== 'undefined' && 'webkitSpeechRecognition' in window) {
    recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'kn-IN'; // Kannada language setting
    recognition.continuous = false;
    recognition.interimResults = true;
    
    recognition.onstart = () => setIsListening(true);
    recognition.onerror = (e) => setError(e.error);
    recognition.onend = () => setIsListening(false);
    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map(result => result[0].transcript)
        .join('');
      setRecognizedText(transcript);
    };
  }

  // Start or stop listening
  const handleStartListening = () => {
    if (recognition) {
      setRecognizedText('');
      setError(null);
      recognition.start();
    }
  };

  const handleStopListening = () => {
    if (recognition) {
      recognition.stop();
    }
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      // Here, add code to send the file to your backend API for processing (speech recognition)
      console.log("File selected:", file.name);
      // Sample backend processing (simulate with a delay)
      setTimeout(() => {
        setUploadText(`Processed text from ${file.name}`); // Replace with actual result from API
      }, 2000);
    }
  };

  const handleSubmit = () => {
    if (recognizedText || uploadText) {
      console.log("Submitting text:", recognizedText || uploadText);
      // Send recognizedText or uploadText to backend API to perform search
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Speech-to-Text Search</h1>
      
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6 text-center">
        <p className="text-lg font-medium mb-4">Choose an option to search:</p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* Microphone option */}
          <div className="border border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-100"
            onClick={isListening ? handleStopListening : handleStartListening}>
            <FaMicrophone className="text-3xl mx-auto mb-2 text-green-500" />
            <p className="text-md font-medium">
              {isListening ? 'Stop Recording' : 'Start Recording'}
            </p>
          </div>
          
          {/* File Upload option */}
          <div className="border border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-100">
            <label className="cursor-pointer flex flex-col items-center">
              <FaFileAudio className="text-3xl mb-2 text-blue-500" />
              <p className="text-md font-medium">Upload Audio File</p>
              <input type="file" accept="audio/*" className="hidden" onChange={handleFileChange} />
            </label>
          </div>
        </div>

        {/* Display recognized text from microphone */}
        <div className="border border-gray-300 rounded p-4 mb-4 h-24 text-gray-700 overflow-auto">
          {recognizedText || (isListening ? 'Listening...' : 'Your speech will appear here')}
        </div>

        {/* Display processed text from uploaded file */}
        {uploadText && (
          <div className="border border-gray-300 rounded p-4 mb-4 text-gray-700">
            {uploadText}
          </div>
        )}

        {error && <p className="text-red-500 mb-4">Error: {error}</p>}
        
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          disabled={!recognizedText && !uploadText}
        >
          Submit Query
        </button>
      </div>
    </div>
  );
};

export default SpeechToText;
