import React, { useCallback, useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setDate] = useState({});
    const withOutCallback = useRef(0);
    const withCallback = useRef(0);

    const handleChange = ({ target }) => {
        setDate((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    const validateWithOutCallback = (data) => {
        console.log(data);
    };

    const validateWithCallback = useCallback((data) => {
        console.log(data);
    }, []);

    useEffect(() => {
        withCallback.current++;
    }, [validateWithCallback]);

    useEffect(() => {
        withOutCallback.current++;
    }, [validateWithOutCallback]);

    useEffect(() => {
        validateWithOutCallback(data);
        validateWithCallback(data);
    }, [data]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render withOutCallback: {withOutCallback.current}</p>
            <p>Render withCallback: {withCallback.current}</p>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                onChange={handleChange}
                className="form-control"
                type="email"
                id="email"
                value={data.email || ""}
                name="email"
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
