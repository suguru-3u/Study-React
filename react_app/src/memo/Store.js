import { createStore } from 'redux';

const initData = {
    data:[{message:'Sample data',created:new Date()}],
    message:'please type message:',
    mode:'default',
    fdata:[]
};

// レデューサー
export function memoReducter(state = initData, action){
    switch(action.type){
        case 'ADD':
            return addReduce(state, action);

        case 'DELETE':
            return deleteReduce(state, action);

        case 'FIND':
            return findReduce(state, action);

        default:
            return state;
    }
}

// レビュースアクション

// メモ追加のレデュース処理
function addReduce(state, action){
    let data = {
        message:action.message,
        created:new DataCue()
    };
    let newdata = state.data.slice();
    newdata.unshift(data);
    return{
        data:newdata,
        message:'Addes!',
        mode:'default',
        fdata:[]
    };
}

// メモ検索レデュース処理
function findReduce(state,action){
    let f = action.find;
    let fdata = [];
    state.data.forEach((value) => {
        if(value.message.indexOf(f) >= 0){
            fdata.push(value);
        }
    });
    return{
        data:state.data,
        message:'find "' + f + '":',
        mode:'find',
        fdata:fdata
    };
}

// メモ削除処理のレデュース処理
function deleteReduce(state,action){
    let newdata = state.data.slice();
    newdata.splice(action.index,1);
    return{
        data:newdata,
        message:'delete "' + action.index + '":',
        mode:'delete',
        fdata:[]
    };
}

// アクションクリエーター

// メモ追加のアクション
export function addMemo(text){
    return{
        type:'ADD',
        message:text
    }
}

// メモ削除のアクション
export function deleteMemo(num){
    return{
        type:'DELETE',
        index:num
    }
}

// メモ検索アクション
export function findMemo(text){
    return{
        type:'FIND',
        find:text
    }
}

// ストアの作成
export default createStore(memoReducter);