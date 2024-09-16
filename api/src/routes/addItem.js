import Db from '../Db.js';

const addItem = async (req, res) => {
    let name = req.params.name
    console.log(JSON.stringify(req.params, null, 4))
    Db.getDB().addItem(name);
    res.send({});
}

export default addItem;
