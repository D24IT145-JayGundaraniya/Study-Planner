# Study Planner

## Objective
This project is a study planner that helps students manage and track their study sessions. It includes functions to add study sessions, list today's sessions, provide countdowns for upcoming sessions, and fetch study materials asynchronously.

## Features
- **Add Session**: Adds a new study session, ensuring that the duration is positive and the session time is valid.
- **List Today’s Sessions**: Lists all study sessions scheduled for the current day using the `Date` object.
- **Session Countdown**: Logs a countdown message when the session is about to start using `setTimeout()`.
- **Async Fetch Study Materials**: Simulates fetching study materials asynchronously for a given topic using a `Promise` and `async/await` for handling the response.
- **Modular Design**: All functions are exported in a module and imported into a separate script for testing.

## Technologies Used
- JavaScript (ES6 features)
- Node.js (for running the script, optional)

## Functions
1. **Add Session**
   - Adds a new study session object to the list.
   - Validates that `duration` is a positive number and `sessionTime` is a valid `Date` object.

2. **List Today’s Sessions**
   - Lists all study sessions scheduled for the current day based on the current date.

3. **Session Countdown**
   - Uses `setTimeout()` to log a countdown message when the session time is approaching.

4. **Async Fetch Study Materials**
   - Fetches study materials for a given topic asynchronously using a `Promise`.
   - Uses `async/await` to handle the Promise and log the fetched materials.
