// Auto-generated by generate-protos script on Tue Aug 01 2023 21:39:46 GMT+0800 (Malaysia Time)

const Schema = module.exports;

mergeObjects(Schema, require('./base_gcmessages.js'));
mergeObjects(Schema, require('./econ_gcmessages.js'));
mergeObjects(Schema, require('./gcsdk_gcmessages.js'));
mergeObjects(Schema, require('./gcsystemmsgs.js'));
mergeObjects(Schema, require('./steamdatagram_auth_messages.js'));
mergeObjects(Schema, require('./steamdatagram_messages.js'));
mergeObjects(Schema, require('./steammessages.js'));
mergeObjects(Schema, require('./tf_gcmessages.js'));
mergeObjects(Schema, require('./tf_proto_def_messages.js'));

function mergeObjects(destinationObject, sourceObject) {
	for (let i in sourceObject) {
		if (sourceObject.hasOwnProperty(i)) {
			destinationObject[i] = sourceObject[i];
		}
	}
}
