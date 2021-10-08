import Modal from "./Modal";

const Modals = () => {
  return (
    <div>
      <h2>Modales</h2>
      <button>Modal 1</button>
      <Modal>
        <h3>Modal 1</h3>
        <p>Hola ese es el contenido de mi modal 1</p>
        <img src="https://placeimg.com/400/400/animals" alt="Animals" />
      </Modal>
      <button>Modal 2</button>
      <Modal>
        <h3>Modal 2</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
          nostrum officiis natus, deserunt ipsa totam? Fugiat neque eveniet,
          consequuntur sit minus blanditiis est, repudiandae quam dolores itaque
          necessitatibus, obcaecati atque.
        </p>
        <img src="https://placeimg.com/400/400/nature" alt="Nature" />
      </Modal>
    </div>
  );
};

export default Modals;
