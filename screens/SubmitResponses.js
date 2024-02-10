// submitResponse.js
import { addDoc, collection } from 'firebase/firestore';
import { firebaseDB } from '../config/firebaseConfig'; // Adjust the import path as necessary

export const submitResponse = async (volunteerEmails, activityName) => {
  for (const volunteerEmail of volunteerEmails) {
    const newResponse = {
      user_email: volunteerEmail.email,
      activity_name: activityName,
      // Set other fields as null or default values
      giving_avg: null,
      gracious_avg: null,
      grateful_avg: null,
      green_avg: null,
      grounded_avg: null,
      hours_spent: null,
      completed: false,
    };

    try {
      await addDoc(collection(firebaseDB, 'responses'), newResponse);
      console.log("SUCCESS")
    } catch (e) {
      console.error("Error adding response for volunteer:", volunteerEmail, e);
      // You might want to handle the error, such as breaking the loop or continuing to the next iteration.
    }
  }
};