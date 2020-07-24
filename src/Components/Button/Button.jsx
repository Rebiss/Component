import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Button = ({
  children,
  onClick,
  className,
  disabled,
  active,
  ...attrs
}) => {
  const classes = classNames("btn", className, { active });
  const Tag = attrs.href ? "a" : "button";

  const onClickAction = event => {
    if (disabled) {
      event.preventDefault();
    } else {
      return onClick(event);
    }
  };

  return (
    <Tag
      className={classes}
      disabled={disabled}
      onClick={onClickAction}
      {...attrs}
    >
      Button
    </Tag>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onCLick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool
};

Button.defaultProps = {
  children: "Default Button",
  onClick: () => {},
  className: "",
  disabled: false,
  active: true
};

export default Button;
