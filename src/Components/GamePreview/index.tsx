import React from "react";
import Title from "./Title"
import Description from "./Description"
import logo from '../../logo.svg';
import { SCGamePreview } from "./styled";
import { Card } from 'antd';

interface IProps {
    description: string;
    title: string
}

const GamePreview: React.FC<IProps> = (props) => {
    const { description, title } = props;

    return (
        <SCGamePreview>
            <Card title={title} bordered={true} style={{ width: 300 }}>
                <img src={logo} alt="game" />
                <p>{description}</p>
            </Card>
            {/* <Title value={title} />
            
            <Description value={description} /> */}
        </SCGamePreview >
    )

}

export default GamePreview;