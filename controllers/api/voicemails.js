const router = require('express').Router();
const axios = require('axios');
const { Voicemail } = require('../../models');
const { formatText, formatPhone, formatDuration, formatDate } = require('../../utils/format');

router.get('/', async (req, res) => {
    try {
      const { rows } = await Voicemail.getAll();
  
      // format each voicemail object before returning response
      const vms = rows.map((vm) => {
        return {
          ...vm,
          transcript: formatText(vm.transcript),
          duration: formatDuration(vm.duration),
          phone: formatPhone(vm.phone),
          date: formatDate(new Date(vm.date).getTime())
        };
      });
  
      res.json(vms);
    }
    catch(err) {
      console.error(err);
      res.status(500).end();
    }
});

router.post('/', async (req, res) => {
    try {
      if (!req.body.audio) {
        return res.status(400).end();
      }
  
      const transcript = await axios.post('/some/service', { 
        audio: req.body.audio
      });
  
      const { rows } = await Voicemail.create({ transcript });
  
      res.status(200).json(rows[0]);
    }
    catch(err) {
      console.error(err);
      res.status(500).end();
    }
});

router.patch('/:id', async (req, res) => {
    try {
      if (req.body.read === undefined) {
        return res.status(400).end();
      }
  
      const { rowCount } = await Voicemail.update({
        id: req.params.id,
        read: req.body.read
      });
  
      res.status(rowCount === 0 ? 404 : 204).end();
    }
    catch(err) {
      console.error(err);
      res.status(500).end();
    }
});

router.delete('/:id', async (req, res) => {
    try {
      const { rowCount } = await Voicemail.delete(req.params.id);
  
      res.status(rowCount === 0 ? 404 : 204).end();
    }
    catch(err) {
      console.error(err);
      res.status(500).end();
    }
});

module.exports = router;