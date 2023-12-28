import React, { useState, useEffect } from "react";
import axios from "axios";
import "./access.css";
//import CustomModal from "../../components/customModal";
import { FaCheck, FaPlus, FaTimes } from "react-icons/fa";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { getAllAccess, getOrganization } from "../../slices/thunk";
import { useDispatch, useSelector } from "react-redux";

const Index: React.FC = () => {
  const dispatch = useDispatch<any>();
  const { accessControl, organization } = useSelector(
    (state: any) => state.Access
  );
  const [showModal, setShowModal] = useState(false);
  const [orgName, setOrgName] = useState("");
  const [pv, setPv] = useState("");
  const [q15, setQ15] = useState("");
  const [gf, setGf] = useState("");
  
  const [modalOrganizations, setModalOrganizations] = useState([]);

  useEffect(() => {
    getAllAccess(dispatch);
    getOrganization(dispatch);
  }, [dispatch]);

  const handlePost = async () => {
    await axios
      .post("http://47.32.254.89:7000/api/access/register", {
        orgName,
        pv,
        q15,
        gf,
      })
      .then((response) => {
        alert(response.data.message);
        setShowModal(false);
        setOrgName("");
        setPv("");
        setQ15("");
        setGf("");
      })
      .catch((error) => {
        console.error("Error in POST request:", error);
        alert("Failed");
      });
  };

  const handleModalSave = () => {
    handlePost();
  };

  const handleModalCancel = () => {
    setShowModal(false);
    setOrgName("");
    setPv("");
    setQ15("");
    setGf("");
  };

  const handleTdClick = () => {
    // Extract unique organization IDs from the accessControl items
    const tableOrganizationIds = Array.from(
      new Set(accessControl.map((item: any) => item.orgName))
    );
  
    // Filter the organizations based on the IDs from the table
    const filteredOrganizations = organization.filter((org: any) =>
      !tableOrganizationIds.includes(org.id)
    );
  
    setModalOrganizations(filteredOrganizations);
    setShowModal(true);
  };  

  return (
    <div className="main">
      <div className="table-container">
        <div className="heading1">
          <h3>Access Control</h3>
          <div className="mx-2">
            <FaPlus
              data-bs-target="#exampleModal"
              style={{ cursor: "pointer" }}
              onClick={handleTdClick}
            />
          </div>
        </div>
        <table className="table table-bordered w-50">
          <thead>
            <tr>
              <th scope="col">org Name</th>
              <th scope="col">P.V</th>
              <th scope="col">Q15</th>
              <th scope="col">Geo</th>
              <th scope="col">All</th>
            </tr>
          </thead>
          <tbody>
            {accessControl.map((item: any, index: any) => {
              const correspondingOrg = organization.find(
                (org: any) => org.id === item.orgName
              );

              return (
                <tr key={index}>
                  <td style={{ cursor: "pointer" }} onClick={handleTdClick}>
                    {correspondingOrg
                      ? correspondingOrg.name
                      : "Unknown Organization"}
                  </td>
                  <td>
                    {item.pv === "Yes" ? (
                      <FaCheck style={{ color: "green" }} />
                    ) : (
                      <FaTimes style={{ color: "red" }} />
                    )}
                  </td>
                  <td>
                    {item.q15 === "Yes" ? (
                      <FaCheck style={{ color: "green" }} />
                    ) : (
                      <FaTimes style={{ color: "red" }} />
                    )}
                  </td>
                  <td>
                    {item.gf === "Yes" ? (
                      <FaCheck style={{ color: "green" }} />
                    ) : (
                      <FaTimes style={{ color: "red" }} />
                    )}
                  </td>
                  <td>null</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Modal isOpen={showModal} toggle={handleModalCancel} centered>
        <ModalHeader toggle={() => setShowModal(false)}>
          Access Control
        </ModalHeader>
        <ModalBody>
          <div>
            <div className="form-floating p-1">
              <select
                className="form-select"
                id="sel1"
                name="sellist"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
              >
                <option value="" disabled hidden>
                  Select Organization
                </option>
                {modalOrganizations.map((org: any) => (
                  <option key={org.id} value={org.id}>
                    {org.name}
                  </option>
                ))}
              </select>

              <label htmlFor="sel1" className="form-label">
                orgName:
              </label>
            </div>

            <div >
              <label className="label col-md-6">Select q15:</label>
            <div className="form-check form-check-inline mt-3 mb-3 ">
              <input
                type="radio"
                className="form-check-input"
                id="q15Yes"
                name="q15"
                value="Yes"
                checked={q15 === "Yes"}
                onChange={() => setQ15("Yes")}
              />
              <label className="form-check-label" htmlFor="q15Yes">
                Yes
              </label>
            </div>
            <div className="form-check form-check-inline mt-3 mb-3">
              <input
                type="radio"
                className="form-check-input"
                id="q15No"
                name="q15"
                value="No"
                checked={q15 === "No"}
                onChange={() => setQ15("No")}
              />
              <label className="form-check-label" htmlFor="q15No">
                No
              </label>
            </div>
            </div>
            <div >
              <label className="label col-md-6">Select proxy verification:</label>
            <div className="form-check form-check-inline mt-3 mb-3">
              <input
                type="radio"
                className="form-check-input"
                id="pvYes"
                name="pv"
                value="Yes"
                checked={pv === "Yes"}
                onChange={() => setPv("Yes")}
              />
              <label className="form-check-label" htmlFor="pvYes">
                Yes
              </label>
            </div>
            <div className="form-check form-check-inline mt-3 mb-3">
              <input
                type="radio"
                className="form-check-input"
                id="pvNo"
                name="pv"
                value="No"
                checked={pv === "No"}
                onChange={() => setPv("No")}
              />
              <label className="form-check-label" htmlFor="pvNo">
                No
              </label>
            </div>
            </div>
            <div>
            <label className='label col-md-6'>Select Geographic: </label>
            <div className="form-check form-check-inline mt-3 mb-3 ">
              <input
                type="radio"
                className="form-check-input"
                id="gfYes"
                name="gf"
                value="Yes"
                checked={gf === "Yes"}
                onChange={() => setGf("Yes")}
              />
              <label className="form-check-label" htmlFor="gfYes">
                Yes
              </label>
            </div>
            <div className="form-check form-check-inline mt-3 mb-3">
              <input
                type="radio"
                className="form-check-input"
                id="gfNo"
                name="gf"
                value="No"
                checked={gf === "No"}
                onChange={() => setGf("No")}
              />
              <label className="form-check-label" htmlFor="gfNo">
                No
              </label>
            </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handlePost}>
            Submit
          </Button>{" "}
          <Button color="secondary" onClick={handleModalCancel}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Index;
