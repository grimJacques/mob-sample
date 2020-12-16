import React, { useCallback, useState } from "react";
import { storeContext } from "../../Context";
import { SCPaginator, Wrapper } from "./styled";
import 'antd/dist/antd.css';
import { Radio, Button } from "antd";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const Paginator: React.FC = () => {
    const store = React.useContext(storeContext);
    const gameListLength = store?.allGames.length || 0;;
    let step = 0;
    const [paginationNumber, setPaginationNumber] = useState<number>(0);
    const [selected, setSelected] = useState<string | undefined>(store?.allGames[paginationNumber].title)
    const onChange = (e: any) => {
        setSelected(e.target.value)
        console.log(store?.allGames.find((game, index) => {
            if (game.title === e.target.value) {
                return index;
            }
        }))
    };
    const onClickLeftArrow = () => {
        step = step < 0 ? gameListLength : step--;
        console.log(step);
        setSelected(store?.allGames[step].title);
    }
    const onClickRightArrow = () => {

        if (store?.allGames.length) {
            console.log(step)
            step++;
            // console.log(paginationNumber)
            // console.log(selected)
            // console.log("step", step);
            // console.log(store?.allGames.length);
            // step = step > store?.allGames.length ? 0 : step + 1;
            setPaginationNumber(1)
            // console.log("step", step);

            setSelected(store?.allGames[step].title);
        }
    }

    return (
        <Wrapper>
            <Button type="primary" shape="round" icon={<LeftOutlined />} onClick={onClickLeftArrow} />
            <SCPaginator>
                <Radio.Group value={selected} onChange={onChange}>
                    {store?.allGames.map((game, index) => <Radio.Button value={game.title} key={index}>{game.title}</Radio.Button>)}
                </Radio.Group>
            </SCPaginator>
            <Button type="primary" shape="round" icon={<RightOutlined />} onClick={onClickRightArrow} />
        </Wrapper>
    );
}

export default Paginator;