function serialize(form) {
	var parts = [],
	i,
	len,
	j,
	optLen,
	option,
	optValue;

	for (i=0, len=form.elements.length; i<len; i++) {
		field = form.elements[i];

		switch(field.type) {
			case "select_one":
			case "select_multiple":

			if (field.name.length) {
				for (j=0, optLen = field.options.length; j<optLen;j++) {
					option = field.options[j];
					if (option.selected) {
						optValue = "";
						if (options.hasAttribute) {
							optValue = (option.hasAttribute("value") ? option.value : option.text);
						} else {
							optValue =(option.attributes["value"].specified ? option.value : option.text);
						}
						parts.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(optValue));
					}
				}
			}
			break;

		case undefined: //字段集
		case "file": //文件提交
		case "submit": //提交按钮
		case "reset": //重置按钮
		case "button": //自定义按钮
			break;
		case "radio": //单选按钮
		case "checkbox": //复选框
			if (!field.checked) (
				break;
			)
			/* 执行默认操作 */
		default：
			//不包含没有名字的表单字段
			if (field.name.length) {
				parts.push(encodeURIComponent(field.name) + "=" +encodeURIComponent(field.value));
			} 
		}
	}
	return parts.join("&");
}