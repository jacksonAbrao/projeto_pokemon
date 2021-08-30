/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Modal from '../Modal';

const PokemonThumnail = ({
  id,
  name,
  image,
  type,
  ability,
  hp,
  attack,
  defense,
  speed,
  height,
  weight,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const style = `thumb-container ${type}`;
  return (
    <div className={style}>
      <div className="number">
        <small>nº {id}</small>
      </div>
      <img src={image} alt={name} />
      <div className="detail-wrapper align-items-center">
        <h3>{name}</h3>
        <button className="infoButton" onClick={() => setIsModalVisible(true)}>
          More Details
        </button>
      </div>
      {isModalVisible ? (
        <Modal onClose={() => setIsModalVisible(false)}>
          <div className="modalCard flex flex-col md:flex-row justify-items-center align-items-center">
            <div className="flex flex-col flex-wrap md:align-items-center">
              <h1 className="font-extrabold text-4xl">{name}</h1>
              <div className="flex">
                <div className="textModal text-xl">
                  <h2>type: {type}</h2>
                  <h2>Ability: {ability}</h2>
                  <h2>Hp: {hp}</h2>
                  <h2>Attack: {attack}</h2>
                </div>
                <div className="textModal text-xl">
                  <h2>Defense: {defense}</h2>
                  <h2>Speed: {speed}</h2>
                  <h2>Height: {height / 10}m</h2>
                  <h2>Weight: {weight / 100}kg</h2>
                </div>
              </div>
            </div>
            <div>
              <img className="" src={image} alt={name} />
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default PokemonThumnail;
