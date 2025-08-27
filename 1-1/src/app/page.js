"use client";
import { useState } from "react";

export default function TodoList() {

  const [todoText, setTodoText] = useState(""); //TODOリストのテキスト(入力フィールドの値)
  const [adding, setAdding] = useState([]); //タスク一覧(タスクを追加した時、画面表示させるための実装)

  //タスク追加時の処理
  const addTask = (event) => {
    event.preventDefault();
    if (todoText === "") {
      return;
    }
    const newTodo = {
      id: Date.now(), //ID生成
      text: todoText,
      status: false,
    };
    setAdding([...adding, newTodo])//既存のタスクリストに追加
    setTodoText(""); //入力欄をクリア
  };

  //タスクの完了チェック状態を切り替え
  const doneTask = (id) => {
    setAdding(
      adding.map((todoTask => todoTask.id === id ? { ...todoTask, status: !todoTask.status } : todoTask))
    );
  };

  //タスクの削除機能
  const removeTask = (id) => {
    setAdding(adding.filter((e) => e.id !== id));
  };

  return (
    <div>
      <h1>TODOリスト</h1>
      <form method="post">
        <input type="text" name="task" value={todoText} onChange={(event) => setTodoText(event.target.value)} />
        <button type="submit" onClick={addTask}>タスク追加</button>
      </form>
      {/* タスク表示 */}
      <table>
        <thead>
          <tr>
            <th>タスク</th>
            <th>削除</th>
            <th>未完了or完了</th>
          </tr>
        </thead>
        <tbody>
          {adding.map((todoTask => (
            <tr key={todoTask.id}>
              <td>{todoTask.text}</td>
              <td><button type="submit" onClick={() => removeTask(todoTask.id)}>タスク削除</button></td>
              <td><input type="checkbox" checked={todoTask.status} onChange={() => doneTask(todoTask.id)} />
                {todoTask.status ? "完了済" : "未完了"}
              </td>
            </tr>
          )))}
        </tbody>
      </table>
    </div>
  )
}