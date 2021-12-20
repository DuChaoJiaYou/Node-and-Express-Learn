/**
 * @description  该文件时使用 mongodb的插件来连接MongoDB数据库 ， 本次实践准备使用mongoose方式来 连接、配置、操作数据库
 */
const { MongoClient } = require('mongodb')

const url = 'mongodb://127.0.0.1:27017'
const client = new MongoClient(url)

const dbName = 'myProduct'

async function main() {
    await client.connect()
    console.log('Connect successfully to server');
    const db = client.db(dbName)
    const collection = db.collection('documents')


    // 插入
    const insertResult =  await collection.insertOne({name:'duchao002'})
    // const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
    console.log('Inserted documents => ', insertResult);

    // 查找
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);

    return 'done'
}
main()