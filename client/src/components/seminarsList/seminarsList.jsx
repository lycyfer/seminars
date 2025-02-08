import { useLoaderData } from "react-router-dom";
import Search from "../search/search";
import { useState } from "react";
import notImg from "../../assets/img/image-not-found.jpg";
import apiRequest from "../../lib/apiRequest";

const SeminarList = () => {
  const data = useLoaderData();
  const [seminar, setSeminar] = useState(data.seminarResponse.data);
  const [selectedSeminar, setSelectedSeminar] = useState(null);
  const [isDeletedModalOpen, setIsDeleteModalOpen] = useState(false);
  const [seminarToDelete, setSeminarToDelete] = useState(null);

  console.log(seminar);

  const handleDelete = async (id) => {
    try {
      const response = await apiRequest.delete(`/seminars/${id}`);
      setSeminar(seminar.filter((item) => item.id !== id));
      console.log(response);
    } catch (err) {
      console.log(err);
    } finally {
      setIsDeleteModalOpen(false);
    }
  };

  const openDeleteModal = (id) => {
    setSeminarToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const handleEdit = (seminar) => {
    setSelectedSeminar(seminar);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiRequest.put(
        `/seminars/${selectedSeminar.id}`,
        selectedSeminar
      );
      setSeminar(
        seminar.map((item) =>
          item.id === selectedSeminar.id ? selectedSeminar : item
        )
      );
      setSelectedSeminar(null);
     
    } catch (err) {
      console.log(err);
    } finally {
        setIsDeleteModalOpen(false);
      }
  };

  return (
    <div className="seminarList">
      <div className="seminarList-header">
        <div className="seminarList-header-left">
          <div className="seminarList-header-left">
            <div className="seminarList-header-left-logo">
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-labelledby="calendarEventIconTitle"
                stroke="#fff"
                stroke-width="1"
                stroke-linecap="square"
                stroke-linejoin="miter"
                fill="none"
                color="#fff"
              >
                {" "}
                <title id="calendarEventIconTitle">Calendar event</title>{" "}
                <path d="M3 5H21V21H3V5Z" /> <path d="M21 9H3" />{" "}
                <path d="M7 5V3" /> <path d="M17 5V3" />{" "}
                <rect x="15" y="15" width="2" height="2" />{" "}
              </svg>
            </div>
            <div className="seminarList-left-logo-title">Seminars</div>
          </div>
        </div>
        <div className="seminarList-header-right">
          <Search />
        </div>
      </div>
      <div className="seminarList-main">
        <h2>Seminar List</h2>
        <div className="seminarList-main-list">
          {seminar.map((item) => (
            <div className="seminarList-main-list-block">
              <div key={item.id} className="seminarList-main-list-item">
                <img
                  className="list-item-img"
                  src={item.photo}
                  alt={item.title}
                  onError={(e) => {
                    e.target.src = notImg;
                  }}
                />
                <div className="list-item-main">
                  <div className="list-item-main-title">{item.title}</div>
                  <div className="list-item-main-date-time">
                    <div className="date">{item.date}</div>
                    <div className="time">{item.time}</div>
                  </div>
                  <div className="list-item-main-desc">{item.description}</div>
                </div>
              </div>
              <div className="seminarList-btn">
                <div
                  className="btn btn-delete"
                  onClick={() => openDeleteModal(item.id)}
                >
                  <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 12V17"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14 12V17"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4 7H20"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="btn btn-pen" onClick={() => handleEdit(item)}>
                  <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40974 4.40973 4.7157 4.21799 5.09202C4 5.51985 4 6.0799 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.0799 20 7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V12.5M15.5 5.5L18.3284 8.32843M10.7627 10.2373L17.411 3.58902C18.192 2.80797 19.4584 2.80797 20.2394 3.58902C21.0205 4.37007 21.0205 5.6364 20.2394 6.41745L13.3774 13.2794C12.6158 14.0411 12.235 14.4219 11.8012 14.7247C11.4162 14.9936 11.0009 15.2162 10.564 15.3882C10.0717 15.582 9.54378 15.6885 8.48793 15.9016L8 16L8.04745 15.6678C8.21536 14.4925 8.29932 13.9048 8.49029 13.3561C8.65975 12.8692 8.89125 12.4063 9.17906 11.9786C9.50341 11.4966 9.92319 11.0768 10.7627 10.2373Z"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isDeletedModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Вы уверены, что хотите удалить этот семинар?</h3>
            <div className="btn-block">
              <button
                className="yes-btn"
                onClick={() => handleDelete(seminarToDelete)}
              >
                Да
              </button>
              <button
                className="no-btn"
                onClick={() => setIsDeleteModalOpen(false)}
              >
                Отмена
              </button>
            </div>
          </div>
        </div>
      )}
      {selectedSeminar && (
        <div className="modal">
          <div className="modal-content">
            <h3>Редактирование семинара</h3>

            <form className="form-containers" onSubmit={handleEditSubmit}>
              <input
                type="text"
                className="input"
                value={selectedSeminar.title}
                onChange={(e) =>
                  setSelectedSeminar({
                    ...selectedSeminar,
                    title: e.target.value,
                  })
                }
              />
              <div className="btn-block">
                <button className="btn-submit" type="submit">
                  Сохранить
                </button>
                <button
                  className="btn-cancel"
                  type="button"
                  onClick={() => setSelectedSeminar(null)}
                >
                  Отмена
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeminarList;
