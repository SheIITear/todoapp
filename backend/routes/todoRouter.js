import { Router } from "express"
import { auth } from '../helpers/auth.js'
import { getTasks, postTask, deleteTask } from '../controllers/taskController.js'

const router = Router()

router.get('/', getTasks)
router.post('/create', auth, postTask)
router.post('/delete/:id', auth, deleteTask)
//router.post('/create', auth, (req, res, next) => {
//    if (req.body.description == null)
//        return res.status(500).json({error: 'null value'})
//  pool.query('insert into task (description) values ($1) returning *',
//  [req.body.description],
//  (error, result) => {
//    if (error) return next(error)
//    return res.status(200).json({id: result.rows[0].id})
//  })
//})

//router.post('/delete/:id', auth, (req, res, next) => {
//    const id = parseInt(req.params.id)
//    if (isNaN(id))
//        return res.status(500).json({error: 'not a number'})
//    pool.query('delete from task where id = $1', 
//        [id],
//        (error, result) => {
//            if (error) return next(error)
//            return res.status(200).json({id: id})
//        }
//    )
//})

export default router