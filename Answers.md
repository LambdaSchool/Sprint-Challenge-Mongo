1.  Describe the following: `DataBase`, `Collection` , `Document`
    a document is the lowest branch in data storage.  It contains data about a single object
    a bunch of documents put together is a collection
    a bunch of collections is a database - generally orderd

1.  Describe how one can achieve the pattern of _relationships_ in MongoDB. What
    needs to take place at the schema level? How do we _'fill'_ in the
    appropriate relational data using mongoose?
    At the schema level you put in a new field with {type: mongoose.Schema.Types.ObjectId, ref: "Something you want to ref"}
    refs are a type of ObjectID which is provided by Mongo and they are links to the specified data
    At the API level, you use .populate to replace the refs with the data you need


1.  Explain a way to break up an API into Sub-Applications, which tool did we use to do that?
    we can use express Router and break up the API into different routes