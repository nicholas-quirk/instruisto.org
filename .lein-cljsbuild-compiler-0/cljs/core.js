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
var G__6643__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__6643 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6643__delegate.call(this, array, i, idxs);
};
G__6643.cljs$lang$maxFixedArity = 2;
G__6643.cljs$lang$applyTo = (function (arglist__6644){
var array = cljs.core.first(arglist__6644);
var i = cljs.core.first(cljs.core.next(arglist__6644));
var idxs = cljs.core.rest(cljs.core.next(arglist__6644));
return G__6643__delegate(array, i, idxs);
});
G__6643.cljs$lang$arity$variadic = G__6643__delegate;
return G__6643;
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
if((function (){var and__3822__auto____6708 = this$;
if(and__3822__auto____6708)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____6708;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{return (function (){var or__3824__auto____6709 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6709)
{return or__3824__auto____6709;
} else
{var or__3824__auto____6710 = (cljs.core._invoke["_"]);
if(or__3824__auto____6710)
{return or__3824__auto____6710;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____6711 = this$;
if(and__3822__auto____6711)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____6711;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{return (function (){var or__3824__auto____6712 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6712)
{return or__3824__auto____6712;
} else
{var or__3824__auto____6713 = (cljs.core._invoke["_"]);
if(or__3824__auto____6713)
{return or__3824__auto____6713;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____6714 = this$;
if(and__3822__auto____6714)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____6714;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{return (function (){var or__3824__auto____6715 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6715)
{return or__3824__auto____6715;
} else
{var or__3824__auto____6716 = (cljs.core._invoke["_"]);
if(or__3824__auto____6716)
{return or__3824__auto____6716;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____6717 = this$;
if(and__3822__auto____6717)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____6717;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{return (function (){var or__3824__auto____6718 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6718)
{return or__3824__auto____6718;
} else
{var or__3824__auto____6719 = (cljs.core._invoke["_"]);
if(or__3824__auto____6719)
{return or__3824__auto____6719;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____6720 = this$;
if(and__3822__auto____6720)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____6720;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{return (function (){var or__3824__auto____6721 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6721)
{return or__3824__auto____6721;
} else
{var or__3824__auto____6722 = (cljs.core._invoke["_"]);
if(or__3824__auto____6722)
{return or__3824__auto____6722;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____6723 = this$;
if(and__3822__auto____6723)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____6723;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{return (function (){var or__3824__auto____6724 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6724)
{return or__3824__auto____6724;
} else
{var or__3824__auto____6725 = (cljs.core._invoke["_"]);
if(or__3824__auto____6725)
{return or__3824__auto____6725;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____6726 = this$;
if(and__3822__auto____6726)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____6726;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3824__auto____6727 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6727)
{return or__3824__auto____6727;
} else
{var or__3824__auto____6728 = (cljs.core._invoke["_"]);
if(or__3824__auto____6728)
{return or__3824__auto____6728;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____6729 = this$;
if(and__3822__auto____6729)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____6729;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3824__auto____6730 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6730)
{return or__3824__auto____6730;
} else
{var or__3824__auto____6731 = (cljs.core._invoke["_"]);
if(or__3824__auto____6731)
{return or__3824__auto____6731;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____6732 = this$;
if(and__3822__auto____6732)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____6732;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3824__auto____6733 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6733)
{return or__3824__auto____6733;
} else
{var or__3824__auto____6734 = (cljs.core._invoke["_"]);
if(or__3824__auto____6734)
{return or__3824__auto____6734;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____6735 = this$;
if(and__3822__auto____6735)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____6735;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3824__auto____6736 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6736)
{return or__3824__auto____6736;
} else
{var or__3824__auto____6737 = (cljs.core._invoke["_"]);
if(or__3824__auto____6737)
{return or__3824__auto____6737;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____6738 = this$;
if(and__3822__auto____6738)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____6738;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3824__auto____6739 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6739)
{return or__3824__auto____6739;
} else
{var or__3824__auto____6740 = (cljs.core._invoke["_"]);
if(or__3824__auto____6740)
{return or__3824__auto____6740;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____6741 = this$;
if(and__3822__auto____6741)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____6741;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3824__auto____6742 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6742)
{return or__3824__auto____6742;
} else
{var or__3824__auto____6743 = (cljs.core._invoke["_"]);
if(or__3824__auto____6743)
{return or__3824__auto____6743;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____6744 = this$;
if(and__3822__auto____6744)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____6744;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3824__auto____6745 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6745)
{return or__3824__auto____6745;
} else
{var or__3824__auto____6746 = (cljs.core._invoke["_"]);
if(or__3824__auto____6746)
{return or__3824__auto____6746;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____6747 = this$;
if(and__3822__auto____6747)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____6747;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3824__auto____6748 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6748)
{return or__3824__auto____6748;
} else
{var or__3824__auto____6749 = (cljs.core._invoke["_"]);
if(or__3824__auto____6749)
{return or__3824__auto____6749;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____6750 = this$;
if(and__3822__auto____6750)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____6750;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3824__auto____6751 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6751)
{return or__3824__auto____6751;
} else
{var or__3824__auto____6752 = (cljs.core._invoke["_"]);
if(or__3824__auto____6752)
{return or__3824__auto____6752;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____6753 = this$;
if(and__3822__auto____6753)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____6753;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3824__auto____6754 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6754)
{return or__3824__auto____6754;
} else
{var or__3824__auto____6755 = (cljs.core._invoke["_"]);
if(or__3824__auto____6755)
{return or__3824__auto____6755;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____6756 = this$;
if(and__3822__auto____6756)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____6756;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3824__auto____6757 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6757)
{return or__3824__auto____6757;
} else
{var or__3824__auto____6758 = (cljs.core._invoke["_"]);
if(or__3824__auto____6758)
{return or__3824__auto____6758;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____6759 = this$;
if(and__3822__auto____6759)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____6759;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3824__auto____6760 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6760)
{return or__3824__auto____6760;
} else
{var or__3824__auto____6761 = (cljs.core._invoke["_"]);
if(or__3824__auto____6761)
{return or__3824__auto____6761;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____6762 = this$;
if(and__3822__auto____6762)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____6762;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3824__auto____6763 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6763)
{return or__3824__auto____6763;
} else
{var or__3824__auto____6764 = (cljs.core._invoke["_"]);
if(or__3824__auto____6764)
{return or__3824__auto____6764;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____6765 = this$;
if(and__3822__auto____6765)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____6765;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3824__auto____6766 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6766)
{return or__3824__auto____6766;
} else
{var or__3824__auto____6767 = (cljs.core._invoke["_"]);
if(or__3824__auto____6767)
{return or__3824__auto____6767;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____6768 = this$;
if(and__3822__auto____6768)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____6768;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3824__auto____6769 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6769)
{return or__3824__auto____6769;
} else
{var or__3824__auto____6770 = (cljs.core._invoke["_"]);
if(or__3824__auto____6770)
{return or__3824__auto____6770;
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
if((function (){var and__3822__auto____6774 = coll;
if(and__3822__auto____6774)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____6774;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{return (function (){var or__3824__auto____6775 = (cljs.core._count[goog.typeOf(coll)]);
if(or__3824__auto____6775)
{return or__3824__auto____6775;
} else
{var or__3824__auto____6776 = (cljs.core._count["_"]);
if(or__3824__auto____6776)
{return or__3824__auto____6776;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____6780 = coll;
if(and__3822__auto____6780)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____6780;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (function (){var or__3824__auto____6781 = (cljs.core._empty[goog.typeOf(coll)]);
if(or__3824__auto____6781)
{return or__3824__auto____6781;
} else
{var or__3824__auto____6782 = (cljs.core._empty["_"]);
if(or__3824__auto____6782)
{return or__3824__auto____6782;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____6786 = coll;
if(and__3822__auto____6786)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____6786;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{return (function (){var or__3824__auto____6787 = (cljs.core._conj[goog.typeOf(coll)]);
if(or__3824__auto____6787)
{return or__3824__auto____6787;
} else
{var or__3824__auto____6788 = (cljs.core._conj["_"]);
if(or__3824__auto____6788)
{return or__3824__auto____6788;
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
if((function (){var and__3822__auto____6795 = coll;
if(and__3822__auto____6795)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____6795;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return (function (){var or__3824__auto____6796 = (cljs.core._nth[goog.typeOf(coll)]);
if(or__3824__auto____6796)
{return or__3824__auto____6796;
} else
{var or__3824__auto____6797 = (cljs.core._nth["_"]);
if(or__3824__auto____6797)
{return or__3824__auto____6797;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____6798 = coll;
if(and__3822__auto____6798)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____6798;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{return (function (){var or__3824__auto____6799 = (cljs.core._nth[goog.typeOf(coll)]);
if(or__3824__auto____6799)
{return or__3824__auto____6799;
} else
{var or__3824__auto____6800 = (cljs.core._nth["_"]);
if(or__3824__auto____6800)
{return or__3824__auto____6800;
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
if((function (){var and__3822__auto____6804 = coll;
if(and__3822__auto____6804)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____6804;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____6805 = (cljs.core._first[goog.typeOf(coll)]);
if(or__3824__auto____6805)
{return or__3824__auto____6805;
} else
{var or__3824__auto____6806 = (cljs.core._first["_"]);
if(or__3824__auto____6806)
{return or__3824__auto____6806;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____6810 = coll;
if(and__3822__auto____6810)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____6810;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{return (function (){var or__3824__auto____6811 = (cljs.core._rest[goog.typeOf(coll)]);
if(or__3824__auto____6811)
{return or__3824__auto____6811;
} else
{var or__3824__auto____6812 = (cljs.core._rest["_"]);
if(or__3824__auto____6812)
{return or__3824__auto____6812;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____6816 = coll;
if(and__3822__auto____6816)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____6816;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{return (function (){var or__3824__auto____6817 = (cljs.core._next[goog.typeOf(coll)]);
if(or__3824__auto____6817)
{return or__3824__auto____6817;
} else
{var or__3824__auto____6818 = (cljs.core._next["_"]);
if(or__3824__auto____6818)
{return or__3824__auto____6818;
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
if((function (){var and__3822__auto____6825 = o;
if(and__3822__auto____6825)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____6825;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{return (function (){var or__3824__auto____6826 = (cljs.core._lookup[goog.typeOf(o)]);
if(or__3824__auto____6826)
{return or__3824__auto____6826;
} else
{var or__3824__auto____6827 = (cljs.core._lookup["_"]);
if(or__3824__auto____6827)
{return or__3824__auto____6827;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____6828 = o;
if(and__3822__auto____6828)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____6828;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{return (function (){var or__3824__auto____6829 = (cljs.core._lookup[goog.typeOf(o)]);
if(or__3824__auto____6829)
{return or__3824__auto____6829;
} else
{var or__3824__auto____6830 = (cljs.core._lookup["_"]);
if(or__3824__auto____6830)
{return or__3824__auto____6830;
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
if((function (){var and__3822__auto____6834 = coll;
if(and__3822__auto____6834)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____6834;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{return (function (){var or__3824__auto____6835 = (cljs.core._contains_key_QMARK_[goog.typeOf(coll)]);
if(or__3824__auto____6835)
{return or__3824__auto____6835;
} else
{var or__3824__auto____6836 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____6836)
{return or__3824__auto____6836;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____6840 = coll;
if(and__3822__auto____6840)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____6840;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{return (function (){var or__3824__auto____6841 = (cljs.core._assoc[goog.typeOf(coll)]);
if(or__3824__auto____6841)
{return or__3824__auto____6841;
} else
{var or__3824__auto____6842 = (cljs.core._assoc["_"]);
if(or__3824__auto____6842)
{return or__3824__auto____6842;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
void 0;void 0;cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____6846 = coll;
if(and__3822__auto____6846)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____6846;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{return (function (){var or__3824__auto____6847 = (cljs.core._dissoc[goog.typeOf(coll)]);
if(or__3824__auto____6847)
{return or__3824__auto____6847;
} else
{var or__3824__auto____6848 = (cljs.core._dissoc["_"]);
if(or__3824__auto____6848)
{return or__3824__auto____6848;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
void 0;void 0;cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____6852 = coll;
if(and__3822__auto____6852)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____6852;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{return (function (){var or__3824__auto____6853 = (cljs.core._key[goog.typeOf(coll)]);
if(or__3824__auto____6853)
{return or__3824__auto____6853;
} else
{var or__3824__auto____6854 = (cljs.core._key["_"]);
if(or__3824__auto____6854)
{return or__3824__auto____6854;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____6858 = coll;
if(and__3822__auto____6858)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____6858;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{return (function (){var or__3824__auto____6859 = (cljs.core._val[goog.typeOf(coll)]);
if(or__3824__auto____6859)
{return or__3824__auto____6859;
} else
{var or__3824__auto____6860 = (cljs.core._val["_"]);
if(or__3824__auto____6860)
{return or__3824__auto____6860;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____6864 = coll;
if(and__3822__auto____6864)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____6864;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{return (function (){var or__3824__auto____6865 = (cljs.core._disjoin[goog.typeOf(coll)]);
if(or__3824__auto____6865)
{return or__3824__auto____6865;
} else
{var or__3824__auto____6866 = (cljs.core._disjoin["_"]);
if(or__3824__auto____6866)
{return or__3824__auto____6866;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
void 0;void 0;cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____6870 = coll;
if(and__3822__auto____6870)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____6870;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{return (function (){var or__3824__auto____6871 = (cljs.core._peek[goog.typeOf(coll)]);
if(or__3824__auto____6871)
{return or__3824__auto____6871;
} else
{var or__3824__auto____6872 = (cljs.core._peek["_"]);
if(or__3824__auto____6872)
{return or__3824__auto____6872;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____6876 = coll;
if(and__3822__auto____6876)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____6876;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{return (function (){var or__3824__auto____6877 = (cljs.core._pop[goog.typeOf(coll)]);
if(or__3824__auto____6877)
{return or__3824__auto____6877;
} else
{var or__3824__auto____6878 = (cljs.core._pop["_"]);
if(or__3824__auto____6878)
{return or__3824__auto____6878;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____6882 = coll;
if(and__3822__auto____6882)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____6882;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{return (function (){var or__3824__auto____6883 = (cljs.core._assoc_n[goog.typeOf(coll)]);
if(or__3824__auto____6883)
{return or__3824__auto____6883;
} else
{var or__3824__auto____6884 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____6884)
{return or__3824__auto____6884;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
void 0;void 0;cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____6888 = o;
if(and__3822__auto____6888)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____6888;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{return (function (){var or__3824__auto____6889 = (cljs.core._deref[goog.typeOf(o)]);
if(or__3824__auto____6889)
{return or__3824__auto____6889;
} else
{var or__3824__auto____6890 = (cljs.core._deref["_"]);
if(or__3824__auto____6890)
{return or__3824__auto____6890;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____6894 = o;
if(and__3822__auto____6894)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____6894;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{return (function (){var or__3824__auto____6895 = (cljs.core._deref_with_timeout[goog.typeOf(o)]);
if(or__3824__auto____6895)
{return or__3824__auto____6895;
} else
{var or__3824__auto____6896 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____6896)
{return or__3824__auto____6896;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
void 0;void 0;cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____6900 = o;
if(and__3822__auto____6900)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____6900;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{return (function (){var or__3824__auto____6901 = (cljs.core._meta[goog.typeOf(o)]);
if(or__3824__auto____6901)
{return or__3824__auto____6901;
} else
{var or__3824__auto____6902 = (cljs.core._meta["_"]);
if(or__3824__auto____6902)
{return or__3824__auto____6902;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____6906 = o;
if(and__3822__auto____6906)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____6906;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{return (function (){var or__3824__auto____6907 = (cljs.core._with_meta[goog.typeOf(o)]);
if(or__3824__auto____6907)
{return or__3824__auto____6907;
} else
{var or__3824__auto____6908 = (cljs.core._with_meta["_"]);
if(or__3824__auto____6908)
{return or__3824__auto____6908;
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
if((function (){var and__3822__auto____6915 = coll;
if(and__3822__auto____6915)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____6915;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{return (function (){var or__3824__auto____6916 = (cljs.core._reduce[goog.typeOf(coll)]);
if(or__3824__auto____6916)
{return or__3824__auto____6916;
} else
{var or__3824__auto____6917 = (cljs.core._reduce["_"]);
if(or__3824__auto____6917)
{return or__3824__auto____6917;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____6918 = coll;
if(and__3822__auto____6918)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____6918;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{return (function (){var or__3824__auto____6919 = (cljs.core._reduce[goog.typeOf(coll)]);
if(or__3824__auto____6919)
{return or__3824__auto____6919;
} else
{var or__3824__auto____6920 = (cljs.core._reduce["_"]);
if(or__3824__auto____6920)
{return or__3824__auto____6920;
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
if((function (){var and__3822__auto____6924 = coll;
if(and__3822__auto____6924)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____6924;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{return (function (){var or__3824__auto____6925 = (cljs.core._kv_reduce[goog.typeOf(coll)]);
if(or__3824__auto____6925)
{return or__3824__auto____6925;
} else
{var or__3824__auto____6926 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____6926)
{return or__3824__auto____6926;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
void 0;void 0;cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____6930 = o;
if(and__3822__auto____6930)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____6930;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{return (function (){var or__3824__auto____6931 = (cljs.core._equiv[goog.typeOf(o)]);
if(or__3824__auto____6931)
{return or__3824__auto____6931;
} else
{var or__3824__auto____6932 = (cljs.core._equiv["_"]);
if(or__3824__auto____6932)
{return or__3824__auto____6932;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
void 0;void 0;cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____6936 = o;
if(and__3822__auto____6936)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____6936;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{return (function (){var or__3824__auto____6937 = (cljs.core._hash[goog.typeOf(o)]);
if(or__3824__auto____6937)
{return or__3824__auto____6937;
} else
{var or__3824__auto____6938 = (cljs.core._hash["_"]);
if(or__3824__auto____6938)
{return or__3824__auto____6938;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____6942 = o;
if(and__3822__auto____6942)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____6942;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{return (function (){var or__3824__auto____6943 = (cljs.core._seq[goog.typeOf(o)]);
if(or__3824__auto____6943)
{return or__3824__auto____6943;
} else
{var or__3824__auto____6944 = (cljs.core._seq["_"]);
if(or__3824__auto____6944)
{return or__3824__auto____6944;
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
if((function (){var and__3822__auto____6948 = coll;
if(and__3822__auto____6948)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____6948;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{return (function (){var or__3824__auto____6949 = (cljs.core._rseq[goog.typeOf(coll)]);
if(or__3824__auto____6949)
{return or__3824__auto____6949;
} else
{var or__3824__auto____6950 = (cljs.core._rseq["_"]);
if(or__3824__auto____6950)
{return or__3824__auto____6950;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____6954 = coll;
if(and__3822__auto____6954)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____6954;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{return (function (){var or__3824__auto____6955 = (cljs.core._sorted_seq[goog.typeOf(coll)]);
if(or__3824__auto____6955)
{return or__3824__auto____6955;
} else
{var or__3824__auto____6956 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____6956)
{return or__3824__auto____6956;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____6960 = coll;
if(and__3822__auto____6960)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____6960;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{return (function (){var or__3824__auto____6961 = (cljs.core._sorted_seq_from[goog.typeOf(coll)]);
if(or__3824__auto____6961)
{return or__3824__auto____6961;
} else
{var or__3824__auto____6962 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____6962)
{return or__3824__auto____6962;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____6966 = coll;
if(and__3822__auto____6966)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____6966;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{return (function (){var or__3824__auto____6967 = (cljs.core._entry_key[goog.typeOf(coll)]);
if(or__3824__auto____6967)
{return or__3824__auto____6967;
} else
{var or__3824__auto____6968 = (cljs.core._entry_key["_"]);
if(or__3824__auto____6968)
{return or__3824__auto____6968;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____6972 = coll;
if(and__3822__auto____6972)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____6972;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{return (function (){var or__3824__auto____6973 = (cljs.core._comparator[goog.typeOf(coll)]);
if(or__3824__auto____6973)
{return or__3824__auto____6973;
} else
{var or__3824__auto____6974 = (cljs.core._comparator["_"]);
if(or__3824__auto____6974)
{return or__3824__auto____6974;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____6978 = o;
if(and__3822__auto____6978)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____6978;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{return (function (){var or__3824__auto____6979 = (cljs.core._pr_seq[goog.typeOf(o)]);
if(or__3824__auto____6979)
{return or__3824__auto____6979;
} else
{var or__3824__auto____6980 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____6980)
{return or__3824__auto____6980;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
void 0;void 0;cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____6984 = d;
if(and__3822__auto____6984)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____6984;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{return (function (){var or__3824__auto____6985 = (cljs.core._realized_QMARK_[goog.typeOf(d)]);
if(or__3824__auto____6985)
{return or__3824__auto____6985;
} else
{var or__3824__auto____6986 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____6986)
{return or__3824__auto____6986;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
void 0;void 0;cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____6990 = this$;
if(and__3822__auto____6990)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____6990;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{return (function (){var or__3824__auto____6991 = (cljs.core._notify_watches[goog.typeOf(this$)]);
if(or__3824__auto____6991)
{return or__3824__auto____6991;
} else
{var or__3824__auto____6992 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____6992)
{return or__3824__auto____6992;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____6996 = this$;
if(and__3822__auto____6996)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____6996;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{return (function (){var or__3824__auto____6997 = (cljs.core._add_watch[goog.typeOf(this$)]);
if(or__3824__auto____6997)
{return or__3824__auto____6997;
} else
{var or__3824__auto____6998 = (cljs.core._add_watch["_"]);
if(or__3824__auto____6998)
{return or__3824__auto____6998;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____7002 = this$;
if(and__3822__auto____7002)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____7002;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{return (function (){var or__3824__auto____7003 = (cljs.core._remove_watch[goog.typeOf(this$)]);
if(or__3824__auto____7003)
{return or__3824__auto____7003;
} else
{var or__3824__auto____7004 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____7004)
{return or__3824__auto____7004;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
void 0;void 0;cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____7008 = coll;
if(and__3822__auto____7008)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____7008;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{return (function (){var or__3824__auto____7009 = (cljs.core._as_transient[goog.typeOf(coll)]);
if(or__3824__auto____7009)
{return or__3824__auto____7009;
} else
{var or__3824__auto____7010 = (cljs.core._as_transient["_"]);
if(or__3824__auto____7010)
{return or__3824__auto____7010;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____7014 = tcoll;
if(and__3822__auto____7014)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____7014;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{return (function (){var or__3824__auto____7015 = (cljs.core._conj_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____7015)
{return or__3824__auto____7015;
} else
{var or__3824__auto____7016 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____7016)
{return or__3824__auto____7016;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____7020 = tcoll;
if(and__3822__auto____7020)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____7020;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3824__auto____7021 = (cljs.core._persistent_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____7021)
{return or__3824__auto____7021;
} else
{var or__3824__auto____7022 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____7022)
{return or__3824__auto____7022;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____7026 = tcoll;
if(and__3822__auto____7026)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____7026;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{return (function (){var or__3824__auto____7027 = (cljs.core._assoc_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____7027)
{return or__3824__auto____7027;
} else
{var or__3824__auto____7028 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____7028)
{return or__3824__auto____7028;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
void 0;void 0;cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____7032 = tcoll;
if(and__3822__auto____7032)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____7032;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{return (function (){var or__3824__auto____7033 = (cljs.core._dissoc_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____7033)
{return or__3824__auto____7033;
} else
{var or__3824__auto____7034 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____7034)
{return or__3824__auto____7034;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
void 0;void 0;cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____7038 = tcoll;
if(and__3822__auto____7038)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____7038;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{return (function (){var or__3824__auto____7039 = (cljs.core._assoc_n_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____7039)
{return or__3824__auto____7039;
} else
{var or__3824__auto____7040 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____7040)
{return or__3824__auto____7040;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____7044 = tcoll;
if(and__3822__auto____7044)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____7044;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3824__auto____7045 = (cljs.core._pop_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____7045)
{return or__3824__auto____7045;
} else
{var or__3824__auto____7046 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____7046)
{return or__3824__auto____7046;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____7050 = tcoll;
if(and__3822__auto____7050)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____7050;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{return (function (){var or__3824__auto____7051 = (cljs.core._disjoin_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____7051)
{return or__3824__auto____7051;
} else
{var or__3824__auto____7052 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____7052)
{return or__3824__auto____7052;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
void 0;void 0;cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____7056 = x;
if(and__3822__auto____7056)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____7056;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{return (function (){var or__3824__auto____7057 = (cljs.core._compare[goog.typeOf(x)]);
if(or__3824__auto____7057)
{return or__3824__auto____7057;
} else
{var or__3824__auto____7058 = (cljs.core._compare["_"]);
if(or__3824__auto____7058)
{return or__3824__auto____7058;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
void 0;void 0;cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____7062 = coll;
if(and__3822__auto____7062)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____7062;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____7063 = (cljs.core._drop_first[goog.typeOf(coll)]);
if(or__3824__auto____7063)
{return or__3824__auto____7063;
} else
{var or__3824__auto____7064 = (cljs.core._drop_first["_"]);
if(or__3824__auto____7064)
{return or__3824__auto____7064;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____7068 = coll;
if(and__3822__auto____7068)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____7068;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____7069 = (cljs.core._chunked_first[goog.typeOf(coll)]);
if(or__3824__auto____7069)
{return or__3824__auto____7069;
} else
{var or__3824__auto____7070 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____7070)
{return or__3824__auto____7070;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____7074 = coll;
if(and__3822__auto____7074)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____7074;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{return (function (){var or__3824__auto____7075 = (cljs.core._chunked_rest[goog.typeOf(coll)]);
if(or__3824__auto____7075)
{return or__3824__auto____7075;
} else
{var or__3824__auto____7076 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____7076)
{return or__3824__auto____7076;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____7080 = coll;
if(and__3822__auto____7080)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____7080;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{return (function (){var or__3824__auto____7081 = (cljs.core._chunked_next[goog.typeOf(coll)]);
if(or__3824__auto____7081)
{return or__3824__auto____7081;
} else
{var or__3824__auto____7082 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____7082)
{return or__3824__auto____7082;
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
var or__3824__auto____7084 = (x === y);
if(or__3824__auto____7084)
{return or__3824__auto____7084;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__7085__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__7086 = y;
var G__7087 = cljs.core.first.call(null,more);
var G__7088 = cljs.core.next.call(null,more);
x = G__7086;
y = G__7087;
more = G__7088;
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
var G__7085 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7085__delegate.call(this, x, y, more);
};
G__7085.cljs$lang$maxFixedArity = 2;
G__7085.cljs$lang$applyTo = (function (arglist__7089){
var x = cljs.core.first(arglist__7089);
var y = cljs.core.first(cljs.core.next(arglist__7089));
var more = cljs.core.rest(cljs.core.next(arglist__7089));
return G__7085__delegate(x, y, more);
});
G__7085.cljs$lang$arity$variadic = G__7085__delegate;
return G__7085;
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
var G__7090 = null;
var G__7090__2 = (function (o,k){
return null;
});
var G__7090__3 = (function (o,k,not_found){
return not_found;
});
G__7090 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__7090__2.call(this,o,k);
case 3:
return G__7090__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7090;
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
var G__7091 = null;
var G__7091__2 = (function (_,f){
return f.call(null);
});
var G__7091__3 = (function (_,f,start){
return start;
});
G__7091 = function(_,f,start){
switch(arguments.length){
case 2:
return G__7091__2.call(this,_,f);
case 3:
return G__7091__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7091;
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
var G__7092 = null;
var G__7092__2 = (function (_,n){
return null;
});
var G__7092__3 = (function (_,n,not_found){
return not_found;
});
G__7092 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__7092__2.call(this,_,n);
case 3:
return G__7092__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7092;
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
var cnt__7105 = cljs.core._count.call(null,cicoll);
if((cnt__7105 === 0))
{return f.call(null);
} else
{var val__7106 = cljs.core._nth.call(null,cicoll,0);
var n__7107 = 1;
while(true){
if((n__7107 < cnt__7105))
{var nval__7108 = f.call(null,val__7106,cljs.core._nth.call(null,cicoll,n__7107));
if(cljs.core.reduced_QMARK_.call(null,nval__7108))
{return cljs.core.deref.call(null,nval__7108);
} else
{{
var G__7117 = nval__7108;
var G__7118 = (n__7107 + 1);
val__7106 = G__7117;
n__7107 = G__7118;
continue;
}
}
} else
{return val__7106;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__7109 = cljs.core._count.call(null,cicoll);
var val__7110 = val;
var n__7111 = 0;
while(true){
if((n__7111 < cnt__7109))
{var nval__7112 = f.call(null,val__7110,cljs.core._nth.call(null,cicoll,n__7111));
if(cljs.core.reduced_QMARK_.call(null,nval__7112))
{return cljs.core.deref.call(null,nval__7112);
} else
{{
var G__7119 = nval__7112;
var G__7120 = (n__7111 + 1);
val__7110 = G__7119;
n__7111 = G__7120;
continue;
}
}
} else
{return val__7110;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__7113 = cljs.core._count.call(null,cicoll);
var val__7114 = val;
var n__7115 = idx;
while(true){
if((n__7115 < cnt__7113))
{var nval__7116 = f.call(null,val__7114,cljs.core._nth.call(null,cicoll,n__7115));
if(cljs.core.reduced_QMARK_.call(null,nval__7116))
{return cljs.core.deref.call(null,nval__7116);
} else
{{
var G__7121 = nval__7116;
var G__7122 = (n__7115 + 1);
val__7114 = G__7121;
n__7115 = G__7122;
continue;
}
}
} else
{return val__7114;
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
var cnt__7135 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__7136 = (arr[0]);
var n__7137 = 1;
while(true){
if((n__7137 < cnt__7135))
{var nval__7138 = f.call(null,val__7136,(arr[n__7137]));
if(cljs.core.reduced_QMARK_.call(null,nval__7138))
{return cljs.core.deref.call(null,nval__7138);
} else
{{
var G__7147 = nval__7138;
var G__7148 = (n__7137 + 1);
val__7136 = G__7147;
n__7137 = G__7148;
continue;
}
}
} else
{return val__7136;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__7139 = arr.length;
var val__7140 = val;
var n__7141 = 0;
while(true){
if((n__7141 < cnt__7139))
{var nval__7142 = f.call(null,val__7140,(arr[n__7141]));
if(cljs.core.reduced_QMARK_.call(null,nval__7142))
{return cljs.core.deref.call(null,nval__7142);
} else
{{
var G__7149 = nval__7142;
var G__7150 = (n__7141 + 1);
val__7140 = G__7149;
n__7141 = G__7150;
continue;
}
}
} else
{return val__7140;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__7143 = arr.length;
var val__7144 = val;
var n__7145 = idx;
while(true){
if((n__7145 < cnt__7143))
{var nval__7146 = f.call(null,val__7144,(arr[n__7145]));
if(cljs.core.reduced_QMARK_.call(null,nval__7146))
{return cljs.core.deref.call(null,nval__7146);
} else
{{
var G__7151 = nval__7146;
var G__7152 = (n__7145 + 1);
val__7144 = G__7151;
n__7145 = G__7152;
continue;
}
}
} else
{return val__7144;
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
var this__7153 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__7154 = this;
if(((this__7154.i + 1) < this__7154.a.length))
{return (new cljs.core.IndexedSeq(this__7154.a,(this__7154.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7155 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__7156 = this;
var c__7157 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__7157 > 0))
{return (new cljs.core.RSeq(coll,(c__7157 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__7158 = this;
var this__7159 = this;
return cljs.core.pr_str.call(null,this__7159);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__7160 = this;
if(cljs.core.counted_QMARK_.call(null,this__7160.a))
{return cljs.core.ci_reduce.call(null,this__7160.a,f,(this__7160.a[this__7160.i]),(this__7160.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__7160.a[this__7160.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7161 = this;
if(cljs.core.counted_QMARK_.call(null,this__7161.a))
{return cljs.core.ci_reduce.call(null,this__7161.a,f,start,this__7161.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__7162 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7163 = this;
return (this__7163.a.length - this__7163.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__7164 = this;
return (this__7164.a[this__7164.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__7165 = this;
if(((this__7165.i + 1) < this__7165.a.length))
{return (new cljs.core.IndexedSeq(this__7165.a,(this__7165.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7166 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__7167 = this;
var i__7168 = (n + this__7167.i);
if((i__7168 < this__7167.a.length))
{return (this__7167.a[i__7168]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__7169 = this;
var i__7170 = (n + this__7169.i);
if((i__7170 < this__7169.a.length))
{return (this__7169.a[i__7170]);
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
var G__7171 = null;
var G__7171__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__7171__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__7171 = function(array,f,start){
switch(arguments.length){
case 2:
return G__7171__2.call(this,array,f);
case 3:
return G__7171__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7171;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__7172 = null;
var G__7172__2 = (function (array,k){
return (array[k]);
});
var G__7172__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__7172 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__7172__2.call(this,array,k);
case 3:
return G__7172__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7172;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__7173 = null;
var G__7173__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__7173__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__7173 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__7173__2.call(this,array,n);
case 3:
return G__7173__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7173;
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
var this__7174 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7175 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__7176 = this;
var this__7177 = this;
return cljs.core.pr_str.call(null,this__7177);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7178 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7179 = this;
return (this__7179.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7180 = this;
return cljs.core._nth.call(null,this__7180.ci,this__7180.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7181 = this;
if((this__7181.i > 0))
{return (new cljs.core.RSeq(this__7181.ci,(this__7181.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7182 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__7183 = this;
return (new cljs.core.RSeq(this__7183.ci,this__7183.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7184 = this;
return this__7184.meta;
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
{if((function (){var G__7188__7189 = coll;
if(G__7188__7189)
{if((function (){var or__3824__auto____7190 = (G__7188__7189.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____7190)
{return or__3824__auto____7190;
} else
{return G__7188__7189.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__7188__7189.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__7188__7189);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__7188__7189);
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
{if((function (){var G__7195__7196 = coll;
if(G__7195__7196)
{if((function (){var or__3824__auto____7197 = (G__7195__7196.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7197)
{return or__3824__auto____7197;
} else
{return G__7195__7196.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7195__7196.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7195__7196);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7195__7196);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__7198 = cljs.core.seq.call(null,coll);
if((s__7198 == null))
{return null;
} else
{return cljs.core._first.call(null,s__7198);
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
{return cljs.core._rest.call(null,coll);
} else
{var s__7206 = cljs.core.seq.call(null,coll);
if(!((s__7206 == null)))
{return cljs.core._rest.call(null,s__7206);
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
{if((function (){var G__7210__7211 = coll;
if(G__7210__7211)
{if((function (){var or__3824__auto____7212 = (G__7210__7211.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____7212)
{return or__3824__auto____7212;
} else
{return G__7210__7211.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__7210__7211.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__7210__7211);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__7210__7211);
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
var sn__7214 = cljs.core.next.call(null,s);
if(!((sn__7214 == null)))
{{
var G__7215 = sn__7214;
s = G__7215;
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
var G__7216__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__7217 = conj.call(null,coll,x);
var G__7218 = cljs.core.first.call(null,xs);
var G__7219 = cljs.core.next.call(null,xs);
coll = G__7217;
x = G__7218;
xs = G__7219;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__7216 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7216__delegate.call(this, coll, x, xs);
};
G__7216.cljs$lang$maxFixedArity = 2;
G__7216.cljs$lang$applyTo = (function (arglist__7220){
var coll = cljs.core.first(arglist__7220);
var x = cljs.core.first(cljs.core.next(arglist__7220));
var xs = cljs.core.rest(cljs.core.next(arglist__7220));
return G__7216__delegate(coll, x, xs);
});
G__7216.cljs$lang$arity$variadic = G__7216__delegate;
return G__7216;
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
var s__7223 = cljs.core.seq.call(null,coll);
var acc__7224 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__7223))
{return (acc__7224 + cljs.core._count.call(null,s__7223));
} else
{{
var G__7225 = cljs.core.next.call(null,s__7223);
var G__7226 = (acc__7224 + 1);
s__7223 = G__7225;
acc__7224 = G__7226;
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
{if((function (){var G__7233__7234 = coll;
if(G__7233__7234)
{if((function (){var or__3824__auto____7235 = (G__7233__7234.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7235)
{return or__3824__auto____7235;
} else
{return G__7233__7234.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7233__7234.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7233__7234);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7233__7234);
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
{if((function (){var G__7236__7237 = coll;
if(G__7236__7237)
{if((function (){var or__3824__auto____7238 = (G__7236__7237.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7238)
{return or__3824__auto____7238;
} else
{return G__7236__7237.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7236__7237.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7236__7237);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7236__7237);
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
var G__7241__delegate = function (coll,k,v,kvs){
while(true){
var ret__7240 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__7242 = ret__7240;
var G__7243 = cljs.core.first.call(null,kvs);
var G__7244 = cljs.core.second.call(null,kvs);
var G__7245 = cljs.core.nnext.call(null,kvs);
coll = G__7242;
k = G__7243;
v = G__7244;
kvs = G__7245;
continue;
}
} else
{return ret__7240;
}
break;
}
};
var G__7241 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7241__delegate.call(this, coll, k, v, kvs);
};
G__7241.cljs$lang$maxFixedArity = 3;
G__7241.cljs$lang$applyTo = (function (arglist__7246){
var coll = cljs.core.first(arglist__7246);
var k = cljs.core.first(cljs.core.next(arglist__7246));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7246)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7246)));
return G__7241__delegate(coll, k, v, kvs);
});
G__7241.cljs$lang$arity$variadic = G__7241__delegate;
return G__7241;
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
var G__7249__delegate = function (coll,k,ks){
while(true){
var ret__7248 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__7250 = ret__7248;
var G__7251 = cljs.core.first.call(null,ks);
var G__7252 = cljs.core.next.call(null,ks);
coll = G__7250;
k = G__7251;
ks = G__7252;
continue;
}
} else
{return ret__7248;
}
break;
}
};
var G__7249 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7249__delegate.call(this, coll, k, ks);
};
G__7249.cljs$lang$maxFixedArity = 2;
G__7249.cljs$lang$applyTo = (function (arglist__7253){
var coll = cljs.core.first(arglist__7253);
var k = cljs.core.first(cljs.core.next(arglist__7253));
var ks = cljs.core.rest(cljs.core.next(arglist__7253));
return G__7249__delegate(coll, k, ks);
});
G__7249.cljs$lang$arity$variadic = G__7249__delegate;
return G__7249;
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
if((function (){var G__7257__7258 = o;
if(G__7257__7258)
{if((function (){var or__3824__auto____7259 = (G__7257__7258.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____7259)
{return or__3824__auto____7259;
} else
{return G__7257__7258.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__7257__7258.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__7257__7258);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__7257__7258);
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
var G__7262__delegate = function (coll,k,ks){
while(true){
var ret__7261 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__7263 = ret__7261;
var G__7264 = cljs.core.first.call(null,ks);
var G__7265 = cljs.core.next.call(null,ks);
coll = G__7263;
k = G__7264;
ks = G__7265;
continue;
}
} else
{return ret__7261;
}
break;
}
};
var G__7262 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7262__delegate.call(this, coll, k, ks);
};
G__7262.cljs$lang$maxFixedArity = 2;
G__7262.cljs$lang$applyTo = (function (arglist__7266){
var coll = cljs.core.first(arglist__7266);
var k = cljs.core.first(cljs.core.next(arglist__7266));
var ks = cljs.core.rest(cljs.core.next(arglist__7266));
return G__7262__delegate(coll, k, ks);
});
G__7262.cljs$lang$arity$variadic = G__7262__delegate;
return G__7262;
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
var h__7268 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__7268);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__7268;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__7270 = (cljs.core.string_hash_cache[k]);
if(!((h__7270 == null)))
{return h__7270;
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
if((function (){var and__3822__auto____7272 = goog.isString(o);
if(and__3822__auto____7272)
{return check_cache;
} else
{return and__3822__auto____7272;
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
{var G__7276__7277 = x;
if(G__7276__7277)
{if((function (){var or__3824__auto____7278 = (G__7276__7277.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____7278)
{return or__3824__auto____7278;
} else
{return G__7276__7277.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__7276__7277.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__7276__7277);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__7276__7277);
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
{var G__7282__7283 = x;
if(G__7282__7283)
{if((function (){var or__3824__auto____7284 = (G__7282__7283.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____7284)
{return or__3824__auto____7284;
} else
{return G__7282__7283.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__7282__7283.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__7282__7283);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__7282__7283);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__7288__7289 = x;
if(G__7288__7289)
{if((function (){var or__3824__auto____7290 = (G__7288__7289.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____7290)
{return or__3824__auto____7290;
} else
{return G__7288__7289.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__7288__7289.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__7288__7289);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__7288__7289);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__7294__7295 = x;
if(G__7294__7295)
{if((function (){var or__3824__auto____7296 = (G__7294__7295.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____7296)
{return or__3824__auto____7296;
} else
{return G__7294__7295.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__7294__7295.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__7294__7295);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__7294__7295);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__7300__7301 = x;
if(G__7300__7301)
{if((function (){var or__3824__auto____7302 = (G__7300__7301.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____7302)
{return or__3824__auto____7302;
} else
{return G__7300__7301.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__7300__7301.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__7300__7301);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__7300__7301);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__7306__7307 = x;
if(G__7306__7307)
{if((function (){var or__3824__auto____7308 = (G__7306__7307.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7308)
{return or__3824__auto____7308;
} else
{return G__7306__7307.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7306__7307.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7306__7307);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7306__7307);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__7312__7313 = x;
if(G__7312__7313)
{if((function (){var or__3824__auto____7314 = (G__7312__7313.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7314)
{return or__3824__auto____7314;
} else
{return G__7312__7313.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7312__7313.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7312__7313);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7312__7313);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__7318__7319 = x;
if(G__7318__7319)
{if((function (){var or__3824__auto____7320 = (G__7318__7319.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____7320)
{return or__3824__auto____7320;
} else
{return G__7318__7319.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__7318__7319.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__7318__7319);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__7318__7319);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__7324__7325 = x;
if(G__7324__7325)
{if((function (){var or__3824__auto____7326 = (G__7324__7325.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____7326)
{return or__3824__auto____7326;
} else
{return G__7324__7325.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__7324__7325.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__7324__7325);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__7324__7325);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__7330__7331 = x;
if(G__7330__7331)
{if(cljs.core.truth_((function (){var or__3824__auto____7332 = null;
if(cljs.core.truth_(or__3824__auto____7332))
{return or__3824__auto____7332;
} else
{return G__7330__7331.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__7330__7331.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__7330__7331);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__7330__7331);
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
var G__7333__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__7333 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7333__delegate.call(this, keyvals);
};
G__7333.cljs$lang$maxFixedArity = 0;
G__7333.cljs$lang$applyTo = (function (arglist__7334){
var keyvals = cljs.core.seq(arglist__7334);;
return G__7333__delegate(keyvals);
});
G__7333.cljs$lang$arity$variadic = G__7333__delegate;
return G__7333;
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
var keys__7336 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__7336.push(key);
}));
return keys__7336;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__7340 = i;
var j__7341 = j;
var len__7342 = len;
while(true){
if((len__7342 === 0))
{return to;
} else
{(to[j__7341] = (from[i__7340]));
{
var G__7343 = (i__7340 + 1);
var G__7344 = (j__7341 + 1);
var G__7345 = (len__7342 - 1);
i__7340 = G__7343;
j__7341 = G__7344;
len__7342 = G__7345;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__7349 = (i + (len - 1));
var j__7350 = (j + (len - 1));
var len__7351 = len;
while(true){
if((len__7351 === 0))
{return to;
} else
{(to[j__7350] = (from[i__7349]));
{
var G__7352 = (i__7349 - 1);
var G__7353 = (j__7350 - 1);
var G__7354 = (len__7351 - 1);
i__7349 = G__7352;
j__7350 = G__7353;
len__7351 = G__7354;
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
{var G__7358__7359 = s;
if(G__7358__7359)
{if((function (){var or__3824__auto____7360 = (G__7358__7359.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7360)
{return or__3824__auto____7360;
} else
{return G__7358__7359.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7358__7359.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7358__7359);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7358__7359);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__7364__7365 = s;
if(G__7364__7365)
{if((function (){var or__3824__auto____7366 = (G__7364__7365.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____7366)
{return or__3824__auto____7366;
} else
{return G__7364__7365.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__7364__7365.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__7364__7365);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__7364__7365);
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
var and__3822__auto____7369 = goog.isString(x);
if(and__3822__auto____7369)
{return !((function (){var or__3824__auto____7370 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____7370)
{return or__3824__auto____7370;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____7369;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____7372 = goog.isString(x);
if(and__3822__auto____7372)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____7372;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____7374 = goog.isString(x);
if(and__3822__auto____7374)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____7374;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____7379 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____7379)
{return or__3824__auto____7379;
} else
{var G__7380__7381 = f;
if(G__7380__7381)
{if((function (){var or__3824__auto____7382 = (G__7380__7381.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____7382)
{return or__3824__auto____7382;
} else
{return G__7380__7381.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__7380__7381.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__7380__7381);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__7380__7381);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____7384 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____7384)
{return (n == n.toFixed());
} else
{return and__3822__auto____7384;
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
if(cljs.core.truth_((function (){var and__3822__auto____7387 = coll;
if(cljs.core.truth_(and__3822__auto____7387))
{var and__3822__auto____7388 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____7388)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____7388;
}
} else
{return and__3822__auto____7387;
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
var G__7397__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__7393 = cljs.core.set([y,x]);
var xs__7394 = more;
while(true){
var x__7395 = cljs.core.first.call(null,xs__7394);
var etc__7396 = cljs.core.next.call(null,xs__7394);
if(cljs.core.truth_(xs__7394))
{if(cljs.core.contains_QMARK_.call(null,s__7393,x__7395))
{return false;
} else
{{
var G__7398 = cljs.core.conj.call(null,s__7393,x__7395);
var G__7399 = etc__7396;
s__7393 = G__7398;
xs__7394 = G__7399;
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
var G__7397 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7397__delegate.call(this, x, y, more);
};
G__7397.cljs$lang$maxFixedArity = 2;
G__7397.cljs$lang$applyTo = (function (arglist__7400){
var x = cljs.core.first(arglist__7400);
var y = cljs.core.first(cljs.core.next(arglist__7400));
var more = cljs.core.rest(cljs.core.next(arglist__7400));
return G__7397__delegate(x, y, more);
});
G__7397.cljs$lang$arity$variadic = G__7397__delegate;
return G__7397;
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
{if((function (){var G__7404__7405 = x;
if(G__7404__7405)
{if(cljs.core.truth_((function (){var or__3824__auto____7406 = null;
if(cljs.core.truth_(or__3824__auto____7406))
{return or__3824__auto____7406;
} else
{return G__7404__7405.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__7404__7405.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__7404__7405);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__7404__7405);
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
var xl__7411 = cljs.core.count.call(null,xs);
var yl__7412 = cljs.core.count.call(null,ys);
if((xl__7411 < yl__7412))
{return -1;
} else
{if((xl__7411 > yl__7412))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__7411,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__7413 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____7414 = (d__7413 === 0);
if(and__3822__auto____7414)
{return ((n + 1) < len);
} else
{return and__3822__auto____7414;
}
})())
{{
var G__7415 = xs;
var G__7416 = ys;
var G__7417 = len;
var G__7418 = (n + 1);
xs = G__7415;
ys = G__7416;
len = G__7417;
n = G__7418;
continue;
}
} else
{return d__7413;
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
var r__7420 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__7420))
{return r__7420;
} else
{if(cljs.core.truth_(r__7420))
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
{var a__7422 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__7422,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__7422);
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
var temp__3971__auto____7428 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____7428)
{var s__7429 = temp__3971__auto____7428;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__7429),cljs.core.next.call(null,s__7429));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__7430 = val;
var coll__7431 = cljs.core.seq.call(null,coll);
while(true){
if(coll__7431)
{var nval__7432 = f.call(null,val__7430,cljs.core.first.call(null,coll__7431));
if(cljs.core.reduced_QMARK_.call(null,nval__7432))
{return cljs.core.deref.call(null,nval__7432);
} else
{{
var G__7433 = nval__7432;
var G__7434 = cljs.core.next.call(null,coll__7431);
val__7430 = G__7433;
coll__7431 = G__7434;
continue;
}
}
} else
{return val__7430;
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
var a__7436 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__7436);
return cljs.core.vec.call(null,a__7436);
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
if((function (){var G__7443__7444 = coll;
if(G__7443__7444)
{if((function (){var or__3824__auto____7445 = (G__7443__7444.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7445)
{return or__3824__auto____7445;
} else
{return G__7443__7444.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7443__7444.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7443__7444);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7443__7444);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__7446__7447 = coll;
if(G__7446__7447)
{if((function (){var or__3824__auto____7448 = (G__7446__7447.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7448)
{return or__3824__auto____7448;
} else
{return G__7446__7447.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7446__7447.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7446__7447);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7446__7447);
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
var this__7449 = this;
return this__7449.val;
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
var G__7450__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
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
var G__7452__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
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
var G__7454__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__7454 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7454__delegate.call(this, x, y, more);
};
G__7454.cljs$lang$maxFixedArity = 2;
G__7454.cljs$lang$applyTo = (function (arglist__7455){
var x = cljs.core.first(arglist__7455);
var y = cljs.core.first(cljs.core.next(arglist__7455));
var more = cljs.core.rest(cljs.core.next(arglist__7455));
return G__7454__delegate(x, y, more);
});
G__7454.cljs$lang$arity$variadic = G__7454__delegate;
return G__7454;
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
var G__7456__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__7456 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7456__delegate.call(this, x, y, more);
};
G__7456.cljs$lang$maxFixedArity = 2;
G__7456.cljs$lang$applyTo = (function (arglist__7457){
var x = cljs.core.first(arglist__7457);
var y = cljs.core.first(cljs.core.next(arglist__7457));
var more = cljs.core.rest(cljs.core.next(arglist__7457));
return G__7456__delegate(x, y, more);
});
G__7456.cljs$lang$arity$variadic = G__7456__delegate;
return G__7456;
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
var G__7458__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__7459 = y;
var G__7460 = cljs.core.first.call(null,more);
var G__7461 = cljs.core.next.call(null,more);
x = G__7459;
y = G__7460;
more = G__7461;
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
var G__7458 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7458__delegate.call(this, x, y, more);
};
G__7458.cljs$lang$maxFixedArity = 2;
G__7458.cljs$lang$applyTo = (function (arglist__7462){
var x = cljs.core.first(arglist__7462);
var y = cljs.core.first(cljs.core.next(arglist__7462));
var more = cljs.core.rest(cljs.core.next(arglist__7462));
return G__7458__delegate(x, y, more);
});
G__7458.cljs$lang$arity$variadic = G__7458__delegate;
return G__7458;
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
var G__7463__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__7464 = y;
var G__7465 = cljs.core.first.call(null,more);
var G__7466 = cljs.core.next.call(null,more);
x = G__7464;
y = G__7465;
more = G__7466;
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
var G__7463 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7463__delegate.call(this, x, y, more);
};
G__7463.cljs$lang$maxFixedArity = 2;
G__7463.cljs$lang$applyTo = (function (arglist__7467){
var x = cljs.core.first(arglist__7467);
var y = cljs.core.first(cljs.core.next(arglist__7467));
var more = cljs.core.rest(cljs.core.next(arglist__7467));
return G__7463__delegate(x, y, more);
});
G__7463.cljs$lang$arity$variadic = G__7463__delegate;
return G__7463;
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
var G__7468__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__7469 = y;
var G__7470 = cljs.core.first.call(null,more);
var G__7471 = cljs.core.next.call(null,more);
x = G__7469;
y = G__7470;
more = G__7471;
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
var G__7468 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7468__delegate.call(this, x, y, more);
};
G__7468.cljs$lang$maxFixedArity = 2;
G__7468.cljs$lang$applyTo = (function (arglist__7472){
var x = cljs.core.first(arglist__7472);
var y = cljs.core.first(cljs.core.next(arglist__7472));
var more = cljs.core.rest(cljs.core.next(arglist__7472));
return G__7468__delegate(x, y, more);
});
G__7468.cljs$lang$arity$variadic = G__7468__delegate;
return G__7468;
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
var G__7473__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__7474 = y;
var G__7475 = cljs.core.first.call(null,more);
var G__7476 = cljs.core.next.call(null,more);
x = G__7474;
y = G__7475;
more = G__7476;
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
var G__7473 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7473__delegate.call(this, x, y, more);
};
G__7473.cljs$lang$maxFixedArity = 2;
G__7473.cljs$lang$applyTo = (function (arglist__7477){
var x = cljs.core.first(arglist__7477);
var y = cljs.core.first(cljs.core.next(arglist__7477));
var more = cljs.core.rest(cljs.core.next(arglist__7477));
return G__7473__delegate(x, y, more);
});
G__7473.cljs$lang$arity$variadic = G__7473__delegate;
return G__7473;
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
var G__7478__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__7478 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7478__delegate.call(this, x, y, more);
};
G__7478.cljs$lang$maxFixedArity = 2;
G__7478.cljs$lang$applyTo = (function (arglist__7479){
var x = cljs.core.first(arglist__7479);
var y = cljs.core.first(cljs.core.next(arglist__7479));
var more = cljs.core.rest(cljs.core.next(arglist__7479));
return G__7478__delegate(x, y, more);
});
G__7478.cljs$lang$arity$variadic = G__7478__delegate;
return G__7478;
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
var G__7480__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__7480 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7480__delegate.call(this, x, y, more);
};
G__7480.cljs$lang$maxFixedArity = 2;
G__7480.cljs$lang$applyTo = (function (arglist__7481){
var x = cljs.core.first(arglist__7481);
var y = cljs.core.first(cljs.core.next(arglist__7481));
var more = cljs.core.rest(cljs.core.next(arglist__7481));
return G__7480__delegate(x, y, more);
});
G__7480.cljs$lang$arity$variadic = G__7480__delegate;
return G__7480;
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
var rem__7483 = (n % d);
return cljs.core.fix.call(null,((n - rem__7483) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__7485 = cljs.core.quot.call(null,n,d);
return (n - (d * q__7485));
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
var v__7488 = (v - ((v >> 1) & 1431655765));
var v__7489 = ((v__7488 & 858993459) + ((v__7488 >> 2) & 858993459));
return ((((v__7489 + (v__7489 >> 4)) & 252645135) * 16843009) >> 24);
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
var G__7490__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__7491 = y;
var G__7492 = cljs.core.first.call(null,more);
var G__7493 = cljs.core.next.call(null,more);
x = G__7491;
y = G__7492;
more = G__7493;
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
var G__7490 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7490__delegate.call(this, x, y, more);
};
G__7490.cljs$lang$maxFixedArity = 2;
G__7490.cljs$lang$applyTo = (function (arglist__7494){
var x = cljs.core.first(arglist__7494);
var y = cljs.core.first(cljs.core.next(arglist__7494));
var more = cljs.core.rest(cljs.core.next(arglist__7494));
return G__7490__delegate(x, y, more);
});
G__7490.cljs$lang$arity$variadic = G__7490__delegate;
return G__7490;
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
var n__7498 = n;
var xs__7499 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7500 = xs__7499;
if(and__3822__auto____7500)
{return (n__7498 > 0);
} else
{return and__3822__auto____7500;
}
})()))
{{
var G__7501 = (n__7498 - 1);
var G__7502 = cljs.core.next.call(null,xs__7499);
n__7498 = G__7501;
xs__7499 = G__7502;
continue;
}
} else
{return xs__7499;
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
var G__7503__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7504 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__7505 = cljs.core.next.call(null,more);
sb = G__7504;
more = G__7505;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__7503 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7503__delegate.call(this, x, ys);
};
G__7503.cljs$lang$maxFixedArity = 1;
G__7503.cljs$lang$applyTo = (function (arglist__7506){
var x = cljs.core.first(arglist__7506);
var ys = cljs.core.rest(arglist__7506);
return G__7503__delegate(x, ys);
});
G__7503.cljs$lang$arity$variadic = G__7503__delegate;
return G__7503;
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
var G__7507__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7508 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__7509 = cljs.core.next.call(null,more);
sb = G__7508;
more = G__7509;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__7507 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7507__delegate.call(this, x, ys);
};
G__7507.cljs$lang$maxFixedArity = 1;
G__7507.cljs$lang$applyTo = (function (arglist__7510){
var x = cljs.core.first(arglist__7510);
var ys = cljs.core.rest(arglist__7510);
return G__7507__delegate(x, ys);
});
G__7507.cljs$lang$arity$variadic = G__7507__delegate;
return G__7507;
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__7513 = cljs.core.seq.call(null,x);
var ys__7514 = cljs.core.seq.call(null,y);
while(true){
if((xs__7513 == null))
{return (ys__7514 == null);
} else
{if((ys__7514 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__7513),cljs.core.first.call(null,ys__7514)))
{{
var G__7515 = cljs.core.next.call(null,xs__7513);
var G__7516 = cljs.core.next.call(null,ys__7514);
xs__7513 = G__7515;
ys__7514 = G__7516;
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
return cljs.core.reduce.call(null,(function (p1__7517_SHARP_,p2__7518_SHARP_){
return cljs.core.hash_combine.call(null,p1__7517_SHARP_,cljs.core.hash.call(null,p2__7518_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
void 0;
void 0;
cljs.core.hash_imap = (function hash_imap(m){
var h__7522 = 0;
var s__7523 = cljs.core.seq.call(null,m);
while(true){
if(s__7523)
{var e__7524 = cljs.core.first.call(null,s__7523);
{
var G__7525 = ((h__7522 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__7524)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__7524)))) % 4503599627370496);
var G__7526 = cljs.core.next.call(null,s__7523);
h__7522 = G__7525;
s__7523 = G__7526;
continue;
}
} else
{return h__7522;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__7530 = 0;
var s__7531 = cljs.core.seq.call(null,s);
while(true){
if(s__7531)
{var e__7532 = cljs.core.first.call(null,s__7531);
{
var G__7533 = ((h__7530 + cljs.core.hash.call(null,e__7532)) % 4503599627370496);
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
void 0;
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__7555__7556 = cljs.core.seq.call(null,fn_map);
if(G__7555__7556)
{var G__7558__7560 = cljs.core.first.call(null,G__7555__7556);
var vec__7559__7561 = G__7558__7560;
var key_name__7562 = cljs.core.nth.call(null,vec__7559__7561,0,null);
var f__7563 = cljs.core.nth.call(null,vec__7559__7561,1,null);
var G__7555__7564 = G__7555__7556;
var G__7558__7565 = G__7558__7560;
var G__7555__7566 = G__7555__7564;
while(true){
var vec__7567__7568 = G__7558__7565;
var key_name__7569 = cljs.core.nth.call(null,vec__7567__7568,0,null);
var f__7570 = cljs.core.nth.call(null,vec__7567__7568,1,null);
var G__7555__7571 = G__7555__7566;
var str_name__7572 = cljs.core.name.call(null,key_name__7569);
(obj[str_name__7572] = f__7570);
var temp__3974__auto____7573 = cljs.core.next.call(null,G__7555__7571);
if(temp__3974__auto____7573)
{var G__7555__7574 = temp__3974__auto____7573;
{
var G__7575 = cljs.core.first.call(null,G__7555__7574);
var G__7576 = G__7555__7574;
G__7558__7565 = G__7575;
G__7555__7566 = G__7576;
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
var this__7577 = this;
var h__2153__auto____7578 = this__7577.__hash;
if(!((h__2153__auto____7578 == null)))
{return h__2153__auto____7578;
} else
{var h__2153__auto____7579 = cljs.core.hash_coll.call(null,coll);
this__7577.__hash = h__2153__auto____7579;
return h__2153__auto____7579;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7580 = this;
if((this__7580.count === 1))
{return null;
} else
{return this__7580.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7581 = this;
return (new cljs.core.List(this__7581.meta,o,coll,(this__7581.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__7582 = this;
var this__7583 = this;
return cljs.core.pr_str.call(null,this__7583);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7584 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7585 = this;
return this__7585.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7586 = this;
return this__7586.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7587 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7588 = this;
return this__7588.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7589 = this;
if((this__7589.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__7589.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7590 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7591 = this;
return (new cljs.core.List(meta,this__7591.first,this__7591.rest,this__7591.count,this__7591.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7592 = this;
return this__7592.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7593 = this;
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
var this__7594 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7595 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7596 = this;
return (new cljs.core.List(this__7596.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__7597 = this;
var this__7598 = this;
return cljs.core.pr_str.call(null,this__7598);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7599 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7600 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7601 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7602 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7603 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7604 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7605 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7606 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7607 = this;
return this__7607.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7608 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__7612__7613 = coll;
if(G__7612__7613)
{if((function (){var or__3824__auto____7614 = (G__7612__7613.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____7614)
{return or__3824__auto____7614;
} else
{return G__7612__7613.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__7612__7613.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7612__7613);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7612__7613);
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
var G__7615__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__7615 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7615__delegate.call(this, x, y, z, items);
};
G__7615.cljs$lang$maxFixedArity = 3;
G__7615.cljs$lang$applyTo = (function (arglist__7616){
var x = cljs.core.first(arglist__7616);
var y = cljs.core.first(cljs.core.next(arglist__7616));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7616)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7616)));
return G__7615__delegate(x, y, z, items);
});
G__7615.cljs$lang$arity$variadic = G__7615__delegate;
return G__7615;
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
var this__7617 = this;
var h__2153__auto____7618 = this__7617.__hash;
if(!((h__2153__auto____7618 == null)))
{return h__2153__auto____7618;
} else
{var h__2153__auto____7619 = cljs.core.hash_coll.call(null,coll);
this__7617.__hash = h__2153__auto____7619;
return h__2153__auto____7619;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7620 = this;
if((this__7620.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__7620.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7621 = this;
return (new cljs.core.Cons(null,o,coll,this__7621.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__7622 = this;
var this__7623 = this;
return cljs.core.pr_str.call(null,this__7623);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7624 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7625 = this;
return this__7625.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7626 = this;
if((this__7626.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__7626.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7627 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7628 = this;
return (new cljs.core.Cons(meta,this__7628.first,this__7628.rest,this__7628.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7629 = this;
return this__7629.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7630 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7630.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____7635 = (coll == null);
if(or__3824__auto____7635)
{return or__3824__auto____7635;
} else
{var G__7636__7637 = coll;
if(G__7636__7637)
{if((function (){var or__3824__auto____7638 = (G__7636__7637.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7638)
{return or__3824__auto____7638;
} else
{return G__7636__7637.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7636__7637.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7636__7637);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7636__7637);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__7642__7643 = x;
if(G__7642__7643)
{if((function (){var or__3824__auto____7644 = (G__7642__7643.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____7644)
{return or__3824__auto____7644;
} else
{return G__7642__7643.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__7642__7643.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7642__7643);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7642__7643);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__7645 = null;
var G__7645__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__7645__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__7645 = function(string,f,start){
switch(arguments.length){
case 2:
return G__7645__2.call(this,string,f);
case 3:
return G__7645__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7645;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__7646 = null;
var G__7646__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__7646__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__7646 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__7646__2.call(this,string,k);
case 3:
return G__7646__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7646;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__7647 = null;
var G__7647__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__7647__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__7647 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__7647__2.call(this,string,n);
case 3:
return G__7647__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7647;
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
cljs.core.Keyword.prototype.call = (function (this_sym7650,coll){
var this__7651 = this;
var this_sym7650__7652 = this;
var ___7653 = this_sym7650__7652;
if((coll == null))
{return null;
} else
{var strobj__7654 = coll.strobj;
if((strobj__7654 == null))
{return cljs.core._lookup.call(null,coll,this__7651.k,null);
} else
{return (strobj__7654[this__7651.k]);
}
}
});
cljs.core.Keyword.prototype.apply = (function (this_sym7648,args7649){
var this__7655 = this;
return this_sym7648.call.apply(this_sym7648,[this_sym7648].concat(args7649.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__7664 = null;
var G__7664__2 = (function (this_sym7658,coll){
var this_sym7658__7660 = this;
var this__7661 = this_sym7658__7660;
return cljs.core._lookup.call(null,coll,this__7661.toString(),null);
});
var G__7664__3 = (function (this_sym7659,coll,not_found){
var this_sym7659__7662 = this;
var this__7663 = this_sym7659__7662;
return cljs.core._lookup.call(null,coll,this__7663.toString(),not_found);
});
G__7664 = function(this_sym7659,coll,not_found){
switch(arguments.length){
case 2:
return G__7664__2.call(this,this_sym7659,coll);
case 3:
return G__7664__3.call(this,this_sym7659,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7664;
})()
;
String.prototype.apply = (function (this_sym7656,args7657){
return this_sym7656.call.apply(this_sym7656,[this_sym7656].concat(args7657.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__7666 = lazy_seq.x;
if(lazy_seq.realized)
{return x__7666;
} else
{lazy_seq.x = x__7666.call(null);
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
var this__7667 = this;
var h__2153__auto____7668 = this__7667.__hash;
if(!((h__2153__auto____7668 == null)))
{return h__2153__auto____7668;
} else
{var h__2153__auto____7669 = cljs.core.hash_coll.call(null,coll);
this__7667.__hash = h__2153__auto____7669;
return h__2153__auto____7669;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7670 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7671 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__7672 = this;
var this__7673 = this;
return cljs.core.pr_str.call(null,this__7673);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7674 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7675 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7676 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7677 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7678 = this;
return (new cljs.core.LazySeq(meta,this__7678.realized,this__7678.x,this__7678.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7679 = this;
return this__7679.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7680 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7680.meta);
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
var this__7681 = this;
return this__7681.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__7682 = this;
var ___7683 = this;
(this__7682.buf[this__7682.end] = o);
return this__7682.end = (this__7682.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__7684 = this;
var ___7685 = this;
var ret__7686 = (new cljs.core.ArrayChunk(this__7684.buf,0,this__7684.end));
this__7684.buf = null;
return ret__7686;
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
var this__7687 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__7687.arr[this__7687.off]),(this__7687.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7688 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__7688.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__7689 = this;
if((this__7689.off === this__7689.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__7689.arr,(this__7689.off + 1),this__7689.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__7690 = this;
return (this__7690.arr[(this__7690.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__7691 = this;
if((function (){var and__3822__auto____7692 = (i >= 0);
if(and__3822__auto____7692)
{return (i < (this__7691.end - this__7691.off));
} else
{return and__3822__auto____7692;
}
})())
{return (this__7691.arr[(this__7691.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7693 = this;
return (this__7693.end - this__7693.off);
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
var this__7694 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7695 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7696 = this;
return cljs.core._nth.call(null,this__7696.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7697 = this;
if((cljs.core._count.call(null,this__7697.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__7697.chunk),this__7697.more,this__7697.meta));
} else
{if((this__7697.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__7697.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__7698 = this;
if((this__7698.more == null))
{return null;
} else
{return this__7698.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7699 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__7700 = this;
return (new cljs.core.ChunkedCons(this__7700.chunk,this__7700.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7701 = this;
return this__7701.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__7702 = this;
return this__7702.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__7703 = this;
if((this__7703.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__7703.more;
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
if((function (){var G__7707__7708 = s;
if(G__7707__7708)
{if(cljs.core.truth_((function (){var or__3824__auto____7709 = null;
if(cljs.core.truth_(or__3824__auto____7709))
{return or__3824__auto____7709;
} else
{return G__7707__7708.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__7707__7708.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__7707__7708);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__7707__7708);
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
var ary__7712 = [];
var s__7713 = s;
while(true){
if(cljs.core.seq.call(null,s__7713))
{ary__7712.push(cljs.core.first.call(null,s__7713));
{
var G__7714 = cljs.core.next.call(null,s__7713);
s__7713 = G__7714;
continue;
}
} else
{return ary__7712;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__7718 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__7719 = 0;
var xs__7720 = cljs.core.seq.call(null,coll);
while(true){
if(xs__7720)
{(ret__7718[i__7719] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__7720)));
{
var G__7721 = (i__7719 + 1);
var G__7722 = cljs.core.next.call(null,xs__7720);
i__7719 = G__7721;
xs__7720 = G__7722;
continue;
}
} else
{}
break;
}
return ret__7718;
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
var a__7730 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7731 = cljs.core.seq.call(null,init_val_or_seq);
var i__7732 = 0;
var s__7733 = s__7731;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7734 = s__7733;
if(and__3822__auto____7734)
{return (i__7732 < size);
} else
{return and__3822__auto____7734;
}
})()))
{(a__7730[i__7732] = cljs.core.first.call(null,s__7733));
{
var G__7737 = (i__7732 + 1);
var G__7738 = cljs.core.next.call(null,s__7733);
i__7732 = G__7737;
s__7733 = G__7738;
continue;
}
} else
{return a__7730;
}
break;
}
} else
{var n__2492__auto____7735 = size;
var i__7736 = 0;
while(true){
if((i__7736 < n__2492__auto____7735))
{(a__7730[i__7736] = init_val_or_seq);
{
var G__7739 = (i__7736 + 1);
i__7736 = G__7739;
continue;
}
} else
{}
break;
}
return a__7730;
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
var a__7747 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7748 = cljs.core.seq.call(null,init_val_or_seq);
var i__7749 = 0;
var s__7750 = s__7748;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7751 = s__7750;
if(and__3822__auto____7751)
{return (i__7749 < size);
} else
{return and__3822__auto____7751;
}
})()))
{(a__7747[i__7749] = cljs.core.first.call(null,s__7750));
{
var G__7754 = (i__7749 + 1);
var G__7755 = cljs.core.next.call(null,s__7750);
i__7749 = G__7754;
s__7750 = G__7755;
continue;
}
} else
{return a__7747;
}
break;
}
} else
{var n__2492__auto____7752 = size;
var i__7753 = 0;
while(true){
if((i__7753 < n__2492__auto____7752))
{(a__7747[i__7753] = init_val_or_seq);
{
var G__7756 = (i__7753 + 1);
i__7753 = G__7756;
continue;
}
} else
{}
break;
}
return a__7747;
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
var a__7764 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7765 = cljs.core.seq.call(null,init_val_or_seq);
var i__7766 = 0;
var s__7767 = s__7765;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7768 = s__7767;
if(and__3822__auto____7768)
{return (i__7766 < size);
} else
{return and__3822__auto____7768;
}
})()))
{(a__7764[i__7766] = cljs.core.first.call(null,s__7767));
{
var G__7771 = (i__7766 + 1);
var G__7772 = cljs.core.next.call(null,s__7767);
i__7766 = G__7771;
s__7767 = G__7772;
continue;
}
} else
{return a__7764;
}
break;
}
} else
{var n__2492__auto____7769 = size;
var i__7770 = 0;
while(true){
if((i__7770 < n__2492__auto____7769))
{(a__7764[i__7770] = init_val_or_seq);
{
var G__7773 = (i__7770 + 1);
i__7770 = G__7773;
continue;
}
} else
{}
break;
}
return a__7764;
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
{var s__7778 = s;
var i__7779 = n;
var sum__7780 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7781 = (i__7779 > 0);
if(and__3822__auto____7781)
{return cljs.core.seq.call(null,s__7778);
} else
{return and__3822__auto____7781;
}
})()))
{{
var G__7782 = cljs.core.next.call(null,s__7778);
var G__7783 = (i__7779 - 1);
var G__7784 = (sum__7780 + 1);
s__7778 = G__7782;
i__7779 = G__7783;
sum__7780 = G__7784;
continue;
}
} else
{return sum__7780;
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
var s__7789 = cljs.core.seq.call(null,x);
if(s__7789)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__7789))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__7789),concat.call(null,cljs.core.chunk_rest.call(null,s__7789),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__7789),concat.call(null,cljs.core.rest.call(null,s__7789),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__7793__delegate = function (x,y,zs){
var cat__7792 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__7791 = cljs.core.seq.call(null,xys);
if(xys__7791)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__7791))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__7791),cat.call(null,cljs.core.chunk_rest.call(null,xys__7791),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__7791),cat.call(null,cljs.core.rest.call(null,xys__7791),zs));
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
return cat__7792.call(null,concat.call(null,x,y),zs);
};
var G__7793 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7793__delegate.call(this, x, y, zs);
};
G__7793.cljs$lang$maxFixedArity = 2;
G__7793.cljs$lang$applyTo = (function (arglist__7794){
var x = cljs.core.first(arglist__7794);
var y = cljs.core.first(cljs.core.next(arglist__7794));
var zs = cljs.core.rest(cljs.core.next(arglist__7794));
return G__7793__delegate(x, y, zs);
});
G__7793.cljs$lang$arity$variadic = G__7793__delegate;
return G__7793;
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
var G__7795__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__7795 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7795__delegate.call(this, a, b, c, d, more);
};
G__7795.cljs$lang$maxFixedArity = 4;
G__7795.cljs$lang$applyTo = (function (arglist__7796){
var a = cljs.core.first(arglist__7796);
var b = cljs.core.first(cljs.core.next(arglist__7796));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7796)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7796))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7796))));
return G__7795__delegate(a, b, c, d, more);
});
G__7795.cljs$lang$arity$variadic = G__7795__delegate;
return G__7795;
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
var args__7838 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__7839 = cljs.core._first.call(null,args__7838);
var args__7840 = cljs.core._rest.call(null,args__7838);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__7839);
} else
{return f.call(null,a__7839);
}
} else
{var b__7841 = cljs.core._first.call(null,args__7840);
var args__7842 = cljs.core._rest.call(null,args__7840);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__7839,b__7841);
} else
{return f.call(null,a__7839,b__7841);
}
} else
{var c__7843 = cljs.core._first.call(null,args__7842);
var args__7844 = cljs.core._rest.call(null,args__7842);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__7839,b__7841,c__7843);
} else
{return f.call(null,a__7839,b__7841,c__7843);
}
} else
{var d__7845 = cljs.core._first.call(null,args__7844);
var args__7846 = cljs.core._rest.call(null,args__7844);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__7839,b__7841,c__7843,d__7845);
} else
{return f.call(null,a__7839,b__7841,c__7843,d__7845);
}
} else
{var e__7847 = cljs.core._first.call(null,args__7846);
var args__7848 = cljs.core._rest.call(null,args__7846);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__7839,b__7841,c__7843,d__7845,e__7847);
} else
{return f.call(null,a__7839,b__7841,c__7843,d__7845,e__7847);
}
} else
{var f__7849 = cljs.core._first.call(null,args__7848);
var args__7850 = cljs.core._rest.call(null,args__7848);
if((argc === 6))
{if(f__7849.cljs$lang$arity$6)
{return f__7849.cljs$lang$arity$6(a__7839,b__7841,c__7843,d__7845,e__7847,f__7849);
} else
{return f__7849.call(null,a__7839,b__7841,c__7843,d__7845,e__7847,f__7849);
}
} else
{var g__7851 = cljs.core._first.call(null,args__7850);
var args__7852 = cljs.core._rest.call(null,args__7850);
if((argc === 7))
{if(f__7849.cljs$lang$arity$7)
{return f__7849.cljs$lang$arity$7(a__7839,b__7841,c__7843,d__7845,e__7847,f__7849,g__7851);
} else
{return f__7849.call(null,a__7839,b__7841,c__7843,d__7845,e__7847,f__7849,g__7851);
}
} else
{var h__7853 = cljs.core._first.call(null,args__7852);
var args__7854 = cljs.core._rest.call(null,args__7852);
if((argc === 8))
{if(f__7849.cljs$lang$arity$8)
{return f__7849.cljs$lang$arity$8(a__7839,b__7841,c__7843,d__7845,e__7847,f__7849,g__7851,h__7853);
} else
{return f__7849.call(null,a__7839,b__7841,c__7843,d__7845,e__7847,f__7849,g__7851,h__7853);
}
} else
{var i__7855 = cljs.core._first.call(null,args__7854);
var args__7856 = cljs.core._rest.call(null,args__7854);
if((argc === 9))
{if(f__7849.cljs$lang$arity$9)
{return f__7849.cljs$lang$arity$9(a__7839,b__7841,c__7843,d__7845,e__7847,f__7849,g__7851,h__7853,i__7855);
} else
{return f__7849.call(null,a__7839,b__7841,c__7843,d__7845,e__7847,f__7849,g__7851,h__7853,i__7855);
}
} else
{var j__7857 = cljs.core._first.call(null,args__7856);
var args__7858 = cljs.core._rest.call(null,args__7856);
if((argc === 10))
{if(f__7849.cljs$lang$arity$10)
{return f__7849.cljs$lang$arity$10(a__7839,b__7841,c__7843,d__7845,e__7847,f__7849,g__7851,h__7853,i__7855,j__7857);
} else
{return f__7849.call(null,a__7839,b__7841,c__7843,d__7845,e__7847,f__7849,g__7851,h__7853,i__7855,j__7857);
}
} else
{var k__7859 = cljs.core._first.call(null,args__7858);
var args__7860 = cljs.core._rest.call(null,args__7858);
if((argc === 11))
{if(f__7849.cljs$lang$arity$11)
{return f__7849.cljs$lang$arity$11(a__7839,b__7841,c__7843,d__7845,e__7847,f__7849,g__7851,h__7853,i__7855,j__7857,k__7859);
} else
{return f__7849.call(null,a__7839,b__7841,c__7843,d__7845,e__7847,f__7849,g__7851,h__7853,i__7855,j__7857,k__7859);
}
} else
{var l__7861 = cljs.core._first.call(null,args__7860);
var args__7862 = cljs.core._rest.call(null,args__7860);
if((argc === 12))
{if(f__7849.cljs$lang$arity$12)
{return f__7849.cljs$lang$arity$12(a__7839,b__7841,c__7843,d__7845,e__7847,f__7849,g__7851,h__7853,i__7855,j__7857,k__7859,l__7861);
} else
{return f__7849.call(null,a__7839,b__7841,c__7843,d__7845,e__7847,f__7849,g__7851,h__7853,i__7855,j__7857,k__7859,l__7861);
}
} else
{var m__7863 = cljs.core._first.call(null,args__7862);
var args__7864 = cljs.core._rest.call(null,args__7862);
if((argc === 13))
{if(f__7849.cljs$lang$arity$13)
{return f__7849.cljs$lang$arity$13(a__7839,b__7841,c__7843,d__7845,e__7847,f__7849,g__7851,h__7853,i__7855,j__7857,k__7859,l__7861,m__7863);
} else
{return f__7849.call(null,a__7839,b__7841,c__7843,d__7845,e__7847,f__7849,g__7851,h__7853,i__7855,j__7857,k__7859,l__7861,m__7863);
}
} else
{var n__7865 = cljs.core._first.call(null,args__7864);
var args__7866 = cljs.core._rest.call(null,args__7864);
if((argc === 14))
{if(f__7849.cljs$lang$arity$14)
{return f__7849.cljs$lang$arity$14(a__7839,b__7841,c__7843,d__7845,e__7847,f__7849,g__7851,h__7853,i__7855,j__7857,k__7859,l__7861,m__7863,n__7865);
} else
{return f__7849.call(null,a__7839,b__7841,c__7843,d__7845,e__7847,f__7849,g__7851,h__7853,i__7855,j__7857,k__7859,l__7861,m__7863,n__7865);
}
} else
{var o__7867 = cljs.core._first.call(null,args__7866);
var args__7868 = cljs.core._rest.call(null,args__7866);
if((argc === 15))
{if(f__7849.cljs$lang$arity$15)
{return f__7849.cljs$lang$arity$15(a__7839,b__7841,c__7843,d__7845,e__7847,f__7849,g__7851,h__7853,i__7855,j__7857,k__7859,l__7861,m__7863,n__7865,o__7867);
} else
{return f__7849.call(null,a__7839,b__7841,c__7843,d__7845,e__7847,f__7849,g__7851,h__7853,i__7855,j__7857,k__7859,l__7861,m__7863,n__7865,o__7867);
}
} else
{var p__7869 = cljs.core._first.call(null,args__7868);
var args__7870 = cljs.core._rest.call(null,args__7868);
if((argc === 16))
{if(f__7849.cljs$lang$arity$16)
{return f__7849.cljs$lang$arity$16(a__7839,b__7841,c__7843,d__7845,e__7847,f__7849,g__7851,h__7853,i__7855,j__7857,k__7859,l__7861,m__7863,n__7865,o__7867,p__7869);
} else
{return f__7849.call(null,a__7839,b__7841,c__7843,d__7845,e__7847,f__7849,g__7851,h__7853,i__7855,j__7857,k__7859,l__7861,m__7863,n__7865,o__7867,p__7869);
}
} else
{var q__7871 = cljs.core._first.call(null,args__7870);
var args__7872 = cljs.core._rest.call(null,args__7870);
if((argc === 17))
{if(f__7849.cljs$lang$arity$17)
{return f__7849.cljs$lang$arity$17(a__7839,b__7841,c__7843,d__7845,e__7847,f__7849,g__7851,h__7853,i__7855,j__7857,k__7859,l__7861,m__7863,n__7865,o__7867,p__7869,q__7871);
} else
{return f__7849.call(null,a__7839,b__7841,c__7843,d__7845,e__7847,f__7849,g__7851,h__7853,i__7855,j__7857,k__7859,l__7861,m__7863,n__7865,o__7867,p__7869,q__7871);
}
} else
{var r__7873 = cljs.core._first.call(null,args__7872);
var args__7874 = cljs.core._rest.call(null,args__7872);
if((argc === 18))
{if(f__7849.cljs$lang$arity$18)
{return f__7849.cljs$lang$arity$18(a__7839,b__7841,c__7843,d__7845,e__7847,f__7849,g__7851,h__7853,i__7855,j__7857,k__7859,l__7861,m__7863,n__7865,o__7867,p__7869,q__7871,r__7873);
} else
{return f__7849.call(null,a__7839,b__7841,c__7843,d__7845,e__7847,f__7849,g__7851,h__7853,i__7855,j__7857,k__7859,l__7861,m__7863,n__7865,o__7867,p__7869,q__7871,r__7873);
}
} else
{var s__7875 = cljs.core._first.call(null,args__7874);
var args__7876 = cljs.core._rest.call(null,args__7874);
if((argc === 19))
{if(f__7849.cljs$lang$arity$19)
{return f__7849.cljs$lang$arity$19(a__7839,b__7841,c__7843,d__7845,e__7847,f__7849,g__7851,h__7853,i__7855,j__7857,k__7859,l__7861,m__7863,n__7865,o__7867,p__7869,q__7871,r__7873,s__7875);
} else
{return f__7849.call(null,a__7839,b__7841,c__7843,d__7845,e__7847,f__7849,g__7851,h__7853,i__7855,j__7857,k__7859,l__7861,m__7863,n__7865,o__7867,p__7869,q__7871,r__7873,s__7875);
}
} else
{var t__7877 = cljs.core._first.call(null,args__7876);
var args__7878 = cljs.core._rest.call(null,args__7876);
if((argc === 20))
{if(f__7849.cljs$lang$arity$20)
{return f__7849.cljs$lang$arity$20(a__7839,b__7841,c__7843,d__7845,e__7847,f__7849,g__7851,h__7853,i__7855,j__7857,k__7859,l__7861,m__7863,n__7865,o__7867,p__7869,q__7871,r__7873,s__7875,t__7877);
} else
{return f__7849.call(null,a__7839,b__7841,c__7843,d__7845,e__7847,f__7849,g__7851,h__7853,i__7855,j__7857,k__7859,l__7861,m__7863,n__7865,o__7867,p__7869,q__7871,r__7873,s__7875,t__7877);
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
var fixed_arity__7893 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7894 = cljs.core.bounded_count.call(null,args,(fixed_arity__7893 + 1));
if((bc__7894 <= fixed_arity__7893))
{return cljs.core.apply_to.call(null,f,bc__7894,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__7895 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__7896 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7897 = cljs.core.bounded_count.call(null,arglist__7895,(fixed_arity__7896 + 1));
if((bc__7897 <= fixed_arity__7896))
{return cljs.core.apply_to.call(null,f,bc__7897,arglist__7895);
} else
{return f.cljs$lang$applyTo(arglist__7895);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7895));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__7898 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__7899 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7900 = cljs.core.bounded_count.call(null,arglist__7898,(fixed_arity__7899 + 1));
if((bc__7900 <= fixed_arity__7899))
{return cljs.core.apply_to.call(null,f,bc__7900,arglist__7898);
} else
{return f.cljs$lang$applyTo(arglist__7898);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7898));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__7901 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__7902 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7903 = cljs.core.bounded_count.call(null,arglist__7901,(fixed_arity__7902 + 1));
if((bc__7903 <= fixed_arity__7902))
{return cljs.core.apply_to.call(null,f,bc__7903,arglist__7901);
} else
{return f.cljs$lang$applyTo(arglist__7901);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7901));
}
});
var apply__6 = (function() { 
var G__7907__delegate = function (f,a,b,c,d,args){
var arglist__7904 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__7905 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7906 = cljs.core.bounded_count.call(null,arglist__7904,(fixed_arity__7905 + 1));
if((bc__7906 <= fixed_arity__7905))
{return cljs.core.apply_to.call(null,f,bc__7906,arglist__7904);
} else
{return f.cljs$lang$applyTo(arglist__7904);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7904));
}
};
var G__7907 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__7907__delegate.call(this, f, a, b, c, d, args);
};
G__7907.cljs$lang$maxFixedArity = 5;
G__7907.cljs$lang$applyTo = (function (arglist__7908){
var f = cljs.core.first(arglist__7908);
var a = cljs.core.first(cljs.core.next(arglist__7908));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7908)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7908))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7908)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7908)))));
return G__7907__delegate(f, a, b, c, d, args);
});
G__7907.cljs$lang$arity$variadic = G__7907__delegate;
return G__7907;
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
vary_meta.cljs$lang$applyTo = (function (arglist__7909){
var obj = cljs.core.first(arglist__7909);
var f = cljs.core.first(cljs.core.next(arglist__7909));
var args = cljs.core.rest(cljs.core.next(arglist__7909));
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
var G__7910__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__7910 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7910__delegate.call(this, x, y, more);
};
G__7910.cljs$lang$maxFixedArity = 2;
G__7910.cljs$lang$applyTo = (function (arglist__7911){
var x = cljs.core.first(arglist__7911);
var y = cljs.core.first(cljs.core.next(arglist__7911));
var more = cljs.core.rest(cljs.core.next(arglist__7911));
return G__7910__delegate(x, y, more);
});
G__7910.cljs$lang$arity$variadic = G__7910__delegate;
return G__7910;
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
var G__7912 = pred;
var G__7913 = cljs.core.next.call(null,coll);
pred = G__7912;
coll = G__7913;
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
{var or__3824__auto____7915 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____7915))
{return or__3824__auto____7915;
} else
{{
var G__7916 = pred;
var G__7917 = cljs.core.next.call(null,coll);
pred = G__7916;
coll = G__7917;
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
var G__7918 = null;
var G__7918__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__7918__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__7918__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__7918__3 = (function() { 
var G__7919__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__7919 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7919__delegate.call(this, x, y, zs);
};
G__7919.cljs$lang$maxFixedArity = 2;
G__7919.cljs$lang$applyTo = (function (arglist__7920){
var x = cljs.core.first(arglist__7920);
var y = cljs.core.first(cljs.core.next(arglist__7920));
var zs = cljs.core.rest(cljs.core.next(arglist__7920));
return G__7919__delegate(x, y, zs);
});
G__7919.cljs$lang$arity$variadic = G__7919__delegate;
return G__7919;
})()
;
G__7918 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__7918__0.call(this);
case 1:
return G__7918__1.call(this,x);
case 2:
return G__7918__2.call(this,x,y);
default:
return G__7918__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__7918.cljs$lang$maxFixedArity = 2;
G__7918.cljs$lang$applyTo = G__7918__3.cljs$lang$applyTo;
return G__7918;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__7921__delegate = function (args){
return x;
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
var G__7929 = null;
var G__7929__0 = (function (){
return f.call(null,g.call(null));
});
var G__7929__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__7929__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__7929__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__7929__4 = (function() { 
var G__7930__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__7930 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7930__delegate.call(this, x, y, z, args);
};
G__7930.cljs$lang$maxFixedArity = 3;
G__7930.cljs$lang$applyTo = (function (arglist__7931){
var x = cljs.core.first(arglist__7931);
var y = cljs.core.first(cljs.core.next(arglist__7931));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7931)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7931)));
return G__7930__delegate(x, y, z, args);
});
G__7930.cljs$lang$arity$variadic = G__7930__delegate;
return G__7930;
})()
;
G__7929 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7929__0.call(this);
case 1:
return G__7929__1.call(this,x);
case 2:
return G__7929__2.call(this,x,y);
case 3:
return G__7929__3.call(this,x,y,z);
default:
return G__7929__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7929.cljs$lang$maxFixedArity = 3;
G__7929.cljs$lang$applyTo = G__7929__4.cljs$lang$applyTo;
return G__7929;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__7932 = null;
var G__7932__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__7932__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__7932__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__7932__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__7932__4 = (function() { 
var G__7933__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__7933 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7933__delegate.call(this, x, y, z, args);
};
G__7933.cljs$lang$maxFixedArity = 3;
G__7933.cljs$lang$applyTo = (function (arglist__7934){
var x = cljs.core.first(arglist__7934);
var y = cljs.core.first(cljs.core.next(arglist__7934));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7934)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7934)));
return G__7933__delegate(x, y, z, args);
});
G__7933.cljs$lang$arity$variadic = G__7933__delegate;
return G__7933;
})()
;
G__7932 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7932__0.call(this);
case 1:
return G__7932__1.call(this,x);
case 2:
return G__7932__2.call(this,x,y);
case 3:
return G__7932__3.call(this,x,y,z);
default:
return G__7932__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7932.cljs$lang$maxFixedArity = 3;
G__7932.cljs$lang$applyTo = G__7932__4.cljs$lang$applyTo;
return G__7932;
})()
});
var comp__4 = (function() { 
var G__7935__delegate = function (f1,f2,f3,fs){
var fs__7926 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__7936__delegate = function (args){
var ret__7927 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__7926),args);
var fs__7928 = cljs.core.next.call(null,fs__7926);
while(true){
if(fs__7928)
{{
var G__7937 = cljs.core.first.call(null,fs__7928).call(null,ret__7927);
var G__7938 = cljs.core.next.call(null,fs__7928);
ret__7927 = G__7937;
fs__7928 = G__7938;
continue;
}
} else
{return ret__7927;
}
break;
}
};
var G__7936 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7936__delegate.call(this, args);
};
G__7936.cljs$lang$maxFixedArity = 0;
G__7936.cljs$lang$applyTo = (function (arglist__7939){
var args = cljs.core.seq(arglist__7939);;
return G__7936__delegate(args);
});
G__7936.cljs$lang$arity$variadic = G__7936__delegate;
return G__7936;
})()
;
};
var G__7935 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7935__delegate.call(this, f1, f2, f3, fs);
};
G__7935.cljs$lang$maxFixedArity = 3;
G__7935.cljs$lang$applyTo = (function (arglist__7940){
var f1 = cljs.core.first(arglist__7940);
var f2 = cljs.core.first(cljs.core.next(arglist__7940));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7940)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7940)));
return G__7935__delegate(f1, f2, f3, fs);
});
G__7935.cljs$lang$arity$variadic = G__7935__delegate;
return G__7935;
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
var G__7941__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__7941 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7941__delegate.call(this, args);
};
G__7941.cljs$lang$maxFixedArity = 0;
G__7941.cljs$lang$applyTo = (function (arglist__7942){
var args = cljs.core.seq(arglist__7942);;
return G__7941__delegate(args);
});
G__7941.cljs$lang$arity$variadic = G__7941__delegate;
return G__7941;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__7943__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__7943 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7943__delegate.call(this, args);
};
G__7943.cljs$lang$maxFixedArity = 0;
G__7943.cljs$lang$applyTo = (function (arglist__7944){
var args = cljs.core.seq(arglist__7944);;
return G__7943__delegate(args);
});
G__7943.cljs$lang$arity$variadic = G__7943__delegate;
return G__7943;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__7945__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__7945 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7945__delegate.call(this, args);
};
G__7945.cljs$lang$maxFixedArity = 0;
G__7945.cljs$lang$applyTo = (function (arglist__7946){
var args = cljs.core.seq(arglist__7946);;
return G__7945__delegate(args);
});
G__7945.cljs$lang$arity$variadic = G__7945__delegate;
return G__7945;
})()
;
});
var partial__5 = (function() { 
var G__7947__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__7948__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__7948 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7948__delegate.call(this, args);
};
G__7948.cljs$lang$maxFixedArity = 0;
G__7948.cljs$lang$applyTo = (function (arglist__7949){
var args = cljs.core.seq(arglist__7949);;
return G__7948__delegate(args);
});
G__7948.cljs$lang$arity$variadic = G__7948__delegate;
return G__7948;
})()
;
};
var G__7947 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7947__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__7947.cljs$lang$maxFixedArity = 4;
G__7947.cljs$lang$applyTo = (function (arglist__7950){
var f = cljs.core.first(arglist__7950);
var arg1 = cljs.core.first(cljs.core.next(arglist__7950));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7950)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7950))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7950))));
return G__7947__delegate(f, arg1, arg2, arg3, more);
});
G__7947.cljs$lang$arity$variadic = G__7947__delegate;
return G__7947;
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
var G__7951 = null;
var G__7951__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__7951__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__7951__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__7951__4 = (function() { 
var G__7952__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__7952 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7952__delegate.call(this, a, b, c, ds);
};
G__7952.cljs$lang$maxFixedArity = 3;
G__7952.cljs$lang$applyTo = (function (arglist__7953){
var a = cljs.core.first(arglist__7953);
var b = cljs.core.first(cljs.core.next(arglist__7953));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7953)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7953)));
return G__7952__delegate(a, b, c, ds);
});
G__7952.cljs$lang$arity$variadic = G__7952__delegate;
return G__7952;
})()
;
G__7951 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__7951__1.call(this,a);
case 2:
return G__7951__2.call(this,a,b);
case 3:
return G__7951__3.call(this,a,b,c);
default:
return G__7951__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7951.cljs$lang$maxFixedArity = 3;
G__7951.cljs$lang$applyTo = G__7951__4.cljs$lang$applyTo;
return G__7951;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__7954 = null;
var G__7954__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7954__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__7954__4 = (function() { 
var G__7955__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__7955 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7955__delegate.call(this, a, b, c, ds);
};
G__7955.cljs$lang$maxFixedArity = 3;
G__7955.cljs$lang$applyTo = (function (arglist__7956){
var a = cljs.core.first(arglist__7956);
var b = cljs.core.first(cljs.core.next(arglist__7956));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7956)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7956)));
return G__7955__delegate(a, b, c, ds);
});
G__7955.cljs$lang$arity$variadic = G__7955__delegate;
return G__7955;
})()
;
G__7954 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7954__2.call(this,a,b);
case 3:
return G__7954__3.call(this,a,b,c);
default:
return G__7954__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7954.cljs$lang$maxFixedArity = 3;
G__7954.cljs$lang$applyTo = G__7954__4.cljs$lang$applyTo;
return G__7954;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__7957 = null;
var G__7957__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7957__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__7957__4 = (function() { 
var G__7958__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__7958 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7958__delegate.call(this, a, b, c, ds);
};
G__7958.cljs$lang$maxFixedArity = 3;
G__7958.cljs$lang$applyTo = (function (arglist__7959){
var a = cljs.core.first(arglist__7959);
var b = cljs.core.first(cljs.core.next(arglist__7959));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7959)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7959)));
return G__7958__delegate(a, b, c, ds);
});
G__7958.cljs$lang$arity$variadic = G__7958__delegate;
return G__7958;
})()
;
G__7957 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7957__2.call(this,a,b);
case 3:
return G__7957__3.call(this,a,b,c);
default:
return G__7957__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7957.cljs$lang$maxFixedArity = 3;
G__7957.cljs$lang$applyTo = G__7957__4.cljs$lang$applyTo;
return G__7957;
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
var mapi__7975 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7983 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7983)
{var s__7984 = temp__3974__auto____7983;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7984))
{var c__7985 = cljs.core.chunk_first.call(null,s__7984);
var size__7986 = cljs.core.count.call(null,c__7985);
var b__7987 = cljs.core.chunk_buffer.call(null,size__7986);
var n__2492__auto____7988 = size__7986;
var i__7989 = 0;
while(true){
if((i__7989 < n__2492__auto____7988))
{cljs.core.chunk_append.call(null,b__7987,f.call(null,(idx + i__7989),cljs.core._nth.call(null,c__7985,i__7989)));
{
var G__7990 = (i__7989 + 1);
i__7989 = G__7990;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7987),mapi.call(null,(idx + size__7986),cljs.core.chunk_rest.call(null,s__7984)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__7984)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__7984)));
}
} else
{return null;
}
}),null));
});
return mapi__7975.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8000 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8000)
{var s__8001 = temp__3974__auto____8000;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8001))
{var c__8002 = cljs.core.chunk_first.call(null,s__8001);
var size__8003 = cljs.core.count.call(null,c__8002);
var b__8004 = cljs.core.chunk_buffer.call(null,size__8003);
var n__2492__auto____8005 = size__8003;
var i__8006 = 0;
while(true){
if((i__8006 < n__2492__auto____8005))
{var x__8007 = f.call(null,cljs.core._nth.call(null,c__8002,i__8006));
if((x__8007 == null))
{} else
{cljs.core.chunk_append.call(null,b__8004,x__8007);
}
{
var G__8009 = (i__8006 + 1);
i__8006 = G__8009;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8004),keep.call(null,f,cljs.core.chunk_rest.call(null,s__8001)));
} else
{var x__8008 = f.call(null,cljs.core.first.call(null,s__8001));
if((x__8008 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__8001));
} else
{return cljs.core.cons.call(null,x__8008,keep.call(null,f,cljs.core.rest.call(null,s__8001)));
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
var keepi__8035 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8045 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8045)
{var s__8046 = temp__3974__auto____8045;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8046))
{var c__8047 = cljs.core.chunk_first.call(null,s__8046);
var size__8048 = cljs.core.count.call(null,c__8047);
var b__8049 = cljs.core.chunk_buffer.call(null,size__8048);
var n__2492__auto____8050 = size__8048;
var i__8051 = 0;
while(true){
if((i__8051 < n__2492__auto____8050))
{var x__8052 = f.call(null,(idx + i__8051),cljs.core._nth.call(null,c__8047,i__8051));
if((x__8052 == null))
{} else
{cljs.core.chunk_append.call(null,b__8049,x__8052);
}
{
var G__8054 = (i__8051 + 1);
i__8051 = G__8054;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8049),keepi.call(null,(idx + size__8048),cljs.core.chunk_rest.call(null,s__8046)));
} else
{var x__8053 = f.call(null,idx,cljs.core.first.call(null,s__8046));
if((x__8053 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__8046));
} else
{return cljs.core.cons.call(null,x__8053,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__8046)));
}
}
} else
{return null;
}
}),null));
});
return keepi__8035.call(null,0,coll);
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8140 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____8140))
{return p.call(null,y);
} else
{return and__3822__auto____8140;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8141 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____8141))
{var and__3822__auto____8142 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____8142))
{return p.call(null,z);
} else
{return and__3822__auto____8142;
}
} else
{return and__3822__auto____8141;
}
})());
});
var ep1__4 = (function() { 
var G__8211__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8143 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8143))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____8143;
}
})());
};
var G__8211 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8211__delegate.call(this, x, y, z, args);
};
G__8211.cljs$lang$maxFixedArity = 3;
G__8211.cljs$lang$applyTo = (function (arglist__8212){
var x = cljs.core.first(arglist__8212);
var y = cljs.core.first(cljs.core.next(arglist__8212));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8212)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8212)));
return G__8211__delegate(x, y, z, args);
});
G__8211.cljs$lang$arity$variadic = G__8211__delegate;
return G__8211;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8155 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8155))
{return p2.call(null,x);
} else
{return and__3822__auto____8155;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8156 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8156))
{var and__3822__auto____8157 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8157))
{var and__3822__auto____8158 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8158))
{return p2.call(null,y);
} else
{return and__3822__auto____8158;
}
} else
{return and__3822__auto____8157;
}
} else
{return and__3822__auto____8156;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8159 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8159))
{var and__3822__auto____8160 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8160))
{var and__3822__auto____8161 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____8161))
{var and__3822__auto____8162 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8162))
{var and__3822__auto____8163 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8163))
{return p2.call(null,z);
} else
{return and__3822__auto____8163;
}
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
})());
});
var ep2__4 = (function() { 
var G__8213__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8164 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8164))
{return cljs.core.every_QMARK_.call(null,(function (p1__8010_SHARP_){
var and__3822__auto____8165 = p1.call(null,p1__8010_SHARP_);
if(cljs.core.truth_(and__3822__auto____8165))
{return p2.call(null,p1__8010_SHARP_);
} else
{return and__3822__auto____8165;
}
}),args);
} else
{return and__3822__auto____8164;
}
})());
};
var G__8213 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8213__delegate.call(this, x, y, z, args);
};
G__8213.cljs$lang$maxFixedArity = 3;
G__8213.cljs$lang$applyTo = (function (arglist__8214){
var x = cljs.core.first(arglist__8214);
var y = cljs.core.first(cljs.core.next(arglist__8214));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8214)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8214)));
return G__8213__delegate(x, y, z, args);
});
G__8213.cljs$lang$arity$variadic = G__8213__delegate;
return G__8213;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8184 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8184))
{var and__3822__auto____8185 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8185))
{return p3.call(null,x);
} else
{return and__3822__auto____8185;
}
} else
{return and__3822__auto____8184;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8186 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8186))
{var and__3822__auto____8187 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8187))
{var and__3822__auto____8188 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____8188))
{var and__3822__auto____8189 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8189))
{var and__3822__auto____8190 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8190))
{return p3.call(null,y);
} else
{return and__3822__auto____8190;
}
} else
{return and__3822__auto____8189;
}
} else
{return and__3822__auto____8188;
}
} else
{return and__3822__auto____8187;
}
} else
{return and__3822__auto____8186;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8191 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8191))
{var and__3822__auto____8192 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8192))
{var and__3822__auto____8193 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____8193))
{var and__3822__auto____8194 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8194))
{var and__3822__auto____8195 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8195))
{var and__3822__auto____8196 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____8196))
{var and__3822__auto____8197 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____8197))
{var and__3822__auto____8198 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____8198))
{return p3.call(null,z);
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
} else
{return and__3822__auto____8193;
}
} else
{return and__3822__auto____8192;
}
} else
{return and__3822__auto____8191;
}
})());
});
var ep3__4 = (function() { 
var G__8215__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8199 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8199))
{return cljs.core.every_QMARK_.call(null,(function (p1__8011_SHARP_){
var and__3822__auto____8200 = p1.call(null,p1__8011_SHARP_);
if(cljs.core.truth_(and__3822__auto____8200))
{var and__3822__auto____8201 = p2.call(null,p1__8011_SHARP_);
if(cljs.core.truth_(and__3822__auto____8201))
{return p3.call(null,p1__8011_SHARP_);
} else
{return and__3822__auto____8201;
}
} else
{return and__3822__auto____8200;
}
}),args);
} else
{return and__3822__auto____8199;
}
})());
};
var G__8215 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8215__delegate.call(this, x, y, z, args);
};
G__8215.cljs$lang$maxFixedArity = 3;
G__8215.cljs$lang$applyTo = (function (arglist__8216){
var x = cljs.core.first(arglist__8216);
var y = cljs.core.first(cljs.core.next(arglist__8216));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8216)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8216)));
return G__8215__delegate(x, y, z, args);
});
G__8215.cljs$lang$arity$variadic = G__8215__delegate;
return G__8215;
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
var G__8217__delegate = function (p1,p2,p3,ps){
var ps__8202 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__8012_SHARP_){
return p1__8012_SHARP_.call(null,x);
}),ps__8202);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__8013_SHARP_){
var and__3822__auto____8207 = p1__8013_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____8207))
{return p1__8013_SHARP_.call(null,y);
} else
{return and__3822__auto____8207;
}
}),ps__8202);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__8014_SHARP_){
var and__3822__auto____8208 = p1__8014_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____8208))
{var and__3822__auto____8209 = p1__8014_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____8209))
{return p1__8014_SHARP_.call(null,z);
} else
{return and__3822__auto____8209;
}
} else
{return and__3822__auto____8208;
}
}),ps__8202);
});
var epn__4 = (function() { 
var G__8218__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8210 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8210))
{return cljs.core.every_QMARK_.call(null,(function (p1__8015_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__8015_SHARP_,args);
}),ps__8202);
} else
{return and__3822__auto____8210;
}
})());
};
var G__8218 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8218__delegate.call(this, x, y, z, args);
};
G__8218.cljs$lang$maxFixedArity = 3;
G__8218.cljs$lang$applyTo = (function (arglist__8219){
var x = cljs.core.first(arglist__8219);
var y = cljs.core.first(cljs.core.next(arglist__8219));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8219)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8219)));
return G__8218__delegate(x, y, z, args);
});
G__8218.cljs$lang$arity$variadic = G__8218__delegate;
return G__8218;
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
var G__8217 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8217__delegate.call(this, p1, p2, p3, ps);
};
G__8217.cljs$lang$maxFixedArity = 3;
G__8217.cljs$lang$applyTo = (function (arglist__8220){
var p1 = cljs.core.first(arglist__8220);
var p2 = cljs.core.first(cljs.core.next(arglist__8220));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8220)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8220)));
return G__8217__delegate(p1, p2, p3, ps);
});
G__8217.cljs$lang$arity$variadic = G__8217__delegate;
return G__8217;
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
var or__3824__auto____8301 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____8301))
{return or__3824__auto____8301;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____8302 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____8302))
{return or__3824__auto____8302;
} else
{var or__3824__auto____8303 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____8303))
{return or__3824__auto____8303;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__8372__delegate = function (x,y,z,args){
var or__3824__auto____8304 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8304))
{return or__3824__auto____8304;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__8372 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8372__delegate.call(this, x, y, z, args);
};
G__8372.cljs$lang$maxFixedArity = 3;
G__8372.cljs$lang$applyTo = (function (arglist__8373){
var x = cljs.core.first(arglist__8373);
var y = cljs.core.first(cljs.core.next(arglist__8373));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8373)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8373)));
return G__8372__delegate(x, y, z, args);
});
G__8372.cljs$lang$arity$variadic = G__8372__delegate;
return G__8372;
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
var or__3824__auto____8316 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8316))
{return or__3824__auto____8316;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____8317 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8317))
{return or__3824__auto____8317;
} else
{var or__3824__auto____8318 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8318))
{return or__3824__auto____8318;
} else
{var or__3824__auto____8319 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8319))
{return or__3824__auto____8319;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____8320 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8320))
{return or__3824__auto____8320;
} else
{var or__3824__auto____8321 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8321))
{return or__3824__auto____8321;
} else
{var or__3824__auto____8322 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____8322))
{return or__3824__auto____8322;
} else
{var or__3824__auto____8323 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8323))
{return or__3824__auto____8323;
} else
{var or__3824__auto____8324 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8324))
{return or__3824__auto____8324;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__8374__delegate = function (x,y,z,args){
var or__3824__auto____8325 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8325))
{return or__3824__auto____8325;
} else
{return cljs.core.some.call(null,(function (p1__8055_SHARP_){
var or__3824__auto____8326 = p1.call(null,p1__8055_SHARP_);
if(cljs.core.truth_(or__3824__auto____8326))
{return or__3824__auto____8326;
} else
{return p2.call(null,p1__8055_SHARP_);
}
}),args);
}
};
var G__8374 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8374__delegate.call(this, x, y, z, args);
};
G__8374.cljs$lang$maxFixedArity = 3;
G__8374.cljs$lang$applyTo = (function (arglist__8375){
var x = cljs.core.first(arglist__8375);
var y = cljs.core.first(cljs.core.next(arglist__8375));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8375)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8375)));
return G__8374__delegate(x, y, z, args);
});
G__8374.cljs$lang$arity$variadic = G__8374__delegate;
return G__8374;
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
var or__3824__auto____8345 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8345))
{return or__3824__auto____8345;
} else
{var or__3824__auto____8346 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8346))
{return or__3824__auto____8346;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____8347 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8347))
{return or__3824__auto____8347;
} else
{var or__3824__auto____8348 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8348))
{return or__3824__auto____8348;
} else
{var or__3824__auto____8349 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____8349))
{return or__3824__auto____8349;
} else
{var or__3824__auto____8350 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8350))
{return or__3824__auto____8350;
} else
{var or__3824__auto____8351 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8351))
{return or__3824__auto____8351;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____8352 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8352))
{return or__3824__auto____8352;
} else
{var or__3824__auto____8353 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8353))
{return or__3824__auto____8353;
} else
{var or__3824__auto____8354 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____8354))
{return or__3824__auto____8354;
} else
{var or__3824__auto____8355 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8355))
{return or__3824__auto____8355;
} else
{var or__3824__auto____8356 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8356))
{return or__3824__auto____8356;
} else
{var or__3824__auto____8357 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____8357))
{return or__3824__auto____8357;
} else
{var or__3824__auto____8358 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____8358))
{return or__3824__auto____8358;
} else
{var or__3824__auto____8359 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____8359))
{return or__3824__auto____8359;
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
var G__8376__delegate = function (x,y,z,args){
var or__3824__auto____8360 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8360))
{return or__3824__auto____8360;
} else
{return cljs.core.some.call(null,(function (p1__8056_SHARP_){
var or__3824__auto____8361 = p1.call(null,p1__8056_SHARP_);
if(cljs.core.truth_(or__3824__auto____8361))
{return or__3824__auto____8361;
} else
{var or__3824__auto____8362 = p2.call(null,p1__8056_SHARP_);
if(cljs.core.truth_(or__3824__auto____8362))
{return or__3824__auto____8362;
} else
{return p3.call(null,p1__8056_SHARP_);
}
}
}),args);
}
};
var G__8376 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8376__delegate.call(this, x, y, z, args);
};
G__8376.cljs$lang$maxFixedArity = 3;
G__8376.cljs$lang$applyTo = (function (arglist__8377){
var x = cljs.core.first(arglist__8377);
var y = cljs.core.first(cljs.core.next(arglist__8377));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8377)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8377)));
return G__8376__delegate(x, y, z, args);
});
G__8376.cljs$lang$arity$variadic = G__8376__delegate;
return G__8376;
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
var G__8378__delegate = function (p1,p2,p3,ps){
var ps__8363 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__8057_SHARP_){
return p1__8057_SHARP_.call(null,x);
}),ps__8363);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__8058_SHARP_){
var or__3824__auto____8368 = p1__8058_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____8368))
{return or__3824__auto____8368;
} else
{return p1__8058_SHARP_.call(null,y);
}
}),ps__8363);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__8059_SHARP_){
var or__3824__auto____8369 = p1__8059_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____8369))
{return or__3824__auto____8369;
} else
{var or__3824__auto____8370 = p1__8059_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____8370))
{return or__3824__auto____8370;
} else
{return p1__8059_SHARP_.call(null,z);
}
}
}),ps__8363);
});
var spn__4 = (function() { 
var G__8379__delegate = function (x,y,z,args){
var or__3824__auto____8371 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8371))
{return or__3824__auto____8371;
} else
{return cljs.core.some.call(null,(function (p1__8060_SHARP_){
return cljs.core.some.call(null,p1__8060_SHARP_,args);
}),ps__8363);
}
};
var G__8379 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8379__delegate.call(this, x, y, z, args);
};
G__8379.cljs$lang$maxFixedArity = 3;
G__8379.cljs$lang$applyTo = (function (arglist__8380){
var x = cljs.core.first(arglist__8380);
var y = cljs.core.first(cljs.core.next(arglist__8380));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8380)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8380)));
return G__8379__delegate(x, y, z, args);
});
G__8379.cljs$lang$arity$variadic = G__8379__delegate;
return G__8379;
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
var G__8378 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8378__delegate.call(this, p1, p2, p3, ps);
};
G__8378.cljs$lang$maxFixedArity = 3;
G__8378.cljs$lang$applyTo = (function (arglist__8381){
var p1 = cljs.core.first(arglist__8381);
var p2 = cljs.core.first(cljs.core.next(arglist__8381));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8381)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8381)));
return G__8378__delegate(p1, p2, p3, ps);
});
G__8378.cljs$lang$arity$variadic = G__8378__delegate;
return G__8378;
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
var temp__3974__auto____8400 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8400)
{var s__8401 = temp__3974__auto____8400;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8401))
{var c__8402 = cljs.core.chunk_first.call(null,s__8401);
var size__8403 = cljs.core.count.call(null,c__8402);
var b__8404 = cljs.core.chunk_buffer.call(null,size__8403);
var n__2492__auto____8405 = size__8403;
var i__8406 = 0;
while(true){
if((i__8406 < n__2492__auto____8405))
{cljs.core.chunk_append.call(null,b__8404,f.call(null,cljs.core._nth.call(null,c__8402,i__8406)));
{
var G__8418 = (i__8406 + 1);
i__8406 = G__8418;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8404),map.call(null,f,cljs.core.chunk_rest.call(null,s__8401)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__8401)),map.call(null,f,cljs.core.rest.call(null,s__8401)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8407 = cljs.core.seq.call(null,c1);
var s2__8408 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____8409 = s1__8407;
if(and__3822__auto____8409)
{return s2__8408;
} else
{return and__3822__auto____8409;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8407),cljs.core.first.call(null,s2__8408)),map.call(null,f,cljs.core.rest.call(null,s1__8407),cljs.core.rest.call(null,s2__8408)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8410 = cljs.core.seq.call(null,c1);
var s2__8411 = cljs.core.seq.call(null,c2);
var s3__8412 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____8413 = s1__8410;
if(and__3822__auto____8413)
{var and__3822__auto____8414 = s2__8411;
if(and__3822__auto____8414)
{return s3__8412;
} else
{return and__3822__auto____8414;
}
} else
{return and__3822__auto____8413;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8410),cljs.core.first.call(null,s2__8411),cljs.core.first.call(null,s3__8412)),map.call(null,f,cljs.core.rest.call(null,s1__8410),cljs.core.rest.call(null,s2__8411),cljs.core.rest.call(null,s3__8412)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__8419__delegate = function (f,c1,c2,c3,colls){
var step__8417 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8416 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8416))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__8416),step.call(null,map.call(null,cljs.core.rest,ss__8416)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__8221_SHARP_){
return cljs.core.apply.call(null,f,p1__8221_SHARP_);
}),step__8417.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__8419 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8419__delegate.call(this, f, c1, c2, c3, colls);
};
G__8419.cljs$lang$maxFixedArity = 4;
G__8419.cljs$lang$applyTo = (function (arglist__8420){
var f = cljs.core.first(arglist__8420);
var c1 = cljs.core.first(cljs.core.next(arglist__8420));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8420)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8420))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8420))));
return G__8419__delegate(f, c1, c2, c3, colls);
});
G__8419.cljs$lang$arity$variadic = G__8419__delegate;
return G__8419;
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
{var temp__3974__auto____8423 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8423)
{var s__8424 = temp__3974__auto____8423;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__8424),take.call(null,(n - 1),cljs.core.rest.call(null,s__8424)));
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
var step__8430 = (function (n,coll){
while(true){
var s__8428 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____8429 = (n > 0);
if(and__3822__auto____8429)
{return s__8428;
} else
{return and__3822__auto____8429;
}
})()))
{{
var G__8431 = (n - 1);
var G__8432 = cljs.core.rest.call(null,s__8428);
n = G__8431;
coll = G__8432;
continue;
}
} else
{return s__8428;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__8430.call(null,n,coll);
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
var s__8435 = cljs.core.seq.call(null,coll);
var lead__8436 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__8436)
{{
var G__8437 = cljs.core.next.call(null,s__8435);
var G__8438 = cljs.core.next.call(null,lead__8436);
s__8435 = G__8437;
lead__8436 = G__8438;
continue;
}
} else
{return s__8435;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__8444 = (function (pred,coll){
while(true){
var s__8442 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____8443 = s__8442;
if(and__3822__auto____8443)
{return pred.call(null,cljs.core.first.call(null,s__8442));
} else
{return and__3822__auto____8443;
}
})()))
{{
var G__8445 = pred;
var G__8446 = cljs.core.rest.call(null,s__8442);
pred = G__8445;
coll = G__8446;
continue;
}
} else
{return s__8442;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__8444.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8449 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8449)
{var s__8450 = temp__3974__auto____8449;
return cljs.core.concat.call(null,s__8450,cycle.call(null,s__8450));
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
var s1__8455 = cljs.core.seq.call(null,c1);
var s2__8456 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____8457 = s1__8455;
if(and__3822__auto____8457)
{return s2__8456;
} else
{return and__3822__auto____8457;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__8455),cljs.core.cons.call(null,cljs.core.first.call(null,s2__8456),interleave.call(null,cljs.core.rest.call(null,s1__8455),cljs.core.rest.call(null,s2__8456))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__8459__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8458 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8458))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__8458),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__8458)));
} else
{return null;
}
}),null));
};
var G__8459 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8459__delegate.call(this, c1, c2, colls);
};
G__8459.cljs$lang$maxFixedArity = 2;
G__8459.cljs$lang$applyTo = (function (arglist__8460){
var c1 = cljs.core.first(arglist__8460);
var c2 = cljs.core.first(cljs.core.next(arglist__8460));
var colls = cljs.core.rest(cljs.core.next(arglist__8460));
return G__8459__delegate(c1, c2, colls);
});
G__8459.cljs$lang$arity$variadic = G__8459__delegate;
return G__8459;
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
var cat__8470 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____8468 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____8468)
{var coll__8469 = temp__3971__auto____8468;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__8469),cat.call(null,cljs.core.rest.call(null,coll__8469),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__8470.call(null,null,colls);
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
var G__8471__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__8471 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8471__delegate.call(this, f, coll, colls);
};
G__8471.cljs$lang$maxFixedArity = 2;
G__8471.cljs$lang$applyTo = (function (arglist__8472){
var f = cljs.core.first(arglist__8472);
var coll = cljs.core.first(cljs.core.next(arglist__8472));
var colls = cljs.core.rest(cljs.core.next(arglist__8472));
return G__8471__delegate(f, coll, colls);
});
G__8471.cljs$lang$arity$variadic = G__8471__delegate;
return G__8471;
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
var temp__3974__auto____8482 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8482)
{var s__8483 = temp__3974__auto____8482;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8483))
{var c__8484 = cljs.core.chunk_first.call(null,s__8483);
var size__8485 = cljs.core.count.call(null,c__8484);
var b__8486 = cljs.core.chunk_buffer.call(null,size__8485);
var n__2492__auto____8487 = size__8485;
var i__8488 = 0;
while(true){
if((i__8488 < n__2492__auto____8487))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__8484,i__8488))))
{cljs.core.chunk_append.call(null,b__8486,cljs.core._nth.call(null,c__8484,i__8488));
} else
{}
{
var G__8491 = (i__8488 + 1);
i__8488 = G__8491;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8486),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__8483)));
} else
{var f__8489 = cljs.core.first.call(null,s__8483);
var r__8490 = cljs.core.rest.call(null,s__8483);
if(cljs.core.truth_(pred.call(null,f__8489)))
{return cljs.core.cons.call(null,f__8489,filter.call(null,pred,r__8490));
} else
{return filter.call(null,pred,r__8490);
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
var walk__8494 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__8494.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__8492_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__8492_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__8498__8499 = to;
if(G__8498__8499)
{if((function (){var or__3824__auto____8500 = (G__8498__8499.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3824__auto____8500)
{return or__3824__auto____8500;
} else
{return G__8498__8499.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__8498__8499.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__8498__8499);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__8498__8499);
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
var G__8501__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__8501 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8501__delegate.call(this, f, c1, c2, c3, colls);
};
G__8501.cljs$lang$maxFixedArity = 4;
G__8501.cljs$lang$applyTo = (function (arglist__8502){
var f = cljs.core.first(arglist__8502);
var c1 = cljs.core.first(cljs.core.next(arglist__8502));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8502)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8502))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8502))));
return G__8501__delegate(f, c1, c2, c3, colls);
});
G__8501.cljs$lang$arity$variadic = G__8501__delegate;
return G__8501;
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
var temp__3974__auto____8509 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8509)
{var s__8510 = temp__3974__auto____8509;
var p__8511 = cljs.core.take.call(null,n,s__8510);
if((n === cljs.core.count.call(null,p__8511)))
{return cljs.core.cons.call(null,p__8511,partition.call(null,n,step,cljs.core.drop.call(null,step,s__8510)));
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
var temp__3974__auto____8512 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8512)
{var s__8513 = temp__3974__auto____8512;
var p__8514 = cljs.core.take.call(null,n,s__8513);
if((n === cljs.core.count.call(null,p__8514)))
{return cljs.core.cons.call(null,p__8514,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__8513)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__8514,pad)));
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
var sentinel__8519 = cljs.core.lookup_sentinel;
var m__8520 = m;
var ks__8521 = cljs.core.seq.call(null,ks);
while(true){
if(ks__8521)
{var m__8522 = cljs.core._lookup.call(null,m__8520,cljs.core.first.call(null,ks__8521),sentinel__8519);
if((sentinel__8519 === m__8522))
{return not_found;
} else
{{
var G__8523 = sentinel__8519;
var G__8524 = m__8522;
var G__8525 = cljs.core.next.call(null,ks__8521);
sentinel__8519 = G__8523;
m__8520 = G__8524;
ks__8521 = G__8525;
continue;
}
}
} else
{return m__8520;
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
cljs.core.assoc_in = (function assoc_in(m,p__8526,v){
var vec__8531__8532 = p__8526;
var k__8533 = cljs.core.nth.call(null,vec__8531__8532,0,null);
var ks__8534 = cljs.core.nthnext.call(null,vec__8531__8532,1);
if(cljs.core.truth_(ks__8534))
{return cljs.core.assoc.call(null,m,k__8533,assoc_in.call(null,cljs.core._lookup.call(null,m,k__8533,null),ks__8534,v));
} else
{return cljs.core.assoc.call(null,m,k__8533,v);
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
var update_in__delegate = function (m,p__8535,f,args){
var vec__8540__8541 = p__8535;
var k__8542 = cljs.core.nth.call(null,vec__8540__8541,0,null);
var ks__8543 = cljs.core.nthnext.call(null,vec__8540__8541,1);
if(cljs.core.truth_(ks__8543))
{return cljs.core.assoc.call(null,m,k__8542,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__8542,null),ks__8543,f,args));
} else
{return cljs.core.assoc.call(null,m,k__8542,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__8542,null),args));
}
};
var update_in = function (m,p__8535,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__8535, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__8544){
var m = cljs.core.first(arglist__8544);
var p__8535 = cljs.core.first(cljs.core.next(arglist__8544));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8544)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8544)));
return update_in__delegate(m, p__8535, f, args);
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
var this__8547 = this;
var h__2153__auto____8548 = this__8547.__hash;
if(!((h__2153__auto____8548 == null)))
{return h__2153__auto____8548;
} else
{var h__2153__auto____8549 = cljs.core.hash_coll.call(null,coll);
this__8547.__hash = h__2153__auto____8549;
return h__2153__auto____8549;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8550 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8551 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8552 = this;
var new_array__8553 = this__8552.array.slice();
(new_array__8553[k] = v);
return (new cljs.core.Vector(this__8552.meta,new_array__8553,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__8584 = null;
var G__8584__2 = (function (this_sym8554,k){
var this__8556 = this;
var this_sym8554__8557 = this;
var coll__8558 = this_sym8554__8557;
return coll__8558.cljs$core$ILookup$_lookup$arity$2(coll__8558,k);
});
var G__8584__3 = (function (this_sym8555,k,not_found){
var this__8556 = this;
var this_sym8555__8559 = this;
var coll__8560 = this_sym8555__8559;
return coll__8560.cljs$core$ILookup$_lookup$arity$3(coll__8560,k,not_found);
});
G__8584 = function(this_sym8555,k,not_found){
switch(arguments.length){
case 2:
return G__8584__2.call(this,this_sym8555,k);
case 3:
return G__8584__3.call(this,this_sym8555,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8584;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym8545,args8546){
var this__8561 = this;
return this_sym8545.call.apply(this_sym8545,[this_sym8545].concat(args8546.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8562 = this;
var new_array__8563 = this__8562.array.slice();
new_array__8563.push(o);
return (new cljs.core.Vector(this__8562.meta,new_array__8563,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__8564 = this;
var this__8565 = this;
return cljs.core.pr_str.call(null,this__8565);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8566 = this;
return cljs.core.ci_reduce.call(null,this__8566.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8567 = this;
return cljs.core.ci_reduce.call(null,this__8567.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8568 = this;
if((this__8568.array.length > 0))
{var vector_seq__8569 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__8568.array.length))
{return cljs.core.cons.call(null,(this__8568.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__8569.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8570 = this;
return this__8570.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8571 = this;
var count__8572 = this__8571.array.length;
if((count__8572 > 0))
{return (this__8571.array[(count__8572 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8573 = this;
if((this__8573.array.length > 0))
{var new_array__8574 = this__8573.array.slice();
new_array__8574.pop();
return (new cljs.core.Vector(this__8573.meta,new_array__8574,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8575 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8576 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8577 = this;
return (new cljs.core.Vector(meta,this__8577.array,this__8577.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8578 = this;
return this__8578.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8579 = this;
if((function (){var and__3822__auto____8580 = (0 <= n);
if(and__3822__auto____8580)
{return (n < this__8579.array.length);
} else
{return and__3822__auto____8580;
}
})())
{return (this__8579.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8581 = this;
if((function (){var and__3822__auto____8582 = (0 <= n);
if(and__3822__auto____8582)
{return (n < this__8581.array.length);
} else
{return and__3822__auto____8582;
}
})())
{return (this__8581.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8583 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8583.meta);
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
var cnt__8586 = pv.cnt;
if((cnt__8586 < 32))
{return 0;
} else
{return (((cnt__8586 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__8592 = level;
var ret__8593 = node;
while(true){
if((ll__8592 === 0))
{return ret__8593;
} else
{var embed__8594 = ret__8593;
var r__8595 = cljs.core.pv_fresh_node.call(null,edit);
var ___8596 = cljs.core.pv_aset.call(null,r__8595,0,embed__8594);
{
var G__8597 = (ll__8592 - 5);
var G__8598 = r__8595;
ll__8592 = G__8597;
ret__8593 = G__8598;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__8604 = cljs.core.pv_clone_node.call(null,parent);
var subidx__8605 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__8604,subidx__8605,tailnode);
return ret__8604;
} else
{var child__8606 = cljs.core.pv_aget.call(null,parent,subidx__8605);
if(!((child__8606 == null)))
{var node_to_insert__8607 = push_tail.call(null,pv,(level - 5),child__8606,tailnode);
cljs.core.pv_aset.call(null,ret__8604,subidx__8605,node_to_insert__8607);
return ret__8604;
} else
{var node_to_insert__8608 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__8604,subidx__8605,node_to_insert__8608);
return ret__8604;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____8612 = (0 <= i);
if(and__3822__auto____8612)
{return (i < pv.cnt);
} else
{return and__3822__auto____8612;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__8613 = pv.root;
var level__8614 = pv.shift;
while(true){
if((level__8614 > 0))
{{
var G__8615 = cljs.core.pv_aget.call(null,node__8613,((i >>> level__8614) & 31));
var G__8616 = (level__8614 - 5);
node__8613 = G__8615;
level__8614 = G__8616;
continue;
}
} else
{return node__8613.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__8619 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__8619,(i & 31),val);
return ret__8619;
} else
{var subidx__8620 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8619,subidx__8620,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8620),i,val));
return ret__8619;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__8626 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8627 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8626));
if((function (){var and__3822__auto____8628 = (new_child__8627 == null);
if(and__3822__auto____8628)
{return (subidx__8626 === 0);
} else
{return and__3822__auto____8628;
}
})())
{return null;
} else
{var ret__8629 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8629,subidx__8626,new_child__8627);
return ret__8629;
}
} else
{if((subidx__8626 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__8630 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8630,subidx__8626,null);
return ret__8630;
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
var this__8633 = this;
return (new cljs.core.TransientVector(this__8633.cnt,this__8633.shift,cljs.core.tv_editable_root.call(null,this__8633.root),cljs.core.tv_editable_tail.call(null,this__8633.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8634 = this;
var h__2153__auto____8635 = this__8634.__hash;
if(!((h__2153__auto____8635 == null)))
{return h__2153__auto____8635;
} else
{var h__2153__auto____8636 = cljs.core.hash_coll.call(null,coll);
this__8634.__hash = h__2153__auto____8636;
return h__2153__auto____8636;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8637 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8638 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8639 = this;
if((function (){var and__3822__auto____8640 = (0 <= k);
if(and__3822__auto____8640)
{return (k < this__8639.cnt);
} else
{return and__3822__auto____8640;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__8641 = this__8639.tail.slice();
(new_tail__8641[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__8639.meta,this__8639.cnt,this__8639.shift,this__8639.root,new_tail__8641,null));
} else
{return (new cljs.core.PersistentVector(this__8639.meta,this__8639.cnt,this__8639.shift,cljs.core.do_assoc.call(null,coll,this__8639.shift,this__8639.root,k,v),this__8639.tail,null));
}
} else
{if((k === this__8639.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__8639.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__8689 = null;
var G__8689__2 = (function (this_sym8642,k){
var this__8644 = this;
var this_sym8642__8645 = this;
var coll__8646 = this_sym8642__8645;
return coll__8646.cljs$core$ILookup$_lookup$arity$2(coll__8646,k);
});
var G__8689__3 = (function (this_sym8643,k,not_found){
var this__8644 = this;
var this_sym8643__8647 = this;
var coll__8648 = this_sym8643__8647;
return coll__8648.cljs$core$ILookup$_lookup$arity$3(coll__8648,k,not_found);
});
G__8689 = function(this_sym8643,k,not_found){
switch(arguments.length){
case 2:
return G__8689__2.call(this,this_sym8643,k);
case 3:
return G__8689__3.call(this,this_sym8643,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8689;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym8631,args8632){
var this__8649 = this;
return this_sym8631.call.apply(this_sym8631,[this_sym8631].concat(args8632.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__8650 = this;
var step_init__8651 = [0,init];
var i__8652 = 0;
while(true){
if((i__8652 < this__8650.cnt))
{var arr__8653 = cljs.core.array_for.call(null,v,i__8652);
var len__8654 = arr__8653.length;
var init__8658 = (function (){var j__8655 = 0;
var init__8656 = (step_init__8651[1]);
while(true){
if((j__8655 < len__8654))
{var init__8657 = f.call(null,init__8656,(j__8655 + i__8652),(arr__8653[j__8655]));
if(cljs.core.reduced_QMARK_.call(null,init__8657))
{return init__8657;
} else
{{
var G__8690 = (j__8655 + 1);
var G__8691 = init__8657;
j__8655 = G__8690;
init__8656 = G__8691;
continue;
}
}
} else
{(step_init__8651[0] = len__8654);
(step_init__8651[1] = init__8656);
return init__8656;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__8658))
{return cljs.core.deref.call(null,init__8658);
} else
{{
var G__8692 = (i__8652 + (step_init__8651[0]));
i__8652 = G__8692;
continue;
}
}
} else
{return (step_init__8651[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8659 = this;
if(((this__8659.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__8660 = this__8659.tail.slice();
new_tail__8660.push(o);
return (new cljs.core.PersistentVector(this__8659.meta,(this__8659.cnt + 1),this__8659.shift,this__8659.root,new_tail__8660,null));
} else
{var root_overflow_QMARK___8661 = ((this__8659.cnt >>> 5) > (1 << this__8659.shift));
var new_shift__8662 = ((root_overflow_QMARK___8661)?(this__8659.shift + 5):this__8659.shift);
var new_root__8664 = ((root_overflow_QMARK___8661)?(function (){var n_r__8663 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__8663,0,this__8659.root);
cljs.core.pv_aset.call(null,n_r__8663,1,cljs.core.new_path.call(null,null,this__8659.shift,(new cljs.core.VectorNode(null,this__8659.tail))));
return n_r__8663;
})():cljs.core.push_tail.call(null,coll,this__8659.shift,this__8659.root,(new cljs.core.VectorNode(null,this__8659.tail))));
return (new cljs.core.PersistentVector(this__8659.meta,(this__8659.cnt + 1),new_shift__8662,new_root__8664,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__8665 = this;
if((this__8665.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__8665.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__8666 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__8667 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__8668 = this;
var this__8669 = this;
return cljs.core.pr_str.call(null,this__8669);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8670 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8671 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8672 = this;
if((this__8672.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8673 = this;
return this__8673.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8674 = this;
if((this__8674.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__8674.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8675 = this;
if((this__8675.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8675.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8675.meta);
} else
{if((1 < (this__8675.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__8675.meta,(this__8675.cnt - 1),this__8675.shift,this__8675.root,this__8675.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__8676 = cljs.core.array_for.call(null,coll,(this__8675.cnt - 2));
var nr__8677 = cljs.core.pop_tail.call(null,coll,this__8675.shift,this__8675.root);
var new_root__8678 = (((nr__8677 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__8677);
var cnt_1__8679 = (this__8675.cnt - 1);
if((function (){var and__3822__auto____8680 = (5 < this__8675.shift);
if(and__3822__auto____8680)
{return (cljs.core.pv_aget.call(null,new_root__8678,1) == null);
} else
{return and__3822__auto____8680;
}
})())
{return (new cljs.core.PersistentVector(this__8675.meta,cnt_1__8679,(this__8675.shift - 5),cljs.core.pv_aget.call(null,new_root__8678,0),new_tail__8676,null));
} else
{return (new cljs.core.PersistentVector(this__8675.meta,cnt_1__8679,this__8675.shift,new_root__8678,new_tail__8676,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8681 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8682 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8683 = this;
return (new cljs.core.PersistentVector(meta,this__8683.cnt,this__8683.shift,this__8683.root,this__8683.tail,this__8683.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8684 = this;
return this__8684.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8685 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8686 = this;
if((function (){var and__3822__auto____8687 = (0 <= n);
if(and__3822__auto____8687)
{return (n < this__8686.cnt);
} else
{return and__3822__auto____8687;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8688 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8688.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__8693 = xs.length;
var xs__8694 = (((no_clone === true))?xs:xs.slice());
if((l__8693 < 32))
{return (new cljs.core.PersistentVector(null,l__8693,5,cljs.core.PersistentVector.EMPTY_NODE,xs__8694,null));
} else
{var node__8695 = xs__8694.slice(0,32);
var v__8696 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__8695,null));
var i__8697 = 32;
var out__8698 = cljs.core._as_transient.call(null,v__8696);
while(true){
if((i__8697 < l__8693))
{{
var G__8699 = (i__8697 + 1);
var G__8700 = cljs.core.conj_BANG_.call(null,out__8698,(xs__8694[i__8697]));
i__8697 = G__8699;
out__8698 = G__8700;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8698);
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
vector.cljs$lang$applyTo = (function (arglist__8701){
var args = cljs.core.seq(arglist__8701);;
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
var this__8702 = this;
if(((this__8702.off + 1) < this__8702.node.length))
{var s__8703 = cljs.core.chunked_seq.call(null,this__8702.vec,this__8702.node,this__8702.i,(this__8702.off + 1));
if((s__8703 == null))
{return null;
} else
{return s__8703;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8704 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8705 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8706 = this;
return (this__8706.node[this__8706.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8707 = this;
if(((this__8707.off + 1) < this__8707.node.length))
{var s__8708 = cljs.core.chunked_seq.call(null,this__8707.vec,this__8707.node,this__8707.i,(this__8707.off + 1));
if((s__8708 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8708;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__8709 = this;
var l__8710 = this__8709.node.length;
var s__8711 = ((((this__8709.i + l__8710) < cljs.core._count.call(null,this__8709.vec)))?cljs.core.chunked_seq.call(null,this__8709.vec,(this__8709.i + l__8710),0):null);
if((s__8711 == null))
{return null;
} else
{return s__8711;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8712 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__8713 = this;
return cljs.core.chunked_seq.call(null,this__8713.vec,this__8713.node,this__8713.i,this__8713.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__8714 = this;
return this__8714.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8715 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8715.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__8716 = this;
return cljs.core.array_chunk.call(null,this__8716.node,this__8716.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__8717 = this;
var l__8718 = this__8717.node.length;
var s__8719 = ((((this__8717.i + l__8718) < cljs.core._count.call(null,this__8717.vec)))?cljs.core.chunked_seq.call(null,this__8717.vec,(this__8717.i + l__8718),0):null);
if((s__8719 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8719;
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
var this__8722 = this;
var h__2153__auto____8723 = this__8722.__hash;
if(!((h__2153__auto____8723 == null)))
{return h__2153__auto____8723;
} else
{var h__2153__auto____8724 = cljs.core.hash_coll.call(null,coll);
this__8722.__hash = h__2153__auto____8724;
return h__2153__auto____8724;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8725 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8726 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__8727 = this;
var v_pos__8728 = (this__8727.start + key);
return (new cljs.core.Subvec(this__8727.meta,cljs.core._assoc.call(null,this__8727.v,v_pos__8728,val),this__8727.start,((this__8727.end > (v_pos__8728 + 1)) ? this__8727.end : (v_pos__8728 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__8754 = null;
var G__8754__2 = (function (this_sym8729,k){
var this__8731 = this;
var this_sym8729__8732 = this;
var coll__8733 = this_sym8729__8732;
return coll__8733.cljs$core$ILookup$_lookup$arity$2(coll__8733,k);
});
var G__8754__3 = (function (this_sym8730,k,not_found){
var this__8731 = this;
var this_sym8730__8734 = this;
var coll__8735 = this_sym8730__8734;
return coll__8735.cljs$core$ILookup$_lookup$arity$3(coll__8735,k,not_found);
});
G__8754 = function(this_sym8730,k,not_found){
switch(arguments.length){
case 2:
return G__8754__2.call(this,this_sym8730,k);
case 3:
return G__8754__3.call(this,this_sym8730,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8754;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym8720,args8721){
var this__8736 = this;
return this_sym8720.call.apply(this_sym8720,[this_sym8720].concat(args8721.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8737 = this;
return (new cljs.core.Subvec(this__8737.meta,cljs.core._assoc_n.call(null,this__8737.v,this__8737.end,o),this__8737.start,(this__8737.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__8738 = this;
var this__8739 = this;
return cljs.core.pr_str.call(null,this__8739);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__8740 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__8741 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8742 = this;
var subvec_seq__8743 = (function subvec_seq(i){
if((i === this__8742.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__8742.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__8743.call(null,this__8742.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8744 = this;
return (this__8744.end - this__8744.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8745 = this;
return cljs.core._nth.call(null,this__8745.v,(this__8745.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8746 = this;
if((this__8746.start === this__8746.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__8746.meta,this__8746.v,this__8746.start,(this__8746.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8747 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8748 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8749 = this;
return (new cljs.core.Subvec(meta,this__8749.v,this__8749.start,this__8749.end,this__8749.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8750 = this;
return this__8750.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8751 = this;
return cljs.core._nth.call(null,this__8751.v,(this__8751.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8752 = this;
return cljs.core._nth.call(null,this__8752.v,(this__8752.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8753 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8753.meta);
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
var ret__8756 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__8756,0,tl.length);
return ret__8756;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__8760 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__8761 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8760,subidx__8761,(((level === 5))?tail_node:(function (){var child__8762 = cljs.core.pv_aget.call(null,ret__8760,subidx__8761);
if(!((child__8762 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__8762,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__8760;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__8767 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__8768 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8769 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__8767,subidx__8768));
if((function (){var and__3822__auto____8770 = (new_child__8769 == null);
if(and__3822__auto____8770)
{return (subidx__8768 === 0);
} else
{return and__3822__auto____8770;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__8767,subidx__8768,new_child__8769);
return node__8767;
}
} else
{if((subidx__8768 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__8767,subidx__8768,null);
return node__8767;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____8775 = (0 <= i);
if(and__3822__auto____8775)
{return (i < tv.cnt);
} else
{return and__3822__auto____8775;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__8776 = tv.root;
var node__8777 = root__8776;
var level__8778 = tv.shift;
while(true){
if((level__8778 > 0))
{{
var G__8779 = cljs.core.tv_ensure_editable.call(null,root__8776.edit,cljs.core.pv_aget.call(null,node__8777,((i >>> level__8778) & 31)));
var G__8780 = (level__8778 - 5);
node__8777 = G__8779;
level__8778 = G__8780;
continue;
}
} else
{return node__8777.arr;
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
var G__8820 = null;
var G__8820__2 = (function (this_sym8783,k){
var this__8785 = this;
var this_sym8783__8786 = this;
var coll__8787 = this_sym8783__8786;
return coll__8787.cljs$core$ILookup$_lookup$arity$2(coll__8787,k);
});
var G__8820__3 = (function (this_sym8784,k,not_found){
var this__8785 = this;
var this_sym8784__8788 = this;
var coll__8789 = this_sym8784__8788;
return coll__8789.cljs$core$ILookup$_lookup$arity$3(coll__8789,k,not_found);
});
G__8820 = function(this_sym8784,k,not_found){
switch(arguments.length){
case 2:
return G__8820__2.call(this,this_sym8784,k);
case 3:
return G__8820__3.call(this,this_sym8784,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8820;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym8781,args8782){
var this__8790 = this;
return this_sym8781.call.apply(this_sym8781,[this_sym8781].concat(args8782.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8791 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8792 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8793 = this;
if(this__8793.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8794 = this;
if((function (){var and__3822__auto____8795 = (0 <= n);
if(and__3822__auto____8795)
{return (n < this__8794.cnt);
} else
{return and__3822__auto____8795;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8796 = this;
if(this__8796.root.edit)
{return this__8796.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__8797 = this;
if(this__8797.root.edit)
{if((function (){var and__3822__auto____8798 = (0 <= n);
if(and__3822__auto____8798)
{return (n < this__8797.cnt);
} else
{return and__3822__auto____8798;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__8797.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__8803 = (function go(level,node){
var node__8801 = cljs.core.tv_ensure_editable.call(null,this__8797.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__8801,(n & 31),val);
return node__8801;
} else
{var subidx__8802 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__8801,subidx__8802,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__8801,subidx__8802)));
return node__8801;
}
}).call(null,this__8797.shift,this__8797.root);
this__8797.root = new_root__8803;
return tcoll;
}
} else
{if((n === this__8797.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__8797.cnt)].join('')));
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
var this__8804 = this;
if(this__8804.root.edit)
{if((this__8804.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8804.cnt))
{this__8804.cnt = 0;
return tcoll;
} else
{if((((this__8804.cnt - 1) & 31) > 0))
{this__8804.cnt = (this__8804.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__8805 = cljs.core.editable_array_for.call(null,tcoll,(this__8804.cnt - 2));
var new_root__8807 = (function (){var nr__8806 = cljs.core.tv_pop_tail.call(null,tcoll,this__8804.shift,this__8804.root);
if(!((nr__8806 == null)))
{return nr__8806;
} else
{return (new cljs.core.VectorNode(this__8804.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____8808 = (5 < this__8804.shift);
if(and__3822__auto____8808)
{return (cljs.core.pv_aget.call(null,new_root__8807,1) == null);
} else
{return and__3822__auto____8808;
}
})())
{var new_root__8809 = cljs.core.tv_ensure_editable.call(null,this__8804.root.edit,cljs.core.pv_aget.call(null,new_root__8807,0));
this__8804.root = new_root__8809;
this__8804.shift = (this__8804.shift - 5);
this__8804.cnt = (this__8804.cnt - 1);
this__8804.tail = new_tail__8805;
return tcoll;
} else
{this__8804.root = new_root__8807;
this__8804.cnt = (this__8804.cnt - 1);
this__8804.tail = new_tail__8805;
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
var this__8810 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8811 = this;
if(this__8811.root.edit)
{if(((this__8811.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__8811.tail[(this__8811.cnt & 31)] = o);
this__8811.cnt = (this__8811.cnt + 1);
return tcoll;
} else
{var tail_node__8812 = (new cljs.core.VectorNode(this__8811.root.edit,this__8811.tail));
var new_tail__8813 = cljs.core.make_array.call(null,32);
(new_tail__8813[0] = o);
this__8811.tail = new_tail__8813;
if(((this__8811.cnt >>> 5) > (1 << this__8811.shift)))
{var new_root_array__8814 = cljs.core.make_array.call(null,32);
var new_shift__8815 = (this__8811.shift + 5);
(new_root_array__8814[0] = this__8811.root);
(new_root_array__8814[1] = cljs.core.new_path.call(null,this__8811.root.edit,this__8811.shift,tail_node__8812));
this__8811.root = (new cljs.core.VectorNode(this__8811.root.edit,new_root_array__8814));
this__8811.shift = new_shift__8815;
this__8811.cnt = (this__8811.cnt + 1);
return tcoll;
} else
{var new_root__8816 = cljs.core.tv_push_tail.call(null,tcoll,this__8811.shift,this__8811.root,tail_node__8812);
this__8811.root = new_root__8816;
this__8811.cnt = (this__8811.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8817 = this;
if(this__8817.root.edit)
{this__8817.root.edit = null;
var len__8818 = (this__8817.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__8819 = cljs.core.make_array.call(null,len__8818);
cljs.core.array_copy.call(null,this__8817.tail,0,trimmed_tail__8819,0,len__8818);
return (new cljs.core.PersistentVector(null,this__8817.cnt,this__8817.shift,this__8817.root,trimmed_tail__8819,null));
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
var this__8821 = this;
var h__2153__auto____8822 = this__8821.__hash;
if(!((h__2153__auto____8822 == null)))
{return h__2153__auto____8822;
} else
{var h__2153__auto____8823 = cljs.core.hash_coll.call(null,coll);
this__8821.__hash = h__2153__auto____8823;
return h__2153__auto____8823;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8824 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__8825 = this;
var this__8826 = this;
return cljs.core.pr_str.call(null,this__8826);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8827 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8828 = this;
return cljs.core._first.call(null,this__8828.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8829 = this;
var temp__3971__auto____8830 = cljs.core.next.call(null,this__8829.front);
if(temp__3971__auto____8830)
{var f1__8831 = temp__3971__auto____8830;
return (new cljs.core.PersistentQueueSeq(this__8829.meta,f1__8831,this__8829.rear,null));
} else
{if((this__8829.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__8829.meta,this__8829.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8832 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8833 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__8833.front,this__8833.rear,this__8833.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8834 = this;
return this__8834.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8835 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8835.meta);
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
var this__8836 = this;
var h__2153__auto____8837 = this__8836.__hash;
if(!((h__2153__auto____8837 == null)))
{return h__2153__auto____8837;
} else
{var h__2153__auto____8838 = cljs.core.hash_coll.call(null,coll);
this__8836.__hash = h__2153__auto____8838;
return h__2153__auto____8838;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8839 = this;
if(cljs.core.truth_(this__8839.front))
{return (new cljs.core.PersistentQueue(this__8839.meta,(this__8839.count + 1),this__8839.front,cljs.core.conj.call(null,(function (){var or__3824__auto____8840 = this__8839.rear;
if(cljs.core.truth_(or__3824__auto____8840))
{return or__3824__auto____8840;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__8839.meta,(this__8839.count + 1),cljs.core.conj.call(null,this__8839.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__8841 = this;
var this__8842 = this;
return cljs.core.pr_str.call(null,this__8842);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8843 = this;
var rear__8844 = cljs.core.seq.call(null,this__8843.rear);
if(cljs.core.truth_((function (){var or__3824__auto____8845 = this__8843.front;
if(cljs.core.truth_(or__3824__auto____8845))
{return or__3824__auto____8845;
} else
{return rear__8844;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__8843.front,cljs.core.seq.call(null,rear__8844),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8846 = this;
return this__8846.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8847 = this;
return cljs.core._first.call(null,this__8847.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8848 = this;
if(cljs.core.truth_(this__8848.front))
{var temp__3971__auto____8849 = cljs.core.next.call(null,this__8848.front);
if(temp__3971__auto____8849)
{var f1__8850 = temp__3971__auto____8849;
return (new cljs.core.PersistentQueue(this__8848.meta,(this__8848.count - 1),f1__8850,this__8848.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__8848.meta,(this__8848.count - 1),cljs.core.seq.call(null,this__8848.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8851 = this;
return cljs.core.first.call(null,this__8851.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8852 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8853 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8854 = this;
return (new cljs.core.PersistentQueue(meta,this__8854.count,this__8854.front,this__8854.rear,this__8854.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8855 = this;
return this__8855.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8856 = this;
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
var this__8857 = this;
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
var len__8860 = array.length;
var i__8861 = 0;
while(true){
if((i__8861 < len__8860))
{if((k === (array[i__8861])))
{return i__8861;
} else
{{
var G__8862 = (i__8861 + incr);
i__8861 = G__8862;
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
var a__8865 = cljs.core.hash.call(null,a);
var b__8866 = cljs.core.hash.call(null,b);
if((a__8865 < b__8866))
{return -1;
} else
{if((a__8865 > b__8866))
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
var ks__8874 = m.keys;
var len__8875 = ks__8874.length;
var so__8876 = m.strobj;
var out__8877 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__8878 = 0;
var out__8879 = cljs.core.transient$.call(null,out__8877);
while(true){
if((i__8878 < len__8875))
{var k__8880 = (ks__8874[i__8878]);
{
var G__8881 = (i__8878 + 1);
var G__8882 = cljs.core.assoc_BANG_.call(null,out__8879,k__8880,(so__8876[k__8880]));
i__8878 = G__8881;
out__8879 = G__8882;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__8879,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__8888 = {};
var l__8889 = ks.length;
var i__8890 = 0;
while(true){
if((i__8890 < l__8889))
{var k__8891 = (ks[i__8890]);
(new_obj__8888[k__8891] = (obj[k__8891]));
{
var G__8892 = (i__8890 + 1);
i__8890 = G__8892;
continue;
}
} else
{}
break;
}
return new_obj__8888;
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
var this__8895 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8896 = this;
var h__2153__auto____8897 = this__8896.__hash;
if(!((h__2153__auto____8897 == null)))
{return h__2153__auto____8897;
} else
{var h__2153__auto____8898 = cljs.core.hash_imap.call(null,coll);
this__8896.__hash = h__2153__auto____8898;
return h__2153__auto____8898;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8899 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8900 = this;
if((function (){var and__3822__auto____8901 = goog.isString(k);
if(and__3822__auto____8901)
{return !((cljs.core.scan_array.call(null,1,k,this__8900.keys) == null));
} else
{return and__3822__auto____8901;
}
})())
{return (this__8900.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8902 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____8903 = (this__8902.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____8903)
{return or__3824__auto____8903;
} else
{return (this__8902.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__8902.keys) == null)))
{var new_strobj__8904 = cljs.core.obj_clone.call(null,this__8902.strobj,this__8902.keys);
(new_strobj__8904[k] = v);
return (new cljs.core.ObjMap(this__8902.meta,this__8902.keys,new_strobj__8904,(this__8902.update_count + 1),null));
} else
{var new_strobj__8905 = cljs.core.obj_clone.call(null,this__8902.strobj,this__8902.keys);
var new_keys__8906 = this__8902.keys.slice();
(new_strobj__8905[k] = v);
new_keys__8906.push(k);
return (new cljs.core.ObjMap(this__8902.meta,new_keys__8906,new_strobj__8905,(this__8902.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8907 = this;
if((function (){var and__3822__auto____8908 = goog.isString(k);
if(and__3822__auto____8908)
{return !((cljs.core.scan_array.call(null,1,k,this__8907.keys) == null));
} else
{return and__3822__auto____8908;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__8930 = null;
var G__8930__2 = (function (this_sym8909,k){
var this__8911 = this;
var this_sym8909__8912 = this;
var coll__8913 = this_sym8909__8912;
return coll__8913.cljs$core$ILookup$_lookup$arity$2(coll__8913,k);
});
var G__8930__3 = (function (this_sym8910,k,not_found){
var this__8911 = this;
var this_sym8910__8914 = this;
var coll__8915 = this_sym8910__8914;
return coll__8915.cljs$core$ILookup$_lookup$arity$3(coll__8915,k,not_found);
});
G__8930 = function(this_sym8910,k,not_found){
switch(arguments.length){
case 2:
return G__8930__2.call(this,this_sym8910,k);
case 3:
return G__8930__3.call(this,this_sym8910,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8930;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym8893,args8894){
var this__8916 = this;
return this_sym8893.call.apply(this_sym8893,[this_sym8893].concat(args8894.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8917 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__8918 = this;
var this__8919 = this;
return cljs.core.pr_str.call(null,this__8919);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8920 = this;
if((this__8920.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__8883_SHARP_){
return cljs.core.vector.call(null,p1__8883_SHARP_,(this__8920.strobj[p1__8883_SHARP_]));
}),this__8920.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8921 = this;
return this__8921.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8922 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8923 = this;
return (new cljs.core.ObjMap(meta,this__8923.keys,this__8923.strobj,this__8923.update_count,this__8923.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8924 = this;
return this__8924.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8925 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__8925.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8926 = this;
if((function (){var and__3822__auto____8927 = goog.isString(k);
if(and__3822__auto____8927)
{return !((cljs.core.scan_array.call(null,1,k,this__8926.keys) == null));
} else
{return and__3822__auto____8927;
}
})())
{var new_keys__8928 = this__8926.keys.slice();
var new_strobj__8929 = cljs.core.obj_clone.call(null,this__8926.strobj,this__8926.keys);
new_keys__8928.splice(cljs.core.scan_array.call(null,1,k,new_keys__8928),1);
cljs.core.js_delete.call(null,new_strobj__8929,k);
return (new cljs.core.ObjMap(this__8926.meta,new_keys__8928,new_strobj__8929,(this__8926.update_count + 1),null));
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
var this__8934 = this;
var h__2153__auto____8935 = this__8934.__hash;
if(!((h__2153__auto____8935 == null)))
{return h__2153__auto____8935;
} else
{var h__2153__auto____8936 = cljs.core.hash_imap.call(null,coll);
this__8934.__hash = h__2153__auto____8936;
return h__2153__auto____8936;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8937 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8938 = this;
var bucket__8939 = (this__8938.hashobj[cljs.core.hash.call(null,k)]);
var i__8940 = (cljs.core.truth_(bucket__8939)?cljs.core.scan_array.call(null,2,k,bucket__8939):null);
if(cljs.core.truth_(i__8940))
{return (bucket__8939[(i__8940 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8941 = this;
var h__8942 = cljs.core.hash.call(null,k);
var bucket__8943 = (this__8941.hashobj[h__8942]);
if(cljs.core.truth_(bucket__8943))
{var new_bucket__8944 = bucket__8943.slice();
var new_hashobj__8945 = goog.object.clone(this__8941.hashobj);
(new_hashobj__8945[h__8942] = new_bucket__8944);
var temp__3971__auto____8946 = cljs.core.scan_array.call(null,2,k,new_bucket__8944);
if(cljs.core.truth_(temp__3971__auto____8946))
{var i__8947 = temp__3971__auto____8946;
(new_bucket__8944[(i__8947 + 1)] = v);
return (new cljs.core.HashMap(this__8941.meta,this__8941.count,new_hashobj__8945,null));
} else
{new_bucket__8944.push(k,v);
return (new cljs.core.HashMap(this__8941.meta,(this__8941.count + 1),new_hashobj__8945,null));
}
} else
{var new_hashobj__8948 = goog.object.clone(this__8941.hashobj);
(new_hashobj__8948[h__8942] = [k,v]);
return (new cljs.core.HashMap(this__8941.meta,(this__8941.count + 1),new_hashobj__8948,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8949 = this;
var bucket__8950 = (this__8949.hashobj[cljs.core.hash.call(null,k)]);
var i__8951 = (cljs.core.truth_(bucket__8950)?cljs.core.scan_array.call(null,2,k,bucket__8950):null);
if(cljs.core.truth_(i__8951))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__8976 = null;
var G__8976__2 = (function (this_sym8952,k){
var this__8954 = this;
var this_sym8952__8955 = this;
var coll__8956 = this_sym8952__8955;
return coll__8956.cljs$core$ILookup$_lookup$arity$2(coll__8956,k);
});
var G__8976__3 = (function (this_sym8953,k,not_found){
var this__8954 = this;
var this_sym8953__8957 = this;
var coll__8958 = this_sym8953__8957;
return coll__8958.cljs$core$ILookup$_lookup$arity$3(coll__8958,k,not_found);
});
G__8976 = function(this_sym8953,k,not_found){
switch(arguments.length){
case 2:
return G__8976__2.call(this,this_sym8953,k);
case 3:
return G__8976__3.call(this,this_sym8953,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8976;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym8932,args8933){
var this__8959 = this;
return this_sym8932.call.apply(this_sym8932,[this_sym8932].concat(args8933.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8960 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__8961 = this;
var this__8962 = this;
return cljs.core.pr_str.call(null,this__8962);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8963 = this;
if((this__8963.count > 0))
{var hashes__8964 = cljs.core.js_keys.call(null,this__8963.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__8931_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__8963.hashobj[p1__8931_SHARP_])));
}),hashes__8964);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8965 = this;
return this__8965.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8966 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8967 = this;
return (new cljs.core.HashMap(meta,this__8967.count,this__8967.hashobj,this__8967.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8968 = this;
return this__8968.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8969 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__8969.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8970 = this;
var h__8971 = cljs.core.hash.call(null,k);
var bucket__8972 = (this__8970.hashobj[h__8971]);
var i__8973 = (cljs.core.truth_(bucket__8972)?cljs.core.scan_array.call(null,2,k,bucket__8972):null);
if(cljs.core.not.call(null,i__8973))
{return coll;
} else
{var new_hashobj__8974 = goog.object.clone(this__8970.hashobj);
if((3 > bucket__8972.length))
{cljs.core.js_delete.call(null,new_hashobj__8974,h__8971);
} else
{var new_bucket__8975 = bucket__8972.slice();
new_bucket__8975.splice(i__8973,2);
(new_hashobj__8974[h__8971] = new_bucket__8975);
}
return (new cljs.core.HashMap(this__8970.meta,(this__8970.count - 1),new_hashobj__8974,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__8977 = ks.length;
var i__8978 = 0;
var out__8979 = cljs.core.HashMap.EMPTY;
while(true){
if((i__8978 < len__8977))
{{
var G__8980 = (i__8978 + 1);
var G__8981 = cljs.core.assoc.call(null,out__8979,(ks[i__8978]),(vs[i__8978]));
i__8978 = G__8980;
out__8979 = G__8981;
continue;
}
} else
{return out__8979;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__8985 = m.arr;
var len__8986 = arr__8985.length;
var i__8987 = 0;
while(true){
if((len__8986 <= i__8987))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__8985[i__8987]),k))
{return i__8987;
} else
{if("\uFDD0'else")
{{
var G__8988 = (i__8987 + 2);
i__8987 = G__8988;
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
var this__8991 = this;
return (new cljs.core.TransientArrayMap({},this__8991.arr.length,this__8991.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8992 = this;
var h__2153__auto____8993 = this__8992.__hash;
if(!((h__2153__auto____8993 == null)))
{return h__2153__auto____8993;
} else
{var h__2153__auto____8994 = cljs.core.hash_imap.call(null,coll);
this__8992.__hash = h__2153__auto____8994;
return h__2153__auto____8994;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8995 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8996 = this;
var idx__8997 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8997 === -1))
{return not_found;
} else
{return (this__8996.arr[(idx__8997 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8998 = this;
var idx__8999 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8999 === -1))
{if((this__8998.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__8998.meta,(this__8998.cnt + 1),(function (){var G__9000__9001 = this__8998.arr.slice();
G__9000__9001.push(k);
G__9000__9001.push(v);
return G__9000__9001;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__8998.arr[(idx__8999 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__8998.meta,this__8998.cnt,(function (){var G__9002__9003 = this__8998.arr.slice();
(G__9002__9003[(idx__8999 + 1)] = v);
return G__9002__9003;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9004 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__9036 = null;
var G__9036__2 = (function (this_sym9005,k){
var this__9007 = this;
var this_sym9005__9008 = this;
var coll__9009 = this_sym9005__9008;
return coll__9009.cljs$core$ILookup$_lookup$arity$2(coll__9009,k);
});
var G__9036__3 = (function (this_sym9006,k,not_found){
var this__9007 = this;
var this_sym9006__9010 = this;
var coll__9011 = this_sym9006__9010;
return coll__9011.cljs$core$ILookup$_lookup$arity$3(coll__9011,k,not_found);
});
G__9036 = function(this_sym9006,k,not_found){
switch(arguments.length){
case 2:
return G__9036__2.call(this,this_sym9006,k);
case 3:
return G__9036__3.call(this,this_sym9006,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9036;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym8989,args8990){
var this__9012 = this;
return this_sym8989.call.apply(this_sym8989,[this_sym8989].concat(args8990.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9013 = this;
var len__9014 = this__9013.arr.length;
var i__9015 = 0;
var init__9016 = init;
while(true){
if((i__9015 < len__9014))
{var init__9017 = f.call(null,init__9016,(this__9013.arr[i__9015]),(this__9013.arr[(i__9015 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__9017))
{return cljs.core.deref.call(null,init__9017);
} else
{{
var G__9037 = (i__9015 + 2);
var G__9038 = init__9017;
i__9015 = G__9037;
init__9016 = G__9038;
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
var this__9018 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__9019 = this;
var this__9020 = this;
return cljs.core.pr_str.call(null,this__9020);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9021 = this;
if((this__9021.cnt > 0))
{var len__9022 = this__9021.arr.length;
var array_map_seq__9023 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__9022))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__9021.arr[i]),(this__9021.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__9023.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9024 = this;
return this__9024.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9025 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9026 = this;
return (new cljs.core.PersistentArrayMap(meta,this__9026.cnt,this__9026.arr,this__9026.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9027 = this;
return this__9027.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9028 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9028.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9029 = this;
var idx__9030 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__9030 >= 0))
{var len__9031 = this__9029.arr.length;
var new_len__9032 = (len__9031 - 2);
if((new_len__9032 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__9033 = cljs.core.make_array.call(null,new_len__9032);
var s__9034 = 0;
var d__9035 = 0;
while(true){
if((s__9034 >= len__9031))
{return (new cljs.core.PersistentArrayMap(this__9029.meta,(this__9029.cnt - 1),new_arr__9033,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__9029.arr[s__9034])))
{{
var G__9039 = (s__9034 + 2);
var G__9040 = d__9035;
s__9034 = G__9039;
d__9035 = G__9040;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__9033[d__9035] = (this__9029.arr[s__9034]));
(new_arr__9033[(d__9035 + 1)] = (this__9029.arr[(s__9034 + 1)]));
{
var G__9041 = (s__9034 + 2);
var G__9042 = (d__9035 + 2);
s__9034 = G__9041;
d__9035 = G__9042;
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
var len__9043 = cljs.core.count.call(null,ks);
var i__9044 = 0;
var out__9045 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__9044 < len__9043))
{{
var G__9046 = (i__9044 + 1);
var G__9047 = cljs.core.assoc_BANG_.call(null,out__9045,(ks[i__9044]),(vs[i__9044]));
i__9044 = G__9046;
out__9045 = G__9047;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9045);
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
var this__9048 = this;
if(cljs.core.truth_(this__9048.editable_QMARK_))
{var idx__9049 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__9049 >= 0))
{(this__9048.arr[idx__9049] = (this__9048.arr[(this__9048.len - 2)]));
(this__9048.arr[(idx__9049 + 1)] = (this__9048.arr[(this__9048.len - 1)]));
var G__9050__9051 = this__9048.arr;
G__9050__9051.pop();
G__9050__9051.pop();
G__9050__9051;
this__9048.len = (this__9048.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9052 = this;
if(cljs.core.truth_(this__9052.editable_QMARK_))
{var idx__9053 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__9053 === -1))
{if(((this__9052.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__9052.len = (this__9052.len + 2);
this__9052.arr.push(key);
this__9052.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__9052.len,this__9052.arr),key,val);
}
} else
{if((val === (this__9052.arr[(idx__9053 + 1)])))
{return tcoll;
} else
{(this__9052.arr[(idx__9053 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9054 = this;
if(cljs.core.truth_(this__9054.editable_QMARK_))
{if((function (){var G__9055__9056 = o;
if(G__9055__9056)
{if((function (){var or__3824__auto____9057 = (G__9055__9056.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____9057)
{return or__3824__auto____9057;
} else
{return G__9055__9056.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__9055__9056.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9055__9056);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9055__9056);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__9058 = cljs.core.seq.call(null,o);
var tcoll__9059 = tcoll;
while(true){
var temp__3971__auto____9060 = cljs.core.first.call(null,es__9058);
if(cljs.core.truth_(temp__3971__auto____9060))
{var e__9061 = temp__3971__auto____9060;
{
var G__9067 = cljs.core.next.call(null,es__9058);
var G__9068 = tcoll__9059.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__9059,cljs.core.key.call(null,e__9061),cljs.core.val.call(null,e__9061));
es__9058 = G__9067;
tcoll__9059 = G__9068;
continue;
}
} else
{return tcoll__9059;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9062 = this;
if(cljs.core.truth_(this__9062.editable_QMARK_))
{this__9062.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__9062.len,2),this__9062.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__9063 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__9064 = this;
if(cljs.core.truth_(this__9064.editable_QMARK_))
{var idx__9065 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__9065 === -1))
{return not_found;
} else
{return (this__9064.arr[(idx__9065 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9066 = this;
if(cljs.core.truth_(this__9066.editable_QMARK_))
{return cljs.core.quot.call(null,this__9066.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
void 0;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__9071 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__9072 = 0;
while(true){
if((i__9072 < len))
{{
var G__9073 = cljs.core.assoc_BANG_.call(null,out__9071,(arr[i__9072]),(arr[(i__9072 + 1)]));
var G__9074 = (i__9072 + 2);
out__9071 = G__9073;
i__9072 = G__9074;
continue;
}
} else
{return out__9071;
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
var G__9079__9080 = arr.slice();
(G__9079__9080[i] = a);
return G__9079__9080;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__9081__9082 = arr.slice();
(G__9081__9082[i] = a);
(G__9081__9082[j] = b);
return G__9081__9082;
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
var new_arr__9084 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__9084,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__9084,(2 * i),(new_arr__9084.length - (2 * i)));
return new_arr__9084;
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
var editable__9087 = inode.ensure_editable(edit);
(editable__9087.arr[i] = a);
return editable__9087;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__9088 = inode.ensure_editable(edit);
(editable__9088.arr[i] = a);
(editable__9088.arr[j] = b);
return editable__9088;
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
var len__9095 = arr.length;
var i__9096 = 0;
var init__9097 = init;
while(true){
if((i__9096 < len__9095))
{var init__9100 = (function (){var k__9098 = (arr[i__9096]);
if(!((k__9098 == null)))
{return f.call(null,init__9097,k__9098,(arr[(i__9096 + 1)]));
} else
{var node__9099 = (arr[(i__9096 + 1)]);
if(!((node__9099 == null)))
{return node__9099.kv_reduce(f,init__9097);
} else
{return init__9097;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__9100))
{return cljs.core.deref.call(null,init__9100);
} else
{{
var G__9101 = (i__9096 + 2);
var G__9102 = init__9100;
i__9096 = G__9101;
init__9097 = G__9102;
continue;
}
}
} else
{return init__9097;
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
var this__9103 = this;
var inode__9104 = this;
if((this__9103.bitmap === bit))
{return null;
} else
{var editable__9105 = inode__9104.ensure_editable(e);
var earr__9106 = editable__9105.arr;
var len__9107 = earr__9106.length;
editable__9105.bitmap = (bit ^ editable__9105.bitmap);
cljs.core.array_copy.call(null,earr__9106,(2 * (i + 1)),earr__9106,(2 * i),(len__9107 - (2 * (i + 1))));
(earr__9106[(len__9107 - 2)] = null);
(earr__9106[(len__9107 - 1)] = null);
return editable__9105;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9108 = this;
var inode__9109 = this;
var bit__9110 = (1 << ((hash >>> shift) & 0x01f));
var idx__9111 = cljs.core.bitmap_indexed_node_index.call(null,this__9108.bitmap,bit__9110);
if(((this__9108.bitmap & bit__9110) === 0))
{var n__9112 = cljs.core.bit_count.call(null,this__9108.bitmap);
if(((2 * n__9112) < this__9108.arr.length))
{var editable__9113 = inode__9109.ensure_editable(edit);
var earr__9114 = editable__9113.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__9114,(2 * idx__9111),earr__9114,(2 * (idx__9111 + 1)),(2 * (n__9112 - idx__9111)));
(earr__9114[(2 * idx__9111)] = key);
(earr__9114[((2 * idx__9111) + 1)] = val);
editable__9113.bitmap = (editable__9113.bitmap | bit__9110);
return editable__9113;
} else
{if((n__9112 >= 16))
{var nodes__9115 = cljs.core.make_array.call(null,32);
var jdx__9116 = ((hash >>> shift) & 0x01f);
(nodes__9115[jdx__9116] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__9117 = 0;
var j__9118 = 0;
while(true){
if((i__9117 < 32))
{if((((this__9108.bitmap >>> i__9117) & 1) === 0))
{{
var G__9171 = (i__9117 + 1);
var G__9172 = j__9118;
i__9117 = G__9171;
j__9118 = G__9172;
continue;
}
} else
{(nodes__9115[i__9117] = ((!(((this__9108.arr[j__9118]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__9108.arr[j__9118])),(this__9108.arr[j__9118]),(this__9108.arr[(j__9118 + 1)]),added_leaf_QMARK_):(this__9108.arr[(j__9118 + 1)])));
{
var G__9173 = (i__9117 + 1);
var G__9174 = (j__9118 + 2);
i__9117 = G__9173;
j__9118 = G__9174;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__9112 + 1),nodes__9115));
} else
{if("\uFDD0'else")
{var new_arr__9119 = cljs.core.make_array.call(null,(2 * (n__9112 + 4)));
cljs.core.array_copy.call(null,this__9108.arr,0,new_arr__9119,0,(2 * idx__9111));
(new_arr__9119[(2 * idx__9111)] = key);
(new_arr__9119[((2 * idx__9111) + 1)] = val);
cljs.core.array_copy.call(null,this__9108.arr,(2 * idx__9111),new_arr__9119,(2 * (idx__9111 + 1)),(2 * (n__9112 - idx__9111)));
added_leaf_QMARK_.val = true;
var editable__9120 = inode__9109.ensure_editable(edit);
editable__9120.arr = new_arr__9119;
editable__9120.bitmap = (editable__9120.bitmap | bit__9110);
return editable__9120;
} else
{return null;
}
}
}
} else
{var key_or_nil__9121 = (this__9108.arr[(2 * idx__9111)]);
var val_or_node__9122 = (this__9108.arr[((2 * idx__9111) + 1)]);
if((key_or_nil__9121 == null))
{var n__9123 = val_or_node__9122.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9123 === val_or_node__9122))
{return inode__9109;
} else
{return cljs.core.edit_and_set.call(null,inode__9109,edit,((2 * idx__9111) + 1),n__9123);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9121))
{if((val === val_or_node__9122))
{return inode__9109;
} else
{return cljs.core.edit_and_set.call(null,inode__9109,edit,((2 * idx__9111) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__9109,edit,(2 * idx__9111),null,((2 * idx__9111) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__9121,val_or_node__9122,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__9124 = this;
var inode__9125 = this;
return cljs.core.create_inode_seq.call(null,this__9124.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9126 = this;
var inode__9127 = this;
var bit__9128 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9126.bitmap & bit__9128) === 0))
{return inode__9127;
} else
{var idx__9129 = cljs.core.bitmap_indexed_node_index.call(null,this__9126.bitmap,bit__9128);
var key_or_nil__9130 = (this__9126.arr[(2 * idx__9129)]);
var val_or_node__9131 = (this__9126.arr[((2 * idx__9129) + 1)]);
if((key_or_nil__9130 == null))
{var n__9132 = val_or_node__9131.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__9132 === val_or_node__9131))
{return inode__9127;
} else
{if(!((n__9132 == null)))
{return cljs.core.edit_and_set.call(null,inode__9127,edit,((2 * idx__9129) + 1),n__9132);
} else
{if((this__9126.bitmap === bit__9128))
{return null;
} else
{if("\uFDD0'else")
{return inode__9127.edit_and_remove_pair(edit,bit__9128,idx__9129);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9130))
{(removed_leaf_QMARK_[0] = true);
return inode__9127.edit_and_remove_pair(edit,bit__9128,idx__9129);
} else
{if("\uFDD0'else")
{return inode__9127;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__9133 = this;
var inode__9134 = this;
if((e === this__9133.edit))
{return inode__9134;
} else
{var n__9135 = cljs.core.bit_count.call(null,this__9133.bitmap);
var new_arr__9136 = cljs.core.make_array.call(null,(((n__9135 < 0))?4:(2 * (n__9135 + 1))));
cljs.core.array_copy.call(null,this__9133.arr,0,new_arr__9136,0,(2 * n__9135));
return (new cljs.core.BitmapIndexedNode(e,this__9133.bitmap,new_arr__9136));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__9137 = this;
var inode__9138 = this;
return cljs.core.inode_kv_reduce.call(null,this__9137.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9139 = this;
var inode__9140 = this;
var bit__9141 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9139.bitmap & bit__9141) === 0))
{return not_found;
} else
{var idx__9142 = cljs.core.bitmap_indexed_node_index.call(null,this__9139.bitmap,bit__9141);
var key_or_nil__9143 = (this__9139.arr[(2 * idx__9142)]);
var val_or_node__9144 = (this__9139.arr[((2 * idx__9142) + 1)]);
if((key_or_nil__9143 == null))
{return val_or_node__9144.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9143))
{return cljs.core.PersistentVector.fromArray([key_or_nil__9143,val_or_node__9144], true);
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
var this__9145 = this;
var inode__9146 = this;
var bit__9147 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9145.bitmap & bit__9147) === 0))
{return inode__9146;
} else
{var idx__9148 = cljs.core.bitmap_indexed_node_index.call(null,this__9145.bitmap,bit__9147);
var key_or_nil__9149 = (this__9145.arr[(2 * idx__9148)]);
var val_or_node__9150 = (this__9145.arr[((2 * idx__9148) + 1)]);
if((key_or_nil__9149 == null))
{var n__9151 = val_or_node__9150.inode_without((shift + 5),hash,key);
if((n__9151 === val_or_node__9150))
{return inode__9146;
} else
{if(!((n__9151 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__9145.bitmap,cljs.core.clone_and_set.call(null,this__9145.arr,((2 * idx__9148) + 1),n__9151)));
} else
{if((this__9145.bitmap === bit__9147))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__9145.bitmap ^ bit__9147),cljs.core.remove_pair.call(null,this__9145.arr,idx__9148)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9149))
{return (new cljs.core.BitmapIndexedNode(null,(this__9145.bitmap ^ bit__9147),cljs.core.remove_pair.call(null,this__9145.arr,idx__9148)));
} else
{if("\uFDD0'else")
{return inode__9146;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9152 = this;
var inode__9153 = this;
var bit__9154 = (1 << ((hash >>> shift) & 0x01f));
var idx__9155 = cljs.core.bitmap_indexed_node_index.call(null,this__9152.bitmap,bit__9154);
if(((this__9152.bitmap & bit__9154) === 0))
{var n__9156 = cljs.core.bit_count.call(null,this__9152.bitmap);
if((n__9156 >= 16))
{var nodes__9157 = cljs.core.make_array.call(null,32);
var jdx__9158 = ((hash >>> shift) & 0x01f);
(nodes__9157[jdx__9158] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__9159 = 0;
var j__9160 = 0;
while(true){
if((i__9159 < 32))
{if((((this__9152.bitmap >>> i__9159) & 1) === 0))
{{
var G__9175 = (i__9159 + 1);
var G__9176 = j__9160;
i__9159 = G__9175;
j__9160 = G__9176;
continue;
}
} else
{(nodes__9157[i__9159] = ((!(((this__9152.arr[j__9160]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__9152.arr[j__9160])),(this__9152.arr[j__9160]),(this__9152.arr[(j__9160 + 1)]),added_leaf_QMARK_):(this__9152.arr[(j__9160 + 1)])));
{
var G__9177 = (i__9159 + 1);
var G__9178 = (j__9160 + 2);
i__9159 = G__9177;
j__9160 = G__9178;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__9156 + 1),nodes__9157));
} else
{var new_arr__9161 = cljs.core.make_array.call(null,(2 * (n__9156 + 1)));
cljs.core.array_copy.call(null,this__9152.arr,0,new_arr__9161,0,(2 * idx__9155));
(new_arr__9161[(2 * idx__9155)] = key);
(new_arr__9161[((2 * idx__9155) + 1)] = val);
cljs.core.array_copy.call(null,this__9152.arr,(2 * idx__9155),new_arr__9161,(2 * (idx__9155 + 1)),(2 * (n__9156 - idx__9155)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__9152.bitmap | bit__9154),new_arr__9161));
}
} else
{var key_or_nil__9162 = (this__9152.arr[(2 * idx__9155)]);
var val_or_node__9163 = (this__9152.arr[((2 * idx__9155) + 1)]);
if((key_or_nil__9162 == null))
{var n__9164 = val_or_node__9163.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9164 === val_or_node__9163))
{return inode__9153;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__9152.bitmap,cljs.core.clone_and_set.call(null,this__9152.arr,((2 * idx__9155) + 1),n__9164)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9162))
{if((val === val_or_node__9163))
{return inode__9153;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__9152.bitmap,cljs.core.clone_and_set.call(null,this__9152.arr,((2 * idx__9155) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__9152.bitmap,cljs.core.clone_and_set.call(null,this__9152.arr,(2 * idx__9155),null,((2 * idx__9155) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__9162,val_or_node__9163,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9165 = this;
var inode__9166 = this;
var bit__9167 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9165.bitmap & bit__9167) === 0))
{return not_found;
} else
{var idx__9168 = cljs.core.bitmap_indexed_node_index.call(null,this__9165.bitmap,bit__9167);
var key_or_nil__9169 = (this__9165.arr[(2 * idx__9168)]);
var val_or_node__9170 = (this__9165.arr[((2 * idx__9168) + 1)]);
if((key_or_nil__9169 == null))
{return val_or_node__9170.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9169))
{return val_or_node__9170;
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
var arr__9186 = array_node.arr;
var len__9187 = (2 * (array_node.cnt - 1));
var new_arr__9188 = cljs.core.make_array.call(null,len__9187);
var i__9189 = 0;
var j__9190 = 1;
var bitmap__9191 = 0;
while(true){
if((i__9189 < len__9187))
{if((function (){var and__3822__auto____9192 = !((i__9189 === idx));
if(and__3822__auto____9192)
{return !(((arr__9186[i__9189]) == null));
} else
{return and__3822__auto____9192;
}
})())
{(new_arr__9188[j__9190] = (arr__9186[i__9189]));
{
var G__9193 = (i__9189 + 1);
var G__9194 = (j__9190 + 2);
var G__9195 = (bitmap__9191 | (1 << i__9189));
i__9189 = G__9193;
j__9190 = G__9194;
bitmap__9191 = G__9195;
continue;
}
} else
{{
var G__9196 = (i__9189 + 1);
var G__9197 = j__9190;
var G__9198 = bitmap__9191;
i__9189 = G__9196;
j__9190 = G__9197;
bitmap__9191 = G__9198;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__9191,new_arr__9188));
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
var this__9199 = this;
var inode__9200 = this;
var idx__9201 = ((hash >>> shift) & 0x01f);
var node__9202 = (this__9199.arr[idx__9201]);
if((node__9202 == null))
{var editable__9203 = cljs.core.edit_and_set.call(null,inode__9200,edit,idx__9201,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__9203.cnt = (editable__9203.cnt + 1);
return editable__9203;
} else
{var n__9204 = node__9202.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9204 === node__9202))
{return inode__9200;
} else
{return cljs.core.edit_and_set.call(null,inode__9200,edit,idx__9201,n__9204);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__9205 = this;
var inode__9206 = this;
return cljs.core.create_array_node_seq.call(null,this__9205.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9207 = this;
var inode__9208 = this;
var idx__9209 = ((hash >>> shift) & 0x01f);
var node__9210 = (this__9207.arr[idx__9209]);
if((node__9210 == null))
{return inode__9208;
} else
{var n__9211 = node__9210.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__9211 === node__9210))
{return inode__9208;
} else
{if((n__9211 == null))
{if((this__9207.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__9208,edit,idx__9209);
} else
{var editable__9212 = cljs.core.edit_and_set.call(null,inode__9208,edit,idx__9209,n__9211);
editable__9212.cnt = (editable__9212.cnt - 1);
return editable__9212;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__9208,edit,idx__9209,n__9211);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__9213 = this;
var inode__9214 = this;
if((e === this__9213.edit))
{return inode__9214;
} else
{return (new cljs.core.ArrayNode(e,this__9213.cnt,this__9213.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__9215 = this;
var inode__9216 = this;
var len__9217 = this__9215.arr.length;
var i__9218 = 0;
var init__9219 = init;
while(true){
if((i__9218 < len__9217))
{var node__9220 = (this__9215.arr[i__9218]);
if(!((node__9220 == null)))
{var init__9221 = node__9220.kv_reduce(f,init__9219);
if(cljs.core.reduced_QMARK_.call(null,init__9221))
{return cljs.core.deref.call(null,init__9221);
} else
{{
var G__9240 = (i__9218 + 1);
var G__9241 = init__9221;
i__9218 = G__9240;
init__9219 = G__9241;
continue;
}
}
} else
{return null;
}
} else
{return init__9219;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9222 = this;
var inode__9223 = this;
var idx__9224 = ((hash >>> shift) & 0x01f);
var node__9225 = (this__9222.arr[idx__9224]);
if(!((node__9225 == null)))
{return node__9225.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__9226 = this;
var inode__9227 = this;
var idx__9228 = ((hash >>> shift) & 0x01f);
var node__9229 = (this__9226.arr[idx__9228]);
if(!((node__9229 == null)))
{var n__9230 = node__9229.inode_without((shift + 5),hash,key);
if((n__9230 === node__9229))
{return inode__9227;
} else
{if((n__9230 == null))
{if((this__9226.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__9227,null,idx__9228);
} else
{return (new cljs.core.ArrayNode(null,(this__9226.cnt - 1),cljs.core.clone_and_set.call(null,this__9226.arr,idx__9228,n__9230)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__9226.cnt,cljs.core.clone_and_set.call(null,this__9226.arr,idx__9228,n__9230)));
} else
{return null;
}
}
}
} else
{return inode__9227;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9231 = this;
var inode__9232 = this;
var idx__9233 = ((hash >>> shift) & 0x01f);
var node__9234 = (this__9231.arr[idx__9233]);
if((node__9234 == null))
{return (new cljs.core.ArrayNode(null,(this__9231.cnt + 1),cljs.core.clone_and_set.call(null,this__9231.arr,idx__9233,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__9235 = node__9234.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9235 === node__9234))
{return inode__9232;
} else
{return (new cljs.core.ArrayNode(null,this__9231.cnt,cljs.core.clone_and_set.call(null,this__9231.arr,idx__9233,n__9235)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9236 = this;
var inode__9237 = this;
var idx__9238 = ((hash >>> shift) & 0x01f);
var node__9239 = (this__9236.arr[idx__9238]);
if(!((node__9239 == null)))
{return node__9239.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__9244 = (2 * cnt);
var i__9245 = 0;
while(true){
if((i__9245 < lim__9244))
{if(cljs.core.key_test.call(null,key,(arr[i__9245])))
{return i__9245;
} else
{{
var G__9246 = (i__9245 + 2);
i__9245 = G__9246;
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
var this__9247 = this;
var inode__9248 = this;
if((hash === this__9247.collision_hash))
{var idx__9249 = cljs.core.hash_collision_node_find_index.call(null,this__9247.arr,this__9247.cnt,key);
if((idx__9249 === -1))
{if((this__9247.arr.length > (2 * this__9247.cnt)))
{var editable__9250 = cljs.core.edit_and_set.call(null,inode__9248,edit,(2 * this__9247.cnt),key,((2 * this__9247.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__9250.cnt = (editable__9250.cnt + 1);
return editable__9250;
} else
{var len__9251 = this__9247.arr.length;
var new_arr__9252 = cljs.core.make_array.call(null,(len__9251 + 2));
cljs.core.array_copy.call(null,this__9247.arr,0,new_arr__9252,0,len__9251);
(new_arr__9252[len__9251] = key);
(new_arr__9252[(len__9251 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__9248.ensure_editable_array(edit,(this__9247.cnt + 1),new_arr__9252);
}
} else
{if(((this__9247.arr[(idx__9249 + 1)]) === val))
{return inode__9248;
} else
{return cljs.core.edit_and_set.call(null,inode__9248,edit,(idx__9249 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__9247.collision_hash >>> shift) & 0x01f)),[null,inode__9248,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__9253 = this;
var inode__9254 = this;
return cljs.core.create_inode_seq.call(null,this__9253.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9255 = this;
var inode__9256 = this;
var idx__9257 = cljs.core.hash_collision_node_find_index.call(null,this__9255.arr,this__9255.cnt,key);
if((idx__9257 === -1))
{return inode__9256;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__9255.cnt === 1))
{return null;
} else
{var editable__9258 = inode__9256.ensure_editable(edit);
var earr__9259 = editable__9258.arr;
(earr__9259[idx__9257] = (earr__9259[((2 * this__9255.cnt) - 2)]));
(earr__9259[(idx__9257 + 1)] = (earr__9259[((2 * this__9255.cnt) - 1)]));
(earr__9259[((2 * this__9255.cnt) - 1)] = null);
(earr__9259[((2 * this__9255.cnt) - 2)] = null);
editable__9258.cnt = (editable__9258.cnt - 1);
return editable__9258;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__9260 = this;
var inode__9261 = this;
if((e === this__9260.edit))
{return inode__9261;
} else
{var new_arr__9262 = cljs.core.make_array.call(null,(2 * (this__9260.cnt + 1)));
cljs.core.array_copy.call(null,this__9260.arr,0,new_arr__9262,0,(2 * this__9260.cnt));
return (new cljs.core.HashCollisionNode(e,this__9260.collision_hash,this__9260.cnt,new_arr__9262));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__9263 = this;
var inode__9264 = this;
return cljs.core.inode_kv_reduce.call(null,this__9263.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9265 = this;
var inode__9266 = this;
var idx__9267 = cljs.core.hash_collision_node_find_index.call(null,this__9265.arr,this__9265.cnt,key);
if((idx__9267 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__9265.arr[idx__9267])))
{return cljs.core.PersistentVector.fromArray([(this__9265.arr[idx__9267]),(this__9265.arr[(idx__9267 + 1)])], true);
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
var this__9268 = this;
var inode__9269 = this;
var idx__9270 = cljs.core.hash_collision_node_find_index.call(null,this__9268.arr,this__9268.cnt,key);
if((idx__9270 === -1))
{return inode__9269;
} else
{if((this__9268.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__9268.collision_hash,(this__9268.cnt - 1),cljs.core.remove_pair.call(null,this__9268.arr,cljs.core.quot.call(null,idx__9270,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9271 = this;
var inode__9272 = this;
if((hash === this__9271.collision_hash))
{var idx__9273 = cljs.core.hash_collision_node_find_index.call(null,this__9271.arr,this__9271.cnt,key);
if((idx__9273 === -1))
{var len__9274 = this__9271.arr.length;
var new_arr__9275 = cljs.core.make_array.call(null,(len__9274 + 2));
cljs.core.array_copy.call(null,this__9271.arr,0,new_arr__9275,0,len__9274);
(new_arr__9275[len__9274] = key);
(new_arr__9275[(len__9274 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__9271.collision_hash,(this__9271.cnt + 1),new_arr__9275));
} else
{if(cljs.core._EQ_.call(null,(this__9271.arr[idx__9273]),val))
{return inode__9272;
} else
{return (new cljs.core.HashCollisionNode(null,this__9271.collision_hash,this__9271.cnt,cljs.core.clone_and_set.call(null,this__9271.arr,(idx__9273 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__9271.collision_hash >>> shift) & 0x01f)),[null,inode__9272])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9276 = this;
var inode__9277 = this;
var idx__9278 = cljs.core.hash_collision_node_find_index.call(null,this__9276.arr,this__9276.cnt,key);
if((idx__9278 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__9276.arr[idx__9278])))
{return (this__9276.arr[(idx__9278 + 1)]);
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
var this__9279 = this;
var inode__9280 = this;
if((e === this__9279.edit))
{this__9279.arr = array;
this__9279.cnt = count;
return inode__9280;
} else
{return (new cljs.core.HashCollisionNode(this__9279.edit,this__9279.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__9285 = cljs.core.hash.call(null,key1);
if((key1hash__9285 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__9285,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___9286 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__9285,key1,val1,added_leaf_QMARK___9286).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___9286);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__9287 = cljs.core.hash.call(null,key1);
if((key1hash__9287 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__9287,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___9288 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__9287,key1,val1,added_leaf_QMARK___9288).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___9288);
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
var this__9289 = this;
var h__2153__auto____9290 = this__9289.__hash;
if(!((h__2153__auto____9290 == null)))
{return h__2153__auto____9290;
} else
{var h__2153__auto____9291 = cljs.core.hash_coll.call(null,coll);
this__9289.__hash = h__2153__auto____9291;
return h__2153__auto____9291;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9292 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__9293 = this;
var this__9294 = this;
return cljs.core.pr_str.call(null,this__9294);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9295 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9296 = this;
if((this__9296.s == null))
{return cljs.core.PersistentVector.fromArray([(this__9296.nodes[this__9296.i]),(this__9296.nodes[(this__9296.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__9296.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9297 = this;
if((this__9297.s == null))
{return cljs.core.create_inode_seq.call(null,this__9297.nodes,(this__9297.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__9297.nodes,this__9297.i,cljs.core.next.call(null,this__9297.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9298 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9299 = this;
return (new cljs.core.NodeSeq(meta,this__9299.nodes,this__9299.i,this__9299.s,this__9299.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9300 = this;
return this__9300.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9301 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9301.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__9308 = nodes.length;
var j__9309 = i;
while(true){
if((j__9309 < len__9308))
{if(!(((nodes[j__9309]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__9309,null,null));
} else
{var temp__3971__auto____9310 = (nodes[(j__9309 + 1)]);
if(cljs.core.truth_(temp__3971__auto____9310))
{var node__9311 = temp__3971__auto____9310;
var temp__3971__auto____9312 = node__9311.inode_seq();
if(cljs.core.truth_(temp__3971__auto____9312))
{var node_seq__9313 = temp__3971__auto____9312;
return (new cljs.core.NodeSeq(null,nodes,(j__9309 + 2),node_seq__9313,null));
} else
{{
var G__9314 = (j__9309 + 2);
j__9309 = G__9314;
continue;
}
}
} else
{{
var G__9315 = (j__9309 + 2);
j__9309 = G__9315;
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
var this__9316 = this;
var h__2153__auto____9317 = this__9316.__hash;
if(!((h__2153__auto____9317 == null)))
{return h__2153__auto____9317;
} else
{var h__2153__auto____9318 = cljs.core.hash_coll.call(null,coll);
this__9316.__hash = h__2153__auto____9318;
return h__2153__auto____9318;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9319 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__9320 = this;
var this__9321 = this;
return cljs.core.pr_str.call(null,this__9321);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9322 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9323 = this;
return cljs.core.first.call(null,this__9323.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9324 = this;
return cljs.core.create_array_node_seq.call(null,null,this__9324.nodes,this__9324.i,cljs.core.next.call(null,this__9324.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9325 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9326 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__9326.nodes,this__9326.i,this__9326.s,this__9326.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9327 = this;
return this__9327.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9328 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9328.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__9335 = nodes.length;
var j__9336 = i;
while(true){
if((j__9336 < len__9335))
{var temp__3971__auto____9337 = (nodes[j__9336]);
if(cljs.core.truth_(temp__3971__auto____9337))
{var nj__9338 = temp__3971__auto____9337;
var temp__3971__auto____9339 = nj__9338.inode_seq();
if(cljs.core.truth_(temp__3971__auto____9339))
{var ns__9340 = temp__3971__auto____9339;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__9336 + 1),ns__9340,null));
} else
{{
var G__9341 = (j__9336 + 1);
j__9336 = G__9341;
continue;
}
}
} else
{{
var G__9342 = (j__9336 + 1);
j__9336 = G__9342;
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
var this__9345 = this;
return (new cljs.core.TransientHashMap({},this__9345.root,this__9345.cnt,this__9345.has_nil_QMARK_,this__9345.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9346 = this;
var h__2153__auto____9347 = this__9346.__hash;
if(!((h__2153__auto____9347 == null)))
{return h__2153__auto____9347;
} else
{var h__2153__auto____9348 = cljs.core.hash_imap.call(null,coll);
this__9346.__hash = h__2153__auto____9348;
return h__2153__auto____9348;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9349 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9350 = this;
if((k == null))
{if(this__9350.has_nil_QMARK_)
{return this__9350.nil_val;
} else
{return not_found;
}
} else
{if((this__9350.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__9350.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9351 = this;
if((k == null))
{if((function (){var and__3822__auto____9352 = this__9351.has_nil_QMARK_;
if(and__3822__auto____9352)
{return (v === this__9351.nil_val);
} else
{return and__3822__auto____9352;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9351.meta,((this__9351.has_nil_QMARK_)?this__9351.cnt:(this__9351.cnt + 1)),this__9351.root,true,v,null));
}
} else
{var added_leaf_QMARK___9353 = (new cljs.core.Box(false));
var new_root__9354 = (((this__9351.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9351.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___9353);
if((new_root__9354 === this__9351.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9351.meta,((added_leaf_QMARK___9353.val)?(this__9351.cnt + 1):this__9351.cnt),new_root__9354,this__9351.has_nil_QMARK_,this__9351.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9355 = this;
if((k == null))
{return this__9355.has_nil_QMARK_;
} else
{if((this__9355.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__9355.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__9378 = null;
var G__9378__2 = (function (this_sym9356,k){
var this__9358 = this;
var this_sym9356__9359 = this;
var coll__9360 = this_sym9356__9359;
return coll__9360.cljs$core$ILookup$_lookup$arity$2(coll__9360,k);
});
var G__9378__3 = (function (this_sym9357,k,not_found){
var this__9358 = this;
var this_sym9357__9361 = this;
var coll__9362 = this_sym9357__9361;
return coll__9362.cljs$core$ILookup$_lookup$arity$3(coll__9362,k,not_found);
});
G__9378 = function(this_sym9357,k,not_found){
switch(arguments.length){
case 2:
return G__9378__2.call(this,this_sym9357,k);
case 3:
return G__9378__3.call(this,this_sym9357,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9378;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym9343,args9344){
var this__9363 = this;
return this_sym9343.call.apply(this_sym9343,[this_sym9343].concat(args9344.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9364 = this;
var init__9365 = ((this__9364.has_nil_QMARK_)?f.call(null,init,null,this__9364.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__9365))
{return cljs.core.deref.call(null,init__9365);
} else
{if(!((this__9364.root == null)))
{return this__9364.root.kv_reduce(f,init__9365);
} else
{if("\uFDD0'else")
{return init__9365;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9366 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__9367 = this;
var this__9368 = this;
return cljs.core.pr_str.call(null,this__9368);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9369 = this;
if((this__9369.cnt > 0))
{var s__9370 = ((!((this__9369.root == null)))?this__9369.root.inode_seq():null);
if(this__9369.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__9369.nil_val], true),s__9370);
} else
{return s__9370;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9371 = this;
return this__9371.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9372 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9373 = this;
return (new cljs.core.PersistentHashMap(meta,this__9373.cnt,this__9373.root,this__9373.has_nil_QMARK_,this__9373.nil_val,this__9373.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9374 = this;
return this__9374.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9375 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__9375.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9376 = this;
if((k == null))
{if(this__9376.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__9376.meta,(this__9376.cnt - 1),this__9376.root,false,null,null));
} else
{return coll;
}
} else
{if((this__9376.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__9377 = this__9376.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__9377 === this__9376.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9376.meta,(this__9376.cnt - 1),new_root__9377,this__9376.has_nil_QMARK_,this__9376.nil_val,null));
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
var len__9379 = ks.length;
var i__9380 = 0;
var out__9381 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__9380 < len__9379))
{{
var G__9382 = (i__9380 + 1);
var G__9383 = cljs.core.assoc_BANG_.call(null,out__9381,(ks[i__9380]),(vs[i__9380]));
i__9380 = G__9382;
out__9381 = G__9383;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9381);
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
var this__9384 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9385 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__9386 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9387 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__9388 = this;
if((k == null))
{if(this__9388.has_nil_QMARK_)
{return this__9388.nil_val;
} else
{return null;
}
} else
{if((this__9388.root == null))
{return null;
} else
{return this__9388.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__9389 = this;
if((k == null))
{if(this__9389.has_nil_QMARK_)
{return this__9389.nil_val;
} else
{return not_found;
}
} else
{if((this__9389.root == null))
{return not_found;
} else
{return this__9389.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9390 = this;
if(this__9390.edit)
{return this__9390.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__9391 = this;
var tcoll__9392 = this;
if(this__9391.edit)
{if((function (){var G__9393__9394 = o;
if(G__9393__9394)
{if((function (){var or__3824__auto____9395 = (G__9393__9394.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____9395)
{return or__3824__auto____9395;
} else
{return G__9393__9394.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__9393__9394.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9393__9394);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9393__9394);
}
})())
{return tcoll__9392.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__9396 = cljs.core.seq.call(null,o);
var tcoll__9397 = tcoll__9392;
while(true){
var temp__3971__auto____9398 = cljs.core.first.call(null,es__9396);
if(cljs.core.truth_(temp__3971__auto____9398))
{var e__9399 = temp__3971__auto____9398;
{
var G__9410 = cljs.core.next.call(null,es__9396);
var G__9411 = tcoll__9397.assoc_BANG_(cljs.core.key.call(null,e__9399),cljs.core.val.call(null,e__9399));
es__9396 = G__9410;
tcoll__9397 = G__9411;
continue;
}
} else
{return tcoll__9397;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__9400 = this;
var tcoll__9401 = this;
if(this__9400.edit)
{if((k == null))
{if((this__9400.nil_val === v))
{} else
{this__9400.nil_val = v;
}
if(this__9400.has_nil_QMARK_)
{} else
{this__9400.count = (this__9400.count + 1);
this__9400.has_nil_QMARK_ = true;
}
return tcoll__9401;
} else
{var added_leaf_QMARK___9402 = (new cljs.core.Box(false));
var node__9403 = (((this__9400.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9400.root).inode_assoc_BANG_(this__9400.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___9402);
if((node__9403 === this__9400.root))
{} else
{this__9400.root = node__9403;
}
if(added_leaf_QMARK___9402.val)
{this__9400.count = (this__9400.count + 1);
} else
{}
return tcoll__9401;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__9404 = this;
var tcoll__9405 = this;
if(this__9404.edit)
{if((k == null))
{if(this__9404.has_nil_QMARK_)
{this__9404.has_nil_QMARK_ = false;
this__9404.nil_val = null;
this__9404.count = (this__9404.count - 1);
return tcoll__9405;
} else
{return tcoll__9405;
}
} else
{if((this__9404.root == null))
{return tcoll__9405;
} else
{var removed_leaf_QMARK___9406 = (new cljs.core.Box(false));
var node__9407 = this__9404.root.inode_without_BANG_(this__9404.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___9406);
if((node__9407 === this__9404.root))
{} else
{this__9404.root = node__9407;
}
if(cljs.core.truth_((removed_leaf_QMARK___9406[0])))
{this__9404.count = (this__9404.count - 1);
} else
{}
return tcoll__9405;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__9408 = this;
var tcoll__9409 = this;
if(this__9408.edit)
{this__9408.edit = null;
return (new cljs.core.PersistentHashMap(null,this__9408.count,this__9408.root,this__9408.has_nil_QMARK_,this__9408.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__9414 = node;
var stack__9415 = stack;
while(true){
if(!((t__9414 == null)))
{{
var G__9416 = ((ascending_QMARK_)?t__9414.left:t__9414.right);
var G__9417 = cljs.core.conj.call(null,stack__9415,t__9414);
t__9414 = G__9416;
stack__9415 = G__9417;
continue;
}
} else
{return stack__9415;
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
var this__9418 = this;
var h__2153__auto____9419 = this__9418.__hash;
if(!((h__2153__auto____9419 == null)))
{return h__2153__auto____9419;
} else
{var h__2153__auto____9420 = cljs.core.hash_coll.call(null,coll);
this__9418.__hash = h__2153__auto____9420;
return h__2153__auto____9420;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9421 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__9422 = this;
var this__9423 = this;
return cljs.core.pr_str.call(null,this__9423);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9424 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9425 = this;
if((this__9425.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__9425.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__9426 = this;
return cljs.core.peek.call(null,this__9426.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__9427 = this;
var t__9428 = cljs.core.first.call(null,this__9427.stack);
var next_stack__9429 = cljs.core.tree_map_seq_push.call(null,((this__9427.ascending_QMARK_)?t__9428.right:t__9428.left),cljs.core.next.call(null,this__9427.stack),this__9427.ascending_QMARK_);
if(!((next_stack__9429 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__9429,this__9427.ascending_QMARK_,(this__9427.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9430 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9431 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__9431.stack,this__9431.ascending_QMARK_,this__9431.cnt,this__9431.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9432 = this;
return this__9432.meta;
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
{if((function (){var and__3822__auto____9434 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____9434)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____9434;
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
{if((function (){var and__3822__auto____9436 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____9436)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____9436;
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
var init__9440 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__9440))
{return cljs.core.deref.call(null,init__9440);
} else
{var init__9441 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__9440):init__9440);
if(cljs.core.reduced_QMARK_.call(null,init__9441))
{return cljs.core.deref.call(null,init__9441);
} else
{var init__9442 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__9441):init__9441);
if(cljs.core.reduced_QMARK_.call(null,init__9442))
{return cljs.core.deref.call(null,init__9442);
} else
{return init__9442;
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
var this__9445 = this;
var h__2153__auto____9446 = this__9445.__hash;
if(!((h__2153__auto____9446 == null)))
{return h__2153__auto____9446;
} else
{var h__2153__auto____9447 = cljs.core.hash_coll.call(null,coll);
this__9445.__hash = h__2153__auto____9447;
return h__2153__auto____9447;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9448 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9449 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9450 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__9450.key,this__9450.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__9498 = null;
var G__9498__2 = (function (this_sym9451,k){
var this__9453 = this;
var this_sym9451__9454 = this;
var node__9455 = this_sym9451__9454;
return node__9455.cljs$core$ILookup$_lookup$arity$2(node__9455,k);
});
var G__9498__3 = (function (this_sym9452,k,not_found){
var this__9453 = this;
var this_sym9452__9456 = this;
var node__9457 = this_sym9452__9456;
return node__9457.cljs$core$ILookup$_lookup$arity$3(node__9457,k,not_found);
});
G__9498 = function(this_sym9452,k,not_found){
switch(arguments.length){
case 2:
return G__9498__2.call(this,this_sym9452,k);
case 3:
return G__9498__3.call(this,this_sym9452,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9498;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym9443,args9444){
var this__9458 = this;
return this_sym9443.call.apply(this_sym9443,[this_sym9443].concat(args9444.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9459 = this;
return cljs.core.PersistentVector.fromArray([this__9459.key,this__9459.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9460 = this;
return this__9460.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9461 = this;
return this__9461.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__9462 = this;
var node__9463 = this;
return ins.balance_right(node__9463);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__9464 = this;
var node__9465 = this;
return (new cljs.core.RedNode(this__9464.key,this__9464.val,this__9464.left,this__9464.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__9466 = this;
var node__9467 = this;
return cljs.core.balance_right_del.call(null,this__9466.key,this__9466.val,this__9466.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__9468 = this;
var node__9469 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__9470 = this;
var node__9471 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__9471,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__9472 = this;
var node__9473 = this;
return cljs.core.balance_left_del.call(null,this__9472.key,this__9472.val,del,this__9472.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__9474 = this;
var node__9475 = this;
return ins.balance_left(node__9475);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__9476 = this;
var node__9477 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__9477,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__9499 = null;
var G__9499__0 = (function (){
var this__9478 = this;
var this__9480 = this;
return cljs.core.pr_str.call(null,this__9480);
});
G__9499 = function(){
switch(arguments.length){
case 0:
return G__9499__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9499;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__9481 = this;
var node__9482 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9482,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__9483 = this;
var node__9484 = this;
return node__9484;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9485 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9486 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9487 = this;
return cljs.core.list.call(null,this__9487.key,this__9487.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9488 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9489 = this;
return this__9489.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9490 = this;
return cljs.core.PersistentVector.fromArray([this__9490.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9491 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__9491.key,this__9491.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9492 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9493 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__9493.key,this__9493.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9494 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9495 = this;
if((n === 0))
{return this__9495.key;
} else
{if((n === 1))
{return this__9495.val;
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
var this__9496 = this;
if((n === 0))
{return this__9496.key;
} else
{if((n === 1))
{return this__9496.val;
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
var this__9497 = this;
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
var this__9502 = this;
var h__2153__auto____9503 = this__9502.__hash;
if(!((h__2153__auto____9503 == null)))
{return h__2153__auto____9503;
} else
{var h__2153__auto____9504 = cljs.core.hash_coll.call(null,coll);
this__9502.__hash = h__2153__auto____9504;
return h__2153__auto____9504;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9505 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9506 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9507 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__9507.key,this__9507.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__9555 = null;
var G__9555__2 = (function (this_sym9508,k){
var this__9510 = this;
var this_sym9508__9511 = this;
var node__9512 = this_sym9508__9511;
return node__9512.cljs$core$ILookup$_lookup$arity$2(node__9512,k);
});
var G__9555__3 = (function (this_sym9509,k,not_found){
var this__9510 = this;
var this_sym9509__9513 = this;
var node__9514 = this_sym9509__9513;
return node__9514.cljs$core$ILookup$_lookup$arity$3(node__9514,k,not_found);
});
G__9555 = function(this_sym9509,k,not_found){
switch(arguments.length){
case 2:
return G__9555__2.call(this,this_sym9509,k);
case 3:
return G__9555__3.call(this,this_sym9509,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9555;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym9500,args9501){
var this__9515 = this;
return this_sym9500.call.apply(this_sym9500,[this_sym9500].concat(args9501.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9516 = this;
return cljs.core.PersistentVector.fromArray([this__9516.key,this__9516.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9517 = this;
return this__9517.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9518 = this;
return this__9518.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__9519 = this;
var node__9520 = this;
return (new cljs.core.RedNode(this__9519.key,this__9519.val,this__9519.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__9521 = this;
var node__9522 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__9523 = this;
var node__9524 = this;
return (new cljs.core.RedNode(this__9523.key,this__9523.val,this__9523.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__9525 = this;
var node__9526 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__9527 = this;
var node__9528 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__9528,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__9529 = this;
var node__9530 = this;
return (new cljs.core.RedNode(this__9529.key,this__9529.val,del,this__9529.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__9531 = this;
var node__9532 = this;
return (new cljs.core.RedNode(this__9531.key,this__9531.val,ins,this__9531.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__9533 = this;
var node__9534 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9533.left))
{return (new cljs.core.RedNode(this__9533.key,this__9533.val,this__9533.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__9533.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9533.right))
{return (new cljs.core.RedNode(this__9533.right.key,this__9533.right.val,(new cljs.core.BlackNode(this__9533.key,this__9533.val,this__9533.left,this__9533.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__9533.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__9534,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__9556 = null;
var G__9556__0 = (function (){
var this__9535 = this;
var this__9537 = this;
return cljs.core.pr_str.call(null,this__9537);
});
G__9556 = function(){
switch(arguments.length){
case 0:
return G__9556__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9556;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__9538 = this;
var node__9539 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9538.right))
{return (new cljs.core.RedNode(this__9538.key,this__9538.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9538.left,null)),this__9538.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9538.left))
{return (new cljs.core.RedNode(this__9538.left.key,this__9538.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9538.left.left,null)),(new cljs.core.BlackNode(this__9538.key,this__9538.val,this__9538.left.right,this__9538.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9539,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__9540 = this;
var node__9541 = this;
return (new cljs.core.BlackNode(this__9540.key,this__9540.val,this__9540.left,this__9540.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9542 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9543 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9544 = this;
return cljs.core.list.call(null,this__9544.key,this__9544.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9545 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9546 = this;
return this__9546.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9547 = this;
return cljs.core.PersistentVector.fromArray([this__9547.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9548 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__9548.key,this__9548.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9549 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9550 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__9550.key,this__9550.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9551 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9552 = this;
if((n === 0))
{return this__9552.key;
} else
{if((n === 1))
{return this__9552.val;
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
var this__9553 = this;
if((n === 0))
{return this__9553.key;
} else
{if((n === 1))
{return this__9553.val;
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
var this__9554 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__9560 = comp.call(null,k,tree.key);
if((c__9560 === 0))
{(found[0] = tree);
return null;
} else
{if((c__9560 < 0))
{var ins__9561 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__9561 == null)))
{return tree.add_left(ins__9561);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__9562 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__9562 == null)))
{return tree.add_right(ins__9562);
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
{var app__9565 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__9565))
{return (new cljs.core.RedNode(app__9565.key,app__9565.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__9565.left,null)),(new cljs.core.RedNode(right.key,right.val,app__9565.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__9565,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__9566 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__9566))
{return (new cljs.core.RedNode(app__9566.key,app__9566.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__9566.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__9566.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__9566,right.right,null)));
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
{var c__9572 = comp.call(null,k,tree.key);
if((c__9572 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__9572 < 0))
{var del__9573 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____9574 = !((del__9573 == null));
if(or__3824__auto____9574)
{return or__3824__auto____9574;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__9573,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__9573,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__9575 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____9576 = !((del__9575 == null));
if(or__3824__auto____9576)
{return or__3824__auto____9576;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__9575);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__9575,null));
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
var tk__9579 = tree.key;
var c__9580 = comp.call(null,k,tk__9579);
if((c__9580 === 0))
{return tree.replace(tk__9579,v,tree.left,tree.right);
} else
{if((c__9580 < 0))
{return tree.replace(tk__9579,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__9579,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
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
var this__9583 = this;
var h__2153__auto____9584 = this__9583.__hash;
if(!((h__2153__auto____9584 == null)))
{return h__2153__auto____9584;
} else
{var h__2153__auto____9585 = cljs.core.hash_imap.call(null,coll);
this__9583.__hash = h__2153__auto____9585;
return h__2153__auto____9585;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9586 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9587 = this;
var n__9588 = coll.entry_at(k);
if(!((n__9588 == null)))
{return n__9588.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9589 = this;
var found__9590 = [null];
var t__9591 = cljs.core.tree_map_add.call(null,this__9589.comp,this__9589.tree,k,v,found__9590);
if((t__9591 == null))
{var found_node__9592 = cljs.core.nth.call(null,found__9590,0);
if(cljs.core._EQ_.call(null,v,found_node__9592.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9589.comp,cljs.core.tree_map_replace.call(null,this__9589.comp,this__9589.tree,k,v),this__9589.cnt,this__9589.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9589.comp,t__9591.blacken(),(this__9589.cnt + 1),this__9589.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9593 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__9627 = null;
var G__9627__2 = (function (this_sym9594,k){
var this__9596 = this;
var this_sym9594__9597 = this;
var coll__9598 = this_sym9594__9597;
return coll__9598.cljs$core$ILookup$_lookup$arity$2(coll__9598,k);
});
var G__9627__3 = (function (this_sym9595,k,not_found){
var this__9596 = this;
var this_sym9595__9599 = this;
var coll__9600 = this_sym9595__9599;
return coll__9600.cljs$core$ILookup$_lookup$arity$3(coll__9600,k,not_found);
});
G__9627 = function(this_sym9595,k,not_found){
switch(arguments.length){
case 2:
return G__9627__2.call(this,this_sym9595,k);
case 3:
return G__9627__3.call(this,this_sym9595,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9627;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym9581,args9582){
var this__9601 = this;
return this_sym9581.call.apply(this_sym9581,[this_sym9581].concat(args9582.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9602 = this;
if(!((this__9602.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__9602.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9603 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9604 = this;
if((this__9604.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9604.tree,false,this__9604.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__9605 = this;
var this__9606 = this;
return cljs.core.pr_str.call(null,this__9606);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__9607 = this;
var coll__9608 = this;
var t__9609 = this__9607.tree;
while(true){
if(!((t__9609 == null)))
{var c__9610 = this__9607.comp.call(null,k,t__9609.key);
if((c__9610 === 0))
{return t__9609;
} else
{if((c__9610 < 0))
{{
var G__9628 = t__9609.left;
t__9609 = G__9628;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__9629 = t__9609.right;
t__9609 = G__9629;
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
var this__9611 = this;
if((this__9611.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9611.tree,ascending_QMARK_,this__9611.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9612 = this;
if((this__9612.cnt > 0))
{var stack__9613 = null;
var t__9614 = this__9612.tree;
while(true){
if(!((t__9614 == null)))
{var c__9615 = this__9612.comp.call(null,k,t__9614.key);
if((c__9615 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__9613,t__9614),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__9615 < 0))
{{
var G__9630 = cljs.core.conj.call(null,stack__9613,t__9614);
var G__9631 = t__9614.left;
stack__9613 = G__9630;
t__9614 = G__9631;
continue;
}
} else
{{
var G__9632 = stack__9613;
var G__9633 = t__9614.right;
stack__9613 = G__9632;
t__9614 = G__9633;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__9615 > 0))
{{
var G__9634 = cljs.core.conj.call(null,stack__9613,t__9614);
var G__9635 = t__9614.right;
stack__9613 = G__9634;
t__9614 = G__9635;
continue;
}
} else
{{
var G__9636 = stack__9613;
var G__9637 = t__9614.left;
stack__9613 = G__9636;
t__9614 = G__9637;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__9613 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__9613,ascending_QMARK_,-1,null));
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
var this__9616 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9617 = this;
return this__9617.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9618 = this;
if((this__9618.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9618.tree,true,this__9618.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9619 = this;
return this__9619.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9620 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9621 = this;
return (new cljs.core.PersistentTreeMap(this__9621.comp,this__9621.tree,this__9621.cnt,meta,this__9621.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9622 = this;
return this__9622.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9623 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__9623.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9624 = this;
var found__9625 = [null];
var t__9626 = cljs.core.tree_map_remove.call(null,this__9624.comp,this__9624.tree,k,found__9625);
if((t__9626 == null))
{if((cljs.core.nth.call(null,found__9625,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9624.comp,null,0,this__9624.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9624.comp,t__9626.blacken(),(this__9624.cnt - 1),this__9624.meta,null));
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
var in__9640 = cljs.core.seq.call(null,keyvals);
var out__9641 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__9640)
{{
var G__9642 = cljs.core.nnext.call(null,in__9640);
var G__9643 = cljs.core.assoc_BANG_.call(null,out__9641,cljs.core.first.call(null,in__9640),cljs.core.second.call(null,in__9640));
in__9640 = G__9642;
out__9641 = G__9643;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9641);
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
hash_map.cljs$lang$applyTo = (function (arglist__9644){
var keyvals = cljs.core.seq(arglist__9644);;
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
array_map.cljs$lang$applyTo = (function (arglist__9645){
var keyvals = cljs.core.seq(arglist__9645);;
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
var in__9648 = cljs.core.seq.call(null,keyvals);
var out__9649 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__9648)
{{
var G__9650 = cljs.core.nnext.call(null,in__9648);
var G__9651 = cljs.core.assoc.call(null,out__9649,cljs.core.first.call(null,in__9648),cljs.core.second.call(null,in__9648));
in__9648 = G__9650;
out__9649 = G__9651;
continue;
}
} else
{return out__9649;
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
sorted_map.cljs$lang$applyTo = (function (arglist__9652){
var keyvals = cljs.core.seq(arglist__9652);;
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
var in__9655 = cljs.core.seq.call(null,keyvals);
var out__9656 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__9655)
{{
var G__9657 = cljs.core.nnext.call(null,in__9655);
var G__9658 = cljs.core.assoc.call(null,out__9656,cljs.core.first.call(null,in__9655),cljs.core.second.call(null,in__9655));
in__9655 = G__9657;
out__9656 = G__9658;
continue;
}
} else
{return out__9656;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__9659){
var comparator = cljs.core.first(arglist__9659);
var keyvals = cljs.core.rest(arglist__9659);
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
{return cljs.core.reduce.call(null,(function (p1__9660_SHARP_,p2__9661_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____9663 = p1__9660_SHARP_;
if(cljs.core.truth_(or__3824__auto____9663))
{return or__3824__auto____9663;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__9661_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__9664){
var maps = cljs.core.seq(arglist__9664);;
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
{var merge_entry__9672 = (function (m,e){
var k__9670 = cljs.core.first.call(null,e);
var v__9671 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__9670))
{return cljs.core.assoc.call(null,m,k__9670,f.call(null,cljs.core._lookup.call(null,m,k__9670,null),v__9671));
} else
{return cljs.core.assoc.call(null,m,k__9670,v__9671);
}
});
var merge2__9674 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__9672,(function (){var or__3824__auto____9673 = m1;
if(cljs.core.truth_(or__3824__auto____9673))
{return or__3824__auto____9673;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__9674,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__9675){
var f = cljs.core.first(arglist__9675);
var maps = cljs.core.rest(arglist__9675);
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
var ret__9680 = cljs.core.ObjMap.EMPTY;
var keys__9681 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__9681)
{var key__9682 = cljs.core.first.call(null,keys__9681);
var entry__9683 = cljs.core._lookup.call(null,map,key__9682,"\uFDD0'user/not-found");
{
var G__9684 = ((cljs.core.not_EQ_.call(null,entry__9683,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__9680,key__9682,entry__9683):ret__9680);
var G__9685 = cljs.core.next.call(null,keys__9681);
ret__9680 = G__9684;
keys__9681 = G__9685;
continue;
}
} else
{return ret__9680;
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
var this__9689 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__9689.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9690 = this;
var h__2153__auto____9691 = this__9690.__hash;
if(!((h__2153__auto____9691 == null)))
{return h__2153__auto____9691;
} else
{var h__2153__auto____9692 = cljs.core.hash_iset.call(null,coll);
this__9690.__hash = h__2153__auto____9692;
return h__2153__auto____9692;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9693 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9694 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9694.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__9715 = null;
var G__9715__2 = (function (this_sym9695,k){
var this__9697 = this;
var this_sym9695__9698 = this;
var coll__9699 = this_sym9695__9698;
return coll__9699.cljs$core$ILookup$_lookup$arity$2(coll__9699,k);
});
var G__9715__3 = (function (this_sym9696,k,not_found){
var this__9697 = this;
var this_sym9696__9700 = this;
var coll__9701 = this_sym9696__9700;
return coll__9701.cljs$core$ILookup$_lookup$arity$3(coll__9701,k,not_found);
});
G__9715 = function(this_sym9696,k,not_found){
switch(arguments.length){
case 2:
return G__9715__2.call(this,this_sym9696,k);
case 3:
return G__9715__3.call(this,this_sym9696,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9715;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym9687,args9688){
var this__9702 = this;
return this_sym9687.call.apply(this_sym9687,[this_sym9687].concat(args9688.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9703 = this;
return (new cljs.core.PersistentHashSet(this__9703.meta,cljs.core.assoc.call(null,this__9703.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__9704 = this;
var this__9705 = this;
return cljs.core.pr_str.call(null,this__9705);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9706 = this;
return cljs.core.keys.call(null,this__9706.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9707 = this;
return (new cljs.core.PersistentHashSet(this__9707.meta,cljs.core.dissoc.call(null,this__9707.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9708 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9709 = this;
var and__3822__auto____9710 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____9710)
{var and__3822__auto____9711 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____9711)
{return cljs.core.every_QMARK_.call(null,(function (p1__9686_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9686_SHARP_);
}),other);
} else
{return and__3822__auto____9711;
}
} else
{return and__3822__auto____9710;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9712 = this;
return (new cljs.core.PersistentHashSet(meta,this__9712.hash_map,this__9712.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9713 = this;
return this__9713.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9714 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__9714.meta);
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
var G__9733 = null;
var G__9733__2 = (function (this_sym9719,k){
var this__9721 = this;
var this_sym9719__9722 = this;
var tcoll__9723 = this_sym9719__9722;
if((cljs.core._lookup.call(null,this__9721.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__9733__3 = (function (this_sym9720,k,not_found){
var this__9721 = this;
var this_sym9720__9724 = this;
var tcoll__9725 = this_sym9720__9724;
if((cljs.core._lookup.call(null,this__9721.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__9733 = function(this_sym9720,k,not_found){
switch(arguments.length){
case 2:
return G__9733__2.call(this,this_sym9720,k);
case 3:
return G__9733__3.call(this,this_sym9720,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9733;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym9717,args9718){
var this__9726 = this;
return this_sym9717.call.apply(this_sym9717,[this_sym9717].concat(args9718.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__9727 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__9728 = this;
if((cljs.core._lookup.call(null,this__9728.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9729 = this;
return cljs.core.count.call(null,this__9729.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__9730 = this;
this__9730.transient_map = cljs.core.dissoc_BANG_.call(null,this__9730.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9731 = this;
this__9731.transient_map = cljs.core.assoc_BANG_.call(null,this__9731.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9732 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__9732.transient_map),null));
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
var this__9736 = this;
var h__2153__auto____9737 = this__9736.__hash;
if(!((h__2153__auto____9737 == null)))
{return h__2153__auto____9737;
} else
{var h__2153__auto____9738 = cljs.core.hash_iset.call(null,coll);
this__9736.__hash = h__2153__auto____9738;
return h__2153__auto____9738;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9739 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9740 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9740.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__9766 = null;
var G__9766__2 = (function (this_sym9741,k){
var this__9743 = this;
var this_sym9741__9744 = this;
var coll__9745 = this_sym9741__9744;
return coll__9745.cljs$core$ILookup$_lookup$arity$2(coll__9745,k);
});
var G__9766__3 = (function (this_sym9742,k,not_found){
var this__9743 = this;
var this_sym9742__9746 = this;
var coll__9747 = this_sym9742__9746;
return coll__9747.cljs$core$ILookup$_lookup$arity$3(coll__9747,k,not_found);
});
G__9766 = function(this_sym9742,k,not_found){
switch(arguments.length){
case 2:
return G__9766__2.call(this,this_sym9742,k);
case 3:
return G__9766__3.call(this,this_sym9742,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9766;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym9734,args9735){
var this__9748 = this;
return this_sym9734.call.apply(this_sym9734,[this_sym9734].concat(args9735.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9749 = this;
return (new cljs.core.PersistentTreeSet(this__9749.meta,cljs.core.assoc.call(null,this__9749.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9750 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__9750.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__9751 = this;
var this__9752 = this;
return cljs.core.pr_str.call(null,this__9752);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__9753 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__9753.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9754 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__9754.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__9755 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9756 = this;
return cljs.core._comparator.call(null,this__9756.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9757 = this;
return cljs.core.keys.call(null,this__9757.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9758 = this;
return (new cljs.core.PersistentTreeSet(this__9758.meta,cljs.core.dissoc.call(null,this__9758.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9759 = this;
return cljs.core.count.call(null,this__9759.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9760 = this;
var and__3822__auto____9761 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____9761)
{var and__3822__auto____9762 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____9762)
{return cljs.core.every_QMARK_.call(null,(function (p1__9716_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9716_SHARP_);
}),other);
} else
{return and__3822__auto____9762;
}
} else
{return and__3822__auto____9761;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9763 = this;
return (new cljs.core.PersistentTreeSet(meta,this__9763.tree_map,this__9763.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9764 = this;
return this__9764.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9765 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__9765.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map.call(null),0));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in__9769 = cljs.core.seq.call(null,coll);
var out__9770 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__9769))
{{
var G__9771 = cljs.core.next.call(null,in__9769);
var G__9772 = cljs.core.conj_BANG_.call(null,out__9770,cljs.core.first.call(null,in__9769));
in__9769 = G__9771;
out__9770 = G__9772;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9770);
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
sorted_set.cljs$lang$applyTo = (function (arglist__9773){
var keys = cljs.core.seq(arglist__9773);;
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__9775){
var comparator = cljs.core.first(arglist__9775);
var keys = cljs.core.rest(arglist__9775);
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
{var n__9781 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____9782 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____9782))
{var e__9783 = temp__3971__auto____9782;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__9783));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__9781,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__9774_SHARP_){
var temp__3971__auto____9784 = cljs.core.find.call(null,smap,p1__9774_SHARP_);
if(cljs.core.truth_(temp__3971__auto____9784))
{var e__9785 = temp__3971__auto____9784;
return cljs.core.second.call(null,e__9785);
} else
{return p1__9774_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__9815 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__9808,seen){
while(true){
var vec__9809__9810 = p__9808;
var f__9811 = cljs.core.nth.call(null,vec__9809__9810,0,null);
var xs__9812 = vec__9809__9810;
var temp__3974__auto____9813 = cljs.core.seq.call(null,xs__9812);
if(temp__3974__auto____9813)
{var s__9814 = temp__3974__auto____9813;
if(cljs.core.contains_QMARK_.call(null,seen,f__9811))
{{
var G__9816 = cljs.core.rest.call(null,s__9814);
var G__9817 = seen;
p__9808 = G__9816;
seen = G__9817;
continue;
}
} else
{return cljs.core.cons.call(null,f__9811,step.call(null,cljs.core.rest.call(null,s__9814),cljs.core.conj.call(null,seen,f__9811)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__9815.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__9820 = cljs.core.PersistentVector.EMPTY;
var s__9821 = s;
while(true){
if(cljs.core.next.call(null,s__9821))
{{
var G__9822 = cljs.core.conj.call(null,ret__9820,cljs.core.first.call(null,s__9821));
var G__9823 = cljs.core.next.call(null,s__9821);
ret__9820 = G__9822;
s__9821 = G__9823;
continue;
}
} else
{return cljs.core.seq.call(null,ret__9820);
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
{if((function (){var or__3824__auto____9826 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9826)
{return or__3824__auto____9826;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9827 = x.lastIndexOf("/");
if((i__9827 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__9827 + 1));
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
if((function (){var or__3824__auto____9830 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9830)
{return or__3824__auto____9830;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9831 = x.lastIndexOf("/");
if((i__9831 > -1))
{return cljs.core.subs.call(null,x,2,i__9831);
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
var map__9838 = cljs.core.ObjMap.EMPTY;
var ks__9839 = cljs.core.seq.call(null,keys);
var vs__9840 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____9841 = ks__9839;
if(and__3822__auto____9841)
{return vs__9840;
} else
{return and__3822__auto____9841;
}
})())
{{
var G__9842 = cljs.core.assoc.call(null,map__9838,cljs.core.first.call(null,ks__9839),cljs.core.first.call(null,vs__9840));
var G__9843 = cljs.core.next.call(null,ks__9839);
var G__9844 = cljs.core.next.call(null,vs__9840);
map__9838 = G__9842;
ks__9839 = G__9843;
vs__9840 = G__9844;
continue;
}
} else
{return map__9838;
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
var G__9847__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9832_SHARP_,p2__9833_SHARP_){
return max_key.call(null,k,p1__9832_SHARP_,p2__9833_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__9847 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9847__delegate.call(this, k, x, y, more);
};
G__9847.cljs$lang$maxFixedArity = 3;
G__9847.cljs$lang$applyTo = (function (arglist__9848){
var k = cljs.core.first(arglist__9848);
var x = cljs.core.first(cljs.core.next(arglist__9848));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9848)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9848)));
return G__9847__delegate(k, x, y, more);
});
G__9847.cljs$lang$arity$variadic = G__9847__delegate;
return G__9847;
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
var G__9849__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9845_SHARP_,p2__9846_SHARP_){
return min_key.call(null,k,p1__9845_SHARP_,p2__9846_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__9849 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9849__delegate.call(this, k, x, y, more);
};
G__9849.cljs$lang$maxFixedArity = 3;
G__9849.cljs$lang$applyTo = (function (arglist__9850){
var k = cljs.core.first(arglist__9850);
var x = cljs.core.first(cljs.core.next(arglist__9850));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9850)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9850)));
return G__9849__delegate(k, x, y, more);
});
G__9849.cljs$lang$arity$variadic = G__9849__delegate;
return G__9849;
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
var temp__3974__auto____9853 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9853)
{var s__9854 = temp__3974__auto____9853;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__9854),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__9854)));
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
var temp__3974__auto____9857 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9857)
{var s__9858 = temp__3974__auto____9857;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__9858))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9858),take_while.call(null,pred,cljs.core.rest.call(null,s__9858)));
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
var comp__9860 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__9860.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__9872 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____9873 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____9873))
{var vec__9874__9875 = temp__3974__auto____9873;
var e__9876 = cljs.core.nth.call(null,vec__9874__9875,0,null);
var s__9877 = vec__9874__9875;
if(cljs.core.truth_(include__9872.call(null,e__9876)))
{return s__9877;
} else
{return cljs.core.next.call(null,s__9877);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9872,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9878 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____9878))
{var vec__9879__9880 = temp__3974__auto____9878;
var e__9881 = cljs.core.nth.call(null,vec__9879__9880,0,null);
var s__9882 = vec__9879__9880;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__9881))?s__9882:cljs.core.next.call(null,s__9882)));
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
var include__9894 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____9895 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____9895))
{var vec__9896__9897 = temp__3974__auto____9895;
var e__9898 = cljs.core.nth.call(null,vec__9896__9897,0,null);
var s__9899 = vec__9896__9897;
if(cljs.core.truth_(include__9894.call(null,e__9898)))
{return s__9899;
} else
{return cljs.core.next.call(null,s__9899);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9894,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9900 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____9900))
{var vec__9901__9902 = temp__3974__auto____9900;
var e__9903 = cljs.core.nth.call(null,vec__9901__9902,0,null);
var s__9904 = vec__9901__9902;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__9903))?s__9904:cljs.core.next.call(null,s__9904)));
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
var this__9905 = this;
var h__2153__auto____9906 = this__9905.__hash;
if(!((h__2153__auto____9906 == null)))
{return h__2153__auto____9906;
} else
{var h__2153__auto____9907 = cljs.core.hash_coll.call(null,rng);
this__9905.__hash = h__2153__auto____9907;
return h__2153__auto____9907;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__9908 = this;
if((this__9908.step > 0))
{if(((this__9908.start + this__9908.step) < this__9908.end))
{return (new cljs.core.Range(this__9908.meta,(this__9908.start + this__9908.step),this__9908.end,this__9908.step,null));
} else
{return null;
}
} else
{if(((this__9908.start + this__9908.step) > this__9908.end))
{return (new cljs.core.Range(this__9908.meta,(this__9908.start + this__9908.step),this__9908.end,this__9908.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__9909 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__9910 = this;
var this__9911 = this;
return cljs.core.pr_str.call(null,this__9911);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__9912 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__9913 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__9914 = this;
if((this__9914.step > 0))
{if((this__9914.start < this__9914.end))
{return rng;
} else
{return null;
}
} else
{if((this__9914.start > this__9914.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__9915 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__9915.end - this__9915.start) / this__9915.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__9916 = this;
return this__9916.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__9917 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__9917.meta,(this__9917.start + this__9917.step),this__9917.end,this__9917.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__9918 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__9919 = this;
return (new cljs.core.Range(meta,this__9919.start,this__9919.end,this__9919.step,this__9919.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__9920 = this;
return this__9920.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__9921 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9921.start + (n * this__9921.step));
} else
{if((function (){var and__3822__auto____9922 = (this__9921.start > this__9921.end);
if(and__3822__auto____9922)
{return (this__9921.step === 0);
} else
{return and__3822__auto____9922;
}
})())
{return this__9921.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__9923 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9923.start + (n * this__9923.step));
} else
{if((function (){var and__3822__auto____9924 = (this__9923.start > this__9923.end);
if(and__3822__auto____9924)
{return (this__9923.step === 0);
} else
{return and__3822__auto____9924;
}
})())
{return this__9923.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__9925 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9925.meta);
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
var temp__3974__auto____9928 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9928)
{var s__9929 = temp__3974__auto____9928;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__9929),take_nth.call(null,n,cljs.core.drop.call(null,n,s__9929)));
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
var temp__3974__auto____9936 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9936)
{var s__9937 = temp__3974__auto____9936;
var fst__9938 = cljs.core.first.call(null,s__9937);
var fv__9939 = f.call(null,fst__9938);
var run__9940 = cljs.core.cons.call(null,fst__9938,cljs.core.take_while.call(null,(function (p1__9930_SHARP_){
return cljs.core._EQ_.call(null,fv__9939,f.call(null,p1__9930_SHARP_));
}),cljs.core.next.call(null,s__9937)));
return cljs.core.cons.call(null,run__9940,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__9940),s__9937))));
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
var temp__3971__auto____9955 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____9955)
{var s__9956 = temp__3971__auto____9955;
return reductions.call(null,f,cljs.core.first.call(null,s__9956),cljs.core.rest.call(null,s__9956));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9957 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9957)
{var s__9958 = temp__3974__auto____9957;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__9958)),cljs.core.rest.call(null,s__9958));
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
var G__9961 = null;
var G__9961__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__9961__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__9961__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__9961__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__9961__4 = (function() { 
var G__9962__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__9962 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9962__delegate.call(this, x, y, z, args);
};
G__9962.cljs$lang$maxFixedArity = 3;
G__9962.cljs$lang$applyTo = (function (arglist__9963){
var x = cljs.core.first(arglist__9963);
var y = cljs.core.first(cljs.core.next(arglist__9963));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9963)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9963)));
return G__9962__delegate(x, y, z, args);
});
G__9962.cljs$lang$arity$variadic = G__9962__delegate;
return G__9962;
})()
;
G__9961 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9961__0.call(this);
case 1:
return G__9961__1.call(this,x);
case 2:
return G__9961__2.call(this,x,y);
case 3:
return G__9961__3.call(this,x,y,z);
default:
return G__9961__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9961.cljs$lang$maxFixedArity = 3;
G__9961.cljs$lang$applyTo = G__9961__4.cljs$lang$applyTo;
return G__9961;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__9964 = null;
var G__9964__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__9964__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__9964__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__9964__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__9964__4 = (function() { 
var G__9965__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__9965 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9965__delegate.call(this, x, y, z, args);
};
G__9965.cljs$lang$maxFixedArity = 3;
G__9965.cljs$lang$applyTo = (function (arglist__9966){
var x = cljs.core.first(arglist__9966);
var y = cljs.core.first(cljs.core.next(arglist__9966));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9966)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9966)));
return G__9965__delegate(x, y, z, args);
});
G__9965.cljs$lang$arity$variadic = G__9965__delegate;
return G__9965;
})()
;
G__9964 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9964__0.call(this);
case 1:
return G__9964__1.call(this,x);
case 2:
return G__9964__2.call(this,x,y);
case 3:
return G__9964__3.call(this,x,y,z);
default:
return G__9964__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9964.cljs$lang$maxFixedArity = 3;
G__9964.cljs$lang$applyTo = G__9964__4.cljs$lang$applyTo;
return G__9964;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__9967 = null;
var G__9967__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__9967__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__9967__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__9967__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__9967__4 = (function() { 
var G__9968__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__9968 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9968__delegate.call(this, x, y, z, args);
};
G__9968.cljs$lang$maxFixedArity = 3;
G__9968.cljs$lang$applyTo = (function (arglist__9969){
var x = cljs.core.first(arglist__9969);
var y = cljs.core.first(cljs.core.next(arglist__9969));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9969)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9969)));
return G__9968__delegate(x, y, z, args);
});
G__9968.cljs$lang$arity$variadic = G__9968__delegate;
return G__9968;
})()
;
G__9967 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9967__0.call(this);
case 1:
return G__9967__1.call(this,x);
case 2:
return G__9967__2.call(this,x,y);
case 3:
return G__9967__3.call(this,x,y,z);
default:
return G__9967__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9967.cljs$lang$maxFixedArity = 3;
G__9967.cljs$lang$applyTo = G__9967__4.cljs$lang$applyTo;
return G__9967;
})()
});
var juxt__4 = (function() { 
var G__9970__delegate = function (f,g,h,fs){
var fs__9960 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__9971 = null;
var G__9971__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__9941_SHARP_,p2__9942_SHARP_){
return cljs.core.conj.call(null,p1__9941_SHARP_,p2__9942_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__9960);
});
var G__9971__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__9943_SHARP_,p2__9944_SHARP_){
return cljs.core.conj.call(null,p1__9943_SHARP_,p2__9944_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__9960);
});
var G__9971__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__9945_SHARP_,p2__9946_SHARP_){
return cljs.core.conj.call(null,p1__9945_SHARP_,p2__9946_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__9960);
});
var G__9971__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__9947_SHARP_,p2__9948_SHARP_){
return cljs.core.conj.call(null,p1__9947_SHARP_,p2__9948_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__9960);
});
var G__9971__4 = (function() { 
var G__9972__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__9949_SHARP_,p2__9950_SHARP_){
return cljs.core.conj.call(null,p1__9949_SHARP_,cljs.core.apply.call(null,p2__9950_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__9960);
};
var G__9972 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9972__delegate.call(this, x, y, z, args);
};
G__9972.cljs$lang$maxFixedArity = 3;
G__9972.cljs$lang$applyTo = (function (arglist__9973){
var x = cljs.core.first(arglist__9973);
var y = cljs.core.first(cljs.core.next(arglist__9973));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9973)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9973)));
return G__9972__delegate(x, y, z, args);
});
G__9972.cljs$lang$arity$variadic = G__9972__delegate;
return G__9972;
})()
;
G__9971 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9971__0.call(this);
case 1:
return G__9971__1.call(this,x);
case 2:
return G__9971__2.call(this,x,y);
case 3:
return G__9971__3.call(this,x,y,z);
default:
return G__9971__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9971.cljs$lang$maxFixedArity = 3;
G__9971.cljs$lang$applyTo = G__9971__4.cljs$lang$applyTo;
return G__9971;
})()
};
var G__9970 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9970__delegate.call(this, f, g, h, fs);
};
G__9970.cljs$lang$maxFixedArity = 3;
G__9970.cljs$lang$applyTo = (function (arglist__9974){
var f = cljs.core.first(arglist__9974);
var g = cljs.core.first(cljs.core.next(arglist__9974));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9974)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9974)));
return G__9970__delegate(f, g, h, fs);
});
G__9970.cljs$lang$arity$variadic = G__9970__delegate;
return G__9970;
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
var G__9977 = cljs.core.next.call(null,coll);
coll = G__9977;
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
if(cljs.core.truth_((function (){var and__3822__auto____9976 = cljs.core.seq.call(null,coll);
if(and__3822__auto____9976)
{return (n > 0);
} else
{return and__3822__auto____9976;
}
})()))
{{
var G__9978 = (n - 1);
var G__9979 = cljs.core.next.call(null,coll);
n = G__9978;
coll = G__9979;
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
var matches__9981 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__9981),s))
{if((cljs.core.count.call(null,matches__9981) === 1))
{return cljs.core.first.call(null,matches__9981);
} else
{return cljs.core.vec.call(null,matches__9981);
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
var matches__9983 = re.exec(s);
if((matches__9983 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__9983) === 1))
{return cljs.core.first.call(null,matches__9983);
} else
{return cljs.core.vec.call(null,matches__9983);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__9988 = cljs.core.re_find.call(null,re,s);
var match_idx__9989 = s.search(re);
var match_str__9990 = ((cljs.core.coll_QMARK_.call(null,match_data__9988))?cljs.core.first.call(null,match_data__9988):match_data__9988);
var post_match__9991 = cljs.core.subs.call(null,s,(match_idx__9989 + cljs.core.count.call(null,match_str__9990)));
if(cljs.core.truth_(match_data__9988))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__9988,re_seq.call(null,re,post_match__9991));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__9998__9999 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___10000 = cljs.core.nth.call(null,vec__9998__9999,0,null);
var flags__10001 = cljs.core.nth.call(null,vec__9998__9999,1,null);
var pattern__10002 = cljs.core.nth.call(null,vec__9998__9999,2,null);
return (new RegExp(pattern__10002,flags__10001));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__9992_SHARP_){
return print_one.call(null,p1__9992_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____10012 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____10012))
{var and__3822__auto____10016 = (function (){var G__10013__10014 = obj;
if(G__10013__10014)
{if((function (){var or__3824__auto____10015 = (G__10013__10014.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____10015)
{return or__3824__auto____10015;
} else
{return G__10013__10014.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__10013__10014.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__10013__10014);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__10013__10014);
}
})();
if(cljs.core.truth_(and__3822__auto____10016))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____10016;
}
} else
{return and__3822__auto____10012;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____10017 = !((obj == null));
if(and__3822__auto____10017)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____10017;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__10018__10019 = obj;
if(G__10018__10019)
{if((function (){var or__3824__auto____10020 = (G__10018__10019.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____10020)
{return or__3824__auto____10020;
} else
{return G__10018__10019.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__10018__10019.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__10018__10019);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__10018__10019);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__10035 = cljs.core.first.call(null,objs);
var sb__10036 = (new goog.string.StringBuffer());
var G__10037__10038 = cljs.core.seq.call(null,objs);
if(G__10037__10038)
{var obj__10039 = cljs.core.first.call(null,G__10037__10038);
var G__10037__10040 = G__10037__10038;
while(true){
if((obj__10039 === first_obj__10035))
{} else
{sb__10036.append(" ");
}
var G__10041__10042 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__10039,opts));
if(G__10041__10042)
{var string__10043 = cljs.core.first.call(null,G__10041__10042);
var G__10041__10044 = G__10041__10042;
while(true){
sb__10036.append(string__10043);
var temp__3974__auto____10045 = cljs.core.next.call(null,G__10041__10044);
if(temp__3974__auto____10045)
{var G__10041__10046 = temp__3974__auto____10045;
{
var G__10049 = cljs.core.first.call(null,G__10041__10046);
var G__10050 = G__10041__10046;
string__10043 = G__10049;
G__10041__10044 = G__10050;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____10047 = cljs.core.next.call(null,G__10037__10040);
if(temp__3974__auto____10047)
{var G__10037__10048 = temp__3974__auto____10047;
{
var G__10051 = cljs.core.first.call(null,G__10037__10048);
var G__10052 = G__10037__10048;
obj__10039 = G__10051;
G__10037__10040 = G__10052;
continue;
}
} else
{}
break;
}
} else
{}
return sb__10036;
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
var sb__10054 = cljs.core.pr_sb.call(null,objs,opts);
sb__10054.append("\n");
return [cljs.core.str(sb__10054)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__10068 = cljs.core.first.call(null,objs);
var G__10069__10070 = cljs.core.seq.call(null,objs);
if(G__10069__10070)
{var obj__10071 = cljs.core.first.call(null,G__10069__10070);
var G__10069__10072 = G__10069__10070;
while(true){
if((obj__10071 === first_obj__10068))
{} else
{cljs.core.string_print.call(null," ");
}
var G__10073__10074 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__10071,opts));
if(G__10073__10074)
{var string__10075 = cljs.core.first.call(null,G__10073__10074);
var G__10073__10076 = G__10073__10074;
while(true){
cljs.core.string_print.call(null,string__10075);
var temp__3974__auto____10077 = cljs.core.next.call(null,G__10073__10076);
if(temp__3974__auto____10077)
{var G__10073__10078 = temp__3974__auto____10077;
{
var G__10081 = cljs.core.first.call(null,G__10073__10078);
var G__10082 = G__10073__10078;
string__10075 = G__10081;
G__10073__10076 = G__10082;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____10079 = cljs.core.next.call(null,G__10069__10072);
if(temp__3974__auto____10079)
{var G__10069__10080 = temp__3974__auto____10079;
{
var G__10083 = cljs.core.first.call(null,G__10069__10080);
var G__10084 = G__10069__10080;
obj__10071 = G__10083;
G__10069__10072 = G__10084;
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
pr_str.cljs$lang$applyTo = (function (arglist__10085){
var objs = cljs.core.seq(arglist__10085);;
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
prn_str.cljs$lang$applyTo = (function (arglist__10086){
var objs = cljs.core.seq(arglist__10086);;
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
pr.cljs$lang$applyTo = (function (arglist__10087){
var objs = cljs.core.seq(arglist__10087);;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__10088){
var objs = cljs.core.seq(arglist__10088);;
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
print_str.cljs$lang$applyTo = (function (arglist__10089){
var objs = cljs.core.seq(arglist__10089);;
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
println.cljs$lang$applyTo = (function (arglist__10090){
var objs = cljs.core.seq(arglist__10090);;
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
println_str.cljs$lang$applyTo = (function (arglist__10091){
var objs = cljs.core.seq(arglist__10091);;
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
prn.cljs$lang$applyTo = (function (arglist__10092){
var objs = cljs.core.seq(arglist__10092);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10093 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10093,"{",", ","}",opts,coll);
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
var pr_pair__10094 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10094,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10095 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10095,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____10096 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____10096))
{var nspc__10097 = temp__3974__auto____10096;
return [cljs.core.str(nspc__10097),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____10098 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____10098))
{var nspc__10099 = temp__3974__auto____10098;
return [cljs.core.str(nspc__10099),cljs.core.str("/")].join('');
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
var pr_pair__10100 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10100,"{",", ","}",opts,coll);
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
var normalize__10102 = (function (n,len){
var ns__10101 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__10101) < len))
{{
var G__10104 = [cljs.core.str("0"),cljs.core.str(ns__10101)].join('');
ns__10101 = G__10104;
continue;
}
} else
{return ns__10101;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__10102.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__10102.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__10102.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__10102.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__10102.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__10102.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
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
var pr_pair__10103 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10103,"{",", ","}",opts,coll);
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
var this__10105 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__10106 = this;
var G__10107__10108 = cljs.core.seq.call(null,this__10106.watches);
if(G__10107__10108)
{var G__10110__10112 = cljs.core.first.call(null,G__10107__10108);
var vec__10111__10113 = G__10110__10112;
var key__10114 = cljs.core.nth.call(null,vec__10111__10113,0,null);
var f__10115 = cljs.core.nth.call(null,vec__10111__10113,1,null);
var G__10107__10116 = G__10107__10108;
var G__10110__10117 = G__10110__10112;
var G__10107__10118 = G__10107__10116;
while(true){
var vec__10119__10120 = G__10110__10117;
var key__10121 = cljs.core.nth.call(null,vec__10119__10120,0,null);
var f__10122 = cljs.core.nth.call(null,vec__10119__10120,1,null);
var G__10107__10123 = G__10107__10118;
f__10122.call(null,key__10121,this$,oldval,newval);
var temp__3974__auto____10124 = cljs.core.next.call(null,G__10107__10123);
if(temp__3974__auto____10124)
{var G__10107__10125 = temp__3974__auto____10124;
{
var G__10132 = cljs.core.first.call(null,G__10107__10125);
var G__10133 = G__10107__10125;
G__10110__10117 = G__10132;
G__10107__10118 = G__10133;
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
var this__10126 = this;
return this$.watches = cljs.core.assoc.call(null,this__10126.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__10127 = this;
return this$.watches = cljs.core.dissoc.call(null,this__10127.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__10128 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__10128.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__10129 = this;
return this__10129.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__10130 = this;
return this__10130.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__10131 = this;
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
var G__10145__delegate = function (x,p__10134){
var map__10140__10141 = p__10134;
var map__10140__10142 = ((cljs.core.seq_QMARK_.call(null,map__10140__10141))?cljs.core.apply.call(null,cljs.core.hash_map,map__10140__10141):map__10140__10141);
var validator__10143 = cljs.core._lookup.call(null,map__10140__10142,"\uFDD0'validator",null);
var meta__10144 = cljs.core._lookup.call(null,map__10140__10142,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__10144,validator__10143,null));
};
var G__10145 = function (x,var_args){
var p__10134 = null;
if (goog.isDef(var_args)) {
  p__10134 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10145__delegate.call(this, x, p__10134);
};
G__10145.cljs$lang$maxFixedArity = 1;
G__10145.cljs$lang$applyTo = (function (arglist__10146){
var x = cljs.core.first(arglist__10146);
var p__10134 = cljs.core.rest(arglist__10146);
return G__10145__delegate(x, p__10134);
});
G__10145.cljs$lang$arity$variadic = G__10145__delegate;
return G__10145;
})()
;
atom = function(x,var_args){
var p__10134 = var_args;
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
var temp__3974__auto____10150 = a.validator;
if(cljs.core.truth_(temp__3974__auto____10150))
{var validate__10151 = temp__3974__auto____10150;
if(cljs.core.truth_(validate__10151.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6394))))].join('')));
}
} else
{}
var old_value__10152 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__10152,new_value);
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
var G__10153__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__10153 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10153__delegate.call(this, a, f, x, y, z, more);
};
G__10153.cljs$lang$maxFixedArity = 5;
G__10153.cljs$lang$applyTo = (function (arglist__10154){
var a = cljs.core.first(arglist__10154);
var f = cljs.core.first(cljs.core.next(arglist__10154));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10154)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10154))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10154)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10154)))));
return G__10153__delegate(a, f, x, y, z, more);
});
G__10153.cljs$lang$arity$variadic = G__10153__delegate;
return G__10153;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__10155){
var iref = cljs.core.first(arglist__10155);
var f = cljs.core.first(cljs.core.next(arglist__10155));
var args = cljs.core.rest(cljs.core.next(arglist__10155));
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
var this__10156 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__10156.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__10157 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__10157.state,(function (p__10158){
var curr_state__10159 = p__10158;
var curr_state__10160 = ((cljs.core.seq_QMARK_.call(null,curr_state__10159))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__10159):curr_state__10159);
var done__10161 = cljs.core._lookup.call(null,curr_state__10160,"\uFDD0'done",null);
if(cljs.core.truth_(done__10161))
{return curr_state__10160;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__10157.f.call(null)});
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
var map__10182__10183 = options;
var map__10182__10184 = ((cljs.core.seq_QMARK_.call(null,map__10182__10183))?cljs.core.apply.call(null,cljs.core.hash_map,map__10182__10183):map__10182__10183);
var keywordize_keys__10185 = cljs.core._lookup.call(null,map__10182__10184,"\uFDD0'keywordize-keys",null);
var keyfn__10186 = (cljs.core.truth_(keywordize_keys__10185)?cljs.core.keyword:cljs.core.str);
var f__10201 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2427__auto____10200 = (function iter__10194(s__10195){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10195__10198 = s__10195;
while(true){
if(cljs.core.seq.call(null,s__10195__10198))
{var k__10199 = cljs.core.first.call(null,s__10195__10198);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__10186.call(null,k__10199),thisfn.call(null,(x[k__10199]))], true),iter__10194.call(null,cljs.core.rest.call(null,s__10195__10198)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2427__auto____10200.call(null,cljs.core.js_keys.call(null,x));
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
return f__10201.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__10202){
var x = cljs.core.first(arglist__10202);
var options = cljs.core.rest(arglist__10202);
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
var mem__10207 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__10211__delegate = function (args){
var temp__3971__auto____10208 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__10207),args,null);
if(cljs.core.truth_(temp__3971__auto____10208))
{var v__10209 = temp__3971__auto____10208;
return v__10209;
} else
{var ret__10210 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__10207,cljs.core.assoc,args,ret__10210);
return ret__10210;
}
};
var G__10211 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10211__delegate.call(this, args);
};
G__10211.cljs$lang$maxFixedArity = 0;
G__10211.cljs$lang$applyTo = (function (arglist__10212){
var args = cljs.core.seq(arglist__10212);;
return G__10211__delegate(args);
});
G__10211.cljs$lang$arity$variadic = G__10211__delegate;
return G__10211;
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
var ret__10214 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__10214))
{{
var G__10215 = ret__10214;
f = G__10215;
continue;
}
} else
{return ret__10214;
}
break;
}
});
var trampoline__2 = (function() { 
var G__10216__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__10216 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10216__delegate.call(this, f, args);
};
G__10216.cljs$lang$maxFixedArity = 1;
G__10216.cljs$lang$applyTo = (function (arglist__10217){
var f = cljs.core.first(arglist__10217);
var args = cljs.core.rest(arglist__10217);
return G__10216__delegate(f, args);
});
G__10216.cljs$lang$arity$variadic = G__10216__delegate;
return G__10216;
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
var k__10219 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__10219,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__10219,cljs.core.PersistentVector.EMPTY),x));
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
var or__3824__auto____10228 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____10228)
{return or__3824__auto____10228;
} else
{var or__3824__auto____10229 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____10229)
{return or__3824__auto____10229;
} else
{var and__3822__auto____10230 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____10230)
{var and__3822__auto____10231 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____10231)
{var and__3822__auto____10232 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____10232)
{var ret__10233 = true;
var i__10234 = 0;
while(true){
if((function (){var or__3824__auto____10235 = cljs.core.not.call(null,ret__10233);
if(or__3824__auto____10235)
{return or__3824__auto____10235;
} else
{return (i__10234 === cljs.core.count.call(null,parent));
}
})())
{return ret__10233;
} else
{{
var G__10236 = isa_QMARK_.call(null,h,child.call(null,i__10234),parent.call(null,i__10234));
var G__10237 = (i__10234 + 1);
ret__10233 = G__10236;
i__10234 = G__10237;
continue;
}
}
break;
}
} else
{return and__3822__auto____10232;
}
} else
{return and__3822__auto____10231;
}
} else
{return and__3822__auto____10230;
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
var tp__10246 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__10247 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__10248 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__10249 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____10250 = ((cljs.core.contains_QMARK_.call(null,tp__10246.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__10248.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__10248.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__10246,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__10249.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__10247,parent,ta__10248),"\uFDD0'descendants":tf__10249.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__10248,tag,td__10247)});
})());
if(cljs.core.truth_(or__3824__auto____10250))
{return or__3824__auto____10250;
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
var parentMap__10255 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__10256 = (cljs.core.truth_(parentMap__10255.call(null,tag))?cljs.core.disj.call(null,parentMap__10255.call(null,tag),parent):cljs.core.set([]));
var newParents__10257 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__10256))?cljs.core.assoc.call(null,parentMap__10255,tag,childsParents__10256):cljs.core.dissoc.call(null,parentMap__10255,tag));
var deriv_seq__10258 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__10238_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__10238_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__10238_SHARP_),cljs.core.second.call(null,p1__10238_SHARP_)));
}),cljs.core.seq.call(null,newParents__10257)));
if(cljs.core.contains_QMARK_.call(null,parentMap__10255.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__10239_SHARP_,p2__10240_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__10239_SHARP_,p2__10240_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__10258));
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
var xprefs__10266 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____10268 = (cljs.core.truth_((function (){var and__3822__auto____10267 = xprefs__10266;
if(cljs.core.truth_(and__3822__auto____10267))
{return xprefs__10266.call(null,y);
} else
{return and__3822__auto____10267;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____10268))
{return or__3824__auto____10268;
} else
{var or__3824__auto____10270 = (function (){var ps__10269 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__10269) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__10269),prefer_table)))
{} else
{}
{
var G__10273 = cljs.core.rest.call(null,ps__10269);
ps__10269 = G__10273;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____10270))
{return or__3824__auto____10270;
} else
{var or__3824__auto____10272 = (function (){var ps__10271 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__10271) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__10271),y,prefer_table)))
{} else
{}
{
var G__10274 = cljs.core.rest.call(null,ps__10271);
ps__10271 = G__10274;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____10272))
{return or__3824__auto____10272;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____10276 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____10276))
{return or__3824__auto____10276;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__10294 = cljs.core.reduce.call(null,(function (be,p__10286){
var vec__10287__10288 = p__10286;
var k__10289 = cljs.core.nth.call(null,vec__10287__10288,0,null);
var ___10290 = cljs.core.nth.call(null,vec__10287__10288,1,null);
var e__10291 = vec__10287__10288;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__10289))
{var be2__10293 = (cljs.core.truth_((function (){var or__3824__auto____10292 = (be == null);
if(or__3824__auto____10292)
{return or__3824__auto____10292;
} else
{return cljs.core.dominates.call(null,k__10289,cljs.core.first.call(null,be),prefer_table);
}
})())?e__10291:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__10293),k__10289,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__10289),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__10293)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__10293;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__10294))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__10294));
return cljs.core.second.call(null,best_entry__10294);
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
if((function (){var and__3822__auto____10298 = mf;
if(and__3822__auto____10298)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____10298;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{return (function (){var or__3824__auto____10299 = (cljs.core._reset[goog.typeOf(mf)]);
if(or__3824__auto____10299)
{return or__3824__auto____10299;
} else
{var or__3824__auto____10300 = (cljs.core._reset["_"]);
if(or__3824__auto____10300)
{return or__3824__auto____10300;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____10304 = mf;
if(and__3822__auto____10304)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____10304;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{return (function (){var or__3824__auto____10305 = (cljs.core._add_method[goog.typeOf(mf)]);
if(or__3824__auto____10305)
{return or__3824__auto____10305;
} else
{var or__3824__auto____10306 = (cljs.core._add_method["_"]);
if(or__3824__auto____10306)
{return or__3824__auto____10306;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____10310 = mf;
if(and__3822__auto____10310)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____10310;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____10311 = (cljs.core._remove_method[goog.typeOf(mf)]);
if(or__3824__auto____10311)
{return or__3824__auto____10311;
} else
{var or__3824__auto____10312 = (cljs.core._remove_method["_"]);
if(or__3824__auto____10312)
{return or__3824__auto____10312;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____10316 = mf;
if(and__3822__auto____10316)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____10316;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3824__auto____10317 = (cljs.core._prefer_method[goog.typeOf(mf)]);
if(or__3824__auto____10317)
{return or__3824__auto____10317;
} else
{var or__3824__auto____10318 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____10318)
{return or__3824__auto____10318;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____10322 = mf;
if(and__3822__auto____10322)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____10322;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____10323 = (cljs.core._get_method[goog.typeOf(mf)]);
if(or__3824__auto____10323)
{return or__3824__auto____10323;
} else
{var or__3824__auto____10324 = (cljs.core._get_method["_"]);
if(or__3824__auto____10324)
{return or__3824__auto____10324;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____10328 = mf;
if(and__3822__auto____10328)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____10328;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{return (function (){var or__3824__auto____10329 = (cljs.core._methods[goog.typeOf(mf)]);
if(or__3824__auto____10329)
{return or__3824__auto____10329;
} else
{var or__3824__auto____10330 = (cljs.core._methods["_"]);
if(or__3824__auto____10330)
{return or__3824__auto____10330;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____10334 = mf;
if(and__3822__auto____10334)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____10334;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{return (function (){var or__3824__auto____10335 = (cljs.core._prefers[goog.typeOf(mf)]);
if(or__3824__auto____10335)
{return or__3824__auto____10335;
} else
{var or__3824__auto____10336 = (cljs.core._prefers["_"]);
if(or__3824__auto____10336)
{return or__3824__auto____10336;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____10340 = mf;
if(and__3822__auto____10340)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____10340;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{return (function (){var or__3824__auto____10341 = (cljs.core._dispatch[goog.typeOf(mf)]);
if(or__3824__auto____10341)
{return or__3824__auto____10341;
} else
{var or__3824__auto____10342 = (cljs.core._dispatch["_"]);
if(or__3824__auto____10342)
{return or__3824__auto____10342;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
void 0;cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__10345 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__10346 = cljs.core._get_method.call(null,mf,dispatch_val__10345);
if(cljs.core.truth_(target_fn__10346))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__10345)].join('')));
}
return cljs.core.apply.call(null,target_fn__10346,args);
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
var this__10347 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__10348 = this;
cljs.core.swap_BANG_.call(null,this__10348.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10348.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10348.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10348.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__10349 = this;
cljs.core.swap_BANG_.call(null,this__10349.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__10349.method_cache,this__10349.method_table,this__10349.cached_hierarchy,this__10349.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__10350 = this;
cljs.core.swap_BANG_.call(null,this__10350.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__10350.method_cache,this__10350.method_table,this__10350.cached_hierarchy,this__10350.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__10351 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__10351.cached_hierarchy),cljs.core.deref.call(null,this__10351.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__10351.method_cache,this__10351.method_table,this__10351.cached_hierarchy,this__10351.hierarchy);
}
var temp__3971__auto____10352 = cljs.core.deref.call(null,this__10351.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____10352))
{var target_fn__10353 = temp__3971__auto____10352;
return target_fn__10353;
} else
{var temp__3971__auto____10354 = cljs.core.find_and_cache_best_method.call(null,this__10351.name,dispatch_val,this__10351.hierarchy,this__10351.method_table,this__10351.prefer_table,this__10351.method_cache,this__10351.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____10354))
{var target_fn__10355 = temp__3971__auto____10354;
return target_fn__10355;
} else
{return cljs.core.deref.call(null,this__10351.method_table).call(null,this__10351.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__10356 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__10356.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__10356.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__10356.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__10356.method_cache,this__10356.method_table,this__10356.cached_hierarchy,this__10356.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__10357 = this;
return cljs.core.deref.call(null,this__10357.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__10358 = this;
return cljs.core.deref.call(null,this__10358.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__10359 = this;
return cljs.core.do_dispatch.call(null,mf,this__10359.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__10361__delegate = function (_,args){
var self__10360 = this;
return cljs.core._dispatch.call(null,self__10360,args);
};
var G__10361 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10361__delegate.call(this, _, args);
};
G__10361.cljs$lang$maxFixedArity = 1;
G__10361.cljs$lang$applyTo = (function (arglist__10362){
var _ = cljs.core.first(arglist__10362);
var args = cljs.core.rest(arglist__10362);
return G__10361__delegate(_, args);
});
G__10361.cljs$lang$arity$variadic = G__10361__delegate;
return G__10361;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__10363 = this;
return cljs.core._dispatch.call(null,self__10363,args);
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
var this__10364 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_10366,_){
var this__10365 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__10365.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__10367 = this;
return (this__10367.uuid === other.uuid);
});
cljs.core.UUID.prototype.toString = (function (){
var this__10368 = this;
var this__10369 = this;
return cljs.core.pr_str.call(null,this__10369);
});
cljs.core.UUID;
