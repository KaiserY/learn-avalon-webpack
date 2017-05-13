(function() {
    function getCssEffect(domObj) {
        if (domObj.currentStyle) {
            return domObj.currentStyle;
        } else if (window.getComputedStyle) {
            return document.defaultView.getComputedStyle(domObj);
        } else {
            return null;
        }
    }

    var EventUtil = {
        addHandler: function(element, type, handler) {
            if (element.addEventListener) {
                element.addEventListener(type, handler, false);
            } else if (element.attachEvent) {
                element.attachEvent('on' + type, handler);
            } else {
                element['on' + type] = handler;
            }
        },
        getCharCode: function(event) {
            if (typeof event.charCode === 'number') {
                return event.charCode;
            } else {
                return event.keyCode;
            }
        },
        getEvent: function(event) {
            return event ? event : window.event;
        },
        getTarget: function(event) {
            return event.target || event.srcElement;
        },
    };

    EventUtil.addHandler(document, 'readystatechange', function() {
        if (!('placeholder' in document.createElement('input'))) {
            var inputdoc = document.getElementsByTagName('input');
            var hasPlaceholder = [];
            for (var i in inputdoc) {
                if (typeof(inputdoc[i]) === 'object' && inputdoc[i].getAttribute('placeholder') != null) {
                    hasPlaceholder.push(inputdoc[i]);
                }
            }
            if (hasPlaceholder.length > 0) {
                var holders = [];
                for (var i = 0; i < hasPlaceholder.length; i++) {
                    var span = document.createElement('span');
                    // span.className = 'ui-placeholder';
                    var input = hasPlaceholder[i];
                    span.height = input.clientHeight + 'px';
                    span.width = input.clientWidth + 'px';
                    span.innerHTML = input.getAttribute('placeholder');
                    if (input === input.parentNode.lastChild) {
                        input.parentNode.appendChild(span);
                    } else {
                        input.parentNode.insertBefore(span, input.nextSibling);
                    }
                    var cssStyle = getCssEffect(input);
                    span.style.color = '#999';
                    span.style.height = cssStyle.height;
                    span.style.fontSize = cssStyle.fontSize;
                    span.style.textIndent = cssStyle.textIndent;
                    span.style.lineHeight = cssStyle.lineHeight;
                    span.style.textAlign = cssStyle.textAlign;
                    span.style.paddingLeft = cssStyle.paddingLeft;
                    span.style.paddingTop = cssStyle.paddingTop;
                    span.style.paddingRight = cssStyle.paddingRight;
                    span.style.paddingBottom = cssStyle.paddingBottom;
                    span.style.position = 'absolute';
                    span.style.top = input.offsetTop + 'px';
                    span.style.left = input.offsetLeft + 'px';
                    span.style.float = 'left';
                    holders[i] = span;

                    EventUtil.addHandler(input, 'blur', function(event) {
                        event = EventUtil.getEvent(event);
                        var target = EventUtil.getTarget(event);

                        for (var i in hasPlaceholder) {
                            if (target === hasPlaceholder[i]) {
                                if (hasPlaceholder[i].value != '') {
                                    holders[i].style.display = 'none';
                                } else if (/[a-zA-Z0-9`~!@#\$%\^&\*\(\)_+-=\[\]\{\};:''\|\\,.\/\?<>]/.test(String.fromCharCode(EventUtil.getCharCode(event)))) {
                                    holders[i].style.display = 'none';
                                } else {
                                    holders[i].style.display = 'block';
                                }
                            }
                        }
                    });

                    EventUtil.addHandler(input, 'focus', function(event) {
                        event = EventUtil.getEvent(event);
                        var target = EventUtil.getTarget(event);

                        for (var i in hasPlaceholder) {
                            if (target === hasPlaceholder[i]) {
                                holders[i].style.display = 'none';
                            }
                        }
                    });
                }
                // var togglePlaceholder = function(event) {
                //     event = EventUtil.getEvent(event);
                //     var target = EventUtil.getTarget(event);

                //     for (var i in hasPlaceholder) {
                //         if (target === hasPlaceholder[i]) {
                //             if (hasPlaceholder[i].value != '') {
                //                 holders[i].style.display = 'none';
                //             } else if (/[a-zA-Z0-9`~!@#\$%\^&\*\(\)_+-=\[\]\{\};:''\|\\,.\/\?<>]/.test(String.fromCharCode(EventUtil.getCharCode(event)))) {
                //                 holders[i].style.display = 'none';
                //             } else {
                //                 holders[i].style.display = 'block';
                //             }
                //         }
                //     }
                // };

                // EventUtil.addHandler(document, 'keydown', togglePlaceholder);

                // EventUtil.addHandler(document, 'keyup', function(event) {
                //     event = EventUtil.getEvent(event);
                //     var target = EventUtil.getTarget(event);

                //     for (var i in hasPlaceholder) {
                //         if (target === hasPlaceholder[i]) {
                //             if (hasPlaceholder[i].value != '') {
                //                 holders[i].style.display = 'none';
                //             } else {
                //                 holders[i].style.display = 'block';
                //             }
                //         }
                //     }
                // });

                EventUtil.addHandler(window, 'resize', function(event) {
                    for (var i = 0; i < hasPlaceholder.length; i++) {
                        holders[i].style.top = hasPlaceholder[i].offsetTop + 'px';
                        holders[i].style.left = hasPlaceholder[i].offsetLeft + 'px';
                    }
                });
            }
        }
    });
}).call();
