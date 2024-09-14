const Preview = ({ imageUrl, openModal, closeModal, isModalOpen }) => {
  return (
    <div>
      <button
        onClick={openModal}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Open Preview
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg shadow-lg">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2"
            >
              &times;
            </button>
            <img src={imageUrl} alt="Project Preview" className="rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Preview;
