const studySessions = [];

function addSession(topic, sessionTime, duration) {
    if (!(sessionTime instanceof Date) || isNaN(sessionTime) || typeof duration !== 'number' || duration <= 0) {
      console.log('Invalid input!');
      return;
    }
    studySessions.push({ topic, sessionTime, duration });
    console.log('Session added:', topic);
  }

function listTodaysSessions() {
  const today = new Date();
  const startOfDay = new Date(today.setHours(0, 0, 0, 0));
  const endOfDay = new Date(today.setHours(23, 59, 59, 999));

  const todaysSessions = studySessions.filter(session => {
    return session.sessionTime >= startOfDay && session.sessionTime <= endOfDay;
  });

  console.log('Today\'s Sessions:', todaysSessions);
}

function sessionCountdown(sessionTime, topic) {
  const now = new Date();
  const timeDifference = sessionTime - now;

  if (timeDifference <= 0) {
    console.log(`Session on "${topic}" starts now!`);
  } else {
    setTimeout(() => {
      console.log(`Session on "${topic}" starts now!`);
    }, timeDifference);
  }
}

async function fetchStudyMaterials(topic) {
  console.log(`Fetching materials for ${topic}...`);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Materials for ${topic} are ready!`);
    }, 2000);
  });
}

async function fetchMaterialsAsync(topic) {
  try {
    const materials = await fetchStudyMaterials(topic);
    console.log(materials);
  } catch (error) {
    console.error('Error fetching materials:', error.message);
  }
}

export { addSession, listTodaysSessions, sessionCountdown, fetchMaterialsAsync };
