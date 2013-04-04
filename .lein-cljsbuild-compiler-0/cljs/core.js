goog.provide('cljs.core');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
void 0;
void 0;
void 0;
void 0;
void 0;
void 0;
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
void 0;/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
if((p[goog.typeOf(x)]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
});
void 0;cljs.core.is_proto_ = (function is_proto_(x){
return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error(["No protocol method ",proto," defined for type ",goog.typeOf(obj),": ",obj].join(""));
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return array_like.slice();
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){
return (new Array(size));
});
var make_array__2 = (function (type,size){
return make_array.call(null,size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw('Invalid arity: ' + arguments.length);
};
make_array.cljs$lang$arity$1 = make_array__1;
make_array.cljs$lang$arity$2 = make_array__2;
return make_array;
})()
;
void 0;
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() { 
var G__6615__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__6615 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6615__delegate.call(this, array, i, idxs);
};
G__6615.cljs$lang$maxFixedArity = 2;
G__6615.cljs$lang$applyTo = (function (arglist__6616){
var array = cljs.core.first(arglist__6616);
var i = cljs.core.first(cljs.core.next(arglist__6616));
var idxs = cljs.core.rest(cljs.core.next(arglist__6616));
return G__6615__delegate(array, i, idxs);
});
G__6615.cljs$lang$arity$variadic = G__6615__delegate;
return G__6615;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$lang$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$lang$arity$2 = aget__2;
aget.cljs$lang$arity$variadic = aget__3.cljs$lang$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
void 0;
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){
return into_array.call(null,null,aseq);
});
var into_array__2 = (function (type,aseq){
return cljs.core.reduce.call(null,(function (a,x){
a.push(x);
return a;
}),[],aseq);
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw('Invalid arity: ' + arguments.length);
};
into_array.cljs$lang$arity$1 = into_array__1;
into_array.cljs$lang$arity$2 = into_array__2;
return into_array;
})()
;
void 0;cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3822__auto____6680 = this$;
if(and__3822__auto____6680)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____6680;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{return (function (){var or__3824__auto____6681 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6681)
{return or__3824__auto____6681;
} else
{var or__3824__auto____6682 = (cljs.core._invoke["_"]);
if(or__3824__auto____6682)
{return or__3824__auto____6682;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____6683 = this$;
if(and__3822__auto____6683)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____6683;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{return (function (){var or__3824__auto____6684 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6684)
{return or__3824__auto____6684;
} else
{var or__3824__auto____6685 = (cljs.core._invoke["_"]);
if(or__3824__auto____6685)
{return or__3824__auto____6685;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____6686 = this$;
if(and__3822__auto____6686)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____6686;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{return (function (){var or__3824__auto____6687 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6687)
{return or__3824__auto____6687;
} else
{var or__3824__auto____6688 = (cljs.core._invoke["_"]);
if(or__3824__auto____6688)
{return or__3824__auto____6688;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____6689 = this$;
if(and__3822__auto____6689)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____6689;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{return (function (){var or__3824__auto____6690 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6690)
{return or__3824__auto____6690;
} else
{var or__3824__auto____6691 = (cljs.core._invoke["_"]);
if(or__3824__auto____6691)
{return or__3824__auto____6691;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____6692 = this$;
if(and__3822__auto____6692)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____6692;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{return (function (){var or__3824__auto____6693 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6693)
{return or__3824__auto____6693;
} else
{var or__3824__auto____6694 = (cljs.core._invoke["_"]);
if(or__3824__auto____6694)
{return or__3824__auto____6694;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____6695 = this$;
if(and__3822__auto____6695)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____6695;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{return (function (){var or__3824__auto____6696 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6696)
{return or__3824__auto____6696;
} else
{var or__3824__auto____6697 = (cljs.core._invoke["_"]);
if(or__3824__auto____6697)
{return or__3824__auto____6697;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____6698 = this$;
if(and__3822__auto____6698)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____6698;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3824__auto____6699 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6699)
{return or__3824__auto____6699;
} else
{var or__3824__auto____6700 = (cljs.core._invoke["_"]);
if(or__3824__auto____6700)
{return or__3824__auto____6700;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____6701 = this$;
if(and__3822__auto____6701)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____6701;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3824__auto____6702 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6702)
{return or__3824__auto____6702;
} else
{var or__3824__auto____6703 = (cljs.core._invoke["_"]);
if(or__3824__auto____6703)
{return or__3824__auto____6703;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____6704 = this$;
if(and__3822__auto____6704)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____6704;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3824__auto____6705 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6705)
{return or__3824__auto____6705;
} else
{var or__3824__auto____6706 = (cljs.core._invoke["_"]);
if(or__3824__auto____6706)
{return or__3824__auto____6706;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____6707 = this$;
if(and__3822__auto____6707)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____6707;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3824__auto____6708 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6708)
{return or__3824__auto____6708;
} else
{var or__3824__auto____6709 = (cljs.core._invoke["_"]);
if(or__3824__auto____6709)
{return or__3824__auto____6709;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____6710 = this$;
if(and__3822__auto____6710)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____6710;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3824__auto____6711 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6711)
{return or__3824__auto____6711;
} else
{var or__3824__auto____6712 = (cljs.core._invoke["_"]);
if(or__3824__auto____6712)
{return or__3824__auto____6712;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____6713 = this$;
if(and__3822__auto____6713)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____6713;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3824__auto____6714 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6714)
{return or__3824__auto____6714;
} else
{var or__3824__auto____6715 = (cljs.core._invoke["_"]);
if(or__3824__auto____6715)
{return or__3824__auto____6715;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____6716 = this$;
if(and__3822__auto____6716)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____6716;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3824__auto____6717 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6717)
{return or__3824__auto____6717;
} else
{var or__3824__auto____6718 = (cljs.core._invoke["_"]);
if(or__3824__auto____6718)
{return or__3824__auto____6718;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____6719 = this$;
if(and__3822__auto____6719)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____6719;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3824__auto____6720 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6720)
{return or__3824__auto____6720;
} else
{var or__3824__auto____6721 = (cljs.core._invoke["_"]);
if(or__3824__auto____6721)
{return or__3824__auto____6721;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____6722 = this$;
if(and__3822__auto____6722)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____6722;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3824__auto____6723 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6723)
{return or__3824__auto____6723;
} else
{var or__3824__auto____6724 = (cljs.core._invoke["_"]);
if(or__3824__auto____6724)
{return or__3824__auto____6724;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____6725 = this$;
if(and__3822__auto____6725)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____6725;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3824__auto____6726 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6726)
{return or__3824__auto____6726;
} else
{var or__3824__auto____6727 = (cljs.core._invoke["_"]);
if(or__3824__auto____6727)
{return or__3824__auto____6727;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____6728 = this$;
if(and__3822__auto____6728)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____6728;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3824__auto____6729 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6729)
{return or__3824__auto____6729;
} else
{var or__3824__auto____6730 = (cljs.core._invoke["_"]);
if(or__3824__auto____6730)
{return or__3824__auto____6730;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____6731 = this$;
if(and__3822__auto____6731)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____6731;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3824__auto____6732 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6732)
{return or__3824__auto____6732;
} else
{var or__3824__auto____6733 = (cljs.core._invoke["_"]);
if(or__3824__auto____6733)
{return or__3824__auto____6733;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____6734 = this$;
if(and__3822__auto____6734)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____6734;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3824__auto____6735 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6735)
{return or__3824__auto____6735;
} else
{var or__3824__auto____6736 = (cljs.core._invoke["_"]);
if(or__3824__auto____6736)
{return or__3824__auto____6736;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____6737 = this$;
if(and__3822__auto____6737)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____6737;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3824__auto____6738 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6738)
{return or__3824__auto____6738;
} else
{var or__3824__auto____6739 = (cljs.core._invoke["_"]);
if(or__3824__auto____6739)
{return or__3824__auto____6739;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____6740 = this$;
if(and__3822__auto____6740)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____6740;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3824__auto____6741 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6741)
{return or__3824__auto____6741;
} else
{var or__3824__auto____6742 = (cljs.core._invoke["_"]);
if(or__3824__auto____6742)
{return or__3824__auto____6742;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
_invoke.cljs$lang$arity$1 = _invoke__1;
_invoke.cljs$lang$arity$2 = _invoke__2;
_invoke.cljs$lang$arity$3 = _invoke__3;
_invoke.cljs$lang$arity$4 = _invoke__4;
_invoke.cljs$lang$arity$5 = _invoke__5;
_invoke.cljs$lang$arity$6 = _invoke__6;
_invoke.cljs$lang$arity$7 = _invoke__7;
_invoke.cljs$lang$arity$8 = _invoke__8;
_invoke.cljs$lang$arity$9 = _invoke__9;
_invoke.cljs$lang$arity$10 = _invoke__10;
_invoke.cljs$lang$arity$11 = _invoke__11;
_invoke.cljs$lang$arity$12 = _invoke__12;
_invoke.cljs$lang$arity$13 = _invoke__13;
_invoke.cljs$lang$arity$14 = _invoke__14;
_invoke.cljs$lang$arity$15 = _invoke__15;
_invoke.cljs$lang$arity$16 = _invoke__16;
_invoke.cljs$lang$arity$17 = _invoke__17;
_invoke.cljs$lang$arity$18 = _invoke__18;
_invoke.cljs$lang$arity$19 = _invoke__19;
_invoke.cljs$lang$arity$20 = _invoke__20;
_invoke.cljs$lang$arity$21 = _invoke__21;
return _invoke;
})()
;
void 0;void 0;cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if((function (){var and__3822__auto____6746 = coll;
if(and__3822__auto____6746)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____6746;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{return (function (){var or__3824__auto____6747 = (cljs.core._count[goog.typeOf(coll)]);
if(or__3824__auto____6747)
{return or__3824__auto____6747;
} else
{var or__3824__auto____6748 = (cljs.core._count["_"]);
if(or__3824__auto____6748)
{return or__3824__auto____6748;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____6752 = coll;
if(and__3822__auto____6752)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____6752;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (function (){var or__3824__auto____6753 = (cljs.core._empty[goog.typeOf(coll)]);
if(or__3824__auto____6753)
{return or__3824__auto____6753;
} else
{var or__3824__auto____6754 = (cljs.core._empty["_"]);
if(or__3824__auto____6754)
{return or__3824__auto____6754;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____6758 = coll;
if(and__3822__auto____6758)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____6758;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{return (function (){var or__3824__auto____6759 = (cljs.core._conj[goog.typeOf(coll)]);
if(or__3824__auto____6759)
{return or__3824__auto____6759;
} else
{var or__3824__auto____6760 = (cljs.core._conj["_"]);
if(or__3824__auto____6760)
{return or__3824__auto____6760;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
void 0;void 0;cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3822__auto____6767 = coll;
if(and__3822__auto____6767)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____6767;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return (function (){var or__3824__auto____6768 = (cljs.core._nth[goog.typeOf(coll)]);
if(or__3824__auto____6768)
{return or__3824__auto____6768;
} else
{var or__3824__auto____6769 = (cljs.core._nth["_"]);
if(or__3824__auto____6769)
{return or__3824__auto____6769;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____6770 = coll;
if(and__3822__auto____6770)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____6770;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{return (function (){var or__3824__auto____6771 = (cljs.core._nth[goog.typeOf(coll)]);
if(or__3824__auto____6771)
{return or__3824__auto____6771;
} else
{var or__3824__auto____6772 = (cljs.core._nth["_"]);
if(or__3824__auto____6772)
{return or__3824__auto____6772;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_nth.cljs$lang$arity$2 = _nth__2;
_nth.cljs$lang$arity$3 = _nth__3;
return _nth;
})()
;
void 0;void 0;cljs.core.ASeq = {};
void 0;void 0;cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if((function (){var and__3822__auto____6776 = coll;
if(and__3822__auto____6776)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____6776;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____6777 = (cljs.core._first[goog.typeOf(coll)]);
if(or__3824__auto____6777)
{return or__3824__auto____6777;
} else
{var or__3824__auto____6778 = (cljs.core._first["_"]);
if(or__3824__auto____6778)
{return or__3824__auto____6778;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____6782 = coll;
if(and__3822__auto____6782)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____6782;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{return (function (){var or__3824__auto____6783 = (cljs.core._rest[goog.typeOf(coll)]);
if(or__3824__auto____6783)
{return or__3824__auto____6783;
} else
{var or__3824__auto____6784 = (cljs.core._rest["_"]);
if(or__3824__auto____6784)
{return or__3824__auto____6784;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____6788 = coll;
if(and__3822__auto____6788)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____6788;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{return (function (){var or__3824__auto____6789 = (cljs.core._next[goog.typeOf(coll)]);
if(or__3824__auto____6789)
{return or__3824__auto____6789;
} else
{var or__3824__auto____6790 = (cljs.core._next["_"]);
if(or__3824__auto____6790)
{return or__3824__auto____6790;
} else
{throw cljs.core.missing_protocol.call(null,"INext.-next",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3822__auto____6797 = o;
if(and__3822__auto____6797)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____6797;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{return (function (){var or__3824__auto____6798 = (cljs.core._lookup[goog.typeOf(o)]);
if(or__3824__auto____6798)
{return or__3824__auto____6798;
} else
{var or__3824__auto____6799 = (cljs.core._lookup["_"]);
if(or__3824__auto____6799)
{return or__3824__auto____6799;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____6800 = o;
if(and__3822__auto____6800)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____6800;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{return (function (){var or__3824__auto____6801 = (cljs.core._lookup[goog.typeOf(o)]);
if(or__3824__auto____6801)
{return or__3824__auto____6801;
} else
{var or__3824__auto____6802 = (cljs.core._lookup["_"]);
if(or__3824__auto____6802)
{return or__3824__auto____6802;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_lookup.cljs$lang$arity$2 = _lookup__2;
_lookup.cljs$lang$arity$3 = _lookup__3;
return _lookup;
})()
;
void 0;void 0;cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3822__auto____6806 = coll;
if(and__3822__auto____6806)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____6806;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{return (function (){var or__3824__auto____6807 = (cljs.core._contains_key_QMARK_[goog.typeOf(coll)]);
if(or__3824__auto____6807)
{return or__3824__auto____6807;
} else
{var or__3824__auto____6808 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____6808)
{return or__3824__auto____6808;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____6812 = coll;
if(and__3822__auto____6812)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____6812;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{return (function (){var or__3824__auto____6813 = (cljs.core._assoc[goog.typeOf(coll)]);
if(or__3824__auto____6813)
{return or__3824__auto____6813;
} else
{var or__3824__auto____6814 = (cljs.core._assoc["_"]);
if(or__3824__auto____6814)
{return or__3824__auto____6814;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
void 0;void 0;cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____6818 = coll;
if(and__3822__auto____6818)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____6818;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{return (function (){var or__3824__auto____6819 = (cljs.core._dissoc[goog.typeOf(coll)]);
if(or__3824__auto____6819)
{return or__3824__auto____6819;
} else
{var or__3824__auto____6820 = (cljs.core._dissoc["_"]);
if(or__3824__auto____6820)
{return or__3824__auto____6820;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
void 0;void 0;cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____6824 = coll;
if(and__3822__auto____6824)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____6824;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{return (function (){var or__3824__auto____6825 = (cljs.core._key[goog.typeOf(coll)]);
if(or__3824__auto____6825)
{return or__3824__auto____6825;
} else
{var or__3824__auto____6826 = (cljs.core._key["_"]);
if(or__3824__auto____6826)
{return or__3824__auto____6826;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____6830 = coll;
if(and__3822__auto____6830)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____6830;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{return (function (){var or__3824__auto____6831 = (cljs.core._val[goog.typeOf(coll)]);
if(or__3824__auto____6831)
{return or__3824__auto____6831;
} else
{var or__3824__auto____6832 = (cljs.core._val["_"]);
if(or__3824__auto____6832)
{return or__3824__auto____6832;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____6836 = coll;
if(and__3822__auto____6836)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____6836;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{return (function (){var or__3824__auto____6837 = (cljs.core._disjoin[goog.typeOf(coll)]);
if(or__3824__auto____6837)
{return or__3824__auto____6837;
} else
{var or__3824__auto____6838 = (cljs.core._disjoin["_"]);
if(or__3824__auto____6838)
{return or__3824__auto____6838;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
void 0;void 0;cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____6842 = coll;
if(and__3822__auto____6842)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____6842;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{return (function (){var or__3824__auto____6843 = (cljs.core._peek[goog.typeOf(coll)]);
if(or__3824__auto____6843)
{return or__3824__auto____6843;
} else
{var or__3824__auto____6844 = (cljs.core._peek["_"]);
if(or__3824__auto____6844)
{return or__3824__auto____6844;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____6848 = coll;
if(and__3822__auto____6848)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____6848;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{return (function (){var or__3824__auto____6849 = (cljs.core._pop[goog.typeOf(coll)]);
if(or__3824__auto____6849)
{return or__3824__auto____6849;
} else
{var or__3824__auto____6850 = (cljs.core._pop["_"]);
if(or__3824__auto____6850)
{return or__3824__auto____6850;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____6854 = coll;
if(and__3822__auto____6854)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____6854;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{return (function (){var or__3824__auto____6855 = (cljs.core._assoc_n[goog.typeOf(coll)]);
if(or__3824__auto____6855)
{return or__3824__auto____6855;
} else
{var or__3824__auto____6856 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____6856)
{return or__3824__auto____6856;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
void 0;void 0;cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____6860 = o;
if(and__3822__auto____6860)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____6860;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{return (function (){var or__3824__auto____6861 = (cljs.core._deref[goog.typeOf(o)]);
if(or__3824__auto____6861)
{return or__3824__auto____6861;
} else
{var or__3824__auto____6862 = (cljs.core._deref["_"]);
if(or__3824__auto____6862)
{return or__3824__auto____6862;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____6866 = o;
if(and__3822__auto____6866)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____6866;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{return (function (){var or__3824__auto____6867 = (cljs.core._deref_with_timeout[goog.typeOf(o)]);
if(or__3824__auto____6867)
{return or__3824__auto____6867;
} else
{var or__3824__auto____6868 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____6868)
{return or__3824__auto____6868;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
void 0;void 0;cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____6872 = o;
if(and__3822__auto____6872)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____6872;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{return (function (){var or__3824__auto____6873 = (cljs.core._meta[goog.typeOf(o)]);
if(or__3824__auto____6873)
{return or__3824__auto____6873;
} else
{var or__3824__auto____6874 = (cljs.core._meta["_"]);
if(or__3824__auto____6874)
{return or__3824__auto____6874;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____6878 = o;
if(and__3822__auto____6878)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____6878;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{return (function (){var or__3824__auto____6879 = (cljs.core._with_meta[goog.typeOf(o)]);
if(or__3824__auto____6879)
{return or__3824__auto____6879;
} else
{var or__3824__auto____6880 = (cljs.core._with_meta["_"]);
if(or__3824__auto____6880)
{return or__3824__auto____6880;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
void 0;void 0;cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3822__auto____6887 = coll;
if(and__3822__auto____6887)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____6887;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{return (function (){var or__3824__auto____6888 = (cljs.core._reduce[goog.typeOf(coll)]);
if(or__3824__auto____6888)
{return or__3824__auto____6888;
} else
{var or__3824__auto____6889 = (cljs.core._reduce["_"]);
if(or__3824__auto____6889)
{return or__3824__auto____6889;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____6890 = coll;
if(and__3822__auto____6890)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____6890;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{return (function (){var or__3824__auto____6891 = (cljs.core._reduce[goog.typeOf(coll)]);
if(or__3824__auto____6891)
{return or__3824__auto____6891;
} else
{var or__3824__auto____6892 = (cljs.core._reduce["_"]);
if(or__3824__auto____6892)
{return or__3824__auto____6892;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
_reduce.cljs$lang$arity$2 = _reduce__2;
_reduce.cljs$lang$arity$3 = _reduce__3;
return _reduce;
})()
;
void 0;void 0;cljs.core.IKVReduce = {};
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3822__auto____6896 = coll;
if(and__3822__auto____6896)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____6896;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{return (function (){var or__3824__auto____6897 = (cljs.core._kv_reduce[goog.typeOf(coll)]);
if(or__3824__auto____6897)
{return or__3824__auto____6897;
} else
{var or__3824__auto____6898 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____6898)
{return or__3824__auto____6898;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
void 0;void 0;cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____6902 = o;
if(and__3822__auto____6902)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____6902;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{return (function (){var or__3824__auto____6903 = (cljs.core._equiv[goog.typeOf(o)]);
if(or__3824__auto____6903)
{return or__3824__auto____6903;
} else
{var or__3824__auto____6904 = (cljs.core._equiv["_"]);
if(or__3824__auto____6904)
{return or__3824__auto____6904;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
void 0;void 0;cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____6908 = o;
if(and__3822__auto____6908)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____6908;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{return (function (){var or__3824__auto____6909 = (cljs.core._hash[goog.typeOf(o)]);
if(or__3824__auto____6909)
{return or__3824__auto____6909;
} else
{var or__3824__auto____6910 = (cljs.core._hash["_"]);
if(or__3824__auto____6910)
{return or__3824__auto____6910;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____6914 = o;
if(and__3822__auto____6914)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____6914;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{return (function (){var or__3824__auto____6915 = (cljs.core._seq[goog.typeOf(o)]);
if(or__3824__auto____6915)
{return or__3824__auto____6915;
} else
{var or__3824__auto____6916 = (cljs.core._seq["_"]);
if(or__3824__auto____6916)
{return or__3824__auto____6916;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.ISequential = {};
void 0;void 0;cljs.core.IList = {};
void 0;void 0;cljs.core.IRecord = {};
void 0;void 0;cljs.core.IReversible = {};
cljs.core._rseq = (function _rseq(coll){
if((function (){var and__3822__auto____6920 = coll;
if(and__3822__auto____6920)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____6920;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{return (function (){var or__3824__auto____6921 = (cljs.core._rseq[goog.typeOf(coll)]);
if(or__3824__auto____6921)
{return or__3824__auto____6921;
} else
{var or__3824__auto____6922 = (cljs.core._rseq["_"]);
if(or__3824__auto____6922)
{return or__3824__auto____6922;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____6926 = coll;
if(and__3822__auto____6926)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____6926;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{return (function (){var or__3824__auto____6927 = (cljs.core._sorted_seq[goog.typeOf(coll)]);
if(or__3824__auto____6927)
{return or__3824__auto____6927;
} else
{var or__3824__auto____6928 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____6928)
{return or__3824__auto____6928;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____6932 = coll;
if(and__3822__auto____6932)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____6932;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{return (function (){var or__3824__auto____6933 = (cljs.core._sorted_seq_from[goog.typeOf(coll)]);
if(or__3824__auto____6933)
{return or__3824__auto____6933;
} else
{var or__3824__auto____6934 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____6934)
{return or__3824__auto____6934;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____6938 = coll;
if(and__3822__auto____6938)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____6938;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{return (function (){var or__3824__auto____6939 = (cljs.core._entry_key[goog.typeOf(coll)]);
if(or__3824__auto____6939)
{return or__3824__auto____6939;
} else
{var or__3824__auto____6940 = (cljs.core._entry_key["_"]);
if(or__3824__auto____6940)
{return or__3824__auto____6940;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____6944 = coll;
if(and__3822__auto____6944)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____6944;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{return (function (){var or__3824__auto____6945 = (cljs.core._comparator[goog.typeOf(coll)]);
if(or__3824__auto____6945)
{return or__3824__auto____6945;
} else
{var or__3824__auto____6946 = (cljs.core._comparator["_"]);
if(or__3824__auto____6946)
{return or__3824__auto____6946;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____6950 = o;
if(and__3822__auto____6950)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____6950;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{return (function (){var or__3824__auto____6951 = (cljs.core._pr_seq[goog.typeOf(o)]);
if(or__3824__auto____6951)
{return or__3824__auto____6951;
} else
{var or__3824__auto____6952 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____6952)
{return or__3824__auto____6952;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
void 0;void 0;cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____6956 = d;
if(and__3822__auto____6956)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____6956;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{return (function (){var or__3824__auto____6957 = (cljs.core._realized_QMARK_[goog.typeOf(d)]);
if(or__3824__auto____6957)
{return or__3824__auto____6957;
} else
{var or__3824__auto____6958 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____6958)
{return or__3824__auto____6958;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
void 0;void 0;cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____6962 = this$;
if(and__3822__auto____6962)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____6962;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{return (function (){var or__3824__auto____6963 = (cljs.core._notify_watches[goog.typeOf(this$)]);
if(or__3824__auto____6963)
{return or__3824__auto____6963;
} else
{var or__3824__auto____6964 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____6964)
{return or__3824__auto____6964;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____6968 = this$;
if(and__3822__auto____6968)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____6968;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{return (function (){var or__3824__auto____6969 = (cljs.core._add_watch[goog.typeOf(this$)]);
if(or__3824__auto____6969)
{return or__3824__auto____6969;
} else
{var or__3824__auto____6970 = (cljs.core._add_watch["_"]);
if(or__3824__auto____6970)
{return or__3824__auto____6970;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____6974 = this$;
if(and__3822__auto____6974)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____6974;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{return (function (){var or__3824__auto____6975 = (cljs.core._remove_watch[goog.typeOf(this$)]);
if(or__3824__auto____6975)
{return or__3824__auto____6975;
} else
{var or__3824__auto____6976 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____6976)
{return or__3824__auto____6976;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
void 0;void 0;cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____6980 = coll;
if(and__3822__auto____6980)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____6980;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{return (function (){var or__3824__auto____6981 = (cljs.core._as_transient[goog.typeOf(coll)]);
if(or__3824__auto____6981)
{return or__3824__auto____6981;
} else
{var or__3824__auto____6982 = (cljs.core._as_transient["_"]);
if(or__3824__auto____6982)
{return or__3824__auto____6982;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____6986 = tcoll;
if(and__3822__auto____6986)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____6986;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{return (function (){var or__3824__auto____6987 = (cljs.core._conj_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6987)
{return or__3824__auto____6987;
} else
{var or__3824__auto____6988 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____6988)
{return or__3824__auto____6988;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____6992 = tcoll;
if(and__3822__auto____6992)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____6992;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3824__auto____6993 = (cljs.core._persistent_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6993)
{return or__3824__auto____6993;
} else
{var or__3824__auto____6994 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____6994)
{return or__3824__auto____6994;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____6998 = tcoll;
if(and__3822__auto____6998)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____6998;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{return (function (){var or__3824__auto____6999 = (cljs.core._assoc_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6999)
{return or__3824__auto____6999;
} else
{var or__3824__auto____7000 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____7000)
{return or__3824__auto____7000;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
void 0;void 0;cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____7004 = tcoll;
if(and__3822__auto____7004)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____7004;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{return (function (){var or__3824__auto____7005 = (cljs.core._dissoc_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____7005)
{return or__3824__auto____7005;
} else
{var or__3824__auto____7006 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____7006)
{return or__3824__auto____7006;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
void 0;void 0;cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____7010 = tcoll;
if(and__3822__auto____7010)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____7010;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{return (function (){var or__3824__auto____7011 = (cljs.core._assoc_n_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____7011)
{return or__3824__auto____7011;
} else
{var or__3824__auto____7012 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____7012)
{return or__3824__auto____7012;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____7016 = tcoll;
if(and__3822__auto____7016)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____7016;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3824__auto____7017 = (cljs.core._pop_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____7017)
{return or__3824__auto____7017;
} else
{var or__3824__auto____7018 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____7018)
{return or__3824__auto____7018;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____7022 = tcoll;
if(and__3822__auto____7022)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____7022;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{return (function (){var or__3824__auto____7023 = (cljs.core._disjoin_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____7023)
{return or__3824__auto____7023;
} else
{var or__3824__auto____7024 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____7024)
{return or__3824__auto____7024;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
void 0;void 0;cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____7028 = x;
if(and__3822__auto____7028)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____7028;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{return (function (){var or__3824__auto____7029 = (cljs.core._compare[goog.typeOf(x)]);
if(or__3824__auto____7029)
{return or__3824__auto____7029;
} else
{var or__3824__auto____7030 = (cljs.core._compare["_"]);
if(or__3824__auto____7030)
{return or__3824__auto____7030;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
void 0;void 0;cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____7034 = coll;
if(and__3822__auto____7034)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____7034;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____7035 = (cljs.core._drop_first[goog.typeOf(coll)]);
if(or__3824__auto____7035)
{return or__3824__auto____7035;
} else
{var or__3824__auto____7036 = (cljs.core._drop_first["_"]);
if(or__3824__auto____7036)
{return or__3824__auto____7036;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____7040 = coll;
if(and__3822__auto____7040)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____7040;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____7041 = (cljs.core._chunked_first[goog.typeOf(coll)]);
if(or__3824__auto____7041)
{return or__3824__auto____7041;
} else
{var or__3824__auto____7042 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____7042)
{return or__3824__auto____7042;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____7046 = coll;
if(and__3822__auto____7046)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____7046;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{return (function (){var or__3824__auto____7047 = (cljs.core._chunked_rest[goog.typeOf(coll)]);
if(or__3824__auto____7047)
{return or__3824__auto____7047;
} else
{var or__3824__auto____7048 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____7048)
{return or__3824__auto____7048;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____7052 = coll;
if(and__3822__auto____7052)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____7052;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{return (function (){var or__3824__auto____7053 = (cljs.core._chunked_next[goog.typeOf(coll)]);
if(or__3824__auto____7053)
{return or__3824__auto____7053;
} else
{var or__3824__auto____7054 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____7054)
{return or__3824__auto____7054;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});
void 0;/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
void 0;
void 0;
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
var or__3824__auto____7056 = (x === y);
if(or__3824__auto____7056)
{return or__3824__auto____7056;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__7057__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__7058 = y;
var G__7059 = cljs.core.first.call(null,more);
var G__7060 = cljs.core.next.call(null,more);
x = G__7058;
y = G__7059;
more = G__7060;
continue;
}
} else
{return _EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7057 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7057__delegate.call(this, x, y, more);
};
G__7057.cljs$lang$maxFixedArity = 2;
G__7057.cljs$lang$applyTo = (function (arglist__7061){
var x = cljs.core.first(arglist__7061);
var y = cljs.core.first(cljs.core.next(arglist__7061));
var more = cljs.core.rest(cljs.core.next(arglist__7061));
return G__7057__delegate(x, y, more);
});
G__7057.cljs$lang$arity$variadic = G__7057__delegate;
return G__7057;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$lang$arity$1 = _EQ___1;
_EQ_.cljs$lang$arity$2 = _EQ___2;
_EQ_.cljs$lang$arity$variadic = _EQ___3.cljs$lang$arity$variadic;
return _EQ_;
})()
;
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
cljs.core.type = (function type(x){
if((x == null))
{return null;
} else
{return x.constructor;
}
});
void 0;
void 0;
void 0;
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__7062 = null;
var G__7062__2 = (function (o,k){
return null;
});
var G__7062__3 = (function (o,k,not_found){
return not_found;
});
G__7062 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__7062__2.call(this,o,k);
case 3:
return G__7062__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7062;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.INext["null"] = true);
(cljs.core._next["null"] = (function (_){
return null;
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__7063 = null;
var G__7063__2 = (function (_,f){
return f.call(null);
});
var G__7063__3 = (function (_,f,start){
return start;
});
G__7063 = function(_,f,start){
switch(arguments.length){
case 2:
return G__7063__2.call(this,_,f);
case 3:
return G__7063__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7063;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o == null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__7064 = null;
var G__7064__2 = (function (_,n){
return null;
});
var G__7064__3 = (function (_,n,not_found){
return not_found;
});
G__7064 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__7064__2.call(this,_,n);
case 3:
return G__7064__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7064;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
return (o.toString() === other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
if((o === true))
{return 1;
} else
{return 0;
}
}));
(cljs.core.IHash["_"] = true);
(cljs.core._hash["_"] = (function (o){
return goog.getUid(o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
void 0;
void 0;
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
var cnt__7077 = cljs.core._count.call(null,cicoll);
if((cnt__7077 === 0))
{return f.call(null);
} else
{var val__7078 = cljs.core._nth.call(null,cicoll,0);
var n__7079 = 1;
while(true){
if((n__7079 < cnt__7077))
{var nval__7080 = f.call(null,val__7078,cljs.core._nth.call(null,cicoll,n__7079));
if(cljs.core.reduced_QMARK_.call(null,nval__7080))
{return cljs.core.deref.call(null,nval__7080);
} else
{{
var G__7089 = nval__7080;
var G__7090 = (n__7079 + 1);
val__7078 = G__7089;
n__7079 = G__7090;
continue;
}
}
} else
{return val__7078;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__7081 = cljs.core._count.call(null,cicoll);
var val__7082 = val;
var n__7083 = 0;
while(true){
if((n__7083 < cnt__7081))
{var nval__7084 = f.call(null,val__7082,cljs.core._nth.call(null,cicoll,n__7083));
if(cljs.core.reduced_QMARK_.call(null,nval__7084))
{return cljs.core.deref.call(null,nval__7084);
} else
{{
var G__7091 = nval__7084;
var G__7092 = (n__7083 + 1);
val__7082 = G__7091;
n__7083 = G__7092;
continue;
}
}
} else
{return val__7082;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__7085 = cljs.core._count.call(null,cicoll);
var val__7086 = val;
var n__7087 = idx;
while(true){
if((n__7087 < cnt__7085))
{var nval__7088 = f.call(null,val__7086,cljs.core._nth.call(null,cicoll,n__7087));
if(cljs.core.reduced_QMARK_.call(null,nval__7088))
{return cljs.core.deref.call(null,nval__7088);
} else
{{
var G__7093 = nval__7088;
var G__7094 = (n__7087 + 1);
val__7086 = G__7093;
n__7087 = G__7094;
continue;
}
}
} else
{return val__7086;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
ci_reduce.cljs$lang$arity$2 = ci_reduce__2;
ci_reduce.cljs$lang$arity$3 = ci_reduce__3;
ci_reduce.cljs$lang$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){
var cnt__7107 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__7108 = (arr[0]);
var n__7109 = 1;
while(true){
if((n__7109 < cnt__7107))
{var nval__7110 = f.call(null,val__7108,(arr[n__7109]));
if(cljs.core.reduced_QMARK_.call(null,nval__7110))
{return cljs.core.deref.call(null,nval__7110);
} else
{{
var G__7119 = nval__7110;
var G__7120 = (n__7109 + 1);
val__7108 = G__7119;
n__7109 = G__7120;
continue;
}
}
} else
{return val__7108;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__7111 = arr.length;
var val__7112 = val;
var n__7113 = 0;
while(true){
if((n__7113 < cnt__7111))
{var nval__7114 = f.call(null,val__7112,(arr[n__7113]));
if(cljs.core.reduced_QMARK_.call(null,nval__7114))
{return cljs.core.deref.call(null,nval__7114);
} else
{{
var G__7121 = nval__7114;
var G__7122 = (n__7113 + 1);
val__7112 = G__7121;
n__7113 = G__7122;
continue;
}
}
} else
{return val__7112;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__7115 = arr.length;
var val__7116 = val;
var n__7117 = idx;
while(true){
if((n__7117 < cnt__7115))
{var nval__7118 = f.call(null,val__7116,(arr[n__7117]));
if(cljs.core.reduced_QMARK_.call(null,nval__7118))
{return cljs.core.deref.call(null,nval__7118);
} else
{{
var G__7123 = nval__7118;
var G__7124 = (n__7117 + 1);
val__7116 = G__7123;
n__7117 = G__7124;
continue;
}
}
} else
{return val__7116;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
array_reduce.cljs$lang$arity$2 = array_reduce__2;
array_reduce.cljs$lang$arity$3 = array_reduce__3;
array_reduce.cljs$lang$arity$4 = array_reduce__4;
return array_reduce;
})()
;
void 0;
void 0;
void 0;
void 0;
void 0;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 166199546;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7125 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__7126 = this;
if(((this__7126.i + 1) < this__7126.a.length))
{return (new cljs.core.IndexedSeq(this__7126.a,(this__7126.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7127 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__7128 = this;
var c__7129 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__7129 > 0))
{return (new cljs.core.RSeq(coll,(c__7129 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__7130 = this;
var this__7131 = this;
return cljs.core.pr_str.call(null,this__7131);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__7132 = this;
if(cljs.core.counted_QMARK_.call(null,this__7132.a))
{return cljs.core.ci_reduce.call(null,this__7132.a,f,(this__7132.a[this__7132.i]),(this__7132.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__7132.a[this__7132.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7133 = this;
if(cljs.core.counted_QMARK_.call(null,this__7133.a))
{return cljs.core.ci_reduce.call(null,this__7133.a,f,start,this__7133.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__7134 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7135 = this;
return (this__7135.a.length - this__7135.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__7136 = this;
return (this__7136.a[this__7136.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__7137 = this;
if(((this__7137.i + 1) < this__7137.a.length))
{return (new cljs.core.IndexedSeq(this__7137.a,(this__7137.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7138 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__7139 = this;
var i__7140 = (n + this__7139.i);
if((i__7140 < this__7139.a.length))
{return (this__7139.a[i__7140]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__7141 = this;
var i__7142 = (n + this__7141.i);
if((i__7142 < this__7141.a.length))
{return (this__7141.a[i__7142]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){
return prim_seq.call(null,prim,0);
});
var prim_seq__2 = (function (prim,i){
if((prim.length === 0))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw('Invalid arity: ' + arguments.length);
};
prim_seq.cljs$lang$arity$1 = prim_seq__1;
prim_seq.cljs$lang$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){
return cljs.core.prim_seq.call(null,array,0);
});
var array_seq__2 = (function (array,i){
return cljs.core.prim_seq.call(null,array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw('Invalid arity: ' + arguments.length);
};
array_seq.cljs$lang$arity$1 = array_seq__1;
array_seq.cljs$lang$arity$2 = array_seq__2;
return array_seq;
})()
;
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__7143 = null;
var G__7143__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__7143__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__7143 = function(array,f,start){
switch(arguments.length){
case 2:
return G__7143__2.call(this,array,f);
case 3:
return G__7143__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7143;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__7144 = null;
var G__7144__2 = (function (array,k){
return (array[k]);
});
var G__7144__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__7144 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__7144__2.call(this,array,k);
case 3:
return G__7144__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7144;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__7145 = null;
var G__7145__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__7145__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__7145 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__7145__2.call(this,array,n);
case 3:
return G__7145__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7145;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));

/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.RSeq.cljs$lang$type = true;
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7146 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7147 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__7148 = this;
var this__7149 = this;
return cljs.core.pr_str.call(null,this__7149);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7150 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7151 = this;
return (this__7151.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7152 = this;
return cljs.core._nth.call(null,this__7152.ci,this__7152.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7153 = this;
if((this__7153.i > 0))
{return (new cljs.core.RSeq(this__7153.ci,(this__7153.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7154 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__7155 = this;
return (new cljs.core.RSeq(this__7155.ci,this__7155.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7156 = this;
return this__7156.meta;
});
cljs.core.RSeq;
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__7160__7161 = coll;
if(G__7160__7161)
{if((function (){var or__3824__auto____7162 = (G__7160__7161.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____7162)
{return or__3824__auto____7162;
} else
{return G__7160__7161.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__7160__7161.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__7160__7161);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__7160__7161);
}
})())
{return coll;
} else
{return cljs.core._seq.call(null,coll);
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__7167__7168 = coll;
if(G__7167__7168)
{if((function (){var or__3824__auto____7169 = (G__7167__7168.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7169)
{return or__3824__auto____7169;
} else
{return G__7167__7168.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7167__7168.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7167__7168);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7167__7168);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__7170 = cljs.core.seq.call(null,coll);
if((s__7170 == null))
{return null;
} else
{return cljs.core._first.call(null,s__7170);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
if(!((coll == null)))
{if((function (){var G__7175__7176 = coll;
if(G__7175__7176)
{if((function (){var or__3824__auto____7177 = (G__7175__7176.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7177)
{return or__3824__auto____7177;
} else
{return G__7175__7176.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7175__7176.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7175__7176);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7175__7176);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__7178 = cljs.core.seq.call(null,coll);
if(!((s__7178 == null)))
{return cljs.core._rest.call(null,s__7178);
} else
{return cljs.core.List.EMPTY;
}
}
} else
{return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__7182__7183 = coll;
if(G__7182__7183)
{if((function (){var or__3824__auto____7184 = (G__7182__7183.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____7184)
{return or__3824__auto____7184;
} else
{return G__7182__7183.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__7182__7183.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__7182__7183);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__7182__7183);
}
})())
{return cljs.core._next.call(null,coll);
} else
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
}
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
var sn__7186 = cljs.core.next.call(null,s);
if(!((sn__7186 == null)))
{{
var G__7187 = sn__7186;
s = G__7187;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3 = (function() { 
var G__7188__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__7189 = conj.call(null,coll,x);
var G__7190 = cljs.core.first.call(null,xs);
var G__7191 = cljs.core.next.call(null,xs);
coll = G__7189;
x = G__7190;
xs = G__7191;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__7188 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7188__delegate.call(this, coll, x, xs);
};
G__7188.cljs$lang$maxFixedArity = 2;
G__7188.cljs$lang$applyTo = (function (arglist__7192){
var coll = cljs.core.first(arglist__7192);
var x = cljs.core.first(cljs.core.next(arglist__7192));
var xs = cljs.core.rest(cljs.core.next(arglist__7192));
return G__7188__delegate(coll, x, xs);
});
G__7188.cljs$lang$arity$variadic = G__7188__delegate;
return G__7188;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$lang$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$lang$arity$2 = conj__2;
conj.cljs$lang$arity$variadic = conj__3.cljs$lang$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
void 0;
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){
var s__7195 = cljs.core.seq.call(null,coll);
var acc__7196 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__7195))
{return (acc__7196 + cljs.core._count.call(null,s__7195));
} else
{{
var G__7197 = cljs.core.next.call(null,s__7195);
var G__7198 = (acc__7196 + 1);
s__7195 = G__7197;
acc__7196 = G__7198;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
if(cljs.core.counted_QMARK_.call(null,coll))
{return cljs.core._count.call(null,coll);
} else
{return cljs.core.accumulating_seq_count.call(null,coll);
}
});
void 0;
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
if((coll == null))
{throw (new Error("Index out of bounds"));
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n);
} else
{if(cljs.core.seq.call(null,coll))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1));
} else
{if("\uFDD0'else")
{throw (new Error("Index out of bounds"));
} else
{return null;
}
}
}
}
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
if((coll == null))
{return not_found;
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n,not_found);
} else
{if(cljs.core.seq.call(null,coll))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1),not_found);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
linear_traversal_nth.cljs$lang$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$lang$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
if((coll == null))
{return null;
} else
{if((function (){var G__7205__7206 = coll;
if(G__7205__7206)
{if((function (){var or__3824__auto____7207 = (G__7205__7206.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7207)
{return or__3824__auto____7207;
} else
{return G__7205__7206.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7205__7206.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7205__7206);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7205__7206);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n));
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n));
}
}
});
var nth__3 = (function (coll,n,not_found){
if(!((coll == null)))
{if((function (){var G__7208__7209 = coll;
if(G__7208__7209)
{if((function (){var or__3824__auto____7210 = (G__7208__7209.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7210)
{return or__3824__auto____7210;
} else
{return G__7208__7209.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7208__7209.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7208__7209);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7208__7209);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n),not_found);
}
} else
{return not_found;
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
nth.cljs$lang$arity$2 = nth__2;
nth.cljs$lang$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get.cljs$lang$arity$2 = get__2;
get.cljs$lang$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__4 = (function() { 
var G__7213__delegate = function (coll,k,v,kvs){
while(true){
var ret__7212 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__7214 = ret__7212;
var G__7215 = cljs.core.first.call(null,kvs);
var G__7216 = cljs.core.second.call(null,kvs);
var G__7217 = cljs.core.nnext.call(null,kvs);
coll = G__7214;
k = G__7215;
v = G__7216;
kvs = G__7217;
continue;
}
} else
{return ret__7212;
}
break;
}
};
var G__7213 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7213__delegate.call(this, coll, k, v, kvs);
};
G__7213.cljs$lang$maxFixedArity = 3;
G__7213.cljs$lang$applyTo = (function (arglist__7218){
var coll = cljs.core.first(arglist__7218);
var k = cljs.core.first(cljs.core.next(arglist__7218));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7218)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7218)));
return G__7213__delegate(coll, k, v, kvs);
});
G__7213.cljs$lang$arity$variadic = G__7213__delegate;
return G__7213;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$lang$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$lang$arity$3 = assoc__3;
assoc.cljs$lang$arity$variadic = assoc__4.cljs$lang$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3 = (function() { 
var G__7221__delegate = function (coll,k,ks){
while(true){
var ret__7220 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__7222 = ret__7220;
var G__7223 = cljs.core.first.call(null,ks);
var G__7224 = cljs.core.next.call(null,ks);
coll = G__7222;
k = G__7223;
ks = G__7224;
continue;
}
} else
{return ret__7220;
}
break;
}
};
var G__7221 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7221__delegate.call(this, coll, k, ks);
};
G__7221.cljs$lang$maxFixedArity = 2;
G__7221.cljs$lang$applyTo = (function (arglist__7225){
var coll = cljs.core.first(arglist__7225);
var k = cljs.core.first(cljs.core.next(arglist__7225));
var ks = cljs.core.rest(cljs.core.next(arglist__7225));
return G__7221__delegate(coll, k, ks);
});
G__7221.cljs$lang$arity$variadic = G__7221__delegate;
return G__7221;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$lang$arity$1 = dissoc__1;
dissoc.cljs$lang$arity$2 = dissoc__2;
dissoc.cljs$lang$arity$variadic = dissoc__3.cljs$lang$arity$variadic;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if((function (){var G__7229__7230 = o;
if(G__7229__7230)
{if((function (){var or__3824__auto____7231 = (G__7229__7230.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____7231)
{return or__3824__auto____7231;
} else
{return G__7229__7230.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__7229__7230.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__7229__7230);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__7229__7230);
}
})())
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3 = (function() { 
var G__7234__delegate = function (coll,k,ks){
while(true){
var ret__7233 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__7235 = ret__7233;
var G__7236 = cljs.core.first.call(null,ks);
var G__7237 = cljs.core.next.call(null,ks);
coll = G__7235;
k = G__7236;
ks = G__7237;
continue;
}
} else
{return ret__7233;
}
break;
}
};
var G__7234 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7234__delegate.call(this, coll, k, ks);
};
G__7234.cljs$lang$maxFixedArity = 2;
G__7234.cljs$lang$applyTo = (function (arglist__7238){
var coll = cljs.core.first(arglist__7238);
var k = cljs.core.first(cljs.core.next(arglist__7238));
var ks = cljs.core.rest(cljs.core.next(arglist__7238));
return G__7234__delegate(coll, k, ks);
});
G__7234.cljs$lang$arity$variadic = G__7234__delegate;
return G__7234;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$lang$arity$1 = disj__1;
disj.cljs$lang$arity$2 = disj__2;
disj.cljs$lang$arity$variadic = disj__3.cljs$lang$arity$variadic;
return disj;
})()
;
cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){
var h__7240 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__7240);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__7240;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__7242 = (cljs.core.string_hash_cache[k]);
if(!((h__7242 == null)))
{return h__7242;
} else
{return cljs.core.add_to_string_hash_cache.call(null,k);
}
});
cljs.core.hash = (function() {
var hash = null;
var hash__1 = (function (o){
return hash.call(null,o,true);
});
var hash__2 = (function (o,check_cache){
if((function (){var and__3822__auto____7244 = goog.isString(o);
if(and__3822__auto____7244)
{return check_cache;
} else
{return and__3822__auto____7244;
}
})())
{return cljs.core.check_string_hash_cache.call(null,o);
} else
{return cljs.core._hash.call(null,o);
}
});
hash = function(o,check_cache){
switch(arguments.length){
case 1:
return hash__1.call(this,o);
case 2:
return hash__2.call(this,o,check_cache);
}
throw('Invalid arity: ' + arguments.length);
};
hash.cljs$lang$arity$1 = hash__1;
hash.cljs$lang$arity$2 = hash__2;
return hash;
})()
;
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if((x == null))
{return false;
} else
{var G__7248__7249 = x;
if(G__7248__7249)
{if((function (){var or__3824__auto____7250 = (G__7248__7249.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____7250)
{return or__3824__auto____7250;
} else
{return G__7248__7249.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__7248__7249.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__7248__7249);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__7248__7249);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if((x == null))
{return false;
} else
{var G__7254__7255 = x;
if(G__7254__7255)
{if((function (){var or__3824__auto____7256 = (G__7254__7255.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____7256)
{return or__3824__auto____7256;
} else
{return G__7254__7255.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__7254__7255.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__7254__7255);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__7254__7255);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__7260__7261 = x;
if(G__7260__7261)
{if((function (){var or__3824__auto____7262 = (G__7260__7261.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____7262)
{return or__3824__auto____7262;
} else
{return G__7260__7261.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__7260__7261.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__7260__7261);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__7260__7261);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__7266__7267 = x;
if(G__7266__7267)
{if((function (){var or__3824__auto____7268 = (G__7266__7267.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____7268)
{return or__3824__auto____7268;
} else
{return G__7266__7267.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__7266__7267.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__7266__7267);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__7266__7267);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__7272__7273 = x;
if(G__7272__7273)
{if((function (){var or__3824__auto____7274 = (G__7272__7273.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____7274)
{return or__3824__auto____7274;
} else
{return G__7272__7273.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__7272__7273.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__7272__7273);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__7272__7273);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__7278__7279 = x;
if(G__7278__7279)
{if((function (){var or__3824__auto____7280 = (G__7278__7279.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7280)
{return or__3824__auto____7280;
} else
{return G__7278__7279.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7278__7279.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7278__7279);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7278__7279);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__7284__7285 = x;
if(G__7284__7285)
{if((function (){var or__3824__auto____7286 = (G__7284__7285.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7286)
{return or__3824__auto____7286;
} else
{return G__7284__7285.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7284__7285.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7284__7285);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7284__7285);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__7290__7291 = x;
if(G__7290__7291)
{if((function (){var or__3824__auto____7292 = (G__7290__7291.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____7292)
{return or__3824__auto____7292;
} else
{return G__7290__7291.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__7290__7291.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__7290__7291);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__7290__7291);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__7296__7297 = x;
if(G__7296__7297)
{if((function (){var or__3824__auto____7298 = (G__7296__7297.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____7298)
{return or__3824__auto____7298;
} else
{return G__7296__7297.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__7296__7297.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__7296__7297);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__7296__7297);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__7302__7303 = x;
if(G__7302__7303)
{if(cljs.core.truth_((function (){var or__3824__auto____7304 = null;
if(cljs.core.truth_(or__3824__auto____7304))
{return or__3824__auto____7304;
} else
{return G__7302__7303.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__7302__7303.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__7302__7303);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__7302__7303);
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){
return {};
});
var js_obj__1 = (function() { 
var G__7305__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__7305 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7305__delegate.call(this, keyvals);
};
G__7305.cljs$lang$maxFixedArity = 0;
G__7305.cljs$lang$applyTo = (function (arglist__7306){
var keyvals = cljs.core.seq(arglist__7306);;
return G__7305__delegate(keyvals);
});
G__7305.cljs$lang$arity$variadic = G__7305__delegate;
return G__7305;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$lang$arity$variadic(falsecljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$lang$arity$0 = js_obj__0;
js_obj.cljs$lang$arity$variadic = js_obj__1.cljs$lang$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){
var keys__7308 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__7308.push(key);
}));
return keys__7308;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__7312 = i;
var j__7313 = j;
var len__7314 = len;
while(true){
if((len__7314 === 0))
{return to;
} else
{(to[j__7313] = (from[i__7312]));
{
var G__7315 = (i__7312 + 1);
var G__7316 = (j__7313 + 1);
var G__7317 = (len__7314 - 1);
i__7312 = G__7315;
j__7313 = G__7316;
len__7314 = G__7317;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__7321 = (i + (len - 1));
var j__7322 = (j + (len - 1));
var len__7323 = len;
while(true){
if((len__7323 === 0))
{return to;
} else
{(to[j__7322] = (from[i__7321]));
{
var G__7324 = (i__7321 - 1);
var G__7325 = (j__7322 - 1);
var G__7326 = (len__7323 - 1);
i__7321 = G__7324;
j__7322 = G__7325;
len__7323 = G__7326;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = {};
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if((s == null))
{return false;
} else
{var G__7330__7331 = s;
if(G__7330__7331)
{if((function (){var or__3824__auto____7332 = (G__7330__7331.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7332)
{return or__3824__auto____7332;
} else
{return G__7330__7331.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7330__7331.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7330__7331);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7330__7331);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__7336__7337 = s;
if(G__7336__7337)
{if((function (){var or__3824__auto____7338 = (G__7336__7337.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____7338)
{return or__3824__auto____7338;
} else
{return G__7336__7337.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__7336__7337.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__7336__7337);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__7336__7337);
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3822__auto____7341 = goog.isString(x);
if(and__3822__auto____7341)
{return !((function (){var or__3824__auto____7342 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____7342)
{return or__3824__auto____7342;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____7341;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____7344 = goog.isString(x);
if(and__3822__auto____7344)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____7344;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____7346 = goog.isString(x);
if(and__3822__auto____7346)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____7346;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____7351 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____7351)
{return or__3824__auto____7351;
} else
{var G__7352__7353 = f;
if(G__7352__7353)
{if((function (){var or__3824__auto____7354 = (G__7352__7353.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____7354)
{return or__3824__auto____7354;
} else
{return G__7352__7353.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__7352__7353.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__7352__7353);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__7352__7353);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____7356 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____7356)
{return (n == n.toFixed());
} else
{return and__3822__auto____7356;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3822__auto____7359 = coll;
if(cljs.core.truth_(and__3822__auto____7359))
{var and__3822__auto____7360 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____7360)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____7360;
}
} else
{return and__3822__auto____7359;
}
})()))
{return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.call(null,coll,k)], true);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3 = (function() { 
var G__7369__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__7365 = cljs.core.set([y,x]);
var xs__7366 = more;
while(true){
var x__7367 = cljs.core.first.call(null,xs__7366);
var etc__7368 = cljs.core.next.call(null,xs__7366);
if(cljs.core.truth_(xs__7366))
{if(cljs.core.contains_QMARK_.call(null,s__7365,x__7367))
{return false;
} else
{{
var G__7370 = cljs.core.conj.call(null,s__7365,x__7367);
var G__7371 = etc__7368;
s__7365 = G__7370;
xs__7366 = G__7371;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__7369 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7369__delegate.call(this, x, y, more);
};
G__7369.cljs$lang$maxFixedArity = 2;
G__7369.cljs$lang$applyTo = (function (arglist__7372){
var x = cljs.core.first(arglist__7372);
var y = cljs.core.first(cljs.core.next(arglist__7372));
var more = cljs.core.rest(cljs.core.next(arglist__7372));
return G__7369__delegate(x, y, more);
});
G__7369.cljs$lang$arity$variadic = G__7369__delegate;
return G__7369;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$lang$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$lang$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$lang$arity$variadic = distinct_QMARK___3.cljs$lang$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){
if((x === y))
{return 0;
} else
{if((x == null))
{return -1;
} else
{if((y == null))
{return 1;
} else
{if((cljs.core.type.call(null,x) === cljs.core.type.call(null,y)))
{if((function (){var G__7376__7377 = x;
if(G__7376__7377)
{if(cljs.core.truth_((function (){var or__3824__auto____7378 = null;
if(cljs.core.truth_(or__3824__auto____7378))
{return or__3824__auto____7378;
} else
{return G__7376__7377.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__7376__7377.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__7376__7377);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__7376__7377);
}
})())
{return cljs.core._compare.call(null,x,y);
} else
{return goog.array.defaultCompare(x,y);
}
} else
{if("\uFDD0'else")
{throw (new Error("compare on non-nil objects of different types"));
} else
{return null;
}
}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){
var xl__7383 = cljs.core.count.call(null,xs);
var yl__7384 = cljs.core.count.call(null,ys);
if((xl__7383 < yl__7384))
{return -1;
} else
{if((xl__7383 > yl__7384))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__7383,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__7385 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____7386 = (d__7385 === 0);
if(and__3822__auto____7386)
{return ((n + 1) < len);
} else
{return and__3822__auto____7386;
}
})())
{{
var G__7387 = xs;
var G__7388 = ys;
var G__7389 = len;
var G__7390 = (n + 1);
xs = G__7387;
ys = G__7388;
len = G__7389;
n = G__7390;
continue;
}
} else
{return d__7385;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw('Invalid arity: ' + arguments.length);
};
compare_indexed.cljs$lang$arity$2 = compare_indexed__2;
compare_indexed.cljs$lang$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core._EQ_.call(null,f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__7392 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__7392))
{return r__7392;
} else
{if(cljs.core.truth_(r__7392))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
void 0;
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.seq.call(null,coll))
{var a__7394 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__7394,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__7394);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort.cljs$lang$arity$1 = sort__1;
sort.cljs$lang$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort_by.cljs$lang$arity$2 = sort_by__2;
sort_by.cljs$lang$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__3971__auto____7400 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____7400)
{var s__7401 = temp__3971__auto____7400;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__7401),cljs.core.next.call(null,s__7401));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__7402 = val;
var coll__7403 = cljs.core.seq.call(null,coll);
while(true){
if(coll__7403)
{var nval__7404 = f.call(null,val__7402,cljs.core.first.call(null,coll__7403));
if(cljs.core.reduced_QMARK_.call(null,nval__7404))
{return cljs.core.deref.call(null,nval__7404);
} else
{{
var G__7405 = nval__7404;
var G__7406 = cljs.core.next.call(null,coll__7403);
val__7402 = G__7405;
coll__7403 = G__7406;
continue;
}
}
} else
{return val__7402;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
seq_reduce.cljs$lang$arity$2 = seq_reduce__2;
seq_reduce.cljs$lang$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
void 0;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){
var a__7408 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__7408);
return cljs.core.vec.call(null,a__7408);
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){
if((function (){var G__7415__7416 = coll;
if(G__7415__7416)
{if((function (){var or__3824__auto____7417 = (G__7415__7416.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7417)
{return or__3824__auto____7417;
} else
{return G__7415__7416.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7415__7416.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7415__7416);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7415__7416);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__7418__7419 = coll;
if(G__7418__7419)
{if((function (){var or__3824__auto____7420 = (G__7418__7419.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7420)
{return or__3824__auto____7420;
} else
{return G__7418__7419.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7418__7419.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7418__7419);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7418__7419);
}
})())
{return cljs.core._reduce.call(null,coll,f,val);
} else
{return cljs.core.seq_reduce.call(null,f,val,coll);
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reduce.cljs$lang$arity$2 = reduce__2;
reduce.cljs$lang$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){
return cljs.core._kv_reduce.call(null,coll,f,init);
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__7421 = this;
return this__7421.val;
});
cljs.core.Reduced;
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return cljs.core.instance_QMARK_.call(null,cljs.core.Reduced,r);
});
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){
return (new cljs.core.Reduced(x));
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return 0;
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() { 
var G__7422__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__7422 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7422__delegate.call(this, x, y, more);
};
G__7422.cljs$lang$maxFixedArity = 2;
G__7422.cljs$lang$applyTo = (function (arglist__7423){
var x = cljs.core.first(arglist__7423);
var y = cljs.core.first(cljs.core.next(arglist__7423));
var more = cljs.core.rest(cljs.core.next(arglist__7423));
return G__7422__delegate(x, y, more);
});
G__7422.cljs$lang$arity$variadic = G__7422__delegate;
return G__7422;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$lang$arity$0 = _PLUS___0;
_PLUS_.cljs$lang$arity$1 = _PLUS___1;
_PLUS_.cljs$lang$arity$2 = _PLUS___2;
_PLUS_.cljs$lang$arity$variadic = _PLUS___3.cljs$lang$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() { 
var G__7424__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__7424 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7424__delegate.call(this, x, y, more);
};
G__7424.cljs$lang$maxFixedArity = 2;
G__7424.cljs$lang$applyTo = (function (arglist__7425){
var x = cljs.core.first(arglist__7425);
var y = cljs.core.first(cljs.core.next(arglist__7425));
var more = cljs.core.rest(cljs.core.next(arglist__7425));
return G__7424__delegate(x, y, more);
});
G__7424.cljs$lang$arity$variadic = G__7424__delegate;
return G__7424;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$lang$arity$1 = ___1;
_.cljs$lang$arity$2 = ___2;
_.cljs$lang$arity$variadic = ___3.cljs$lang$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return 1;
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() { 
var G__7426__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__7426 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7426__delegate.call(this, x, y, more);
};
G__7426.cljs$lang$maxFixedArity = 2;
G__7426.cljs$lang$applyTo = (function (arglist__7427){
var x = cljs.core.first(arglist__7427);
var y = cljs.core.first(cljs.core.next(arglist__7427));
var more = cljs.core.rest(cljs.core.next(arglist__7427));
return G__7426__delegate(x, y, more);
});
G__7426.cljs$lang$arity$variadic = G__7426__delegate;
return G__7426;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$lang$arity$0 = _STAR___0;
_STAR_.cljs$lang$arity$1 = _STAR___1;
_STAR_.cljs$lang$arity$2 = _STAR___2;
_STAR_.cljs$lang$arity$variadic = _STAR___3.cljs$lang$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__7428__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__7428 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7428__delegate.call(this, x, y, more);
};
G__7428.cljs$lang$maxFixedArity = 2;
G__7428.cljs$lang$applyTo = (function (arglist__7429){
var x = cljs.core.first(arglist__7429);
var y = cljs.core.first(cljs.core.next(arglist__7429));
var more = cljs.core.rest(cljs.core.next(arglist__7429));
return G__7428__delegate(x, y, more);
});
G__7428.cljs$lang$arity$variadic = G__7428__delegate;
return G__7428;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$lang$arity$1 = _SLASH___1;
_SLASH_.cljs$lang$arity$2 = _SLASH___2;
_SLASH_.cljs$lang$arity$variadic = _SLASH___3.cljs$lang$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() { 
var G__7430__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__7431 = y;
var G__7432 = cljs.core.first.call(null,more);
var G__7433 = cljs.core.next.call(null,more);
x = G__7431;
y = G__7432;
more = G__7433;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7430 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7430__delegate.call(this, x, y, more);
};
G__7430.cljs$lang$maxFixedArity = 2;
G__7430.cljs$lang$applyTo = (function (arglist__7434){
var x = cljs.core.first(arglist__7434);
var y = cljs.core.first(cljs.core.next(arglist__7434));
var more = cljs.core.rest(cljs.core.next(arglist__7434));
return G__7430__delegate(x, y, more);
});
G__7430.cljs$lang$arity$variadic = G__7430__delegate;
return G__7430;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$lang$arity$1 = _LT___1;
_LT_.cljs$lang$arity$2 = _LT___2;
_LT_.cljs$lang$arity$variadic = _LT___3.cljs$lang$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__7435__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__7436 = y;
var G__7437 = cljs.core.first.call(null,more);
var G__7438 = cljs.core.next.call(null,more);
x = G__7436;
y = G__7437;
more = G__7438;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7435 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7435__delegate.call(this, x, y, more);
};
G__7435.cljs$lang$maxFixedArity = 2;
G__7435.cljs$lang$applyTo = (function (arglist__7439){
var x = cljs.core.first(arglist__7439);
var y = cljs.core.first(cljs.core.next(arglist__7439));
var more = cljs.core.rest(cljs.core.next(arglist__7439));
return G__7435__delegate(x, y, more);
});
G__7435.cljs$lang$arity$variadic = G__7435__delegate;
return G__7435;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$lang$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$lang$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$lang$arity$variadic = _LT__EQ___3.cljs$lang$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() { 
var G__7440__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__7441 = y;
var G__7442 = cljs.core.first.call(null,more);
var G__7443 = cljs.core.next.call(null,more);
x = G__7441;
y = G__7442;
more = G__7443;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7440 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7440__delegate.call(this, x, y, more);
};
G__7440.cljs$lang$maxFixedArity = 2;
G__7440.cljs$lang$applyTo = (function (arglist__7444){
var x = cljs.core.first(arglist__7444);
var y = cljs.core.first(cljs.core.next(arglist__7444));
var more = cljs.core.rest(cljs.core.next(arglist__7444));
return G__7440__delegate(x, y, more);
});
G__7440.cljs$lang$arity$variadic = G__7440__delegate;
return G__7440;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$lang$arity$1 = _GT___1;
_GT_.cljs$lang$arity$2 = _GT___2;
_GT_.cljs$lang$arity$variadic = _GT___3.cljs$lang$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__7445__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__7446 = y;
var G__7447 = cljs.core.first.call(null,more);
var G__7448 = cljs.core.next.call(null,more);
x = G__7446;
y = G__7447;
more = G__7448;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7445 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7445__delegate.call(this, x, y, more);
};
G__7445.cljs$lang$maxFixedArity = 2;
G__7445.cljs$lang$applyTo = (function (arglist__7449){
var x = cljs.core.first(arglist__7449);
var y = cljs.core.first(cljs.core.next(arglist__7449));
var more = cljs.core.rest(cljs.core.next(arglist__7449));
return G__7445__delegate(x, y, more);
});
G__7445.cljs$lang$arity$variadic = G__7445__delegate;
return G__7445;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$lang$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$lang$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$lang$arity$variadic = _GT__EQ___3.cljs$lang$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3 = (function() { 
var G__7450__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__7450 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7450__delegate.call(this, x, y, more);
};
G__7450.cljs$lang$maxFixedArity = 2;
G__7450.cljs$lang$applyTo = (function (arglist__7451){
var x = cljs.core.first(arglist__7451);
var y = cljs.core.first(cljs.core.next(arglist__7451));
var more = cljs.core.rest(cljs.core.next(arglist__7451));
return G__7450__delegate(x, y, more);
});
G__7450.cljs$lang$arity$variadic = G__7450__delegate;
return G__7450;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$lang$arity$1 = max__1;
max.cljs$lang$arity$2 = max__2;
max.cljs$lang$arity$variadic = max__3.cljs$lang$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3 = (function() { 
var G__7452__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__7452 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7452__delegate.call(this, x, y, more);
};
G__7452.cljs$lang$maxFixedArity = 2;
G__7452.cljs$lang$applyTo = (function (arglist__7453){
var x = cljs.core.first(arglist__7453);
var y = cljs.core.first(cljs.core.next(arglist__7453));
var more = cljs.core.rest(cljs.core.next(arglist__7453));
return G__7452__delegate(x, y, more);
});
G__7452.cljs$lang$arity$variadic = G__7452__delegate;
return G__7452;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$lang$arity$1 = min__1;
min.cljs$lang$arity$2 = min__2;
min.cljs$lang$arity$variadic = min__3.cljs$lang$arity$variadic;
return min;
})()
;
cljs.core.fix = (function fix(q){
if((q >= 0))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){
return cljs.core.fix.call(null,x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){
return cljs.core.fix.call(null,x);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__7455 = (n % d);
return cljs.core.fix.call(null,((n - rem__7455) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__7457 = cljs.core.quot.call(null,n,d);
return (n - (d * q__7457));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return Math.random.call(null);
});
var rand__1 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){
var v__7460 = (v - ((v >> 1) & 1431655765));
var v__7461 = ((v__7460 & 858993459) + ((v__7460 >> 2) & 858993459));
return ((((v__7461 + (v__7461 >> 4)) & 252645135) * 16843009) >> 24);
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3 = (function() { 
var G__7462__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__7463 = y;
var G__7464 = cljs.core.first.call(null,more);
var G__7465 = cljs.core.next.call(null,more);
x = G__7463;
y = G__7464;
more = G__7465;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7462 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7462__delegate.call(this, x, y, more);
};
G__7462.cljs$lang$maxFixedArity = 2;
G__7462.cljs$lang$applyTo = (function (arglist__7466){
var x = cljs.core.first(arglist__7466);
var y = cljs.core.first(cljs.core.next(arglist__7466));
var more = cljs.core.rest(cljs.core.next(arglist__7466));
return G__7462__delegate(x, y, more);
});
G__7462.cljs$lang$arity$variadic = G__7462__delegate;
return G__7462;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$lang$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$lang$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$lang$arity$variadic = _EQ__EQ___3.cljs$lang$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__7470 = n;
var xs__7471 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7472 = xs__7471;
if(and__3822__auto____7472)
{return (n__7470 > 0);
} else
{return and__3822__auto____7472;
}
})()))
{{
var G__7473 = (n__7470 - 1);
var G__7474 = cljs.core.next.call(null,xs__7471);
n__7470 = G__7473;
xs__7471 = G__7474;
continue;
}
} else
{return xs__7471;
}
break;
}
});
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___0 = (function (){
return "";
});
var str_STAR___1 = (function (x){
if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2 = (function() { 
var G__7475__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7476 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__7477 = cljs.core.next.call(null,more);
sb = G__7476;
more = G__7477;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__7475 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7475__delegate.call(this, x, ys);
};
G__7475.cljs$lang$maxFixedArity = 1;
G__7475.cljs$lang$applyTo = (function (arglist__7478){
var x = cljs.core.first(arglist__7478);
var ys = cljs.core.rest(arglist__7478);
return G__7475__delegate(x, ys);
});
G__7475.cljs$lang$arity$variadic = G__7475__delegate;
return G__7475;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str_STAR___0.call(this);
case 1:
return str_STAR___1.call(this,x);
default:
return str_STAR___2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2.cljs$lang$applyTo;
str_STAR_.cljs$lang$arity$0 = str_STAR___0;
str_STAR_.cljs$lang$arity$1 = str_STAR___1;
str_STAR_.cljs$lang$arity$variadic = str_STAR___2.cljs$lang$arity$variadic;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if(cljs.core.symbol_QMARK_.call(null,x))
{return x.substring(2,x.length);
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2 = (function() { 
var G__7479__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7480 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__7481 = cljs.core.next.call(null,more);
sb = G__7480;
more = G__7481;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__7479 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7479__delegate.call(this, x, ys);
};
G__7479.cljs$lang$maxFixedArity = 1;
G__7479.cljs$lang$applyTo = (function (arglist__7482){
var x = cljs.core.first(arglist__7482);
var ys = cljs.core.rest(arglist__7482);
return G__7479__delegate(x, ys);
});
G__7479.cljs$lang$arity$variadic = G__7479__delegate;
return G__7479;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$lang$arity$0 = str__0;
str.cljs$lang$arity$1 = str__1;
str.cljs$lang$arity$variadic = str__2.cljs$lang$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subs.cljs$lang$arity$2 = subs__2;
subs.cljs$lang$arity$3 = subs__3;
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if(cljs.core.symbol_QMARK_.call(null,name))
{name;
} else
{if(cljs.core.keyword_QMARK_.call(null,name))
{cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
});
var symbol__2 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
symbol.cljs$lang$arity$1 = symbol__1;
symbol.cljs$lang$arity$2 = symbol__2;
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if(cljs.core.keyword_QMARK_.call(null,name))
{return name;
} else
{if(cljs.core.symbol_QMARK_.call(null,name))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if("\uFDD0'else")
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
keyword.cljs$lang$arity$1 = keyword__1;
keyword.cljs$lang$arity$2 = keyword__2;
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__7485 = cljs.core.seq.call(null,x);
var ys__7486 = cljs.core.seq.call(null,y);
while(true){
if((xs__7485 == null))
{return (ys__7486 == null);
} else
{if((ys__7486 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__7485),cljs.core.first.call(null,ys__7486)))
{{
var G__7487 = cljs.core.next.call(null,xs__7485);
var G__7488 = cljs.core.next.call(null,ys__7486);
xs__7485 = G__7487;
ys__7486 = G__7488;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__7489_SHARP_,p2__7490_SHARP_){
return cljs.core.hash_combine.call(null,p1__7489_SHARP_,cljs.core.hash.call(null,p2__7490_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
void 0;
void 0;
cljs.core.hash_imap = (function hash_imap(m){
var h__7494 = 0;
var s__7495 = cljs.core.seq.call(null,m);
while(true){
if(s__7495)
{var e__7496 = cljs.core.first.call(null,s__7495);
{
var G__7497 = ((h__7494 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__7496)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__7496)))) % 4503599627370496);
var G__7498 = cljs.core.next.call(null,s__7495);
h__7494 = G__7497;
s__7495 = G__7498;
continue;
}
} else
{return h__7494;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__7502 = 0;
var s__7503 = cljs.core.seq.call(null,s);
while(true){
if(s__7503)
{var e__7504 = cljs.core.first.call(null,s__7503);
{
var G__7505 = ((h__7502 + cljs.core.hash.call(null,e__7504)) % 4503599627370496);
var G__7506 = cljs.core.next.call(null,s__7503);
h__7502 = G__7505;
s__7503 = G__7506;
continue;
}
} else
{return h__7502;
}
break;
}
});
void 0;
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__7527__7528 = cljs.core.seq.call(null,fn_map);
if(G__7527__7528)
{var G__7530__7532 = cljs.core.first.call(null,G__7527__7528);
var vec__7531__7533 = G__7530__7532;
var key_name__7534 = cljs.core.nth.call(null,vec__7531__7533,0,null);
var f__7535 = cljs.core.nth.call(null,vec__7531__7533,1,null);
var G__7527__7536 = G__7527__7528;
var G__7530__7537 = G__7530__7532;
var G__7527__7538 = G__7527__7536;
while(true){
var vec__7539__7540 = G__7530__7537;
var key_name__7541 = cljs.core.nth.call(null,vec__7539__7540,0,null);
var f__7542 = cljs.core.nth.call(null,vec__7539__7540,1,null);
var G__7527__7543 = G__7527__7538;
var str_name__7544 = cljs.core.name.call(null,key_name__7541);
(obj[str_name__7544] = f__7542);
var temp__3974__auto____7545 = cljs.core.next.call(null,G__7527__7543);
if(temp__3974__auto____7545)
{var G__7527__7546 = temp__3974__auto____7545;
{
var G__7547 = cljs.core.first.call(null,G__7527__7546);
var G__7548 = G__7527__7546;
G__7530__7537 = G__7547;
G__7527__7538 = G__7548;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413358;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7549 = this;
var h__2153__auto____7550 = this__7549.__hash;
if(!((h__2153__auto____7550 == null)))
{return h__2153__auto____7550;
} else
{var h__2153__auto____7551 = cljs.core.hash_coll.call(null,coll);
this__7549.__hash = h__2153__auto____7551;
return h__2153__auto____7551;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7552 = this;
if((this__7552.count === 1))
{return null;
} else
{return this__7552.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7553 = this;
return (new cljs.core.List(this__7553.meta,o,coll,(this__7553.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__7554 = this;
var this__7555 = this;
return cljs.core.pr_str.call(null,this__7555);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7556 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7557 = this;
return this__7557.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7558 = this;
return this__7558.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7559 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7560 = this;
return this__7560.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7561 = this;
if((this__7561.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__7561.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7562 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7563 = this;
return (new cljs.core.List(meta,this__7563.first,this__7563.rest,this__7563.count,this__7563.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7564 = this;
return this__7564.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7565 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413326;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7566 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7567 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7568 = this;
return (new cljs.core.List(this__7568.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__7569 = this;
var this__7570 = this;
return cljs.core.pr_str.call(null,this__7570);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7571 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7572 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7573 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7574 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7575 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7576 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7577 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7578 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7579 = this;
return this__7579.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7580 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__7584__7585 = coll;
if(G__7584__7585)
{if((function (){var or__3824__auto____7586 = (G__7584__7585.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____7586)
{return or__3824__auto____7586;
} else
{return G__7584__7585.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__7584__7585.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7584__7585);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7584__7585);
}
});
cljs.core.rseq = (function rseq(coll){
return cljs.core._rseq.call(null,coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
if(cljs.core.reversible_QMARK_.call(null,coll))
{return cljs.core.rseq.call(null,coll);
} else
{return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() {
var list = null;
var list__0 = (function (){
return cljs.core.List.EMPTY;
});
var list__1 = (function (x){
return cljs.core.conj.call(null,cljs.core.List.EMPTY,x);
});
var list__2 = (function (x,y){
return cljs.core.conj.call(null,list.call(null,y),x);
});
var list__3 = (function (x,y,z){
return cljs.core.conj.call(null,list.call(null,y,z),x);
});
var list__4 = (function() { 
var G__7587__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__7587 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7587__delegate.call(this, x, y, z, items);
};
G__7587.cljs$lang$maxFixedArity = 3;
G__7587.cljs$lang$applyTo = (function (arglist__7588){
var x = cljs.core.first(arglist__7588);
var y = cljs.core.first(cljs.core.next(arglist__7588));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7588)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7588)));
return G__7587__delegate(x, y, z, items);
});
G__7587.cljs$lang$arity$variadic = G__7587__delegate;
return G__7587;
})()
;
list = function(x,y,z,var_args){
var items = var_args;
switch(arguments.length){
case 0:
return list__0.call(this);
case 1:
return list__1.call(this,x);
case 2:
return list__2.call(this,x,y);
case 3:
return list__3.call(this,x,y,z);
default:
return list__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
list.cljs$lang$maxFixedArity = 3;
list.cljs$lang$applyTo = list__4.cljs$lang$applyTo;
list.cljs$lang$arity$0 = list__0;
list.cljs$lang$arity$1 = list__1;
list.cljs$lang$arity$2 = list__2;
list.cljs$lang$arity$3 = list__3;
list.cljs$lang$arity$variadic = list__4.cljs$lang$arity$variadic;
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65405164;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7589 = this;
var h__2153__auto____7590 = this__7589.__hash;
if(!((h__2153__auto____7590 == null)))
{return h__2153__auto____7590;
} else
{var h__2153__auto____7591 = cljs.core.hash_coll.call(null,coll);
this__7589.__hash = h__2153__auto____7591;
return h__2153__auto____7591;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7592 = this;
if((this__7592.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__7592.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7593 = this;
return (new cljs.core.Cons(null,o,coll,this__7593.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__7594 = this;
var this__7595 = this;
return cljs.core.pr_str.call(null,this__7595);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7596 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7597 = this;
return this__7597.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7598 = this;
if((this__7598.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__7598.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7599 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7600 = this;
return (new cljs.core.Cons(meta,this__7600.first,this__7600.rest,this__7600.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7601 = this;
return this__7601.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7602 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7602.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____7607 = (coll == null);
if(or__3824__auto____7607)
{return or__3824__auto____7607;
} else
{var G__7608__7609 = coll;
if(G__7608__7609)
{if((function (){var or__3824__auto____7610 = (G__7608__7609.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7610)
{return or__3824__auto____7610;
} else
{return G__7608__7609.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7608__7609.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7608__7609);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7608__7609);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__7614__7615 = x;
if(G__7614__7615)
{if((function (){var or__3824__auto____7616 = (G__7614__7615.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____7616)
{return or__3824__auto____7616;
} else
{return G__7614__7615.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__7614__7615.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7614__7615);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7614__7615);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__7617 = null;
var G__7617__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__7617__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__7617 = function(string,f,start){
switch(arguments.length){
case 2:
return G__7617__2.call(this,string,f);
case 3:
return G__7617__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7617;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__7618 = null;
var G__7618__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__7618__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__7618 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__7618__2.call(this,string,k);
case 3:
return G__7618__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7618;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__7619 = null;
var G__7619__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__7619__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__7619 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__7619__2.call(this,string,n);
case 3:
return G__7619__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7619;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode(o);
}));

/**
* @constructor
*/
cljs.core.Keyword = (function (k){
this.k = k;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1;
})
cljs.core.Keyword.cljs$lang$type = true;
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function (this_sym7622,coll){
var this__7623 = this;
var this_sym7622__7624 = this;
var ___7625 = this_sym7622__7624;
if((coll == null))
{return null;
} else
{var strobj__7626 = coll.strobj;
if((strobj__7626 == null))
{return cljs.core._lookup.call(null,coll,this__7623.k,null);
} else
{return (strobj__7626[this__7623.k]);
}
}
});
cljs.core.Keyword.prototype.apply = (function (this_sym7620,args7621){
var this__7627 = this;
return this_sym7620.call.apply(this_sym7620,[this_sym7620].concat(args7621.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__7636 = null;
var G__7636__2 = (function (this_sym7630,coll){
var this_sym7630__7632 = this;
var this__7633 = this_sym7630__7632;
return cljs.core._lookup.call(null,coll,this__7633.toString(),null);
});
var G__7636__3 = (function (this_sym7631,coll,not_found){
var this_sym7631__7634 = this;
var this__7635 = this_sym7631__7634;
return cljs.core._lookup.call(null,coll,this__7635.toString(),not_found);
});
G__7636 = function(this_sym7631,coll,not_found){
switch(arguments.length){
case 2:
return G__7636__2.call(this,this_sym7631,coll);
case 3:
return G__7636__3.call(this,this_sym7631,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7636;
})()
;
String.prototype.apply = (function (this_sym7628,args7629){
return this_sym7628.call.apply(this_sym7628,[this_sym7628].concat(args7629.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__7638 = lazy_seq.x;
if(lazy_seq.realized)
{return x__7638;
} else
{lazy_seq.x = x__7638.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x,__hash){
this.meta = meta;
this.realized = realized;
this.x = x;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850700;
})
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7639 = this;
var h__2153__auto____7640 = this__7639.__hash;
if(!((h__2153__auto____7640 == null)))
{return h__2153__auto____7640;
} else
{var h__2153__auto____7641 = cljs.core.hash_coll.call(null,coll);
this__7639.__hash = h__2153__auto____7641;
return h__2153__auto____7641;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7642 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7643 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__7644 = this;
var this__7645 = this;
return cljs.core.pr_str.call(null,this__7645);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7646 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7647 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7648 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7649 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7650 = this;
return (new cljs.core.LazySeq(meta,this__7650.realized,this__7650.x,this__7650.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7651 = this;
return this__7651.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7652 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7652.meta);
});
cljs.core.LazySeq;
void 0;

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.ChunkBuffer.cljs$lang$type = true;
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7653 = this;
return this__7653.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__7654 = this;
var ___7655 = this;
(this__7654.buf[this__7654.end] = o);
return this__7654.end = (this__7654.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__7656 = this;
var ___7657 = this;
var ret__7658 = (new cljs.core.ArrayChunk(this__7656.buf,0,this__7656.end));
this__7656.buf = null;
return ret__7658;
});
cljs.core.ChunkBuffer;
cljs.core.chunk_buffer = (function chunk_buffer(capacity){
return (new cljs.core.ChunkBuffer(cljs.core.make_array.call(null,capacity),0));
});

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljs.core.ArrayChunk.cljs$lang$type = true;
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__7659 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__7659.arr[this__7659.off]),(this__7659.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7660 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__7660.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__7661 = this;
if((this__7661.off === this__7661.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__7661.arr,(this__7661.off + 1),this__7661.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__7662 = this;
return (this__7662.arr[(this__7662.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__7663 = this;
if((function (){var and__3822__auto____7664 = (i >= 0);
if(and__3822__auto____7664)
{return (i < (this__7663.end - this__7663.off));
} else
{return and__3822__auto____7664;
}
})())
{return (this__7663.arr[(this__7663.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7665 = this;
return (this__7665.end - this__7665.off);
});
cljs.core.ArrayChunk;
cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){
return array_chunk.call(null,arr,0,arr.length);
});
var array_chunk__2 = (function (arr,off){
return array_chunk.call(null,arr,off,arr.length);
});
var array_chunk__3 = (function (arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw('Invalid arity: ' + arguments.length);
};
array_chunk.cljs$lang$arity$1 = array_chunk__1;
array_chunk.cljs$lang$arity$2 = array_chunk__2;
array_chunk.cljs$lang$arity$3 = array_chunk__3;
return array_chunk;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27656296;
})
cljs.core.ChunkedCons.cljs$lang$type = true;
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__7666 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7667 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7668 = this;
return cljs.core._nth.call(null,this__7668.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7669 = this;
if((cljs.core._count.call(null,this__7669.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__7669.chunk),this__7669.more,this__7669.meta));
} else
{if((this__7669.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__7669.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__7670 = this;
if((this__7670.more == null))
{return null;
} else
{return this__7670.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7671 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__7672 = this;
return (new cljs.core.ChunkedCons(this__7672.chunk,this__7672.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7673 = this;
return this__7673.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__7674 = this;
return this__7674.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__7675 = this;
if((this__7675.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__7675.more;
}
});
cljs.core.ChunkedCons;
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){
if((cljs.core._count.call(null,chunk) === 0))
{return rest;
} else
{return (new cljs.core.ChunkedCons(chunk,rest,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){
return b.add(x);
});
cljs.core.chunk = (function chunk(b){
return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){
return cljs.core._chunked_first.call(null,s);
});
cljs.core.chunk_rest = (function chunk_rest(s){
return cljs.core._chunked_rest.call(null,s);
});
cljs.core.chunk_next = (function chunk_next(s){
if((function (){var G__7679__7680 = s;
if(G__7679__7680)
{if(cljs.core.truth_((function (){var or__3824__auto____7681 = null;
if(cljs.core.truth_(or__3824__auto____7681))
{return or__3824__auto____7681;
} else
{return G__7679__7680.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__7679__7680.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__7679__7680);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__7679__7680);
}
})())
{return cljs.core._chunked_next.call(null,s);
} else
{return cljs.core.seq.call(null,cljs.core._chunked_rest.call(null,s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__7684 = [];
var s__7685 = s;
while(true){
if(cljs.core.seq.call(null,s__7685))
{ary__7684.push(cljs.core.first.call(null,s__7685));
{
var G__7686 = cljs.core.next.call(null,s__7685);
s__7685 = G__7686;
continue;
}
} else
{return ary__7684;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__7690 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__7691 = 0;
var xs__7692 = cljs.core.seq.call(null,coll);
while(true){
if(xs__7692)
{(ret__7690[i__7691] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__7692)));
{
var G__7693 = (i__7691 + 1);
var G__7694 = cljs.core.next.call(null,xs__7692);
i__7691 = G__7693;
xs__7692 = G__7694;
continue;
}
} else
{}
break;
}
return ret__7690;
});
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return long_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("long-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var long_array__2 = (function (size,init_val_or_seq){
var a__7702 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7703 = cljs.core.seq.call(null,init_val_or_seq);
var i__7704 = 0;
var s__7705 = s__7703;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7706 = s__7705;
if(and__3822__auto____7706)
{return (i__7704 < size);
} else
{return and__3822__auto____7706;
}
})()))
{(a__7702[i__7704] = cljs.core.first.call(null,s__7705));
{
var G__7709 = (i__7704 + 1);
var G__7710 = cljs.core.next.call(null,s__7705);
i__7704 = G__7709;
s__7705 = G__7710;
continue;
}
} else
{return a__7702;
}
break;
}
} else
{var n__2492__auto____7707 = size;
var i__7708 = 0;
while(true){
if((i__7708 < n__2492__auto____7707))
{(a__7702[i__7708] = init_val_or_seq);
{
var G__7711 = (i__7708 + 1);
i__7708 = G__7711;
continue;
}
} else
{}
break;
}
return a__7702;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
long_array.cljs$lang$arity$1 = long_array__1;
long_array.cljs$lang$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return double_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("double-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var double_array__2 = (function (size,init_val_or_seq){
var a__7719 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7720 = cljs.core.seq.call(null,init_val_or_seq);
var i__7721 = 0;
var s__7722 = s__7720;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7723 = s__7722;
if(and__3822__auto____7723)
{return (i__7721 < size);
} else
{return and__3822__auto____7723;
}
})()))
{(a__7719[i__7721] = cljs.core.first.call(null,s__7722));
{
var G__7726 = (i__7721 + 1);
var G__7727 = cljs.core.next.call(null,s__7722);
i__7721 = G__7726;
s__7722 = G__7727;
continue;
}
} else
{return a__7719;
}
break;
}
} else
{var n__2492__auto____7724 = size;
var i__7725 = 0;
while(true){
if((i__7725 < n__2492__auto____7724))
{(a__7719[i__7725] = init_val_or_seq);
{
var G__7728 = (i__7725 + 1);
i__7725 = G__7728;
continue;
}
} else
{}
break;
}
return a__7719;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
double_array.cljs$lang$arity$1 = double_array__1;
double_array.cljs$lang$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return object_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("object-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var object_array__2 = (function (size,init_val_or_seq){
var a__7736 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7737 = cljs.core.seq.call(null,init_val_or_seq);
var i__7738 = 0;
var s__7739 = s__7737;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7740 = s__7739;
if(and__3822__auto____7740)
{return (i__7738 < size);
} else
{return and__3822__auto____7740;
}
})()))
{(a__7736[i__7738] = cljs.core.first.call(null,s__7739));
{
var G__7743 = (i__7738 + 1);
var G__7744 = cljs.core.next.call(null,s__7739);
i__7738 = G__7743;
s__7739 = G__7744;
continue;
}
} else
{return a__7736;
}
break;
}
} else
{var n__2492__auto____7741 = size;
var i__7742 = 0;
while(true){
if((i__7742 < n__2492__auto____7741))
{(a__7736[i__7742] = init_val_or_seq);
{
var G__7745 = (i__7742 + 1);
i__7742 = G__7745;
continue;
}
} else
{}
break;
}
return a__7736;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
object_array.cljs$lang$arity$1 = object_array__1;
object_array.cljs$lang$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){
if(cljs.core.counted_QMARK_.call(null,s))
{return cljs.core.count.call(null,s);
} else
{var s__7750 = s;
var i__7751 = n;
var sum__7752 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7753 = (i__7751 > 0);
if(and__3822__auto____7753)
{return cljs.core.seq.call(null,s__7750);
} else
{return and__3822__auto____7753;
}
})()))
{{
var G__7754 = cljs.core.next.call(null,s__7750);
var G__7755 = (i__7751 - 1);
var G__7756 = (sum__7752 + 1);
s__7750 = G__7754;
i__7751 = G__7755;
sum__7752 = G__7756;
continue;
}
} else
{return sum__7752;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){
if((arglist == null))
{return null;
} else
{if((cljs.core.next.call(null,arglist) == null))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if("\uFDD0'else")
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
}),null));
});
var concat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
}),null));
});
var concat__2 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__7761 = cljs.core.seq.call(null,x);
if(s__7761)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__7761))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__7761),concat.call(null,cljs.core.chunk_rest.call(null,s__7761),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__7761),concat.call(null,cljs.core.rest.call(null,s__7761),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__7765__delegate = function (x,y,zs){
var cat__7764 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__7763 = cljs.core.seq.call(null,xys);
if(xys__7763)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__7763))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__7763),cat.call(null,cljs.core.chunk_rest.call(null,xys__7763),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__7763),cat.call(null,cljs.core.rest.call(null,xys__7763),zs));
}
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
}),null));
});
return cat__7764.call(null,concat.call(null,x,y),zs);
};
var G__7765 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7765__delegate.call(this, x, y, zs);
};
G__7765.cljs$lang$maxFixedArity = 2;
G__7765.cljs$lang$applyTo = (function (arglist__7766){
var x = cljs.core.first(arglist__7766);
var y = cljs.core.first(cljs.core.next(arglist__7766));
var zs = cljs.core.rest(cljs.core.next(arglist__7766));
return G__7765__delegate(x, y, zs);
});
G__7765.cljs$lang$arity$variadic = G__7765__delegate;
return G__7765;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$lang$arity$0 = concat__0;
concat.cljs$lang$arity$1 = concat__1;
concat.cljs$lang$arity$2 = concat__2;
concat.cljs$lang$arity$variadic = concat__3.cljs$lang$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___5 = (function() { 
var G__7767__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__7767 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7767__delegate.call(this, a, b, c, d, more);
};
G__7767.cljs$lang$maxFixedArity = 4;
G__7767.cljs$lang$applyTo = (function (arglist__7768){
var a = cljs.core.first(arglist__7768);
var b = cljs.core.first(cljs.core.next(arglist__7768));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7768)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7768))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7768))));
return G__7767__delegate(a, b, c, d, more);
});
G__7767.cljs$lang$arity$variadic = G__7767__delegate;
return G__7767;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$lang$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$lang$arity$1 = list_STAR___1;
list_STAR_.cljs$lang$arity$2 = list_STAR___2;
list_STAR_.cljs$lang$arity$3 = list_STAR___3;
list_STAR_.cljs$lang$arity$4 = list_STAR___4;
list_STAR_.cljs$lang$arity$variadic = list_STAR___5.cljs$lang$arity$variadic;
return list_STAR_;
})()
;
cljs.core.transient$ = (function transient$(coll){
return cljs.core._as_transient.call(null,coll);
});
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return cljs.core._persistent_BANG_.call(null,tcoll);
});
cljs.core.conj_BANG_ = (function conj_BANG_(tcoll,val){
return cljs.core._conj_BANG_.call(null,tcoll,val);
});
cljs.core.assoc_BANG_ = (function assoc_BANG_(tcoll,key,val){
return cljs.core._assoc_BANG_.call(null,tcoll,key,val);
});
cljs.core.dissoc_BANG_ = (function dissoc_BANG_(tcoll,key){
return cljs.core._dissoc_BANG_.call(null,tcoll,key);
});
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){
return cljs.core._pop_BANG_.call(null,tcoll);
});
cljs.core.disj_BANG_ = (function disj_BANG_(tcoll,val){
return cljs.core._disjoin_BANG_.call(null,tcoll,val);
});
void 0;cljs.core.apply_to = (function apply_to(f,argc,args){
var args__7810 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__7811 = cljs.core._first.call(null,args__7810);
var args__7812 = cljs.core._rest.call(null,args__7810);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__7811);
} else
{return f.call(null,a__7811);
}
} else
{var b__7813 = cljs.core._first.call(null,args__7812);
var args__7814 = cljs.core._rest.call(null,args__7812);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__7811,b__7813);
} else
{return f.call(null,a__7811,b__7813);
}
} else
{var c__7815 = cljs.core._first.call(null,args__7814);
var args__7816 = cljs.core._rest.call(null,args__7814);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__7811,b__7813,c__7815);
} else
{return f.call(null,a__7811,b__7813,c__7815);
}
} else
{var d__7817 = cljs.core._first.call(null,args__7816);
var args__7818 = cljs.core._rest.call(null,args__7816);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__7811,b__7813,c__7815,d__7817);
} else
{return f.call(null,a__7811,b__7813,c__7815,d__7817);
}
} else
{var e__7819 = cljs.core._first.call(null,args__7818);
var args__7820 = cljs.core._rest.call(null,args__7818);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__7811,b__7813,c__7815,d__7817,e__7819);
} else
{return f.call(null,a__7811,b__7813,c__7815,d__7817,e__7819);
}
} else
{var f__7821 = cljs.core._first.call(null,args__7820);
var args__7822 = cljs.core._rest.call(null,args__7820);
if((argc === 6))
{if(f__7821.cljs$lang$arity$6)
{return f__7821.cljs$lang$arity$6(a__7811,b__7813,c__7815,d__7817,e__7819,f__7821);
} else
{return f__7821.call(null,a__7811,b__7813,c__7815,d__7817,e__7819,f__7821);
}
} else
{var g__7823 = cljs.core._first.call(null,args__7822);
var args__7824 = cljs.core._rest.call(null,args__7822);
if((argc === 7))
{if(f__7821.cljs$lang$arity$7)
{return f__7821.cljs$lang$arity$7(a__7811,b__7813,c__7815,d__7817,e__7819,f__7821,g__7823);
} else
{return f__7821.call(null,a__7811,b__7813,c__7815,d__7817,e__7819,f__7821,g__7823);
}
} else
{var h__7825 = cljs.core._first.call(null,args__7824);
var args__7826 = cljs.core._rest.call(null,args__7824);
if((argc === 8))
{if(f__7821.cljs$lang$arity$8)
{return f__7821.cljs$lang$arity$8(a__7811,b__7813,c__7815,d__7817,e__7819,f__7821,g__7823,h__7825);
} else
{return f__7821.call(null,a__7811,b__7813,c__7815,d__7817,e__7819,f__7821,g__7823,h__7825);
}
} else
{var i__7827 = cljs.core._first.call(null,args__7826);
var args__7828 = cljs.core._rest.call(null,args__7826);
if((argc === 9))
{if(f__7821.cljs$lang$arity$9)
{return f__7821.cljs$lang$arity$9(a__7811,b__7813,c__7815,d__7817,e__7819,f__7821,g__7823,h__7825,i__7827);
} else
{return f__7821.call(null,a__7811,b__7813,c__7815,d__7817,e__7819,f__7821,g__7823,h__7825,i__7827);
}
} else
{var j__7829 = cljs.core._first.call(null,args__7828);
var args__7830 = cljs.core._rest.call(null,args__7828);
if((argc === 10))
{if(f__7821.cljs$lang$arity$10)
{return f__7821.cljs$lang$arity$10(a__7811,b__7813,c__7815,d__7817,e__7819,f__7821,g__7823,h__7825,i__7827,j__7829);
} else
{return f__7821.call(null,a__7811,b__7813,c__7815,d__7817,e__7819,f__7821,g__7823,h__7825,i__7827,j__7829);
}
} else
{var k__7831 = cljs.core._first.call(null,args__7830);
var args__7832 = cljs.core._rest.call(null,args__7830);
if((argc === 11))
{if(f__7821.cljs$lang$arity$11)
{return f__7821.cljs$lang$arity$11(a__7811,b__7813,c__7815,d__7817,e__7819,f__7821,g__7823,h__7825,i__7827,j__7829,k__7831);
} else
{return f__7821.call(null,a__7811,b__7813,c__7815,d__7817,e__7819,f__7821,g__7823,h__7825,i__7827,j__7829,k__7831);
}
} else
{var l__7833 = cljs.core._first.call(null,args__7832);
var args__7834 = cljs.core._rest.call(null,args__7832);
if((argc === 12))
{if(f__7821.cljs$lang$arity$12)
{return f__7821.cljs$lang$arity$12(a__7811,b__7813,c__7815,d__7817,e__7819,f__7821,g__7823,h__7825,i__7827,j__7829,k__7831,l__7833);
} else
{return f__7821.call(null,a__7811,b__7813,c__7815,d__7817,e__7819,f__7821,g__7823,h__7825,i__7827,j__7829,k__7831,l__7833);
}
} else
{var m__7835 = cljs.core._first.call(null,args__7834);
var args__7836 = cljs.core._rest.call(null,args__7834);
if((argc === 13))
{if(f__7821.cljs$lang$arity$13)
{return f__7821.cljs$lang$arity$13(a__7811,b__7813,c__7815,d__7817,e__7819,f__7821,g__7823,h__7825,i__7827,j__7829,k__7831,l__7833,m__7835);
} else
{return f__7821.call(null,a__7811,b__7813,c__7815,d__7817,e__7819,f__7821,g__7823,h__7825,i__7827,j__7829,k__7831,l__7833,m__7835);
}
} else
{var n__7837 = cljs.core._first.call(null,args__7836);
var args__7838 = cljs.core._rest.call(null,args__7836);
if((argc === 14))
{if(f__7821.cljs$lang$arity$14)
{return f__7821.cljs$lang$arity$14(a__7811,b__7813,c__7815,d__7817,e__7819,f__7821,g__7823,h__7825,i__7827,j__7829,k__7831,l__7833,m__7835,n__7837);
} else
{return f__7821.call(null,a__7811,b__7813,c__7815,d__7817,e__7819,f__7821,g__7823,h__7825,i__7827,j__7829,k__7831,l__7833,m__7835,n__7837);
}
} else
{var o__7839 = cljs.core._first.call(null,args__7838);
var args__7840 = cljs.core._rest.call(null,args__7838);
if((argc === 15))
{if(f__7821.cljs$lang$arity$15)
{return f__7821.cljs$lang$arity$15(a__7811,b__7813,c__7815,d__7817,e__7819,f__7821,g__7823,h__7825,i__7827,j__7829,k__7831,l__7833,m__7835,n__7837,o__7839);
} else
{return f__7821.call(null,a__7811,b__7813,c__7815,d__7817,e__7819,f__7821,g__7823,h__7825,i__7827,j__7829,k__7831,l__7833,m__7835,n__7837,o__7839);
}
} else
{var p__7841 = cljs.core._first.call(null,args__7840);
var args__7842 = cljs.core._rest.call(null,args__7840);
if((argc === 16))
{if(f__7821.cljs$lang$arity$16)
{return f__7821.cljs$lang$arity$16(a__7811,b__7813,c__7815,d__7817,e__7819,f__7821,g__7823,h__7825,i__7827,j__7829,k__7831,l__7833,m__7835,n__7837,o__7839,p__7841);
} else
{return f__7821.call(null,a__7811,b__7813,c__7815,d__7817,e__7819,f__7821,g__7823,h__7825,i__7827,j__7829,k__7831,l__7833,m__7835,n__7837,o__7839,p__7841);
}
} else
{var q__7843 = cljs.core._first.call(null,args__7842);
var args__7844 = cljs.core._rest.call(null,args__7842);
if((argc === 17))
{if(f__7821.cljs$lang$arity$17)
{return f__7821.cljs$lang$arity$17(a__7811,b__7813,c__7815,d__7817,e__7819,f__7821,g__7823,h__7825,i__7827,j__7829,k__7831,l__7833,m__7835,n__7837,o__7839,p__7841,q__7843);
} else
{return f__7821.call(null,a__7811,b__7813,c__7815,d__7817,e__7819,f__7821,g__7823,h__7825,i__7827,j__7829,k__7831,l__7833,m__7835,n__7837,o__7839,p__7841,q__7843);
}
} else
{var r__7845 = cljs.core._first.call(null,args__7844);
var args__7846 = cljs.core._rest.call(null,args__7844);
if((argc === 18))
{if(f__7821.cljs$lang$arity$18)
{return f__7821.cljs$lang$arity$18(a__7811,b__7813,c__7815,d__7817,e__7819,f__7821,g__7823,h__7825,i__7827,j__7829,k__7831,l__7833,m__7835,n__7837,o__7839,p__7841,q__7843,r__7845);
} else
{return f__7821.call(null,a__7811,b__7813,c__7815,d__7817,e__7819,f__7821,g__7823,h__7825,i__7827,j__7829,k__7831,l__7833,m__7835,n__7837,o__7839,p__7841,q__7843,r__7845);
}
} else
{var s__7847 = cljs.core._first.call(null,args__7846);
var args__7848 = cljs.core._rest.call(null,args__7846);
if((argc === 19))
{if(f__7821.cljs$lang$arity$19)
{return f__7821.cljs$lang$arity$19(a__7811,b__7813,c__7815,d__7817,e__7819,f__7821,g__7823,h__7825,i__7827,j__7829,k__7831,l__7833,m__7835,n__7837,o__7839,p__7841,q__7843,r__7845,s__7847);
} else
{return f__7821.call(null,a__7811,b__7813,c__7815,d__7817,e__7819,f__7821,g__7823,h__7825,i__7827,j__7829,k__7831,l__7833,m__7835,n__7837,o__7839,p__7841,q__7843,r__7845,s__7847);
}
} else
{var t__7849 = cljs.core._first.call(null,args__7848);
var args__7850 = cljs.core._rest.call(null,args__7848);
if((argc === 20))
{if(f__7821.cljs$lang$arity$20)
{return f__7821.cljs$lang$arity$20(a__7811,b__7813,c__7815,d__7817,e__7819,f__7821,g__7823,h__7825,i__7827,j__7829,k__7831,l__7833,m__7835,n__7837,o__7839,p__7841,q__7843,r__7845,s__7847,t__7849);
} else
{return f__7821.call(null,a__7811,b__7813,c__7815,d__7817,e__7819,f__7821,g__7823,h__7825,i__7827,j__7829,k__7831,l__7833,m__7835,n__7837,o__7839,p__7841,q__7843,r__7845,s__7847,t__7849);
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
void 0;/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity__7865 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7866 = cljs.core.bounded_count.call(null,args,(fixed_arity__7865 + 1));
if((bc__7866 <= fixed_arity__7865))
{return cljs.core.apply_to.call(null,f,bc__7866,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__7867 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__7868 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7869 = cljs.core.bounded_count.call(null,arglist__7867,(fixed_arity__7868 + 1));
if((bc__7869 <= fixed_arity__7868))
{return cljs.core.apply_to.call(null,f,bc__7869,arglist__7867);
} else
{return f.cljs$lang$applyTo(arglist__7867);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7867));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__7870 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__7871 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7872 = cljs.core.bounded_count.call(null,arglist__7870,(fixed_arity__7871 + 1));
if((bc__7872 <= fixed_arity__7871))
{return cljs.core.apply_to.call(null,f,bc__7872,arglist__7870);
} else
{return f.cljs$lang$applyTo(arglist__7870);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7870));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__7873 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__7874 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7875 = cljs.core.bounded_count.call(null,arglist__7873,(fixed_arity__7874 + 1));
if((bc__7875 <= fixed_arity__7874))
{return cljs.core.apply_to.call(null,f,bc__7875,arglist__7873);
} else
{return f.cljs$lang$applyTo(arglist__7873);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7873));
}
});
var apply__6 = (function() { 
var G__7879__delegate = function (f,a,b,c,d,args){
var arglist__7876 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__7877 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7878 = cljs.core.bounded_count.call(null,arglist__7876,(fixed_arity__7877 + 1));
if((bc__7878 <= fixed_arity__7877))
{return cljs.core.apply_to.call(null,f,bc__7878,arglist__7876);
} else
{return f.cljs$lang$applyTo(arglist__7876);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7876));
}
};
var G__7879 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__7879__delegate.call(this, f, a, b, c, d, args);
};
G__7879.cljs$lang$maxFixedArity = 5;
G__7879.cljs$lang$applyTo = (function (arglist__7880){
var f = cljs.core.first(arglist__7880);
var a = cljs.core.first(cljs.core.next(arglist__7880));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7880)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7880))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7880)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7880)))));
return G__7879__delegate(f, a, b, c, d, args);
});
G__7879.cljs$lang$arity$variadic = G__7879__delegate;
return G__7879;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$lang$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$lang$arity$2 = apply__2;
apply.cljs$lang$arity$3 = apply__3;
apply.cljs$lang$arity$4 = apply__4;
apply.cljs$lang$arity$5 = apply__5;
apply.cljs$lang$arity$variadic = apply__6.cljs$lang$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__7881){
var obj = cljs.core.first(arglist__7881);
var f = cljs.core.first(cljs.core.next(arglist__7881));
var args = cljs.core.rest(cljs.core.next(arglist__7881));
return vary_meta__delegate(obj, f, args);
});
vary_meta.cljs$lang$arity$variadic = vary_meta__delegate;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3 = (function() { 
var G__7882__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__7882 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7882__delegate.call(this, x, y, more);
};
G__7882.cljs$lang$maxFixedArity = 2;
G__7882.cljs$lang$applyTo = (function (arglist__7883){
var x = cljs.core.first(arglist__7883);
var y = cljs.core.first(cljs.core.next(arglist__7883));
var more = cljs.core.rest(cljs.core.next(arglist__7883));
return G__7882__delegate(x, y, more);
});
G__7882.cljs$lang$arity$variadic = G__7882__delegate;
return G__7882;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$lang$arity$1 = not_EQ___1;
not_EQ_.cljs$lang$arity$2 = not_EQ___2;
not_EQ_.cljs$lang$arity$variadic = not_EQ___3.cljs$lang$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.seq.call(null,coll))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if((cljs.core.seq.call(null,coll) == null))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__7884 = pred;
var G__7885 = cljs.core.next.call(null,coll);
pred = G__7884;
coll = G__7885;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return !(cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.seq.call(null,coll))
{var or__3824__auto____7887 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____7887))
{return or__3824__auto____7887;
} else
{{
var G__7888 = pred;
var G__7889 = cljs.core.next.call(null,coll);
pred = G__7888;
coll = G__7889;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.integer_QMARK_.call(null,n))
{return ((n & 1) === 0);
} else
{throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return !(cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__7890 = null;
var G__7890__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__7890__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__7890__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__7890__3 = (function() { 
var G__7891__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__7891 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7891__delegate.call(this, x, y, zs);
};
G__7891.cljs$lang$maxFixedArity = 2;
G__7891.cljs$lang$applyTo = (function (arglist__7892){
var x = cljs.core.first(arglist__7892);
var y = cljs.core.first(cljs.core.next(arglist__7892));
var zs = cljs.core.rest(cljs.core.next(arglist__7892));
return G__7891__delegate(x, y, zs);
});
G__7891.cljs$lang$arity$variadic = G__7891__delegate;
return G__7891;
})()
;
G__7890 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__7890__0.call(this);
case 1:
return G__7890__1.call(this,x);
case 2:
return G__7890__2.call(this,x,y);
default:
return G__7890__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__7890.cljs$lang$maxFixedArity = 2;
G__7890.cljs$lang$applyTo = G__7890__3.cljs$lang$applyTo;
return G__7890;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__7893__delegate = function (args){
return x;
};
var G__7893 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7893__delegate.call(this, args);
};
G__7893.cljs$lang$maxFixedArity = 0;
G__7893.cljs$lang$applyTo = (function (arglist__7894){
var args = cljs.core.seq(arglist__7894);;
return G__7893__delegate(args);
});
G__7893.cljs$lang$arity$variadic = G__7893__delegate;
return G__7893;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){
return cljs.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__7901 = null;
var G__7901__0 = (function (){
return f.call(null,g.call(null));
});
var G__7901__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__7901__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__7901__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__7901__4 = (function() { 
var G__7902__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__7902 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7902__delegate.call(this, x, y, z, args);
};
G__7902.cljs$lang$maxFixedArity = 3;
G__7902.cljs$lang$applyTo = (function (arglist__7903){
var x = cljs.core.first(arglist__7903);
var y = cljs.core.first(cljs.core.next(arglist__7903));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7903)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7903)));
return G__7902__delegate(x, y, z, args);
});
G__7902.cljs$lang$arity$variadic = G__7902__delegate;
return G__7902;
})()
;
G__7901 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7901__0.call(this);
case 1:
return G__7901__1.call(this,x);
case 2:
return G__7901__2.call(this,x,y);
case 3:
return G__7901__3.call(this,x,y,z);
default:
return G__7901__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7901.cljs$lang$maxFixedArity = 3;
G__7901.cljs$lang$applyTo = G__7901__4.cljs$lang$applyTo;
return G__7901;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__7904 = null;
var G__7904__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__7904__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__7904__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__7904__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__7904__4 = (function() { 
var G__7905__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__7905 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7905__delegate.call(this, x, y, z, args);
};
G__7905.cljs$lang$maxFixedArity = 3;
G__7905.cljs$lang$applyTo = (function (arglist__7906){
var x = cljs.core.first(arglist__7906);
var y = cljs.core.first(cljs.core.next(arglist__7906));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7906)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7906)));
return G__7905__delegate(x, y, z, args);
});
G__7905.cljs$lang$arity$variadic = G__7905__delegate;
return G__7905;
})()
;
G__7904 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7904__0.call(this);
case 1:
return G__7904__1.call(this,x);
case 2:
return G__7904__2.call(this,x,y);
case 3:
return G__7904__3.call(this,x,y,z);
default:
return G__7904__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7904.cljs$lang$maxFixedArity = 3;
G__7904.cljs$lang$applyTo = G__7904__4.cljs$lang$applyTo;
return G__7904;
})()
});
var comp__4 = (function() { 
var G__7907__delegate = function (f1,f2,f3,fs){
var fs__7898 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__7908__delegate = function (args){
var ret__7899 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__7898),args);
var fs__7900 = cljs.core.next.call(null,fs__7898);
while(true){
if(fs__7900)
{{
var G__7909 = cljs.core.first.call(null,fs__7900).call(null,ret__7899);
var G__7910 = cljs.core.next.call(null,fs__7900);
ret__7899 = G__7909;
fs__7900 = G__7910;
continue;
}
} else
{return ret__7899;
}
break;
}
};
var G__7908 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7908__delegate.call(this, args);
};
G__7908.cljs$lang$maxFixedArity = 0;
G__7908.cljs$lang$applyTo = (function (arglist__7911){
var args = cljs.core.seq(arglist__7911);;
return G__7908__delegate(args);
});
G__7908.cljs$lang$arity$variadic = G__7908__delegate;
return G__7908;
})()
;
};
var G__7907 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7907__delegate.call(this, f1, f2, f3, fs);
};
G__7907.cljs$lang$maxFixedArity = 3;
G__7907.cljs$lang$applyTo = (function (arglist__7912){
var f1 = cljs.core.first(arglist__7912);
var f2 = cljs.core.first(cljs.core.next(arglist__7912));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7912)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7912)));
return G__7907__delegate(f1, f2, f3, fs);
});
G__7907.cljs$lang$arity$variadic = G__7907__delegate;
return G__7907;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$lang$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$lang$arity$0 = comp__0;
comp.cljs$lang$arity$1 = comp__1;
comp.cljs$lang$arity$2 = comp__2;
comp.cljs$lang$arity$3 = comp__3;
comp.cljs$lang$arity$variadic = comp__4.cljs$lang$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2 = (function (f,arg1){
return (function() { 
var G__7913__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__7913 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7913__delegate.call(this, args);
};
G__7913.cljs$lang$maxFixedArity = 0;
G__7913.cljs$lang$applyTo = (function (arglist__7914){
var args = cljs.core.seq(arglist__7914);;
return G__7913__delegate(args);
});
G__7913.cljs$lang$arity$variadic = G__7913__delegate;
return G__7913;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__7915__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__7915 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7915__delegate.call(this, args);
};
G__7915.cljs$lang$maxFixedArity = 0;
G__7915.cljs$lang$applyTo = (function (arglist__7916){
var args = cljs.core.seq(arglist__7916);;
return G__7915__delegate(args);
});
G__7915.cljs$lang$arity$variadic = G__7915__delegate;
return G__7915;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__7917__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__7917 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7917__delegate.call(this, args);
};
G__7917.cljs$lang$maxFixedArity = 0;
G__7917.cljs$lang$applyTo = (function (arglist__7918){
var args = cljs.core.seq(arglist__7918);;
return G__7917__delegate(args);
});
G__7917.cljs$lang$arity$variadic = G__7917__delegate;
return G__7917;
})()
;
});
var partial__5 = (function() { 
var G__7919__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__7920__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__7920 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7920__delegate.call(this, args);
};
G__7920.cljs$lang$maxFixedArity = 0;
G__7920.cljs$lang$applyTo = (function (arglist__7921){
var args = cljs.core.seq(arglist__7921);;
return G__7920__delegate(args);
});
G__7920.cljs$lang$arity$variadic = G__7920__delegate;
return G__7920;
})()
;
};
var G__7919 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7919__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__7919.cljs$lang$maxFixedArity = 4;
G__7919.cljs$lang$applyTo = (function (arglist__7922){
var f = cljs.core.first(arglist__7922);
var arg1 = cljs.core.first(cljs.core.next(arglist__7922));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7922)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7922))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7922))));
return G__7919__delegate(f, arg1, arg2, arg3, more);
});
G__7919.cljs$lang$arity$variadic = G__7919__delegate;
return G__7919;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$lang$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$lang$arity$2 = partial__2;
partial.cljs$lang$arity$3 = partial__3;
partial.cljs$lang$arity$4 = partial__4;
partial.cljs$lang$arity$variadic = partial__5.cljs$lang$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){
return (function() {
var G__7923 = null;
var G__7923__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__7923__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__7923__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__7923__4 = (function() { 
var G__7924__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__7924 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7924__delegate.call(this, a, b, c, ds);
};
G__7924.cljs$lang$maxFixedArity = 3;
G__7924.cljs$lang$applyTo = (function (arglist__7925){
var a = cljs.core.first(arglist__7925);
var b = cljs.core.first(cljs.core.next(arglist__7925));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7925)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7925)));
return G__7924__delegate(a, b, c, ds);
});
G__7924.cljs$lang$arity$variadic = G__7924__delegate;
return G__7924;
})()
;
G__7923 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__7923__1.call(this,a);
case 2:
return G__7923__2.call(this,a,b);
case 3:
return G__7923__3.call(this,a,b,c);
default:
return G__7923__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7923.cljs$lang$maxFixedArity = 3;
G__7923.cljs$lang$applyTo = G__7923__4.cljs$lang$applyTo;
return G__7923;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__7926 = null;
var G__7926__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7926__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__7926__4 = (function() { 
var G__7927__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__7927 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7927__delegate.call(this, a, b, c, ds);
};
G__7927.cljs$lang$maxFixedArity = 3;
G__7927.cljs$lang$applyTo = (function (arglist__7928){
var a = cljs.core.first(arglist__7928);
var b = cljs.core.first(cljs.core.next(arglist__7928));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7928)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7928)));
return G__7927__delegate(a, b, c, ds);
});
G__7927.cljs$lang$arity$variadic = G__7927__delegate;
return G__7927;
})()
;
G__7926 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7926__2.call(this,a,b);
case 3:
return G__7926__3.call(this,a,b,c);
default:
return G__7926__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7926.cljs$lang$maxFixedArity = 3;
G__7926.cljs$lang$applyTo = G__7926__4.cljs$lang$applyTo;
return G__7926;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__7929 = null;
var G__7929__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7929__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__7929__4 = (function() { 
var G__7930__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__7930 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7930__delegate.call(this, a, b, c, ds);
};
G__7930.cljs$lang$maxFixedArity = 3;
G__7930.cljs$lang$applyTo = (function (arglist__7931){
var a = cljs.core.first(arglist__7931);
var b = cljs.core.first(cljs.core.next(arglist__7931));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7931)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7931)));
return G__7930__delegate(a, b, c, ds);
});
G__7930.cljs$lang$arity$variadic = G__7930__delegate;
return G__7930;
})()
;
G__7929 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7929__2.call(this,a,b);
case 3:
return G__7929__3.call(this,a,b,c);
default:
return G__7929__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7929.cljs$lang$maxFixedArity = 3;
G__7929.cljs$lang$applyTo = G__7929__4.cljs$lang$applyTo;
return G__7929;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
fnil.cljs$lang$arity$2 = fnil__2;
fnil.cljs$lang$arity$3 = fnil__3;
fnil.cljs$lang$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__7947 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7955 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7955)
{var s__7956 = temp__3974__auto____7955;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7956))
{var c__7957 = cljs.core.chunk_first.call(null,s__7956);
var size__7958 = cljs.core.count.call(null,c__7957);
var b__7959 = cljs.core.chunk_buffer.call(null,size__7958);
var n__2492__auto____7960 = size__7958;
var i__7961 = 0;
while(true){
if((i__7961 < n__2492__auto____7960))
{cljs.core.chunk_append.call(null,b__7959,f.call(null,(idx + i__7961),cljs.core._nth.call(null,c__7957,i__7961)));
{
var G__7962 = (i__7961 + 1);
i__7961 = G__7962;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7959),mapi.call(null,(idx + size__7958),cljs.core.chunk_rest.call(null,s__7956)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__7956)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__7956)));
}
} else
{return null;
}
}),null));
});
return mapi__7947.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7972 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7972)
{var s__7973 = temp__3974__auto____7972;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7973))
{var c__7974 = cljs.core.chunk_first.call(null,s__7973);
var size__7975 = cljs.core.count.call(null,c__7974);
var b__7976 = cljs.core.chunk_buffer.call(null,size__7975);
var n__2492__auto____7977 = size__7975;
var i__7978 = 0;
while(true){
if((i__7978 < n__2492__auto____7977))
{var x__7979 = f.call(null,cljs.core._nth.call(null,c__7974,i__7978));
if((x__7979 == null))
{} else
{cljs.core.chunk_append.call(null,b__7976,x__7979);
}
{
var G__7981 = (i__7978 + 1);
i__7978 = G__7981;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7976),keep.call(null,f,cljs.core.chunk_rest.call(null,s__7973)));
} else
{var x__7980 = f.call(null,cljs.core.first.call(null,s__7973));
if((x__7980 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__7973));
} else
{return cljs.core.cons.call(null,x__7980,keep.call(null,f,cljs.core.rest.call(null,s__7973)));
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__8007 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8017 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8017)
{var s__8018 = temp__3974__auto____8017;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8018))
{var c__8019 = cljs.core.chunk_first.call(null,s__8018);
var size__8020 = cljs.core.count.call(null,c__8019);
var b__8021 = cljs.core.chunk_buffer.call(null,size__8020);
var n__2492__auto____8022 = size__8020;
var i__8023 = 0;
while(true){
if((i__8023 < n__2492__auto____8022))
{var x__8024 = f.call(null,(idx + i__8023),cljs.core._nth.call(null,c__8019,i__8023));
if((x__8024 == null))
{} else
{cljs.core.chunk_append.call(null,b__8021,x__8024);
}
{
var G__8026 = (i__8023 + 1);
i__8023 = G__8026;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8021),keepi.call(null,(idx + size__8020),cljs.core.chunk_rest.call(null,s__8018)));
} else
{var x__8025 = f.call(null,idx,cljs.core.first.call(null,s__8018));
if((x__8025 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__8018));
} else
{return cljs.core.cons.call(null,x__8025,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__8018)));
}
}
} else
{return null;
}
}),null));
});
return keepi__8007.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8112 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____8112))
{return p.call(null,y);
} else
{return and__3822__auto____8112;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8113 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____8113))
{var and__3822__auto____8114 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____8114))
{return p.call(null,z);
} else
{return and__3822__auto____8114;
}
} else
{return and__3822__auto____8113;
}
})());
});
var ep1__4 = (function() { 
var G__8183__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8115 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8115))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____8115;
}
})());
};
var G__8183 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8183__delegate.call(this, x, y, z, args);
};
G__8183.cljs$lang$maxFixedArity = 3;
G__8183.cljs$lang$applyTo = (function (arglist__8184){
var x = cljs.core.first(arglist__8184);
var y = cljs.core.first(cljs.core.next(arglist__8184));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8184)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8184)));
return G__8183__delegate(x, y, z, args);
});
G__8183.cljs$lang$arity$variadic = G__8183__delegate;
return G__8183;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$lang$arity$0 = ep1__0;
ep1.cljs$lang$arity$1 = ep1__1;
ep1.cljs$lang$arity$2 = ep1__2;
ep1.cljs$lang$arity$3 = ep1__3;
ep1.cljs$lang$arity$variadic = ep1__4.cljs$lang$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8127 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8127))
{return p2.call(null,x);
} else
{return and__3822__auto____8127;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8128 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8128))
{var and__3822__auto____8129 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8129))
{var and__3822__auto____8130 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8130))
{return p2.call(null,y);
} else
{return and__3822__auto____8130;
}
} else
{return and__3822__auto____8129;
}
} else
{return and__3822__auto____8128;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8131 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8131))
{var and__3822__auto____8132 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8132))
{var and__3822__auto____8133 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____8133))
{var and__3822__auto____8134 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8134))
{var and__3822__auto____8135 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8135))
{return p2.call(null,z);
} else
{return and__3822__auto____8135;
}
} else
{return and__3822__auto____8134;
}
} else
{return and__3822__auto____8133;
}
} else
{return and__3822__auto____8132;
}
} else
{return and__3822__auto____8131;
}
})());
});
var ep2__4 = (function() { 
var G__8185__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8136 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8136))
{return cljs.core.every_QMARK_.call(null,(function (p1__7982_SHARP_){
var and__3822__auto____8137 = p1.call(null,p1__7982_SHARP_);
if(cljs.core.truth_(and__3822__auto____8137))
{return p2.call(null,p1__7982_SHARP_);
} else
{return and__3822__auto____8137;
}
}),args);
} else
{return and__3822__auto____8136;
}
})());
};
var G__8185 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8185__delegate.call(this, x, y, z, args);
};
G__8185.cljs$lang$maxFixedArity = 3;
G__8185.cljs$lang$applyTo = (function (arglist__8186){
var x = cljs.core.first(arglist__8186);
var y = cljs.core.first(cljs.core.next(arglist__8186));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8186)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8186)));
return G__8185__delegate(x, y, z, args);
});
G__8185.cljs$lang$arity$variadic = G__8185__delegate;
return G__8185;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$lang$arity$0 = ep2__0;
ep2.cljs$lang$arity$1 = ep2__1;
ep2.cljs$lang$arity$2 = ep2__2;
ep2.cljs$lang$arity$3 = ep2__3;
ep2.cljs$lang$arity$variadic = ep2__4.cljs$lang$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8156 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8156))
{var and__3822__auto____8157 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8157))
{return p3.call(null,x);
} else
{return and__3822__auto____8157;
}
} else
{return and__3822__auto____8156;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8158 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8158))
{var and__3822__auto____8159 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8159))
{var and__3822__auto____8160 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____8160))
{var and__3822__auto____8161 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8161))
{var and__3822__auto____8162 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8162))
{return p3.call(null,y);
} else
{return and__3822__auto____8162;
}
} else
{return and__3822__auto____8161;
}
} else
{return and__3822__auto____8160;
}
} else
{return and__3822__auto____8159;
}
} else
{return and__3822__auto____8158;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8163 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8163))
{var and__3822__auto____8164 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8164))
{var and__3822__auto____8165 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____8165))
{var and__3822__auto____8166 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8166))
{var and__3822__auto____8167 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8167))
{var and__3822__auto____8168 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____8168))
{var and__3822__auto____8169 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____8169))
{var and__3822__auto____8170 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____8170))
{return p3.call(null,z);
} else
{return and__3822__auto____8170;
}
} else
{return and__3822__auto____8169;
}
} else
{return and__3822__auto____8168;
}
} else
{return and__3822__auto____8167;
}
} else
{return and__3822__auto____8166;
}
} else
{return and__3822__auto____8165;
}
} else
{return and__3822__auto____8164;
}
} else
{return and__3822__auto____8163;
}
})());
});
var ep3__4 = (function() { 
var G__8187__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8171 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8171))
{return cljs.core.every_QMARK_.call(null,(function (p1__7983_SHARP_){
var and__3822__auto____8172 = p1.call(null,p1__7983_SHARP_);
if(cljs.core.truth_(and__3822__auto____8172))
{var and__3822__auto____8173 = p2.call(null,p1__7983_SHARP_);
if(cljs.core.truth_(and__3822__auto____8173))
{return p3.call(null,p1__7983_SHARP_);
} else
{return and__3822__auto____8173;
}
} else
{return and__3822__auto____8172;
}
}),args);
} else
{return and__3822__auto____8171;
}
})());
};
var G__8187 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8187__delegate.call(this, x, y, z, args);
};
G__8187.cljs$lang$maxFixedArity = 3;
G__8187.cljs$lang$applyTo = (function (arglist__8188){
var x = cljs.core.first(arglist__8188);
var y = cljs.core.first(cljs.core.next(arglist__8188));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8188)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8188)));
return G__8187__delegate(x, y, z, args);
});
G__8187.cljs$lang$arity$variadic = G__8187__delegate;
return G__8187;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$lang$arity$0 = ep3__0;
ep3.cljs$lang$arity$1 = ep3__1;
ep3.cljs$lang$arity$2 = ep3__2;
ep3.cljs$lang$arity$3 = ep3__3;
ep3.cljs$lang$arity$variadic = ep3__4.cljs$lang$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__8189__delegate = function (p1,p2,p3,ps){
var ps__8174 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__7984_SHARP_){
return p1__7984_SHARP_.call(null,x);
}),ps__8174);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__7985_SHARP_){
var and__3822__auto____8179 = p1__7985_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____8179))
{return p1__7985_SHARP_.call(null,y);
} else
{return and__3822__auto____8179;
}
}),ps__8174);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__7986_SHARP_){
var and__3822__auto____8180 = p1__7986_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____8180))
{var and__3822__auto____8181 = p1__7986_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____8181))
{return p1__7986_SHARP_.call(null,z);
} else
{return and__3822__auto____8181;
}
} else
{return and__3822__auto____8180;
}
}),ps__8174);
});
var epn__4 = (function() { 
var G__8190__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8182 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8182))
{return cljs.core.every_QMARK_.call(null,(function (p1__7987_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__7987_SHARP_,args);
}),ps__8174);
} else
{return and__3822__auto____8182;
}
})());
};
var G__8190 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8190__delegate.call(this, x, y, z, args);
};
G__8190.cljs$lang$maxFixedArity = 3;
G__8190.cljs$lang$applyTo = (function (arglist__8191){
var x = cljs.core.first(arglist__8191);
var y = cljs.core.first(cljs.core.next(arglist__8191));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8191)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8191)));
return G__8190__delegate(x, y, z, args);
});
G__8190.cljs$lang$arity$variadic = G__8190__delegate;
return G__8190;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$lang$arity$0 = epn__0;
epn.cljs$lang$arity$1 = epn__1;
epn.cljs$lang$arity$2 = epn__2;
epn.cljs$lang$arity$3 = epn__3;
epn.cljs$lang$arity$variadic = epn__4.cljs$lang$arity$variadic;
return epn;
})()
};
var G__8189 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8189__delegate.call(this, p1, p2, p3, ps);
};
G__8189.cljs$lang$maxFixedArity = 3;
G__8189.cljs$lang$applyTo = (function (arglist__8192){
var p1 = cljs.core.first(arglist__8192);
var p2 = cljs.core.first(cljs.core.next(arglist__8192));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8192)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8192)));
return G__8189__delegate(p1, p2, p3, ps);
});
G__8189.cljs$lang$arity$variadic = G__8189__delegate;
return G__8189;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$lang$arity$1 = every_pred__1;
every_pred.cljs$lang$arity$2 = every_pred__2;
every_pred.cljs$lang$arity$3 = every_pred__3;
every_pred.cljs$lang$arity$variadic = every_pred__4.cljs$lang$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
return p.call(null,x);
});
var sp1__2 = (function (x,y){
var or__3824__auto____8273 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____8273))
{return or__3824__auto____8273;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____8274 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____8274))
{return or__3824__auto____8274;
} else
{var or__3824__auto____8275 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____8275))
{return or__3824__auto____8275;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__8344__delegate = function (x,y,z,args){
var or__3824__auto____8276 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8276))
{return or__3824__auto____8276;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__8344 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8344__delegate.call(this, x, y, z, args);
};
G__8344.cljs$lang$maxFixedArity = 3;
G__8344.cljs$lang$applyTo = (function (arglist__8345){
var x = cljs.core.first(arglist__8345);
var y = cljs.core.first(cljs.core.next(arglist__8345));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8345)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8345)));
return G__8344__delegate(x, y, z, args);
});
G__8344.cljs$lang$arity$variadic = G__8344__delegate;
return G__8344;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$lang$arity$0 = sp1__0;
sp1.cljs$lang$arity$1 = sp1__1;
sp1.cljs$lang$arity$2 = sp1__2;
sp1.cljs$lang$arity$3 = sp1__3;
sp1.cljs$lang$arity$variadic = sp1__4.cljs$lang$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3824__auto____8288 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8288))
{return or__3824__auto____8288;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____8289 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8289))
{return or__3824__auto____8289;
} else
{var or__3824__auto____8290 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8290))
{return or__3824__auto____8290;
} else
{var or__3824__auto____8291 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8291))
{return or__3824__auto____8291;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____8292 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8292))
{return or__3824__auto____8292;
} else
{var or__3824__auto____8293 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8293))
{return or__3824__auto____8293;
} else
{var or__3824__auto____8294 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____8294))
{return or__3824__auto____8294;
} else
{var or__3824__auto____8295 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8295))
{return or__3824__auto____8295;
} else
{var or__3824__auto____8296 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8296))
{return or__3824__auto____8296;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__8346__delegate = function (x,y,z,args){
var or__3824__auto____8297 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8297))
{return or__3824__auto____8297;
} else
{return cljs.core.some.call(null,(function (p1__8027_SHARP_){
var or__3824__auto____8298 = p1.call(null,p1__8027_SHARP_);
if(cljs.core.truth_(or__3824__auto____8298))
{return or__3824__auto____8298;
} else
{return p2.call(null,p1__8027_SHARP_);
}
}),args);
}
};
var G__8346 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8346__delegate.call(this, x, y, z, args);
};
G__8346.cljs$lang$maxFixedArity = 3;
G__8346.cljs$lang$applyTo = (function (arglist__8347){
var x = cljs.core.first(arglist__8347);
var y = cljs.core.first(cljs.core.next(arglist__8347));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8347)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8347)));
return G__8346__delegate(x, y, z, args);
});
G__8346.cljs$lang$arity$variadic = G__8346__delegate;
return G__8346;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$lang$arity$0 = sp2__0;
sp2.cljs$lang$arity$1 = sp2__1;
sp2.cljs$lang$arity$2 = sp2__2;
sp2.cljs$lang$arity$3 = sp2__3;
sp2.cljs$lang$arity$variadic = sp2__4.cljs$lang$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3824__auto____8317 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8317))
{return or__3824__auto____8317;
} else
{var or__3824__auto____8318 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8318))
{return or__3824__auto____8318;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____8319 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8319))
{return or__3824__auto____8319;
} else
{var or__3824__auto____8320 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8320))
{return or__3824__auto____8320;
} else
{var or__3824__auto____8321 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____8321))
{return or__3824__auto____8321;
} else
{var or__3824__auto____8322 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8322))
{return or__3824__auto____8322;
} else
{var or__3824__auto____8323 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8323))
{return or__3824__auto____8323;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____8324 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8324))
{return or__3824__auto____8324;
} else
{var or__3824__auto____8325 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8325))
{return or__3824__auto____8325;
} else
{var or__3824__auto____8326 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____8326))
{return or__3824__auto____8326;
} else
{var or__3824__auto____8327 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8327))
{return or__3824__auto____8327;
} else
{var or__3824__auto____8328 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8328))
{return or__3824__auto____8328;
} else
{var or__3824__auto____8329 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____8329))
{return or__3824__auto____8329;
} else
{var or__3824__auto____8330 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____8330))
{return or__3824__auto____8330;
} else
{var or__3824__auto____8331 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____8331))
{return or__3824__auto____8331;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__8348__delegate = function (x,y,z,args){
var or__3824__auto____8332 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8332))
{return or__3824__auto____8332;
} else
{return cljs.core.some.call(null,(function (p1__8028_SHARP_){
var or__3824__auto____8333 = p1.call(null,p1__8028_SHARP_);
if(cljs.core.truth_(or__3824__auto____8333))
{return or__3824__auto____8333;
} else
{var or__3824__auto____8334 = p2.call(null,p1__8028_SHARP_);
if(cljs.core.truth_(or__3824__auto____8334))
{return or__3824__auto____8334;
} else
{return p3.call(null,p1__8028_SHARP_);
}
}
}),args);
}
};
var G__8348 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8348__delegate.call(this, x, y, z, args);
};
G__8348.cljs$lang$maxFixedArity = 3;
G__8348.cljs$lang$applyTo = (function (arglist__8349){
var x = cljs.core.first(arglist__8349);
var y = cljs.core.first(cljs.core.next(arglist__8349));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8349)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8349)));
return G__8348__delegate(x, y, z, args);
});
G__8348.cljs$lang$arity$variadic = G__8348__delegate;
return G__8348;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$lang$arity$0 = sp3__0;
sp3.cljs$lang$arity$1 = sp3__1;
sp3.cljs$lang$arity$2 = sp3__2;
sp3.cljs$lang$arity$3 = sp3__3;
sp3.cljs$lang$arity$variadic = sp3__4.cljs$lang$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__8350__delegate = function (p1,p2,p3,ps){
var ps__8335 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__8029_SHARP_){
return p1__8029_SHARP_.call(null,x);
}),ps__8335);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__8030_SHARP_){
var or__3824__auto____8340 = p1__8030_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____8340))
{return or__3824__auto____8340;
} else
{return p1__8030_SHARP_.call(null,y);
}
}),ps__8335);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__8031_SHARP_){
var or__3824__auto____8341 = p1__8031_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____8341))
{return or__3824__auto____8341;
} else
{var or__3824__auto____8342 = p1__8031_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____8342))
{return or__3824__auto____8342;
} else
{return p1__8031_SHARP_.call(null,z);
}
}
}),ps__8335);
});
var spn__4 = (function() { 
var G__8351__delegate = function (x,y,z,args){
var or__3824__auto____8343 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8343))
{return or__3824__auto____8343;
} else
{return cljs.core.some.call(null,(function (p1__8032_SHARP_){
return cljs.core.some.call(null,p1__8032_SHARP_,args);
}),ps__8335);
}
};
var G__8351 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8351__delegate.call(this, x, y, z, args);
};
G__8351.cljs$lang$maxFixedArity = 3;
G__8351.cljs$lang$applyTo = (function (arglist__8352){
var x = cljs.core.first(arglist__8352);
var y = cljs.core.first(cljs.core.next(arglist__8352));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8352)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8352)));
return G__8351__delegate(x, y, z, args);
});
G__8351.cljs$lang$arity$variadic = G__8351__delegate;
return G__8351;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$lang$arity$0 = spn__0;
spn.cljs$lang$arity$1 = spn__1;
spn.cljs$lang$arity$2 = spn__2;
spn.cljs$lang$arity$3 = spn__3;
spn.cljs$lang$arity$variadic = spn__4.cljs$lang$arity$variadic;
return spn;
})()
};
var G__8350 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8350__delegate.call(this, p1, p2, p3, ps);
};
G__8350.cljs$lang$maxFixedArity = 3;
G__8350.cljs$lang$applyTo = (function (arglist__8353){
var p1 = cljs.core.first(arglist__8353);
var p2 = cljs.core.first(cljs.core.next(arglist__8353));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8353)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8353)));
return G__8350__delegate(p1, p2, p3, ps);
});
G__8350.cljs$lang$arity$variadic = G__8350__delegate;
return G__8350;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$lang$arity$1 = some_fn__1;
some_fn.cljs$lang$arity$2 = some_fn__2;
some_fn.cljs$lang$arity$3 = some_fn__3;
some_fn.cljs$lang$arity$variadic = some_fn__4.cljs$lang$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8372 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8372)
{var s__8373 = temp__3974__auto____8372;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8373))
{var c__8374 = cljs.core.chunk_first.call(null,s__8373);
var size__8375 = cljs.core.count.call(null,c__8374);
var b__8376 = cljs.core.chunk_buffer.call(null,size__8375);
var n__2492__auto____8377 = size__8375;
var i__8378 = 0;
while(true){
if((i__8378 < n__2492__auto____8377))
{cljs.core.chunk_append.call(null,b__8376,f.call(null,cljs.core._nth.call(null,c__8374,i__8378)));
{
var G__8390 = (i__8378 + 1);
i__8378 = G__8390;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8376),map.call(null,f,cljs.core.chunk_rest.call(null,s__8373)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__8373)),map.call(null,f,cljs.core.rest.call(null,s__8373)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8379 = cljs.core.seq.call(null,c1);
var s2__8380 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____8381 = s1__8379;
if(and__3822__auto____8381)
{return s2__8380;
} else
{return and__3822__auto____8381;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8379),cljs.core.first.call(null,s2__8380)),map.call(null,f,cljs.core.rest.call(null,s1__8379),cljs.core.rest.call(null,s2__8380)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8382 = cljs.core.seq.call(null,c1);
var s2__8383 = cljs.core.seq.call(null,c2);
var s3__8384 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____8385 = s1__8382;
if(and__3822__auto____8385)
{var and__3822__auto____8386 = s2__8383;
if(and__3822__auto____8386)
{return s3__8384;
} else
{return and__3822__auto____8386;
}
} else
{return and__3822__auto____8385;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8382),cljs.core.first.call(null,s2__8383),cljs.core.first.call(null,s3__8384)),map.call(null,f,cljs.core.rest.call(null,s1__8382),cljs.core.rest.call(null,s2__8383),cljs.core.rest.call(null,s3__8384)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__8391__delegate = function (f,c1,c2,c3,colls){
var step__8389 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8388 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8388))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__8388),step.call(null,map.call(null,cljs.core.rest,ss__8388)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__8193_SHARP_){
return cljs.core.apply.call(null,f,p1__8193_SHARP_);
}),step__8389.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__8391 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8391__delegate.call(this, f, c1, c2, c3, colls);
};
G__8391.cljs$lang$maxFixedArity = 4;
G__8391.cljs$lang$applyTo = (function (arglist__8392){
var f = cljs.core.first(arglist__8392);
var c1 = cljs.core.first(cljs.core.next(arglist__8392));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8392)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8392))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8392))));
return G__8391__delegate(f, c1, c2, c3, colls);
});
G__8391.cljs$lang$arity$variadic = G__8391__delegate;
return G__8391;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$lang$arity$2 = map__2;
map.cljs$lang$arity$3 = map__3;
map.cljs$lang$arity$4 = map__4;
map.cljs$lang$arity$variadic = map__5.cljs$lang$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if((n > 0))
{var temp__3974__auto____8395 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8395)
{var s__8396 = temp__3974__auto____8395;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__8396),take.call(null,(n - 1),cljs.core.rest.call(null,s__8396)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__8402 = (function (n,coll){
while(true){
var s__8400 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____8401 = (n > 0);
if(and__3822__auto____8401)
{return s__8400;
} else
{return and__3822__auto____8401;
}
})()))
{{
var G__8403 = (n - 1);
var G__8404 = cljs.core.rest.call(null,s__8400);
n = G__8403;
coll = G__8404;
continue;
}
} else
{return s__8400;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__8402.call(null,n,coll);
}),null));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
drop_last.cljs$lang$arity$1 = drop_last__1;
drop_last.cljs$lang$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__8407 = cljs.core.seq.call(null,coll);
var lead__8408 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__8408)
{{
var G__8409 = cljs.core.next.call(null,s__8407);
var G__8410 = cljs.core.next.call(null,lead__8408);
s__8407 = G__8409;
lead__8408 = G__8410;
continue;
}
} else
{return s__8407;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__8416 = (function (pred,coll){
while(true){
var s__8414 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____8415 = s__8414;
if(and__3822__auto____8415)
{return pred.call(null,cljs.core.first.call(null,s__8414));
} else
{return and__3822__auto____8415;
}
})()))
{{
var G__8417 = pred;
var G__8418 = cljs.core.rest.call(null,s__8414);
pred = G__8417;
coll = G__8418;
continue;
}
} else
{return s__8414;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__8416.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8421 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8421)
{var s__8422 = temp__3974__auto____8421;
return cljs.core.concat.call(null,s__8422,cycle.call(null,s__8422));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)], true);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
}),null));
});
var repeat__2 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
repeat.cljs$lang$arity$1 = repeat__1;
repeat.cljs$lang$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
}),null));
});
var repeatedly__2 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
repeatedly.cljs$lang$arity$1 = repeatedly__1;
repeatedly.cljs$lang$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}),null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8427 = cljs.core.seq.call(null,c1);
var s2__8428 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____8429 = s1__8427;
if(and__3822__auto____8429)
{return s2__8428;
} else
{return and__3822__auto____8429;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__8427),cljs.core.cons.call(null,cljs.core.first.call(null,s2__8428),interleave.call(null,cljs.core.rest.call(null,s1__8427),cljs.core.rest.call(null,s2__8428))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__8431__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8430 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8430))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__8430),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__8430)));
} else
{return null;
}
}),null));
};
var G__8431 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8431__delegate.call(this, c1, c2, colls);
};
G__8431.cljs$lang$maxFixedArity = 2;
G__8431.cljs$lang$applyTo = (function (arglist__8432){
var c1 = cljs.core.first(arglist__8432);
var c2 = cljs.core.first(cljs.core.next(arglist__8432));
var colls = cljs.core.rest(cljs.core.next(arglist__8432));
return G__8431__delegate(c1, c2, colls);
});
G__8431.cljs$lang$arity$variadic = G__8431__delegate;
return G__8431;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$lang$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$lang$arity$2 = interleave__2;
interleave.cljs$lang$arity$variadic = interleave__3.cljs$lang$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__8442 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____8440 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____8440)
{var coll__8441 = temp__3971__auto____8440;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__8441),cat.call(null,cljs.core.rest.call(null,coll__8441),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__8442.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3 = (function() { 
var G__8443__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__8443 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8443__delegate.call(this, f, coll, colls);
};
G__8443.cljs$lang$maxFixedArity = 2;
G__8443.cljs$lang$applyTo = (function (arglist__8444){
var f = cljs.core.first(arglist__8444);
var coll = cljs.core.first(cljs.core.next(arglist__8444));
var colls = cljs.core.rest(cljs.core.next(arglist__8444));
return G__8443__delegate(f, coll, colls);
});
G__8443.cljs$lang$arity$variadic = G__8443__delegate;
return G__8443;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapcat__2.call(this,f,coll);
default:
return mapcat__3.cljs$lang$arity$variadic(f,coll, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3.cljs$lang$applyTo;
mapcat.cljs$lang$arity$2 = mapcat__2;
mapcat.cljs$lang$arity$variadic = mapcat__3.cljs$lang$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8454 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8454)
{var s__8455 = temp__3974__auto____8454;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8455))
{var c__8456 = cljs.core.chunk_first.call(null,s__8455);
var size__8457 = cljs.core.count.call(null,c__8456);
var b__8458 = cljs.core.chunk_buffer.call(null,size__8457);
var n__2492__auto____8459 = size__8457;
var i__8460 = 0;
while(true){
if((i__8460 < n__2492__auto____8459))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__8456,i__8460))))
{cljs.core.chunk_append.call(null,b__8458,cljs.core._nth.call(null,c__8456,i__8460));
} else
{}
{
var G__8463 = (i__8460 + 1);
i__8460 = G__8463;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8458),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__8455)));
} else
{var f__8461 = cljs.core.first.call(null,s__8455);
var r__8462 = cljs.core.rest.call(null,s__8455);
if(cljs.core.truth_(pred.call(null,f__8461)))
{return cljs.core.cons.call(null,f__8461,filter.call(null,pred,r__8462));
} else
{return filter.call(null,pred,r__8462);
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__8466 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__8466.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__8464_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__8464_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__8470__8471 = to;
if(G__8470__8471)
{if((function (){var or__3824__auto____8472 = (G__8470__8471.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3824__auto____8472)
{return or__3824__auto____8472;
} else
{return G__8470__8471.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__8470__8471.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__8470__8471);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__8470__8471);
}
})())
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core.transient$.call(null,to),from));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,to,from);
}
});
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
return cljs.core.conj_BANG_.call(null,v,f.call(null,o));
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__8473__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__8473 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8473__delegate.call(this, f, c1, c2, c3, colls);
};
G__8473.cljs$lang$maxFixedArity = 4;
G__8473.cljs$lang$applyTo = (function (arglist__8474){
var f = cljs.core.first(arglist__8474);
var c1 = cljs.core.first(cljs.core.next(arglist__8474));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8474)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8474))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8474))));
return G__8473__delegate(f, c1, c2, c3, colls);
});
G__8473.cljs$lang$arity$variadic = G__8473__delegate;
return G__8473;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$lang$arity$2 = mapv__2;
mapv.cljs$lang$arity$3 = mapv__3;
mapv.cljs$lang$arity$4 = mapv__4;
mapv.cljs$lang$arity$variadic = mapv__5.cljs$lang$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
if(cljs.core.truth_(pred.call(null,o)))
{return cljs.core.conj_BANG_.call(null,v,o);
} else
{return v;
}
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8481 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8481)
{var s__8482 = temp__3974__auto____8481;
var p__8483 = cljs.core.take.call(null,n,s__8482);
if((n === cljs.core.count.call(null,p__8483)))
{return cljs.core.cons.call(null,p__8483,partition.call(null,n,step,cljs.core.drop.call(null,step,s__8482)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
var partition__4 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8484 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8484)
{var s__8485 = temp__3974__auto____8484;
var p__8486 = cljs.core.take.call(null,n,s__8485);
if((n === cljs.core.count.call(null,p__8486)))
{return cljs.core.cons.call(null,p__8486,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__8485)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__8486,pad)));
}
} else
{return null;
}
}),null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition.cljs$lang$arity$2 = partition__2;
partition.cljs$lang$arity$3 = partition__3;
partition.cljs$lang$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel__8491 = cljs.core.lookup_sentinel;
var m__8492 = m;
var ks__8493 = cljs.core.seq.call(null,ks);
while(true){
if(ks__8493)
{var m__8494 = cljs.core._lookup.call(null,m__8492,cljs.core.first.call(null,ks__8493),sentinel__8491);
if((sentinel__8491 === m__8494))
{return not_found;
} else
{{
var G__8495 = sentinel__8491;
var G__8496 = m__8494;
var G__8497 = cljs.core.next.call(null,ks__8493);
sentinel__8491 = G__8495;
m__8492 = G__8496;
ks__8493 = G__8497;
continue;
}
}
} else
{return m__8492;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get_in.cljs$lang$arity$2 = get_in__2;
get_in.cljs$lang$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__8498,v){
var vec__8503__8504 = p__8498;
var k__8505 = cljs.core.nth.call(null,vec__8503__8504,0,null);
var ks__8506 = cljs.core.nthnext.call(null,vec__8503__8504,1);
if(cljs.core.truth_(ks__8506))
{return cljs.core.assoc.call(null,m,k__8505,assoc_in.call(null,cljs.core._lookup.call(null,m,k__8505,null),ks__8506,v));
} else
{return cljs.core.assoc.call(null,m,k__8505,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__8507,f,args){
var vec__8512__8513 = p__8507;
var k__8514 = cljs.core.nth.call(null,vec__8512__8513,0,null);
var ks__8515 = cljs.core.nthnext.call(null,vec__8512__8513,1);
if(cljs.core.truth_(ks__8515))
{return cljs.core.assoc.call(null,m,k__8514,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__8514,null),ks__8515,f,args));
} else
{return cljs.core.assoc.call(null,m,k__8514,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__8514,null),args));
}
};
var update_in = function (m,p__8507,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__8507, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__8516){
var m = cljs.core.first(arglist__8516);
var p__8507 = cljs.core.first(cljs.core.next(arglist__8516));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8516)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8516)));
return update_in__delegate(m, p__8507, f, args);
});
update_in.cljs$lang$arity$variadic = update_in__delegate;
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array,__hash){
this.meta = meta;
this.array = array;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Vector.cljs$lang$type = true;
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8519 = this;
var h__2153__auto____8520 = this__8519.__hash;
if(!((h__2153__auto____8520 == null)))
{return h__2153__auto____8520;
} else
{var h__2153__auto____8521 = cljs.core.hash_coll.call(null,coll);
this__8519.__hash = h__2153__auto____8521;
return h__2153__auto____8521;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8522 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8523 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8524 = this;
var new_array__8525 = this__8524.array.slice();
(new_array__8525[k] = v);
return (new cljs.core.Vector(this__8524.meta,new_array__8525,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__8556 = null;
var G__8556__2 = (function (this_sym8526,k){
var this__8528 = this;
var this_sym8526__8529 = this;
var coll__8530 = this_sym8526__8529;
return coll__8530.cljs$core$ILookup$_lookup$arity$2(coll__8530,k);
});
var G__8556__3 = (function (this_sym8527,k,not_found){
var this__8528 = this;
var this_sym8527__8531 = this;
var coll__8532 = this_sym8527__8531;
return coll__8532.cljs$core$ILookup$_lookup$arity$3(coll__8532,k,not_found);
});
G__8556 = function(this_sym8527,k,not_found){
switch(arguments.length){
case 2:
return G__8556__2.call(this,this_sym8527,k);
case 3:
return G__8556__3.call(this,this_sym8527,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8556;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym8517,args8518){
var this__8533 = this;
return this_sym8517.call.apply(this_sym8517,[this_sym8517].concat(args8518.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8534 = this;
var new_array__8535 = this__8534.array.slice();
new_array__8535.push(o);
return (new cljs.core.Vector(this__8534.meta,new_array__8535,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__8536 = this;
var this__8537 = this;
return cljs.core.pr_str.call(null,this__8537);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8538 = this;
return cljs.core.ci_reduce.call(null,this__8538.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8539 = this;
return cljs.core.ci_reduce.call(null,this__8539.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8540 = this;
if((this__8540.array.length > 0))
{var vector_seq__8541 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__8540.array.length))
{return cljs.core.cons.call(null,(this__8540.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__8541.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8542 = this;
return this__8542.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8543 = this;
var count__8544 = this__8543.array.length;
if((count__8544 > 0))
{return (this__8543.array[(count__8544 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8545 = this;
if((this__8545.array.length > 0))
{var new_array__8546 = this__8545.array.slice();
new_array__8546.pop();
return (new cljs.core.Vector(this__8545.meta,new_array__8546,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8547 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8548 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8549 = this;
return (new cljs.core.Vector(meta,this__8549.array,this__8549.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8550 = this;
return this__8550.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8551 = this;
if((function (){var and__3822__auto____8552 = (0 <= n);
if(and__3822__auto____8552)
{return (n < this__8551.array.length);
} else
{return and__3822__auto____8552;
}
})())
{return (this__8551.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8553 = this;
if((function (){var and__3822__auto____8554 = (0 <= n);
if(and__3822__auto____8554)
{return (n < this__8553.array.length);
} else
{return and__3822__auto____8554;
}
})())
{return (this__8553.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8555 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8555.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[],0));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs,null));
});

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__2271__auto__){
return cljs.core.list.call(null,"cljs.core/VectorNode");
});
cljs.core.VectorNode;
cljs.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new cljs.core.VectorNode(edit,cljs.core.make_array.call(null,32)));
});
cljs.core.pv_aget = (function pv_aget(node,idx){
return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){
return (new cljs.core.VectorNode(node.edit,node.arr.slice()));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__8558 = pv.cnt;
if((cnt__8558 < 32))
{return 0;
} else
{return (((cnt__8558 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__8564 = level;
var ret__8565 = node;
while(true){
if((ll__8564 === 0))
{return ret__8565;
} else
{var embed__8566 = ret__8565;
var r__8567 = cljs.core.pv_fresh_node.call(null,edit);
var ___8568 = cljs.core.pv_aset.call(null,r__8567,0,embed__8566);
{
var G__8569 = (ll__8564 - 5);
var G__8570 = r__8567;
ll__8564 = G__8569;
ret__8565 = G__8570;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__8576 = cljs.core.pv_clone_node.call(null,parent);
var subidx__8577 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__8576,subidx__8577,tailnode);
return ret__8576;
} else
{var child__8578 = cljs.core.pv_aget.call(null,parent,subidx__8577);
if(!((child__8578 == null)))
{var node_to_insert__8579 = push_tail.call(null,pv,(level - 5),child__8578,tailnode);
cljs.core.pv_aset.call(null,ret__8576,subidx__8577,node_to_insert__8579);
return ret__8576;
} else
{var node_to_insert__8580 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__8576,subidx__8577,node_to_insert__8580);
return ret__8576;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____8584 = (0 <= i);
if(and__3822__auto____8584)
{return (i < pv.cnt);
} else
{return and__3822__auto____8584;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__8585 = pv.root;
var level__8586 = pv.shift;
while(true){
if((level__8586 > 0))
{{
var G__8587 = cljs.core.pv_aget.call(null,node__8585,((i >>> level__8586) & 31));
var G__8588 = (level__8586 - 5);
node__8585 = G__8587;
level__8586 = G__8588;
continue;
}
} else
{return node__8585.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__8591 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__8591,(i & 31),val);
return ret__8591;
} else
{var subidx__8592 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8591,subidx__8592,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8592),i,val));
return ret__8591;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__8598 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8599 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8598));
if((function (){var and__3822__auto____8600 = (new_child__8599 == null);
if(and__3822__auto____8600)
{return (subidx__8598 === 0);
} else
{return and__3822__auto____8600;
}
})())
{return null;
} else
{var ret__8601 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8601,subidx__8598,new_child__8599);
return ret__8601;
}
} else
{if((subidx__8598 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__8602 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8602,subidx__8598,null);
return ret__8602;
} else
{return null;
}
}
}
});
void 0;
void 0;
void 0;
void 0;
void 0;
void 0;
void 0;

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
})
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8605 = this;
return (new cljs.core.TransientVector(this__8605.cnt,this__8605.shift,cljs.core.tv_editable_root.call(null,this__8605.root),cljs.core.tv_editable_tail.call(null,this__8605.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8606 = this;
var h__2153__auto____8607 = this__8606.__hash;
if(!((h__2153__auto____8607 == null)))
{return h__2153__auto____8607;
} else
{var h__2153__auto____8608 = cljs.core.hash_coll.call(null,coll);
this__8606.__hash = h__2153__auto____8608;
return h__2153__auto____8608;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8609 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8610 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8611 = this;
if((function (){var and__3822__auto____8612 = (0 <= k);
if(and__3822__auto____8612)
{return (k < this__8611.cnt);
} else
{return and__3822__auto____8612;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__8613 = this__8611.tail.slice();
(new_tail__8613[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__8611.meta,this__8611.cnt,this__8611.shift,this__8611.root,new_tail__8613,null));
} else
{return (new cljs.core.PersistentVector(this__8611.meta,this__8611.cnt,this__8611.shift,cljs.core.do_assoc.call(null,coll,this__8611.shift,this__8611.root,k,v),this__8611.tail,null));
}
} else
{if((k === this__8611.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__8611.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__8661 = null;
var G__8661__2 = (function (this_sym8614,k){
var this__8616 = this;
var this_sym8614__8617 = this;
var coll__8618 = this_sym8614__8617;
return coll__8618.cljs$core$ILookup$_lookup$arity$2(coll__8618,k);
});
var G__8661__3 = (function (this_sym8615,k,not_found){
var this__8616 = this;
var this_sym8615__8619 = this;
var coll__8620 = this_sym8615__8619;
return coll__8620.cljs$core$ILookup$_lookup$arity$3(coll__8620,k,not_found);
});
G__8661 = function(this_sym8615,k,not_found){
switch(arguments.length){
case 2:
return G__8661__2.call(this,this_sym8615,k);
case 3:
return G__8661__3.call(this,this_sym8615,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8661;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym8603,args8604){
var this__8621 = this;
return this_sym8603.call.apply(this_sym8603,[this_sym8603].concat(args8604.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__8622 = this;
var step_init__8623 = [0,init];
var i__8624 = 0;
while(true){
if((i__8624 < this__8622.cnt))
{var arr__8625 = cljs.core.array_for.call(null,v,i__8624);
var len__8626 = arr__8625.length;
var init__8630 = (function (){var j__8627 = 0;
var init__8628 = (step_init__8623[1]);
while(true){
if((j__8627 < len__8626))
{var init__8629 = f.call(null,init__8628,(j__8627 + i__8624),(arr__8625[j__8627]));
if(cljs.core.reduced_QMARK_.call(null,init__8629))
{return init__8629;
} else
{{
var G__8662 = (j__8627 + 1);
var G__8663 = init__8629;
j__8627 = G__8662;
init__8628 = G__8663;
continue;
}
}
} else
{(step_init__8623[0] = len__8626);
(step_init__8623[1] = init__8628);
return init__8628;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__8630))
{return cljs.core.deref.call(null,init__8630);
} else
{{
var G__8664 = (i__8624 + (step_init__8623[0]));
i__8624 = G__8664;
continue;
}
}
} else
{return (step_init__8623[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8631 = this;
if(((this__8631.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__8632 = this__8631.tail.slice();
new_tail__8632.push(o);
return (new cljs.core.PersistentVector(this__8631.meta,(this__8631.cnt + 1),this__8631.shift,this__8631.root,new_tail__8632,null));
} else
{var root_overflow_QMARK___8633 = ((this__8631.cnt >>> 5) > (1 << this__8631.shift));
var new_shift__8634 = ((root_overflow_QMARK___8633)?(this__8631.shift + 5):this__8631.shift);
var new_root__8636 = ((root_overflow_QMARK___8633)?(function (){var n_r__8635 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__8635,0,this__8631.root);
cljs.core.pv_aset.call(null,n_r__8635,1,cljs.core.new_path.call(null,null,this__8631.shift,(new cljs.core.VectorNode(null,this__8631.tail))));
return n_r__8635;
})():cljs.core.push_tail.call(null,coll,this__8631.shift,this__8631.root,(new cljs.core.VectorNode(null,this__8631.tail))));
return (new cljs.core.PersistentVector(this__8631.meta,(this__8631.cnt + 1),new_shift__8634,new_root__8636,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__8637 = this;
if((this__8637.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__8637.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__8638 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__8639 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__8640 = this;
var this__8641 = this;
return cljs.core.pr_str.call(null,this__8641);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8642 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8643 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8644 = this;
if((this__8644.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8645 = this;
return this__8645.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8646 = this;
if((this__8646.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__8646.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8647 = this;
if((this__8647.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8647.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8647.meta);
} else
{if((1 < (this__8647.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__8647.meta,(this__8647.cnt - 1),this__8647.shift,this__8647.root,this__8647.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__8648 = cljs.core.array_for.call(null,coll,(this__8647.cnt - 2));
var nr__8649 = cljs.core.pop_tail.call(null,coll,this__8647.shift,this__8647.root);
var new_root__8650 = (((nr__8649 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__8649);
var cnt_1__8651 = (this__8647.cnt - 1);
if((function (){var and__3822__auto____8652 = (5 < this__8647.shift);
if(and__3822__auto____8652)
{return (cljs.core.pv_aget.call(null,new_root__8650,1) == null);
} else
{return and__3822__auto____8652;
}
})())
{return (new cljs.core.PersistentVector(this__8647.meta,cnt_1__8651,(this__8647.shift - 5),cljs.core.pv_aget.call(null,new_root__8650,0),new_tail__8648,null));
} else
{return (new cljs.core.PersistentVector(this__8647.meta,cnt_1__8651,this__8647.shift,new_root__8650,new_tail__8648,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8653 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8654 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8655 = this;
return (new cljs.core.PersistentVector(meta,this__8655.cnt,this__8655.shift,this__8655.root,this__8655.tail,this__8655.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8656 = this;
return this__8656.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8657 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8658 = this;
if((function (){var and__3822__auto____8659 = (0 <= n);
if(and__3822__auto____8659)
{return (n < this__8658.cnt);
} else
{return and__3822__auto____8659;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8660 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8660.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__8665 = xs.length;
var xs__8666 = (((no_clone === true))?xs:xs.slice());
if((l__8665 < 32))
{return (new cljs.core.PersistentVector(null,l__8665,5,cljs.core.PersistentVector.EMPTY_NODE,xs__8666,null));
} else
{var node__8667 = xs__8666.slice(0,32);
var v__8668 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__8667,null));
var i__8669 = 32;
var out__8670 = cljs.core._as_transient.call(null,v__8668);
while(true){
if((i__8669 < l__8665))
{{
var G__8671 = (i__8669 + 1);
var G__8672 = cljs.core.conj_BANG_.call(null,out__8670,(xs__8666[i__8669]));
i__8669 = G__8671;
out__8670 = G__8672;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8670);
}
break;
}
}
});
cljs.core.vec = (function vec(coll){
return cljs.core._persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core._as_transient.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__8673){
var args = cljs.core.seq(arglist__8673);;
return vector__delegate(args);
});
vector.cljs$lang$arity$variadic = vector__delegate;
return vector;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27525356;
})
cljs.core.ChunkedSeq.cljs$lang$type = true;
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8674 = this;
if(((this__8674.off + 1) < this__8674.node.length))
{var s__8675 = cljs.core.chunked_seq.call(null,this__8674.vec,this__8674.node,this__8674.i,(this__8674.off + 1));
if((s__8675 == null))
{return null;
} else
{return s__8675;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8676 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8677 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8678 = this;
return (this__8678.node[this__8678.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8679 = this;
if(((this__8679.off + 1) < this__8679.node.length))
{var s__8680 = cljs.core.chunked_seq.call(null,this__8679.vec,this__8679.node,this__8679.i,(this__8679.off + 1));
if((s__8680 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8680;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__8681 = this;
var l__8682 = this__8681.node.length;
var s__8683 = ((((this__8681.i + l__8682) < cljs.core._count.call(null,this__8681.vec)))?cljs.core.chunked_seq.call(null,this__8681.vec,(this__8681.i + l__8682),0):null);
if((s__8683 == null))
{return null;
} else
{return s__8683;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8684 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__8685 = this;
return cljs.core.chunked_seq.call(null,this__8685.vec,this__8685.node,this__8685.i,this__8685.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__8686 = this;
return this__8686.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8687 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8687.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__8688 = this;
return cljs.core.array_chunk.call(null,this__8688.node,this__8688.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__8689 = this;
var l__8690 = this__8689.node.length;
var s__8691 = ((((this__8689.i + l__8690) < cljs.core._count.call(null,this__8689.vec)))?cljs.core.chunked_seq.call(null,this__8689.vec,(this__8689.i + l__8690),0):null);
if((s__8691 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8691;
}
});
cljs.core.ChunkedSeq;
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){
return chunked_seq.call(null,vec,cljs.core.array_for.call(null,vec,i),i,off,null);
});
var chunked_seq__4 = (function (vec,node,i,off){
return chunked_seq.call(null,vec,node,i,off,null);
});
var chunked_seq__5 = (function (vec,node,i,off,meta){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw('Invalid arity: ' + arguments.length);
};
chunked_seq.cljs$lang$arity$3 = chunked_seq__3;
chunked_seq.cljs$lang$arity$4 = chunked_seq__4;
chunked_seq.cljs$lang$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8694 = this;
var h__2153__auto____8695 = this__8694.__hash;
if(!((h__2153__auto____8695 == null)))
{return h__2153__auto____8695;
} else
{var h__2153__auto____8696 = cljs.core.hash_coll.call(null,coll);
this__8694.__hash = h__2153__auto____8696;
return h__2153__auto____8696;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8697 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8698 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__8699 = this;
var v_pos__8700 = (this__8699.start + key);
return (new cljs.core.Subvec(this__8699.meta,cljs.core._assoc.call(null,this__8699.v,v_pos__8700,val),this__8699.start,((this__8699.end > (v_pos__8700 + 1)) ? this__8699.end : (v_pos__8700 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__8726 = null;
var G__8726__2 = (function (this_sym8701,k){
var this__8703 = this;
var this_sym8701__8704 = this;
var coll__8705 = this_sym8701__8704;
return coll__8705.cljs$core$ILookup$_lookup$arity$2(coll__8705,k);
});
var G__8726__3 = (function (this_sym8702,k,not_found){
var this__8703 = this;
var this_sym8702__8706 = this;
var coll__8707 = this_sym8702__8706;
return coll__8707.cljs$core$ILookup$_lookup$arity$3(coll__8707,k,not_found);
});
G__8726 = function(this_sym8702,k,not_found){
switch(arguments.length){
case 2:
return G__8726__2.call(this,this_sym8702,k);
case 3:
return G__8726__3.call(this,this_sym8702,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8726;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym8692,args8693){
var this__8708 = this;
return this_sym8692.call.apply(this_sym8692,[this_sym8692].concat(args8693.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8709 = this;
return (new cljs.core.Subvec(this__8709.meta,cljs.core._assoc_n.call(null,this__8709.v,this__8709.end,o),this__8709.start,(this__8709.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__8710 = this;
var this__8711 = this;
return cljs.core.pr_str.call(null,this__8711);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__8712 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__8713 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8714 = this;
var subvec_seq__8715 = (function subvec_seq(i){
if((i === this__8714.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__8714.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__8715.call(null,this__8714.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8716 = this;
return (this__8716.end - this__8716.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8717 = this;
return cljs.core._nth.call(null,this__8717.v,(this__8717.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8718 = this;
if((this__8718.start === this__8718.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__8718.meta,this__8718.v,this__8718.start,(this__8718.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8719 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8720 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8721 = this;
return (new cljs.core.Subvec(meta,this__8721.v,this__8721.start,this__8721.end,this__8721.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8722 = this;
return this__8722.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8723 = this;
return cljs.core._nth.call(null,this__8723.v,(this__8723.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8724 = this;
return cljs.core._nth.call(null,this__8724.v,(this__8724.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8725 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8725.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__3 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end,null));
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subvec.cljs$lang$arity$2 = subvec__2;
subvec.cljs$lang$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){
if((edit === node.edit))
{return node;
} else
{return (new cljs.core.VectorNode(edit,node.arr.slice()));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){
return (new cljs.core.VectorNode({},node.arr.slice()));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){
var ret__8728 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__8728,0,tl.length);
return ret__8728;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__8732 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__8733 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8732,subidx__8733,(((level === 5))?tail_node:(function (){var child__8734 = cljs.core.pv_aget.call(null,ret__8732,subidx__8733);
if(!((child__8734 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__8734,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__8732;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__8739 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__8740 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8741 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__8739,subidx__8740));
if((function (){var and__3822__auto____8742 = (new_child__8741 == null);
if(and__3822__auto____8742)
{return (subidx__8740 === 0);
} else
{return and__3822__auto____8742;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__8739,subidx__8740,new_child__8741);
return node__8739;
}
} else
{if((subidx__8740 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__8739,subidx__8740,null);
return node__8739;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____8747 = (0 <= i);
if(and__3822__auto____8747)
{return (i < tv.cnt);
} else
{return and__3822__auto____8747;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__8748 = tv.root;
var node__8749 = root__8748;
var level__8750 = tv.shift;
while(true){
if((level__8750 > 0))
{{
var G__8751 = cljs.core.tv_ensure_editable.call(null,root__8748.edit,cljs.core.pv_aget.call(null,node__8749,((i >>> level__8750) & 31)));
var G__8752 = (level__8750 - 5);
node__8749 = G__8751;
level__8750 = G__8752;
continue;
}
} else
{return node__8749.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in transient vector of length "),cljs.core.str(tv.cnt)].join('')));
}
});

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 22;
})
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__8792 = null;
var G__8792__2 = (function (this_sym8755,k){
var this__8757 = this;
var this_sym8755__8758 = this;
var coll__8759 = this_sym8755__8758;
return coll__8759.cljs$core$ILookup$_lookup$arity$2(coll__8759,k);
});
var G__8792__3 = (function (this_sym8756,k,not_found){
var this__8757 = this;
var this_sym8756__8760 = this;
var coll__8761 = this_sym8756__8760;
return coll__8761.cljs$core$ILookup$_lookup$arity$3(coll__8761,k,not_found);
});
G__8792 = function(this_sym8756,k,not_found){
switch(arguments.length){
case 2:
return G__8792__2.call(this,this_sym8756,k);
case 3:
return G__8792__3.call(this,this_sym8756,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8792;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym8753,args8754){
var this__8762 = this;
return this_sym8753.call.apply(this_sym8753,[this_sym8753].concat(args8754.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8763 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8764 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8765 = this;
if(this__8765.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8766 = this;
if((function (){var and__3822__auto____8767 = (0 <= n);
if(and__3822__auto____8767)
{return (n < this__8766.cnt);
} else
{return and__3822__auto____8767;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8768 = this;
if(this__8768.root.edit)
{return this__8768.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__8769 = this;
if(this__8769.root.edit)
{if((function (){var and__3822__auto____8770 = (0 <= n);
if(and__3822__auto____8770)
{return (n < this__8769.cnt);
} else
{return and__3822__auto____8770;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__8769.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__8775 = (function go(level,node){
var node__8773 = cljs.core.tv_ensure_editable.call(null,this__8769.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__8773,(n & 31),val);
return node__8773;
} else
{var subidx__8774 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__8773,subidx__8774,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__8773,subidx__8774)));
return node__8773;
}
}).call(null,this__8769.shift,this__8769.root);
this__8769.root = new_root__8775;
return tcoll;
}
} else
{if((n === this__8769.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__8769.cnt)].join('')));
} else
{return null;
}
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var this__8776 = this;
if(this__8776.root.edit)
{if((this__8776.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8776.cnt))
{this__8776.cnt = 0;
return tcoll;
} else
{if((((this__8776.cnt - 1) & 31) > 0))
{this__8776.cnt = (this__8776.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__8777 = cljs.core.editable_array_for.call(null,tcoll,(this__8776.cnt - 2));
var new_root__8779 = (function (){var nr__8778 = cljs.core.tv_pop_tail.call(null,tcoll,this__8776.shift,this__8776.root);
if(!((nr__8778 == null)))
{return nr__8778;
} else
{return (new cljs.core.VectorNode(this__8776.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____8780 = (5 < this__8776.shift);
if(and__3822__auto____8780)
{return (cljs.core.pv_aget.call(null,new_root__8779,1) == null);
} else
{return and__3822__auto____8780;
}
})())
{var new_root__8781 = cljs.core.tv_ensure_editable.call(null,this__8776.root.edit,cljs.core.pv_aget.call(null,new_root__8779,0));
this__8776.root = new_root__8781;
this__8776.shift = (this__8776.shift - 5);
this__8776.cnt = (this__8776.cnt - 1);
this__8776.tail = new_tail__8777;
return tcoll;
} else
{this__8776.root = new_root__8779;
this__8776.cnt = (this__8776.cnt - 1);
this__8776.tail = new_tail__8777;
return tcoll;
}
} else
{return null;
}
}
}
}
} else
{throw (new Error("pop! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__8782 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8783 = this;
if(this__8783.root.edit)
{if(((this__8783.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__8783.tail[(this__8783.cnt & 31)] = o);
this__8783.cnt = (this__8783.cnt + 1);
return tcoll;
} else
{var tail_node__8784 = (new cljs.core.VectorNode(this__8783.root.edit,this__8783.tail));
var new_tail__8785 = cljs.core.make_array.call(null,32);
(new_tail__8785[0] = o);
this__8783.tail = new_tail__8785;
if(((this__8783.cnt >>> 5) > (1 << this__8783.shift)))
{var new_root_array__8786 = cljs.core.make_array.call(null,32);
var new_shift__8787 = (this__8783.shift + 5);
(new_root_array__8786[0] = this__8783.root);
(new_root_array__8786[1] = cljs.core.new_path.call(null,this__8783.root.edit,this__8783.shift,tail_node__8784));
this__8783.root = (new cljs.core.VectorNode(this__8783.root.edit,new_root_array__8786));
this__8783.shift = new_shift__8787;
this__8783.cnt = (this__8783.cnt + 1);
return tcoll;
} else
{var new_root__8788 = cljs.core.tv_push_tail.call(null,tcoll,this__8783.shift,this__8783.root,tail_node__8784);
this__8783.root = new_root__8788;
this__8783.cnt = (this__8783.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8789 = this;
if(this__8789.root.edit)
{this__8789.root.edit = null;
var len__8790 = (this__8789.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__8791 = cljs.core.make_array.call(null,len__8790);
cljs.core.array_copy.call(null,this__8789.tail,0,trimmed_tail__8791,0,len__8790);
return (new cljs.core.PersistentVector(null,this__8789.cnt,this__8789.shift,this__8789.root,trimmed_tail__8791,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientVector;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8793 = this;
var h__2153__auto____8794 = this__8793.__hash;
if(!((h__2153__auto____8794 == null)))
{return h__2153__auto____8794;
} else
{var h__2153__auto____8795 = cljs.core.hash_coll.call(null,coll);
this__8793.__hash = h__2153__auto____8795;
return h__2153__auto____8795;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8796 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__8797 = this;
var this__8798 = this;
return cljs.core.pr_str.call(null,this__8798);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8799 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8800 = this;
return cljs.core._first.call(null,this__8800.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8801 = this;
var temp__3971__auto____8802 = cljs.core.next.call(null,this__8801.front);
if(temp__3971__auto____8802)
{var f1__8803 = temp__3971__auto____8802;
return (new cljs.core.PersistentQueueSeq(this__8801.meta,f1__8803,this__8801.rear,null));
} else
{if((this__8801.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__8801.meta,this__8801.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8804 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8805 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__8805.front,this__8805.rear,this__8805.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8806 = this;
return this__8806.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8807 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8807.meta);
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
})
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8808 = this;
var h__2153__auto____8809 = this__8808.__hash;
if(!((h__2153__auto____8809 == null)))
{return h__2153__auto____8809;
} else
{var h__2153__auto____8810 = cljs.core.hash_coll.call(null,coll);
this__8808.__hash = h__2153__auto____8810;
return h__2153__auto____8810;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8811 = this;
if(cljs.core.truth_(this__8811.front))
{return (new cljs.core.PersistentQueue(this__8811.meta,(this__8811.count + 1),this__8811.front,cljs.core.conj.call(null,(function (){var or__3824__auto____8812 = this__8811.rear;
if(cljs.core.truth_(or__3824__auto____8812))
{return or__3824__auto____8812;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__8811.meta,(this__8811.count + 1),cljs.core.conj.call(null,this__8811.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__8813 = this;
var this__8814 = this;
return cljs.core.pr_str.call(null,this__8814);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8815 = this;
var rear__8816 = cljs.core.seq.call(null,this__8815.rear);
if(cljs.core.truth_((function (){var or__3824__auto____8817 = this__8815.front;
if(cljs.core.truth_(or__3824__auto____8817))
{return or__3824__auto____8817;
} else
{return rear__8816;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__8815.front,cljs.core.seq.call(null,rear__8816),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8818 = this;
return this__8818.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8819 = this;
return cljs.core._first.call(null,this__8819.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8820 = this;
if(cljs.core.truth_(this__8820.front))
{var temp__3971__auto____8821 = cljs.core.next.call(null,this__8820.front);
if(temp__3971__auto____8821)
{var f1__8822 = temp__3971__auto____8821;
return (new cljs.core.PersistentQueue(this__8820.meta,(this__8820.count - 1),f1__8822,this__8820.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__8820.meta,(this__8820.count - 1),cljs.core.seq.call(null,this__8820.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8823 = this;
return cljs.core.first.call(null,this__8823.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8824 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8825 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8826 = this;
return (new cljs.core.PersistentQueue(meta,this__8826.count,this__8826.front,this__8826.rear,this__8826.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8827 = this;
return this__8827.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8828 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.EMPTY,0));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__8829 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,((cljs.core.map_QMARK_.call(null,y))?(((cljs.core.count.call(null,x) === cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core._lookup.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__8832 = array.length;
var i__8833 = 0;
while(true){
if((i__8833 < len__8832))
{if((k === (array[i__8833])))
{return i__8833;
} else
{{
var G__8834 = (i__8833 + incr);
i__8833 = G__8834;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__8837 = cljs.core.hash.call(null,a);
var b__8838 = cljs.core.hash.call(null,b);
if((a__8837 < b__8838))
{return -1;
} else
{if((a__8837 > b__8838))
{return 1;
} else
{if("\uFDD0'else")
{return 0;
} else
{return null;
}
}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){
var ks__8846 = m.keys;
var len__8847 = ks__8846.length;
var so__8848 = m.strobj;
var out__8849 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__8850 = 0;
var out__8851 = cljs.core.transient$.call(null,out__8849);
while(true){
if((i__8850 < len__8847))
{var k__8852 = (ks__8846[i__8850]);
{
var G__8853 = (i__8850 + 1);
var G__8854 = cljs.core.assoc_BANG_.call(null,out__8851,k__8852,(so__8848[k__8852]));
i__8850 = G__8853;
out__8851 = G__8854;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__8851,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__8860 = {};
var l__8861 = ks.length;
var i__8862 = 0;
while(true){
if((i__8862 < l__8861))
{var k__8863 = (ks[i__8862]);
(new_obj__8860[k__8863] = (obj[k__8863]));
{
var G__8864 = (i__8862 + 1);
i__8862 = G__8864;
continue;
}
} else
{}
break;
}
return new_obj__8860;
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8867 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8868 = this;
var h__2153__auto____8869 = this__8868.__hash;
if(!((h__2153__auto____8869 == null)))
{return h__2153__auto____8869;
} else
{var h__2153__auto____8870 = cljs.core.hash_imap.call(null,coll);
this__8868.__hash = h__2153__auto____8870;
return h__2153__auto____8870;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8871 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8872 = this;
if((function (){var and__3822__auto____8873 = goog.isString(k);
if(and__3822__auto____8873)
{return !((cljs.core.scan_array.call(null,1,k,this__8872.keys) == null));
} else
{return and__3822__auto____8873;
}
})())
{return (this__8872.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8874 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____8875 = (this__8874.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____8875)
{return or__3824__auto____8875;
} else
{return (this__8874.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__8874.keys) == null)))
{var new_strobj__8876 = cljs.core.obj_clone.call(null,this__8874.strobj,this__8874.keys);
(new_strobj__8876[k] = v);
return (new cljs.core.ObjMap(this__8874.meta,this__8874.keys,new_strobj__8876,(this__8874.update_count + 1),null));
} else
{var new_strobj__8877 = cljs.core.obj_clone.call(null,this__8874.strobj,this__8874.keys);
var new_keys__8878 = this__8874.keys.slice();
(new_strobj__8877[k] = v);
new_keys__8878.push(k);
return (new cljs.core.ObjMap(this__8874.meta,new_keys__8878,new_strobj__8877,(this__8874.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8879 = this;
if((function (){var and__3822__auto____8880 = goog.isString(k);
if(and__3822__auto____8880)
{return !((cljs.core.scan_array.call(null,1,k,this__8879.keys) == null));
} else
{return and__3822__auto____8880;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__8902 = null;
var G__8902__2 = (function (this_sym8881,k){
var this__8883 = this;
var this_sym8881__8884 = this;
var coll__8885 = this_sym8881__8884;
return coll__8885.cljs$core$ILookup$_lookup$arity$2(coll__8885,k);
});
var G__8902__3 = (function (this_sym8882,k,not_found){
var this__8883 = this;
var this_sym8882__8886 = this;
var coll__8887 = this_sym8882__8886;
return coll__8887.cljs$core$ILookup$_lookup$arity$3(coll__8887,k,not_found);
});
G__8902 = function(this_sym8882,k,not_found){
switch(arguments.length){
case 2:
return G__8902__2.call(this,this_sym8882,k);
case 3:
return G__8902__3.call(this,this_sym8882,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8902;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym8865,args8866){
var this__8888 = this;
return this_sym8865.call.apply(this_sym8865,[this_sym8865].concat(args8866.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8889 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__8890 = this;
var this__8891 = this;
return cljs.core.pr_str.call(null,this__8891);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8892 = this;
if((this__8892.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__8855_SHARP_){
return cljs.core.vector.call(null,p1__8855_SHARP_,(this__8892.strobj[p1__8855_SHARP_]));
}),this__8892.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8893 = this;
return this__8893.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8894 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8895 = this;
return (new cljs.core.ObjMap(meta,this__8895.keys,this__8895.strobj,this__8895.update_count,this__8895.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8896 = this;
return this__8896.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8897 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__8897.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8898 = this;
if((function (){var and__3822__auto____8899 = goog.isString(k);
if(and__3822__auto____8899)
{return !((cljs.core.scan_array.call(null,1,k,this__8898.keys) == null));
} else
{return and__3822__auto____8899;
}
})())
{var new_keys__8900 = this__8898.keys.slice();
var new_strobj__8901 = cljs.core.obj_clone.call(null,this__8898.strobj,this__8898.keys);
new_keys__8900.splice(cljs.core.scan_array.call(null,1,k,new_keys__8900),1);
cljs.core.js_delete.call(null,new_strobj__8901,k);
return (new cljs.core.ObjMap(this__8898.meta,new_keys__8900,new_strobj__8901,(this__8898.update_count + 1),null));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],{},0,0));
cljs.core.ObjMap.HASHMAP_THRESHOLD = 32;
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj,0,null));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj,__hash){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.HashMap.cljs$lang$type = true;
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8906 = this;
var h__2153__auto____8907 = this__8906.__hash;
if(!((h__2153__auto____8907 == null)))
{return h__2153__auto____8907;
} else
{var h__2153__auto____8908 = cljs.core.hash_imap.call(null,coll);
this__8906.__hash = h__2153__auto____8908;
return h__2153__auto____8908;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8909 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8910 = this;
var bucket__8911 = (this__8910.hashobj[cljs.core.hash.call(null,k)]);
var i__8912 = (cljs.core.truth_(bucket__8911)?cljs.core.scan_array.call(null,2,k,bucket__8911):null);
if(cljs.core.truth_(i__8912))
{return (bucket__8911[(i__8912 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8913 = this;
var h__8914 = cljs.core.hash.call(null,k);
var bucket__8915 = (this__8913.hashobj[h__8914]);
if(cljs.core.truth_(bucket__8915))
{var new_bucket__8916 = bucket__8915.slice();
var new_hashobj__8917 = goog.object.clone(this__8913.hashobj);
(new_hashobj__8917[h__8914] = new_bucket__8916);
var temp__3971__auto____8918 = cljs.core.scan_array.call(null,2,k,new_bucket__8916);
if(cljs.core.truth_(temp__3971__auto____8918))
{var i__8919 = temp__3971__auto____8918;
(new_bucket__8916[(i__8919 + 1)] = v);
return (new cljs.core.HashMap(this__8913.meta,this__8913.count,new_hashobj__8917,null));
} else
{new_bucket__8916.push(k,v);
return (new cljs.core.HashMap(this__8913.meta,(this__8913.count + 1),new_hashobj__8917,null));
}
} else
{var new_hashobj__8920 = goog.object.clone(this__8913.hashobj);
(new_hashobj__8920[h__8914] = [k,v]);
return (new cljs.core.HashMap(this__8913.meta,(this__8913.count + 1),new_hashobj__8920,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8921 = this;
var bucket__8922 = (this__8921.hashobj[cljs.core.hash.call(null,k)]);
var i__8923 = (cljs.core.truth_(bucket__8922)?cljs.core.scan_array.call(null,2,k,bucket__8922):null);
if(cljs.core.truth_(i__8923))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__8948 = null;
var G__8948__2 = (function (this_sym8924,k){
var this__8926 = this;
var this_sym8924__8927 = this;
var coll__8928 = this_sym8924__8927;
return coll__8928.cljs$core$ILookup$_lookup$arity$2(coll__8928,k);
});
var G__8948__3 = (function (this_sym8925,k,not_found){
var this__8926 = this;
var this_sym8925__8929 = this;
var coll__8930 = this_sym8925__8929;
return coll__8930.cljs$core$ILookup$_lookup$arity$3(coll__8930,k,not_found);
});
G__8948 = function(this_sym8925,k,not_found){
switch(arguments.length){
case 2:
return G__8948__2.call(this,this_sym8925,k);
case 3:
return G__8948__3.call(this,this_sym8925,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8948;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym8904,args8905){
var this__8931 = this;
return this_sym8904.call.apply(this_sym8904,[this_sym8904].concat(args8905.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8932 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__8933 = this;
var this__8934 = this;
return cljs.core.pr_str.call(null,this__8934);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8935 = this;
if((this__8935.count > 0))
{var hashes__8936 = cljs.core.js_keys.call(null,this__8935.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__8903_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__8935.hashobj[p1__8903_SHARP_])));
}),hashes__8936);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8937 = this;
return this__8937.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8938 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8939 = this;
return (new cljs.core.HashMap(meta,this__8939.count,this__8939.hashobj,this__8939.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8940 = this;
return this__8940.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8941 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__8941.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8942 = this;
var h__8943 = cljs.core.hash.call(null,k);
var bucket__8944 = (this__8942.hashobj[h__8943]);
var i__8945 = (cljs.core.truth_(bucket__8944)?cljs.core.scan_array.call(null,2,k,bucket__8944):null);
if(cljs.core.not.call(null,i__8945))
{return coll;
} else
{var new_hashobj__8946 = goog.object.clone(this__8942.hashobj);
if((3 > bucket__8944.length))
{cljs.core.js_delete.call(null,new_hashobj__8946,h__8943);
} else
{var new_bucket__8947 = bucket__8944.slice();
new_bucket__8947.splice(i__8945,2);
(new_hashobj__8946[h__8943] = new_bucket__8947);
}
return (new cljs.core.HashMap(this__8942.meta,(this__8942.count - 1),new_hashobj__8946,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__8949 = ks.length;
var i__8950 = 0;
var out__8951 = cljs.core.HashMap.EMPTY;
while(true){
if((i__8950 < len__8949))
{{
var G__8952 = (i__8950 + 1);
var G__8953 = cljs.core.assoc.call(null,out__8951,(ks[i__8950]),(vs[i__8950]));
i__8950 = G__8952;
out__8951 = G__8953;
continue;
}
} else
{return out__8951;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__8957 = m.arr;
var len__8958 = arr__8957.length;
var i__8959 = 0;
while(true){
if((len__8958 <= i__8959))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__8957[i__8959]),k))
{return i__8959;
} else
{if("\uFDD0'else")
{{
var G__8960 = (i__8959 + 2);
i__8959 = G__8960;
continue;
}
} else
{return null;
}
}
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8963 = this;
return (new cljs.core.TransientArrayMap({},this__8963.arr.length,this__8963.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8964 = this;
var h__2153__auto____8965 = this__8964.__hash;
if(!((h__2153__auto____8965 == null)))
{return h__2153__auto____8965;
} else
{var h__2153__auto____8966 = cljs.core.hash_imap.call(null,coll);
this__8964.__hash = h__2153__auto____8966;
return h__2153__auto____8966;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8967 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8968 = this;
var idx__8969 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8969 === -1))
{return not_found;
} else
{return (this__8968.arr[(idx__8969 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8970 = this;
var idx__8971 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8971 === -1))
{if((this__8970.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__8970.meta,(this__8970.cnt + 1),(function (){var G__8972__8973 = this__8970.arr.slice();
G__8972__8973.push(k);
G__8972__8973.push(v);
return G__8972__8973;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__8970.arr[(idx__8971 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__8970.meta,this__8970.cnt,(function (){var G__8974__8975 = this__8970.arr.slice();
(G__8974__8975[(idx__8971 + 1)] = v);
return G__8974__8975;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8976 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__9008 = null;
var G__9008__2 = (function (this_sym8977,k){
var this__8979 = this;
var this_sym8977__8980 = this;
var coll__8981 = this_sym8977__8980;
return coll__8981.cljs$core$ILookup$_lookup$arity$2(coll__8981,k);
});
var G__9008__3 = (function (this_sym8978,k,not_found){
var this__8979 = this;
var this_sym8978__8982 = this;
var coll__8983 = this_sym8978__8982;
return coll__8983.cljs$core$ILookup$_lookup$arity$3(coll__8983,k,not_found);
});
G__9008 = function(this_sym8978,k,not_found){
switch(arguments.length){
case 2:
return G__9008__2.call(this,this_sym8978,k);
case 3:
return G__9008__3.call(this,this_sym8978,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9008;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym8961,args8962){
var this__8984 = this;
return this_sym8961.call.apply(this_sym8961,[this_sym8961].concat(args8962.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__8985 = this;
var len__8986 = this__8985.arr.length;
var i__8987 = 0;
var init__8988 = init;
while(true){
if((i__8987 < len__8986))
{var init__8989 = f.call(null,init__8988,(this__8985.arr[i__8987]),(this__8985.arr[(i__8987 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__8989))
{return cljs.core.deref.call(null,init__8989);
} else
{{
var G__9009 = (i__8987 + 2);
var G__9010 = init__8989;
i__8987 = G__9009;
init__8988 = G__9010;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8990 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__8991 = this;
var this__8992 = this;
return cljs.core.pr_str.call(null,this__8992);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8993 = this;
if((this__8993.cnt > 0))
{var len__8994 = this__8993.arr.length;
var array_map_seq__8995 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__8994))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__8993.arr[i]),(this__8993.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__8995.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8996 = this;
return this__8996.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8997 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8998 = this;
return (new cljs.core.PersistentArrayMap(meta,this__8998.cnt,this__8998.arr,this__8998.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8999 = this;
return this__8999.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9000 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9000.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9001 = this;
var idx__9002 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__9002 >= 0))
{var len__9003 = this__9001.arr.length;
var new_len__9004 = (len__9003 - 2);
if((new_len__9004 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__9005 = cljs.core.make_array.call(null,new_len__9004);
var s__9006 = 0;
var d__9007 = 0;
while(true){
if((s__9006 >= len__9003))
{return (new cljs.core.PersistentArrayMap(this__9001.meta,(this__9001.cnt - 1),new_arr__9005,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__9001.arr[s__9006])))
{{
var G__9011 = (s__9006 + 2);
var G__9012 = d__9007;
s__9006 = G__9011;
d__9007 = G__9012;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__9005[d__9007] = (this__9001.arr[s__9006]));
(new_arr__9005[(d__9007 + 1)] = (this__9001.arr[(s__9006 + 1)]));
{
var G__9013 = (s__9006 + 2);
var G__9014 = (d__9007 + 2);
s__9006 = G__9013;
d__9007 = G__9014;
continue;
}
} else
{return null;
}
}
}
break;
}
}
} else
{return coll;
}
});
cljs.core.PersistentArrayMap;
cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,0,[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = 16;
cljs.core.PersistentArrayMap.fromArrays = (function (ks,vs){
var len__9015 = cljs.core.count.call(null,ks);
var i__9016 = 0;
var out__9017 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__9016 < len__9015))
{{
var G__9018 = (i__9016 + 1);
var G__9019 = cljs.core.assoc_BANG_.call(null,out__9017,(ks[i__9016]),(vs[i__9016]));
i__9016 = G__9018;
out__9017 = G__9019;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9017);
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__9020 = this;
if(cljs.core.truth_(this__9020.editable_QMARK_))
{var idx__9021 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__9021 >= 0))
{(this__9020.arr[idx__9021] = (this__9020.arr[(this__9020.len - 2)]));
(this__9020.arr[(idx__9021 + 1)] = (this__9020.arr[(this__9020.len - 1)]));
var G__9022__9023 = this__9020.arr;
G__9022__9023.pop();
G__9022__9023.pop();
G__9022__9023;
this__9020.len = (this__9020.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9024 = this;
if(cljs.core.truth_(this__9024.editable_QMARK_))
{var idx__9025 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__9025 === -1))
{if(((this__9024.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__9024.len = (this__9024.len + 2);
this__9024.arr.push(key);
this__9024.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__9024.len,this__9024.arr),key,val);
}
} else
{if((val === (this__9024.arr[(idx__9025 + 1)])))
{return tcoll;
} else
{(this__9024.arr[(idx__9025 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9026 = this;
if(cljs.core.truth_(this__9026.editable_QMARK_))
{if((function (){var G__9027__9028 = o;
if(G__9027__9028)
{if((function (){var or__3824__auto____9029 = (G__9027__9028.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____9029)
{return or__3824__auto____9029;
} else
{return G__9027__9028.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__9027__9028.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9027__9028);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9027__9028);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__9030 = cljs.core.seq.call(null,o);
var tcoll__9031 = tcoll;
while(true){
var temp__3971__auto____9032 = cljs.core.first.call(null,es__9030);
if(cljs.core.truth_(temp__3971__auto____9032))
{var e__9033 = temp__3971__auto____9032;
{
var G__9039 = cljs.core.next.call(null,es__9030);
var G__9040 = tcoll__9031.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__9031,cljs.core.key.call(null,e__9033),cljs.core.val.call(null,e__9033));
es__9030 = G__9039;
tcoll__9031 = G__9040;
continue;
}
} else
{return tcoll__9031;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9034 = this;
if(cljs.core.truth_(this__9034.editable_QMARK_))
{this__9034.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__9034.len,2),this__9034.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__9035 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__9036 = this;
if(cljs.core.truth_(this__9036.editable_QMARK_))
{var idx__9037 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__9037 === -1))
{return not_found;
} else
{return (this__9036.arr[(idx__9037 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9038 = this;
if(cljs.core.truth_(this__9038.editable_QMARK_))
{return cljs.core.quot.call(null,this__9038.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
void 0;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__9043 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__9044 = 0;
while(true){
if((i__9044 < len))
{{
var G__9045 = cljs.core.assoc_BANG_.call(null,out__9043,(arr[i__9044]),(arr[(i__9044 + 1)]));
var G__9046 = (i__9044 + 2);
out__9043 = G__9045;
i__9044 = G__9046;
continue;
}
} else
{return out__9043;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})
cljs.core.Box.cljs$lang$type = true;
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__2271__auto__){
return cljs.core.list.call(null,"cljs.core/Box");
});
cljs.core.Box;
void 0;
void 0;
void 0;
void 0;
void 0;
void 0;
cljs.core.key_test = (function key_test(key,other){
if(goog.isString(key))
{return (key === other);
} else
{return cljs.core._EQ_.call(null,key,other);
}
});
cljs.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & 31);
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__9051__9052 = arr.slice();
(G__9051__9052[i] = a);
return G__9051__9052;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__9053__9054 = arr.slice();
(G__9053__9054[i] = a);
(G__9053__9054[j] = b);
return G__9053__9054;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
clone_and_set.cljs$lang$arity$3 = clone_and_set__3;
clone_and_set.cljs$lang$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){
var new_arr__9056 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__9056,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__9056,(2 * i),(new_arr__9056.length - (2 * i)));
return new_arr__9056;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count.call(null,(bitmap & (bit - 1)));
});
cljs.core.bitpos = (function bitpos(hash,shift){
return (1 << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable__9059 = inode.ensure_editable(edit);
(editable__9059.arr[i] = a);
return editable__9059;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__9060 = inode.ensure_editable(edit);
(editable__9060.arr[i] = a);
(editable__9060.arr[j] = b);
return editable__9060;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
edit_and_set.cljs$lang$arity$4 = edit_and_set__4;
edit_and_set.cljs$lang$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){
var len__9067 = arr.length;
var i__9068 = 0;
var init__9069 = init;
while(true){
if((i__9068 < len__9067))
{var init__9072 = (function (){var k__9070 = (arr[i__9068]);
if(!((k__9070 == null)))
{return f.call(null,init__9069,k__9070,(arr[(i__9068 + 1)]));
} else
{var node__9071 = (arr[(i__9068 + 1)]);
if(!((node__9071 == null)))
{return node__9071.kv_reduce(f,init__9069);
} else
{return init__9069;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__9072))
{return cljs.core.deref.call(null,init__9072);
} else
{{
var G__9073 = (i__9068 + 2);
var G__9074 = init__9072;
i__9068 = G__9073;
init__9069 = G__9074;
continue;
}
}
} else
{return init__9069;
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__9075 = this;
var inode__9076 = this;
if((this__9075.bitmap === bit))
{return null;
} else
{var editable__9077 = inode__9076.ensure_editable(e);
var earr__9078 = editable__9077.arr;
var len__9079 = earr__9078.length;
editable__9077.bitmap = (bit ^ editable__9077.bitmap);
cljs.core.array_copy.call(null,earr__9078,(2 * (i + 1)),earr__9078,(2 * i),(len__9079 - (2 * (i + 1))));
(earr__9078[(len__9079 - 2)] = null);
(earr__9078[(len__9079 - 1)] = null);
return editable__9077;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9080 = this;
var inode__9081 = this;
var bit__9082 = (1 << ((hash >>> shift) & 0x01f));
var idx__9083 = cljs.core.bitmap_indexed_node_index.call(null,this__9080.bitmap,bit__9082);
if(((this__9080.bitmap & bit__9082) === 0))
{var n__9084 = cljs.core.bit_count.call(null,this__9080.bitmap);
if(((2 * n__9084) < this__9080.arr.length))
{var editable__9085 = inode__9081.ensure_editable(edit);
var earr__9086 = editable__9085.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__9086,(2 * idx__9083),earr__9086,(2 * (idx__9083 + 1)),(2 * (n__9084 - idx__9083)));
(earr__9086[(2 * idx__9083)] = key);
(earr__9086[((2 * idx__9083) + 1)] = val);
editable__9085.bitmap = (editable__9085.bitmap | bit__9082);
return editable__9085;
} else
{if((n__9084 >= 16))
{var nodes__9087 = cljs.core.make_array.call(null,32);
var jdx__9088 = ((hash >>> shift) & 0x01f);
(nodes__9087[jdx__9088] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__9089 = 0;
var j__9090 = 0;
while(true){
if((i__9089 < 32))
{if((((this__9080.bitmap >>> i__9089) & 1) === 0))
{{
var G__9143 = (i__9089 + 1);
var G__9144 = j__9090;
i__9089 = G__9143;
j__9090 = G__9144;
continue;
}
} else
{(nodes__9087[i__9089] = ((!(((this__9080.arr[j__9090]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__9080.arr[j__9090])),(this__9080.arr[j__9090]),(this__9080.arr[(j__9090 + 1)]),added_leaf_QMARK_):(this__9080.arr[(j__9090 + 1)])));
{
var G__9145 = (i__9089 + 1);
var G__9146 = (j__9090 + 2);
i__9089 = G__9145;
j__9090 = G__9146;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__9084 + 1),nodes__9087));
} else
{if("\uFDD0'else")
{var new_arr__9091 = cljs.core.make_array.call(null,(2 * (n__9084 + 4)));
cljs.core.array_copy.call(null,this__9080.arr,0,new_arr__9091,0,(2 * idx__9083));
(new_arr__9091[(2 * idx__9083)] = key);
(new_arr__9091[((2 * idx__9083) + 1)] = val);
cljs.core.array_copy.call(null,this__9080.arr,(2 * idx__9083),new_arr__9091,(2 * (idx__9083 + 1)),(2 * (n__9084 - idx__9083)));
added_leaf_QMARK_.val = true;
var editable__9092 = inode__9081.ensure_editable(edit);
editable__9092.arr = new_arr__9091;
editable__9092.bitmap = (editable__9092.bitmap | bit__9082);
return editable__9092;
} else
{return null;
}
}
}
} else
{var key_or_nil__9093 = (this__9080.arr[(2 * idx__9083)]);
var val_or_node__9094 = (this__9080.arr[((2 * idx__9083) + 1)]);
if((key_or_nil__9093 == null))
{var n__9095 = val_or_node__9094.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9095 === val_or_node__9094))
{return inode__9081;
} else
{return cljs.core.edit_and_set.call(null,inode__9081,edit,((2 * idx__9083) + 1),n__9095);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9093))
{if((val === val_or_node__9094))
{return inode__9081;
} else
{return cljs.core.edit_and_set.call(null,inode__9081,edit,((2 * idx__9083) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__9081,edit,(2 * idx__9083),null,((2 * idx__9083) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__9093,val_or_node__9094,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__9096 = this;
var inode__9097 = this;
return cljs.core.create_inode_seq.call(null,this__9096.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9098 = this;
var inode__9099 = this;
var bit__9100 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9098.bitmap & bit__9100) === 0))
{return inode__9099;
} else
{var idx__9101 = cljs.core.bitmap_indexed_node_index.call(null,this__9098.bitmap,bit__9100);
var key_or_nil__9102 = (this__9098.arr[(2 * idx__9101)]);
var val_or_node__9103 = (this__9098.arr[((2 * idx__9101) + 1)]);
if((key_or_nil__9102 == null))
{var n__9104 = val_or_node__9103.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__9104 === val_or_node__9103))
{return inode__9099;
} else
{if(!((n__9104 == null)))
{return cljs.core.edit_and_set.call(null,inode__9099,edit,((2 * idx__9101) + 1),n__9104);
} else
{if((this__9098.bitmap === bit__9100))
{return null;
} else
{if("\uFDD0'else")
{return inode__9099.edit_and_remove_pair(edit,bit__9100,idx__9101);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9102))
{(removed_leaf_QMARK_[0] = true);
return inode__9099.edit_and_remove_pair(edit,bit__9100,idx__9101);
} else
{if("\uFDD0'else")
{return inode__9099;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__9105 = this;
var inode__9106 = this;
if((e === this__9105.edit))
{return inode__9106;
} else
{var n__9107 = cljs.core.bit_count.call(null,this__9105.bitmap);
var new_arr__9108 = cljs.core.make_array.call(null,(((n__9107 < 0))?4:(2 * (n__9107 + 1))));
cljs.core.array_copy.call(null,this__9105.arr,0,new_arr__9108,0,(2 * n__9107));
return (new cljs.core.BitmapIndexedNode(e,this__9105.bitmap,new_arr__9108));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__9109 = this;
var inode__9110 = this;
return cljs.core.inode_kv_reduce.call(null,this__9109.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9111 = this;
var inode__9112 = this;
var bit__9113 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9111.bitmap & bit__9113) === 0))
{return not_found;
} else
{var idx__9114 = cljs.core.bitmap_indexed_node_index.call(null,this__9111.bitmap,bit__9113);
var key_or_nil__9115 = (this__9111.arr[(2 * idx__9114)]);
var val_or_node__9116 = (this__9111.arr[((2 * idx__9114) + 1)]);
if((key_or_nil__9115 == null))
{return val_or_node__9116.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9115))
{return cljs.core.PersistentVector.fromArray([key_or_nil__9115,val_or_node__9116], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var this__9117 = this;
var inode__9118 = this;
var bit__9119 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9117.bitmap & bit__9119) === 0))
{return inode__9118;
} else
{var idx__9120 = cljs.core.bitmap_indexed_node_index.call(null,this__9117.bitmap,bit__9119);
var key_or_nil__9121 = (this__9117.arr[(2 * idx__9120)]);
var val_or_node__9122 = (this__9117.arr[((2 * idx__9120) + 1)]);
if((key_or_nil__9121 == null))
{var n__9123 = val_or_node__9122.inode_without((shift + 5),hash,key);
if((n__9123 === val_or_node__9122))
{return inode__9118;
} else
{if(!((n__9123 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__9117.bitmap,cljs.core.clone_and_set.call(null,this__9117.arr,((2 * idx__9120) + 1),n__9123)));
} else
{if((this__9117.bitmap === bit__9119))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__9117.bitmap ^ bit__9119),cljs.core.remove_pair.call(null,this__9117.arr,idx__9120)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9121))
{return (new cljs.core.BitmapIndexedNode(null,(this__9117.bitmap ^ bit__9119),cljs.core.remove_pair.call(null,this__9117.arr,idx__9120)));
} else
{if("\uFDD0'else")
{return inode__9118;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9124 = this;
var inode__9125 = this;
var bit__9126 = (1 << ((hash >>> shift) & 0x01f));
var idx__9127 = cljs.core.bitmap_indexed_node_index.call(null,this__9124.bitmap,bit__9126);
if(((this__9124.bitmap & bit__9126) === 0))
{var n__9128 = cljs.core.bit_count.call(null,this__9124.bitmap);
if((n__9128 >= 16))
{var nodes__9129 = cljs.core.make_array.call(null,32);
var jdx__9130 = ((hash >>> shift) & 0x01f);
(nodes__9129[jdx__9130] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__9131 = 0;
var j__9132 = 0;
while(true){
if((i__9131 < 32))
{if((((this__9124.bitmap >>> i__9131) & 1) === 0))
{{
var G__9147 = (i__9131 + 1);
var G__9148 = j__9132;
i__9131 = G__9147;
j__9132 = G__9148;
continue;
}
} else
{(nodes__9129[i__9131] = ((!(((this__9124.arr[j__9132]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__9124.arr[j__9132])),(this__9124.arr[j__9132]),(this__9124.arr[(j__9132 + 1)]),added_leaf_QMARK_):(this__9124.arr[(j__9132 + 1)])));
{
var G__9149 = (i__9131 + 1);
var G__9150 = (j__9132 + 2);
i__9131 = G__9149;
j__9132 = G__9150;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__9128 + 1),nodes__9129));
} else
{var new_arr__9133 = cljs.core.make_array.call(null,(2 * (n__9128 + 1)));
cljs.core.array_copy.call(null,this__9124.arr,0,new_arr__9133,0,(2 * idx__9127));
(new_arr__9133[(2 * idx__9127)] = key);
(new_arr__9133[((2 * idx__9127) + 1)] = val);
cljs.core.array_copy.call(null,this__9124.arr,(2 * idx__9127),new_arr__9133,(2 * (idx__9127 + 1)),(2 * (n__9128 - idx__9127)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__9124.bitmap | bit__9126),new_arr__9133));
}
} else
{var key_or_nil__9134 = (this__9124.arr[(2 * idx__9127)]);
var val_or_node__9135 = (this__9124.arr[((2 * idx__9127) + 1)]);
if((key_or_nil__9134 == null))
{var n__9136 = val_or_node__9135.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9136 === val_or_node__9135))
{return inode__9125;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__9124.bitmap,cljs.core.clone_and_set.call(null,this__9124.arr,((2 * idx__9127) + 1),n__9136)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9134))
{if((val === val_or_node__9135))
{return inode__9125;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__9124.bitmap,cljs.core.clone_and_set.call(null,this__9124.arr,((2 * idx__9127) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__9124.bitmap,cljs.core.clone_and_set.call(null,this__9124.arr,(2 * idx__9127),null,((2 * idx__9127) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__9134,val_or_node__9135,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9137 = this;
var inode__9138 = this;
var bit__9139 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9137.bitmap & bit__9139) === 0))
{return not_found;
} else
{var idx__9140 = cljs.core.bitmap_indexed_node_index.call(null,this__9137.bitmap,bit__9139);
var key_or_nil__9141 = (this__9137.arr[(2 * idx__9140)]);
var val_or_node__9142 = (this__9137.arr[((2 * idx__9140) + 1)]);
if((key_or_nil__9141 == null))
{return val_or_node__9142.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9141))
{return val_or_node__9142;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode;
cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,0,cljs.core.make_array.call(null,0)));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr__9158 = array_node.arr;
var len__9159 = (2 * (array_node.cnt - 1));
var new_arr__9160 = cljs.core.make_array.call(null,len__9159);
var i__9161 = 0;
var j__9162 = 1;
var bitmap__9163 = 0;
while(true){
if((i__9161 < len__9159))
{if((function (){var and__3822__auto____9164 = !((i__9161 === idx));
if(and__3822__auto____9164)
{return !(((arr__9158[i__9161]) == null));
} else
{return and__3822__auto____9164;
}
})())
{(new_arr__9160[j__9162] = (arr__9158[i__9161]));
{
var G__9165 = (i__9161 + 1);
var G__9166 = (j__9162 + 2);
var G__9167 = (bitmap__9163 | (1 << i__9161));
i__9161 = G__9165;
j__9162 = G__9166;
bitmap__9163 = G__9167;
continue;
}
} else
{{
var G__9168 = (i__9161 + 1);
var G__9169 = j__9162;
var G__9170 = bitmap__9163;
i__9161 = G__9168;
j__9162 = G__9169;
bitmap__9163 = G__9170;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__9163,new_arr__9160));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9171 = this;
var inode__9172 = this;
var idx__9173 = ((hash >>> shift) & 0x01f);
var node__9174 = (this__9171.arr[idx__9173]);
if((node__9174 == null))
{var editable__9175 = cljs.core.edit_and_set.call(null,inode__9172,edit,idx__9173,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__9175.cnt = (editable__9175.cnt + 1);
return editable__9175;
} else
{var n__9176 = node__9174.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9176 === node__9174))
{return inode__9172;
} else
{return cljs.core.edit_and_set.call(null,inode__9172,edit,idx__9173,n__9176);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__9177 = this;
var inode__9178 = this;
return cljs.core.create_array_node_seq.call(null,this__9177.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9179 = this;
var inode__9180 = this;
var idx__9181 = ((hash >>> shift) & 0x01f);
var node__9182 = (this__9179.arr[idx__9181]);
if((node__9182 == null))
{return inode__9180;
} else
{var n__9183 = node__9182.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__9183 === node__9182))
{return inode__9180;
} else
{if((n__9183 == null))
{if((this__9179.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__9180,edit,idx__9181);
} else
{var editable__9184 = cljs.core.edit_and_set.call(null,inode__9180,edit,idx__9181,n__9183);
editable__9184.cnt = (editable__9184.cnt - 1);
return editable__9184;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__9180,edit,idx__9181,n__9183);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__9185 = this;
var inode__9186 = this;
if((e === this__9185.edit))
{return inode__9186;
} else
{return (new cljs.core.ArrayNode(e,this__9185.cnt,this__9185.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__9187 = this;
var inode__9188 = this;
var len__9189 = this__9187.arr.length;
var i__9190 = 0;
var init__9191 = init;
while(true){
if((i__9190 < len__9189))
{var node__9192 = (this__9187.arr[i__9190]);
if(!((node__9192 == null)))
{var init__9193 = node__9192.kv_reduce(f,init__9191);
if(cljs.core.reduced_QMARK_.call(null,init__9193))
{return cljs.core.deref.call(null,init__9193);
} else
{{
var G__9212 = (i__9190 + 1);
var G__9213 = init__9193;
i__9190 = G__9212;
init__9191 = G__9213;
continue;
}
}
} else
{return null;
}
} else
{return init__9191;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9194 = this;
var inode__9195 = this;
var idx__9196 = ((hash >>> shift) & 0x01f);
var node__9197 = (this__9194.arr[idx__9196]);
if(!((node__9197 == null)))
{return node__9197.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__9198 = this;
var inode__9199 = this;
var idx__9200 = ((hash >>> shift) & 0x01f);
var node__9201 = (this__9198.arr[idx__9200]);
if(!((node__9201 == null)))
{var n__9202 = node__9201.inode_without((shift + 5),hash,key);
if((n__9202 === node__9201))
{return inode__9199;
} else
{if((n__9202 == null))
{if((this__9198.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__9199,null,idx__9200);
} else
{return (new cljs.core.ArrayNode(null,(this__9198.cnt - 1),cljs.core.clone_and_set.call(null,this__9198.arr,idx__9200,n__9202)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__9198.cnt,cljs.core.clone_and_set.call(null,this__9198.arr,idx__9200,n__9202)));
} else
{return null;
}
}
}
} else
{return inode__9199;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9203 = this;
var inode__9204 = this;
var idx__9205 = ((hash >>> shift) & 0x01f);
var node__9206 = (this__9203.arr[idx__9205]);
if((node__9206 == null))
{return (new cljs.core.ArrayNode(null,(this__9203.cnt + 1),cljs.core.clone_and_set.call(null,this__9203.arr,idx__9205,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__9207 = node__9206.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9207 === node__9206))
{return inode__9204;
} else
{return (new cljs.core.ArrayNode(null,this__9203.cnt,cljs.core.clone_and_set.call(null,this__9203.arr,idx__9205,n__9207)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9208 = this;
var inode__9209 = this;
var idx__9210 = ((hash >>> shift) & 0x01f);
var node__9211 = (this__9208.arr[idx__9210]);
if(!((node__9211 == null)))
{return node__9211.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__9216 = (2 * cnt);
var i__9217 = 0;
while(true){
if((i__9217 < lim__9216))
{if(cljs.core.key_test.call(null,key,(arr[i__9217])))
{return i__9217;
} else
{{
var G__9218 = (i__9217 + 2);
i__9217 = G__9218;
continue;
}
}
} else
{return -1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.cljs$lang$type = true;
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9219 = this;
var inode__9220 = this;
if((hash === this__9219.collision_hash))
{var idx__9221 = cljs.core.hash_collision_node_find_index.call(null,this__9219.arr,this__9219.cnt,key);
if((idx__9221 === -1))
{if((this__9219.arr.length > (2 * this__9219.cnt)))
{var editable__9222 = cljs.core.edit_and_set.call(null,inode__9220,edit,(2 * this__9219.cnt),key,((2 * this__9219.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__9222.cnt = (editable__9222.cnt + 1);
return editable__9222;
} else
{var len__9223 = this__9219.arr.length;
var new_arr__9224 = cljs.core.make_array.call(null,(len__9223 + 2));
cljs.core.array_copy.call(null,this__9219.arr,0,new_arr__9224,0,len__9223);
(new_arr__9224[len__9223] = key);
(new_arr__9224[(len__9223 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__9220.ensure_editable_array(edit,(this__9219.cnt + 1),new_arr__9224);
}
} else
{if(((this__9219.arr[(idx__9221 + 1)]) === val))
{return inode__9220;
} else
{return cljs.core.edit_and_set.call(null,inode__9220,edit,(idx__9221 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__9219.collision_hash >>> shift) & 0x01f)),[null,inode__9220,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__9225 = this;
var inode__9226 = this;
return cljs.core.create_inode_seq.call(null,this__9225.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9227 = this;
var inode__9228 = this;
var idx__9229 = cljs.core.hash_collision_node_find_index.call(null,this__9227.arr,this__9227.cnt,key);
if((idx__9229 === -1))
{return inode__9228;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__9227.cnt === 1))
{return null;
} else
{var editable__9230 = inode__9228.ensure_editable(edit);
var earr__9231 = editable__9230.arr;
(earr__9231[idx__9229] = (earr__9231[((2 * this__9227.cnt) - 2)]));
(earr__9231[(idx__9229 + 1)] = (earr__9231[((2 * this__9227.cnt) - 1)]));
(earr__9231[((2 * this__9227.cnt) - 1)] = null);
(earr__9231[((2 * this__9227.cnt) - 2)] = null);
editable__9230.cnt = (editable__9230.cnt - 1);
return editable__9230;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__9232 = this;
var inode__9233 = this;
if((e === this__9232.edit))
{return inode__9233;
} else
{var new_arr__9234 = cljs.core.make_array.call(null,(2 * (this__9232.cnt + 1)));
cljs.core.array_copy.call(null,this__9232.arr,0,new_arr__9234,0,(2 * this__9232.cnt));
return (new cljs.core.HashCollisionNode(e,this__9232.collision_hash,this__9232.cnt,new_arr__9234));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__9235 = this;
var inode__9236 = this;
return cljs.core.inode_kv_reduce.call(null,this__9235.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9237 = this;
var inode__9238 = this;
var idx__9239 = cljs.core.hash_collision_node_find_index.call(null,this__9237.arr,this__9237.cnt,key);
if((idx__9239 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__9237.arr[idx__9239])))
{return cljs.core.PersistentVector.fromArray([(this__9237.arr[idx__9239]),(this__9237.arr[(idx__9239 + 1)])], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var this__9240 = this;
var inode__9241 = this;
var idx__9242 = cljs.core.hash_collision_node_find_index.call(null,this__9240.arr,this__9240.cnt,key);
if((idx__9242 === -1))
{return inode__9241;
} else
{if((this__9240.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__9240.collision_hash,(this__9240.cnt - 1),cljs.core.remove_pair.call(null,this__9240.arr,cljs.core.quot.call(null,idx__9242,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9243 = this;
var inode__9244 = this;
if((hash === this__9243.collision_hash))
{var idx__9245 = cljs.core.hash_collision_node_find_index.call(null,this__9243.arr,this__9243.cnt,key);
if((idx__9245 === -1))
{var len__9246 = this__9243.arr.length;
var new_arr__9247 = cljs.core.make_array.call(null,(len__9246 + 2));
cljs.core.array_copy.call(null,this__9243.arr,0,new_arr__9247,0,len__9246);
(new_arr__9247[len__9246] = key);
(new_arr__9247[(len__9246 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__9243.collision_hash,(this__9243.cnt + 1),new_arr__9247));
} else
{if(cljs.core._EQ_.call(null,(this__9243.arr[idx__9245]),val))
{return inode__9244;
} else
{return (new cljs.core.HashCollisionNode(null,this__9243.collision_hash,this__9243.cnt,cljs.core.clone_and_set.call(null,this__9243.arr,(idx__9245 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__9243.collision_hash >>> shift) & 0x01f)),[null,inode__9244])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9248 = this;
var inode__9249 = this;
var idx__9250 = cljs.core.hash_collision_node_find_index.call(null,this__9248.arr,this__9248.cnt,key);
if((idx__9250 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__9248.arr[idx__9250])))
{return (this__9248.arr[(idx__9250 + 1)]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){
var this__9251 = this;
var inode__9252 = this;
if((e === this__9251.edit))
{this__9251.arr = array;
this__9251.cnt = count;
return inode__9252;
} else
{return (new cljs.core.HashCollisionNode(this__9251.edit,this__9251.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__9257 = cljs.core.hash.call(null,key1);
if((key1hash__9257 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__9257,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___9258 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__9257,key1,val1,added_leaf_QMARK___9258).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___9258);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__9259 = cljs.core.hash.call(null,key1);
if((key1hash__9259 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__9259,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___9260 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__9259,key1,val1,added_leaf_QMARK___9260).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___9260);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw('Invalid arity: ' + arguments.length);
};
create_node.cljs$lang$arity$6 = create_node__6;
create_node.cljs$lang$arity$7 = create_node__7;
return create_node;
})()
;

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9261 = this;
var h__2153__auto____9262 = this__9261.__hash;
if(!((h__2153__auto____9262 == null)))
{return h__2153__auto____9262;
} else
{var h__2153__auto____9263 = cljs.core.hash_coll.call(null,coll);
this__9261.__hash = h__2153__auto____9263;
return h__2153__auto____9263;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9264 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__9265 = this;
var this__9266 = this;
return cljs.core.pr_str.call(null,this__9266);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9267 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9268 = this;
if((this__9268.s == null))
{return cljs.core.PersistentVector.fromArray([(this__9268.nodes[this__9268.i]),(this__9268.nodes[(this__9268.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__9268.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9269 = this;
if((this__9269.s == null))
{return cljs.core.create_inode_seq.call(null,this__9269.nodes,(this__9269.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__9269.nodes,this__9269.i,cljs.core.next.call(null,this__9269.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9270 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9271 = this;
return (new cljs.core.NodeSeq(meta,this__9271.nodes,this__9271.i,this__9271.s,this__9271.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9272 = this;
return this__9272.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9273 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9273.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__9280 = nodes.length;
var j__9281 = i;
while(true){
if((j__9281 < len__9280))
{if(!(((nodes[j__9281]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__9281,null,null));
} else
{var temp__3971__auto____9282 = (nodes[(j__9281 + 1)]);
if(cljs.core.truth_(temp__3971__auto____9282))
{var node__9283 = temp__3971__auto____9282;
var temp__3971__auto____9284 = node__9283.inode_seq();
if(cljs.core.truth_(temp__3971__auto____9284))
{var node_seq__9285 = temp__3971__auto____9284;
return (new cljs.core.NodeSeq(null,nodes,(j__9281 + 2),node_seq__9285,null));
} else
{{
var G__9286 = (j__9281 + 2);
j__9281 = G__9286;
continue;
}
}
} else
{{
var G__9287 = (j__9281 + 2);
j__9281 = G__9287;
continue;
}
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_inode_seq.cljs$lang$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$lang$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9288 = this;
var h__2153__auto____9289 = this__9288.__hash;
if(!((h__2153__auto____9289 == null)))
{return h__2153__auto____9289;
} else
{var h__2153__auto____9290 = cljs.core.hash_coll.call(null,coll);
this__9288.__hash = h__2153__auto____9290;
return h__2153__auto____9290;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9291 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__9292 = this;
var this__9293 = this;
return cljs.core.pr_str.call(null,this__9293);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9294 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9295 = this;
return cljs.core.first.call(null,this__9295.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9296 = this;
return cljs.core.create_array_node_seq.call(null,null,this__9296.nodes,this__9296.i,cljs.core.next.call(null,this__9296.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9297 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9298 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__9298.nodes,this__9298.i,this__9298.s,this__9298.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9299 = this;
return this__9299.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9300 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9300.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__9307 = nodes.length;
var j__9308 = i;
while(true){
if((j__9308 < len__9307))
{var temp__3971__auto____9309 = (nodes[j__9308]);
if(cljs.core.truth_(temp__3971__auto____9309))
{var nj__9310 = temp__3971__auto____9309;
var temp__3971__auto____9311 = nj__9310.inode_seq();
if(cljs.core.truth_(temp__3971__auto____9311))
{var ns__9312 = temp__3971__auto____9311;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__9308 + 1),ns__9312,null));
} else
{{
var G__9313 = (j__9308 + 1);
j__9308 = G__9313;
continue;
}
}
} else
{{
var G__9314 = (j__9308 + 1);
j__9308 = G__9314;
continue;
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_array_node_seq.cljs$lang$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$lang$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;
void 0;

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9317 = this;
return (new cljs.core.TransientHashMap({},this__9317.root,this__9317.cnt,this__9317.has_nil_QMARK_,this__9317.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9318 = this;
var h__2153__auto____9319 = this__9318.__hash;
if(!((h__2153__auto____9319 == null)))
{return h__2153__auto____9319;
} else
{var h__2153__auto____9320 = cljs.core.hash_imap.call(null,coll);
this__9318.__hash = h__2153__auto____9320;
return h__2153__auto____9320;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9321 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9322 = this;
if((k == null))
{if(this__9322.has_nil_QMARK_)
{return this__9322.nil_val;
} else
{return not_found;
}
} else
{if((this__9322.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__9322.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9323 = this;
if((k == null))
{if((function (){var and__3822__auto____9324 = this__9323.has_nil_QMARK_;
if(and__3822__auto____9324)
{return (v === this__9323.nil_val);
} else
{return and__3822__auto____9324;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9323.meta,((this__9323.has_nil_QMARK_)?this__9323.cnt:(this__9323.cnt + 1)),this__9323.root,true,v,null));
}
} else
{var added_leaf_QMARK___9325 = (new cljs.core.Box(false));
var new_root__9326 = (((this__9323.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9323.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___9325);
if((new_root__9326 === this__9323.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9323.meta,((added_leaf_QMARK___9325.val)?(this__9323.cnt + 1):this__9323.cnt),new_root__9326,this__9323.has_nil_QMARK_,this__9323.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9327 = this;
if((k == null))
{return this__9327.has_nil_QMARK_;
} else
{if((this__9327.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__9327.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__9350 = null;
var G__9350__2 = (function (this_sym9328,k){
var this__9330 = this;
var this_sym9328__9331 = this;
var coll__9332 = this_sym9328__9331;
return coll__9332.cljs$core$ILookup$_lookup$arity$2(coll__9332,k);
});
var G__9350__3 = (function (this_sym9329,k,not_found){
var this__9330 = this;
var this_sym9329__9333 = this;
var coll__9334 = this_sym9329__9333;
return coll__9334.cljs$core$ILookup$_lookup$arity$3(coll__9334,k,not_found);
});
G__9350 = function(this_sym9329,k,not_found){
switch(arguments.length){
case 2:
return G__9350__2.call(this,this_sym9329,k);
case 3:
return G__9350__3.call(this,this_sym9329,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9350;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym9315,args9316){
var this__9335 = this;
return this_sym9315.call.apply(this_sym9315,[this_sym9315].concat(args9316.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9336 = this;
var init__9337 = ((this__9336.has_nil_QMARK_)?f.call(null,init,null,this__9336.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__9337))
{return cljs.core.deref.call(null,init__9337);
} else
{if(!((this__9336.root == null)))
{return this__9336.root.kv_reduce(f,init__9337);
} else
{if("\uFDD0'else")
{return init__9337;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9338 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__9339 = this;
var this__9340 = this;
return cljs.core.pr_str.call(null,this__9340);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9341 = this;
if((this__9341.cnt > 0))
{var s__9342 = ((!((this__9341.root == null)))?this__9341.root.inode_seq():null);
if(this__9341.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__9341.nil_val], true),s__9342);
} else
{return s__9342;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9343 = this;
return this__9343.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9344 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9345 = this;
return (new cljs.core.PersistentHashMap(meta,this__9345.cnt,this__9345.root,this__9345.has_nil_QMARK_,this__9345.nil_val,this__9345.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9346 = this;
return this__9346.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9347 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__9347.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9348 = this;
if((k == null))
{if(this__9348.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__9348.meta,(this__9348.cnt - 1),this__9348.root,false,null,null));
} else
{return coll;
}
} else
{if((this__9348.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__9349 = this__9348.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__9349 === this__9348.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9348.meta,(this__9348.cnt - 1),new_root__9349,this__9348.has_nil_QMARK_,this__9348.nil_val,null));
}
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap;
cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,0,null,false,null,0));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len__9351 = ks.length;
var i__9352 = 0;
var out__9353 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__9352 < len__9351))
{{
var G__9354 = (i__9352 + 1);
var G__9355 = cljs.core.assoc_BANG_.call(null,out__9353,(ks[i__9352]),(vs[i__9352]));
i__9352 = G__9354;
out__9353 = G__9355;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9353);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__9356 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9357 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__9358 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9359 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__9360 = this;
if((k == null))
{if(this__9360.has_nil_QMARK_)
{return this__9360.nil_val;
} else
{return null;
}
} else
{if((this__9360.root == null))
{return null;
} else
{return this__9360.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__9361 = this;
if((k == null))
{if(this__9361.has_nil_QMARK_)
{return this__9361.nil_val;
} else
{return not_found;
}
} else
{if((this__9361.root == null))
{return not_found;
} else
{return this__9361.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9362 = this;
if(this__9362.edit)
{return this__9362.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__9363 = this;
var tcoll__9364 = this;
if(this__9363.edit)
{if((function (){var G__9365__9366 = o;
if(G__9365__9366)
{if((function (){var or__3824__auto____9367 = (G__9365__9366.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____9367)
{return or__3824__auto____9367;
} else
{return G__9365__9366.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__9365__9366.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9365__9366);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9365__9366);
}
})())
{return tcoll__9364.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__9368 = cljs.core.seq.call(null,o);
var tcoll__9369 = tcoll__9364;
while(true){
var temp__3971__auto____9370 = cljs.core.first.call(null,es__9368);
if(cljs.core.truth_(temp__3971__auto____9370))
{var e__9371 = temp__3971__auto____9370;
{
var G__9382 = cljs.core.next.call(null,es__9368);
var G__9383 = tcoll__9369.assoc_BANG_(cljs.core.key.call(null,e__9371),cljs.core.val.call(null,e__9371));
es__9368 = G__9382;
tcoll__9369 = G__9383;
continue;
}
} else
{return tcoll__9369;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__9372 = this;
var tcoll__9373 = this;
if(this__9372.edit)
{if((k == null))
{if((this__9372.nil_val === v))
{} else
{this__9372.nil_val = v;
}
if(this__9372.has_nil_QMARK_)
{} else
{this__9372.count = (this__9372.count + 1);
this__9372.has_nil_QMARK_ = true;
}
return tcoll__9373;
} else
{var added_leaf_QMARK___9374 = (new cljs.core.Box(false));
var node__9375 = (((this__9372.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9372.root).inode_assoc_BANG_(this__9372.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___9374);
if((node__9375 === this__9372.root))
{} else
{this__9372.root = node__9375;
}
if(added_leaf_QMARK___9374.val)
{this__9372.count = (this__9372.count + 1);
} else
{}
return tcoll__9373;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__9376 = this;
var tcoll__9377 = this;
if(this__9376.edit)
{if((k == null))
{if(this__9376.has_nil_QMARK_)
{this__9376.has_nil_QMARK_ = false;
this__9376.nil_val = null;
this__9376.count = (this__9376.count - 1);
return tcoll__9377;
} else
{return tcoll__9377;
}
} else
{if((this__9376.root == null))
{return tcoll__9377;
} else
{var removed_leaf_QMARK___9378 = (new cljs.core.Box(false));
var node__9379 = this__9376.root.inode_without_BANG_(this__9376.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___9378);
if((node__9379 === this__9376.root))
{} else
{this__9376.root = node__9379;
}
if(cljs.core.truth_((removed_leaf_QMARK___9378[0])))
{this__9376.count = (this__9376.count - 1);
} else
{}
return tcoll__9377;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__9380 = this;
var tcoll__9381 = this;
if(this__9380.edit)
{this__9380.edit = null;
return (new cljs.core.PersistentHashMap(null,this__9380.count,this__9380.root,this__9380.has_nil_QMARK_,this__9380.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__9386 = node;
var stack__9387 = stack;
while(true){
if(!((t__9386 == null)))
{{
var G__9388 = ((ascending_QMARK_)?t__9386.left:t__9386.right);
var G__9389 = cljs.core.conj.call(null,stack__9387,t__9386);
t__9386 = G__9388;
stack__9387 = G__9389;
continue;
}
} else
{return stack__9387;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9390 = this;
var h__2153__auto____9391 = this__9390.__hash;
if(!((h__2153__auto____9391 == null)))
{return h__2153__auto____9391;
} else
{var h__2153__auto____9392 = cljs.core.hash_coll.call(null,coll);
this__9390.__hash = h__2153__auto____9392;
return h__2153__auto____9392;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9393 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__9394 = this;
var this__9395 = this;
return cljs.core.pr_str.call(null,this__9395);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9396 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9397 = this;
if((this__9397.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__9397.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__9398 = this;
return cljs.core.peek.call(null,this__9398.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__9399 = this;
var t__9400 = cljs.core.first.call(null,this__9399.stack);
var next_stack__9401 = cljs.core.tree_map_seq_push.call(null,((this__9399.ascending_QMARK_)?t__9400.right:t__9400.left),cljs.core.next.call(null,this__9399.stack),this__9399.ascending_QMARK_);
if(!((next_stack__9401 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__9401,this__9399.ascending_QMARK_,(this__9399.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9402 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9403 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__9403.stack,this__9403.ascending_QMARK_,this__9403.cnt,this__9403.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9404 = this;
return this__9404.meta;
});
cljs.core.PersistentTreeMapSeq;
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push.call(null,tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
void 0;
void 0;
cljs.core.balance_left = (function balance_left(key,val,ins,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,ins,right,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,left,ins,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right))
{return cljs.core.balance_right.call(null,key,val,del,right.redden());
} else
{if((function (){var and__3822__auto____9406 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____9406)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____9406;
}
})())
{return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right.call(null,right.key,right.val,right.left.right,right.right.redden()),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left))
{return cljs.core.balance_left.call(null,key,val,left.redden(),del);
} else
{if((function (){var and__3822__auto____9408 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____9408)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____9408;
}
})())
{return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left.call(null,left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){
var init__9412 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__9412))
{return cljs.core.deref.call(null,init__9412);
} else
{var init__9413 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__9412):init__9412);
if(cljs.core.reduced_QMARK_.call(null,init__9413))
{return cljs.core.deref.call(null,init__9413);
} else
{var init__9414 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__9413):init__9413);
if(cljs.core.reduced_QMARK_.call(null,init__9414))
{return cljs.core.deref.call(null,init__9414);
} else
{return init__9414;
}
}
}
});

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9417 = this;
var h__2153__auto____9418 = this__9417.__hash;
if(!((h__2153__auto____9418 == null)))
{return h__2153__auto____9418;
} else
{var h__2153__auto____9419 = cljs.core.hash_coll.call(null,coll);
this__9417.__hash = h__2153__auto____9419;
return h__2153__auto____9419;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9420 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9421 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9422 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__9422.key,this__9422.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__9470 = null;
var G__9470__2 = (function (this_sym9423,k){
var this__9425 = this;
var this_sym9423__9426 = this;
var node__9427 = this_sym9423__9426;
return node__9427.cljs$core$ILookup$_lookup$arity$2(node__9427,k);
});
var G__9470__3 = (function (this_sym9424,k,not_found){
var this__9425 = this;
var this_sym9424__9428 = this;
var node__9429 = this_sym9424__9428;
return node__9429.cljs$core$ILookup$_lookup$arity$3(node__9429,k,not_found);
});
G__9470 = function(this_sym9424,k,not_found){
switch(arguments.length){
case 2:
return G__9470__2.call(this,this_sym9424,k);
case 3:
return G__9470__3.call(this,this_sym9424,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9470;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym9415,args9416){
var this__9430 = this;
return this_sym9415.call.apply(this_sym9415,[this_sym9415].concat(args9416.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9431 = this;
return cljs.core.PersistentVector.fromArray([this__9431.key,this__9431.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9432 = this;
return this__9432.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9433 = this;
return this__9433.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__9434 = this;
var node__9435 = this;
return ins.balance_right(node__9435);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__9436 = this;
var node__9437 = this;
return (new cljs.core.RedNode(this__9436.key,this__9436.val,this__9436.left,this__9436.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__9438 = this;
var node__9439 = this;
return cljs.core.balance_right_del.call(null,this__9438.key,this__9438.val,this__9438.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__9440 = this;
var node__9441 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__9442 = this;
var node__9443 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__9443,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__9444 = this;
var node__9445 = this;
return cljs.core.balance_left_del.call(null,this__9444.key,this__9444.val,del,this__9444.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__9446 = this;
var node__9447 = this;
return ins.balance_left(node__9447);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__9448 = this;
var node__9449 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__9449,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__9471 = null;
var G__9471__0 = (function (){
var this__9450 = this;
var this__9452 = this;
return cljs.core.pr_str.call(null,this__9452);
});
G__9471 = function(){
switch(arguments.length){
case 0:
return G__9471__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9471;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__9453 = this;
var node__9454 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9454,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__9455 = this;
var node__9456 = this;
return node__9456;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9457 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9458 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9459 = this;
return cljs.core.list.call(null,this__9459.key,this__9459.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9460 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9461 = this;
return this__9461.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9462 = this;
return cljs.core.PersistentVector.fromArray([this__9462.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9463 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__9463.key,this__9463.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9464 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9465 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__9465.key,this__9465.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9466 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9467 = this;
if((n === 0))
{return this__9467.key;
} else
{if((n === 1))
{return this__9467.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__9468 = this;
if((n === 0))
{return this__9468.key;
} else
{if((n === 1))
{return this__9468.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__9469 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.BlackNode;

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9474 = this;
var h__2153__auto____9475 = this__9474.__hash;
if(!((h__2153__auto____9475 == null)))
{return h__2153__auto____9475;
} else
{var h__2153__auto____9476 = cljs.core.hash_coll.call(null,coll);
this__9474.__hash = h__2153__auto____9476;
return h__2153__auto____9476;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9477 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9478 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9479 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__9479.key,this__9479.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__9527 = null;
var G__9527__2 = (function (this_sym9480,k){
var this__9482 = this;
var this_sym9480__9483 = this;
var node__9484 = this_sym9480__9483;
return node__9484.cljs$core$ILookup$_lookup$arity$2(node__9484,k);
});
var G__9527__3 = (function (this_sym9481,k,not_found){
var this__9482 = this;
var this_sym9481__9485 = this;
var node__9486 = this_sym9481__9485;
return node__9486.cljs$core$ILookup$_lookup$arity$3(node__9486,k,not_found);
});
G__9527 = function(this_sym9481,k,not_found){
switch(arguments.length){
case 2:
return G__9527__2.call(this,this_sym9481,k);
case 3:
return G__9527__3.call(this,this_sym9481,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9527;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym9472,args9473){
var this__9487 = this;
return this_sym9472.call.apply(this_sym9472,[this_sym9472].concat(args9473.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9488 = this;
return cljs.core.PersistentVector.fromArray([this__9488.key,this__9488.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9489 = this;
return this__9489.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9490 = this;
return this__9490.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__9491 = this;
var node__9492 = this;
return (new cljs.core.RedNode(this__9491.key,this__9491.val,this__9491.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__9493 = this;
var node__9494 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__9495 = this;
var node__9496 = this;
return (new cljs.core.RedNode(this__9495.key,this__9495.val,this__9495.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__9497 = this;
var node__9498 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__9499 = this;
var node__9500 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__9500,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__9501 = this;
var node__9502 = this;
return (new cljs.core.RedNode(this__9501.key,this__9501.val,del,this__9501.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__9503 = this;
var node__9504 = this;
return (new cljs.core.RedNode(this__9503.key,this__9503.val,ins,this__9503.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__9505 = this;
var node__9506 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9505.left))
{return (new cljs.core.RedNode(this__9505.key,this__9505.val,this__9505.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__9505.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9505.right))
{return (new cljs.core.RedNode(this__9505.right.key,this__9505.right.val,(new cljs.core.BlackNode(this__9505.key,this__9505.val,this__9505.left,this__9505.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__9505.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__9506,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__9528 = null;
var G__9528__0 = (function (){
var this__9507 = this;
var this__9509 = this;
return cljs.core.pr_str.call(null,this__9509);
});
G__9528 = function(){
switch(arguments.length){
case 0:
return G__9528__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9528;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__9510 = this;
var node__9511 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9510.right))
{return (new cljs.core.RedNode(this__9510.key,this__9510.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9510.left,null)),this__9510.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9510.left))
{return (new cljs.core.RedNode(this__9510.left.key,this__9510.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9510.left.left,null)),(new cljs.core.BlackNode(this__9510.key,this__9510.val,this__9510.left.right,this__9510.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9511,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__9512 = this;
var node__9513 = this;
return (new cljs.core.BlackNode(this__9512.key,this__9512.val,this__9512.left,this__9512.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9514 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9515 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9516 = this;
return cljs.core.list.call(null,this__9516.key,this__9516.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9517 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9518 = this;
return this__9518.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9519 = this;
return cljs.core.PersistentVector.fromArray([this__9519.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9520 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__9520.key,this__9520.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9521 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9522 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__9522.key,this__9522.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9523 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9524 = this;
if((n === 0))
{return this__9524.key;
} else
{if((n === 1))
{return this__9524.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__9525 = this;
if((n === 0))
{return this__9525.key;
} else
{if((n === 1))
{return this__9525.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__9526 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__9532 = comp.call(null,k,tree.key);
if((c__9532 === 0))
{(found[0] = tree);
return null;
} else
{if((c__9532 < 0))
{var ins__9533 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__9533 == null)))
{return tree.add_left(ins__9533);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__9534 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__9534 == null)))
{return tree.add_right(ins__9534);
} else
{return null;
}
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){
if((left == null))
{return right;
} else
{if((right == null))
{return left;
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{var app__9537 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__9537))
{return (new cljs.core.RedNode(app__9537.key,app__9537.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__9537.left,null)),(new cljs.core.RedNode(right.key,right.val,app__9537.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__9537,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__9538 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__9538))
{return (new cljs.core.RedNode(app__9538.key,app__9538.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__9538.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__9538.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__9538,right.right,null)));
}
} else
{return null;
}
}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){
if(!((tree == null)))
{var c__9544 = comp.call(null,k,tree.key);
if((c__9544 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__9544 < 0))
{var del__9545 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____9546 = !((del__9545 == null));
if(or__3824__auto____9546)
{return or__3824__auto____9546;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__9545,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__9545,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__9547 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____9548 = !((del__9547 == null));
if(or__3824__auto____9548)
{return or__3824__auto____9548;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__9547);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__9547,null));
}
} else
{return null;
}
} else
{return null;
}
}
}
} else
{return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){
var tk__9551 = tree.key;
var c__9552 = comp.call(null,k,tk__9551);
if((c__9552 === 0))
{return tree.replace(tk__9551,v,tree.left,tree.right);
} else
{if((c__9552 < 0))
{return tree.replace(tk__9551,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__9551,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
} else
{return null;
}
}
}
});
void 0;

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
})
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9555 = this;
var h__2153__auto____9556 = this__9555.__hash;
if(!((h__2153__auto____9556 == null)))
{return h__2153__auto____9556;
} else
{var h__2153__auto____9557 = cljs.core.hash_imap.call(null,coll);
this__9555.__hash = h__2153__auto____9557;
return h__2153__auto____9557;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9558 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9559 = this;
var n__9560 = coll.entry_at(k);
if(!((n__9560 == null)))
{return n__9560.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9561 = this;
var found__9562 = [null];
var t__9563 = cljs.core.tree_map_add.call(null,this__9561.comp,this__9561.tree,k,v,found__9562);
if((t__9563 == null))
{var found_node__9564 = cljs.core.nth.call(null,found__9562,0);
if(cljs.core._EQ_.call(null,v,found_node__9564.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9561.comp,cljs.core.tree_map_replace.call(null,this__9561.comp,this__9561.tree,k,v),this__9561.cnt,this__9561.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9561.comp,t__9563.blacken(),(this__9561.cnt + 1),this__9561.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9565 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__9599 = null;
var G__9599__2 = (function (this_sym9566,k){
var this__9568 = this;
var this_sym9566__9569 = this;
var coll__9570 = this_sym9566__9569;
return coll__9570.cljs$core$ILookup$_lookup$arity$2(coll__9570,k);
});
var G__9599__3 = (function (this_sym9567,k,not_found){
var this__9568 = this;
var this_sym9567__9571 = this;
var coll__9572 = this_sym9567__9571;
return coll__9572.cljs$core$ILookup$_lookup$arity$3(coll__9572,k,not_found);
});
G__9599 = function(this_sym9567,k,not_found){
switch(arguments.length){
case 2:
return G__9599__2.call(this,this_sym9567,k);
case 3:
return G__9599__3.call(this,this_sym9567,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9599;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym9553,args9554){
var this__9573 = this;
return this_sym9553.call.apply(this_sym9553,[this_sym9553].concat(args9554.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9574 = this;
if(!((this__9574.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__9574.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9575 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9576 = this;
if((this__9576.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9576.tree,false,this__9576.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__9577 = this;
var this__9578 = this;
return cljs.core.pr_str.call(null,this__9578);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__9579 = this;
var coll__9580 = this;
var t__9581 = this__9579.tree;
while(true){
if(!((t__9581 == null)))
{var c__9582 = this__9579.comp.call(null,k,t__9581.key);
if((c__9582 === 0))
{return t__9581;
} else
{if((c__9582 < 0))
{{
var G__9600 = t__9581.left;
t__9581 = G__9600;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__9601 = t__9581.right;
t__9581 = G__9601;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__9583 = this;
if((this__9583.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9583.tree,ascending_QMARK_,this__9583.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9584 = this;
if((this__9584.cnt > 0))
{var stack__9585 = null;
var t__9586 = this__9584.tree;
while(true){
if(!((t__9586 == null)))
{var c__9587 = this__9584.comp.call(null,k,t__9586.key);
if((c__9587 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__9585,t__9586),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__9587 < 0))
{{
var G__9602 = cljs.core.conj.call(null,stack__9585,t__9586);
var G__9603 = t__9586.left;
stack__9585 = G__9602;
t__9586 = G__9603;
continue;
}
} else
{{
var G__9604 = stack__9585;
var G__9605 = t__9586.right;
stack__9585 = G__9604;
t__9586 = G__9605;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__9587 > 0))
{{
var G__9606 = cljs.core.conj.call(null,stack__9585,t__9586);
var G__9607 = t__9586.right;
stack__9585 = G__9606;
t__9586 = G__9607;
continue;
}
} else
{{
var G__9608 = stack__9585;
var G__9609 = t__9586.left;
stack__9585 = G__9608;
t__9586 = G__9609;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__9585 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__9585,ascending_QMARK_,-1,null));
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__9588 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9589 = this;
return this__9589.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9590 = this;
if((this__9590.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9590.tree,true,this__9590.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9591 = this;
return this__9591.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9592 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9593 = this;
return (new cljs.core.PersistentTreeMap(this__9593.comp,this__9593.tree,this__9593.cnt,meta,this__9593.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9594 = this;
return this__9594.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9595 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__9595.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9596 = this;
var found__9597 = [null];
var t__9598 = cljs.core.tree_map_remove.call(null,this__9596.comp,this__9596.tree,k,found__9597);
if((t__9598 == null))
{if((cljs.core.nth.call(null,found__9597,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9596.comp,null,0,this__9596.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9596.comp,t__9598.blacken(),(this__9596.cnt - 1),this__9596.meta,null));
}
});
cljs.core.PersistentTreeMap;
cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,0,null,0));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in__9612 = cljs.core.seq.call(null,keyvals);
var out__9613 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__9612)
{{
var G__9614 = cljs.core.nnext.call(null,in__9612);
var G__9615 = cljs.core.assoc_BANG_.call(null,out__9613,cljs.core.first.call(null,in__9612),cljs.core.second.call(null,in__9612));
in__9612 = G__9614;
out__9613 = G__9615;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9613);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__9616){
var keyvals = cljs.core.seq(arglist__9616);;
return hash_map__delegate(keyvals);
});
hash_map.cljs$lang$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,cljs.core.count.call(null,keyvals),2),cljs.core.apply.call(null,cljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return array_map__delegate.call(this, keyvals);
};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__9617){
var keyvals = cljs.core.seq(arglist__9617);;
return array_map__delegate(keyvals);
});
array_map.cljs$lang$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){
var in__9620 = cljs.core.seq.call(null,keyvals);
var out__9621 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__9620)
{{
var G__9622 = cljs.core.nnext.call(null,in__9620);
var G__9623 = cljs.core.assoc.call(null,out__9621,cljs.core.first.call(null,in__9620),cljs.core.second.call(null,in__9620));
in__9620 = G__9622;
out__9621 = G__9623;
continue;
}
} else
{return out__9621;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_map__delegate.call(this, keyvals);
};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__9624){
var keyvals = cljs.core.seq(arglist__9624);;
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$lang$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){
var in__9627 = cljs.core.seq.call(null,keyvals);
var out__9628 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__9627)
{{
var G__9629 = cljs.core.nnext.call(null,in__9627);
var G__9630 = cljs.core.assoc.call(null,out__9628,cljs.core.first.call(null,in__9627),cljs.core.second.call(null,in__9627));
in__9627 = G__9629;
out__9628 = G__9630;
continue;
}
} else
{return out__9628;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_map_by__delegate.call(this, comparator, keyvals);
};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__9631){
var comparator = cljs.core.first(arglist__9631);
var keyvals = cljs.core.rest(arglist__9631);
return sorted_map_by__delegate(comparator, keyvals);
});
sorted_map_by.cljs$lang$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){
return cljs.core._key.call(null,map_entry);
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){
return cljs.core._val.call(null,map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__9632_SHARP_,p2__9633_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____9635 = p1__9632_SHARP_;
if(cljs.core.truth_(or__3824__auto____9635))
{return or__3824__auto____9635;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__9633_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__9636){
var maps = cljs.core.seq(arglist__9636);;
return merge__delegate(maps);
});
merge.cljs$lang$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__9644 = (function (m,e){
var k__9642 = cljs.core.first.call(null,e);
var v__9643 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__9642))
{return cljs.core.assoc.call(null,m,k__9642,f.call(null,cljs.core._lookup.call(null,m,k__9642,null),v__9643));
} else
{return cljs.core.assoc.call(null,m,k__9642,v__9643);
}
});
var merge2__9646 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__9644,(function (){var or__3824__auto____9645 = m1;
if(cljs.core.truth_(or__3824__auto____9645))
{return or__3824__auto____9645;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__9646,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__9647){
var f = cljs.core.first(arglist__9647);
var maps = cljs.core.rest(arglist__9647);
return merge_with__delegate(f, maps);
});
merge_with.cljs$lang$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__9652 = cljs.core.ObjMap.EMPTY;
var keys__9653 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__9653)
{var key__9654 = cljs.core.first.call(null,keys__9653);
var entry__9655 = cljs.core._lookup.call(null,map,key__9654,"\uFDD0'user/not-found");
{
var G__9656 = ((cljs.core.not_EQ_.call(null,entry__9655,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__9652,key__9654,entry__9655):ret__9652);
var G__9657 = cljs.core.next.call(null,keys__9653);
ret__9652 = G__9656;
keys__9653 = G__9657;
continue;
}
} else
{return ret__9652;
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
})
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9661 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__9661.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9662 = this;
var h__2153__auto____9663 = this__9662.__hash;
if(!((h__2153__auto____9663 == null)))
{return h__2153__auto____9663;
} else
{var h__2153__auto____9664 = cljs.core.hash_iset.call(null,coll);
this__9662.__hash = h__2153__auto____9664;
return h__2153__auto____9664;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9665 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9666 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9666.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__9687 = null;
var G__9687__2 = (function (this_sym9667,k){
var this__9669 = this;
var this_sym9667__9670 = this;
var coll__9671 = this_sym9667__9670;
return coll__9671.cljs$core$ILookup$_lookup$arity$2(coll__9671,k);
});
var G__9687__3 = (function (this_sym9668,k,not_found){
var this__9669 = this;
var this_sym9668__9672 = this;
var coll__9673 = this_sym9668__9672;
return coll__9673.cljs$core$ILookup$_lookup$arity$3(coll__9673,k,not_found);
});
G__9687 = function(this_sym9668,k,not_found){
switch(arguments.length){
case 2:
return G__9687__2.call(this,this_sym9668,k);
case 3:
return G__9687__3.call(this,this_sym9668,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9687;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym9659,args9660){
var this__9674 = this;
return this_sym9659.call.apply(this_sym9659,[this_sym9659].concat(args9660.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9675 = this;
return (new cljs.core.PersistentHashSet(this__9675.meta,cljs.core.assoc.call(null,this__9675.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__9676 = this;
var this__9677 = this;
return cljs.core.pr_str.call(null,this__9677);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9678 = this;
return cljs.core.keys.call(null,this__9678.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9679 = this;
return (new cljs.core.PersistentHashSet(this__9679.meta,cljs.core.dissoc.call(null,this__9679.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9680 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9681 = this;
var and__3822__auto____9682 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____9682)
{var and__3822__auto____9683 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____9683)
{return cljs.core.every_QMARK_.call(null,(function (p1__9658_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9658_SHARP_);
}),other);
} else
{return and__3822__auto____9683;
}
} else
{return and__3822__auto____9682;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9684 = this;
return (new cljs.core.PersistentHashSet(meta,this__9684.hash_map,this__9684.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9685 = this;
return this__9685.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9686 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__9686.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 34;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__9705 = null;
var G__9705__2 = (function (this_sym9691,k){
var this__9693 = this;
var this_sym9691__9694 = this;
var tcoll__9695 = this_sym9691__9694;
if((cljs.core._lookup.call(null,this__9693.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__9705__3 = (function (this_sym9692,k,not_found){
var this__9693 = this;
var this_sym9692__9696 = this;
var tcoll__9697 = this_sym9692__9696;
if((cljs.core._lookup.call(null,this__9693.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__9705 = function(this_sym9692,k,not_found){
switch(arguments.length){
case 2:
return G__9705__2.call(this,this_sym9692,k);
case 3:
return G__9705__3.call(this,this_sym9692,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9705;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym9689,args9690){
var this__9698 = this;
return this_sym9689.call.apply(this_sym9689,[this_sym9689].concat(args9690.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__9699 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__9700 = this;
if((cljs.core._lookup.call(null,this__9700.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9701 = this;
return cljs.core.count.call(null,this__9701.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__9702 = this;
this__9702.transient_map = cljs.core.dissoc_BANG_.call(null,this__9702.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9703 = this;
this__9703.transient_map = cljs.core.assoc_BANG_.call(null,this__9703.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9704 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__9704.transient_map),null));
});
cljs.core.TransientHashSet;

/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
})
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9708 = this;
var h__2153__auto____9709 = this__9708.__hash;
if(!((h__2153__auto____9709 == null)))
{return h__2153__auto____9709;
} else
{var h__2153__auto____9710 = cljs.core.hash_iset.call(null,coll);
this__9708.__hash = h__2153__auto____9710;
return h__2153__auto____9710;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9711 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9712 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9712.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__9738 = null;
var G__9738__2 = (function (this_sym9713,k){
var this__9715 = this;
var this_sym9713__9716 = this;
var coll__9717 = this_sym9713__9716;
return coll__9717.cljs$core$ILookup$_lookup$arity$2(coll__9717,k);
});
var G__9738__3 = (function (this_sym9714,k,not_found){
var this__9715 = this;
var this_sym9714__9718 = this;
var coll__9719 = this_sym9714__9718;
return coll__9719.cljs$core$ILookup$_lookup$arity$3(coll__9719,k,not_found);
});
G__9738 = function(this_sym9714,k,not_found){
switch(arguments.length){
case 2:
return G__9738__2.call(this,this_sym9714,k);
case 3:
return G__9738__3.call(this,this_sym9714,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9738;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym9706,args9707){
var this__9720 = this;
return this_sym9706.call.apply(this_sym9706,[this_sym9706].concat(args9707.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9721 = this;
return (new cljs.core.PersistentTreeSet(this__9721.meta,cljs.core.assoc.call(null,this__9721.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9722 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__9722.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__9723 = this;
var this__9724 = this;
return cljs.core.pr_str.call(null,this__9724);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__9725 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__9725.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9726 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__9726.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__9727 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9728 = this;
return cljs.core._comparator.call(null,this__9728.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9729 = this;
return cljs.core.keys.call(null,this__9729.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9730 = this;
return (new cljs.core.PersistentTreeSet(this__9730.meta,cljs.core.dissoc.call(null,this__9730.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9731 = this;
return cljs.core.count.call(null,this__9731.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9732 = this;
var and__3822__auto____9733 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____9733)
{var and__3822__auto____9734 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____9734)
{return cljs.core.every_QMARK_.call(null,(function (p1__9688_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9688_SHARP_);
}),other);
} else
{return and__3822__auto____9734;
}
} else
{return and__3822__auto____9733;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9735 = this;
return (new cljs.core.PersistentTreeSet(meta,this__9735.tree_map,this__9735.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9736 = this;
return this__9736.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9737 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__9737.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map.call(null),0));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in__9741 = cljs.core.seq.call(null,coll);
var out__9742 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__9741))
{{
var G__9743 = cljs.core.next.call(null,in__9741);
var G__9744 = cljs.core.conj_BANG_.call(null,out__9742,cljs.core.first.call(null,in__9741));
in__9741 = G__9743;
out__9742 = G__9744;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9742);
}
break;
}
});
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){
return cljs.core.reduce.call(null,cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_set__delegate.call(this, keys);
};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__9745){
var keys = cljs.core.seq(arglist__9745);;
return sorted_set__delegate(keys);
});
sorted_set.cljs$lang$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){
return cljs.core.reduce.call(null,cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by.call(null,comparator),0)),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_set_by__delegate.call(this, comparator, keys);
};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__9747){
var comparator = cljs.core.first(arglist__9747);
var keys = cljs.core.rest(arglist__9747);
return sorted_set_by__delegate(comparator, keys);
});
sorted_set_by.cljs$lang$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.vector_QMARK_.call(null,coll))
{var n__9753 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____9754 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____9754))
{var e__9755 = temp__3971__auto____9754;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__9755));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__9753,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__9746_SHARP_){
var temp__3971__auto____9756 = cljs.core.find.call(null,smap,p1__9746_SHARP_);
if(cljs.core.truth_(temp__3971__auto____9756))
{var e__9757 = temp__3971__auto____9756;
return cljs.core.second.call(null,e__9757);
} else
{return p1__9746_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__9787 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__9780,seen){
while(true){
var vec__9781__9782 = p__9780;
var f__9783 = cljs.core.nth.call(null,vec__9781__9782,0,null);
var xs__9784 = vec__9781__9782;
var temp__3974__auto____9785 = cljs.core.seq.call(null,xs__9784);
if(temp__3974__auto____9785)
{var s__9786 = temp__3974__auto____9785;
if(cljs.core.contains_QMARK_.call(null,seen,f__9783))
{{
var G__9788 = cljs.core.rest.call(null,s__9786);
var G__9789 = seen;
p__9780 = G__9788;
seen = G__9789;
continue;
}
} else
{return cljs.core.cons.call(null,f__9783,step.call(null,cljs.core.rest.call(null,s__9786),cljs.core.conj.call(null,seen,f__9783)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__9787.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__9792 = cljs.core.PersistentVector.EMPTY;
var s__9793 = s;
while(true){
if(cljs.core.next.call(null,s__9793))
{{
var G__9794 = cljs.core.conj.call(null,ret__9792,cljs.core.first.call(null,s__9793));
var G__9795 = cljs.core.next.call(null,s__9793);
ret__9792 = G__9794;
s__9793 = G__9795;
continue;
}
} else
{return cljs.core.seq.call(null,ret__9792);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{if((function (){var or__3824__auto____9798 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9798)
{return or__3824__auto____9798;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9799 = x.lastIndexOf("/");
if((i__9799 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__9799 + 1));
}
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join('')));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if((function (){var or__3824__auto____9802 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9802)
{return or__3824__auto____9802;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9803 = x.lastIndexOf("/");
if((i__9803 > -1))
{return cljs.core.subs.call(null,x,2,i__9803);
} else
{return null;
}
} else
{throw (new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join('')));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__9810 = cljs.core.ObjMap.EMPTY;
var ks__9811 = cljs.core.seq.call(null,keys);
var vs__9812 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____9813 = ks__9811;
if(and__3822__auto____9813)
{return vs__9812;
} else
{return and__3822__auto____9813;
}
})())
{{
var G__9814 = cljs.core.assoc.call(null,map__9810,cljs.core.first.call(null,ks__9811),cljs.core.first.call(null,vs__9812));
var G__9815 = cljs.core.next.call(null,ks__9811);
var G__9816 = cljs.core.next.call(null,vs__9812);
map__9810 = G__9814;
ks__9811 = G__9815;
vs__9812 = G__9816;
continue;
}
} else
{return map__9810;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if((k.call(null,x) > k.call(null,y)))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__9819__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9804_SHARP_,p2__9805_SHARP_){
return max_key.call(null,k,p1__9804_SHARP_,p2__9805_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__9819 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9819__delegate.call(this, k, x, y, more);
};
G__9819.cljs$lang$maxFixedArity = 3;
G__9819.cljs$lang$applyTo = (function (arglist__9820){
var k = cljs.core.first(arglist__9820);
var x = cljs.core.first(cljs.core.next(arglist__9820));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9820)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9820)));
return G__9819__delegate(k, x, y, more);
});
G__9819.cljs$lang$arity$variadic = G__9819__delegate;
return G__9819;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$lang$arity$2 = max_key__2;
max_key.cljs$lang$arity$3 = max_key__3;
max_key.cljs$lang$arity$variadic = max_key__4.cljs$lang$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if((k.call(null,x) < k.call(null,y)))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__9821__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9817_SHARP_,p2__9818_SHARP_){
return min_key.call(null,k,p1__9817_SHARP_,p2__9818_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__9821 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9821__delegate.call(this, k, x, y, more);
};
G__9821.cljs$lang$maxFixedArity = 3;
G__9821.cljs$lang$applyTo = (function (arglist__9822){
var k = cljs.core.first(arglist__9822);
var x = cljs.core.first(cljs.core.next(arglist__9822));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9822)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9822)));
return G__9821__delegate(k, x, y, more);
});
G__9821.cljs$lang$arity$variadic = G__9821__delegate;
return G__9821;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$lang$arity$2 = min_key__2;
min_key.cljs$lang$arity$3 = min_key__3;
min_key.cljs$lang$arity$variadic = min_key__4.cljs$lang$arity$variadic;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__2 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9825 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9825)
{var s__9826 = temp__3974__auto____9825;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__9826),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__9826)));
} else
{return null;
}
}),null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition_all.cljs$lang$arity$2 = partition_all__2;
partition_all.cljs$lang$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9829 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9829)
{var s__9830 = temp__3974__auto____9829;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__9830))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9830),take_while.call(null,pred,cljs.core.rest.call(null,s__9830)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){
return (function (e){
var comp__9832 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__9832.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){
var include__9844 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____9845 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____9845))
{var vec__9846__9847 = temp__3974__auto____9845;
var e__9848 = cljs.core.nth.call(null,vec__9846__9847,0,null);
var s__9849 = vec__9846__9847;
if(cljs.core.truth_(include__9844.call(null,e__9848)))
{return s__9849;
} else
{return cljs.core.next.call(null,s__9849);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9844,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9850 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____9850))
{var vec__9851__9852 = temp__3974__auto____9850;
var e__9853 = cljs.core.nth.call(null,vec__9851__9852,0,null);
var s__9854 = vec__9851__9852;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__9853))?s__9854:cljs.core.next.call(null,s__9854)));
} else
{return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
subseq.cljs$lang$arity$3 = subseq__3;
subseq.cljs$lang$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){
var include__9866 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____9867 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____9867))
{var vec__9868__9869 = temp__3974__auto____9867;
var e__9870 = cljs.core.nth.call(null,vec__9868__9869,0,null);
var s__9871 = vec__9868__9869;
if(cljs.core.truth_(include__9866.call(null,e__9870)))
{return s__9871;
} else
{return cljs.core.next.call(null,s__9871);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9866,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9872 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____9872))
{var vec__9873__9874 = temp__3974__auto____9872;
var e__9875 = cljs.core.nth.call(null,vec__9873__9874,0,null);
var s__9876 = vec__9873__9874;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__9875))?s__9876:cljs.core.next.call(null,s__9876)));
} else
{return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
rsubseq.cljs$lang$arity$3 = rsubseq__3;
rsubseq.cljs$lang$arity$5 = rsubseq__5;
return rsubseq;
})()
;

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
})
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__9877 = this;
var h__2153__auto____9878 = this__9877.__hash;
if(!((h__2153__auto____9878 == null)))
{return h__2153__auto____9878;
} else
{var h__2153__auto____9879 = cljs.core.hash_coll.call(null,rng);
this__9877.__hash = h__2153__auto____9879;
return h__2153__auto____9879;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__9880 = this;
if((this__9880.step > 0))
{if(((this__9880.start + this__9880.step) < this__9880.end))
{return (new cljs.core.Range(this__9880.meta,(this__9880.start + this__9880.step),this__9880.end,this__9880.step,null));
} else
{return null;
}
} else
{if(((this__9880.start + this__9880.step) > this__9880.end))
{return (new cljs.core.Range(this__9880.meta,(this__9880.start + this__9880.step),this__9880.end,this__9880.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__9881 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__9882 = this;
var this__9883 = this;
return cljs.core.pr_str.call(null,this__9883);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__9884 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__9885 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__9886 = this;
if((this__9886.step > 0))
{if((this__9886.start < this__9886.end))
{return rng;
} else
{return null;
}
} else
{if((this__9886.start > this__9886.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__9887 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__9887.end - this__9887.start) / this__9887.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__9888 = this;
return this__9888.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__9889 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__9889.meta,(this__9889.start + this__9889.step),this__9889.end,this__9889.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__9890 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__9891 = this;
return (new cljs.core.Range(meta,this__9891.start,this__9891.end,this__9891.step,this__9891.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__9892 = this;
return this__9892.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__9893 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9893.start + (n * this__9893.step));
} else
{if((function (){var and__3822__auto____9894 = (this__9893.start > this__9893.end);
if(and__3822__auto____9894)
{return (this__9893.step === 0);
} else
{return and__3822__auto____9894;
}
})())
{return this__9893.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__9895 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9895.start + (n * this__9895.step));
} else
{if((function (){var and__3822__auto____9896 = (this__9895.start > this__9895.end);
if(and__3822__auto____9896)
{return (this__9895.step === 0);
} else
{return and__3822__auto____9896;
}
})())
{return this__9895.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__9897 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9897.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.call(null,0,Number.MAX_VALUE,1);
});
var range__1 = (function (end){
return range.call(null,0,end,1);
});
var range__2 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
range.cljs$lang$arity$0 = range__0;
range.cljs$lang$arity$1 = range__1;
range.cljs$lang$arity$2 = range__2;
range.cljs$lang$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9900 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9900)
{var s__9901 = temp__3974__auto____9900;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__9901),take_nth.call(null,n,cljs.core.drop.call(null,n,s__9901)));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)], true);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9908 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9908)
{var s__9909 = temp__3974__auto____9908;
var fst__9910 = cljs.core.first.call(null,s__9909);
var fv__9911 = f.call(null,fst__9910);
var run__9912 = cljs.core.cons.call(null,fst__9910,cljs.core.take_while.call(null,(function (p1__9902_SHARP_){
return cljs.core._EQ_.call(null,fv__9911,f.call(null,p1__9902_SHARP_));
}),cljs.core.next.call(null,s__9909)));
return cljs.core.cons.call(null,run__9912,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__9912),s__9909))));
} else
{return null;
}
}),null));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc_BANG_.call(null,counts,x,(cljs.core._lookup.call(null,counts,x,0) + 1));
}),cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____9927 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____9927)
{var s__9928 = temp__3971__auto____9927;
return reductions.call(null,f,cljs.core.first.call(null,s__9928),cljs.core.rest.call(null,s__9928));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9929 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9929)
{var s__9930 = temp__3974__auto____9929;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__9930)),cljs.core.rest.call(null,s__9930));
} else
{return null;
}
}),null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reductions.cljs$lang$arity$2 = reductions__2;
reductions.cljs$lang$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){
return (function() {
var G__9933 = null;
var G__9933__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__9933__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__9933__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__9933__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__9933__4 = (function() { 
var G__9934__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__9934 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9934__delegate.call(this, x, y, z, args);
};
G__9934.cljs$lang$maxFixedArity = 3;
G__9934.cljs$lang$applyTo = (function (arglist__9935){
var x = cljs.core.first(arglist__9935);
var y = cljs.core.first(cljs.core.next(arglist__9935));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9935)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9935)));
return G__9934__delegate(x, y, z, args);
});
G__9934.cljs$lang$arity$variadic = G__9934__delegate;
return G__9934;
})()
;
G__9933 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9933__0.call(this);
case 1:
return G__9933__1.call(this,x);
case 2:
return G__9933__2.call(this,x,y);
case 3:
return G__9933__3.call(this,x,y,z);
default:
return G__9933__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9933.cljs$lang$maxFixedArity = 3;
G__9933.cljs$lang$applyTo = G__9933__4.cljs$lang$applyTo;
return G__9933;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__9936 = null;
var G__9936__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__9936__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__9936__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__9936__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__9936__4 = (function() { 
var G__9937__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__9937 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9937__delegate.call(this, x, y, z, args);
};
G__9937.cljs$lang$maxFixedArity = 3;
G__9937.cljs$lang$applyTo = (function (arglist__9938){
var x = cljs.core.first(arglist__9938);
var y = cljs.core.first(cljs.core.next(arglist__9938));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9938)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9938)));
return G__9937__delegate(x, y, z, args);
});
G__9937.cljs$lang$arity$variadic = G__9937__delegate;
return G__9937;
})()
;
G__9936 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9936__0.call(this);
case 1:
return G__9936__1.call(this,x);
case 2:
return G__9936__2.call(this,x,y);
case 3:
return G__9936__3.call(this,x,y,z);
default:
return G__9936__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9936.cljs$lang$maxFixedArity = 3;
G__9936.cljs$lang$applyTo = G__9936__4.cljs$lang$applyTo;
return G__9936;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__9939 = null;
var G__9939__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__9939__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__9939__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__9939__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__9939__4 = (function() { 
var G__9940__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__9940 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9940__delegate.call(this, x, y, z, args);
};
G__9940.cljs$lang$maxFixedArity = 3;
G__9940.cljs$lang$applyTo = (function (arglist__9941){
var x = cljs.core.first(arglist__9941);
var y = cljs.core.first(cljs.core.next(arglist__9941));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9941)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9941)));
return G__9940__delegate(x, y, z, args);
});
G__9940.cljs$lang$arity$variadic = G__9940__delegate;
return G__9940;
})()
;
G__9939 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9939__0.call(this);
case 1:
return G__9939__1.call(this,x);
case 2:
return G__9939__2.call(this,x,y);
case 3:
return G__9939__3.call(this,x,y,z);
default:
return G__9939__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9939.cljs$lang$maxFixedArity = 3;
G__9939.cljs$lang$applyTo = G__9939__4.cljs$lang$applyTo;
return G__9939;
})()
});
var juxt__4 = (function() { 
var G__9942__delegate = function (f,g,h,fs){
var fs__9932 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__9943 = null;
var G__9943__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__9913_SHARP_,p2__9914_SHARP_){
return cljs.core.conj.call(null,p1__9913_SHARP_,p2__9914_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__9932);
});
var G__9943__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__9915_SHARP_,p2__9916_SHARP_){
return cljs.core.conj.call(null,p1__9915_SHARP_,p2__9916_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__9932);
});
var G__9943__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__9917_SHARP_,p2__9918_SHARP_){
return cljs.core.conj.call(null,p1__9917_SHARP_,p2__9918_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__9932);
});
var G__9943__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__9919_SHARP_,p2__9920_SHARP_){
return cljs.core.conj.call(null,p1__9919_SHARP_,p2__9920_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__9932);
});
var G__9943__4 = (function() { 
var G__9944__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__9921_SHARP_,p2__9922_SHARP_){
return cljs.core.conj.call(null,p1__9921_SHARP_,cljs.core.apply.call(null,p2__9922_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__9932);
};
var G__9944 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9944__delegate.call(this, x, y, z, args);
};
G__9944.cljs$lang$maxFixedArity = 3;
G__9944.cljs$lang$applyTo = (function (arglist__9945){
var x = cljs.core.first(arglist__9945);
var y = cljs.core.first(cljs.core.next(arglist__9945));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9945)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9945)));
return G__9944__delegate(x, y, z, args);
});
G__9944.cljs$lang$arity$variadic = G__9944__delegate;
return G__9944;
})()
;
G__9943 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9943__0.call(this);
case 1:
return G__9943__1.call(this,x);
case 2:
return G__9943__2.call(this,x,y);
case 3:
return G__9943__3.call(this,x,y,z);
default:
return G__9943__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9943.cljs$lang$maxFixedArity = 3;
G__9943.cljs$lang$applyTo = G__9943__4.cljs$lang$applyTo;
return G__9943;
})()
};
var G__9942 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9942__delegate.call(this, f, g, h, fs);
};
G__9942.cljs$lang$maxFixedArity = 3;
G__9942.cljs$lang$applyTo = (function (arglist__9946){
var f = cljs.core.first(arglist__9946);
var g = cljs.core.first(cljs.core.next(arglist__9946));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9946)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9946)));
return G__9942__delegate(f, g, h, fs);
});
G__9942.cljs$lang$arity$variadic = G__9942__delegate;
return G__9942;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$lang$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$lang$arity$1 = juxt__1;
juxt.cljs$lang$arity$2 = juxt__2;
juxt.cljs$lang$arity$3 = juxt__3;
juxt.cljs$lang$arity$variadic = juxt__4.cljs$lang$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){
while(true){
if(cljs.core.seq.call(null,coll))
{{
var G__9949 = cljs.core.next.call(null,coll);
coll = G__9949;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____9948 = cljs.core.seq.call(null,coll);
if(and__3822__auto____9948)
{return (n > 0);
} else
{return and__3822__auto____9948;
}
})()))
{{
var G__9950 = (n - 1);
var G__9951 = cljs.core.next.call(null,coll);
n = G__9950;
coll = G__9951;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
dorun.cljs$lang$arity$1 = dorun__1;
dorun.cljs$lang$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__2 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
doall.cljs$lang$arity$1 = doall__1;
doall.cljs$lang$arity$2 = doall__2;
return doall;
})()
;
cljs.core.regexp_QMARK_ = (function regexp_QMARK_(o){
return o instanceof RegExp;
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__9953 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__9953),s))
{if((cljs.core.count.call(null,matches__9953) === 1))
{return cljs.core.first.call(null,matches__9953);
} else
{return cljs.core.vec.call(null,matches__9953);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__9955 = re.exec(s);
if((matches__9955 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__9955) === 1))
{return cljs.core.first.call(null,matches__9955);
} else
{return cljs.core.vec.call(null,matches__9955);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__9960 = cljs.core.re_find.call(null,re,s);
var match_idx__9961 = s.search(re);
var match_str__9962 = ((cljs.core.coll_QMARK_.call(null,match_data__9960))?cljs.core.first.call(null,match_data__9960):match_data__9960);
var post_match__9963 = cljs.core.subs.call(null,s,(match_idx__9961 + cljs.core.count.call(null,match_str__9962)));
if(cljs.core.truth_(match_data__9960))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__9960,re_seq.call(null,re,post_match__9963));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__9970__9971 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___9972 = cljs.core.nth.call(null,vec__9970__9971,0,null);
var flags__9973 = cljs.core.nth.call(null,vec__9970__9971,1,null);
var pattern__9974 = cljs.core.nth.call(null,vec__9970__9971,2,null);
return (new RegExp(pattern__9974,flags__9973));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__9964_SHARP_){
return print_one.call(null,p1__9964_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end], true));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if((obj == null))
{return cljs.core.list.call(null,"nil");
} else
{if((void 0 === obj))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if("\uFDD0'else")
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____9984 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____9984))
{var and__3822__auto____9988 = (function (){var G__9985__9986 = obj;
if(G__9985__9986)
{if((function (){var or__3824__auto____9987 = (G__9985__9986.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____9987)
{return or__3824__auto____9987;
} else
{return G__9985__9986.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__9985__9986.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9985__9986);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9985__9986);
}
})();
if(cljs.core.truth_(and__3822__auto____9988))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____9988;
}
} else
{return and__3822__auto____9984;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____9989 = !((obj == null));
if(and__3822__auto____9989)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____9989;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__9990__9991 = obj;
if(G__9990__9991)
{if((function (){var or__3824__auto____9992 = (G__9990__9991.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____9992)
{return or__3824__auto____9992;
} else
{return G__9990__9991.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__9990__9991.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__9990__9991);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__9990__9991);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__10007 = cljs.core.first.call(null,objs);
var sb__10008 = (new goog.string.StringBuffer());
var G__10009__10010 = cljs.core.seq.call(null,objs);
if(G__10009__10010)
{var obj__10011 = cljs.core.first.call(null,G__10009__10010);
var G__10009__10012 = G__10009__10010;
while(true){
if((obj__10011 === first_obj__10007))
{} else
{sb__10008.append(" ");
}
var G__10013__10014 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__10011,opts));
if(G__10013__10014)
{var string__10015 = cljs.core.first.call(null,G__10013__10014);
var G__10013__10016 = G__10013__10014;
while(true){
sb__10008.append(string__10015);
var temp__3974__auto____10017 = cljs.core.next.call(null,G__10013__10016);
if(temp__3974__auto____10017)
{var G__10013__10018 = temp__3974__auto____10017;
{
var G__10021 = cljs.core.first.call(null,G__10013__10018);
var G__10022 = G__10013__10018;
string__10015 = G__10021;
G__10013__10016 = G__10022;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____10019 = cljs.core.next.call(null,G__10009__10012);
if(temp__3974__auto____10019)
{var G__10009__10020 = temp__3974__auto____10019;
{
var G__10023 = cljs.core.first.call(null,G__10009__10020);
var G__10024 = G__10009__10020;
obj__10011 = G__10023;
G__10009__10012 = G__10024;
continue;
}
} else
{}
break;
}
} else
{}
return sb__10008;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
return [cljs.core.str(cljs.core.pr_sb.call(null,objs,opts))].join('');
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
var sb__10026 = cljs.core.pr_sb.call(null,objs,opts);
sb__10026.append("\n");
return [cljs.core.str(sb__10026)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__10040 = cljs.core.first.call(null,objs);
var G__10041__10042 = cljs.core.seq.call(null,objs);
if(G__10041__10042)
{var obj__10043 = cljs.core.first.call(null,G__10041__10042);
var G__10041__10044 = G__10041__10042;
while(true){
if((obj__10043 === first_obj__10040))
{} else
{cljs.core.string_print.call(null," ");
}
var G__10045__10046 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__10043,opts));
if(G__10045__10046)
{var string__10047 = cljs.core.first.call(null,G__10045__10046);
var G__10045__10048 = G__10045__10046;
while(true){
cljs.core.string_print.call(null,string__10047);
var temp__3974__auto____10049 = cljs.core.next.call(null,G__10045__10048);
if(temp__3974__auto____10049)
{var G__10045__10050 = temp__3974__auto____10049;
{
var G__10053 = cljs.core.first.call(null,G__10045__10050);
var G__10054 = G__10045__10050;
string__10047 = G__10053;
G__10045__10048 = G__10054;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____10051 = cljs.core.next.call(null,G__10041__10044);
if(temp__3974__auto____10051)
{var G__10041__10052 = temp__3974__auto____10051;
{
var G__10055 = cljs.core.first.call(null,G__10041__10052);
var G__10056 = G__10041__10052;
obj__10043 = G__10055;
G__10041__10044 = G__10056;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core._lookup.call(null,opts,"\uFDD0'flush-on-newline",null)))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__10057){
var objs = cljs.core.seq(arglist__10057);;
return pr_str__delegate(objs);
});
pr_str.cljs$lang$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var prn_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this, objs);
};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__10058){
var objs = cljs.core.seq(arglist__10058);;
return prn_str__delegate(objs);
});
prn_str.cljs$lang$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__10059){
var objs = cljs.core.seq(arglist__10059);;
return pr__delegate(objs);
});
pr.cljs$lang$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__10060){
var objs = cljs.core.seq(arglist__10060);;
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$lang$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var print_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this, objs);
};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__10061){
var objs = cljs.core.seq(arglist__10061);;
return print_str__delegate(objs);
});
print_str.cljs$lang$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__10062){
var objs = cljs.core.seq(arglist__10062);;
return println__delegate(objs);
});
println.cljs$lang$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var println_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this, objs);
};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__10063){
var objs = cljs.core.seq(arglist__10063);;
return println_str__delegate(objs);
});
println_str.cljs$lang$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__10064){
var objs = cljs.core.seq(arglist__10064);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10065 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10065,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,[cljs.core.str(n)].join(''));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10066 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10066,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10067 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10067,"{",", ","}",opts,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#queue ["," ","]",opts,cljs.core.seq.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,[cljs.core.str(bool)].join(''));
}));
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.keyword_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____10068 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____10068))
{var nspc__10069 = temp__3974__auto____10068;
return [cljs.core.str(nspc__10069),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____10070 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____10070))
{var nspc__10071 = temp__3974__auto____10070;
return [cljs.core.str(nspc__10071),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if("\uFDD0'else")
{return cljs.core.list.call(null,(cljs.core.truth_((new cljs.core.Keyword("\uFDD0'readably")).call(null,opts))?goog.string.quote(obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RedNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10072 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10072,"{",", ","}",opts,coll);
});
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",[cljs.core.str(this$)].join(''),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
Date.prototype.cljs$core$IPrintable$ = true;
Date.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (d,_){
var normalize__10074 = (function (n,len){
var ns__10073 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__10073) < len))
{{
var G__10076 = [cljs.core.str("0"),cljs.core.str(ns__10073)].join('');
ns__10073 = G__10076;
continue;
}
} else
{return ns__10073;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__10074.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__10074.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__10074.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__10074.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__10074.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__10074.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10075 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10075,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
return cljs.core.compare_indexed.call(null,x,y);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2690809856;
})
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10077 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__10078 = this;
var G__10079__10080 = cljs.core.seq.call(null,this__10078.watches);
if(G__10079__10080)
{var G__10082__10084 = cljs.core.first.call(null,G__10079__10080);
var vec__10083__10085 = G__10082__10084;
var key__10086 = cljs.core.nth.call(null,vec__10083__10085,0,null);
var f__10087 = cljs.core.nth.call(null,vec__10083__10085,1,null);
var G__10079__10088 = G__10079__10080;
var G__10082__10089 = G__10082__10084;
var G__10079__10090 = G__10079__10088;
while(true){
var vec__10091__10092 = G__10082__10089;
var key__10093 = cljs.core.nth.call(null,vec__10091__10092,0,null);
var f__10094 = cljs.core.nth.call(null,vec__10091__10092,1,null);
var G__10079__10095 = G__10079__10090;
f__10094.call(null,key__10093,this$,oldval,newval);
var temp__3974__auto____10096 = cljs.core.next.call(null,G__10079__10095);
if(temp__3974__auto____10096)
{var G__10079__10097 = temp__3974__auto____10096;
{
var G__10104 = cljs.core.first.call(null,G__10079__10097);
var G__10105 = G__10079__10097;
G__10082__10089 = G__10104;
G__10079__10090 = G__10105;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__10098 = this;
return this$.watches = cljs.core.assoc.call(null,this__10098.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__10099 = this;
return this$.watches = cljs.core.dissoc.call(null,this__10099.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__10100 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__10100.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__10101 = this;
return this__10101.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__10102 = this;
return this__10102.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__10103 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__10117__delegate = function (x,p__10106){
var map__10112__10113 = p__10106;
var map__10112__10114 = ((cljs.core.seq_QMARK_.call(null,map__10112__10113))?cljs.core.apply.call(null,cljs.core.hash_map,map__10112__10113):map__10112__10113);
var validator__10115 = cljs.core._lookup.call(null,map__10112__10114,"\uFDD0'validator",null);
var meta__10116 = cljs.core._lookup.call(null,map__10112__10114,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__10116,validator__10115,null));
};
var G__10117 = function (x,var_args){
var p__10106 = null;
if (goog.isDef(var_args)) {
  p__10106 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10117__delegate.call(this, x, p__10106);
};
G__10117.cljs$lang$maxFixedArity = 1;
G__10117.cljs$lang$applyTo = (function (arglist__10118){
var x = cljs.core.first(arglist__10118);
var p__10106 = cljs.core.rest(arglist__10118);
return G__10117__delegate(x, p__10106);
});
G__10117.cljs$lang$arity$variadic = G__10117__delegate;
return G__10117;
})()
;
atom = function(x,var_args){
var p__10106 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$lang$arity$1 = atom__1;
atom.cljs$lang$arity$variadic = atom__2.cljs$lang$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3974__auto____10122 = a.validator;
if(cljs.core.truth_(temp__3974__auto____10122))
{var validate__10123 = temp__3974__auto____10122;
if(cljs.core.truth_(validate__10123.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6394))))].join('')));
}
} else
{}
var old_value__10124 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__10124,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___5 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___6 = (function() { 
var G__10125__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__10125 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10125__delegate.call(this, a, f, x, y, z, more);
};
G__10125.cljs$lang$maxFixedArity = 5;
G__10125.cljs$lang$applyTo = (function (arglist__10126){
var a = cljs.core.first(arglist__10126);
var f = cljs.core.first(cljs.core.next(arglist__10126));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10126)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10126))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10126)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10126)))));
return G__10125__delegate(a, f, x, y, z, more);
});
G__10125.cljs$lang$arity$variadic = G__10125__delegate;
return G__10125;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
case 5:
return swap_BANG___5.call(this,a,f,x,y,z);
default:
return swap_BANG___6.cljs$lang$arity$variadic(a,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6.cljs$lang$applyTo;
swap_BANG_.cljs$lang$arity$2 = swap_BANG___2;
swap_BANG_.cljs$lang$arity$3 = swap_BANG___3;
swap_BANG_.cljs$lang$arity$4 = swap_BANG___4;
swap_BANG_.cljs$lang$arity$5 = swap_BANG___5;
swap_BANG_.cljs$lang$arity$variadic = swap_BANG___6.cljs$lang$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core._EQ_.call(null,a.state,oldval))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__10127){
var iref = cljs.core.first(arglist__10127);
var f = cljs.core.first(cljs.core.next(arglist__10127));
var args = cljs.core.rest(cljs.core.next(arglist__10127));
return alter_meta_BANG___delegate(iref, f, args);
});
alter_meta_BANG_.cljs$lang$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){
return gensym.call(null,"G__");
});
var gensym__1 = (function (prefix_string){
if((cljs.core.gensym_counter == null))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,[cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
gensym.cljs$lang$arity$0 = gensym__0;
gensym.cljs$lang$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (state,f){
this.state = state;
this.f = f;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073774592;
})
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__10128 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__10128.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__10129 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__10129.state,(function (p__10130){
var curr_state__10131 = p__10130;
var curr_state__10132 = ((cljs.core.seq_QMARK_.call(null,curr_state__10131))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__10131):curr_state__10131);
var done__10133 = cljs.core._lookup.call(null,curr_state__10132,"\uFDD0'done",null);
if(cljs.core.truth_(done__10133))
{return curr_state__10132;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__10129.f.call(null)});
}
})));
});
cljs.core.Delay;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.delay_QMARK_.call(null,x))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__10154__10155 = options;
var map__10154__10156 = ((cljs.core.seq_QMARK_.call(null,map__10154__10155))?cljs.core.apply.call(null,cljs.core.hash_map,map__10154__10155):map__10154__10155);
var keywordize_keys__10157 = cljs.core._lookup.call(null,map__10154__10156,"\uFDD0'keywordize-keys",null);
var keyfn__10158 = (cljs.core.truth_(keywordize_keys__10157)?cljs.core.keyword:cljs.core.str);
var f__10173 = (function thisfn(x){
if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray(x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if((cljs.core.type.call(null,x) === Object))
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2427__auto____10172 = (function iter__10166(s__10167){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10167__10170 = s__10167;
while(true){
if(cljs.core.seq.call(null,s__10167__10170))
{var k__10171 = cljs.core.first.call(null,s__10167__10170);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__10158.call(null,k__10171),thisfn.call(null,(x[k__10171]))], true),iter__10166.call(null,cljs.core.rest.call(null,s__10167__10170)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2427__auto____10172.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if("\uFDD0'else")
{return x;
} else
{return null;
}
}
}
}
}
});
return f__10173.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__10174){
var x = cljs.core.first(arglist__10174);
var options = cljs.core.rest(arglist__10174);
return js__GT_clj__delegate(x, options);
});
js__GT_clj.cljs$lang$arity$variadic = js__GT_clj__delegate;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__10179 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__10183__delegate = function (args){
var temp__3971__auto____10180 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__10179),args,null);
if(cljs.core.truth_(temp__3971__auto____10180))
{var v__10181 = temp__3971__auto____10180;
return v__10181;
} else
{var ret__10182 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__10179,cljs.core.assoc,args,ret__10182);
return ret__10182;
}
};
var G__10183 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10183__delegate.call(this, args);
};
G__10183.cljs$lang$maxFixedArity = 0;
G__10183.cljs$lang$applyTo = (function (arglist__10184){
var args = cljs.core.seq(arglist__10184);;
return G__10183__delegate(args);
});
G__10183.cljs$lang$arity$variadic = G__10183__delegate;
return G__10183;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){
while(true){
var ret__10186 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__10186))
{{
var G__10187 = ret__10186;
f = G__10187;
continue;
}
} else
{return ret__10186;
}
break;
}
});
var trampoline__2 = (function() { 
var G__10188__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__10188 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10188__delegate.call(this, f, args);
};
G__10188.cljs$lang$maxFixedArity = 1;
G__10188.cljs$lang$applyTo = (function (arglist__10189){
var f = cljs.core.first(arglist__10189);
var args = cljs.core.rest(arglist__10189);
return G__10188__delegate(f, args);
});
G__10188.cljs$lang$arity$variadic = G__10188__delegate;
return G__10188;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$lang$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$lang$arity$1 = trampoline__1;
trampoline.cljs$lang$arity$variadic = trampoline__2.cljs$lang$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.call(null,1);
});
var rand__1 = (function (n){
return (Math.random.call(null) * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor.call(null,(Math.random.call(null) * n));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__10191 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__10191,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__10191,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.ObjMap.EMPTY,coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.EMPTY,"\uFDD0'descendants":cljs.core.ObjMap.EMPTY,"\uFDD0'ancestors":cljs.core.ObjMap.EMPTY});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3824__auto____10200 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____10200)
{return or__3824__auto____10200;
} else
{var or__3824__auto____10201 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____10201)
{return or__3824__auto____10201;
} else
{var and__3822__auto____10202 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____10202)
{var and__3822__auto____10203 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____10203)
{var and__3822__auto____10204 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____10204)
{var ret__10205 = true;
var i__10206 = 0;
while(true){
if((function (){var or__3824__auto____10207 = cljs.core.not.call(null,ret__10205);
if(or__3824__auto____10207)
{return or__3824__auto____10207;
} else
{return (i__10206 === cljs.core.count.call(null,parent));
}
})())
{return ret__10205;
} else
{{
var G__10208 = isa_QMARK_.call(null,h,child.call(null,i__10206),parent.call(null,i__10206));
var G__10209 = (i__10206 + 1);
ret__10205 = G__10208;
i__10206 = G__10209;
continue;
}
}
break;
}
} else
{return and__3822__auto____10204;
}
} else
{return and__3822__auto____10203;
}
} else
{return and__3822__auto____10202;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
isa_QMARK_.cljs$lang$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$lang$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,null));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
parents.cljs$lang$arity$1 = parents__1;
parents.cljs$lang$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,null));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
ancestors.cljs$lang$arity$1 = ancestors__1;
ancestors.cljs$lang$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),tag,null));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
descendants.cljs$lang$arity$1 = descendants__1;
descendants.cljs$lang$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6678))))].join('')));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.call(null,tag,parent))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6682))))].join('')));
}
var tp__10218 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__10219 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__10220 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__10221 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____10222 = ((cljs.core.contains_QMARK_.call(null,tp__10218.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__10220.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__10220.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__10218,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__10221.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__10219,parent,ta__10220),"\uFDD0'descendants":tf__10221.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__10220,tag,td__10219)});
})());
if(cljs.core.truth_(or__3824__auto____10222))
{return or__3824__auto____10222;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
derive.cljs$lang$arity$2 = derive__2;
derive.cljs$lang$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap__10227 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__10228 = (cljs.core.truth_(parentMap__10227.call(null,tag))?cljs.core.disj.call(null,parentMap__10227.call(null,tag),parent):cljs.core.set([]));
var newParents__10229 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__10228))?cljs.core.assoc.call(null,parentMap__10227,tag,childsParents__10228):cljs.core.dissoc.call(null,parentMap__10227,tag));
var deriv_seq__10230 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__10210_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__10210_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__10210_SHARP_),cljs.core.second.call(null,p1__10210_SHARP_)));
}),cljs.core.seq.call(null,newParents__10229)));
if(cljs.core.contains_QMARK_.call(null,parentMap__10227.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__10211_SHARP_,p2__10212_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__10211_SHARP_,p2__10212_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__10230));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
underive.cljs$lang$arity$2 = underive__2;
underive.cljs$lang$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__10238 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____10240 = (cljs.core.truth_((function (){var and__3822__auto____10239 = xprefs__10238;
if(cljs.core.truth_(and__3822__auto____10239))
{return xprefs__10238.call(null,y);
} else
{return and__3822__auto____10239;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____10240))
{return or__3824__auto____10240;
} else
{var or__3824__auto____10242 = (function (){var ps__10241 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__10241) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__10241),prefer_table)))
{} else
{}
{
var G__10245 = cljs.core.rest.call(null,ps__10241);
ps__10241 = G__10245;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____10242))
{return or__3824__auto____10242;
} else
{var or__3824__auto____10244 = (function (){var ps__10243 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__10243) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__10243),y,prefer_table)))
{} else
{}
{
var G__10246 = cljs.core.rest.call(null,ps__10243);
ps__10243 = G__10246;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____10244))
{return or__3824__auto____10244;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____10248 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____10248))
{return or__3824__auto____10248;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__10266 = cljs.core.reduce.call(null,(function (be,p__10258){
var vec__10259__10260 = p__10258;
var k__10261 = cljs.core.nth.call(null,vec__10259__10260,0,null);
var ___10262 = cljs.core.nth.call(null,vec__10259__10260,1,null);
var e__10263 = vec__10259__10260;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__10261))
{var be2__10265 = (cljs.core.truth_((function (){var or__3824__auto____10264 = (be == null);
if(or__3824__auto____10264)
{return or__3824__auto____10264;
} else
{return cljs.core.dominates.call(null,k__10261,cljs.core.first.call(null,be),prefer_table);
}
})())?e__10263:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__10265),k__10261,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__10261),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__10265)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__10265;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__10266))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__10266));
return cljs.core.second.call(null,best_entry__10266);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
void 0;cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if((function (){var and__3822__auto____10270 = mf;
if(and__3822__auto____10270)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____10270;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{return (function (){var or__3824__auto____10271 = (cljs.core._reset[goog.typeOf(mf)]);
if(or__3824__auto____10271)
{return or__3824__auto____10271;
} else
{var or__3824__auto____10272 = (cljs.core._reset["_"]);
if(or__3824__auto____10272)
{return or__3824__auto____10272;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____10276 = mf;
if(and__3822__auto____10276)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____10276;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{return (function (){var or__3824__auto____10277 = (cljs.core._add_method[goog.typeOf(mf)]);
if(or__3824__auto____10277)
{return or__3824__auto____10277;
} else
{var or__3824__auto____10278 = (cljs.core._add_method["_"]);
if(or__3824__auto____10278)
{return or__3824__auto____10278;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____10282 = mf;
if(and__3822__auto____10282)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____10282;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____10283 = (cljs.core._remove_method[goog.typeOf(mf)]);
if(or__3824__auto____10283)
{return or__3824__auto____10283;
} else
{var or__3824__auto____10284 = (cljs.core._remove_method["_"]);
if(or__3824__auto____10284)
{return or__3824__auto____10284;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____10288 = mf;
if(and__3822__auto____10288)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____10288;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3824__auto____10289 = (cljs.core._prefer_method[goog.typeOf(mf)]);
if(or__3824__auto____10289)
{return or__3824__auto____10289;
} else
{var or__3824__auto____10290 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____10290)
{return or__3824__auto____10290;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____10294 = mf;
if(and__3822__auto____10294)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____10294;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____10295 = (cljs.core._get_method[goog.typeOf(mf)]);
if(or__3824__auto____10295)
{return or__3824__auto____10295;
} else
{var or__3824__auto____10296 = (cljs.core._get_method["_"]);
if(or__3824__auto____10296)
{return or__3824__auto____10296;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____10300 = mf;
if(and__3822__auto____10300)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____10300;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{return (function (){var or__3824__auto____10301 = (cljs.core._methods[goog.typeOf(mf)]);
if(or__3824__auto____10301)
{return or__3824__auto____10301;
} else
{var or__3824__auto____10302 = (cljs.core._methods["_"]);
if(or__3824__auto____10302)
{return or__3824__auto____10302;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____10306 = mf;
if(and__3822__auto____10306)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____10306;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{return (function (){var or__3824__auto____10307 = (cljs.core._prefers[goog.typeOf(mf)]);
if(or__3824__auto____10307)
{return or__3824__auto____10307;
} else
{var or__3824__auto____10308 = (cljs.core._prefers["_"]);
if(or__3824__auto____10308)
{return or__3824__auto____10308;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____10312 = mf;
if(and__3822__auto____10312)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____10312;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{return (function (){var or__3824__auto____10313 = (cljs.core._dispatch[goog.typeOf(mf)]);
if(or__3824__auto____10313)
{return or__3824__auto____10313;
} else
{var or__3824__auto____10314 = (cljs.core._dispatch["_"]);
if(or__3824__auto____10314)
{return or__3824__auto____10314;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
void 0;cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__10317 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__10318 = cljs.core._get_method.call(null,mf,dispatch_val__10317);
if(cljs.core.truth_(target_fn__10318))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__10317)].join('')));
}
return cljs.core.apply.call(null,target_fn__10318,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194304;
this.cljs$lang$protocol_mask$partition1$ = 64;
})
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10319 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__10320 = this;
cljs.core.swap_BANG_.call(null,this__10320.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10320.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10320.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10320.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__10321 = this;
cljs.core.swap_BANG_.call(null,this__10321.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__10321.method_cache,this__10321.method_table,this__10321.cached_hierarchy,this__10321.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__10322 = this;
cljs.core.swap_BANG_.call(null,this__10322.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__10322.method_cache,this__10322.method_table,this__10322.cached_hierarchy,this__10322.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__10323 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__10323.cached_hierarchy),cljs.core.deref.call(null,this__10323.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__10323.method_cache,this__10323.method_table,this__10323.cached_hierarchy,this__10323.hierarchy);
}
var temp__3971__auto____10324 = cljs.core.deref.call(null,this__10323.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____10324))
{var target_fn__10325 = temp__3971__auto____10324;
return target_fn__10325;
} else
{var temp__3971__auto____10326 = cljs.core.find_and_cache_best_method.call(null,this__10323.name,dispatch_val,this__10323.hierarchy,this__10323.method_table,this__10323.prefer_table,this__10323.method_cache,this__10323.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____10326))
{var target_fn__10327 = temp__3971__auto____10326;
return target_fn__10327;
} else
{return cljs.core.deref.call(null,this__10323.method_table).call(null,this__10323.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__10328 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__10328.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__10328.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__10328.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__10328.method_cache,this__10328.method_table,this__10328.cached_hierarchy,this__10328.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__10329 = this;
return cljs.core.deref.call(null,this__10329.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__10330 = this;
return cljs.core.deref.call(null,this__10330.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__10331 = this;
return cljs.core.do_dispatch.call(null,mf,this__10331.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__10333__delegate = function (_,args){
var self__10332 = this;
return cljs.core._dispatch.call(null,self__10332,args);
};
var G__10333 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10333__delegate.call(this, _, args);
};
G__10333.cljs$lang$maxFixedArity = 1;
G__10333.cljs$lang$applyTo = (function (arglist__10334){
var _ = cljs.core.first(arglist__10334);
var args = cljs.core.rest(arglist__10334);
return G__10333__delegate(_, args);
});
G__10333.cljs$lang$arity$variadic = G__10333__delegate;
return G__10333;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__10335 = this;
return cljs.core._dispatch.call(null,self__10335,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 543162368;
})
cljs.core.UUID.cljs$lang$type = true;
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__2270__auto__){
return cljs.core.list.call(null,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10336 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_10338,_){
var this__10337 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__10337.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__10339 = this;
return (this__10339.uuid === other.uuid);
});
cljs.core.UUID.prototype.toString = (function (){
var this__10340 = this;
var this__10341 = this;
return cljs.core.pr_str.call(null,this__10341);
});
cljs.core.UUID;
