import Db from '../Db.js';

const db = new Db()

const addItem = async (req, res) => {
    let name = req.params.name
    console.log(JSON.stringify(req.params, null, 4))
    db.addItem(name);
    res.send({});
}

export default addItem;
