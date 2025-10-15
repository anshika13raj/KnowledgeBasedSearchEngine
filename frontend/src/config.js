const config = {
  API_BASE_URL: import.meta.env.VITE_API_URL || 
    (import.meta.env.MODE === 'production' 
      ? 'https://knowledgebasedsearchengine.onrender.com/api'
      : 'http://localhost:3001/api')
};

export default config;
