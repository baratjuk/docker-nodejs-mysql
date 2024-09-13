import Db from '../Db.js';

const db = new Db()

const getItem = async (req, res) => {
    let id = req.params.id
    db.deleteItem(id);
    res.send({});
}

export default getItem;
