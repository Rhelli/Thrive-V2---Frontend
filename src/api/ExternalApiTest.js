import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { v4 as uuidv4 } from 'uuid';

const ExternalApiTest = () => {
  const serverUrl = process.env.REACT_APP_RESOURCE_SERVER_URL;
  const [users, setUsers] = useState();
  const { getAccessTokenSilently } = useAuth0();

  const callApi = async () => {
    try {
      const token = await getAccessTokenSilently();

      const response = await fetch(`${serverUrl}/api/v1/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const responseData = await response.json;
      setUsers(responseData.users);
    } catch (err) {
      setUsers(err.message);
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => callApi()} type="button">Fetch Users (Protected)</button>
      </div>
      <div>
        {
          users && (
            users.map((user) => (
              <ul key={uuidv4()}>
                <li>{user.email}</li>
              </ul>
            ))
          )
        }
      </div>
    </div>
  );
};

export default ExternalApiTest;
