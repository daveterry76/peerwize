import { useState } from "react";
import { getUserInfo } from "../../config/swr";

import { EditIcon } from "./assets/Icons";

const Location = () => {
  const user = getUserInfo();
  const { country, city } = user?.user;

  const [state, setState] = useState("Rivers");
  const [houseAddress, setHouseAddress] = useState(
    "#14 Government house, Old Gra. |"
  );

  const [showEdit, setShowEdit] = useState(false);

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  return (
    <>
      <div className="info">
        <div className="info--heading">
          <h2>Location</h2>
          <EditIcon onClick={handleEdit} />
        </div>
        <div>
          <div className="info--box">
            <div>
              <label>Country</label>
              <input
                value={country}
                readOnly={!showEdit}
                style={{ border: showEdit ? "1px solid gray" : "none" }}
              />
            </div>
            <div>
              <label>State</label>
              <input
                value={state}
                onChange={(e) => setState(e.target.value)}
                readOnly={!showEdit}
                style={{ border: showEdit ? "1px solid gray" : "none" }}
              />
            </div>
          </div>
          <div className="info--box">
            <div>
              <label>City</label>
              <input
                value={city}
                readOnly
              />
            </div>
            <div>
              <label>House Address</label>
              <input
                value={houseAddress}
                onChange={(e) => setHouseAddress(e.target.value)}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
