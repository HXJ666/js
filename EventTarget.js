function EventTarget() {
	this.handlers = {};
}
EventTarget.prototype = {
	constructor:EventTarget,

	//type为自定义事件类型，handler为处理函数
	addHandler:function(type, handler) {
		if (typeof this.handlers[type] == "undefined") {
			this.handlers[type] = [];
		}

		this.handlers[type].push(handler);
	},
	//event需要的额外信息需要自己给出
	fire: function(event) {
		if (!event.target) {
			event.target = this;
		}
		if (this.handlers[event.type] instanceof Array) {
			var handlers = this.handlers[event.type];
			for (var i = 0, len=handlers.length; i < len; i++) {
				handlers[i](event);
			}
		}
	},
	//参数同addHandler
	removeHandler: function(type, handler){
		if (this.handlers[type] instanceof Array) {
			var handlers = this.handlers[type];
			for (var i = 0, len = handlers.length; i < len; i++) {
				if (handlers[i] === handler){
					break;
				}
			}

			handlers.splice(i, 1);
		}
	}
};

/*
function handleMessage(event) {
	alert("Message received: " + event.message);
}

创建一个新对象
var target = new EventTarget();

添加一个事件处理程序
target.addHandler("message",handleMessage);

触发事件
target.fire({type: "message", message: "Hello world!"});

删除事件处理程序
target.removeHandler("message", handleMessage);

再次，应没有处理程序
target.fire({type:"message", message: "Hello world!"})
*/