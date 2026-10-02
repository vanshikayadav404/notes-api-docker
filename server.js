const express = require('express');
const app = express();
app.use(express.json());

const notes = [];

app.get('/', (req, res) => res.json({ service: 'notes-api', status: 'ok' }));
app.get('/health', (req, res) => res.send('ok'));
app.get('/notes', (req, res) => res.json(notes));

app.post('/notes', (req, res) => {
  const text = ((req.body && req.body.text) || '').trim();
  if (!text) return res.status(400).json({ error: 'text is required' });
  const note = { id: notes.length + 1, text };
  notes.push(note);
  res.status(201).json(note);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));