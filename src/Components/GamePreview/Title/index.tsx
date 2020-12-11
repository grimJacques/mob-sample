import React from "react";

interface IProps {
    value: string;
}

const Title: React.FC<IProps> = (props) => {
    const { value } = props;

    return (
        <h4>{value}</h4>
    )
}

export default Title;