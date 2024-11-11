import { pool } from "../helpers/db.js";

const selectAllTasks = async () => {
    return await pool.query('select * from task')
}

const insertTask = async (desc) => {
    return await pool.query('insert into task (description) values ($1) returning *', [desc])
}

const deleteTaskById = async (taskId) => {
    const query = 'DELETE FROM task WHERE id = $1 RETURNING *';
    const result = await pool.query(query, [taskId]);
    return result;
};

export {selectAllTasks, insertTask, deleteTaskById}