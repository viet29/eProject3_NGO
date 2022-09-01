/* Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
(function () {
	var b = false;
	window.JQClass = function () {};
	JQClass.classes = {};
	JQClass.extend = function a(j) {
		var c = this.prototype;
		b = true;
		var k = new this();
		b = false;
		for (var f in j) {
			if (typeof j[f] === "function" && typeof c[f] === "function") {
				k[f] = (function (m, l) {
					return function () {
						var n = this._super;
						this._super = function (p) {
							return c[m].apply(this, p || [])
						};
						var o = l.apply(this, arguments);
						this._super = n;
						return o
					}
				})(f, j[f])
			} else {
				if (typeof j[f] === "object" && typeof c[f] === "object" && f === "defaultOptions") {
					var g = c[f];
					var h = j[f];
					var i = {};
					var e;
					for (e in g) {
						i[e] = g[e]
					}
					for (e in h) {
						i[e] = h[e]
					}
					k[f] = i
				} else {
					k[f] = j[f]
				}
			}
		}

		function d() {
			if (!b && this._init) {
				this._init.apply(this, arguments)
			}
		}
		d.prototype = k;
		d.prototype.constructor = d;
		d.extend = a;
		return d
	}
})();
/* Abstract base class for collection plugins v1.0.2.
	Written by Keith Wood (wood.keith{at}optusnet.com.au) December 2013.
	Licensed under the MIT license (http://keith-wood.name/licence.html). */
(function ($) {
	JQClass.classes.JQPlugin = JQClass.extend({
		name: "plugin",
		defaultOptions: {},
		regionalOptions: {},
		deepMerge: true,
		_getMarker: function () {
			return "is-" + this.name
		},
		_init: function () {
			$.extend(this.defaultOptions, (this.regionalOptions && this.regionalOptions[""]) || {});
			var jqName = camelCase(this.name);
			$[jqName] = this;
			$.fn[jqName] = function (options) {
				var otherArgs = Array.prototype.slice.call(arguments, 1);
				var inst = this;
				var returnValue = this;
				this.each(function () {
					if (typeof options === "string") {
						if (options[0] === "_" || !$[jqName][options]) {
							throw "Unknown method: " + options
						}
						var methodValue = $[jqName][options].apply($[jqName], [this].concat(otherArgs));
						if (methodValue !== inst && methodValue !== undefined) {
							returnValue = methodValue;
							return false
						}
					} else {
						$[jqName]._attach(this, options)
					}
				});
				return returnValue
			}
		},
		setDefaults: function (options) {
			$.extend(this.defaultOptions, options || {})
		},
		_attach: function (elem, options) {
			elem = $(elem);
			if (elem.hasClass(this._getMarker())) {
				return
			}
			elem.addClass(this._getMarker());
			options = $.extend(this.deepMerge, {}, this.defaultOptions, this._getMetadata(elem), options || {});
			var inst = $.extend({
				name: this.name,
				elem: elem,
				options: options
			}, this._instSettings(elem, options));
			elem.data(this.name, inst);
			this._postAttach(elem, inst);
			this.option(elem, options)
		},
		_instSettings: function (elem, options) {
			return {}
		},
		_postAttach: function (elem, inst) {},
		_getMetadata: function (elem) {
			try {
				var data = elem.data(this.name.toLowerCase()) || "";
				data = data.replace(/(\\?)'/g, function (e, t) {
					return t ? "'" : '"'
				}).replace(/([a-zA-Z0-9]+):/g, function (match, group, i) {
					var count = data.substring(0, i).match(/"/g);
					return (!count || count.length % 2 === 0 ? '"' + group + '":' : group + ":")
				}).replace(/\\:/g, ":");
				data = $.parseJSON("{" + data + "}");
				for (var key in data) {
					if (data.hasOwnProperty(key)) {
						var value = data[key];
						if (typeof value === "string" && value.match(/^new Date\(([-0-9,\s]*)\)$/)) {
							data[key] = eval(value)
						}
					}
				}
				return data
			} catch (e) {
				return {}
			}
		},
		_getInst: function (elem) {
			return $(elem).data(this.name) || {}
		},
		option: function (elem, name, value) {
			elem = $(elem);
			var inst = elem.data(this.name);
			var options = name || {};
			if (!name || (typeof name === "string" && typeof value === "undefined")) {
				options = (inst || {}).options;
				return (options && name ? options[name] : options)
			}
			if (!elem.hasClass(this._getMarker())) {
				return
			}
			if (typeof name === "string") {
				options = {};
				options[name] = value
			}
			this._optionsChanged(elem, inst, options);
			$.extend(inst.options, options)
		},
		_optionsChanged: function (elem, inst, options) {},
		destroy: function (elem) {
			elem = $(elem);
			if (!elem.hasClass(this._getMarker())) {
				return
			}
			this._preDestroy(elem, this._getInst(elem));
			elem.removeData(this.name).removeClass(this._getMarker())
		},
		_preDestroy: function (elem, inst) {}
	});

	function camelCase(name) {
		return name.replace(/-([a-z])/g, function (match, group) {
			return group.toUpperCase()
		})
	}
	$.JQPlugin = {
		createPlugin: function (superClass, overrides) {
			if (typeof superClass === "object") {
				overrides = superClass;
				superClass = "JQPlugin"
			}
			superClass = camelCase(superClass);
			var className = camelCase(overrides.name);
			JQClass.classes[className] = JQClass.classes[superClass].extend(overrides);
			new JQClass.classes[className]()
		}
	}
})(jQuery);