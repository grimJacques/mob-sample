import { observable } from "mobx";

export interface IGamePreview {
    title: string;
    description: string;
}

const Games = [
    { title: "Popular", description: "Cillum nulla excepteur laborum veniam ullamco amet fugiat officia ea. Magna veniam quis labore exercitation mollit est reprehenderit ipsum dolore elit ad ad occaecat non. Quis laborum anim ipsum mollit enim amet. Ipsum labore consectetur ullamco veniam commodo enim sunt amet adipisicing sunt. Aliquip aliquip elit occaecat laboris veniam commodo quis aliqua." },
    { title: "All", description: "Veniam mollit veniam nostrud deserunt id est ex cupidatat nostrud occaecat. Qui aute anim sunt laborum ea qui. Incididunt occaecat commodo anim quis cillum eu. Dolore consequat ad dolore esse dolore magna laborum labore ipsum cupidatat pariatur voluptate. Sit Lorem labore aute ea. Officia officia ullamco veniam anim dolore ut tempor anim aliqua." },
    { title: "Madrid", description: "Commodo do nisi excepteur proident nisi velit. Incididunt duis occaecat et magna enim aliquip ex. Proident non commodo quis ex reprehenderit nisi deserunt sunt cillum. Ullamco cupidatat aute ullamco pariatur nulla ea consequat non. Cillum ea excepteur magna eiusmod veniam mollit minim nulla elit nisi." },
    { title: "Adventure", description: "Eu quis cillum eiusmod magna ut cillum exercitation nulla cillum labore nisi. Eu voluptate voluptate labore velit sit adipisicing eu esse veniam ad minim mollit. Pariatur adipisicing exercitation ullamco do velit magna quis in amet minim. Cillum dolore aliqua esse sint ullamco enim occaecat laboris. Sint fugiat in elit mollit irure eiusmod quis voluptate aute incididunt aliquip mollit laborum." },
    { title: "Simulation ", description: "Eu eu duis reprehenderit enim veniam labore commodo do esse magna est ex culpa. Sunt culpa aliqua aliqua proident laboris ex ea amet mollit fugiat. Quis deserunt id pariatur voluptate commodo nisi mollit aute." },
    { title: "Strategy ", description: "Officia sit enim amet mollit ullamco aliquip pariatur minim ea qui ipsum labore et. Labore esse minim pariatur veniam culpa voluptate labore officia sit pariatur nostrud. Laborum laboris tempor et aliqua commodo est. Exercitation sunt id irure velit nulla. Laboris excepteur exercitation adipisicing sit deserunt eu. In tempor eu dolore reprehenderit proident amet esse." },
    { title: "Sports ", description: "Aliquip ad excepteur deserunt aute ex culpa eiusmod sint cupidatat. Do tempor proident do laboris adipisicing ex dolore excepteur eiusmod tempor deserunt voluptate pariatur. Cupidatat labore irure consequat aliquip qui nostrud. Cupidatat exercitation in proident Lorem nostrud minim sint sit et amet ad voluptate enim adipisicing. Consectetur esse proident ex reprehenderit exercitation irure." },
    { title: "Puzzle  ", description: "Incididunt elit cillum ut ullamco fugiat esse ad elit exercitation magna nostrud anim. Excepteur eiusmod irure eu officia dolor commodo proident sunt eiusmod ad do occaecat et. Eu eu nisi mollit labore irure sunt duis. Dolore qui consectetur ipsum eiusmod ex excepteur esse deserunt duis ea dolore velit." },

];

export const createStore = () => {
    const store = {
        query: observable.box(''),
        setQuery(query: string) {
            store.query.set(query.toLowerCase());
        },
        get filteredGames() {
            return Games.map(game =>
                game.title.toLowerCase().includes(store.query.get()) ? game : undefined
            );
        },
        get allGames() {
            return Games;
        },
    };

    return store;
};

export type TStore = ReturnType<typeof createStore>