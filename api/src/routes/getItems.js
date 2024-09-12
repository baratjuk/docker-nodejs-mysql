import Db from '../Db.js';

const db = new Db()

const getItems = async (req, res) => {
    const items = await db.getItems();
    res.send(items);
}

export default getItems;
