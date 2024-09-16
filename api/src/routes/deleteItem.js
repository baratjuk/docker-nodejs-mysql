import Db from '../Db.js';

const getItem = async (req, res) => {
    let id = req.params.id
    Db.getDB().deleteItem(id)
    res.send({})
}

export default getItem;
