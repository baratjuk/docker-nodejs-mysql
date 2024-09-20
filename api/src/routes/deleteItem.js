import Db from '../Db.js';

const getItem = async (req, res) => {
    let {id} = req.params
    Db.getDB().deleteItem(id)
    res.send({})
}

export default getItem;
