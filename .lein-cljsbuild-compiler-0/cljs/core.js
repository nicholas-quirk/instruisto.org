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
var G__6623__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__6623 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6623__delegate.call(this, array, i, idxs);
};
G__6623.cljs$lang$maxFixedArity = 2;
G__6623.cljs$lang$applyTo = (function (arglist__6624){
var array = cljs.core.first(arglist__6624);
var i = cljs.core.first(cljs.core.next(arglist__6624));
var idxs = cljs.core.rest(cljs.core.next(arglist__6624));
return G__6623__delegate(array, i, idxs);
});
G__6623.cljs$lang$arity$variadic = G__6623__delegate;
return G__6623;
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
if((function (){var and__3822__auto____6688 = this$;
if(and__3822__auto____6688)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____6688;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{return (function (){var or__3824__auto____6689 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6689)
{return or__3824__auto____6689;
} else
{var or__3824__auto____6690 = (cljs.core._invoke["_"]);
if(or__3824__auto____6690)
{return or__3824__auto____6690;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____6691 = this$;
if(and__3822__auto____6691)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____6691;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{return (function (){var or__3824__auto____6692 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6692)
{return or__3824__auto____6692;
} else
{var or__3824__auto____6693 = (cljs.core._invoke["_"]);
if(or__3824__auto____6693)
{return or__3824__auto____6693;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____6694 = this$;
if(and__3822__auto____6694)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____6694;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{return (function (){var or__3824__auto____6695 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6695)
{return or__3824__auto____6695;
} else
{var or__3824__auto____6696 = (cljs.core._invoke["_"]);
if(or__3824__auto____6696)
{return or__3824__auto____6696;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____6697 = this$;
if(and__3822__auto____6697)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____6697;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{return (function (){var or__3824__auto____6698 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6698)
{return or__3824__auto____6698;
} else
{var or__3824__auto____6699 = (cljs.core._invoke["_"]);
if(or__3824__auto____6699)
{return or__3824__auto____6699;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____6700 = this$;
if(and__3822__auto____6700)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____6700;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{return (function (){var or__3824__auto____6701 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6701)
{return or__3824__auto____6701;
} else
{var or__3824__auto____6702 = (cljs.core._invoke["_"]);
if(or__3824__auto____6702)
{return or__3824__auto____6702;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____6703 = this$;
if(and__3822__auto____6703)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____6703;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{return (function (){var or__3824__auto____6704 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6704)
{return or__3824__auto____6704;
} else
{var or__3824__auto____6705 = (cljs.core._invoke["_"]);
if(or__3824__auto____6705)
{return or__3824__auto____6705;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____6706 = this$;
if(and__3822__auto____6706)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____6706;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3824__auto____6707 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6707)
{return or__3824__auto____6707;
} else
{var or__3824__auto____6708 = (cljs.core._invoke["_"]);
if(or__3824__auto____6708)
{return or__3824__auto____6708;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____6709 = this$;
if(and__3822__auto____6709)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____6709;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3824__auto____6710 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6710)
{return or__3824__auto____6710;
} else
{var or__3824__auto____6711 = (cljs.core._invoke["_"]);
if(or__3824__auto____6711)
{return or__3824__auto____6711;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____6712 = this$;
if(and__3822__auto____6712)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____6712;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3824__auto____6713 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6713)
{return or__3824__auto____6713;
} else
{var or__3824__auto____6714 = (cljs.core._invoke["_"]);
if(or__3824__auto____6714)
{return or__3824__auto____6714;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____6715 = this$;
if(and__3822__auto____6715)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____6715;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3824__auto____6716 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6716)
{return or__3824__auto____6716;
} else
{var or__3824__auto____6717 = (cljs.core._invoke["_"]);
if(or__3824__auto____6717)
{return or__3824__auto____6717;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____6718 = this$;
if(and__3822__auto____6718)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____6718;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3824__auto____6719 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6719)
{return or__3824__auto____6719;
} else
{var or__3824__auto____6720 = (cljs.core._invoke["_"]);
if(or__3824__auto____6720)
{return or__3824__auto____6720;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____6721 = this$;
if(and__3822__auto____6721)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____6721;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3824__auto____6722 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6722)
{return or__3824__auto____6722;
} else
{var or__3824__auto____6723 = (cljs.core._invoke["_"]);
if(or__3824__auto____6723)
{return or__3824__auto____6723;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____6724 = this$;
if(and__3822__auto____6724)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____6724;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3824__auto____6725 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6725)
{return or__3824__auto____6725;
} else
{var or__3824__auto____6726 = (cljs.core._invoke["_"]);
if(or__3824__auto____6726)
{return or__3824__auto____6726;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____6727 = this$;
if(and__3822__auto____6727)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____6727;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3824__auto____6728 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6728)
{return or__3824__auto____6728;
} else
{var or__3824__auto____6729 = (cljs.core._invoke["_"]);
if(or__3824__auto____6729)
{return or__3824__auto____6729;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____6730 = this$;
if(and__3822__auto____6730)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____6730;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3824__auto____6731 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6731)
{return or__3824__auto____6731;
} else
{var or__3824__auto____6732 = (cljs.core._invoke["_"]);
if(or__3824__auto____6732)
{return or__3824__auto____6732;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____6733 = this$;
if(and__3822__auto____6733)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____6733;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3824__auto____6734 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6734)
{return or__3824__auto____6734;
} else
{var or__3824__auto____6735 = (cljs.core._invoke["_"]);
if(or__3824__auto____6735)
{return or__3824__auto____6735;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____6736 = this$;
if(and__3822__auto____6736)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____6736;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3824__auto____6737 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6737)
{return or__3824__auto____6737;
} else
{var or__3824__auto____6738 = (cljs.core._invoke["_"]);
if(or__3824__auto____6738)
{return or__3824__auto____6738;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____6739 = this$;
if(and__3822__auto____6739)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____6739;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3824__auto____6740 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6740)
{return or__3824__auto____6740;
} else
{var or__3824__auto____6741 = (cljs.core._invoke["_"]);
if(or__3824__auto____6741)
{return or__3824__auto____6741;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____6742 = this$;
if(and__3822__auto____6742)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____6742;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3824__auto____6743 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6743)
{return or__3824__auto____6743;
} else
{var or__3824__auto____6744 = (cljs.core._invoke["_"]);
if(or__3824__auto____6744)
{return or__3824__auto____6744;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____6745 = this$;
if(and__3822__auto____6745)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____6745;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3824__auto____6746 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6746)
{return or__3824__auto____6746;
} else
{var or__3824__auto____6747 = (cljs.core._invoke["_"]);
if(or__3824__auto____6747)
{return or__3824__auto____6747;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____6748 = this$;
if(and__3822__auto____6748)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____6748;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3824__auto____6749 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6749)
{return or__3824__auto____6749;
} else
{var or__3824__auto____6750 = (cljs.core._invoke["_"]);
if(or__3824__auto____6750)
{return or__3824__auto____6750;
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
if((function (){var and__3822__auto____6754 = coll;
if(and__3822__auto____6754)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____6754;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{return (function (){var or__3824__auto____6755 = (cljs.core._count[goog.typeOf(coll)]);
if(or__3824__auto____6755)
{return or__3824__auto____6755;
} else
{var or__3824__auto____6756 = (cljs.core._count["_"]);
if(or__3824__auto____6756)
{return or__3824__auto____6756;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____6760 = coll;
if(and__3822__auto____6760)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____6760;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (function (){var or__3824__auto____6761 = (cljs.core._empty[goog.typeOf(coll)]);
if(or__3824__auto____6761)
{return or__3824__auto____6761;
} else
{var or__3824__auto____6762 = (cljs.core._empty["_"]);
if(or__3824__auto____6762)
{return or__3824__auto____6762;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____6766 = coll;
if(and__3822__auto____6766)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____6766;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{return (function (){var or__3824__auto____6767 = (cljs.core._conj[goog.typeOf(coll)]);
if(or__3824__auto____6767)
{return or__3824__auto____6767;
} else
{var or__3824__auto____6768 = (cljs.core._conj["_"]);
if(or__3824__auto____6768)
{return or__3824__auto____6768;
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
if((function (){var and__3822__auto____6775 = coll;
if(and__3822__auto____6775)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____6775;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return (function (){var or__3824__auto____6776 = (cljs.core._nth[goog.typeOf(coll)]);
if(or__3824__auto____6776)
{return or__3824__auto____6776;
} else
{var or__3824__auto____6777 = (cljs.core._nth["_"]);
if(or__3824__auto____6777)
{return or__3824__auto____6777;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____6778 = coll;
if(and__3822__auto____6778)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____6778;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{return (function (){var or__3824__auto____6779 = (cljs.core._nth[goog.typeOf(coll)]);
if(or__3824__auto____6779)
{return or__3824__auto____6779;
} else
{var or__3824__auto____6780 = (cljs.core._nth["_"]);
if(or__3824__auto____6780)
{return or__3824__auto____6780;
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
if((function (){var and__3822__auto____6784 = coll;
if(and__3822__auto____6784)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____6784;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____6785 = (cljs.core._first[goog.typeOf(coll)]);
if(or__3824__auto____6785)
{return or__3824__auto____6785;
} else
{var or__3824__auto____6786 = (cljs.core._first["_"]);
if(or__3824__auto____6786)
{return or__3824__auto____6786;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____6790 = coll;
if(and__3822__auto____6790)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____6790;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{return (function (){var or__3824__auto____6791 = (cljs.core._rest[goog.typeOf(coll)]);
if(or__3824__auto____6791)
{return or__3824__auto____6791;
} else
{var or__3824__auto____6792 = (cljs.core._rest["_"]);
if(or__3824__auto____6792)
{return or__3824__auto____6792;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____6796 = coll;
if(and__3822__auto____6796)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____6796;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{return (function (){var or__3824__auto____6797 = (cljs.core._next[goog.typeOf(coll)]);
if(or__3824__auto____6797)
{return or__3824__auto____6797;
} else
{var or__3824__auto____6798 = (cljs.core._next["_"]);
if(or__3824__auto____6798)
{return or__3824__auto____6798;
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
if((function (){var and__3822__auto____6805 = o;
if(and__3822__auto____6805)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____6805;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{return (function (){var or__3824__auto____6806 = (cljs.core._lookup[goog.typeOf(o)]);
if(or__3824__auto____6806)
{return or__3824__auto____6806;
} else
{var or__3824__auto____6807 = (cljs.core._lookup["_"]);
if(or__3824__auto____6807)
{return or__3824__auto____6807;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____6808 = o;
if(and__3822__auto____6808)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____6808;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{return (function (){var or__3824__auto____6809 = (cljs.core._lookup[goog.typeOf(o)]);
if(or__3824__auto____6809)
{return or__3824__auto____6809;
} else
{var or__3824__auto____6810 = (cljs.core._lookup["_"]);
if(or__3824__auto____6810)
{return or__3824__auto____6810;
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
if((function (){var and__3822__auto____6814 = coll;
if(and__3822__auto____6814)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____6814;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{return (function (){var or__3824__auto____6815 = (cljs.core._contains_key_QMARK_[goog.typeOf(coll)]);
if(or__3824__auto____6815)
{return or__3824__auto____6815;
} else
{var or__3824__auto____6816 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____6816)
{return or__3824__auto____6816;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____6820 = coll;
if(and__3822__auto____6820)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____6820;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{return (function (){var or__3824__auto____6821 = (cljs.core._assoc[goog.typeOf(coll)]);
if(or__3824__auto____6821)
{return or__3824__auto____6821;
} else
{var or__3824__auto____6822 = (cljs.core._assoc["_"]);
if(or__3824__auto____6822)
{return or__3824__auto____6822;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
void 0;void 0;cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____6826 = coll;
if(and__3822__auto____6826)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____6826;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{return (function (){var or__3824__auto____6827 = (cljs.core._dissoc[goog.typeOf(coll)]);
if(or__3824__auto____6827)
{return or__3824__auto____6827;
} else
{var or__3824__auto____6828 = (cljs.core._dissoc["_"]);
if(or__3824__auto____6828)
{return or__3824__auto____6828;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
void 0;void 0;cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____6832 = coll;
if(and__3822__auto____6832)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____6832;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{return (function (){var or__3824__auto____6833 = (cljs.core._key[goog.typeOf(coll)]);
if(or__3824__auto____6833)
{return or__3824__auto____6833;
} else
{var or__3824__auto____6834 = (cljs.core._key["_"]);
if(or__3824__auto____6834)
{return or__3824__auto____6834;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____6838 = coll;
if(and__3822__auto____6838)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____6838;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{return (function (){var or__3824__auto____6839 = (cljs.core._val[goog.typeOf(coll)]);
if(or__3824__auto____6839)
{return or__3824__auto____6839;
} else
{var or__3824__auto____6840 = (cljs.core._val["_"]);
if(or__3824__auto____6840)
{return or__3824__auto____6840;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____6844 = coll;
if(and__3822__auto____6844)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____6844;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{return (function (){var or__3824__auto____6845 = (cljs.core._disjoin[goog.typeOf(coll)]);
if(or__3824__auto____6845)
{return or__3824__auto____6845;
} else
{var or__3824__auto____6846 = (cljs.core._disjoin["_"]);
if(or__3824__auto____6846)
{return or__3824__auto____6846;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
void 0;void 0;cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____6850 = coll;
if(and__3822__auto____6850)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____6850;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{return (function (){var or__3824__auto____6851 = (cljs.core._peek[goog.typeOf(coll)]);
if(or__3824__auto____6851)
{return or__3824__auto____6851;
} else
{var or__3824__auto____6852 = (cljs.core._peek["_"]);
if(or__3824__auto____6852)
{return or__3824__auto____6852;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____6856 = coll;
if(and__3822__auto____6856)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____6856;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{return (function (){var or__3824__auto____6857 = (cljs.core._pop[goog.typeOf(coll)]);
if(or__3824__auto____6857)
{return or__3824__auto____6857;
} else
{var or__3824__auto____6858 = (cljs.core._pop["_"]);
if(or__3824__auto____6858)
{return or__3824__auto____6858;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____6862 = coll;
if(and__3822__auto____6862)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____6862;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{return (function (){var or__3824__auto____6863 = (cljs.core._assoc_n[goog.typeOf(coll)]);
if(or__3824__auto____6863)
{return or__3824__auto____6863;
} else
{var or__3824__auto____6864 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____6864)
{return or__3824__auto____6864;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
void 0;void 0;cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____6868 = o;
if(and__3822__auto____6868)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____6868;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{return (function (){var or__3824__auto____6869 = (cljs.core._deref[goog.typeOf(o)]);
if(or__3824__auto____6869)
{return or__3824__auto____6869;
} else
{var or__3824__auto____6870 = (cljs.core._deref["_"]);
if(or__3824__auto____6870)
{return or__3824__auto____6870;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____6874 = o;
if(and__3822__auto____6874)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____6874;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{return (function (){var or__3824__auto____6875 = (cljs.core._deref_with_timeout[goog.typeOf(o)]);
if(or__3824__auto____6875)
{return or__3824__auto____6875;
} else
{var or__3824__auto____6876 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____6876)
{return or__3824__auto____6876;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
void 0;void 0;cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____6880 = o;
if(and__3822__auto____6880)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____6880;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{return (function (){var or__3824__auto____6881 = (cljs.core._meta[goog.typeOf(o)]);
if(or__3824__auto____6881)
{return or__3824__auto____6881;
} else
{var or__3824__auto____6882 = (cljs.core._meta["_"]);
if(or__3824__auto____6882)
{return or__3824__auto____6882;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____6886 = o;
if(and__3822__auto____6886)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____6886;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{return (function (){var or__3824__auto____6887 = (cljs.core._with_meta[goog.typeOf(o)]);
if(or__3824__auto____6887)
{return or__3824__auto____6887;
} else
{var or__3824__auto____6888 = (cljs.core._with_meta["_"]);
if(or__3824__auto____6888)
{return or__3824__auto____6888;
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
if((function (){var and__3822__auto____6895 = coll;
if(and__3822__auto____6895)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____6895;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{return (function (){var or__3824__auto____6896 = (cljs.core._reduce[goog.typeOf(coll)]);
if(or__3824__auto____6896)
{return or__3824__auto____6896;
} else
{var or__3824__auto____6897 = (cljs.core._reduce["_"]);
if(or__3824__auto____6897)
{return or__3824__auto____6897;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____6898 = coll;
if(and__3822__auto____6898)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____6898;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{return (function (){var or__3824__auto____6899 = (cljs.core._reduce[goog.typeOf(coll)]);
if(or__3824__auto____6899)
{return or__3824__auto____6899;
} else
{var or__3824__auto____6900 = (cljs.core._reduce["_"]);
if(or__3824__auto____6900)
{return or__3824__auto____6900;
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
if((function (){var and__3822__auto____6904 = coll;
if(and__3822__auto____6904)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____6904;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{return (function (){var or__3824__auto____6905 = (cljs.core._kv_reduce[goog.typeOf(coll)]);
if(or__3824__auto____6905)
{return or__3824__auto____6905;
} else
{var or__3824__auto____6906 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____6906)
{return or__3824__auto____6906;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
void 0;void 0;cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____6910 = o;
if(and__3822__auto____6910)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____6910;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{return (function (){var or__3824__auto____6911 = (cljs.core._equiv[goog.typeOf(o)]);
if(or__3824__auto____6911)
{return or__3824__auto____6911;
} else
{var or__3824__auto____6912 = (cljs.core._equiv["_"]);
if(or__3824__auto____6912)
{return or__3824__auto____6912;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
void 0;void 0;cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____6916 = o;
if(and__3822__auto____6916)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____6916;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{return (function (){var or__3824__auto____6917 = (cljs.core._hash[goog.typeOf(o)]);
if(or__3824__auto____6917)
{return or__3824__auto____6917;
} else
{var or__3824__auto____6918 = (cljs.core._hash["_"]);
if(or__3824__auto____6918)
{return or__3824__auto____6918;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____6922 = o;
if(and__3822__auto____6922)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____6922;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{return (function (){var or__3824__auto____6923 = (cljs.core._seq[goog.typeOf(o)]);
if(or__3824__auto____6923)
{return or__3824__auto____6923;
} else
{var or__3824__auto____6924 = (cljs.core._seq["_"]);
if(or__3824__auto____6924)
{return or__3824__auto____6924;
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
if((function (){var and__3822__auto____6928 = coll;
if(and__3822__auto____6928)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____6928;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{return (function (){var or__3824__auto____6929 = (cljs.core._rseq[goog.typeOf(coll)]);
if(or__3824__auto____6929)
{return or__3824__auto____6929;
} else
{var or__3824__auto____6930 = (cljs.core._rseq["_"]);
if(or__3824__auto____6930)
{return or__3824__auto____6930;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____6934 = coll;
if(and__3822__auto____6934)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____6934;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{return (function (){var or__3824__auto____6935 = (cljs.core._sorted_seq[goog.typeOf(coll)]);
if(or__3824__auto____6935)
{return or__3824__auto____6935;
} else
{var or__3824__auto____6936 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____6936)
{return or__3824__auto____6936;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____6940 = coll;
if(and__3822__auto____6940)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____6940;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{return (function (){var or__3824__auto____6941 = (cljs.core._sorted_seq_from[goog.typeOf(coll)]);
if(or__3824__auto____6941)
{return or__3824__auto____6941;
} else
{var or__3824__auto____6942 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____6942)
{return or__3824__auto____6942;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____6946 = coll;
if(and__3822__auto____6946)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____6946;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{return (function (){var or__3824__auto____6947 = (cljs.core._entry_key[goog.typeOf(coll)]);
if(or__3824__auto____6947)
{return or__3824__auto____6947;
} else
{var or__3824__auto____6948 = (cljs.core._entry_key["_"]);
if(or__3824__auto____6948)
{return or__3824__auto____6948;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____6952 = coll;
if(and__3822__auto____6952)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____6952;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{return (function (){var or__3824__auto____6953 = (cljs.core._comparator[goog.typeOf(coll)]);
if(or__3824__auto____6953)
{return or__3824__auto____6953;
} else
{var or__3824__auto____6954 = (cljs.core._comparator["_"]);
if(or__3824__auto____6954)
{return or__3824__auto____6954;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____6958 = o;
if(and__3822__auto____6958)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____6958;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{return (function (){var or__3824__auto____6959 = (cljs.core._pr_seq[goog.typeOf(o)]);
if(or__3824__auto____6959)
{return or__3824__auto____6959;
} else
{var or__3824__auto____6960 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____6960)
{return or__3824__auto____6960;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
void 0;void 0;cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____6964 = d;
if(and__3822__auto____6964)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____6964;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{return (function (){var or__3824__auto____6965 = (cljs.core._realized_QMARK_[goog.typeOf(d)]);
if(or__3824__auto____6965)
{return or__3824__auto____6965;
} else
{var or__3824__auto____6966 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____6966)
{return or__3824__auto____6966;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
void 0;void 0;cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____6970 = this$;
if(and__3822__auto____6970)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____6970;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{return (function (){var or__3824__auto____6971 = (cljs.core._notify_watches[goog.typeOf(this$)]);
if(or__3824__auto____6971)
{return or__3824__auto____6971;
} else
{var or__3824__auto____6972 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____6972)
{return or__3824__auto____6972;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____6976 = this$;
if(and__3822__auto____6976)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____6976;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{return (function (){var or__3824__auto____6977 = (cljs.core._add_watch[goog.typeOf(this$)]);
if(or__3824__auto____6977)
{return or__3824__auto____6977;
} else
{var or__3824__auto____6978 = (cljs.core._add_watch["_"]);
if(or__3824__auto____6978)
{return or__3824__auto____6978;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____6982 = this$;
if(and__3822__auto____6982)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____6982;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{return (function (){var or__3824__auto____6983 = (cljs.core._remove_watch[goog.typeOf(this$)]);
if(or__3824__auto____6983)
{return or__3824__auto____6983;
} else
{var or__3824__auto____6984 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____6984)
{return or__3824__auto____6984;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
void 0;void 0;cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____6988 = coll;
if(and__3822__auto____6988)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____6988;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{return (function (){var or__3824__auto____6989 = (cljs.core._as_transient[goog.typeOf(coll)]);
if(or__3824__auto____6989)
{return or__3824__auto____6989;
} else
{var or__3824__auto____6990 = (cljs.core._as_transient["_"]);
if(or__3824__auto____6990)
{return or__3824__auto____6990;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____6994 = tcoll;
if(and__3822__auto____6994)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____6994;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{return (function (){var or__3824__auto____6995 = (cljs.core._conj_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6995)
{return or__3824__auto____6995;
} else
{var or__3824__auto____6996 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____6996)
{return or__3824__auto____6996;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____7000 = tcoll;
if(and__3822__auto____7000)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____7000;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3824__auto____7001 = (cljs.core._persistent_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____7001)
{return or__3824__auto____7001;
} else
{var or__3824__auto____7002 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____7002)
{return or__3824__auto____7002;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____7006 = tcoll;
if(and__3822__auto____7006)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____7006;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{return (function (){var or__3824__auto____7007 = (cljs.core._assoc_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____7007)
{return or__3824__auto____7007;
} else
{var or__3824__auto____7008 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____7008)
{return or__3824__auto____7008;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
void 0;void 0;cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____7012 = tcoll;
if(and__3822__auto____7012)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____7012;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{return (function (){var or__3824__auto____7013 = (cljs.core._dissoc_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____7013)
{return or__3824__auto____7013;
} else
{var or__3824__auto____7014 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____7014)
{return or__3824__auto____7014;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
void 0;void 0;cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____7018 = tcoll;
if(and__3822__auto____7018)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____7018;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{return (function (){var or__3824__auto____7019 = (cljs.core._assoc_n_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____7019)
{return or__3824__auto____7019;
} else
{var or__3824__auto____7020 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____7020)
{return or__3824__auto____7020;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____7024 = tcoll;
if(and__3822__auto____7024)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____7024;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3824__auto____7025 = (cljs.core._pop_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____7025)
{return or__3824__auto____7025;
} else
{var or__3824__auto____7026 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____7026)
{return or__3824__auto____7026;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____7030 = tcoll;
if(and__3822__auto____7030)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____7030;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{return (function (){var or__3824__auto____7031 = (cljs.core._disjoin_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____7031)
{return or__3824__auto____7031;
} else
{var or__3824__auto____7032 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____7032)
{return or__3824__auto____7032;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
void 0;void 0;cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____7036 = x;
if(and__3822__auto____7036)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____7036;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{return (function (){var or__3824__auto____7037 = (cljs.core._compare[goog.typeOf(x)]);
if(or__3824__auto____7037)
{return or__3824__auto____7037;
} else
{var or__3824__auto____7038 = (cljs.core._compare["_"]);
if(or__3824__auto____7038)
{return or__3824__auto____7038;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
void 0;void 0;cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____7042 = coll;
if(and__3822__auto____7042)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____7042;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____7043 = (cljs.core._drop_first[goog.typeOf(coll)]);
if(or__3824__auto____7043)
{return or__3824__auto____7043;
} else
{var or__3824__auto____7044 = (cljs.core._drop_first["_"]);
if(or__3824__auto____7044)
{return or__3824__auto____7044;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____7048 = coll;
if(and__3822__auto____7048)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____7048;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____7049 = (cljs.core._chunked_first[goog.typeOf(coll)]);
if(or__3824__auto____7049)
{return or__3824__auto____7049;
} else
{var or__3824__auto____7050 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____7050)
{return or__3824__auto____7050;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____7054 = coll;
if(and__3822__auto____7054)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____7054;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{return (function (){var or__3824__auto____7055 = (cljs.core._chunked_rest[goog.typeOf(coll)]);
if(or__3824__auto____7055)
{return or__3824__auto____7055;
} else
{var or__3824__auto____7056 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____7056)
{return or__3824__auto____7056;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____7060 = coll;
if(and__3822__auto____7060)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____7060;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{return (function (){var or__3824__auto____7061 = (cljs.core._chunked_next[goog.typeOf(coll)]);
if(or__3824__auto____7061)
{return or__3824__auto____7061;
} else
{var or__3824__auto____7062 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____7062)
{return or__3824__auto____7062;
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
var or__3824__auto____7064 = (x === y);
if(or__3824__auto____7064)
{return or__3824__auto____7064;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__7065__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__7066 = y;
var G__7067 = cljs.core.first.call(null,more);
var G__7068 = cljs.core.next.call(null,more);
x = G__7066;
y = G__7067;
more = G__7068;
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
var G__7065 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7065__delegate.call(this, x, y, more);
};
G__7065.cljs$lang$maxFixedArity = 2;
G__7065.cljs$lang$applyTo = (function (arglist__7069){
var x = cljs.core.first(arglist__7069);
var y = cljs.core.first(cljs.core.next(arglist__7069));
var more = cljs.core.rest(cljs.core.next(arglist__7069));
return G__7065__delegate(x, y, more);
});
G__7065.cljs$lang$arity$variadic = G__7065__delegate;
return G__7065;
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
var G__7070 = null;
var G__7070__2 = (function (o,k){
return null;
});
var G__7070__3 = (function (o,k,not_found){
return not_found;
});
G__7070 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__7070__2.call(this,o,k);
case 3:
return G__7070__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7070;
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
var G__7071 = null;
var G__7071__2 = (function (_,f){
return f.call(null);
});
var G__7071__3 = (function (_,f,start){
return start;
});
G__7071 = function(_,f,start){
switch(arguments.length){
case 2:
return G__7071__2.call(this,_,f);
case 3:
return G__7071__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7071;
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
var G__7072 = null;
var G__7072__2 = (function (_,n){
return null;
});
var G__7072__3 = (function (_,n,not_found){
return not_found;
});
G__7072 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__7072__2.call(this,_,n);
case 3:
return G__7072__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7072;
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
var cnt__7085 = cljs.core._count.call(null,cicoll);
if((cnt__7085 === 0))
{return f.call(null);
} else
{var val__7086 = cljs.core._nth.call(null,cicoll,0);
var n__7087 = 1;
while(true){
if((n__7087 < cnt__7085))
{var nval__7088 = f.call(null,val__7086,cljs.core._nth.call(null,cicoll,n__7087));
if(cljs.core.reduced_QMARK_.call(null,nval__7088))
{return cljs.core.deref.call(null,nval__7088);
} else
{{
var G__7097 = nval__7088;
var G__7098 = (n__7087 + 1);
val__7086 = G__7097;
n__7087 = G__7098;
continue;
}
}
} else
{return val__7086;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__7089 = cljs.core._count.call(null,cicoll);
var val__7090 = val;
var n__7091 = 0;
while(true){
if((n__7091 < cnt__7089))
{var nval__7092 = f.call(null,val__7090,cljs.core._nth.call(null,cicoll,n__7091));
if(cljs.core.reduced_QMARK_.call(null,nval__7092))
{return cljs.core.deref.call(null,nval__7092);
} else
{{
var G__7099 = nval__7092;
var G__7100 = (n__7091 + 1);
val__7090 = G__7099;
n__7091 = G__7100;
continue;
}
}
} else
{return val__7090;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__7093 = cljs.core._count.call(null,cicoll);
var val__7094 = val;
var n__7095 = idx;
while(true){
if((n__7095 < cnt__7093))
{var nval__7096 = f.call(null,val__7094,cljs.core._nth.call(null,cicoll,n__7095));
if(cljs.core.reduced_QMARK_.call(null,nval__7096))
{return cljs.core.deref.call(null,nval__7096);
} else
{{
var G__7101 = nval__7096;
var G__7102 = (n__7095 + 1);
val__7094 = G__7101;
n__7095 = G__7102;
continue;
}
}
} else
{return val__7094;
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
var cnt__7115 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__7116 = (arr[0]);
var n__7117 = 1;
while(true){
if((n__7117 < cnt__7115))
{var nval__7118 = f.call(null,val__7116,(arr[n__7117]));
if(cljs.core.reduced_QMARK_.call(null,nval__7118))
{return cljs.core.deref.call(null,nval__7118);
} else
{{
var G__7127 = nval__7118;
var G__7128 = (n__7117 + 1);
val__7116 = G__7127;
n__7117 = G__7128;
continue;
}
}
} else
{return val__7116;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__7119 = arr.length;
var val__7120 = val;
var n__7121 = 0;
while(true){
if((n__7121 < cnt__7119))
{var nval__7122 = f.call(null,val__7120,(arr[n__7121]));
if(cljs.core.reduced_QMARK_.call(null,nval__7122))
{return cljs.core.deref.call(null,nval__7122);
} else
{{
var G__7129 = nval__7122;
var G__7130 = (n__7121 + 1);
val__7120 = G__7129;
n__7121 = G__7130;
continue;
}
}
} else
{return val__7120;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__7123 = arr.length;
var val__7124 = val;
var n__7125 = idx;
while(true){
if((n__7125 < cnt__7123))
{var nval__7126 = f.call(null,val__7124,(arr[n__7125]));
if(cljs.core.reduced_QMARK_.call(null,nval__7126))
{return cljs.core.deref.call(null,nval__7126);
} else
{{
var G__7131 = nval__7126;
var G__7132 = (n__7125 + 1);
val__7124 = G__7131;
n__7125 = G__7132;
continue;
}
}
} else
{return val__7124;
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
var this__7133 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__7134 = this;
if(((this__7134.i + 1) < this__7134.a.length))
{return (new cljs.core.IndexedSeq(this__7134.a,(this__7134.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7135 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__7136 = this;
var c__7137 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__7137 > 0))
{return (new cljs.core.RSeq(coll,(c__7137 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__7138 = this;
var this__7139 = this;
return cljs.core.pr_str.call(null,this__7139);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__7140 = this;
if(cljs.core.counted_QMARK_.call(null,this__7140.a))
{return cljs.core.ci_reduce.call(null,this__7140.a,f,(this__7140.a[this__7140.i]),(this__7140.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__7140.a[this__7140.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7141 = this;
if(cljs.core.counted_QMARK_.call(null,this__7141.a))
{return cljs.core.ci_reduce.call(null,this__7141.a,f,start,this__7141.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__7142 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7143 = this;
return (this__7143.a.length - this__7143.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__7144 = this;
return (this__7144.a[this__7144.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__7145 = this;
if(((this__7145.i + 1) < this__7145.a.length))
{return (new cljs.core.IndexedSeq(this__7145.a,(this__7145.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7146 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__7147 = this;
var i__7148 = (n + this__7147.i);
if((i__7148 < this__7147.a.length))
{return (this__7147.a[i__7148]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__7149 = this;
var i__7150 = (n + this__7149.i);
if((i__7150 < this__7149.a.length))
{return (this__7149.a[i__7150]);
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
var G__7151 = null;
var G__7151__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__7151__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__7151 = function(array,f,start){
switch(arguments.length){
case 2:
return G__7151__2.call(this,array,f);
case 3:
return G__7151__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7151;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__7152 = null;
var G__7152__2 = (function (array,k){
return (array[k]);
});
var G__7152__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__7152 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__7152__2.call(this,array,k);
case 3:
return G__7152__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7152;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__7153 = null;
var G__7153__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__7153__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__7153 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__7153__2.call(this,array,n);
case 3:
return G__7153__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7153;
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
var this__7154 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7155 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__7156 = this;
var this__7157 = this;
return cljs.core.pr_str.call(null,this__7157);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7158 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7159 = this;
return (this__7159.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7160 = this;
return cljs.core._nth.call(null,this__7160.ci,this__7160.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7161 = this;
if((this__7161.i > 0))
{return (new cljs.core.RSeq(this__7161.ci,(this__7161.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7162 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__7163 = this;
return (new cljs.core.RSeq(this__7163.ci,this__7163.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7164 = this;
return this__7164.meta;
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
{if((function (){var G__7168__7169 = coll;
if(G__7168__7169)
{if((function (){var or__3824__auto____7170 = (G__7168__7169.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____7170)
{return or__3824__auto____7170;
} else
{return G__7168__7169.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__7168__7169.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__7168__7169);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__7168__7169);
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
{return cljs.core._first.call(null,coll);
} else
{var s__7178 = cljs.core.seq.call(null,coll);
if((s__7178 == null))
{return null;
} else
{return cljs.core._first.call(null,s__7178);
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
{if((function (){var G__7183__7184 = coll;
if(G__7183__7184)
{if((function (){var or__3824__auto____7185 = (G__7183__7184.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7185)
{return or__3824__auto____7185;
} else
{return G__7183__7184.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7183__7184.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7183__7184);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7183__7184);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__7186 = cljs.core.seq.call(null,coll);
if(!((s__7186 == null)))
{return cljs.core._rest.call(null,s__7186);
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
{if((function (){var G__7190__7191 = coll;
if(G__7190__7191)
{if((function (){var or__3824__auto____7192 = (G__7190__7191.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____7192)
{return or__3824__auto____7192;
} else
{return G__7190__7191.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__7190__7191.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__7190__7191);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__7190__7191);
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
var sn__7194 = cljs.core.next.call(null,s);
if(!((sn__7194 == null)))
{{
var G__7195 = sn__7194;
s = G__7195;
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
var G__7196__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__7197 = conj.call(null,coll,x);
var G__7198 = cljs.core.first.call(null,xs);
var G__7199 = cljs.core.next.call(null,xs);
coll = G__7197;
x = G__7198;
xs = G__7199;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__7196 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7196__delegate.call(this, coll, x, xs);
};
G__7196.cljs$lang$maxFixedArity = 2;
G__7196.cljs$lang$applyTo = (function (arglist__7200){
var coll = cljs.core.first(arglist__7200);
var x = cljs.core.first(cljs.core.next(arglist__7200));
var xs = cljs.core.rest(cljs.core.next(arglist__7200));
return G__7196__delegate(coll, x, xs);
});
G__7196.cljs$lang$arity$variadic = G__7196__delegate;
return G__7196;
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
var s__7203 = cljs.core.seq.call(null,coll);
var acc__7204 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__7203))
{return (acc__7204 + cljs.core._count.call(null,s__7203));
} else
{{
var G__7205 = cljs.core.next.call(null,s__7203);
var G__7206 = (acc__7204 + 1);
s__7203 = G__7205;
acc__7204 = G__7206;
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
{if((function (){var G__7213__7214 = coll;
if(G__7213__7214)
{if((function (){var or__3824__auto____7215 = (G__7213__7214.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7215)
{return or__3824__auto____7215;
} else
{return G__7213__7214.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7213__7214.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7213__7214);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7213__7214);
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
{if((function (){var G__7216__7217 = coll;
if(G__7216__7217)
{if((function (){var or__3824__auto____7218 = (G__7216__7217.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7218)
{return or__3824__auto____7218;
} else
{return G__7216__7217.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7216__7217.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7216__7217);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7216__7217);
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
var G__7221__delegate = function (coll,k,v,kvs){
while(true){
var ret__7220 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__7222 = ret__7220;
var G__7223 = cljs.core.first.call(null,kvs);
var G__7224 = cljs.core.second.call(null,kvs);
var G__7225 = cljs.core.nnext.call(null,kvs);
coll = G__7222;
k = G__7223;
v = G__7224;
kvs = G__7225;
continue;
}
} else
{return ret__7220;
}
break;
}
};
var G__7221 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7221__delegate.call(this, coll, k, v, kvs);
};
G__7221.cljs$lang$maxFixedArity = 3;
G__7221.cljs$lang$applyTo = (function (arglist__7226){
var coll = cljs.core.first(arglist__7226);
var k = cljs.core.first(cljs.core.next(arglist__7226));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7226)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7226)));
return G__7221__delegate(coll, k, v, kvs);
});
G__7221.cljs$lang$arity$variadic = G__7221__delegate;
return G__7221;
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
var G__7229__delegate = function (coll,k,ks){
while(true){
var ret__7228 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__7230 = ret__7228;
var G__7231 = cljs.core.first.call(null,ks);
var G__7232 = cljs.core.next.call(null,ks);
coll = G__7230;
k = G__7231;
ks = G__7232;
continue;
}
} else
{return ret__7228;
}
break;
}
};
var G__7229 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7229__delegate.call(this, coll, k, ks);
};
G__7229.cljs$lang$maxFixedArity = 2;
G__7229.cljs$lang$applyTo = (function (arglist__7233){
var coll = cljs.core.first(arglist__7233);
var k = cljs.core.first(cljs.core.next(arglist__7233));
var ks = cljs.core.rest(cljs.core.next(arglist__7233));
return G__7229__delegate(coll, k, ks);
});
G__7229.cljs$lang$arity$variadic = G__7229__delegate;
return G__7229;
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
if((function (){var G__7237__7238 = o;
if(G__7237__7238)
{if((function (){var or__3824__auto____7239 = (G__7237__7238.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____7239)
{return or__3824__auto____7239;
} else
{return G__7237__7238.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__7237__7238.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__7237__7238);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__7237__7238);
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
var G__7242__delegate = function (coll,k,ks){
while(true){
var ret__7241 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__7243 = ret__7241;
var G__7244 = cljs.core.first.call(null,ks);
var G__7245 = cljs.core.next.call(null,ks);
coll = G__7243;
k = G__7244;
ks = G__7245;
continue;
}
} else
{return ret__7241;
}
break;
}
};
var G__7242 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7242__delegate.call(this, coll, k, ks);
};
G__7242.cljs$lang$maxFixedArity = 2;
G__7242.cljs$lang$applyTo = (function (arglist__7246){
var coll = cljs.core.first(arglist__7246);
var k = cljs.core.first(cljs.core.next(arglist__7246));
var ks = cljs.core.rest(cljs.core.next(arglist__7246));
return G__7242__delegate(coll, k, ks);
});
G__7242.cljs$lang$arity$variadic = G__7242__delegate;
return G__7242;
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
var h__7248 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__7248);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__7248;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__7250 = (cljs.core.string_hash_cache[k]);
if(!((h__7250 == null)))
{return h__7250;
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
if((function (){var and__3822__auto____7252 = goog.isString(o);
if(and__3822__auto____7252)
{return check_cache;
} else
{return and__3822__auto____7252;
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
{var G__7256__7257 = x;
if(G__7256__7257)
{if((function (){var or__3824__auto____7258 = (G__7256__7257.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____7258)
{return or__3824__auto____7258;
} else
{return G__7256__7257.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__7256__7257.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__7256__7257);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__7256__7257);
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
{var G__7262__7263 = x;
if(G__7262__7263)
{if((function (){var or__3824__auto____7264 = (G__7262__7263.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____7264)
{return or__3824__auto____7264;
} else
{return G__7262__7263.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__7262__7263.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__7262__7263);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__7262__7263);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__7268__7269 = x;
if(G__7268__7269)
{if((function (){var or__3824__auto____7270 = (G__7268__7269.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____7270)
{return or__3824__auto____7270;
} else
{return G__7268__7269.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__7268__7269.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__7268__7269);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__7268__7269);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__7274__7275 = x;
if(G__7274__7275)
{if((function (){var or__3824__auto____7276 = (G__7274__7275.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____7276)
{return or__3824__auto____7276;
} else
{return G__7274__7275.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__7274__7275.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__7274__7275);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__7274__7275);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__7280__7281 = x;
if(G__7280__7281)
{if((function (){var or__3824__auto____7282 = (G__7280__7281.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____7282)
{return or__3824__auto____7282;
} else
{return G__7280__7281.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__7280__7281.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__7280__7281);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__7280__7281);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__7286__7287 = x;
if(G__7286__7287)
{if((function (){var or__3824__auto____7288 = (G__7286__7287.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7288)
{return or__3824__auto____7288;
} else
{return G__7286__7287.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7286__7287.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7286__7287);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7286__7287);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__7292__7293 = x;
if(G__7292__7293)
{if((function (){var or__3824__auto____7294 = (G__7292__7293.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7294)
{return or__3824__auto____7294;
} else
{return G__7292__7293.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7292__7293.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7292__7293);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7292__7293);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__7298__7299 = x;
if(G__7298__7299)
{if((function (){var or__3824__auto____7300 = (G__7298__7299.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____7300)
{return or__3824__auto____7300;
} else
{return G__7298__7299.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__7298__7299.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__7298__7299);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__7298__7299);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__7304__7305 = x;
if(G__7304__7305)
{if((function (){var or__3824__auto____7306 = (G__7304__7305.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____7306)
{return or__3824__auto____7306;
} else
{return G__7304__7305.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__7304__7305.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__7304__7305);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__7304__7305);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__7310__7311 = x;
if(G__7310__7311)
{if(cljs.core.truth_((function (){var or__3824__auto____7312 = null;
if(cljs.core.truth_(or__3824__auto____7312))
{return or__3824__auto____7312;
} else
{return G__7310__7311.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__7310__7311.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__7310__7311);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__7310__7311);
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
var G__7313__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__7313 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7313__delegate.call(this, keyvals);
};
G__7313.cljs$lang$maxFixedArity = 0;
G__7313.cljs$lang$applyTo = (function (arglist__7314){
var keyvals = cljs.core.seq(arglist__7314);;
return G__7313__delegate(keyvals);
});
G__7313.cljs$lang$arity$variadic = G__7313__delegate;
return G__7313;
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
var keys__7316 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__7316.push(key);
}));
return keys__7316;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__7320 = i;
var j__7321 = j;
var len__7322 = len;
while(true){
if((len__7322 === 0))
{return to;
} else
{(to[j__7321] = (from[i__7320]));
{
var G__7323 = (i__7320 + 1);
var G__7324 = (j__7321 + 1);
var G__7325 = (len__7322 - 1);
i__7320 = G__7323;
j__7321 = G__7324;
len__7322 = G__7325;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__7329 = (i + (len - 1));
var j__7330 = (j + (len - 1));
var len__7331 = len;
while(true){
if((len__7331 === 0))
{return to;
} else
{(to[j__7330] = (from[i__7329]));
{
var G__7332 = (i__7329 - 1);
var G__7333 = (j__7330 - 1);
var G__7334 = (len__7331 - 1);
i__7329 = G__7332;
j__7330 = G__7333;
len__7331 = G__7334;
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
{var G__7338__7339 = s;
if(G__7338__7339)
{if((function (){var or__3824__auto____7340 = (G__7338__7339.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7340)
{return or__3824__auto____7340;
} else
{return G__7338__7339.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7338__7339.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7338__7339);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7338__7339);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__7344__7345 = s;
if(G__7344__7345)
{if((function (){var or__3824__auto____7346 = (G__7344__7345.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____7346)
{return or__3824__auto____7346;
} else
{return G__7344__7345.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__7344__7345.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__7344__7345);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__7344__7345);
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
var and__3822__auto____7349 = goog.isString(x);
if(and__3822__auto____7349)
{return !((function (){var or__3824__auto____7350 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____7350)
{return or__3824__auto____7350;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____7349;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____7352 = goog.isString(x);
if(and__3822__auto____7352)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____7352;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____7354 = goog.isString(x);
if(and__3822__auto____7354)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____7354;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____7359 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____7359)
{return or__3824__auto____7359;
} else
{var G__7360__7361 = f;
if(G__7360__7361)
{if((function (){var or__3824__auto____7362 = (G__7360__7361.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____7362)
{return or__3824__auto____7362;
} else
{return G__7360__7361.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__7360__7361.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__7360__7361);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__7360__7361);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____7364 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____7364)
{return (n == n.toFixed());
} else
{return and__3822__auto____7364;
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
if(cljs.core.truth_((function (){var and__3822__auto____7367 = coll;
if(cljs.core.truth_(and__3822__auto____7367))
{var and__3822__auto____7368 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____7368)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____7368;
}
} else
{return and__3822__auto____7367;
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
var G__7377__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__7373 = cljs.core.set([y,x]);
var xs__7374 = more;
while(true){
var x__7375 = cljs.core.first.call(null,xs__7374);
var etc__7376 = cljs.core.next.call(null,xs__7374);
if(cljs.core.truth_(xs__7374))
{if(cljs.core.contains_QMARK_.call(null,s__7373,x__7375))
{return false;
} else
{{
var G__7378 = cljs.core.conj.call(null,s__7373,x__7375);
var G__7379 = etc__7376;
s__7373 = G__7378;
xs__7374 = G__7379;
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
var G__7377 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7377__delegate.call(this, x, y, more);
};
G__7377.cljs$lang$maxFixedArity = 2;
G__7377.cljs$lang$applyTo = (function (arglist__7380){
var x = cljs.core.first(arglist__7380);
var y = cljs.core.first(cljs.core.next(arglist__7380));
var more = cljs.core.rest(cljs.core.next(arglist__7380));
return G__7377__delegate(x, y, more);
});
G__7377.cljs$lang$arity$variadic = G__7377__delegate;
return G__7377;
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
{if((function (){var G__7384__7385 = x;
if(G__7384__7385)
{if(cljs.core.truth_((function (){var or__3824__auto____7386 = null;
if(cljs.core.truth_(or__3824__auto____7386))
{return or__3824__auto____7386;
} else
{return G__7384__7385.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__7384__7385.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__7384__7385);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__7384__7385);
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
var xl__7391 = cljs.core.count.call(null,xs);
var yl__7392 = cljs.core.count.call(null,ys);
if((xl__7391 < yl__7392))
{return -1;
} else
{if((xl__7391 > yl__7392))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__7391,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__7393 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____7394 = (d__7393 === 0);
if(and__3822__auto____7394)
{return ((n + 1) < len);
} else
{return and__3822__auto____7394;
}
})())
{{
var G__7395 = xs;
var G__7396 = ys;
var G__7397 = len;
var G__7398 = (n + 1);
xs = G__7395;
ys = G__7396;
len = G__7397;
n = G__7398;
continue;
}
} else
{return d__7393;
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
var r__7400 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__7400))
{return r__7400;
} else
{if(cljs.core.truth_(r__7400))
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
{var a__7402 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__7402,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__7402);
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
var temp__3971__auto____7408 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____7408)
{var s__7409 = temp__3971__auto____7408;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__7409),cljs.core.next.call(null,s__7409));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__7410 = val;
var coll__7411 = cljs.core.seq.call(null,coll);
while(true){
if(coll__7411)
{var nval__7412 = f.call(null,val__7410,cljs.core.first.call(null,coll__7411));
if(cljs.core.reduced_QMARK_.call(null,nval__7412))
{return cljs.core.deref.call(null,nval__7412);
} else
{{
var G__7413 = nval__7412;
var G__7414 = cljs.core.next.call(null,coll__7411);
val__7410 = G__7413;
coll__7411 = G__7414;
continue;
}
}
} else
{return val__7410;
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
var a__7416 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__7416);
return cljs.core.vec.call(null,a__7416);
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
if((function (){var G__7423__7424 = coll;
if(G__7423__7424)
{if((function (){var or__3824__auto____7425 = (G__7423__7424.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7425)
{return or__3824__auto____7425;
} else
{return G__7423__7424.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7423__7424.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7423__7424);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7423__7424);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__7426__7427 = coll;
if(G__7426__7427)
{if((function (){var or__3824__auto____7428 = (G__7426__7427.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7428)
{return or__3824__auto____7428;
} else
{return G__7426__7427.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7426__7427.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7426__7427);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7426__7427);
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
var this__7429 = this;
return this__7429.val;
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
var G__7430__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__7430 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7430__delegate.call(this, x, y, more);
};
G__7430.cljs$lang$maxFixedArity = 2;
G__7430.cljs$lang$applyTo = (function (arglist__7431){
var x = cljs.core.first(arglist__7431);
var y = cljs.core.first(cljs.core.next(arglist__7431));
var more = cljs.core.rest(cljs.core.next(arglist__7431));
return G__7430__delegate(x, y, more);
});
G__7430.cljs$lang$arity$variadic = G__7430__delegate;
return G__7430;
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
var G__7432__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__7432 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7432__delegate.call(this, x, y, more);
};
G__7432.cljs$lang$maxFixedArity = 2;
G__7432.cljs$lang$applyTo = (function (arglist__7433){
var x = cljs.core.first(arglist__7433);
var y = cljs.core.first(cljs.core.next(arglist__7433));
var more = cljs.core.rest(cljs.core.next(arglist__7433));
return G__7432__delegate(x, y, more);
});
G__7432.cljs$lang$arity$variadic = G__7432__delegate;
return G__7432;
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
var G__7434__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__7434 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7434__delegate.call(this, x, y, more);
};
G__7434.cljs$lang$maxFixedArity = 2;
G__7434.cljs$lang$applyTo = (function (arglist__7435){
var x = cljs.core.first(arglist__7435);
var y = cljs.core.first(cljs.core.next(arglist__7435));
var more = cljs.core.rest(cljs.core.next(arglist__7435));
return G__7434__delegate(x, y, more);
});
G__7434.cljs$lang$arity$variadic = G__7434__delegate;
return G__7434;
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
var G__7436__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__7436 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7436__delegate.call(this, x, y, more);
};
G__7436.cljs$lang$maxFixedArity = 2;
G__7436.cljs$lang$applyTo = (function (arglist__7437){
var x = cljs.core.first(arglist__7437);
var y = cljs.core.first(cljs.core.next(arglist__7437));
var more = cljs.core.rest(cljs.core.next(arglist__7437));
return G__7436__delegate(x, y, more);
});
G__7436.cljs$lang$arity$variadic = G__7436__delegate;
return G__7436;
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
var G__7438__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__7439 = y;
var G__7440 = cljs.core.first.call(null,more);
var G__7441 = cljs.core.next.call(null,more);
x = G__7439;
y = G__7440;
more = G__7441;
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
var G__7438 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7438__delegate.call(this, x, y, more);
};
G__7438.cljs$lang$maxFixedArity = 2;
G__7438.cljs$lang$applyTo = (function (arglist__7442){
var x = cljs.core.first(arglist__7442);
var y = cljs.core.first(cljs.core.next(arglist__7442));
var more = cljs.core.rest(cljs.core.next(arglist__7442));
return G__7438__delegate(x, y, more);
});
G__7438.cljs$lang$arity$variadic = G__7438__delegate;
return G__7438;
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
var G__7443__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__7444 = y;
var G__7445 = cljs.core.first.call(null,more);
var G__7446 = cljs.core.next.call(null,more);
x = G__7444;
y = G__7445;
more = G__7446;
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
var G__7443 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7443__delegate.call(this, x, y, more);
};
G__7443.cljs$lang$maxFixedArity = 2;
G__7443.cljs$lang$applyTo = (function (arglist__7447){
var x = cljs.core.first(arglist__7447);
var y = cljs.core.first(cljs.core.next(arglist__7447));
var more = cljs.core.rest(cljs.core.next(arglist__7447));
return G__7443__delegate(x, y, more);
});
G__7443.cljs$lang$arity$variadic = G__7443__delegate;
return G__7443;
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
var G__7448__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__7449 = y;
var G__7450 = cljs.core.first.call(null,more);
var G__7451 = cljs.core.next.call(null,more);
x = G__7449;
y = G__7450;
more = G__7451;
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
var G__7448 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7448__delegate.call(this, x, y, more);
};
G__7448.cljs$lang$maxFixedArity = 2;
G__7448.cljs$lang$applyTo = (function (arglist__7452){
var x = cljs.core.first(arglist__7452);
var y = cljs.core.first(cljs.core.next(arglist__7452));
var more = cljs.core.rest(cljs.core.next(arglist__7452));
return G__7448__delegate(x, y, more);
});
G__7448.cljs$lang$arity$variadic = G__7448__delegate;
return G__7448;
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
var G__7453__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__7454 = y;
var G__7455 = cljs.core.first.call(null,more);
var G__7456 = cljs.core.next.call(null,more);
x = G__7454;
y = G__7455;
more = G__7456;
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
var G__7453 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7453__delegate.call(this, x, y, more);
};
G__7453.cljs$lang$maxFixedArity = 2;
G__7453.cljs$lang$applyTo = (function (arglist__7457){
var x = cljs.core.first(arglist__7457);
var y = cljs.core.first(cljs.core.next(arglist__7457));
var more = cljs.core.rest(cljs.core.next(arglist__7457));
return G__7453__delegate(x, y, more);
});
G__7453.cljs$lang$arity$variadic = G__7453__delegate;
return G__7453;
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
var G__7458__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__7458 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7458__delegate.call(this, x, y, more);
};
G__7458.cljs$lang$maxFixedArity = 2;
G__7458.cljs$lang$applyTo = (function (arglist__7459){
var x = cljs.core.first(arglist__7459);
var y = cljs.core.first(cljs.core.next(arglist__7459));
var more = cljs.core.rest(cljs.core.next(arglist__7459));
return G__7458__delegate(x, y, more);
});
G__7458.cljs$lang$arity$variadic = G__7458__delegate;
return G__7458;
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
var G__7460__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__7460 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7460__delegate.call(this, x, y, more);
};
G__7460.cljs$lang$maxFixedArity = 2;
G__7460.cljs$lang$applyTo = (function (arglist__7461){
var x = cljs.core.first(arglist__7461);
var y = cljs.core.first(cljs.core.next(arglist__7461));
var more = cljs.core.rest(cljs.core.next(arglist__7461));
return G__7460__delegate(x, y, more);
});
G__7460.cljs$lang$arity$variadic = G__7460__delegate;
return G__7460;
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
var rem__7463 = (n % d);
return cljs.core.fix.call(null,((n - rem__7463) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__7465 = cljs.core.quot.call(null,n,d);
return (n - (d * q__7465));
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
var v__7468 = (v - ((v >> 1) & 1431655765));
var v__7469 = ((v__7468 & 858993459) + ((v__7468 >> 2) & 858993459));
return ((((v__7469 + (v__7469 >> 4)) & 252645135) * 16843009) >> 24);
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
var G__7470__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__7471 = y;
var G__7472 = cljs.core.first.call(null,more);
var G__7473 = cljs.core.next.call(null,more);
x = G__7471;
y = G__7472;
more = G__7473;
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
var G__7470 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7470__delegate.call(this, x, y, more);
};
G__7470.cljs$lang$maxFixedArity = 2;
G__7470.cljs$lang$applyTo = (function (arglist__7474){
var x = cljs.core.first(arglist__7474);
var y = cljs.core.first(cljs.core.next(arglist__7474));
var more = cljs.core.rest(cljs.core.next(arglist__7474));
return G__7470__delegate(x, y, more);
});
G__7470.cljs$lang$arity$variadic = G__7470__delegate;
return G__7470;
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
var n__7478 = n;
var xs__7479 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7480 = xs__7479;
if(and__3822__auto____7480)
{return (n__7478 > 0);
} else
{return and__3822__auto____7480;
}
})()))
{{
var G__7481 = (n__7478 - 1);
var G__7482 = cljs.core.next.call(null,xs__7479);
n__7478 = G__7481;
xs__7479 = G__7482;
continue;
}
} else
{return xs__7479;
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
var G__7483__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7484 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__7485 = cljs.core.next.call(null,more);
sb = G__7484;
more = G__7485;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__7483 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7483__delegate.call(this, x, ys);
};
G__7483.cljs$lang$maxFixedArity = 1;
G__7483.cljs$lang$applyTo = (function (arglist__7486){
var x = cljs.core.first(arglist__7486);
var ys = cljs.core.rest(arglist__7486);
return G__7483__delegate(x, ys);
});
G__7483.cljs$lang$arity$variadic = G__7483__delegate;
return G__7483;
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
var G__7487__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7488 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__7489 = cljs.core.next.call(null,more);
sb = G__7488;
more = G__7489;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__7487 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7487__delegate.call(this, x, ys);
};
G__7487.cljs$lang$maxFixedArity = 1;
G__7487.cljs$lang$applyTo = (function (arglist__7490){
var x = cljs.core.first(arglist__7490);
var ys = cljs.core.rest(arglist__7490);
return G__7487__delegate(x, ys);
});
G__7487.cljs$lang$arity$variadic = G__7487__delegate;
return G__7487;
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__7493 = cljs.core.seq.call(null,x);
var ys__7494 = cljs.core.seq.call(null,y);
while(true){
if((xs__7493 == null))
{return (ys__7494 == null);
} else
{if((ys__7494 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__7493),cljs.core.first.call(null,ys__7494)))
{{
var G__7495 = cljs.core.next.call(null,xs__7493);
var G__7496 = cljs.core.next.call(null,ys__7494);
xs__7493 = G__7495;
ys__7494 = G__7496;
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
return cljs.core.reduce.call(null,(function (p1__7497_SHARP_,p2__7498_SHARP_){
return cljs.core.hash_combine.call(null,p1__7497_SHARP_,cljs.core.hash.call(null,p2__7498_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
void 0;
void 0;
cljs.core.hash_imap = (function hash_imap(m){
var h__7502 = 0;
var s__7503 = cljs.core.seq.call(null,m);
while(true){
if(s__7503)
{var e__7504 = cljs.core.first.call(null,s__7503);
{
var G__7505 = ((h__7502 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__7504)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__7504)))) % 4503599627370496);
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
cljs.core.hash_iset = (function hash_iset(s){
var h__7510 = 0;
var s__7511 = cljs.core.seq.call(null,s);
while(true){
if(s__7511)
{var e__7512 = cljs.core.first.call(null,s__7511);
{
var G__7513 = ((h__7510 + cljs.core.hash.call(null,e__7512)) % 4503599627370496);
var G__7514 = cljs.core.next.call(null,s__7511);
h__7510 = G__7513;
s__7511 = G__7514;
continue;
}
} else
{return h__7510;
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
var G__7535__7536 = cljs.core.seq.call(null,fn_map);
if(G__7535__7536)
{var G__7538__7540 = cljs.core.first.call(null,G__7535__7536);
var vec__7539__7541 = G__7538__7540;
var key_name__7542 = cljs.core.nth.call(null,vec__7539__7541,0,null);
var f__7543 = cljs.core.nth.call(null,vec__7539__7541,1,null);
var G__7535__7544 = G__7535__7536;
var G__7538__7545 = G__7538__7540;
var G__7535__7546 = G__7535__7544;
while(true){
var vec__7547__7548 = G__7538__7545;
var key_name__7549 = cljs.core.nth.call(null,vec__7547__7548,0,null);
var f__7550 = cljs.core.nth.call(null,vec__7547__7548,1,null);
var G__7535__7551 = G__7535__7546;
var str_name__7552 = cljs.core.name.call(null,key_name__7549);
(obj[str_name__7552] = f__7550);
var temp__3974__auto____7553 = cljs.core.next.call(null,G__7535__7551);
if(temp__3974__auto____7553)
{var G__7535__7554 = temp__3974__auto____7553;
{
var G__7555 = cljs.core.first.call(null,G__7535__7554);
var G__7556 = G__7535__7554;
G__7538__7545 = G__7555;
G__7535__7546 = G__7556;
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
var this__7557 = this;
var h__2153__auto____7558 = this__7557.__hash;
if(!((h__2153__auto____7558 == null)))
{return h__2153__auto____7558;
} else
{var h__2153__auto____7559 = cljs.core.hash_coll.call(null,coll);
this__7557.__hash = h__2153__auto____7559;
return h__2153__auto____7559;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7560 = this;
if((this__7560.count === 1))
{return null;
} else
{return this__7560.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7561 = this;
return (new cljs.core.List(this__7561.meta,o,coll,(this__7561.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__7562 = this;
var this__7563 = this;
return cljs.core.pr_str.call(null,this__7563);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7564 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7565 = this;
return this__7565.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7566 = this;
return this__7566.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7567 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7568 = this;
return this__7568.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7569 = this;
if((this__7569.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__7569.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7570 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7571 = this;
return (new cljs.core.List(meta,this__7571.first,this__7571.rest,this__7571.count,this__7571.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7572 = this;
return this__7572.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7573 = this;
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
var this__7574 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7575 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7576 = this;
return (new cljs.core.List(this__7576.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__7577 = this;
var this__7578 = this;
return cljs.core.pr_str.call(null,this__7578);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7579 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7580 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7581 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7582 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7583 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7584 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7585 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7586 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7587 = this;
return this__7587.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7588 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__7592__7593 = coll;
if(G__7592__7593)
{if((function (){var or__3824__auto____7594 = (G__7592__7593.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____7594)
{return or__3824__auto____7594;
} else
{return G__7592__7593.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__7592__7593.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7592__7593);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7592__7593);
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
var G__7595__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__7595 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7595__delegate.call(this, x, y, z, items);
};
G__7595.cljs$lang$maxFixedArity = 3;
G__7595.cljs$lang$applyTo = (function (arglist__7596){
var x = cljs.core.first(arglist__7596);
var y = cljs.core.first(cljs.core.next(arglist__7596));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7596)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7596)));
return G__7595__delegate(x, y, z, items);
});
G__7595.cljs$lang$arity$variadic = G__7595__delegate;
return G__7595;
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
var this__7597 = this;
var h__2153__auto____7598 = this__7597.__hash;
if(!((h__2153__auto____7598 == null)))
{return h__2153__auto____7598;
} else
{var h__2153__auto____7599 = cljs.core.hash_coll.call(null,coll);
this__7597.__hash = h__2153__auto____7599;
return h__2153__auto____7599;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7600 = this;
if((this__7600.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__7600.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7601 = this;
return (new cljs.core.Cons(null,o,coll,this__7601.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__7602 = this;
var this__7603 = this;
return cljs.core.pr_str.call(null,this__7603);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7604 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7605 = this;
return this__7605.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7606 = this;
if((this__7606.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__7606.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7607 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7608 = this;
return (new cljs.core.Cons(meta,this__7608.first,this__7608.rest,this__7608.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7609 = this;
return this__7609.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7610 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7610.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____7615 = (coll == null);
if(or__3824__auto____7615)
{return or__3824__auto____7615;
} else
{var G__7616__7617 = coll;
if(G__7616__7617)
{if((function (){var or__3824__auto____7618 = (G__7616__7617.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7618)
{return or__3824__auto____7618;
} else
{return G__7616__7617.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7616__7617.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7616__7617);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7616__7617);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__7622__7623 = x;
if(G__7622__7623)
{if((function (){var or__3824__auto____7624 = (G__7622__7623.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____7624)
{return or__3824__auto____7624;
} else
{return G__7622__7623.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__7622__7623.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7622__7623);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7622__7623);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__7625 = null;
var G__7625__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__7625__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__7625 = function(string,f,start){
switch(arguments.length){
case 2:
return G__7625__2.call(this,string,f);
case 3:
return G__7625__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7625;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__7626 = null;
var G__7626__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__7626__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__7626 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__7626__2.call(this,string,k);
case 3:
return G__7626__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7626;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__7627 = null;
var G__7627__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__7627__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__7627 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__7627__2.call(this,string,n);
case 3:
return G__7627__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7627;
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
cljs.core.Keyword.prototype.call = (function (this_sym7630,coll){
var this__7631 = this;
var this_sym7630__7632 = this;
var ___7633 = this_sym7630__7632;
if((coll == null))
{return null;
} else
{var strobj__7634 = coll.strobj;
if((strobj__7634 == null))
{return cljs.core._lookup.call(null,coll,this__7631.k,null);
} else
{return (strobj__7634[this__7631.k]);
}
}
});
cljs.core.Keyword.prototype.apply = (function (this_sym7628,args7629){
var this__7635 = this;
return this_sym7628.call.apply(this_sym7628,[this_sym7628].concat(args7629.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__7644 = null;
var G__7644__2 = (function (this_sym7638,coll){
var this_sym7638__7640 = this;
var this__7641 = this_sym7638__7640;
return cljs.core._lookup.call(null,coll,this__7641.toString(),null);
});
var G__7644__3 = (function (this_sym7639,coll,not_found){
var this_sym7639__7642 = this;
var this__7643 = this_sym7639__7642;
return cljs.core._lookup.call(null,coll,this__7643.toString(),not_found);
});
G__7644 = function(this_sym7639,coll,not_found){
switch(arguments.length){
case 2:
return G__7644__2.call(this,this_sym7639,coll);
case 3:
return G__7644__3.call(this,this_sym7639,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7644;
})()
;
String.prototype.apply = (function (this_sym7636,args7637){
return this_sym7636.call.apply(this_sym7636,[this_sym7636].concat(args7637.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__7646 = lazy_seq.x;
if(lazy_seq.realized)
{return x__7646;
} else
{lazy_seq.x = x__7646.call(null);
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
var this__7647 = this;
var h__2153__auto____7648 = this__7647.__hash;
if(!((h__2153__auto____7648 == null)))
{return h__2153__auto____7648;
} else
{var h__2153__auto____7649 = cljs.core.hash_coll.call(null,coll);
this__7647.__hash = h__2153__auto____7649;
return h__2153__auto____7649;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7650 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7651 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__7652 = this;
var this__7653 = this;
return cljs.core.pr_str.call(null,this__7653);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7654 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7655 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7656 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7657 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7658 = this;
return (new cljs.core.LazySeq(meta,this__7658.realized,this__7658.x,this__7658.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7659 = this;
return this__7659.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7660 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7660.meta);
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
var this__7661 = this;
return this__7661.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__7662 = this;
var ___7663 = this;
(this__7662.buf[this__7662.end] = o);
return this__7662.end = (this__7662.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__7664 = this;
var ___7665 = this;
var ret__7666 = (new cljs.core.ArrayChunk(this__7664.buf,0,this__7664.end));
this__7664.buf = null;
return ret__7666;
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
var this__7667 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__7667.arr[this__7667.off]),(this__7667.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7668 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__7668.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__7669 = this;
if((this__7669.off === this__7669.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__7669.arr,(this__7669.off + 1),this__7669.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__7670 = this;
return (this__7670.arr[(this__7670.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__7671 = this;
if((function (){var and__3822__auto____7672 = (i >= 0);
if(and__3822__auto____7672)
{return (i < (this__7671.end - this__7671.off));
} else
{return and__3822__auto____7672;
}
})())
{return (this__7671.arr[(this__7671.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7673 = this;
return (this__7673.end - this__7673.off);
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
var this__7674 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7675 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7676 = this;
return cljs.core._nth.call(null,this__7676.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7677 = this;
if((cljs.core._count.call(null,this__7677.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__7677.chunk),this__7677.more,this__7677.meta));
} else
{if((this__7677.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__7677.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__7678 = this;
if((this__7678.more == null))
{return null;
} else
{return this__7678.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7679 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__7680 = this;
return (new cljs.core.ChunkedCons(this__7680.chunk,this__7680.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7681 = this;
return this__7681.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__7682 = this;
return this__7682.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__7683 = this;
if((this__7683.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__7683.more;
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
if((function (){var G__7687__7688 = s;
if(G__7687__7688)
{if(cljs.core.truth_((function (){var or__3824__auto____7689 = null;
if(cljs.core.truth_(or__3824__auto____7689))
{return or__3824__auto____7689;
} else
{return G__7687__7688.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__7687__7688.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__7687__7688);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__7687__7688);
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
var ary__7692 = [];
var s__7693 = s;
while(true){
if(cljs.core.seq.call(null,s__7693))
{ary__7692.push(cljs.core.first.call(null,s__7693));
{
var G__7694 = cljs.core.next.call(null,s__7693);
s__7693 = G__7694;
continue;
}
} else
{return ary__7692;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__7698 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__7699 = 0;
var xs__7700 = cljs.core.seq.call(null,coll);
while(true){
if(xs__7700)
{(ret__7698[i__7699] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__7700)));
{
var G__7701 = (i__7699 + 1);
var G__7702 = cljs.core.next.call(null,xs__7700);
i__7699 = G__7701;
xs__7700 = G__7702;
continue;
}
} else
{}
break;
}
return ret__7698;
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
var a__7710 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7711 = cljs.core.seq.call(null,init_val_or_seq);
var i__7712 = 0;
var s__7713 = s__7711;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7714 = s__7713;
if(and__3822__auto____7714)
{return (i__7712 < size);
} else
{return and__3822__auto____7714;
}
})()))
{(a__7710[i__7712] = cljs.core.first.call(null,s__7713));
{
var G__7717 = (i__7712 + 1);
var G__7718 = cljs.core.next.call(null,s__7713);
i__7712 = G__7717;
s__7713 = G__7718;
continue;
}
} else
{return a__7710;
}
break;
}
} else
{var n__2492__auto____7715 = size;
var i__7716 = 0;
while(true){
if((i__7716 < n__2492__auto____7715))
{(a__7710[i__7716] = init_val_or_seq);
{
var G__7719 = (i__7716 + 1);
i__7716 = G__7719;
continue;
}
} else
{}
break;
}
return a__7710;
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
var a__7727 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7728 = cljs.core.seq.call(null,init_val_or_seq);
var i__7729 = 0;
var s__7730 = s__7728;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7731 = s__7730;
if(and__3822__auto____7731)
{return (i__7729 < size);
} else
{return and__3822__auto____7731;
}
})()))
{(a__7727[i__7729] = cljs.core.first.call(null,s__7730));
{
var G__7734 = (i__7729 + 1);
var G__7735 = cljs.core.next.call(null,s__7730);
i__7729 = G__7734;
s__7730 = G__7735;
continue;
}
} else
{return a__7727;
}
break;
}
} else
{var n__2492__auto____7732 = size;
var i__7733 = 0;
while(true){
if((i__7733 < n__2492__auto____7732))
{(a__7727[i__7733] = init_val_or_seq);
{
var G__7736 = (i__7733 + 1);
i__7733 = G__7736;
continue;
}
} else
{}
break;
}
return a__7727;
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
var a__7744 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7745 = cljs.core.seq.call(null,init_val_or_seq);
var i__7746 = 0;
var s__7747 = s__7745;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7748 = s__7747;
if(and__3822__auto____7748)
{return (i__7746 < size);
} else
{return and__3822__auto____7748;
}
})()))
{(a__7744[i__7746] = cljs.core.first.call(null,s__7747));
{
var G__7751 = (i__7746 + 1);
var G__7752 = cljs.core.next.call(null,s__7747);
i__7746 = G__7751;
s__7747 = G__7752;
continue;
}
} else
{return a__7744;
}
break;
}
} else
{var n__2492__auto____7749 = size;
var i__7750 = 0;
while(true){
if((i__7750 < n__2492__auto____7749))
{(a__7744[i__7750] = init_val_or_seq);
{
var G__7753 = (i__7750 + 1);
i__7750 = G__7753;
continue;
}
} else
{}
break;
}
return a__7744;
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
{var s__7758 = s;
var i__7759 = n;
var sum__7760 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7761 = (i__7759 > 0);
if(and__3822__auto____7761)
{return cljs.core.seq.call(null,s__7758);
} else
{return and__3822__auto____7761;
}
})()))
{{
var G__7762 = cljs.core.next.call(null,s__7758);
var G__7763 = (i__7759 - 1);
var G__7764 = (sum__7760 + 1);
s__7758 = G__7762;
i__7759 = G__7763;
sum__7760 = G__7764;
continue;
}
} else
{return sum__7760;
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
var s__7769 = cljs.core.seq.call(null,x);
if(s__7769)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__7769))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__7769),concat.call(null,cljs.core.chunk_rest.call(null,s__7769),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__7769),concat.call(null,cljs.core.rest.call(null,s__7769),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__7773__delegate = function (x,y,zs){
var cat__7772 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__7771 = cljs.core.seq.call(null,xys);
if(xys__7771)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__7771))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__7771),cat.call(null,cljs.core.chunk_rest.call(null,xys__7771),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__7771),cat.call(null,cljs.core.rest.call(null,xys__7771),zs));
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
return cat__7772.call(null,concat.call(null,x,y),zs);
};
var G__7773 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7773__delegate.call(this, x, y, zs);
};
G__7773.cljs$lang$maxFixedArity = 2;
G__7773.cljs$lang$applyTo = (function (arglist__7774){
var x = cljs.core.first(arglist__7774);
var y = cljs.core.first(cljs.core.next(arglist__7774));
var zs = cljs.core.rest(cljs.core.next(arglist__7774));
return G__7773__delegate(x, y, zs);
});
G__7773.cljs$lang$arity$variadic = G__7773__delegate;
return G__7773;
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
var G__7775__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__7775 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7775__delegate.call(this, a, b, c, d, more);
};
G__7775.cljs$lang$maxFixedArity = 4;
G__7775.cljs$lang$applyTo = (function (arglist__7776){
var a = cljs.core.first(arglist__7776);
var b = cljs.core.first(cljs.core.next(arglist__7776));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7776)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7776))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7776))));
return G__7775__delegate(a, b, c, d, more);
});
G__7775.cljs$lang$arity$variadic = G__7775__delegate;
return G__7775;
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
var args__7818 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__7819 = cljs.core._first.call(null,args__7818);
var args__7820 = cljs.core._rest.call(null,args__7818);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__7819);
} else
{return f.call(null,a__7819);
}
} else
{var b__7821 = cljs.core._first.call(null,args__7820);
var args__7822 = cljs.core._rest.call(null,args__7820);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__7819,b__7821);
} else
{return f.call(null,a__7819,b__7821);
}
} else
{var c__7823 = cljs.core._first.call(null,args__7822);
var args__7824 = cljs.core._rest.call(null,args__7822);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__7819,b__7821,c__7823);
} else
{return f.call(null,a__7819,b__7821,c__7823);
}
} else
{var d__7825 = cljs.core._first.call(null,args__7824);
var args__7826 = cljs.core._rest.call(null,args__7824);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__7819,b__7821,c__7823,d__7825);
} else
{return f.call(null,a__7819,b__7821,c__7823,d__7825);
}
} else
{var e__7827 = cljs.core._first.call(null,args__7826);
var args__7828 = cljs.core._rest.call(null,args__7826);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__7819,b__7821,c__7823,d__7825,e__7827);
} else
{return f.call(null,a__7819,b__7821,c__7823,d__7825,e__7827);
}
} else
{var f__7829 = cljs.core._first.call(null,args__7828);
var args__7830 = cljs.core._rest.call(null,args__7828);
if((argc === 6))
{if(f__7829.cljs$lang$arity$6)
{return f__7829.cljs$lang$arity$6(a__7819,b__7821,c__7823,d__7825,e__7827,f__7829);
} else
{return f__7829.call(null,a__7819,b__7821,c__7823,d__7825,e__7827,f__7829);
}
} else
{var g__7831 = cljs.core._first.call(null,args__7830);
var args__7832 = cljs.core._rest.call(null,args__7830);
if((argc === 7))
{if(f__7829.cljs$lang$arity$7)
{return f__7829.cljs$lang$arity$7(a__7819,b__7821,c__7823,d__7825,e__7827,f__7829,g__7831);
} else
{return f__7829.call(null,a__7819,b__7821,c__7823,d__7825,e__7827,f__7829,g__7831);
}
} else
{var h__7833 = cljs.core._first.call(null,args__7832);
var args__7834 = cljs.core._rest.call(null,args__7832);
if((argc === 8))
{if(f__7829.cljs$lang$arity$8)
{return f__7829.cljs$lang$arity$8(a__7819,b__7821,c__7823,d__7825,e__7827,f__7829,g__7831,h__7833);
} else
{return f__7829.call(null,a__7819,b__7821,c__7823,d__7825,e__7827,f__7829,g__7831,h__7833);
}
} else
{var i__7835 = cljs.core._first.call(null,args__7834);
var args__7836 = cljs.core._rest.call(null,args__7834);
if((argc === 9))
{if(f__7829.cljs$lang$arity$9)
{return f__7829.cljs$lang$arity$9(a__7819,b__7821,c__7823,d__7825,e__7827,f__7829,g__7831,h__7833,i__7835);
} else
{return f__7829.call(null,a__7819,b__7821,c__7823,d__7825,e__7827,f__7829,g__7831,h__7833,i__7835);
}
} else
{var j__7837 = cljs.core._first.call(null,args__7836);
var args__7838 = cljs.core._rest.call(null,args__7836);
if((argc === 10))
{if(f__7829.cljs$lang$arity$10)
{return f__7829.cljs$lang$arity$10(a__7819,b__7821,c__7823,d__7825,e__7827,f__7829,g__7831,h__7833,i__7835,j__7837);
} else
{return f__7829.call(null,a__7819,b__7821,c__7823,d__7825,e__7827,f__7829,g__7831,h__7833,i__7835,j__7837);
}
} else
{var k__7839 = cljs.core._first.call(null,args__7838);
var args__7840 = cljs.core._rest.call(null,args__7838);
if((argc === 11))
{if(f__7829.cljs$lang$arity$11)
{return f__7829.cljs$lang$arity$11(a__7819,b__7821,c__7823,d__7825,e__7827,f__7829,g__7831,h__7833,i__7835,j__7837,k__7839);
} else
{return f__7829.call(null,a__7819,b__7821,c__7823,d__7825,e__7827,f__7829,g__7831,h__7833,i__7835,j__7837,k__7839);
}
} else
{var l__7841 = cljs.core._first.call(null,args__7840);
var args__7842 = cljs.core._rest.call(null,args__7840);
if((argc === 12))
{if(f__7829.cljs$lang$arity$12)
{return f__7829.cljs$lang$arity$12(a__7819,b__7821,c__7823,d__7825,e__7827,f__7829,g__7831,h__7833,i__7835,j__7837,k__7839,l__7841);
} else
{return f__7829.call(null,a__7819,b__7821,c__7823,d__7825,e__7827,f__7829,g__7831,h__7833,i__7835,j__7837,k__7839,l__7841);
}
} else
{var m__7843 = cljs.core._first.call(null,args__7842);
var args__7844 = cljs.core._rest.call(null,args__7842);
if((argc === 13))
{if(f__7829.cljs$lang$arity$13)
{return f__7829.cljs$lang$arity$13(a__7819,b__7821,c__7823,d__7825,e__7827,f__7829,g__7831,h__7833,i__7835,j__7837,k__7839,l__7841,m__7843);
} else
{return f__7829.call(null,a__7819,b__7821,c__7823,d__7825,e__7827,f__7829,g__7831,h__7833,i__7835,j__7837,k__7839,l__7841,m__7843);
}
} else
{var n__7845 = cljs.core._first.call(null,args__7844);
var args__7846 = cljs.core._rest.call(null,args__7844);
if((argc === 14))
{if(f__7829.cljs$lang$arity$14)
{return f__7829.cljs$lang$arity$14(a__7819,b__7821,c__7823,d__7825,e__7827,f__7829,g__7831,h__7833,i__7835,j__7837,k__7839,l__7841,m__7843,n__7845);
} else
{return f__7829.call(null,a__7819,b__7821,c__7823,d__7825,e__7827,f__7829,g__7831,h__7833,i__7835,j__7837,k__7839,l__7841,m__7843,n__7845);
}
} else
{var o__7847 = cljs.core._first.call(null,args__7846);
var args__7848 = cljs.core._rest.call(null,args__7846);
if((argc === 15))
{if(f__7829.cljs$lang$arity$15)
{return f__7829.cljs$lang$arity$15(a__7819,b__7821,c__7823,d__7825,e__7827,f__7829,g__7831,h__7833,i__7835,j__7837,k__7839,l__7841,m__7843,n__7845,o__7847);
} else
{return f__7829.call(null,a__7819,b__7821,c__7823,d__7825,e__7827,f__7829,g__7831,h__7833,i__7835,j__7837,k__7839,l__7841,m__7843,n__7845,o__7847);
}
} else
{var p__7849 = cljs.core._first.call(null,args__7848);
var args__7850 = cljs.core._rest.call(null,args__7848);
if((argc === 16))
{if(f__7829.cljs$lang$arity$16)
{return f__7829.cljs$lang$arity$16(a__7819,b__7821,c__7823,d__7825,e__7827,f__7829,g__7831,h__7833,i__7835,j__7837,k__7839,l__7841,m__7843,n__7845,o__7847,p__7849);
} else
{return f__7829.call(null,a__7819,b__7821,c__7823,d__7825,e__7827,f__7829,g__7831,h__7833,i__7835,j__7837,k__7839,l__7841,m__7843,n__7845,o__7847,p__7849);
}
} else
{var q__7851 = cljs.core._first.call(null,args__7850);
var args__7852 = cljs.core._rest.call(null,args__7850);
if((argc === 17))
{if(f__7829.cljs$lang$arity$17)
{return f__7829.cljs$lang$arity$17(a__7819,b__7821,c__7823,d__7825,e__7827,f__7829,g__7831,h__7833,i__7835,j__7837,k__7839,l__7841,m__7843,n__7845,o__7847,p__7849,q__7851);
} else
{return f__7829.call(null,a__7819,b__7821,c__7823,d__7825,e__7827,f__7829,g__7831,h__7833,i__7835,j__7837,k__7839,l__7841,m__7843,n__7845,o__7847,p__7849,q__7851);
}
} else
{var r__7853 = cljs.core._first.call(null,args__7852);
var args__7854 = cljs.core._rest.call(null,args__7852);
if((argc === 18))
{if(f__7829.cljs$lang$arity$18)
{return f__7829.cljs$lang$arity$18(a__7819,b__7821,c__7823,d__7825,e__7827,f__7829,g__7831,h__7833,i__7835,j__7837,k__7839,l__7841,m__7843,n__7845,o__7847,p__7849,q__7851,r__7853);
} else
{return f__7829.call(null,a__7819,b__7821,c__7823,d__7825,e__7827,f__7829,g__7831,h__7833,i__7835,j__7837,k__7839,l__7841,m__7843,n__7845,o__7847,p__7849,q__7851,r__7853);
}
} else
{var s__7855 = cljs.core._first.call(null,args__7854);
var args__7856 = cljs.core._rest.call(null,args__7854);
if((argc === 19))
{if(f__7829.cljs$lang$arity$19)
{return f__7829.cljs$lang$arity$19(a__7819,b__7821,c__7823,d__7825,e__7827,f__7829,g__7831,h__7833,i__7835,j__7837,k__7839,l__7841,m__7843,n__7845,o__7847,p__7849,q__7851,r__7853,s__7855);
} else
{return f__7829.call(null,a__7819,b__7821,c__7823,d__7825,e__7827,f__7829,g__7831,h__7833,i__7835,j__7837,k__7839,l__7841,m__7843,n__7845,o__7847,p__7849,q__7851,r__7853,s__7855);
}
} else
{var t__7857 = cljs.core._first.call(null,args__7856);
var args__7858 = cljs.core._rest.call(null,args__7856);
if((argc === 20))
{if(f__7829.cljs$lang$arity$20)
{return f__7829.cljs$lang$arity$20(a__7819,b__7821,c__7823,d__7825,e__7827,f__7829,g__7831,h__7833,i__7835,j__7837,k__7839,l__7841,m__7843,n__7845,o__7847,p__7849,q__7851,r__7853,s__7855,t__7857);
} else
{return f__7829.call(null,a__7819,b__7821,c__7823,d__7825,e__7827,f__7829,g__7831,h__7833,i__7835,j__7837,k__7839,l__7841,m__7843,n__7845,o__7847,p__7849,q__7851,r__7853,s__7855,t__7857);
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
var fixed_arity__7873 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7874 = cljs.core.bounded_count.call(null,args,(fixed_arity__7873 + 1));
if((bc__7874 <= fixed_arity__7873))
{return cljs.core.apply_to.call(null,f,bc__7874,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__7875 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__7876 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7877 = cljs.core.bounded_count.call(null,arglist__7875,(fixed_arity__7876 + 1));
if((bc__7877 <= fixed_arity__7876))
{return cljs.core.apply_to.call(null,f,bc__7877,arglist__7875);
} else
{return f.cljs$lang$applyTo(arglist__7875);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7875));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__7878 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__7879 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7880 = cljs.core.bounded_count.call(null,arglist__7878,(fixed_arity__7879 + 1));
if((bc__7880 <= fixed_arity__7879))
{return cljs.core.apply_to.call(null,f,bc__7880,arglist__7878);
} else
{return f.cljs$lang$applyTo(arglist__7878);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7878));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__7881 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__7882 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7883 = cljs.core.bounded_count.call(null,arglist__7881,(fixed_arity__7882 + 1));
if((bc__7883 <= fixed_arity__7882))
{return cljs.core.apply_to.call(null,f,bc__7883,arglist__7881);
} else
{return f.cljs$lang$applyTo(arglist__7881);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7881));
}
});
var apply__6 = (function() { 
var G__7887__delegate = function (f,a,b,c,d,args){
var arglist__7884 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__7885 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7886 = cljs.core.bounded_count.call(null,arglist__7884,(fixed_arity__7885 + 1));
if((bc__7886 <= fixed_arity__7885))
{return cljs.core.apply_to.call(null,f,bc__7886,arglist__7884);
} else
{return f.cljs$lang$applyTo(arglist__7884);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7884));
}
};
var G__7887 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__7887__delegate.call(this, f, a, b, c, d, args);
};
G__7887.cljs$lang$maxFixedArity = 5;
G__7887.cljs$lang$applyTo = (function (arglist__7888){
var f = cljs.core.first(arglist__7888);
var a = cljs.core.first(cljs.core.next(arglist__7888));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7888)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7888))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7888)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7888)))));
return G__7887__delegate(f, a, b, c, d, args);
});
G__7887.cljs$lang$arity$variadic = G__7887__delegate;
return G__7887;
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
vary_meta.cljs$lang$applyTo = (function (arglist__7889){
var obj = cljs.core.first(arglist__7889);
var f = cljs.core.first(cljs.core.next(arglist__7889));
var args = cljs.core.rest(cljs.core.next(arglist__7889));
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
var G__7890__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__7890 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7890__delegate.call(this, x, y, more);
};
G__7890.cljs$lang$maxFixedArity = 2;
G__7890.cljs$lang$applyTo = (function (arglist__7891){
var x = cljs.core.first(arglist__7891);
var y = cljs.core.first(cljs.core.next(arglist__7891));
var more = cljs.core.rest(cljs.core.next(arglist__7891));
return G__7890__delegate(x, y, more);
});
G__7890.cljs$lang$arity$variadic = G__7890__delegate;
return G__7890;
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
var G__7892 = pred;
var G__7893 = cljs.core.next.call(null,coll);
pred = G__7892;
coll = G__7893;
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
{var or__3824__auto____7895 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____7895))
{return or__3824__auto____7895;
} else
{{
var G__7896 = pred;
var G__7897 = cljs.core.next.call(null,coll);
pred = G__7896;
coll = G__7897;
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
var G__7898 = null;
var G__7898__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__7898__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__7898__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__7898__3 = (function() { 
var G__7899__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__7899 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7899__delegate.call(this, x, y, zs);
};
G__7899.cljs$lang$maxFixedArity = 2;
G__7899.cljs$lang$applyTo = (function (arglist__7900){
var x = cljs.core.first(arglist__7900);
var y = cljs.core.first(cljs.core.next(arglist__7900));
var zs = cljs.core.rest(cljs.core.next(arglist__7900));
return G__7899__delegate(x, y, zs);
});
G__7899.cljs$lang$arity$variadic = G__7899__delegate;
return G__7899;
})()
;
G__7898 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__7898__0.call(this);
case 1:
return G__7898__1.call(this,x);
case 2:
return G__7898__2.call(this,x,y);
default:
return G__7898__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__7898.cljs$lang$maxFixedArity = 2;
G__7898.cljs$lang$applyTo = G__7898__3.cljs$lang$applyTo;
return G__7898;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__7901__delegate = function (args){
return x;
};
var G__7901 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7901__delegate.call(this, args);
};
G__7901.cljs$lang$maxFixedArity = 0;
G__7901.cljs$lang$applyTo = (function (arglist__7902){
var args = cljs.core.seq(arglist__7902);;
return G__7901__delegate(args);
});
G__7901.cljs$lang$arity$variadic = G__7901__delegate;
return G__7901;
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
var G__7909 = null;
var G__7909__0 = (function (){
return f.call(null,g.call(null));
});
var G__7909__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__7909__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__7909__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__7909__4 = (function() { 
var G__7910__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__7910 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7910__delegate.call(this, x, y, z, args);
};
G__7910.cljs$lang$maxFixedArity = 3;
G__7910.cljs$lang$applyTo = (function (arglist__7911){
var x = cljs.core.first(arglist__7911);
var y = cljs.core.first(cljs.core.next(arglist__7911));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7911)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7911)));
return G__7910__delegate(x, y, z, args);
});
G__7910.cljs$lang$arity$variadic = G__7910__delegate;
return G__7910;
})()
;
G__7909 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7909__0.call(this);
case 1:
return G__7909__1.call(this,x);
case 2:
return G__7909__2.call(this,x,y);
case 3:
return G__7909__3.call(this,x,y,z);
default:
return G__7909__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7909.cljs$lang$maxFixedArity = 3;
G__7909.cljs$lang$applyTo = G__7909__4.cljs$lang$applyTo;
return G__7909;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__7912 = null;
var G__7912__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__7912__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__7912__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__7912__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__7912__4 = (function() { 
var G__7913__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__7913 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7913__delegate.call(this, x, y, z, args);
};
G__7913.cljs$lang$maxFixedArity = 3;
G__7913.cljs$lang$applyTo = (function (arglist__7914){
var x = cljs.core.first(arglist__7914);
var y = cljs.core.first(cljs.core.next(arglist__7914));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7914)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7914)));
return G__7913__delegate(x, y, z, args);
});
G__7913.cljs$lang$arity$variadic = G__7913__delegate;
return G__7913;
})()
;
G__7912 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7912__0.call(this);
case 1:
return G__7912__1.call(this,x);
case 2:
return G__7912__2.call(this,x,y);
case 3:
return G__7912__3.call(this,x,y,z);
default:
return G__7912__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7912.cljs$lang$maxFixedArity = 3;
G__7912.cljs$lang$applyTo = G__7912__4.cljs$lang$applyTo;
return G__7912;
})()
});
var comp__4 = (function() { 
var G__7915__delegate = function (f1,f2,f3,fs){
var fs__7906 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__7916__delegate = function (args){
var ret__7907 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__7906),args);
var fs__7908 = cljs.core.next.call(null,fs__7906);
while(true){
if(fs__7908)
{{
var G__7917 = cljs.core.first.call(null,fs__7908).call(null,ret__7907);
var G__7918 = cljs.core.next.call(null,fs__7908);
ret__7907 = G__7917;
fs__7908 = G__7918;
continue;
}
} else
{return ret__7907;
}
break;
}
};
var G__7916 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7916__delegate.call(this, args);
};
G__7916.cljs$lang$maxFixedArity = 0;
G__7916.cljs$lang$applyTo = (function (arglist__7919){
var args = cljs.core.seq(arglist__7919);;
return G__7916__delegate(args);
});
G__7916.cljs$lang$arity$variadic = G__7916__delegate;
return G__7916;
})()
;
};
var G__7915 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7915__delegate.call(this, f1, f2, f3, fs);
};
G__7915.cljs$lang$maxFixedArity = 3;
G__7915.cljs$lang$applyTo = (function (arglist__7920){
var f1 = cljs.core.first(arglist__7920);
var f2 = cljs.core.first(cljs.core.next(arglist__7920));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7920)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7920)));
return G__7915__delegate(f1, f2, f3, fs);
});
G__7915.cljs$lang$arity$variadic = G__7915__delegate;
return G__7915;
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
var G__7921__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__7921 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7921__delegate.call(this, args);
};
G__7921.cljs$lang$maxFixedArity = 0;
G__7921.cljs$lang$applyTo = (function (arglist__7922){
var args = cljs.core.seq(arglist__7922);;
return G__7921__delegate(args);
});
G__7921.cljs$lang$arity$variadic = G__7921__delegate;
return G__7921;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__7923__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__7923 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7923__delegate.call(this, args);
};
G__7923.cljs$lang$maxFixedArity = 0;
G__7923.cljs$lang$applyTo = (function (arglist__7924){
var args = cljs.core.seq(arglist__7924);;
return G__7923__delegate(args);
});
G__7923.cljs$lang$arity$variadic = G__7923__delegate;
return G__7923;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__7925__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__7925 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7925__delegate.call(this, args);
};
G__7925.cljs$lang$maxFixedArity = 0;
G__7925.cljs$lang$applyTo = (function (arglist__7926){
var args = cljs.core.seq(arglist__7926);;
return G__7925__delegate(args);
});
G__7925.cljs$lang$arity$variadic = G__7925__delegate;
return G__7925;
})()
;
});
var partial__5 = (function() { 
var G__7927__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__7928__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__7928 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7928__delegate.call(this, args);
};
G__7928.cljs$lang$maxFixedArity = 0;
G__7928.cljs$lang$applyTo = (function (arglist__7929){
var args = cljs.core.seq(arglist__7929);;
return G__7928__delegate(args);
});
G__7928.cljs$lang$arity$variadic = G__7928__delegate;
return G__7928;
})()
;
};
var G__7927 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7927__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__7927.cljs$lang$maxFixedArity = 4;
G__7927.cljs$lang$applyTo = (function (arglist__7930){
var f = cljs.core.first(arglist__7930);
var arg1 = cljs.core.first(cljs.core.next(arglist__7930));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7930)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7930))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7930))));
return G__7927__delegate(f, arg1, arg2, arg3, more);
});
G__7927.cljs$lang$arity$variadic = G__7927__delegate;
return G__7927;
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
var G__7931 = null;
var G__7931__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__7931__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__7931__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__7931__4 = (function() { 
var G__7932__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__7932 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7932__delegate.call(this, a, b, c, ds);
};
G__7932.cljs$lang$maxFixedArity = 3;
G__7932.cljs$lang$applyTo = (function (arglist__7933){
var a = cljs.core.first(arglist__7933);
var b = cljs.core.first(cljs.core.next(arglist__7933));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7933)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7933)));
return G__7932__delegate(a, b, c, ds);
});
G__7932.cljs$lang$arity$variadic = G__7932__delegate;
return G__7932;
})()
;
G__7931 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__7931__1.call(this,a);
case 2:
return G__7931__2.call(this,a,b);
case 3:
return G__7931__3.call(this,a,b,c);
default:
return G__7931__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7931.cljs$lang$maxFixedArity = 3;
G__7931.cljs$lang$applyTo = G__7931__4.cljs$lang$applyTo;
return G__7931;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__7934 = null;
var G__7934__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7934__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__7934__4 = (function() { 
var G__7935__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__7935 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7935__delegate.call(this, a, b, c, ds);
};
G__7935.cljs$lang$maxFixedArity = 3;
G__7935.cljs$lang$applyTo = (function (arglist__7936){
var a = cljs.core.first(arglist__7936);
var b = cljs.core.first(cljs.core.next(arglist__7936));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7936)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7936)));
return G__7935__delegate(a, b, c, ds);
});
G__7935.cljs$lang$arity$variadic = G__7935__delegate;
return G__7935;
})()
;
G__7934 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7934__2.call(this,a,b);
case 3:
return G__7934__3.call(this,a,b,c);
default:
return G__7934__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7934.cljs$lang$maxFixedArity = 3;
G__7934.cljs$lang$applyTo = G__7934__4.cljs$lang$applyTo;
return G__7934;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__7937 = null;
var G__7937__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7937__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__7937__4 = (function() { 
var G__7938__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__7938 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7938__delegate.call(this, a, b, c, ds);
};
G__7938.cljs$lang$maxFixedArity = 3;
G__7938.cljs$lang$applyTo = (function (arglist__7939){
var a = cljs.core.first(arglist__7939);
var b = cljs.core.first(cljs.core.next(arglist__7939));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7939)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7939)));
return G__7938__delegate(a, b, c, ds);
});
G__7938.cljs$lang$arity$variadic = G__7938__delegate;
return G__7938;
})()
;
G__7937 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7937__2.call(this,a,b);
case 3:
return G__7937__3.call(this,a,b,c);
default:
return G__7937__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7937.cljs$lang$maxFixedArity = 3;
G__7937.cljs$lang$applyTo = G__7937__4.cljs$lang$applyTo;
return G__7937;
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
var mapi__7955 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7963 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7963)
{var s__7964 = temp__3974__auto____7963;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7964))
{var c__7965 = cljs.core.chunk_first.call(null,s__7964);
var size__7966 = cljs.core.count.call(null,c__7965);
var b__7967 = cljs.core.chunk_buffer.call(null,size__7966);
var n__2492__auto____7968 = size__7966;
var i__7969 = 0;
while(true){
if((i__7969 < n__2492__auto____7968))
{cljs.core.chunk_append.call(null,b__7967,f.call(null,(idx + i__7969),cljs.core._nth.call(null,c__7965,i__7969)));
{
var G__7970 = (i__7969 + 1);
i__7969 = G__7970;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7967),mapi.call(null,(idx + size__7966),cljs.core.chunk_rest.call(null,s__7964)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__7964)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__7964)));
}
} else
{return null;
}
}),null));
});
return mapi__7955.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7980 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7980)
{var s__7981 = temp__3974__auto____7980;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7981))
{var c__7982 = cljs.core.chunk_first.call(null,s__7981);
var size__7983 = cljs.core.count.call(null,c__7982);
var b__7984 = cljs.core.chunk_buffer.call(null,size__7983);
var n__2492__auto____7985 = size__7983;
var i__7986 = 0;
while(true){
if((i__7986 < n__2492__auto____7985))
{var x__7987 = f.call(null,cljs.core._nth.call(null,c__7982,i__7986));
if((x__7987 == null))
{} else
{cljs.core.chunk_append.call(null,b__7984,x__7987);
}
{
var G__7989 = (i__7986 + 1);
i__7986 = G__7989;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7984),keep.call(null,f,cljs.core.chunk_rest.call(null,s__7981)));
} else
{var x__7988 = f.call(null,cljs.core.first.call(null,s__7981));
if((x__7988 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__7981));
} else
{return cljs.core.cons.call(null,x__7988,keep.call(null,f,cljs.core.rest.call(null,s__7981)));
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
var keepi__8015 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8025 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8025)
{var s__8026 = temp__3974__auto____8025;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8026))
{var c__8027 = cljs.core.chunk_first.call(null,s__8026);
var size__8028 = cljs.core.count.call(null,c__8027);
var b__8029 = cljs.core.chunk_buffer.call(null,size__8028);
var n__2492__auto____8030 = size__8028;
var i__8031 = 0;
while(true){
if((i__8031 < n__2492__auto____8030))
{var x__8032 = f.call(null,(idx + i__8031),cljs.core._nth.call(null,c__8027,i__8031));
if((x__8032 == null))
{} else
{cljs.core.chunk_append.call(null,b__8029,x__8032);
}
{
var G__8034 = (i__8031 + 1);
i__8031 = G__8034;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8029),keepi.call(null,(idx + size__8028),cljs.core.chunk_rest.call(null,s__8026)));
} else
{var x__8033 = f.call(null,idx,cljs.core.first.call(null,s__8026));
if((x__8033 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__8026));
} else
{return cljs.core.cons.call(null,x__8033,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__8026)));
}
}
} else
{return null;
}
}),null));
});
return keepi__8015.call(null,0,coll);
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8120 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____8120))
{return p.call(null,y);
} else
{return and__3822__auto____8120;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8121 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____8121))
{var and__3822__auto____8122 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____8122))
{return p.call(null,z);
} else
{return and__3822__auto____8122;
}
} else
{return and__3822__auto____8121;
}
})());
});
var ep1__4 = (function() { 
var G__8191__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8123 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8123))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____8123;
}
})());
};
var G__8191 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8191__delegate.call(this, x, y, z, args);
};
G__8191.cljs$lang$maxFixedArity = 3;
G__8191.cljs$lang$applyTo = (function (arglist__8192){
var x = cljs.core.first(arglist__8192);
var y = cljs.core.first(cljs.core.next(arglist__8192));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8192)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8192)));
return G__8191__delegate(x, y, z, args);
});
G__8191.cljs$lang$arity$variadic = G__8191__delegate;
return G__8191;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8135 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8135))
{return p2.call(null,x);
} else
{return and__3822__auto____8135;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8136 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8136))
{var and__3822__auto____8137 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8137))
{var and__3822__auto____8138 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8138))
{return p2.call(null,y);
} else
{return and__3822__auto____8138;
}
} else
{return and__3822__auto____8137;
}
} else
{return and__3822__auto____8136;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8139 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8139))
{var and__3822__auto____8140 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8140))
{var and__3822__auto____8141 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____8141))
{var and__3822__auto____8142 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8142))
{var and__3822__auto____8143 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8143))
{return p2.call(null,z);
} else
{return and__3822__auto____8143;
}
} else
{return and__3822__auto____8142;
}
} else
{return and__3822__auto____8141;
}
} else
{return and__3822__auto____8140;
}
} else
{return and__3822__auto____8139;
}
})());
});
var ep2__4 = (function() { 
var G__8193__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8144 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8144))
{return cljs.core.every_QMARK_.call(null,(function (p1__7990_SHARP_){
var and__3822__auto____8145 = p1.call(null,p1__7990_SHARP_);
if(cljs.core.truth_(and__3822__auto____8145))
{return p2.call(null,p1__7990_SHARP_);
} else
{return and__3822__auto____8145;
}
}),args);
} else
{return and__3822__auto____8144;
}
})());
};
var G__8193 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8193__delegate.call(this, x, y, z, args);
};
G__8193.cljs$lang$maxFixedArity = 3;
G__8193.cljs$lang$applyTo = (function (arglist__8194){
var x = cljs.core.first(arglist__8194);
var y = cljs.core.first(cljs.core.next(arglist__8194));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8194)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8194)));
return G__8193__delegate(x, y, z, args);
});
G__8193.cljs$lang$arity$variadic = G__8193__delegate;
return G__8193;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8164 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8164))
{var and__3822__auto____8165 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8165))
{return p3.call(null,x);
} else
{return and__3822__auto____8165;
}
} else
{return and__3822__auto____8164;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8166 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8166))
{var and__3822__auto____8167 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8167))
{var and__3822__auto____8168 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____8168))
{var and__3822__auto____8169 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8169))
{var and__3822__auto____8170 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8170))
{return p3.call(null,y);
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
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8171 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8171))
{var and__3822__auto____8172 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8172))
{var and__3822__auto____8173 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____8173))
{var and__3822__auto____8174 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8174))
{var and__3822__auto____8175 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8175))
{var and__3822__auto____8176 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____8176))
{var and__3822__auto____8177 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____8177))
{var and__3822__auto____8178 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____8178))
{return p3.call(null,z);
} else
{return and__3822__auto____8178;
}
} else
{return and__3822__auto____8177;
}
} else
{return and__3822__auto____8176;
}
} else
{return and__3822__auto____8175;
}
} else
{return and__3822__auto____8174;
}
} else
{return and__3822__auto____8173;
}
} else
{return and__3822__auto____8172;
}
} else
{return and__3822__auto____8171;
}
})());
});
var ep3__4 = (function() { 
var G__8195__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8179 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8179))
{return cljs.core.every_QMARK_.call(null,(function (p1__7991_SHARP_){
var and__3822__auto____8180 = p1.call(null,p1__7991_SHARP_);
if(cljs.core.truth_(and__3822__auto____8180))
{var and__3822__auto____8181 = p2.call(null,p1__7991_SHARP_);
if(cljs.core.truth_(and__3822__auto____8181))
{return p3.call(null,p1__7991_SHARP_);
} else
{return and__3822__auto____8181;
}
} else
{return and__3822__auto____8180;
}
}),args);
} else
{return and__3822__auto____8179;
}
})());
};
var G__8195 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8195__delegate.call(this, x, y, z, args);
};
G__8195.cljs$lang$maxFixedArity = 3;
G__8195.cljs$lang$applyTo = (function (arglist__8196){
var x = cljs.core.first(arglist__8196);
var y = cljs.core.first(cljs.core.next(arglist__8196));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8196)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8196)));
return G__8195__delegate(x, y, z, args);
});
G__8195.cljs$lang$arity$variadic = G__8195__delegate;
return G__8195;
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
var G__8197__delegate = function (p1,p2,p3,ps){
var ps__8182 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__7992_SHARP_){
return p1__7992_SHARP_.call(null,x);
}),ps__8182);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__7993_SHARP_){
var and__3822__auto____8187 = p1__7993_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____8187))
{return p1__7993_SHARP_.call(null,y);
} else
{return and__3822__auto____8187;
}
}),ps__8182);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__7994_SHARP_){
var and__3822__auto____8188 = p1__7994_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____8188))
{var and__3822__auto____8189 = p1__7994_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____8189))
{return p1__7994_SHARP_.call(null,z);
} else
{return and__3822__auto____8189;
}
} else
{return and__3822__auto____8188;
}
}),ps__8182);
});
var epn__4 = (function() { 
var G__8198__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8190 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8190))
{return cljs.core.every_QMARK_.call(null,(function (p1__7995_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__7995_SHARP_,args);
}),ps__8182);
} else
{return and__3822__auto____8190;
}
})());
};
var G__8198 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8198__delegate.call(this, x, y, z, args);
};
G__8198.cljs$lang$maxFixedArity = 3;
G__8198.cljs$lang$applyTo = (function (arglist__8199){
var x = cljs.core.first(arglist__8199);
var y = cljs.core.first(cljs.core.next(arglist__8199));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8199)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8199)));
return G__8198__delegate(x, y, z, args);
});
G__8198.cljs$lang$arity$variadic = G__8198__delegate;
return G__8198;
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
var G__8197 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8197__delegate.call(this, p1, p2, p3, ps);
};
G__8197.cljs$lang$maxFixedArity = 3;
G__8197.cljs$lang$applyTo = (function (arglist__8200){
var p1 = cljs.core.first(arglist__8200);
var p2 = cljs.core.first(cljs.core.next(arglist__8200));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8200)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8200)));
return G__8197__delegate(p1, p2, p3, ps);
});
G__8197.cljs$lang$arity$variadic = G__8197__delegate;
return G__8197;
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
var or__3824__auto____8281 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____8281))
{return or__3824__auto____8281;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____8282 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____8282))
{return or__3824__auto____8282;
} else
{var or__3824__auto____8283 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____8283))
{return or__3824__auto____8283;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__8352__delegate = function (x,y,z,args){
var or__3824__auto____8284 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8284))
{return or__3824__auto____8284;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__8352 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8352__delegate.call(this, x, y, z, args);
};
G__8352.cljs$lang$maxFixedArity = 3;
G__8352.cljs$lang$applyTo = (function (arglist__8353){
var x = cljs.core.first(arglist__8353);
var y = cljs.core.first(cljs.core.next(arglist__8353));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8353)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8353)));
return G__8352__delegate(x, y, z, args);
});
G__8352.cljs$lang$arity$variadic = G__8352__delegate;
return G__8352;
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
var or__3824__auto____8296 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8296))
{return or__3824__auto____8296;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____8297 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8297))
{return or__3824__auto____8297;
} else
{var or__3824__auto____8298 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8298))
{return or__3824__auto____8298;
} else
{var or__3824__auto____8299 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8299))
{return or__3824__auto____8299;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____8300 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8300))
{return or__3824__auto____8300;
} else
{var or__3824__auto____8301 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8301))
{return or__3824__auto____8301;
} else
{var or__3824__auto____8302 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____8302))
{return or__3824__auto____8302;
} else
{var or__3824__auto____8303 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8303))
{return or__3824__auto____8303;
} else
{var or__3824__auto____8304 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8304))
{return or__3824__auto____8304;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__8354__delegate = function (x,y,z,args){
var or__3824__auto____8305 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8305))
{return or__3824__auto____8305;
} else
{return cljs.core.some.call(null,(function (p1__8035_SHARP_){
var or__3824__auto____8306 = p1.call(null,p1__8035_SHARP_);
if(cljs.core.truth_(or__3824__auto____8306))
{return or__3824__auto____8306;
} else
{return p2.call(null,p1__8035_SHARP_);
}
}),args);
}
};
var G__8354 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8354__delegate.call(this, x, y, z, args);
};
G__8354.cljs$lang$maxFixedArity = 3;
G__8354.cljs$lang$applyTo = (function (arglist__8355){
var x = cljs.core.first(arglist__8355);
var y = cljs.core.first(cljs.core.next(arglist__8355));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8355)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8355)));
return G__8354__delegate(x, y, z, args);
});
G__8354.cljs$lang$arity$variadic = G__8354__delegate;
return G__8354;
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
var or__3824__auto____8325 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8325))
{return or__3824__auto____8325;
} else
{var or__3824__auto____8326 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8326))
{return or__3824__auto____8326;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____8327 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8327))
{return or__3824__auto____8327;
} else
{var or__3824__auto____8328 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8328))
{return or__3824__auto____8328;
} else
{var or__3824__auto____8329 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____8329))
{return or__3824__auto____8329;
} else
{var or__3824__auto____8330 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8330))
{return or__3824__auto____8330;
} else
{var or__3824__auto____8331 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8331))
{return or__3824__auto____8331;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____8332 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8332))
{return or__3824__auto____8332;
} else
{var or__3824__auto____8333 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8333))
{return or__3824__auto____8333;
} else
{var or__3824__auto____8334 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____8334))
{return or__3824__auto____8334;
} else
{var or__3824__auto____8335 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8335))
{return or__3824__auto____8335;
} else
{var or__3824__auto____8336 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8336))
{return or__3824__auto____8336;
} else
{var or__3824__auto____8337 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____8337))
{return or__3824__auto____8337;
} else
{var or__3824__auto____8338 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____8338))
{return or__3824__auto____8338;
} else
{var or__3824__auto____8339 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____8339))
{return or__3824__auto____8339;
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
var G__8356__delegate = function (x,y,z,args){
var or__3824__auto____8340 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8340))
{return or__3824__auto____8340;
} else
{return cljs.core.some.call(null,(function (p1__8036_SHARP_){
var or__3824__auto____8341 = p1.call(null,p1__8036_SHARP_);
if(cljs.core.truth_(or__3824__auto____8341))
{return or__3824__auto____8341;
} else
{var or__3824__auto____8342 = p2.call(null,p1__8036_SHARP_);
if(cljs.core.truth_(or__3824__auto____8342))
{return or__3824__auto____8342;
} else
{return p3.call(null,p1__8036_SHARP_);
}
}
}),args);
}
};
var G__8356 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8356__delegate.call(this, x, y, z, args);
};
G__8356.cljs$lang$maxFixedArity = 3;
G__8356.cljs$lang$applyTo = (function (arglist__8357){
var x = cljs.core.first(arglist__8357);
var y = cljs.core.first(cljs.core.next(arglist__8357));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8357)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8357)));
return G__8356__delegate(x, y, z, args);
});
G__8356.cljs$lang$arity$variadic = G__8356__delegate;
return G__8356;
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
var G__8358__delegate = function (p1,p2,p3,ps){
var ps__8343 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__8037_SHARP_){
return p1__8037_SHARP_.call(null,x);
}),ps__8343);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__8038_SHARP_){
var or__3824__auto____8348 = p1__8038_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____8348))
{return or__3824__auto____8348;
} else
{return p1__8038_SHARP_.call(null,y);
}
}),ps__8343);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__8039_SHARP_){
var or__3824__auto____8349 = p1__8039_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____8349))
{return or__3824__auto____8349;
} else
{var or__3824__auto____8350 = p1__8039_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____8350))
{return or__3824__auto____8350;
} else
{return p1__8039_SHARP_.call(null,z);
}
}
}),ps__8343);
});
var spn__4 = (function() { 
var G__8359__delegate = function (x,y,z,args){
var or__3824__auto____8351 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8351))
{return or__3824__auto____8351;
} else
{return cljs.core.some.call(null,(function (p1__8040_SHARP_){
return cljs.core.some.call(null,p1__8040_SHARP_,args);
}),ps__8343);
}
};
var G__8359 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8359__delegate.call(this, x, y, z, args);
};
G__8359.cljs$lang$maxFixedArity = 3;
G__8359.cljs$lang$applyTo = (function (arglist__8360){
var x = cljs.core.first(arglist__8360);
var y = cljs.core.first(cljs.core.next(arglist__8360));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8360)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8360)));
return G__8359__delegate(x, y, z, args);
});
G__8359.cljs$lang$arity$variadic = G__8359__delegate;
return G__8359;
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
var G__8358 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8358__delegate.call(this, p1, p2, p3, ps);
};
G__8358.cljs$lang$maxFixedArity = 3;
G__8358.cljs$lang$applyTo = (function (arglist__8361){
var p1 = cljs.core.first(arglist__8361);
var p2 = cljs.core.first(cljs.core.next(arglist__8361));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8361)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8361)));
return G__8358__delegate(p1, p2, p3, ps);
});
G__8358.cljs$lang$arity$variadic = G__8358__delegate;
return G__8358;
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
var temp__3974__auto____8380 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8380)
{var s__8381 = temp__3974__auto____8380;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8381))
{var c__8382 = cljs.core.chunk_first.call(null,s__8381);
var size__8383 = cljs.core.count.call(null,c__8382);
var b__8384 = cljs.core.chunk_buffer.call(null,size__8383);
var n__2492__auto____8385 = size__8383;
var i__8386 = 0;
while(true){
if((i__8386 < n__2492__auto____8385))
{cljs.core.chunk_append.call(null,b__8384,f.call(null,cljs.core._nth.call(null,c__8382,i__8386)));
{
var G__8398 = (i__8386 + 1);
i__8386 = G__8398;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8384),map.call(null,f,cljs.core.chunk_rest.call(null,s__8381)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__8381)),map.call(null,f,cljs.core.rest.call(null,s__8381)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8387 = cljs.core.seq.call(null,c1);
var s2__8388 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____8389 = s1__8387;
if(and__3822__auto____8389)
{return s2__8388;
} else
{return and__3822__auto____8389;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8387),cljs.core.first.call(null,s2__8388)),map.call(null,f,cljs.core.rest.call(null,s1__8387),cljs.core.rest.call(null,s2__8388)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8390 = cljs.core.seq.call(null,c1);
var s2__8391 = cljs.core.seq.call(null,c2);
var s3__8392 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____8393 = s1__8390;
if(and__3822__auto____8393)
{var and__3822__auto____8394 = s2__8391;
if(and__3822__auto____8394)
{return s3__8392;
} else
{return and__3822__auto____8394;
}
} else
{return and__3822__auto____8393;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8390),cljs.core.first.call(null,s2__8391),cljs.core.first.call(null,s3__8392)),map.call(null,f,cljs.core.rest.call(null,s1__8390),cljs.core.rest.call(null,s2__8391),cljs.core.rest.call(null,s3__8392)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__8399__delegate = function (f,c1,c2,c3,colls){
var step__8397 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8396 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8396))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__8396),step.call(null,map.call(null,cljs.core.rest,ss__8396)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__8201_SHARP_){
return cljs.core.apply.call(null,f,p1__8201_SHARP_);
}),step__8397.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__8399 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8399__delegate.call(this, f, c1, c2, c3, colls);
};
G__8399.cljs$lang$maxFixedArity = 4;
G__8399.cljs$lang$applyTo = (function (arglist__8400){
var f = cljs.core.first(arglist__8400);
var c1 = cljs.core.first(cljs.core.next(arglist__8400));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8400)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8400))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8400))));
return G__8399__delegate(f, c1, c2, c3, colls);
});
G__8399.cljs$lang$arity$variadic = G__8399__delegate;
return G__8399;
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
{var temp__3974__auto____8403 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8403)
{var s__8404 = temp__3974__auto____8403;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__8404),take.call(null,(n - 1),cljs.core.rest.call(null,s__8404)));
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
var step__8410 = (function (n,coll){
while(true){
var s__8408 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____8409 = (n > 0);
if(and__3822__auto____8409)
{return s__8408;
} else
{return and__3822__auto____8409;
}
})()))
{{
var G__8411 = (n - 1);
var G__8412 = cljs.core.rest.call(null,s__8408);
n = G__8411;
coll = G__8412;
continue;
}
} else
{return s__8408;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__8410.call(null,n,coll);
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
var s__8415 = cljs.core.seq.call(null,coll);
var lead__8416 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__8416)
{{
var G__8417 = cljs.core.next.call(null,s__8415);
var G__8418 = cljs.core.next.call(null,lead__8416);
s__8415 = G__8417;
lead__8416 = G__8418;
continue;
}
} else
{return s__8415;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__8424 = (function (pred,coll){
while(true){
var s__8422 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____8423 = s__8422;
if(and__3822__auto____8423)
{return pred.call(null,cljs.core.first.call(null,s__8422));
} else
{return and__3822__auto____8423;
}
})()))
{{
var G__8425 = pred;
var G__8426 = cljs.core.rest.call(null,s__8422);
pred = G__8425;
coll = G__8426;
continue;
}
} else
{return s__8422;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__8424.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8429 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8429)
{var s__8430 = temp__3974__auto____8429;
return cljs.core.concat.call(null,s__8430,cycle.call(null,s__8430));
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
var s1__8435 = cljs.core.seq.call(null,c1);
var s2__8436 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____8437 = s1__8435;
if(and__3822__auto____8437)
{return s2__8436;
} else
{return and__3822__auto____8437;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__8435),cljs.core.cons.call(null,cljs.core.first.call(null,s2__8436),interleave.call(null,cljs.core.rest.call(null,s1__8435),cljs.core.rest.call(null,s2__8436))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__8439__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8438 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8438))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__8438),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__8438)));
} else
{return null;
}
}),null));
};
var G__8439 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8439__delegate.call(this, c1, c2, colls);
};
G__8439.cljs$lang$maxFixedArity = 2;
G__8439.cljs$lang$applyTo = (function (arglist__8440){
var c1 = cljs.core.first(arglist__8440);
var c2 = cljs.core.first(cljs.core.next(arglist__8440));
var colls = cljs.core.rest(cljs.core.next(arglist__8440));
return G__8439__delegate(c1, c2, colls);
});
G__8439.cljs$lang$arity$variadic = G__8439__delegate;
return G__8439;
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
var cat__8450 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____8448 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____8448)
{var coll__8449 = temp__3971__auto____8448;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__8449),cat.call(null,cljs.core.rest.call(null,coll__8449),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__8450.call(null,null,colls);
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
var G__8451__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__8451 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8451__delegate.call(this, f, coll, colls);
};
G__8451.cljs$lang$maxFixedArity = 2;
G__8451.cljs$lang$applyTo = (function (arglist__8452){
var f = cljs.core.first(arglist__8452);
var coll = cljs.core.first(cljs.core.next(arglist__8452));
var colls = cljs.core.rest(cljs.core.next(arglist__8452));
return G__8451__delegate(f, coll, colls);
});
G__8451.cljs$lang$arity$variadic = G__8451__delegate;
return G__8451;
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
var temp__3974__auto____8462 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8462)
{var s__8463 = temp__3974__auto____8462;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8463))
{var c__8464 = cljs.core.chunk_first.call(null,s__8463);
var size__8465 = cljs.core.count.call(null,c__8464);
var b__8466 = cljs.core.chunk_buffer.call(null,size__8465);
var n__2492__auto____8467 = size__8465;
var i__8468 = 0;
while(true){
if((i__8468 < n__2492__auto____8467))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__8464,i__8468))))
{cljs.core.chunk_append.call(null,b__8466,cljs.core._nth.call(null,c__8464,i__8468));
} else
{}
{
var G__8471 = (i__8468 + 1);
i__8468 = G__8471;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8466),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__8463)));
} else
{var f__8469 = cljs.core.first.call(null,s__8463);
var r__8470 = cljs.core.rest.call(null,s__8463);
if(cljs.core.truth_(pred.call(null,f__8469)))
{return cljs.core.cons.call(null,f__8469,filter.call(null,pred,r__8470));
} else
{return filter.call(null,pred,r__8470);
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
var walk__8474 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__8474.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__8472_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__8472_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__8478__8479 = to;
if(G__8478__8479)
{if((function (){var or__3824__auto____8480 = (G__8478__8479.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3824__auto____8480)
{return or__3824__auto____8480;
} else
{return G__8478__8479.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__8478__8479.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__8478__8479);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__8478__8479);
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
var G__8481__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__8481 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8481__delegate.call(this, f, c1, c2, c3, colls);
};
G__8481.cljs$lang$maxFixedArity = 4;
G__8481.cljs$lang$applyTo = (function (arglist__8482){
var f = cljs.core.first(arglist__8482);
var c1 = cljs.core.first(cljs.core.next(arglist__8482));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8482)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8482))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8482))));
return G__8481__delegate(f, c1, c2, c3, colls);
});
G__8481.cljs$lang$arity$variadic = G__8481__delegate;
return G__8481;
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
var temp__3974__auto____8489 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8489)
{var s__8490 = temp__3974__auto____8489;
var p__8491 = cljs.core.take.call(null,n,s__8490);
if((n === cljs.core.count.call(null,p__8491)))
{return cljs.core.cons.call(null,p__8491,partition.call(null,n,step,cljs.core.drop.call(null,step,s__8490)));
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
var temp__3974__auto____8492 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8492)
{var s__8493 = temp__3974__auto____8492;
var p__8494 = cljs.core.take.call(null,n,s__8493);
if((n === cljs.core.count.call(null,p__8494)))
{return cljs.core.cons.call(null,p__8494,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__8493)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__8494,pad)));
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
var sentinel__8499 = cljs.core.lookup_sentinel;
var m__8500 = m;
var ks__8501 = cljs.core.seq.call(null,ks);
while(true){
if(ks__8501)
{var m__8502 = cljs.core._lookup.call(null,m__8500,cljs.core.first.call(null,ks__8501),sentinel__8499);
if((sentinel__8499 === m__8502))
{return not_found;
} else
{{
var G__8503 = sentinel__8499;
var G__8504 = m__8502;
var G__8505 = cljs.core.next.call(null,ks__8501);
sentinel__8499 = G__8503;
m__8500 = G__8504;
ks__8501 = G__8505;
continue;
}
}
} else
{return m__8500;
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
cljs.core.assoc_in = (function assoc_in(m,p__8506,v){
var vec__8511__8512 = p__8506;
var k__8513 = cljs.core.nth.call(null,vec__8511__8512,0,null);
var ks__8514 = cljs.core.nthnext.call(null,vec__8511__8512,1);
if(cljs.core.truth_(ks__8514))
{return cljs.core.assoc.call(null,m,k__8513,assoc_in.call(null,cljs.core._lookup.call(null,m,k__8513,null),ks__8514,v));
} else
{return cljs.core.assoc.call(null,m,k__8513,v);
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
var update_in__delegate = function (m,p__8515,f,args){
var vec__8520__8521 = p__8515;
var k__8522 = cljs.core.nth.call(null,vec__8520__8521,0,null);
var ks__8523 = cljs.core.nthnext.call(null,vec__8520__8521,1);
if(cljs.core.truth_(ks__8523))
{return cljs.core.assoc.call(null,m,k__8522,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__8522,null),ks__8523,f,args));
} else
{return cljs.core.assoc.call(null,m,k__8522,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__8522,null),args));
}
};
var update_in = function (m,p__8515,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__8515, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__8524){
var m = cljs.core.first(arglist__8524);
var p__8515 = cljs.core.first(cljs.core.next(arglist__8524));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8524)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8524)));
return update_in__delegate(m, p__8515, f, args);
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
var this__8527 = this;
var h__2153__auto____8528 = this__8527.__hash;
if(!((h__2153__auto____8528 == null)))
{return h__2153__auto____8528;
} else
{var h__2153__auto____8529 = cljs.core.hash_coll.call(null,coll);
this__8527.__hash = h__2153__auto____8529;
return h__2153__auto____8529;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8530 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8531 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8532 = this;
var new_array__8533 = this__8532.array.slice();
(new_array__8533[k] = v);
return (new cljs.core.Vector(this__8532.meta,new_array__8533,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__8564 = null;
var G__8564__2 = (function (this_sym8534,k){
var this__8536 = this;
var this_sym8534__8537 = this;
var coll__8538 = this_sym8534__8537;
return coll__8538.cljs$core$ILookup$_lookup$arity$2(coll__8538,k);
});
var G__8564__3 = (function (this_sym8535,k,not_found){
var this__8536 = this;
var this_sym8535__8539 = this;
var coll__8540 = this_sym8535__8539;
return coll__8540.cljs$core$ILookup$_lookup$arity$3(coll__8540,k,not_found);
});
G__8564 = function(this_sym8535,k,not_found){
switch(arguments.length){
case 2:
return G__8564__2.call(this,this_sym8535,k);
case 3:
return G__8564__3.call(this,this_sym8535,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8564;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym8525,args8526){
var this__8541 = this;
return this_sym8525.call.apply(this_sym8525,[this_sym8525].concat(args8526.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8542 = this;
var new_array__8543 = this__8542.array.slice();
new_array__8543.push(o);
return (new cljs.core.Vector(this__8542.meta,new_array__8543,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__8544 = this;
var this__8545 = this;
return cljs.core.pr_str.call(null,this__8545);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8546 = this;
return cljs.core.ci_reduce.call(null,this__8546.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8547 = this;
return cljs.core.ci_reduce.call(null,this__8547.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8548 = this;
if((this__8548.array.length > 0))
{var vector_seq__8549 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__8548.array.length))
{return cljs.core.cons.call(null,(this__8548.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__8549.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8550 = this;
return this__8550.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8551 = this;
var count__8552 = this__8551.array.length;
if((count__8552 > 0))
{return (this__8551.array[(count__8552 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8553 = this;
if((this__8553.array.length > 0))
{var new_array__8554 = this__8553.array.slice();
new_array__8554.pop();
return (new cljs.core.Vector(this__8553.meta,new_array__8554,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8555 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8556 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8557 = this;
return (new cljs.core.Vector(meta,this__8557.array,this__8557.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8558 = this;
return this__8558.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8559 = this;
if((function (){var and__3822__auto____8560 = (0 <= n);
if(and__3822__auto____8560)
{return (n < this__8559.array.length);
} else
{return and__3822__auto____8560;
}
})())
{return (this__8559.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8561 = this;
if((function (){var and__3822__auto____8562 = (0 <= n);
if(and__3822__auto____8562)
{return (n < this__8561.array.length);
} else
{return and__3822__auto____8562;
}
})())
{return (this__8561.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8563 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8563.meta);
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
var cnt__8566 = pv.cnt;
if((cnt__8566 < 32))
{return 0;
} else
{return (((cnt__8566 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__8572 = level;
var ret__8573 = node;
while(true){
if((ll__8572 === 0))
{return ret__8573;
} else
{var embed__8574 = ret__8573;
var r__8575 = cljs.core.pv_fresh_node.call(null,edit);
var ___8576 = cljs.core.pv_aset.call(null,r__8575,0,embed__8574);
{
var G__8577 = (ll__8572 - 5);
var G__8578 = r__8575;
ll__8572 = G__8577;
ret__8573 = G__8578;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__8584 = cljs.core.pv_clone_node.call(null,parent);
var subidx__8585 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__8584,subidx__8585,tailnode);
return ret__8584;
} else
{var child__8586 = cljs.core.pv_aget.call(null,parent,subidx__8585);
if(!((child__8586 == null)))
{var node_to_insert__8587 = push_tail.call(null,pv,(level - 5),child__8586,tailnode);
cljs.core.pv_aset.call(null,ret__8584,subidx__8585,node_to_insert__8587);
return ret__8584;
} else
{var node_to_insert__8588 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__8584,subidx__8585,node_to_insert__8588);
return ret__8584;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____8592 = (0 <= i);
if(and__3822__auto____8592)
{return (i < pv.cnt);
} else
{return and__3822__auto____8592;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__8593 = pv.root;
var level__8594 = pv.shift;
while(true){
if((level__8594 > 0))
{{
var G__8595 = cljs.core.pv_aget.call(null,node__8593,((i >>> level__8594) & 31));
var G__8596 = (level__8594 - 5);
node__8593 = G__8595;
level__8594 = G__8596;
continue;
}
} else
{return node__8593.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__8599 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__8599,(i & 31),val);
return ret__8599;
} else
{var subidx__8600 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8599,subidx__8600,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8600),i,val));
return ret__8599;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__8606 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8607 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8606));
if((function (){var and__3822__auto____8608 = (new_child__8607 == null);
if(and__3822__auto____8608)
{return (subidx__8606 === 0);
} else
{return and__3822__auto____8608;
}
})())
{return null;
} else
{var ret__8609 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8609,subidx__8606,new_child__8607);
return ret__8609;
}
} else
{if((subidx__8606 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__8610 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8610,subidx__8606,null);
return ret__8610;
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
var this__8613 = this;
return (new cljs.core.TransientVector(this__8613.cnt,this__8613.shift,cljs.core.tv_editable_root.call(null,this__8613.root),cljs.core.tv_editable_tail.call(null,this__8613.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8614 = this;
var h__2153__auto____8615 = this__8614.__hash;
if(!((h__2153__auto____8615 == null)))
{return h__2153__auto____8615;
} else
{var h__2153__auto____8616 = cljs.core.hash_coll.call(null,coll);
this__8614.__hash = h__2153__auto____8616;
return h__2153__auto____8616;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8617 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8618 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8619 = this;
if((function (){var and__3822__auto____8620 = (0 <= k);
if(and__3822__auto____8620)
{return (k < this__8619.cnt);
} else
{return and__3822__auto____8620;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__8621 = this__8619.tail.slice();
(new_tail__8621[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__8619.meta,this__8619.cnt,this__8619.shift,this__8619.root,new_tail__8621,null));
} else
{return (new cljs.core.PersistentVector(this__8619.meta,this__8619.cnt,this__8619.shift,cljs.core.do_assoc.call(null,coll,this__8619.shift,this__8619.root,k,v),this__8619.tail,null));
}
} else
{if((k === this__8619.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__8619.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__8669 = null;
var G__8669__2 = (function (this_sym8622,k){
var this__8624 = this;
var this_sym8622__8625 = this;
var coll__8626 = this_sym8622__8625;
return coll__8626.cljs$core$ILookup$_lookup$arity$2(coll__8626,k);
});
var G__8669__3 = (function (this_sym8623,k,not_found){
var this__8624 = this;
var this_sym8623__8627 = this;
var coll__8628 = this_sym8623__8627;
return coll__8628.cljs$core$ILookup$_lookup$arity$3(coll__8628,k,not_found);
});
G__8669 = function(this_sym8623,k,not_found){
switch(arguments.length){
case 2:
return G__8669__2.call(this,this_sym8623,k);
case 3:
return G__8669__3.call(this,this_sym8623,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8669;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym8611,args8612){
var this__8629 = this;
return this_sym8611.call.apply(this_sym8611,[this_sym8611].concat(args8612.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__8630 = this;
var step_init__8631 = [0,init];
var i__8632 = 0;
while(true){
if((i__8632 < this__8630.cnt))
{var arr__8633 = cljs.core.array_for.call(null,v,i__8632);
var len__8634 = arr__8633.length;
var init__8638 = (function (){var j__8635 = 0;
var init__8636 = (step_init__8631[1]);
while(true){
if((j__8635 < len__8634))
{var init__8637 = f.call(null,init__8636,(j__8635 + i__8632),(arr__8633[j__8635]));
if(cljs.core.reduced_QMARK_.call(null,init__8637))
{return init__8637;
} else
{{
var G__8670 = (j__8635 + 1);
var G__8671 = init__8637;
j__8635 = G__8670;
init__8636 = G__8671;
continue;
}
}
} else
{(step_init__8631[0] = len__8634);
(step_init__8631[1] = init__8636);
return init__8636;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__8638))
{return cljs.core.deref.call(null,init__8638);
} else
{{
var G__8672 = (i__8632 + (step_init__8631[0]));
i__8632 = G__8672;
continue;
}
}
} else
{return (step_init__8631[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8639 = this;
if(((this__8639.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__8640 = this__8639.tail.slice();
new_tail__8640.push(o);
return (new cljs.core.PersistentVector(this__8639.meta,(this__8639.cnt + 1),this__8639.shift,this__8639.root,new_tail__8640,null));
} else
{var root_overflow_QMARK___8641 = ((this__8639.cnt >>> 5) > (1 << this__8639.shift));
var new_shift__8642 = ((root_overflow_QMARK___8641)?(this__8639.shift + 5):this__8639.shift);
var new_root__8644 = ((root_overflow_QMARK___8641)?(function (){var n_r__8643 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__8643,0,this__8639.root);
cljs.core.pv_aset.call(null,n_r__8643,1,cljs.core.new_path.call(null,null,this__8639.shift,(new cljs.core.VectorNode(null,this__8639.tail))));
return n_r__8643;
})():cljs.core.push_tail.call(null,coll,this__8639.shift,this__8639.root,(new cljs.core.VectorNode(null,this__8639.tail))));
return (new cljs.core.PersistentVector(this__8639.meta,(this__8639.cnt + 1),new_shift__8642,new_root__8644,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__8645 = this;
if((this__8645.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__8645.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__8646 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__8647 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__8648 = this;
var this__8649 = this;
return cljs.core.pr_str.call(null,this__8649);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8650 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8651 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8652 = this;
if((this__8652.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8653 = this;
return this__8653.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8654 = this;
if((this__8654.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__8654.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8655 = this;
if((this__8655.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8655.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8655.meta);
} else
{if((1 < (this__8655.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__8655.meta,(this__8655.cnt - 1),this__8655.shift,this__8655.root,this__8655.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__8656 = cljs.core.array_for.call(null,coll,(this__8655.cnt - 2));
var nr__8657 = cljs.core.pop_tail.call(null,coll,this__8655.shift,this__8655.root);
var new_root__8658 = (((nr__8657 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__8657);
var cnt_1__8659 = (this__8655.cnt - 1);
if((function (){var and__3822__auto____8660 = (5 < this__8655.shift);
if(and__3822__auto____8660)
{return (cljs.core.pv_aget.call(null,new_root__8658,1) == null);
} else
{return and__3822__auto____8660;
}
})())
{return (new cljs.core.PersistentVector(this__8655.meta,cnt_1__8659,(this__8655.shift - 5),cljs.core.pv_aget.call(null,new_root__8658,0),new_tail__8656,null));
} else
{return (new cljs.core.PersistentVector(this__8655.meta,cnt_1__8659,this__8655.shift,new_root__8658,new_tail__8656,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8661 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8662 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8663 = this;
return (new cljs.core.PersistentVector(meta,this__8663.cnt,this__8663.shift,this__8663.root,this__8663.tail,this__8663.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8664 = this;
return this__8664.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8665 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8666 = this;
if((function (){var and__3822__auto____8667 = (0 <= n);
if(and__3822__auto____8667)
{return (n < this__8666.cnt);
} else
{return and__3822__auto____8667;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8668 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8668.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__8673 = xs.length;
var xs__8674 = (((no_clone === true))?xs:xs.slice());
if((l__8673 < 32))
{return (new cljs.core.PersistentVector(null,l__8673,5,cljs.core.PersistentVector.EMPTY_NODE,xs__8674,null));
} else
{var node__8675 = xs__8674.slice(0,32);
var v__8676 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__8675,null));
var i__8677 = 32;
var out__8678 = cljs.core._as_transient.call(null,v__8676);
while(true){
if((i__8677 < l__8673))
{{
var G__8679 = (i__8677 + 1);
var G__8680 = cljs.core.conj_BANG_.call(null,out__8678,(xs__8674[i__8677]));
i__8677 = G__8679;
out__8678 = G__8680;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8678);
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
vector.cljs$lang$applyTo = (function (arglist__8681){
var args = cljs.core.seq(arglist__8681);;
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
var this__8682 = this;
if(((this__8682.off + 1) < this__8682.node.length))
{var s__8683 = cljs.core.chunked_seq.call(null,this__8682.vec,this__8682.node,this__8682.i,(this__8682.off + 1));
if((s__8683 == null))
{return null;
} else
{return s__8683;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8684 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8685 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8686 = this;
return (this__8686.node[this__8686.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8687 = this;
if(((this__8687.off + 1) < this__8687.node.length))
{var s__8688 = cljs.core.chunked_seq.call(null,this__8687.vec,this__8687.node,this__8687.i,(this__8687.off + 1));
if((s__8688 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8688;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__8689 = this;
var l__8690 = this__8689.node.length;
var s__8691 = ((((this__8689.i + l__8690) < cljs.core._count.call(null,this__8689.vec)))?cljs.core.chunked_seq.call(null,this__8689.vec,(this__8689.i + l__8690),0):null);
if((s__8691 == null))
{return null;
} else
{return s__8691;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8692 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__8693 = this;
return cljs.core.chunked_seq.call(null,this__8693.vec,this__8693.node,this__8693.i,this__8693.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__8694 = this;
return this__8694.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8695 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8695.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__8696 = this;
return cljs.core.array_chunk.call(null,this__8696.node,this__8696.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__8697 = this;
var l__8698 = this__8697.node.length;
var s__8699 = ((((this__8697.i + l__8698) < cljs.core._count.call(null,this__8697.vec)))?cljs.core.chunked_seq.call(null,this__8697.vec,(this__8697.i + l__8698),0):null);
if((s__8699 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8699;
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
var this__8702 = this;
var h__2153__auto____8703 = this__8702.__hash;
if(!((h__2153__auto____8703 == null)))
{return h__2153__auto____8703;
} else
{var h__2153__auto____8704 = cljs.core.hash_coll.call(null,coll);
this__8702.__hash = h__2153__auto____8704;
return h__2153__auto____8704;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8705 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8706 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__8707 = this;
var v_pos__8708 = (this__8707.start + key);
return (new cljs.core.Subvec(this__8707.meta,cljs.core._assoc.call(null,this__8707.v,v_pos__8708,val),this__8707.start,((this__8707.end > (v_pos__8708 + 1)) ? this__8707.end : (v_pos__8708 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__8734 = null;
var G__8734__2 = (function (this_sym8709,k){
var this__8711 = this;
var this_sym8709__8712 = this;
var coll__8713 = this_sym8709__8712;
return coll__8713.cljs$core$ILookup$_lookup$arity$2(coll__8713,k);
});
var G__8734__3 = (function (this_sym8710,k,not_found){
var this__8711 = this;
var this_sym8710__8714 = this;
var coll__8715 = this_sym8710__8714;
return coll__8715.cljs$core$ILookup$_lookup$arity$3(coll__8715,k,not_found);
});
G__8734 = function(this_sym8710,k,not_found){
switch(arguments.length){
case 2:
return G__8734__2.call(this,this_sym8710,k);
case 3:
return G__8734__3.call(this,this_sym8710,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8734;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym8700,args8701){
var this__8716 = this;
return this_sym8700.call.apply(this_sym8700,[this_sym8700].concat(args8701.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8717 = this;
return (new cljs.core.Subvec(this__8717.meta,cljs.core._assoc_n.call(null,this__8717.v,this__8717.end,o),this__8717.start,(this__8717.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__8718 = this;
var this__8719 = this;
return cljs.core.pr_str.call(null,this__8719);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__8720 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__8721 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8722 = this;
var subvec_seq__8723 = (function subvec_seq(i){
if((i === this__8722.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__8722.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__8723.call(null,this__8722.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8724 = this;
return (this__8724.end - this__8724.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8725 = this;
return cljs.core._nth.call(null,this__8725.v,(this__8725.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8726 = this;
if((this__8726.start === this__8726.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__8726.meta,this__8726.v,this__8726.start,(this__8726.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8727 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8728 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8729 = this;
return (new cljs.core.Subvec(meta,this__8729.v,this__8729.start,this__8729.end,this__8729.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8730 = this;
return this__8730.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8731 = this;
return cljs.core._nth.call(null,this__8731.v,(this__8731.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8732 = this;
return cljs.core._nth.call(null,this__8732.v,(this__8732.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8733 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8733.meta);
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
var ret__8736 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__8736,0,tl.length);
return ret__8736;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__8740 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__8741 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8740,subidx__8741,(((level === 5))?tail_node:(function (){var child__8742 = cljs.core.pv_aget.call(null,ret__8740,subidx__8741);
if(!((child__8742 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__8742,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__8740;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__8747 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__8748 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8749 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__8747,subidx__8748));
if((function (){var and__3822__auto____8750 = (new_child__8749 == null);
if(and__3822__auto____8750)
{return (subidx__8748 === 0);
} else
{return and__3822__auto____8750;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__8747,subidx__8748,new_child__8749);
return node__8747;
}
} else
{if((subidx__8748 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__8747,subidx__8748,null);
return node__8747;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____8755 = (0 <= i);
if(and__3822__auto____8755)
{return (i < tv.cnt);
} else
{return and__3822__auto____8755;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__8756 = tv.root;
var node__8757 = root__8756;
var level__8758 = tv.shift;
while(true){
if((level__8758 > 0))
{{
var G__8759 = cljs.core.tv_ensure_editable.call(null,root__8756.edit,cljs.core.pv_aget.call(null,node__8757,((i >>> level__8758) & 31)));
var G__8760 = (level__8758 - 5);
node__8757 = G__8759;
level__8758 = G__8760;
continue;
}
} else
{return node__8757.arr;
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
var G__8800 = null;
var G__8800__2 = (function (this_sym8763,k){
var this__8765 = this;
var this_sym8763__8766 = this;
var coll__8767 = this_sym8763__8766;
return coll__8767.cljs$core$ILookup$_lookup$arity$2(coll__8767,k);
});
var G__8800__3 = (function (this_sym8764,k,not_found){
var this__8765 = this;
var this_sym8764__8768 = this;
var coll__8769 = this_sym8764__8768;
return coll__8769.cljs$core$ILookup$_lookup$arity$3(coll__8769,k,not_found);
});
G__8800 = function(this_sym8764,k,not_found){
switch(arguments.length){
case 2:
return G__8800__2.call(this,this_sym8764,k);
case 3:
return G__8800__3.call(this,this_sym8764,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8800;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym8761,args8762){
var this__8770 = this;
return this_sym8761.call.apply(this_sym8761,[this_sym8761].concat(args8762.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8771 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8772 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8773 = this;
if(this__8773.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8774 = this;
if((function (){var and__3822__auto____8775 = (0 <= n);
if(and__3822__auto____8775)
{return (n < this__8774.cnt);
} else
{return and__3822__auto____8775;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8776 = this;
if(this__8776.root.edit)
{return this__8776.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__8777 = this;
if(this__8777.root.edit)
{if((function (){var and__3822__auto____8778 = (0 <= n);
if(and__3822__auto____8778)
{return (n < this__8777.cnt);
} else
{return and__3822__auto____8778;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__8777.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__8783 = (function go(level,node){
var node__8781 = cljs.core.tv_ensure_editable.call(null,this__8777.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__8781,(n & 31),val);
return node__8781;
} else
{var subidx__8782 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__8781,subidx__8782,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__8781,subidx__8782)));
return node__8781;
}
}).call(null,this__8777.shift,this__8777.root);
this__8777.root = new_root__8783;
return tcoll;
}
} else
{if((n === this__8777.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__8777.cnt)].join('')));
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
var this__8784 = this;
if(this__8784.root.edit)
{if((this__8784.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8784.cnt))
{this__8784.cnt = 0;
return tcoll;
} else
{if((((this__8784.cnt - 1) & 31) > 0))
{this__8784.cnt = (this__8784.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__8785 = cljs.core.editable_array_for.call(null,tcoll,(this__8784.cnt - 2));
var new_root__8787 = (function (){var nr__8786 = cljs.core.tv_pop_tail.call(null,tcoll,this__8784.shift,this__8784.root);
if(!((nr__8786 == null)))
{return nr__8786;
} else
{return (new cljs.core.VectorNode(this__8784.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____8788 = (5 < this__8784.shift);
if(and__3822__auto____8788)
{return (cljs.core.pv_aget.call(null,new_root__8787,1) == null);
} else
{return and__3822__auto____8788;
}
})())
{var new_root__8789 = cljs.core.tv_ensure_editable.call(null,this__8784.root.edit,cljs.core.pv_aget.call(null,new_root__8787,0));
this__8784.root = new_root__8789;
this__8784.shift = (this__8784.shift - 5);
this__8784.cnt = (this__8784.cnt - 1);
this__8784.tail = new_tail__8785;
return tcoll;
} else
{this__8784.root = new_root__8787;
this__8784.cnt = (this__8784.cnt - 1);
this__8784.tail = new_tail__8785;
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
var this__8790 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8791 = this;
if(this__8791.root.edit)
{if(((this__8791.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__8791.tail[(this__8791.cnt & 31)] = o);
this__8791.cnt = (this__8791.cnt + 1);
return tcoll;
} else
{var tail_node__8792 = (new cljs.core.VectorNode(this__8791.root.edit,this__8791.tail));
var new_tail__8793 = cljs.core.make_array.call(null,32);
(new_tail__8793[0] = o);
this__8791.tail = new_tail__8793;
if(((this__8791.cnt >>> 5) > (1 << this__8791.shift)))
{var new_root_array__8794 = cljs.core.make_array.call(null,32);
var new_shift__8795 = (this__8791.shift + 5);
(new_root_array__8794[0] = this__8791.root);
(new_root_array__8794[1] = cljs.core.new_path.call(null,this__8791.root.edit,this__8791.shift,tail_node__8792));
this__8791.root = (new cljs.core.VectorNode(this__8791.root.edit,new_root_array__8794));
this__8791.shift = new_shift__8795;
this__8791.cnt = (this__8791.cnt + 1);
return tcoll;
} else
{var new_root__8796 = cljs.core.tv_push_tail.call(null,tcoll,this__8791.shift,this__8791.root,tail_node__8792);
this__8791.root = new_root__8796;
this__8791.cnt = (this__8791.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8797 = this;
if(this__8797.root.edit)
{this__8797.root.edit = null;
var len__8798 = (this__8797.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__8799 = cljs.core.make_array.call(null,len__8798);
cljs.core.array_copy.call(null,this__8797.tail,0,trimmed_tail__8799,0,len__8798);
return (new cljs.core.PersistentVector(null,this__8797.cnt,this__8797.shift,this__8797.root,trimmed_tail__8799,null));
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
var this__8801 = this;
var h__2153__auto____8802 = this__8801.__hash;
if(!((h__2153__auto____8802 == null)))
{return h__2153__auto____8802;
} else
{var h__2153__auto____8803 = cljs.core.hash_coll.call(null,coll);
this__8801.__hash = h__2153__auto____8803;
return h__2153__auto____8803;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8804 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__8805 = this;
var this__8806 = this;
return cljs.core.pr_str.call(null,this__8806);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8807 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8808 = this;
return cljs.core._first.call(null,this__8808.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8809 = this;
var temp__3971__auto____8810 = cljs.core.next.call(null,this__8809.front);
if(temp__3971__auto____8810)
{var f1__8811 = temp__3971__auto____8810;
return (new cljs.core.PersistentQueueSeq(this__8809.meta,f1__8811,this__8809.rear,null));
} else
{if((this__8809.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__8809.meta,this__8809.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8812 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8813 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__8813.front,this__8813.rear,this__8813.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8814 = this;
return this__8814.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8815 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8815.meta);
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
var this__8816 = this;
var h__2153__auto____8817 = this__8816.__hash;
if(!((h__2153__auto____8817 == null)))
{return h__2153__auto____8817;
} else
{var h__2153__auto____8818 = cljs.core.hash_coll.call(null,coll);
this__8816.__hash = h__2153__auto____8818;
return h__2153__auto____8818;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8819 = this;
if(cljs.core.truth_(this__8819.front))
{return (new cljs.core.PersistentQueue(this__8819.meta,(this__8819.count + 1),this__8819.front,cljs.core.conj.call(null,(function (){var or__3824__auto____8820 = this__8819.rear;
if(cljs.core.truth_(or__3824__auto____8820))
{return or__3824__auto____8820;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__8819.meta,(this__8819.count + 1),cljs.core.conj.call(null,this__8819.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__8821 = this;
var this__8822 = this;
return cljs.core.pr_str.call(null,this__8822);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8823 = this;
var rear__8824 = cljs.core.seq.call(null,this__8823.rear);
if(cljs.core.truth_((function (){var or__3824__auto____8825 = this__8823.front;
if(cljs.core.truth_(or__3824__auto____8825))
{return or__3824__auto____8825;
} else
{return rear__8824;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__8823.front,cljs.core.seq.call(null,rear__8824),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8826 = this;
return this__8826.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8827 = this;
return cljs.core._first.call(null,this__8827.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8828 = this;
if(cljs.core.truth_(this__8828.front))
{var temp__3971__auto____8829 = cljs.core.next.call(null,this__8828.front);
if(temp__3971__auto____8829)
{var f1__8830 = temp__3971__auto____8829;
return (new cljs.core.PersistentQueue(this__8828.meta,(this__8828.count - 1),f1__8830,this__8828.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__8828.meta,(this__8828.count - 1),cljs.core.seq.call(null,this__8828.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8831 = this;
return cljs.core.first.call(null,this__8831.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8832 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8833 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8834 = this;
return (new cljs.core.PersistentQueue(meta,this__8834.count,this__8834.front,this__8834.rear,this__8834.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8835 = this;
return this__8835.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8836 = this;
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
var this__8837 = this;
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
var len__8840 = array.length;
var i__8841 = 0;
while(true){
if((i__8841 < len__8840))
{if((k === (array[i__8841])))
{return i__8841;
} else
{{
var G__8842 = (i__8841 + incr);
i__8841 = G__8842;
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
var a__8845 = cljs.core.hash.call(null,a);
var b__8846 = cljs.core.hash.call(null,b);
if((a__8845 < b__8846))
{return -1;
} else
{if((a__8845 > b__8846))
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
var ks__8854 = m.keys;
var len__8855 = ks__8854.length;
var so__8856 = m.strobj;
var out__8857 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__8858 = 0;
var out__8859 = cljs.core.transient$.call(null,out__8857);
while(true){
if((i__8858 < len__8855))
{var k__8860 = (ks__8854[i__8858]);
{
var G__8861 = (i__8858 + 1);
var G__8862 = cljs.core.assoc_BANG_.call(null,out__8859,k__8860,(so__8856[k__8860]));
i__8858 = G__8861;
out__8859 = G__8862;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__8859,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__8868 = {};
var l__8869 = ks.length;
var i__8870 = 0;
while(true){
if((i__8870 < l__8869))
{var k__8871 = (ks[i__8870]);
(new_obj__8868[k__8871] = (obj[k__8871]));
{
var G__8872 = (i__8870 + 1);
i__8870 = G__8872;
continue;
}
} else
{}
break;
}
return new_obj__8868;
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
var this__8875 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8876 = this;
var h__2153__auto____8877 = this__8876.__hash;
if(!((h__2153__auto____8877 == null)))
{return h__2153__auto____8877;
} else
{var h__2153__auto____8878 = cljs.core.hash_imap.call(null,coll);
this__8876.__hash = h__2153__auto____8878;
return h__2153__auto____8878;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8879 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8880 = this;
if((function (){var and__3822__auto____8881 = goog.isString(k);
if(and__3822__auto____8881)
{return !((cljs.core.scan_array.call(null,1,k,this__8880.keys) == null));
} else
{return and__3822__auto____8881;
}
})())
{return (this__8880.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8882 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____8883 = (this__8882.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____8883)
{return or__3824__auto____8883;
} else
{return (this__8882.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__8882.keys) == null)))
{var new_strobj__8884 = cljs.core.obj_clone.call(null,this__8882.strobj,this__8882.keys);
(new_strobj__8884[k] = v);
return (new cljs.core.ObjMap(this__8882.meta,this__8882.keys,new_strobj__8884,(this__8882.update_count + 1),null));
} else
{var new_strobj__8885 = cljs.core.obj_clone.call(null,this__8882.strobj,this__8882.keys);
var new_keys__8886 = this__8882.keys.slice();
(new_strobj__8885[k] = v);
new_keys__8886.push(k);
return (new cljs.core.ObjMap(this__8882.meta,new_keys__8886,new_strobj__8885,(this__8882.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8887 = this;
if((function (){var and__3822__auto____8888 = goog.isString(k);
if(and__3822__auto____8888)
{return !((cljs.core.scan_array.call(null,1,k,this__8887.keys) == null));
} else
{return and__3822__auto____8888;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__8910 = null;
var G__8910__2 = (function (this_sym8889,k){
var this__8891 = this;
var this_sym8889__8892 = this;
var coll__8893 = this_sym8889__8892;
return coll__8893.cljs$core$ILookup$_lookup$arity$2(coll__8893,k);
});
var G__8910__3 = (function (this_sym8890,k,not_found){
var this__8891 = this;
var this_sym8890__8894 = this;
var coll__8895 = this_sym8890__8894;
return coll__8895.cljs$core$ILookup$_lookup$arity$3(coll__8895,k,not_found);
});
G__8910 = function(this_sym8890,k,not_found){
switch(arguments.length){
case 2:
return G__8910__2.call(this,this_sym8890,k);
case 3:
return G__8910__3.call(this,this_sym8890,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8910;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym8873,args8874){
var this__8896 = this;
return this_sym8873.call.apply(this_sym8873,[this_sym8873].concat(args8874.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8897 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__8898 = this;
var this__8899 = this;
return cljs.core.pr_str.call(null,this__8899);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8900 = this;
if((this__8900.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__8863_SHARP_){
return cljs.core.vector.call(null,p1__8863_SHARP_,(this__8900.strobj[p1__8863_SHARP_]));
}),this__8900.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8901 = this;
return this__8901.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8902 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8903 = this;
return (new cljs.core.ObjMap(meta,this__8903.keys,this__8903.strobj,this__8903.update_count,this__8903.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8904 = this;
return this__8904.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8905 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__8905.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8906 = this;
if((function (){var and__3822__auto____8907 = goog.isString(k);
if(and__3822__auto____8907)
{return !((cljs.core.scan_array.call(null,1,k,this__8906.keys) == null));
} else
{return and__3822__auto____8907;
}
})())
{var new_keys__8908 = this__8906.keys.slice();
var new_strobj__8909 = cljs.core.obj_clone.call(null,this__8906.strobj,this__8906.keys);
new_keys__8908.splice(cljs.core.scan_array.call(null,1,k,new_keys__8908),1);
cljs.core.js_delete.call(null,new_strobj__8909,k);
return (new cljs.core.ObjMap(this__8906.meta,new_keys__8908,new_strobj__8909,(this__8906.update_count + 1),null));
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
var this__8914 = this;
var h__2153__auto____8915 = this__8914.__hash;
if(!((h__2153__auto____8915 == null)))
{return h__2153__auto____8915;
} else
{var h__2153__auto____8916 = cljs.core.hash_imap.call(null,coll);
this__8914.__hash = h__2153__auto____8916;
return h__2153__auto____8916;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8917 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8918 = this;
var bucket__8919 = (this__8918.hashobj[cljs.core.hash.call(null,k)]);
var i__8920 = (cljs.core.truth_(bucket__8919)?cljs.core.scan_array.call(null,2,k,bucket__8919):null);
if(cljs.core.truth_(i__8920))
{return (bucket__8919[(i__8920 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8921 = this;
var h__8922 = cljs.core.hash.call(null,k);
var bucket__8923 = (this__8921.hashobj[h__8922]);
if(cljs.core.truth_(bucket__8923))
{var new_bucket__8924 = bucket__8923.slice();
var new_hashobj__8925 = goog.object.clone(this__8921.hashobj);
(new_hashobj__8925[h__8922] = new_bucket__8924);
var temp__3971__auto____8926 = cljs.core.scan_array.call(null,2,k,new_bucket__8924);
if(cljs.core.truth_(temp__3971__auto____8926))
{var i__8927 = temp__3971__auto____8926;
(new_bucket__8924[(i__8927 + 1)] = v);
return (new cljs.core.HashMap(this__8921.meta,this__8921.count,new_hashobj__8925,null));
} else
{new_bucket__8924.push(k,v);
return (new cljs.core.HashMap(this__8921.meta,(this__8921.count + 1),new_hashobj__8925,null));
}
} else
{var new_hashobj__8928 = goog.object.clone(this__8921.hashobj);
(new_hashobj__8928[h__8922] = [k,v]);
return (new cljs.core.HashMap(this__8921.meta,(this__8921.count + 1),new_hashobj__8928,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8929 = this;
var bucket__8930 = (this__8929.hashobj[cljs.core.hash.call(null,k)]);
var i__8931 = (cljs.core.truth_(bucket__8930)?cljs.core.scan_array.call(null,2,k,bucket__8930):null);
if(cljs.core.truth_(i__8931))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__8956 = null;
var G__8956__2 = (function (this_sym8932,k){
var this__8934 = this;
var this_sym8932__8935 = this;
var coll__8936 = this_sym8932__8935;
return coll__8936.cljs$core$ILookup$_lookup$arity$2(coll__8936,k);
});
var G__8956__3 = (function (this_sym8933,k,not_found){
var this__8934 = this;
var this_sym8933__8937 = this;
var coll__8938 = this_sym8933__8937;
return coll__8938.cljs$core$ILookup$_lookup$arity$3(coll__8938,k,not_found);
});
G__8956 = function(this_sym8933,k,not_found){
switch(arguments.length){
case 2:
return G__8956__2.call(this,this_sym8933,k);
case 3:
return G__8956__3.call(this,this_sym8933,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8956;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym8912,args8913){
var this__8939 = this;
return this_sym8912.call.apply(this_sym8912,[this_sym8912].concat(args8913.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8940 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__8941 = this;
var this__8942 = this;
return cljs.core.pr_str.call(null,this__8942);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8943 = this;
if((this__8943.count > 0))
{var hashes__8944 = cljs.core.js_keys.call(null,this__8943.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__8911_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__8943.hashobj[p1__8911_SHARP_])));
}),hashes__8944);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8945 = this;
return this__8945.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8946 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8947 = this;
return (new cljs.core.HashMap(meta,this__8947.count,this__8947.hashobj,this__8947.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8948 = this;
return this__8948.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8949 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__8949.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8950 = this;
var h__8951 = cljs.core.hash.call(null,k);
var bucket__8952 = (this__8950.hashobj[h__8951]);
var i__8953 = (cljs.core.truth_(bucket__8952)?cljs.core.scan_array.call(null,2,k,bucket__8952):null);
if(cljs.core.not.call(null,i__8953))
{return coll;
} else
{var new_hashobj__8954 = goog.object.clone(this__8950.hashobj);
if((3 > bucket__8952.length))
{cljs.core.js_delete.call(null,new_hashobj__8954,h__8951);
} else
{var new_bucket__8955 = bucket__8952.slice();
new_bucket__8955.splice(i__8953,2);
(new_hashobj__8954[h__8951] = new_bucket__8955);
}
return (new cljs.core.HashMap(this__8950.meta,(this__8950.count - 1),new_hashobj__8954,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__8957 = ks.length;
var i__8958 = 0;
var out__8959 = cljs.core.HashMap.EMPTY;
while(true){
if((i__8958 < len__8957))
{{
var G__8960 = (i__8958 + 1);
var G__8961 = cljs.core.assoc.call(null,out__8959,(ks[i__8958]),(vs[i__8958]));
i__8958 = G__8960;
out__8959 = G__8961;
continue;
}
} else
{return out__8959;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__8965 = m.arr;
var len__8966 = arr__8965.length;
var i__8967 = 0;
while(true){
if((len__8966 <= i__8967))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__8965[i__8967]),k))
{return i__8967;
} else
{if("\uFDD0'else")
{{
var G__8968 = (i__8967 + 2);
i__8967 = G__8968;
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
var this__8971 = this;
return (new cljs.core.TransientArrayMap({},this__8971.arr.length,this__8971.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8972 = this;
var h__2153__auto____8973 = this__8972.__hash;
if(!((h__2153__auto____8973 == null)))
{return h__2153__auto____8973;
} else
{var h__2153__auto____8974 = cljs.core.hash_imap.call(null,coll);
this__8972.__hash = h__2153__auto____8974;
return h__2153__auto____8974;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8975 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8976 = this;
var idx__8977 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8977 === -1))
{return not_found;
} else
{return (this__8976.arr[(idx__8977 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8978 = this;
var idx__8979 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8979 === -1))
{if((this__8978.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__8978.meta,(this__8978.cnt + 1),(function (){var G__8980__8981 = this__8978.arr.slice();
G__8980__8981.push(k);
G__8980__8981.push(v);
return G__8980__8981;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__8978.arr[(idx__8979 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__8978.meta,this__8978.cnt,(function (){var G__8982__8983 = this__8978.arr.slice();
(G__8982__8983[(idx__8979 + 1)] = v);
return G__8982__8983;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8984 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__9016 = null;
var G__9016__2 = (function (this_sym8985,k){
var this__8987 = this;
var this_sym8985__8988 = this;
var coll__8989 = this_sym8985__8988;
return coll__8989.cljs$core$ILookup$_lookup$arity$2(coll__8989,k);
});
var G__9016__3 = (function (this_sym8986,k,not_found){
var this__8987 = this;
var this_sym8986__8990 = this;
var coll__8991 = this_sym8986__8990;
return coll__8991.cljs$core$ILookup$_lookup$arity$3(coll__8991,k,not_found);
});
G__9016 = function(this_sym8986,k,not_found){
switch(arguments.length){
case 2:
return G__9016__2.call(this,this_sym8986,k);
case 3:
return G__9016__3.call(this,this_sym8986,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9016;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym8969,args8970){
var this__8992 = this;
return this_sym8969.call.apply(this_sym8969,[this_sym8969].concat(args8970.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__8993 = this;
var len__8994 = this__8993.arr.length;
var i__8995 = 0;
var init__8996 = init;
while(true){
if((i__8995 < len__8994))
{var init__8997 = f.call(null,init__8996,(this__8993.arr[i__8995]),(this__8993.arr[(i__8995 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__8997))
{return cljs.core.deref.call(null,init__8997);
} else
{{
var G__9017 = (i__8995 + 2);
var G__9018 = init__8997;
i__8995 = G__9017;
init__8996 = G__9018;
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
var this__8998 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__8999 = this;
var this__9000 = this;
return cljs.core.pr_str.call(null,this__9000);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9001 = this;
if((this__9001.cnt > 0))
{var len__9002 = this__9001.arr.length;
var array_map_seq__9003 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__9002))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__9001.arr[i]),(this__9001.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__9003.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9004 = this;
return this__9004.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9005 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9006 = this;
return (new cljs.core.PersistentArrayMap(meta,this__9006.cnt,this__9006.arr,this__9006.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9007 = this;
return this__9007.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9008 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9008.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9009 = this;
var idx__9010 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__9010 >= 0))
{var len__9011 = this__9009.arr.length;
var new_len__9012 = (len__9011 - 2);
if((new_len__9012 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__9013 = cljs.core.make_array.call(null,new_len__9012);
var s__9014 = 0;
var d__9015 = 0;
while(true){
if((s__9014 >= len__9011))
{return (new cljs.core.PersistentArrayMap(this__9009.meta,(this__9009.cnt - 1),new_arr__9013,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__9009.arr[s__9014])))
{{
var G__9019 = (s__9014 + 2);
var G__9020 = d__9015;
s__9014 = G__9019;
d__9015 = G__9020;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__9013[d__9015] = (this__9009.arr[s__9014]));
(new_arr__9013[(d__9015 + 1)] = (this__9009.arr[(s__9014 + 1)]));
{
var G__9021 = (s__9014 + 2);
var G__9022 = (d__9015 + 2);
s__9014 = G__9021;
d__9015 = G__9022;
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
var len__9023 = cljs.core.count.call(null,ks);
var i__9024 = 0;
var out__9025 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__9024 < len__9023))
{{
var G__9026 = (i__9024 + 1);
var G__9027 = cljs.core.assoc_BANG_.call(null,out__9025,(ks[i__9024]),(vs[i__9024]));
i__9024 = G__9026;
out__9025 = G__9027;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9025);
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
var this__9028 = this;
if(cljs.core.truth_(this__9028.editable_QMARK_))
{var idx__9029 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__9029 >= 0))
{(this__9028.arr[idx__9029] = (this__9028.arr[(this__9028.len - 2)]));
(this__9028.arr[(idx__9029 + 1)] = (this__9028.arr[(this__9028.len - 1)]));
var G__9030__9031 = this__9028.arr;
G__9030__9031.pop();
G__9030__9031.pop();
G__9030__9031;
this__9028.len = (this__9028.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9032 = this;
if(cljs.core.truth_(this__9032.editable_QMARK_))
{var idx__9033 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__9033 === -1))
{if(((this__9032.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__9032.len = (this__9032.len + 2);
this__9032.arr.push(key);
this__9032.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__9032.len,this__9032.arr),key,val);
}
} else
{if((val === (this__9032.arr[(idx__9033 + 1)])))
{return tcoll;
} else
{(this__9032.arr[(idx__9033 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9034 = this;
if(cljs.core.truth_(this__9034.editable_QMARK_))
{if((function (){var G__9035__9036 = o;
if(G__9035__9036)
{if((function (){var or__3824__auto____9037 = (G__9035__9036.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____9037)
{return or__3824__auto____9037;
} else
{return G__9035__9036.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__9035__9036.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9035__9036);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9035__9036);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__9038 = cljs.core.seq.call(null,o);
var tcoll__9039 = tcoll;
while(true){
var temp__3971__auto____9040 = cljs.core.first.call(null,es__9038);
if(cljs.core.truth_(temp__3971__auto____9040))
{var e__9041 = temp__3971__auto____9040;
{
var G__9047 = cljs.core.next.call(null,es__9038);
var G__9048 = tcoll__9039.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__9039,cljs.core.key.call(null,e__9041),cljs.core.val.call(null,e__9041));
es__9038 = G__9047;
tcoll__9039 = G__9048;
continue;
}
} else
{return tcoll__9039;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9042 = this;
if(cljs.core.truth_(this__9042.editable_QMARK_))
{this__9042.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__9042.len,2),this__9042.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__9043 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__9044 = this;
if(cljs.core.truth_(this__9044.editable_QMARK_))
{var idx__9045 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__9045 === -1))
{return not_found;
} else
{return (this__9044.arr[(idx__9045 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9046 = this;
if(cljs.core.truth_(this__9046.editable_QMARK_))
{return cljs.core.quot.call(null,this__9046.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
void 0;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__9051 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__9052 = 0;
while(true){
if((i__9052 < len))
{{
var G__9053 = cljs.core.assoc_BANG_.call(null,out__9051,(arr[i__9052]),(arr[(i__9052 + 1)]));
var G__9054 = (i__9052 + 2);
out__9051 = G__9053;
i__9052 = G__9054;
continue;
}
} else
{return out__9051;
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
var G__9059__9060 = arr.slice();
(G__9059__9060[i] = a);
return G__9059__9060;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__9061__9062 = arr.slice();
(G__9061__9062[i] = a);
(G__9061__9062[j] = b);
return G__9061__9062;
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
var new_arr__9064 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__9064,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__9064,(2 * i),(new_arr__9064.length - (2 * i)));
return new_arr__9064;
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
var editable__9067 = inode.ensure_editable(edit);
(editable__9067.arr[i] = a);
return editable__9067;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__9068 = inode.ensure_editable(edit);
(editable__9068.arr[i] = a);
(editable__9068.arr[j] = b);
return editable__9068;
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
var len__9075 = arr.length;
var i__9076 = 0;
var init__9077 = init;
while(true){
if((i__9076 < len__9075))
{var init__9080 = (function (){var k__9078 = (arr[i__9076]);
if(!((k__9078 == null)))
{return f.call(null,init__9077,k__9078,(arr[(i__9076 + 1)]));
} else
{var node__9079 = (arr[(i__9076 + 1)]);
if(!((node__9079 == null)))
{return node__9079.kv_reduce(f,init__9077);
} else
{return init__9077;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__9080))
{return cljs.core.deref.call(null,init__9080);
} else
{{
var G__9081 = (i__9076 + 2);
var G__9082 = init__9080;
i__9076 = G__9081;
init__9077 = G__9082;
continue;
}
}
} else
{return init__9077;
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
var this__9083 = this;
var inode__9084 = this;
if((this__9083.bitmap === bit))
{return null;
} else
{var editable__9085 = inode__9084.ensure_editable(e);
var earr__9086 = editable__9085.arr;
var len__9087 = earr__9086.length;
editable__9085.bitmap = (bit ^ editable__9085.bitmap);
cljs.core.array_copy.call(null,earr__9086,(2 * (i + 1)),earr__9086,(2 * i),(len__9087 - (2 * (i + 1))));
(earr__9086[(len__9087 - 2)] = null);
(earr__9086[(len__9087 - 1)] = null);
return editable__9085;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9088 = this;
var inode__9089 = this;
var bit__9090 = (1 << ((hash >>> shift) & 0x01f));
var idx__9091 = cljs.core.bitmap_indexed_node_index.call(null,this__9088.bitmap,bit__9090);
if(((this__9088.bitmap & bit__9090) === 0))
{var n__9092 = cljs.core.bit_count.call(null,this__9088.bitmap);
if(((2 * n__9092) < this__9088.arr.length))
{var editable__9093 = inode__9089.ensure_editable(edit);
var earr__9094 = editable__9093.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__9094,(2 * idx__9091),earr__9094,(2 * (idx__9091 + 1)),(2 * (n__9092 - idx__9091)));
(earr__9094[(2 * idx__9091)] = key);
(earr__9094[((2 * idx__9091) + 1)] = val);
editable__9093.bitmap = (editable__9093.bitmap | bit__9090);
return editable__9093;
} else
{if((n__9092 >= 16))
{var nodes__9095 = cljs.core.make_array.call(null,32);
var jdx__9096 = ((hash >>> shift) & 0x01f);
(nodes__9095[jdx__9096] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__9097 = 0;
var j__9098 = 0;
while(true){
if((i__9097 < 32))
{if((((this__9088.bitmap >>> i__9097) & 1) === 0))
{{
var G__9151 = (i__9097 + 1);
var G__9152 = j__9098;
i__9097 = G__9151;
j__9098 = G__9152;
continue;
}
} else
{(nodes__9095[i__9097] = ((!(((this__9088.arr[j__9098]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__9088.arr[j__9098])),(this__9088.arr[j__9098]),(this__9088.arr[(j__9098 + 1)]),added_leaf_QMARK_):(this__9088.arr[(j__9098 + 1)])));
{
var G__9153 = (i__9097 + 1);
var G__9154 = (j__9098 + 2);
i__9097 = G__9153;
j__9098 = G__9154;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__9092 + 1),nodes__9095));
} else
{if("\uFDD0'else")
{var new_arr__9099 = cljs.core.make_array.call(null,(2 * (n__9092 + 4)));
cljs.core.array_copy.call(null,this__9088.arr,0,new_arr__9099,0,(2 * idx__9091));
(new_arr__9099[(2 * idx__9091)] = key);
(new_arr__9099[((2 * idx__9091) + 1)] = val);
cljs.core.array_copy.call(null,this__9088.arr,(2 * idx__9091),new_arr__9099,(2 * (idx__9091 + 1)),(2 * (n__9092 - idx__9091)));
added_leaf_QMARK_.val = true;
var editable__9100 = inode__9089.ensure_editable(edit);
editable__9100.arr = new_arr__9099;
editable__9100.bitmap = (editable__9100.bitmap | bit__9090);
return editable__9100;
} else
{return null;
}
}
}
} else
{var key_or_nil__9101 = (this__9088.arr[(2 * idx__9091)]);
var val_or_node__9102 = (this__9088.arr[((2 * idx__9091) + 1)]);
if((key_or_nil__9101 == null))
{var n__9103 = val_or_node__9102.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9103 === val_or_node__9102))
{return inode__9089;
} else
{return cljs.core.edit_and_set.call(null,inode__9089,edit,((2 * idx__9091) + 1),n__9103);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9101))
{if((val === val_or_node__9102))
{return inode__9089;
} else
{return cljs.core.edit_and_set.call(null,inode__9089,edit,((2 * idx__9091) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__9089,edit,(2 * idx__9091),null,((2 * idx__9091) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__9101,val_or_node__9102,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__9104 = this;
var inode__9105 = this;
return cljs.core.create_inode_seq.call(null,this__9104.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9106 = this;
var inode__9107 = this;
var bit__9108 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9106.bitmap & bit__9108) === 0))
{return inode__9107;
} else
{var idx__9109 = cljs.core.bitmap_indexed_node_index.call(null,this__9106.bitmap,bit__9108);
var key_or_nil__9110 = (this__9106.arr[(2 * idx__9109)]);
var val_or_node__9111 = (this__9106.arr[((2 * idx__9109) + 1)]);
if((key_or_nil__9110 == null))
{var n__9112 = val_or_node__9111.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__9112 === val_or_node__9111))
{return inode__9107;
} else
{if(!((n__9112 == null)))
{return cljs.core.edit_and_set.call(null,inode__9107,edit,((2 * idx__9109) + 1),n__9112);
} else
{if((this__9106.bitmap === bit__9108))
{return null;
} else
{if("\uFDD0'else")
{return inode__9107.edit_and_remove_pair(edit,bit__9108,idx__9109);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9110))
{(removed_leaf_QMARK_[0] = true);
return inode__9107.edit_and_remove_pair(edit,bit__9108,idx__9109);
} else
{if("\uFDD0'else")
{return inode__9107;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__9113 = this;
var inode__9114 = this;
if((e === this__9113.edit))
{return inode__9114;
} else
{var n__9115 = cljs.core.bit_count.call(null,this__9113.bitmap);
var new_arr__9116 = cljs.core.make_array.call(null,(((n__9115 < 0))?4:(2 * (n__9115 + 1))));
cljs.core.array_copy.call(null,this__9113.arr,0,new_arr__9116,0,(2 * n__9115));
return (new cljs.core.BitmapIndexedNode(e,this__9113.bitmap,new_arr__9116));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__9117 = this;
var inode__9118 = this;
return cljs.core.inode_kv_reduce.call(null,this__9117.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9119 = this;
var inode__9120 = this;
var bit__9121 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9119.bitmap & bit__9121) === 0))
{return not_found;
} else
{var idx__9122 = cljs.core.bitmap_indexed_node_index.call(null,this__9119.bitmap,bit__9121);
var key_or_nil__9123 = (this__9119.arr[(2 * idx__9122)]);
var val_or_node__9124 = (this__9119.arr[((2 * idx__9122) + 1)]);
if((key_or_nil__9123 == null))
{return val_or_node__9124.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9123))
{return cljs.core.PersistentVector.fromArray([key_or_nil__9123,val_or_node__9124], true);
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
var this__9125 = this;
var inode__9126 = this;
var bit__9127 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9125.bitmap & bit__9127) === 0))
{return inode__9126;
} else
{var idx__9128 = cljs.core.bitmap_indexed_node_index.call(null,this__9125.bitmap,bit__9127);
var key_or_nil__9129 = (this__9125.arr[(2 * idx__9128)]);
var val_or_node__9130 = (this__9125.arr[((2 * idx__9128) + 1)]);
if((key_or_nil__9129 == null))
{var n__9131 = val_or_node__9130.inode_without((shift + 5),hash,key);
if((n__9131 === val_or_node__9130))
{return inode__9126;
} else
{if(!((n__9131 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__9125.bitmap,cljs.core.clone_and_set.call(null,this__9125.arr,((2 * idx__9128) + 1),n__9131)));
} else
{if((this__9125.bitmap === bit__9127))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__9125.bitmap ^ bit__9127),cljs.core.remove_pair.call(null,this__9125.arr,idx__9128)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9129))
{return (new cljs.core.BitmapIndexedNode(null,(this__9125.bitmap ^ bit__9127),cljs.core.remove_pair.call(null,this__9125.arr,idx__9128)));
} else
{if("\uFDD0'else")
{return inode__9126;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9132 = this;
var inode__9133 = this;
var bit__9134 = (1 << ((hash >>> shift) & 0x01f));
var idx__9135 = cljs.core.bitmap_indexed_node_index.call(null,this__9132.bitmap,bit__9134);
if(((this__9132.bitmap & bit__9134) === 0))
{var n__9136 = cljs.core.bit_count.call(null,this__9132.bitmap);
if((n__9136 >= 16))
{var nodes__9137 = cljs.core.make_array.call(null,32);
var jdx__9138 = ((hash >>> shift) & 0x01f);
(nodes__9137[jdx__9138] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__9139 = 0;
var j__9140 = 0;
while(true){
if((i__9139 < 32))
{if((((this__9132.bitmap >>> i__9139) & 1) === 0))
{{
var G__9155 = (i__9139 + 1);
var G__9156 = j__9140;
i__9139 = G__9155;
j__9140 = G__9156;
continue;
}
} else
{(nodes__9137[i__9139] = ((!(((this__9132.arr[j__9140]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__9132.arr[j__9140])),(this__9132.arr[j__9140]),(this__9132.arr[(j__9140 + 1)]),added_leaf_QMARK_):(this__9132.arr[(j__9140 + 1)])));
{
var G__9157 = (i__9139 + 1);
var G__9158 = (j__9140 + 2);
i__9139 = G__9157;
j__9140 = G__9158;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__9136 + 1),nodes__9137));
} else
{var new_arr__9141 = cljs.core.make_array.call(null,(2 * (n__9136 + 1)));
cljs.core.array_copy.call(null,this__9132.arr,0,new_arr__9141,0,(2 * idx__9135));
(new_arr__9141[(2 * idx__9135)] = key);
(new_arr__9141[((2 * idx__9135) + 1)] = val);
cljs.core.array_copy.call(null,this__9132.arr,(2 * idx__9135),new_arr__9141,(2 * (idx__9135 + 1)),(2 * (n__9136 - idx__9135)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__9132.bitmap | bit__9134),new_arr__9141));
}
} else
{var key_or_nil__9142 = (this__9132.arr[(2 * idx__9135)]);
var val_or_node__9143 = (this__9132.arr[((2 * idx__9135) + 1)]);
if((key_or_nil__9142 == null))
{var n__9144 = val_or_node__9143.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9144 === val_or_node__9143))
{return inode__9133;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__9132.bitmap,cljs.core.clone_and_set.call(null,this__9132.arr,((2 * idx__9135) + 1),n__9144)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9142))
{if((val === val_or_node__9143))
{return inode__9133;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__9132.bitmap,cljs.core.clone_and_set.call(null,this__9132.arr,((2 * idx__9135) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__9132.bitmap,cljs.core.clone_and_set.call(null,this__9132.arr,(2 * idx__9135),null,((2 * idx__9135) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__9142,val_or_node__9143,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9145 = this;
var inode__9146 = this;
var bit__9147 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9145.bitmap & bit__9147) === 0))
{return not_found;
} else
{var idx__9148 = cljs.core.bitmap_indexed_node_index.call(null,this__9145.bitmap,bit__9147);
var key_or_nil__9149 = (this__9145.arr[(2 * idx__9148)]);
var val_or_node__9150 = (this__9145.arr[((2 * idx__9148) + 1)]);
if((key_or_nil__9149 == null))
{return val_or_node__9150.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9149))
{return val_or_node__9150;
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
var arr__9166 = array_node.arr;
var len__9167 = (2 * (array_node.cnt - 1));
var new_arr__9168 = cljs.core.make_array.call(null,len__9167);
var i__9169 = 0;
var j__9170 = 1;
var bitmap__9171 = 0;
while(true){
if((i__9169 < len__9167))
{if((function (){var and__3822__auto____9172 = !((i__9169 === idx));
if(and__3822__auto____9172)
{return !(((arr__9166[i__9169]) == null));
} else
{return and__3822__auto____9172;
}
})())
{(new_arr__9168[j__9170] = (arr__9166[i__9169]));
{
var G__9173 = (i__9169 + 1);
var G__9174 = (j__9170 + 2);
var G__9175 = (bitmap__9171 | (1 << i__9169));
i__9169 = G__9173;
j__9170 = G__9174;
bitmap__9171 = G__9175;
continue;
}
} else
{{
var G__9176 = (i__9169 + 1);
var G__9177 = j__9170;
var G__9178 = bitmap__9171;
i__9169 = G__9176;
j__9170 = G__9177;
bitmap__9171 = G__9178;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__9171,new_arr__9168));
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
var this__9179 = this;
var inode__9180 = this;
var idx__9181 = ((hash >>> shift) & 0x01f);
var node__9182 = (this__9179.arr[idx__9181]);
if((node__9182 == null))
{var editable__9183 = cljs.core.edit_and_set.call(null,inode__9180,edit,idx__9181,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__9183.cnt = (editable__9183.cnt + 1);
return editable__9183;
} else
{var n__9184 = node__9182.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9184 === node__9182))
{return inode__9180;
} else
{return cljs.core.edit_and_set.call(null,inode__9180,edit,idx__9181,n__9184);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__9185 = this;
var inode__9186 = this;
return cljs.core.create_array_node_seq.call(null,this__9185.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9187 = this;
var inode__9188 = this;
var idx__9189 = ((hash >>> shift) & 0x01f);
var node__9190 = (this__9187.arr[idx__9189]);
if((node__9190 == null))
{return inode__9188;
} else
{var n__9191 = node__9190.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__9191 === node__9190))
{return inode__9188;
} else
{if((n__9191 == null))
{if((this__9187.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__9188,edit,idx__9189);
} else
{var editable__9192 = cljs.core.edit_and_set.call(null,inode__9188,edit,idx__9189,n__9191);
editable__9192.cnt = (editable__9192.cnt - 1);
return editable__9192;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__9188,edit,idx__9189,n__9191);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__9193 = this;
var inode__9194 = this;
if((e === this__9193.edit))
{return inode__9194;
} else
{return (new cljs.core.ArrayNode(e,this__9193.cnt,this__9193.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__9195 = this;
var inode__9196 = this;
var len__9197 = this__9195.arr.length;
var i__9198 = 0;
var init__9199 = init;
while(true){
if((i__9198 < len__9197))
{var node__9200 = (this__9195.arr[i__9198]);
if(!((node__9200 == null)))
{var init__9201 = node__9200.kv_reduce(f,init__9199);
if(cljs.core.reduced_QMARK_.call(null,init__9201))
{return cljs.core.deref.call(null,init__9201);
} else
{{
var G__9220 = (i__9198 + 1);
var G__9221 = init__9201;
i__9198 = G__9220;
init__9199 = G__9221;
continue;
}
}
} else
{return null;
}
} else
{return init__9199;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9202 = this;
var inode__9203 = this;
var idx__9204 = ((hash >>> shift) & 0x01f);
var node__9205 = (this__9202.arr[idx__9204]);
if(!((node__9205 == null)))
{return node__9205.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__9206 = this;
var inode__9207 = this;
var idx__9208 = ((hash >>> shift) & 0x01f);
var node__9209 = (this__9206.arr[idx__9208]);
if(!((node__9209 == null)))
{var n__9210 = node__9209.inode_without((shift + 5),hash,key);
if((n__9210 === node__9209))
{return inode__9207;
} else
{if((n__9210 == null))
{if((this__9206.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__9207,null,idx__9208);
} else
{return (new cljs.core.ArrayNode(null,(this__9206.cnt - 1),cljs.core.clone_and_set.call(null,this__9206.arr,idx__9208,n__9210)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__9206.cnt,cljs.core.clone_and_set.call(null,this__9206.arr,idx__9208,n__9210)));
} else
{return null;
}
}
}
} else
{return inode__9207;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9211 = this;
var inode__9212 = this;
var idx__9213 = ((hash >>> shift) & 0x01f);
var node__9214 = (this__9211.arr[idx__9213]);
if((node__9214 == null))
{return (new cljs.core.ArrayNode(null,(this__9211.cnt + 1),cljs.core.clone_and_set.call(null,this__9211.arr,idx__9213,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__9215 = node__9214.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9215 === node__9214))
{return inode__9212;
} else
{return (new cljs.core.ArrayNode(null,this__9211.cnt,cljs.core.clone_and_set.call(null,this__9211.arr,idx__9213,n__9215)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9216 = this;
var inode__9217 = this;
var idx__9218 = ((hash >>> shift) & 0x01f);
var node__9219 = (this__9216.arr[idx__9218]);
if(!((node__9219 == null)))
{return node__9219.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__9224 = (2 * cnt);
var i__9225 = 0;
while(true){
if((i__9225 < lim__9224))
{if(cljs.core.key_test.call(null,key,(arr[i__9225])))
{return i__9225;
} else
{{
var G__9226 = (i__9225 + 2);
i__9225 = G__9226;
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
var this__9227 = this;
var inode__9228 = this;
if((hash === this__9227.collision_hash))
{var idx__9229 = cljs.core.hash_collision_node_find_index.call(null,this__9227.arr,this__9227.cnt,key);
if((idx__9229 === -1))
{if((this__9227.arr.length > (2 * this__9227.cnt)))
{var editable__9230 = cljs.core.edit_and_set.call(null,inode__9228,edit,(2 * this__9227.cnt),key,((2 * this__9227.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__9230.cnt = (editable__9230.cnt + 1);
return editable__9230;
} else
{var len__9231 = this__9227.arr.length;
var new_arr__9232 = cljs.core.make_array.call(null,(len__9231 + 2));
cljs.core.array_copy.call(null,this__9227.arr,0,new_arr__9232,0,len__9231);
(new_arr__9232[len__9231] = key);
(new_arr__9232[(len__9231 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__9228.ensure_editable_array(edit,(this__9227.cnt + 1),new_arr__9232);
}
} else
{if(((this__9227.arr[(idx__9229 + 1)]) === val))
{return inode__9228;
} else
{return cljs.core.edit_and_set.call(null,inode__9228,edit,(idx__9229 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__9227.collision_hash >>> shift) & 0x01f)),[null,inode__9228,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__9233 = this;
var inode__9234 = this;
return cljs.core.create_inode_seq.call(null,this__9233.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9235 = this;
var inode__9236 = this;
var idx__9237 = cljs.core.hash_collision_node_find_index.call(null,this__9235.arr,this__9235.cnt,key);
if((idx__9237 === -1))
{return inode__9236;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__9235.cnt === 1))
{return null;
} else
{var editable__9238 = inode__9236.ensure_editable(edit);
var earr__9239 = editable__9238.arr;
(earr__9239[idx__9237] = (earr__9239[((2 * this__9235.cnt) - 2)]));
(earr__9239[(idx__9237 + 1)] = (earr__9239[((2 * this__9235.cnt) - 1)]));
(earr__9239[((2 * this__9235.cnt) - 1)] = null);
(earr__9239[((2 * this__9235.cnt) - 2)] = null);
editable__9238.cnt = (editable__9238.cnt - 1);
return editable__9238;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__9240 = this;
var inode__9241 = this;
if((e === this__9240.edit))
{return inode__9241;
} else
{var new_arr__9242 = cljs.core.make_array.call(null,(2 * (this__9240.cnt + 1)));
cljs.core.array_copy.call(null,this__9240.arr,0,new_arr__9242,0,(2 * this__9240.cnt));
return (new cljs.core.HashCollisionNode(e,this__9240.collision_hash,this__9240.cnt,new_arr__9242));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__9243 = this;
var inode__9244 = this;
return cljs.core.inode_kv_reduce.call(null,this__9243.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9245 = this;
var inode__9246 = this;
var idx__9247 = cljs.core.hash_collision_node_find_index.call(null,this__9245.arr,this__9245.cnt,key);
if((idx__9247 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__9245.arr[idx__9247])))
{return cljs.core.PersistentVector.fromArray([(this__9245.arr[idx__9247]),(this__9245.arr[(idx__9247 + 1)])], true);
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
var this__9248 = this;
var inode__9249 = this;
var idx__9250 = cljs.core.hash_collision_node_find_index.call(null,this__9248.arr,this__9248.cnt,key);
if((idx__9250 === -1))
{return inode__9249;
} else
{if((this__9248.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__9248.collision_hash,(this__9248.cnt - 1),cljs.core.remove_pair.call(null,this__9248.arr,cljs.core.quot.call(null,idx__9250,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9251 = this;
var inode__9252 = this;
if((hash === this__9251.collision_hash))
{var idx__9253 = cljs.core.hash_collision_node_find_index.call(null,this__9251.arr,this__9251.cnt,key);
if((idx__9253 === -1))
{var len__9254 = this__9251.arr.length;
var new_arr__9255 = cljs.core.make_array.call(null,(len__9254 + 2));
cljs.core.array_copy.call(null,this__9251.arr,0,new_arr__9255,0,len__9254);
(new_arr__9255[len__9254] = key);
(new_arr__9255[(len__9254 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__9251.collision_hash,(this__9251.cnt + 1),new_arr__9255));
} else
{if(cljs.core._EQ_.call(null,(this__9251.arr[idx__9253]),val))
{return inode__9252;
} else
{return (new cljs.core.HashCollisionNode(null,this__9251.collision_hash,this__9251.cnt,cljs.core.clone_and_set.call(null,this__9251.arr,(idx__9253 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__9251.collision_hash >>> shift) & 0x01f)),[null,inode__9252])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9256 = this;
var inode__9257 = this;
var idx__9258 = cljs.core.hash_collision_node_find_index.call(null,this__9256.arr,this__9256.cnt,key);
if((idx__9258 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__9256.arr[idx__9258])))
{return (this__9256.arr[(idx__9258 + 1)]);
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
var this__9259 = this;
var inode__9260 = this;
if((e === this__9259.edit))
{this__9259.arr = array;
this__9259.cnt = count;
return inode__9260;
} else
{return (new cljs.core.HashCollisionNode(this__9259.edit,this__9259.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__9265 = cljs.core.hash.call(null,key1);
if((key1hash__9265 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__9265,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___9266 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__9265,key1,val1,added_leaf_QMARK___9266).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___9266);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__9267 = cljs.core.hash.call(null,key1);
if((key1hash__9267 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__9267,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___9268 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__9267,key1,val1,added_leaf_QMARK___9268).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___9268);
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
var this__9269 = this;
var h__2153__auto____9270 = this__9269.__hash;
if(!((h__2153__auto____9270 == null)))
{return h__2153__auto____9270;
} else
{var h__2153__auto____9271 = cljs.core.hash_coll.call(null,coll);
this__9269.__hash = h__2153__auto____9271;
return h__2153__auto____9271;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9272 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__9273 = this;
var this__9274 = this;
return cljs.core.pr_str.call(null,this__9274);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9275 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9276 = this;
if((this__9276.s == null))
{return cljs.core.PersistentVector.fromArray([(this__9276.nodes[this__9276.i]),(this__9276.nodes[(this__9276.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__9276.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9277 = this;
if((this__9277.s == null))
{return cljs.core.create_inode_seq.call(null,this__9277.nodes,(this__9277.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__9277.nodes,this__9277.i,cljs.core.next.call(null,this__9277.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9278 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9279 = this;
return (new cljs.core.NodeSeq(meta,this__9279.nodes,this__9279.i,this__9279.s,this__9279.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9280 = this;
return this__9280.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9281 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9281.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__9288 = nodes.length;
var j__9289 = i;
while(true){
if((j__9289 < len__9288))
{if(!(((nodes[j__9289]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__9289,null,null));
} else
{var temp__3971__auto____9290 = (nodes[(j__9289 + 1)]);
if(cljs.core.truth_(temp__3971__auto____9290))
{var node__9291 = temp__3971__auto____9290;
var temp__3971__auto____9292 = node__9291.inode_seq();
if(cljs.core.truth_(temp__3971__auto____9292))
{var node_seq__9293 = temp__3971__auto____9292;
return (new cljs.core.NodeSeq(null,nodes,(j__9289 + 2),node_seq__9293,null));
} else
{{
var G__9294 = (j__9289 + 2);
j__9289 = G__9294;
continue;
}
}
} else
{{
var G__9295 = (j__9289 + 2);
j__9289 = G__9295;
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
var this__9296 = this;
var h__2153__auto____9297 = this__9296.__hash;
if(!((h__2153__auto____9297 == null)))
{return h__2153__auto____9297;
} else
{var h__2153__auto____9298 = cljs.core.hash_coll.call(null,coll);
this__9296.__hash = h__2153__auto____9298;
return h__2153__auto____9298;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9299 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__9300 = this;
var this__9301 = this;
return cljs.core.pr_str.call(null,this__9301);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9302 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9303 = this;
return cljs.core.first.call(null,this__9303.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9304 = this;
return cljs.core.create_array_node_seq.call(null,null,this__9304.nodes,this__9304.i,cljs.core.next.call(null,this__9304.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9305 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9306 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__9306.nodes,this__9306.i,this__9306.s,this__9306.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9307 = this;
return this__9307.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9308 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9308.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__9315 = nodes.length;
var j__9316 = i;
while(true){
if((j__9316 < len__9315))
{var temp__3971__auto____9317 = (nodes[j__9316]);
if(cljs.core.truth_(temp__3971__auto____9317))
{var nj__9318 = temp__3971__auto____9317;
var temp__3971__auto____9319 = nj__9318.inode_seq();
if(cljs.core.truth_(temp__3971__auto____9319))
{var ns__9320 = temp__3971__auto____9319;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__9316 + 1),ns__9320,null));
} else
{{
var G__9321 = (j__9316 + 1);
j__9316 = G__9321;
continue;
}
}
} else
{{
var G__9322 = (j__9316 + 1);
j__9316 = G__9322;
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
var this__9325 = this;
return (new cljs.core.TransientHashMap({},this__9325.root,this__9325.cnt,this__9325.has_nil_QMARK_,this__9325.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9326 = this;
var h__2153__auto____9327 = this__9326.__hash;
if(!((h__2153__auto____9327 == null)))
{return h__2153__auto____9327;
} else
{var h__2153__auto____9328 = cljs.core.hash_imap.call(null,coll);
this__9326.__hash = h__2153__auto____9328;
return h__2153__auto____9328;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9329 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9330 = this;
if((k == null))
{if(this__9330.has_nil_QMARK_)
{return this__9330.nil_val;
} else
{return not_found;
}
} else
{if((this__9330.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__9330.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9331 = this;
if((k == null))
{if((function (){var and__3822__auto____9332 = this__9331.has_nil_QMARK_;
if(and__3822__auto____9332)
{return (v === this__9331.nil_val);
} else
{return and__3822__auto____9332;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9331.meta,((this__9331.has_nil_QMARK_)?this__9331.cnt:(this__9331.cnt + 1)),this__9331.root,true,v,null));
}
} else
{var added_leaf_QMARK___9333 = (new cljs.core.Box(false));
var new_root__9334 = (((this__9331.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9331.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___9333);
if((new_root__9334 === this__9331.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9331.meta,((added_leaf_QMARK___9333.val)?(this__9331.cnt + 1):this__9331.cnt),new_root__9334,this__9331.has_nil_QMARK_,this__9331.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9335 = this;
if((k == null))
{return this__9335.has_nil_QMARK_;
} else
{if((this__9335.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__9335.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__9358 = null;
var G__9358__2 = (function (this_sym9336,k){
var this__9338 = this;
var this_sym9336__9339 = this;
var coll__9340 = this_sym9336__9339;
return coll__9340.cljs$core$ILookup$_lookup$arity$2(coll__9340,k);
});
var G__9358__3 = (function (this_sym9337,k,not_found){
var this__9338 = this;
var this_sym9337__9341 = this;
var coll__9342 = this_sym9337__9341;
return coll__9342.cljs$core$ILookup$_lookup$arity$3(coll__9342,k,not_found);
});
G__9358 = function(this_sym9337,k,not_found){
switch(arguments.length){
case 2:
return G__9358__2.call(this,this_sym9337,k);
case 3:
return G__9358__3.call(this,this_sym9337,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9358;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym9323,args9324){
var this__9343 = this;
return this_sym9323.call.apply(this_sym9323,[this_sym9323].concat(args9324.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9344 = this;
var init__9345 = ((this__9344.has_nil_QMARK_)?f.call(null,init,null,this__9344.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__9345))
{return cljs.core.deref.call(null,init__9345);
} else
{if(!((this__9344.root == null)))
{return this__9344.root.kv_reduce(f,init__9345);
} else
{if("\uFDD0'else")
{return init__9345;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9346 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__9347 = this;
var this__9348 = this;
return cljs.core.pr_str.call(null,this__9348);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9349 = this;
if((this__9349.cnt > 0))
{var s__9350 = ((!((this__9349.root == null)))?this__9349.root.inode_seq():null);
if(this__9349.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__9349.nil_val], true),s__9350);
} else
{return s__9350;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9351 = this;
return this__9351.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9352 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9353 = this;
return (new cljs.core.PersistentHashMap(meta,this__9353.cnt,this__9353.root,this__9353.has_nil_QMARK_,this__9353.nil_val,this__9353.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9354 = this;
return this__9354.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9355 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__9355.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9356 = this;
if((k == null))
{if(this__9356.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__9356.meta,(this__9356.cnt - 1),this__9356.root,false,null,null));
} else
{return coll;
}
} else
{if((this__9356.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__9357 = this__9356.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__9357 === this__9356.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9356.meta,(this__9356.cnt - 1),new_root__9357,this__9356.has_nil_QMARK_,this__9356.nil_val,null));
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
var len__9359 = ks.length;
var i__9360 = 0;
var out__9361 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__9360 < len__9359))
{{
var G__9362 = (i__9360 + 1);
var G__9363 = cljs.core.assoc_BANG_.call(null,out__9361,(ks[i__9360]),(vs[i__9360]));
i__9360 = G__9362;
out__9361 = G__9363;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9361);
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
var this__9364 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9365 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__9366 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9367 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__9368 = this;
if((k == null))
{if(this__9368.has_nil_QMARK_)
{return this__9368.nil_val;
} else
{return null;
}
} else
{if((this__9368.root == null))
{return null;
} else
{return this__9368.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__9369 = this;
if((k == null))
{if(this__9369.has_nil_QMARK_)
{return this__9369.nil_val;
} else
{return not_found;
}
} else
{if((this__9369.root == null))
{return not_found;
} else
{return this__9369.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9370 = this;
if(this__9370.edit)
{return this__9370.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__9371 = this;
var tcoll__9372 = this;
if(this__9371.edit)
{if((function (){var G__9373__9374 = o;
if(G__9373__9374)
{if((function (){var or__3824__auto____9375 = (G__9373__9374.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____9375)
{return or__3824__auto____9375;
} else
{return G__9373__9374.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__9373__9374.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9373__9374);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9373__9374);
}
})())
{return tcoll__9372.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__9376 = cljs.core.seq.call(null,o);
var tcoll__9377 = tcoll__9372;
while(true){
var temp__3971__auto____9378 = cljs.core.first.call(null,es__9376);
if(cljs.core.truth_(temp__3971__auto____9378))
{var e__9379 = temp__3971__auto____9378;
{
var G__9390 = cljs.core.next.call(null,es__9376);
var G__9391 = tcoll__9377.assoc_BANG_(cljs.core.key.call(null,e__9379),cljs.core.val.call(null,e__9379));
es__9376 = G__9390;
tcoll__9377 = G__9391;
continue;
}
} else
{return tcoll__9377;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__9380 = this;
var tcoll__9381 = this;
if(this__9380.edit)
{if((k == null))
{if((this__9380.nil_val === v))
{} else
{this__9380.nil_val = v;
}
if(this__9380.has_nil_QMARK_)
{} else
{this__9380.count = (this__9380.count + 1);
this__9380.has_nil_QMARK_ = true;
}
return tcoll__9381;
} else
{var added_leaf_QMARK___9382 = (new cljs.core.Box(false));
var node__9383 = (((this__9380.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9380.root).inode_assoc_BANG_(this__9380.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___9382);
if((node__9383 === this__9380.root))
{} else
{this__9380.root = node__9383;
}
if(added_leaf_QMARK___9382.val)
{this__9380.count = (this__9380.count + 1);
} else
{}
return tcoll__9381;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__9384 = this;
var tcoll__9385 = this;
if(this__9384.edit)
{if((k == null))
{if(this__9384.has_nil_QMARK_)
{this__9384.has_nil_QMARK_ = false;
this__9384.nil_val = null;
this__9384.count = (this__9384.count - 1);
return tcoll__9385;
} else
{return tcoll__9385;
}
} else
{if((this__9384.root == null))
{return tcoll__9385;
} else
{var removed_leaf_QMARK___9386 = (new cljs.core.Box(false));
var node__9387 = this__9384.root.inode_without_BANG_(this__9384.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___9386);
if((node__9387 === this__9384.root))
{} else
{this__9384.root = node__9387;
}
if(cljs.core.truth_((removed_leaf_QMARK___9386[0])))
{this__9384.count = (this__9384.count - 1);
} else
{}
return tcoll__9385;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__9388 = this;
var tcoll__9389 = this;
if(this__9388.edit)
{this__9388.edit = null;
return (new cljs.core.PersistentHashMap(null,this__9388.count,this__9388.root,this__9388.has_nil_QMARK_,this__9388.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__9394 = node;
var stack__9395 = stack;
while(true){
if(!((t__9394 == null)))
{{
var G__9396 = ((ascending_QMARK_)?t__9394.left:t__9394.right);
var G__9397 = cljs.core.conj.call(null,stack__9395,t__9394);
t__9394 = G__9396;
stack__9395 = G__9397;
continue;
}
} else
{return stack__9395;
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
var this__9398 = this;
var h__2153__auto____9399 = this__9398.__hash;
if(!((h__2153__auto____9399 == null)))
{return h__2153__auto____9399;
} else
{var h__2153__auto____9400 = cljs.core.hash_coll.call(null,coll);
this__9398.__hash = h__2153__auto____9400;
return h__2153__auto____9400;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9401 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__9402 = this;
var this__9403 = this;
return cljs.core.pr_str.call(null,this__9403);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9404 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9405 = this;
if((this__9405.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__9405.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__9406 = this;
return cljs.core.peek.call(null,this__9406.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__9407 = this;
var t__9408 = cljs.core.first.call(null,this__9407.stack);
var next_stack__9409 = cljs.core.tree_map_seq_push.call(null,((this__9407.ascending_QMARK_)?t__9408.right:t__9408.left),cljs.core.next.call(null,this__9407.stack),this__9407.ascending_QMARK_);
if(!((next_stack__9409 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__9409,this__9407.ascending_QMARK_,(this__9407.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9410 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9411 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__9411.stack,this__9411.ascending_QMARK_,this__9411.cnt,this__9411.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9412 = this;
return this__9412.meta;
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
{if((function (){var and__3822__auto____9414 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____9414)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____9414;
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
{if((function (){var and__3822__auto____9416 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____9416)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____9416;
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
var init__9420 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__9420))
{return cljs.core.deref.call(null,init__9420);
} else
{var init__9421 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__9420):init__9420);
if(cljs.core.reduced_QMARK_.call(null,init__9421))
{return cljs.core.deref.call(null,init__9421);
} else
{var init__9422 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__9421):init__9421);
if(cljs.core.reduced_QMARK_.call(null,init__9422))
{return cljs.core.deref.call(null,init__9422);
} else
{return init__9422;
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
var this__9425 = this;
var h__2153__auto____9426 = this__9425.__hash;
if(!((h__2153__auto____9426 == null)))
{return h__2153__auto____9426;
} else
{var h__2153__auto____9427 = cljs.core.hash_coll.call(null,coll);
this__9425.__hash = h__2153__auto____9427;
return h__2153__auto____9427;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9428 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9429 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9430 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__9430.key,this__9430.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__9478 = null;
var G__9478__2 = (function (this_sym9431,k){
var this__9433 = this;
var this_sym9431__9434 = this;
var node__9435 = this_sym9431__9434;
return node__9435.cljs$core$ILookup$_lookup$arity$2(node__9435,k);
});
var G__9478__3 = (function (this_sym9432,k,not_found){
var this__9433 = this;
var this_sym9432__9436 = this;
var node__9437 = this_sym9432__9436;
return node__9437.cljs$core$ILookup$_lookup$arity$3(node__9437,k,not_found);
});
G__9478 = function(this_sym9432,k,not_found){
switch(arguments.length){
case 2:
return G__9478__2.call(this,this_sym9432,k);
case 3:
return G__9478__3.call(this,this_sym9432,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9478;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym9423,args9424){
var this__9438 = this;
return this_sym9423.call.apply(this_sym9423,[this_sym9423].concat(args9424.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9439 = this;
return cljs.core.PersistentVector.fromArray([this__9439.key,this__9439.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9440 = this;
return this__9440.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9441 = this;
return this__9441.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__9442 = this;
var node__9443 = this;
return ins.balance_right(node__9443);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__9444 = this;
var node__9445 = this;
return (new cljs.core.RedNode(this__9444.key,this__9444.val,this__9444.left,this__9444.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__9446 = this;
var node__9447 = this;
return cljs.core.balance_right_del.call(null,this__9446.key,this__9446.val,this__9446.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__9448 = this;
var node__9449 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__9450 = this;
var node__9451 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__9451,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__9452 = this;
var node__9453 = this;
return cljs.core.balance_left_del.call(null,this__9452.key,this__9452.val,del,this__9452.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__9454 = this;
var node__9455 = this;
return ins.balance_left(node__9455);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__9456 = this;
var node__9457 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__9457,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__9479 = null;
var G__9479__0 = (function (){
var this__9458 = this;
var this__9460 = this;
return cljs.core.pr_str.call(null,this__9460);
});
G__9479 = function(){
switch(arguments.length){
case 0:
return G__9479__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9479;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__9461 = this;
var node__9462 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9462,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__9463 = this;
var node__9464 = this;
return node__9464;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9465 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9466 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9467 = this;
return cljs.core.list.call(null,this__9467.key,this__9467.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9468 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9469 = this;
return this__9469.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9470 = this;
return cljs.core.PersistentVector.fromArray([this__9470.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9471 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__9471.key,this__9471.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9472 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9473 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__9473.key,this__9473.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9474 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9475 = this;
if((n === 0))
{return this__9475.key;
} else
{if((n === 1))
{return this__9475.val;
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
var this__9476 = this;
if((n === 0))
{return this__9476.key;
} else
{if((n === 1))
{return this__9476.val;
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
var this__9477 = this;
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
var this__9482 = this;
var h__2153__auto____9483 = this__9482.__hash;
if(!((h__2153__auto____9483 == null)))
{return h__2153__auto____9483;
} else
{var h__2153__auto____9484 = cljs.core.hash_coll.call(null,coll);
this__9482.__hash = h__2153__auto____9484;
return h__2153__auto____9484;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9485 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9486 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9487 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__9487.key,this__9487.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__9535 = null;
var G__9535__2 = (function (this_sym9488,k){
var this__9490 = this;
var this_sym9488__9491 = this;
var node__9492 = this_sym9488__9491;
return node__9492.cljs$core$ILookup$_lookup$arity$2(node__9492,k);
});
var G__9535__3 = (function (this_sym9489,k,not_found){
var this__9490 = this;
var this_sym9489__9493 = this;
var node__9494 = this_sym9489__9493;
return node__9494.cljs$core$ILookup$_lookup$arity$3(node__9494,k,not_found);
});
G__9535 = function(this_sym9489,k,not_found){
switch(arguments.length){
case 2:
return G__9535__2.call(this,this_sym9489,k);
case 3:
return G__9535__3.call(this,this_sym9489,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9535;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym9480,args9481){
var this__9495 = this;
return this_sym9480.call.apply(this_sym9480,[this_sym9480].concat(args9481.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9496 = this;
return cljs.core.PersistentVector.fromArray([this__9496.key,this__9496.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9497 = this;
return this__9497.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9498 = this;
return this__9498.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__9499 = this;
var node__9500 = this;
return (new cljs.core.RedNode(this__9499.key,this__9499.val,this__9499.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__9501 = this;
var node__9502 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__9503 = this;
var node__9504 = this;
return (new cljs.core.RedNode(this__9503.key,this__9503.val,this__9503.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__9505 = this;
var node__9506 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__9507 = this;
var node__9508 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__9508,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__9509 = this;
var node__9510 = this;
return (new cljs.core.RedNode(this__9509.key,this__9509.val,del,this__9509.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__9511 = this;
var node__9512 = this;
return (new cljs.core.RedNode(this__9511.key,this__9511.val,ins,this__9511.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__9513 = this;
var node__9514 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9513.left))
{return (new cljs.core.RedNode(this__9513.key,this__9513.val,this__9513.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__9513.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9513.right))
{return (new cljs.core.RedNode(this__9513.right.key,this__9513.right.val,(new cljs.core.BlackNode(this__9513.key,this__9513.val,this__9513.left,this__9513.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__9513.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__9514,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__9536 = null;
var G__9536__0 = (function (){
var this__9515 = this;
var this__9517 = this;
return cljs.core.pr_str.call(null,this__9517);
});
G__9536 = function(){
switch(arguments.length){
case 0:
return G__9536__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9536;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__9518 = this;
var node__9519 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9518.right))
{return (new cljs.core.RedNode(this__9518.key,this__9518.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9518.left,null)),this__9518.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9518.left))
{return (new cljs.core.RedNode(this__9518.left.key,this__9518.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9518.left.left,null)),(new cljs.core.BlackNode(this__9518.key,this__9518.val,this__9518.left.right,this__9518.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9519,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__9520 = this;
var node__9521 = this;
return (new cljs.core.BlackNode(this__9520.key,this__9520.val,this__9520.left,this__9520.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9522 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9523 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9524 = this;
return cljs.core.list.call(null,this__9524.key,this__9524.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9525 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9526 = this;
return this__9526.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9527 = this;
return cljs.core.PersistentVector.fromArray([this__9527.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9528 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__9528.key,this__9528.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9529 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9530 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__9530.key,this__9530.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9531 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9532 = this;
if((n === 0))
{return this__9532.key;
} else
{if((n === 1))
{return this__9532.val;
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
var this__9533 = this;
if((n === 0))
{return this__9533.key;
} else
{if((n === 1))
{return this__9533.val;
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
var this__9534 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__9540 = comp.call(null,k,tree.key);
if((c__9540 === 0))
{(found[0] = tree);
return null;
} else
{if((c__9540 < 0))
{var ins__9541 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__9541 == null)))
{return tree.add_left(ins__9541);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__9542 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__9542 == null)))
{return tree.add_right(ins__9542);
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
{var app__9545 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__9545))
{return (new cljs.core.RedNode(app__9545.key,app__9545.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__9545.left,null)),(new cljs.core.RedNode(right.key,right.val,app__9545.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__9545,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__9546 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__9546))
{return (new cljs.core.RedNode(app__9546.key,app__9546.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__9546.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__9546.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__9546,right.right,null)));
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
{var c__9552 = comp.call(null,k,tree.key);
if((c__9552 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__9552 < 0))
{var del__9553 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____9554 = !((del__9553 == null));
if(or__3824__auto____9554)
{return or__3824__auto____9554;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__9553,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__9553,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__9555 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____9556 = !((del__9555 == null));
if(or__3824__auto____9556)
{return or__3824__auto____9556;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__9555);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__9555,null));
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
var tk__9559 = tree.key;
var c__9560 = comp.call(null,k,tk__9559);
if((c__9560 === 0))
{return tree.replace(tk__9559,v,tree.left,tree.right);
} else
{if((c__9560 < 0))
{return tree.replace(tk__9559,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__9559,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
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
var this__9563 = this;
var h__2153__auto____9564 = this__9563.__hash;
if(!((h__2153__auto____9564 == null)))
{return h__2153__auto____9564;
} else
{var h__2153__auto____9565 = cljs.core.hash_imap.call(null,coll);
this__9563.__hash = h__2153__auto____9565;
return h__2153__auto____9565;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9566 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9567 = this;
var n__9568 = coll.entry_at(k);
if(!((n__9568 == null)))
{return n__9568.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9569 = this;
var found__9570 = [null];
var t__9571 = cljs.core.tree_map_add.call(null,this__9569.comp,this__9569.tree,k,v,found__9570);
if((t__9571 == null))
{var found_node__9572 = cljs.core.nth.call(null,found__9570,0);
if(cljs.core._EQ_.call(null,v,found_node__9572.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9569.comp,cljs.core.tree_map_replace.call(null,this__9569.comp,this__9569.tree,k,v),this__9569.cnt,this__9569.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9569.comp,t__9571.blacken(),(this__9569.cnt + 1),this__9569.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9573 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__9607 = null;
var G__9607__2 = (function (this_sym9574,k){
var this__9576 = this;
var this_sym9574__9577 = this;
var coll__9578 = this_sym9574__9577;
return coll__9578.cljs$core$ILookup$_lookup$arity$2(coll__9578,k);
});
var G__9607__3 = (function (this_sym9575,k,not_found){
var this__9576 = this;
var this_sym9575__9579 = this;
var coll__9580 = this_sym9575__9579;
return coll__9580.cljs$core$ILookup$_lookup$arity$3(coll__9580,k,not_found);
});
G__9607 = function(this_sym9575,k,not_found){
switch(arguments.length){
case 2:
return G__9607__2.call(this,this_sym9575,k);
case 3:
return G__9607__3.call(this,this_sym9575,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9607;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym9561,args9562){
var this__9581 = this;
return this_sym9561.call.apply(this_sym9561,[this_sym9561].concat(args9562.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9582 = this;
if(!((this__9582.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__9582.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9583 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9584 = this;
if((this__9584.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9584.tree,false,this__9584.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__9585 = this;
var this__9586 = this;
return cljs.core.pr_str.call(null,this__9586);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__9587 = this;
var coll__9588 = this;
var t__9589 = this__9587.tree;
while(true){
if(!((t__9589 == null)))
{var c__9590 = this__9587.comp.call(null,k,t__9589.key);
if((c__9590 === 0))
{return t__9589;
} else
{if((c__9590 < 0))
{{
var G__9608 = t__9589.left;
t__9589 = G__9608;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__9609 = t__9589.right;
t__9589 = G__9609;
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
var this__9591 = this;
if((this__9591.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9591.tree,ascending_QMARK_,this__9591.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9592 = this;
if((this__9592.cnt > 0))
{var stack__9593 = null;
var t__9594 = this__9592.tree;
while(true){
if(!((t__9594 == null)))
{var c__9595 = this__9592.comp.call(null,k,t__9594.key);
if((c__9595 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__9593,t__9594),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__9595 < 0))
{{
var G__9610 = cljs.core.conj.call(null,stack__9593,t__9594);
var G__9611 = t__9594.left;
stack__9593 = G__9610;
t__9594 = G__9611;
continue;
}
} else
{{
var G__9612 = stack__9593;
var G__9613 = t__9594.right;
stack__9593 = G__9612;
t__9594 = G__9613;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__9595 > 0))
{{
var G__9614 = cljs.core.conj.call(null,stack__9593,t__9594);
var G__9615 = t__9594.right;
stack__9593 = G__9614;
t__9594 = G__9615;
continue;
}
} else
{{
var G__9616 = stack__9593;
var G__9617 = t__9594.left;
stack__9593 = G__9616;
t__9594 = G__9617;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__9593 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__9593,ascending_QMARK_,-1,null));
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
var this__9596 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9597 = this;
return this__9597.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9598 = this;
if((this__9598.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9598.tree,true,this__9598.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9599 = this;
return this__9599.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9600 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9601 = this;
return (new cljs.core.PersistentTreeMap(this__9601.comp,this__9601.tree,this__9601.cnt,meta,this__9601.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9602 = this;
return this__9602.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9603 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__9603.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9604 = this;
var found__9605 = [null];
var t__9606 = cljs.core.tree_map_remove.call(null,this__9604.comp,this__9604.tree,k,found__9605);
if((t__9606 == null))
{if((cljs.core.nth.call(null,found__9605,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9604.comp,null,0,this__9604.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9604.comp,t__9606.blacken(),(this__9604.cnt - 1),this__9604.meta,null));
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
var in__9620 = cljs.core.seq.call(null,keyvals);
var out__9621 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__9620)
{{
var G__9622 = cljs.core.nnext.call(null,in__9620);
var G__9623 = cljs.core.assoc_BANG_.call(null,out__9621,cljs.core.first.call(null,in__9620),cljs.core.second.call(null,in__9620));
in__9620 = G__9622;
out__9621 = G__9623;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9621);
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
hash_map.cljs$lang$applyTo = (function (arglist__9624){
var keyvals = cljs.core.seq(arglist__9624);;
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
array_map.cljs$lang$applyTo = (function (arglist__9625){
var keyvals = cljs.core.seq(arglist__9625);;
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
var in__9628 = cljs.core.seq.call(null,keyvals);
var out__9629 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__9628)
{{
var G__9630 = cljs.core.nnext.call(null,in__9628);
var G__9631 = cljs.core.assoc.call(null,out__9629,cljs.core.first.call(null,in__9628),cljs.core.second.call(null,in__9628));
in__9628 = G__9630;
out__9629 = G__9631;
continue;
}
} else
{return out__9629;
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
sorted_map.cljs$lang$applyTo = (function (arglist__9632){
var keyvals = cljs.core.seq(arglist__9632);;
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
var in__9635 = cljs.core.seq.call(null,keyvals);
var out__9636 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__9635)
{{
var G__9637 = cljs.core.nnext.call(null,in__9635);
var G__9638 = cljs.core.assoc.call(null,out__9636,cljs.core.first.call(null,in__9635),cljs.core.second.call(null,in__9635));
in__9635 = G__9637;
out__9636 = G__9638;
continue;
}
} else
{return out__9636;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__9639){
var comparator = cljs.core.first(arglist__9639);
var keyvals = cljs.core.rest(arglist__9639);
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
{return cljs.core.reduce.call(null,(function (p1__9640_SHARP_,p2__9641_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____9643 = p1__9640_SHARP_;
if(cljs.core.truth_(or__3824__auto____9643))
{return or__3824__auto____9643;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__9641_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__9644){
var maps = cljs.core.seq(arglist__9644);;
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
{var merge_entry__9652 = (function (m,e){
var k__9650 = cljs.core.first.call(null,e);
var v__9651 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__9650))
{return cljs.core.assoc.call(null,m,k__9650,f.call(null,cljs.core._lookup.call(null,m,k__9650,null),v__9651));
} else
{return cljs.core.assoc.call(null,m,k__9650,v__9651);
}
});
var merge2__9654 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__9652,(function (){var or__3824__auto____9653 = m1;
if(cljs.core.truth_(or__3824__auto____9653))
{return or__3824__auto____9653;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__9654,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__9655){
var f = cljs.core.first(arglist__9655);
var maps = cljs.core.rest(arglist__9655);
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
var ret__9660 = cljs.core.ObjMap.EMPTY;
var keys__9661 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__9661)
{var key__9662 = cljs.core.first.call(null,keys__9661);
var entry__9663 = cljs.core._lookup.call(null,map,key__9662,"\uFDD0'user/not-found");
{
var G__9664 = ((cljs.core.not_EQ_.call(null,entry__9663,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__9660,key__9662,entry__9663):ret__9660);
var G__9665 = cljs.core.next.call(null,keys__9661);
ret__9660 = G__9664;
keys__9661 = G__9665;
continue;
}
} else
{return ret__9660;
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
var this__9669 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__9669.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9670 = this;
var h__2153__auto____9671 = this__9670.__hash;
if(!((h__2153__auto____9671 == null)))
{return h__2153__auto____9671;
} else
{var h__2153__auto____9672 = cljs.core.hash_iset.call(null,coll);
this__9670.__hash = h__2153__auto____9672;
return h__2153__auto____9672;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9673 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9674 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9674.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__9695 = null;
var G__9695__2 = (function (this_sym9675,k){
var this__9677 = this;
var this_sym9675__9678 = this;
var coll__9679 = this_sym9675__9678;
return coll__9679.cljs$core$ILookup$_lookup$arity$2(coll__9679,k);
});
var G__9695__3 = (function (this_sym9676,k,not_found){
var this__9677 = this;
var this_sym9676__9680 = this;
var coll__9681 = this_sym9676__9680;
return coll__9681.cljs$core$ILookup$_lookup$arity$3(coll__9681,k,not_found);
});
G__9695 = function(this_sym9676,k,not_found){
switch(arguments.length){
case 2:
return G__9695__2.call(this,this_sym9676,k);
case 3:
return G__9695__3.call(this,this_sym9676,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9695;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym9667,args9668){
var this__9682 = this;
return this_sym9667.call.apply(this_sym9667,[this_sym9667].concat(args9668.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9683 = this;
return (new cljs.core.PersistentHashSet(this__9683.meta,cljs.core.assoc.call(null,this__9683.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__9684 = this;
var this__9685 = this;
return cljs.core.pr_str.call(null,this__9685);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9686 = this;
return cljs.core.keys.call(null,this__9686.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9687 = this;
return (new cljs.core.PersistentHashSet(this__9687.meta,cljs.core.dissoc.call(null,this__9687.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9688 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9689 = this;
var and__3822__auto____9690 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____9690)
{var and__3822__auto____9691 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____9691)
{return cljs.core.every_QMARK_.call(null,(function (p1__9666_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9666_SHARP_);
}),other);
} else
{return and__3822__auto____9691;
}
} else
{return and__3822__auto____9690;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9692 = this;
return (new cljs.core.PersistentHashSet(meta,this__9692.hash_map,this__9692.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9693 = this;
return this__9693.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9694 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__9694.meta);
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
var G__9713 = null;
var G__9713__2 = (function (this_sym9699,k){
var this__9701 = this;
var this_sym9699__9702 = this;
var tcoll__9703 = this_sym9699__9702;
if((cljs.core._lookup.call(null,this__9701.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__9713__3 = (function (this_sym9700,k,not_found){
var this__9701 = this;
var this_sym9700__9704 = this;
var tcoll__9705 = this_sym9700__9704;
if((cljs.core._lookup.call(null,this__9701.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__9713 = function(this_sym9700,k,not_found){
switch(arguments.length){
case 2:
return G__9713__2.call(this,this_sym9700,k);
case 3:
return G__9713__3.call(this,this_sym9700,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9713;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym9697,args9698){
var this__9706 = this;
return this_sym9697.call.apply(this_sym9697,[this_sym9697].concat(args9698.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__9707 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__9708 = this;
if((cljs.core._lookup.call(null,this__9708.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9709 = this;
return cljs.core.count.call(null,this__9709.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__9710 = this;
this__9710.transient_map = cljs.core.dissoc_BANG_.call(null,this__9710.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9711 = this;
this__9711.transient_map = cljs.core.assoc_BANG_.call(null,this__9711.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9712 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__9712.transient_map),null));
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
var this__9716 = this;
var h__2153__auto____9717 = this__9716.__hash;
if(!((h__2153__auto____9717 == null)))
{return h__2153__auto____9717;
} else
{var h__2153__auto____9718 = cljs.core.hash_iset.call(null,coll);
this__9716.__hash = h__2153__auto____9718;
return h__2153__auto____9718;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9719 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9720 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9720.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__9746 = null;
var G__9746__2 = (function (this_sym9721,k){
var this__9723 = this;
var this_sym9721__9724 = this;
var coll__9725 = this_sym9721__9724;
return coll__9725.cljs$core$ILookup$_lookup$arity$2(coll__9725,k);
});
var G__9746__3 = (function (this_sym9722,k,not_found){
var this__9723 = this;
var this_sym9722__9726 = this;
var coll__9727 = this_sym9722__9726;
return coll__9727.cljs$core$ILookup$_lookup$arity$3(coll__9727,k,not_found);
});
G__9746 = function(this_sym9722,k,not_found){
switch(arguments.length){
case 2:
return G__9746__2.call(this,this_sym9722,k);
case 3:
return G__9746__3.call(this,this_sym9722,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9746;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym9714,args9715){
var this__9728 = this;
return this_sym9714.call.apply(this_sym9714,[this_sym9714].concat(args9715.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9729 = this;
return (new cljs.core.PersistentTreeSet(this__9729.meta,cljs.core.assoc.call(null,this__9729.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9730 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__9730.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__9731 = this;
var this__9732 = this;
return cljs.core.pr_str.call(null,this__9732);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__9733 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__9733.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9734 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__9734.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__9735 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9736 = this;
return cljs.core._comparator.call(null,this__9736.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9737 = this;
return cljs.core.keys.call(null,this__9737.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9738 = this;
return (new cljs.core.PersistentTreeSet(this__9738.meta,cljs.core.dissoc.call(null,this__9738.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9739 = this;
return cljs.core.count.call(null,this__9739.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9740 = this;
var and__3822__auto____9741 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____9741)
{var and__3822__auto____9742 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____9742)
{return cljs.core.every_QMARK_.call(null,(function (p1__9696_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9696_SHARP_);
}),other);
} else
{return and__3822__auto____9742;
}
} else
{return and__3822__auto____9741;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9743 = this;
return (new cljs.core.PersistentTreeSet(meta,this__9743.tree_map,this__9743.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9744 = this;
return this__9744.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9745 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__9745.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map.call(null),0));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in__9749 = cljs.core.seq.call(null,coll);
var out__9750 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__9749))
{{
var G__9751 = cljs.core.next.call(null,in__9749);
var G__9752 = cljs.core.conj_BANG_.call(null,out__9750,cljs.core.first.call(null,in__9749));
in__9749 = G__9751;
out__9750 = G__9752;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9750);
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
sorted_set.cljs$lang$applyTo = (function (arglist__9753){
var keys = cljs.core.seq(arglist__9753);;
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__9755){
var comparator = cljs.core.first(arglist__9755);
var keys = cljs.core.rest(arglist__9755);
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
{var n__9761 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____9762 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____9762))
{var e__9763 = temp__3971__auto____9762;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__9763));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__9761,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__9754_SHARP_){
var temp__3971__auto____9764 = cljs.core.find.call(null,smap,p1__9754_SHARP_);
if(cljs.core.truth_(temp__3971__auto____9764))
{var e__9765 = temp__3971__auto____9764;
return cljs.core.second.call(null,e__9765);
} else
{return p1__9754_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__9795 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__9788,seen){
while(true){
var vec__9789__9790 = p__9788;
var f__9791 = cljs.core.nth.call(null,vec__9789__9790,0,null);
var xs__9792 = vec__9789__9790;
var temp__3974__auto____9793 = cljs.core.seq.call(null,xs__9792);
if(temp__3974__auto____9793)
{var s__9794 = temp__3974__auto____9793;
if(cljs.core.contains_QMARK_.call(null,seen,f__9791))
{{
var G__9796 = cljs.core.rest.call(null,s__9794);
var G__9797 = seen;
p__9788 = G__9796;
seen = G__9797;
continue;
}
} else
{return cljs.core.cons.call(null,f__9791,step.call(null,cljs.core.rest.call(null,s__9794),cljs.core.conj.call(null,seen,f__9791)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__9795.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__9800 = cljs.core.PersistentVector.EMPTY;
var s__9801 = s;
while(true){
if(cljs.core.next.call(null,s__9801))
{{
var G__9802 = cljs.core.conj.call(null,ret__9800,cljs.core.first.call(null,s__9801));
var G__9803 = cljs.core.next.call(null,s__9801);
ret__9800 = G__9802;
s__9801 = G__9803;
continue;
}
} else
{return cljs.core.seq.call(null,ret__9800);
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
{if((function (){var or__3824__auto____9806 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9806)
{return or__3824__auto____9806;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9807 = x.lastIndexOf("/");
if((i__9807 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__9807 + 1));
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
if((function (){var or__3824__auto____9810 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9810)
{return or__3824__auto____9810;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9811 = x.lastIndexOf("/");
if((i__9811 > -1))
{return cljs.core.subs.call(null,x,2,i__9811);
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
var map__9818 = cljs.core.ObjMap.EMPTY;
var ks__9819 = cljs.core.seq.call(null,keys);
var vs__9820 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____9821 = ks__9819;
if(and__3822__auto____9821)
{return vs__9820;
} else
{return and__3822__auto____9821;
}
})())
{{
var G__9822 = cljs.core.assoc.call(null,map__9818,cljs.core.first.call(null,ks__9819),cljs.core.first.call(null,vs__9820));
var G__9823 = cljs.core.next.call(null,ks__9819);
var G__9824 = cljs.core.next.call(null,vs__9820);
map__9818 = G__9822;
ks__9819 = G__9823;
vs__9820 = G__9824;
continue;
}
} else
{return map__9818;
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
var G__9827__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9812_SHARP_,p2__9813_SHARP_){
return max_key.call(null,k,p1__9812_SHARP_,p2__9813_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__9827 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9827__delegate.call(this, k, x, y, more);
};
G__9827.cljs$lang$maxFixedArity = 3;
G__9827.cljs$lang$applyTo = (function (arglist__9828){
var k = cljs.core.first(arglist__9828);
var x = cljs.core.first(cljs.core.next(arglist__9828));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9828)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9828)));
return G__9827__delegate(k, x, y, more);
});
G__9827.cljs$lang$arity$variadic = G__9827__delegate;
return G__9827;
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
var G__9829__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9825_SHARP_,p2__9826_SHARP_){
return min_key.call(null,k,p1__9825_SHARP_,p2__9826_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__9829 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9829__delegate.call(this, k, x, y, more);
};
G__9829.cljs$lang$maxFixedArity = 3;
G__9829.cljs$lang$applyTo = (function (arglist__9830){
var k = cljs.core.first(arglist__9830);
var x = cljs.core.first(cljs.core.next(arglist__9830));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9830)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9830)));
return G__9829__delegate(k, x, y, more);
});
G__9829.cljs$lang$arity$variadic = G__9829__delegate;
return G__9829;
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
var temp__3974__auto____9833 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9833)
{var s__9834 = temp__3974__auto____9833;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__9834),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__9834)));
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
var temp__3974__auto____9837 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9837)
{var s__9838 = temp__3974__auto____9837;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__9838))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9838),take_while.call(null,pred,cljs.core.rest.call(null,s__9838)));
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
var comp__9840 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__9840.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__9852 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____9853 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____9853))
{var vec__9854__9855 = temp__3974__auto____9853;
var e__9856 = cljs.core.nth.call(null,vec__9854__9855,0,null);
var s__9857 = vec__9854__9855;
if(cljs.core.truth_(include__9852.call(null,e__9856)))
{return s__9857;
} else
{return cljs.core.next.call(null,s__9857);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9852,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9858 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____9858))
{var vec__9859__9860 = temp__3974__auto____9858;
var e__9861 = cljs.core.nth.call(null,vec__9859__9860,0,null);
var s__9862 = vec__9859__9860;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__9861))?s__9862:cljs.core.next.call(null,s__9862)));
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
var include__9874 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____9875 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____9875))
{var vec__9876__9877 = temp__3974__auto____9875;
var e__9878 = cljs.core.nth.call(null,vec__9876__9877,0,null);
var s__9879 = vec__9876__9877;
if(cljs.core.truth_(include__9874.call(null,e__9878)))
{return s__9879;
} else
{return cljs.core.next.call(null,s__9879);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9874,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9880 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____9880))
{var vec__9881__9882 = temp__3974__auto____9880;
var e__9883 = cljs.core.nth.call(null,vec__9881__9882,0,null);
var s__9884 = vec__9881__9882;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__9883))?s__9884:cljs.core.next.call(null,s__9884)));
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
var this__9885 = this;
var h__2153__auto____9886 = this__9885.__hash;
if(!((h__2153__auto____9886 == null)))
{return h__2153__auto____9886;
} else
{var h__2153__auto____9887 = cljs.core.hash_coll.call(null,rng);
this__9885.__hash = h__2153__auto____9887;
return h__2153__auto____9887;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__9888 = this;
if((this__9888.step > 0))
{if(((this__9888.start + this__9888.step) < this__9888.end))
{return (new cljs.core.Range(this__9888.meta,(this__9888.start + this__9888.step),this__9888.end,this__9888.step,null));
} else
{return null;
}
} else
{if(((this__9888.start + this__9888.step) > this__9888.end))
{return (new cljs.core.Range(this__9888.meta,(this__9888.start + this__9888.step),this__9888.end,this__9888.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__9889 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__9890 = this;
var this__9891 = this;
return cljs.core.pr_str.call(null,this__9891);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__9892 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__9893 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__9894 = this;
if((this__9894.step > 0))
{if((this__9894.start < this__9894.end))
{return rng;
} else
{return null;
}
} else
{if((this__9894.start > this__9894.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__9895 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__9895.end - this__9895.start) / this__9895.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__9896 = this;
return this__9896.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__9897 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__9897.meta,(this__9897.start + this__9897.step),this__9897.end,this__9897.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__9898 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__9899 = this;
return (new cljs.core.Range(meta,this__9899.start,this__9899.end,this__9899.step,this__9899.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__9900 = this;
return this__9900.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__9901 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9901.start + (n * this__9901.step));
} else
{if((function (){var and__3822__auto____9902 = (this__9901.start > this__9901.end);
if(and__3822__auto____9902)
{return (this__9901.step === 0);
} else
{return and__3822__auto____9902;
}
})())
{return this__9901.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__9903 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9903.start + (n * this__9903.step));
} else
{if((function (){var and__3822__auto____9904 = (this__9903.start > this__9903.end);
if(and__3822__auto____9904)
{return (this__9903.step === 0);
} else
{return and__3822__auto____9904;
}
})())
{return this__9903.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__9905 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9905.meta);
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
var temp__3974__auto____9908 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9908)
{var s__9909 = temp__3974__auto____9908;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__9909),take_nth.call(null,n,cljs.core.drop.call(null,n,s__9909)));
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
var temp__3974__auto____9916 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9916)
{var s__9917 = temp__3974__auto____9916;
var fst__9918 = cljs.core.first.call(null,s__9917);
var fv__9919 = f.call(null,fst__9918);
var run__9920 = cljs.core.cons.call(null,fst__9918,cljs.core.take_while.call(null,(function (p1__9910_SHARP_){
return cljs.core._EQ_.call(null,fv__9919,f.call(null,p1__9910_SHARP_));
}),cljs.core.next.call(null,s__9917)));
return cljs.core.cons.call(null,run__9920,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__9920),s__9917))));
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
var temp__3971__auto____9935 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____9935)
{var s__9936 = temp__3971__auto____9935;
return reductions.call(null,f,cljs.core.first.call(null,s__9936),cljs.core.rest.call(null,s__9936));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9937 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9937)
{var s__9938 = temp__3974__auto____9937;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__9938)),cljs.core.rest.call(null,s__9938));
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
var G__9941 = null;
var G__9941__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__9941__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__9941__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__9941__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__9941__4 = (function() { 
var G__9942__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__9942 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9942__delegate.call(this, x, y, z, args);
};
G__9942.cljs$lang$maxFixedArity = 3;
G__9942.cljs$lang$applyTo = (function (arglist__9943){
var x = cljs.core.first(arglist__9943);
var y = cljs.core.first(cljs.core.next(arglist__9943));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9943)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9943)));
return G__9942__delegate(x, y, z, args);
});
G__9942.cljs$lang$arity$variadic = G__9942__delegate;
return G__9942;
})()
;
G__9941 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9941__0.call(this);
case 1:
return G__9941__1.call(this,x);
case 2:
return G__9941__2.call(this,x,y);
case 3:
return G__9941__3.call(this,x,y,z);
default:
return G__9941__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9941.cljs$lang$maxFixedArity = 3;
G__9941.cljs$lang$applyTo = G__9941__4.cljs$lang$applyTo;
return G__9941;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__9944 = null;
var G__9944__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__9944__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__9944__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__9944__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__9944__4 = (function() { 
var G__9945__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__9945 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9945__delegate.call(this, x, y, z, args);
};
G__9945.cljs$lang$maxFixedArity = 3;
G__9945.cljs$lang$applyTo = (function (arglist__9946){
var x = cljs.core.first(arglist__9946);
var y = cljs.core.first(cljs.core.next(arglist__9946));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9946)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9946)));
return G__9945__delegate(x, y, z, args);
});
G__9945.cljs$lang$arity$variadic = G__9945__delegate;
return G__9945;
})()
;
G__9944 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9944__0.call(this);
case 1:
return G__9944__1.call(this,x);
case 2:
return G__9944__2.call(this,x,y);
case 3:
return G__9944__3.call(this,x,y,z);
default:
return G__9944__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9944.cljs$lang$maxFixedArity = 3;
G__9944.cljs$lang$applyTo = G__9944__4.cljs$lang$applyTo;
return G__9944;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__9947 = null;
var G__9947__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__9947__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__9947__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__9947__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__9947__4 = (function() { 
var G__9948__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__9948 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9948__delegate.call(this, x, y, z, args);
};
G__9948.cljs$lang$maxFixedArity = 3;
G__9948.cljs$lang$applyTo = (function (arglist__9949){
var x = cljs.core.first(arglist__9949);
var y = cljs.core.first(cljs.core.next(arglist__9949));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9949)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9949)));
return G__9948__delegate(x, y, z, args);
});
G__9948.cljs$lang$arity$variadic = G__9948__delegate;
return G__9948;
})()
;
G__9947 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9947__0.call(this);
case 1:
return G__9947__1.call(this,x);
case 2:
return G__9947__2.call(this,x,y);
case 3:
return G__9947__3.call(this,x,y,z);
default:
return G__9947__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9947.cljs$lang$maxFixedArity = 3;
G__9947.cljs$lang$applyTo = G__9947__4.cljs$lang$applyTo;
return G__9947;
})()
});
var juxt__4 = (function() { 
var G__9950__delegate = function (f,g,h,fs){
var fs__9940 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__9951 = null;
var G__9951__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__9921_SHARP_,p2__9922_SHARP_){
return cljs.core.conj.call(null,p1__9921_SHARP_,p2__9922_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__9940);
});
var G__9951__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__9923_SHARP_,p2__9924_SHARP_){
return cljs.core.conj.call(null,p1__9923_SHARP_,p2__9924_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__9940);
});
var G__9951__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__9925_SHARP_,p2__9926_SHARP_){
return cljs.core.conj.call(null,p1__9925_SHARP_,p2__9926_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__9940);
});
var G__9951__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__9927_SHARP_,p2__9928_SHARP_){
return cljs.core.conj.call(null,p1__9927_SHARP_,p2__9928_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__9940);
});
var G__9951__4 = (function() { 
var G__9952__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__9929_SHARP_,p2__9930_SHARP_){
return cljs.core.conj.call(null,p1__9929_SHARP_,cljs.core.apply.call(null,p2__9930_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__9940);
};
var G__9952 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9952__delegate.call(this, x, y, z, args);
};
G__9952.cljs$lang$maxFixedArity = 3;
G__9952.cljs$lang$applyTo = (function (arglist__9953){
var x = cljs.core.first(arglist__9953);
var y = cljs.core.first(cljs.core.next(arglist__9953));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9953)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9953)));
return G__9952__delegate(x, y, z, args);
});
G__9952.cljs$lang$arity$variadic = G__9952__delegate;
return G__9952;
})()
;
G__9951 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9951__0.call(this);
case 1:
return G__9951__1.call(this,x);
case 2:
return G__9951__2.call(this,x,y);
case 3:
return G__9951__3.call(this,x,y,z);
default:
return G__9951__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9951.cljs$lang$maxFixedArity = 3;
G__9951.cljs$lang$applyTo = G__9951__4.cljs$lang$applyTo;
return G__9951;
})()
};
var G__9950 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9950__delegate.call(this, f, g, h, fs);
};
G__9950.cljs$lang$maxFixedArity = 3;
G__9950.cljs$lang$applyTo = (function (arglist__9954){
var f = cljs.core.first(arglist__9954);
var g = cljs.core.first(cljs.core.next(arglist__9954));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9954)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9954)));
return G__9950__delegate(f, g, h, fs);
});
G__9950.cljs$lang$arity$variadic = G__9950__delegate;
return G__9950;
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
var G__9957 = cljs.core.next.call(null,coll);
coll = G__9957;
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
if(cljs.core.truth_((function (){var and__3822__auto____9956 = cljs.core.seq.call(null,coll);
if(and__3822__auto____9956)
{return (n > 0);
} else
{return and__3822__auto____9956;
}
})()))
{{
var G__9958 = (n - 1);
var G__9959 = cljs.core.next.call(null,coll);
n = G__9958;
coll = G__9959;
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
var matches__9961 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__9961),s))
{if((cljs.core.count.call(null,matches__9961) === 1))
{return cljs.core.first.call(null,matches__9961);
} else
{return cljs.core.vec.call(null,matches__9961);
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
var matches__9963 = re.exec(s);
if((matches__9963 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__9963) === 1))
{return cljs.core.first.call(null,matches__9963);
} else
{return cljs.core.vec.call(null,matches__9963);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__9968 = cljs.core.re_find.call(null,re,s);
var match_idx__9969 = s.search(re);
var match_str__9970 = ((cljs.core.coll_QMARK_.call(null,match_data__9968))?cljs.core.first.call(null,match_data__9968):match_data__9968);
var post_match__9971 = cljs.core.subs.call(null,s,(match_idx__9969 + cljs.core.count.call(null,match_str__9970)));
if(cljs.core.truth_(match_data__9968))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__9968,re_seq.call(null,re,post_match__9971));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__9978__9979 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___9980 = cljs.core.nth.call(null,vec__9978__9979,0,null);
var flags__9981 = cljs.core.nth.call(null,vec__9978__9979,1,null);
var pattern__9982 = cljs.core.nth.call(null,vec__9978__9979,2,null);
return (new RegExp(pattern__9982,flags__9981));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__9972_SHARP_){
return print_one.call(null,p1__9972_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____9992 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____9992))
{var and__3822__auto____9996 = (function (){var G__9993__9994 = obj;
if(G__9993__9994)
{if((function (){var or__3824__auto____9995 = (G__9993__9994.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____9995)
{return or__3824__auto____9995;
} else
{return G__9993__9994.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__9993__9994.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9993__9994);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9993__9994);
}
})();
if(cljs.core.truth_(and__3822__auto____9996))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____9996;
}
} else
{return and__3822__auto____9992;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____9997 = !((obj == null));
if(and__3822__auto____9997)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____9997;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__9998__9999 = obj;
if(G__9998__9999)
{if((function (){var or__3824__auto____10000 = (G__9998__9999.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____10000)
{return or__3824__auto____10000;
} else
{return G__9998__9999.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__9998__9999.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__9998__9999);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__9998__9999);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__10015 = cljs.core.first.call(null,objs);
var sb__10016 = (new goog.string.StringBuffer());
var G__10017__10018 = cljs.core.seq.call(null,objs);
if(G__10017__10018)
{var obj__10019 = cljs.core.first.call(null,G__10017__10018);
var G__10017__10020 = G__10017__10018;
while(true){
if((obj__10019 === first_obj__10015))
{} else
{sb__10016.append(" ");
}
var G__10021__10022 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__10019,opts));
if(G__10021__10022)
{var string__10023 = cljs.core.first.call(null,G__10021__10022);
var G__10021__10024 = G__10021__10022;
while(true){
sb__10016.append(string__10023);
var temp__3974__auto____10025 = cljs.core.next.call(null,G__10021__10024);
if(temp__3974__auto____10025)
{var G__10021__10026 = temp__3974__auto____10025;
{
var G__10029 = cljs.core.first.call(null,G__10021__10026);
var G__10030 = G__10021__10026;
string__10023 = G__10029;
G__10021__10024 = G__10030;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____10027 = cljs.core.next.call(null,G__10017__10020);
if(temp__3974__auto____10027)
{var G__10017__10028 = temp__3974__auto____10027;
{
var G__10031 = cljs.core.first.call(null,G__10017__10028);
var G__10032 = G__10017__10028;
obj__10019 = G__10031;
G__10017__10020 = G__10032;
continue;
}
} else
{}
break;
}
} else
{}
return sb__10016;
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
var sb__10034 = cljs.core.pr_sb.call(null,objs,opts);
sb__10034.append("\n");
return [cljs.core.str(sb__10034)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__10048 = cljs.core.first.call(null,objs);
var G__10049__10050 = cljs.core.seq.call(null,objs);
if(G__10049__10050)
{var obj__10051 = cljs.core.first.call(null,G__10049__10050);
var G__10049__10052 = G__10049__10050;
while(true){
if((obj__10051 === first_obj__10048))
{} else
{cljs.core.string_print.call(null," ");
}
var G__10053__10054 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__10051,opts));
if(G__10053__10054)
{var string__10055 = cljs.core.first.call(null,G__10053__10054);
var G__10053__10056 = G__10053__10054;
while(true){
cljs.core.string_print.call(null,string__10055);
var temp__3974__auto____10057 = cljs.core.next.call(null,G__10053__10056);
if(temp__3974__auto____10057)
{var G__10053__10058 = temp__3974__auto____10057;
{
var G__10061 = cljs.core.first.call(null,G__10053__10058);
var G__10062 = G__10053__10058;
string__10055 = G__10061;
G__10053__10056 = G__10062;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____10059 = cljs.core.next.call(null,G__10049__10052);
if(temp__3974__auto____10059)
{var G__10049__10060 = temp__3974__auto____10059;
{
var G__10063 = cljs.core.first.call(null,G__10049__10060);
var G__10064 = G__10049__10060;
obj__10051 = G__10063;
G__10049__10052 = G__10064;
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
pr_str.cljs$lang$applyTo = (function (arglist__10065){
var objs = cljs.core.seq(arglist__10065);;
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
prn_str.cljs$lang$applyTo = (function (arglist__10066){
var objs = cljs.core.seq(arglist__10066);;
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
pr.cljs$lang$applyTo = (function (arglist__10067){
var objs = cljs.core.seq(arglist__10067);;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__10068){
var objs = cljs.core.seq(arglist__10068);;
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
print_str.cljs$lang$applyTo = (function (arglist__10069){
var objs = cljs.core.seq(arglist__10069);;
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
println.cljs$lang$applyTo = (function (arglist__10070){
var objs = cljs.core.seq(arglist__10070);;
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
println_str.cljs$lang$applyTo = (function (arglist__10071){
var objs = cljs.core.seq(arglist__10071);;
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
prn.cljs$lang$applyTo = (function (arglist__10072){
var objs = cljs.core.seq(arglist__10072);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10073 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10073,"{",", ","}",opts,coll);
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
var pr_pair__10074 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10074,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10075 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10075,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____10076 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____10076))
{var nspc__10077 = temp__3974__auto____10076;
return [cljs.core.str(nspc__10077),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____10078 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____10078))
{var nspc__10079 = temp__3974__auto____10078;
return [cljs.core.str(nspc__10079),cljs.core.str("/")].join('');
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
var pr_pair__10080 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10080,"{",", ","}",opts,coll);
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
var normalize__10082 = (function (n,len){
var ns__10081 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__10081) < len))
{{
var G__10084 = [cljs.core.str("0"),cljs.core.str(ns__10081)].join('');
ns__10081 = G__10084;
continue;
}
} else
{return ns__10081;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__10082.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__10082.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__10082.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__10082.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__10082.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__10082.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
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
var pr_pair__10083 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10083,"{",", ","}",opts,coll);
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
var this__10085 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__10086 = this;
var G__10087__10088 = cljs.core.seq.call(null,this__10086.watches);
if(G__10087__10088)
{var G__10090__10092 = cljs.core.first.call(null,G__10087__10088);
var vec__10091__10093 = G__10090__10092;
var key__10094 = cljs.core.nth.call(null,vec__10091__10093,0,null);
var f__10095 = cljs.core.nth.call(null,vec__10091__10093,1,null);
var G__10087__10096 = G__10087__10088;
var G__10090__10097 = G__10090__10092;
var G__10087__10098 = G__10087__10096;
while(true){
var vec__10099__10100 = G__10090__10097;
var key__10101 = cljs.core.nth.call(null,vec__10099__10100,0,null);
var f__10102 = cljs.core.nth.call(null,vec__10099__10100,1,null);
var G__10087__10103 = G__10087__10098;
f__10102.call(null,key__10101,this$,oldval,newval);
var temp__3974__auto____10104 = cljs.core.next.call(null,G__10087__10103);
if(temp__3974__auto____10104)
{var G__10087__10105 = temp__3974__auto____10104;
{
var G__10112 = cljs.core.first.call(null,G__10087__10105);
var G__10113 = G__10087__10105;
G__10090__10097 = G__10112;
G__10087__10098 = G__10113;
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
var this__10106 = this;
return this$.watches = cljs.core.assoc.call(null,this__10106.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__10107 = this;
return this$.watches = cljs.core.dissoc.call(null,this__10107.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__10108 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__10108.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__10109 = this;
return this__10109.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__10110 = this;
return this__10110.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__10111 = this;
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
var G__10125__delegate = function (x,p__10114){
var map__10120__10121 = p__10114;
var map__10120__10122 = ((cljs.core.seq_QMARK_.call(null,map__10120__10121))?cljs.core.apply.call(null,cljs.core.hash_map,map__10120__10121):map__10120__10121);
var validator__10123 = cljs.core._lookup.call(null,map__10120__10122,"\uFDD0'validator",null);
var meta__10124 = cljs.core._lookup.call(null,map__10120__10122,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__10124,validator__10123,null));
};
var G__10125 = function (x,var_args){
var p__10114 = null;
if (goog.isDef(var_args)) {
  p__10114 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10125__delegate.call(this, x, p__10114);
};
G__10125.cljs$lang$maxFixedArity = 1;
G__10125.cljs$lang$applyTo = (function (arglist__10126){
var x = cljs.core.first(arglist__10126);
var p__10114 = cljs.core.rest(arglist__10126);
return G__10125__delegate(x, p__10114);
});
G__10125.cljs$lang$arity$variadic = G__10125__delegate;
return G__10125;
})()
;
atom = function(x,var_args){
var p__10114 = var_args;
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
var temp__3974__auto____10130 = a.validator;
if(cljs.core.truth_(temp__3974__auto____10130))
{var validate__10131 = temp__3974__auto____10130;
if(cljs.core.truth_(validate__10131.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6394))))].join('')));
}
} else
{}
var old_value__10132 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__10132,new_value);
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
var G__10133__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__10133 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10133__delegate.call(this, a, f, x, y, z, more);
};
G__10133.cljs$lang$maxFixedArity = 5;
G__10133.cljs$lang$applyTo = (function (arglist__10134){
var a = cljs.core.first(arglist__10134);
var f = cljs.core.first(cljs.core.next(arglist__10134));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10134)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10134))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10134)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10134)))));
return G__10133__delegate(a, f, x, y, z, more);
});
G__10133.cljs$lang$arity$variadic = G__10133__delegate;
return G__10133;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__10135){
var iref = cljs.core.first(arglist__10135);
var f = cljs.core.first(cljs.core.next(arglist__10135));
var args = cljs.core.rest(cljs.core.next(arglist__10135));
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
var this__10136 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__10136.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__10137 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__10137.state,(function (p__10138){
var curr_state__10139 = p__10138;
var curr_state__10140 = ((cljs.core.seq_QMARK_.call(null,curr_state__10139))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__10139):curr_state__10139);
var done__10141 = cljs.core._lookup.call(null,curr_state__10140,"\uFDD0'done",null);
if(cljs.core.truth_(done__10141))
{return curr_state__10140;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__10137.f.call(null)});
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
var map__10162__10163 = options;
var map__10162__10164 = ((cljs.core.seq_QMARK_.call(null,map__10162__10163))?cljs.core.apply.call(null,cljs.core.hash_map,map__10162__10163):map__10162__10163);
var keywordize_keys__10165 = cljs.core._lookup.call(null,map__10162__10164,"\uFDD0'keywordize-keys",null);
var keyfn__10166 = (cljs.core.truth_(keywordize_keys__10165)?cljs.core.keyword:cljs.core.str);
var f__10181 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2427__auto____10180 = (function iter__10174(s__10175){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10175__10178 = s__10175;
while(true){
if(cljs.core.seq.call(null,s__10175__10178))
{var k__10179 = cljs.core.first.call(null,s__10175__10178);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__10166.call(null,k__10179),thisfn.call(null,(x[k__10179]))], true),iter__10174.call(null,cljs.core.rest.call(null,s__10175__10178)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2427__auto____10180.call(null,cljs.core.js_keys.call(null,x));
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
return f__10181.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__10182){
var x = cljs.core.first(arglist__10182);
var options = cljs.core.rest(arglist__10182);
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
var mem__10187 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__10191__delegate = function (args){
var temp__3971__auto____10188 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__10187),args,null);
if(cljs.core.truth_(temp__3971__auto____10188))
{var v__10189 = temp__3971__auto____10188;
return v__10189;
} else
{var ret__10190 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__10187,cljs.core.assoc,args,ret__10190);
return ret__10190;
}
};
var G__10191 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10191__delegate.call(this, args);
};
G__10191.cljs$lang$maxFixedArity = 0;
G__10191.cljs$lang$applyTo = (function (arglist__10192){
var args = cljs.core.seq(arglist__10192);;
return G__10191__delegate(args);
});
G__10191.cljs$lang$arity$variadic = G__10191__delegate;
return G__10191;
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
var ret__10194 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__10194))
{{
var G__10195 = ret__10194;
f = G__10195;
continue;
}
} else
{return ret__10194;
}
break;
}
});
var trampoline__2 = (function() { 
var G__10196__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__10196 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10196__delegate.call(this, f, args);
};
G__10196.cljs$lang$maxFixedArity = 1;
G__10196.cljs$lang$applyTo = (function (arglist__10197){
var f = cljs.core.first(arglist__10197);
var args = cljs.core.rest(arglist__10197);
return G__10196__delegate(f, args);
});
G__10196.cljs$lang$arity$variadic = G__10196__delegate;
return G__10196;
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
var k__10199 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__10199,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__10199,cljs.core.PersistentVector.EMPTY),x));
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
var or__3824__auto____10208 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____10208)
{return or__3824__auto____10208;
} else
{var or__3824__auto____10209 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____10209)
{return or__3824__auto____10209;
} else
{var and__3822__auto____10210 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____10210)
{var and__3822__auto____10211 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____10211)
{var and__3822__auto____10212 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____10212)
{var ret__10213 = true;
var i__10214 = 0;
while(true){
if((function (){var or__3824__auto____10215 = cljs.core.not.call(null,ret__10213);
if(or__3824__auto____10215)
{return or__3824__auto____10215;
} else
{return (i__10214 === cljs.core.count.call(null,parent));
}
})())
{return ret__10213;
} else
{{
var G__10216 = isa_QMARK_.call(null,h,child.call(null,i__10214),parent.call(null,i__10214));
var G__10217 = (i__10214 + 1);
ret__10213 = G__10216;
i__10214 = G__10217;
continue;
}
}
break;
}
} else
{return and__3822__auto____10212;
}
} else
{return and__3822__auto____10211;
}
} else
{return and__3822__auto____10210;
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
var tp__10226 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__10227 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__10228 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__10229 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____10230 = ((cljs.core.contains_QMARK_.call(null,tp__10226.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__10228.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__10228.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__10226,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__10229.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__10227,parent,ta__10228),"\uFDD0'descendants":tf__10229.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__10228,tag,td__10227)});
})());
if(cljs.core.truth_(or__3824__auto____10230))
{return or__3824__auto____10230;
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
var parentMap__10235 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__10236 = (cljs.core.truth_(parentMap__10235.call(null,tag))?cljs.core.disj.call(null,parentMap__10235.call(null,tag),parent):cljs.core.set([]));
var newParents__10237 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__10236))?cljs.core.assoc.call(null,parentMap__10235,tag,childsParents__10236):cljs.core.dissoc.call(null,parentMap__10235,tag));
var deriv_seq__10238 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__10218_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__10218_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__10218_SHARP_),cljs.core.second.call(null,p1__10218_SHARP_)));
}),cljs.core.seq.call(null,newParents__10237)));
if(cljs.core.contains_QMARK_.call(null,parentMap__10235.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__10219_SHARP_,p2__10220_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__10219_SHARP_,p2__10220_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__10238));
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
var xprefs__10246 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____10248 = (cljs.core.truth_((function (){var and__3822__auto____10247 = xprefs__10246;
if(cljs.core.truth_(and__3822__auto____10247))
{return xprefs__10246.call(null,y);
} else
{return and__3822__auto____10247;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____10248))
{return or__3824__auto____10248;
} else
{var or__3824__auto____10250 = (function (){var ps__10249 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__10249) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__10249),prefer_table)))
{} else
{}
{
var G__10253 = cljs.core.rest.call(null,ps__10249);
ps__10249 = G__10253;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____10250))
{return or__3824__auto____10250;
} else
{var or__3824__auto____10252 = (function (){var ps__10251 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__10251) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__10251),y,prefer_table)))
{} else
{}
{
var G__10254 = cljs.core.rest.call(null,ps__10251);
ps__10251 = G__10254;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____10252))
{return or__3824__auto____10252;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____10256 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____10256))
{return or__3824__auto____10256;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__10274 = cljs.core.reduce.call(null,(function (be,p__10266){
var vec__10267__10268 = p__10266;
var k__10269 = cljs.core.nth.call(null,vec__10267__10268,0,null);
var ___10270 = cljs.core.nth.call(null,vec__10267__10268,1,null);
var e__10271 = vec__10267__10268;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__10269))
{var be2__10273 = (cljs.core.truth_((function (){var or__3824__auto____10272 = (be == null);
if(or__3824__auto____10272)
{return or__3824__auto____10272;
} else
{return cljs.core.dominates.call(null,k__10269,cljs.core.first.call(null,be),prefer_table);
}
})())?e__10271:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__10273),k__10269,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__10269),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__10273)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__10273;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__10274))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__10274));
return cljs.core.second.call(null,best_entry__10274);
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
if((function (){var and__3822__auto____10278 = mf;
if(and__3822__auto____10278)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____10278;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{return (function (){var or__3824__auto____10279 = (cljs.core._reset[goog.typeOf(mf)]);
if(or__3824__auto____10279)
{return or__3824__auto____10279;
} else
{var or__3824__auto____10280 = (cljs.core._reset["_"]);
if(or__3824__auto____10280)
{return or__3824__auto____10280;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____10284 = mf;
if(and__3822__auto____10284)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____10284;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{return (function (){var or__3824__auto____10285 = (cljs.core._add_method[goog.typeOf(mf)]);
if(or__3824__auto____10285)
{return or__3824__auto____10285;
} else
{var or__3824__auto____10286 = (cljs.core._add_method["_"]);
if(or__3824__auto____10286)
{return or__3824__auto____10286;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____10290 = mf;
if(and__3822__auto____10290)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____10290;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____10291 = (cljs.core._remove_method[goog.typeOf(mf)]);
if(or__3824__auto____10291)
{return or__3824__auto____10291;
} else
{var or__3824__auto____10292 = (cljs.core._remove_method["_"]);
if(or__3824__auto____10292)
{return or__3824__auto____10292;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____10296 = mf;
if(and__3822__auto____10296)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____10296;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3824__auto____10297 = (cljs.core._prefer_method[goog.typeOf(mf)]);
if(or__3824__auto____10297)
{return or__3824__auto____10297;
} else
{var or__3824__auto____10298 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____10298)
{return or__3824__auto____10298;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____10302 = mf;
if(and__3822__auto____10302)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____10302;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____10303 = (cljs.core._get_method[goog.typeOf(mf)]);
if(or__3824__auto____10303)
{return or__3824__auto____10303;
} else
{var or__3824__auto____10304 = (cljs.core._get_method["_"]);
if(or__3824__auto____10304)
{return or__3824__auto____10304;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____10308 = mf;
if(and__3822__auto____10308)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____10308;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{return (function (){var or__3824__auto____10309 = (cljs.core._methods[goog.typeOf(mf)]);
if(or__3824__auto____10309)
{return or__3824__auto____10309;
} else
{var or__3824__auto____10310 = (cljs.core._methods["_"]);
if(or__3824__auto____10310)
{return or__3824__auto____10310;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____10314 = mf;
if(and__3822__auto____10314)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____10314;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{return (function (){var or__3824__auto____10315 = (cljs.core._prefers[goog.typeOf(mf)]);
if(or__3824__auto____10315)
{return or__3824__auto____10315;
} else
{var or__3824__auto____10316 = (cljs.core._prefers["_"]);
if(or__3824__auto____10316)
{return or__3824__auto____10316;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____10320 = mf;
if(and__3822__auto____10320)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____10320;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{return (function (){var or__3824__auto____10321 = (cljs.core._dispatch[goog.typeOf(mf)]);
if(or__3824__auto____10321)
{return or__3824__auto____10321;
} else
{var or__3824__auto____10322 = (cljs.core._dispatch["_"]);
if(or__3824__auto____10322)
{return or__3824__auto____10322;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
void 0;cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__10325 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__10326 = cljs.core._get_method.call(null,mf,dispatch_val__10325);
if(cljs.core.truth_(target_fn__10326))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__10325)].join('')));
}
return cljs.core.apply.call(null,target_fn__10326,args);
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
var this__10327 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__10328 = this;
cljs.core.swap_BANG_.call(null,this__10328.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10328.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10328.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10328.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__10329 = this;
cljs.core.swap_BANG_.call(null,this__10329.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__10329.method_cache,this__10329.method_table,this__10329.cached_hierarchy,this__10329.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__10330 = this;
cljs.core.swap_BANG_.call(null,this__10330.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__10330.method_cache,this__10330.method_table,this__10330.cached_hierarchy,this__10330.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__10331 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__10331.cached_hierarchy),cljs.core.deref.call(null,this__10331.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__10331.method_cache,this__10331.method_table,this__10331.cached_hierarchy,this__10331.hierarchy);
}
var temp__3971__auto____10332 = cljs.core.deref.call(null,this__10331.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____10332))
{var target_fn__10333 = temp__3971__auto____10332;
return target_fn__10333;
} else
{var temp__3971__auto____10334 = cljs.core.find_and_cache_best_method.call(null,this__10331.name,dispatch_val,this__10331.hierarchy,this__10331.method_table,this__10331.prefer_table,this__10331.method_cache,this__10331.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____10334))
{var target_fn__10335 = temp__3971__auto____10334;
return target_fn__10335;
} else
{return cljs.core.deref.call(null,this__10331.method_table).call(null,this__10331.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__10336 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__10336.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__10336.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__10336.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__10336.method_cache,this__10336.method_table,this__10336.cached_hierarchy,this__10336.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__10337 = this;
return cljs.core.deref.call(null,this__10337.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__10338 = this;
return cljs.core.deref.call(null,this__10338.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__10339 = this;
return cljs.core.do_dispatch.call(null,mf,this__10339.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__10341__delegate = function (_,args){
var self__10340 = this;
return cljs.core._dispatch.call(null,self__10340,args);
};
var G__10341 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10341__delegate.call(this, _, args);
};
G__10341.cljs$lang$maxFixedArity = 1;
G__10341.cljs$lang$applyTo = (function (arglist__10342){
var _ = cljs.core.first(arglist__10342);
var args = cljs.core.rest(arglist__10342);
return G__10341__delegate(_, args);
});
G__10341.cljs$lang$arity$variadic = G__10341__delegate;
return G__10341;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__10343 = this;
return cljs.core._dispatch.call(null,self__10343,args);
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
var this__10344 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_10346,_){
var this__10345 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__10345.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__10347 = this;
return (this__10347.uuid === other.uuid);
});
cljs.core.UUID.prototype.toString = (function (){
var this__10348 = this;
var this__10349 = this;
return cljs.core.pr_str.call(null,this__10349);
});
cljs.core.UUID;
