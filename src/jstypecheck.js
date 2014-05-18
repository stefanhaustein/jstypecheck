/**
 * TODO(haustein): We should permit multiple schemata and merge 
 * them into a working set here.
 * 
 * @param {Object} schema The JS schema to use for the check.
 * @constructor
 */
var JsTypeCheck = window.JsTypeCheck = function (schema) {
	/** Type definitions from the schema */
	this.definitions = schema['definitions'];
	
	/** Globals from the schema */
	this.globals = schema['globals'];

	/** Locals declared in the last function of the processed code. */
	this.locals = {};
	
	/** Globals declared in the processed code. */
	this.declaredGlobals = {};
};

JsTypeCheck.TYPE_ANY = {type: "*"};
JsTypeCheck.TYPE_ARRAY = {type: "array"};
JsTypeCheck.TYPE_BOOLEAN = {type: "boolean"};
JsTypeCheck.TYPE_NUMBER = {type: "number"};
JsTypeCheck.TYPE_NULL = {type: "null"};
JsTypeCheck.TYPE_OBJECT = {type: "object"};
JsTypeCheck.TYPE_STRING = {type: "string"};
JsTypeCheck.TYPE_UNDEFINED = {type: "undefined"};

JsTypeCheck.prototype.check = function(ast) {
	if (ast.type != "Program") {
		this.error(ast, "Program expected");
	}

	var body = ast.body;
	for (var i = 0; i < body.length; i++) {
		var node = body[i];
		if (node.type == "FunctionDeclaration") {
			this.checkFunctionDeclaration(node);
		} else {
			console.log("skipping " + node);
		}
	}
};

JsTypeCheck.prototype.checkBlockStatement = function(fn) {
	this.debug('BlockStatement', fn);
	var body = fn.body;
	for (var i = 0; i < body.length; i++) {
		var statement = body[i];
		if (statement.type == "VariableDeclaration") {
			this.checkVariableDeclaration(statement);
		} else {
			console.log("skipping", statement);
		}
	}
};

JsTypeCheck.prototype.checkFunctionDeclaration = function(fn) {
	this.debug("FunctionDeclaration", fn);
	// We don't reset at the end for now to simplify testing.
	this.locals = {};
	if (fn.body.type == "BlockStatement") {
		this.checkBlockStatement(fn.body);
	} else {
		console.log("skipping " + node);
	}
};

JsTypeCheck.prototype.checkLiteral = function(literal) {
	// We can do better for object and array literals...
	return this.getValueType(literal.value);
};

JsTypeCheck.prototype.checkVariableDeclaration = function(varStatement) {
	this.debug("VariableDeclaration", varStatement);
	var declarations = varStatement.declarations;
	for (var i = 0; i < declarations.length; i++) {
		this.checkVariableDeclarator(declarations[i]);
	}
};

JsTypeCheck.prototype.checkVariableDeclarator = function(varDecl) {
	this.debug("VariableDeclaration", varDecl);
	var name = varDecl.id.name;
	var type = varDecl.init != null ? this.checkExpression(varDecl.init) : JsTypeCheck.TYPE_ANY;
	this.locals[name] = type;
};

JsTypeCheck.prototype.checkExpression = function(expr) {
	var jsType;
	switch(expr.type) {
	case "Literal":
		jsType = this.checkLiteral(expr);
		break;
	default:
		console.log("skipping expr: ", expr);
		jsType = JsTypeCheck.TYPE_ANY;
	}
	expr.jsType = jsType;
	return jsType;
};

JsTypeCheck.prototype.debug = function(fn, node) {
	console.log(fn, node);
};

JsTypeCheck.prototype.getValueType = function(value) {
	if (value === null) {
		return JsTypeCheck.TYPE_NULL;
	};
	switch(typeof value) {
	case "boolean": return JsTypeCheck.TYPE_BOOLEAN;
	case "number": return JsTypeCheck.TYPE_NUMBER;
	case "function": return JsTypeCheckt.TYPE_FUNCTION; // parse FN signature instead
	case "string": return JsTypeCheck.TYPE_STRING;
	// TODO: construct JSON type from literal, care about arrays
	default: 
		return this.definitions["Object"];  
	}
};

JsTypeCheck.prototype.error = function(node, msg) {
	throw {
		message: msg,
		node: node
	};
};

