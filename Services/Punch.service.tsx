import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'; // Make sure to import axios
import { baseUrl } from '../Global/Config';

class PunchService {
  async PunchIn(post: any) {
    try {
      const accessToken = await AsyncStorage.getItem('accessToken'); // Retrieve access token from AsyncStorage
        console.log(post);
        
        
      // Make the API call
      const response = await axios.post(`${baseUrl}/api/v1/punch/in`, post, {
        headers: {
          'Authorization': `Bearer ${accessToken}`, // Include access token in the headers
          'Content-Type': 'application/json',
        },
      });

      console.log('API Response:', response.data); // Log the response

      return response.data; // Return the API response data
    } catch (error) {
      console.error('Error during PunchIn:', error); // Log the error
      throw error; // Throw error to be handled by the caller
    }
  }
}

export const punchService = new PunchService();
