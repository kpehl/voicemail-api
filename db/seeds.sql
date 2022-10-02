\c vm_db;

INSERT INTO voicemails (transcript, phone, duration, date)
VALUES
  ('Can you forward the results of the GitHub workflows to lernantino@gmail.com?', 5555555555, 1100, NOW() - INTERVAL '1 DAY'),
  ('We need you to cast the deciding vote on whether to use Mocha or Jest for our testing framework.', 5555555555, 3200, NOW() - INTERVAL '1 WEEK'),
  ('I ran into trouble with the CI/CD pipeline and could use some help. Give me a call when you have a chance.', 15555555555, 120000, NOW() - INTERVAL '3 HOURS'),
  ('Could you send over those Git hooks you made? Some of the developers aren''t set up yet.', 5555555555, 62500, NOW() - INTERVAL '2 DAYS'),
  ('Any idea why the ESLint config keeps throwing errors about const being a reserved keyword?', 5555555555, 4500, NOW() - INTERVAL '1 MONTH');