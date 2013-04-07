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
var G__6651__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__6651 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6651__delegate.call(this, array, i, idxs);
};
G__6651.cljs$lang$maxFixedArity = 2;
G__6651.cljs$lang$applyTo = (function (arglist__6652){
var array = cljs.core.first(arglist__6652);
var i = cljs.core.first(cljs.core.next(arglist__6652));
var idxs = cljs.core.rest(cljs.core.next(arglist__6652));
return G__6651__delegate(array, i, idxs);
});
G__6651.cljs$lang$arity$variadic = G__6651__delegate;
return G__6651;
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
if((function (){var and__3822__auto____6716 = this$;
if(and__3822__auto____6716)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____6716;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
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
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____6719 = this$;
if(and__3822__auto____6719)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____6719;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
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
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____6722 = this$;
if(and__3822__auto____6722)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____6722;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
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
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____6725 = this$;
if(and__3822__auto____6725)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____6725;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
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
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____6728 = this$;
if(and__3822__auto____6728)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____6728;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
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
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____6731 = this$;
if(and__3822__auto____6731)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____6731;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
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
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____6734 = this$;
if(and__3822__auto____6734)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____6734;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
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
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____6737 = this$;
if(and__3822__auto____6737)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____6737;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
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
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____6740 = this$;
if(and__3822__auto____6740)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____6740;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
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
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____6743 = this$;
if(and__3822__auto____6743)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____6743;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3824__auto____6744 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6744)
{return or__3824__auto____6744;
} else
{var or__3824__auto____6745 = (cljs.core._invoke["_"]);
if(or__3824__auto____6745)
{return or__3824__auto____6745;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____6746 = this$;
if(and__3822__auto____6746)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____6746;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3824__auto____6747 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6747)
{return or__3824__auto____6747;
} else
{var or__3824__auto____6748 = (cljs.core._invoke["_"]);
if(or__3824__auto____6748)
{return or__3824__auto____6748;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____6749 = this$;
if(and__3822__auto____6749)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____6749;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3824__auto____6750 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6750)
{return or__3824__auto____6750;
} else
{var or__3824__auto____6751 = (cljs.core._invoke["_"]);
if(or__3824__auto____6751)
{return or__3824__auto____6751;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____6752 = this$;
if(and__3822__auto____6752)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____6752;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3824__auto____6753 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6753)
{return or__3824__auto____6753;
} else
{var or__3824__auto____6754 = (cljs.core._invoke["_"]);
if(or__3824__auto____6754)
{return or__3824__auto____6754;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____6755 = this$;
if(and__3822__auto____6755)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____6755;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3824__auto____6756 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6756)
{return or__3824__auto____6756;
} else
{var or__3824__auto____6757 = (cljs.core._invoke["_"]);
if(or__3824__auto____6757)
{return or__3824__auto____6757;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____6758 = this$;
if(and__3822__auto____6758)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____6758;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3824__auto____6759 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6759)
{return or__3824__auto____6759;
} else
{var or__3824__auto____6760 = (cljs.core._invoke["_"]);
if(or__3824__auto____6760)
{return or__3824__auto____6760;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____6761 = this$;
if(and__3822__auto____6761)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____6761;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3824__auto____6762 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6762)
{return or__3824__auto____6762;
} else
{var or__3824__auto____6763 = (cljs.core._invoke["_"]);
if(or__3824__auto____6763)
{return or__3824__auto____6763;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____6764 = this$;
if(and__3822__auto____6764)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____6764;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3824__auto____6765 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6765)
{return or__3824__auto____6765;
} else
{var or__3824__auto____6766 = (cljs.core._invoke["_"]);
if(or__3824__auto____6766)
{return or__3824__auto____6766;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____6767 = this$;
if(and__3822__auto____6767)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____6767;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3824__auto____6768 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6768)
{return or__3824__auto____6768;
} else
{var or__3824__auto____6769 = (cljs.core._invoke["_"]);
if(or__3824__auto____6769)
{return or__3824__auto____6769;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____6770 = this$;
if(and__3822__auto____6770)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____6770;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3824__auto____6771 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6771)
{return or__3824__auto____6771;
} else
{var or__3824__auto____6772 = (cljs.core._invoke["_"]);
if(or__3824__auto____6772)
{return or__3824__auto____6772;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____6773 = this$;
if(and__3822__auto____6773)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____6773;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3824__auto____6774 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6774)
{return or__3824__auto____6774;
} else
{var or__3824__auto____6775 = (cljs.core._invoke["_"]);
if(or__3824__auto____6775)
{return or__3824__auto____6775;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____6776 = this$;
if(and__3822__auto____6776)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____6776;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3824__auto____6777 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6777)
{return or__3824__auto____6777;
} else
{var or__3824__auto____6778 = (cljs.core._invoke["_"]);
if(or__3824__auto____6778)
{return or__3824__auto____6778;
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
if((function (){var and__3822__auto____6782 = coll;
if(and__3822__auto____6782)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____6782;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{return (function (){var or__3824__auto____6783 = (cljs.core._count[goog.typeOf(coll)]);
if(or__3824__auto____6783)
{return or__3824__auto____6783;
} else
{var or__3824__auto____6784 = (cljs.core._count["_"]);
if(or__3824__auto____6784)
{return or__3824__auto____6784;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____6788 = coll;
if(and__3822__auto____6788)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____6788;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (function (){var or__3824__auto____6789 = (cljs.core._empty[goog.typeOf(coll)]);
if(or__3824__auto____6789)
{return or__3824__auto____6789;
} else
{var or__3824__auto____6790 = (cljs.core._empty["_"]);
if(or__3824__auto____6790)
{return or__3824__auto____6790;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____6794 = coll;
if(and__3822__auto____6794)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____6794;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{return (function (){var or__3824__auto____6795 = (cljs.core._conj[goog.typeOf(coll)]);
if(or__3824__auto____6795)
{return or__3824__auto____6795;
} else
{var or__3824__auto____6796 = (cljs.core._conj["_"]);
if(or__3824__auto____6796)
{return or__3824__auto____6796;
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
if((function (){var and__3822__auto____6803 = coll;
if(and__3822__auto____6803)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____6803;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return (function (){var or__3824__auto____6804 = (cljs.core._nth[goog.typeOf(coll)]);
if(or__3824__auto____6804)
{return or__3824__auto____6804;
} else
{var or__3824__auto____6805 = (cljs.core._nth["_"]);
if(or__3824__auto____6805)
{return or__3824__auto____6805;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____6806 = coll;
if(and__3822__auto____6806)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____6806;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{return (function (){var or__3824__auto____6807 = (cljs.core._nth[goog.typeOf(coll)]);
if(or__3824__auto____6807)
{return or__3824__auto____6807;
} else
{var or__3824__auto____6808 = (cljs.core._nth["_"]);
if(or__3824__auto____6808)
{return or__3824__auto____6808;
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
if((function (){var and__3822__auto____6812 = coll;
if(and__3822__auto____6812)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____6812;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____6813 = (cljs.core._first[goog.typeOf(coll)]);
if(or__3824__auto____6813)
{return or__3824__auto____6813;
} else
{var or__3824__auto____6814 = (cljs.core._first["_"]);
if(or__3824__auto____6814)
{return or__3824__auto____6814;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____6818 = coll;
if(and__3822__auto____6818)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____6818;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{return (function (){var or__3824__auto____6819 = (cljs.core._rest[goog.typeOf(coll)]);
if(or__3824__auto____6819)
{return or__3824__auto____6819;
} else
{var or__3824__auto____6820 = (cljs.core._rest["_"]);
if(or__3824__auto____6820)
{return or__3824__auto____6820;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____6824 = coll;
if(and__3822__auto____6824)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____6824;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{return (function (){var or__3824__auto____6825 = (cljs.core._next[goog.typeOf(coll)]);
if(or__3824__auto____6825)
{return or__3824__auto____6825;
} else
{var or__3824__auto____6826 = (cljs.core._next["_"]);
if(or__3824__auto____6826)
{return or__3824__auto____6826;
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
if((function (){var and__3822__auto____6833 = o;
if(and__3822__auto____6833)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____6833;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{return (function (){var or__3824__auto____6834 = (cljs.core._lookup[goog.typeOf(o)]);
if(or__3824__auto____6834)
{return or__3824__auto____6834;
} else
{var or__3824__auto____6835 = (cljs.core._lookup["_"]);
if(or__3824__auto____6835)
{return or__3824__auto____6835;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____6836 = o;
if(and__3822__auto____6836)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____6836;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{return (function (){var or__3824__auto____6837 = (cljs.core._lookup[goog.typeOf(o)]);
if(or__3824__auto____6837)
{return or__3824__auto____6837;
} else
{var or__3824__auto____6838 = (cljs.core._lookup["_"]);
if(or__3824__auto____6838)
{return or__3824__auto____6838;
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
if((function (){var and__3822__auto____6842 = coll;
if(and__3822__auto____6842)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____6842;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{return (function (){var or__3824__auto____6843 = (cljs.core._contains_key_QMARK_[goog.typeOf(coll)]);
if(or__3824__auto____6843)
{return or__3824__auto____6843;
} else
{var or__3824__auto____6844 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____6844)
{return or__3824__auto____6844;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____6848 = coll;
if(and__3822__auto____6848)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____6848;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{return (function (){var or__3824__auto____6849 = (cljs.core._assoc[goog.typeOf(coll)]);
if(or__3824__auto____6849)
{return or__3824__auto____6849;
} else
{var or__3824__auto____6850 = (cljs.core._assoc["_"]);
if(or__3824__auto____6850)
{return or__3824__auto____6850;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
void 0;void 0;cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____6854 = coll;
if(and__3822__auto____6854)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____6854;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{return (function (){var or__3824__auto____6855 = (cljs.core._dissoc[goog.typeOf(coll)]);
if(or__3824__auto____6855)
{return or__3824__auto____6855;
} else
{var or__3824__auto____6856 = (cljs.core._dissoc["_"]);
if(or__3824__auto____6856)
{return or__3824__auto____6856;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
void 0;void 0;cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____6860 = coll;
if(and__3822__auto____6860)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____6860;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{return (function (){var or__3824__auto____6861 = (cljs.core._key[goog.typeOf(coll)]);
if(or__3824__auto____6861)
{return or__3824__auto____6861;
} else
{var or__3824__auto____6862 = (cljs.core._key["_"]);
if(or__3824__auto____6862)
{return or__3824__auto____6862;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____6866 = coll;
if(and__3822__auto____6866)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____6866;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{return (function (){var or__3824__auto____6867 = (cljs.core._val[goog.typeOf(coll)]);
if(or__3824__auto____6867)
{return or__3824__auto____6867;
} else
{var or__3824__auto____6868 = (cljs.core._val["_"]);
if(or__3824__auto____6868)
{return or__3824__auto____6868;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____6872 = coll;
if(and__3822__auto____6872)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____6872;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{return (function (){var or__3824__auto____6873 = (cljs.core._disjoin[goog.typeOf(coll)]);
if(or__3824__auto____6873)
{return or__3824__auto____6873;
} else
{var or__3824__auto____6874 = (cljs.core._disjoin["_"]);
if(or__3824__auto____6874)
{return or__3824__auto____6874;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
void 0;void 0;cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____6878 = coll;
if(and__3822__auto____6878)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____6878;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{return (function (){var or__3824__auto____6879 = (cljs.core._peek[goog.typeOf(coll)]);
if(or__3824__auto____6879)
{return or__3824__auto____6879;
} else
{var or__3824__auto____6880 = (cljs.core._peek["_"]);
if(or__3824__auto____6880)
{return or__3824__auto____6880;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____6884 = coll;
if(and__3822__auto____6884)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____6884;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{return (function (){var or__3824__auto____6885 = (cljs.core._pop[goog.typeOf(coll)]);
if(or__3824__auto____6885)
{return or__3824__auto____6885;
} else
{var or__3824__auto____6886 = (cljs.core._pop["_"]);
if(or__3824__auto____6886)
{return or__3824__auto____6886;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____6890 = coll;
if(and__3822__auto____6890)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____6890;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{return (function (){var or__3824__auto____6891 = (cljs.core._assoc_n[goog.typeOf(coll)]);
if(or__3824__auto____6891)
{return or__3824__auto____6891;
} else
{var or__3824__auto____6892 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____6892)
{return or__3824__auto____6892;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
void 0;void 0;cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____6896 = o;
if(and__3822__auto____6896)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____6896;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{return (function (){var or__3824__auto____6897 = (cljs.core._deref[goog.typeOf(o)]);
if(or__3824__auto____6897)
{return or__3824__auto____6897;
} else
{var or__3824__auto____6898 = (cljs.core._deref["_"]);
if(or__3824__auto____6898)
{return or__3824__auto____6898;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____6902 = o;
if(and__3822__auto____6902)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____6902;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{return (function (){var or__3824__auto____6903 = (cljs.core._deref_with_timeout[goog.typeOf(o)]);
if(or__3824__auto____6903)
{return or__3824__auto____6903;
} else
{var or__3824__auto____6904 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____6904)
{return or__3824__auto____6904;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
void 0;void 0;cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____6908 = o;
if(and__3822__auto____6908)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____6908;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{return (function (){var or__3824__auto____6909 = (cljs.core._meta[goog.typeOf(o)]);
if(or__3824__auto____6909)
{return or__3824__auto____6909;
} else
{var or__3824__auto____6910 = (cljs.core._meta["_"]);
if(or__3824__auto____6910)
{return or__3824__auto____6910;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____6914 = o;
if(and__3822__auto____6914)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____6914;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{return (function (){var or__3824__auto____6915 = (cljs.core._with_meta[goog.typeOf(o)]);
if(or__3824__auto____6915)
{return or__3824__auto____6915;
} else
{var or__3824__auto____6916 = (cljs.core._with_meta["_"]);
if(or__3824__auto____6916)
{return or__3824__auto____6916;
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
if((function (){var and__3822__auto____6923 = coll;
if(and__3822__auto____6923)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____6923;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{return (function (){var or__3824__auto____6924 = (cljs.core._reduce[goog.typeOf(coll)]);
if(or__3824__auto____6924)
{return or__3824__auto____6924;
} else
{var or__3824__auto____6925 = (cljs.core._reduce["_"]);
if(or__3824__auto____6925)
{return or__3824__auto____6925;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____6926 = coll;
if(and__3822__auto____6926)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____6926;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{return (function (){var or__3824__auto____6927 = (cljs.core._reduce[goog.typeOf(coll)]);
if(or__3824__auto____6927)
{return or__3824__auto____6927;
} else
{var or__3824__auto____6928 = (cljs.core._reduce["_"]);
if(or__3824__auto____6928)
{return or__3824__auto____6928;
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
if((function (){var and__3822__auto____6932 = coll;
if(and__3822__auto____6932)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____6932;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{return (function (){var or__3824__auto____6933 = (cljs.core._kv_reduce[goog.typeOf(coll)]);
if(or__3824__auto____6933)
{return or__3824__auto____6933;
} else
{var or__3824__auto____6934 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____6934)
{return or__3824__auto____6934;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
void 0;void 0;cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____6938 = o;
if(and__3822__auto____6938)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____6938;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{return (function (){var or__3824__auto____6939 = (cljs.core._equiv[goog.typeOf(o)]);
if(or__3824__auto____6939)
{return or__3824__auto____6939;
} else
{var or__3824__auto____6940 = (cljs.core._equiv["_"]);
if(or__3824__auto____6940)
{return or__3824__auto____6940;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
void 0;void 0;cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____6944 = o;
if(and__3822__auto____6944)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____6944;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{return (function (){var or__3824__auto____6945 = (cljs.core._hash[goog.typeOf(o)]);
if(or__3824__auto____6945)
{return or__3824__auto____6945;
} else
{var or__3824__auto____6946 = (cljs.core._hash["_"]);
if(or__3824__auto____6946)
{return or__3824__auto____6946;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____6950 = o;
if(and__3822__auto____6950)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____6950;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{return (function (){var or__3824__auto____6951 = (cljs.core._seq[goog.typeOf(o)]);
if(or__3824__auto____6951)
{return or__3824__auto____6951;
} else
{var or__3824__auto____6952 = (cljs.core._seq["_"]);
if(or__3824__auto____6952)
{return or__3824__auto____6952;
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
if((function (){var and__3822__auto____6956 = coll;
if(and__3822__auto____6956)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____6956;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{return (function (){var or__3824__auto____6957 = (cljs.core._rseq[goog.typeOf(coll)]);
if(or__3824__auto____6957)
{return or__3824__auto____6957;
} else
{var or__3824__auto____6958 = (cljs.core._rseq["_"]);
if(or__3824__auto____6958)
{return or__3824__auto____6958;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____6962 = coll;
if(and__3822__auto____6962)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____6962;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{return (function (){var or__3824__auto____6963 = (cljs.core._sorted_seq[goog.typeOf(coll)]);
if(or__3824__auto____6963)
{return or__3824__auto____6963;
} else
{var or__3824__auto____6964 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____6964)
{return or__3824__auto____6964;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____6968 = coll;
if(and__3822__auto____6968)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____6968;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{return (function (){var or__3824__auto____6969 = (cljs.core._sorted_seq_from[goog.typeOf(coll)]);
if(or__3824__auto____6969)
{return or__3824__auto____6969;
} else
{var or__3824__auto____6970 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____6970)
{return or__3824__auto____6970;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____6974 = coll;
if(and__3822__auto____6974)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____6974;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{return (function (){var or__3824__auto____6975 = (cljs.core._entry_key[goog.typeOf(coll)]);
if(or__3824__auto____6975)
{return or__3824__auto____6975;
} else
{var or__3824__auto____6976 = (cljs.core._entry_key["_"]);
if(or__3824__auto____6976)
{return or__3824__auto____6976;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____6980 = coll;
if(and__3822__auto____6980)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____6980;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{return (function (){var or__3824__auto____6981 = (cljs.core._comparator[goog.typeOf(coll)]);
if(or__3824__auto____6981)
{return or__3824__auto____6981;
} else
{var or__3824__auto____6982 = (cljs.core._comparator["_"]);
if(or__3824__auto____6982)
{return or__3824__auto____6982;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____6986 = o;
if(and__3822__auto____6986)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____6986;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{return (function (){var or__3824__auto____6987 = (cljs.core._pr_seq[goog.typeOf(o)]);
if(or__3824__auto____6987)
{return or__3824__auto____6987;
} else
{var or__3824__auto____6988 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____6988)
{return or__3824__auto____6988;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
void 0;void 0;cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____6992 = d;
if(and__3822__auto____6992)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____6992;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{return (function (){var or__3824__auto____6993 = (cljs.core._realized_QMARK_[goog.typeOf(d)]);
if(or__3824__auto____6993)
{return or__3824__auto____6993;
} else
{var or__3824__auto____6994 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____6994)
{return or__3824__auto____6994;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
void 0;void 0;cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____6998 = this$;
if(and__3822__auto____6998)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____6998;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{return (function (){var or__3824__auto____6999 = (cljs.core._notify_watches[goog.typeOf(this$)]);
if(or__3824__auto____6999)
{return or__3824__auto____6999;
} else
{var or__3824__auto____7000 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____7000)
{return or__3824__auto____7000;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____7004 = this$;
if(and__3822__auto____7004)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____7004;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{return (function (){var or__3824__auto____7005 = (cljs.core._add_watch[goog.typeOf(this$)]);
if(or__3824__auto____7005)
{return or__3824__auto____7005;
} else
{var or__3824__auto____7006 = (cljs.core._add_watch["_"]);
if(or__3824__auto____7006)
{return or__3824__auto____7006;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____7010 = this$;
if(and__3822__auto____7010)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____7010;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{return (function (){var or__3824__auto____7011 = (cljs.core._remove_watch[goog.typeOf(this$)]);
if(or__3824__auto____7011)
{return or__3824__auto____7011;
} else
{var or__3824__auto____7012 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____7012)
{return or__3824__auto____7012;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
void 0;void 0;cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____7016 = coll;
if(and__3822__auto____7016)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____7016;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{return (function (){var or__3824__auto____7017 = (cljs.core._as_transient[goog.typeOf(coll)]);
if(or__3824__auto____7017)
{return or__3824__auto____7017;
} else
{var or__3824__auto____7018 = (cljs.core._as_transient["_"]);
if(or__3824__auto____7018)
{return or__3824__auto____7018;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____7022 = tcoll;
if(and__3822__auto____7022)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____7022;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{return (function (){var or__3824__auto____7023 = (cljs.core._conj_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____7023)
{return or__3824__auto____7023;
} else
{var or__3824__auto____7024 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____7024)
{return or__3824__auto____7024;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____7028 = tcoll;
if(and__3822__auto____7028)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____7028;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3824__auto____7029 = (cljs.core._persistent_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____7029)
{return or__3824__auto____7029;
} else
{var or__3824__auto____7030 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____7030)
{return or__3824__auto____7030;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____7034 = tcoll;
if(and__3822__auto____7034)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____7034;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{return (function (){var or__3824__auto____7035 = (cljs.core._assoc_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____7035)
{return or__3824__auto____7035;
} else
{var or__3824__auto____7036 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____7036)
{return or__3824__auto____7036;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
void 0;void 0;cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____7040 = tcoll;
if(and__3822__auto____7040)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____7040;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{return (function (){var or__3824__auto____7041 = (cljs.core._dissoc_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____7041)
{return or__3824__auto____7041;
} else
{var or__3824__auto____7042 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____7042)
{return or__3824__auto____7042;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
void 0;void 0;cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____7046 = tcoll;
if(and__3822__auto____7046)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____7046;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{return (function (){var or__3824__auto____7047 = (cljs.core._assoc_n_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____7047)
{return or__3824__auto____7047;
} else
{var or__3824__auto____7048 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____7048)
{return or__3824__auto____7048;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____7052 = tcoll;
if(and__3822__auto____7052)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____7052;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3824__auto____7053 = (cljs.core._pop_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____7053)
{return or__3824__auto____7053;
} else
{var or__3824__auto____7054 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____7054)
{return or__3824__auto____7054;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____7058 = tcoll;
if(and__3822__auto____7058)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____7058;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{return (function (){var or__3824__auto____7059 = (cljs.core._disjoin_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____7059)
{return or__3824__auto____7059;
} else
{var or__3824__auto____7060 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____7060)
{return or__3824__auto____7060;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
void 0;void 0;cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____7064 = x;
if(and__3822__auto____7064)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____7064;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{return (function (){var or__3824__auto____7065 = (cljs.core._compare[goog.typeOf(x)]);
if(or__3824__auto____7065)
{return or__3824__auto____7065;
} else
{var or__3824__auto____7066 = (cljs.core._compare["_"]);
if(or__3824__auto____7066)
{return or__3824__auto____7066;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
void 0;void 0;cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____7070 = coll;
if(and__3822__auto____7070)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____7070;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____7071 = (cljs.core._drop_first[goog.typeOf(coll)]);
if(or__3824__auto____7071)
{return or__3824__auto____7071;
} else
{var or__3824__auto____7072 = (cljs.core._drop_first["_"]);
if(or__3824__auto____7072)
{return or__3824__auto____7072;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____7076 = coll;
if(and__3822__auto____7076)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____7076;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____7077 = (cljs.core._chunked_first[goog.typeOf(coll)]);
if(or__3824__auto____7077)
{return or__3824__auto____7077;
} else
{var or__3824__auto____7078 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____7078)
{return or__3824__auto____7078;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____7082 = coll;
if(and__3822__auto____7082)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____7082;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{return (function (){var or__3824__auto____7083 = (cljs.core._chunked_rest[goog.typeOf(coll)]);
if(or__3824__auto____7083)
{return or__3824__auto____7083;
} else
{var or__3824__auto____7084 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____7084)
{return or__3824__auto____7084;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____7088 = coll;
if(and__3822__auto____7088)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____7088;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{return (function (){var or__3824__auto____7089 = (cljs.core._chunked_next[goog.typeOf(coll)]);
if(or__3824__auto____7089)
{return or__3824__auto____7089;
} else
{var or__3824__auto____7090 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____7090)
{return or__3824__auto____7090;
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
var or__3824__auto____7092 = (x === y);
if(or__3824__auto____7092)
{return or__3824__auto____7092;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__7093__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__7094 = y;
var G__7095 = cljs.core.first.call(null,more);
var G__7096 = cljs.core.next.call(null,more);
x = G__7094;
y = G__7095;
more = G__7096;
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
var G__7093 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7093__delegate.call(this, x, y, more);
};
G__7093.cljs$lang$maxFixedArity = 2;
G__7093.cljs$lang$applyTo = (function (arglist__7097){
var x = cljs.core.first(arglist__7097);
var y = cljs.core.first(cljs.core.next(arglist__7097));
var more = cljs.core.rest(cljs.core.next(arglist__7097));
return G__7093__delegate(x, y, more);
});
G__7093.cljs$lang$arity$variadic = G__7093__delegate;
return G__7093;
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
var G__7098 = null;
var G__7098__2 = (function (o,k){
return null;
});
var G__7098__3 = (function (o,k,not_found){
return not_found;
});
G__7098 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__7098__2.call(this,o,k);
case 3:
return G__7098__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7098;
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
var G__7099 = null;
var G__7099__2 = (function (_,f){
return f.call(null);
});
var G__7099__3 = (function (_,f,start){
return start;
});
G__7099 = function(_,f,start){
switch(arguments.length){
case 2:
return G__7099__2.call(this,_,f);
case 3:
return G__7099__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7099;
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
var G__7100 = null;
var G__7100__2 = (function (_,n){
return null;
});
var G__7100__3 = (function (_,n,not_found){
return not_found;
});
G__7100 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__7100__2.call(this,_,n);
case 3:
return G__7100__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7100;
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
var cnt__7113 = cljs.core._count.call(null,cicoll);
if((cnt__7113 === 0))
{return f.call(null);
} else
{var val__7114 = cljs.core._nth.call(null,cicoll,0);
var n__7115 = 1;
while(true){
if((n__7115 < cnt__7113))
{var nval__7116 = f.call(null,val__7114,cljs.core._nth.call(null,cicoll,n__7115));
if(cljs.core.reduced_QMARK_.call(null,nval__7116))
{return cljs.core.deref.call(null,nval__7116);
} else
{{
var G__7125 = nval__7116;
var G__7126 = (n__7115 + 1);
val__7114 = G__7125;
n__7115 = G__7126;
continue;
}
}
} else
{return val__7114;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__7117 = cljs.core._count.call(null,cicoll);
var val__7118 = val;
var n__7119 = 0;
while(true){
if((n__7119 < cnt__7117))
{var nval__7120 = f.call(null,val__7118,cljs.core._nth.call(null,cicoll,n__7119));
if(cljs.core.reduced_QMARK_.call(null,nval__7120))
{return cljs.core.deref.call(null,nval__7120);
} else
{{
var G__7127 = nval__7120;
var G__7128 = (n__7119 + 1);
val__7118 = G__7127;
n__7119 = G__7128;
continue;
}
}
} else
{return val__7118;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__7121 = cljs.core._count.call(null,cicoll);
var val__7122 = val;
var n__7123 = idx;
while(true){
if((n__7123 < cnt__7121))
{var nval__7124 = f.call(null,val__7122,cljs.core._nth.call(null,cicoll,n__7123));
if(cljs.core.reduced_QMARK_.call(null,nval__7124))
{return cljs.core.deref.call(null,nval__7124);
} else
{{
var G__7129 = nval__7124;
var G__7130 = (n__7123 + 1);
val__7122 = G__7129;
n__7123 = G__7130;
continue;
}
}
} else
{return val__7122;
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
var cnt__7143 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__7144 = (arr[0]);
var n__7145 = 1;
while(true){
if((n__7145 < cnt__7143))
{var nval__7146 = f.call(null,val__7144,(arr[n__7145]));
if(cljs.core.reduced_QMARK_.call(null,nval__7146))
{return cljs.core.deref.call(null,nval__7146);
} else
{{
var G__7155 = nval__7146;
var G__7156 = (n__7145 + 1);
val__7144 = G__7155;
n__7145 = G__7156;
continue;
}
}
} else
{return val__7144;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__7147 = arr.length;
var val__7148 = val;
var n__7149 = 0;
while(true){
if((n__7149 < cnt__7147))
{var nval__7150 = f.call(null,val__7148,(arr[n__7149]));
if(cljs.core.reduced_QMARK_.call(null,nval__7150))
{return cljs.core.deref.call(null,nval__7150);
} else
{{
var G__7157 = nval__7150;
var G__7158 = (n__7149 + 1);
val__7148 = G__7157;
n__7149 = G__7158;
continue;
}
}
} else
{return val__7148;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__7151 = arr.length;
var val__7152 = val;
var n__7153 = idx;
while(true){
if((n__7153 < cnt__7151))
{var nval__7154 = f.call(null,val__7152,(arr[n__7153]));
if(cljs.core.reduced_QMARK_.call(null,nval__7154))
{return cljs.core.deref.call(null,nval__7154);
} else
{{
var G__7159 = nval__7154;
var G__7160 = (n__7153 + 1);
val__7152 = G__7159;
n__7153 = G__7160;
continue;
}
}
} else
{return val__7152;
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
var this__7161 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__7162 = this;
if(((this__7162.i + 1) < this__7162.a.length))
{return (new cljs.core.IndexedSeq(this__7162.a,(this__7162.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7163 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__7164 = this;
var c__7165 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__7165 > 0))
{return (new cljs.core.RSeq(coll,(c__7165 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__7166 = this;
var this__7167 = this;
return cljs.core.pr_str.call(null,this__7167);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__7168 = this;
if(cljs.core.counted_QMARK_.call(null,this__7168.a))
{return cljs.core.ci_reduce.call(null,this__7168.a,f,(this__7168.a[this__7168.i]),(this__7168.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__7168.a[this__7168.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7169 = this;
if(cljs.core.counted_QMARK_.call(null,this__7169.a))
{return cljs.core.ci_reduce.call(null,this__7169.a,f,start,this__7169.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__7170 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7171 = this;
return (this__7171.a.length - this__7171.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__7172 = this;
return (this__7172.a[this__7172.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__7173 = this;
if(((this__7173.i + 1) < this__7173.a.length))
{return (new cljs.core.IndexedSeq(this__7173.a,(this__7173.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7174 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__7175 = this;
var i__7176 = (n + this__7175.i);
if((i__7176 < this__7175.a.length))
{return (this__7175.a[i__7176]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__7177 = this;
var i__7178 = (n + this__7177.i);
if((i__7178 < this__7177.a.length))
{return (this__7177.a[i__7178]);
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
var G__7179 = null;
var G__7179__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__7179__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__7179 = function(array,f,start){
switch(arguments.length){
case 2:
return G__7179__2.call(this,array,f);
case 3:
return G__7179__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7179;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__7180 = null;
var G__7180__2 = (function (array,k){
return (array[k]);
});
var G__7180__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__7180 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__7180__2.call(this,array,k);
case 3:
return G__7180__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7180;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__7181 = null;
var G__7181__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__7181__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__7181 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__7181__2.call(this,array,n);
case 3:
return G__7181__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7181;
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
var this__7182 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7183 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__7184 = this;
var this__7185 = this;
return cljs.core.pr_str.call(null,this__7185);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7186 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7187 = this;
return (this__7187.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7188 = this;
return cljs.core._nth.call(null,this__7188.ci,this__7188.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7189 = this;
if((this__7189.i > 0))
{return (new cljs.core.RSeq(this__7189.ci,(this__7189.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7190 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__7191 = this;
return (new cljs.core.RSeq(this__7191.ci,this__7191.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7192 = this;
return this__7192.meta;
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
{if((function (){var G__7196__7197 = coll;
if(G__7196__7197)
{if((function (){var or__3824__auto____7198 = (G__7196__7197.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____7198)
{return or__3824__auto____7198;
} else
{return G__7196__7197.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__7196__7197.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__7196__7197);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__7196__7197);
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
{if((function (){var G__7203__7204 = coll;
if(G__7203__7204)
{if((function (){var or__3824__auto____7205 = (G__7203__7204.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7205)
{return or__3824__auto____7205;
} else
{return G__7203__7204.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7203__7204.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7203__7204);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7203__7204);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__7206 = cljs.core.seq.call(null,coll);
if((s__7206 == null))
{return null;
} else
{return cljs.core._first.call(null,s__7206);
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
{if((function (){var G__7211__7212 = coll;
if(G__7211__7212)
{if((function (){var or__3824__auto____7213 = (G__7211__7212.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7213)
{return or__3824__auto____7213;
} else
{return G__7211__7212.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7211__7212.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7211__7212);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7211__7212);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__7214 = cljs.core.seq.call(null,coll);
if(!((s__7214 == null)))
{return cljs.core._rest.call(null,s__7214);
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
{if((function (){var G__7218__7219 = coll;
if(G__7218__7219)
{if((function (){var or__3824__auto____7220 = (G__7218__7219.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____7220)
{return or__3824__auto____7220;
} else
{return G__7218__7219.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__7218__7219.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__7218__7219);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__7218__7219);
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
var sn__7222 = cljs.core.next.call(null,s);
if(!((sn__7222 == null)))
{{
var G__7223 = sn__7222;
s = G__7223;
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
var G__7224__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__7225 = conj.call(null,coll,x);
var G__7226 = cljs.core.first.call(null,xs);
var G__7227 = cljs.core.next.call(null,xs);
coll = G__7225;
x = G__7226;
xs = G__7227;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__7224 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7224__delegate.call(this, coll, x, xs);
};
G__7224.cljs$lang$maxFixedArity = 2;
G__7224.cljs$lang$applyTo = (function (arglist__7228){
var coll = cljs.core.first(arglist__7228);
var x = cljs.core.first(cljs.core.next(arglist__7228));
var xs = cljs.core.rest(cljs.core.next(arglist__7228));
return G__7224__delegate(coll, x, xs);
});
G__7224.cljs$lang$arity$variadic = G__7224__delegate;
return G__7224;
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
var s__7231 = cljs.core.seq.call(null,coll);
var acc__7232 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__7231))
{return (acc__7232 + cljs.core._count.call(null,s__7231));
} else
{{
var G__7233 = cljs.core.next.call(null,s__7231);
var G__7234 = (acc__7232 + 1);
s__7231 = G__7233;
acc__7232 = G__7234;
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
{if((function (){var G__7241__7242 = coll;
if(G__7241__7242)
{if((function (){var or__3824__auto____7243 = (G__7241__7242.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7243)
{return or__3824__auto____7243;
} else
{return G__7241__7242.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7241__7242.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7241__7242);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7241__7242);
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
{if((function (){var G__7244__7245 = coll;
if(G__7244__7245)
{if((function (){var or__3824__auto____7246 = (G__7244__7245.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7246)
{return or__3824__auto____7246;
} else
{return G__7244__7245.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7244__7245.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7244__7245);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7244__7245);
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
var G__7249__delegate = function (coll,k,v,kvs){
while(true){
var ret__7248 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__7250 = ret__7248;
var G__7251 = cljs.core.first.call(null,kvs);
var G__7252 = cljs.core.second.call(null,kvs);
var G__7253 = cljs.core.nnext.call(null,kvs);
coll = G__7250;
k = G__7251;
v = G__7252;
kvs = G__7253;
continue;
}
} else
{return ret__7248;
}
break;
}
};
var G__7249 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7249__delegate.call(this, coll, k, v, kvs);
};
G__7249.cljs$lang$maxFixedArity = 3;
G__7249.cljs$lang$applyTo = (function (arglist__7254){
var coll = cljs.core.first(arglist__7254);
var k = cljs.core.first(cljs.core.next(arglist__7254));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7254)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7254)));
return G__7249__delegate(coll, k, v, kvs);
});
G__7249.cljs$lang$arity$variadic = G__7249__delegate;
return G__7249;
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
var G__7257__delegate = function (coll,k,ks){
while(true){
var ret__7256 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__7258 = ret__7256;
var G__7259 = cljs.core.first.call(null,ks);
var G__7260 = cljs.core.next.call(null,ks);
coll = G__7258;
k = G__7259;
ks = G__7260;
continue;
}
} else
{return ret__7256;
}
break;
}
};
var G__7257 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7257__delegate.call(this, coll, k, ks);
};
G__7257.cljs$lang$maxFixedArity = 2;
G__7257.cljs$lang$applyTo = (function (arglist__7261){
var coll = cljs.core.first(arglist__7261);
var k = cljs.core.first(cljs.core.next(arglist__7261));
var ks = cljs.core.rest(cljs.core.next(arglist__7261));
return G__7257__delegate(coll, k, ks);
});
G__7257.cljs$lang$arity$variadic = G__7257__delegate;
return G__7257;
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
if((function (){var G__7265__7266 = o;
if(G__7265__7266)
{if((function (){var or__3824__auto____7267 = (G__7265__7266.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____7267)
{return or__3824__auto____7267;
} else
{return G__7265__7266.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__7265__7266.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__7265__7266);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__7265__7266);
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
var G__7270__delegate = function (coll,k,ks){
while(true){
var ret__7269 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__7271 = ret__7269;
var G__7272 = cljs.core.first.call(null,ks);
var G__7273 = cljs.core.next.call(null,ks);
coll = G__7271;
k = G__7272;
ks = G__7273;
continue;
}
} else
{return ret__7269;
}
break;
}
};
var G__7270 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7270__delegate.call(this, coll, k, ks);
};
G__7270.cljs$lang$maxFixedArity = 2;
G__7270.cljs$lang$applyTo = (function (arglist__7274){
var coll = cljs.core.first(arglist__7274);
var k = cljs.core.first(cljs.core.next(arglist__7274));
var ks = cljs.core.rest(cljs.core.next(arglist__7274));
return G__7270__delegate(coll, k, ks);
});
G__7270.cljs$lang$arity$variadic = G__7270__delegate;
return G__7270;
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
var h__7276 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__7276);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__7276;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__7278 = (cljs.core.string_hash_cache[k]);
if(!((h__7278 == null)))
{return h__7278;
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
if((function (){var and__3822__auto____7280 = goog.isString(o);
if(and__3822__auto____7280)
{return check_cache;
} else
{return and__3822__auto____7280;
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
{var G__7284__7285 = x;
if(G__7284__7285)
{if((function (){var or__3824__auto____7286 = (G__7284__7285.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____7286)
{return or__3824__auto____7286;
} else
{return G__7284__7285.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__7284__7285.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__7284__7285);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__7284__7285);
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
{var G__7290__7291 = x;
if(G__7290__7291)
{if((function (){var or__3824__auto____7292 = (G__7290__7291.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____7292)
{return or__3824__auto____7292;
} else
{return G__7290__7291.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__7290__7291.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__7290__7291);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__7290__7291);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__7296__7297 = x;
if(G__7296__7297)
{if((function (){var or__3824__auto____7298 = (G__7296__7297.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____7298)
{return or__3824__auto____7298;
} else
{return G__7296__7297.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__7296__7297.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__7296__7297);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__7296__7297);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__7302__7303 = x;
if(G__7302__7303)
{if((function (){var or__3824__auto____7304 = (G__7302__7303.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____7304)
{return or__3824__auto____7304;
} else
{return G__7302__7303.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__7302__7303.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__7302__7303);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__7302__7303);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__7308__7309 = x;
if(G__7308__7309)
{if((function (){var or__3824__auto____7310 = (G__7308__7309.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____7310)
{return or__3824__auto____7310;
} else
{return G__7308__7309.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__7308__7309.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__7308__7309);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__7308__7309);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__7314__7315 = x;
if(G__7314__7315)
{if((function (){var or__3824__auto____7316 = (G__7314__7315.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7316)
{return or__3824__auto____7316;
} else
{return G__7314__7315.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7314__7315.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7314__7315);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7314__7315);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__7320__7321 = x;
if(G__7320__7321)
{if((function (){var or__3824__auto____7322 = (G__7320__7321.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7322)
{return or__3824__auto____7322;
} else
{return G__7320__7321.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7320__7321.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7320__7321);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7320__7321);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__7326__7327 = x;
if(G__7326__7327)
{if((function (){var or__3824__auto____7328 = (G__7326__7327.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____7328)
{return or__3824__auto____7328;
} else
{return G__7326__7327.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__7326__7327.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__7326__7327);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__7326__7327);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__7332__7333 = x;
if(G__7332__7333)
{if((function (){var or__3824__auto____7334 = (G__7332__7333.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____7334)
{return or__3824__auto____7334;
} else
{return G__7332__7333.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__7332__7333.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__7332__7333);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__7332__7333);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__7338__7339 = x;
if(G__7338__7339)
{if(cljs.core.truth_((function (){var or__3824__auto____7340 = null;
if(cljs.core.truth_(or__3824__auto____7340))
{return or__3824__auto____7340;
} else
{return G__7338__7339.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__7338__7339.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__7338__7339);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__7338__7339);
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
var G__7341__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__7341 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7341__delegate.call(this, keyvals);
};
G__7341.cljs$lang$maxFixedArity = 0;
G__7341.cljs$lang$applyTo = (function (arglist__7342){
var keyvals = cljs.core.seq(arglist__7342);;
return G__7341__delegate(keyvals);
});
G__7341.cljs$lang$arity$variadic = G__7341__delegate;
return G__7341;
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
var keys__7344 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__7344.push(key);
}));
return keys__7344;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__7348 = i;
var j__7349 = j;
var len__7350 = len;
while(true){
if((len__7350 === 0))
{return to;
} else
{(to[j__7349] = (from[i__7348]));
{
var G__7351 = (i__7348 + 1);
var G__7352 = (j__7349 + 1);
var G__7353 = (len__7350 - 1);
i__7348 = G__7351;
j__7349 = G__7352;
len__7350 = G__7353;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__7357 = (i + (len - 1));
var j__7358 = (j + (len - 1));
var len__7359 = len;
while(true){
if((len__7359 === 0))
{return to;
} else
{(to[j__7358] = (from[i__7357]));
{
var G__7360 = (i__7357 - 1);
var G__7361 = (j__7358 - 1);
var G__7362 = (len__7359 - 1);
i__7357 = G__7360;
j__7358 = G__7361;
len__7359 = G__7362;
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
{var G__7366__7367 = s;
if(G__7366__7367)
{if((function (){var or__3824__auto____7368 = (G__7366__7367.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7368)
{return or__3824__auto____7368;
} else
{return G__7366__7367.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7366__7367.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7366__7367);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7366__7367);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__7372__7373 = s;
if(G__7372__7373)
{if((function (){var or__3824__auto____7374 = (G__7372__7373.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____7374)
{return or__3824__auto____7374;
} else
{return G__7372__7373.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__7372__7373.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__7372__7373);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__7372__7373);
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
var and__3822__auto____7377 = goog.isString(x);
if(and__3822__auto____7377)
{return !((function (){var or__3824__auto____7378 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____7378)
{return or__3824__auto____7378;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____7377;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____7380 = goog.isString(x);
if(and__3822__auto____7380)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____7380;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____7382 = goog.isString(x);
if(and__3822__auto____7382)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____7382;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____7387 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____7387)
{return or__3824__auto____7387;
} else
{var G__7388__7389 = f;
if(G__7388__7389)
{if((function (){var or__3824__auto____7390 = (G__7388__7389.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____7390)
{return or__3824__auto____7390;
} else
{return G__7388__7389.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__7388__7389.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__7388__7389);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__7388__7389);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____7392 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____7392)
{return (n == n.toFixed());
} else
{return and__3822__auto____7392;
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
if(cljs.core.truth_((function (){var and__3822__auto____7395 = coll;
if(cljs.core.truth_(and__3822__auto____7395))
{var and__3822__auto____7396 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____7396)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____7396;
}
} else
{return and__3822__auto____7395;
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
var G__7405__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__7401 = cljs.core.set([y,x]);
var xs__7402 = more;
while(true){
var x__7403 = cljs.core.first.call(null,xs__7402);
var etc__7404 = cljs.core.next.call(null,xs__7402);
if(cljs.core.truth_(xs__7402))
{if(cljs.core.contains_QMARK_.call(null,s__7401,x__7403))
{return false;
} else
{{
var G__7406 = cljs.core.conj.call(null,s__7401,x__7403);
var G__7407 = etc__7404;
s__7401 = G__7406;
xs__7402 = G__7407;
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
var G__7405 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7405__delegate.call(this, x, y, more);
};
G__7405.cljs$lang$maxFixedArity = 2;
G__7405.cljs$lang$applyTo = (function (arglist__7408){
var x = cljs.core.first(arglist__7408);
var y = cljs.core.first(cljs.core.next(arglist__7408));
var more = cljs.core.rest(cljs.core.next(arglist__7408));
return G__7405__delegate(x, y, more);
});
G__7405.cljs$lang$arity$variadic = G__7405__delegate;
return G__7405;
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
{if((function (){var G__7412__7413 = x;
if(G__7412__7413)
{if(cljs.core.truth_((function (){var or__3824__auto____7414 = null;
if(cljs.core.truth_(or__3824__auto____7414))
{return or__3824__auto____7414;
} else
{return G__7412__7413.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__7412__7413.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__7412__7413);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__7412__7413);
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
var xl__7419 = cljs.core.count.call(null,xs);
var yl__7420 = cljs.core.count.call(null,ys);
if((xl__7419 < yl__7420))
{return -1;
} else
{if((xl__7419 > yl__7420))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__7419,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__7421 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____7422 = (d__7421 === 0);
if(and__3822__auto____7422)
{return ((n + 1) < len);
} else
{return and__3822__auto____7422;
}
})())
{{
var G__7423 = xs;
var G__7424 = ys;
var G__7425 = len;
var G__7426 = (n + 1);
xs = G__7423;
ys = G__7424;
len = G__7425;
n = G__7426;
continue;
}
} else
{return d__7421;
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
var r__7428 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__7428))
{return r__7428;
} else
{if(cljs.core.truth_(r__7428))
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
{var a__7430 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__7430,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__7430);
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
var temp__3971__auto____7436 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____7436)
{var s__7437 = temp__3971__auto____7436;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__7437),cljs.core.next.call(null,s__7437));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__7438 = val;
var coll__7439 = cljs.core.seq.call(null,coll);
while(true){
if(coll__7439)
{var nval__7440 = f.call(null,val__7438,cljs.core.first.call(null,coll__7439));
if(cljs.core.reduced_QMARK_.call(null,nval__7440))
{return cljs.core.deref.call(null,nval__7440);
} else
{{
var G__7441 = nval__7440;
var G__7442 = cljs.core.next.call(null,coll__7439);
val__7438 = G__7441;
coll__7439 = G__7442;
continue;
}
}
} else
{return val__7438;
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
var a__7444 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__7444);
return cljs.core.vec.call(null,a__7444);
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
if((function (){var G__7451__7452 = coll;
if(G__7451__7452)
{if((function (){var or__3824__auto____7453 = (G__7451__7452.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7453)
{return or__3824__auto____7453;
} else
{return G__7451__7452.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7451__7452.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7451__7452);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7451__7452);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__7454__7455 = coll;
if(G__7454__7455)
{if((function (){var or__3824__auto____7456 = (G__7454__7455.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7456)
{return or__3824__auto____7456;
} else
{return G__7454__7455.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7454__7455.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7454__7455);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7454__7455);
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
var this__7457 = this;
return this__7457.val;
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
var G__7458__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
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
var G__7460__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
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
var G__7462__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__7462 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7462__delegate.call(this, x, y, more);
};
G__7462.cljs$lang$maxFixedArity = 2;
G__7462.cljs$lang$applyTo = (function (arglist__7463){
var x = cljs.core.first(arglist__7463);
var y = cljs.core.first(cljs.core.next(arglist__7463));
var more = cljs.core.rest(cljs.core.next(arglist__7463));
return G__7462__delegate(x, y, more);
});
G__7462.cljs$lang$arity$variadic = G__7462__delegate;
return G__7462;
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
var G__7464__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__7464 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7464__delegate.call(this, x, y, more);
};
G__7464.cljs$lang$maxFixedArity = 2;
G__7464.cljs$lang$applyTo = (function (arglist__7465){
var x = cljs.core.first(arglist__7465);
var y = cljs.core.first(cljs.core.next(arglist__7465));
var more = cljs.core.rest(cljs.core.next(arglist__7465));
return G__7464__delegate(x, y, more);
});
G__7464.cljs$lang$arity$variadic = G__7464__delegate;
return G__7464;
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
var G__7466__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__7467 = y;
var G__7468 = cljs.core.first.call(null,more);
var G__7469 = cljs.core.next.call(null,more);
x = G__7467;
y = G__7468;
more = G__7469;
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
var G__7466 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7466__delegate.call(this, x, y, more);
};
G__7466.cljs$lang$maxFixedArity = 2;
G__7466.cljs$lang$applyTo = (function (arglist__7470){
var x = cljs.core.first(arglist__7470);
var y = cljs.core.first(cljs.core.next(arglist__7470));
var more = cljs.core.rest(cljs.core.next(arglist__7470));
return G__7466__delegate(x, y, more);
});
G__7466.cljs$lang$arity$variadic = G__7466__delegate;
return G__7466;
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
var G__7471__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__7472 = y;
var G__7473 = cljs.core.first.call(null,more);
var G__7474 = cljs.core.next.call(null,more);
x = G__7472;
y = G__7473;
more = G__7474;
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
var G__7471 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7471__delegate.call(this, x, y, more);
};
G__7471.cljs$lang$maxFixedArity = 2;
G__7471.cljs$lang$applyTo = (function (arglist__7475){
var x = cljs.core.first(arglist__7475);
var y = cljs.core.first(cljs.core.next(arglist__7475));
var more = cljs.core.rest(cljs.core.next(arglist__7475));
return G__7471__delegate(x, y, more);
});
G__7471.cljs$lang$arity$variadic = G__7471__delegate;
return G__7471;
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
var G__7476__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__7477 = y;
var G__7478 = cljs.core.first.call(null,more);
var G__7479 = cljs.core.next.call(null,more);
x = G__7477;
y = G__7478;
more = G__7479;
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
var G__7476 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7476__delegate.call(this, x, y, more);
};
G__7476.cljs$lang$maxFixedArity = 2;
G__7476.cljs$lang$applyTo = (function (arglist__7480){
var x = cljs.core.first(arglist__7480);
var y = cljs.core.first(cljs.core.next(arglist__7480));
var more = cljs.core.rest(cljs.core.next(arglist__7480));
return G__7476__delegate(x, y, more);
});
G__7476.cljs$lang$arity$variadic = G__7476__delegate;
return G__7476;
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
var G__7481__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__7482 = y;
var G__7483 = cljs.core.first.call(null,more);
var G__7484 = cljs.core.next.call(null,more);
x = G__7482;
y = G__7483;
more = G__7484;
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
var G__7481 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7481__delegate.call(this, x, y, more);
};
G__7481.cljs$lang$maxFixedArity = 2;
G__7481.cljs$lang$applyTo = (function (arglist__7485){
var x = cljs.core.first(arglist__7485);
var y = cljs.core.first(cljs.core.next(arglist__7485));
var more = cljs.core.rest(cljs.core.next(arglist__7485));
return G__7481__delegate(x, y, more);
});
G__7481.cljs$lang$arity$variadic = G__7481__delegate;
return G__7481;
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
var G__7486__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__7486 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7486__delegate.call(this, x, y, more);
};
G__7486.cljs$lang$maxFixedArity = 2;
G__7486.cljs$lang$applyTo = (function (arglist__7487){
var x = cljs.core.first(arglist__7487);
var y = cljs.core.first(cljs.core.next(arglist__7487));
var more = cljs.core.rest(cljs.core.next(arglist__7487));
return G__7486__delegate(x, y, more);
});
G__7486.cljs$lang$arity$variadic = G__7486__delegate;
return G__7486;
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
var G__7488__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__7488 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7488__delegate.call(this, x, y, more);
};
G__7488.cljs$lang$maxFixedArity = 2;
G__7488.cljs$lang$applyTo = (function (arglist__7489){
var x = cljs.core.first(arglist__7489);
var y = cljs.core.first(cljs.core.next(arglist__7489));
var more = cljs.core.rest(cljs.core.next(arglist__7489));
return G__7488__delegate(x, y, more);
});
G__7488.cljs$lang$arity$variadic = G__7488__delegate;
return G__7488;
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
var rem__7491 = (n % d);
return cljs.core.fix.call(null,((n - rem__7491) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__7493 = cljs.core.quot.call(null,n,d);
return (n - (d * q__7493));
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
var v__7496 = (v - ((v >> 1) & 1431655765));
var v__7497 = ((v__7496 & 858993459) + ((v__7496 >> 2) & 858993459));
return ((((v__7497 + (v__7497 >> 4)) & 252645135) * 16843009) >> 24);
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
var G__7498__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__7499 = y;
var G__7500 = cljs.core.first.call(null,more);
var G__7501 = cljs.core.next.call(null,more);
x = G__7499;
y = G__7500;
more = G__7501;
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
var G__7498 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7498__delegate.call(this, x, y, more);
};
G__7498.cljs$lang$maxFixedArity = 2;
G__7498.cljs$lang$applyTo = (function (arglist__7502){
var x = cljs.core.first(arglist__7502);
var y = cljs.core.first(cljs.core.next(arglist__7502));
var more = cljs.core.rest(cljs.core.next(arglist__7502));
return G__7498__delegate(x, y, more);
});
G__7498.cljs$lang$arity$variadic = G__7498__delegate;
return G__7498;
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
var n__7506 = n;
var xs__7507 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7508 = xs__7507;
if(and__3822__auto____7508)
{return (n__7506 > 0);
} else
{return and__3822__auto____7508;
}
})()))
{{
var G__7509 = (n__7506 - 1);
var G__7510 = cljs.core.next.call(null,xs__7507);
n__7506 = G__7509;
xs__7507 = G__7510;
continue;
}
} else
{return xs__7507;
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
var G__7511__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7512 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__7513 = cljs.core.next.call(null,more);
sb = G__7512;
more = G__7513;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__7511 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7511__delegate.call(this, x, ys);
};
G__7511.cljs$lang$maxFixedArity = 1;
G__7511.cljs$lang$applyTo = (function (arglist__7514){
var x = cljs.core.first(arglist__7514);
var ys = cljs.core.rest(arglist__7514);
return G__7511__delegate(x, ys);
});
G__7511.cljs$lang$arity$variadic = G__7511__delegate;
return G__7511;
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
var G__7515__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7516 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__7517 = cljs.core.next.call(null,more);
sb = G__7516;
more = G__7517;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__7515 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7515__delegate.call(this, x, ys);
};
G__7515.cljs$lang$maxFixedArity = 1;
G__7515.cljs$lang$applyTo = (function (arglist__7518){
var x = cljs.core.first(arglist__7518);
var ys = cljs.core.rest(arglist__7518);
return G__7515__delegate(x, ys);
});
G__7515.cljs$lang$arity$variadic = G__7515__delegate;
return G__7515;
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__7521 = cljs.core.seq.call(null,x);
var ys__7522 = cljs.core.seq.call(null,y);
while(true){
if((xs__7521 == null))
{return (ys__7522 == null);
} else
{if((ys__7522 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__7521),cljs.core.first.call(null,ys__7522)))
{{
var G__7523 = cljs.core.next.call(null,xs__7521);
var G__7524 = cljs.core.next.call(null,ys__7522);
xs__7521 = G__7523;
ys__7522 = G__7524;
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
return cljs.core.reduce.call(null,(function (p1__7525_SHARP_,p2__7526_SHARP_){
return cljs.core.hash_combine.call(null,p1__7525_SHARP_,cljs.core.hash.call(null,p2__7526_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
void 0;
void 0;
cljs.core.hash_imap = (function hash_imap(m){
var h__7530 = 0;
var s__7531 = cljs.core.seq.call(null,m);
while(true){
if(s__7531)
{var e__7532 = cljs.core.first.call(null,s__7531);
{
var G__7533 = ((h__7530 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__7532)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__7532)))) % 4503599627370496);
var G__7534 = cljs.core.next.call(null,s__7531);
h__7530 = G__7533;
s__7531 = G__7534;
continue;
}
} else
{return h__7530;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__7538 = 0;
var s__7539 = cljs.core.seq.call(null,s);
while(true){
if(s__7539)
{var e__7540 = cljs.core.first.call(null,s__7539);
{
var G__7541 = ((h__7538 + cljs.core.hash.call(null,e__7540)) % 4503599627370496);
var G__7542 = cljs.core.next.call(null,s__7539);
h__7538 = G__7541;
s__7539 = G__7542;
continue;
}
} else
{return h__7538;
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
var G__7563__7564 = cljs.core.seq.call(null,fn_map);
if(G__7563__7564)
{var G__7566__7568 = cljs.core.first.call(null,G__7563__7564);
var vec__7567__7569 = G__7566__7568;
var key_name__7570 = cljs.core.nth.call(null,vec__7567__7569,0,null);
var f__7571 = cljs.core.nth.call(null,vec__7567__7569,1,null);
var G__7563__7572 = G__7563__7564;
var G__7566__7573 = G__7566__7568;
var G__7563__7574 = G__7563__7572;
while(true){
var vec__7575__7576 = G__7566__7573;
var key_name__7577 = cljs.core.nth.call(null,vec__7575__7576,0,null);
var f__7578 = cljs.core.nth.call(null,vec__7575__7576,1,null);
var G__7563__7579 = G__7563__7574;
var str_name__7580 = cljs.core.name.call(null,key_name__7577);
(obj[str_name__7580] = f__7578);
var temp__3974__auto____7581 = cljs.core.next.call(null,G__7563__7579);
if(temp__3974__auto____7581)
{var G__7563__7582 = temp__3974__auto____7581;
{
var G__7583 = cljs.core.first.call(null,G__7563__7582);
var G__7584 = G__7563__7582;
G__7566__7573 = G__7583;
G__7563__7574 = G__7584;
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
var this__7585 = this;
var h__2153__auto____7586 = this__7585.__hash;
if(!((h__2153__auto____7586 == null)))
{return h__2153__auto____7586;
} else
{var h__2153__auto____7587 = cljs.core.hash_coll.call(null,coll);
this__7585.__hash = h__2153__auto____7587;
return h__2153__auto____7587;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7588 = this;
if((this__7588.count === 1))
{return null;
} else
{return this__7588.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7589 = this;
return (new cljs.core.List(this__7589.meta,o,coll,(this__7589.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__7590 = this;
var this__7591 = this;
return cljs.core.pr_str.call(null,this__7591);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7592 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7593 = this;
return this__7593.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7594 = this;
return this__7594.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7595 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7596 = this;
return this__7596.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7597 = this;
if((this__7597.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__7597.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7598 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7599 = this;
return (new cljs.core.List(meta,this__7599.first,this__7599.rest,this__7599.count,this__7599.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7600 = this;
return this__7600.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7601 = this;
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
var this__7602 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7603 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7604 = this;
return (new cljs.core.List(this__7604.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__7605 = this;
var this__7606 = this;
return cljs.core.pr_str.call(null,this__7606);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7607 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7608 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7609 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7610 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7611 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7612 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7613 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7614 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7615 = this;
return this__7615.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7616 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__7620__7621 = coll;
if(G__7620__7621)
{if((function (){var or__3824__auto____7622 = (G__7620__7621.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____7622)
{return or__3824__auto____7622;
} else
{return G__7620__7621.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__7620__7621.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7620__7621);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7620__7621);
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
var G__7623__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__7623 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7623__delegate.call(this, x, y, z, items);
};
G__7623.cljs$lang$maxFixedArity = 3;
G__7623.cljs$lang$applyTo = (function (arglist__7624){
var x = cljs.core.first(arglist__7624);
var y = cljs.core.first(cljs.core.next(arglist__7624));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7624)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7624)));
return G__7623__delegate(x, y, z, items);
});
G__7623.cljs$lang$arity$variadic = G__7623__delegate;
return G__7623;
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
var this__7625 = this;
var h__2153__auto____7626 = this__7625.__hash;
if(!((h__2153__auto____7626 == null)))
{return h__2153__auto____7626;
} else
{var h__2153__auto____7627 = cljs.core.hash_coll.call(null,coll);
this__7625.__hash = h__2153__auto____7627;
return h__2153__auto____7627;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7628 = this;
if((this__7628.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__7628.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7629 = this;
return (new cljs.core.Cons(null,o,coll,this__7629.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__7630 = this;
var this__7631 = this;
return cljs.core.pr_str.call(null,this__7631);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7632 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7633 = this;
return this__7633.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7634 = this;
if((this__7634.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__7634.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7635 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7636 = this;
return (new cljs.core.Cons(meta,this__7636.first,this__7636.rest,this__7636.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7637 = this;
return this__7637.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7638 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7638.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____7643 = (coll == null);
if(or__3824__auto____7643)
{return or__3824__auto____7643;
} else
{var G__7644__7645 = coll;
if(G__7644__7645)
{if((function (){var or__3824__auto____7646 = (G__7644__7645.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7646)
{return or__3824__auto____7646;
} else
{return G__7644__7645.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7644__7645.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7644__7645);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7644__7645);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__7650__7651 = x;
if(G__7650__7651)
{if((function (){var or__3824__auto____7652 = (G__7650__7651.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____7652)
{return or__3824__auto____7652;
} else
{return G__7650__7651.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__7650__7651.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7650__7651);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7650__7651);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__7653 = null;
var G__7653__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__7653__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__7653 = function(string,f,start){
switch(arguments.length){
case 2:
return G__7653__2.call(this,string,f);
case 3:
return G__7653__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7653;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__7654 = null;
var G__7654__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__7654__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__7654 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__7654__2.call(this,string,k);
case 3:
return G__7654__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7654;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__7655 = null;
var G__7655__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__7655__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__7655 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__7655__2.call(this,string,n);
case 3:
return G__7655__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7655;
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
cljs.core.Keyword.prototype.call = (function (this_sym7658,coll){
var this__7659 = this;
var this_sym7658__7660 = this;
var ___7661 = this_sym7658__7660;
if((coll == null))
{return null;
} else
{var strobj__7662 = coll.strobj;
if((strobj__7662 == null))
{return cljs.core._lookup.call(null,coll,this__7659.k,null);
} else
{return (strobj__7662[this__7659.k]);
}
}
});
cljs.core.Keyword.prototype.apply = (function (this_sym7656,args7657){
var this__7663 = this;
return this_sym7656.call.apply(this_sym7656,[this_sym7656].concat(args7657.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__7672 = null;
var G__7672__2 = (function (this_sym7666,coll){
var this_sym7666__7668 = this;
var this__7669 = this_sym7666__7668;
return cljs.core._lookup.call(null,coll,this__7669.toString(),null);
});
var G__7672__3 = (function (this_sym7667,coll,not_found){
var this_sym7667__7670 = this;
var this__7671 = this_sym7667__7670;
return cljs.core._lookup.call(null,coll,this__7671.toString(),not_found);
});
G__7672 = function(this_sym7667,coll,not_found){
switch(arguments.length){
case 2:
return G__7672__2.call(this,this_sym7667,coll);
case 3:
return G__7672__3.call(this,this_sym7667,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7672;
})()
;
String.prototype.apply = (function (this_sym7664,args7665){
return this_sym7664.call.apply(this_sym7664,[this_sym7664].concat(args7665.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__7674 = lazy_seq.x;
if(lazy_seq.realized)
{return x__7674;
} else
{lazy_seq.x = x__7674.call(null);
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
var this__7675 = this;
var h__2153__auto____7676 = this__7675.__hash;
if(!((h__2153__auto____7676 == null)))
{return h__2153__auto____7676;
} else
{var h__2153__auto____7677 = cljs.core.hash_coll.call(null,coll);
this__7675.__hash = h__2153__auto____7677;
return h__2153__auto____7677;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7678 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7679 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__7680 = this;
var this__7681 = this;
return cljs.core.pr_str.call(null,this__7681);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7682 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7683 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7684 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7685 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7686 = this;
return (new cljs.core.LazySeq(meta,this__7686.realized,this__7686.x,this__7686.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7687 = this;
return this__7687.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7688 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7688.meta);
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
var this__7689 = this;
return this__7689.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__7690 = this;
var ___7691 = this;
(this__7690.buf[this__7690.end] = o);
return this__7690.end = (this__7690.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__7692 = this;
var ___7693 = this;
var ret__7694 = (new cljs.core.ArrayChunk(this__7692.buf,0,this__7692.end));
this__7692.buf = null;
return ret__7694;
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
var this__7695 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__7695.arr[this__7695.off]),(this__7695.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7696 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__7696.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__7697 = this;
if((this__7697.off === this__7697.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__7697.arr,(this__7697.off + 1),this__7697.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__7698 = this;
return (this__7698.arr[(this__7698.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__7699 = this;
if((function (){var and__3822__auto____7700 = (i >= 0);
if(and__3822__auto____7700)
{return (i < (this__7699.end - this__7699.off));
} else
{return and__3822__auto____7700;
}
})())
{return (this__7699.arr[(this__7699.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7701 = this;
return (this__7701.end - this__7701.off);
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
var this__7702 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7703 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7704 = this;
return cljs.core._nth.call(null,this__7704.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7705 = this;
if((cljs.core._count.call(null,this__7705.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__7705.chunk),this__7705.more,this__7705.meta));
} else
{if((this__7705.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__7705.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__7706 = this;
if((this__7706.more == null))
{return null;
} else
{return this__7706.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7707 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__7708 = this;
return (new cljs.core.ChunkedCons(this__7708.chunk,this__7708.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7709 = this;
return this__7709.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__7710 = this;
return this__7710.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__7711 = this;
if((this__7711.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__7711.more;
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
if((function (){var G__7715__7716 = s;
if(G__7715__7716)
{if(cljs.core.truth_((function (){var or__3824__auto____7717 = null;
if(cljs.core.truth_(or__3824__auto____7717))
{return or__3824__auto____7717;
} else
{return G__7715__7716.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__7715__7716.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__7715__7716);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__7715__7716);
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
var ary__7720 = [];
var s__7721 = s;
while(true){
if(cljs.core.seq.call(null,s__7721))
{ary__7720.push(cljs.core.first.call(null,s__7721));
{
var G__7722 = cljs.core.next.call(null,s__7721);
s__7721 = G__7722;
continue;
}
} else
{return ary__7720;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__7726 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__7727 = 0;
var xs__7728 = cljs.core.seq.call(null,coll);
while(true){
if(xs__7728)
{(ret__7726[i__7727] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__7728)));
{
var G__7729 = (i__7727 + 1);
var G__7730 = cljs.core.next.call(null,xs__7728);
i__7727 = G__7729;
xs__7728 = G__7730;
continue;
}
} else
{}
break;
}
return ret__7726;
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
var a__7738 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7739 = cljs.core.seq.call(null,init_val_or_seq);
var i__7740 = 0;
var s__7741 = s__7739;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7742 = s__7741;
if(and__3822__auto____7742)
{return (i__7740 < size);
} else
{return and__3822__auto____7742;
}
})()))
{(a__7738[i__7740] = cljs.core.first.call(null,s__7741));
{
var G__7745 = (i__7740 + 1);
var G__7746 = cljs.core.next.call(null,s__7741);
i__7740 = G__7745;
s__7741 = G__7746;
continue;
}
} else
{return a__7738;
}
break;
}
} else
{var n__2492__auto____7743 = size;
var i__7744 = 0;
while(true){
if((i__7744 < n__2492__auto____7743))
{(a__7738[i__7744] = init_val_or_seq);
{
var G__7747 = (i__7744 + 1);
i__7744 = G__7747;
continue;
}
} else
{}
break;
}
return a__7738;
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
var a__7755 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7756 = cljs.core.seq.call(null,init_val_or_seq);
var i__7757 = 0;
var s__7758 = s__7756;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7759 = s__7758;
if(and__3822__auto____7759)
{return (i__7757 < size);
} else
{return and__3822__auto____7759;
}
})()))
{(a__7755[i__7757] = cljs.core.first.call(null,s__7758));
{
var G__7762 = (i__7757 + 1);
var G__7763 = cljs.core.next.call(null,s__7758);
i__7757 = G__7762;
s__7758 = G__7763;
continue;
}
} else
{return a__7755;
}
break;
}
} else
{var n__2492__auto____7760 = size;
var i__7761 = 0;
while(true){
if((i__7761 < n__2492__auto____7760))
{(a__7755[i__7761] = init_val_or_seq);
{
var G__7764 = (i__7761 + 1);
i__7761 = G__7764;
continue;
}
} else
{}
break;
}
return a__7755;
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
var a__7772 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7773 = cljs.core.seq.call(null,init_val_or_seq);
var i__7774 = 0;
var s__7775 = s__7773;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7776 = s__7775;
if(and__3822__auto____7776)
{return (i__7774 < size);
} else
{return and__3822__auto____7776;
}
})()))
{(a__7772[i__7774] = cljs.core.first.call(null,s__7775));
{
var G__7779 = (i__7774 + 1);
var G__7780 = cljs.core.next.call(null,s__7775);
i__7774 = G__7779;
s__7775 = G__7780;
continue;
}
} else
{return a__7772;
}
break;
}
} else
{var n__2492__auto____7777 = size;
var i__7778 = 0;
while(true){
if((i__7778 < n__2492__auto____7777))
{(a__7772[i__7778] = init_val_or_seq);
{
var G__7781 = (i__7778 + 1);
i__7778 = G__7781;
continue;
}
} else
{}
break;
}
return a__7772;
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
{var s__7786 = s;
var i__7787 = n;
var sum__7788 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7789 = (i__7787 > 0);
if(and__3822__auto____7789)
{return cljs.core.seq.call(null,s__7786);
} else
{return and__3822__auto____7789;
}
})()))
{{
var G__7790 = cljs.core.next.call(null,s__7786);
var G__7791 = (i__7787 - 1);
var G__7792 = (sum__7788 + 1);
s__7786 = G__7790;
i__7787 = G__7791;
sum__7788 = G__7792;
continue;
}
} else
{return sum__7788;
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
var s__7797 = cljs.core.seq.call(null,x);
if(s__7797)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__7797))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__7797),concat.call(null,cljs.core.chunk_rest.call(null,s__7797),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__7797),concat.call(null,cljs.core.rest.call(null,s__7797),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__7801__delegate = function (x,y,zs){
var cat__7800 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__7799 = cljs.core.seq.call(null,xys);
if(xys__7799)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__7799))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__7799),cat.call(null,cljs.core.chunk_rest.call(null,xys__7799),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__7799),cat.call(null,cljs.core.rest.call(null,xys__7799),zs));
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
return cat__7800.call(null,concat.call(null,x,y),zs);
};
var G__7801 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7801__delegate.call(this, x, y, zs);
};
G__7801.cljs$lang$maxFixedArity = 2;
G__7801.cljs$lang$applyTo = (function (arglist__7802){
var x = cljs.core.first(arglist__7802);
var y = cljs.core.first(cljs.core.next(arglist__7802));
var zs = cljs.core.rest(cljs.core.next(arglist__7802));
return G__7801__delegate(x, y, zs);
});
G__7801.cljs$lang$arity$variadic = G__7801__delegate;
return G__7801;
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
var G__7803__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__7803 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7803__delegate.call(this, a, b, c, d, more);
};
G__7803.cljs$lang$maxFixedArity = 4;
G__7803.cljs$lang$applyTo = (function (arglist__7804){
var a = cljs.core.first(arglist__7804);
var b = cljs.core.first(cljs.core.next(arglist__7804));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7804)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7804))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7804))));
return G__7803__delegate(a, b, c, d, more);
});
G__7803.cljs$lang$arity$variadic = G__7803__delegate;
return G__7803;
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
var args__7846 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__7847 = cljs.core._first.call(null,args__7846);
var args__7848 = cljs.core._rest.call(null,args__7846);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__7847);
} else
{return f.call(null,a__7847);
}
} else
{var b__7849 = cljs.core._first.call(null,args__7848);
var args__7850 = cljs.core._rest.call(null,args__7848);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__7847,b__7849);
} else
{return f.call(null,a__7847,b__7849);
}
} else
{var c__7851 = cljs.core._first.call(null,args__7850);
var args__7852 = cljs.core._rest.call(null,args__7850);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__7847,b__7849,c__7851);
} else
{return f.call(null,a__7847,b__7849,c__7851);
}
} else
{var d__7853 = cljs.core._first.call(null,args__7852);
var args__7854 = cljs.core._rest.call(null,args__7852);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__7847,b__7849,c__7851,d__7853);
} else
{return f.call(null,a__7847,b__7849,c__7851,d__7853);
}
} else
{var e__7855 = cljs.core._first.call(null,args__7854);
var args__7856 = cljs.core._rest.call(null,args__7854);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__7847,b__7849,c__7851,d__7853,e__7855);
} else
{return f.call(null,a__7847,b__7849,c__7851,d__7853,e__7855);
}
} else
{var f__7857 = cljs.core._first.call(null,args__7856);
var args__7858 = cljs.core._rest.call(null,args__7856);
if((argc === 6))
{if(f__7857.cljs$lang$arity$6)
{return f__7857.cljs$lang$arity$6(a__7847,b__7849,c__7851,d__7853,e__7855,f__7857);
} else
{return f__7857.call(null,a__7847,b__7849,c__7851,d__7853,e__7855,f__7857);
}
} else
{var g__7859 = cljs.core._first.call(null,args__7858);
var args__7860 = cljs.core._rest.call(null,args__7858);
if((argc === 7))
{if(f__7857.cljs$lang$arity$7)
{return f__7857.cljs$lang$arity$7(a__7847,b__7849,c__7851,d__7853,e__7855,f__7857,g__7859);
} else
{return f__7857.call(null,a__7847,b__7849,c__7851,d__7853,e__7855,f__7857,g__7859);
}
} else
{var h__7861 = cljs.core._first.call(null,args__7860);
var args__7862 = cljs.core._rest.call(null,args__7860);
if((argc === 8))
{if(f__7857.cljs$lang$arity$8)
{return f__7857.cljs$lang$arity$8(a__7847,b__7849,c__7851,d__7853,e__7855,f__7857,g__7859,h__7861);
} else
{return f__7857.call(null,a__7847,b__7849,c__7851,d__7853,e__7855,f__7857,g__7859,h__7861);
}
} else
{var i__7863 = cljs.core._first.call(null,args__7862);
var args__7864 = cljs.core._rest.call(null,args__7862);
if((argc === 9))
{if(f__7857.cljs$lang$arity$9)
{return f__7857.cljs$lang$arity$9(a__7847,b__7849,c__7851,d__7853,e__7855,f__7857,g__7859,h__7861,i__7863);
} else
{return f__7857.call(null,a__7847,b__7849,c__7851,d__7853,e__7855,f__7857,g__7859,h__7861,i__7863);
}
} else
{var j__7865 = cljs.core._first.call(null,args__7864);
var args__7866 = cljs.core._rest.call(null,args__7864);
if((argc === 10))
{if(f__7857.cljs$lang$arity$10)
{return f__7857.cljs$lang$arity$10(a__7847,b__7849,c__7851,d__7853,e__7855,f__7857,g__7859,h__7861,i__7863,j__7865);
} else
{return f__7857.call(null,a__7847,b__7849,c__7851,d__7853,e__7855,f__7857,g__7859,h__7861,i__7863,j__7865);
}
} else
{var k__7867 = cljs.core._first.call(null,args__7866);
var args__7868 = cljs.core._rest.call(null,args__7866);
if((argc === 11))
{if(f__7857.cljs$lang$arity$11)
{return f__7857.cljs$lang$arity$11(a__7847,b__7849,c__7851,d__7853,e__7855,f__7857,g__7859,h__7861,i__7863,j__7865,k__7867);
} else
{return f__7857.call(null,a__7847,b__7849,c__7851,d__7853,e__7855,f__7857,g__7859,h__7861,i__7863,j__7865,k__7867);
}
} else
{var l__7869 = cljs.core._first.call(null,args__7868);
var args__7870 = cljs.core._rest.call(null,args__7868);
if((argc === 12))
{if(f__7857.cljs$lang$arity$12)
{return f__7857.cljs$lang$arity$12(a__7847,b__7849,c__7851,d__7853,e__7855,f__7857,g__7859,h__7861,i__7863,j__7865,k__7867,l__7869);
} else
{return f__7857.call(null,a__7847,b__7849,c__7851,d__7853,e__7855,f__7857,g__7859,h__7861,i__7863,j__7865,k__7867,l__7869);
}
} else
{var m__7871 = cljs.core._first.call(null,args__7870);
var args__7872 = cljs.core._rest.call(null,args__7870);
if((argc === 13))
{if(f__7857.cljs$lang$arity$13)
{return f__7857.cljs$lang$arity$13(a__7847,b__7849,c__7851,d__7853,e__7855,f__7857,g__7859,h__7861,i__7863,j__7865,k__7867,l__7869,m__7871);
} else
{return f__7857.call(null,a__7847,b__7849,c__7851,d__7853,e__7855,f__7857,g__7859,h__7861,i__7863,j__7865,k__7867,l__7869,m__7871);
}
} else
{var n__7873 = cljs.core._first.call(null,args__7872);
var args__7874 = cljs.core._rest.call(null,args__7872);
if((argc === 14))
{if(f__7857.cljs$lang$arity$14)
{return f__7857.cljs$lang$arity$14(a__7847,b__7849,c__7851,d__7853,e__7855,f__7857,g__7859,h__7861,i__7863,j__7865,k__7867,l__7869,m__7871,n__7873);
} else
{return f__7857.call(null,a__7847,b__7849,c__7851,d__7853,e__7855,f__7857,g__7859,h__7861,i__7863,j__7865,k__7867,l__7869,m__7871,n__7873);
}
} else
{var o__7875 = cljs.core._first.call(null,args__7874);
var args__7876 = cljs.core._rest.call(null,args__7874);
if((argc === 15))
{if(f__7857.cljs$lang$arity$15)
{return f__7857.cljs$lang$arity$15(a__7847,b__7849,c__7851,d__7853,e__7855,f__7857,g__7859,h__7861,i__7863,j__7865,k__7867,l__7869,m__7871,n__7873,o__7875);
} else
{return f__7857.call(null,a__7847,b__7849,c__7851,d__7853,e__7855,f__7857,g__7859,h__7861,i__7863,j__7865,k__7867,l__7869,m__7871,n__7873,o__7875);
}
} else
{var p__7877 = cljs.core._first.call(null,args__7876);
var args__7878 = cljs.core._rest.call(null,args__7876);
if((argc === 16))
{if(f__7857.cljs$lang$arity$16)
{return f__7857.cljs$lang$arity$16(a__7847,b__7849,c__7851,d__7853,e__7855,f__7857,g__7859,h__7861,i__7863,j__7865,k__7867,l__7869,m__7871,n__7873,o__7875,p__7877);
} else
{return f__7857.call(null,a__7847,b__7849,c__7851,d__7853,e__7855,f__7857,g__7859,h__7861,i__7863,j__7865,k__7867,l__7869,m__7871,n__7873,o__7875,p__7877);
}
} else
{var q__7879 = cljs.core._first.call(null,args__7878);
var args__7880 = cljs.core._rest.call(null,args__7878);
if((argc === 17))
{if(f__7857.cljs$lang$arity$17)
{return f__7857.cljs$lang$arity$17(a__7847,b__7849,c__7851,d__7853,e__7855,f__7857,g__7859,h__7861,i__7863,j__7865,k__7867,l__7869,m__7871,n__7873,o__7875,p__7877,q__7879);
} else
{return f__7857.call(null,a__7847,b__7849,c__7851,d__7853,e__7855,f__7857,g__7859,h__7861,i__7863,j__7865,k__7867,l__7869,m__7871,n__7873,o__7875,p__7877,q__7879);
}
} else
{var r__7881 = cljs.core._first.call(null,args__7880);
var args__7882 = cljs.core._rest.call(null,args__7880);
if((argc === 18))
{if(f__7857.cljs$lang$arity$18)
{return f__7857.cljs$lang$arity$18(a__7847,b__7849,c__7851,d__7853,e__7855,f__7857,g__7859,h__7861,i__7863,j__7865,k__7867,l__7869,m__7871,n__7873,o__7875,p__7877,q__7879,r__7881);
} else
{return f__7857.call(null,a__7847,b__7849,c__7851,d__7853,e__7855,f__7857,g__7859,h__7861,i__7863,j__7865,k__7867,l__7869,m__7871,n__7873,o__7875,p__7877,q__7879,r__7881);
}
} else
{var s__7883 = cljs.core._first.call(null,args__7882);
var args__7884 = cljs.core._rest.call(null,args__7882);
if((argc === 19))
{if(f__7857.cljs$lang$arity$19)
{return f__7857.cljs$lang$arity$19(a__7847,b__7849,c__7851,d__7853,e__7855,f__7857,g__7859,h__7861,i__7863,j__7865,k__7867,l__7869,m__7871,n__7873,o__7875,p__7877,q__7879,r__7881,s__7883);
} else
{return f__7857.call(null,a__7847,b__7849,c__7851,d__7853,e__7855,f__7857,g__7859,h__7861,i__7863,j__7865,k__7867,l__7869,m__7871,n__7873,o__7875,p__7877,q__7879,r__7881,s__7883);
}
} else
{var t__7885 = cljs.core._first.call(null,args__7884);
var args__7886 = cljs.core._rest.call(null,args__7884);
if((argc === 20))
{if(f__7857.cljs$lang$arity$20)
{return f__7857.cljs$lang$arity$20(a__7847,b__7849,c__7851,d__7853,e__7855,f__7857,g__7859,h__7861,i__7863,j__7865,k__7867,l__7869,m__7871,n__7873,o__7875,p__7877,q__7879,r__7881,s__7883,t__7885);
} else
{return f__7857.call(null,a__7847,b__7849,c__7851,d__7853,e__7855,f__7857,g__7859,h__7861,i__7863,j__7865,k__7867,l__7869,m__7871,n__7873,o__7875,p__7877,q__7879,r__7881,s__7883,t__7885);
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
var fixed_arity__7901 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7902 = cljs.core.bounded_count.call(null,args,(fixed_arity__7901 + 1));
if((bc__7902 <= fixed_arity__7901))
{return cljs.core.apply_to.call(null,f,bc__7902,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__7903 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__7904 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7905 = cljs.core.bounded_count.call(null,arglist__7903,(fixed_arity__7904 + 1));
if((bc__7905 <= fixed_arity__7904))
{return cljs.core.apply_to.call(null,f,bc__7905,arglist__7903);
} else
{return f.cljs$lang$applyTo(arglist__7903);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7903));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__7906 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__7907 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7908 = cljs.core.bounded_count.call(null,arglist__7906,(fixed_arity__7907 + 1));
if((bc__7908 <= fixed_arity__7907))
{return cljs.core.apply_to.call(null,f,bc__7908,arglist__7906);
} else
{return f.cljs$lang$applyTo(arglist__7906);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7906));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__7909 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__7910 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7911 = cljs.core.bounded_count.call(null,arglist__7909,(fixed_arity__7910 + 1));
if((bc__7911 <= fixed_arity__7910))
{return cljs.core.apply_to.call(null,f,bc__7911,arglist__7909);
} else
{return f.cljs$lang$applyTo(arglist__7909);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7909));
}
});
var apply__6 = (function() { 
var G__7915__delegate = function (f,a,b,c,d,args){
var arglist__7912 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__7913 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7914 = cljs.core.bounded_count.call(null,arglist__7912,(fixed_arity__7913 + 1));
if((bc__7914 <= fixed_arity__7913))
{return cljs.core.apply_to.call(null,f,bc__7914,arglist__7912);
} else
{return f.cljs$lang$applyTo(arglist__7912);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7912));
}
};
var G__7915 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__7915__delegate.call(this, f, a, b, c, d, args);
};
G__7915.cljs$lang$maxFixedArity = 5;
G__7915.cljs$lang$applyTo = (function (arglist__7916){
var f = cljs.core.first(arglist__7916);
var a = cljs.core.first(cljs.core.next(arglist__7916));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7916)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7916))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7916)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7916)))));
return G__7915__delegate(f, a, b, c, d, args);
});
G__7915.cljs$lang$arity$variadic = G__7915__delegate;
return G__7915;
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
vary_meta.cljs$lang$applyTo = (function (arglist__7917){
var obj = cljs.core.first(arglist__7917);
var f = cljs.core.first(cljs.core.next(arglist__7917));
var args = cljs.core.rest(cljs.core.next(arglist__7917));
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
var G__7918__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__7918 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7918__delegate.call(this, x, y, more);
};
G__7918.cljs$lang$maxFixedArity = 2;
G__7918.cljs$lang$applyTo = (function (arglist__7919){
var x = cljs.core.first(arglist__7919);
var y = cljs.core.first(cljs.core.next(arglist__7919));
var more = cljs.core.rest(cljs.core.next(arglist__7919));
return G__7918__delegate(x, y, more);
});
G__7918.cljs$lang$arity$variadic = G__7918__delegate;
return G__7918;
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
var G__7920 = pred;
var G__7921 = cljs.core.next.call(null,coll);
pred = G__7920;
coll = G__7921;
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
{var or__3824__auto____7923 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____7923))
{return or__3824__auto____7923;
} else
{{
var G__7924 = pred;
var G__7925 = cljs.core.next.call(null,coll);
pred = G__7924;
coll = G__7925;
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
var G__7926 = null;
var G__7926__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__7926__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__7926__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__7926__3 = (function() { 
var G__7927__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__7927 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7927__delegate.call(this, x, y, zs);
};
G__7927.cljs$lang$maxFixedArity = 2;
G__7927.cljs$lang$applyTo = (function (arglist__7928){
var x = cljs.core.first(arglist__7928);
var y = cljs.core.first(cljs.core.next(arglist__7928));
var zs = cljs.core.rest(cljs.core.next(arglist__7928));
return G__7927__delegate(x, y, zs);
});
G__7927.cljs$lang$arity$variadic = G__7927__delegate;
return G__7927;
})()
;
G__7926 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__7926__0.call(this);
case 1:
return G__7926__1.call(this,x);
case 2:
return G__7926__2.call(this,x,y);
default:
return G__7926__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__7926.cljs$lang$maxFixedArity = 2;
G__7926.cljs$lang$applyTo = G__7926__3.cljs$lang$applyTo;
return G__7926;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__7929__delegate = function (args){
return x;
};
var G__7929 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7929__delegate.call(this, args);
};
G__7929.cljs$lang$maxFixedArity = 0;
G__7929.cljs$lang$applyTo = (function (arglist__7930){
var args = cljs.core.seq(arglist__7930);;
return G__7929__delegate(args);
});
G__7929.cljs$lang$arity$variadic = G__7929__delegate;
return G__7929;
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
var G__7937 = null;
var G__7937__0 = (function (){
return f.call(null,g.call(null));
});
var G__7937__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__7937__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__7937__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__7937__4 = (function() { 
var G__7938__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__7938 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7938__delegate.call(this, x, y, z, args);
};
G__7938.cljs$lang$maxFixedArity = 3;
G__7938.cljs$lang$applyTo = (function (arglist__7939){
var x = cljs.core.first(arglist__7939);
var y = cljs.core.first(cljs.core.next(arglist__7939));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7939)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7939)));
return G__7938__delegate(x, y, z, args);
});
G__7938.cljs$lang$arity$variadic = G__7938__delegate;
return G__7938;
})()
;
G__7937 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7937__0.call(this);
case 1:
return G__7937__1.call(this,x);
case 2:
return G__7937__2.call(this,x,y);
case 3:
return G__7937__3.call(this,x,y,z);
default:
return G__7937__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7937.cljs$lang$maxFixedArity = 3;
G__7937.cljs$lang$applyTo = G__7937__4.cljs$lang$applyTo;
return G__7937;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__7940 = null;
var G__7940__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__7940__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__7940__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__7940__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__7940__4 = (function() { 
var G__7941__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__7941 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7941__delegate.call(this, x, y, z, args);
};
G__7941.cljs$lang$maxFixedArity = 3;
G__7941.cljs$lang$applyTo = (function (arglist__7942){
var x = cljs.core.first(arglist__7942);
var y = cljs.core.first(cljs.core.next(arglist__7942));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7942)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7942)));
return G__7941__delegate(x, y, z, args);
});
G__7941.cljs$lang$arity$variadic = G__7941__delegate;
return G__7941;
})()
;
G__7940 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7940__0.call(this);
case 1:
return G__7940__1.call(this,x);
case 2:
return G__7940__2.call(this,x,y);
case 3:
return G__7940__3.call(this,x,y,z);
default:
return G__7940__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7940.cljs$lang$maxFixedArity = 3;
G__7940.cljs$lang$applyTo = G__7940__4.cljs$lang$applyTo;
return G__7940;
})()
});
var comp__4 = (function() { 
var G__7943__delegate = function (f1,f2,f3,fs){
var fs__7934 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__7944__delegate = function (args){
var ret__7935 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__7934),args);
var fs__7936 = cljs.core.next.call(null,fs__7934);
while(true){
if(fs__7936)
{{
var G__7945 = cljs.core.first.call(null,fs__7936).call(null,ret__7935);
var G__7946 = cljs.core.next.call(null,fs__7936);
ret__7935 = G__7945;
fs__7936 = G__7946;
continue;
}
} else
{return ret__7935;
}
break;
}
};
var G__7944 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7944__delegate.call(this, args);
};
G__7944.cljs$lang$maxFixedArity = 0;
G__7944.cljs$lang$applyTo = (function (arglist__7947){
var args = cljs.core.seq(arglist__7947);;
return G__7944__delegate(args);
});
G__7944.cljs$lang$arity$variadic = G__7944__delegate;
return G__7944;
})()
;
};
var G__7943 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7943__delegate.call(this, f1, f2, f3, fs);
};
G__7943.cljs$lang$maxFixedArity = 3;
G__7943.cljs$lang$applyTo = (function (arglist__7948){
var f1 = cljs.core.first(arglist__7948);
var f2 = cljs.core.first(cljs.core.next(arglist__7948));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7948)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7948)));
return G__7943__delegate(f1, f2, f3, fs);
});
G__7943.cljs$lang$arity$variadic = G__7943__delegate;
return G__7943;
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
var G__7949__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__7949 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7949__delegate.call(this, args);
};
G__7949.cljs$lang$maxFixedArity = 0;
G__7949.cljs$lang$applyTo = (function (arglist__7950){
var args = cljs.core.seq(arglist__7950);;
return G__7949__delegate(args);
});
G__7949.cljs$lang$arity$variadic = G__7949__delegate;
return G__7949;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__7951__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__7951 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7951__delegate.call(this, args);
};
G__7951.cljs$lang$maxFixedArity = 0;
G__7951.cljs$lang$applyTo = (function (arglist__7952){
var args = cljs.core.seq(arglist__7952);;
return G__7951__delegate(args);
});
G__7951.cljs$lang$arity$variadic = G__7951__delegate;
return G__7951;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__7953__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__7953 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7953__delegate.call(this, args);
};
G__7953.cljs$lang$maxFixedArity = 0;
G__7953.cljs$lang$applyTo = (function (arglist__7954){
var args = cljs.core.seq(arglist__7954);;
return G__7953__delegate(args);
});
G__7953.cljs$lang$arity$variadic = G__7953__delegate;
return G__7953;
})()
;
});
var partial__5 = (function() { 
var G__7955__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__7956__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__7956 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7956__delegate.call(this, args);
};
G__7956.cljs$lang$maxFixedArity = 0;
G__7956.cljs$lang$applyTo = (function (arglist__7957){
var args = cljs.core.seq(arglist__7957);;
return G__7956__delegate(args);
});
G__7956.cljs$lang$arity$variadic = G__7956__delegate;
return G__7956;
})()
;
};
var G__7955 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7955__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__7955.cljs$lang$maxFixedArity = 4;
G__7955.cljs$lang$applyTo = (function (arglist__7958){
var f = cljs.core.first(arglist__7958);
var arg1 = cljs.core.first(cljs.core.next(arglist__7958));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7958)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7958))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7958))));
return G__7955__delegate(f, arg1, arg2, arg3, more);
});
G__7955.cljs$lang$arity$variadic = G__7955__delegate;
return G__7955;
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
var G__7959 = null;
var G__7959__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__7959__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__7959__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__7959__4 = (function() { 
var G__7960__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__7960 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7960__delegate.call(this, a, b, c, ds);
};
G__7960.cljs$lang$maxFixedArity = 3;
G__7960.cljs$lang$applyTo = (function (arglist__7961){
var a = cljs.core.first(arglist__7961);
var b = cljs.core.first(cljs.core.next(arglist__7961));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7961)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7961)));
return G__7960__delegate(a, b, c, ds);
});
G__7960.cljs$lang$arity$variadic = G__7960__delegate;
return G__7960;
})()
;
G__7959 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__7959__1.call(this,a);
case 2:
return G__7959__2.call(this,a,b);
case 3:
return G__7959__3.call(this,a,b,c);
default:
return G__7959__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7959.cljs$lang$maxFixedArity = 3;
G__7959.cljs$lang$applyTo = G__7959__4.cljs$lang$applyTo;
return G__7959;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__7962 = null;
var G__7962__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7962__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__7962__4 = (function() { 
var G__7963__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__7963 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7963__delegate.call(this, a, b, c, ds);
};
G__7963.cljs$lang$maxFixedArity = 3;
G__7963.cljs$lang$applyTo = (function (arglist__7964){
var a = cljs.core.first(arglist__7964);
var b = cljs.core.first(cljs.core.next(arglist__7964));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7964)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7964)));
return G__7963__delegate(a, b, c, ds);
});
G__7963.cljs$lang$arity$variadic = G__7963__delegate;
return G__7963;
})()
;
G__7962 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7962__2.call(this,a,b);
case 3:
return G__7962__3.call(this,a,b,c);
default:
return G__7962__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7962.cljs$lang$maxFixedArity = 3;
G__7962.cljs$lang$applyTo = G__7962__4.cljs$lang$applyTo;
return G__7962;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__7965 = null;
var G__7965__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7965__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__7965__4 = (function() { 
var G__7966__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__7966 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7966__delegate.call(this, a, b, c, ds);
};
G__7966.cljs$lang$maxFixedArity = 3;
G__7966.cljs$lang$applyTo = (function (arglist__7967){
var a = cljs.core.first(arglist__7967);
var b = cljs.core.first(cljs.core.next(arglist__7967));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7967)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7967)));
return G__7966__delegate(a, b, c, ds);
});
G__7966.cljs$lang$arity$variadic = G__7966__delegate;
return G__7966;
})()
;
G__7965 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7965__2.call(this,a,b);
case 3:
return G__7965__3.call(this,a,b,c);
default:
return G__7965__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7965.cljs$lang$maxFixedArity = 3;
G__7965.cljs$lang$applyTo = G__7965__4.cljs$lang$applyTo;
return G__7965;
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
var mapi__7983 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7991 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7991)
{var s__7992 = temp__3974__auto____7991;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7992))
{var c__7993 = cljs.core.chunk_first.call(null,s__7992);
var size__7994 = cljs.core.count.call(null,c__7993);
var b__7995 = cljs.core.chunk_buffer.call(null,size__7994);
var n__2492__auto____7996 = size__7994;
var i__7997 = 0;
while(true){
if((i__7997 < n__2492__auto____7996))
{cljs.core.chunk_append.call(null,b__7995,f.call(null,(idx + i__7997),cljs.core._nth.call(null,c__7993,i__7997)));
{
var G__7998 = (i__7997 + 1);
i__7997 = G__7998;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7995),mapi.call(null,(idx + size__7994),cljs.core.chunk_rest.call(null,s__7992)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__7992)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__7992)));
}
} else
{return null;
}
}),null));
});
return mapi__7983.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8008 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8008)
{var s__8009 = temp__3974__auto____8008;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8009))
{var c__8010 = cljs.core.chunk_first.call(null,s__8009);
var size__8011 = cljs.core.count.call(null,c__8010);
var b__8012 = cljs.core.chunk_buffer.call(null,size__8011);
var n__2492__auto____8013 = size__8011;
var i__8014 = 0;
while(true){
if((i__8014 < n__2492__auto____8013))
{var x__8015 = f.call(null,cljs.core._nth.call(null,c__8010,i__8014));
if((x__8015 == null))
{} else
{cljs.core.chunk_append.call(null,b__8012,x__8015);
}
{
var G__8017 = (i__8014 + 1);
i__8014 = G__8017;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8012),keep.call(null,f,cljs.core.chunk_rest.call(null,s__8009)));
} else
{var x__8016 = f.call(null,cljs.core.first.call(null,s__8009));
if((x__8016 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__8009));
} else
{return cljs.core.cons.call(null,x__8016,keep.call(null,f,cljs.core.rest.call(null,s__8009)));
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
var keepi__8043 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8053 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8053)
{var s__8054 = temp__3974__auto____8053;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8054))
{var c__8055 = cljs.core.chunk_first.call(null,s__8054);
var size__8056 = cljs.core.count.call(null,c__8055);
var b__8057 = cljs.core.chunk_buffer.call(null,size__8056);
var n__2492__auto____8058 = size__8056;
var i__8059 = 0;
while(true){
if((i__8059 < n__2492__auto____8058))
{var x__8060 = f.call(null,(idx + i__8059),cljs.core._nth.call(null,c__8055,i__8059));
if((x__8060 == null))
{} else
{cljs.core.chunk_append.call(null,b__8057,x__8060);
}
{
var G__8062 = (i__8059 + 1);
i__8059 = G__8062;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8057),keepi.call(null,(idx + size__8056),cljs.core.chunk_rest.call(null,s__8054)));
} else
{var x__8061 = f.call(null,idx,cljs.core.first.call(null,s__8054));
if((x__8061 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__8054));
} else
{return cljs.core.cons.call(null,x__8061,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__8054)));
}
}
} else
{return null;
}
}),null));
});
return keepi__8043.call(null,0,coll);
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8148 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____8148))
{return p.call(null,y);
} else
{return and__3822__auto____8148;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8149 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____8149))
{var and__3822__auto____8150 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____8150))
{return p.call(null,z);
} else
{return and__3822__auto____8150;
}
} else
{return and__3822__auto____8149;
}
})());
});
var ep1__4 = (function() { 
var G__8219__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8151 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8151))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____8151;
}
})());
};
var G__8219 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8219__delegate.call(this, x, y, z, args);
};
G__8219.cljs$lang$maxFixedArity = 3;
G__8219.cljs$lang$applyTo = (function (arglist__8220){
var x = cljs.core.first(arglist__8220);
var y = cljs.core.first(cljs.core.next(arglist__8220));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8220)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8220)));
return G__8219__delegate(x, y, z, args);
});
G__8219.cljs$lang$arity$variadic = G__8219__delegate;
return G__8219;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8163 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8163))
{return p2.call(null,x);
} else
{return and__3822__auto____8163;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8164 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8164))
{var and__3822__auto____8165 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8165))
{var and__3822__auto____8166 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8166))
{return p2.call(null,y);
} else
{return and__3822__auto____8166;
}
} else
{return and__3822__auto____8165;
}
} else
{return and__3822__auto____8164;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8167 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8167))
{var and__3822__auto____8168 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8168))
{var and__3822__auto____8169 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____8169))
{var and__3822__auto____8170 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8170))
{var and__3822__auto____8171 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8171))
{return p2.call(null,z);
} else
{return and__3822__auto____8171;
}
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
})());
});
var ep2__4 = (function() { 
var G__8221__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8172 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8172))
{return cljs.core.every_QMARK_.call(null,(function (p1__8018_SHARP_){
var and__3822__auto____8173 = p1.call(null,p1__8018_SHARP_);
if(cljs.core.truth_(and__3822__auto____8173))
{return p2.call(null,p1__8018_SHARP_);
} else
{return and__3822__auto____8173;
}
}),args);
} else
{return and__3822__auto____8172;
}
})());
};
var G__8221 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8221__delegate.call(this, x, y, z, args);
};
G__8221.cljs$lang$maxFixedArity = 3;
G__8221.cljs$lang$applyTo = (function (arglist__8222){
var x = cljs.core.first(arglist__8222);
var y = cljs.core.first(cljs.core.next(arglist__8222));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8222)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8222)));
return G__8221__delegate(x, y, z, args);
});
G__8221.cljs$lang$arity$variadic = G__8221__delegate;
return G__8221;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8192 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8192))
{var and__3822__auto____8193 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8193))
{return p3.call(null,x);
} else
{return and__3822__auto____8193;
}
} else
{return and__3822__auto____8192;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8194 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8194))
{var and__3822__auto____8195 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8195))
{var and__3822__auto____8196 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____8196))
{var and__3822__auto____8197 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8197))
{var and__3822__auto____8198 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8198))
{return p3.call(null,y);
} else
{return and__3822__auto____8198;
}
} else
{return and__3822__auto____8197;
}
} else
{return and__3822__auto____8196;
}
} else
{return and__3822__auto____8195;
}
} else
{return and__3822__auto____8194;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8199 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8199))
{var and__3822__auto____8200 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8200))
{var and__3822__auto____8201 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____8201))
{var and__3822__auto____8202 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8202))
{var and__3822__auto____8203 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8203))
{var and__3822__auto____8204 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____8204))
{var and__3822__auto____8205 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____8205))
{var and__3822__auto____8206 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____8206))
{return p3.call(null,z);
} else
{return and__3822__auto____8206;
}
} else
{return and__3822__auto____8205;
}
} else
{return and__3822__auto____8204;
}
} else
{return and__3822__auto____8203;
}
} else
{return and__3822__auto____8202;
}
} else
{return and__3822__auto____8201;
}
} else
{return and__3822__auto____8200;
}
} else
{return and__3822__auto____8199;
}
})());
});
var ep3__4 = (function() { 
var G__8223__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8207 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8207))
{return cljs.core.every_QMARK_.call(null,(function (p1__8019_SHARP_){
var and__3822__auto____8208 = p1.call(null,p1__8019_SHARP_);
if(cljs.core.truth_(and__3822__auto____8208))
{var and__3822__auto____8209 = p2.call(null,p1__8019_SHARP_);
if(cljs.core.truth_(and__3822__auto____8209))
{return p3.call(null,p1__8019_SHARP_);
} else
{return and__3822__auto____8209;
}
} else
{return and__3822__auto____8208;
}
}),args);
} else
{return and__3822__auto____8207;
}
})());
};
var G__8223 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8223__delegate.call(this, x, y, z, args);
};
G__8223.cljs$lang$maxFixedArity = 3;
G__8223.cljs$lang$applyTo = (function (arglist__8224){
var x = cljs.core.first(arglist__8224);
var y = cljs.core.first(cljs.core.next(arglist__8224));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8224)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8224)));
return G__8223__delegate(x, y, z, args);
});
G__8223.cljs$lang$arity$variadic = G__8223__delegate;
return G__8223;
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
var G__8225__delegate = function (p1,p2,p3,ps){
var ps__8210 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__8020_SHARP_){
return p1__8020_SHARP_.call(null,x);
}),ps__8210);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__8021_SHARP_){
var and__3822__auto____8215 = p1__8021_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____8215))
{return p1__8021_SHARP_.call(null,y);
} else
{return and__3822__auto____8215;
}
}),ps__8210);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__8022_SHARP_){
var and__3822__auto____8216 = p1__8022_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____8216))
{var and__3822__auto____8217 = p1__8022_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____8217))
{return p1__8022_SHARP_.call(null,z);
} else
{return and__3822__auto____8217;
}
} else
{return and__3822__auto____8216;
}
}),ps__8210);
});
var epn__4 = (function() { 
var G__8226__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8218 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8218))
{return cljs.core.every_QMARK_.call(null,(function (p1__8023_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__8023_SHARP_,args);
}),ps__8210);
} else
{return and__3822__auto____8218;
}
})());
};
var G__8226 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8226__delegate.call(this, x, y, z, args);
};
G__8226.cljs$lang$maxFixedArity = 3;
G__8226.cljs$lang$applyTo = (function (arglist__8227){
var x = cljs.core.first(arglist__8227);
var y = cljs.core.first(cljs.core.next(arglist__8227));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8227)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8227)));
return G__8226__delegate(x, y, z, args);
});
G__8226.cljs$lang$arity$variadic = G__8226__delegate;
return G__8226;
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
var G__8225 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8225__delegate.call(this, p1, p2, p3, ps);
};
G__8225.cljs$lang$maxFixedArity = 3;
G__8225.cljs$lang$applyTo = (function (arglist__8228){
var p1 = cljs.core.first(arglist__8228);
var p2 = cljs.core.first(cljs.core.next(arglist__8228));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8228)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8228)));
return G__8225__delegate(p1, p2, p3, ps);
});
G__8225.cljs$lang$arity$variadic = G__8225__delegate;
return G__8225;
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
var or__3824__auto____8309 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____8309))
{return or__3824__auto____8309;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____8310 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____8310))
{return or__3824__auto____8310;
} else
{var or__3824__auto____8311 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____8311))
{return or__3824__auto____8311;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__8380__delegate = function (x,y,z,args){
var or__3824__auto____8312 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8312))
{return or__3824__auto____8312;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__8380 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8380__delegate.call(this, x, y, z, args);
};
G__8380.cljs$lang$maxFixedArity = 3;
G__8380.cljs$lang$applyTo = (function (arglist__8381){
var x = cljs.core.first(arglist__8381);
var y = cljs.core.first(cljs.core.next(arglist__8381));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8381)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8381)));
return G__8380__delegate(x, y, z, args);
});
G__8380.cljs$lang$arity$variadic = G__8380__delegate;
return G__8380;
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
var or__3824__auto____8324 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8324))
{return or__3824__auto____8324;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____8325 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8325))
{return or__3824__auto____8325;
} else
{var or__3824__auto____8326 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8326))
{return or__3824__auto____8326;
} else
{var or__3824__auto____8327 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8327))
{return or__3824__auto____8327;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____8328 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8328))
{return or__3824__auto____8328;
} else
{var or__3824__auto____8329 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8329))
{return or__3824__auto____8329;
} else
{var or__3824__auto____8330 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____8330))
{return or__3824__auto____8330;
} else
{var or__3824__auto____8331 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8331))
{return or__3824__auto____8331;
} else
{var or__3824__auto____8332 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8332))
{return or__3824__auto____8332;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__8382__delegate = function (x,y,z,args){
var or__3824__auto____8333 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8333))
{return or__3824__auto____8333;
} else
{return cljs.core.some.call(null,(function (p1__8063_SHARP_){
var or__3824__auto____8334 = p1.call(null,p1__8063_SHARP_);
if(cljs.core.truth_(or__3824__auto____8334))
{return or__3824__auto____8334;
} else
{return p2.call(null,p1__8063_SHARP_);
}
}),args);
}
};
var G__8382 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8382__delegate.call(this, x, y, z, args);
};
G__8382.cljs$lang$maxFixedArity = 3;
G__8382.cljs$lang$applyTo = (function (arglist__8383){
var x = cljs.core.first(arglist__8383);
var y = cljs.core.first(cljs.core.next(arglist__8383));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8383)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8383)));
return G__8382__delegate(x, y, z, args);
});
G__8382.cljs$lang$arity$variadic = G__8382__delegate;
return G__8382;
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
var or__3824__auto____8353 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8353))
{return or__3824__auto____8353;
} else
{var or__3824__auto____8354 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8354))
{return or__3824__auto____8354;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____8355 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8355))
{return or__3824__auto____8355;
} else
{var or__3824__auto____8356 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8356))
{return or__3824__auto____8356;
} else
{var or__3824__auto____8357 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____8357))
{return or__3824__auto____8357;
} else
{var or__3824__auto____8358 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8358))
{return or__3824__auto____8358;
} else
{var or__3824__auto____8359 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8359))
{return or__3824__auto____8359;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____8360 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8360))
{return or__3824__auto____8360;
} else
{var or__3824__auto____8361 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8361))
{return or__3824__auto____8361;
} else
{var or__3824__auto____8362 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____8362))
{return or__3824__auto____8362;
} else
{var or__3824__auto____8363 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8363))
{return or__3824__auto____8363;
} else
{var or__3824__auto____8364 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8364))
{return or__3824__auto____8364;
} else
{var or__3824__auto____8365 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____8365))
{return or__3824__auto____8365;
} else
{var or__3824__auto____8366 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____8366))
{return or__3824__auto____8366;
} else
{var or__3824__auto____8367 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____8367))
{return or__3824__auto____8367;
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
var G__8384__delegate = function (x,y,z,args){
var or__3824__auto____8368 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8368))
{return or__3824__auto____8368;
} else
{return cljs.core.some.call(null,(function (p1__8064_SHARP_){
var or__3824__auto____8369 = p1.call(null,p1__8064_SHARP_);
if(cljs.core.truth_(or__3824__auto____8369))
{return or__3824__auto____8369;
} else
{var or__3824__auto____8370 = p2.call(null,p1__8064_SHARP_);
if(cljs.core.truth_(or__3824__auto____8370))
{return or__3824__auto____8370;
} else
{return p3.call(null,p1__8064_SHARP_);
}
}
}),args);
}
};
var G__8384 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8384__delegate.call(this, x, y, z, args);
};
G__8384.cljs$lang$maxFixedArity = 3;
G__8384.cljs$lang$applyTo = (function (arglist__8385){
var x = cljs.core.first(arglist__8385);
var y = cljs.core.first(cljs.core.next(arglist__8385));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8385)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8385)));
return G__8384__delegate(x, y, z, args);
});
G__8384.cljs$lang$arity$variadic = G__8384__delegate;
return G__8384;
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
var G__8386__delegate = function (p1,p2,p3,ps){
var ps__8371 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__8065_SHARP_){
return p1__8065_SHARP_.call(null,x);
}),ps__8371);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__8066_SHARP_){
var or__3824__auto____8376 = p1__8066_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____8376))
{return or__3824__auto____8376;
} else
{return p1__8066_SHARP_.call(null,y);
}
}),ps__8371);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__8067_SHARP_){
var or__3824__auto____8377 = p1__8067_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____8377))
{return or__3824__auto____8377;
} else
{var or__3824__auto____8378 = p1__8067_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____8378))
{return or__3824__auto____8378;
} else
{return p1__8067_SHARP_.call(null,z);
}
}
}),ps__8371);
});
var spn__4 = (function() { 
var G__8387__delegate = function (x,y,z,args){
var or__3824__auto____8379 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8379))
{return or__3824__auto____8379;
} else
{return cljs.core.some.call(null,(function (p1__8068_SHARP_){
return cljs.core.some.call(null,p1__8068_SHARP_,args);
}),ps__8371);
}
};
var G__8387 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8387__delegate.call(this, x, y, z, args);
};
G__8387.cljs$lang$maxFixedArity = 3;
G__8387.cljs$lang$applyTo = (function (arglist__8388){
var x = cljs.core.first(arglist__8388);
var y = cljs.core.first(cljs.core.next(arglist__8388));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8388)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8388)));
return G__8387__delegate(x, y, z, args);
});
G__8387.cljs$lang$arity$variadic = G__8387__delegate;
return G__8387;
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
var G__8386 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8386__delegate.call(this, p1, p2, p3, ps);
};
G__8386.cljs$lang$maxFixedArity = 3;
G__8386.cljs$lang$applyTo = (function (arglist__8389){
var p1 = cljs.core.first(arglist__8389);
var p2 = cljs.core.first(cljs.core.next(arglist__8389));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8389)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8389)));
return G__8386__delegate(p1, p2, p3, ps);
});
G__8386.cljs$lang$arity$variadic = G__8386__delegate;
return G__8386;
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
var temp__3974__auto____8408 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8408)
{var s__8409 = temp__3974__auto____8408;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8409))
{var c__8410 = cljs.core.chunk_first.call(null,s__8409);
var size__8411 = cljs.core.count.call(null,c__8410);
var b__8412 = cljs.core.chunk_buffer.call(null,size__8411);
var n__2492__auto____8413 = size__8411;
var i__8414 = 0;
while(true){
if((i__8414 < n__2492__auto____8413))
{cljs.core.chunk_append.call(null,b__8412,f.call(null,cljs.core._nth.call(null,c__8410,i__8414)));
{
var G__8426 = (i__8414 + 1);
i__8414 = G__8426;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8412),map.call(null,f,cljs.core.chunk_rest.call(null,s__8409)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__8409)),map.call(null,f,cljs.core.rest.call(null,s__8409)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8415 = cljs.core.seq.call(null,c1);
var s2__8416 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____8417 = s1__8415;
if(and__3822__auto____8417)
{return s2__8416;
} else
{return and__3822__auto____8417;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8415),cljs.core.first.call(null,s2__8416)),map.call(null,f,cljs.core.rest.call(null,s1__8415),cljs.core.rest.call(null,s2__8416)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8418 = cljs.core.seq.call(null,c1);
var s2__8419 = cljs.core.seq.call(null,c2);
var s3__8420 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____8421 = s1__8418;
if(and__3822__auto____8421)
{var and__3822__auto____8422 = s2__8419;
if(and__3822__auto____8422)
{return s3__8420;
} else
{return and__3822__auto____8422;
}
} else
{return and__3822__auto____8421;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8418),cljs.core.first.call(null,s2__8419),cljs.core.first.call(null,s3__8420)),map.call(null,f,cljs.core.rest.call(null,s1__8418),cljs.core.rest.call(null,s2__8419),cljs.core.rest.call(null,s3__8420)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__8427__delegate = function (f,c1,c2,c3,colls){
var step__8425 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8424 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8424))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__8424),step.call(null,map.call(null,cljs.core.rest,ss__8424)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__8229_SHARP_){
return cljs.core.apply.call(null,f,p1__8229_SHARP_);
}),step__8425.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__8427 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8427__delegate.call(this, f, c1, c2, c3, colls);
};
G__8427.cljs$lang$maxFixedArity = 4;
G__8427.cljs$lang$applyTo = (function (arglist__8428){
var f = cljs.core.first(arglist__8428);
var c1 = cljs.core.first(cljs.core.next(arglist__8428));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8428)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8428))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8428))));
return G__8427__delegate(f, c1, c2, c3, colls);
});
G__8427.cljs$lang$arity$variadic = G__8427__delegate;
return G__8427;
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
{var temp__3974__auto____8431 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8431)
{var s__8432 = temp__3974__auto____8431;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__8432),take.call(null,(n - 1),cljs.core.rest.call(null,s__8432)));
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
var step__8438 = (function (n,coll){
while(true){
var s__8436 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____8437 = (n > 0);
if(and__3822__auto____8437)
{return s__8436;
} else
{return and__3822__auto____8437;
}
})()))
{{
var G__8439 = (n - 1);
var G__8440 = cljs.core.rest.call(null,s__8436);
n = G__8439;
coll = G__8440;
continue;
}
} else
{return s__8436;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__8438.call(null,n,coll);
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
var s__8443 = cljs.core.seq.call(null,coll);
var lead__8444 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__8444)
{{
var G__8445 = cljs.core.next.call(null,s__8443);
var G__8446 = cljs.core.next.call(null,lead__8444);
s__8443 = G__8445;
lead__8444 = G__8446;
continue;
}
} else
{return s__8443;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__8452 = (function (pred,coll){
while(true){
var s__8450 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____8451 = s__8450;
if(and__3822__auto____8451)
{return pred.call(null,cljs.core.first.call(null,s__8450));
} else
{return and__3822__auto____8451;
}
})()))
{{
var G__8453 = pred;
var G__8454 = cljs.core.rest.call(null,s__8450);
pred = G__8453;
coll = G__8454;
continue;
}
} else
{return s__8450;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__8452.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8457 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8457)
{var s__8458 = temp__3974__auto____8457;
return cljs.core.concat.call(null,s__8458,cycle.call(null,s__8458));
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
var s1__8463 = cljs.core.seq.call(null,c1);
var s2__8464 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____8465 = s1__8463;
if(and__3822__auto____8465)
{return s2__8464;
} else
{return and__3822__auto____8465;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__8463),cljs.core.cons.call(null,cljs.core.first.call(null,s2__8464),interleave.call(null,cljs.core.rest.call(null,s1__8463),cljs.core.rest.call(null,s2__8464))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__8467__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8466 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8466))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__8466),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__8466)));
} else
{return null;
}
}),null));
};
var G__8467 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8467__delegate.call(this, c1, c2, colls);
};
G__8467.cljs$lang$maxFixedArity = 2;
G__8467.cljs$lang$applyTo = (function (arglist__8468){
var c1 = cljs.core.first(arglist__8468);
var c2 = cljs.core.first(cljs.core.next(arglist__8468));
var colls = cljs.core.rest(cljs.core.next(arglist__8468));
return G__8467__delegate(c1, c2, colls);
});
G__8467.cljs$lang$arity$variadic = G__8467__delegate;
return G__8467;
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
var cat__8478 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____8476 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____8476)
{var coll__8477 = temp__3971__auto____8476;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__8477),cat.call(null,cljs.core.rest.call(null,coll__8477),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__8478.call(null,null,colls);
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
var G__8479__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__8479 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8479__delegate.call(this, f, coll, colls);
};
G__8479.cljs$lang$maxFixedArity = 2;
G__8479.cljs$lang$applyTo = (function (arglist__8480){
var f = cljs.core.first(arglist__8480);
var coll = cljs.core.first(cljs.core.next(arglist__8480));
var colls = cljs.core.rest(cljs.core.next(arglist__8480));
return G__8479__delegate(f, coll, colls);
});
G__8479.cljs$lang$arity$variadic = G__8479__delegate;
return G__8479;
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
var temp__3974__auto____8490 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8490)
{var s__8491 = temp__3974__auto____8490;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8491))
{var c__8492 = cljs.core.chunk_first.call(null,s__8491);
var size__8493 = cljs.core.count.call(null,c__8492);
var b__8494 = cljs.core.chunk_buffer.call(null,size__8493);
var n__2492__auto____8495 = size__8493;
var i__8496 = 0;
while(true){
if((i__8496 < n__2492__auto____8495))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__8492,i__8496))))
{cljs.core.chunk_append.call(null,b__8494,cljs.core._nth.call(null,c__8492,i__8496));
} else
{}
{
var G__8499 = (i__8496 + 1);
i__8496 = G__8499;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8494),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__8491)));
} else
{var f__8497 = cljs.core.first.call(null,s__8491);
var r__8498 = cljs.core.rest.call(null,s__8491);
if(cljs.core.truth_(pred.call(null,f__8497)))
{return cljs.core.cons.call(null,f__8497,filter.call(null,pred,r__8498));
} else
{return filter.call(null,pred,r__8498);
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
var walk__8502 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__8502.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__8500_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__8500_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__8506__8507 = to;
if(G__8506__8507)
{if((function (){var or__3824__auto____8508 = (G__8506__8507.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3824__auto____8508)
{return or__3824__auto____8508;
} else
{return G__8506__8507.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__8506__8507.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__8506__8507);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__8506__8507);
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
var G__8509__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__8509 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8509__delegate.call(this, f, c1, c2, c3, colls);
};
G__8509.cljs$lang$maxFixedArity = 4;
G__8509.cljs$lang$applyTo = (function (arglist__8510){
var f = cljs.core.first(arglist__8510);
var c1 = cljs.core.first(cljs.core.next(arglist__8510));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8510)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8510))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8510))));
return G__8509__delegate(f, c1, c2, c3, colls);
});
G__8509.cljs$lang$arity$variadic = G__8509__delegate;
return G__8509;
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
var temp__3974__auto____8517 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8517)
{var s__8518 = temp__3974__auto____8517;
var p__8519 = cljs.core.take.call(null,n,s__8518);
if((n === cljs.core.count.call(null,p__8519)))
{return cljs.core.cons.call(null,p__8519,partition.call(null,n,step,cljs.core.drop.call(null,step,s__8518)));
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
var temp__3974__auto____8520 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8520)
{var s__8521 = temp__3974__auto____8520;
var p__8522 = cljs.core.take.call(null,n,s__8521);
if((n === cljs.core.count.call(null,p__8522)))
{return cljs.core.cons.call(null,p__8522,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__8521)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__8522,pad)));
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
var sentinel__8527 = cljs.core.lookup_sentinel;
var m__8528 = m;
var ks__8529 = cljs.core.seq.call(null,ks);
while(true){
if(ks__8529)
{var m__8530 = cljs.core._lookup.call(null,m__8528,cljs.core.first.call(null,ks__8529),sentinel__8527);
if((sentinel__8527 === m__8530))
{return not_found;
} else
{{
var G__8531 = sentinel__8527;
var G__8532 = m__8530;
var G__8533 = cljs.core.next.call(null,ks__8529);
sentinel__8527 = G__8531;
m__8528 = G__8532;
ks__8529 = G__8533;
continue;
}
}
} else
{return m__8528;
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
cljs.core.assoc_in = (function assoc_in(m,p__8534,v){
var vec__8539__8540 = p__8534;
var k__8541 = cljs.core.nth.call(null,vec__8539__8540,0,null);
var ks__8542 = cljs.core.nthnext.call(null,vec__8539__8540,1);
if(cljs.core.truth_(ks__8542))
{return cljs.core.assoc.call(null,m,k__8541,assoc_in.call(null,cljs.core._lookup.call(null,m,k__8541,null),ks__8542,v));
} else
{return cljs.core.assoc.call(null,m,k__8541,v);
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
var update_in__delegate = function (m,p__8543,f,args){
var vec__8548__8549 = p__8543;
var k__8550 = cljs.core.nth.call(null,vec__8548__8549,0,null);
var ks__8551 = cljs.core.nthnext.call(null,vec__8548__8549,1);
if(cljs.core.truth_(ks__8551))
{return cljs.core.assoc.call(null,m,k__8550,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__8550,null),ks__8551,f,args));
} else
{return cljs.core.assoc.call(null,m,k__8550,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__8550,null),args));
}
};
var update_in = function (m,p__8543,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__8543, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__8552){
var m = cljs.core.first(arglist__8552);
var p__8543 = cljs.core.first(cljs.core.next(arglist__8552));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8552)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8552)));
return update_in__delegate(m, p__8543, f, args);
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
var this__8555 = this;
var h__2153__auto____8556 = this__8555.__hash;
if(!((h__2153__auto____8556 == null)))
{return h__2153__auto____8556;
} else
{var h__2153__auto____8557 = cljs.core.hash_coll.call(null,coll);
this__8555.__hash = h__2153__auto____8557;
return h__2153__auto____8557;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8558 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8559 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8560 = this;
var new_array__8561 = this__8560.array.slice();
(new_array__8561[k] = v);
return (new cljs.core.Vector(this__8560.meta,new_array__8561,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__8592 = null;
var G__8592__2 = (function (this_sym8562,k){
var this__8564 = this;
var this_sym8562__8565 = this;
var coll__8566 = this_sym8562__8565;
return coll__8566.cljs$core$ILookup$_lookup$arity$2(coll__8566,k);
});
var G__8592__3 = (function (this_sym8563,k,not_found){
var this__8564 = this;
var this_sym8563__8567 = this;
var coll__8568 = this_sym8563__8567;
return coll__8568.cljs$core$ILookup$_lookup$arity$3(coll__8568,k,not_found);
});
G__8592 = function(this_sym8563,k,not_found){
switch(arguments.length){
case 2:
return G__8592__2.call(this,this_sym8563,k);
case 3:
return G__8592__3.call(this,this_sym8563,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8592;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym8553,args8554){
var this__8569 = this;
return this_sym8553.call.apply(this_sym8553,[this_sym8553].concat(args8554.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8570 = this;
var new_array__8571 = this__8570.array.slice();
new_array__8571.push(o);
return (new cljs.core.Vector(this__8570.meta,new_array__8571,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__8572 = this;
var this__8573 = this;
return cljs.core.pr_str.call(null,this__8573);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8574 = this;
return cljs.core.ci_reduce.call(null,this__8574.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8575 = this;
return cljs.core.ci_reduce.call(null,this__8575.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8576 = this;
if((this__8576.array.length > 0))
{var vector_seq__8577 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__8576.array.length))
{return cljs.core.cons.call(null,(this__8576.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__8577.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8578 = this;
return this__8578.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8579 = this;
var count__8580 = this__8579.array.length;
if((count__8580 > 0))
{return (this__8579.array[(count__8580 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8581 = this;
if((this__8581.array.length > 0))
{var new_array__8582 = this__8581.array.slice();
new_array__8582.pop();
return (new cljs.core.Vector(this__8581.meta,new_array__8582,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8583 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8584 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8585 = this;
return (new cljs.core.Vector(meta,this__8585.array,this__8585.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8586 = this;
return this__8586.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8587 = this;
if((function (){var and__3822__auto____8588 = (0 <= n);
if(and__3822__auto____8588)
{return (n < this__8587.array.length);
} else
{return and__3822__auto____8588;
}
})())
{return (this__8587.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8589 = this;
if((function (){var and__3822__auto____8590 = (0 <= n);
if(and__3822__auto____8590)
{return (n < this__8589.array.length);
} else
{return and__3822__auto____8590;
}
})())
{return (this__8589.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8591 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8591.meta);
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
var cnt__8594 = pv.cnt;
if((cnt__8594 < 32))
{return 0;
} else
{return (((cnt__8594 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__8600 = level;
var ret__8601 = node;
while(true){
if((ll__8600 === 0))
{return ret__8601;
} else
{var embed__8602 = ret__8601;
var r__8603 = cljs.core.pv_fresh_node.call(null,edit);
var ___8604 = cljs.core.pv_aset.call(null,r__8603,0,embed__8602);
{
var G__8605 = (ll__8600 - 5);
var G__8606 = r__8603;
ll__8600 = G__8605;
ret__8601 = G__8606;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__8612 = cljs.core.pv_clone_node.call(null,parent);
var subidx__8613 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__8612,subidx__8613,tailnode);
return ret__8612;
} else
{var child__8614 = cljs.core.pv_aget.call(null,parent,subidx__8613);
if(!((child__8614 == null)))
{var node_to_insert__8615 = push_tail.call(null,pv,(level - 5),child__8614,tailnode);
cljs.core.pv_aset.call(null,ret__8612,subidx__8613,node_to_insert__8615);
return ret__8612;
} else
{var node_to_insert__8616 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__8612,subidx__8613,node_to_insert__8616);
return ret__8612;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____8620 = (0 <= i);
if(and__3822__auto____8620)
{return (i < pv.cnt);
} else
{return and__3822__auto____8620;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__8621 = pv.root;
var level__8622 = pv.shift;
while(true){
if((level__8622 > 0))
{{
var G__8623 = cljs.core.pv_aget.call(null,node__8621,((i >>> level__8622) & 31));
var G__8624 = (level__8622 - 5);
node__8621 = G__8623;
level__8622 = G__8624;
continue;
}
} else
{return node__8621.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__8627 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__8627,(i & 31),val);
return ret__8627;
} else
{var subidx__8628 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8627,subidx__8628,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8628),i,val));
return ret__8627;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__8634 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8635 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8634));
if((function (){var and__3822__auto____8636 = (new_child__8635 == null);
if(and__3822__auto____8636)
{return (subidx__8634 === 0);
} else
{return and__3822__auto____8636;
}
})())
{return null;
} else
{var ret__8637 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8637,subidx__8634,new_child__8635);
return ret__8637;
}
} else
{if((subidx__8634 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__8638 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8638,subidx__8634,null);
return ret__8638;
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
var this__8641 = this;
return (new cljs.core.TransientVector(this__8641.cnt,this__8641.shift,cljs.core.tv_editable_root.call(null,this__8641.root),cljs.core.tv_editable_tail.call(null,this__8641.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8642 = this;
var h__2153__auto____8643 = this__8642.__hash;
if(!((h__2153__auto____8643 == null)))
{return h__2153__auto____8643;
} else
{var h__2153__auto____8644 = cljs.core.hash_coll.call(null,coll);
this__8642.__hash = h__2153__auto____8644;
return h__2153__auto____8644;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8645 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8646 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8647 = this;
if((function (){var and__3822__auto____8648 = (0 <= k);
if(and__3822__auto____8648)
{return (k < this__8647.cnt);
} else
{return and__3822__auto____8648;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__8649 = this__8647.tail.slice();
(new_tail__8649[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__8647.meta,this__8647.cnt,this__8647.shift,this__8647.root,new_tail__8649,null));
} else
{return (new cljs.core.PersistentVector(this__8647.meta,this__8647.cnt,this__8647.shift,cljs.core.do_assoc.call(null,coll,this__8647.shift,this__8647.root,k,v),this__8647.tail,null));
}
} else
{if((k === this__8647.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__8647.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__8697 = null;
var G__8697__2 = (function (this_sym8650,k){
var this__8652 = this;
var this_sym8650__8653 = this;
var coll__8654 = this_sym8650__8653;
return coll__8654.cljs$core$ILookup$_lookup$arity$2(coll__8654,k);
});
var G__8697__3 = (function (this_sym8651,k,not_found){
var this__8652 = this;
var this_sym8651__8655 = this;
var coll__8656 = this_sym8651__8655;
return coll__8656.cljs$core$ILookup$_lookup$arity$3(coll__8656,k,not_found);
});
G__8697 = function(this_sym8651,k,not_found){
switch(arguments.length){
case 2:
return G__8697__2.call(this,this_sym8651,k);
case 3:
return G__8697__3.call(this,this_sym8651,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8697;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym8639,args8640){
var this__8657 = this;
return this_sym8639.call.apply(this_sym8639,[this_sym8639].concat(args8640.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__8658 = this;
var step_init__8659 = [0,init];
var i__8660 = 0;
while(true){
if((i__8660 < this__8658.cnt))
{var arr__8661 = cljs.core.array_for.call(null,v,i__8660);
var len__8662 = arr__8661.length;
var init__8666 = (function (){var j__8663 = 0;
var init__8664 = (step_init__8659[1]);
while(true){
if((j__8663 < len__8662))
{var init__8665 = f.call(null,init__8664,(j__8663 + i__8660),(arr__8661[j__8663]));
if(cljs.core.reduced_QMARK_.call(null,init__8665))
{return init__8665;
} else
{{
var G__8698 = (j__8663 + 1);
var G__8699 = init__8665;
j__8663 = G__8698;
init__8664 = G__8699;
continue;
}
}
} else
{(step_init__8659[0] = len__8662);
(step_init__8659[1] = init__8664);
return init__8664;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__8666))
{return cljs.core.deref.call(null,init__8666);
} else
{{
var G__8700 = (i__8660 + (step_init__8659[0]));
i__8660 = G__8700;
continue;
}
}
} else
{return (step_init__8659[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8667 = this;
if(((this__8667.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__8668 = this__8667.tail.slice();
new_tail__8668.push(o);
return (new cljs.core.PersistentVector(this__8667.meta,(this__8667.cnt + 1),this__8667.shift,this__8667.root,new_tail__8668,null));
} else
{var root_overflow_QMARK___8669 = ((this__8667.cnt >>> 5) > (1 << this__8667.shift));
var new_shift__8670 = ((root_overflow_QMARK___8669)?(this__8667.shift + 5):this__8667.shift);
var new_root__8672 = ((root_overflow_QMARK___8669)?(function (){var n_r__8671 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__8671,0,this__8667.root);
cljs.core.pv_aset.call(null,n_r__8671,1,cljs.core.new_path.call(null,null,this__8667.shift,(new cljs.core.VectorNode(null,this__8667.tail))));
return n_r__8671;
})():cljs.core.push_tail.call(null,coll,this__8667.shift,this__8667.root,(new cljs.core.VectorNode(null,this__8667.tail))));
return (new cljs.core.PersistentVector(this__8667.meta,(this__8667.cnt + 1),new_shift__8670,new_root__8672,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__8673 = this;
if((this__8673.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__8673.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__8674 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__8675 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__8676 = this;
var this__8677 = this;
return cljs.core.pr_str.call(null,this__8677);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8678 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8679 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8680 = this;
if((this__8680.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8681 = this;
return this__8681.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8682 = this;
if((this__8682.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__8682.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8683 = this;
if((this__8683.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8683.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8683.meta);
} else
{if((1 < (this__8683.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__8683.meta,(this__8683.cnt - 1),this__8683.shift,this__8683.root,this__8683.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__8684 = cljs.core.array_for.call(null,coll,(this__8683.cnt - 2));
var nr__8685 = cljs.core.pop_tail.call(null,coll,this__8683.shift,this__8683.root);
var new_root__8686 = (((nr__8685 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__8685);
var cnt_1__8687 = (this__8683.cnt - 1);
if((function (){var and__3822__auto____8688 = (5 < this__8683.shift);
if(and__3822__auto____8688)
{return (cljs.core.pv_aget.call(null,new_root__8686,1) == null);
} else
{return and__3822__auto____8688;
}
})())
{return (new cljs.core.PersistentVector(this__8683.meta,cnt_1__8687,(this__8683.shift - 5),cljs.core.pv_aget.call(null,new_root__8686,0),new_tail__8684,null));
} else
{return (new cljs.core.PersistentVector(this__8683.meta,cnt_1__8687,this__8683.shift,new_root__8686,new_tail__8684,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8689 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8690 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8691 = this;
return (new cljs.core.PersistentVector(meta,this__8691.cnt,this__8691.shift,this__8691.root,this__8691.tail,this__8691.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8692 = this;
return this__8692.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8693 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8694 = this;
if((function (){var and__3822__auto____8695 = (0 <= n);
if(and__3822__auto____8695)
{return (n < this__8694.cnt);
} else
{return and__3822__auto____8695;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8696 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8696.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__8701 = xs.length;
var xs__8702 = (((no_clone === true))?xs:xs.slice());
if((l__8701 < 32))
{return (new cljs.core.PersistentVector(null,l__8701,5,cljs.core.PersistentVector.EMPTY_NODE,xs__8702,null));
} else
{var node__8703 = xs__8702.slice(0,32);
var v__8704 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__8703,null));
var i__8705 = 32;
var out__8706 = cljs.core._as_transient.call(null,v__8704);
while(true){
if((i__8705 < l__8701))
{{
var G__8707 = (i__8705 + 1);
var G__8708 = cljs.core.conj_BANG_.call(null,out__8706,(xs__8702[i__8705]));
i__8705 = G__8707;
out__8706 = G__8708;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8706);
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
vector.cljs$lang$applyTo = (function (arglist__8709){
var args = cljs.core.seq(arglist__8709);;
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
var this__8710 = this;
if(((this__8710.off + 1) < this__8710.node.length))
{var s__8711 = cljs.core.chunked_seq.call(null,this__8710.vec,this__8710.node,this__8710.i,(this__8710.off + 1));
if((s__8711 == null))
{return null;
} else
{return s__8711;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8712 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8713 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8714 = this;
return (this__8714.node[this__8714.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8715 = this;
if(((this__8715.off + 1) < this__8715.node.length))
{var s__8716 = cljs.core.chunked_seq.call(null,this__8715.vec,this__8715.node,this__8715.i,(this__8715.off + 1));
if((s__8716 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8716;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__8717 = this;
var l__8718 = this__8717.node.length;
var s__8719 = ((((this__8717.i + l__8718) < cljs.core._count.call(null,this__8717.vec)))?cljs.core.chunked_seq.call(null,this__8717.vec,(this__8717.i + l__8718),0):null);
if((s__8719 == null))
{return null;
} else
{return s__8719;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8720 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__8721 = this;
return cljs.core.chunked_seq.call(null,this__8721.vec,this__8721.node,this__8721.i,this__8721.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__8722 = this;
return this__8722.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8723 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8723.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__8724 = this;
return cljs.core.array_chunk.call(null,this__8724.node,this__8724.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__8725 = this;
var l__8726 = this__8725.node.length;
var s__8727 = ((((this__8725.i + l__8726) < cljs.core._count.call(null,this__8725.vec)))?cljs.core.chunked_seq.call(null,this__8725.vec,(this__8725.i + l__8726),0):null);
if((s__8727 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8727;
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
var this__8730 = this;
var h__2153__auto____8731 = this__8730.__hash;
if(!((h__2153__auto____8731 == null)))
{return h__2153__auto____8731;
} else
{var h__2153__auto____8732 = cljs.core.hash_coll.call(null,coll);
this__8730.__hash = h__2153__auto____8732;
return h__2153__auto____8732;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8733 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8734 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__8735 = this;
var v_pos__8736 = (this__8735.start + key);
return (new cljs.core.Subvec(this__8735.meta,cljs.core._assoc.call(null,this__8735.v,v_pos__8736,val),this__8735.start,((this__8735.end > (v_pos__8736 + 1)) ? this__8735.end : (v_pos__8736 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__8762 = null;
var G__8762__2 = (function (this_sym8737,k){
var this__8739 = this;
var this_sym8737__8740 = this;
var coll__8741 = this_sym8737__8740;
return coll__8741.cljs$core$ILookup$_lookup$arity$2(coll__8741,k);
});
var G__8762__3 = (function (this_sym8738,k,not_found){
var this__8739 = this;
var this_sym8738__8742 = this;
var coll__8743 = this_sym8738__8742;
return coll__8743.cljs$core$ILookup$_lookup$arity$3(coll__8743,k,not_found);
});
G__8762 = function(this_sym8738,k,not_found){
switch(arguments.length){
case 2:
return G__8762__2.call(this,this_sym8738,k);
case 3:
return G__8762__3.call(this,this_sym8738,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8762;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym8728,args8729){
var this__8744 = this;
return this_sym8728.call.apply(this_sym8728,[this_sym8728].concat(args8729.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8745 = this;
return (new cljs.core.Subvec(this__8745.meta,cljs.core._assoc_n.call(null,this__8745.v,this__8745.end,o),this__8745.start,(this__8745.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__8746 = this;
var this__8747 = this;
return cljs.core.pr_str.call(null,this__8747);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__8748 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__8749 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8750 = this;
var subvec_seq__8751 = (function subvec_seq(i){
if((i === this__8750.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__8750.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__8751.call(null,this__8750.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8752 = this;
return (this__8752.end - this__8752.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8753 = this;
return cljs.core._nth.call(null,this__8753.v,(this__8753.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8754 = this;
if((this__8754.start === this__8754.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__8754.meta,this__8754.v,this__8754.start,(this__8754.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8755 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8756 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8757 = this;
return (new cljs.core.Subvec(meta,this__8757.v,this__8757.start,this__8757.end,this__8757.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8758 = this;
return this__8758.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8759 = this;
return cljs.core._nth.call(null,this__8759.v,(this__8759.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8760 = this;
return cljs.core._nth.call(null,this__8760.v,(this__8760.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8761 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8761.meta);
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
var ret__8764 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__8764,0,tl.length);
return ret__8764;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__8768 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__8769 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8768,subidx__8769,(((level === 5))?tail_node:(function (){var child__8770 = cljs.core.pv_aget.call(null,ret__8768,subidx__8769);
if(!((child__8770 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__8770,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__8768;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__8775 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__8776 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8777 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__8775,subidx__8776));
if((function (){var and__3822__auto____8778 = (new_child__8777 == null);
if(and__3822__auto____8778)
{return (subidx__8776 === 0);
} else
{return and__3822__auto____8778;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__8775,subidx__8776,new_child__8777);
return node__8775;
}
} else
{if((subidx__8776 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__8775,subidx__8776,null);
return node__8775;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____8783 = (0 <= i);
if(and__3822__auto____8783)
{return (i < tv.cnt);
} else
{return and__3822__auto____8783;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__8784 = tv.root;
var node__8785 = root__8784;
var level__8786 = tv.shift;
while(true){
if((level__8786 > 0))
{{
var G__8787 = cljs.core.tv_ensure_editable.call(null,root__8784.edit,cljs.core.pv_aget.call(null,node__8785,((i >>> level__8786) & 31)));
var G__8788 = (level__8786 - 5);
node__8785 = G__8787;
level__8786 = G__8788;
continue;
}
} else
{return node__8785.arr;
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
var G__8828 = null;
var G__8828__2 = (function (this_sym8791,k){
var this__8793 = this;
var this_sym8791__8794 = this;
var coll__8795 = this_sym8791__8794;
return coll__8795.cljs$core$ILookup$_lookup$arity$2(coll__8795,k);
});
var G__8828__3 = (function (this_sym8792,k,not_found){
var this__8793 = this;
var this_sym8792__8796 = this;
var coll__8797 = this_sym8792__8796;
return coll__8797.cljs$core$ILookup$_lookup$arity$3(coll__8797,k,not_found);
});
G__8828 = function(this_sym8792,k,not_found){
switch(arguments.length){
case 2:
return G__8828__2.call(this,this_sym8792,k);
case 3:
return G__8828__3.call(this,this_sym8792,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8828;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym8789,args8790){
var this__8798 = this;
return this_sym8789.call.apply(this_sym8789,[this_sym8789].concat(args8790.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8799 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8800 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8801 = this;
if(this__8801.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8802 = this;
if((function (){var and__3822__auto____8803 = (0 <= n);
if(and__3822__auto____8803)
{return (n < this__8802.cnt);
} else
{return and__3822__auto____8803;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8804 = this;
if(this__8804.root.edit)
{return this__8804.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__8805 = this;
if(this__8805.root.edit)
{if((function (){var and__3822__auto____8806 = (0 <= n);
if(and__3822__auto____8806)
{return (n < this__8805.cnt);
} else
{return and__3822__auto____8806;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__8805.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__8811 = (function go(level,node){
var node__8809 = cljs.core.tv_ensure_editable.call(null,this__8805.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__8809,(n & 31),val);
return node__8809;
} else
{var subidx__8810 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__8809,subidx__8810,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__8809,subidx__8810)));
return node__8809;
}
}).call(null,this__8805.shift,this__8805.root);
this__8805.root = new_root__8811;
return tcoll;
}
} else
{if((n === this__8805.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__8805.cnt)].join('')));
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
var this__8812 = this;
if(this__8812.root.edit)
{if((this__8812.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8812.cnt))
{this__8812.cnt = 0;
return tcoll;
} else
{if((((this__8812.cnt - 1) & 31) > 0))
{this__8812.cnt = (this__8812.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__8813 = cljs.core.editable_array_for.call(null,tcoll,(this__8812.cnt - 2));
var new_root__8815 = (function (){var nr__8814 = cljs.core.tv_pop_tail.call(null,tcoll,this__8812.shift,this__8812.root);
if(!((nr__8814 == null)))
{return nr__8814;
} else
{return (new cljs.core.VectorNode(this__8812.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____8816 = (5 < this__8812.shift);
if(and__3822__auto____8816)
{return (cljs.core.pv_aget.call(null,new_root__8815,1) == null);
} else
{return and__3822__auto____8816;
}
})())
{var new_root__8817 = cljs.core.tv_ensure_editable.call(null,this__8812.root.edit,cljs.core.pv_aget.call(null,new_root__8815,0));
this__8812.root = new_root__8817;
this__8812.shift = (this__8812.shift - 5);
this__8812.cnt = (this__8812.cnt - 1);
this__8812.tail = new_tail__8813;
return tcoll;
} else
{this__8812.root = new_root__8815;
this__8812.cnt = (this__8812.cnt - 1);
this__8812.tail = new_tail__8813;
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
var this__8818 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8819 = this;
if(this__8819.root.edit)
{if(((this__8819.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__8819.tail[(this__8819.cnt & 31)] = o);
this__8819.cnt = (this__8819.cnt + 1);
return tcoll;
} else
{var tail_node__8820 = (new cljs.core.VectorNode(this__8819.root.edit,this__8819.tail));
var new_tail__8821 = cljs.core.make_array.call(null,32);
(new_tail__8821[0] = o);
this__8819.tail = new_tail__8821;
if(((this__8819.cnt >>> 5) > (1 << this__8819.shift)))
{var new_root_array__8822 = cljs.core.make_array.call(null,32);
var new_shift__8823 = (this__8819.shift + 5);
(new_root_array__8822[0] = this__8819.root);
(new_root_array__8822[1] = cljs.core.new_path.call(null,this__8819.root.edit,this__8819.shift,tail_node__8820));
this__8819.root = (new cljs.core.VectorNode(this__8819.root.edit,new_root_array__8822));
this__8819.shift = new_shift__8823;
this__8819.cnt = (this__8819.cnt + 1);
return tcoll;
} else
{var new_root__8824 = cljs.core.tv_push_tail.call(null,tcoll,this__8819.shift,this__8819.root,tail_node__8820);
this__8819.root = new_root__8824;
this__8819.cnt = (this__8819.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8825 = this;
if(this__8825.root.edit)
{this__8825.root.edit = null;
var len__8826 = (this__8825.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__8827 = cljs.core.make_array.call(null,len__8826);
cljs.core.array_copy.call(null,this__8825.tail,0,trimmed_tail__8827,0,len__8826);
return (new cljs.core.PersistentVector(null,this__8825.cnt,this__8825.shift,this__8825.root,trimmed_tail__8827,null));
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
var this__8829 = this;
var h__2153__auto____8830 = this__8829.__hash;
if(!((h__2153__auto____8830 == null)))
{return h__2153__auto____8830;
} else
{var h__2153__auto____8831 = cljs.core.hash_coll.call(null,coll);
this__8829.__hash = h__2153__auto____8831;
return h__2153__auto____8831;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8832 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__8833 = this;
var this__8834 = this;
return cljs.core.pr_str.call(null,this__8834);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8835 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8836 = this;
return cljs.core._first.call(null,this__8836.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8837 = this;
var temp__3971__auto____8838 = cljs.core.next.call(null,this__8837.front);
if(temp__3971__auto____8838)
{var f1__8839 = temp__3971__auto____8838;
return (new cljs.core.PersistentQueueSeq(this__8837.meta,f1__8839,this__8837.rear,null));
} else
{if((this__8837.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__8837.meta,this__8837.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8840 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8841 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__8841.front,this__8841.rear,this__8841.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8842 = this;
return this__8842.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8843 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8843.meta);
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
var this__8844 = this;
var h__2153__auto____8845 = this__8844.__hash;
if(!((h__2153__auto____8845 == null)))
{return h__2153__auto____8845;
} else
{var h__2153__auto____8846 = cljs.core.hash_coll.call(null,coll);
this__8844.__hash = h__2153__auto____8846;
return h__2153__auto____8846;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8847 = this;
if(cljs.core.truth_(this__8847.front))
{return (new cljs.core.PersistentQueue(this__8847.meta,(this__8847.count + 1),this__8847.front,cljs.core.conj.call(null,(function (){var or__3824__auto____8848 = this__8847.rear;
if(cljs.core.truth_(or__3824__auto____8848))
{return or__3824__auto____8848;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__8847.meta,(this__8847.count + 1),cljs.core.conj.call(null,this__8847.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__8849 = this;
var this__8850 = this;
return cljs.core.pr_str.call(null,this__8850);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8851 = this;
var rear__8852 = cljs.core.seq.call(null,this__8851.rear);
if(cljs.core.truth_((function (){var or__3824__auto____8853 = this__8851.front;
if(cljs.core.truth_(or__3824__auto____8853))
{return or__3824__auto____8853;
} else
{return rear__8852;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__8851.front,cljs.core.seq.call(null,rear__8852),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8854 = this;
return this__8854.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8855 = this;
return cljs.core._first.call(null,this__8855.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8856 = this;
if(cljs.core.truth_(this__8856.front))
{var temp__3971__auto____8857 = cljs.core.next.call(null,this__8856.front);
if(temp__3971__auto____8857)
{var f1__8858 = temp__3971__auto____8857;
return (new cljs.core.PersistentQueue(this__8856.meta,(this__8856.count - 1),f1__8858,this__8856.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__8856.meta,(this__8856.count - 1),cljs.core.seq.call(null,this__8856.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8859 = this;
return cljs.core.first.call(null,this__8859.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8860 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8861 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8862 = this;
return (new cljs.core.PersistentQueue(meta,this__8862.count,this__8862.front,this__8862.rear,this__8862.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8863 = this;
return this__8863.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8864 = this;
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
var this__8865 = this;
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
var len__8868 = array.length;
var i__8869 = 0;
while(true){
if((i__8869 < len__8868))
{if((k === (array[i__8869])))
{return i__8869;
} else
{{
var G__8870 = (i__8869 + incr);
i__8869 = G__8870;
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
var a__8873 = cljs.core.hash.call(null,a);
var b__8874 = cljs.core.hash.call(null,b);
if((a__8873 < b__8874))
{return -1;
} else
{if((a__8873 > b__8874))
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
var ks__8882 = m.keys;
var len__8883 = ks__8882.length;
var so__8884 = m.strobj;
var out__8885 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__8886 = 0;
var out__8887 = cljs.core.transient$.call(null,out__8885);
while(true){
if((i__8886 < len__8883))
{var k__8888 = (ks__8882[i__8886]);
{
var G__8889 = (i__8886 + 1);
var G__8890 = cljs.core.assoc_BANG_.call(null,out__8887,k__8888,(so__8884[k__8888]));
i__8886 = G__8889;
out__8887 = G__8890;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__8887,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__8896 = {};
var l__8897 = ks.length;
var i__8898 = 0;
while(true){
if((i__8898 < l__8897))
{var k__8899 = (ks[i__8898]);
(new_obj__8896[k__8899] = (obj[k__8899]));
{
var G__8900 = (i__8898 + 1);
i__8898 = G__8900;
continue;
}
} else
{}
break;
}
return new_obj__8896;
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
var this__8903 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8904 = this;
var h__2153__auto____8905 = this__8904.__hash;
if(!((h__2153__auto____8905 == null)))
{return h__2153__auto____8905;
} else
{var h__2153__auto____8906 = cljs.core.hash_imap.call(null,coll);
this__8904.__hash = h__2153__auto____8906;
return h__2153__auto____8906;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8907 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8908 = this;
if((function (){var and__3822__auto____8909 = goog.isString(k);
if(and__3822__auto____8909)
{return !((cljs.core.scan_array.call(null,1,k,this__8908.keys) == null));
} else
{return and__3822__auto____8909;
}
})())
{return (this__8908.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8910 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____8911 = (this__8910.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____8911)
{return or__3824__auto____8911;
} else
{return (this__8910.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__8910.keys) == null)))
{var new_strobj__8912 = cljs.core.obj_clone.call(null,this__8910.strobj,this__8910.keys);
(new_strobj__8912[k] = v);
return (new cljs.core.ObjMap(this__8910.meta,this__8910.keys,new_strobj__8912,(this__8910.update_count + 1),null));
} else
{var new_strobj__8913 = cljs.core.obj_clone.call(null,this__8910.strobj,this__8910.keys);
var new_keys__8914 = this__8910.keys.slice();
(new_strobj__8913[k] = v);
new_keys__8914.push(k);
return (new cljs.core.ObjMap(this__8910.meta,new_keys__8914,new_strobj__8913,(this__8910.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8915 = this;
if((function (){var and__3822__auto____8916 = goog.isString(k);
if(and__3822__auto____8916)
{return !((cljs.core.scan_array.call(null,1,k,this__8915.keys) == null));
} else
{return and__3822__auto____8916;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__8938 = null;
var G__8938__2 = (function (this_sym8917,k){
var this__8919 = this;
var this_sym8917__8920 = this;
var coll__8921 = this_sym8917__8920;
return coll__8921.cljs$core$ILookup$_lookup$arity$2(coll__8921,k);
});
var G__8938__3 = (function (this_sym8918,k,not_found){
var this__8919 = this;
var this_sym8918__8922 = this;
var coll__8923 = this_sym8918__8922;
return coll__8923.cljs$core$ILookup$_lookup$arity$3(coll__8923,k,not_found);
});
G__8938 = function(this_sym8918,k,not_found){
switch(arguments.length){
case 2:
return G__8938__2.call(this,this_sym8918,k);
case 3:
return G__8938__3.call(this,this_sym8918,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8938;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym8901,args8902){
var this__8924 = this;
return this_sym8901.call.apply(this_sym8901,[this_sym8901].concat(args8902.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8925 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__8926 = this;
var this__8927 = this;
return cljs.core.pr_str.call(null,this__8927);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8928 = this;
if((this__8928.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__8891_SHARP_){
return cljs.core.vector.call(null,p1__8891_SHARP_,(this__8928.strobj[p1__8891_SHARP_]));
}),this__8928.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8929 = this;
return this__8929.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8930 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8931 = this;
return (new cljs.core.ObjMap(meta,this__8931.keys,this__8931.strobj,this__8931.update_count,this__8931.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8932 = this;
return this__8932.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8933 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__8933.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8934 = this;
if((function (){var and__3822__auto____8935 = goog.isString(k);
if(and__3822__auto____8935)
{return !((cljs.core.scan_array.call(null,1,k,this__8934.keys) == null));
} else
{return and__3822__auto____8935;
}
})())
{var new_keys__8936 = this__8934.keys.slice();
var new_strobj__8937 = cljs.core.obj_clone.call(null,this__8934.strobj,this__8934.keys);
new_keys__8936.splice(cljs.core.scan_array.call(null,1,k,new_keys__8936),1);
cljs.core.js_delete.call(null,new_strobj__8937,k);
return (new cljs.core.ObjMap(this__8934.meta,new_keys__8936,new_strobj__8937,(this__8934.update_count + 1),null));
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
var this__8942 = this;
var h__2153__auto____8943 = this__8942.__hash;
if(!((h__2153__auto____8943 == null)))
{return h__2153__auto____8943;
} else
{var h__2153__auto____8944 = cljs.core.hash_imap.call(null,coll);
this__8942.__hash = h__2153__auto____8944;
return h__2153__auto____8944;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8945 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8946 = this;
var bucket__8947 = (this__8946.hashobj[cljs.core.hash.call(null,k)]);
var i__8948 = (cljs.core.truth_(bucket__8947)?cljs.core.scan_array.call(null,2,k,bucket__8947):null);
if(cljs.core.truth_(i__8948))
{return (bucket__8947[(i__8948 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8949 = this;
var h__8950 = cljs.core.hash.call(null,k);
var bucket__8951 = (this__8949.hashobj[h__8950]);
if(cljs.core.truth_(bucket__8951))
{var new_bucket__8952 = bucket__8951.slice();
var new_hashobj__8953 = goog.object.clone(this__8949.hashobj);
(new_hashobj__8953[h__8950] = new_bucket__8952);
var temp__3971__auto____8954 = cljs.core.scan_array.call(null,2,k,new_bucket__8952);
if(cljs.core.truth_(temp__3971__auto____8954))
{var i__8955 = temp__3971__auto____8954;
(new_bucket__8952[(i__8955 + 1)] = v);
return (new cljs.core.HashMap(this__8949.meta,this__8949.count,new_hashobj__8953,null));
} else
{new_bucket__8952.push(k,v);
return (new cljs.core.HashMap(this__8949.meta,(this__8949.count + 1),new_hashobj__8953,null));
}
} else
{var new_hashobj__8956 = goog.object.clone(this__8949.hashobj);
(new_hashobj__8956[h__8950] = [k,v]);
return (new cljs.core.HashMap(this__8949.meta,(this__8949.count + 1),new_hashobj__8956,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8957 = this;
var bucket__8958 = (this__8957.hashobj[cljs.core.hash.call(null,k)]);
var i__8959 = (cljs.core.truth_(bucket__8958)?cljs.core.scan_array.call(null,2,k,bucket__8958):null);
if(cljs.core.truth_(i__8959))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__8984 = null;
var G__8984__2 = (function (this_sym8960,k){
var this__8962 = this;
var this_sym8960__8963 = this;
var coll__8964 = this_sym8960__8963;
return coll__8964.cljs$core$ILookup$_lookup$arity$2(coll__8964,k);
});
var G__8984__3 = (function (this_sym8961,k,not_found){
var this__8962 = this;
var this_sym8961__8965 = this;
var coll__8966 = this_sym8961__8965;
return coll__8966.cljs$core$ILookup$_lookup$arity$3(coll__8966,k,not_found);
});
G__8984 = function(this_sym8961,k,not_found){
switch(arguments.length){
case 2:
return G__8984__2.call(this,this_sym8961,k);
case 3:
return G__8984__3.call(this,this_sym8961,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8984;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym8940,args8941){
var this__8967 = this;
return this_sym8940.call.apply(this_sym8940,[this_sym8940].concat(args8941.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8968 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__8969 = this;
var this__8970 = this;
return cljs.core.pr_str.call(null,this__8970);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8971 = this;
if((this__8971.count > 0))
{var hashes__8972 = cljs.core.js_keys.call(null,this__8971.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__8939_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__8971.hashobj[p1__8939_SHARP_])));
}),hashes__8972);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8973 = this;
return this__8973.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8974 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8975 = this;
return (new cljs.core.HashMap(meta,this__8975.count,this__8975.hashobj,this__8975.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8976 = this;
return this__8976.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8977 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__8977.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8978 = this;
var h__8979 = cljs.core.hash.call(null,k);
var bucket__8980 = (this__8978.hashobj[h__8979]);
var i__8981 = (cljs.core.truth_(bucket__8980)?cljs.core.scan_array.call(null,2,k,bucket__8980):null);
if(cljs.core.not.call(null,i__8981))
{return coll;
} else
{var new_hashobj__8982 = goog.object.clone(this__8978.hashobj);
if((3 > bucket__8980.length))
{cljs.core.js_delete.call(null,new_hashobj__8982,h__8979);
} else
{var new_bucket__8983 = bucket__8980.slice();
new_bucket__8983.splice(i__8981,2);
(new_hashobj__8982[h__8979] = new_bucket__8983);
}
return (new cljs.core.HashMap(this__8978.meta,(this__8978.count - 1),new_hashobj__8982,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__8985 = ks.length;
var i__8986 = 0;
var out__8987 = cljs.core.HashMap.EMPTY;
while(true){
if((i__8986 < len__8985))
{{
var G__8988 = (i__8986 + 1);
var G__8989 = cljs.core.assoc.call(null,out__8987,(ks[i__8986]),(vs[i__8986]));
i__8986 = G__8988;
out__8987 = G__8989;
continue;
}
} else
{return out__8987;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__8993 = m.arr;
var len__8994 = arr__8993.length;
var i__8995 = 0;
while(true){
if((len__8994 <= i__8995))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__8993[i__8995]),k))
{return i__8995;
} else
{if("\uFDD0'else")
{{
var G__8996 = (i__8995 + 2);
i__8995 = G__8996;
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
var this__8999 = this;
return (new cljs.core.TransientArrayMap({},this__8999.arr.length,this__8999.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9000 = this;
var h__2153__auto____9001 = this__9000.__hash;
if(!((h__2153__auto____9001 == null)))
{return h__2153__auto____9001;
} else
{var h__2153__auto____9002 = cljs.core.hash_imap.call(null,coll);
this__9000.__hash = h__2153__auto____9002;
return h__2153__auto____9002;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9003 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9004 = this;
var idx__9005 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__9005 === -1))
{return not_found;
} else
{return (this__9004.arr[(idx__9005 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9006 = this;
var idx__9007 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__9007 === -1))
{if((this__9006.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__9006.meta,(this__9006.cnt + 1),(function (){var G__9008__9009 = this__9006.arr.slice();
G__9008__9009.push(k);
G__9008__9009.push(v);
return G__9008__9009;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__9006.arr[(idx__9007 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__9006.meta,this__9006.cnt,(function (){var G__9010__9011 = this__9006.arr.slice();
(G__9010__9011[(idx__9007 + 1)] = v);
return G__9010__9011;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9012 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__9044 = null;
var G__9044__2 = (function (this_sym9013,k){
var this__9015 = this;
var this_sym9013__9016 = this;
var coll__9017 = this_sym9013__9016;
return coll__9017.cljs$core$ILookup$_lookup$arity$2(coll__9017,k);
});
var G__9044__3 = (function (this_sym9014,k,not_found){
var this__9015 = this;
var this_sym9014__9018 = this;
var coll__9019 = this_sym9014__9018;
return coll__9019.cljs$core$ILookup$_lookup$arity$3(coll__9019,k,not_found);
});
G__9044 = function(this_sym9014,k,not_found){
switch(arguments.length){
case 2:
return G__9044__2.call(this,this_sym9014,k);
case 3:
return G__9044__3.call(this,this_sym9014,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9044;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym8997,args8998){
var this__9020 = this;
return this_sym8997.call.apply(this_sym8997,[this_sym8997].concat(args8998.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9021 = this;
var len__9022 = this__9021.arr.length;
var i__9023 = 0;
var init__9024 = init;
while(true){
if((i__9023 < len__9022))
{var init__9025 = f.call(null,init__9024,(this__9021.arr[i__9023]),(this__9021.arr[(i__9023 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__9025))
{return cljs.core.deref.call(null,init__9025);
} else
{{
var G__9045 = (i__9023 + 2);
var G__9046 = init__9025;
i__9023 = G__9045;
init__9024 = G__9046;
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
var this__9026 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__9027 = this;
var this__9028 = this;
return cljs.core.pr_str.call(null,this__9028);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9029 = this;
if((this__9029.cnt > 0))
{var len__9030 = this__9029.arr.length;
var array_map_seq__9031 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__9030))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__9029.arr[i]),(this__9029.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__9031.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9032 = this;
return this__9032.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9033 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9034 = this;
return (new cljs.core.PersistentArrayMap(meta,this__9034.cnt,this__9034.arr,this__9034.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9035 = this;
return this__9035.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9036 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9036.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9037 = this;
var idx__9038 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__9038 >= 0))
{var len__9039 = this__9037.arr.length;
var new_len__9040 = (len__9039 - 2);
if((new_len__9040 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__9041 = cljs.core.make_array.call(null,new_len__9040);
var s__9042 = 0;
var d__9043 = 0;
while(true){
if((s__9042 >= len__9039))
{return (new cljs.core.PersistentArrayMap(this__9037.meta,(this__9037.cnt - 1),new_arr__9041,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__9037.arr[s__9042])))
{{
var G__9047 = (s__9042 + 2);
var G__9048 = d__9043;
s__9042 = G__9047;
d__9043 = G__9048;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__9041[d__9043] = (this__9037.arr[s__9042]));
(new_arr__9041[(d__9043 + 1)] = (this__9037.arr[(s__9042 + 1)]));
{
var G__9049 = (s__9042 + 2);
var G__9050 = (d__9043 + 2);
s__9042 = G__9049;
d__9043 = G__9050;
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
var len__9051 = cljs.core.count.call(null,ks);
var i__9052 = 0;
var out__9053 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__9052 < len__9051))
{{
var G__9054 = (i__9052 + 1);
var G__9055 = cljs.core.assoc_BANG_.call(null,out__9053,(ks[i__9052]),(vs[i__9052]));
i__9052 = G__9054;
out__9053 = G__9055;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9053);
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
var this__9056 = this;
if(cljs.core.truth_(this__9056.editable_QMARK_))
{var idx__9057 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__9057 >= 0))
{(this__9056.arr[idx__9057] = (this__9056.arr[(this__9056.len - 2)]));
(this__9056.arr[(idx__9057 + 1)] = (this__9056.arr[(this__9056.len - 1)]));
var G__9058__9059 = this__9056.arr;
G__9058__9059.pop();
G__9058__9059.pop();
G__9058__9059;
this__9056.len = (this__9056.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9060 = this;
if(cljs.core.truth_(this__9060.editable_QMARK_))
{var idx__9061 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__9061 === -1))
{if(((this__9060.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__9060.len = (this__9060.len + 2);
this__9060.arr.push(key);
this__9060.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__9060.len,this__9060.arr),key,val);
}
} else
{if((val === (this__9060.arr[(idx__9061 + 1)])))
{return tcoll;
} else
{(this__9060.arr[(idx__9061 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9062 = this;
if(cljs.core.truth_(this__9062.editable_QMARK_))
{if((function (){var G__9063__9064 = o;
if(G__9063__9064)
{if((function (){var or__3824__auto____9065 = (G__9063__9064.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____9065)
{return or__3824__auto____9065;
} else
{return G__9063__9064.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__9063__9064.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9063__9064);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9063__9064);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__9066 = cljs.core.seq.call(null,o);
var tcoll__9067 = tcoll;
while(true){
var temp__3971__auto____9068 = cljs.core.first.call(null,es__9066);
if(cljs.core.truth_(temp__3971__auto____9068))
{var e__9069 = temp__3971__auto____9068;
{
var G__9075 = cljs.core.next.call(null,es__9066);
var G__9076 = tcoll__9067.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__9067,cljs.core.key.call(null,e__9069),cljs.core.val.call(null,e__9069));
es__9066 = G__9075;
tcoll__9067 = G__9076;
continue;
}
} else
{return tcoll__9067;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9070 = this;
if(cljs.core.truth_(this__9070.editable_QMARK_))
{this__9070.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__9070.len,2),this__9070.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__9071 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__9072 = this;
if(cljs.core.truth_(this__9072.editable_QMARK_))
{var idx__9073 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__9073 === -1))
{return not_found;
} else
{return (this__9072.arr[(idx__9073 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9074 = this;
if(cljs.core.truth_(this__9074.editable_QMARK_))
{return cljs.core.quot.call(null,this__9074.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
void 0;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__9079 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__9080 = 0;
while(true){
if((i__9080 < len))
{{
var G__9081 = cljs.core.assoc_BANG_.call(null,out__9079,(arr[i__9080]),(arr[(i__9080 + 1)]));
var G__9082 = (i__9080 + 2);
out__9079 = G__9081;
i__9080 = G__9082;
continue;
}
} else
{return out__9079;
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
var G__9087__9088 = arr.slice();
(G__9087__9088[i] = a);
return G__9087__9088;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__9089__9090 = arr.slice();
(G__9089__9090[i] = a);
(G__9089__9090[j] = b);
return G__9089__9090;
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
var new_arr__9092 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__9092,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__9092,(2 * i),(new_arr__9092.length - (2 * i)));
return new_arr__9092;
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
var editable__9095 = inode.ensure_editable(edit);
(editable__9095.arr[i] = a);
return editable__9095;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__9096 = inode.ensure_editable(edit);
(editable__9096.arr[i] = a);
(editable__9096.arr[j] = b);
return editable__9096;
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
var len__9103 = arr.length;
var i__9104 = 0;
var init__9105 = init;
while(true){
if((i__9104 < len__9103))
{var init__9108 = (function (){var k__9106 = (arr[i__9104]);
if(!((k__9106 == null)))
{return f.call(null,init__9105,k__9106,(arr[(i__9104 + 1)]));
} else
{var node__9107 = (arr[(i__9104 + 1)]);
if(!((node__9107 == null)))
{return node__9107.kv_reduce(f,init__9105);
} else
{return init__9105;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__9108))
{return cljs.core.deref.call(null,init__9108);
} else
{{
var G__9109 = (i__9104 + 2);
var G__9110 = init__9108;
i__9104 = G__9109;
init__9105 = G__9110;
continue;
}
}
} else
{return init__9105;
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
var this__9111 = this;
var inode__9112 = this;
if((this__9111.bitmap === bit))
{return null;
} else
{var editable__9113 = inode__9112.ensure_editable(e);
var earr__9114 = editable__9113.arr;
var len__9115 = earr__9114.length;
editable__9113.bitmap = (bit ^ editable__9113.bitmap);
cljs.core.array_copy.call(null,earr__9114,(2 * (i + 1)),earr__9114,(2 * i),(len__9115 - (2 * (i + 1))));
(earr__9114[(len__9115 - 2)] = null);
(earr__9114[(len__9115 - 1)] = null);
return editable__9113;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9116 = this;
var inode__9117 = this;
var bit__9118 = (1 << ((hash >>> shift) & 0x01f));
var idx__9119 = cljs.core.bitmap_indexed_node_index.call(null,this__9116.bitmap,bit__9118);
if(((this__9116.bitmap & bit__9118) === 0))
{var n__9120 = cljs.core.bit_count.call(null,this__9116.bitmap);
if(((2 * n__9120) < this__9116.arr.length))
{var editable__9121 = inode__9117.ensure_editable(edit);
var earr__9122 = editable__9121.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__9122,(2 * idx__9119),earr__9122,(2 * (idx__9119 + 1)),(2 * (n__9120 - idx__9119)));
(earr__9122[(2 * idx__9119)] = key);
(earr__9122[((2 * idx__9119) + 1)] = val);
editable__9121.bitmap = (editable__9121.bitmap | bit__9118);
return editable__9121;
} else
{if((n__9120 >= 16))
{var nodes__9123 = cljs.core.make_array.call(null,32);
var jdx__9124 = ((hash >>> shift) & 0x01f);
(nodes__9123[jdx__9124] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__9125 = 0;
var j__9126 = 0;
while(true){
if((i__9125 < 32))
{if((((this__9116.bitmap >>> i__9125) & 1) === 0))
{{
var G__9179 = (i__9125 + 1);
var G__9180 = j__9126;
i__9125 = G__9179;
j__9126 = G__9180;
continue;
}
} else
{(nodes__9123[i__9125] = ((!(((this__9116.arr[j__9126]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__9116.arr[j__9126])),(this__9116.arr[j__9126]),(this__9116.arr[(j__9126 + 1)]),added_leaf_QMARK_):(this__9116.arr[(j__9126 + 1)])));
{
var G__9181 = (i__9125 + 1);
var G__9182 = (j__9126 + 2);
i__9125 = G__9181;
j__9126 = G__9182;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__9120 + 1),nodes__9123));
} else
{if("\uFDD0'else")
{var new_arr__9127 = cljs.core.make_array.call(null,(2 * (n__9120 + 4)));
cljs.core.array_copy.call(null,this__9116.arr,0,new_arr__9127,0,(2 * idx__9119));
(new_arr__9127[(2 * idx__9119)] = key);
(new_arr__9127[((2 * idx__9119) + 1)] = val);
cljs.core.array_copy.call(null,this__9116.arr,(2 * idx__9119),new_arr__9127,(2 * (idx__9119 + 1)),(2 * (n__9120 - idx__9119)));
added_leaf_QMARK_.val = true;
var editable__9128 = inode__9117.ensure_editable(edit);
editable__9128.arr = new_arr__9127;
editable__9128.bitmap = (editable__9128.bitmap | bit__9118);
return editable__9128;
} else
{return null;
}
}
}
} else
{var key_or_nil__9129 = (this__9116.arr[(2 * idx__9119)]);
var val_or_node__9130 = (this__9116.arr[((2 * idx__9119) + 1)]);
if((key_or_nil__9129 == null))
{var n__9131 = val_or_node__9130.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9131 === val_or_node__9130))
{return inode__9117;
} else
{return cljs.core.edit_and_set.call(null,inode__9117,edit,((2 * idx__9119) + 1),n__9131);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9129))
{if((val === val_or_node__9130))
{return inode__9117;
} else
{return cljs.core.edit_and_set.call(null,inode__9117,edit,((2 * idx__9119) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__9117,edit,(2 * idx__9119),null,((2 * idx__9119) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__9129,val_or_node__9130,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__9132 = this;
var inode__9133 = this;
return cljs.core.create_inode_seq.call(null,this__9132.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9134 = this;
var inode__9135 = this;
var bit__9136 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9134.bitmap & bit__9136) === 0))
{return inode__9135;
} else
{var idx__9137 = cljs.core.bitmap_indexed_node_index.call(null,this__9134.bitmap,bit__9136);
var key_or_nil__9138 = (this__9134.arr[(2 * idx__9137)]);
var val_or_node__9139 = (this__9134.arr[((2 * idx__9137) + 1)]);
if((key_or_nil__9138 == null))
{var n__9140 = val_or_node__9139.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__9140 === val_or_node__9139))
{return inode__9135;
} else
{if(!((n__9140 == null)))
{return cljs.core.edit_and_set.call(null,inode__9135,edit,((2 * idx__9137) + 1),n__9140);
} else
{if((this__9134.bitmap === bit__9136))
{return null;
} else
{if("\uFDD0'else")
{return inode__9135.edit_and_remove_pair(edit,bit__9136,idx__9137);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9138))
{(removed_leaf_QMARK_[0] = true);
return inode__9135.edit_and_remove_pair(edit,bit__9136,idx__9137);
} else
{if("\uFDD0'else")
{return inode__9135;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__9141 = this;
var inode__9142 = this;
if((e === this__9141.edit))
{return inode__9142;
} else
{var n__9143 = cljs.core.bit_count.call(null,this__9141.bitmap);
var new_arr__9144 = cljs.core.make_array.call(null,(((n__9143 < 0))?4:(2 * (n__9143 + 1))));
cljs.core.array_copy.call(null,this__9141.arr,0,new_arr__9144,0,(2 * n__9143));
return (new cljs.core.BitmapIndexedNode(e,this__9141.bitmap,new_arr__9144));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__9145 = this;
var inode__9146 = this;
return cljs.core.inode_kv_reduce.call(null,this__9145.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9147 = this;
var inode__9148 = this;
var bit__9149 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9147.bitmap & bit__9149) === 0))
{return not_found;
} else
{var idx__9150 = cljs.core.bitmap_indexed_node_index.call(null,this__9147.bitmap,bit__9149);
var key_or_nil__9151 = (this__9147.arr[(2 * idx__9150)]);
var val_or_node__9152 = (this__9147.arr[((2 * idx__9150) + 1)]);
if((key_or_nil__9151 == null))
{return val_or_node__9152.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9151))
{return cljs.core.PersistentVector.fromArray([key_or_nil__9151,val_or_node__9152], true);
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
var this__9153 = this;
var inode__9154 = this;
var bit__9155 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9153.bitmap & bit__9155) === 0))
{return inode__9154;
} else
{var idx__9156 = cljs.core.bitmap_indexed_node_index.call(null,this__9153.bitmap,bit__9155);
var key_or_nil__9157 = (this__9153.arr[(2 * idx__9156)]);
var val_or_node__9158 = (this__9153.arr[((2 * idx__9156) + 1)]);
if((key_or_nil__9157 == null))
{var n__9159 = val_or_node__9158.inode_without((shift + 5),hash,key);
if((n__9159 === val_or_node__9158))
{return inode__9154;
} else
{if(!((n__9159 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__9153.bitmap,cljs.core.clone_and_set.call(null,this__9153.arr,((2 * idx__9156) + 1),n__9159)));
} else
{if((this__9153.bitmap === bit__9155))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__9153.bitmap ^ bit__9155),cljs.core.remove_pair.call(null,this__9153.arr,idx__9156)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9157))
{return (new cljs.core.BitmapIndexedNode(null,(this__9153.bitmap ^ bit__9155),cljs.core.remove_pair.call(null,this__9153.arr,idx__9156)));
} else
{if("\uFDD0'else")
{return inode__9154;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9160 = this;
var inode__9161 = this;
var bit__9162 = (1 << ((hash >>> shift) & 0x01f));
var idx__9163 = cljs.core.bitmap_indexed_node_index.call(null,this__9160.bitmap,bit__9162);
if(((this__9160.bitmap & bit__9162) === 0))
{var n__9164 = cljs.core.bit_count.call(null,this__9160.bitmap);
if((n__9164 >= 16))
{var nodes__9165 = cljs.core.make_array.call(null,32);
var jdx__9166 = ((hash >>> shift) & 0x01f);
(nodes__9165[jdx__9166] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__9167 = 0;
var j__9168 = 0;
while(true){
if((i__9167 < 32))
{if((((this__9160.bitmap >>> i__9167) & 1) === 0))
{{
var G__9183 = (i__9167 + 1);
var G__9184 = j__9168;
i__9167 = G__9183;
j__9168 = G__9184;
continue;
}
} else
{(nodes__9165[i__9167] = ((!(((this__9160.arr[j__9168]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__9160.arr[j__9168])),(this__9160.arr[j__9168]),(this__9160.arr[(j__9168 + 1)]),added_leaf_QMARK_):(this__9160.arr[(j__9168 + 1)])));
{
var G__9185 = (i__9167 + 1);
var G__9186 = (j__9168 + 2);
i__9167 = G__9185;
j__9168 = G__9186;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__9164 + 1),nodes__9165));
} else
{var new_arr__9169 = cljs.core.make_array.call(null,(2 * (n__9164 + 1)));
cljs.core.array_copy.call(null,this__9160.arr,0,new_arr__9169,0,(2 * idx__9163));
(new_arr__9169[(2 * idx__9163)] = key);
(new_arr__9169[((2 * idx__9163) + 1)] = val);
cljs.core.array_copy.call(null,this__9160.arr,(2 * idx__9163),new_arr__9169,(2 * (idx__9163 + 1)),(2 * (n__9164 - idx__9163)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__9160.bitmap | bit__9162),new_arr__9169));
}
} else
{var key_or_nil__9170 = (this__9160.arr[(2 * idx__9163)]);
var val_or_node__9171 = (this__9160.arr[((2 * idx__9163) + 1)]);
if((key_or_nil__9170 == null))
{var n__9172 = val_or_node__9171.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9172 === val_or_node__9171))
{return inode__9161;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__9160.bitmap,cljs.core.clone_and_set.call(null,this__9160.arr,((2 * idx__9163) + 1),n__9172)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9170))
{if((val === val_or_node__9171))
{return inode__9161;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__9160.bitmap,cljs.core.clone_and_set.call(null,this__9160.arr,((2 * idx__9163) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__9160.bitmap,cljs.core.clone_and_set.call(null,this__9160.arr,(2 * idx__9163),null,((2 * idx__9163) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__9170,val_or_node__9171,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9173 = this;
var inode__9174 = this;
var bit__9175 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9173.bitmap & bit__9175) === 0))
{return not_found;
} else
{var idx__9176 = cljs.core.bitmap_indexed_node_index.call(null,this__9173.bitmap,bit__9175);
var key_or_nil__9177 = (this__9173.arr[(2 * idx__9176)]);
var val_or_node__9178 = (this__9173.arr[((2 * idx__9176) + 1)]);
if((key_or_nil__9177 == null))
{return val_or_node__9178.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9177))
{return val_or_node__9178;
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
var arr__9194 = array_node.arr;
var len__9195 = (2 * (array_node.cnt - 1));
var new_arr__9196 = cljs.core.make_array.call(null,len__9195);
var i__9197 = 0;
var j__9198 = 1;
var bitmap__9199 = 0;
while(true){
if((i__9197 < len__9195))
{if((function (){var and__3822__auto____9200 = !((i__9197 === idx));
if(and__3822__auto____9200)
{return !(((arr__9194[i__9197]) == null));
} else
{return and__3822__auto____9200;
}
})())
{(new_arr__9196[j__9198] = (arr__9194[i__9197]));
{
var G__9201 = (i__9197 + 1);
var G__9202 = (j__9198 + 2);
var G__9203 = (bitmap__9199 | (1 << i__9197));
i__9197 = G__9201;
j__9198 = G__9202;
bitmap__9199 = G__9203;
continue;
}
} else
{{
var G__9204 = (i__9197 + 1);
var G__9205 = j__9198;
var G__9206 = bitmap__9199;
i__9197 = G__9204;
j__9198 = G__9205;
bitmap__9199 = G__9206;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__9199,new_arr__9196));
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
var this__9207 = this;
var inode__9208 = this;
var idx__9209 = ((hash >>> shift) & 0x01f);
var node__9210 = (this__9207.arr[idx__9209]);
if((node__9210 == null))
{var editable__9211 = cljs.core.edit_and_set.call(null,inode__9208,edit,idx__9209,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__9211.cnt = (editable__9211.cnt + 1);
return editable__9211;
} else
{var n__9212 = node__9210.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9212 === node__9210))
{return inode__9208;
} else
{return cljs.core.edit_and_set.call(null,inode__9208,edit,idx__9209,n__9212);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__9213 = this;
var inode__9214 = this;
return cljs.core.create_array_node_seq.call(null,this__9213.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9215 = this;
var inode__9216 = this;
var idx__9217 = ((hash >>> shift) & 0x01f);
var node__9218 = (this__9215.arr[idx__9217]);
if((node__9218 == null))
{return inode__9216;
} else
{var n__9219 = node__9218.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__9219 === node__9218))
{return inode__9216;
} else
{if((n__9219 == null))
{if((this__9215.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__9216,edit,idx__9217);
} else
{var editable__9220 = cljs.core.edit_and_set.call(null,inode__9216,edit,idx__9217,n__9219);
editable__9220.cnt = (editable__9220.cnt - 1);
return editable__9220;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__9216,edit,idx__9217,n__9219);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__9221 = this;
var inode__9222 = this;
if((e === this__9221.edit))
{return inode__9222;
} else
{return (new cljs.core.ArrayNode(e,this__9221.cnt,this__9221.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__9223 = this;
var inode__9224 = this;
var len__9225 = this__9223.arr.length;
var i__9226 = 0;
var init__9227 = init;
while(true){
if((i__9226 < len__9225))
{var node__9228 = (this__9223.arr[i__9226]);
if(!((node__9228 == null)))
{var init__9229 = node__9228.kv_reduce(f,init__9227);
if(cljs.core.reduced_QMARK_.call(null,init__9229))
{return cljs.core.deref.call(null,init__9229);
} else
{{
var G__9248 = (i__9226 + 1);
var G__9249 = init__9229;
i__9226 = G__9248;
init__9227 = G__9249;
continue;
}
}
} else
{return null;
}
} else
{return init__9227;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9230 = this;
var inode__9231 = this;
var idx__9232 = ((hash >>> shift) & 0x01f);
var node__9233 = (this__9230.arr[idx__9232]);
if(!((node__9233 == null)))
{return node__9233.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__9234 = this;
var inode__9235 = this;
var idx__9236 = ((hash >>> shift) & 0x01f);
var node__9237 = (this__9234.arr[idx__9236]);
if(!((node__9237 == null)))
{var n__9238 = node__9237.inode_without((shift + 5),hash,key);
if((n__9238 === node__9237))
{return inode__9235;
} else
{if((n__9238 == null))
{if((this__9234.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__9235,null,idx__9236);
} else
{return (new cljs.core.ArrayNode(null,(this__9234.cnt - 1),cljs.core.clone_and_set.call(null,this__9234.arr,idx__9236,n__9238)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__9234.cnt,cljs.core.clone_and_set.call(null,this__9234.arr,idx__9236,n__9238)));
} else
{return null;
}
}
}
} else
{return inode__9235;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9239 = this;
var inode__9240 = this;
var idx__9241 = ((hash >>> shift) & 0x01f);
var node__9242 = (this__9239.arr[idx__9241]);
if((node__9242 == null))
{return (new cljs.core.ArrayNode(null,(this__9239.cnt + 1),cljs.core.clone_and_set.call(null,this__9239.arr,idx__9241,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__9243 = node__9242.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9243 === node__9242))
{return inode__9240;
} else
{return (new cljs.core.ArrayNode(null,this__9239.cnt,cljs.core.clone_and_set.call(null,this__9239.arr,idx__9241,n__9243)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9244 = this;
var inode__9245 = this;
var idx__9246 = ((hash >>> shift) & 0x01f);
var node__9247 = (this__9244.arr[idx__9246]);
if(!((node__9247 == null)))
{return node__9247.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__9252 = (2 * cnt);
var i__9253 = 0;
while(true){
if((i__9253 < lim__9252))
{if(cljs.core.key_test.call(null,key,(arr[i__9253])))
{return i__9253;
} else
{{
var G__9254 = (i__9253 + 2);
i__9253 = G__9254;
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
var this__9255 = this;
var inode__9256 = this;
if((hash === this__9255.collision_hash))
{var idx__9257 = cljs.core.hash_collision_node_find_index.call(null,this__9255.arr,this__9255.cnt,key);
if((idx__9257 === -1))
{if((this__9255.arr.length > (2 * this__9255.cnt)))
{var editable__9258 = cljs.core.edit_and_set.call(null,inode__9256,edit,(2 * this__9255.cnt),key,((2 * this__9255.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__9258.cnt = (editable__9258.cnt + 1);
return editable__9258;
} else
{var len__9259 = this__9255.arr.length;
var new_arr__9260 = cljs.core.make_array.call(null,(len__9259 + 2));
cljs.core.array_copy.call(null,this__9255.arr,0,new_arr__9260,0,len__9259);
(new_arr__9260[len__9259] = key);
(new_arr__9260[(len__9259 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__9256.ensure_editable_array(edit,(this__9255.cnt + 1),new_arr__9260);
}
} else
{if(((this__9255.arr[(idx__9257 + 1)]) === val))
{return inode__9256;
} else
{return cljs.core.edit_and_set.call(null,inode__9256,edit,(idx__9257 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__9255.collision_hash >>> shift) & 0x01f)),[null,inode__9256,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__9261 = this;
var inode__9262 = this;
return cljs.core.create_inode_seq.call(null,this__9261.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9263 = this;
var inode__9264 = this;
var idx__9265 = cljs.core.hash_collision_node_find_index.call(null,this__9263.arr,this__9263.cnt,key);
if((idx__9265 === -1))
{return inode__9264;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__9263.cnt === 1))
{return null;
} else
{var editable__9266 = inode__9264.ensure_editable(edit);
var earr__9267 = editable__9266.arr;
(earr__9267[idx__9265] = (earr__9267[((2 * this__9263.cnt) - 2)]));
(earr__9267[(idx__9265 + 1)] = (earr__9267[((2 * this__9263.cnt) - 1)]));
(earr__9267[((2 * this__9263.cnt) - 1)] = null);
(earr__9267[((2 * this__9263.cnt) - 2)] = null);
editable__9266.cnt = (editable__9266.cnt - 1);
return editable__9266;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__9268 = this;
var inode__9269 = this;
if((e === this__9268.edit))
{return inode__9269;
} else
{var new_arr__9270 = cljs.core.make_array.call(null,(2 * (this__9268.cnt + 1)));
cljs.core.array_copy.call(null,this__9268.arr,0,new_arr__9270,0,(2 * this__9268.cnt));
return (new cljs.core.HashCollisionNode(e,this__9268.collision_hash,this__9268.cnt,new_arr__9270));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__9271 = this;
var inode__9272 = this;
return cljs.core.inode_kv_reduce.call(null,this__9271.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9273 = this;
var inode__9274 = this;
var idx__9275 = cljs.core.hash_collision_node_find_index.call(null,this__9273.arr,this__9273.cnt,key);
if((idx__9275 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__9273.arr[idx__9275])))
{return cljs.core.PersistentVector.fromArray([(this__9273.arr[idx__9275]),(this__9273.arr[(idx__9275 + 1)])], true);
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
var this__9276 = this;
var inode__9277 = this;
var idx__9278 = cljs.core.hash_collision_node_find_index.call(null,this__9276.arr,this__9276.cnt,key);
if((idx__9278 === -1))
{return inode__9277;
} else
{if((this__9276.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__9276.collision_hash,(this__9276.cnt - 1),cljs.core.remove_pair.call(null,this__9276.arr,cljs.core.quot.call(null,idx__9278,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9279 = this;
var inode__9280 = this;
if((hash === this__9279.collision_hash))
{var idx__9281 = cljs.core.hash_collision_node_find_index.call(null,this__9279.arr,this__9279.cnt,key);
if((idx__9281 === -1))
{var len__9282 = this__9279.arr.length;
var new_arr__9283 = cljs.core.make_array.call(null,(len__9282 + 2));
cljs.core.array_copy.call(null,this__9279.arr,0,new_arr__9283,0,len__9282);
(new_arr__9283[len__9282] = key);
(new_arr__9283[(len__9282 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__9279.collision_hash,(this__9279.cnt + 1),new_arr__9283));
} else
{if(cljs.core._EQ_.call(null,(this__9279.arr[idx__9281]),val))
{return inode__9280;
} else
{return (new cljs.core.HashCollisionNode(null,this__9279.collision_hash,this__9279.cnt,cljs.core.clone_and_set.call(null,this__9279.arr,(idx__9281 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__9279.collision_hash >>> shift) & 0x01f)),[null,inode__9280])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9284 = this;
var inode__9285 = this;
var idx__9286 = cljs.core.hash_collision_node_find_index.call(null,this__9284.arr,this__9284.cnt,key);
if((idx__9286 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__9284.arr[idx__9286])))
{return (this__9284.arr[(idx__9286 + 1)]);
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
var this__9287 = this;
var inode__9288 = this;
if((e === this__9287.edit))
{this__9287.arr = array;
this__9287.cnt = count;
return inode__9288;
} else
{return (new cljs.core.HashCollisionNode(this__9287.edit,this__9287.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__9293 = cljs.core.hash.call(null,key1);
if((key1hash__9293 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__9293,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___9294 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__9293,key1,val1,added_leaf_QMARK___9294).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___9294);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__9295 = cljs.core.hash.call(null,key1);
if((key1hash__9295 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__9295,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___9296 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__9295,key1,val1,added_leaf_QMARK___9296).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___9296);
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
var this__9297 = this;
var h__2153__auto____9298 = this__9297.__hash;
if(!((h__2153__auto____9298 == null)))
{return h__2153__auto____9298;
} else
{var h__2153__auto____9299 = cljs.core.hash_coll.call(null,coll);
this__9297.__hash = h__2153__auto____9299;
return h__2153__auto____9299;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9300 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__9301 = this;
var this__9302 = this;
return cljs.core.pr_str.call(null,this__9302);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9303 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9304 = this;
if((this__9304.s == null))
{return cljs.core.PersistentVector.fromArray([(this__9304.nodes[this__9304.i]),(this__9304.nodes[(this__9304.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__9304.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9305 = this;
if((this__9305.s == null))
{return cljs.core.create_inode_seq.call(null,this__9305.nodes,(this__9305.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__9305.nodes,this__9305.i,cljs.core.next.call(null,this__9305.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9306 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9307 = this;
return (new cljs.core.NodeSeq(meta,this__9307.nodes,this__9307.i,this__9307.s,this__9307.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9308 = this;
return this__9308.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9309 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9309.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__9316 = nodes.length;
var j__9317 = i;
while(true){
if((j__9317 < len__9316))
{if(!(((nodes[j__9317]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__9317,null,null));
} else
{var temp__3971__auto____9318 = (nodes[(j__9317 + 1)]);
if(cljs.core.truth_(temp__3971__auto____9318))
{var node__9319 = temp__3971__auto____9318;
var temp__3971__auto____9320 = node__9319.inode_seq();
if(cljs.core.truth_(temp__3971__auto____9320))
{var node_seq__9321 = temp__3971__auto____9320;
return (new cljs.core.NodeSeq(null,nodes,(j__9317 + 2),node_seq__9321,null));
} else
{{
var G__9322 = (j__9317 + 2);
j__9317 = G__9322;
continue;
}
}
} else
{{
var G__9323 = (j__9317 + 2);
j__9317 = G__9323;
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
var this__9324 = this;
var h__2153__auto____9325 = this__9324.__hash;
if(!((h__2153__auto____9325 == null)))
{return h__2153__auto____9325;
} else
{var h__2153__auto____9326 = cljs.core.hash_coll.call(null,coll);
this__9324.__hash = h__2153__auto____9326;
return h__2153__auto____9326;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9327 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__9328 = this;
var this__9329 = this;
return cljs.core.pr_str.call(null,this__9329);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9330 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9331 = this;
return cljs.core.first.call(null,this__9331.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9332 = this;
return cljs.core.create_array_node_seq.call(null,null,this__9332.nodes,this__9332.i,cljs.core.next.call(null,this__9332.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9333 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9334 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__9334.nodes,this__9334.i,this__9334.s,this__9334.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9335 = this;
return this__9335.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9336 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9336.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__9343 = nodes.length;
var j__9344 = i;
while(true){
if((j__9344 < len__9343))
{var temp__3971__auto____9345 = (nodes[j__9344]);
if(cljs.core.truth_(temp__3971__auto____9345))
{var nj__9346 = temp__3971__auto____9345;
var temp__3971__auto____9347 = nj__9346.inode_seq();
if(cljs.core.truth_(temp__3971__auto____9347))
{var ns__9348 = temp__3971__auto____9347;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__9344 + 1),ns__9348,null));
} else
{{
var G__9349 = (j__9344 + 1);
j__9344 = G__9349;
continue;
}
}
} else
{{
var G__9350 = (j__9344 + 1);
j__9344 = G__9350;
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
var this__9353 = this;
return (new cljs.core.TransientHashMap({},this__9353.root,this__9353.cnt,this__9353.has_nil_QMARK_,this__9353.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9354 = this;
var h__2153__auto____9355 = this__9354.__hash;
if(!((h__2153__auto____9355 == null)))
{return h__2153__auto____9355;
} else
{var h__2153__auto____9356 = cljs.core.hash_imap.call(null,coll);
this__9354.__hash = h__2153__auto____9356;
return h__2153__auto____9356;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9357 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9358 = this;
if((k == null))
{if(this__9358.has_nil_QMARK_)
{return this__9358.nil_val;
} else
{return not_found;
}
} else
{if((this__9358.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__9358.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9359 = this;
if((k == null))
{if((function (){var and__3822__auto____9360 = this__9359.has_nil_QMARK_;
if(and__3822__auto____9360)
{return (v === this__9359.nil_val);
} else
{return and__3822__auto____9360;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9359.meta,((this__9359.has_nil_QMARK_)?this__9359.cnt:(this__9359.cnt + 1)),this__9359.root,true,v,null));
}
} else
{var added_leaf_QMARK___9361 = (new cljs.core.Box(false));
var new_root__9362 = (((this__9359.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9359.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___9361);
if((new_root__9362 === this__9359.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9359.meta,((added_leaf_QMARK___9361.val)?(this__9359.cnt + 1):this__9359.cnt),new_root__9362,this__9359.has_nil_QMARK_,this__9359.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9363 = this;
if((k == null))
{return this__9363.has_nil_QMARK_;
} else
{if((this__9363.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__9363.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__9386 = null;
var G__9386__2 = (function (this_sym9364,k){
var this__9366 = this;
var this_sym9364__9367 = this;
var coll__9368 = this_sym9364__9367;
return coll__9368.cljs$core$ILookup$_lookup$arity$2(coll__9368,k);
});
var G__9386__3 = (function (this_sym9365,k,not_found){
var this__9366 = this;
var this_sym9365__9369 = this;
var coll__9370 = this_sym9365__9369;
return coll__9370.cljs$core$ILookup$_lookup$arity$3(coll__9370,k,not_found);
});
G__9386 = function(this_sym9365,k,not_found){
switch(arguments.length){
case 2:
return G__9386__2.call(this,this_sym9365,k);
case 3:
return G__9386__3.call(this,this_sym9365,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9386;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym9351,args9352){
var this__9371 = this;
return this_sym9351.call.apply(this_sym9351,[this_sym9351].concat(args9352.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9372 = this;
var init__9373 = ((this__9372.has_nil_QMARK_)?f.call(null,init,null,this__9372.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__9373))
{return cljs.core.deref.call(null,init__9373);
} else
{if(!((this__9372.root == null)))
{return this__9372.root.kv_reduce(f,init__9373);
} else
{if("\uFDD0'else")
{return init__9373;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9374 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__9375 = this;
var this__9376 = this;
return cljs.core.pr_str.call(null,this__9376);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9377 = this;
if((this__9377.cnt > 0))
{var s__9378 = ((!((this__9377.root == null)))?this__9377.root.inode_seq():null);
if(this__9377.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__9377.nil_val], true),s__9378);
} else
{return s__9378;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9379 = this;
return this__9379.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9380 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9381 = this;
return (new cljs.core.PersistentHashMap(meta,this__9381.cnt,this__9381.root,this__9381.has_nil_QMARK_,this__9381.nil_val,this__9381.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9382 = this;
return this__9382.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9383 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__9383.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9384 = this;
if((k == null))
{if(this__9384.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__9384.meta,(this__9384.cnt - 1),this__9384.root,false,null,null));
} else
{return coll;
}
} else
{if((this__9384.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__9385 = this__9384.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__9385 === this__9384.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9384.meta,(this__9384.cnt - 1),new_root__9385,this__9384.has_nil_QMARK_,this__9384.nil_val,null));
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
var len__9387 = ks.length;
var i__9388 = 0;
var out__9389 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__9388 < len__9387))
{{
var G__9390 = (i__9388 + 1);
var G__9391 = cljs.core.assoc_BANG_.call(null,out__9389,(ks[i__9388]),(vs[i__9388]));
i__9388 = G__9390;
out__9389 = G__9391;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9389);
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
var this__9392 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9393 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__9394 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9395 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__9396 = this;
if((k == null))
{if(this__9396.has_nil_QMARK_)
{return this__9396.nil_val;
} else
{return null;
}
} else
{if((this__9396.root == null))
{return null;
} else
{return this__9396.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__9397 = this;
if((k == null))
{if(this__9397.has_nil_QMARK_)
{return this__9397.nil_val;
} else
{return not_found;
}
} else
{if((this__9397.root == null))
{return not_found;
} else
{return this__9397.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9398 = this;
if(this__9398.edit)
{return this__9398.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__9399 = this;
var tcoll__9400 = this;
if(this__9399.edit)
{if((function (){var G__9401__9402 = o;
if(G__9401__9402)
{if((function (){var or__3824__auto____9403 = (G__9401__9402.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____9403)
{return or__3824__auto____9403;
} else
{return G__9401__9402.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__9401__9402.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9401__9402);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9401__9402);
}
})())
{return tcoll__9400.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__9404 = cljs.core.seq.call(null,o);
var tcoll__9405 = tcoll__9400;
while(true){
var temp__3971__auto____9406 = cljs.core.first.call(null,es__9404);
if(cljs.core.truth_(temp__3971__auto____9406))
{var e__9407 = temp__3971__auto____9406;
{
var G__9418 = cljs.core.next.call(null,es__9404);
var G__9419 = tcoll__9405.assoc_BANG_(cljs.core.key.call(null,e__9407),cljs.core.val.call(null,e__9407));
es__9404 = G__9418;
tcoll__9405 = G__9419;
continue;
}
} else
{return tcoll__9405;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__9408 = this;
var tcoll__9409 = this;
if(this__9408.edit)
{if((k == null))
{if((this__9408.nil_val === v))
{} else
{this__9408.nil_val = v;
}
if(this__9408.has_nil_QMARK_)
{} else
{this__9408.count = (this__9408.count + 1);
this__9408.has_nil_QMARK_ = true;
}
return tcoll__9409;
} else
{var added_leaf_QMARK___9410 = (new cljs.core.Box(false));
var node__9411 = (((this__9408.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9408.root).inode_assoc_BANG_(this__9408.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___9410);
if((node__9411 === this__9408.root))
{} else
{this__9408.root = node__9411;
}
if(added_leaf_QMARK___9410.val)
{this__9408.count = (this__9408.count + 1);
} else
{}
return tcoll__9409;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__9412 = this;
var tcoll__9413 = this;
if(this__9412.edit)
{if((k == null))
{if(this__9412.has_nil_QMARK_)
{this__9412.has_nil_QMARK_ = false;
this__9412.nil_val = null;
this__9412.count = (this__9412.count - 1);
return tcoll__9413;
} else
{return tcoll__9413;
}
} else
{if((this__9412.root == null))
{return tcoll__9413;
} else
{var removed_leaf_QMARK___9414 = (new cljs.core.Box(false));
var node__9415 = this__9412.root.inode_without_BANG_(this__9412.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___9414);
if((node__9415 === this__9412.root))
{} else
{this__9412.root = node__9415;
}
if(cljs.core.truth_((removed_leaf_QMARK___9414[0])))
{this__9412.count = (this__9412.count - 1);
} else
{}
return tcoll__9413;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__9416 = this;
var tcoll__9417 = this;
if(this__9416.edit)
{this__9416.edit = null;
return (new cljs.core.PersistentHashMap(null,this__9416.count,this__9416.root,this__9416.has_nil_QMARK_,this__9416.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__9422 = node;
var stack__9423 = stack;
while(true){
if(!((t__9422 == null)))
{{
var G__9424 = ((ascending_QMARK_)?t__9422.left:t__9422.right);
var G__9425 = cljs.core.conj.call(null,stack__9423,t__9422);
t__9422 = G__9424;
stack__9423 = G__9425;
continue;
}
} else
{return stack__9423;
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
var this__9426 = this;
var h__2153__auto____9427 = this__9426.__hash;
if(!((h__2153__auto____9427 == null)))
{return h__2153__auto____9427;
} else
{var h__2153__auto____9428 = cljs.core.hash_coll.call(null,coll);
this__9426.__hash = h__2153__auto____9428;
return h__2153__auto____9428;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9429 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__9430 = this;
var this__9431 = this;
return cljs.core.pr_str.call(null,this__9431);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9432 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9433 = this;
if((this__9433.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__9433.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__9434 = this;
return cljs.core.peek.call(null,this__9434.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__9435 = this;
var t__9436 = cljs.core.first.call(null,this__9435.stack);
var next_stack__9437 = cljs.core.tree_map_seq_push.call(null,((this__9435.ascending_QMARK_)?t__9436.right:t__9436.left),cljs.core.next.call(null,this__9435.stack),this__9435.ascending_QMARK_);
if(!((next_stack__9437 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__9437,this__9435.ascending_QMARK_,(this__9435.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9438 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9439 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__9439.stack,this__9439.ascending_QMARK_,this__9439.cnt,this__9439.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9440 = this;
return this__9440.meta;
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
{if((function (){var and__3822__auto____9442 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____9442)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____9442;
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
{if((function (){var and__3822__auto____9444 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____9444)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____9444;
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
var init__9448 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__9448))
{return cljs.core.deref.call(null,init__9448);
} else
{var init__9449 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__9448):init__9448);
if(cljs.core.reduced_QMARK_.call(null,init__9449))
{return cljs.core.deref.call(null,init__9449);
} else
{var init__9450 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__9449):init__9449);
if(cljs.core.reduced_QMARK_.call(null,init__9450))
{return cljs.core.deref.call(null,init__9450);
} else
{return init__9450;
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
var this__9453 = this;
var h__2153__auto____9454 = this__9453.__hash;
if(!((h__2153__auto____9454 == null)))
{return h__2153__auto____9454;
} else
{var h__2153__auto____9455 = cljs.core.hash_coll.call(null,coll);
this__9453.__hash = h__2153__auto____9455;
return h__2153__auto____9455;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9456 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9457 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9458 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__9458.key,this__9458.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__9506 = null;
var G__9506__2 = (function (this_sym9459,k){
var this__9461 = this;
var this_sym9459__9462 = this;
var node__9463 = this_sym9459__9462;
return node__9463.cljs$core$ILookup$_lookup$arity$2(node__9463,k);
});
var G__9506__3 = (function (this_sym9460,k,not_found){
var this__9461 = this;
var this_sym9460__9464 = this;
var node__9465 = this_sym9460__9464;
return node__9465.cljs$core$ILookup$_lookup$arity$3(node__9465,k,not_found);
});
G__9506 = function(this_sym9460,k,not_found){
switch(arguments.length){
case 2:
return G__9506__2.call(this,this_sym9460,k);
case 3:
return G__9506__3.call(this,this_sym9460,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9506;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym9451,args9452){
var this__9466 = this;
return this_sym9451.call.apply(this_sym9451,[this_sym9451].concat(args9452.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9467 = this;
return cljs.core.PersistentVector.fromArray([this__9467.key,this__9467.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9468 = this;
return this__9468.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9469 = this;
return this__9469.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__9470 = this;
var node__9471 = this;
return ins.balance_right(node__9471);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__9472 = this;
var node__9473 = this;
return (new cljs.core.RedNode(this__9472.key,this__9472.val,this__9472.left,this__9472.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__9474 = this;
var node__9475 = this;
return cljs.core.balance_right_del.call(null,this__9474.key,this__9474.val,this__9474.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__9476 = this;
var node__9477 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__9478 = this;
var node__9479 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__9479,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__9480 = this;
var node__9481 = this;
return cljs.core.balance_left_del.call(null,this__9480.key,this__9480.val,del,this__9480.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__9482 = this;
var node__9483 = this;
return ins.balance_left(node__9483);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__9484 = this;
var node__9485 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__9485,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__9507 = null;
var G__9507__0 = (function (){
var this__9486 = this;
var this__9488 = this;
return cljs.core.pr_str.call(null,this__9488);
});
G__9507 = function(){
switch(arguments.length){
case 0:
return G__9507__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9507;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__9489 = this;
var node__9490 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9490,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__9491 = this;
var node__9492 = this;
return node__9492;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9493 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9494 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9495 = this;
return cljs.core.list.call(null,this__9495.key,this__9495.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9496 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9497 = this;
return this__9497.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9498 = this;
return cljs.core.PersistentVector.fromArray([this__9498.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9499 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__9499.key,this__9499.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9500 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9501 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__9501.key,this__9501.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9502 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9503 = this;
if((n === 0))
{return this__9503.key;
} else
{if((n === 1))
{return this__9503.val;
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
var this__9504 = this;
if((n === 0))
{return this__9504.key;
} else
{if((n === 1))
{return this__9504.val;
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
var this__9505 = this;
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
var this__9510 = this;
var h__2153__auto____9511 = this__9510.__hash;
if(!((h__2153__auto____9511 == null)))
{return h__2153__auto____9511;
} else
{var h__2153__auto____9512 = cljs.core.hash_coll.call(null,coll);
this__9510.__hash = h__2153__auto____9512;
return h__2153__auto____9512;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9513 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9514 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9515 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__9515.key,this__9515.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__9563 = null;
var G__9563__2 = (function (this_sym9516,k){
var this__9518 = this;
var this_sym9516__9519 = this;
var node__9520 = this_sym9516__9519;
return node__9520.cljs$core$ILookup$_lookup$arity$2(node__9520,k);
});
var G__9563__3 = (function (this_sym9517,k,not_found){
var this__9518 = this;
var this_sym9517__9521 = this;
var node__9522 = this_sym9517__9521;
return node__9522.cljs$core$ILookup$_lookup$arity$3(node__9522,k,not_found);
});
G__9563 = function(this_sym9517,k,not_found){
switch(arguments.length){
case 2:
return G__9563__2.call(this,this_sym9517,k);
case 3:
return G__9563__3.call(this,this_sym9517,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9563;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym9508,args9509){
var this__9523 = this;
return this_sym9508.call.apply(this_sym9508,[this_sym9508].concat(args9509.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9524 = this;
return cljs.core.PersistentVector.fromArray([this__9524.key,this__9524.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9525 = this;
return this__9525.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9526 = this;
return this__9526.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__9527 = this;
var node__9528 = this;
return (new cljs.core.RedNode(this__9527.key,this__9527.val,this__9527.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__9529 = this;
var node__9530 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__9531 = this;
var node__9532 = this;
return (new cljs.core.RedNode(this__9531.key,this__9531.val,this__9531.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__9533 = this;
var node__9534 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__9535 = this;
var node__9536 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__9536,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__9537 = this;
var node__9538 = this;
return (new cljs.core.RedNode(this__9537.key,this__9537.val,del,this__9537.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__9539 = this;
var node__9540 = this;
return (new cljs.core.RedNode(this__9539.key,this__9539.val,ins,this__9539.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__9541 = this;
var node__9542 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9541.left))
{return (new cljs.core.RedNode(this__9541.key,this__9541.val,this__9541.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__9541.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9541.right))
{return (new cljs.core.RedNode(this__9541.right.key,this__9541.right.val,(new cljs.core.BlackNode(this__9541.key,this__9541.val,this__9541.left,this__9541.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__9541.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__9542,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__9564 = null;
var G__9564__0 = (function (){
var this__9543 = this;
var this__9545 = this;
return cljs.core.pr_str.call(null,this__9545);
});
G__9564 = function(){
switch(arguments.length){
case 0:
return G__9564__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9564;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__9546 = this;
var node__9547 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9546.right))
{return (new cljs.core.RedNode(this__9546.key,this__9546.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9546.left,null)),this__9546.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9546.left))
{return (new cljs.core.RedNode(this__9546.left.key,this__9546.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9546.left.left,null)),(new cljs.core.BlackNode(this__9546.key,this__9546.val,this__9546.left.right,this__9546.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9547,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__9548 = this;
var node__9549 = this;
return (new cljs.core.BlackNode(this__9548.key,this__9548.val,this__9548.left,this__9548.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9550 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9551 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9552 = this;
return cljs.core.list.call(null,this__9552.key,this__9552.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9553 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9554 = this;
return this__9554.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9555 = this;
return cljs.core.PersistentVector.fromArray([this__9555.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9556 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__9556.key,this__9556.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9557 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9558 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__9558.key,this__9558.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9559 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9560 = this;
if((n === 0))
{return this__9560.key;
} else
{if((n === 1))
{return this__9560.val;
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
var this__9561 = this;
if((n === 0))
{return this__9561.key;
} else
{if((n === 1))
{return this__9561.val;
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
var this__9562 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__9568 = comp.call(null,k,tree.key);
if((c__9568 === 0))
{(found[0] = tree);
return null;
} else
{if((c__9568 < 0))
{var ins__9569 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__9569 == null)))
{return tree.add_left(ins__9569);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__9570 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__9570 == null)))
{return tree.add_right(ins__9570);
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
{var app__9573 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__9573))
{return (new cljs.core.RedNode(app__9573.key,app__9573.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__9573.left,null)),(new cljs.core.RedNode(right.key,right.val,app__9573.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__9573,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__9574 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__9574))
{return (new cljs.core.RedNode(app__9574.key,app__9574.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__9574.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__9574.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__9574,right.right,null)));
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
{var c__9580 = comp.call(null,k,tree.key);
if((c__9580 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__9580 < 0))
{var del__9581 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____9582 = !((del__9581 == null));
if(or__3824__auto____9582)
{return or__3824__auto____9582;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__9581,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__9581,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__9583 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____9584 = !((del__9583 == null));
if(or__3824__auto____9584)
{return or__3824__auto____9584;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__9583);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__9583,null));
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
var tk__9587 = tree.key;
var c__9588 = comp.call(null,k,tk__9587);
if((c__9588 === 0))
{return tree.replace(tk__9587,v,tree.left,tree.right);
} else
{if((c__9588 < 0))
{return tree.replace(tk__9587,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__9587,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
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
var this__9591 = this;
var h__2153__auto____9592 = this__9591.__hash;
if(!((h__2153__auto____9592 == null)))
{return h__2153__auto____9592;
} else
{var h__2153__auto____9593 = cljs.core.hash_imap.call(null,coll);
this__9591.__hash = h__2153__auto____9593;
return h__2153__auto____9593;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9594 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9595 = this;
var n__9596 = coll.entry_at(k);
if(!((n__9596 == null)))
{return n__9596.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9597 = this;
var found__9598 = [null];
var t__9599 = cljs.core.tree_map_add.call(null,this__9597.comp,this__9597.tree,k,v,found__9598);
if((t__9599 == null))
{var found_node__9600 = cljs.core.nth.call(null,found__9598,0);
if(cljs.core._EQ_.call(null,v,found_node__9600.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9597.comp,cljs.core.tree_map_replace.call(null,this__9597.comp,this__9597.tree,k,v),this__9597.cnt,this__9597.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9597.comp,t__9599.blacken(),(this__9597.cnt + 1),this__9597.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9601 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__9635 = null;
var G__9635__2 = (function (this_sym9602,k){
var this__9604 = this;
var this_sym9602__9605 = this;
var coll__9606 = this_sym9602__9605;
return coll__9606.cljs$core$ILookup$_lookup$arity$2(coll__9606,k);
});
var G__9635__3 = (function (this_sym9603,k,not_found){
var this__9604 = this;
var this_sym9603__9607 = this;
var coll__9608 = this_sym9603__9607;
return coll__9608.cljs$core$ILookup$_lookup$arity$3(coll__9608,k,not_found);
});
G__9635 = function(this_sym9603,k,not_found){
switch(arguments.length){
case 2:
return G__9635__2.call(this,this_sym9603,k);
case 3:
return G__9635__3.call(this,this_sym9603,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9635;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym9589,args9590){
var this__9609 = this;
return this_sym9589.call.apply(this_sym9589,[this_sym9589].concat(args9590.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9610 = this;
if(!((this__9610.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__9610.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9611 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9612 = this;
if((this__9612.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9612.tree,false,this__9612.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__9613 = this;
var this__9614 = this;
return cljs.core.pr_str.call(null,this__9614);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__9615 = this;
var coll__9616 = this;
var t__9617 = this__9615.tree;
while(true){
if(!((t__9617 == null)))
{var c__9618 = this__9615.comp.call(null,k,t__9617.key);
if((c__9618 === 0))
{return t__9617;
} else
{if((c__9618 < 0))
{{
var G__9636 = t__9617.left;
t__9617 = G__9636;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__9637 = t__9617.right;
t__9617 = G__9637;
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
var this__9619 = this;
if((this__9619.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9619.tree,ascending_QMARK_,this__9619.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9620 = this;
if((this__9620.cnt > 0))
{var stack__9621 = null;
var t__9622 = this__9620.tree;
while(true){
if(!((t__9622 == null)))
{var c__9623 = this__9620.comp.call(null,k,t__9622.key);
if((c__9623 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__9621,t__9622),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__9623 < 0))
{{
var G__9638 = cljs.core.conj.call(null,stack__9621,t__9622);
var G__9639 = t__9622.left;
stack__9621 = G__9638;
t__9622 = G__9639;
continue;
}
} else
{{
var G__9640 = stack__9621;
var G__9641 = t__9622.right;
stack__9621 = G__9640;
t__9622 = G__9641;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__9623 > 0))
{{
var G__9642 = cljs.core.conj.call(null,stack__9621,t__9622);
var G__9643 = t__9622.right;
stack__9621 = G__9642;
t__9622 = G__9643;
continue;
}
} else
{{
var G__9644 = stack__9621;
var G__9645 = t__9622.left;
stack__9621 = G__9644;
t__9622 = G__9645;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__9621 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__9621,ascending_QMARK_,-1,null));
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
var this__9624 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9625 = this;
return this__9625.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9626 = this;
if((this__9626.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9626.tree,true,this__9626.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9627 = this;
return this__9627.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9628 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9629 = this;
return (new cljs.core.PersistentTreeMap(this__9629.comp,this__9629.tree,this__9629.cnt,meta,this__9629.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9630 = this;
return this__9630.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9631 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__9631.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9632 = this;
var found__9633 = [null];
var t__9634 = cljs.core.tree_map_remove.call(null,this__9632.comp,this__9632.tree,k,found__9633);
if((t__9634 == null))
{if((cljs.core.nth.call(null,found__9633,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9632.comp,null,0,this__9632.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9632.comp,t__9634.blacken(),(this__9632.cnt - 1),this__9632.meta,null));
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
var in__9648 = cljs.core.seq.call(null,keyvals);
var out__9649 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__9648)
{{
var G__9650 = cljs.core.nnext.call(null,in__9648);
var G__9651 = cljs.core.assoc_BANG_.call(null,out__9649,cljs.core.first.call(null,in__9648),cljs.core.second.call(null,in__9648));
in__9648 = G__9650;
out__9649 = G__9651;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9649);
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
hash_map.cljs$lang$applyTo = (function (arglist__9652){
var keyvals = cljs.core.seq(arglist__9652);;
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
array_map.cljs$lang$applyTo = (function (arglist__9653){
var keyvals = cljs.core.seq(arglist__9653);;
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
var in__9656 = cljs.core.seq.call(null,keyvals);
var out__9657 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__9656)
{{
var G__9658 = cljs.core.nnext.call(null,in__9656);
var G__9659 = cljs.core.assoc.call(null,out__9657,cljs.core.first.call(null,in__9656),cljs.core.second.call(null,in__9656));
in__9656 = G__9658;
out__9657 = G__9659;
continue;
}
} else
{return out__9657;
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
sorted_map.cljs$lang$applyTo = (function (arglist__9660){
var keyvals = cljs.core.seq(arglist__9660);;
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
var in__9663 = cljs.core.seq.call(null,keyvals);
var out__9664 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__9663)
{{
var G__9665 = cljs.core.nnext.call(null,in__9663);
var G__9666 = cljs.core.assoc.call(null,out__9664,cljs.core.first.call(null,in__9663),cljs.core.second.call(null,in__9663));
in__9663 = G__9665;
out__9664 = G__9666;
continue;
}
} else
{return out__9664;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__9667){
var comparator = cljs.core.first(arglist__9667);
var keyvals = cljs.core.rest(arglist__9667);
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
{return cljs.core.reduce.call(null,(function (p1__9668_SHARP_,p2__9669_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____9671 = p1__9668_SHARP_;
if(cljs.core.truth_(or__3824__auto____9671))
{return or__3824__auto____9671;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__9669_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__9672){
var maps = cljs.core.seq(arglist__9672);;
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
{var merge_entry__9680 = (function (m,e){
var k__9678 = cljs.core.first.call(null,e);
var v__9679 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__9678))
{return cljs.core.assoc.call(null,m,k__9678,f.call(null,cljs.core._lookup.call(null,m,k__9678,null),v__9679));
} else
{return cljs.core.assoc.call(null,m,k__9678,v__9679);
}
});
var merge2__9682 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__9680,(function (){var or__3824__auto____9681 = m1;
if(cljs.core.truth_(or__3824__auto____9681))
{return or__3824__auto____9681;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__9682,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__9683){
var f = cljs.core.first(arglist__9683);
var maps = cljs.core.rest(arglist__9683);
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
var ret__9688 = cljs.core.ObjMap.EMPTY;
var keys__9689 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__9689)
{var key__9690 = cljs.core.first.call(null,keys__9689);
var entry__9691 = cljs.core._lookup.call(null,map,key__9690,"\uFDD0'user/not-found");
{
var G__9692 = ((cljs.core.not_EQ_.call(null,entry__9691,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__9688,key__9690,entry__9691):ret__9688);
var G__9693 = cljs.core.next.call(null,keys__9689);
ret__9688 = G__9692;
keys__9689 = G__9693;
continue;
}
} else
{return ret__9688;
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
var this__9697 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__9697.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9698 = this;
var h__2153__auto____9699 = this__9698.__hash;
if(!((h__2153__auto____9699 == null)))
{return h__2153__auto____9699;
} else
{var h__2153__auto____9700 = cljs.core.hash_iset.call(null,coll);
this__9698.__hash = h__2153__auto____9700;
return h__2153__auto____9700;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9701 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9702 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9702.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__9723 = null;
var G__9723__2 = (function (this_sym9703,k){
var this__9705 = this;
var this_sym9703__9706 = this;
var coll__9707 = this_sym9703__9706;
return coll__9707.cljs$core$ILookup$_lookup$arity$2(coll__9707,k);
});
var G__9723__3 = (function (this_sym9704,k,not_found){
var this__9705 = this;
var this_sym9704__9708 = this;
var coll__9709 = this_sym9704__9708;
return coll__9709.cljs$core$ILookup$_lookup$arity$3(coll__9709,k,not_found);
});
G__9723 = function(this_sym9704,k,not_found){
switch(arguments.length){
case 2:
return G__9723__2.call(this,this_sym9704,k);
case 3:
return G__9723__3.call(this,this_sym9704,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9723;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym9695,args9696){
var this__9710 = this;
return this_sym9695.call.apply(this_sym9695,[this_sym9695].concat(args9696.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9711 = this;
return (new cljs.core.PersistentHashSet(this__9711.meta,cljs.core.assoc.call(null,this__9711.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__9712 = this;
var this__9713 = this;
return cljs.core.pr_str.call(null,this__9713);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9714 = this;
return cljs.core.keys.call(null,this__9714.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9715 = this;
return (new cljs.core.PersistentHashSet(this__9715.meta,cljs.core.dissoc.call(null,this__9715.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9716 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9717 = this;
var and__3822__auto____9718 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____9718)
{var and__3822__auto____9719 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____9719)
{return cljs.core.every_QMARK_.call(null,(function (p1__9694_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9694_SHARP_);
}),other);
} else
{return and__3822__auto____9719;
}
} else
{return and__3822__auto____9718;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9720 = this;
return (new cljs.core.PersistentHashSet(meta,this__9720.hash_map,this__9720.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9721 = this;
return this__9721.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9722 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__9722.meta);
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
var G__9741 = null;
var G__9741__2 = (function (this_sym9727,k){
var this__9729 = this;
var this_sym9727__9730 = this;
var tcoll__9731 = this_sym9727__9730;
if((cljs.core._lookup.call(null,this__9729.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__9741__3 = (function (this_sym9728,k,not_found){
var this__9729 = this;
var this_sym9728__9732 = this;
var tcoll__9733 = this_sym9728__9732;
if((cljs.core._lookup.call(null,this__9729.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__9741 = function(this_sym9728,k,not_found){
switch(arguments.length){
case 2:
return G__9741__2.call(this,this_sym9728,k);
case 3:
return G__9741__3.call(this,this_sym9728,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9741;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym9725,args9726){
var this__9734 = this;
return this_sym9725.call.apply(this_sym9725,[this_sym9725].concat(args9726.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__9735 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__9736 = this;
if((cljs.core._lookup.call(null,this__9736.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9737 = this;
return cljs.core.count.call(null,this__9737.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__9738 = this;
this__9738.transient_map = cljs.core.dissoc_BANG_.call(null,this__9738.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9739 = this;
this__9739.transient_map = cljs.core.assoc_BANG_.call(null,this__9739.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9740 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__9740.transient_map),null));
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
var this__9744 = this;
var h__2153__auto____9745 = this__9744.__hash;
if(!((h__2153__auto____9745 == null)))
{return h__2153__auto____9745;
} else
{var h__2153__auto____9746 = cljs.core.hash_iset.call(null,coll);
this__9744.__hash = h__2153__auto____9746;
return h__2153__auto____9746;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9747 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9748 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9748.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__9774 = null;
var G__9774__2 = (function (this_sym9749,k){
var this__9751 = this;
var this_sym9749__9752 = this;
var coll__9753 = this_sym9749__9752;
return coll__9753.cljs$core$ILookup$_lookup$arity$2(coll__9753,k);
});
var G__9774__3 = (function (this_sym9750,k,not_found){
var this__9751 = this;
var this_sym9750__9754 = this;
var coll__9755 = this_sym9750__9754;
return coll__9755.cljs$core$ILookup$_lookup$arity$3(coll__9755,k,not_found);
});
G__9774 = function(this_sym9750,k,not_found){
switch(arguments.length){
case 2:
return G__9774__2.call(this,this_sym9750,k);
case 3:
return G__9774__3.call(this,this_sym9750,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9774;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym9742,args9743){
var this__9756 = this;
return this_sym9742.call.apply(this_sym9742,[this_sym9742].concat(args9743.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9757 = this;
return (new cljs.core.PersistentTreeSet(this__9757.meta,cljs.core.assoc.call(null,this__9757.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9758 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__9758.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__9759 = this;
var this__9760 = this;
return cljs.core.pr_str.call(null,this__9760);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__9761 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__9761.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9762 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__9762.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__9763 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9764 = this;
return cljs.core._comparator.call(null,this__9764.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9765 = this;
return cljs.core.keys.call(null,this__9765.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9766 = this;
return (new cljs.core.PersistentTreeSet(this__9766.meta,cljs.core.dissoc.call(null,this__9766.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9767 = this;
return cljs.core.count.call(null,this__9767.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9768 = this;
var and__3822__auto____9769 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____9769)
{var and__3822__auto____9770 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____9770)
{return cljs.core.every_QMARK_.call(null,(function (p1__9724_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9724_SHARP_);
}),other);
} else
{return and__3822__auto____9770;
}
} else
{return and__3822__auto____9769;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9771 = this;
return (new cljs.core.PersistentTreeSet(meta,this__9771.tree_map,this__9771.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9772 = this;
return this__9772.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9773 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__9773.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map.call(null),0));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in__9777 = cljs.core.seq.call(null,coll);
var out__9778 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__9777))
{{
var G__9779 = cljs.core.next.call(null,in__9777);
var G__9780 = cljs.core.conj_BANG_.call(null,out__9778,cljs.core.first.call(null,in__9777));
in__9777 = G__9779;
out__9778 = G__9780;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9778);
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
sorted_set.cljs$lang$applyTo = (function (arglist__9781){
var keys = cljs.core.seq(arglist__9781);;
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__9783){
var comparator = cljs.core.first(arglist__9783);
var keys = cljs.core.rest(arglist__9783);
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
{var n__9789 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____9790 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____9790))
{var e__9791 = temp__3971__auto____9790;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__9791));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__9789,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__9782_SHARP_){
var temp__3971__auto____9792 = cljs.core.find.call(null,smap,p1__9782_SHARP_);
if(cljs.core.truth_(temp__3971__auto____9792))
{var e__9793 = temp__3971__auto____9792;
return cljs.core.second.call(null,e__9793);
} else
{return p1__9782_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__9823 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__9816,seen){
while(true){
var vec__9817__9818 = p__9816;
var f__9819 = cljs.core.nth.call(null,vec__9817__9818,0,null);
var xs__9820 = vec__9817__9818;
var temp__3974__auto____9821 = cljs.core.seq.call(null,xs__9820);
if(temp__3974__auto____9821)
{var s__9822 = temp__3974__auto____9821;
if(cljs.core.contains_QMARK_.call(null,seen,f__9819))
{{
var G__9824 = cljs.core.rest.call(null,s__9822);
var G__9825 = seen;
p__9816 = G__9824;
seen = G__9825;
continue;
}
} else
{return cljs.core.cons.call(null,f__9819,step.call(null,cljs.core.rest.call(null,s__9822),cljs.core.conj.call(null,seen,f__9819)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__9823.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__9828 = cljs.core.PersistentVector.EMPTY;
var s__9829 = s;
while(true){
if(cljs.core.next.call(null,s__9829))
{{
var G__9830 = cljs.core.conj.call(null,ret__9828,cljs.core.first.call(null,s__9829));
var G__9831 = cljs.core.next.call(null,s__9829);
ret__9828 = G__9830;
s__9829 = G__9831;
continue;
}
} else
{return cljs.core.seq.call(null,ret__9828);
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
{if((function (){var or__3824__auto____9834 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9834)
{return or__3824__auto____9834;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9835 = x.lastIndexOf("/");
if((i__9835 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__9835 + 1));
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
if((function (){var or__3824__auto____9838 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9838)
{return or__3824__auto____9838;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9839 = x.lastIndexOf("/");
if((i__9839 > -1))
{return cljs.core.subs.call(null,x,2,i__9839);
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
var map__9846 = cljs.core.ObjMap.EMPTY;
var ks__9847 = cljs.core.seq.call(null,keys);
var vs__9848 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____9849 = ks__9847;
if(and__3822__auto____9849)
{return vs__9848;
} else
{return and__3822__auto____9849;
}
})())
{{
var G__9850 = cljs.core.assoc.call(null,map__9846,cljs.core.first.call(null,ks__9847),cljs.core.first.call(null,vs__9848));
var G__9851 = cljs.core.next.call(null,ks__9847);
var G__9852 = cljs.core.next.call(null,vs__9848);
map__9846 = G__9850;
ks__9847 = G__9851;
vs__9848 = G__9852;
continue;
}
} else
{return map__9846;
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
var G__9855__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9840_SHARP_,p2__9841_SHARP_){
return max_key.call(null,k,p1__9840_SHARP_,p2__9841_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__9855 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9855__delegate.call(this, k, x, y, more);
};
G__9855.cljs$lang$maxFixedArity = 3;
G__9855.cljs$lang$applyTo = (function (arglist__9856){
var k = cljs.core.first(arglist__9856);
var x = cljs.core.first(cljs.core.next(arglist__9856));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9856)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9856)));
return G__9855__delegate(k, x, y, more);
});
G__9855.cljs$lang$arity$variadic = G__9855__delegate;
return G__9855;
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
var G__9857__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9853_SHARP_,p2__9854_SHARP_){
return min_key.call(null,k,p1__9853_SHARP_,p2__9854_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__9857 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9857__delegate.call(this, k, x, y, more);
};
G__9857.cljs$lang$maxFixedArity = 3;
G__9857.cljs$lang$applyTo = (function (arglist__9858){
var k = cljs.core.first(arglist__9858);
var x = cljs.core.first(cljs.core.next(arglist__9858));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9858)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9858)));
return G__9857__delegate(k, x, y, more);
});
G__9857.cljs$lang$arity$variadic = G__9857__delegate;
return G__9857;
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
var temp__3974__auto____9861 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9861)
{var s__9862 = temp__3974__auto____9861;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__9862),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__9862)));
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
var temp__3974__auto____9865 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9865)
{var s__9866 = temp__3974__auto____9865;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__9866))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9866),take_while.call(null,pred,cljs.core.rest.call(null,s__9866)));
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
var comp__9868 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__9868.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__9880 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____9881 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____9881))
{var vec__9882__9883 = temp__3974__auto____9881;
var e__9884 = cljs.core.nth.call(null,vec__9882__9883,0,null);
var s__9885 = vec__9882__9883;
if(cljs.core.truth_(include__9880.call(null,e__9884)))
{return s__9885;
} else
{return cljs.core.next.call(null,s__9885);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9880,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9886 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____9886))
{var vec__9887__9888 = temp__3974__auto____9886;
var e__9889 = cljs.core.nth.call(null,vec__9887__9888,0,null);
var s__9890 = vec__9887__9888;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__9889))?s__9890:cljs.core.next.call(null,s__9890)));
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
var include__9902 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____9903 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____9903))
{var vec__9904__9905 = temp__3974__auto____9903;
var e__9906 = cljs.core.nth.call(null,vec__9904__9905,0,null);
var s__9907 = vec__9904__9905;
if(cljs.core.truth_(include__9902.call(null,e__9906)))
{return s__9907;
} else
{return cljs.core.next.call(null,s__9907);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9902,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9908 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____9908))
{var vec__9909__9910 = temp__3974__auto____9908;
var e__9911 = cljs.core.nth.call(null,vec__9909__9910,0,null);
var s__9912 = vec__9909__9910;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__9911))?s__9912:cljs.core.next.call(null,s__9912)));
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
var this__9913 = this;
var h__2153__auto____9914 = this__9913.__hash;
if(!((h__2153__auto____9914 == null)))
{return h__2153__auto____9914;
} else
{var h__2153__auto____9915 = cljs.core.hash_coll.call(null,rng);
this__9913.__hash = h__2153__auto____9915;
return h__2153__auto____9915;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__9916 = this;
if((this__9916.step > 0))
{if(((this__9916.start + this__9916.step) < this__9916.end))
{return (new cljs.core.Range(this__9916.meta,(this__9916.start + this__9916.step),this__9916.end,this__9916.step,null));
} else
{return null;
}
} else
{if(((this__9916.start + this__9916.step) > this__9916.end))
{return (new cljs.core.Range(this__9916.meta,(this__9916.start + this__9916.step),this__9916.end,this__9916.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__9917 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__9918 = this;
var this__9919 = this;
return cljs.core.pr_str.call(null,this__9919);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__9920 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__9921 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__9922 = this;
if((this__9922.step > 0))
{if((this__9922.start < this__9922.end))
{return rng;
} else
{return null;
}
} else
{if((this__9922.start > this__9922.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__9923 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__9923.end - this__9923.start) / this__9923.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__9924 = this;
return this__9924.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__9925 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__9925.meta,(this__9925.start + this__9925.step),this__9925.end,this__9925.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__9926 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__9927 = this;
return (new cljs.core.Range(meta,this__9927.start,this__9927.end,this__9927.step,this__9927.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__9928 = this;
return this__9928.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__9929 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9929.start + (n * this__9929.step));
} else
{if((function (){var and__3822__auto____9930 = (this__9929.start > this__9929.end);
if(and__3822__auto____9930)
{return (this__9929.step === 0);
} else
{return and__3822__auto____9930;
}
})())
{return this__9929.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__9931 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9931.start + (n * this__9931.step));
} else
{if((function (){var and__3822__auto____9932 = (this__9931.start > this__9931.end);
if(and__3822__auto____9932)
{return (this__9931.step === 0);
} else
{return and__3822__auto____9932;
}
})())
{return this__9931.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__9933 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9933.meta);
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
var temp__3974__auto____9936 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9936)
{var s__9937 = temp__3974__auto____9936;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__9937),take_nth.call(null,n,cljs.core.drop.call(null,n,s__9937)));
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
var temp__3974__auto____9944 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9944)
{var s__9945 = temp__3974__auto____9944;
var fst__9946 = cljs.core.first.call(null,s__9945);
var fv__9947 = f.call(null,fst__9946);
var run__9948 = cljs.core.cons.call(null,fst__9946,cljs.core.take_while.call(null,(function (p1__9938_SHARP_){
return cljs.core._EQ_.call(null,fv__9947,f.call(null,p1__9938_SHARP_));
}),cljs.core.next.call(null,s__9945)));
return cljs.core.cons.call(null,run__9948,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__9948),s__9945))));
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
var temp__3971__auto____9963 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____9963)
{var s__9964 = temp__3971__auto____9963;
return reductions.call(null,f,cljs.core.first.call(null,s__9964),cljs.core.rest.call(null,s__9964));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9965 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9965)
{var s__9966 = temp__3974__auto____9965;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__9966)),cljs.core.rest.call(null,s__9966));
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
var G__9969 = null;
var G__9969__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__9969__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__9969__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__9969__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__9969__4 = (function() { 
var G__9970__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__9970 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9970__delegate.call(this, x, y, z, args);
};
G__9970.cljs$lang$maxFixedArity = 3;
G__9970.cljs$lang$applyTo = (function (arglist__9971){
var x = cljs.core.first(arglist__9971);
var y = cljs.core.first(cljs.core.next(arglist__9971));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9971)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9971)));
return G__9970__delegate(x, y, z, args);
});
G__9970.cljs$lang$arity$variadic = G__9970__delegate;
return G__9970;
})()
;
G__9969 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9969__0.call(this);
case 1:
return G__9969__1.call(this,x);
case 2:
return G__9969__2.call(this,x,y);
case 3:
return G__9969__3.call(this,x,y,z);
default:
return G__9969__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9969.cljs$lang$maxFixedArity = 3;
G__9969.cljs$lang$applyTo = G__9969__4.cljs$lang$applyTo;
return G__9969;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__9972 = null;
var G__9972__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__9972__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__9972__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__9972__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__9972__4 = (function() { 
var G__9973__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__9973 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9973__delegate.call(this, x, y, z, args);
};
G__9973.cljs$lang$maxFixedArity = 3;
G__9973.cljs$lang$applyTo = (function (arglist__9974){
var x = cljs.core.first(arglist__9974);
var y = cljs.core.first(cljs.core.next(arglist__9974));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9974)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9974)));
return G__9973__delegate(x, y, z, args);
});
G__9973.cljs$lang$arity$variadic = G__9973__delegate;
return G__9973;
})()
;
G__9972 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9972__0.call(this);
case 1:
return G__9972__1.call(this,x);
case 2:
return G__9972__2.call(this,x,y);
case 3:
return G__9972__3.call(this,x,y,z);
default:
return G__9972__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9972.cljs$lang$maxFixedArity = 3;
G__9972.cljs$lang$applyTo = G__9972__4.cljs$lang$applyTo;
return G__9972;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__9975 = null;
var G__9975__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__9975__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__9975__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__9975__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__9975__4 = (function() { 
var G__9976__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__9976 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9976__delegate.call(this, x, y, z, args);
};
G__9976.cljs$lang$maxFixedArity = 3;
G__9976.cljs$lang$applyTo = (function (arglist__9977){
var x = cljs.core.first(arglist__9977);
var y = cljs.core.first(cljs.core.next(arglist__9977));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9977)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9977)));
return G__9976__delegate(x, y, z, args);
});
G__9976.cljs$lang$arity$variadic = G__9976__delegate;
return G__9976;
})()
;
G__9975 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9975__0.call(this);
case 1:
return G__9975__1.call(this,x);
case 2:
return G__9975__2.call(this,x,y);
case 3:
return G__9975__3.call(this,x,y,z);
default:
return G__9975__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9975.cljs$lang$maxFixedArity = 3;
G__9975.cljs$lang$applyTo = G__9975__4.cljs$lang$applyTo;
return G__9975;
})()
});
var juxt__4 = (function() { 
var G__9978__delegate = function (f,g,h,fs){
var fs__9968 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__9979 = null;
var G__9979__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__9949_SHARP_,p2__9950_SHARP_){
return cljs.core.conj.call(null,p1__9949_SHARP_,p2__9950_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__9968);
});
var G__9979__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__9951_SHARP_,p2__9952_SHARP_){
return cljs.core.conj.call(null,p1__9951_SHARP_,p2__9952_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__9968);
});
var G__9979__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__9953_SHARP_,p2__9954_SHARP_){
return cljs.core.conj.call(null,p1__9953_SHARP_,p2__9954_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__9968);
});
var G__9979__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__9955_SHARP_,p2__9956_SHARP_){
return cljs.core.conj.call(null,p1__9955_SHARP_,p2__9956_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__9968);
});
var G__9979__4 = (function() { 
var G__9980__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__9957_SHARP_,p2__9958_SHARP_){
return cljs.core.conj.call(null,p1__9957_SHARP_,cljs.core.apply.call(null,p2__9958_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__9968);
};
var G__9980 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9980__delegate.call(this, x, y, z, args);
};
G__9980.cljs$lang$maxFixedArity = 3;
G__9980.cljs$lang$applyTo = (function (arglist__9981){
var x = cljs.core.first(arglist__9981);
var y = cljs.core.first(cljs.core.next(arglist__9981));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9981)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9981)));
return G__9980__delegate(x, y, z, args);
});
G__9980.cljs$lang$arity$variadic = G__9980__delegate;
return G__9980;
})()
;
G__9979 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9979__0.call(this);
case 1:
return G__9979__1.call(this,x);
case 2:
return G__9979__2.call(this,x,y);
case 3:
return G__9979__3.call(this,x,y,z);
default:
return G__9979__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9979.cljs$lang$maxFixedArity = 3;
G__9979.cljs$lang$applyTo = G__9979__4.cljs$lang$applyTo;
return G__9979;
})()
};
var G__9978 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9978__delegate.call(this, f, g, h, fs);
};
G__9978.cljs$lang$maxFixedArity = 3;
G__9978.cljs$lang$applyTo = (function (arglist__9982){
var f = cljs.core.first(arglist__9982);
var g = cljs.core.first(cljs.core.next(arglist__9982));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9982)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9982)));
return G__9978__delegate(f, g, h, fs);
});
G__9978.cljs$lang$arity$variadic = G__9978__delegate;
return G__9978;
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
var G__9985 = cljs.core.next.call(null,coll);
coll = G__9985;
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
if(cljs.core.truth_((function (){var and__3822__auto____9984 = cljs.core.seq.call(null,coll);
if(and__3822__auto____9984)
{return (n > 0);
} else
{return and__3822__auto____9984;
}
})()))
{{
var G__9986 = (n - 1);
var G__9987 = cljs.core.next.call(null,coll);
n = G__9986;
coll = G__9987;
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
var matches__9989 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__9989),s))
{if((cljs.core.count.call(null,matches__9989) === 1))
{return cljs.core.first.call(null,matches__9989);
} else
{return cljs.core.vec.call(null,matches__9989);
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
var matches__9991 = re.exec(s);
if((matches__9991 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__9991) === 1))
{return cljs.core.first.call(null,matches__9991);
} else
{return cljs.core.vec.call(null,matches__9991);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__9996 = cljs.core.re_find.call(null,re,s);
var match_idx__9997 = s.search(re);
var match_str__9998 = ((cljs.core.coll_QMARK_.call(null,match_data__9996))?cljs.core.first.call(null,match_data__9996):match_data__9996);
var post_match__9999 = cljs.core.subs.call(null,s,(match_idx__9997 + cljs.core.count.call(null,match_str__9998)));
if(cljs.core.truth_(match_data__9996))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__9996,re_seq.call(null,re,post_match__9999));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__10006__10007 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___10008 = cljs.core.nth.call(null,vec__10006__10007,0,null);
var flags__10009 = cljs.core.nth.call(null,vec__10006__10007,1,null);
var pattern__10010 = cljs.core.nth.call(null,vec__10006__10007,2,null);
return (new RegExp(pattern__10010,flags__10009));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__10000_SHARP_){
return print_one.call(null,p1__10000_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____10020 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____10020))
{var and__3822__auto____10024 = (function (){var G__10021__10022 = obj;
if(G__10021__10022)
{if((function (){var or__3824__auto____10023 = (G__10021__10022.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____10023)
{return or__3824__auto____10023;
} else
{return G__10021__10022.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__10021__10022.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__10021__10022);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__10021__10022);
}
})();
if(cljs.core.truth_(and__3822__auto____10024))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____10024;
}
} else
{return and__3822__auto____10020;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____10025 = !((obj == null));
if(and__3822__auto____10025)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____10025;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__10026__10027 = obj;
if(G__10026__10027)
{if((function (){var or__3824__auto____10028 = (G__10026__10027.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____10028)
{return or__3824__auto____10028;
} else
{return G__10026__10027.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__10026__10027.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__10026__10027);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__10026__10027);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__10043 = cljs.core.first.call(null,objs);
var sb__10044 = (new goog.string.StringBuffer());
var G__10045__10046 = cljs.core.seq.call(null,objs);
if(G__10045__10046)
{var obj__10047 = cljs.core.first.call(null,G__10045__10046);
var G__10045__10048 = G__10045__10046;
while(true){
if((obj__10047 === first_obj__10043))
{} else
{sb__10044.append(" ");
}
var G__10049__10050 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__10047,opts));
if(G__10049__10050)
{var string__10051 = cljs.core.first.call(null,G__10049__10050);
var G__10049__10052 = G__10049__10050;
while(true){
sb__10044.append(string__10051);
var temp__3974__auto____10053 = cljs.core.next.call(null,G__10049__10052);
if(temp__3974__auto____10053)
{var G__10049__10054 = temp__3974__auto____10053;
{
var G__10057 = cljs.core.first.call(null,G__10049__10054);
var G__10058 = G__10049__10054;
string__10051 = G__10057;
G__10049__10052 = G__10058;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____10055 = cljs.core.next.call(null,G__10045__10048);
if(temp__3974__auto____10055)
{var G__10045__10056 = temp__3974__auto____10055;
{
var G__10059 = cljs.core.first.call(null,G__10045__10056);
var G__10060 = G__10045__10056;
obj__10047 = G__10059;
G__10045__10048 = G__10060;
continue;
}
} else
{}
break;
}
} else
{}
return sb__10044;
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
var sb__10062 = cljs.core.pr_sb.call(null,objs,opts);
sb__10062.append("\n");
return [cljs.core.str(sb__10062)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__10076 = cljs.core.first.call(null,objs);
var G__10077__10078 = cljs.core.seq.call(null,objs);
if(G__10077__10078)
{var obj__10079 = cljs.core.first.call(null,G__10077__10078);
var G__10077__10080 = G__10077__10078;
while(true){
if((obj__10079 === first_obj__10076))
{} else
{cljs.core.string_print.call(null," ");
}
var G__10081__10082 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__10079,opts));
if(G__10081__10082)
{var string__10083 = cljs.core.first.call(null,G__10081__10082);
var G__10081__10084 = G__10081__10082;
while(true){
cljs.core.string_print.call(null,string__10083);
var temp__3974__auto____10085 = cljs.core.next.call(null,G__10081__10084);
if(temp__3974__auto____10085)
{var G__10081__10086 = temp__3974__auto____10085;
{
var G__10089 = cljs.core.first.call(null,G__10081__10086);
var G__10090 = G__10081__10086;
string__10083 = G__10089;
G__10081__10084 = G__10090;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____10087 = cljs.core.next.call(null,G__10077__10080);
if(temp__3974__auto____10087)
{var G__10077__10088 = temp__3974__auto____10087;
{
var G__10091 = cljs.core.first.call(null,G__10077__10088);
var G__10092 = G__10077__10088;
obj__10079 = G__10091;
G__10077__10080 = G__10092;
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
pr_str.cljs$lang$applyTo = (function (arglist__10093){
var objs = cljs.core.seq(arglist__10093);;
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
prn_str.cljs$lang$applyTo = (function (arglist__10094){
var objs = cljs.core.seq(arglist__10094);;
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
pr.cljs$lang$applyTo = (function (arglist__10095){
var objs = cljs.core.seq(arglist__10095);;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__10096){
var objs = cljs.core.seq(arglist__10096);;
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
print_str.cljs$lang$applyTo = (function (arglist__10097){
var objs = cljs.core.seq(arglist__10097);;
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
println.cljs$lang$applyTo = (function (arglist__10098){
var objs = cljs.core.seq(arglist__10098);;
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
println_str.cljs$lang$applyTo = (function (arglist__10099){
var objs = cljs.core.seq(arglist__10099);;
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
prn.cljs$lang$applyTo = (function (arglist__10100){
var objs = cljs.core.seq(arglist__10100);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10101 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10101,"{",", ","}",opts,coll);
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
var pr_pair__10102 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10102,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10103 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10103,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____10104 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____10104))
{var nspc__10105 = temp__3974__auto____10104;
return [cljs.core.str(nspc__10105),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____10106 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____10106))
{var nspc__10107 = temp__3974__auto____10106;
return [cljs.core.str(nspc__10107),cljs.core.str("/")].join('');
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
var pr_pair__10108 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10108,"{",", ","}",opts,coll);
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
var normalize__10110 = (function (n,len){
var ns__10109 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__10109) < len))
{{
var G__10112 = [cljs.core.str("0"),cljs.core.str(ns__10109)].join('');
ns__10109 = G__10112;
continue;
}
} else
{return ns__10109;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__10110.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__10110.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__10110.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__10110.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__10110.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__10110.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
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
var pr_pair__10111 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10111,"{",", ","}",opts,coll);
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
var this__10113 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__10114 = this;
var G__10115__10116 = cljs.core.seq.call(null,this__10114.watches);
if(G__10115__10116)
{var G__10118__10120 = cljs.core.first.call(null,G__10115__10116);
var vec__10119__10121 = G__10118__10120;
var key__10122 = cljs.core.nth.call(null,vec__10119__10121,0,null);
var f__10123 = cljs.core.nth.call(null,vec__10119__10121,1,null);
var G__10115__10124 = G__10115__10116;
var G__10118__10125 = G__10118__10120;
var G__10115__10126 = G__10115__10124;
while(true){
var vec__10127__10128 = G__10118__10125;
var key__10129 = cljs.core.nth.call(null,vec__10127__10128,0,null);
var f__10130 = cljs.core.nth.call(null,vec__10127__10128,1,null);
var G__10115__10131 = G__10115__10126;
f__10130.call(null,key__10129,this$,oldval,newval);
var temp__3974__auto____10132 = cljs.core.next.call(null,G__10115__10131);
if(temp__3974__auto____10132)
{var G__10115__10133 = temp__3974__auto____10132;
{
var G__10140 = cljs.core.first.call(null,G__10115__10133);
var G__10141 = G__10115__10133;
G__10118__10125 = G__10140;
G__10115__10126 = G__10141;
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
var this__10134 = this;
return this$.watches = cljs.core.assoc.call(null,this__10134.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__10135 = this;
return this$.watches = cljs.core.dissoc.call(null,this__10135.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__10136 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__10136.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__10137 = this;
return this__10137.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__10138 = this;
return this__10138.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__10139 = this;
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
var G__10153__delegate = function (x,p__10142){
var map__10148__10149 = p__10142;
var map__10148__10150 = ((cljs.core.seq_QMARK_.call(null,map__10148__10149))?cljs.core.apply.call(null,cljs.core.hash_map,map__10148__10149):map__10148__10149);
var validator__10151 = cljs.core._lookup.call(null,map__10148__10150,"\uFDD0'validator",null);
var meta__10152 = cljs.core._lookup.call(null,map__10148__10150,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__10152,validator__10151,null));
};
var G__10153 = function (x,var_args){
var p__10142 = null;
if (goog.isDef(var_args)) {
  p__10142 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10153__delegate.call(this, x, p__10142);
};
G__10153.cljs$lang$maxFixedArity = 1;
G__10153.cljs$lang$applyTo = (function (arglist__10154){
var x = cljs.core.first(arglist__10154);
var p__10142 = cljs.core.rest(arglist__10154);
return G__10153__delegate(x, p__10142);
});
G__10153.cljs$lang$arity$variadic = G__10153__delegate;
return G__10153;
})()
;
atom = function(x,var_args){
var p__10142 = var_args;
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
var temp__3974__auto____10158 = a.validator;
if(cljs.core.truth_(temp__3974__auto____10158))
{var validate__10159 = temp__3974__auto____10158;
if(cljs.core.truth_(validate__10159.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6394))))].join('')));
}
} else
{}
var old_value__10160 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__10160,new_value);
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
var G__10161__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__10161 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10161__delegate.call(this, a, f, x, y, z, more);
};
G__10161.cljs$lang$maxFixedArity = 5;
G__10161.cljs$lang$applyTo = (function (arglist__10162){
var a = cljs.core.first(arglist__10162);
var f = cljs.core.first(cljs.core.next(arglist__10162));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10162)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10162))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10162)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10162)))));
return G__10161__delegate(a, f, x, y, z, more);
});
G__10161.cljs$lang$arity$variadic = G__10161__delegate;
return G__10161;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__10163){
var iref = cljs.core.first(arglist__10163);
var f = cljs.core.first(cljs.core.next(arglist__10163));
var args = cljs.core.rest(cljs.core.next(arglist__10163));
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
var this__10164 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__10164.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__10165 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__10165.state,(function (p__10166){
var curr_state__10167 = p__10166;
var curr_state__10168 = ((cljs.core.seq_QMARK_.call(null,curr_state__10167))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__10167):curr_state__10167);
var done__10169 = cljs.core._lookup.call(null,curr_state__10168,"\uFDD0'done",null);
if(cljs.core.truth_(done__10169))
{return curr_state__10168;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__10165.f.call(null)});
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
var map__10190__10191 = options;
var map__10190__10192 = ((cljs.core.seq_QMARK_.call(null,map__10190__10191))?cljs.core.apply.call(null,cljs.core.hash_map,map__10190__10191):map__10190__10191);
var keywordize_keys__10193 = cljs.core._lookup.call(null,map__10190__10192,"\uFDD0'keywordize-keys",null);
var keyfn__10194 = (cljs.core.truth_(keywordize_keys__10193)?cljs.core.keyword:cljs.core.str);
var f__10209 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2427__auto____10208 = (function iter__10202(s__10203){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10203__10206 = s__10203;
while(true){
if(cljs.core.seq.call(null,s__10203__10206))
{var k__10207 = cljs.core.first.call(null,s__10203__10206);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__10194.call(null,k__10207),thisfn.call(null,(x[k__10207]))], true),iter__10202.call(null,cljs.core.rest.call(null,s__10203__10206)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2427__auto____10208.call(null,cljs.core.js_keys.call(null,x));
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
return f__10209.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__10210){
var x = cljs.core.first(arglist__10210);
var options = cljs.core.rest(arglist__10210);
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
var mem__10215 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__10219__delegate = function (args){
var temp__3971__auto____10216 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__10215),args,null);
if(cljs.core.truth_(temp__3971__auto____10216))
{var v__10217 = temp__3971__auto____10216;
return v__10217;
} else
{var ret__10218 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__10215,cljs.core.assoc,args,ret__10218);
return ret__10218;
}
};
var G__10219 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10219__delegate.call(this, args);
};
G__10219.cljs$lang$maxFixedArity = 0;
G__10219.cljs$lang$applyTo = (function (arglist__10220){
var args = cljs.core.seq(arglist__10220);;
return G__10219__delegate(args);
});
G__10219.cljs$lang$arity$variadic = G__10219__delegate;
return G__10219;
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
var ret__10222 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__10222))
{{
var G__10223 = ret__10222;
f = G__10223;
continue;
}
} else
{return ret__10222;
}
break;
}
});
var trampoline__2 = (function() { 
var G__10224__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__10224 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10224__delegate.call(this, f, args);
};
G__10224.cljs$lang$maxFixedArity = 1;
G__10224.cljs$lang$applyTo = (function (arglist__10225){
var f = cljs.core.first(arglist__10225);
var args = cljs.core.rest(arglist__10225);
return G__10224__delegate(f, args);
});
G__10224.cljs$lang$arity$variadic = G__10224__delegate;
return G__10224;
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
var k__10227 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__10227,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__10227,cljs.core.PersistentVector.EMPTY),x));
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
var or__3824__auto____10236 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____10236)
{return or__3824__auto____10236;
} else
{var or__3824__auto____10237 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____10237)
{return or__3824__auto____10237;
} else
{var and__3822__auto____10238 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____10238)
{var and__3822__auto____10239 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____10239)
{var and__3822__auto____10240 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____10240)
{var ret__10241 = true;
var i__10242 = 0;
while(true){
if((function (){var or__3824__auto____10243 = cljs.core.not.call(null,ret__10241);
if(or__3824__auto____10243)
{return or__3824__auto____10243;
} else
{return (i__10242 === cljs.core.count.call(null,parent));
}
})())
{return ret__10241;
} else
{{
var G__10244 = isa_QMARK_.call(null,h,child.call(null,i__10242),parent.call(null,i__10242));
var G__10245 = (i__10242 + 1);
ret__10241 = G__10244;
i__10242 = G__10245;
continue;
}
}
break;
}
} else
{return and__3822__auto____10240;
}
} else
{return and__3822__auto____10239;
}
} else
{return and__3822__auto____10238;
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
var tp__10254 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__10255 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__10256 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__10257 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____10258 = ((cljs.core.contains_QMARK_.call(null,tp__10254.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__10256.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__10256.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__10254,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__10257.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__10255,parent,ta__10256),"\uFDD0'descendants":tf__10257.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__10256,tag,td__10255)});
})());
if(cljs.core.truth_(or__3824__auto____10258))
{return or__3824__auto____10258;
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
var parentMap__10263 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__10264 = (cljs.core.truth_(parentMap__10263.call(null,tag))?cljs.core.disj.call(null,parentMap__10263.call(null,tag),parent):cljs.core.set([]));
var newParents__10265 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__10264))?cljs.core.assoc.call(null,parentMap__10263,tag,childsParents__10264):cljs.core.dissoc.call(null,parentMap__10263,tag));
var deriv_seq__10266 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__10246_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__10246_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__10246_SHARP_),cljs.core.second.call(null,p1__10246_SHARP_)));
}),cljs.core.seq.call(null,newParents__10265)));
if(cljs.core.contains_QMARK_.call(null,parentMap__10263.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__10247_SHARP_,p2__10248_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__10247_SHARP_,p2__10248_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__10266));
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
var xprefs__10274 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____10276 = (cljs.core.truth_((function (){var and__3822__auto____10275 = xprefs__10274;
if(cljs.core.truth_(and__3822__auto____10275))
{return xprefs__10274.call(null,y);
} else
{return and__3822__auto____10275;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____10276))
{return or__3824__auto____10276;
} else
{var or__3824__auto____10278 = (function (){var ps__10277 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__10277) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__10277),prefer_table)))
{} else
{}
{
var G__10281 = cljs.core.rest.call(null,ps__10277);
ps__10277 = G__10281;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____10278))
{return or__3824__auto____10278;
} else
{var or__3824__auto____10280 = (function (){var ps__10279 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__10279) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__10279),y,prefer_table)))
{} else
{}
{
var G__10282 = cljs.core.rest.call(null,ps__10279);
ps__10279 = G__10282;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____10280))
{return or__3824__auto____10280;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____10284 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____10284))
{return or__3824__auto____10284;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__10302 = cljs.core.reduce.call(null,(function (be,p__10294){
var vec__10295__10296 = p__10294;
var k__10297 = cljs.core.nth.call(null,vec__10295__10296,0,null);
var ___10298 = cljs.core.nth.call(null,vec__10295__10296,1,null);
var e__10299 = vec__10295__10296;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__10297))
{var be2__10301 = (cljs.core.truth_((function (){var or__3824__auto____10300 = (be == null);
if(or__3824__auto____10300)
{return or__3824__auto____10300;
} else
{return cljs.core.dominates.call(null,k__10297,cljs.core.first.call(null,be),prefer_table);
}
})())?e__10299:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__10301),k__10297,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__10297),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__10301)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__10301;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__10302))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__10302));
return cljs.core.second.call(null,best_entry__10302);
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
if((function (){var and__3822__auto____10306 = mf;
if(and__3822__auto____10306)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____10306;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{return (function (){var or__3824__auto____10307 = (cljs.core._reset[goog.typeOf(mf)]);
if(or__3824__auto____10307)
{return or__3824__auto____10307;
} else
{var or__3824__auto____10308 = (cljs.core._reset["_"]);
if(or__3824__auto____10308)
{return or__3824__auto____10308;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____10312 = mf;
if(and__3822__auto____10312)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____10312;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{return (function (){var or__3824__auto____10313 = (cljs.core._add_method[goog.typeOf(mf)]);
if(or__3824__auto____10313)
{return or__3824__auto____10313;
} else
{var or__3824__auto____10314 = (cljs.core._add_method["_"]);
if(or__3824__auto____10314)
{return or__3824__auto____10314;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____10318 = mf;
if(and__3822__auto____10318)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____10318;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____10319 = (cljs.core._remove_method[goog.typeOf(mf)]);
if(or__3824__auto____10319)
{return or__3824__auto____10319;
} else
{var or__3824__auto____10320 = (cljs.core._remove_method["_"]);
if(or__3824__auto____10320)
{return or__3824__auto____10320;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____10324 = mf;
if(and__3822__auto____10324)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____10324;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3824__auto____10325 = (cljs.core._prefer_method[goog.typeOf(mf)]);
if(or__3824__auto____10325)
{return or__3824__auto____10325;
} else
{var or__3824__auto____10326 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____10326)
{return or__3824__auto____10326;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____10330 = mf;
if(and__3822__auto____10330)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____10330;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____10331 = (cljs.core._get_method[goog.typeOf(mf)]);
if(or__3824__auto____10331)
{return or__3824__auto____10331;
} else
{var or__3824__auto____10332 = (cljs.core._get_method["_"]);
if(or__3824__auto____10332)
{return or__3824__auto____10332;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____10336 = mf;
if(and__3822__auto____10336)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____10336;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{return (function (){var or__3824__auto____10337 = (cljs.core._methods[goog.typeOf(mf)]);
if(or__3824__auto____10337)
{return or__3824__auto____10337;
} else
{var or__3824__auto____10338 = (cljs.core._methods["_"]);
if(or__3824__auto____10338)
{return or__3824__auto____10338;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____10342 = mf;
if(and__3822__auto____10342)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____10342;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{return (function (){var or__3824__auto____10343 = (cljs.core._prefers[goog.typeOf(mf)]);
if(or__3824__auto____10343)
{return or__3824__auto____10343;
} else
{var or__3824__auto____10344 = (cljs.core._prefers["_"]);
if(or__3824__auto____10344)
{return or__3824__auto____10344;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____10348 = mf;
if(and__3822__auto____10348)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____10348;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{return (function (){var or__3824__auto____10349 = (cljs.core._dispatch[goog.typeOf(mf)]);
if(or__3824__auto____10349)
{return or__3824__auto____10349;
} else
{var or__3824__auto____10350 = (cljs.core._dispatch["_"]);
if(or__3824__auto____10350)
{return or__3824__auto____10350;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
void 0;cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__10353 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__10354 = cljs.core._get_method.call(null,mf,dispatch_val__10353);
if(cljs.core.truth_(target_fn__10354))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__10353)].join('')));
}
return cljs.core.apply.call(null,target_fn__10354,args);
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
var this__10355 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__10356 = this;
cljs.core.swap_BANG_.call(null,this__10356.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10356.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10356.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10356.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__10357 = this;
cljs.core.swap_BANG_.call(null,this__10357.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__10357.method_cache,this__10357.method_table,this__10357.cached_hierarchy,this__10357.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__10358 = this;
cljs.core.swap_BANG_.call(null,this__10358.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__10358.method_cache,this__10358.method_table,this__10358.cached_hierarchy,this__10358.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__10359 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__10359.cached_hierarchy),cljs.core.deref.call(null,this__10359.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__10359.method_cache,this__10359.method_table,this__10359.cached_hierarchy,this__10359.hierarchy);
}
var temp__3971__auto____10360 = cljs.core.deref.call(null,this__10359.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____10360))
{var target_fn__10361 = temp__3971__auto____10360;
return target_fn__10361;
} else
{var temp__3971__auto____10362 = cljs.core.find_and_cache_best_method.call(null,this__10359.name,dispatch_val,this__10359.hierarchy,this__10359.method_table,this__10359.prefer_table,this__10359.method_cache,this__10359.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____10362))
{var target_fn__10363 = temp__3971__auto____10362;
return target_fn__10363;
} else
{return cljs.core.deref.call(null,this__10359.method_table).call(null,this__10359.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__10364 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__10364.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__10364.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__10364.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__10364.method_cache,this__10364.method_table,this__10364.cached_hierarchy,this__10364.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__10365 = this;
return cljs.core.deref.call(null,this__10365.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__10366 = this;
return cljs.core.deref.call(null,this__10366.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__10367 = this;
return cljs.core.do_dispatch.call(null,mf,this__10367.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__10369__delegate = function (_,args){
var self__10368 = this;
return cljs.core._dispatch.call(null,self__10368,args);
};
var G__10369 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10369__delegate.call(this, _, args);
};
G__10369.cljs$lang$maxFixedArity = 1;
G__10369.cljs$lang$applyTo = (function (arglist__10370){
var _ = cljs.core.first(arglist__10370);
var args = cljs.core.rest(arglist__10370);
return G__10369__delegate(_, args);
});
G__10369.cljs$lang$arity$variadic = G__10369__delegate;
return G__10369;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__10371 = this;
return cljs.core._dispatch.call(null,self__10371,args);
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
var this__10372 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_10374,_){
var this__10373 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__10373.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__10375 = this;
return (this__10375.uuid === other.uuid);
});
cljs.core.UUID.prototype.toString = (function (){
var this__10376 = this;
var this__10377 = this;
return cljs.core.pr_str.call(null,this__10377);
});
cljs.core.UUID;
