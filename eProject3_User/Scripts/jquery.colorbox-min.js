/*
	Colorbox 1.6.4
	license: MIT
	http://www.jacklmoore.com/colorbox
*/
(function (a1, ao, az) {
	function aL(a, b, c) {
		var d = ao.createElement(a);
		return b && (d.id = bf + b), c && (d.style.cssText = c), a1(d)
	}

	function aO() {
		return az.innerHeight ? az.innerHeight : a1(az).height()
	}

	function aV(a, b) {
		b !== Object(b) && (b = {}), this.cache = {}, this.el = a, this.value = function (c) {
			var d;
			return void 0 === this.cache[c] && (d = a1(this.el).attr("data-cbox-" + c), void 0 !== d ? this.cache[c] = d : void 0 !== b[c] ? this.cache[c] = b[c] : void 0 !== bb[c] && (this.cache[c] = bb[c])), this.cache[c]
		}, this.get = function (c) {
			var d = this.value(c);
			return a1.isFunction(d) ? d.call(this.el, this) : d
		}
	}

	function aw(c) {
		var a = a9.length,
			b = (ad + c) % a;
		return 0 > b ? a + b : b
	}

	function ac(b, a) {
		return Math.round((/%/.test(b) ? ("x" === a ? ap.width() : aO()) / 100 : 1) * parseInt(b, 10))
	}

	function aY(b, a) {
		return b.get("photo") || b.get("photoRegex").test(a)
	}

	function aG(b, a) {
		return b.get("retinaUrl") && az.devicePixelRatio > 1 ? a.replace(b.get("photoRegex"), b.get("retinaSuffix")) : a
	}

	function al(a) {
		"contains" in ba[0] && !ba[0].contains(a.target) && a.target !== a6[0] && (a.stopPropagation(), ba.focus())
	}

	function ai(a) {
		ai.str !== a && (ba.add(a6).removeClass(ai.str).addClass(a), ai.str = a)
	}

	function au(a) {
		ad = 0, a && a !== !1 && "nofollow" !== a ? (a9 = a1("." + a3).filter(function () {
			var b = a1.data(this, bd),
				c = new aV(this, b);
			return c.get("rel") === a
		}), ad = a9.index(ab.el), -1 === ad && (a9 = a9.add(ab.el), ad = a9.length - 1)) : a9 = a1(ab.el)
	}

	function a4(a) {
		a1(ao).trigger(a), af.triggerHandler(a)
	}

	function ar(c) {
		var e;
		if (!av) {
			if (e = a1(c).data(bd), ab = new aV(c, e), au(ab.get("rel")), !a5) {
				a5 = aa = !0, ai(ab.get("className")), ba.css({
					visibility: "hidden",
					display: "block",
					opacity: ""
				}), aA = aL(a0, "LoadedContent", "width:0; height:0; overflow:hidden; visibility:hidden"), ag.css({
					width: "",
					height: ""
				}).append(aA), aC = a2.height() + aE.height() + ag.outerHeight(!0) - ag.height(), am = aj.width() + ax.width() + ag.outerWidth(!0) - ag.width(), aM = aA.outerHeight(!0), be = aA.outerWidth(!0);
				var b = ac(ab.get("initialWidth"), "x"),
					j = ac(ab.get("initialHeight"), "y"),
					d = ab.get("maxWidth"),
					a = ab.get("maxHeight");
				ab.w = Math.max((d !== !1 ? Math.min(b, ac(d, "x")) : b) - be - am, 0), ab.h = Math.max((a !== !1 ? Math.min(j, ac(a, "y")) : j) - aM - aC, 0), aA.css({
					width: "",
					height: ab.h
				}), aD.position(), a4(aq), ab.get("onOpen"), aP.add(at).hide(), ba.focus(), ab.get("trapFocus") && ao.addEventListener && (ao.addEventListener("focus", al, !0), af.one(aX, function () {
					ao.removeEventListener("focus", al, !0)
				})), ab.get("returnFocus") && af.one(aX, function () {
					a1(ab.el).focus()
				})
			}
			var g = parseFloat(ab.get("opacity"));
			a6.css({
				opacity: g === g ? g : "",
				cursor: ab.get("overlayClose") ? "pointer" : "",
				visibility: "visible"
			}).show(), ab.get("closeButton") ? ah.html(ab.get("")).appendTo(ag) : ah.appendTo("<div/>"), a8()
		}
	}

	function aR() {
		ba || (a7 = !1, ap = a1(az), ba = aL(a0).attr({
			id: bd,
			"class": a1.support.opacity === !1 ? bf + "IE" : "",
			role: "dialog",
			tabindex: "-1"
		}).hide(), a6 = aL(a0, "Overlay").hide(), aH = a1([aL(a0, "LoadingOverlay")[0], aL(a0, "LoadingGraphic")[0]]), bc = aL(a0, "Wrapper"), ag = aL(a0, "Content").append(at = aL(a0, "Title"), aW = aL(a0, "Current"), aS = a1('<button type="button"/>').attr({
			id: bf + "Previous"
		}), aF = a1('<button type="button"/>').attr({
			id: bf + "Next"
		}), aZ = a1('<button type="button"/>').attr({
			id: bf + "Slideshow"
		}), aH), ah = a1('<button type="button"/>').attr({
			id: bf + "Close"
		}), bc.append(aL(a0).append(aL(a0, "TopLeft"), a2 = aL(a0, "TopCenter"), aL(a0, "TopRight")), aL(a0, !1, "clear:left").append(aj = aL(a0, "MiddleLeft"), ag, ax = aL(a0, "MiddleRight")), aL(a0, !1, "clear:left").append(aL(a0, "BottomLeft"), aE = aL(a0, "BottomCenter"), aL(a0, "BottomRight"))).find("div div").css({
			"float": "left"
		}), aK = aL(a0, !1, "position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"), aP = aF.add(aS).add(aW).add(aZ)), ao.body && !ba.parent().length && a1(ao.body).append(a6, ba.append(bc, aK))
	}

	function aJ() {
		function a(b) {
			b.which > 1 || b.shiftKey || b.altKey || b.metaKey || b.ctrlKey || (b.preventDefault(), ar(this))
		}
		return ba ? (a7 || (a7 = !0, aF.click(function () {
			aD.next()
		}), aS.click(function () {
			aD.prev()
		}), ah.click(function () {
			aD.close()
		}), a6.click(function () {
			ab.get("overlayClose") && aD.close()
		}), a1(ao).bind("keydown." + bf, function (c) {
			var b = c.keyCode;
			a5 && ab.get("escKey") && 27 === b && (c.preventDefault(), aD.close()), a5 && ab.get("arrowKey") && a9[1] && !c.altKey && (37 === b ? (c.preventDefault(), aS.click()) : 39 === b && (c.preventDefault(), aF.click()))
		}), a1.isFunction(a1.fn.on) ? a1(ao).on("click." + bf, "." + a3, a) : a1("." + a3).live("click." + bf, a)), !0) : !1
	}

	function a8() {
		var f, i, j, g = aD.prep,
			b = ++aI;
		if (aa = !0, aT = !1, a4(ay), a4(aB), ab.get("onLoad"), ab.h = ab.get("height") ? ac(ab.get("height"), "y") - aM - aC : ab.get("innerHeight") && ac(ab.get("innerHeight"), "y"), ab.w = ab.get("width") ? ac(ab.get("width"), "x") - be - am : ab.get("innerWidth") && ac(ab.get("innerWidth"), "x"), ab.mw = ab.w, ab.mh = ab.h, ab.get("maxWidth") && (ab.mw = ac(ab.get("maxWidth"), "x") - be - am, ab.mw = ab.w && ab.w < ab.mw ? ab.w : ab.mw), ab.get("maxHeight") && (ab.mh = ac(ab.get("maxHeight"), "y") - aM - aC, ab.mh = ab.h && ab.h < ab.mh ? ab.h : ab.mh), f = ab.get("href"), aU = setTimeout(function () {
				aH.show()
			}, 100), ab.get("inline")) {
			var a = a1(f).eq(0);
			j = a1("<div>").hide().insertBefore(a), af.one(ay, function () {
				j.replaceWith(a)
			}), g(a)
		} else {
			ab.get("iframe") ? g(" ") : ab.get("html") ? g(ab.get("html")) : aY(ab, f) ? (f = aG(ab, f), aT = ab.get("createImg"), a1(aT).addClass(bf + "Photo").bind("error." + bf, function () {
				g(aL(a0, "Error").html(ab.get("imgError")))
			}).one("load", function () {
				b === aI && setTimeout(function () {
					var c;
					ab.get("retinaImage") && az.devicePixelRatio > 1 && (aT.height = aT.height / az.devicePixelRatio, aT.width = aT.width / az.devicePixelRatio), ab.get("scalePhotos") && (i = function () {
						aT.height -= aT.height * c, aT.width -= aT.width * c
					}, ab.mw && aT.width > ab.mw && (c = (aT.width - ab.mw) / aT.width, i()), ab.mh && aT.height > ab.mh && (c = (aT.height - ab.mh) / aT.height, i())), ab.h && (aT.style.marginTop = Math.max(ab.mh - aT.height, 0) / 2 + "px"), a9[1] && (ab.get("loop") || a9[ad + 1]) && (aT.style.cursor = "pointer", a1(aT).bind("click." + bf, function () {
						aD.next()
					})), aT.style.width = aT.width + "px", aT.style.height = aT.height + "px", g(aT)
				}, 1)
			}), aT.src = f) : f && aK.load(f, ab.get("data"), function (c, d) {
				b === aI && g("error" === d ? aL(a0, "Error").html(ab.get("xhrError")) : a1(this).contents())
			})
		}
	}
	var a6, ba, bc, ag, a2, aj, ax, aE, a9, ap, aA, aK, aH, at, aW, aZ, aF, aS, ah, aP, ab, aC, am, aM, be, ad, aT, a5, aa, av, aU, aD, a7, bb = {
			html: !1,
			photo: !1,
			iframe: !1,
			inline: !1,
			transition: "elastic",
			speed: 300,
			fadeOut: 300,
			width: !1,
			initialWidth: "600",
			innerWidth: !1,
			maxWidth: !1,
			height: !1,
			initialHeight: "450",
			innerHeight: !1,
			maxHeight: !1,
			scalePhotos: !0,
			scrolling: !0,
			opacity: 0.9,
			preloading: !0,
			className: !1,
			overlayClose: !0,
			escKey: !0,
			arrowKey: !0,
			top: !1,
			bottom: !1,
			left: !1,
			right: !1,
			fixed: !1,
			data: void 0,
			closeButton: !0,
			fastIframe: !0,
			open: !1,
			reposition: !0,
			loop: !0,
			slideshow: !1,
			slideshowAuto: !0,
			slideshowSpeed: 2500,
			slideshowStart: "start slideshow",
			slideshowStop: "stop slideshow",
			photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,
			retinaImage: !1,
			retinaUrl: !1,
			retinaSuffix: "@2x.$1",
			current: "image {current} of {total}",
			previous: "previous",
			next: "next",
			close: "close",
			xhrError: "This content failed to load.",
			imgError: "This image failed to load.",
			returnFocus: !0,
			trapFocus: !0,
			onOpen: !1,
			onLoad: !1,
			onComplete: !1,
			onCleanup: !1,
			onClosed: !1,
			rel: function () {
				return this.rel
			},
			href: function () {
				return a1(this).attr("href")
			},
			title: function () {
				return this.title
			},
			createImg: function () {
				var a = new Image,
					b = a1(this).data("cbox-img-attrs");
				return "object" == typeof b && a1.each(b, function (d, c) {
					a[d] = c
				}), a
			},
			createIframe: function () {
				var a = ao.createElement("iframe"),
					b = a1(this).data("cbox-iframe-attrs");
				return "object" == typeof b && a1.each(b, function (d, c) {
					a[d] = c
				}), "frameBorder" in a && (a.frameBorder = 0), "allowTransparency" in a && (a.allowTransparency = "true"), a.name = (new Date).getTime(), a.allowFullscreen = !0, a
			}
		},
		bd = "colorbox",
		bf = "cbox",
		a3 = bf + "Element",
		aq = bf + "_open",
		aB = bf + "_load",
		aN = bf + "_complete",
		aQ = bf + "_cleanup",
		aX = bf + "_closed",
		ay = bf + "_purge",
		af = a1("<a/>"),
		a0 = "div",
		aI = 0,
		an = {},
		ak = function () {
			function m() {
				clearTimeout(d)
			}

			function c() {
				(ab.get("loop") || a9[ad + 1]) && (m(), d = setTimeout(aD.next, ab.get("slideshowSpeed")))
			}

			function f() {
				aZ.html(ab.get("slideshowStop")).unbind(l).one(l, g), af.bind(aN, c).bind(aB, m), ba.removeClass(b + "off").addClass(b + "on")
			}

			function g() {
				m(), af.unbind(aN, c).unbind(aB, m), aZ.html(ab.get("slideshowStart")).unbind(l).one(l, function () {
					aD.next(), f()
				}), ba.removeClass(b + "on").addClass(b + "off")
			}

			function j() {
				k = !1, aZ.hide(), m(), af.unbind(aN, c).unbind(aB, m), ba.removeClass(b + "off " + b + "on")
			}
			var k, d, b = bf + "Slideshow_",
				l = "click." + bf;
			return function () {
				k ? ab.get("slideshow") || (af.unbind(aQ, j), j()) : ab.get("slideshow") && a9[1] && (k = !0, af.one(aQ, j), ab.get("slideshowAuto") ? f() : g(), aZ.show())
			}
		}();
	a1[bd] || (a1(aR), aD = a1.fn[bd] = a1[bd] = function (a, b) {
		var c, d = this;
		return a = a || {}, a1.isFunction(d) && (d = a1("<a/>"), a.open = !0), d[0] ? (aR(), aJ() && (b && (a.onComplete = b), d.each(function () {
			var e = a1.data(this, bd) || {};
			a1.data(this, bd, a1.extend(e, a))
		}).addClass(a3), c = new aV(d[0], a), c.get("open") && ar(d[0])), d) : d
	}, aD.position = function (f, m) {
		function p() {
			a2[0].style.width = aE[0].style.width = ag[0].style.width = parseInt(ba[0].style.width, 10) - am + "px", ag[0].style.height = aj[0].style.height = ax[0].style.height = parseInt(ba[0].style.height, 10) - aC + "px"
		}
		var q, k, t, o = 0,
			b = 0,
			a = ba.offset();
		if (ap.unbind("resize." + bf), ba.css({
				top: -90000,
				left: -90000
			}), k = ap.scrollTop(), t = ap.scrollLeft(), ab.get("fixed") ? (a.top -= k, a.left -= t, ba.css({
				position: "fixed"
			})) : (o = k, b = t, ba.css({
				position: "absolute"
			})), b += ab.get("right") !== !1 ? Math.max(ap.width() - ab.w - be - am - ac(ab.get("right"), "x"), 0) : ab.get("left") !== !1 ? ac(ab.get("left"), "x") : Math.round(Math.max(ap.width() - ab.w - be - am, 0) / 2), o += ab.get("bottom") !== !1 ? Math.max(aO() - ab.h - aM - aC - ac(ab.get("bottom"), "y"), 0) : ab.get("top") !== !1 ? ac(ab.get("top"), "y") : Math.round(Math.max(aO() - ab.h - aM - aC, 0) / 2), ba.css({
				top: a.top,
				left: a.left,
				visibility: "visible"
			}), bc[0].style.width = bc[0].style.height = "9999px", q = {
				width: ab.w + be + am,
				height: ab.h + aM + aC,
				top: o,
				left: b
			}, f) {
			var j = 0;
			a1.each(q, function (c) {
				return q[c] !== an[c] ? (j = f, void 0) : void 0
			}), f = j
		}
		an = q, f || ba.css(q), ba.dequeue().animate(q, {
			duration: f || 0,
			complete: function () {
				p(), aa = !1, bc[0].style.width = ab.w + be + am + "px", bc[0].style.height = ab.h + aM + aC + "px", ab.get("reposition") && setTimeout(function () {
					ap.bind("resize." + bf, aD.position)
				}, 1), a1.isFunction(m) && m()
			},
			step: p
		})
	}, aD.resize = function (b) {
		var a;
		a5 && (b = b || {}, b.width && (ab.w = ac(b.width, "x") - be - am), b.innerWidth && (ab.w = ac(b.innerWidth, "x")), aA.css({
			width: ab.w
		}), b.height && (ab.h = ac(b.height, "y") - aM - aC), b.innerHeight && (ab.h = ac(b.innerHeight, "y")), b.innerHeight || b.height || (a = aA.scrollTop(), aA.css({
			height: "auto"
		}), ab.h = aA.height()), aA.css({
			height: ab.h
		}), a && aA.scrollTop(a), aD.position("none" === ab.get("transition") ? 0 : ab.get("speed")))
	}, aD.prep = function (f) {
		function h() {
			return ab.w = ab.w || aA.width(), ab.w = ab.mw && ab.mw < ab.w ? ab.mw : ab.w, ab.w
		}

		function b() {
			return ab.h = ab.h || aA.height(), ab.h = ab.mh && ab.mh < ab.h ? ab.mh : ab.h, ab.h
		}
		if (a5) {
			var c, e = "none" === ab.get("transition") ? 0 : ab.get("speed");
			aA.remove(), aA = aL(a0, "LoadedContent").append(f), aA.hide().appendTo(aK.show()).css({
				width: h(),
				overflow: ab.get("scrolling") ? "auto" : "hidden"
			}).css({
				height: b()
			}).prependTo(ag), aK.hide(), a1(aT).css({
				"float": "none"
			}), ai(ab.get("className")), c = function () {
				function g() {
					a1.support.opacity === !1 && ba[0].style.removeAttribute("filter")
				}
				var j, k, d = a9.length;
				a5 && (k = function () {
					clearTimeout(aU), aH.hide(), a4(aN), ab.get("onComplete")
				}, at.html(ab.get("title")).show(), aA.show(), d > 1 ? ("string" == typeof ab.get("current") && aW.html(ab.get("current").replace("{current}", ad + 1).replace("{total}", d)).show(), aF[ab.get("loop") || d - 1 > ad ? "show" : "hide"]().html(ab.get("")), aS[ab.get("loop") || ad ? "show" : "hide"]().html(ab.get("")), ak(), ab.get("preloading") && a1.each([aw(-1), aw(1)], function () {
					var l, m = a9[this],
						p = new aV(m, a1.data(m, bd)),
						a = p.get("href");
					a && aY(p, a) && (a = aG(p, a), l = ao.createElement("img"), l.src = a)
				})) : aP.hide(), ab.get("iframe") ? (j = ab.get("createIframe"), ab.get("scrolling") || (j.scrolling = "no"), a1(j).attr({
					src: ab.get("href"),
					"class": bf + "Iframe"
				}).one("load", k).appendTo(aA), af.one(ay, function () {
					j.src = "//about:blank"
				}), ab.get("fastIframe") && a1(j).trigger("load")) : k(), "fade" === ab.get("transition") ? ba.fadeTo(e, 1, g) : g())
			}, "fade" === ab.get("transition") ? ba.fadeTo(e, 0, function () {
				aD.position(0, c)
			}) : aD.position(e, c)
		}
	}, aD.next = function () {
		!aa && a9[1] && (ab.get("loop") || a9[ad + 1]) && (ad = aw(1), ar(a9[ad]))
	}, aD.prev = function () {
		!aa && a9[1] && (ab.get("loop") || ad) && (ad = aw(-1), ar(a9[ad]))
	}, aD.close = function () {
		a5 && !av && (av = !0, a5 = !1, a4(aQ), ab.get("onCleanup"), ap.unbind("." + bf), a6.fadeTo(ab.get("fadeOut") || 0, 0), ba.stop().fadeTo(ab.get("fadeOut") || 0, 0, function () {
			ba.hide(), a6.hide(), a4(ay), aA.remove(), setTimeout(function () {
				av = !1, a4(aX), ab.get("onClosed")
			}, 1)
		}))
	}, aD.remove = function () {
		ba && (ba.stop(), a1[bd].close(), ba.stop(!1, !0).remove(), a6.remove(), av = !1, ba = null, a1("." + a3).removeData(bd).removeClass(a3), a1(ao).unbind("click." + bf).unbind("keydown." + bf))
	}, aD.element = function () {
		return a1(ab.el)
	}, aD.settings = bb)
})(jQuery, document, window);