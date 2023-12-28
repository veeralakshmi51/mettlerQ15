import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllOrganizationDetails } from "../../slices/organizationDetails/thunk";
import { useDispatch, useSelector } from "react-redux";

const Organization: React.FC = () => {
  const dispatch = useDispatch<any>();
  const { organizationDetails } = useSelector(
    (state: any) => state.Organization
  );

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(organizationDetails.length / itemsPerPage);
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const records = organizationDetails.slice(firstIndex, lastIndex);
  const numbers = [...Array(totalPages).keys()].map((num) => num + 1);

  useEffect(() => {
    dispatch(getAllOrganizationDetails());
  }, [dispatch]);

  function prevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changecurrentpage(page: number) {
    setCurrentPage(page);
  }

  function nextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="mt-3 col-md-12">
          <h2>Organization Details</h2><Link to="/organization-form">
            <button className="btn btn-info">+ </button>
          </Link>
          <hr></hr>
          <br></br><br></br>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Organization Name</th>
                <th scope="col">Organization Type</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile Number</th>
                <th scope="col">Website URL</th>
                <th scope="col">Hippa Privacy Officer Name</th>
              </tr>
            </thead>
            <tbody>
              {records.map((organization: any, index: number) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{organization.organizationdetails[0].name}</td>
                  <td>{organization.organizationdetails[0].type}</td>
                  <td>{organization.email}</td>
                  <td>{organization.mobileNumber}</td>
                  <td>{organization.websiteUrl}</td>
                  <td>
                    {organization.hippaprivacyofficer.length > 0
                      ? organization.hippaprivacyofficer[0].name
                      : ""}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        <br></br>
          <nav>
            <ul className="pagination">
              <li className="page-item">
                <a href="#" className="page-link" onClick={prevPage}>
                  Prev
                </a>
              </li>
              {numbers.map((num, index) => (
                <li key={index} className="page-item">
                  <a
                    href="#"
                    className={`page-link ${currentPage === num ? 'active' : ''}`}
                    onClick={() => changecurrentpage(num)}
                  >
                    {num}
                  </a>
                </li>
              ))}
              <li className="page-item">
                <a href="#" className="page-link" onClick={nextPage}>
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Organization;
