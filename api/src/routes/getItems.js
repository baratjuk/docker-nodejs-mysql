import Db from '../Db.js';

const getItems = async (req, res) => {
    const items = await Db.getDB().getItems()
    res.send(items)
}

export default getItems;
