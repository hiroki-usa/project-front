import Link from 'next/link'
import React, { useState, useMemo } from 'react';
//import "./Tabs.css";

let css1 = {backgroundColor:"#CCFFFF"};
let css2 = {backgroundColor:"#FFFFCC"};

export default function OtherPage() {
    const initialState = {
        tasks: [
            {
                id: 1,
                title: '最初の論文',
                category: 1
            },{
                id: 2,
                title: '2番目の論文',
                category: 2
            },{
                id: 3,
                title: '3番目の論文',
                category: 1
            }
        ],
        categories: [
            {
                id: 1,
                title: 'カテゴリー1'
            },{
                id: 2,
                title: 'カテゴリー2'
            }
        ]
    };

    // タスク
    const [tasks, setTasks] = useState(initialState.tasks);
    // カテゴリー
    const [categories, setCategories] = useState(initialState.categories);
    // 検索条件
    const [filterQuery, setFilterQuery] = useState({});
    // ソート条件
    const [sort, setSort] = useState({});

    const filteredTask = useMemo(() => {
        let tmpTasks = tasks;
     
        // 入力した文字は小文字にする
        const filterTitle = filterQuery.title && filterQuery.title.toLowerCase();
     
        // 絞り込み検索
        tmpTasks = tmpTasks.filter(row => {
     
            // タイトルで絞り込み
            if (
                filterQuery.title &&
                String(row.title).toLowerCase().indexOf(filterTitle) === -1
            ) {
                return false;
            }
     
            // カテゴリーで絞り込み
            if (
                filterQuery.category_id &&
                row.category !== parseInt(filterQuery.category_id)
            ) {
                return false;
            }
            return row;
        });
     
        // ソート
        if (sort.key) {
            tmpTasks = tmpTasks.sort((a, b) => {
                a = a[sort.key];
                b = b[sort.key];
                return (a === b ? 0 : a > b ? 1 : -1) * sort.order;
            });
        }
     
        return tmpTasks;
    }, [filterQuery, sort, tasks]);

    // 入力した情報をfilterQueryに入れる
const handleFilter = e => {
    const { name, value } = e.target;
    setFilterQuery({ ...filterQuery, [name]: value });  
};
 
// 選択したカラムをSortに入れる
const handleSort = column => {
    if (sort.key === column) {
        setSort({ ...sort, order: -sort.order });
    } else {
        setSort({
            key: column,
            order: 1
        })
    }
};

    return (
        <div className="wrap">
        <div className="filter-box">
            <div className="input-group">
                <input type="text" name="title" className="form-input" placeholder="タイトル"
                        value={filterQuery.title || ''}
                        onChange={handleFilter}
                />
            </div>
            <div className="input-group">
                <div className="selectbox">
                    <select
                        name="category_id"
                        value={filterQuery.category_id}
                        onChange={handleFilter}
                    >
                        <option value="">カテゴリー選択</option>
                        {
                            categories.map((item) => {
                                return (
                                    <option
                                        key={item.id}
                                        value={item.id}>
                                        {item.title}
                                    </option>
                                );
                            })
                        }
                    </select>
                </div>
            </div>
        </div>
        <style>{'table,th,td {border:1px solid black;}'}</style>
        <table>
            <thead>
            <tr style={css2}>
                <th onClick={() => handleSort('id')}>ID</th>
                <th>タイトル</th>
                <th onClick={() => handleSort('category')}>出版日</th>
            </tr>
            </thead>
            <tbody>
            {
                filteredTask.map((task) => {
                    return(
                        <tr key={task.id} style={css1}>
                            <td>{task.id}</td>
                            <td>{task.title}</td>
                            <td>
                            {
                                task.category ?
                                categories.find(c => c.id === task.category).title : ''
                            }
                            </td>
                        </tr>
                    );
                })
            }
            </tbody>
        </table>

        <p1>This is an other page.</p1><br></br>
        <Link href="/" ><a>Go to a top page!</a></Link>
    </div>
    );
}