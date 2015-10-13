// Compiled by ClojureScript 1.7.122 {}
goog.provide('rum.examples');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('rum.core');
console.time("Init");
cljs.core.enable_console_print_BANG_.call(null);
rum.examples.now = (function rum$examples$now(){
return (new Date()).getTime();
});
rum.examples.el = (function rum$examples$el(id){
return document.getElementById(id);
});
rum.examples.ts__GT_str = (function rum$examples$ts__GT_str(ts){
var str = (new Date(ts)).toISOString();
return cljs.core.subs.call(null,str,(11),(cljs.core.count.call(null,str) - (1)));
});
rum.examples.clock = cljs.core.atom.call(null,rum.examples.now.call(null));
rum.examples.color = cljs.core.atom.call(null,"#FA8D97");
rum.examples.speed = cljs.core.atom.call(null,(167));
rum.examples.bmi_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(180),new cljs.core.Keyword(null,"weight","weight",-1262796205),(80)], null));
rum.examples.tick = (function rum$examples$tick(){
cljs.core.reset_BANG_.call(null,rum.examples.clock,rum.examples.now.call(null));

return setTimeout(rum$examples$tick,cljs.core.deref.call(null,rum.examples.speed));
});
rum.examples.tick.call(null);
rum.examples.static_timer = (function (){var render_mixin__4755__auto__ = rum.core.render__GT_mixin.call(null,(function (label,ts){
var attrs6612 = label;
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs6612))?sablono.interpreter.attributes.call(null,attrs6612):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs6612))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [": ",React.createElement("span",{"style": {"color": cljs.core.deref.call(null,rum.examples.color)}},sablono.interpreter.interpret.call(null,rum.examples.ts__GT_str.call(null,ts)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs6612),": ",React.createElement("span",{"style": {"color": cljs.core.deref.call(null,rum.examples.color)}},sablono.interpreter.interpret.call(null,rum.examples.ts__GT_str.call(null,ts)))], null))));
}));
var class__4756__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__4755__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"static-timer");
var ctor__4757__auto__ = ((function (render_mixin__4755__auto__,class__4756__auto__){
return (function() { 
var G__6613__delegate = function (args__4758__auto__){
var state__4759__auto__ = rum.core.args__GT_state.call(null,args__4758__auto__);
return rum.core.element.call(null,class__4756__auto__,state__4759__auto__,null);
};
var G__6613 = function (var_args){
var args__4758__auto__ = null;
if (arguments.length > 0) {
var G__6614__i = 0, G__6614__a = new Array(arguments.length -  0);
while (G__6614__i < G__6614__a.length) {G__6614__a[G__6614__i] = arguments[G__6614__i + 0]; ++G__6614__i;}
  args__4758__auto__ = new cljs.core.IndexedSeq(G__6614__a,0);
} 
return G__6613__delegate.call(this,args__4758__auto__);};
G__6613.cljs$lang$maxFixedArity = 0;
G__6613.cljs$lang$applyTo = (function (arglist__6615){
var args__4758__auto__ = cljs.core.seq(arglist__6615);
return G__6613__delegate(args__4758__auto__);
});
G__6613.cljs$core$IFn$_invoke$arity$variadic = G__6613__delegate;
return G__6613;
})()
;})(render_mixin__4755__auto__,class__4756__auto__))
;
return cljs.core.with_meta.call(null,ctor__4757__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__4756__auto__], null));
})();
var mount_el_6616 = rum.examples.el.call(null,"static-timer");
rum.core.mount.call(null,rum.examples.static_timer.call(null,"Static",cljs.core.deref.call(null,rum.examples.clock)),mount_el_6616);

cljs.core.add_watch.call(null,rum.examples.clock,new cljs.core.Keyword(null,"static-timer","static-timer",-36664821),((function (mount_el_6616){
return (function (_,___$1,___$2,new_val){
return rum.core.mount.call(null,rum.examples.static_timer.call(null,"Static",new_val),mount_el_6616);
});})(mount_el_6616))
);
rum.examples.forced_timer = (function (){var render_mixin__4755__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("div",null,"Forced: ",React.createElement("span",{"style": {"color": cljs.core.deref.call(null,rum.examples.color)}},sablono.interpreter.interpret.call(null,rum.examples.ts__GT_str.call(null,cljs.core.deref.call(null,rum.examples.clock)))));
}));
var class__4756__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__4755__auto__], null),null),"forced-timer");
var ctor__4757__auto__ = ((function (render_mixin__4755__auto__,class__4756__auto__){
return (function() { 
var G__6617__delegate = function (args__4758__auto__){
var state__4759__auto__ = rum.core.args__GT_state.call(null,args__4758__auto__);
return rum.core.element.call(null,class__4756__auto__,state__4759__auto__,null);
};
var G__6617 = function (var_args){
var args__4758__auto__ = null;
if (arguments.length > 0) {
var G__6618__i = 0, G__6618__a = new Array(arguments.length -  0);
while (G__6618__i < G__6618__a.length) {G__6618__a[G__6618__i] = arguments[G__6618__i + 0]; ++G__6618__i;}
  args__4758__auto__ = new cljs.core.IndexedSeq(G__6618__a,0);
} 
return G__6617__delegate.call(this,args__4758__auto__);};
G__6617.cljs$lang$maxFixedArity = 0;
G__6617.cljs$lang$applyTo = (function (arglist__6619){
var args__4758__auto__ = cljs.core.seq(arglist__6619);
return G__6617__delegate(args__4758__auto__);
});
G__6617.cljs$core$IFn$_invoke$arity$variadic = G__6617__delegate;
return G__6617;
})()
;})(render_mixin__4755__auto__,class__4756__auto__))
;
return cljs.core.with_meta.call(null,ctor__4757__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__4756__auto__], null));
})();
var mount_el_6620 = rum.examples.el.call(null,"forced-timer");
var comp_6621 = rum.core.mount.call(null,rum.examples.forced_timer.call(null),mount_el_6620);
cljs.core.add_watch.call(null,rum.examples.clock,new cljs.core.Keyword(null,"forced-timer","forced-timer",-851197363),((function (mount_el_6620,comp_6621){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp_6621);
});})(mount_el_6620,comp_6621))
);
rum.examples.colored_clock = (function (){var render_mixin__4755__auto__ = rum.core.render__GT_mixin.call(null,(function (time,color){
return React.createElement("span",{"style": {"color": color}},sablono.interpreter.interpret.call(null,rum.examples.ts__GT_str.call(null,time)));
}));
var class__4756__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__4755__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"colored-clock");
var ctor__4757__auto__ = ((function (render_mixin__4755__auto__,class__4756__auto__){
return (function() { 
var G__6622__delegate = function (args__4758__auto__){
var state__4759__auto__ = rum.core.args__GT_state.call(null,args__4758__auto__);
return rum.core.element.call(null,class__4756__auto__,state__4759__auto__,null);
};
var G__6622 = function (var_args){
var args__4758__auto__ = null;
if (arguments.length > 0) {
var G__6623__i = 0, G__6623__a = new Array(arguments.length -  0);
while (G__6623__i < G__6623__a.length) {G__6623__a[G__6623__i] = arguments[G__6623__i + 0]; ++G__6623__i;}
  args__4758__auto__ = new cljs.core.IndexedSeq(G__6623__a,0);
} 
return G__6622__delegate.call(this,args__4758__auto__);};
G__6622.cljs$lang$maxFixedArity = 0;
G__6622.cljs$lang$applyTo = (function (arglist__6624){
var args__4758__auto__ = cljs.core.seq(arglist__6624);
return G__6622__delegate(args__4758__auto__);
});
G__6622.cljs$core$IFn$_invoke$arity$variadic = G__6622__delegate;
return G__6622;
})()
;})(render_mixin__4755__auto__,class__4756__auto__))
;
return cljs.core.with_meta.call(null,ctor__4757__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__4756__auto__], null));
})();
rum.examples.reactive_timer = (function (){var render_mixin__4755__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("div",null,"Reactive: ",sablono.interpreter.interpret.call(null,rum.examples.colored_clock.call(null,rum.core.react.call(null,rum.examples.clock),rum.core.react.call(null,rum.examples.color))));
}));
var class__4756__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__4755__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"reactive-timer");
var ctor__4757__auto__ = ((function (render_mixin__4755__auto__,class__4756__auto__){
return (function() { 
var G__6625__delegate = function (args__4758__auto__){
var state__4759__auto__ = rum.core.args__GT_state.call(null,args__4758__auto__);
return rum.core.element.call(null,class__4756__auto__,state__4759__auto__,null);
};
var G__6625 = function (var_args){
var args__4758__auto__ = null;
if (arguments.length > 0) {
var G__6626__i = 0, G__6626__a = new Array(arguments.length -  0);
while (G__6626__i < G__6626__a.length) {G__6626__a[G__6626__i] = arguments[G__6626__i + 0]; ++G__6626__i;}
  args__4758__auto__ = new cljs.core.IndexedSeq(G__6626__a,0);
} 
return G__6625__delegate.call(this,args__4758__auto__);};
G__6625.cljs$lang$maxFixedArity = 0;
G__6625.cljs$lang$applyTo = (function (arglist__6627){
var args__4758__auto__ = cljs.core.seq(arglist__6627);
return G__6625__delegate(args__4758__auto__);
});
G__6625.cljs$core$IFn$_invoke$arity$variadic = G__6625__delegate;
return G__6625;
})()
;})(render_mixin__4755__auto__,class__4756__auto__))
;
return cljs.core.with_meta.call(null,ctor__4757__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__4756__auto__], null));
})();
rum.core.mount.call(null,rum.examples.reactive_timer.call(null),rum.examples.el.call(null,"reactive-timer"));
rum.examples.calc_bmi = (function rum$examples$calc_bmi(p__6628){
var map__6631 = p__6628;
var map__6631__$1 = ((((!((map__6631 == null)))?((((map__6631.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6631.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6631):map__6631);
var data = map__6631__$1;
var height = cljs.core.get.call(null,map__6631__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var weight = cljs.core.get.call(null,map__6631__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var bmi = cljs.core.get.call(null,map__6631__$1,new cljs.core.Keyword(null,"bmi","bmi",1421979636));
var h = (height / (100));
if((bmi == null)){
return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"bmi","bmi",1421979636),(weight / (h * h)));
} else {
return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"weight","weight",-1262796205),((bmi * h) * h));
}
});
rum.examples.slider = (function rum$examples$slider(param,value,min,max){
var reset = (function (){var G__6635 = (((param instanceof cljs.core.Keyword))?param.fqn:null);
switch (G__6635) {
case "bmi":
return new cljs.core.Keyword(null,"weight","weight",-1262796205);

break;
default:
return new cljs.core.Keyword(null,"bmi","bmi",1421979636);

}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (reset){
return (function (p1__6633_SHARP_){
return cljs.core.swap_BANG_.call(null,rum.examples.bmi_data,cljs.core.assoc,param,p1__6633_SHARP_.target.value,reset,null);
});})(reset))
], null)], null);
});
rum.examples.bmi_component = (function (){var render_mixin__4755__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return sablono.interpreter.interpret.call(null,(function (){var map__6637 = rum.examples.calc_bmi.call(null,rum.core.react.call(null,rum.examples.bmi_data));
var map__6637__$1 = ((((!((map__6637 == null)))?((((map__6637.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6637.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6637):map__6637);
var data = map__6637__$1;
var weight = cljs.core.get.call(null,map__6637__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var height = cljs.core.get.call(null,map__6637__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var bmi = cljs.core.get.call(null,map__6637__$1,new cljs.core.Keyword(null,"bmi","bmi",1421979636));
var vec__6638 = (((bmi < 18.5))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange","underweight"], null):(((bmi < (25)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inherit","normal"], null):(((bmi < (30)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange","overweight"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","obese"], null)
)));
var color = cljs.core.nth.call(null,vec__6638,(0),null);
var diagnose = cljs.core.nth.call(null,vec__6638,(1),null);
cljs.core.reset_BANG_.call(null,rum.examples.bmi_data,data);

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bmi","div.bmi",-373152793),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Height: ",(height | (0)),"cm",rum.examples.slider.call(null,new cljs.core.Keyword(null,"height","height",1025178622),height,(100),(220))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Weight: ",(weight | (0)),"kg",rum.examples.slider.call(null,new cljs.core.Keyword(null,"weight","weight",-1262796205),weight,(30),(150))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"BMI: ",(bmi | (0))," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null),diagnose], null),rum.examples.slider.call(null,new cljs.core.Keyword(null,"bmi","bmi",1421979636),bmi,(10),(50))], null)], null);
})());
}));
var class__4756__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__4755__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"bmi-component");
var ctor__4757__auto__ = ((function (render_mixin__4755__auto__,class__4756__auto__){
return (function() { 
var G__6640__delegate = function (args__4758__auto__){
var state__4759__auto__ = rum.core.args__GT_state.call(null,args__4758__auto__);
return rum.core.element.call(null,class__4756__auto__,state__4759__auto__,null);
};
var G__6640 = function (var_args){
var args__4758__auto__ = null;
if (arguments.length > 0) {
var G__6641__i = 0, G__6641__a = new Array(arguments.length -  0);
while (G__6641__i < G__6641__a.length) {G__6641__a[G__6641__i] = arguments[G__6641__i + 0]; ++G__6641__i;}
  args__4758__auto__ = new cljs.core.IndexedSeq(G__6641__a,0);
} 
return G__6640__delegate.call(this,args__4758__auto__);};
G__6640.cljs$lang$maxFixedArity = 0;
G__6640.cljs$lang$applyTo = (function (arglist__6642){
var args__4758__auto__ = cljs.core.seq(arglist__6642);
return G__6640__delegate(args__4758__auto__);
});
G__6640.cljs$core$IFn$_invoke$arity$variadic = G__6640__delegate;
return G__6640;
})()
;})(render_mixin__4755__auto__,class__4756__auto__))
;
return cljs.core.with_meta.call(null,ctor__4757__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__4756__auto__], null));
})();
rum.core.mount.call(null,rum.examples.bmi_component.call(null),rum.examples.el.call(null,"reactive-bmi-calculator"));
rum.examples.input = (function (){var render_mixin__4755__auto__ = rum.core.render__GT_mixin.call(null,(function (ref){
return sablono.interpreter.create_element.call(null,"input",{"type": "text", "value": rum.core.react.call(null,ref), "style": {"width": (100)}, "onChange": (function (p1__6643_SHARP_){
return cljs.core.reset_BANG_.call(null,ref,p1__6643_SHARP_.target.value);
})});
}));
var class__4756__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__4755__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"input");
var ctor__4757__auto__ = ((function (render_mixin__4755__auto__,class__4756__auto__){
return (function() { 
var G__6644__delegate = function (args__4758__auto__){
var state__4759__auto__ = rum.core.args__GT_state.call(null,args__4758__auto__);
return rum.core.element.call(null,class__4756__auto__,state__4759__auto__,null);
};
var G__6644 = function (var_args){
var args__4758__auto__ = null;
if (arguments.length > 0) {
var G__6645__i = 0, G__6645__a = new Array(arguments.length -  0);
while (G__6645__i < G__6645__a.length) {G__6645__a[G__6645__i] = arguments[G__6645__i + 0]; ++G__6645__i;}
  args__4758__auto__ = new cljs.core.IndexedSeq(G__6645__a,0);
} 
return G__6644__delegate.call(this,args__4758__auto__);};
G__6644.cljs$lang$maxFixedArity = 0;
G__6644.cljs$lang$applyTo = (function (arglist__6646){
var args__4758__auto__ = cljs.core.seq(arglist__6646);
return G__6644__delegate(args__4758__auto__);
});
G__6644.cljs$core$IFn$_invoke$arity$variadic = G__6644__delegate;
return G__6644;
})()
;})(render_mixin__4755__auto__,class__4756__auto__))
;
return cljs.core.with_meta.call(null,ctor__4757__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__4756__auto__], null));
})();
rum.examples.autorefresh = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var interval = setInterval((function (){
return rum.core.request_render.call(null,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
}),(1000));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("rum.examples","interval","rum.examples/interval",291963246),interval);
}),new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),(function (old_state,state){
return cljs.core.merge.call(null,state,cljs.core.select_keys.call(null,old_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rum.examples","interval","rum.examples/interval",291963246)], null)));
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
return clearInterval(new cljs.core.Keyword("rum.examples","interval","rum.examples/interval",291963246).cljs$core$IFn$_invoke$arity$1(state));
})], null);
rum.examples.watches_count = (function (){var render_mixin__4755__auto__ = rum.core.render__GT_mixin.call(null,(function (ref){
var attrs6647 = cljs.core.count.call(null,ref.watches);
return cljs.core.apply.call(null,React.createElement,"dd",((cljs.core.map_QMARK_.call(null,attrs6647))?sablono.interpreter.attributes.call(null,attrs6647):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs6647))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" watches"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs6647)," watches"], null))));
}));
var class__4756__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__4755__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.examples.autorefresh], null)),"watches-count");
var ctor__4757__auto__ = ((function (render_mixin__4755__auto__,class__4756__auto__){
return (function() { 
var G__6648__delegate = function (args__4758__auto__){
var state__4759__auto__ = rum.core.args__GT_state.call(null,args__4758__auto__);
return rum.core.element.call(null,class__4756__auto__,state__4759__auto__,null);
};
var G__6648 = function (var_args){
var args__4758__auto__ = null;
if (arguments.length > 0) {
var G__6649__i = 0, G__6649__a = new Array(arguments.length -  0);
while (G__6649__i < G__6649__a.length) {G__6649__a[G__6649__i] = arguments[G__6649__i + 0]; ++G__6649__i;}
  args__4758__auto__ = new cljs.core.IndexedSeq(G__6649__a,0);
} 
return G__6648__delegate.call(this,args__4758__auto__);};
G__6648.cljs$lang$maxFixedArity = 0;
G__6648.cljs$lang$applyTo = (function (arglist__6650){
var args__4758__auto__ = cljs.core.seq(arglist__6650);
return G__6648__delegate(args__4758__auto__);
});
G__6648.cljs$core$IFn$_invoke$arity$variadic = G__6648__delegate;
return G__6648;
})()
;})(render_mixin__4755__auto__,class__4756__auto__))
;
return cljs.core.with_meta.call(null,ctor__4757__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__4756__auto__], null));
})();
rum.examples.controls = (function (){var render_mixin__4755__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("dl",null,React.createElement("dt",null,"Color: "),(function (){var attrs6653 = rum.examples.input.call(null,rum.examples.color);
return cljs.core.apply.call(null,React.createElement,"dd",((cljs.core.map_QMARK_.call(null,attrs6653))?sablono.interpreter.attributes.call(null,attrs6653):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs6653))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs6653)], null))));
})(),React.createElement("dt",null,"Clone: "),(function (){var attrs6656 = rum.examples.input.call(null,rum.examples.color);
return cljs.core.apply.call(null,React.createElement,"dd",((cljs.core.map_QMARK_.call(null,attrs6656))?sablono.interpreter.attributes.call(null,attrs6656):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs6656))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs6656)], null))));
})(),React.createElement("dt",null,"Color: "),sablono.interpreter.interpret.call(null,rum.examples.watches_count.call(null,rum.examples.color)),React.createElement("dt",null,"Tick: "),(function (){var attrs6661 = rum.examples.input.call(null,rum.examples.speed);
return cljs.core.apply.call(null,React.createElement,"dd",((cljs.core.map_QMARK_.call(null,attrs6661))?sablono.interpreter.attributes.call(null,attrs6661):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs6661))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ms"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs6661)," ms"], null))));
})(),React.createElement("dt",null,"Time:"),sablono.interpreter.interpret.call(null,rum.examples.watches_count.call(null,rum.examples.clock)));
}));
var class__4756__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__4755__auto__], null),null),"controls");
var ctor__4757__auto__ = ((function (render_mixin__4755__auto__,class__4756__auto__){
return (function() { 
var G__6664__delegate = function (args__4758__auto__){
var state__4759__auto__ = rum.core.args__GT_state.call(null,args__4758__auto__);
return rum.core.element.call(null,class__4756__auto__,state__4759__auto__,null);
};
var G__6664 = function (var_args){
var args__4758__auto__ = null;
if (arguments.length > 0) {
var G__6665__i = 0, G__6665__a = new Array(arguments.length -  0);
while (G__6665__i < G__6665__a.length) {G__6665__a[G__6665__i] = arguments[G__6665__i + 0]; ++G__6665__i;}
  args__4758__auto__ = new cljs.core.IndexedSeq(G__6665__a,0);
} 
return G__6664__delegate.call(this,args__4758__auto__);};
G__6664.cljs$lang$maxFixedArity = 0;
G__6664.cljs$lang$applyTo = (function (arglist__6666){
var args__4758__auto__ = cljs.core.seq(arglist__6666);
return G__6664__delegate(args__4758__auto__);
});
G__6664.cljs$core$IFn$_invoke$arity$variadic = G__6664__delegate;
return G__6664;
})()
;})(render_mixin__4755__auto__,class__4756__auto__))
;
return cljs.core.with_meta.call(null,ctor__4757__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__4756__auto__], null));
})();
rum.core.mount.call(null,rum.examples.controls.call(null),rum.examples.el.call(null,"controls"));
rum.examples.render_count = (function (){var render_mixin__4755__auto__ = rum.core.render__GT_mixin.call(null,(function (ref){
return React.createElement("div",{"className": "stats"},"Renders: ",sablono.interpreter.interpret.call(null,rum.core.react.call(null,ref)));
}));
var class__4756__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__4755__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"render-count");
var ctor__4757__auto__ = ((function (render_mixin__4755__auto__,class__4756__auto__){
return (function() { 
var G__6667__delegate = function (args__4758__auto__){
var state__4759__auto__ = rum.core.args__GT_state.call(null,args__4758__auto__);
return rum.core.element.call(null,class__4756__auto__,state__4759__auto__,null);
};
var G__6667 = function (var_args){
var args__4758__auto__ = null;
if (arguments.length > 0) {
var G__6668__i = 0, G__6668__a = new Array(arguments.length -  0);
while (G__6668__i < G__6668__a.length) {G__6668__a[G__6668__i] = arguments[G__6668__i + 0]; ++G__6668__i;}
  args__4758__auto__ = new cljs.core.IndexedSeq(G__6668__a,0);
} 
return G__6667__delegate.call(this,args__4758__auto__);};
G__6667.cljs$lang$maxFixedArity = 0;
G__6667.cljs$lang$applyTo = (function (arglist__6669){
var args__4758__auto__ = cljs.core.seq(arglist__6669);
return G__6667__delegate(args__4758__auto__);
});
G__6667.cljs$core$IFn$_invoke$arity$variadic = G__6667__delegate;
return G__6667;
})()
;})(render_mixin__4755__auto__,class__4756__auto__))
;
return cljs.core.with_meta.call(null,ctor__4757__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__4756__auto__], null));
})();
rum.examples.bclock_renders = cljs.core.atom.call(null,(0));
rum.examples.bit = (function (){var render_mixin__4755__auto__ = rum.core.render__GT_mixin.call(null,(function (n,bit){
cljs.core.swap_BANG_.call(null,rum.examples.bclock_renders,cljs.core.inc);

return React.createElement("td",{"style": cljs.core.clj__GT_js.call(null,((((n & (1 << bit)) != 0))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),cljs.core.deref.call(null,rum.examples.color)], null):null)), "className": "bclock-bit"});
}));
var class__4756__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__4755__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"bit");
var ctor__4757__auto__ = ((function (render_mixin__4755__auto__,class__4756__auto__){
return (function() { 
var G__6670__delegate = function (args__4758__auto__){
var state__4759__auto__ = rum.core.args__GT_state.call(null,args__4758__auto__);
return rum.core.element.call(null,class__4756__auto__,state__4759__auto__,null);
};
var G__6670 = function (var_args){
var args__4758__auto__ = null;
if (arguments.length > 0) {
var G__6671__i = 0, G__6671__a = new Array(arguments.length -  0);
while (G__6671__i < G__6671__a.length) {G__6671__a[G__6671__i] = arguments[G__6671__i + 0]; ++G__6671__i;}
  args__4758__auto__ = new cljs.core.IndexedSeq(G__6671__a,0);
} 
return G__6670__delegate.call(this,args__4758__auto__);};
G__6670.cljs$lang$maxFixedArity = 0;
G__6670.cljs$lang$applyTo = (function (arglist__6672){
var args__4758__auto__ = cljs.core.seq(arglist__6672);
return G__6670__delegate(args__4758__auto__);
});
G__6670.cljs$core$IFn$_invoke$arity$variadic = G__6670__delegate;
return G__6670;
})()
;})(render_mixin__4755__auto__,class__4756__auto__))
;
return cljs.core.with_meta.call(null,ctor__4757__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__4756__auto__], null));
})();
rum.examples.bclock = (function (){var render_mixin__4755__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return sablono.interpreter.interpret.call(null,(function (){var date = (new Date(rum.core.react.call(null,rum.examples.clock)));
var hh = cljs.core.quot.call(null,date.getHours(),(10));
var hl = cljs.core.mod.call(null,date.getHours(),(10));
var mh = cljs.core.quot.call(null,date.getMinutes(),(10));
var ml = cljs.core.mod.call(null,date.getMinutes(),(10));
var sh = cljs.core.quot.call(null,date.getSeconds(),(10));
var sl = cljs.core.mod.call(null,date.getSeconds(),(10));
var msh = cljs.core.quot.call(null,date.getMilliseconds(),(100));
var msm = cljs.core.mod.call(null,cljs.core.quot.call(null,date.getMilliseconds(),(10)),(10));
var msl = cljs.core.mod.call(null,date.getMilliseconds(),(10));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.bclock","table.bclock",900308853),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353)], null),rum.examples.bit.call(null,hl,(3)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353)], null),rum.examples.bit.call(null,ml,(3)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353)], null),rum.examples.bit.call(null,sl,(3)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566)], null),rum.examples.bit.call(null,msh,(3)),rum.examples.bit.call(null,msm,(3)),rum.examples.bit.call(null,msl,(3))], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353)], null),rum.examples.bit.call(null,hl,(2)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566)], null),rum.examples.bit.call(null,mh,(2)),rum.examples.bit.call(null,ml,(2)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566)], null),rum.examples.bit.call(null,sh,(2)),rum.examples.bit.call(null,sl,(2)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566)], null),rum.examples.bit.call(null,msh,(2)),rum.examples.bit.call(null,msm,(2)),rum.examples.bit.call(null,msl,(2))], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),rum.examples.bit.call(null,hh,(1)),rum.examples.bit.call(null,hl,(1)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566)], null),rum.examples.bit.call(null,mh,(1)),rum.examples.bit.call(null,ml,(1)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566)], null),rum.examples.bit.call(null,sh,(1)),rum.examples.bit.call(null,sl,(1)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566)], null),rum.examples.bit.call(null,msh,(1)),rum.examples.bit.call(null,msm,(1)),rum.examples.bit.call(null,msl,(1))], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),rum.examples.bit.call(null,hh,(0)),rum.examples.bit.call(null,hl,(0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566)], null),rum.examples.bit.call(null,mh,(0)),rum.examples.bit.call(null,ml,(0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566)], null),rum.examples.bit.call(null,sh,(0)),rum.examples.bit.call(null,sl,(0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566)], null),rum.examples.bit.call(null,msh,(0)),rum.examples.bit.call(null,msm,(0)),rum.examples.bit.call(null,msl,(0))], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),hh], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),hl], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),mh], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),ml], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),sh], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),sl], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),msh], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),msm], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),msl], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),(8)], null),rum.examples.render_count.call(null,rum.examples.bclock_renders)], null)], null)], null);
})());
}));
var class__4756__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__4755__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"bclock");
var ctor__4757__auto__ = ((function (render_mixin__4755__auto__,class__4756__auto__){
return (function() { 
var G__6673__delegate = function (args__4758__auto__){
var state__4759__auto__ = rum.core.args__GT_state.call(null,args__4758__auto__);
return rum.core.element.call(null,class__4756__auto__,state__4759__auto__,null);
};
var G__6673 = function (var_args){
var args__4758__auto__ = null;
if (arguments.length > 0) {
var G__6674__i = 0, G__6674__a = new Array(arguments.length -  0);
while (G__6674__i < G__6674__a.length) {G__6674__a[G__6674__i] = arguments[G__6674__i + 0]; ++G__6674__i;}
  args__4758__auto__ = new cljs.core.IndexedSeq(G__6674__a,0);
} 
return G__6673__delegate.call(this,args__4758__auto__);};
G__6673.cljs$lang$maxFixedArity = 0;
G__6673.cljs$lang$applyTo = (function (arglist__6675){
var args__4758__auto__ = cljs.core.seq(arglist__6675);
return G__6673__delegate(args__4758__auto__);
});
G__6673.cljs$core$IFn$_invoke$arity$variadic = G__6673__delegate;
return G__6673;
})()
;})(render_mixin__4755__auto__,class__4756__auto__))
;
return cljs.core.with_meta.call(null,ctor__4757__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__4756__auto__], null));
})();
rum.core.mount.call(null,rum.examples.bclock.call(null),rum.examples.el.call(null,"binary-timer"));
rum.examples.board_width = (19);
rum.examples.board_height = (10);
rum.examples.random_board = (function rum$examples$random_board(){
var cell_fn = (function (){
return (cljs.core.rand.call(null) > 0.9);
});
var row_fn = ((function (cell_fn){
return (function (){
return cljs.core.vec.call(null,cljs.core.repeatedly.call(null,rum.examples.board_width,cell_fn));
});})(cell_fn))
;
return cljs.core.vec.call(null,cljs.core.repeatedly.call(null,rum.examples.board_height,row_fn));
});
rum.examples.board_stats = (function (){var render_mixin__4755__auto__ = rum.core.render__GT_mixin.call(null,(function (board,renders){
return React.createElement("div",{"className": "stats"},"Renders: ",sablono.interpreter.interpret.call(null,rum.core.react.call(null,renders)),React.createElement("br",null),"Board watches: ",sablono.interpreter.interpret.call(null,cljs.core.count.call(null,board.watches)),React.createElement("br",null),"Color watches: ",sablono.interpreter.interpret.call(null,cljs.core.count.call(null,rum.examples.color.watches)));
}));
var class__4756__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__4755__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.examples.autorefresh,rum.core.reactive], null)),"board-stats");
var ctor__4757__auto__ = ((function (render_mixin__4755__auto__,class__4756__auto__){
return (function() { 
var G__6680__delegate = function (args__4758__auto__){
var state__4759__auto__ = rum.core.args__GT_state.call(null,args__4758__auto__);
return rum.core.element.call(null,class__4756__auto__,state__4759__auto__,null);
};
var G__6680 = function (var_args){
var args__4758__auto__ = null;
if (arguments.length > 0) {
var G__6681__i = 0, G__6681__a = new Array(arguments.length -  0);
while (G__6681__i < G__6681__a.length) {G__6681__a[G__6681__i] = arguments[G__6681__i + 0]; ++G__6681__i;}
  args__4758__auto__ = new cljs.core.IndexedSeq(G__6681__a,0);
} 
return G__6680__delegate.call(this,args__4758__auto__);};
G__6680.cljs$lang$maxFixedArity = 0;
G__6680.cljs$lang$applyTo = (function (arglist__6682){
var args__4758__auto__ = cljs.core.seq(arglist__6682);
return G__6680__delegate(args__4758__auto__);
});
G__6680.cljs$core$IFn$_invoke$arity$variadic = G__6680__delegate;
return G__6680;
})()
;})(render_mixin__4755__auto__,class__4756__auto__))
;
return cljs.core.with_meta.call(null,ctor__4757__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__4756__auto__], null));
})();
rum.examples.rboard = cljs.core.atom.call(null,rum.examples.random_board.call(null));
rum.examples.rboard_renders = cljs.core.atom.call(null,(0));
rum.examples.rcell = (function (){var render_mixin__4755__auto__ = rum.core.render__GT_mixin.call(null,(function (x,y){
cljs.core.swap_BANG_.call(null,rum.examples.rboard_renders,cljs.core.inc);

return sablono.interpreter.interpret.call(null,(function (){var cursor = rum.core.cursor.call(null,rum.examples.rboard,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.art-cell","div.art-cell",274290882),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(rum.core.react.call(null,cursor))?rum.core.react.call(null,rum.examples.color):null)], null),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (cursor){
return (function (_){
cljs.core.swap_BANG_.call(null,cursor,cljs.core.not);

return null;
});})(cursor))
], null)], null);
})());
}));
var class__4756__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__4755__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"rcell");
var ctor__4757__auto__ = ((function (render_mixin__4755__auto__,class__4756__auto__){
return (function() { 
var G__6683__delegate = function (args__4758__auto__){
var state__4759__auto__ = rum.core.args__GT_state.call(null,args__4758__auto__);
return rum.core.element.call(null,class__4756__auto__,state__4759__auto__,null);
};
var G__6683 = function (var_args){
var args__4758__auto__ = null;
if (arguments.length > 0) {
var G__6684__i = 0, G__6684__a = new Array(arguments.length -  0);
while (G__6684__i < G__6684__a.length) {G__6684__a[G__6684__i] = arguments[G__6684__i + 0]; ++G__6684__i;}
  args__4758__auto__ = new cljs.core.IndexedSeq(G__6684__a,0);
} 
return G__6683__delegate.call(this,args__4758__auto__);};
G__6683.cljs$lang$maxFixedArity = 0;
G__6683.cljs$lang$applyTo = (function (arglist__6685){
var args__4758__auto__ = cljs.core.seq(arglist__6685);
return G__6683__delegate(args__4758__auto__);
});
G__6683.cljs$core$IFn$_invoke$arity$variadic = G__6683__delegate;
return G__6683;
})()
;})(render_mixin__4755__auto__,class__4756__auto__))
;
return cljs.core.with_meta.call(null,ctor__4757__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__4756__auto__], null));
})();
rum.examples.art_rboard = (function (){var render_mixin__4755__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("div",{"className": "artboard"},cljs.core.into_array.call(null,(function (){var iter__5761__auto__ = (function rum$examples$iter__6686(s__6687){
return (new cljs.core.LazySeq(null,(function (){
var s__6687__$1 = s__6687;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__6687__$1);
if(temp__4423__auto__){
var s__6687__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6687__$2)){
var c__5759__auto__ = cljs.core.chunk_first.call(null,s__6687__$2);
var size__5760__auto__ = cljs.core.count.call(null,c__5759__auto__);
var b__6689 = cljs.core.chunk_buffer.call(null,size__5760__auto__);
if((function (){var i__6688 = (0);
while(true){
if((i__6688 < size__5760__auto__)){
var y = cljs.core._nth.call(null,c__5759__auto__,i__6688);
cljs.core.chunk_append.call(null,b__6689,React.createElement("div",{"key": y, "className": "art-row"},cljs.core.into_array.call(null,(function (){var iter__5761__auto__ = ((function (i__6688,y,c__5759__auto__,size__5760__auto__,b__6689,s__6687__$2,temp__4423__auto__){
return (function rum$examples$iter__6686_$_iter__6698(s__6699){
return (new cljs.core.LazySeq(null,((function (i__6688,y,c__5759__auto__,size__5760__auto__,b__6689,s__6687__$2,temp__4423__auto__){
return (function (){
var s__6699__$1 = s__6699;
while(true){
var temp__4423__auto____$1 = cljs.core.seq.call(null,s__6699__$1);
if(temp__4423__auto____$1){
var s__6699__$2 = temp__4423__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6699__$2)){
var c__5759__auto____$1 = cljs.core.chunk_first.call(null,s__6699__$2);
var size__5760__auto____$1 = cljs.core.count.call(null,c__5759__auto____$1);
var b__6701 = cljs.core.chunk_buffer.call(null,size__5760__auto____$1);
if((function (){var i__6700 = (0);
while(true){
if((i__6700 < size__5760__auto____$1)){
var x = cljs.core._nth.call(null,c__5759__auto____$1,i__6700);
cljs.core.chunk_append.call(null,b__6701,sablono.interpreter.interpret.call(null,rum.core.with_key.call(null,rum.examples.rcell.call(null,x,y),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))));

var G__6706 = (i__6700 + (1));
i__6700 = G__6706;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6701),rum$examples$iter__6686_$_iter__6698.call(null,cljs.core.chunk_rest.call(null,s__6699__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6701),null);
}
} else {
var x = cljs.core.first.call(null,s__6699__$2);
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,rum.core.with_key.call(null,rum.examples.rcell.call(null,x,y),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))),rum$examples$iter__6686_$_iter__6698.call(null,cljs.core.rest.call(null,s__6699__$2)));
}
} else {
return null;
}
break;
}
});})(i__6688,y,c__5759__auto__,size__5760__auto__,b__6689,s__6687__$2,temp__4423__auto__))
,null,null));
});})(i__6688,y,c__5759__auto__,size__5760__auto__,b__6689,s__6687__$2,temp__4423__auto__))
;
return iter__5761__auto__.call(null,cljs.core.range.call(null,(0),rum.examples.board_width));
})())));

var G__6707 = (i__6688 + (1));
i__6688 = G__6707;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6689),rum$examples$iter__6686.call(null,cljs.core.chunk_rest.call(null,s__6687__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6689),null);
}
} else {
var y = cljs.core.first.call(null,s__6687__$2);
return cljs.core.cons.call(null,React.createElement("div",{"key": y, "className": "art-row"},cljs.core.into_array.call(null,(function (){var iter__5761__auto__ = ((function (y,s__6687__$2,temp__4423__auto__){
return (function rum$examples$iter__6686_$_iter__6702(s__6703){
return (new cljs.core.LazySeq(null,((function (y,s__6687__$2,temp__4423__auto__){
return (function (){
var s__6703__$1 = s__6703;
while(true){
var temp__4423__auto____$1 = cljs.core.seq.call(null,s__6703__$1);
if(temp__4423__auto____$1){
var s__6703__$2 = temp__4423__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6703__$2)){
var c__5759__auto__ = cljs.core.chunk_first.call(null,s__6703__$2);
var size__5760__auto__ = cljs.core.count.call(null,c__5759__auto__);
var b__6705 = cljs.core.chunk_buffer.call(null,size__5760__auto__);
if((function (){var i__6704 = (0);
while(true){
if((i__6704 < size__5760__auto__)){
var x = cljs.core._nth.call(null,c__5759__auto__,i__6704);
cljs.core.chunk_append.call(null,b__6705,sablono.interpreter.interpret.call(null,rum.core.with_key.call(null,rum.examples.rcell.call(null,x,y),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))));

var G__6708 = (i__6704 + (1));
i__6704 = G__6708;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6705),rum$examples$iter__6686_$_iter__6702.call(null,cljs.core.chunk_rest.call(null,s__6703__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6705),null);
}
} else {
var x = cljs.core.first.call(null,s__6703__$2);
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,rum.core.with_key.call(null,rum.examples.rcell.call(null,x,y),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))),rum$examples$iter__6686_$_iter__6702.call(null,cljs.core.rest.call(null,s__6703__$2)));
}
} else {
return null;
}
break;
}
});})(y,s__6687__$2,temp__4423__auto__))
,null,null));
});})(y,s__6687__$2,temp__4423__auto__))
;
return iter__5761__auto__.call(null,cljs.core.range.call(null,(0),rum.examples.board_width));
})())),rum$examples$iter__6686.call(null,cljs.core.rest.call(null,s__6687__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5761__auto__.call(null,cljs.core.range.call(null,(0),rum.examples.board_height));
})()),sablono.interpreter.interpret.call(null,rum.examples.board_stats.call(null,rum.examples.rboard,rum.examples.rboard_renders)));
}));
var class__4756__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__4755__auto__], null),null),"art-rboard");
var ctor__4757__auto__ = ((function (render_mixin__4755__auto__,class__4756__auto__){
return (function() { 
var G__6709__delegate = function (args__4758__auto__){
var state__4759__auto__ = rum.core.args__GT_state.call(null,args__4758__auto__);
return rum.core.element.call(null,class__4756__auto__,state__4759__auto__,null);
};
var G__6709 = function (var_args){
var args__4758__auto__ = null;
if (arguments.length > 0) {
var G__6710__i = 0, G__6710__a = new Array(arguments.length -  0);
while (G__6710__i < G__6710__a.length) {G__6710__a[G__6710__i] = arguments[G__6710__i + 0]; ++G__6710__i;}
  args__4758__auto__ = new cljs.core.IndexedSeq(G__6710__a,0);
} 
return G__6709__delegate.call(this,args__4758__auto__);};
G__6709.cljs$lang$maxFixedArity = 0;
G__6709.cljs$lang$applyTo = (function (arglist__6711){
var args__4758__auto__ = cljs.core.seq(arglist__6711);
return G__6709__delegate(args__4758__auto__);
});
G__6709.cljs$core$IFn$_invoke$arity$variadic = G__6709__delegate;
return G__6709;
})()
;})(render_mixin__4755__auto__,class__4756__auto__))
;
return cljs.core.with_meta.call(null,ctor__4757__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__4756__auto__], null));
})();
rum.core.mount.call(null,rum.examples.art_rboard.call(null),rum.examples.el.call(null,"rboard"));
rum.examples.board = cljs.core.atom.call(null,rum.examples.random_board.call(null));
rum.examples.board_renders = cljs.core.atom.call(null,(0));
rum.examples.art_cell = (function (){var render_mixin__4755__auto__ = rum.core.render__GT_mixin.call(null,(function (x,y,cursor){
cljs.core.swap_BANG_.call(null,rum.examples.board_renders,cljs.core.inc);

return React.createElement("div",{"style": {"backgroundColor": (cljs.core.truth_(cljs.core.deref.call(null,cursor))?cljs.core.deref.call(null,rum.examples.color):null)}, "onMouseOver": (function (_){
cljs.core.swap_BANG_.call(null,cursor,cljs.core.not);

return null;
}), "className": "art-cell"});
}));
var class__4756__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__4755__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.cursored], null)),"art-cell");
var ctor__4757__auto__ = ((function (render_mixin__4755__auto__,class__4756__auto__){
return (function() { 
var G__6712__delegate = function (args__4758__auto__){
var state__4759__auto__ = rum.core.args__GT_state.call(null,args__4758__auto__);
return rum.core.element.call(null,class__4756__auto__,state__4759__auto__,null);
};
var G__6712 = function (var_args){
var args__4758__auto__ = null;
if (arguments.length > 0) {
var G__6713__i = 0, G__6713__a = new Array(arguments.length -  0);
while (G__6713__i < G__6713__a.length) {G__6713__a[G__6713__i] = arguments[G__6713__i + 0]; ++G__6713__i;}
  args__4758__auto__ = new cljs.core.IndexedSeq(G__6713__a,0);
} 
return G__6712__delegate.call(this,args__4758__auto__);};
G__6712.cljs$lang$maxFixedArity = 0;
G__6712.cljs$lang$applyTo = (function (arglist__6714){
var args__4758__auto__ = cljs.core.seq(arglist__6714);
return G__6712__delegate(args__4758__auto__);
});
G__6712.cljs$core$IFn$_invoke$arity$variadic = G__6712__delegate;
return G__6712;
})()
;})(render_mixin__4755__auto__,class__4756__auto__))
;
return cljs.core.with_meta.call(null,ctor__4757__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__4756__auto__], null));
})();
rum.examples.artboard = (function (){var render_mixin__4755__auto__ = rum.core.render__GT_mixin.call(null,(function (board){
return React.createElement("div",{"className": "artboard"},cljs.core.into_array.call(null,(function (){var iter__5761__auto__ = (function rum$examples$iter__6715(s__6716){
return (new cljs.core.LazySeq(null,(function (){
var s__6716__$1 = s__6716;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__6716__$1);
if(temp__4423__auto__){
var s__6716__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6716__$2)){
var c__5759__auto__ = cljs.core.chunk_first.call(null,s__6716__$2);
var size__5760__auto__ = cljs.core.count.call(null,c__5759__auto__);
var b__6718 = cljs.core.chunk_buffer.call(null,size__5760__auto__);
if((function (){var i__6717 = (0);
while(true){
if((i__6717 < size__5760__auto__)){
var y = cljs.core._nth.call(null,c__5759__auto__,i__6717);
var y_cursor = rum.core.cursor.call(null,board,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [y], null));
cljs.core.chunk_append.call(null,b__6718,React.createElement("div",{"key": y, "className": "art-row"},cljs.core.into_array.call(null,(function (){var iter__5761__auto__ = ((function (i__6717,y_cursor,y,c__5759__auto__,size__5760__auto__,b__6718,s__6716__$2,temp__4423__auto__){
return (function rum$examples$iter__6715_$_iter__6727(s__6728){
return (new cljs.core.LazySeq(null,((function (i__6717,y_cursor,y,c__5759__auto__,size__5760__auto__,b__6718,s__6716__$2,temp__4423__auto__){
return (function (){
var s__6728__$1 = s__6728;
while(true){
var temp__4423__auto____$1 = cljs.core.seq.call(null,s__6728__$1);
if(temp__4423__auto____$1){
var s__6728__$2 = temp__4423__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6728__$2)){
var c__5759__auto____$1 = cljs.core.chunk_first.call(null,s__6728__$2);
var size__5760__auto____$1 = cljs.core.count.call(null,c__5759__auto____$1);
var b__6730 = cljs.core.chunk_buffer.call(null,size__5760__auto____$1);
if((function (){var i__6729 = (0);
while(true){
if((i__6729 < size__5760__auto____$1)){
var x = cljs.core._nth.call(null,c__5759__auto____$1,i__6729);
var x_cursor = rum.core.cursor.call(null,y_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
cljs.core.chunk_append.call(null,b__6730,sablono.interpreter.interpret.call(null,rum.core.with_key.call(null,rum.examples.art_cell.call(null,x,y,x_cursor),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))));

var G__6735 = (i__6729 + (1));
i__6729 = G__6735;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6730),rum$examples$iter__6715_$_iter__6727.call(null,cljs.core.chunk_rest.call(null,s__6728__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6730),null);
}
} else {
var x = cljs.core.first.call(null,s__6728__$2);
var x_cursor = rum.core.cursor.call(null,y_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,rum.core.with_key.call(null,rum.examples.art_cell.call(null,x,y,x_cursor),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))),rum$examples$iter__6715_$_iter__6727.call(null,cljs.core.rest.call(null,s__6728__$2)));
}
} else {
return null;
}
break;
}
});})(i__6717,y_cursor,y,c__5759__auto__,size__5760__auto__,b__6718,s__6716__$2,temp__4423__auto__))
,null,null));
});})(i__6717,y_cursor,y,c__5759__auto__,size__5760__auto__,b__6718,s__6716__$2,temp__4423__auto__))
;
return iter__5761__auto__.call(null,cljs.core.range.call(null,(0),rum.examples.board_width));
})())));

var G__6736 = (i__6717 + (1));
i__6717 = G__6736;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6718),rum$examples$iter__6715.call(null,cljs.core.chunk_rest.call(null,s__6716__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6718),null);
}
} else {
var y = cljs.core.first.call(null,s__6716__$2);
var y_cursor = rum.core.cursor.call(null,board,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [y], null));
return cljs.core.cons.call(null,React.createElement("div",{"key": y, "className": "art-row"},cljs.core.into_array.call(null,(function (){var iter__5761__auto__ = ((function (y_cursor,y,s__6716__$2,temp__4423__auto__){
return (function rum$examples$iter__6715_$_iter__6731(s__6732){
return (new cljs.core.LazySeq(null,((function (y_cursor,y,s__6716__$2,temp__4423__auto__){
return (function (){
var s__6732__$1 = s__6732;
while(true){
var temp__4423__auto____$1 = cljs.core.seq.call(null,s__6732__$1);
if(temp__4423__auto____$1){
var s__6732__$2 = temp__4423__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6732__$2)){
var c__5759__auto__ = cljs.core.chunk_first.call(null,s__6732__$2);
var size__5760__auto__ = cljs.core.count.call(null,c__5759__auto__);
var b__6734 = cljs.core.chunk_buffer.call(null,size__5760__auto__);
if((function (){var i__6733 = (0);
while(true){
if((i__6733 < size__5760__auto__)){
var x = cljs.core._nth.call(null,c__5759__auto__,i__6733);
var x_cursor = rum.core.cursor.call(null,y_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
cljs.core.chunk_append.call(null,b__6734,sablono.interpreter.interpret.call(null,rum.core.with_key.call(null,rum.examples.art_cell.call(null,x,y,x_cursor),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))));

var G__6737 = (i__6733 + (1));
i__6733 = G__6737;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6734),rum$examples$iter__6715_$_iter__6731.call(null,cljs.core.chunk_rest.call(null,s__6732__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6734),null);
}
} else {
var x = cljs.core.first.call(null,s__6732__$2);
var x_cursor = rum.core.cursor.call(null,y_cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,rum.core.with_key.call(null,rum.examples.art_cell.call(null,x,y,x_cursor),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))),rum$examples$iter__6715_$_iter__6731.call(null,cljs.core.rest.call(null,s__6732__$2)));
}
} else {
return null;
}
break;
}
});})(y_cursor,y,s__6716__$2,temp__4423__auto__))
,null,null));
});})(y_cursor,y,s__6716__$2,temp__4423__auto__))
;
return iter__5761__auto__.call(null,cljs.core.range.call(null,(0),rum.examples.board_width));
})())),rum$examples$iter__6715.call(null,cljs.core.rest.call(null,s__6716__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5761__auto__.call(null,cljs.core.range.call(null,(0),rum.examples.board_height));
})()),sablono.interpreter.interpret.call(null,rum.examples.board_stats.call(null,board,rum.examples.board_renders)));
}));
var class__4756__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__4755__auto__], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.cursored,rum.core.cursored_watch], null)),"artboard");
var ctor__4757__auto__ = ((function (render_mixin__4755__auto__,class__4756__auto__){
return (function() { 
var G__6738__delegate = function (args__4758__auto__){
var state__4759__auto__ = rum.core.args__GT_state.call(null,args__4758__auto__);
return rum.core.element.call(null,class__4756__auto__,state__4759__auto__,null);
};
var G__6738 = function (var_args){
var args__4758__auto__ = null;
if (arguments.length > 0) {
var G__6739__i = 0, G__6739__a = new Array(arguments.length -  0);
while (G__6739__i < G__6739__a.length) {G__6739__a[G__6739__i] = arguments[G__6739__i + 0]; ++G__6739__i;}
  args__4758__auto__ = new cljs.core.IndexedSeq(G__6739__a,0);
} 
return G__6738__delegate.call(this,args__4758__auto__);};
G__6738.cljs$lang$maxFixedArity = 0;
G__6738.cljs$lang$applyTo = (function (arglist__6740){
var args__4758__auto__ = cljs.core.seq(arglist__6740);
return G__6738__delegate(args__4758__auto__);
});
G__6738.cljs$core$IFn$_invoke$arity$variadic = G__6738__delegate;
return G__6738;
})()
;})(render_mixin__4755__auto__,class__4756__auto__))
;
return cljs.core.with_meta.call(null,ctor__4757__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__4756__auto__], null));
})();
rum.core.mount.call(null,rum.examples.artboard.call(null,rum.examples.board),rum.examples.el.call(null,"artboard"));
rum.examples.validating_input = (function (){var render_mixin__4755__auto__ = rum.core.render__GT_mixin.call(null,(function (ref,fn){
return sablono.interpreter.create_element.call(null,"input",{"type": "text", "style": {"width": (170), "backgroundColor": (cljs.core.truth_(fn.call(null,rum.core.react.call(null,ref)))?null:rum.core.react.call(null,rum.examples.color))}, "value": rum.core.react.call(null,ref), "onChange": (function (p1__6741_SHARP_){
return cljs.core.reset_BANG_.call(null,ref,p1__6741_SHARP_.target.value);
})});
}));
var class__4756__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__4755__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"validating-input");
var ctor__4757__auto__ = ((function (render_mixin__4755__auto__,class__4756__auto__){
return (function() { 
var G__6742__delegate = function (args__4758__auto__){
var state__4759__auto__ = rum.core.args__GT_state.call(null,args__4758__auto__);
return rum.core.element.call(null,class__4756__auto__,state__4759__auto__,null);
};
var G__6742 = function (var_args){
var args__4758__auto__ = null;
if (arguments.length > 0) {
var G__6743__i = 0, G__6743__a = new Array(arguments.length -  0);
while (G__6743__i < G__6743__a.length) {G__6743__a[G__6743__i] = arguments[G__6743__i + 0]; ++G__6743__i;}
  args__4758__auto__ = new cljs.core.IndexedSeq(G__6743__a,0);
} 
return G__6742__delegate.call(this,args__4758__auto__);};
G__6742.cljs$lang$maxFixedArity = 0;
G__6742.cljs$lang$applyTo = (function (arglist__6744){
var args__4758__auto__ = cljs.core.seq(arglist__6744);
return G__6742__delegate(args__4758__auto__);
});
G__6742.cljs$core$IFn$_invoke$arity$variadic = G__6742__delegate;
return G__6742;
})()
;})(render_mixin__4755__auto__,class__4756__auto__))
;
return cljs.core.with_meta.call(null,ctor__4757__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__4756__auto__], null));
})();
rum.examples.restricting_input = (function (){var render_mixin__4755__auto__ = rum.core.render_comp__GT_mixin.call(null,(function (comp,ref,fn){
return sablono.interpreter.create_element.call(null,"input",{"type": "text", "style": {"width": (170)}, "value": rum.core.react.call(null,ref), "onChange": (function (p1__6745_SHARP_){
var new_val = p1__6745_SHARP_.target.value;
if(cljs.core.truth_(fn.call(null,new_val))){
return cljs.core.reset_BANG_.call(null,ref,new_val);
} else {
return rum.core.request_render.call(null,comp);
}
})});
}));
var class__4756__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__4755__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"restricting-input");
var ctor__4757__auto__ = ((function (render_mixin__4755__auto__,class__4756__auto__){
return (function() { 
var G__6746__delegate = function (args__4758__auto__){
var state__4759__auto__ = rum.core.args__GT_state.call(null,args__4758__auto__);
return rum.core.element.call(null,class__4756__auto__,state__4759__auto__,null);
};
var G__6746 = function (var_args){
var args__4758__auto__ = null;
if (arguments.length > 0) {
var G__6747__i = 0, G__6747__a = new Array(arguments.length -  0);
while (G__6747__i < G__6747__a.length) {G__6747__a[G__6747__i] = arguments[G__6747__i + 0]; ++G__6747__i;}
  args__4758__auto__ = new cljs.core.IndexedSeq(G__6747__a,0);
} 
return G__6746__delegate.call(this,args__4758__auto__);};
G__6746.cljs$lang$maxFixedArity = 0;
G__6746.cljs$lang$applyTo = (function (arglist__6748){
var args__4758__auto__ = cljs.core.seq(arglist__6748);
return G__6746__delegate(args__4758__auto__);
});
G__6746.cljs$core$IFn$_invoke$arity$variadic = G__6746__delegate;
return G__6746;
})()
;})(render_mixin__4755__auto__,class__4756__auto__))
;
return cljs.core.with_meta.call(null,ctor__4757__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__4756__auto__], null));
})();
rum.examples.restricting_input_native = (function (){var render_mixin__4755__auto__ = rum.core.render_state__GT_mixin.call(null,(function (state,ref,fn){
return sablono.interpreter.interpret.call(null,(function (){var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
return React.DOM.input({"type": "text", "style": {"width": (170)}, "value": rum.core.react.call(null,ref), "onChange": ((function (comp){
return (function (p1__6749_SHARP_){
var new_val = p1__6749_SHARP_.target.value;
if(cljs.core.truth_(fn.call(null,new_val))){
cljs.core.reset_BANG_.call(null,ref,new_val);
} else {
}

return comp.forceUpdate();
});})(comp))
});
})());
}));
var class__4756__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__4755__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null)),"restricting-input-native");
var ctor__4757__auto__ = ((function (render_mixin__4755__auto__,class__4756__auto__){
return (function() { 
var G__6750__delegate = function (args__4758__auto__){
var state__4759__auto__ = rum.core.args__GT_state.call(null,args__4758__auto__);
return rum.core.element.call(null,class__4756__auto__,state__4759__auto__,null);
};
var G__6750 = function (var_args){
var args__4758__auto__ = null;
if (arguments.length > 0) {
var G__6751__i = 0, G__6751__a = new Array(arguments.length -  0);
while (G__6751__i < G__6751__a.length) {G__6751__a[G__6751__i] = arguments[G__6751__i + 0]; ++G__6751__i;}
  args__4758__auto__ = new cljs.core.IndexedSeq(G__6751__a,0);
} 
return G__6750__delegate.call(this,args__4758__auto__);};
G__6750.cljs$lang$maxFixedArity = 0;
G__6750.cljs$lang$applyTo = (function (arglist__6752){
var args__4758__auto__ = cljs.core.seq(arglist__6752);
return G__6750__delegate(args__4758__auto__);
});
G__6750.cljs$core$IFn$_invoke$arity$variadic = G__6750__delegate;
return G__6750;
})()
;})(render_mixin__4755__auto__,class__4756__auto__))
;
return cljs.core.with_meta.call(null,ctor__4757__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__4756__auto__], null));
})();
rum.examples.val_form = (function (){var render_mixin__4755__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return sablono.interpreter.interpret.call(null,(function (){var state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"email","email",1415816706),"a@b.c",new cljs.core.Keyword(null,"phone","phone",-763596057),"+7913 000 0000",new cljs.core.Keyword(null,"age","age",-604307804),"22"], null));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dl","dl",-2140151713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dt","dt",-368444759),"E-mail:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dd","dd",-1340437629),rum.examples.validating_input.call(null,rum.core.cursor.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"email","email",1415816706)], null)),((function (state){
return (function (p1__6753_SHARP_){
return cljs.core.re_matches.call(null,/[^@]+@[^@.]+\..+/,p1__6753_SHARP_);
});})(state))
)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dt","dt",-368444759),"Phone:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dd","dd",-1340437629),rum.examples.restricting_input.call(null,rum.core.cursor.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"phone","phone",-763596057)], null)),((function (state){
return (function (p1__6754_SHARP_){
return cljs.core.re_matches.call(null,/[0-9\- +()]*/,p1__6754_SHARP_);
});})(state))
)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dt","dt",-368444759),"Age:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dd","dd",-1340437629),rum.examples.restricting_input_native.call(null,rum.core.cursor.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"age","age",-604307804)], null)),((function (state){
return (function (p1__6755_SHARP_){
return cljs.core.re_matches.call(null,/([1-9][0-9]*)?/,p1__6755_SHARP_);
});})(state))
)], null)], null);
})());
}));
var class__4756__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__4755__auto__], null),null),"val-form");
var ctor__4757__auto__ = ((function (render_mixin__4755__auto__,class__4756__auto__){
return (function() { 
var G__6756__delegate = function (args__4758__auto__){
var state__4759__auto__ = rum.core.args__GT_state.call(null,args__4758__auto__);
return rum.core.element.call(null,class__4756__auto__,state__4759__auto__,null);
};
var G__6756 = function (var_args){
var args__4758__auto__ = null;
if (arguments.length > 0) {
var G__6757__i = 0, G__6757__a = new Array(arguments.length -  0);
while (G__6757__i < G__6757__a.length) {G__6757__a[G__6757__i] = arguments[G__6757__i + 0]; ++G__6757__i;}
  args__4758__auto__ = new cljs.core.IndexedSeq(G__6757__a,0);
} 
return G__6756__delegate.call(this,args__4758__auto__);};
G__6756.cljs$lang$maxFixedArity = 0;
G__6756.cljs$lang$applyTo = (function (arglist__6758){
var args__4758__auto__ = cljs.core.seq(arglist__6758);
return G__6756__delegate(args__4758__auto__);
});
G__6756.cljs$core$IFn$_invoke$arity$variadic = G__6756__delegate;
return G__6756;
})()
;})(render_mixin__4755__auto__,class__4756__auto__))
;
return cljs.core.with_meta.call(null,ctor__4757__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__4756__auto__], null));
})();
rum.core.mount.call(null,rum.examples.val_form.call(null),rum.examples.el.call(null,"val-form"));
rum.examples.stateful = (function (){var render_mixin__4755__auto__ = rum.core.render_state__GT_mixin.call(null,(function (p__6759,title){
var map__6760 = p__6759;
var map__6760__$1 = ((((!((map__6760 == null)))?((((map__6760.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6760.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6760):map__6760);
var local = cljs.core.get.call(null,map__6760__$1,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
return React.createElement("div",{"style": {"WebkitUserSelect": "none", "cursor": "pointer"}, "onClick": ((function (map__6760,map__6760__$1,local){
return (function (_){
return cljs.core.swap_BANG_.call(null,local,cljs.core.inc);
});})(map__6760,map__6760__$1,local))
},sablono.interpreter.interpret.call(null,title),": ",sablono.interpreter.interpret.call(null,cljs.core.deref.call(null,local)));
}));
var class__4756__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__4755__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.call(null,(0))], null)),"stateful");
var ctor__4757__auto__ = ((function (render_mixin__4755__auto__,class__4756__auto__){
return (function() { 
var G__6762__delegate = function (args__4758__auto__){
var state__4759__auto__ = rum.core.args__GT_state.call(null,args__4758__auto__);
return rum.core.element.call(null,class__4756__auto__,state__4759__auto__,null);
};
var G__6762 = function (var_args){
var args__4758__auto__ = null;
if (arguments.length > 0) {
var G__6763__i = 0, G__6763__a = new Array(arguments.length -  0);
while (G__6763__i < G__6763__a.length) {G__6763__a[G__6763__i] = arguments[G__6763__i + 0]; ++G__6763__i;}
  args__4758__auto__ = new cljs.core.IndexedSeq(G__6763__a,0);
} 
return G__6762__delegate.call(this,args__4758__auto__);};
G__6762.cljs$lang$maxFixedArity = 0;
G__6762.cljs$lang$applyTo = (function (arglist__6764){
var args__4758__auto__ = cljs.core.seq(arglist__6764);
return G__6762__delegate(args__4758__auto__);
});
G__6762.cljs$core$IFn$_invoke$arity$variadic = G__6762__delegate;
return G__6762;
})()
;})(render_mixin__4755__auto__,class__4756__auto__))
;
return cljs.core.with_meta.call(null,ctor__4757__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__4756__auto__], null));
})();
rum.core.mount.call(null,rum.examples.stateful.call(null,"Clicks count"),rum.examples.el.call(null,"local-state"));
rum.examples.tree = (function (){var render_mixin__4755__auto__ = rum.core.render__GT_mixin.call(null,(function() {
var G__6766 = null;
var G__6766__1 = (function (form){
return sablono.interpreter.interpret.call(null,rum.examples.tree.call(null,form,(0)));
});
var G__6766__2 = (function (form,depth){
return sablono.interpreter.interpret.call(null,(function (){var offset = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),((10) * depth)], null)], null);
if(cljs.core.sequential_QMARK_.call(null,form)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".branch",".branch",849440400),offset,cljs.core.map.call(null,((function (offset){
return (function (p1__6765_SHARP_){
return rum.examples.tree.call(null,p1__6765_SHARP_,(depth + (1)));
});})(offset))
,form)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".leaf",".leaf",2075688114),offset,[cljs.core.str(form)].join('')], null);
}
})());
});
G__6766 = function(form,depth){
switch(arguments.length){
case 1:
return G__6766__1.call(this,form);
case 2:
return G__6766__2.call(this,form,depth);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__6766.cljs$core$IFn$_invoke$arity$1 = G__6766__1;
G__6766.cljs$core$IFn$_invoke$arity$2 = G__6766__2;
return G__6766;
})()
);
var class__4756__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__4755__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null)),"tree");
var ctor__4757__auto__ = ((function (render_mixin__4755__auto__,class__4756__auto__){
return (function() { 
var G__6767__delegate = function (args__4758__auto__){
var state__4759__auto__ = rum.core.args__GT_state.call(null,args__4758__auto__);
return rum.core.element.call(null,class__4756__auto__,state__4759__auto__,null);
};
var G__6767 = function (var_args){
var args__4758__auto__ = null;
if (arguments.length > 0) {
var G__6768__i = 0, G__6768__a = new Array(arguments.length -  0);
while (G__6768__i < G__6768__a.length) {G__6768__a[G__6768__i] = arguments[G__6768__i + 0]; ++G__6768__i;}
  args__4758__auto__ = new cljs.core.IndexedSeq(G__6768__a,0);
} 
return G__6767__delegate.call(this,args__4758__auto__);};
G__6767.cljs$lang$maxFixedArity = 0;
G__6767.cljs$lang$applyTo = (function (arglist__6769){
var args__4758__auto__ = cljs.core.seq(arglist__6769);
return G__6767__delegate(args__4758__auto__);
});
G__6767.cljs$core$IFn$_invoke$arity$variadic = G__6767__delegate;
return G__6767;
})()
;})(render_mixin__4755__auto__,class__4756__auto__))
;
return cljs.core.with_meta.call(null,ctor__4757__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__4756__auto__], null));
})();
rum.core.mount.call(null,rum.examples.tree.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198)], null),new cljs.core.Keyword(null,"g","g",1738089905)], null)], null)], null)),rum.examples.el.call(null,"selfie"));
rum.examples.child_from_lib_class = React.createClass({"contextTypes": {"color": React.PropTypes.string}, "displayName": "child-from-lib", "render": (function (){
var this$ = this;
return React.createElement("div",{"style": {"color": this$.context.color}},"Child component uses context to color font.");
})});
rum.examples.child_from_lib_ctor = (function rum$examples$child_from_lib_ctor(){
return rum.core.element.call(null,rum.examples.child_from_lib_class,cljs.core.PersistentArrayMap.EMPTY);
});
rum.examples.color_theme = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"child-context","child-context",-1375270295),(function (state){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.deref.call(null,rum.examples.color)], null);
}),new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"childContextTypes","childContextTypes",578717991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),React.PropTypes.string], null)], null)], null);
rum.examples.our_src = (function (){var render_mixin__4755__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return React.createElement("div",null,React.createElement("div",null,"Root component implicitly passes data to descendants."),sablono.interpreter.interpret.call(null,rum.examples.child_from_lib_ctor.call(null)));
}));
var class__4756__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__4755__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.examples.color_theme], null)),"our-src");
var ctor__4757__auto__ = ((function (render_mixin__4755__auto__,class__4756__auto__){
return (function() { 
var G__6772__delegate = function (args__4758__auto__){
var state__4759__auto__ = rum.core.args__GT_state.call(null,args__4758__auto__);
return rum.core.element.call(null,class__4756__auto__,state__4759__auto__,null);
};
var G__6772 = function (var_args){
var args__4758__auto__ = null;
if (arguments.length > 0) {
var G__6773__i = 0, G__6773__a = new Array(arguments.length -  0);
while (G__6773__i < G__6773__a.length) {G__6773__a[G__6773__i] = arguments[G__6773__i + 0]; ++G__6773__i;}
  args__4758__auto__ = new cljs.core.IndexedSeq(G__6773__a,0);
} 
return G__6772__delegate.call(this,args__4758__auto__);};
G__6772.cljs$lang$maxFixedArity = 0;
G__6772.cljs$lang$applyTo = (function (arglist__6774){
var args__4758__auto__ = cljs.core.seq(arglist__6774);
return G__6772__delegate(args__4758__auto__);
});
G__6772.cljs$core$IFn$_invoke$arity$variadic = G__6772__delegate;
return G__6772;
})()
;})(render_mixin__4755__auto__,class__4756__auto__))
;
return cljs.core.with_meta.call(null,ctor__4757__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__4756__auto__], null));
})();
rum.core.mount.call(null,rum.examples.our_src.call(null),rum.examples.el.call(null,"context"));
rum.examples.custom_props = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"msgData","msgData",345907944),"Components can store custom data on the underlying React component.",new cljs.core.Keyword(null,"msgMethod","msgMethod",523741434),(function (){
var this$ = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),((function (this$){
return (function (_){
(this$["msgData"] = cljs.core.rand.call(null));

return rum.core.request_render.call(null,this$);
});})(this$))
], null),"Custom methods too. Hover me!"], null);
})], null);
rum.examples.custom = (function (){var render_mixin__4755__auto__ = rum.core.render_comp__GT_mixin.call(null,(function (this$){
return React.createElement("div",null,(function (){var attrs6775 = (this$["msgData"]);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs6775))?sablono.interpreter.attributes.call(null,attrs6775):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs6775))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs6775)], null))));
})(),(function (){var attrs6776 = (this$["msgMethod"]).call(null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs6776))?sablono.interpreter.attributes.call(null,attrs6776):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs6776))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs6776)], null))));
})());
}));
var class__4756__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__4755__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),rum.examples.custom_props], null)], null)),"custom");
var ctor__4757__auto__ = ((function (render_mixin__4755__auto__,class__4756__auto__){
return (function() { 
var G__6777__delegate = function (args__4758__auto__){
var state__4759__auto__ = rum.core.args__GT_state.call(null,args__4758__auto__);
return rum.core.element.call(null,class__4756__auto__,state__4759__auto__,null);
};
var G__6777 = function (var_args){
var args__4758__auto__ = null;
if (arguments.length > 0) {
var G__6778__i = 0, G__6778__a = new Array(arguments.length -  0);
while (G__6778__i < G__6778__a.length) {G__6778__a[G__6778__i] = arguments[G__6778__i + 0]; ++G__6778__i;}
  args__4758__auto__ = new cljs.core.IndexedSeq(G__6778__a,0);
} 
return G__6777__delegate.call(this,args__4758__auto__);};
G__6777.cljs$lang$maxFixedArity = 0;
G__6777.cljs$lang$applyTo = (function (arglist__6779){
var args__4758__auto__ = cljs.core.seq(arglist__6779);
return G__6777__delegate(args__4758__auto__);
});
G__6777.cljs$core$IFn$_invoke$arity$variadic = G__6777__delegate;
return G__6777;
})()
;})(render_mixin__4755__auto__,class__4756__auto__))
;
return cljs.core.with_meta.call(null,ctor__4757__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__4756__auto__], null));
})();
rum.core.mount.call(null,rum.examples.custom.call(null),rum.examples.el.call(null,"custom"));
console.timeEnd("Init");

//# sourceMappingURL=examples.js.map