import React from "react";

interface IProps {
    value: string;
}

const Description: React.FC<IProps> = (props: IProps) => {
    const { value } = props;
    return (
        <p>
            {value}
        </p>
    )
}

export default Description;