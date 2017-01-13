/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.events.LogMessage', null, global);
goog.exportSymbol('proto.events.LogMessage.MessageType', null, global);

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
proto.events.LogMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.events.LogMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.events.LogMessage.displayName = 'proto.events.LogMessage';
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
proto.events.LogMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.events.LogMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.events.LogMessage} msg The msg instance to transform.
 * @return {!Object}
 */
proto.events.LogMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: msg.getMessage_asB64(),
    messageType: jspb.Message.getField(msg, 2),
    timestamp: jspb.Message.getField(msg, 3),
    appId: jspb.Message.getField(msg, 4),
    sourceType: jspb.Message.getField(msg, 5),
    sourceInstance: jspb.Message.getField(msg, 6)
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
 * @return {!proto.events.LogMessage}
 */
proto.events.LogMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.events.LogMessage;
  return proto.events.LogMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.events.LogMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.events.LogMessage}
 */
proto.events.LogMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMessage(value);
      break;
    case 2:
      var value = /** @type {!proto.events.LogMessage.MessageType} */ (reader.readEnum());
      msg.setMessageType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceType(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceInstance(value);
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
 * @param {!proto.events.LogMessage} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.events.LogMessage.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.events.LogMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.events.LogMessage.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(this, 1));
  if (f != null) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = /** @type {!proto.events.LogMessage.MessageType} */ (jspb.Message.getField(this, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(this, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(this, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(this, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(this, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * required bytes message = 1;
 * @return {!(string|Uint8Array)}
 */
proto.events.LogMessage.prototype.getMessage = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * required bytes message = 1;
 * This is a type-conversion wrapper around `getMessage()`
 * @return {string}
 */
proto.events.LogMessage.prototype.getMessage_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMessage()));
};


/**
 * required bytes message = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMessage()`
 * @return {!Uint8Array}
 */
proto.events.LogMessage.prototype.getMessage_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMessage()));
};


/** @param {!(string|Uint8Array)} value */
proto.events.LogMessage.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.events.LogMessage.prototype.clearMessage = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.events.LogMessage.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required MessageType message_type = 2;
 * @return {!proto.events.LogMessage.MessageType}
 */
proto.events.LogMessage.prototype.getMessageType = function() {
  return /** @type {!proto.events.LogMessage.MessageType} */ (jspb.Message.getFieldWithDefault(this, 2, 1));
};


/** @param {!proto.events.LogMessage.MessageType} value */
proto.events.LogMessage.prototype.setMessageType = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.events.LogMessage.prototype.clearMessageType = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.events.LogMessage.prototype.hasMessageType = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required int64 timestamp = 3;
 * @return {number}
 */
proto.events.LogMessage.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.events.LogMessage.prototype.setTimestamp = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.events.LogMessage.prototype.clearTimestamp = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.events.LogMessage.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string app_id = 4;
 * @return {string}
 */
proto.events.LogMessage.prototype.getAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.events.LogMessage.prototype.setAppId = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.events.LogMessage.prototype.clearAppId = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.events.LogMessage.prototype.hasAppId = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string source_type = 5;
 * @return {string}
 */
proto.events.LogMessage.prototype.getSourceType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.events.LogMessage.prototype.setSourceType = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.events.LogMessage.prototype.clearSourceType = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.events.LogMessage.prototype.hasSourceType = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string source_instance = 6;
 * @return {string}
 */
proto.events.LogMessage.prototype.getSourceInstance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.events.LogMessage.prototype.setSourceInstance = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.events.LogMessage.prototype.clearSourceInstance = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.events.LogMessage.prototype.hasSourceInstance = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * @enum {number}
 */
proto.events.LogMessage.MessageType = {
  OUT: 1,
  ERR: 2
};

goog.object.extend(exports, proto.events);