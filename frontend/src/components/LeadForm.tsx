import { useState } from 'react';
import axios from 'axios';

export default function LeadForm() {
  const [form, setForm] = useState({
    exposureLevel: 'medium',
    urgency: 'medium',
    location: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/submit-lead', form);
      console.log('Lead submitted:', res.data);
      setSubmitted(true);
    } catch (err) {
      console.error('Submission failed:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Exposure Level:
        <select name="exposureLevel" value={form.exposureLevel} onChange={handleChange}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>

      <label>
        Urgency:
        <select name="urgency" value={form.urgency} onChange={handleChange}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>

      <label>
        Location:
        <input type="text" name="location" value={form.location} onChange={handleChange} />
      </label>

      <button type="submit">Submit Lead</button>

      {submitted && <p>Lead submitted successfully!</p>}
    </form>
  );
}
