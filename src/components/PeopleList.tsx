import { useState } from "react";
import data from "../data";

const PeopleList = () => {
  const [people, setPeople] = useState(data);

  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-7 col-11 mx-auto bg-light p-3 shadow-lg rounded">
          <h5 className="text-uppercase text-dark mb-3">
            {people.length} Birthday Reminder
          </h5>

          {people.map((p) => (
            <div className="d-flex align-items-center my-2">
              <img
                src={p.image}
                alt={p.name}
                className="object-fit-cover bordered"
              />
              <div className="d-flex flex-column justify-content-center ms-2">
                <h5 className="m-0 fs-6">{p.name}</h5>
                <p className="m-0 text-secondary">{p.age} Years</p>
              </div>
            </div>
          ))}

          <button
            className="btn btn-primary w-100 mt-2"
            onClick={() => setPeople([])}
          >
            All Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default PeopleList;
