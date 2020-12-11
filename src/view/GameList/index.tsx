import React from 'react';
import { useObserver } from 'mobx-react-lite';
import { storeContext } from '../../Context';
import { IGamePreview } from '../../Store';
import GamePreview from '../../Components/GamePreview';
import { SCGameList } from "./styled"

interface IProps {
    games: IGamePreview[];
}

export const GameView: React.FC<IProps> = (props) => {
    const { games } = props;
    return (
        games &&
        <ul>
            {games.map(game => <li>{game}</li>)}
        </ul>
    );
}

export const GameList = () => {
    const store = React.useContext(storeContext);
    if (!store) throw Error("Store shouldn't be null");
    return useObserver(() => {
        // return <GameView games={store.filteredGames} />
        return (
            <SCGameList>
                {store.filteredGames.map((game, index) => {
                    if (game) {
                        return <GamePreview title={game.title} description={game.description} key={index} />
                    }
                })}
            </SCGameList>
        )
    });
}

export default GameList;