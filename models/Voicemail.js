const db = require('../config/connection');

class Voicemail {
  getAll() {
    return db.query('SELECT * FROM voicemails ORDER BY id DESC');
  }

  create({ transcript }) {
    return db.query(
      'INSERT INTO voicemails(transcript) VALUES($1) RETURNING *', 
      [ transcript ]
    );
  }

  update({ read, id }) {
    return db.query(
      'UPDATE voicemails SET read = $1 WHERE id = $2', 
      [ read, id ]
    );
  }

  delete(id) {
    return db.query(
      'DELETE FROM voicemails WHERE id = $1', 
      [ id ]
    );
  }
}

module.exports = new Voicemail();