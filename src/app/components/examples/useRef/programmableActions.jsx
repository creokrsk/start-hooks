import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const ProgrammableActionsExample = () => {
    const inputRef = useRef();

    const handleClick = () => {
        console.log(inputRef.current);
        console.log(inputRef.current.clientWidth);
        inputRef.current.focus();
    };

    const handleClickWidth = () => {
        inputRef.current.style.width = "100px";
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                ref={inputRef}
                className="form-control"
                type="email"
                id="email"
            />
            <button className="btn btn-primary" onClick={handleClick}>
                focus import
            </button>
            <button
                className="btn btn-secondary m-5"
                onClick={handleClickWidth}
            >
                Изменить ширину объекта
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
