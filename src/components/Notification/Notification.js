import React from "react";
import PropTypes from "prop-types";
import css from "./Notification.module.css";

const Notification = ({ message }) => (
  <h3 className={css.title}>"{message}"</h3>
);

Notification.propType = {
  message: PropTypes.string,
};

export default Notification;