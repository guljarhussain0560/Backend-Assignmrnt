module.exports = (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Backend Assignment API is running!',
    timestamp: new Date().toISOString()
  });
};
