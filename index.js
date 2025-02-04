import { addSession, listTodaysSessions, sessionCountdown, fetchMaterialsAsync } from './studyPlanner.js';

addSession('Math', new Date('2024-12-29T10:00:00'), 60);
addSession('JavaScript', new Date('2024-12-29T14:00:00'), 90);
addSession('History', new Date('2024-12-30T09:00:00'), 45);

listTodaysSessions();

sessionCountdown(new Date('2024-12-29T10:00:00'), 'Math');

fetchMaterialsAsync('JavaScript');