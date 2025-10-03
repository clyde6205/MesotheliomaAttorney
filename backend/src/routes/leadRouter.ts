import express from 'express';
import { scoreLead } from '../utils/leadScoring';
import { encrypt } from '../utils/encryption';
import { sendEmail } from '../utils/sendEmail';
import { pool } from '../db/db';

const router = express.Router();

router.post('/submit-lead', async (req, res) => {
  const lead = req.body;
  const score = scoreLead(lead);
  const encrypted = encrypt(JSON.stringify(lead));

  try {
    await pool.query(
      'INSERT INTO leads (data, iv, tag, score) VALUES ($1, $2, $3, $4)',
      [encrypted.encrypted, encrypted.iv, encrypted.tag, score]
    );

    await sendEmail(
      'intake@mesotheliomaattorney.app',
      'New Lead Submitted',
      `<p>Score: ${score}</p><pre>${JSON.stringify(lead, null, 2)}</pre>`
    );

    res.status(200).json({ success: true, score });
  } catch (err) {
    console.error('Lead submission failed:', err);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

export default router;
