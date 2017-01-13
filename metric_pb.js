/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var uuid_pb = require('./uuid_pb.js');
goog.exportSymbol('proto.events.ContainerMetric', null, global);
goog.exportSymbol('proto.events.CounterEvent', null, global);
goog.exportSymbol('proto.events.ValueMetric', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.events.ValueMetric = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.events.ValueMetric, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.events.ValueMetric.displayName = 'proto.events.ValueMetric';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.events.ValueMetric.prototype.toObject = function(opt_includeInstance) {
  return proto.events.ValueMetric.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.events.ValueMetric} msg The msg instance to transform.
 * @return {!Object}
 */
proto.events.ValueMetric.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getField(msg, 1),
    value: +jspb.Message.getField(msg, 2),
    unit: jspb.Message.getField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.events.ValueMetric}
 */
proto.events.ValueMetric.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.events.ValueMetric;
  return proto.events.ValueMetric.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.events.ValueMetric} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.events.ValueMetric}
 */
proto.events.ValueMetric.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.events.ValueMetric} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.events.ValueMetric.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.events.ValueMetric.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.events.ValueMetric.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(this, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(this, 2));
  if (f != null) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(this, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * required string name = 1;
 * @return {string}
 */
proto.events.ValueMetric.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.events.ValueMetric.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.events.ValueMetric.prototype.clearName = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.events.ValueMetric.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required double value = 2;
 * @return {number}
 */
proto.events.ValueMetric.prototype.getValue = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.events.ValueMetric.prototype.setValue = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.events.ValueMetric.prototype.clearValue = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.events.ValueMetric.prototype.hasValue = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required string unit = 3;
 * @return {string}
 */
proto.events.ValueMetric.prototype.getUnit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.events.ValueMetric.prototype.setUnit = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.events.ValueMetric.prototype.clearUnit = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.events.ValueMetric.prototype.hasUnit = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.events.CounterEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.events.CounterEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.events.CounterEvent.displayName = 'proto.events.CounterEvent';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.events.CounterEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.events.CounterEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.events.CounterEvent} msg The msg instance to transform.
 * @return {!Object}
 */
proto.events.CounterEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getField(msg, 1),
    delta: jspb.Message.getField(msg, 2),
    total: jspb.Message.getField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.events.CounterEvent}
 */
proto.events.CounterEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.events.CounterEvent;
  return proto.events.CounterEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.events.CounterEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.events.CounterEvent}
 */
proto.events.CounterEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDelta(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.events.CounterEvent} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.events.CounterEvent.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.events.CounterEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.events.CounterEvent.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(this, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(this, 2));
  if (f != null) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(this, 3));
  if (f != null) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * required string name = 1;
 * @return {string}
 */
proto.events.CounterEvent.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.events.CounterEvent.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.events.CounterEvent.prototype.clearName = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.events.CounterEvent.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint64 delta = 2;
 * @return {number}
 */
proto.events.CounterEvent.prototype.getDelta = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.events.CounterEvent.prototype.setDelta = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.events.CounterEvent.prototype.clearDelta = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.events.CounterEvent.prototype.hasDelta = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 total = 3;
 * @return {number}
 */
proto.events.CounterEvent.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.events.CounterEvent.prototype.setTotal = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.events.CounterEvent.prototype.clearTotal = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.events.CounterEvent.prototype.hasTotal = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.events.ContainerMetric = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.events.ContainerMetric, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.events.ContainerMetric.displayName = 'proto.events.ContainerMetric';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.events.ContainerMetric.prototype.toObject = function(opt_includeInstance) {
  return proto.events.ContainerMetric.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.events.ContainerMetric} msg The msg instance to transform.
 * @return {!Object}
 */
proto.events.ContainerMetric.toObject = function(includeInstance, msg) {
  var f, obj = {
    applicationid: jspb.Message.getField(msg, 1),
    instanceindex: jspb.Message.getField(msg, 2),
    cpupercentage: +jspb.Message.getField(msg, 3),
    memorybytes: jspb.Message.getField(msg, 4),
    diskbytes: jspb.Message.getField(msg, 5),
    memorybytesquota: jspb.Message.getField(msg, 6),
    diskbytesquota: jspb.Message.getField(msg, 7)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.events.ContainerMetric}
 */
proto.events.ContainerMetric.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.events.ContainerMetric;
  return proto.events.ContainerMetric.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.events.ContainerMetric} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.events.ContainerMetric}
 */
proto.events.ContainerMetric.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplicationid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setInstanceindex(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCpupercentage(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMemorybytes(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDiskbytes(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMemorybytesquota(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDiskbytesquota(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.events.ContainerMetric} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.events.ContainerMetric.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.events.ContainerMetric.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.events.ContainerMetric.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(this, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(this, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(this, 3));
  if (f != null) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(this, 4));
  if (f != null) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(this, 5));
  if (f != null) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(this, 6));
  if (f != null) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(this, 7));
  if (f != null) {
    writer.writeUint64(
      7,
      f
    );
  }
};


/**
 * required string applicationId = 1;
 * @return {string}
 */
proto.events.ContainerMetric.prototype.getApplicationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.events.ContainerMetric.prototype.setApplicationid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.events.ContainerMetric.prototype.clearApplicationid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.events.ContainerMetric.prototype.hasApplicationid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int32 instanceIndex = 2;
 * @return {number}
 */
proto.events.ContainerMetric.prototype.getInstanceindex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.events.ContainerMetric.prototype.setInstanceindex = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.events.ContainerMetric.prototype.clearInstanceindex = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.events.ContainerMetric.prototype.hasInstanceindex = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required double cpuPercentage = 3;
 * @return {number}
 */
proto.events.ContainerMetric.prototype.getCpupercentage = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.events.ContainerMetric.prototype.setCpupercentage = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.events.ContainerMetric.prototype.clearCpupercentage = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.events.ContainerMetric.prototype.hasCpupercentage = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * required uint64 memoryBytes = 4;
 * @return {number}
 */
proto.events.ContainerMetric.prototype.getMemorybytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.events.ContainerMetric.prototype.setMemorybytes = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.events.ContainerMetric.prototype.clearMemorybytes = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.events.ContainerMetric.prototype.hasMemorybytes = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * required uint64 diskBytes = 5;
 * @return {number}
 */
proto.events.ContainerMetric.prototype.getDiskbytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.events.ContainerMetric.prototype.setDiskbytes = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.events.ContainerMetric.prototype.clearDiskbytes = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.events.ContainerMetric.prototype.hasDiskbytes = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint64 memoryBytesQuota = 6;
 * @return {number}
 */
proto.events.ContainerMetric.prototype.getMemorybytesquota = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.events.ContainerMetric.prototype.setMemorybytesquota = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.events.ContainerMetric.prototype.clearMemorybytesquota = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.events.ContainerMetric.prototype.hasMemorybytesquota = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint64 diskBytesQuota = 7;
 * @return {number}
 */
proto.events.ContainerMetric.prototype.getDiskbytesquota = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.events.ContainerMetric.prototype.setDiskbytesquota = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.events.ContainerMetric.prototype.clearDiskbytesquota = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.events.ContainerMetric.prototype.hasDiskbytesquota = function() {
  return jspb.Message.getField(this, 7) != null;
};


goog.object.extend(exports, proto.events);