import React, { useCallback, useState } from "react";
import { storeContext } from "../../Context";
import { SCPaginator, Wrapper } from "./styled";
import 'antd/dist/antd.css';
import { Radio, Button } from "antd";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const Paginator: React.FC = () => {
    const store = React.useContext(storeContext);
    const [selected, setSelected] = useState<string | undefined>(store?.allGames[0].title)
    const onChange = useCallback((e) => setSelected(e.target.value), [])

    return (
        <Wrapper>
            <Button type="primary" shape="round" icon={<LeftOutlined />} />
            <SCPaginator>
                <Radio.Group value={selected} onChange={onChange}>
                    {store?.allGames.map((game, index) => <Radio.Button value={game.title} key={index}>{game.title}</Radio.Button>)}
                </Radio.Group>
            </SCPaginator>
            <Button type="primary" shape="round" icon={<RightOutlined />} />
        </Wrapper>
    );
}

export default Paginator;