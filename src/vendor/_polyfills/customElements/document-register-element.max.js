/*!
ISC License

Copyright (c) 2014-2018, Andrea Giammarchi, @WebReflection

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE
OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.

*/
(function (window, polyfill) {
  'use strict';

  // DO NOT USE THIS FILE DIRECTLY, IT WON'T WORK
  // THIS IS A PROJECT BASED ON A BUILD SYSTEM
  // THIS FILE IS JUST WRAPPED UP RESULTING IN
  // build/document-register-element.js
  // and its .max.js counter part

  const
    { document } = window;
  const { Object } = window
  ;

  const htmlClass = (function (info) {
    // (C) Andrea Giammarchi - @WebReflection - MIT Style
    const
      catchClass = /^[A-Z]+[a-z]/;
    const filterBy = function (re) {
      const arr = []; let
        tag;
      for (tag in register) {
        if (re.test(tag)) arr.push(tag);
      }
      return arr;
    };
    const add = function (Class, tag) {
      tag = tag.toLowerCase();
      if (!(tag in register)) {
        register[Class] = (register[Class] || []).concat(tag);
        register[tag] = (register[tag.toUpperCase()] = Class);
      }
    };
    var register = (Object.create || Object)(null);
    const htmlClass = {};
    let i; let section; let tags; let
      Class
    ;
    for (section in info) {
      for (Class in info[section]) {
        tags = info[section][Class];
        register[Class] = tags;
        for (i = 0; i < tags.length; i++) {
          register[tags[i].toLowerCase()] =
          register[tags[i].toUpperCase()] = Class;
        }
      }
    }
    htmlClass.get = function get(tagOrClass) {
      return typeof tagOrClass === 'string' ?
        (register[tagOrClass] || (catchClass.test(tagOrClass) ? [] : '')) :
        filterBy(tagOrClass);
    };
    htmlClass.set = function set(tag, Class) {
      return (catchClass.test(tag) ?
        add(tag, Class) :
        add(Class, tag)
      ), htmlClass;
    };
    return htmlClass;
  }({
    collections: {
      HTMLAllCollection: [
        'all',
      ],
      HTMLCollection: [
        'forms',
      ],
      HTMLFormControlsCollection: [
        'elements',
      ],
      HTMLOptionsCollection: [
        'options',
      ],
    },
    elements: {
      Element: [
        'element',
      ],
      HTMLAnchorElement: [
        'a',
      ],
      HTMLAppletElement: [
        'applet',
      ],
      HTMLAreaElement: [
        'area',
      ],
      HTMLAttachmentElement: [
        'attachment',
      ],
      HTMLAudioElement: [
        'audio',
      ],
      HTMLBRElement: [
        'br',
      ],
      HTMLBaseElement: [
        'base',
      ],
      HTMLBodyElement: [
        'body',
      ],
      HTMLButtonElement: [
        'button',
      ],
      HTMLCanvasElement: [
        'canvas',
      ],
      HTMLContentElement: [
        'content',
      ],
      HTMLDListElement: [
        'dl',
      ],
      HTMLDataElement: [
        'data',
      ],
      HTMLDataListElement: [
        'datalist',
      ],
      HTMLDetailsElement: [
        'details',
      ],
      HTMLDialogElement: [
        'dialog',
      ],
      HTMLDirectoryElement: [
        'dir',
      ],
      HTMLDivElement: [
        'div',
      ],
      HTMLDocument: [
        'document',
      ],
      HTMLElement: [
        'element',
        'abbr',
        'address',
        'article',
        'aside',
        'b',
        'bdi',
        'bdo',
        'cite',
        'code',
        'command',
        'dd',
        'dfn',
        'dt',
        'em',
        'figcaption',
        'figure',
        'footer',
        'header',
        'i',
        'kbd',
        'mark',
        'nav',
        'noscript',
        'rp',
        'rt',
        'ruby',
        's',
        'samp',
        'section',
        'small',
        'strong',
        'sub',
        'summary',
        'sup',
        'u',
        'var',
        'wbr',
      ],
      HTMLEmbedElement: [
        'embed',
      ],
      HTMLFieldSetElement: [
        'fieldset',
      ],
      HTMLFontElement: [
        'font',
      ],
      HTMLFormElement: [
        'form',
      ],
      HTMLFrameElement: [
        'frame',
      ],
      HTMLFrameSetElement: [
        'frameset',
      ],
      HTMLHRElement: [
        'hr',
      ],
      HTMLHeadElement: [
        'head',
      ],
      HTMLHeadingElement: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
      ],
      HTMLHtmlElement: [
        'html',
      ],
      HTMLIFrameElement: [
        'iframe',
      ],
      HTMLImageElement: [
        'img',
      ],
      HTMLInputElement: [
        'input',
      ],
      HTMLKeygenElement: [
        'keygen',
      ],
      HTMLLIElement: [
        'li',
      ],
      HTMLLabelElement: [
        'label',
      ],
      HTMLLegendElement: [
        'legend',
      ],
      HTMLLinkElement: [
        'link',
      ],
      HTMLMapElement: [
        'map',
      ],
      HTMLMarqueeElement: [
        'marquee',
      ],
      HTMLMediaElement: [
        'media',
      ],
      HTMLMenuElement: [
        'menu',
      ],
      HTMLMenuItemElement: [
        'menuitem',
      ],
      HTMLMetaElement: [
        'meta',
      ],
      HTMLMeterElement: [
        'meter',
      ],
      HTMLModElement: [
        'del',
        'ins',
      ],
      HTMLOListElement: [
        'ol',
      ],
      HTMLObjectElement: [
        'object',
      ],
      HTMLOptGroupElement: [
        'optgroup',
      ],
      HTMLOptionElement: [
        'option',
      ],
      HTMLOutputElement: [
        'output',
      ],
      HTMLParagraphElement: [
        'p',
      ],
      HTMLParamElement: [
        'param',
      ],
      HTMLPictureElement: [
        'picture',
      ],
      HTMLPreElement: [
        'pre',
      ],
      HTMLProgressElement: [
        'progress',
      ],
      HTMLQuoteElement: [
        'blockquote',
        'q',
        'quote',
      ],
      HTMLScriptElement: [
        'script',
      ],
      HTMLSelectElement: [
        'select',
      ],
      HTMLShadowElement: [
        'shadow',
      ],
      HTMLSlotElement: [
        'slot',
      ],
      HTMLSourceElement: [
        'source',
      ],
      HTMLSpanElement: [
        'span',
      ],
      HTMLStyleElement: [
        'style',
      ],
      HTMLTableCaptionElement: [
        'caption',
      ],
      HTMLTableCellElement: [
        'td',
        'th',
      ],
      HTMLTableColElement: [
        'col',
        'colgroup',
      ],
      HTMLTableElement: [
        'table',
      ],
      HTMLTableRowElement: [
        'tr',
      ],
      HTMLTableSectionElement: [
        'thead',
        'tbody',
        'tfoot',
      ],
      HTMLTemplateElement: [
        'template',
      ],
      HTMLTextAreaElement: [
        'textarea',
      ],
      HTMLTimeElement: [
        'time',
      ],
      HTMLTitleElement: [
        'title',
      ],
      HTMLTrackElement: [
        'track',
      ],
      HTMLUListElement: [
        'ul',
      ],
      HTMLUnknownElement: [
        'unknown',
        'vhgroupv',
        'vkeygen',
      ],
      HTMLVideoElement: [
        'video',
      ],
    },
    nodes: {
      Attr: [
        'node',
      ],
      Audio: [
        'audio',
      ],
      CDATASection: [
        'node',
      ],
      CharacterData: [
        'node',
      ],
      Comment: [
        '#comment',
      ],
      Document: [
        '#document',
      ],
      DocumentFragment: [
        '#document-fragment',
      ],
      DocumentType: [
        'node',
      ],
      HTMLDocument: [
        '#document',
      ],
      Image: [
        'img',
      ],
      Option: [
        'option',
      ],
      ProcessingInstruction: [
        'node',
      ],
      ShadowRoot: [
        '#shadow-root',
      ],
      Text: [
        '#text',
      ],
      XMLDocument: [
        'xml',
      ],
    },
  }));

  // passed at runtime, configurable via nodejs module
  if (typeof polyfill !== 'object') polyfill = { type: polyfill || 'auto' };

  const
    // V0 polyfill entry
    REGISTER_ELEMENT = 'registerElement';

  // IE < 11 only + old WebKit for attributes + feature detection
  const EXPANDO_UID = `__${ REGISTER_ELEMENT }${ window.Math.random() * 10e4 >> 0 }`;

  // shortcuts and costants
  const ADD_EVENT_LISTENER = 'addEventListener';
  const ATTACHED = 'attached';
  const CALLBACK = 'Callback';
  const DETACHED = 'detached';
  const EXTENDS = 'extends';

  const ATTRIBUTE_CHANGED_CALLBACK = `attributeChanged${ CALLBACK }`;
  const ATTACHED_CALLBACK = ATTACHED + CALLBACK;
  const CONNECTED_CALLBACK = `connected${ CALLBACK }`;
  const DISCONNECTED_CALLBACK = `disconnected${ CALLBACK }`;
  const CREATED_CALLBACK = `created${ CALLBACK }`;
  const DETACHED_CALLBACK = DETACHED + CALLBACK;

  const ADDITION = 'ADDITION';
  const MODIFICATION = 'MODIFICATION';
  const REMOVAL = 'REMOVAL';

  const DOM_ATTR_MODIFIED = 'DOMAttrModified';
  const DOM_CONTENT_LOADED = 'DOMContentLoaded';
  const DOM_SUBTREE_MODIFIED = 'DOMSubtreeModified';

  const PREFIX_TAG = '<';
  const PREFIX_IS = '=';

  // valid and invalid node names
  const validName = /^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/;
  const invalidNames = [
    'ANNOTATION-XML',
    'COLOR-PROFILE',
    'FONT-FACE',
    'FONT-FACE-SRC',
    'FONT-FACE-URI',
    'FONT-FACE-FORMAT',
    'FONT-FACE-NAME',
    'MISSING-GLYPH',
  ];

  // registered types and their prototypes
  const types = [];
  const protos = [];

  // to query subnodes
  let query = '';

  // html shortcut used to feature detect
  const { documentElement } = document;

  // ES5 inline helpers || basic patches
  const indexOf = types.indexOf || function (v) {
    for (var i = this.length; i-- && this[i] !== v;) {}
    return i;
  };

  // other helpers / shortcuts
  const OP = Object.prototype;
  const hOP = OP.hasOwnProperty;
  const iPO = OP.isPrototypeOf;

  const { defineProperty } = Object;
  const empty = [];
  const gOPD = Object.getOwnPropertyDescriptor;
  const gOPN = Object.getOwnPropertyNames;
  const gPO = Object.getPrototypeOf;
  const sPO = Object.setPrototypeOf;

  // jshint proto: true
  const hasProto = !!Object.__proto__;

  // V1 helpers
  let fixGetClass = false;
  const DRECEV1 = '__dreCEv1';
  const { customElements } = window;
  const usableCustomElements = !/^force/.test(polyfill.type) && !!(
    customElements &&
      customElements.define &&
      customElements.get &&
      customElements.whenDefined
  );
  const Dict = Object.create || Object;
  const Map = window.Map || function Map() {
    const K = []; const V = []; let
      i;
    return {
      get(k) {
        return V[indexOf.call(K, k)];
      },
      set(k, v) {
        i = indexOf.call(K, k);
        if (i < 0) V[K.push(k) - 1] = v;
        else V[i] = v;
      },
    };
  };
  const Promise = window.Promise || function (fn) {
    const
      notify = [];
    let done = false;
    var p = {
      catch() {
        return p;
      },
      then(cb) {
        notify.push(cb);
        if (done) setTimeout(resolve, 1);
        return p;
      },
    }
      ;
    function resolve(value) {
      done = true;
      while (notify.length) notify.shift()(value);
    }
    fn(resolve);
    return p;
  };
  let justCreated = false;
  const constructors = Dict(null);
  const waitingList = Dict(null);
  const nodeNames = new Map();
  let secondArgument = function (is) {
    return is.toLowerCase();
  };

  // used to create unique instances
  const create = Object.create || function Bridge(proto) {
    // silly broken polyfill probably ever used but short enough to work
    return proto ? ((Bridge.prototype = proto), new Bridge()) : this;
  };

  // will set the prototype if possible
  // or copy over all properties
  const setPrototype = sPO || (
    hasProto ?
      function (o, p) {
        o.__proto__ = p;
        return o;
      } : (
        (gOPN && gOPD) ?
          (function () {
            function setProperties(o, p) {
              for (var
                key,
                names = gOPN(p),
                i = 0, { length } = names;
                i < length; i++
              ) {
                key = names[i];
                if (!hOP.call(o, key)) {
                  defineProperty(o, key, gOPD(p, key));
                }
              }
            }
            return function (o, p) {
              do {
                setProperties(o, p);
              } while ((p = gPO(p)) && !iPO.call(p, o));
              return o;
            };
          }()) :
          function (o, p) {
            for (const key in p) {
              o[key] = p[key];
            }
            return o;
          }
      ));

  // DOM shortcuts and helpers, if any

  const MutationObserver = window.MutationObserver ||
                       window.WebKitMutationObserver;

  const { HTMLAnchorElement } = window;

  const HTMLElementPrototype = (
    window.HTMLElement ||
      window.Element ||
      window.Node
  ).prototype;

  const IE8 = !iPO.call(HTMLElementPrototype, documentElement);

  const safeProperty = IE8 ? function (o, k, d) {
    o[k] = d.value;
    return o;
  } : defineProperty;

  const isValidNode = IE8 ?
    function (node) {
      return node.nodeType === 1;
    } :
    function (node) {
      return iPO.call(HTMLElementPrototype, node);
    };

  const targets = IE8 && [];

  const { attachShadow } = HTMLElementPrototype;
  const { cloneNode } = HTMLElementPrototype;
  const { dispatchEvent } = HTMLElementPrototype;
  const { getAttribute } = HTMLElementPrototype;
  const { hasAttribute } = HTMLElementPrototype;
  const { removeAttribute } = HTMLElementPrototype;
  const { setAttribute } = HTMLElementPrototype;

  // replaced later on
  const { createElement } = document;
  const { importNode } = document;
  let patchedCreateElement = createElement;

  // shared observer for all attributes
  const attributesObserver = MutationObserver && {
    attributes: true,
    characterData: true,
    attributeOldValue: true,
  };

  // useful to detect only if there's no MutationObserver
  var DOMAttrModified = MutationObserver || function (e) {
    doesNotSupportDOMAttrModified = false;
    documentElement.removeEventListener(
      DOM_ATTR_MODIFIED,
      DOMAttrModified,
    );
  };

  // will both be used to make DOMNodeInserted asynchronous
  let asapQueue;
  let asapTimer = 0;

  // internal flags
  const V0 = REGISTER_ELEMENT in document &&
         !/^force-all/.test(polyfill.type);
  let setListener = true;
  let justSetup = false;
  var doesNotSupportDOMAttrModified = true;
  let dropDomContentLoaded = true;

  // needed for the innerHTML helper
  let notFromInnerHTMLHelper = true;

  // optionally defined later on
  let onSubtreeModified;
  let callDOMAttrModified;
  let getAttributesMirror;
  let observer;
  let observe;

  // based on setting prototype capability
  // will check proto or the expando attribute
  // in order to setup the node once
  let patchIfNotAlready;
  let patch;

  // used for tests
  let tmp
  ;

  // IE11 disconnectedCallback issue #
  // to be tested before any createElement patch
  if (MutationObserver) {
    // original fix:
    // https://github.com/javan/mutation-observer-inner-html-shim
    tmp = document.createElement('div');
    tmp.innerHTML = '<div><div></div></div>';
    new MutationObserver((mutations, observer) => {
      if (
        mutations[0] &&
        mutations[0].type == 'childList' &&
        !mutations[0].removedNodes[0].childNodes.length
      ) {
        tmp = gOPD(HTMLElementPrototype, 'innerHTML');
        const set = tmp && tmp.set;
        if (set) {
          defineProperty(HTMLElementPrototype, 'innerHTML', {
            set(value) {
              while (this.lastChild) { this.removeChild(this.lastChild); }
              set.call(this, value);
            },
          });
        }
      }
      observer.disconnect();
      tmp = null;
    }).observe(tmp, { childList: true, subtree: true });
    tmp.innerHTML = '';
  }

  // only if needed
  if (!V0) {
    if (sPO || hasProto) {
      patchIfNotAlready = function (node, proto) {
        if (!iPO.call(proto, node)) {
          setupNode(node, proto);
        }
      };
      patch = setupNode;
    } else {
      patchIfNotAlready = function (node, proto) {
        if (!node[EXPANDO_UID]) {
          node[EXPANDO_UID] = Object(true);
          setupNode(node, proto);
        }
      };
      patch = patchIfNotAlready;
    }

    if (IE8) {
      doesNotSupportDOMAttrModified = false;
      (function () {
        const
          descriptor = gOPD(HTMLElementPrototype, ADD_EVENT_LISTENER);
        const addEventListener = descriptor.value;
        const patchedRemoveAttribute = function (name) {
          const e = new CustomEvent(DOM_ATTR_MODIFIED, { bubbles: true });
          e.attrName = name;
          e.prevValue = getAttribute.call(this, name);
          e.newValue = null;
          e[REMOVAL] = e.attrChange = 2;
          removeAttribute.call(this, name);
          dispatchEvent.call(this, e);
        };
        const patchedSetAttribute = function (name, value) {
          const
            had = hasAttribute.call(this, name);
          const old = had && getAttribute.call(this, name);
          const e = new CustomEvent(DOM_ATTR_MODIFIED, { bubbles: true })
            ;
          setAttribute.call(this, name, value);
          e.attrName = name;
          e.prevValue = had ? old : null;
          e.newValue = value;
          if (had) {
            e[MODIFICATION] = e.attrChange = 1;
          } else {
            e[ADDITION] = e.attrChange = 0;
          }
          dispatchEvent.call(this, e);
        };
        const onPropertyChange = function (e) {
          // jshint eqnull:true
          const
            node = e.currentTarget;
          let superSecret = node[EXPANDO_UID];
          const { propertyName } = e;
          let event
            ;
          if (superSecret.hasOwnProperty(propertyName)) {
            superSecret = superSecret[propertyName];
            event = new CustomEvent(DOM_ATTR_MODIFIED, { bubbles: true });
            event.attrName = superSecret.name;
            event.prevValue = superSecret.value || null;
            event.newValue = (superSecret.value = node[propertyName] || null);
            if (event.prevValue == null) {
              event[ADDITION] = event.attrChange = 0;
            } else {
              event[MODIFICATION] = event.attrChange = 1;
            }
            dispatchEvent.call(node, event);
          }
        }
        ;
        descriptor.value = function (type, handler, capture) {
          if (
            type === DOM_ATTR_MODIFIED &&
            this[ATTRIBUTE_CHANGED_CALLBACK] &&
            this.setAttribute !== patchedSetAttribute
          ) {
            this[EXPANDO_UID] = {
              className: {
                name: 'class',
                value: this.className,
              },
            };
            this.setAttribute = patchedSetAttribute;
            this.removeAttribute = patchedRemoveAttribute;
            addEventListener.call(this, 'propertychange', onPropertyChange);
          }
          addEventListener.call(this, type, handler, capture);
        };
        defineProperty(HTMLElementPrototype, ADD_EVENT_LISTENER, descriptor);
      }());
    } else if (!MutationObserver) {
      documentElement[ADD_EVENT_LISTENER](DOM_ATTR_MODIFIED, DOMAttrModified);
      documentElement.setAttribute(EXPANDO_UID, 1);
      documentElement.removeAttribute(EXPANDO_UID);
      if (doesNotSupportDOMAttrModified) {
        onSubtreeModified = function (e) {
          const
            node = this;
          let oldAttributes;
          let newAttributes;
          let key
          ;
          if (node === e.target) {
            oldAttributes = node[EXPANDO_UID];
            node[EXPANDO_UID] = (newAttributes = getAttributesMirror(node));
            for (key in newAttributes) {
              if (!(key in oldAttributes)) {
                // attribute was added
                return callDOMAttrModified(
                  0,
                  node,
                  key,
                  oldAttributes[key],
                  newAttributes[key],
                  ADDITION,
                );
              } else if (newAttributes[key] !== oldAttributes[key]) {
                // attribute was changed
                return callDOMAttrModified(
                  1,
                  node,
                  key,
                  oldAttributes[key],
                  newAttributes[key],
                  MODIFICATION,
                );
              }
            }
            // checking if it has been removed
            for (key in oldAttributes) {
              if (!(key in newAttributes)) {
                // attribute removed
                return callDOMAttrModified(
                  2,
                  node,
                  key,
                  oldAttributes[key],
                  newAttributes[key],
                  REMOVAL,
                );
              }
            }
          }
        };
        callDOMAttrModified = function (
          attrChange,
          currentTarget,
          attrName,
          prevValue,
          newValue,
          action,
        ) {
          const e = {
            attrChange,
            currentTarget,
            attrName,
            prevValue,
            newValue,
          };
          e[action] = attrChange;
          onDOMAttrModified(e);
        };
        getAttributesMirror = function (node) {
          for (var
            attr, name,
            result = {},
            { attributes } = node,
            i = 0, { length } = attributes;
            i < length; i++
          ) {
            attr = attributes[i];
            name = attr.name;
            if (name !== 'setAttribute') {
              result[name] = attr.value;
            }
          }
          return result;
        };
      }
    }

    // set as enumerable, writable and configurable
    document[REGISTER_ELEMENT] = function registerElement(type, options) {
      upperType = type.toUpperCase();
      if (setListener) {
        // only first time document.registerElement is used
        // we need to set this listener
        // setting it by default might slow down for no reason
        setListener = false;
        if (MutationObserver) {
          observer = (function (attached, detached) {
            function checkEmAll(list, callback) {
              for (let i = 0, { length } = list; i < length; callback(list[i++])) {}
            }
            return new MutationObserver((records) => {
              for (var
                current, node, newValue,
                i = 0, { length } = records; i < length; i++
              ) {
                current = records[i];
                if (current.type === 'childList') {
                  checkEmAll(current.addedNodes, attached);
                  checkEmAll(current.removedNodes, detached);
                } else {
                  node = current.target;
                  if (notFromInnerHTMLHelper &&
                      node[ATTRIBUTE_CHANGED_CALLBACK] &&
                      current.attributeName !== 'style') {
                    newValue = getAttribute.call(node, current.attributeName);
                    if (newValue !== current.oldValue) {
                      node[ATTRIBUTE_CHANGED_CALLBACK](
                        current.attributeName,
                        current.oldValue,
                        newValue,
                      );
                    }
                  }
                }
              }
            });
          }(executeAction(ATTACHED), executeAction(DETACHED)));
          observe = function (node) {
            observer.observe(
              node,
              {
                childList: true,
                subtree: true,
              },
            );
            return node;
          };
          observe(document);
          if (attachShadow) {
            HTMLElementPrototype.attachShadow = function () {
              return observe(attachShadow.apply(this, arguments));
            };
          }
        } else {
          asapQueue = [];
          document[ADD_EVENT_LISTENER]('DOMNodeInserted', onDOMNode(ATTACHED));
          document[ADD_EVENT_LISTENER]('DOMNodeRemoved', onDOMNode(DETACHED));
        }

        document[ADD_EVENT_LISTENER](DOM_CONTENT_LOADED, onReadyStateChange);
        document[ADD_EVENT_LISTENER]('readystatechange', onReadyStateChange);

        document.importNode = function (node, deep) {
          switch (node.nodeType) {
            case 1:
              return setupAll(document, importNode, [node, !!deep]);
            case 11:
              for (var
                fragment = document.createDocumentFragment(),
                { childNodes } = node,
                { length } = childNodes,
                i = 0; i < length; i++
              ) { fragment.appendChild(document.importNode(childNodes[i], !!deep)); }
              return fragment;
            default:
              return cloneNode.call(node, !!deep);
          }
        };

        HTMLElementPrototype.cloneNode = function (deep) {
          return setupAll(this, cloneNode, [!!deep]);
        };
      }

      if (justSetup) return (justSetup = false);

      if ((
        indexOf.call(types, PREFIX_IS + upperType) +
        indexOf.call(types, PREFIX_TAG + upperType)
      ) > -2) {
        throwTypeError(type);
      }

      if (!validName.test(upperType) || indexOf.call(invalidNames, upperType) > -1) {
        throw new Error(`The type ${ type } is invalid`);
      }

      const
        constructor = function () {
          return extending ?
            document.createElement(nodeName, upperType) :
            document.createElement(nodeName);
        };
      const opt = options || OP;
      var extending = hOP.call(opt, EXTENDS);
      var nodeName = extending ? options[EXTENDS].toUpperCase() : upperType;
      let upperType;
      let i
      ;

      if (extending && (
        indexOf.call(types, PREFIX_TAG + nodeName)
      ) > -1) {
        throwTypeError(nodeName);
      }

      i = types.push((extending ? PREFIX_IS : PREFIX_TAG) + upperType) - 1;

      query = query.concat(
        query.length ? ',' : '',
        extending ? `${ nodeName }[is="${ type.toLowerCase() }"]` : nodeName,
      );

      constructor.prototype = (
        protos[i] = hOP.call(opt, 'prototype') ?
          opt.prototype :
          create(HTMLElementPrototype)
      );

      if (query.length) {
        loopAndVerify(
          document.querySelectorAll(query),
          ATTACHED,
        );
      }

      return constructor;
    };

    document.createElement = (patchedCreateElement = function (localName, typeExtension) {
      let
        is = getIs(typeExtension);
      const node = is ?
        createElement.call(document, localName, secondArgument(is)) :
        createElement.call(document, localName);
      const name = `${ localName }`;
      const i = indexOf.call(
        types,
        (is ? PREFIX_IS : PREFIX_TAG) +
          (is || name).toUpperCase(),
      );
      let setup = i > -1
      ;
      if (is) {
        node.setAttribute('is', is = is.toLowerCase());
        if (setup) {
          setup = isInQSA(name.toUpperCase(), is);
        }
      }
      notFromInnerHTMLHelper = !document.createElement.innerHTMLHelper;
      if (setup) patch(node, protos[i]);
      return node;
    });
  }

  function ASAP() {
    const queue = asapQueue.splice(0, asapQueue.length);
    asapTimer = 0;
    while (queue.length) {
      queue.shift().call(null, queue.shift());
    }
  }

  function loopAndVerify(list, action) {
    for (let i = 0, { length } = list; i < length; i++) {
      verifyAndSetupAndAction(list[i], action);
    }
  }

  function loopAndSetup(list) {
    for (var i = 0, { length } = list, node; i < length; i++) {
      node = list[i];
      patch(node, protos[getTypeIndex(node)]);
    }
  }

  function executeAction(action) {
    return function (node) {
      if (isValidNode(node)) {
        verifyAndSetupAndAction(node, action);
        if (query.length) {
          loopAndVerify(
            node.querySelectorAll(query),
            action,
          );
        }
      }
    };
  }

  function getTypeIndex(target) {
    const
      is = getAttribute.call(target, 'is');
    const nodeName = target.nodeName.toUpperCase();
    const i = indexOf.call(
      types,
      is ?
        PREFIX_IS + is.toUpperCase() :
        PREFIX_TAG + nodeName,
    )
    ;
    return is && i > -1 && !isInQSA(nodeName, is) ? -1 : i;
  }

  function isInQSA(name, type) {
    return query.indexOf(`${ name }[is="${ type }"]`) > -1;
  }

  function onDOMAttrModified(e) {
    const
      node = e.currentTarget;
    const { attrChange } = e;
    const { attrName } = e;
    const { target } = e;
    const addition = e[ADDITION] || 2;
    const removal = e[REMOVAL] || 3
    ;
    if (notFromInnerHTMLHelper &&
        (!target || target === node) &&
        node[ATTRIBUTE_CHANGED_CALLBACK] &&
        attrName !== 'style' && (
      e.prevValue !== e.newValue ||
          // IE9, IE10, and Opera 12 gotcha
          e.newValue === '' && (
            attrChange === addition ||
            attrChange === removal
          )
    )) {
      node[ATTRIBUTE_CHANGED_CALLBACK](
        attrName,
        attrChange === addition ? null : e.prevValue,
        attrChange === removal ? null : e.newValue,
      );
    }
  }

  function onDOMNode(action) {
    const executor = executeAction(action);
    return function (e) {
      asapQueue.push(executor, e.target);
      if (asapTimer) clearTimeout(asapTimer);
      asapTimer = setTimeout(ASAP, 1);
    };
  }

  function onReadyStateChange(e) {
    if (dropDomContentLoaded) {
      dropDomContentLoaded = false;
      e.currentTarget.removeEventListener(DOM_CONTENT_LOADED, onReadyStateChange);
    }
    if (query.length) {
      loopAndVerify(
        (e.target || document).querySelectorAll(query),
        e.detail === DETACHED ? DETACHED : ATTACHED,
      );
    }
    if (IE8) purge();
  }

  function patchedSetAttribute(name, value) {
    // jshint validthis:true
    const self = this;
    setAttribute.call(self, name, value);
    onSubtreeModified.call(self, { target: self });
  }

  function setupAll(context, callback, args) {
    const
      node = callback.apply(context, args);
    const i = getTypeIndex(node)
    ;
    if (i > -1) patch(node, protos[i]);
    if (args.pop() && query.length) { loopAndSetup(node.querySelectorAll(query)); }
    return node;
  }

  function setupNode(node, proto) {
    setPrototype(node, proto);
    if (observer) {
      observer.observe(node, attributesObserver);
    } else {
      if (doesNotSupportDOMAttrModified) {
        node.setAttribute = patchedSetAttribute;
        node[EXPANDO_UID] = getAttributesMirror(node);
        node[ADD_EVENT_LISTENER](DOM_SUBTREE_MODIFIED, onSubtreeModified);
      }
      node[ADD_EVENT_LISTENER](DOM_ATTR_MODIFIED, onDOMAttrModified);
    }
    if (node[CREATED_CALLBACK] && notFromInnerHTMLHelper) {
      node.created = true;
      node[CREATED_CALLBACK]();
      node.created = false;
    }
  }

  function purge() {
    for (var
      node,
      i = 0,
      { length } = targets;
      i < length; i++
    ) {
      node = targets[i];
      if (!documentElement.contains(node)) {
        length--;
        targets.splice(i--, 1);
        verifyAndSetupAndAction(node, DETACHED);
      }
    }
  }

  function throwTypeError(type) {
    throw new Error(`A ${ type } type is already registered`);
  }

  function verifyAndSetupAndAction(node, action) {
    let
      fn;
    let i = getTypeIndex(node);
    let counterAction
    ;
    if (i > -1) {
      patchIfNotAlready(node, protos[i]);
      i = 0;
      if (action === ATTACHED && !node[ATTACHED]) {
        node[DETACHED] = false;
        node[ATTACHED] = true;
        counterAction = 'connected';
        i = 1;
        if (IE8 && indexOf.call(targets, node) < 0) {
          targets.push(node);
        }
      } else if (action === DETACHED && !node[DETACHED]) {
        node[ATTACHED] = false;
        node[DETACHED] = true;
        counterAction = 'disconnected';
        i = 1;
      }
      if (i && (fn = (
        node[action + CALLBACK] ||
        node[counterAction + CALLBACK]
      ))) fn.call(node);
    }
  }

  // V1 in da House!
  function CustomElementRegistry() {}

  CustomElementRegistry.prototype = {
    constructor: CustomElementRegistry,
    // a workaround for the stubborn WebKit
    define: usableCustomElements ?
      function (name, Class, options) {
        if (options) {
          CERDefine(name, Class, options);
        } else {
          const NAME = name.toUpperCase();
          constructors[NAME] = {
            constructor: Class,
            create: [NAME],
          };
          nodeNames.set(Class, NAME);
          customElements.define(name, Class);
        }
      } :
      CERDefine,
    get: usableCustomElements ?
      function (name) {
        return customElements.get(name) || get(name);
      } :
      get,
    whenDefined: usableCustomElements ?
      function (name) {
        return Promise.race([
          customElements.whenDefined(name),
          whenDefined(name),
        ]);
      } :
      whenDefined,
  };

  function CERDefine(name, Class, options) {
    const
      is = options && options[EXTENDS] || '';
    const CProto = Class.prototype;
    const proto = create(CProto);
    const attributes = Class.observedAttributes || empty;
    const definition = { prototype: proto }
    ;
    // TODO: is this needed at all since it's inherited?
    // defineProperty(proto, 'constructor', {value: Class});
    safeProperty(proto, CREATED_CALLBACK, {
      value() {
        if (justCreated) justCreated = false;
        else if (!this[DRECEV1]) {
          this[DRECEV1] = true;
          new Class(this);
          if (CProto[CREATED_CALLBACK]) { CProto[CREATED_CALLBACK].call(this); }
          const info = constructors[nodeNames.get(Class)];
          if (!usableCustomElements || info.create.length > 1) {
            notifyAttributes(this);
          }
        }
      },
    });
    safeProperty(proto, ATTRIBUTE_CHANGED_CALLBACK, {
      value(name) {
        if (indexOf.call(attributes, name) > -1) {
          if (CProto[ATTRIBUTE_CHANGED_CALLBACK]) { CProto[ATTRIBUTE_CHANGED_CALLBACK].apply(this, arguments); }
        }
      },
    });
    if (CProto[CONNECTED_CALLBACK]) {
      safeProperty(proto, ATTACHED_CALLBACK, {
        value: CProto[CONNECTED_CALLBACK],
      });
    }
    if (CProto[DISCONNECTED_CALLBACK]) {
      safeProperty(proto, DETACHED_CALLBACK, {
        value: CProto[DISCONNECTED_CALLBACK],
      });
    }
    if (is) definition[EXTENDS] = is;
    name = name.toUpperCase();
    constructors[name] = {
      constructor: Class,
      create: is ? [is, secondArgument(name)] : [name],
    };
    nodeNames.set(Class, name);
    document[REGISTER_ELEMENT](name.toLowerCase(), definition);
    whenDefined(name);
    waitingList[name].r();
  }

  function get(name) {
    const info = constructors[name.toUpperCase()];
    return info && info.constructor;
  }

  function getIs(options) {
    return typeof options === 'string' ?
      options : (options && options.is || '');
  }

  function notifyAttributes(self) {
    const
      callback = self[ATTRIBUTE_CHANGED_CALLBACK];
    const attributes = callback ? self.attributes : empty;
    let i = attributes.length;
    let attribute
    ;
    while (i--) {
      attribute = attributes[i]; // || attributes.item(i);
      callback.call(
        self,
        attribute.name || attribute.nodeName,
        null,
        attribute.value || attribute.nodeValue,
      );
    }
  }

  function whenDefined(name) {
    name = name.toUpperCase();
    if (!(name in waitingList)) {
      waitingList[name] = {};
      waitingList[name].p = new Promise((resolve) => {
        waitingList[name].r = resolve;
      });
    }
    return waitingList[name].p;
  }

  function polyfillV1() {
    if (customElements) delete window.customElements;
    defineProperty(window, 'customElements', {
      configurable: true,
      value: new CustomElementRegistry(),
    });
    defineProperty(window, 'CustomElementRegistry', {
      configurable: true,
      value: CustomElementRegistry,
    });
    for (let
      patchClass = function (name) {
        const Class = window[name];
        if (Class) {
          window[name] = function CustomElementsV1(self) {
            let info; let
              isNative;
            if (!self) self = this;
            if (!self[DRECEV1]) {
              justCreated = true;
              info = constructors[nodeNames.get(self.constructor)];
              isNative = usableCustomElements && info.create.length === 1;
              self = isNative ?
                Reflect.construct(Class, empty, info.constructor) :
                document.createElement.apply(document, info.create);
              self[DRECEV1] = true;
              justCreated = false;
              if (!isNative) notifyAttributes(self);
            }
            return self;
          };
          window[name].prototype = Class.prototype;
          try {
            Class.prototype.constructor = window[name];
          } catch (WebKit) {
            fixGetClass = true;
            defineProperty(Class, DRECEV1, { value: window[name] });
          }
        }
      },
      Classes = htmlClass.get(/^HTML[A-Z]*[a-z]/),
      i = Classes.length;
      i--;
      patchClass(Classes[i])
    ) {}
    (document.createElement = function (name, options) {
      const is = getIs(options);
      return is ?
        patchedCreateElement.call(this, name, secondArgument(is)) :
        patchedCreateElement.call(this, name);
    });
    if (!V0) {
      justSetup = true;
      document[REGISTER_ELEMENT]('');
    }
  }

  // if customElements is not there at all
  if (!customElements || /^force/.test(polyfill.type)) polyfillV1();
  else if (!polyfill.noBuiltIn) {
    // if available test extends work as expected
    try {
      (function (DRE, options, name) {
        const re = new RegExp(`^<a\\s+is=('|")${ name }\\1></a>$`);
        options[EXTENDS] = 'a';
        DRE.prototype = create(HTMLAnchorElement.prototype);
        DRE.prototype.constructor = DRE;
        window.customElements.define(name, DRE, options);
        if (
          !re.test(document.createElement('a', { is: name }).outerHTML) ||
          !re.test((new DRE()).outerHTML)
        ) {
          throw options;
        }
      }(
        function DRE() {
          return Reflect.construct(HTMLAnchorElement, [], DRE);
        },
        {},
        'document-register-element-a',
      ));
    } catch (o_O) {
      // or force the polyfill if not
      // and keep internal original reference
      polyfillV1();
    }
  }

  // FireFox only issue
  if (!polyfill.noBuiltIn) {
    try {
      if (createElement.call(document, 'a', 'a').outerHTML.indexOf('is') < 0) { throw {}; }
    } catch (FireFox) {
      secondArgument = function (is) {
        return { is: is.toLowerCase() };
      };
    }
  }
}(window));
