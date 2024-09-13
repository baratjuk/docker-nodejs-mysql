import Db from '../Db.js';

const db = new Db()

const getItem = async (req, res) => {
    let id = req.params.id
    const item = await db.getItem(id);
    res.send(item);
}

export default getItem;
