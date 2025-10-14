// src/api.js
import config from './config';

export const uploadPDF = async (file) => {
  const formData = new FormData();
  formData.append('pdf', file);

  const res = await fetch(`${config.API_BASE_URL}/upload`, {
    method: 'POST',
    body: formData
  });

  if (!res.ok) throw new Error('Upload failed');
  return res.json();
};

export const askQuestion = async (sessionId, question) => {
  const res = await fetch(`${config.API_BASE_URL}/query`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sessionId, question })
  });

  if (!res.ok) throw new Error('Query failed');
  return res.json();
};
