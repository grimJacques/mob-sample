import styled from "styled-components"

export const SCPaginator = styled.div`
    width: 100%;
    // background: yellow;
    justify-content: space-around;
    display:flex;
    flex-flow: column wrap;
    flex-direction: row;
    overflow:hidden;
    &.ant-radio-button-wrapper-checked{
        margin:10px;
    }
`

export const Wrapper = styled.div`
    // background:blue;
    height:32px;
    width:80%;
    position: fixed;
    bottom: 10px;
    display: flex;
    justify-content: center;

`
// & button{
//     border-radius:35%;
//     margin-left: 10px;
//     margin-right: 10px;
//     width: 100px;
//     width:100px;
// }