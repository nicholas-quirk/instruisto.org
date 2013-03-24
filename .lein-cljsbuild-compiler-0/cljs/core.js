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
var G__6595__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__6595 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6595__delegate.call(this, array, i, idxs);
};
G__6595.cljs$lang$maxFixedArity = 2;
G__6595.cljs$lang$applyTo = (function (arglist__6596){
var array = cljs.core.first(arglist__6596);
var i = cljs.core.first(cljs.core.next(arglist__6596));
var idxs = cljs.core.rest(cljs.core.next(arglist__6596));
return G__6595__delegate(array, i, idxs);
});
G__6595.cljs$lang$arity$variadic = G__6595__delegate;
return G__6595;
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
if((function (){var and__3822__auto____6660 = this$;
if(and__3822__auto____6660)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____6660;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{return (function (){var or__3824__auto____6661 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6661)
{return or__3824__auto____6661;
} else
{var or__3824__auto____6662 = (cljs.core._invoke["_"]);
if(or__3824__auto____6662)
{return or__3824__auto____6662;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____6663 = this$;
if(and__3822__auto____6663)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____6663;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{return (function (){var or__3824__auto____6664 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6664)
{return or__3824__auto____6664;
} else
{var or__3824__auto____6665 = (cljs.core._invoke["_"]);
if(or__3824__auto____6665)
{return or__3824__auto____6665;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____6666 = this$;
if(and__3822__auto____6666)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____6666;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{return (function (){var or__3824__auto____6667 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6667)
{return or__3824__auto____6667;
} else
{var or__3824__auto____6668 = (cljs.core._invoke["_"]);
if(or__3824__auto____6668)
{return or__3824__auto____6668;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____6669 = this$;
if(and__3822__auto____6669)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____6669;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{return (function (){var or__3824__auto____6670 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6670)
{return or__3824__auto____6670;
} else
{var or__3824__auto____6671 = (cljs.core._invoke["_"]);
if(or__3824__auto____6671)
{return or__3824__auto____6671;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____6672 = this$;
if(and__3822__auto____6672)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____6672;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{return (function (){var or__3824__auto____6673 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6673)
{return or__3824__auto____6673;
} else
{var or__3824__auto____6674 = (cljs.core._invoke["_"]);
if(or__3824__auto____6674)
{return or__3824__auto____6674;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____6675 = this$;
if(and__3822__auto____6675)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____6675;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{return (function (){var or__3824__auto____6676 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6676)
{return or__3824__auto____6676;
} else
{var or__3824__auto____6677 = (cljs.core._invoke["_"]);
if(or__3824__auto____6677)
{return or__3824__auto____6677;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____6678 = this$;
if(and__3822__auto____6678)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____6678;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3824__auto____6679 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6679)
{return or__3824__auto____6679;
} else
{var or__3824__auto____6680 = (cljs.core._invoke["_"]);
if(or__3824__auto____6680)
{return or__3824__auto____6680;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____6681 = this$;
if(and__3822__auto____6681)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____6681;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3824__auto____6682 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6682)
{return or__3824__auto____6682;
} else
{var or__3824__auto____6683 = (cljs.core._invoke["_"]);
if(or__3824__auto____6683)
{return or__3824__auto____6683;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____6684 = this$;
if(and__3822__auto____6684)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____6684;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3824__auto____6685 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6685)
{return or__3824__auto____6685;
} else
{var or__3824__auto____6686 = (cljs.core._invoke["_"]);
if(or__3824__auto____6686)
{return or__3824__auto____6686;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____6687 = this$;
if(and__3822__auto____6687)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____6687;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3824__auto____6688 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6688)
{return or__3824__auto____6688;
} else
{var or__3824__auto____6689 = (cljs.core._invoke["_"]);
if(or__3824__auto____6689)
{return or__3824__auto____6689;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____6690 = this$;
if(and__3822__auto____6690)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____6690;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3824__auto____6691 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6691)
{return or__3824__auto____6691;
} else
{var or__3824__auto____6692 = (cljs.core._invoke["_"]);
if(or__3824__auto____6692)
{return or__3824__auto____6692;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____6693 = this$;
if(and__3822__auto____6693)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____6693;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3824__auto____6694 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6694)
{return or__3824__auto____6694;
} else
{var or__3824__auto____6695 = (cljs.core._invoke["_"]);
if(or__3824__auto____6695)
{return or__3824__auto____6695;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____6696 = this$;
if(and__3822__auto____6696)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____6696;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3824__auto____6697 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6697)
{return or__3824__auto____6697;
} else
{var or__3824__auto____6698 = (cljs.core._invoke["_"]);
if(or__3824__auto____6698)
{return or__3824__auto____6698;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____6699 = this$;
if(and__3822__auto____6699)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____6699;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3824__auto____6700 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6700)
{return or__3824__auto____6700;
} else
{var or__3824__auto____6701 = (cljs.core._invoke["_"]);
if(or__3824__auto____6701)
{return or__3824__auto____6701;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____6702 = this$;
if(and__3822__auto____6702)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____6702;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3824__auto____6703 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6703)
{return or__3824__auto____6703;
} else
{var or__3824__auto____6704 = (cljs.core._invoke["_"]);
if(or__3824__auto____6704)
{return or__3824__auto____6704;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____6705 = this$;
if(and__3822__auto____6705)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____6705;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3824__auto____6706 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6706)
{return or__3824__auto____6706;
} else
{var or__3824__auto____6707 = (cljs.core._invoke["_"]);
if(or__3824__auto____6707)
{return or__3824__auto____6707;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____6708 = this$;
if(and__3822__auto____6708)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____6708;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____6711 = this$;
if(and__3822__auto____6711)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____6711;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____6714 = this$;
if(and__3822__auto____6714)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____6714;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____6717 = this$;
if(and__3822__auto____6717)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____6717;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____6720 = this$;
if(and__3822__auto____6720)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____6720;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
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
if((function (){var and__3822__auto____6726 = coll;
if(and__3822__auto____6726)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____6726;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{return (function (){var or__3824__auto____6727 = (cljs.core._count[goog.typeOf(coll)]);
if(or__3824__auto____6727)
{return or__3824__auto____6727;
} else
{var or__3824__auto____6728 = (cljs.core._count["_"]);
if(or__3824__auto____6728)
{return or__3824__auto____6728;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____6732 = coll;
if(and__3822__auto____6732)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____6732;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (function (){var or__3824__auto____6733 = (cljs.core._empty[goog.typeOf(coll)]);
if(or__3824__auto____6733)
{return or__3824__auto____6733;
} else
{var or__3824__auto____6734 = (cljs.core._empty["_"]);
if(or__3824__auto____6734)
{return or__3824__auto____6734;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____6738 = coll;
if(and__3822__auto____6738)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____6738;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{return (function (){var or__3824__auto____6739 = (cljs.core._conj[goog.typeOf(coll)]);
if(or__3824__auto____6739)
{return or__3824__auto____6739;
} else
{var or__3824__auto____6740 = (cljs.core._conj["_"]);
if(or__3824__auto____6740)
{return or__3824__auto____6740;
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
if((function (){var and__3822__auto____6747 = coll;
if(and__3822__auto____6747)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____6747;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return (function (){var or__3824__auto____6748 = (cljs.core._nth[goog.typeOf(coll)]);
if(or__3824__auto____6748)
{return or__3824__auto____6748;
} else
{var or__3824__auto____6749 = (cljs.core._nth["_"]);
if(or__3824__auto____6749)
{return or__3824__auto____6749;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____6750 = coll;
if(and__3822__auto____6750)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____6750;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{return (function (){var or__3824__auto____6751 = (cljs.core._nth[goog.typeOf(coll)]);
if(or__3824__auto____6751)
{return or__3824__auto____6751;
} else
{var or__3824__auto____6752 = (cljs.core._nth["_"]);
if(or__3824__auto____6752)
{return or__3824__auto____6752;
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
if((function (){var and__3822__auto____6756 = coll;
if(and__3822__auto____6756)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____6756;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____6757 = (cljs.core._first[goog.typeOf(coll)]);
if(or__3824__auto____6757)
{return or__3824__auto____6757;
} else
{var or__3824__auto____6758 = (cljs.core._first["_"]);
if(or__3824__auto____6758)
{return or__3824__auto____6758;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____6762 = coll;
if(and__3822__auto____6762)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____6762;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{return (function (){var or__3824__auto____6763 = (cljs.core._rest[goog.typeOf(coll)]);
if(or__3824__auto____6763)
{return or__3824__auto____6763;
} else
{var or__3824__auto____6764 = (cljs.core._rest["_"]);
if(or__3824__auto____6764)
{return or__3824__auto____6764;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____6768 = coll;
if(and__3822__auto____6768)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____6768;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{return (function (){var or__3824__auto____6769 = (cljs.core._next[goog.typeOf(coll)]);
if(or__3824__auto____6769)
{return or__3824__auto____6769;
} else
{var or__3824__auto____6770 = (cljs.core._next["_"]);
if(or__3824__auto____6770)
{return or__3824__auto____6770;
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
if((function (){var and__3822__auto____6777 = o;
if(and__3822__auto____6777)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____6777;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{return (function (){var or__3824__auto____6778 = (cljs.core._lookup[goog.typeOf(o)]);
if(or__3824__auto____6778)
{return or__3824__auto____6778;
} else
{var or__3824__auto____6779 = (cljs.core._lookup["_"]);
if(or__3824__auto____6779)
{return or__3824__auto____6779;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____6780 = o;
if(and__3822__auto____6780)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____6780;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{return (function (){var or__3824__auto____6781 = (cljs.core._lookup[goog.typeOf(o)]);
if(or__3824__auto____6781)
{return or__3824__auto____6781;
} else
{var or__3824__auto____6782 = (cljs.core._lookup["_"]);
if(or__3824__auto____6782)
{return or__3824__auto____6782;
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
if((function (){var and__3822__auto____6786 = coll;
if(and__3822__auto____6786)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____6786;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{return (function (){var or__3824__auto____6787 = (cljs.core._contains_key_QMARK_[goog.typeOf(coll)]);
if(or__3824__auto____6787)
{return or__3824__auto____6787;
} else
{var or__3824__auto____6788 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____6788)
{return or__3824__auto____6788;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____6792 = coll;
if(and__3822__auto____6792)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____6792;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{return (function (){var or__3824__auto____6793 = (cljs.core._assoc[goog.typeOf(coll)]);
if(or__3824__auto____6793)
{return or__3824__auto____6793;
} else
{var or__3824__auto____6794 = (cljs.core._assoc["_"]);
if(or__3824__auto____6794)
{return or__3824__auto____6794;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
void 0;void 0;cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____6798 = coll;
if(and__3822__auto____6798)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____6798;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{return (function (){var or__3824__auto____6799 = (cljs.core._dissoc[goog.typeOf(coll)]);
if(or__3824__auto____6799)
{return or__3824__auto____6799;
} else
{var or__3824__auto____6800 = (cljs.core._dissoc["_"]);
if(or__3824__auto____6800)
{return or__3824__auto____6800;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
void 0;void 0;cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____6804 = coll;
if(and__3822__auto____6804)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____6804;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{return (function (){var or__3824__auto____6805 = (cljs.core._key[goog.typeOf(coll)]);
if(or__3824__auto____6805)
{return or__3824__auto____6805;
} else
{var or__3824__auto____6806 = (cljs.core._key["_"]);
if(or__3824__auto____6806)
{return or__3824__auto____6806;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____6810 = coll;
if(and__3822__auto____6810)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____6810;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{return (function (){var or__3824__auto____6811 = (cljs.core._val[goog.typeOf(coll)]);
if(or__3824__auto____6811)
{return or__3824__auto____6811;
} else
{var or__3824__auto____6812 = (cljs.core._val["_"]);
if(or__3824__auto____6812)
{return or__3824__auto____6812;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____6816 = coll;
if(and__3822__auto____6816)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____6816;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{return (function (){var or__3824__auto____6817 = (cljs.core._disjoin[goog.typeOf(coll)]);
if(or__3824__auto____6817)
{return or__3824__auto____6817;
} else
{var or__3824__auto____6818 = (cljs.core._disjoin["_"]);
if(or__3824__auto____6818)
{return or__3824__auto____6818;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
void 0;void 0;cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____6822 = coll;
if(and__3822__auto____6822)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____6822;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{return (function (){var or__3824__auto____6823 = (cljs.core._peek[goog.typeOf(coll)]);
if(or__3824__auto____6823)
{return or__3824__auto____6823;
} else
{var or__3824__auto____6824 = (cljs.core._peek["_"]);
if(or__3824__auto____6824)
{return or__3824__auto____6824;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____6828 = coll;
if(and__3822__auto____6828)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____6828;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{return (function (){var or__3824__auto____6829 = (cljs.core._pop[goog.typeOf(coll)]);
if(or__3824__auto____6829)
{return or__3824__auto____6829;
} else
{var or__3824__auto____6830 = (cljs.core._pop["_"]);
if(or__3824__auto____6830)
{return or__3824__auto____6830;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____6834 = coll;
if(and__3822__auto____6834)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____6834;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{return (function (){var or__3824__auto____6835 = (cljs.core._assoc_n[goog.typeOf(coll)]);
if(or__3824__auto____6835)
{return or__3824__auto____6835;
} else
{var or__3824__auto____6836 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____6836)
{return or__3824__auto____6836;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
void 0;void 0;cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____6840 = o;
if(and__3822__auto____6840)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____6840;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{return (function (){var or__3824__auto____6841 = (cljs.core._deref[goog.typeOf(o)]);
if(or__3824__auto____6841)
{return or__3824__auto____6841;
} else
{var or__3824__auto____6842 = (cljs.core._deref["_"]);
if(or__3824__auto____6842)
{return or__3824__auto____6842;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____6846 = o;
if(and__3822__auto____6846)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____6846;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{return (function (){var or__3824__auto____6847 = (cljs.core._deref_with_timeout[goog.typeOf(o)]);
if(or__3824__auto____6847)
{return or__3824__auto____6847;
} else
{var or__3824__auto____6848 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____6848)
{return or__3824__auto____6848;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
void 0;void 0;cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____6852 = o;
if(and__3822__auto____6852)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____6852;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{return (function (){var or__3824__auto____6853 = (cljs.core._meta[goog.typeOf(o)]);
if(or__3824__auto____6853)
{return or__3824__auto____6853;
} else
{var or__3824__auto____6854 = (cljs.core._meta["_"]);
if(or__3824__auto____6854)
{return or__3824__auto____6854;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____6858 = o;
if(and__3822__auto____6858)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____6858;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{return (function (){var or__3824__auto____6859 = (cljs.core._with_meta[goog.typeOf(o)]);
if(or__3824__auto____6859)
{return or__3824__auto____6859;
} else
{var or__3824__auto____6860 = (cljs.core._with_meta["_"]);
if(or__3824__auto____6860)
{return or__3824__auto____6860;
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
if((function (){var and__3822__auto____6867 = coll;
if(and__3822__auto____6867)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____6867;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{return (function (){var or__3824__auto____6868 = (cljs.core._reduce[goog.typeOf(coll)]);
if(or__3824__auto____6868)
{return or__3824__auto____6868;
} else
{var or__3824__auto____6869 = (cljs.core._reduce["_"]);
if(or__3824__auto____6869)
{return or__3824__auto____6869;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____6870 = coll;
if(and__3822__auto____6870)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____6870;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{return (function (){var or__3824__auto____6871 = (cljs.core._reduce[goog.typeOf(coll)]);
if(or__3824__auto____6871)
{return or__3824__auto____6871;
} else
{var or__3824__auto____6872 = (cljs.core._reduce["_"]);
if(or__3824__auto____6872)
{return or__3824__auto____6872;
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
if((function (){var and__3822__auto____6876 = coll;
if(and__3822__auto____6876)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____6876;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{return (function (){var or__3824__auto____6877 = (cljs.core._kv_reduce[goog.typeOf(coll)]);
if(or__3824__auto____6877)
{return or__3824__auto____6877;
} else
{var or__3824__auto____6878 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____6878)
{return or__3824__auto____6878;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
void 0;void 0;cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____6882 = o;
if(and__3822__auto____6882)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____6882;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{return (function (){var or__3824__auto____6883 = (cljs.core._equiv[goog.typeOf(o)]);
if(or__3824__auto____6883)
{return or__3824__auto____6883;
} else
{var or__3824__auto____6884 = (cljs.core._equiv["_"]);
if(or__3824__auto____6884)
{return or__3824__auto____6884;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
void 0;void 0;cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____6888 = o;
if(and__3822__auto____6888)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____6888;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{return (function (){var or__3824__auto____6889 = (cljs.core._hash[goog.typeOf(o)]);
if(or__3824__auto____6889)
{return or__3824__auto____6889;
} else
{var or__3824__auto____6890 = (cljs.core._hash["_"]);
if(or__3824__auto____6890)
{return or__3824__auto____6890;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____6894 = o;
if(and__3822__auto____6894)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____6894;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{return (function (){var or__3824__auto____6895 = (cljs.core._seq[goog.typeOf(o)]);
if(or__3824__auto____6895)
{return or__3824__auto____6895;
} else
{var or__3824__auto____6896 = (cljs.core._seq["_"]);
if(or__3824__auto____6896)
{return or__3824__auto____6896;
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
if((function (){var and__3822__auto____6900 = coll;
if(and__3822__auto____6900)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____6900;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{return (function (){var or__3824__auto____6901 = (cljs.core._rseq[goog.typeOf(coll)]);
if(or__3824__auto____6901)
{return or__3824__auto____6901;
} else
{var or__3824__auto____6902 = (cljs.core._rseq["_"]);
if(or__3824__auto____6902)
{return or__3824__auto____6902;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____6906 = coll;
if(and__3822__auto____6906)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____6906;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{return (function (){var or__3824__auto____6907 = (cljs.core._sorted_seq[goog.typeOf(coll)]);
if(or__3824__auto____6907)
{return or__3824__auto____6907;
} else
{var or__3824__auto____6908 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____6908)
{return or__3824__auto____6908;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____6912 = coll;
if(and__3822__auto____6912)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____6912;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{return (function (){var or__3824__auto____6913 = (cljs.core._sorted_seq_from[goog.typeOf(coll)]);
if(or__3824__auto____6913)
{return or__3824__auto____6913;
} else
{var or__3824__auto____6914 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____6914)
{return or__3824__auto____6914;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____6918 = coll;
if(and__3822__auto____6918)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____6918;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{return (function (){var or__3824__auto____6919 = (cljs.core._entry_key[goog.typeOf(coll)]);
if(or__3824__auto____6919)
{return or__3824__auto____6919;
} else
{var or__3824__auto____6920 = (cljs.core._entry_key["_"]);
if(or__3824__auto____6920)
{return or__3824__auto____6920;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____6924 = coll;
if(and__3822__auto____6924)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____6924;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{return (function (){var or__3824__auto____6925 = (cljs.core._comparator[goog.typeOf(coll)]);
if(or__3824__auto____6925)
{return or__3824__auto____6925;
} else
{var or__3824__auto____6926 = (cljs.core._comparator["_"]);
if(or__3824__auto____6926)
{return or__3824__auto____6926;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____6930 = o;
if(and__3822__auto____6930)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____6930;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{return (function (){var or__3824__auto____6931 = (cljs.core._pr_seq[goog.typeOf(o)]);
if(or__3824__auto____6931)
{return or__3824__auto____6931;
} else
{var or__3824__auto____6932 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____6932)
{return or__3824__auto____6932;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
void 0;void 0;cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____6936 = d;
if(and__3822__auto____6936)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____6936;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{return (function (){var or__3824__auto____6937 = (cljs.core._realized_QMARK_[goog.typeOf(d)]);
if(or__3824__auto____6937)
{return or__3824__auto____6937;
} else
{var or__3824__auto____6938 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____6938)
{return or__3824__auto____6938;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
void 0;void 0;cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____6942 = this$;
if(and__3822__auto____6942)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____6942;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{return (function (){var or__3824__auto____6943 = (cljs.core._notify_watches[goog.typeOf(this$)]);
if(or__3824__auto____6943)
{return or__3824__auto____6943;
} else
{var or__3824__auto____6944 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____6944)
{return or__3824__auto____6944;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____6948 = this$;
if(and__3822__auto____6948)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____6948;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{return (function (){var or__3824__auto____6949 = (cljs.core._add_watch[goog.typeOf(this$)]);
if(or__3824__auto____6949)
{return or__3824__auto____6949;
} else
{var or__3824__auto____6950 = (cljs.core._add_watch["_"]);
if(or__3824__auto____6950)
{return or__3824__auto____6950;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____6954 = this$;
if(and__3822__auto____6954)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____6954;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{return (function (){var or__3824__auto____6955 = (cljs.core._remove_watch[goog.typeOf(this$)]);
if(or__3824__auto____6955)
{return or__3824__auto____6955;
} else
{var or__3824__auto____6956 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____6956)
{return or__3824__auto____6956;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
void 0;void 0;cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____6960 = coll;
if(and__3822__auto____6960)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____6960;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{return (function (){var or__3824__auto____6961 = (cljs.core._as_transient[goog.typeOf(coll)]);
if(or__3824__auto____6961)
{return or__3824__auto____6961;
} else
{var or__3824__auto____6962 = (cljs.core._as_transient["_"]);
if(or__3824__auto____6962)
{return or__3824__auto____6962;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____6966 = tcoll;
if(and__3822__auto____6966)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____6966;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{return (function (){var or__3824__auto____6967 = (cljs.core._conj_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6967)
{return or__3824__auto____6967;
} else
{var or__3824__auto____6968 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____6968)
{return or__3824__auto____6968;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____6972 = tcoll;
if(and__3822__auto____6972)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____6972;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3824__auto____6973 = (cljs.core._persistent_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6973)
{return or__3824__auto____6973;
} else
{var or__3824__auto____6974 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____6974)
{return or__3824__auto____6974;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____6978 = tcoll;
if(and__3822__auto____6978)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____6978;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{return (function (){var or__3824__auto____6979 = (cljs.core._assoc_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6979)
{return or__3824__auto____6979;
} else
{var or__3824__auto____6980 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____6980)
{return or__3824__auto____6980;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
void 0;void 0;cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____6984 = tcoll;
if(and__3822__auto____6984)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____6984;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{return (function (){var or__3824__auto____6985 = (cljs.core._dissoc_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6985)
{return or__3824__auto____6985;
} else
{var or__3824__auto____6986 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____6986)
{return or__3824__auto____6986;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
void 0;void 0;cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____6990 = tcoll;
if(and__3822__auto____6990)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____6990;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{return (function (){var or__3824__auto____6991 = (cljs.core._assoc_n_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6991)
{return or__3824__auto____6991;
} else
{var or__3824__auto____6992 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____6992)
{return or__3824__auto____6992;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____6996 = tcoll;
if(and__3822__auto____6996)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____6996;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3824__auto____6997 = (cljs.core._pop_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6997)
{return or__3824__auto____6997;
} else
{var or__3824__auto____6998 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____6998)
{return or__3824__auto____6998;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____7002 = tcoll;
if(and__3822__auto____7002)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____7002;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{return (function (){var or__3824__auto____7003 = (cljs.core._disjoin_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____7003)
{return or__3824__auto____7003;
} else
{var or__3824__auto____7004 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____7004)
{return or__3824__auto____7004;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
void 0;void 0;cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____7008 = x;
if(and__3822__auto____7008)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____7008;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{return (function (){var or__3824__auto____7009 = (cljs.core._compare[goog.typeOf(x)]);
if(or__3824__auto____7009)
{return or__3824__auto____7009;
} else
{var or__3824__auto____7010 = (cljs.core._compare["_"]);
if(or__3824__auto____7010)
{return or__3824__auto____7010;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
void 0;void 0;cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____7014 = coll;
if(and__3822__auto____7014)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____7014;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____7015 = (cljs.core._drop_first[goog.typeOf(coll)]);
if(or__3824__auto____7015)
{return or__3824__auto____7015;
} else
{var or__3824__auto____7016 = (cljs.core._drop_first["_"]);
if(or__3824__auto____7016)
{return or__3824__auto____7016;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____7020 = coll;
if(and__3822__auto____7020)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____7020;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____7021 = (cljs.core._chunked_first[goog.typeOf(coll)]);
if(or__3824__auto____7021)
{return or__3824__auto____7021;
} else
{var or__3824__auto____7022 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____7022)
{return or__3824__auto____7022;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____7026 = coll;
if(and__3822__auto____7026)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____7026;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{return (function (){var or__3824__auto____7027 = (cljs.core._chunked_rest[goog.typeOf(coll)]);
if(or__3824__auto____7027)
{return or__3824__auto____7027;
} else
{var or__3824__auto____7028 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____7028)
{return or__3824__auto____7028;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____7032 = coll;
if(and__3822__auto____7032)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____7032;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{return (function (){var or__3824__auto____7033 = (cljs.core._chunked_next[goog.typeOf(coll)]);
if(or__3824__auto____7033)
{return or__3824__auto____7033;
} else
{var or__3824__auto____7034 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____7034)
{return or__3824__auto____7034;
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
var or__3824__auto____7036 = (x === y);
if(or__3824__auto____7036)
{return or__3824__auto____7036;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__7037__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__7038 = y;
var G__7039 = cljs.core.first.call(null,more);
var G__7040 = cljs.core.next.call(null,more);
x = G__7038;
y = G__7039;
more = G__7040;
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
var G__7037 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7037__delegate.call(this, x, y, more);
};
G__7037.cljs$lang$maxFixedArity = 2;
G__7037.cljs$lang$applyTo = (function (arglist__7041){
var x = cljs.core.first(arglist__7041);
var y = cljs.core.first(cljs.core.next(arglist__7041));
var more = cljs.core.rest(cljs.core.next(arglist__7041));
return G__7037__delegate(x, y, more);
});
G__7037.cljs$lang$arity$variadic = G__7037__delegate;
return G__7037;
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
var G__7042 = null;
var G__7042__2 = (function (o,k){
return null;
});
var G__7042__3 = (function (o,k,not_found){
return not_found;
});
G__7042 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__7042__2.call(this,o,k);
case 3:
return G__7042__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7042;
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
var G__7043 = null;
var G__7043__2 = (function (_,f){
return f.call(null);
});
var G__7043__3 = (function (_,f,start){
return start;
});
G__7043 = function(_,f,start){
switch(arguments.length){
case 2:
return G__7043__2.call(this,_,f);
case 3:
return G__7043__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7043;
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
var G__7044 = null;
var G__7044__2 = (function (_,n){
return null;
});
var G__7044__3 = (function (_,n,not_found){
return not_found;
});
G__7044 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__7044__2.call(this,_,n);
case 3:
return G__7044__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7044;
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
var cnt__7057 = cljs.core._count.call(null,cicoll);
if((cnt__7057 === 0))
{return f.call(null);
} else
{var val__7058 = cljs.core._nth.call(null,cicoll,0);
var n__7059 = 1;
while(true){
if((n__7059 < cnt__7057))
{var nval__7060 = f.call(null,val__7058,cljs.core._nth.call(null,cicoll,n__7059));
if(cljs.core.reduced_QMARK_.call(null,nval__7060))
{return cljs.core.deref.call(null,nval__7060);
} else
{{
var G__7069 = nval__7060;
var G__7070 = (n__7059 + 1);
val__7058 = G__7069;
n__7059 = G__7070;
continue;
}
}
} else
{return val__7058;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__7061 = cljs.core._count.call(null,cicoll);
var val__7062 = val;
var n__7063 = 0;
while(true){
if((n__7063 < cnt__7061))
{var nval__7064 = f.call(null,val__7062,cljs.core._nth.call(null,cicoll,n__7063));
if(cljs.core.reduced_QMARK_.call(null,nval__7064))
{return cljs.core.deref.call(null,nval__7064);
} else
{{
var G__7071 = nval__7064;
var G__7072 = (n__7063 + 1);
val__7062 = G__7071;
n__7063 = G__7072;
continue;
}
}
} else
{return val__7062;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__7065 = cljs.core._count.call(null,cicoll);
var val__7066 = val;
var n__7067 = idx;
while(true){
if((n__7067 < cnt__7065))
{var nval__7068 = f.call(null,val__7066,cljs.core._nth.call(null,cicoll,n__7067));
if(cljs.core.reduced_QMARK_.call(null,nval__7068))
{return cljs.core.deref.call(null,nval__7068);
} else
{{
var G__7073 = nval__7068;
var G__7074 = (n__7067 + 1);
val__7066 = G__7073;
n__7067 = G__7074;
continue;
}
}
} else
{return val__7066;
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
var cnt__7087 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__7088 = (arr[0]);
var n__7089 = 1;
while(true){
if((n__7089 < cnt__7087))
{var nval__7090 = f.call(null,val__7088,(arr[n__7089]));
if(cljs.core.reduced_QMARK_.call(null,nval__7090))
{return cljs.core.deref.call(null,nval__7090);
} else
{{
var G__7099 = nval__7090;
var G__7100 = (n__7089 + 1);
val__7088 = G__7099;
n__7089 = G__7100;
continue;
}
}
} else
{return val__7088;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__7091 = arr.length;
var val__7092 = val;
var n__7093 = 0;
while(true){
if((n__7093 < cnt__7091))
{var nval__7094 = f.call(null,val__7092,(arr[n__7093]));
if(cljs.core.reduced_QMARK_.call(null,nval__7094))
{return cljs.core.deref.call(null,nval__7094);
} else
{{
var G__7101 = nval__7094;
var G__7102 = (n__7093 + 1);
val__7092 = G__7101;
n__7093 = G__7102;
continue;
}
}
} else
{return val__7092;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__7095 = arr.length;
var val__7096 = val;
var n__7097 = idx;
while(true){
if((n__7097 < cnt__7095))
{var nval__7098 = f.call(null,val__7096,(arr[n__7097]));
if(cljs.core.reduced_QMARK_.call(null,nval__7098))
{return cljs.core.deref.call(null,nval__7098);
} else
{{
var G__7103 = nval__7098;
var G__7104 = (n__7097 + 1);
val__7096 = G__7103;
n__7097 = G__7104;
continue;
}
}
} else
{return val__7096;
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
var this__7105 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__7106 = this;
if(((this__7106.i + 1) < this__7106.a.length))
{return (new cljs.core.IndexedSeq(this__7106.a,(this__7106.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7107 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__7108 = this;
var c__7109 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__7109 > 0))
{return (new cljs.core.RSeq(coll,(c__7109 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__7110 = this;
var this__7111 = this;
return cljs.core.pr_str.call(null,this__7111);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__7112 = this;
if(cljs.core.counted_QMARK_.call(null,this__7112.a))
{return cljs.core.ci_reduce.call(null,this__7112.a,f,(this__7112.a[this__7112.i]),(this__7112.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__7112.a[this__7112.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7113 = this;
if(cljs.core.counted_QMARK_.call(null,this__7113.a))
{return cljs.core.ci_reduce.call(null,this__7113.a,f,start,this__7113.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__7114 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7115 = this;
return (this__7115.a.length - this__7115.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__7116 = this;
return (this__7116.a[this__7116.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__7117 = this;
if(((this__7117.i + 1) < this__7117.a.length))
{return (new cljs.core.IndexedSeq(this__7117.a,(this__7117.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7118 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__7119 = this;
var i__7120 = (n + this__7119.i);
if((i__7120 < this__7119.a.length))
{return (this__7119.a[i__7120]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__7121 = this;
var i__7122 = (n + this__7121.i);
if((i__7122 < this__7121.a.length))
{return (this__7121.a[i__7122]);
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
var G__7123 = null;
var G__7123__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__7123__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__7123 = function(array,f,start){
switch(arguments.length){
case 2:
return G__7123__2.call(this,array,f);
case 3:
return G__7123__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7123;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__7124 = null;
var G__7124__2 = (function (array,k){
return (array[k]);
});
var G__7124__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__7124 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__7124__2.call(this,array,k);
case 3:
return G__7124__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7124;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__7125 = null;
var G__7125__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__7125__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__7125 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__7125__2.call(this,array,n);
case 3:
return G__7125__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7125;
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
var this__7126 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7127 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__7128 = this;
var this__7129 = this;
return cljs.core.pr_str.call(null,this__7129);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7130 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7131 = this;
return (this__7131.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7132 = this;
return cljs.core._nth.call(null,this__7132.ci,this__7132.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7133 = this;
if((this__7133.i > 0))
{return (new cljs.core.RSeq(this__7133.ci,(this__7133.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7134 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__7135 = this;
return (new cljs.core.RSeq(this__7135.ci,this__7135.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7136 = this;
return this__7136.meta;
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
{if((function (){var G__7140__7141 = coll;
if(G__7140__7141)
{if((function (){var or__3824__auto____7142 = (G__7140__7141.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____7142)
{return or__3824__auto____7142;
} else
{return G__7140__7141.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__7140__7141.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__7140__7141);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__7140__7141);
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
{if((function (){var G__7147__7148 = coll;
if(G__7147__7148)
{if((function (){var or__3824__auto____7149 = (G__7147__7148.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7149)
{return or__3824__auto____7149;
} else
{return G__7147__7148.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7147__7148.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7147__7148);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7147__7148);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__7150 = cljs.core.seq.call(null,coll);
if((s__7150 == null))
{return null;
} else
{return cljs.core._first.call(null,s__7150);
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
{if((function (){var G__7155__7156 = coll;
if(G__7155__7156)
{if((function (){var or__3824__auto____7157 = (G__7155__7156.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7157)
{return or__3824__auto____7157;
} else
{return G__7155__7156.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7155__7156.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7155__7156);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7155__7156);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__7158 = cljs.core.seq.call(null,coll);
if(!((s__7158 == null)))
{return cljs.core._rest.call(null,s__7158);
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
{if((function (){var G__7162__7163 = coll;
if(G__7162__7163)
{if((function (){var or__3824__auto____7164 = (G__7162__7163.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____7164)
{return or__3824__auto____7164;
} else
{return G__7162__7163.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__7162__7163.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__7162__7163);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__7162__7163);
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
var sn__7166 = cljs.core.next.call(null,s);
if(!((sn__7166 == null)))
{{
var G__7167 = sn__7166;
s = G__7167;
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
var G__7168__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__7169 = conj.call(null,coll,x);
var G__7170 = cljs.core.first.call(null,xs);
var G__7171 = cljs.core.next.call(null,xs);
coll = G__7169;
x = G__7170;
xs = G__7171;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__7168 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7168__delegate.call(this, coll, x, xs);
};
G__7168.cljs$lang$maxFixedArity = 2;
G__7168.cljs$lang$applyTo = (function (arglist__7172){
var coll = cljs.core.first(arglist__7172);
var x = cljs.core.first(cljs.core.next(arglist__7172));
var xs = cljs.core.rest(cljs.core.next(arglist__7172));
return G__7168__delegate(coll, x, xs);
});
G__7168.cljs$lang$arity$variadic = G__7168__delegate;
return G__7168;
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
var s__7175 = cljs.core.seq.call(null,coll);
var acc__7176 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__7175))
{return (acc__7176 + cljs.core._count.call(null,s__7175));
} else
{{
var G__7177 = cljs.core.next.call(null,s__7175);
var G__7178 = (acc__7176 + 1);
s__7175 = G__7177;
acc__7176 = G__7178;
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
{if((function (){var G__7185__7186 = coll;
if(G__7185__7186)
{if((function (){var or__3824__auto____7187 = (G__7185__7186.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7187)
{return or__3824__auto____7187;
} else
{return G__7185__7186.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7185__7186.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7185__7186);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7185__7186);
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
{if((function (){var G__7188__7189 = coll;
if(G__7188__7189)
{if((function (){var or__3824__auto____7190 = (G__7188__7189.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7190)
{return or__3824__auto____7190;
} else
{return G__7188__7189.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7188__7189.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7188__7189);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7188__7189);
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
var G__7193__delegate = function (coll,k,v,kvs){
while(true){
var ret__7192 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__7194 = ret__7192;
var G__7195 = cljs.core.first.call(null,kvs);
var G__7196 = cljs.core.second.call(null,kvs);
var G__7197 = cljs.core.nnext.call(null,kvs);
coll = G__7194;
k = G__7195;
v = G__7196;
kvs = G__7197;
continue;
}
} else
{return ret__7192;
}
break;
}
};
var G__7193 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7193__delegate.call(this, coll, k, v, kvs);
};
G__7193.cljs$lang$maxFixedArity = 3;
G__7193.cljs$lang$applyTo = (function (arglist__7198){
var coll = cljs.core.first(arglist__7198);
var k = cljs.core.first(cljs.core.next(arglist__7198));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7198)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7198)));
return G__7193__delegate(coll, k, v, kvs);
});
G__7193.cljs$lang$arity$variadic = G__7193__delegate;
return G__7193;
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
var G__7201__delegate = function (coll,k,ks){
while(true){
var ret__7200 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__7202 = ret__7200;
var G__7203 = cljs.core.first.call(null,ks);
var G__7204 = cljs.core.next.call(null,ks);
coll = G__7202;
k = G__7203;
ks = G__7204;
continue;
}
} else
{return ret__7200;
}
break;
}
};
var G__7201 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7201__delegate.call(this, coll, k, ks);
};
G__7201.cljs$lang$maxFixedArity = 2;
G__7201.cljs$lang$applyTo = (function (arglist__7205){
var coll = cljs.core.first(arglist__7205);
var k = cljs.core.first(cljs.core.next(arglist__7205));
var ks = cljs.core.rest(cljs.core.next(arglist__7205));
return G__7201__delegate(coll, k, ks);
});
G__7201.cljs$lang$arity$variadic = G__7201__delegate;
return G__7201;
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
if((function (){var G__7209__7210 = o;
if(G__7209__7210)
{if((function (){var or__3824__auto____7211 = (G__7209__7210.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____7211)
{return or__3824__auto____7211;
} else
{return G__7209__7210.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__7209__7210.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__7209__7210);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__7209__7210);
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
var G__7214__delegate = function (coll,k,ks){
while(true){
var ret__7213 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__7215 = ret__7213;
var G__7216 = cljs.core.first.call(null,ks);
var G__7217 = cljs.core.next.call(null,ks);
coll = G__7215;
k = G__7216;
ks = G__7217;
continue;
}
} else
{return ret__7213;
}
break;
}
};
var G__7214 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7214__delegate.call(this, coll, k, ks);
};
G__7214.cljs$lang$maxFixedArity = 2;
G__7214.cljs$lang$applyTo = (function (arglist__7218){
var coll = cljs.core.first(arglist__7218);
var k = cljs.core.first(cljs.core.next(arglist__7218));
var ks = cljs.core.rest(cljs.core.next(arglist__7218));
return G__7214__delegate(coll, k, ks);
});
G__7214.cljs$lang$arity$variadic = G__7214__delegate;
return G__7214;
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
var h__7220 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__7220);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__7220;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__7222 = (cljs.core.string_hash_cache[k]);
if(!((h__7222 == null)))
{return h__7222;
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
if((function (){var and__3822__auto____7224 = goog.isString(o);
if(and__3822__auto____7224)
{return check_cache;
} else
{return and__3822__auto____7224;
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
{var G__7228__7229 = x;
if(G__7228__7229)
{if((function (){var or__3824__auto____7230 = (G__7228__7229.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____7230)
{return or__3824__auto____7230;
} else
{return G__7228__7229.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__7228__7229.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__7228__7229);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__7228__7229);
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
{var G__7234__7235 = x;
if(G__7234__7235)
{if((function (){var or__3824__auto____7236 = (G__7234__7235.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____7236)
{return or__3824__auto____7236;
} else
{return G__7234__7235.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__7234__7235.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__7234__7235);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__7234__7235);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__7240__7241 = x;
if(G__7240__7241)
{if((function (){var or__3824__auto____7242 = (G__7240__7241.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____7242)
{return or__3824__auto____7242;
} else
{return G__7240__7241.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__7240__7241.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__7240__7241);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__7240__7241);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__7246__7247 = x;
if(G__7246__7247)
{if((function (){var or__3824__auto____7248 = (G__7246__7247.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____7248)
{return or__3824__auto____7248;
} else
{return G__7246__7247.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__7246__7247.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__7246__7247);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__7246__7247);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__7252__7253 = x;
if(G__7252__7253)
{if((function (){var or__3824__auto____7254 = (G__7252__7253.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____7254)
{return or__3824__auto____7254;
} else
{return G__7252__7253.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__7252__7253.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__7252__7253);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__7252__7253);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__7258__7259 = x;
if(G__7258__7259)
{if((function (){var or__3824__auto____7260 = (G__7258__7259.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7260)
{return or__3824__auto____7260;
} else
{return G__7258__7259.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7258__7259.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7258__7259);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7258__7259);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__7264__7265 = x;
if(G__7264__7265)
{if((function (){var or__3824__auto____7266 = (G__7264__7265.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7266)
{return or__3824__auto____7266;
} else
{return G__7264__7265.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7264__7265.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7264__7265);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7264__7265);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__7270__7271 = x;
if(G__7270__7271)
{if((function (){var or__3824__auto____7272 = (G__7270__7271.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____7272)
{return or__3824__auto____7272;
} else
{return G__7270__7271.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__7270__7271.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__7270__7271);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__7270__7271);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__7276__7277 = x;
if(G__7276__7277)
{if((function (){var or__3824__auto____7278 = (G__7276__7277.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____7278)
{return or__3824__auto____7278;
} else
{return G__7276__7277.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__7276__7277.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__7276__7277);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__7276__7277);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__7282__7283 = x;
if(G__7282__7283)
{if(cljs.core.truth_((function (){var or__3824__auto____7284 = null;
if(cljs.core.truth_(or__3824__auto____7284))
{return or__3824__auto____7284;
} else
{return G__7282__7283.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__7282__7283.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__7282__7283);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__7282__7283);
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
var G__7285__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__7285 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7285__delegate.call(this, keyvals);
};
G__7285.cljs$lang$maxFixedArity = 0;
G__7285.cljs$lang$applyTo = (function (arglist__7286){
var keyvals = cljs.core.seq(arglist__7286);;
return G__7285__delegate(keyvals);
});
G__7285.cljs$lang$arity$variadic = G__7285__delegate;
return G__7285;
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
var keys__7288 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__7288.push(key);
}));
return keys__7288;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__7292 = i;
var j__7293 = j;
var len__7294 = len;
while(true){
if((len__7294 === 0))
{return to;
} else
{(to[j__7293] = (from[i__7292]));
{
var G__7295 = (i__7292 + 1);
var G__7296 = (j__7293 + 1);
var G__7297 = (len__7294 - 1);
i__7292 = G__7295;
j__7293 = G__7296;
len__7294 = G__7297;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__7301 = (i + (len - 1));
var j__7302 = (j + (len - 1));
var len__7303 = len;
while(true){
if((len__7303 === 0))
{return to;
} else
{(to[j__7302] = (from[i__7301]));
{
var G__7304 = (i__7301 - 1);
var G__7305 = (j__7302 - 1);
var G__7306 = (len__7303 - 1);
i__7301 = G__7304;
j__7302 = G__7305;
len__7303 = G__7306;
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
{var G__7310__7311 = s;
if(G__7310__7311)
{if((function (){var or__3824__auto____7312 = (G__7310__7311.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7312)
{return or__3824__auto____7312;
} else
{return G__7310__7311.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7310__7311.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7310__7311);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7310__7311);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__7316__7317 = s;
if(G__7316__7317)
{if((function (){var or__3824__auto____7318 = (G__7316__7317.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____7318)
{return or__3824__auto____7318;
} else
{return G__7316__7317.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__7316__7317.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__7316__7317);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__7316__7317);
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
var and__3822__auto____7321 = goog.isString(x);
if(and__3822__auto____7321)
{return !((function (){var or__3824__auto____7322 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____7322)
{return or__3824__auto____7322;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____7321;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____7324 = goog.isString(x);
if(and__3822__auto____7324)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____7324;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____7326 = goog.isString(x);
if(and__3822__auto____7326)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____7326;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____7331 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____7331)
{return or__3824__auto____7331;
} else
{var G__7332__7333 = f;
if(G__7332__7333)
{if((function (){var or__3824__auto____7334 = (G__7332__7333.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____7334)
{return or__3824__auto____7334;
} else
{return G__7332__7333.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__7332__7333.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__7332__7333);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__7332__7333);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____7336 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____7336)
{return (n == n.toFixed());
} else
{return and__3822__auto____7336;
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
if(cljs.core.truth_((function (){var and__3822__auto____7339 = coll;
if(cljs.core.truth_(and__3822__auto____7339))
{var and__3822__auto____7340 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____7340)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____7340;
}
} else
{return and__3822__auto____7339;
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
var G__7349__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__7345 = cljs.core.set([y,x]);
var xs__7346 = more;
while(true){
var x__7347 = cljs.core.first.call(null,xs__7346);
var etc__7348 = cljs.core.next.call(null,xs__7346);
if(cljs.core.truth_(xs__7346))
{if(cljs.core.contains_QMARK_.call(null,s__7345,x__7347))
{return false;
} else
{{
var G__7350 = cljs.core.conj.call(null,s__7345,x__7347);
var G__7351 = etc__7348;
s__7345 = G__7350;
xs__7346 = G__7351;
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
var G__7349 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7349__delegate.call(this, x, y, more);
};
G__7349.cljs$lang$maxFixedArity = 2;
G__7349.cljs$lang$applyTo = (function (arglist__7352){
var x = cljs.core.first(arglist__7352);
var y = cljs.core.first(cljs.core.next(arglist__7352));
var more = cljs.core.rest(cljs.core.next(arglist__7352));
return G__7349__delegate(x, y, more);
});
G__7349.cljs$lang$arity$variadic = G__7349__delegate;
return G__7349;
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
{if((function (){var G__7356__7357 = x;
if(G__7356__7357)
{if(cljs.core.truth_((function (){var or__3824__auto____7358 = null;
if(cljs.core.truth_(or__3824__auto____7358))
{return or__3824__auto____7358;
} else
{return G__7356__7357.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__7356__7357.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__7356__7357);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__7356__7357);
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
var xl__7363 = cljs.core.count.call(null,xs);
var yl__7364 = cljs.core.count.call(null,ys);
if((xl__7363 < yl__7364))
{return -1;
} else
{if((xl__7363 > yl__7364))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__7363,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__7365 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____7366 = (d__7365 === 0);
if(and__3822__auto____7366)
{return ((n + 1) < len);
} else
{return and__3822__auto____7366;
}
})())
{{
var G__7367 = xs;
var G__7368 = ys;
var G__7369 = len;
var G__7370 = (n + 1);
xs = G__7367;
ys = G__7368;
len = G__7369;
n = G__7370;
continue;
}
} else
{return d__7365;
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
var r__7372 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__7372))
{return r__7372;
} else
{if(cljs.core.truth_(r__7372))
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
{var a__7374 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__7374,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__7374);
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
var temp__3971__auto____7380 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____7380)
{var s__7381 = temp__3971__auto____7380;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__7381),cljs.core.next.call(null,s__7381));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__7382 = val;
var coll__7383 = cljs.core.seq.call(null,coll);
while(true){
if(coll__7383)
{var nval__7384 = f.call(null,val__7382,cljs.core.first.call(null,coll__7383));
if(cljs.core.reduced_QMARK_.call(null,nval__7384))
{return cljs.core.deref.call(null,nval__7384);
} else
{{
var G__7385 = nval__7384;
var G__7386 = cljs.core.next.call(null,coll__7383);
val__7382 = G__7385;
coll__7383 = G__7386;
continue;
}
}
} else
{return val__7382;
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
var a__7388 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__7388);
return cljs.core.vec.call(null,a__7388);
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
if((function (){var G__7395__7396 = coll;
if(G__7395__7396)
{if((function (){var or__3824__auto____7397 = (G__7395__7396.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7397)
{return or__3824__auto____7397;
} else
{return G__7395__7396.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7395__7396.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7395__7396);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7395__7396);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__7398__7399 = coll;
if(G__7398__7399)
{if((function (){var or__3824__auto____7400 = (G__7398__7399.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7400)
{return or__3824__auto____7400;
} else
{return G__7398__7399.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7398__7399.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7398__7399);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7398__7399);
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
var this__7401 = this;
return this__7401.val;
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
var G__7402__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__7402 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7402__delegate.call(this, x, y, more);
};
G__7402.cljs$lang$maxFixedArity = 2;
G__7402.cljs$lang$applyTo = (function (arglist__7403){
var x = cljs.core.first(arglist__7403);
var y = cljs.core.first(cljs.core.next(arglist__7403));
var more = cljs.core.rest(cljs.core.next(arglist__7403));
return G__7402__delegate(x, y, more);
});
G__7402.cljs$lang$arity$variadic = G__7402__delegate;
return G__7402;
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
var G__7404__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__7404 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7404__delegate.call(this, x, y, more);
};
G__7404.cljs$lang$maxFixedArity = 2;
G__7404.cljs$lang$applyTo = (function (arglist__7405){
var x = cljs.core.first(arglist__7405);
var y = cljs.core.first(cljs.core.next(arglist__7405));
var more = cljs.core.rest(cljs.core.next(arglist__7405));
return G__7404__delegate(x, y, more);
});
G__7404.cljs$lang$arity$variadic = G__7404__delegate;
return G__7404;
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
var G__7406__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__7406 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7406__delegate.call(this, x, y, more);
};
G__7406.cljs$lang$maxFixedArity = 2;
G__7406.cljs$lang$applyTo = (function (arglist__7407){
var x = cljs.core.first(arglist__7407);
var y = cljs.core.first(cljs.core.next(arglist__7407));
var more = cljs.core.rest(cljs.core.next(arglist__7407));
return G__7406__delegate(x, y, more);
});
G__7406.cljs$lang$arity$variadic = G__7406__delegate;
return G__7406;
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
var G__7408__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__7408 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7408__delegate.call(this, x, y, more);
};
G__7408.cljs$lang$maxFixedArity = 2;
G__7408.cljs$lang$applyTo = (function (arglist__7409){
var x = cljs.core.first(arglist__7409);
var y = cljs.core.first(cljs.core.next(arglist__7409));
var more = cljs.core.rest(cljs.core.next(arglist__7409));
return G__7408__delegate(x, y, more);
});
G__7408.cljs$lang$arity$variadic = G__7408__delegate;
return G__7408;
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
var G__7410__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__7411 = y;
var G__7412 = cljs.core.first.call(null,more);
var G__7413 = cljs.core.next.call(null,more);
x = G__7411;
y = G__7412;
more = G__7413;
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
var G__7410 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7410__delegate.call(this, x, y, more);
};
G__7410.cljs$lang$maxFixedArity = 2;
G__7410.cljs$lang$applyTo = (function (arglist__7414){
var x = cljs.core.first(arglist__7414);
var y = cljs.core.first(cljs.core.next(arglist__7414));
var more = cljs.core.rest(cljs.core.next(arglist__7414));
return G__7410__delegate(x, y, more);
});
G__7410.cljs$lang$arity$variadic = G__7410__delegate;
return G__7410;
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
var G__7415__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__7416 = y;
var G__7417 = cljs.core.first.call(null,more);
var G__7418 = cljs.core.next.call(null,more);
x = G__7416;
y = G__7417;
more = G__7418;
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
var G__7415 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7415__delegate.call(this, x, y, more);
};
G__7415.cljs$lang$maxFixedArity = 2;
G__7415.cljs$lang$applyTo = (function (arglist__7419){
var x = cljs.core.first(arglist__7419);
var y = cljs.core.first(cljs.core.next(arglist__7419));
var more = cljs.core.rest(cljs.core.next(arglist__7419));
return G__7415__delegate(x, y, more);
});
G__7415.cljs$lang$arity$variadic = G__7415__delegate;
return G__7415;
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
var G__7420__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__7421 = y;
var G__7422 = cljs.core.first.call(null,more);
var G__7423 = cljs.core.next.call(null,more);
x = G__7421;
y = G__7422;
more = G__7423;
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
var G__7420 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7420__delegate.call(this, x, y, more);
};
G__7420.cljs$lang$maxFixedArity = 2;
G__7420.cljs$lang$applyTo = (function (arglist__7424){
var x = cljs.core.first(arglist__7424);
var y = cljs.core.first(cljs.core.next(arglist__7424));
var more = cljs.core.rest(cljs.core.next(arglist__7424));
return G__7420__delegate(x, y, more);
});
G__7420.cljs$lang$arity$variadic = G__7420__delegate;
return G__7420;
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
var G__7425__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__7426 = y;
var G__7427 = cljs.core.first.call(null,more);
var G__7428 = cljs.core.next.call(null,more);
x = G__7426;
y = G__7427;
more = G__7428;
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
var G__7425 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7425__delegate.call(this, x, y, more);
};
G__7425.cljs$lang$maxFixedArity = 2;
G__7425.cljs$lang$applyTo = (function (arglist__7429){
var x = cljs.core.first(arglist__7429);
var y = cljs.core.first(cljs.core.next(arglist__7429));
var more = cljs.core.rest(cljs.core.next(arglist__7429));
return G__7425__delegate(x, y, more);
});
G__7425.cljs$lang$arity$variadic = G__7425__delegate;
return G__7425;
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
var G__7430__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
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
var G__7432__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
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
var rem__7435 = (n % d);
return cljs.core.fix.call(null,((n - rem__7435) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__7437 = cljs.core.quot.call(null,n,d);
return (n - (d * q__7437));
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
var v__7440 = (v - ((v >> 1) & 1431655765));
var v__7441 = ((v__7440 & 858993459) + ((v__7440 >> 2) & 858993459));
return ((((v__7441 + (v__7441 >> 4)) & 252645135) * 16843009) >> 24);
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
var G__7442__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__7443 = y;
var G__7444 = cljs.core.first.call(null,more);
var G__7445 = cljs.core.next.call(null,more);
x = G__7443;
y = G__7444;
more = G__7445;
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
var G__7442 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7442__delegate.call(this, x, y, more);
};
G__7442.cljs$lang$maxFixedArity = 2;
G__7442.cljs$lang$applyTo = (function (arglist__7446){
var x = cljs.core.first(arglist__7446);
var y = cljs.core.first(cljs.core.next(arglist__7446));
var more = cljs.core.rest(cljs.core.next(arglist__7446));
return G__7442__delegate(x, y, more);
});
G__7442.cljs$lang$arity$variadic = G__7442__delegate;
return G__7442;
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
var n__7450 = n;
var xs__7451 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7452 = xs__7451;
if(and__3822__auto____7452)
{return (n__7450 > 0);
} else
{return and__3822__auto____7452;
}
})()))
{{
var G__7453 = (n__7450 - 1);
var G__7454 = cljs.core.next.call(null,xs__7451);
n__7450 = G__7453;
xs__7451 = G__7454;
continue;
}
} else
{return xs__7451;
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
var G__7455__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7456 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__7457 = cljs.core.next.call(null,more);
sb = G__7456;
more = G__7457;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__7455 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7455__delegate.call(this, x, ys);
};
G__7455.cljs$lang$maxFixedArity = 1;
G__7455.cljs$lang$applyTo = (function (arglist__7458){
var x = cljs.core.first(arglist__7458);
var ys = cljs.core.rest(arglist__7458);
return G__7455__delegate(x, ys);
});
G__7455.cljs$lang$arity$variadic = G__7455__delegate;
return G__7455;
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
var G__7459__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7460 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__7461 = cljs.core.next.call(null,more);
sb = G__7460;
more = G__7461;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__7459 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7459__delegate.call(this, x, ys);
};
G__7459.cljs$lang$maxFixedArity = 1;
G__7459.cljs$lang$applyTo = (function (arglist__7462){
var x = cljs.core.first(arglist__7462);
var ys = cljs.core.rest(arglist__7462);
return G__7459__delegate(x, ys);
});
G__7459.cljs$lang$arity$variadic = G__7459__delegate;
return G__7459;
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__7465 = cljs.core.seq.call(null,x);
var ys__7466 = cljs.core.seq.call(null,y);
while(true){
if((xs__7465 == null))
{return (ys__7466 == null);
} else
{if((ys__7466 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__7465),cljs.core.first.call(null,ys__7466)))
{{
var G__7467 = cljs.core.next.call(null,xs__7465);
var G__7468 = cljs.core.next.call(null,ys__7466);
xs__7465 = G__7467;
ys__7466 = G__7468;
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
return cljs.core.reduce.call(null,(function (p1__7469_SHARP_,p2__7470_SHARP_){
return cljs.core.hash_combine.call(null,p1__7469_SHARP_,cljs.core.hash.call(null,p2__7470_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
void 0;
void 0;
cljs.core.hash_imap = (function hash_imap(m){
var h__7474 = 0;
var s__7475 = cljs.core.seq.call(null,m);
while(true){
if(s__7475)
{var e__7476 = cljs.core.first.call(null,s__7475);
{
var G__7477 = ((h__7474 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__7476)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__7476)))) % 4503599627370496);
var G__7478 = cljs.core.next.call(null,s__7475);
h__7474 = G__7477;
s__7475 = G__7478;
continue;
}
} else
{return h__7474;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__7482 = 0;
var s__7483 = cljs.core.seq.call(null,s);
while(true){
if(s__7483)
{var e__7484 = cljs.core.first.call(null,s__7483);
{
var G__7485 = ((h__7482 + cljs.core.hash.call(null,e__7484)) % 4503599627370496);
var G__7486 = cljs.core.next.call(null,s__7483);
h__7482 = G__7485;
s__7483 = G__7486;
continue;
}
} else
{return h__7482;
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
var G__7507__7508 = cljs.core.seq.call(null,fn_map);
if(G__7507__7508)
{var G__7510__7512 = cljs.core.first.call(null,G__7507__7508);
var vec__7511__7513 = G__7510__7512;
var key_name__7514 = cljs.core.nth.call(null,vec__7511__7513,0,null);
var f__7515 = cljs.core.nth.call(null,vec__7511__7513,1,null);
var G__7507__7516 = G__7507__7508;
var G__7510__7517 = G__7510__7512;
var G__7507__7518 = G__7507__7516;
while(true){
var vec__7519__7520 = G__7510__7517;
var key_name__7521 = cljs.core.nth.call(null,vec__7519__7520,0,null);
var f__7522 = cljs.core.nth.call(null,vec__7519__7520,1,null);
var G__7507__7523 = G__7507__7518;
var str_name__7524 = cljs.core.name.call(null,key_name__7521);
(obj[str_name__7524] = f__7522);
var temp__3974__auto____7525 = cljs.core.next.call(null,G__7507__7523);
if(temp__3974__auto____7525)
{var G__7507__7526 = temp__3974__auto____7525;
{
var G__7527 = cljs.core.first.call(null,G__7507__7526);
var G__7528 = G__7507__7526;
G__7510__7517 = G__7527;
G__7507__7518 = G__7528;
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
var this__7529 = this;
var h__2153__auto____7530 = this__7529.__hash;
if(!((h__2153__auto____7530 == null)))
{return h__2153__auto____7530;
} else
{var h__2153__auto____7531 = cljs.core.hash_coll.call(null,coll);
this__7529.__hash = h__2153__auto____7531;
return h__2153__auto____7531;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7532 = this;
if((this__7532.count === 1))
{return null;
} else
{return this__7532.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7533 = this;
return (new cljs.core.List(this__7533.meta,o,coll,(this__7533.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__7534 = this;
var this__7535 = this;
return cljs.core.pr_str.call(null,this__7535);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7536 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7537 = this;
return this__7537.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7538 = this;
return this__7538.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7539 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7540 = this;
return this__7540.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7541 = this;
if((this__7541.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__7541.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7542 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7543 = this;
return (new cljs.core.List(meta,this__7543.first,this__7543.rest,this__7543.count,this__7543.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7544 = this;
return this__7544.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7545 = this;
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
var this__7546 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7547 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7548 = this;
return (new cljs.core.List(this__7548.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__7549 = this;
var this__7550 = this;
return cljs.core.pr_str.call(null,this__7550);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7551 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7552 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7553 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7554 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7555 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7556 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7557 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7558 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7559 = this;
return this__7559.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7560 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__7564__7565 = coll;
if(G__7564__7565)
{if((function (){var or__3824__auto____7566 = (G__7564__7565.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____7566)
{return or__3824__auto____7566;
} else
{return G__7564__7565.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__7564__7565.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7564__7565);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7564__7565);
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
var G__7567__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__7567 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7567__delegate.call(this, x, y, z, items);
};
G__7567.cljs$lang$maxFixedArity = 3;
G__7567.cljs$lang$applyTo = (function (arglist__7568){
var x = cljs.core.first(arglist__7568);
var y = cljs.core.first(cljs.core.next(arglist__7568));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7568)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7568)));
return G__7567__delegate(x, y, z, items);
});
G__7567.cljs$lang$arity$variadic = G__7567__delegate;
return G__7567;
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
var this__7569 = this;
var h__2153__auto____7570 = this__7569.__hash;
if(!((h__2153__auto____7570 == null)))
{return h__2153__auto____7570;
} else
{var h__2153__auto____7571 = cljs.core.hash_coll.call(null,coll);
this__7569.__hash = h__2153__auto____7571;
return h__2153__auto____7571;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7572 = this;
if((this__7572.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__7572.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7573 = this;
return (new cljs.core.Cons(null,o,coll,this__7573.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__7574 = this;
var this__7575 = this;
return cljs.core.pr_str.call(null,this__7575);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7576 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7577 = this;
return this__7577.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7578 = this;
if((this__7578.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__7578.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7579 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7580 = this;
return (new cljs.core.Cons(meta,this__7580.first,this__7580.rest,this__7580.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7581 = this;
return this__7581.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7582 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7582.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____7587 = (coll == null);
if(or__3824__auto____7587)
{return or__3824__auto____7587;
} else
{var G__7588__7589 = coll;
if(G__7588__7589)
{if((function (){var or__3824__auto____7590 = (G__7588__7589.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7590)
{return or__3824__auto____7590;
} else
{return G__7588__7589.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7588__7589.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7588__7589);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7588__7589);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__7594__7595 = x;
if(G__7594__7595)
{if((function (){var or__3824__auto____7596 = (G__7594__7595.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____7596)
{return or__3824__auto____7596;
} else
{return G__7594__7595.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__7594__7595.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7594__7595);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7594__7595);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__7597 = null;
var G__7597__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__7597__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__7597 = function(string,f,start){
switch(arguments.length){
case 2:
return G__7597__2.call(this,string,f);
case 3:
return G__7597__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7597;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__7598 = null;
var G__7598__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__7598__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__7598 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__7598__2.call(this,string,k);
case 3:
return G__7598__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7598;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__7599 = null;
var G__7599__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__7599__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__7599 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__7599__2.call(this,string,n);
case 3:
return G__7599__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7599;
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
cljs.core.Keyword.prototype.call = (function (this_sym7602,coll){
var this__7603 = this;
var this_sym7602__7604 = this;
var ___7605 = this_sym7602__7604;
if((coll == null))
{return null;
} else
{var strobj__7606 = coll.strobj;
if((strobj__7606 == null))
{return cljs.core._lookup.call(null,coll,this__7603.k,null);
} else
{return (strobj__7606[this__7603.k]);
}
}
});
cljs.core.Keyword.prototype.apply = (function (this_sym7600,args7601){
var this__7607 = this;
return this_sym7600.call.apply(this_sym7600,[this_sym7600].concat(args7601.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__7616 = null;
var G__7616__2 = (function (this_sym7610,coll){
var this_sym7610__7612 = this;
var this__7613 = this_sym7610__7612;
return cljs.core._lookup.call(null,coll,this__7613.toString(),null);
});
var G__7616__3 = (function (this_sym7611,coll,not_found){
var this_sym7611__7614 = this;
var this__7615 = this_sym7611__7614;
return cljs.core._lookup.call(null,coll,this__7615.toString(),not_found);
});
G__7616 = function(this_sym7611,coll,not_found){
switch(arguments.length){
case 2:
return G__7616__2.call(this,this_sym7611,coll);
case 3:
return G__7616__3.call(this,this_sym7611,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7616;
})()
;
String.prototype.apply = (function (this_sym7608,args7609){
return this_sym7608.call.apply(this_sym7608,[this_sym7608].concat(args7609.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__7618 = lazy_seq.x;
if(lazy_seq.realized)
{return x__7618;
} else
{lazy_seq.x = x__7618.call(null);
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
var this__7619 = this;
var h__2153__auto____7620 = this__7619.__hash;
if(!((h__2153__auto____7620 == null)))
{return h__2153__auto____7620;
} else
{var h__2153__auto____7621 = cljs.core.hash_coll.call(null,coll);
this__7619.__hash = h__2153__auto____7621;
return h__2153__auto____7621;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7622 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7623 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__7624 = this;
var this__7625 = this;
return cljs.core.pr_str.call(null,this__7625);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7626 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7627 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7628 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7629 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7630 = this;
return (new cljs.core.LazySeq(meta,this__7630.realized,this__7630.x,this__7630.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7631 = this;
return this__7631.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7632 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7632.meta);
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
var this__7633 = this;
return this__7633.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__7634 = this;
var ___7635 = this;
(this__7634.buf[this__7634.end] = o);
return this__7634.end = (this__7634.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__7636 = this;
var ___7637 = this;
var ret__7638 = (new cljs.core.ArrayChunk(this__7636.buf,0,this__7636.end));
this__7636.buf = null;
return ret__7638;
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
var this__7639 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__7639.arr[this__7639.off]),(this__7639.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7640 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__7640.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__7641 = this;
if((this__7641.off === this__7641.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__7641.arr,(this__7641.off + 1),this__7641.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__7642 = this;
return (this__7642.arr[(this__7642.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__7643 = this;
if((function (){var and__3822__auto____7644 = (i >= 0);
if(and__3822__auto____7644)
{return (i < (this__7643.end - this__7643.off));
} else
{return and__3822__auto____7644;
}
})())
{return (this__7643.arr[(this__7643.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7645 = this;
return (this__7645.end - this__7645.off);
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
var this__7646 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7647 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7648 = this;
return cljs.core._nth.call(null,this__7648.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7649 = this;
if((cljs.core._count.call(null,this__7649.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__7649.chunk),this__7649.more,this__7649.meta));
} else
{if((this__7649.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__7649.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__7650 = this;
if((this__7650.more == null))
{return null;
} else
{return this__7650.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7651 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__7652 = this;
return (new cljs.core.ChunkedCons(this__7652.chunk,this__7652.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7653 = this;
return this__7653.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__7654 = this;
return this__7654.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__7655 = this;
if((this__7655.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__7655.more;
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
if((function (){var G__7659__7660 = s;
if(G__7659__7660)
{if(cljs.core.truth_((function (){var or__3824__auto____7661 = null;
if(cljs.core.truth_(or__3824__auto____7661))
{return or__3824__auto____7661;
} else
{return G__7659__7660.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__7659__7660.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__7659__7660);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__7659__7660);
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
var ary__7664 = [];
var s__7665 = s;
while(true){
if(cljs.core.seq.call(null,s__7665))
{ary__7664.push(cljs.core.first.call(null,s__7665));
{
var G__7666 = cljs.core.next.call(null,s__7665);
s__7665 = G__7666;
continue;
}
} else
{return ary__7664;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__7670 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__7671 = 0;
var xs__7672 = cljs.core.seq.call(null,coll);
while(true){
if(xs__7672)
{(ret__7670[i__7671] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__7672)));
{
var G__7673 = (i__7671 + 1);
var G__7674 = cljs.core.next.call(null,xs__7672);
i__7671 = G__7673;
xs__7672 = G__7674;
continue;
}
} else
{}
break;
}
return ret__7670;
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
var a__7682 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7683 = cljs.core.seq.call(null,init_val_or_seq);
var i__7684 = 0;
var s__7685 = s__7683;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7686 = s__7685;
if(and__3822__auto____7686)
{return (i__7684 < size);
} else
{return and__3822__auto____7686;
}
})()))
{(a__7682[i__7684] = cljs.core.first.call(null,s__7685));
{
var G__7689 = (i__7684 + 1);
var G__7690 = cljs.core.next.call(null,s__7685);
i__7684 = G__7689;
s__7685 = G__7690;
continue;
}
} else
{return a__7682;
}
break;
}
} else
{var n__2492__auto____7687 = size;
var i__7688 = 0;
while(true){
if((i__7688 < n__2492__auto____7687))
{(a__7682[i__7688] = init_val_or_seq);
{
var G__7691 = (i__7688 + 1);
i__7688 = G__7691;
continue;
}
} else
{}
break;
}
return a__7682;
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
var a__7699 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7700 = cljs.core.seq.call(null,init_val_or_seq);
var i__7701 = 0;
var s__7702 = s__7700;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7703 = s__7702;
if(and__3822__auto____7703)
{return (i__7701 < size);
} else
{return and__3822__auto____7703;
}
})()))
{(a__7699[i__7701] = cljs.core.first.call(null,s__7702));
{
var G__7706 = (i__7701 + 1);
var G__7707 = cljs.core.next.call(null,s__7702);
i__7701 = G__7706;
s__7702 = G__7707;
continue;
}
} else
{return a__7699;
}
break;
}
} else
{var n__2492__auto____7704 = size;
var i__7705 = 0;
while(true){
if((i__7705 < n__2492__auto____7704))
{(a__7699[i__7705] = init_val_or_seq);
{
var G__7708 = (i__7705 + 1);
i__7705 = G__7708;
continue;
}
} else
{}
break;
}
return a__7699;
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
var a__7716 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7717 = cljs.core.seq.call(null,init_val_or_seq);
var i__7718 = 0;
var s__7719 = s__7717;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7720 = s__7719;
if(and__3822__auto____7720)
{return (i__7718 < size);
} else
{return and__3822__auto____7720;
}
})()))
{(a__7716[i__7718] = cljs.core.first.call(null,s__7719));
{
var G__7723 = (i__7718 + 1);
var G__7724 = cljs.core.next.call(null,s__7719);
i__7718 = G__7723;
s__7719 = G__7724;
continue;
}
} else
{return a__7716;
}
break;
}
} else
{var n__2492__auto____7721 = size;
var i__7722 = 0;
while(true){
if((i__7722 < n__2492__auto____7721))
{(a__7716[i__7722] = init_val_or_seq);
{
var G__7725 = (i__7722 + 1);
i__7722 = G__7725;
continue;
}
} else
{}
break;
}
return a__7716;
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
{var s__7730 = s;
var i__7731 = n;
var sum__7732 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7733 = (i__7731 > 0);
if(and__3822__auto____7733)
{return cljs.core.seq.call(null,s__7730);
} else
{return and__3822__auto____7733;
}
})()))
{{
var G__7734 = cljs.core.next.call(null,s__7730);
var G__7735 = (i__7731 - 1);
var G__7736 = (sum__7732 + 1);
s__7730 = G__7734;
i__7731 = G__7735;
sum__7732 = G__7736;
continue;
}
} else
{return sum__7732;
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
var s__7741 = cljs.core.seq.call(null,x);
if(s__7741)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__7741))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__7741),concat.call(null,cljs.core.chunk_rest.call(null,s__7741),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__7741),concat.call(null,cljs.core.rest.call(null,s__7741),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__7745__delegate = function (x,y,zs){
var cat__7744 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__7743 = cljs.core.seq.call(null,xys);
if(xys__7743)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__7743))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__7743),cat.call(null,cljs.core.chunk_rest.call(null,xys__7743),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__7743),cat.call(null,cljs.core.rest.call(null,xys__7743),zs));
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
return cat__7744.call(null,concat.call(null,x,y),zs);
};
var G__7745 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7745__delegate.call(this, x, y, zs);
};
G__7745.cljs$lang$maxFixedArity = 2;
G__7745.cljs$lang$applyTo = (function (arglist__7746){
var x = cljs.core.first(arglist__7746);
var y = cljs.core.first(cljs.core.next(arglist__7746));
var zs = cljs.core.rest(cljs.core.next(arglist__7746));
return G__7745__delegate(x, y, zs);
});
G__7745.cljs$lang$arity$variadic = G__7745__delegate;
return G__7745;
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
var G__7747__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__7747 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7747__delegate.call(this, a, b, c, d, more);
};
G__7747.cljs$lang$maxFixedArity = 4;
G__7747.cljs$lang$applyTo = (function (arglist__7748){
var a = cljs.core.first(arglist__7748);
var b = cljs.core.first(cljs.core.next(arglist__7748));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7748)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7748))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7748))));
return G__7747__delegate(a, b, c, d, more);
});
G__7747.cljs$lang$arity$variadic = G__7747__delegate;
return G__7747;
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
var args__7790 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__7791 = cljs.core._first.call(null,args__7790);
var args__7792 = cljs.core._rest.call(null,args__7790);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__7791);
} else
{return f.call(null,a__7791);
}
} else
{var b__7793 = cljs.core._first.call(null,args__7792);
var args__7794 = cljs.core._rest.call(null,args__7792);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__7791,b__7793);
} else
{return f.call(null,a__7791,b__7793);
}
} else
{var c__7795 = cljs.core._first.call(null,args__7794);
var args__7796 = cljs.core._rest.call(null,args__7794);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__7791,b__7793,c__7795);
} else
{return f.call(null,a__7791,b__7793,c__7795);
}
} else
{var d__7797 = cljs.core._first.call(null,args__7796);
var args__7798 = cljs.core._rest.call(null,args__7796);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__7791,b__7793,c__7795,d__7797);
} else
{return f.call(null,a__7791,b__7793,c__7795,d__7797);
}
} else
{var e__7799 = cljs.core._first.call(null,args__7798);
var args__7800 = cljs.core._rest.call(null,args__7798);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__7791,b__7793,c__7795,d__7797,e__7799);
} else
{return f.call(null,a__7791,b__7793,c__7795,d__7797,e__7799);
}
} else
{var f__7801 = cljs.core._first.call(null,args__7800);
var args__7802 = cljs.core._rest.call(null,args__7800);
if((argc === 6))
{if(f__7801.cljs$lang$arity$6)
{return f__7801.cljs$lang$arity$6(a__7791,b__7793,c__7795,d__7797,e__7799,f__7801);
} else
{return f__7801.call(null,a__7791,b__7793,c__7795,d__7797,e__7799,f__7801);
}
} else
{var g__7803 = cljs.core._first.call(null,args__7802);
var args__7804 = cljs.core._rest.call(null,args__7802);
if((argc === 7))
{if(f__7801.cljs$lang$arity$7)
{return f__7801.cljs$lang$arity$7(a__7791,b__7793,c__7795,d__7797,e__7799,f__7801,g__7803);
} else
{return f__7801.call(null,a__7791,b__7793,c__7795,d__7797,e__7799,f__7801,g__7803);
}
} else
{var h__7805 = cljs.core._first.call(null,args__7804);
var args__7806 = cljs.core._rest.call(null,args__7804);
if((argc === 8))
{if(f__7801.cljs$lang$arity$8)
{return f__7801.cljs$lang$arity$8(a__7791,b__7793,c__7795,d__7797,e__7799,f__7801,g__7803,h__7805);
} else
{return f__7801.call(null,a__7791,b__7793,c__7795,d__7797,e__7799,f__7801,g__7803,h__7805);
}
} else
{var i__7807 = cljs.core._first.call(null,args__7806);
var args__7808 = cljs.core._rest.call(null,args__7806);
if((argc === 9))
{if(f__7801.cljs$lang$arity$9)
{return f__7801.cljs$lang$arity$9(a__7791,b__7793,c__7795,d__7797,e__7799,f__7801,g__7803,h__7805,i__7807);
} else
{return f__7801.call(null,a__7791,b__7793,c__7795,d__7797,e__7799,f__7801,g__7803,h__7805,i__7807);
}
} else
{var j__7809 = cljs.core._first.call(null,args__7808);
var args__7810 = cljs.core._rest.call(null,args__7808);
if((argc === 10))
{if(f__7801.cljs$lang$arity$10)
{return f__7801.cljs$lang$arity$10(a__7791,b__7793,c__7795,d__7797,e__7799,f__7801,g__7803,h__7805,i__7807,j__7809);
} else
{return f__7801.call(null,a__7791,b__7793,c__7795,d__7797,e__7799,f__7801,g__7803,h__7805,i__7807,j__7809);
}
} else
{var k__7811 = cljs.core._first.call(null,args__7810);
var args__7812 = cljs.core._rest.call(null,args__7810);
if((argc === 11))
{if(f__7801.cljs$lang$arity$11)
{return f__7801.cljs$lang$arity$11(a__7791,b__7793,c__7795,d__7797,e__7799,f__7801,g__7803,h__7805,i__7807,j__7809,k__7811);
} else
{return f__7801.call(null,a__7791,b__7793,c__7795,d__7797,e__7799,f__7801,g__7803,h__7805,i__7807,j__7809,k__7811);
}
} else
{var l__7813 = cljs.core._first.call(null,args__7812);
var args__7814 = cljs.core._rest.call(null,args__7812);
if((argc === 12))
{if(f__7801.cljs$lang$arity$12)
{return f__7801.cljs$lang$arity$12(a__7791,b__7793,c__7795,d__7797,e__7799,f__7801,g__7803,h__7805,i__7807,j__7809,k__7811,l__7813);
} else
{return f__7801.call(null,a__7791,b__7793,c__7795,d__7797,e__7799,f__7801,g__7803,h__7805,i__7807,j__7809,k__7811,l__7813);
}
} else
{var m__7815 = cljs.core._first.call(null,args__7814);
var args__7816 = cljs.core._rest.call(null,args__7814);
if((argc === 13))
{if(f__7801.cljs$lang$arity$13)
{return f__7801.cljs$lang$arity$13(a__7791,b__7793,c__7795,d__7797,e__7799,f__7801,g__7803,h__7805,i__7807,j__7809,k__7811,l__7813,m__7815);
} else
{return f__7801.call(null,a__7791,b__7793,c__7795,d__7797,e__7799,f__7801,g__7803,h__7805,i__7807,j__7809,k__7811,l__7813,m__7815);
}
} else
{var n__7817 = cljs.core._first.call(null,args__7816);
var args__7818 = cljs.core._rest.call(null,args__7816);
if((argc === 14))
{if(f__7801.cljs$lang$arity$14)
{return f__7801.cljs$lang$arity$14(a__7791,b__7793,c__7795,d__7797,e__7799,f__7801,g__7803,h__7805,i__7807,j__7809,k__7811,l__7813,m__7815,n__7817);
} else
{return f__7801.call(null,a__7791,b__7793,c__7795,d__7797,e__7799,f__7801,g__7803,h__7805,i__7807,j__7809,k__7811,l__7813,m__7815,n__7817);
}
} else
{var o__7819 = cljs.core._first.call(null,args__7818);
var args__7820 = cljs.core._rest.call(null,args__7818);
if((argc === 15))
{if(f__7801.cljs$lang$arity$15)
{return f__7801.cljs$lang$arity$15(a__7791,b__7793,c__7795,d__7797,e__7799,f__7801,g__7803,h__7805,i__7807,j__7809,k__7811,l__7813,m__7815,n__7817,o__7819);
} else
{return f__7801.call(null,a__7791,b__7793,c__7795,d__7797,e__7799,f__7801,g__7803,h__7805,i__7807,j__7809,k__7811,l__7813,m__7815,n__7817,o__7819);
}
} else
{var p__7821 = cljs.core._first.call(null,args__7820);
var args__7822 = cljs.core._rest.call(null,args__7820);
if((argc === 16))
{if(f__7801.cljs$lang$arity$16)
{return f__7801.cljs$lang$arity$16(a__7791,b__7793,c__7795,d__7797,e__7799,f__7801,g__7803,h__7805,i__7807,j__7809,k__7811,l__7813,m__7815,n__7817,o__7819,p__7821);
} else
{return f__7801.call(null,a__7791,b__7793,c__7795,d__7797,e__7799,f__7801,g__7803,h__7805,i__7807,j__7809,k__7811,l__7813,m__7815,n__7817,o__7819,p__7821);
}
} else
{var q__7823 = cljs.core._first.call(null,args__7822);
var args__7824 = cljs.core._rest.call(null,args__7822);
if((argc === 17))
{if(f__7801.cljs$lang$arity$17)
{return f__7801.cljs$lang$arity$17(a__7791,b__7793,c__7795,d__7797,e__7799,f__7801,g__7803,h__7805,i__7807,j__7809,k__7811,l__7813,m__7815,n__7817,o__7819,p__7821,q__7823);
} else
{return f__7801.call(null,a__7791,b__7793,c__7795,d__7797,e__7799,f__7801,g__7803,h__7805,i__7807,j__7809,k__7811,l__7813,m__7815,n__7817,o__7819,p__7821,q__7823);
}
} else
{var r__7825 = cljs.core._first.call(null,args__7824);
var args__7826 = cljs.core._rest.call(null,args__7824);
if((argc === 18))
{if(f__7801.cljs$lang$arity$18)
{return f__7801.cljs$lang$arity$18(a__7791,b__7793,c__7795,d__7797,e__7799,f__7801,g__7803,h__7805,i__7807,j__7809,k__7811,l__7813,m__7815,n__7817,o__7819,p__7821,q__7823,r__7825);
} else
{return f__7801.call(null,a__7791,b__7793,c__7795,d__7797,e__7799,f__7801,g__7803,h__7805,i__7807,j__7809,k__7811,l__7813,m__7815,n__7817,o__7819,p__7821,q__7823,r__7825);
}
} else
{var s__7827 = cljs.core._first.call(null,args__7826);
var args__7828 = cljs.core._rest.call(null,args__7826);
if((argc === 19))
{if(f__7801.cljs$lang$arity$19)
{return f__7801.cljs$lang$arity$19(a__7791,b__7793,c__7795,d__7797,e__7799,f__7801,g__7803,h__7805,i__7807,j__7809,k__7811,l__7813,m__7815,n__7817,o__7819,p__7821,q__7823,r__7825,s__7827);
} else
{return f__7801.call(null,a__7791,b__7793,c__7795,d__7797,e__7799,f__7801,g__7803,h__7805,i__7807,j__7809,k__7811,l__7813,m__7815,n__7817,o__7819,p__7821,q__7823,r__7825,s__7827);
}
} else
{var t__7829 = cljs.core._first.call(null,args__7828);
var args__7830 = cljs.core._rest.call(null,args__7828);
if((argc === 20))
{if(f__7801.cljs$lang$arity$20)
{return f__7801.cljs$lang$arity$20(a__7791,b__7793,c__7795,d__7797,e__7799,f__7801,g__7803,h__7805,i__7807,j__7809,k__7811,l__7813,m__7815,n__7817,o__7819,p__7821,q__7823,r__7825,s__7827,t__7829);
} else
{return f__7801.call(null,a__7791,b__7793,c__7795,d__7797,e__7799,f__7801,g__7803,h__7805,i__7807,j__7809,k__7811,l__7813,m__7815,n__7817,o__7819,p__7821,q__7823,r__7825,s__7827,t__7829);
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
var fixed_arity__7845 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7846 = cljs.core.bounded_count.call(null,args,(fixed_arity__7845 + 1));
if((bc__7846 <= fixed_arity__7845))
{return cljs.core.apply_to.call(null,f,bc__7846,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__7847 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__7848 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7849 = cljs.core.bounded_count.call(null,arglist__7847,(fixed_arity__7848 + 1));
if((bc__7849 <= fixed_arity__7848))
{return cljs.core.apply_to.call(null,f,bc__7849,arglist__7847);
} else
{return f.cljs$lang$applyTo(arglist__7847);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7847));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__7850 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__7851 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7852 = cljs.core.bounded_count.call(null,arglist__7850,(fixed_arity__7851 + 1));
if((bc__7852 <= fixed_arity__7851))
{return cljs.core.apply_to.call(null,f,bc__7852,arglist__7850);
} else
{return f.cljs$lang$applyTo(arglist__7850);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7850));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__7853 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__7854 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7855 = cljs.core.bounded_count.call(null,arglist__7853,(fixed_arity__7854 + 1));
if((bc__7855 <= fixed_arity__7854))
{return cljs.core.apply_to.call(null,f,bc__7855,arglist__7853);
} else
{return f.cljs$lang$applyTo(arglist__7853);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7853));
}
});
var apply__6 = (function() { 
var G__7859__delegate = function (f,a,b,c,d,args){
var arglist__7856 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__7857 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7858 = cljs.core.bounded_count.call(null,arglist__7856,(fixed_arity__7857 + 1));
if((bc__7858 <= fixed_arity__7857))
{return cljs.core.apply_to.call(null,f,bc__7858,arglist__7856);
} else
{return f.cljs$lang$applyTo(arglist__7856);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7856));
}
};
var G__7859 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__7859__delegate.call(this, f, a, b, c, d, args);
};
G__7859.cljs$lang$maxFixedArity = 5;
G__7859.cljs$lang$applyTo = (function (arglist__7860){
var f = cljs.core.first(arglist__7860);
var a = cljs.core.first(cljs.core.next(arglist__7860));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7860)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7860))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7860)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7860)))));
return G__7859__delegate(f, a, b, c, d, args);
});
G__7859.cljs$lang$arity$variadic = G__7859__delegate;
return G__7859;
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
vary_meta.cljs$lang$applyTo = (function (arglist__7861){
var obj = cljs.core.first(arglist__7861);
var f = cljs.core.first(cljs.core.next(arglist__7861));
var args = cljs.core.rest(cljs.core.next(arglist__7861));
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
var G__7862__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__7862 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7862__delegate.call(this, x, y, more);
};
G__7862.cljs$lang$maxFixedArity = 2;
G__7862.cljs$lang$applyTo = (function (arglist__7863){
var x = cljs.core.first(arglist__7863);
var y = cljs.core.first(cljs.core.next(arglist__7863));
var more = cljs.core.rest(cljs.core.next(arglist__7863));
return G__7862__delegate(x, y, more);
});
G__7862.cljs$lang$arity$variadic = G__7862__delegate;
return G__7862;
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
var G__7864 = pred;
var G__7865 = cljs.core.next.call(null,coll);
pred = G__7864;
coll = G__7865;
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
{var or__3824__auto____7867 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____7867))
{return or__3824__auto____7867;
} else
{{
var G__7868 = pred;
var G__7869 = cljs.core.next.call(null,coll);
pred = G__7868;
coll = G__7869;
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
var G__7870 = null;
var G__7870__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__7870__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__7870__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__7870__3 = (function() { 
var G__7871__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__7871 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7871__delegate.call(this, x, y, zs);
};
G__7871.cljs$lang$maxFixedArity = 2;
G__7871.cljs$lang$applyTo = (function (arglist__7872){
var x = cljs.core.first(arglist__7872);
var y = cljs.core.first(cljs.core.next(arglist__7872));
var zs = cljs.core.rest(cljs.core.next(arglist__7872));
return G__7871__delegate(x, y, zs);
});
G__7871.cljs$lang$arity$variadic = G__7871__delegate;
return G__7871;
})()
;
G__7870 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__7870__0.call(this);
case 1:
return G__7870__1.call(this,x);
case 2:
return G__7870__2.call(this,x,y);
default:
return G__7870__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__7870.cljs$lang$maxFixedArity = 2;
G__7870.cljs$lang$applyTo = G__7870__3.cljs$lang$applyTo;
return G__7870;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__7873__delegate = function (args){
return x;
};
var G__7873 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7873__delegate.call(this, args);
};
G__7873.cljs$lang$maxFixedArity = 0;
G__7873.cljs$lang$applyTo = (function (arglist__7874){
var args = cljs.core.seq(arglist__7874);;
return G__7873__delegate(args);
});
G__7873.cljs$lang$arity$variadic = G__7873__delegate;
return G__7873;
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
var G__7881 = null;
var G__7881__0 = (function (){
return f.call(null,g.call(null));
});
var G__7881__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__7881__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__7881__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__7881__4 = (function() { 
var G__7882__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__7882 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7882__delegate.call(this, x, y, z, args);
};
G__7882.cljs$lang$maxFixedArity = 3;
G__7882.cljs$lang$applyTo = (function (arglist__7883){
var x = cljs.core.first(arglist__7883);
var y = cljs.core.first(cljs.core.next(arglist__7883));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7883)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7883)));
return G__7882__delegate(x, y, z, args);
});
G__7882.cljs$lang$arity$variadic = G__7882__delegate;
return G__7882;
})()
;
G__7881 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7881__0.call(this);
case 1:
return G__7881__1.call(this,x);
case 2:
return G__7881__2.call(this,x,y);
case 3:
return G__7881__3.call(this,x,y,z);
default:
return G__7881__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7881.cljs$lang$maxFixedArity = 3;
G__7881.cljs$lang$applyTo = G__7881__4.cljs$lang$applyTo;
return G__7881;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__7884 = null;
var G__7884__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__7884__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__7884__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__7884__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__7884__4 = (function() { 
var G__7885__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__7885 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7885__delegate.call(this, x, y, z, args);
};
G__7885.cljs$lang$maxFixedArity = 3;
G__7885.cljs$lang$applyTo = (function (arglist__7886){
var x = cljs.core.first(arglist__7886);
var y = cljs.core.first(cljs.core.next(arglist__7886));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7886)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7886)));
return G__7885__delegate(x, y, z, args);
});
G__7885.cljs$lang$arity$variadic = G__7885__delegate;
return G__7885;
})()
;
G__7884 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7884__0.call(this);
case 1:
return G__7884__1.call(this,x);
case 2:
return G__7884__2.call(this,x,y);
case 3:
return G__7884__3.call(this,x,y,z);
default:
return G__7884__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7884.cljs$lang$maxFixedArity = 3;
G__7884.cljs$lang$applyTo = G__7884__4.cljs$lang$applyTo;
return G__7884;
})()
});
var comp__4 = (function() { 
var G__7887__delegate = function (f1,f2,f3,fs){
var fs__7878 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__7888__delegate = function (args){
var ret__7879 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__7878),args);
var fs__7880 = cljs.core.next.call(null,fs__7878);
while(true){
if(fs__7880)
{{
var G__7889 = cljs.core.first.call(null,fs__7880).call(null,ret__7879);
var G__7890 = cljs.core.next.call(null,fs__7880);
ret__7879 = G__7889;
fs__7880 = G__7890;
continue;
}
} else
{return ret__7879;
}
break;
}
};
var G__7888 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7888__delegate.call(this, args);
};
G__7888.cljs$lang$maxFixedArity = 0;
G__7888.cljs$lang$applyTo = (function (arglist__7891){
var args = cljs.core.seq(arglist__7891);;
return G__7888__delegate(args);
});
G__7888.cljs$lang$arity$variadic = G__7888__delegate;
return G__7888;
})()
;
};
var G__7887 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7887__delegate.call(this, f1, f2, f3, fs);
};
G__7887.cljs$lang$maxFixedArity = 3;
G__7887.cljs$lang$applyTo = (function (arglist__7892){
var f1 = cljs.core.first(arglist__7892);
var f2 = cljs.core.first(cljs.core.next(arglist__7892));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7892)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7892)));
return G__7887__delegate(f1, f2, f3, fs);
});
G__7887.cljs$lang$arity$variadic = G__7887__delegate;
return G__7887;
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
var G__7893__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
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
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__7895__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__7895 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7895__delegate.call(this, args);
};
G__7895.cljs$lang$maxFixedArity = 0;
G__7895.cljs$lang$applyTo = (function (arglist__7896){
var args = cljs.core.seq(arglist__7896);;
return G__7895__delegate(args);
});
G__7895.cljs$lang$arity$variadic = G__7895__delegate;
return G__7895;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__7897__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__7897 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7897__delegate.call(this, args);
};
G__7897.cljs$lang$maxFixedArity = 0;
G__7897.cljs$lang$applyTo = (function (arglist__7898){
var args = cljs.core.seq(arglist__7898);;
return G__7897__delegate(args);
});
G__7897.cljs$lang$arity$variadic = G__7897__delegate;
return G__7897;
})()
;
});
var partial__5 = (function() { 
var G__7899__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__7900__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__7900 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7900__delegate.call(this, args);
};
G__7900.cljs$lang$maxFixedArity = 0;
G__7900.cljs$lang$applyTo = (function (arglist__7901){
var args = cljs.core.seq(arglist__7901);;
return G__7900__delegate(args);
});
G__7900.cljs$lang$arity$variadic = G__7900__delegate;
return G__7900;
})()
;
};
var G__7899 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7899__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__7899.cljs$lang$maxFixedArity = 4;
G__7899.cljs$lang$applyTo = (function (arglist__7902){
var f = cljs.core.first(arglist__7902);
var arg1 = cljs.core.first(cljs.core.next(arglist__7902));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7902)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7902))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7902))));
return G__7899__delegate(f, arg1, arg2, arg3, more);
});
G__7899.cljs$lang$arity$variadic = G__7899__delegate;
return G__7899;
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
var G__7903 = null;
var G__7903__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__7903__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__7903__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__7903__4 = (function() { 
var G__7904__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__7904 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7904__delegate.call(this, a, b, c, ds);
};
G__7904.cljs$lang$maxFixedArity = 3;
G__7904.cljs$lang$applyTo = (function (arglist__7905){
var a = cljs.core.first(arglist__7905);
var b = cljs.core.first(cljs.core.next(arglist__7905));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7905)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7905)));
return G__7904__delegate(a, b, c, ds);
});
G__7904.cljs$lang$arity$variadic = G__7904__delegate;
return G__7904;
})()
;
G__7903 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__7903__1.call(this,a);
case 2:
return G__7903__2.call(this,a,b);
case 3:
return G__7903__3.call(this,a,b,c);
default:
return G__7903__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7903.cljs$lang$maxFixedArity = 3;
G__7903.cljs$lang$applyTo = G__7903__4.cljs$lang$applyTo;
return G__7903;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__7906 = null;
var G__7906__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7906__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__7906__4 = (function() { 
var G__7907__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__7907 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7907__delegate.call(this, a, b, c, ds);
};
G__7907.cljs$lang$maxFixedArity = 3;
G__7907.cljs$lang$applyTo = (function (arglist__7908){
var a = cljs.core.first(arglist__7908);
var b = cljs.core.first(cljs.core.next(arglist__7908));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7908)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7908)));
return G__7907__delegate(a, b, c, ds);
});
G__7907.cljs$lang$arity$variadic = G__7907__delegate;
return G__7907;
})()
;
G__7906 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7906__2.call(this,a,b);
case 3:
return G__7906__3.call(this,a,b,c);
default:
return G__7906__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7906.cljs$lang$maxFixedArity = 3;
G__7906.cljs$lang$applyTo = G__7906__4.cljs$lang$applyTo;
return G__7906;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__7909 = null;
var G__7909__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7909__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__7909__4 = (function() { 
var G__7910__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__7910 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7910__delegate.call(this, a, b, c, ds);
};
G__7910.cljs$lang$maxFixedArity = 3;
G__7910.cljs$lang$applyTo = (function (arglist__7911){
var a = cljs.core.first(arglist__7911);
var b = cljs.core.first(cljs.core.next(arglist__7911));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7911)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7911)));
return G__7910__delegate(a, b, c, ds);
});
G__7910.cljs$lang$arity$variadic = G__7910__delegate;
return G__7910;
})()
;
G__7909 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7909__2.call(this,a,b);
case 3:
return G__7909__3.call(this,a,b,c);
default:
return G__7909__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7909.cljs$lang$maxFixedArity = 3;
G__7909.cljs$lang$applyTo = G__7909__4.cljs$lang$applyTo;
return G__7909;
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
var mapi__7927 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7935 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7935)
{var s__7936 = temp__3974__auto____7935;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7936))
{var c__7937 = cljs.core.chunk_first.call(null,s__7936);
var size__7938 = cljs.core.count.call(null,c__7937);
var b__7939 = cljs.core.chunk_buffer.call(null,size__7938);
var n__2492__auto____7940 = size__7938;
var i__7941 = 0;
while(true){
if((i__7941 < n__2492__auto____7940))
{cljs.core.chunk_append.call(null,b__7939,f.call(null,(idx + i__7941),cljs.core._nth.call(null,c__7937,i__7941)));
{
var G__7942 = (i__7941 + 1);
i__7941 = G__7942;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7939),mapi.call(null,(idx + size__7938),cljs.core.chunk_rest.call(null,s__7936)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__7936)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__7936)));
}
} else
{return null;
}
}),null));
});
return mapi__7927.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7952 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7952)
{var s__7953 = temp__3974__auto____7952;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7953))
{var c__7954 = cljs.core.chunk_first.call(null,s__7953);
var size__7955 = cljs.core.count.call(null,c__7954);
var b__7956 = cljs.core.chunk_buffer.call(null,size__7955);
var n__2492__auto____7957 = size__7955;
var i__7958 = 0;
while(true){
if((i__7958 < n__2492__auto____7957))
{var x__7959 = f.call(null,cljs.core._nth.call(null,c__7954,i__7958));
if((x__7959 == null))
{} else
{cljs.core.chunk_append.call(null,b__7956,x__7959);
}
{
var G__7961 = (i__7958 + 1);
i__7958 = G__7961;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7956),keep.call(null,f,cljs.core.chunk_rest.call(null,s__7953)));
} else
{var x__7960 = f.call(null,cljs.core.first.call(null,s__7953));
if((x__7960 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__7953));
} else
{return cljs.core.cons.call(null,x__7960,keep.call(null,f,cljs.core.rest.call(null,s__7953)));
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
var keepi__7987 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7997 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7997)
{var s__7998 = temp__3974__auto____7997;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7998))
{var c__7999 = cljs.core.chunk_first.call(null,s__7998);
var size__8000 = cljs.core.count.call(null,c__7999);
var b__8001 = cljs.core.chunk_buffer.call(null,size__8000);
var n__2492__auto____8002 = size__8000;
var i__8003 = 0;
while(true){
if((i__8003 < n__2492__auto____8002))
{var x__8004 = f.call(null,(idx + i__8003),cljs.core._nth.call(null,c__7999,i__8003));
if((x__8004 == null))
{} else
{cljs.core.chunk_append.call(null,b__8001,x__8004);
}
{
var G__8006 = (i__8003 + 1);
i__8003 = G__8006;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8001),keepi.call(null,(idx + size__8000),cljs.core.chunk_rest.call(null,s__7998)));
} else
{var x__8005 = f.call(null,idx,cljs.core.first.call(null,s__7998));
if((x__8005 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__7998));
} else
{return cljs.core.cons.call(null,x__8005,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__7998)));
}
}
} else
{return null;
}
}),null));
});
return keepi__7987.call(null,0,coll);
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8092 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____8092))
{return p.call(null,y);
} else
{return and__3822__auto____8092;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8093 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____8093))
{var and__3822__auto____8094 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____8094))
{return p.call(null,z);
} else
{return and__3822__auto____8094;
}
} else
{return and__3822__auto____8093;
}
})());
});
var ep1__4 = (function() { 
var G__8163__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8095 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8095))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____8095;
}
})());
};
var G__8163 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8163__delegate.call(this, x, y, z, args);
};
G__8163.cljs$lang$maxFixedArity = 3;
G__8163.cljs$lang$applyTo = (function (arglist__8164){
var x = cljs.core.first(arglist__8164);
var y = cljs.core.first(cljs.core.next(arglist__8164));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8164)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8164)));
return G__8163__delegate(x, y, z, args);
});
G__8163.cljs$lang$arity$variadic = G__8163__delegate;
return G__8163;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8107 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8107))
{return p2.call(null,x);
} else
{return and__3822__auto____8107;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8108 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8108))
{var and__3822__auto____8109 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8109))
{var and__3822__auto____8110 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8110))
{return p2.call(null,y);
} else
{return and__3822__auto____8110;
}
} else
{return and__3822__auto____8109;
}
} else
{return and__3822__auto____8108;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8111 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8111))
{var and__3822__auto____8112 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8112))
{var and__3822__auto____8113 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____8113))
{var and__3822__auto____8114 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8114))
{var and__3822__auto____8115 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8115))
{return p2.call(null,z);
} else
{return and__3822__auto____8115;
}
} else
{return and__3822__auto____8114;
}
} else
{return and__3822__auto____8113;
}
} else
{return and__3822__auto____8112;
}
} else
{return and__3822__auto____8111;
}
})());
});
var ep2__4 = (function() { 
var G__8165__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8116 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8116))
{return cljs.core.every_QMARK_.call(null,(function (p1__7962_SHARP_){
var and__3822__auto____8117 = p1.call(null,p1__7962_SHARP_);
if(cljs.core.truth_(and__3822__auto____8117))
{return p2.call(null,p1__7962_SHARP_);
} else
{return and__3822__auto____8117;
}
}),args);
} else
{return and__3822__auto____8116;
}
})());
};
var G__8165 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8165__delegate.call(this, x, y, z, args);
};
G__8165.cljs$lang$maxFixedArity = 3;
G__8165.cljs$lang$applyTo = (function (arglist__8166){
var x = cljs.core.first(arglist__8166);
var y = cljs.core.first(cljs.core.next(arglist__8166));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8166)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8166)));
return G__8165__delegate(x, y, z, args);
});
G__8165.cljs$lang$arity$variadic = G__8165__delegate;
return G__8165;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8136 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8136))
{var and__3822__auto____8137 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8137))
{return p3.call(null,x);
} else
{return and__3822__auto____8137;
}
} else
{return and__3822__auto____8136;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8138 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8138))
{var and__3822__auto____8139 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8139))
{var and__3822__auto____8140 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____8140))
{var and__3822__auto____8141 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8141))
{var and__3822__auto____8142 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8142))
{return p3.call(null,y);
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
} else
{return and__3822__auto____8138;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8143 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8143))
{var and__3822__auto____8144 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8144))
{var and__3822__auto____8145 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____8145))
{var and__3822__auto____8146 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8146))
{var and__3822__auto____8147 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8147))
{var and__3822__auto____8148 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____8148))
{var and__3822__auto____8149 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____8149))
{var and__3822__auto____8150 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____8150))
{return p3.call(null,z);
} else
{return and__3822__auto____8150;
}
} else
{return and__3822__auto____8149;
}
} else
{return and__3822__auto____8148;
}
} else
{return and__3822__auto____8147;
}
} else
{return and__3822__auto____8146;
}
} else
{return and__3822__auto____8145;
}
} else
{return and__3822__auto____8144;
}
} else
{return and__3822__auto____8143;
}
})());
});
var ep3__4 = (function() { 
var G__8167__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8151 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8151))
{return cljs.core.every_QMARK_.call(null,(function (p1__7963_SHARP_){
var and__3822__auto____8152 = p1.call(null,p1__7963_SHARP_);
if(cljs.core.truth_(and__3822__auto____8152))
{var and__3822__auto____8153 = p2.call(null,p1__7963_SHARP_);
if(cljs.core.truth_(and__3822__auto____8153))
{return p3.call(null,p1__7963_SHARP_);
} else
{return and__3822__auto____8153;
}
} else
{return and__3822__auto____8152;
}
}),args);
} else
{return and__3822__auto____8151;
}
})());
};
var G__8167 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8167__delegate.call(this, x, y, z, args);
};
G__8167.cljs$lang$maxFixedArity = 3;
G__8167.cljs$lang$applyTo = (function (arglist__8168){
var x = cljs.core.first(arglist__8168);
var y = cljs.core.first(cljs.core.next(arglist__8168));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8168)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8168)));
return G__8167__delegate(x, y, z, args);
});
G__8167.cljs$lang$arity$variadic = G__8167__delegate;
return G__8167;
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
var G__8169__delegate = function (p1,p2,p3,ps){
var ps__8154 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__7964_SHARP_){
return p1__7964_SHARP_.call(null,x);
}),ps__8154);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__7965_SHARP_){
var and__3822__auto____8159 = p1__7965_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____8159))
{return p1__7965_SHARP_.call(null,y);
} else
{return and__3822__auto____8159;
}
}),ps__8154);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__7966_SHARP_){
var and__3822__auto____8160 = p1__7966_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____8160))
{var and__3822__auto____8161 = p1__7966_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____8161))
{return p1__7966_SHARP_.call(null,z);
} else
{return and__3822__auto____8161;
}
} else
{return and__3822__auto____8160;
}
}),ps__8154);
});
var epn__4 = (function() { 
var G__8170__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8162 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8162))
{return cljs.core.every_QMARK_.call(null,(function (p1__7967_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__7967_SHARP_,args);
}),ps__8154);
} else
{return and__3822__auto____8162;
}
})());
};
var G__8170 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8170__delegate.call(this, x, y, z, args);
};
G__8170.cljs$lang$maxFixedArity = 3;
G__8170.cljs$lang$applyTo = (function (arglist__8171){
var x = cljs.core.first(arglist__8171);
var y = cljs.core.first(cljs.core.next(arglist__8171));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8171)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8171)));
return G__8170__delegate(x, y, z, args);
});
G__8170.cljs$lang$arity$variadic = G__8170__delegate;
return G__8170;
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
var G__8169 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8169__delegate.call(this, p1, p2, p3, ps);
};
G__8169.cljs$lang$maxFixedArity = 3;
G__8169.cljs$lang$applyTo = (function (arglist__8172){
var p1 = cljs.core.first(arglist__8172);
var p2 = cljs.core.first(cljs.core.next(arglist__8172));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8172)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8172)));
return G__8169__delegate(p1, p2, p3, ps);
});
G__8169.cljs$lang$arity$variadic = G__8169__delegate;
return G__8169;
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
var or__3824__auto____8253 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____8253))
{return or__3824__auto____8253;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____8254 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____8254))
{return or__3824__auto____8254;
} else
{var or__3824__auto____8255 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____8255))
{return or__3824__auto____8255;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__8324__delegate = function (x,y,z,args){
var or__3824__auto____8256 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8256))
{return or__3824__auto____8256;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__8324 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8324__delegate.call(this, x, y, z, args);
};
G__8324.cljs$lang$maxFixedArity = 3;
G__8324.cljs$lang$applyTo = (function (arglist__8325){
var x = cljs.core.first(arglist__8325);
var y = cljs.core.first(cljs.core.next(arglist__8325));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8325)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8325)));
return G__8324__delegate(x, y, z, args);
});
G__8324.cljs$lang$arity$variadic = G__8324__delegate;
return G__8324;
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
var or__3824__auto____8268 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8268))
{return or__3824__auto____8268;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____8269 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8269))
{return or__3824__auto____8269;
} else
{var or__3824__auto____8270 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8270))
{return or__3824__auto____8270;
} else
{var or__3824__auto____8271 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8271))
{return or__3824__auto____8271;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____8272 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8272))
{return or__3824__auto____8272;
} else
{var or__3824__auto____8273 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8273))
{return or__3824__auto____8273;
} else
{var or__3824__auto____8274 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____8274))
{return or__3824__auto____8274;
} else
{var or__3824__auto____8275 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8275))
{return or__3824__auto____8275;
} else
{var or__3824__auto____8276 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8276))
{return or__3824__auto____8276;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__8326__delegate = function (x,y,z,args){
var or__3824__auto____8277 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8277))
{return or__3824__auto____8277;
} else
{return cljs.core.some.call(null,(function (p1__8007_SHARP_){
var or__3824__auto____8278 = p1.call(null,p1__8007_SHARP_);
if(cljs.core.truth_(or__3824__auto____8278))
{return or__3824__auto____8278;
} else
{return p2.call(null,p1__8007_SHARP_);
}
}),args);
}
};
var G__8326 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8326__delegate.call(this, x, y, z, args);
};
G__8326.cljs$lang$maxFixedArity = 3;
G__8326.cljs$lang$applyTo = (function (arglist__8327){
var x = cljs.core.first(arglist__8327);
var y = cljs.core.first(cljs.core.next(arglist__8327));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8327)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8327)));
return G__8326__delegate(x, y, z, args);
});
G__8326.cljs$lang$arity$variadic = G__8326__delegate;
return G__8326;
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
var or__3824__auto____8297 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8297))
{return or__3824__auto____8297;
} else
{var or__3824__auto____8298 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8298))
{return or__3824__auto____8298;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____8299 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8299))
{return or__3824__auto____8299;
} else
{var or__3824__auto____8300 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8300))
{return or__3824__auto____8300;
} else
{var or__3824__auto____8301 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____8301))
{return or__3824__auto____8301;
} else
{var or__3824__auto____8302 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8302))
{return or__3824__auto____8302;
} else
{var or__3824__auto____8303 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8303))
{return or__3824__auto____8303;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____8304 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8304))
{return or__3824__auto____8304;
} else
{var or__3824__auto____8305 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8305))
{return or__3824__auto____8305;
} else
{var or__3824__auto____8306 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____8306))
{return or__3824__auto____8306;
} else
{var or__3824__auto____8307 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8307))
{return or__3824__auto____8307;
} else
{var or__3824__auto____8308 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8308))
{return or__3824__auto____8308;
} else
{var or__3824__auto____8309 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____8309))
{return or__3824__auto____8309;
} else
{var or__3824__auto____8310 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____8310))
{return or__3824__auto____8310;
} else
{var or__3824__auto____8311 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____8311))
{return or__3824__auto____8311;
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
var G__8328__delegate = function (x,y,z,args){
var or__3824__auto____8312 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8312))
{return or__3824__auto____8312;
} else
{return cljs.core.some.call(null,(function (p1__8008_SHARP_){
var or__3824__auto____8313 = p1.call(null,p1__8008_SHARP_);
if(cljs.core.truth_(or__3824__auto____8313))
{return or__3824__auto____8313;
} else
{var or__3824__auto____8314 = p2.call(null,p1__8008_SHARP_);
if(cljs.core.truth_(or__3824__auto____8314))
{return or__3824__auto____8314;
} else
{return p3.call(null,p1__8008_SHARP_);
}
}
}),args);
}
};
var G__8328 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8328__delegate.call(this, x, y, z, args);
};
G__8328.cljs$lang$maxFixedArity = 3;
G__8328.cljs$lang$applyTo = (function (arglist__8329){
var x = cljs.core.first(arglist__8329);
var y = cljs.core.first(cljs.core.next(arglist__8329));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8329)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8329)));
return G__8328__delegate(x, y, z, args);
});
G__8328.cljs$lang$arity$variadic = G__8328__delegate;
return G__8328;
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
var G__8330__delegate = function (p1,p2,p3,ps){
var ps__8315 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__8009_SHARP_){
return p1__8009_SHARP_.call(null,x);
}),ps__8315);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__8010_SHARP_){
var or__3824__auto____8320 = p1__8010_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____8320))
{return or__3824__auto____8320;
} else
{return p1__8010_SHARP_.call(null,y);
}
}),ps__8315);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__8011_SHARP_){
var or__3824__auto____8321 = p1__8011_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____8321))
{return or__3824__auto____8321;
} else
{var or__3824__auto____8322 = p1__8011_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____8322))
{return or__3824__auto____8322;
} else
{return p1__8011_SHARP_.call(null,z);
}
}
}),ps__8315);
});
var spn__4 = (function() { 
var G__8331__delegate = function (x,y,z,args){
var or__3824__auto____8323 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8323))
{return or__3824__auto____8323;
} else
{return cljs.core.some.call(null,(function (p1__8012_SHARP_){
return cljs.core.some.call(null,p1__8012_SHARP_,args);
}),ps__8315);
}
};
var G__8331 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8331__delegate.call(this, x, y, z, args);
};
G__8331.cljs$lang$maxFixedArity = 3;
G__8331.cljs$lang$applyTo = (function (arglist__8332){
var x = cljs.core.first(arglist__8332);
var y = cljs.core.first(cljs.core.next(arglist__8332));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8332)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8332)));
return G__8331__delegate(x, y, z, args);
});
G__8331.cljs$lang$arity$variadic = G__8331__delegate;
return G__8331;
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
var G__8330 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8330__delegate.call(this, p1, p2, p3, ps);
};
G__8330.cljs$lang$maxFixedArity = 3;
G__8330.cljs$lang$applyTo = (function (arglist__8333){
var p1 = cljs.core.first(arglist__8333);
var p2 = cljs.core.first(cljs.core.next(arglist__8333));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8333)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8333)));
return G__8330__delegate(p1, p2, p3, ps);
});
G__8330.cljs$lang$arity$variadic = G__8330__delegate;
return G__8330;
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
var temp__3974__auto____8352 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8352)
{var s__8353 = temp__3974__auto____8352;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8353))
{var c__8354 = cljs.core.chunk_first.call(null,s__8353);
var size__8355 = cljs.core.count.call(null,c__8354);
var b__8356 = cljs.core.chunk_buffer.call(null,size__8355);
var n__2492__auto____8357 = size__8355;
var i__8358 = 0;
while(true){
if((i__8358 < n__2492__auto____8357))
{cljs.core.chunk_append.call(null,b__8356,f.call(null,cljs.core._nth.call(null,c__8354,i__8358)));
{
var G__8370 = (i__8358 + 1);
i__8358 = G__8370;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8356),map.call(null,f,cljs.core.chunk_rest.call(null,s__8353)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__8353)),map.call(null,f,cljs.core.rest.call(null,s__8353)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8359 = cljs.core.seq.call(null,c1);
var s2__8360 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____8361 = s1__8359;
if(and__3822__auto____8361)
{return s2__8360;
} else
{return and__3822__auto____8361;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8359),cljs.core.first.call(null,s2__8360)),map.call(null,f,cljs.core.rest.call(null,s1__8359),cljs.core.rest.call(null,s2__8360)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8362 = cljs.core.seq.call(null,c1);
var s2__8363 = cljs.core.seq.call(null,c2);
var s3__8364 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____8365 = s1__8362;
if(and__3822__auto____8365)
{var and__3822__auto____8366 = s2__8363;
if(and__3822__auto____8366)
{return s3__8364;
} else
{return and__3822__auto____8366;
}
} else
{return and__3822__auto____8365;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8362),cljs.core.first.call(null,s2__8363),cljs.core.first.call(null,s3__8364)),map.call(null,f,cljs.core.rest.call(null,s1__8362),cljs.core.rest.call(null,s2__8363),cljs.core.rest.call(null,s3__8364)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__8371__delegate = function (f,c1,c2,c3,colls){
var step__8369 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8368 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8368))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__8368),step.call(null,map.call(null,cljs.core.rest,ss__8368)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__8173_SHARP_){
return cljs.core.apply.call(null,f,p1__8173_SHARP_);
}),step__8369.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__8371 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8371__delegate.call(this, f, c1, c2, c3, colls);
};
G__8371.cljs$lang$maxFixedArity = 4;
G__8371.cljs$lang$applyTo = (function (arglist__8372){
var f = cljs.core.first(arglist__8372);
var c1 = cljs.core.first(cljs.core.next(arglist__8372));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8372)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8372))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8372))));
return G__8371__delegate(f, c1, c2, c3, colls);
});
G__8371.cljs$lang$arity$variadic = G__8371__delegate;
return G__8371;
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
{var temp__3974__auto____8375 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8375)
{var s__8376 = temp__3974__auto____8375;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__8376),take.call(null,(n - 1),cljs.core.rest.call(null,s__8376)));
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
var step__8382 = (function (n,coll){
while(true){
var s__8380 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____8381 = (n > 0);
if(and__3822__auto____8381)
{return s__8380;
} else
{return and__3822__auto____8381;
}
})()))
{{
var G__8383 = (n - 1);
var G__8384 = cljs.core.rest.call(null,s__8380);
n = G__8383;
coll = G__8384;
continue;
}
} else
{return s__8380;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__8382.call(null,n,coll);
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
var s__8387 = cljs.core.seq.call(null,coll);
var lead__8388 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__8388)
{{
var G__8389 = cljs.core.next.call(null,s__8387);
var G__8390 = cljs.core.next.call(null,lead__8388);
s__8387 = G__8389;
lead__8388 = G__8390;
continue;
}
} else
{return s__8387;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__8396 = (function (pred,coll){
while(true){
var s__8394 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____8395 = s__8394;
if(and__3822__auto____8395)
{return pred.call(null,cljs.core.first.call(null,s__8394));
} else
{return and__3822__auto____8395;
}
})()))
{{
var G__8397 = pred;
var G__8398 = cljs.core.rest.call(null,s__8394);
pred = G__8397;
coll = G__8398;
continue;
}
} else
{return s__8394;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__8396.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8401 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8401)
{var s__8402 = temp__3974__auto____8401;
return cljs.core.concat.call(null,s__8402,cycle.call(null,s__8402));
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
var s1__8407 = cljs.core.seq.call(null,c1);
var s2__8408 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____8409 = s1__8407;
if(and__3822__auto____8409)
{return s2__8408;
} else
{return and__3822__auto____8409;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__8407),cljs.core.cons.call(null,cljs.core.first.call(null,s2__8408),interleave.call(null,cljs.core.rest.call(null,s1__8407),cljs.core.rest.call(null,s2__8408))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__8411__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8410 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8410))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__8410),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__8410)));
} else
{return null;
}
}),null));
};
var G__8411 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8411__delegate.call(this, c1, c2, colls);
};
G__8411.cljs$lang$maxFixedArity = 2;
G__8411.cljs$lang$applyTo = (function (arglist__8412){
var c1 = cljs.core.first(arglist__8412);
var c2 = cljs.core.first(cljs.core.next(arglist__8412));
var colls = cljs.core.rest(cljs.core.next(arglist__8412));
return G__8411__delegate(c1, c2, colls);
});
G__8411.cljs$lang$arity$variadic = G__8411__delegate;
return G__8411;
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
var cat__8422 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____8420 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____8420)
{var coll__8421 = temp__3971__auto____8420;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__8421),cat.call(null,cljs.core.rest.call(null,coll__8421),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__8422.call(null,null,colls);
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
var G__8423__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__8423 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8423__delegate.call(this, f, coll, colls);
};
G__8423.cljs$lang$maxFixedArity = 2;
G__8423.cljs$lang$applyTo = (function (arglist__8424){
var f = cljs.core.first(arglist__8424);
var coll = cljs.core.first(cljs.core.next(arglist__8424));
var colls = cljs.core.rest(cljs.core.next(arglist__8424));
return G__8423__delegate(f, coll, colls);
});
G__8423.cljs$lang$arity$variadic = G__8423__delegate;
return G__8423;
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
var temp__3974__auto____8434 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8434)
{var s__8435 = temp__3974__auto____8434;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8435))
{var c__8436 = cljs.core.chunk_first.call(null,s__8435);
var size__8437 = cljs.core.count.call(null,c__8436);
var b__8438 = cljs.core.chunk_buffer.call(null,size__8437);
var n__2492__auto____8439 = size__8437;
var i__8440 = 0;
while(true){
if((i__8440 < n__2492__auto____8439))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__8436,i__8440))))
{cljs.core.chunk_append.call(null,b__8438,cljs.core._nth.call(null,c__8436,i__8440));
} else
{}
{
var G__8443 = (i__8440 + 1);
i__8440 = G__8443;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8438),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__8435)));
} else
{var f__8441 = cljs.core.first.call(null,s__8435);
var r__8442 = cljs.core.rest.call(null,s__8435);
if(cljs.core.truth_(pred.call(null,f__8441)))
{return cljs.core.cons.call(null,f__8441,filter.call(null,pred,r__8442));
} else
{return filter.call(null,pred,r__8442);
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
var walk__8446 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__8446.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__8444_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__8444_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__8450__8451 = to;
if(G__8450__8451)
{if((function (){var or__3824__auto____8452 = (G__8450__8451.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3824__auto____8452)
{return or__3824__auto____8452;
} else
{return G__8450__8451.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__8450__8451.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__8450__8451);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__8450__8451);
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
var G__8453__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__8453 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8453__delegate.call(this, f, c1, c2, c3, colls);
};
G__8453.cljs$lang$maxFixedArity = 4;
G__8453.cljs$lang$applyTo = (function (arglist__8454){
var f = cljs.core.first(arglist__8454);
var c1 = cljs.core.first(cljs.core.next(arglist__8454));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8454)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8454))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8454))));
return G__8453__delegate(f, c1, c2, c3, colls);
});
G__8453.cljs$lang$arity$variadic = G__8453__delegate;
return G__8453;
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
var temp__3974__auto____8461 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8461)
{var s__8462 = temp__3974__auto____8461;
var p__8463 = cljs.core.take.call(null,n,s__8462);
if((n === cljs.core.count.call(null,p__8463)))
{return cljs.core.cons.call(null,p__8463,partition.call(null,n,step,cljs.core.drop.call(null,step,s__8462)));
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
var temp__3974__auto____8464 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8464)
{var s__8465 = temp__3974__auto____8464;
var p__8466 = cljs.core.take.call(null,n,s__8465);
if((n === cljs.core.count.call(null,p__8466)))
{return cljs.core.cons.call(null,p__8466,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__8465)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__8466,pad)));
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
var sentinel__8471 = cljs.core.lookup_sentinel;
var m__8472 = m;
var ks__8473 = cljs.core.seq.call(null,ks);
while(true){
if(ks__8473)
{var m__8474 = cljs.core._lookup.call(null,m__8472,cljs.core.first.call(null,ks__8473),sentinel__8471);
if((sentinel__8471 === m__8474))
{return not_found;
} else
{{
var G__8475 = sentinel__8471;
var G__8476 = m__8474;
var G__8477 = cljs.core.next.call(null,ks__8473);
sentinel__8471 = G__8475;
m__8472 = G__8476;
ks__8473 = G__8477;
continue;
}
}
} else
{return m__8472;
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
cljs.core.assoc_in = (function assoc_in(m,p__8478,v){
var vec__8483__8484 = p__8478;
var k__8485 = cljs.core.nth.call(null,vec__8483__8484,0,null);
var ks__8486 = cljs.core.nthnext.call(null,vec__8483__8484,1);
if(cljs.core.truth_(ks__8486))
{return cljs.core.assoc.call(null,m,k__8485,assoc_in.call(null,cljs.core._lookup.call(null,m,k__8485,null),ks__8486,v));
} else
{return cljs.core.assoc.call(null,m,k__8485,v);
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
var update_in__delegate = function (m,p__8487,f,args){
var vec__8492__8493 = p__8487;
var k__8494 = cljs.core.nth.call(null,vec__8492__8493,0,null);
var ks__8495 = cljs.core.nthnext.call(null,vec__8492__8493,1);
if(cljs.core.truth_(ks__8495))
{return cljs.core.assoc.call(null,m,k__8494,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__8494,null),ks__8495,f,args));
} else
{return cljs.core.assoc.call(null,m,k__8494,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__8494,null),args));
}
};
var update_in = function (m,p__8487,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__8487, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__8496){
var m = cljs.core.first(arglist__8496);
var p__8487 = cljs.core.first(cljs.core.next(arglist__8496));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8496)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8496)));
return update_in__delegate(m, p__8487, f, args);
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
var this__8499 = this;
var h__2153__auto____8500 = this__8499.__hash;
if(!((h__2153__auto____8500 == null)))
{return h__2153__auto____8500;
} else
{var h__2153__auto____8501 = cljs.core.hash_coll.call(null,coll);
this__8499.__hash = h__2153__auto____8501;
return h__2153__auto____8501;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8502 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8503 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8504 = this;
var new_array__8505 = this__8504.array.slice();
(new_array__8505[k] = v);
return (new cljs.core.Vector(this__8504.meta,new_array__8505,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__8536 = null;
var G__8536__2 = (function (this_sym8506,k){
var this__8508 = this;
var this_sym8506__8509 = this;
var coll__8510 = this_sym8506__8509;
return coll__8510.cljs$core$ILookup$_lookup$arity$2(coll__8510,k);
});
var G__8536__3 = (function (this_sym8507,k,not_found){
var this__8508 = this;
var this_sym8507__8511 = this;
var coll__8512 = this_sym8507__8511;
return coll__8512.cljs$core$ILookup$_lookup$arity$3(coll__8512,k,not_found);
});
G__8536 = function(this_sym8507,k,not_found){
switch(arguments.length){
case 2:
return G__8536__2.call(this,this_sym8507,k);
case 3:
return G__8536__3.call(this,this_sym8507,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8536;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym8497,args8498){
var this__8513 = this;
return this_sym8497.call.apply(this_sym8497,[this_sym8497].concat(args8498.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8514 = this;
var new_array__8515 = this__8514.array.slice();
new_array__8515.push(o);
return (new cljs.core.Vector(this__8514.meta,new_array__8515,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__8516 = this;
var this__8517 = this;
return cljs.core.pr_str.call(null,this__8517);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8518 = this;
return cljs.core.ci_reduce.call(null,this__8518.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8519 = this;
return cljs.core.ci_reduce.call(null,this__8519.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8520 = this;
if((this__8520.array.length > 0))
{var vector_seq__8521 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__8520.array.length))
{return cljs.core.cons.call(null,(this__8520.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__8521.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8522 = this;
return this__8522.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8523 = this;
var count__8524 = this__8523.array.length;
if((count__8524 > 0))
{return (this__8523.array[(count__8524 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8525 = this;
if((this__8525.array.length > 0))
{var new_array__8526 = this__8525.array.slice();
new_array__8526.pop();
return (new cljs.core.Vector(this__8525.meta,new_array__8526,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8527 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8528 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8529 = this;
return (new cljs.core.Vector(meta,this__8529.array,this__8529.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8530 = this;
return this__8530.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8531 = this;
if((function (){var and__3822__auto____8532 = (0 <= n);
if(and__3822__auto____8532)
{return (n < this__8531.array.length);
} else
{return and__3822__auto____8532;
}
})())
{return (this__8531.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8533 = this;
if((function (){var and__3822__auto____8534 = (0 <= n);
if(and__3822__auto____8534)
{return (n < this__8533.array.length);
} else
{return and__3822__auto____8534;
}
})())
{return (this__8533.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8535 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8535.meta);
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
var cnt__8538 = pv.cnt;
if((cnt__8538 < 32))
{return 0;
} else
{return (((cnt__8538 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__8544 = level;
var ret__8545 = node;
while(true){
if((ll__8544 === 0))
{return ret__8545;
} else
{var embed__8546 = ret__8545;
var r__8547 = cljs.core.pv_fresh_node.call(null,edit);
var ___8548 = cljs.core.pv_aset.call(null,r__8547,0,embed__8546);
{
var G__8549 = (ll__8544 - 5);
var G__8550 = r__8547;
ll__8544 = G__8549;
ret__8545 = G__8550;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__8556 = cljs.core.pv_clone_node.call(null,parent);
var subidx__8557 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__8556,subidx__8557,tailnode);
return ret__8556;
} else
{var child__8558 = cljs.core.pv_aget.call(null,parent,subidx__8557);
if(!((child__8558 == null)))
{var node_to_insert__8559 = push_tail.call(null,pv,(level - 5),child__8558,tailnode);
cljs.core.pv_aset.call(null,ret__8556,subidx__8557,node_to_insert__8559);
return ret__8556;
} else
{var node_to_insert__8560 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__8556,subidx__8557,node_to_insert__8560);
return ret__8556;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____8564 = (0 <= i);
if(and__3822__auto____8564)
{return (i < pv.cnt);
} else
{return and__3822__auto____8564;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__8565 = pv.root;
var level__8566 = pv.shift;
while(true){
if((level__8566 > 0))
{{
var G__8567 = cljs.core.pv_aget.call(null,node__8565,((i >>> level__8566) & 31));
var G__8568 = (level__8566 - 5);
node__8565 = G__8567;
level__8566 = G__8568;
continue;
}
} else
{return node__8565.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__8571 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__8571,(i & 31),val);
return ret__8571;
} else
{var subidx__8572 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8571,subidx__8572,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8572),i,val));
return ret__8571;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__8578 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8579 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8578));
if((function (){var and__3822__auto____8580 = (new_child__8579 == null);
if(and__3822__auto____8580)
{return (subidx__8578 === 0);
} else
{return and__3822__auto____8580;
}
})())
{return null;
} else
{var ret__8581 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8581,subidx__8578,new_child__8579);
return ret__8581;
}
} else
{if((subidx__8578 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__8582 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8582,subidx__8578,null);
return ret__8582;
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
var this__8585 = this;
return (new cljs.core.TransientVector(this__8585.cnt,this__8585.shift,cljs.core.tv_editable_root.call(null,this__8585.root),cljs.core.tv_editable_tail.call(null,this__8585.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8586 = this;
var h__2153__auto____8587 = this__8586.__hash;
if(!((h__2153__auto____8587 == null)))
{return h__2153__auto____8587;
} else
{var h__2153__auto____8588 = cljs.core.hash_coll.call(null,coll);
this__8586.__hash = h__2153__auto____8588;
return h__2153__auto____8588;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8589 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8590 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8591 = this;
if((function (){var and__3822__auto____8592 = (0 <= k);
if(and__3822__auto____8592)
{return (k < this__8591.cnt);
} else
{return and__3822__auto____8592;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__8593 = this__8591.tail.slice();
(new_tail__8593[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__8591.meta,this__8591.cnt,this__8591.shift,this__8591.root,new_tail__8593,null));
} else
{return (new cljs.core.PersistentVector(this__8591.meta,this__8591.cnt,this__8591.shift,cljs.core.do_assoc.call(null,coll,this__8591.shift,this__8591.root,k,v),this__8591.tail,null));
}
} else
{if((k === this__8591.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__8591.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__8641 = null;
var G__8641__2 = (function (this_sym8594,k){
var this__8596 = this;
var this_sym8594__8597 = this;
var coll__8598 = this_sym8594__8597;
return coll__8598.cljs$core$ILookup$_lookup$arity$2(coll__8598,k);
});
var G__8641__3 = (function (this_sym8595,k,not_found){
var this__8596 = this;
var this_sym8595__8599 = this;
var coll__8600 = this_sym8595__8599;
return coll__8600.cljs$core$ILookup$_lookup$arity$3(coll__8600,k,not_found);
});
G__8641 = function(this_sym8595,k,not_found){
switch(arguments.length){
case 2:
return G__8641__2.call(this,this_sym8595,k);
case 3:
return G__8641__3.call(this,this_sym8595,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8641;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym8583,args8584){
var this__8601 = this;
return this_sym8583.call.apply(this_sym8583,[this_sym8583].concat(args8584.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__8602 = this;
var step_init__8603 = [0,init];
var i__8604 = 0;
while(true){
if((i__8604 < this__8602.cnt))
{var arr__8605 = cljs.core.array_for.call(null,v,i__8604);
var len__8606 = arr__8605.length;
var init__8610 = (function (){var j__8607 = 0;
var init__8608 = (step_init__8603[1]);
while(true){
if((j__8607 < len__8606))
{var init__8609 = f.call(null,init__8608,(j__8607 + i__8604),(arr__8605[j__8607]));
if(cljs.core.reduced_QMARK_.call(null,init__8609))
{return init__8609;
} else
{{
var G__8642 = (j__8607 + 1);
var G__8643 = init__8609;
j__8607 = G__8642;
init__8608 = G__8643;
continue;
}
}
} else
{(step_init__8603[0] = len__8606);
(step_init__8603[1] = init__8608);
return init__8608;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__8610))
{return cljs.core.deref.call(null,init__8610);
} else
{{
var G__8644 = (i__8604 + (step_init__8603[0]));
i__8604 = G__8644;
continue;
}
}
} else
{return (step_init__8603[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8611 = this;
if(((this__8611.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__8612 = this__8611.tail.slice();
new_tail__8612.push(o);
return (new cljs.core.PersistentVector(this__8611.meta,(this__8611.cnt + 1),this__8611.shift,this__8611.root,new_tail__8612,null));
} else
{var root_overflow_QMARK___8613 = ((this__8611.cnt >>> 5) > (1 << this__8611.shift));
var new_shift__8614 = ((root_overflow_QMARK___8613)?(this__8611.shift + 5):this__8611.shift);
var new_root__8616 = ((root_overflow_QMARK___8613)?(function (){var n_r__8615 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__8615,0,this__8611.root);
cljs.core.pv_aset.call(null,n_r__8615,1,cljs.core.new_path.call(null,null,this__8611.shift,(new cljs.core.VectorNode(null,this__8611.tail))));
return n_r__8615;
})():cljs.core.push_tail.call(null,coll,this__8611.shift,this__8611.root,(new cljs.core.VectorNode(null,this__8611.tail))));
return (new cljs.core.PersistentVector(this__8611.meta,(this__8611.cnt + 1),new_shift__8614,new_root__8616,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__8617 = this;
if((this__8617.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__8617.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__8618 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__8619 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__8620 = this;
var this__8621 = this;
return cljs.core.pr_str.call(null,this__8621);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8622 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8623 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8624 = this;
if((this__8624.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8625 = this;
return this__8625.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8626 = this;
if((this__8626.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__8626.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8627 = this;
if((this__8627.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8627.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8627.meta);
} else
{if((1 < (this__8627.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__8627.meta,(this__8627.cnt - 1),this__8627.shift,this__8627.root,this__8627.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__8628 = cljs.core.array_for.call(null,coll,(this__8627.cnt - 2));
var nr__8629 = cljs.core.pop_tail.call(null,coll,this__8627.shift,this__8627.root);
var new_root__8630 = (((nr__8629 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__8629);
var cnt_1__8631 = (this__8627.cnt - 1);
if((function (){var and__3822__auto____8632 = (5 < this__8627.shift);
if(and__3822__auto____8632)
{return (cljs.core.pv_aget.call(null,new_root__8630,1) == null);
} else
{return and__3822__auto____8632;
}
})())
{return (new cljs.core.PersistentVector(this__8627.meta,cnt_1__8631,(this__8627.shift - 5),cljs.core.pv_aget.call(null,new_root__8630,0),new_tail__8628,null));
} else
{return (new cljs.core.PersistentVector(this__8627.meta,cnt_1__8631,this__8627.shift,new_root__8630,new_tail__8628,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8633 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8634 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8635 = this;
return (new cljs.core.PersistentVector(meta,this__8635.cnt,this__8635.shift,this__8635.root,this__8635.tail,this__8635.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8636 = this;
return this__8636.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8637 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8638 = this;
if((function (){var and__3822__auto____8639 = (0 <= n);
if(and__3822__auto____8639)
{return (n < this__8638.cnt);
} else
{return and__3822__auto____8639;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8640 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8640.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__8645 = xs.length;
var xs__8646 = (((no_clone === true))?xs:xs.slice());
if((l__8645 < 32))
{return (new cljs.core.PersistentVector(null,l__8645,5,cljs.core.PersistentVector.EMPTY_NODE,xs__8646,null));
} else
{var node__8647 = xs__8646.slice(0,32);
var v__8648 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__8647,null));
var i__8649 = 32;
var out__8650 = cljs.core._as_transient.call(null,v__8648);
while(true){
if((i__8649 < l__8645))
{{
var G__8651 = (i__8649 + 1);
var G__8652 = cljs.core.conj_BANG_.call(null,out__8650,(xs__8646[i__8649]));
i__8649 = G__8651;
out__8650 = G__8652;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8650);
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
vector.cljs$lang$applyTo = (function (arglist__8653){
var args = cljs.core.seq(arglist__8653);;
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
var this__8654 = this;
if(((this__8654.off + 1) < this__8654.node.length))
{var s__8655 = cljs.core.chunked_seq.call(null,this__8654.vec,this__8654.node,this__8654.i,(this__8654.off + 1));
if((s__8655 == null))
{return null;
} else
{return s__8655;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8656 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8657 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8658 = this;
return (this__8658.node[this__8658.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8659 = this;
if(((this__8659.off + 1) < this__8659.node.length))
{var s__8660 = cljs.core.chunked_seq.call(null,this__8659.vec,this__8659.node,this__8659.i,(this__8659.off + 1));
if((s__8660 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8660;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__8661 = this;
var l__8662 = this__8661.node.length;
var s__8663 = ((((this__8661.i + l__8662) < cljs.core._count.call(null,this__8661.vec)))?cljs.core.chunked_seq.call(null,this__8661.vec,(this__8661.i + l__8662),0):null);
if((s__8663 == null))
{return null;
} else
{return s__8663;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8664 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__8665 = this;
return cljs.core.chunked_seq.call(null,this__8665.vec,this__8665.node,this__8665.i,this__8665.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__8666 = this;
return this__8666.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8667 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8667.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__8668 = this;
return cljs.core.array_chunk.call(null,this__8668.node,this__8668.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__8669 = this;
var l__8670 = this__8669.node.length;
var s__8671 = ((((this__8669.i + l__8670) < cljs.core._count.call(null,this__8669.vec)))?cljs.core.chunked_seq.call(null,this__8669.vec,(this__8669.i + l__8670),0):null);
if((s__8671 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8671;
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
var this__8674 = this;
var h__2153__auto____8675 = this__8674.__hash;
if(!((h__2153__auto____8675 == null)))
{return h__2153__auto____8675;
} else
{var h__2153__auto____8676 = cljs.core.hash_coll.call(null,coll);
this__8674.__hash = h__2153__auto____8676;
return h__2153__auto____8676;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8677 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8678 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__8679 = this;
var v_pos__8680 = (this__8679.start + key);
return (new cljs.core.Subvec(this__8679.meta,cljs.core._assoc.call(null,this__8679.v,v_pos__8680,val),this__8679.start,((this__8679.end > (v_pos__8680 + 1)) ? this__8679.end : (v_pos__8680 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__8706 = null;
var G__8706__2 = (function (this_sym8681,k){
var this__8683 = this;
var this_sym8681__8684 = this;
var coll__8685 = this_sym8681__8684;
return coll__8685.cljs$core$ILookup$_lookup$arity$2(coll__8685,k);
});
var G__8706__3 = (function (this_sym8682,k,not_found){
var this__8683 = this;
var this_sym8682__8686 = this;
var coll__8687 = this_sym8682__8686;
return coll__8687.cljs$core$ILookup$_lookup$arity$3(coll__8687,k,not_found);
});
G__8706 = function(this_sym8682,k,not_found){
switch(arguments.length){
case 2:
return G__8706__2.call(this,this_sym8682,k);
case 3:
return G__8706__3.call(this,this_sym8682,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8706;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym8672,args8673){
var this__8688 = this;
return this_sym8672.call.apply(this_sym8672,[this_sym8672].concat(args8673.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8689 = this;
return (new cljs.core.Subvec(this__8689.meta,cljs.core._assoc_n.call(null,this__8689.v,this__8689.end,o),this__8689.start,(this__8689.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__8690 = this;
var this__8691 = this;
return cljs.core.pr_str.call(null,this__8691);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__8692 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__8693 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8694 = this;
var subvec_seq__8695 = (function subvec_seq(i){
if((i === this__8694.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__8694.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__8695.call(null,this__8694.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8696 = this;
return (this__8696.end - this__8696.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8697 = this;
return cljs.core._nth.call(null,this__8697.v,(this__8697.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8698 = this;
if((this__8698.start === this__8698.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__8698.meta,this__8698.v,this__8698.start,(this__8698.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8699 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8700 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8701 = this;
return (new cljs.core.Subvec(meta,this__8701.v,this__8701.start,this__8701.end,this__8701.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8702 = this;
return this__8702.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8703 = this;
return cljs.core._nth.call(null,this__8703.v,(this__8703.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8704 = this;
return cljs.core._nth.call(null,this__8704.v,(this__8704.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8705 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8705.meta);
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
var ret__8708 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__8708,0,tl.length);
return ret__8708;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__8712 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__8713 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8712,subidx__8713,(((level === 5))?tail_node:(function (){var child__8714 = cljs.core.pv_aget.call(null,ret__8712,subidx__8713);
if(!((child__8714 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__8714,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__8712;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__8719 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__8720 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8721 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__8719,subidx__8720));
if((function (){var and__3822__auto____8722 = (new_child__8721 == null);
if(and__3822__auto____8722)
{return (subidx__8720 === 0);
} else
{return and__3822__auto____8722;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__8719,subidx__8720,new_child__8721);
return node__8719;
}
} else
{if((subidx__8720 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__8719,subidx__8720,null);
return node__8719;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____8727 = (0 <= i);
if(and__3822__auto____8727)
{return (i < tv.cnt);
} else
{return and__3822__auto____8727;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__8728 = tv.root;
var node__8729 = root__8728;
var level__8730 = tv.shift;
while(true){
if((level__8730 > 0))
{{
var G__8731 = cljs.core.tv_ensure_editable.call(null,root__8728.edit,cljs.core.pv_aget.call(null,node__8729,((i >>> level__8730) & 31)));
var G__8732 = (level__8730 - 5);
node__8729 = G__8731;
level__8730 = G__8732;
continue;
}
} else
{return node__8729.arr;
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
var G__8772 = null;
var G__8772__2 = (function (this_sym8735,k){
var this__8737 = this;
var this_sym8735__8738 = this;
var coll__8739 = this_sym8735__8738;
return coll__8739.cljs$core$ILookup$_lookup$arity$2(coll__8739,k);
});
var G__8772__3 = (function (this_sym8736,k,not_found){
var this__8737 = this;
var this_sym8736__8740 = this;
var coll__8741 = this_sym8736__8740;
return coll__8741.cljs$core$ILookup$_lookup$arity$3(coll__8741,k,not_found);
});
G__8772 = function(this_sym8736,k,not_found){
switch(arguments.length){
case 2:
return G__8772__2.call(this,this_sym8736,k);
case 3:
return G__8772__3.call(this,this_sym8736,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8772;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym8733,args8734){
var this__8742 = this;
return this_sym8733.call.apply(this_sym8733,[this_sym8733].concat(args8734.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8743 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8744 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8745 = this;
if(this__8745.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8746 = this;
if((function (){var and__3822__auto____8747 = (0 <= n);
if(and__3822__auto____8747)
{return (n < this__8746.cnt);
} else
{return and__3822__auto____8747;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8748 = this;
if(this__8748.root.edit)
{return this__8748.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__8749 = this;
if(this__8749.root.edit)
{if((function (){var and__3822__auto____8750 = (0 <= n);
if(and__3822__auto____8750)
{return (n < this__8749.cnt);
} else
{return and__3822__auto____8750;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__8749.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__8755 = (function go(level,node){
var node__8753 = cljs.core.tv_ensure_editable.call(null,this__8749.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__8753,(n & 31),val);
return node__8753;
} else
{var subidx__8754 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__8753,subidx__8754,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__8753,subidx__8754)));
return node__8753;
}
}).call(null,this__8749.shift,this__8749.root);
this__8749.root = new_root__8755;
return tcoll;
}
} else
{if((n === this__8749.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__8749.cnt)].join('')));
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
var this__8756 = this;
if(this__8756.root.edit)
{if((this__8756.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8756.cnt))
{this__8756.cnt = 0;
return tcoll;
} else
{if((((this__8756.cnt - 1) & 31) > 0))
{this__8756.cnt = (this__8756.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__8757 = cljs.core.editable_array_for.call(null,tcoll,(this__8756.cnt - 2));
var new_root__8759 = (function (){var nr__8758 = cljs.core.tv_pop_tail.call(null,tcoll,this__8756.shift,this__8756.root);
if(!((nr__8758 == null)))
{return nr__8758;
} else
{return (new cljs.core.VectorNode(this__8756.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____8760 = (5 < this__8756.shift);
if(and__3822__auto____8760)
{return (cljs.core.pv_aget.call(null,new_root__8759,1) == null);
} else
{return and__3822__auto____8760;
}
})())
{var new_root__8761 = cljs.core.tv_ensure_editable.call(null,this__8756.root.edit,cljs.core.pv_aget.call(null,new_root__8759,0));
this__8756.root = new_root__8761;
this__8756.shift = (this__8756.shift - 5);
this__8756.cnt = (this__8756.cnt - 1);
this__8756.tail = new_tail__8757;
return tcoll;
} else
{this__8756.root = new_root__8759;
this__8756.cnt = (this__8756.cnt - 1);
this__8756.tail = new_tail__8757;
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
var this__8762 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8763 = this;
if(this__8763.root.edit)
{if(((this__8763.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__8763.tail[(this__8763.cnt & 31)] = o);
this__8763.cnt = (this__8763.cnt + 1);
return tcoll;
} else
{var tail_node__8764 = (new cljs.core.VectorNode(this__8763.root.edit,this__8763.tail));
var new_tail__8765 = cljs.core.make_array.call(null,32);
(new_tail__8765[0] = o);
this__8763.tail = new_tail__8765;
if(((this__8763.cnt >>> 5) > (1 << this__8763.shift)))
{var new_root_array__8766 = cljs.core.make_array.call(null,32);
var new_shift__8767 = (this__8763.shift + 5);
(new_root_array__8766[0] = this__8763.root);
(new_root_array__8766[1] = cljs.core.new_path.call(null,this__8763.root.edit,this__8763.shift,tail_node__8764));
this__8763.root = (new cljs.core.VectorNode(this__8763.root.edit,new_root_array__8766));
this__8763.shift = new_shift__8767;
this__8763.cnt = (this__8763.cnt + 1);
return tcoll;
} else
{var new_root__8768 = cljs.core.tv_push_tail.call(null,tcoll,this__8763.shift,this__8763.root,tail_node__8764);
this__8763.root = new_root__8768;
this__8763.cnt = (this__8763.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8769 = this;
if(this__8769.root.edit)
{this__8769.root.edit = null;
var len__8770 = (this__8769.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__8771 = cljs.core.make_array.call(null,len__8770);
cljs.core.array_copy.call(null,this__8769.tail,0,trimmed_tail__8771,0,len__8770);
return (new cljs.core.PersistentVector(null,this__8769.cnt,this__8769.shift,this__8769.root,trimmed_tail__8771,null));
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
var this__8773 = this;
var h__2153__auto____8774 = this__8773.__hash;
if(!((h__2153__auto____8774 == null)))
{return h__2153__auto____8774;
} else
{var h__2153__auto____8775 = cljs.core.hash_coll.call(null,coll);
this__8773.__hash = h__2153__auto____8775;
return h__2153__auto____8775;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8776 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__8777 = this;
var this__8778 = this;
return cljs.core.pr_str.call(null,this__8778);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8779 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8780 = this;
return cljs.core._first.call(null,this__8780.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8781 = this;
var temp__3971__auto____8782 = cljs.core.next.call(null,this__8781.front);
if(temp__3971__auto____8782)
{var f1__8783 = temp__3971__auto____8782;
return (new cljs.core.PersistentQueueSeq(this__8781.meta,f1__8783,this__8781.rear,null));
} else
{if((this__8781.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__8781.meta,this__8781.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8784 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8785 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__8785.front,this__8785.rear,this__8785.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8786 = this;
return this__8786.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8787 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8787.meta);
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
var this__8788 = this;
var h__2153__auto____8789 = this__8788.__hash;
if(!((h__2153__auto____8789 == null)))
{return h__2153__auto____8789;
} else
{var h__2153__auto____8790 = cljs.core.hash_coll.call(null,coll);
this__8788.__hash = h__2153__auto____8790;
return h__2153__auto____8790;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8791 = this;
if(cljs.core.truth_(this__8791.front))
{return (new cljs.core.PersistentQueue(this__8791.meta,(this__8791.count + 1),this__8791.front,cljs.core.conj.call(null,(function (){var or__3824__auto____8792 = this__8791.rear;
if(cljs.core.truth_(or__3824__auto____8792))
{return or__3824__auto____8792;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__8791.meta,(this__8791.count + 1),cljs.core.conj.call(null,this__8791.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__8793 = this;
var this__8794 = this;
return cljs.core.pr_str.call(null,this__8794);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8795 = this;
var rear__8796 = cljs.core.seq.call(null,this__8795.rear);
if(cljs.core.truth_((function (){var or__3824__auto____8797 = this__8795.front;
if(cljs.core.truth_(or__3824__auto____8797))
{return or__3824__auto____8797;
} else
{return rear__8796;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__8795.front,cljs.core.seq.call(null,rear__8796),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8798 = this;
return this__8798.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8799 = this;
return cljs.core._first.call(null,this__8799.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8800 = this;
if(cljs.core.truth_(this__8800.front))
{var temp__3971__auto____8801 = cljs.core.next.call(null,this__8800.front);
if(temp__3971__auto____8801)
{var f1__8802 = temp__3971__auto____8801;
return (new cljs.core.PersistentQueue(this__8800.meta,(this__8800.count - 1),f1__8802,this__8800.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__8800.meta,(this__8800.count - 1),cljs.core.seq.call(null,this__8800.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8803 = this;
return cljs.core.first.call(null,this__8803.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8804 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8805 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8806 = this;
return (new cljs.core.PersistentQueue(meta,this__8806.count,this__8806.front,this__8806.rear,this__8806.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8807 = this;
return this__8807.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8808 = this;
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
var this__8809 = this;
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
var len__8812 = array.length;
var i__8813 = 0;
while(true){
if((i__8813 < len__8812))
{if((k === (array[i__8813])))
{return i__8813;
} else
{{
var G__8814 = (i__8813 + incr);
i__8813 = G__8814;
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
var a__8817 = cljs.core.hash.call(null,a);
var b__8818 = cljs.core.hash.call(null,b);
if((a__8817 < b__8818))
{return -1;
} else
{if((a__8817 > b__8818))
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
var ks__8826 = m.keys;
var len__8827 = ks__8826.length;
var so__8828 = m.strobj;
var out__8829 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__8830 = 0;
var out__8831 = cljs.core.transient$.call(null,out__8829);
while(true){
if((i__8830 < len__8827))
{var k__8832 = (ks__8826[i__8830]);
{
var G__8833 = (i__8830 + 1);
var G__8834 = cljs.core.assoc_BANG_.call(null,out__8831,k__8832,(so__8828[k__8832]));
i__8830 = G__8833;
out__8831 = G__8834;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__8831,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__8840 = {};
var l__8841 = ks.length;
var i__8842 = 0;
while(true){
if((i__8842 < l__8841))
{var k__8843 = (ks[i__8842]);
(new_obj__8840[k__8843] = (obj[k__8843]));
{
var G__8844 = (i__8842 + 1);
i__8842 = G__8844;
continue;
}
} else
{}
break;
}
return new_obj__8840;
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
var this__8847 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8848 = this;
var h__2153__auto____8849 = this__8848.__hash;
if(!((h__2153__auto____8849 == null)))
{return h__2153__auto____8849;
} else
{var h__2153__auto____8850 = cljs.core.hash_imap.call(null,coll);
this__8848.__hash = h__2153__auto____8850;
return h__2153__auto____8850;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8851 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8852 = this;
if((function (){var and__3822__auto____8853 = goog.isString(k);
if(and__3822__auto____8853)
{return !((cljs.core.scan_array.call(null,1,k,this__8852.keys) == null));
} else
{return and__3822__auto____8853;
}
})())
{return (this__8852.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8854 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____8855 = (this__8854.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____8855)
{return or__3824__auto____8855;
} else
{return (this__8854.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__8854.keys) == null)))
{var new_strobj__8856 = cljs.core.obj_clone.call(null,this__8854.strobj,this__8854.keys);
(new_strobj__8856[k] = v);
return (new cljs.core.ObjMap(this__8854.meta,this__8854.keys,new_strobj__8856,(this__8854.update_count + 1),null));
} else
{var new_strobj__8857 = cljs.core.obj_clone.call(null,this__8854.strobj,this__8854.keys);
var new_keys__8858 = this__8854.keys.slice();
(new_strobj__8857[k] = v);
new_keys__8858.push(k);
return (new cljs.core.ObjMap(this__8854.meta,new_keys__8858,new_strobj__8857,(this__8854.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8859 = this;
if((function (){var and__3822__auto____8860 = goog.isString(k);
if(and__3822__auto____8860)
{return !((cljs.core.scan_array.call(null,1,k,this__8859.keys) == null));
} else
{return and__3822__auto____8860;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__8882 = null;
var G__8882__2 = (function (this_sym8861,k){
var this__8863 = this;
var this_sym8861__8864 = this;
var coll__8865 = this_sym8861__8864;
return coll__8865.cljs$core$ILookup$_lookup$arity$2(coll__8865,k);
});
var G__8882__3 = (function (this_sym8862,k,not_found){
var this__8863 = this;
var this_sym8862__8866 = this;
var coll__8867 = this_sym8862__8866;
return coll__8867.cljs$core$ILookup$_lookup$arity$3(coll__8867,k,not_found);
});
G__8882 = function(this_sym8862,k,not_found){
switch(arguments.length){
case 2:
return G__8882__2.call(this,this_sym8862,k);
case 3:
return G__8882__3.call(this,this_sym8862,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8882;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym8845,args8846){
var this__8868 = this;
return this_sym8845.call.apply(this_sym8845,[this_sym8845].concat(args8846.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8869 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__8870 = this;
var this__8871 = this;
return cljs.core.pr_str.call(null,this__8871);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8872 = this;
if((this__8872.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__8835_SHARP_){
return cljs.core.vector.call(null,p1__8835_SHARP_,(this__8872.strobj[p1__8835_SHARP_]));
}),this__8872.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8873 = this;
return this__8873.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8874 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8875 = this;
return (new cljs.core.ObjMap(meta,this__8875.keys,this__8875.strobj,this__8875.update_count,this__8875.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8876 = this;
return this__8876.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8877 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__8877.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8878 = this;
if((function (){var and__3822__auto____8879 = goog.isString(k);
if(and__3822__auto____8879)
{return !((cljs.core.scan_array.call(null,1,k,this__8878.keys) == null));
} else
{return and__3822__auto____8879;
}
})())
{var new_keys__8880 = this__8878.keys.slice();
var new_strobj__8881 = cljs.core.obj_clone.call(null,this__8878.strobj,this__8878.keys);
new_keys__8880.splice(cljs.core.scan_array.call(null,1,k,new_keys__8880),1);
cljs.core.js_delete.call(null,new_strobj__8881,k);
return (new cljs.core.ObjMap(this__8878.meta,new_keys__8880,new_strobj__8881,(this__8878.update_count + 1),null));
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
var this__8886 = this;
var h__2153__auto____8887 = this__8886.__hash;
if(!((h__2153__auto____8887 == null)))
{return h__2153__auto____8887;
} else
{var h__2153__auto____8888 = cljs.core.hash_imap.call(null,coll);
this__8886.__hash = h__2153__auto____8888;
return h__2153__auto____8888;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8889 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8890 = this;
var bucket__8891 = (this__8890.hashobj[cljs.core.hash.call(null,k)]);
var i__8892 = (cljs.core.truth_(bucket__8891)?cljs.core.scan_array.call(null,2,k,bucket__8891):null);
if(cljs.core.truth_(i__8892))
{return (bucket__8891[(i__8892 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8893 = this;
var h__8894 = cljs.core.hash.call(null,k);
var bucket__8895 = (this__8893.hashobj[h__8894]);
if(cljs.core.truth_(bucket__8895))
{var new_bucket__8896 = bucket__8895.slice();
var new_hashobj__8897 = goog.object.clone(this__8893.hashobj);
(new_hashobj__8897[h__8894] = new_bucket__8896);
var temp__3971__auto____8898 = cljs.core.scan_array.call(null,2,k,new_bucket__8896);
if(cljs.core.truth_(temp__3971__auto____8898))
{var i__8899 = temp__3971__auto____8898;
(new_bucket__8896[(i__8899 + 1)] = v);
return (new cljs.core.HashMap(this__8893.meta,this__8893.count,new_hashobj__8897,null));
} else
{new_bucket__8896.push(k,v);
return (new cljs.core.HashMap(this__8893.meta,(this__8893.count + 1),new_hashobj__8897,null));
}
} else
{var new_hashobj__8900 = goog.object.clone(this__8893.hashobj);
(new_hashobj__8900[h__8894] = [k,v]);
return (new cljs.core.HashMap(this__8893.meta,(this__8893.count + 1),new_hashobj__8900,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8901 = this;
var bucket__8902 = (this__8901.hashobj[cljs.core.hash.call(null,k)]);
var i__8903 = (cljs.core.truth_(bucket__8902)?cljs.core.scan_array.call(null,2,k,bucket__8902):null);
if(cljs.core.truth_(i__8903))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__8928 = null;
var G__8928__2 = (function (this_sym8904,k){
var this__8906 = this;
var this_sym8904__8907 = this;
var coll__8908 = this_sym8904__8907;
return coll__8908.cljs$core$ILookup$_lookup$arity$2(coll__8908,k);
});
var G__8928__3 = (function (this_sym8905,k,not_found){
var this__8906 = this;
var this_sym8905__8909 = this;
var coll__8910 = this_sym8905__8909;
return coll__8910.cljs$core$ILookup$_lookup$arity$3(coll__8910,k,not_found);
});
G__8928 = function(this_sym8905,k,not_found){
switch(arguments.length){
case 2:
return G__8928__2.call(this,this_sym8905,k);
case 3:
return G__8928__3.call(this,this_sym8905,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8928;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym8884,args8885){
var this__8911 = this;
return this_sym8884.call.apply(this_sym8884,[this_sym8884].concat(args8885.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8912 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__8913 = this;
var this__8914 = this;
return cljs.core.pr_str.call(null,this__8914);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8915 = this;
if((this__8915.count > 0))
{var hashes__8916 = cljs.core.js_keys.call(null,this__8915.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__8883_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__8915.hashobj[p1__8883_SHARP_])));
}),hashes__8916);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8917 = this;
return this__8917.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8918 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8919 = this;
return (new cljs.core.HashMap(meta,this__8919.count,this__8919.hashobj,this__8919.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8920 = this;
return this__8920.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8921 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__8921.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8922 = this;
var h__8923 = cljs.core.hash.call(null,k);
var bucket__8924 = (this__8922.hashobj[h__8923]);
var i__8925 = (cljs.core.truth_(bucket__8924)?cljs.core.scan_array.call(null,2,k,bucket__8924):null);
if(cljs.core.not.call(null,i__8925))
{return coll;
} else
{var new_hashobj__8926 = goog.object.clone(this__8922.hashobj);
if((3 > bucket__8924.length))
{cljs.core.js_delete.call(null,new_hashobj__8926,h__8923);
} else
{var new_bucket__8927 = bucket__8924.slice();
new_bucket__8927.splice(i__8925,2);
(new_hashobj__8926[h__8923] = new_bucket__8927);
}
return (new cljs.core.HashMap(this__8922.meta,(this__8922.count - 1),new_hashobj__8926,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__8929 = ks.length;
var i__8930 = 0;
var out__8931 = cljs.core.HashMap.EMPTY;
while(true){
if((i__8930 < len__8929))
{{
var G__8932 = (i__8930 + 1);
var G__8933 = cljs.core.assoc.call(null,out__8931,(ks[i__8930]),(vs[i__8930]));
i__8930 = G__8932;
out__8931 = G__8933;
continue;
}
} else
{return out__8931;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__8937 = m.arr;
var len__8938 = arr__8937.length;
var i__8939 = 0;
while(true){
if((len__8938 <= i__8939))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__8937[i__8939]),k))
{return i__8939;
} else
{if("\uFDD0'else")
{{
var G__8940 = (i__8939 + 2);
i__8939 = G__8940;
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
var this__8943 = this;
return (new cljs.core.TransientArrayMap({},this__8943.arr.length,this__8943.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8944 = this;
var h__2153__auto____8945 = this__8944.__hash;
if(!((h__2153__auto____8945 == null)))
{return h__2153__auto____8945;
} else
{var h__2153__auto____8946 = cljs.core.hash_imap.call(null,coll);
this__8944.__hash = h__2153__auto____8946;
return h__2153__auto____8946;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8947 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8948 = this;
var idx__8949 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8949 === -1))
{return not_found;
} else
{return (this__8948.arr[(idx__8949 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8950 = this;
var idx__8951 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8951 === -1))
{if((this__8950.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__8950.meta,(this__8950.cnt + 1),(function (){var G__8952__8953 = this__8950.arr.slice();
G__8952__8953.push(k);
G__8952__8953.push(v);
return G__8952__8953;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__8950.arr[(idx__8951 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__8950.meta,this__8950.cnt,(function (){var G__8954__8955 = this__8950.arr.slice();
(G__8954__8955[(idx__8951 + 1)] = v);
return G__8954__8955;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8956 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__8988 = null;
var G__8988__2 = (function (this_sym8957,k){
var this__8959 = this;
var this_sym8957__8960 = this;
var coll__8961 = this_sym8957__8960;
return coll__8961.cljs$core$ILookup$_lookup$arity$2(coll__8961,k);
});
var G__8988__3 = (function (this_sym8958,k,not_found){
var this__8959 = this;
var this_sym8958__8962 = this;
var coll__8963 = this_sym8958__8962;
return coll__8963.cljs$core$ILookup$_lookup$arity$3(coll__8963,k,not_found);
});
G__8988 = function(this_sym8958,k,not_found){
switch(arguments.length){
case 2:
return G__8988__2.call(this,this_sym8958,k);
case 3:
return G__8988__3.call(this,this_sym8958,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8988;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym8941,args8942){
var this__8964 = this;
return this_sym8941.call.apply(this_sym8941,[this_sym8941].concat(args8942.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__8965 = this;
var len__8966 = this__8965.arr.length;
var i__8967 = 0;
var init__8968 = init;
while(true){
if((i__8967 < len__8966))
{var init__8969 = f.call(null,init__8968,(this__8965.arr[i__8967]),(this__8965.arr[(i__8967 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__8969))
{return cljs.core.deref.call(null,init__8969);
} else
{{
var G__8989 = (i__8967 + 2);
var G__8990 = init__8969;
i__8967 = G__8989;
init__8968 = G__8990;
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
var this__8970 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__8971 = this;
var this__8972 = this;
return cljs.core.pr_str.call(null,this__8972);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8973 = this;
if((this__8973.cnt > 0))
{var len__8974 = this__8973.arr.length;
var array_map_seq__8975 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__8974))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__8973.arr[i]),(this__8973.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__8975.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8976 = this;
return this__8976.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8977 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8978 = this;
return (new cljs.core.PersistentArrayMap(meta,this__8978.cnt,this__8978.arr,this__8978.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8979 = this;
return this__8979.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8980 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8980.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8981 = this;
var idx__8982 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8982 >= 0))
{var len__8983 = this__8981.arr.length;
var new_len__8984 = (len__8983 - 2);
if((new_len__8984 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__8985 = cljs.core.make_array.call(null,new_len__8984);
var s__8986 = 0;
var d__8987 = 0;
while(true){
if((s__8986 >= len__8983))
{return (new cljs.core.PersistentArrayMap(this__8981.meta,(this__8981.cnt - 1),new_arr__8985,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__8981.arr[s__8986])))
{{
var G__8991 = (s__8986 + 2);
var G__8992 = d__8987;
s__8986 = G__8991;
d__8987 = G__8992;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__8985[d__8987] = (this__8981.arr[s__8986]));
(new_arr__8985[(d__8987 + 1)] = (this__8981.arr[(s__8986 + 1)]));
{
var G__8993 = (s__8986 + 2);
var G__8994 = (d__8987 + 2);
s__8986 = G__8993;
d__8987 = G__8994;
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
var len__8995 = cljs.core.count.call(null,ks);
var i__8996 = 0;
var out__8997 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__8996 < len__8995))
{{
var G__8998 = (i__8996 + 1);
var G__8999 = cljs.core.assoc_BANG_.call(null,out__8997,(ks[i__8996]),(vs[i__8996]));
i__8996 = G__8998;
out__8997 = G__8999;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8997);
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
var this__9000 = this;
if(cljs.core.truth_(this__9000.editable_QMARK_))
{var idx__9001 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__9001 >= 0))
{(this__9000.arr[idx__9001] = (this__9000.arr[(this__9000.len - 2)]));
(this__9000.arr[(idx__9001 + 1)] = (this__9000.arr[(this__9000.len - 1)]));
var G__9002__9003 = this__9000.arr;
G__9002__9003.pop();
G__9002__9003.pop();
G__9002__9003;
this__9000.len = (this__9000.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9004 = this;
if(cljs.core.truth_(this__9004.editable_QMARK_))
{var idx__9005 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__9005 === -1))
{if(((this__9004.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__9004.len = (this__9004.len + 2);
this__9004.arr.push(key);
this__9004.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__9004.len,this__9004.arr),key,val);
}
} else
{if((val === (this__9004.arr[(idx__9005 + 1)])))
{return tcoll;
} else
{(this__9004.arr[(idx__9005 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9006 = this;
if(cljs.core.truth_(this__9006.editable_QMARK_))
{if((function (){var G__9007__9008 = o;
if(G__9007__9008)
{if((function (){var or__3824__auto____9009 = (G__9007__9008.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____9009)
{return or__3824__auto____9009;
} else
{return G__9007__9008.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__9007__9008.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9007__9008);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9007__9008);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__9010 = cljs.core.seq.call(null,o);
var tcoll__9011 = tcoll;
while(true){
var temp__3971__auto____9012 = cljs.core.first.call(null,es__9010);
if(cljs.core.truth_(temp__3971__auto____9012))
{var e__9013 = temp__3971__auto____9012;
{
var G__9019 = cljs.core.next.call(null,es__9010);
var G__9020 = tcoll__9011.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__9011,cljs.core.key.call(null,e__9013),cljs.core.val.call(null,e__9013));
es__9010 = G__9019;
tcoll__9011 = G__9020;
continue;
}
} else
{return tcoll__9011;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9014 = this;
if(cljs.core.truth_(this__9014.editable_QMARK_))
{this__9014.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__9014.len,2),this__9014.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__9015 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__9016 = this;
if(cljs.core.truth_(this__9016.editable_QMARK_))
{var idx__9017 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__9017 === -1))
{return not_found;
} else
{return (this__9016.arr[(idx__9017 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9018 = this;
if(cljs.core.truth_(this__9018.editable_QMARK_))
{return cljs.core.quot.call(null,this__9018.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
void 0;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__9023 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__9024 = 0;
while(true){
if((i__9024 < len))
{{
var G__9025 = cljs.core.assoc_BANG_.call(null,out__9023,(arr[i__9024]),(arr[(i__9024 + 1)]));
var G__9026 = (i__9024 + 2);
out__9023 = G__9025;
i__9024 = G__9026;
continue;
}
} else
{return out__9023;
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
var G__9031__9032 = arr.slice();
(G__9031__9032[i] = a);
return G__9031__9032;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__9033__9034 = arr.slice();
(G__9033__9034[i] = a);
(G__9033__9034[j] = b);
return G__9033__9034;
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
var new_arr__9036 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__9036,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__9036,(2 * i),(new_arr__9036.length - (2 * i)));
return new_arr__9036;
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
var editable__9039 = inode.ensure_editable(edit);
(editable__9039.arr[i] = a);
return editable__9039;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__9040 = inode.ensure_editable(edit);
(editable__9040.arr[i] = a);
(editable__9040.arr[j] = b);
return editable__9040;
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
var len__9047 = arr.length;
var i__9048 = 0;
var init__9049 = init;
while(true){
if((i__9048 < len__9047))
{var init__9052 = (function (){var k__9050 = (arr[i__9048]);
if(!((k__9050 == null)))
{return f.call(null,init__9049,k__9050,(arr[(i__9048 + 1)]));
} else
{var node__9051 = (arr[(i__9048 + 1)]);
if(!((node__9051 == null)))
{return node__9051.kv_reduce(f,init__9049);
} else
{return init__9049;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__9052))
{return cljs.core.deref.call(null,init__9052);
} else
{{
var G__9053 = (i__9048 + 2);
var G__9054 = init__9052;
i__9048 = G__9053;
init__9049 = G__9054;
continue;
}
}
} else
{return init__9049;
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
var this__9055 = this;
var inode__9056 = this;
if((this__9055.bitmap === bit))
{return null;
} else
{var editable__9057 = inode__9056.ensure_editable(e);
var earr__9058 = editable__9057.arr;
var len__9059 = earr__9058.length;
editable__9057.bitmap = (bit ^ editable__9057.bitmap);
cljs.core.array_copy.call(null,earr__9058,(2 * (i + 1)),earr__9058,(2 * i),(len__9059 - (2 * (i + 1))));
(earr__9058[(len__9059 - 2)] = null);
(earr__9058[(len__9059 - 1)] = null);
return editable__9057;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9060 = this;
var inode__9061 = this;
var bit__9062 = (1 << ((hash >>> shift) & 0x01f));
var idx__9063 = cljs.core.bitmap_indexed_node_index.call(null,this__9060.bitmap,bit__9062);
if(((this__9060.bitmap & bit__9062) === 0))
{var n__9064 = cljs.core.bit_count.call(null,this__9060.bitmap);
if(((2 * n__9064) < this__9060.arr.length))
{var editable__9065 = inode__9061.ensure_editable(edit);
var earr__9066 = editable__9065.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__9066,(2 * idx__9063),earr__9066,(2 * (idx__9063 + 1)),(2 * (n__9064 - idx__9063)));
(earr__9066[(2 * idx__9063)] = key);
(earr__9066[((2 * idx__9063) + 1)] = val);
editable__9065.bitmap = (editable__9065.bitmap | bit__9062);
return editable__9065;
} else
{if((n__9064 >= 16))
{var nodes__9067 = cljs.core.make_array.call(null,32);
var jdx__9068 = ((hash >>> shift) & 0x01f);
(nodes__9067[jdx__9068] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__9069 = 0;
var j__9070 = 0;
while(true){
if((i__9069 < 32))
{if((((this__9060.bitmap >>> i__9069) & 1) === 0))
{{
var G__9123 = (i__9069 + 1);
var G__9124 = j__9070;
i__9069 = G__9123;
j__9070 = G__9124;
continue;
}
} else
{(nodes__9067[i__9069] = ((!(((this__9060.arr[j__9070]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__9060.arr[j__9070])),(this__9060.arr[j__9070]),(this__9060.arr[(j__9070 + 1)]),added_leaf_QMARK_):(this__9060.arr[(j__9070 + 1)])));
{
var G__9125 = (i__9069 + 1);
var G__9126 = (j__9070 + 2);
i__9069 = G__9125;
j__9070 = G__9126;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__9064 + 1),nodes__9067));
} else
{if("\uFDD0'else")
{var new_arr__9071 = cljs.core.make_array.call(null,(2 * (n__9064 + 4)));
cljs.core.array_copy.call(null,this__9060.arr,0,new_arr__9071,0,(2 * idx__9063));
(new_arr__9071[(2 * idx__9063)] = key);
(new_arr__9071[((2 * idx__9063) + 1)] = val);
cljs.core.array_copy.call(null,this__9060.arr,(2 * idx__9063),new_arr__9071,(2 * (idx__9063 + 1)),(2 * (n__9064 - idx__9063)));
added_leaf_QMARK_.val = true;
var editable__9072 = inode__9061.ensure_editable(edit);
editable__9072.arr = new_arr__9071;
editable__9072.bitmap = (editable__9072.bitmap | bit__9062);
return editable__9072;
} else
{return null;
}
}
}
} else
{var key_or_nil__9073 = (this__9060.arr[(2 * idx__9063)]);
var val_or_node__9074 = (this__9060.arr[((2 * idx__9063) + 1)]);
if((key_or_nil__9073 == null))
{var n__9075 = val_or_node__9074.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9075 === val_or_node__9074))
{return inode__9061;
} else
{return cljs.core.edit_and_set.call(null,inode__9061,edit,((2 * idx__9063) + 1),n__9075);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9073))
{if((val === val_or_node__9074))
{return inode__9061;
} else
{return cljs.core.edit_and_set.call(null,inode__9061,edit,((2 * idx__9063) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__9061,edit,(2 * idx__9063),null,((2 * idx__9063) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__9073,val_or_node__9074,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__9076 = this;
var inode__9077 = this;
return cljs.core.create_inode_seq.call(null,this__9076.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9078 = this;
var inode__9079 = this;
var bit__9080 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9078.bitmap & bit__9080) === 0))
{return inode__9079;
} else
{var idx__9081 = cljs.core.bitmap_indexed_node_index.call(null,this__9078.bitmap,bit__9080);
var key_or_nil__9082 = (this__9078.arr[(2 * idx__9081)]);
var val_or_node__9083 = (this__9078.arr[((2 * idx__9081) + 1)]);
if((key_or_nil__9082 == null))
{var n__9084 = val_or_node__9083.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__9084 === val_or_node__9083))
{return inode__9079;
} else
{if(!((n__9084 == null)))
{return cljs.core.edit_and_set.call(null,inode__9079,edit,((2 * idx__9081) + 1),n__9084);
} else
{if((this__9078.bitmap === bit__9080))
{return null;
} else
{if("\uFDD0'else")
{return inode__9079.edit_and_remove_pair(edit,bit__9080,idx__9081);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9082))
{(removed_leaf_QMARK_[0] = true);
return inode__9079.edit_and_remove_pair(edit,bit__9080,idx__9081);
} else
{if("\uFDD0'else")
{return inode__9079;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__9085 = this;
var inode__9086 = this;
if((e === this__9085.edit))
{return inode__9086;
} else
{var n__9087 = cljs.core.bit_count.call(null,this__9085.bitmap);
var new_arr__9088 = cljs.core.make_array.call(null,(((n__9087 < 0))?4:(2 * (n__9087 + 1))));
cljs.core.array_copy.call(null,this__9085.arr,0,new_arr__9088,0,(2 * n__9087));
return (new cljs.core.BitmapIndexedNode(e,this__9085.bitmap,new_arr__9088));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__9089 = this;
var inode__9090 = this;
return cljs.core.inode_kv_reduce.call(null,this__9089.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9091 = this;
var inode__9092 = this;
var bit__9093 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9091.bitmap & bit__9093) === 0))
{return not_found;
} else
{var idx__9094 = cljs.core.bitmap_indexed_node_index.call(null,this__9091.bitmap,bit__9093);
var key_or_nil__9095 = (this__9091.arr[(2 * idx__9094)]);
var val_or_node__9096 = (this__9091.arr[((2 * idx__9094) + 1)]);
if((key_or_nil__9095 == null))
{return val_or_node__9096.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9095))
{return cljs.core.PersistentVector.fromArray([key_or_nil__9095,val_or_node__9096], true);
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
var this__9097 = this;
var inode__9098 = this;
var bit__9099 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9097.bitmap & bit__9099) === 0))
{return inode__9098;
} else
{var idx__9100 = cljs.core.bitmap_indexed_node_index.call(null,this__9097.bitmap,bit__9099);
var key_or_nil__9101 = (this__9097.arr[(2 * idx__9100)]);
var val_or_node__9102 = (this__9097.arr[((2 * idx__9100) + 1)]);
if((key_or_nil__9101 == null))
{var n__9103 = val_or_node__9102.inode_without((shift + 5),hash,key);
if((n__9103 === val_or_node__9102))
{return inode__9098;
} else
{if(!((n__9103 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__9097.bitmap,cljs.core.clone_and_set.call(null,this__9097.arr,((2 * idx__9100) + 1),n__9103)));
} else
{if((this__9097.bitmap === bit__9099))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__9097.bitmap ^ bit__9099),cljs.core.remove_pair.call(null,this__9097.arr,idx__9100)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9101))
{return (new cljs.core.BitmapIndexedNode(null,(this__9097.bitmap ^ bit__9099),cljs.core.remove_pair.call(null,this__9097.arr,idx__9100)));
} else
{if("\uFDD0'else")
{return inode__9098;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9104 = this;
var inode__9105 = this;
var bit__9106 = (1 << ((hash >>> shift) & 0x01f));
var idx__9107 = cljs.core.bitmap_indexed_node_index.call(null,this__9104.bitmap,bit__9106);
if(((this__9104.bitmap & bit__9106) === 0))
{var n__9108 = cljs.core.bit_count.call(null,this__9104.bitmap);
if((n__9108 >= 16))
{var nodes__9109 = cljs.core.make_array.call(null,32);
var jdx__9110 = ((hash >>> shift) & 0x01f);
(nodes__9109[jdx__9110] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__9111 = 0;
var j__9112 = 0;
while(true){
if((i__9111 < 32))
{if((((this__9104.bitmap >>> i__9111) & 1) === 0))
{{
var G__9127 = (i__9111 + 1);
var G__9128 = j__9112;
i__9111 = G__9127;
j__9112 = G__9128;
continue;
}
} else
{(nodes__9109[i__9111] = ((!(((this__9104.arr[j__9112]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__9104.arr[j__9112])),(this__9104.arr[j__9112]),(this__9104.arr[(j__9112 + 1)]),added_leaf_QMARK_):(this__9104.arr[(j__9112 + 1)])));
{
var G__9129 = (i__9111 + 1);
var G__9130 = (j__9112 + 2);
i__9111 = G__9129;
j__9112 = G__9130;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__9108 + 1),nodes__9109));
} else
{var new_arr__9113 = cljs.core.make_array.call(null,(2 * (n__9108 + 1)));
cljs.core.array_copy.call(null,this__9104.arr,0,new_arr__9113,0,(2 * idx__9107));
(new_arr__9113[(2 * idx__9107)] = key);
(new_arr__9113[((2 * idx__9107) + 1)] = val);
cljs.core.array_copy.call(null,this__9104.arr,(2 * idx__9107),new_arr__9113,(2 * (idx__9107 + 1)),(2 * (n__9108 - idx__9107)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__9104.bitmap | bit__9106),new_arr__9113));
}
} else
{var key_or_nil__9114 = (this__9104.arr[(2 * idx__9107)]);
var val_or_node__9115 = (this__9104.arr[((2 * idx__9107) + 1)]);
if((key_or_nil__9114 == null))
{var n__9116 = val_or_node__9115.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9116 === val_or_node__9115))
{return inode__9105;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__9104.bitmap,cljs.core.clone_and_set.call(null,this__9104.arr,((2 * idx__9107) + 1),n__9116)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9114))
{if((val === val_or_node__9115))
{return inode__9105;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__9104.bitmap,cljs.core.clone_and_set.call(null,this__9104.arr,((2 * idx__9107) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__9104.bitmap,cljs.core.clone_and_set.call(null,this__9104.arr,(2 * idx__9107),null,((2 * idx__9107) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__9114,val_or_node__9115,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9117 = this;
var inode__9118 = this;
var bit__9119 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9117.bitmap & bit__9119) === 0))
{return not_found;
} else
{var idx__9120 = cljs.core.bitmap_indexed_node_index.call(null,this__9117.bitmap,bit__9119);
var key_or_nil__9121 = (this__9117.arr[(2 * idx__9120)]);
var val_or_node__9122 = (this__9117.arr[((2 * idx__9120) + 1)]);
if((key_or_nil__9121 == null))
{return val_or_node__9122.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9121))
{return val_or_node__9122;
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
var arr__9138 = array_node.arr;
var len__9139 = (2 * (array_node.cnt - 1));
var new_arr__9140 = cljs.core.make_array.call(null,len__9139);
var i__9141 = 0;
var j__9142 = 1;
var bitmap__9143 = 0;
while(true){
if((i__9141 < len__9139))
{if((function (){var and__3822__auto____9144 = !((i__9141 === idx));
if(and__3822__auto____9144)
{return !(((arr__9138[i__9141]) == null));
} else
{return and__3822__auto____9144;
}
})())
{(new_arr__9140[j__9142] = (arr__9138[i__9141]));
{
var G__9145 = (i__9141 + 1);
var G__9146 = (j__9142 + 2);
var G__9147 = (bitmap__9143 | (1 << i__9141));
i__9141 = G__9145;
j__9142 = G__9146;
bitmap__9143 = G__9147;
continue;
}
} else
{{
var G__9148 = (i__9141 + 1);
var G__9149 = j__9142;
var G__9150 = bitmap__9143;
i__9141 = G__9148;
j__9142 = G__9149;
bitmap__9143 = G__9150;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__9143,new_arr__9140));
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
var this__9151 = this;
var inode__9152 = this;
var idx__9153 = ((hash >>> shift) & 0x01f);
var node__9154 = (this__9151.arr[idx__9153]);
if((node__9154 == null))
{var editable__9155 = cljs.core.edit_and_set.call(null,inode__9152,edit,idx__9153,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__9155.cnt = (editable__9155.cnt + 1);
return editable__9155;
} else
{var n__9156 = node__9154.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9156 === node__9154))
{return inode__9152;
} else
{return cljs.core.edit_and_set.call(null,inode__9152,edit,idx__9153,n__9156);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__9157 = this;
var inode__9158 = this;
return cljs.core.create_array_node_seq.call(null,this__9157.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9159 = this;
var inode__9160 = this;
var idx__9161 = ((hash >>> shift) & 0x01f);
var node__9162 = (this__9159.arr[idx__9161]);
if((node__9162 == null))
{return inode__9160;
} else
{var n__9163 = node__9162.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__9163 === node__9162))
{return inode__9160;
} else
{if((n__9163 == null))
{if((this__9159.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__9160,edit,idx__9161);
} else
{var editable__9164 = cljs.core.edit_and_set.call(null,inode__9160,edit,idx__9161,n__9163);
editable__9164.cnt = (editable__9164.cnt - 1);
return editable__9164;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__9160,edit,idx__9161,n__9163);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__9165 = this;
var inode__9166 = this;
if((e === this__9165.edit))
{return inode__9166;
} else
{return (new cljs.core.ArrayNode(e,this__9165.cnt,this__9165.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__9167 = this;
var inode__9168 = this;
var len__9169 = this__9167.arr.length;
var i__9170 = 0;
var init__9171 = init;
while(true){
if((i__9170 < len__9169))
{var node__9172 = (this__9167.arr[i__9170]);
if(!((node__9172 == null)))
{var init__9173 = node__9172.kv_reduce(f,init__9171);
if(cljs.core.reduced_QMARK_.call(null,init__9173))
{return cljs.core.deref.call(null,init__9173);
} else
{{
var G__9192 = (i__9170 + 1);
var G__9193 = init__9173;
i__9170 = G__9192;
init__9171 = G__9193;
continue;
}
}
} else
{return null;
}
} else
{return init__9171;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9174 = this;
var inode__9175 = this;
var idx__9176 = ((hash >>> shift) & 0x01f);
var node__9177 = (this__9174.arr[idx__9176]);
if(!((node__9177 == null)))
{return node__9177.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__9178 = this;
var inode__9179 = this;
var idx__9180 = ((hash >>> shift) & 0x01f);
var node__9181 = (this__9178.arr[idx__9180]);
if(!((node__9181 == null)))
{var n__9182 = node__9181.inode_without((shift + 5),hash,key);
if((n__9182 === node__9181))
{return inode__9179;
} else
{if((n__9182 == null))
{if((this__9178.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__9179,null,idx__9180);
} else
{return (new cljs.core.ArrayNode(null,(this__9178.cnt - 1),cljs.core.clone_and_set.call(null,this__9178.arr,idx__9180,n__9182)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__9178.cnt,cljs.core.clone_and_set.call(null,this__9178.arr,idx__9180,n__9182)));
} else
{return null;
}
}
}
} else
{return inode__9179;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9183 = this;
var inode__9184 = this;
var idx__9185 = ((hash >>> shift) & 0x01f);
var node__9186 = (this__9183.arr[idx__9185]);
if((node__9186 == null))
{return (new cljs.core.ArrayNode(null,(this__9183.cnt + 1),cljs.core.clone_and_set.call(null,this__9183.arr,idx__9185,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__9187 = node__9186.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9187 === node__9186))
{return inode__9184;
} else
{return (new cljs.core.ArrayNode(null,this__9183.cnt,cljs.core.clone_and_set.call(null,this__9183.arr,idx__9185,n__9187)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9188 = this;
var inode__9189 = this;
var idx__9190 = ((hash >>> shift) & 0x01f);
var node__9191 = (this__9188.arr[idx__9190]);
if(!((node__9191 == null)))
{return node__9191.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__9196 = (2 * cnt);
var i__9197 = 0;
while(true){
if((i__9197 < lim__9196))
{if(cljs.core.key_test.call(null,key,(arr[i__9197])))
{return i__9197;
} else
{{
var G__9198 = (i__9197 + 2);
i__9197 = G__9198;
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
var this__9199 = this;
var inode__9200 = this;
if((hash === this__9199.collision_hash))
{var idx__9201 = cljs.core.hash_collision_node_find_index.call(null,this__9199.arr,this__9199.cnt,key);
if((idx__9201 === -1))
{if((this__9199.arr.length > (2 * this__9199.cnt)))
{var editable__9202 = cljs.core.edit_and_set.call(null,inode__9200,edit,(2 * this__9199.cnt),key,((2 * this__9199.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__9202.cnt = (editable__9202.cnt + 1);
return editable__9202;
} else
{var len__9203 = this__9199.arr.length;
var new_arr__9204 = cljs.core.make_array.call(null,(len__9203 + 2));
cljs.core.array_copy.call(null,this__9199.arr,0,new_arr__9204,0,len__9203);
(new_arr__9204[len__9203] = key);
(new_arr__9204[(len__9203 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__9200.ensure_editable_array(edit,(this__9199.cnt + 1),new_arr__9204);
}
} else
{if(((this__9199.arr[(idx__9201 + 1)]) === val))
{return inode__9200;
} else
{return cljs.core.edit_and_set.call(null,inode__9200,edit,(idx__9201 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__9199.collision_hash >>> shift) & 0x01f)),[null,inode__9200,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__9205 = this;
var inode__9206 = this;
return cljs.core.create_inode_seq.call(null,this__9205.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9207 = this;
var inode__9208 = this;
var idx__9209 = cljs.core.hash_collision_node_find_index.call(null,this__9207.arr,this__9207.cnt,key);
if((idx__9209 === -1))
{return inode__9208;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__9207.cnt === 1))
{return null;
} else
{var editable__9210 = inode__9208.ensure_editable(edit);
var earr__9211 = editable__9210.arr;
(earr__9211[idx__9209] = (earr__9211[((2 * this__9207.cnt) - 2)]));
(earr__9211[(idx__9209 + 1)] = (earr__9211[((2 * this__9207.cnt) - 1)]));
(earr__9211[((2 * this__9207.cnt) - 1)] = null);
(earr__9211[((2 * this__9207.cnt) - 2)] = null);
editable__9210.cnt = (editable__9210.cnt - 1);
return editable__9210;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__9212 = this;
var inode__9213 = this;
if((e === this__9212.edit))
{return inode__9213;
} else
{var new_arr__9214 = cljs.core.make_array.call(null,(2 * (this__9212.cnt + 1)));
cljs.core.array_copy.call(null,this__9212.arr,0,new_arr__9214,0,(2 * this__9212.cnt));
return (new cljs.core.HashCollisionNode(e,this__9212.collision_hash,this__9212.cnt,new_arr__9214));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__9215 = this;
var inode__9216 = this;
return cljs.core.inode_kv_reduce.call(null,this__9215.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9217 = this;
var inode__9218 = this;
var idx__9219 = cljs.core.hash_collision_node_find_index.call(null,this__9217.arr,this__9217.cnt,key);
if((idx__9219 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__9217.arr[idx__9219])))
{return cljs.core.PersistentVector.fromArray([(this__9217.arr[idx__9219]),(this__9217.arr[(idx__9219 + 1)])], true);
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
var this__9220 = this;
var inode__9221 = this;
var idx__9222 = cljs.core.hash_collision_node_find_index.call(null,this__9220.arr,this__9220.cnt,key);
if((idx__9222 === -1))
{return inode__9221;
} else
{if((this__9220.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__9220.collision_hash,(this__9220.cnt - 1),cljs.core.remove_pair.call(null,this__9220.arr,cljs.core.quot.call(null,idx__9222,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9223 = this;
var inode__9224 = this;
if((hash === this__9223.collision_hash))
{var idx__9225 = cljs.core.hash_collision_node_find_index.call(null,this__9223.arr,this__9223.cnt,key);
if((idx__9225 === -1))
{var len__9226 = this__9223.arr.length;
var new_arr__9227 = cljs.core.make_array.call(null,(len__9226 + 2));
cljs.core.array_copy.call(null,this__9223.arr,0,new_arr__9227,0,len__9226);
(new_arr__9227[len__9226] = key);
(new_arr__9227[(len__9226 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__9223.collision_hash,(this__9223.cnt + 1),new_arr__9227));
} else
{if(cljs.core._EQ_.call(null,(this__9223.arr[idx__9225]),val))
{return inode__9224;
} else
{return (new cljs.core.HashCollisionNode(null,this__9223.collision_hash,this__9223.cnt,cljs.core.clone_and_set.call(null,this__9223.arr,(idx__9225 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__9223.collision_hash >>> shift) & 0x01f)),[null,inode__9224])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9228 = this;
var inode__9229 = this;
var idx__9230 = cljs.core.hash_collision_node_find_index.call(null,this__9228.arr,this__9228.cnt,key);
if((idx__9230 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__9228.arr[idx__9230])))
{return (this__9228.arr[(idx__9230 + 1)]);
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
var this__9231 = this;
var inode__9232 = this;
if((e === this__9231.edit))
{this__9231.arr = array;
this__9231.cnt = count;
return inode__9232;
} else
{return (new cljs.core.HashCollisionNode(this__9231.edit,this__9231.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__9237 = cljs.core.hash.call(null,key1);
if((key1hash__9237 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__9237,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___9238 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__9237,key1,val1,added_leaf_QMARK___9238).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___9238);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__9239 = cljs.core.hash.call(null,key1);
if((key1hash__9239 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__9239,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___9240 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__9239,key1,val1,added_leaf_QMARK___9240).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___9240);
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
var this__9241 = this;
var h__2153__auto____9242 = this__9241.__hash;
if(!((h__2153__auto____9242 == null)))
{return h__2153__auto____9242;
} else
{var h__2153__auto____9243 = cljs.core.hash_coll.call(null,coll);
this__9241.__hash = h__2153__auto____9243;
return h__2153__auto____9243;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9244 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__9245 = this;
var this__9246 = this;
return cljs.core.pr_str.call(null,this__9246);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9247 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9248 = this;
if((this__9248.s == null))
{return cljs.core.PersistentVector.fromArray([(this__9248.nodes[this__9248.i]),(this__9248.nodes[(this__9248.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__9248.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9249 = this;
if((this__9249.s == null))
{return cljs.core.create_inode_seq.call(null,this__9249.nodes,(this__9249.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__9249.nodes,this__9249.i,cljs.core.next.call(null,this__9249.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9250 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9251 = this;
return (new cljs.core.NodeSeq(meta,this__9251.nodes,this__9251.i,this__9251.s,this__9251.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9252 = this;
return this__9252.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9253 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9253.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__9260 = nodes.length;
var j__9261 = i;
while(true){
if((j__9261 < len__9260))
{if(!(((nodes[j__9261]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__9261,null,null));
} else
{var temp__3971__auto____9262 = (nodes[(j__9261 + 1)]);
if(cljs.core.truth_(temp__3971__auto____9262))
{var node__9263 = temp__3971__auto____9262;
var temp__3971__auto____9264 = node__9263.inode_seq();
if(cljs.core.truth_(temp__3971__auto____9264))
{var node_seq__9265 = temp__3971__auto____9264;
return (new cljs.core.NodeSeq(null,nodes,(j__9261 + 2),node_seq__9265,null));
} else
{{
var G__9266 = (j__9261 + 2);
j__9261 = G__9266;
continue;
}
}
} else
{{
var G__9267 = (j__9261 + 2);
j__9261 = G__9267;
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
var this__9268 = this;
var h__2153__auto____9269 = this__9268.__hash;
if(!((h__2153__auto____9269 == null)))
{return h__2153__auto____9269;
} else
{var h__2153__auto____9270 = cljs.core.hash_coll.call(null,coll);
this__9268.__hash = h__2153__auto____9270;
return h__2153__auto____9270;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9271 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__9272 = this;
var this__9273 = this;
return cljs.core.pr_str.call(null,this__9273);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9274 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9275 = this;
return cljs.core.first.call(null,this__9275.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9276 = this;
return cljs.core.create_array_node_seq.call(null,null,this__9276.nodes,this__9276.i,cljs.core.next.call(null,this__9276.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9277 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9278 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__9278.nodes,this__9278.i,this__9278.s,this__9278.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9279 = this;
return this__9279.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9280 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9280.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__9287 = nodes.length;
var j__9288 = i;
while(true){
if((j__9288 < len__9287))
{var temp__3971__auto____9289 = (nodes[j__9288]);
if(cljs.core.truth_(temp__3971__auto____9289))
{var nj__9290 = temp__3971__auto____9289;
var temp__3971__auto____9291 = nj__9290.inode_seq();
if(cljs.core.truth_(temp__3971__auto____9291))
{var ns__9292 = temp__3971__auto____9291;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__9288 + 1),ns__9292,null));
} else
{{
var G__9293 = (j__9288 + 1);
j__9288 = G__9293;
continue;
}
}
} else
{{
var G__9294 = (j__9288 + 1);
j__9288 = G__9294;
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
var this__9297 = this;
return (new cljs.core.TransientHashMap({},this__9297.root,this__9297.cnt,this__9297.has_nil_QMARK_,this__9297.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9298 = this;
var h__2153__auto____9299 = this__9298.__hash;
if(!((h__2153__auto____9299 == null)))
{return h__2153__auto____9299;
} else
{var h__2153__auto____9300 = cljs.core.hash_imap.call(null,coll);
this__9298.__hash = h__2153__auto____9300;
return h__2153__auto____9300;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9301 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9302 = this;
if((k == null))
{if(this__9302.has_nil_QMARK_)
{return this__9302.nil_val;
} else
{return not_found;
}
} else
{if((this__9302.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__9302.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9303 = this;
if((k == null))
{if((function (){var and__3822__auto____9304 = this__9303.has_nil_QMARK_;
if(and__3822__auto____9304)
{return (v === this__9303.nil_val);
} else
{return and__3822__auto____9304;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9303.meta,((this__9303.has_nil_QMARK_)?this__9303.cnt:(this__9303.cnt + 1)),this__9303.root,true,v,null));
}
} else
{var added_leaf_QMARK___9305 = (new cljs.core.Box(false));
var new_root__9306 = (((this__9303.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9303.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___9305);
if((new_root__9306 === this__9303.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9303.meta,((added_leaf_QMARK___9305.val)?(this__9303.cnt + 1):this__9303.cnt),new_root__9306,this__9303.has_nil_QMARK_,this__9303.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9307 = this;
if((k == null))
{return this__9307.has_nil_QMARK_;
} else
{if((this__9307.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__9307.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__9330 = null;
var G__9330__2 = (function (this_sym9308,k){
var this__9310 = this;
var this_sym9308__9311 = this;
var coll__9312 = this_sym9308__9311;
return coll__9312.cljs$core$ILookup$_lookup$arity$2(coll__9312,k);
});
var G__9330__3 = (function (this_sym9309,k,not_found){
var this__9310 = this;
var this_sym9309__9313 = this;
var coll__9314 = this_sym9309__9313;
return coll__9314.cljs$core$ILookup$_lookup$arity$3(coll__9314,k,not_found);
});
G__9330 = function(this_sym9309,k,not_found){
switch(arguments.length){
case 2:
return G__9330__2.call(this,this_sym9309,k);
case 3:
return G__9330__3.call(this,this_sym9309,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9330;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym9295,args9296){
var this__9315 = this;
return this_sym9295.call.apply(this_sym9295,[this_sym9295].concat(args9296.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9316 = this;
var init__9317 = ((this__9316.has_nil_QMARK_)?f.call(null,init,null,this__9316.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__9317))
{return cljs.core.deref.call(null,init__9317);
} else
{if(!((this__9316.root == null)))
{return this__9316.root.kv_reduce(f,init__9317);
} else
{if("\uFDD0'else")
{return init__9317;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9318 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__9319 = this;
var this__9320 = this;
return cljs.core.pr_str.call(null,this__9320);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9321 = this;
if((this__9321.cnt > 0))
{var s__9322 = ((!((this__9321.root == null)))?this__9321.root.inode_seq():null);
if(this__9321.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__9321.nil_val], true),s__9322);
} else
{return s__9322;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9323 = this;
return this__9323.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9324 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9325 = this;
return (new cljs.core.PersistentHashMap(meta,this__9325.cnt,this__9325.root,this__9325.has_nil_QMARK_,this__9325.nil_val,this__9325.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9326 = this;
return this__9326.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9327 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__9327.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9328 = this;
if((k == null))
{if(this__9328.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__9328.meta,(this__9328.cnt - 1),this__9328.root,false,null,null));
} else
{return coll;
}
} else
{if((this__9328.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__9329 = this__9328.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__9329 === this__9328.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9328.meta,(this__9328.cnt - 1),new_root__9329,this__9328.has_nil_QMARK_,this__9328.nil_val,null));
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
var len__9331 = ks.length;
var i__9332 = 0;
var out__9333 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__9332 < len__9331))
{{
var G__9334 = (i__9332 + 1);
var G__9335 = cljs.core.assoc_BANG_.call(null,out__9333,(ks[i__9332]),(vs[i__9332]));
i__9332 = G__9334;
out__9333 = G__9335;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9333);
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
var this__9336 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9337 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__9338 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9339 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__9340 = this;
if((k == null))
{if(this__9340.has_nil_QMARK_)
{return this__9340.nil_val;
} else
{return null;
}
} else
{if((this__9340.root == null))
{return null;
} else
{return this__9340.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__9341 = this;
if((k == null))
{if(this__9341.has_nil_QMARK_)
{return this__9341.nil_val;
} else
{return not_found;
}
} else
{if((this__9341.root == null))
{return not_found;
} else
{return this__9341.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9342 = this;
if(this__9342.edit)
{return this__9342.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__9343 = this;
var tcoll__9344 = this;
if(this__9343.edit)
{if((function (){var G__9345__9346 = o;
if(G__9345__9346)
{if((function (){var or__3824__auto____9347 = (G__9345__9346.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____9347)
{return or__3824__auto____9347;
} else
{return G__9345__9346.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__9345__9346.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9345__9346);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9345__9346);
}
})())
{return tcoll__9344.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__9348 = cljs.core.seq.call(null,o);
var tcoll__9349 = tcoll__9344;
while(true){
var temp__3971__auto____9350 = cljs.core.first.call(null,es__9348);
if(cljs.core.truth_(temp__3971__auto____9350))
{var e__9351 = temp__3971__auto____9350;
{
var G__9362 = cljs.core.next.call(null,es__9348);
var G__9363 = tcoll__9349.assoc_BANG_(cljs.core.key.call(null,e__9351),cljs.core.val.call(null,e__9351));
es__9348 = G__9362;
tcoll__9349 = G__9363;
continue;
}
} else
{return tcoll__9349;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__9352 = this;
var tcoll__9353 = this;
if(this__9352.edit)
{if((k == null))
{if((this__9352.nil_val === v))
{} else
{this__9352.nil_val = v;
}
if(this__9352.has_nil_QMARK_)
{} else
{this__9352.count = (this__9352.count + 1);
this__9352.has_nil_QMARK_ = true;
}
return tcoll__9353;
} else
{var added_leaf_QMARK___9354 = (new cljs.core.Box(false));
var node__9355 = (((this__9352.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9352.root).inode_assoc_BANG_(this__9352.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___9354);
if((node__9355 === this__9352.root))
{} else
{this__9352.root = node__9355;
}
if(added_leaf_QMARK___9354.val)
{this__9352.count = (this__9352.count + 1);
} else
{}
return tcoll__9353;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__9356 = this;
var tcoll__9357 = this;
if(this__9356.edit)
{if((k == null))
{if(this__9356.has_nil_QMARK_)
{this__9356.has_nil_QMARK_ = false;
this__9356.nil_val = null;
this__9356.count = (this__9356.count - 1);
return tcoll__9357;
} else
{return tcoll__9357;
}
} else
{if((this__9356.root == null))
{return tcoll__9357;
} else
{var removed_leaf_QMARK___9358 = (new cljs.core.Box(false));
var node__9359 = this__9356.root.inode_without_BANG_(this__9356.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___9358);
if((node__9359 === this__9356.root))
{} else
{this__9356.root = node__9359;
}
if(cljs.core.truth_((removed_leaf_QMARK___9358[0])))
{this__9356.count = (this__9356.count - 1);
} else
{}
return tcoll__9357;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__9360 = this;
var tcoll__9361 = this;
if(this__9360.edit)
{this__9360.edit = null;
return (new cljs.core.PersistentHashMap(null,this__9360.count,this__9360.root,this__9360.has_nil_QMARK_,this__9360.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__9366 = node;
var stack__9367 = stack;
while(true){
if(!((t__9366 == null)))
{{
var G__9368 = ((ascending_QMARK_)?t__9366.left:t__9366.right);
var G__9369 = cljs.core.conj.call(null,stack__9367,t__9366);
t__9366 = G__9368;
stack__9367 = G__9369;
continue;
}
} else
{return stack__9367;
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
var this__9370 = this;
var h__2153__auto____9371 = this__9370.__hash;
if(!((h__2153__auto____9371 == null)))
{return h__2153__auto____9371;
} else
{var h__2153__auto____9372 = cljs.core.hash_coll.call(null,coll);
this__9370.__hash = h__2153__auto____9372;
return h__2153__auto____9372;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9373 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__9374 = this;
var this__9375 = this;
return cljs.core.pr_str.call(null,this__9375);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9376 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9377 = this;
if((this__9377.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__9377.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__9378 = this;
return cljs.core.peek.call(null,this__9378.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__9379 = this;
var t__9380 = cljs.core.first.call(null,this__9379.stack);
var next_stack__9381 = cljs.core.tree_map_seq_push.call(null,((this__9379.ascending_QMARK_)?t__9380.right:t__9380.left),cljs.core.next.call(null,this__9379.stack),this__9379.ascending_QMARK_);
if(!((next_stack__9381 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__9381,this__9379.ascending_QMARK_,(this__9379.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9382 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9383 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__9383.stack,this__9383.ascending_QMARK_,this__9383.cnt,this__9383.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9384 = this;
return this__9384.meta;
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
{if((function (){var and__3822__auto____9386 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____9386)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____9386;
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
{if((function (){var and__3822__auto____9388 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____9388)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____9388;
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
var init__9392 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__9392))
{return cljs.core.deref.call(null,init__9392);
} else
{var init__9393 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__9392):init__9392);
if(cljs.core.reduced_QMARK_.call(null,init__9393))
{return cljs.core.deref.call(null,init__9393);
} else
{var init__9394 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__9393):init__9393);
if(cljs.core.reduced_QMARK_.call(null,init__9394))
{return cljs.core.deref.call(null,init__9394);
} else
{return init__9394;
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
var this__9397 = this;
var h__2153__auto____9398 = this__9397.__hash;
if(!((h__2153__auto____9398 == null)))
{return h__2153__auto____9398;
} else
{var h__2153__auto____9399 = cljs.core.hash_coll.call(null,coll);
this__9397.__hash = h__2153__auto____9399;
return h__2153__auto____9399;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9400 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9401 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9402 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__9402.key,this__9402.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__9450 = null;
var G__9450__2 = (function (this_sym9403,k){
var this__9405 = this;
var this_sym9403__9406 = this;
var node__9407 = this_sym9403__9406;
return node__9407.cljs$core$ILookup$_lookup$arity$2(node__9407,k);
});
var G__9450__3 = (function (this_sym9404,k,not_found){
var this__9405 = this;
var this_sym9404__9408 = this;
var node__9409 = this_sym9404__9408;
return node__9409.cljs$core$ILookup$_lookup$arity$3(node__9409,k,not_found);
});
G__9450 = function(this_sym9404,k,not_found){
switch(arguments.length){
case 2:
return G__9450__2.call(this,this_sym9404,k);
case 3:
return G__9450__3.call(this,this_sym9404,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9450;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym9395,args9396){
var this__9410 = this;
return this_sym9395.call.apply(this_sym9395,[this_sym9395].concat(args9396.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9411 = this;
return cljs.core.PersistentVector.fromArray([this__9411.key,this__9411.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9412 = this;
return this__9412.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9413 = this;
return this__9413.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__9414 = this;
var node__9415 = this;
return ins.balance_right(node__9415);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__9416 = this;
var node__9417 = this;
return (new cljs.core.RedNode(this__9416.key,this__9416.val,this__9416.left,this__9416.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__9418 = this;
var node__9419 = this;
return cljs.core.balance_right_del.call(null,this__9418.key,this__9418.val,this__9418.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__9420 = this;
var node__9421 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__9422 = this;
var node__9423 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__9423,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__9424 = this;
var node__9425 = this;
return cljs.core.balance_left_del.call(null,this__9424.key,this__9424.val,del,this__9424.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__9426 = this;
var node__9427 = this;
return ins.balance_left(node__9427);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__9428 = this;
var node__9429 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__9429,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__9451 = null;
var G__9451__0 = (function (){
var this__9430 = this;
var this__9432 = this;
return cljs.core.pr_str.call(null,this__9432);
});
G__9451 = function(){
switch(arguments.length){
case 0:
return G__9451__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9451;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__9433 = this;
var node__9434 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9434,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__9435 = this;
var node__9436 = this;
return node__9436;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9437 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9438 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9439 = this;
return cljs.core.list.call(null,this__9439.key,this__9439.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9440 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9441 = this;
return this__9441.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9442 = this;
return cljs.core.PersistentVector.fromArray([this__9442.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9443 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__9443.key,this__9443.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9444 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9445 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__9445.key,this__9445.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9446 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9447 = this;
if((n === 0))
{return this__9447.key;
} else
{if((n === 1))
{return this__9447.val;
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
var this__9448 = this;
if((n === 0))
{return this__9448.key;
} else
{if((n === 1))
{return this__9448.val;
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
var this__9449 = this;
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
var this__9454 = this;
var h__2153__auto____9455 = this__9454.__hash;
if(!((h__2153__auto____9455 == null)))
{return h__2153__auto____9455;
} else
{var h__2153__auto____9456 = cljs.core.hash_coll.call(null,coll);
this__9454.__hash = h__2153__auto____9456;
return h__2153__auto____9456;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9457 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9458 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9459 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__9459.key,this__9459.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__9507 = null;
var G__9507__2 = (function (this_sym9460,k){
var this__9462 = this;
var this_sym9460__9463 = this;
var node__9464 = this_sym9460__9463;
return node__9464.cljs$core$ILookup$_lookup$arity$2(node__9464,k);
});
var G__9507__3 = (function (this_sym9461,k,not_found){
var this__9462 = this;
var this_sym9461__9465 = this;
var node__9466 = this_sym9461__9465;
return node__9466.cljs$core$ILookup$_lookup$arity$3(node__9466,k,not_found);
});
G__9507 = function(this_sym9461,k,not_found){
switch(arguments.length){
case 2:
return G__9507__2.call(this,this_sym9461,k);
case 3:
return G__9507__3.call(this,this_sym9461,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9507;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym9452,args9453){
var this__9467 = this;
return this_sym9452.call.apply(this_sym9452,[this_sym9452].concat(args9453.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9468 = this;
return cljs.core.PersistentVector.fromArray([this__9468.key,this__9468.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9469 = this;
return this__9469.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9470 = this;
return this__9470.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__9471 = this;
var node__9472 = this;
return (new cljs.core.RedNode(this__9471.key,this__9471.val,this__9471.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__9473 = this;
var node__9474 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__9475 = this;
var node__9476 = this;
return (new cljs.core.RedNode(this__9475.key,this__9475.val,this__9475.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__9477 = this;
var node__9478 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__9479 = this;
var node__9480 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__9480,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__9481 = this;
var node__9482 = this;
return (new cljs.core.RedNode(this__9481.key,this__9481.val,del,this__9481.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__9483 = this;
var node__9484 = this;
return (new cljs.core.RedNode(this__9483.key,this__9483.val,ins,this__9483.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__9485 = this;
var node__9486 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9485.left))
{return (new cljs.core.RedNode(this__9485.key,this__9485.val,this__9485.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__9485.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9485.right))
{return (new cljs.core.RedNode(this__9485.right.key,this__9485.right.val,(new cljs.core.BlackNode(this__9485.key,this__9485.val,this__9485.left,this__9485.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__9485.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__9486,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__9508 = null;
var G__9508__0 = (function (){
var this__9487 = this;
var this__9489 = this;
return cljs.core.pr_str.call(null,this__9489);
});
G__9508 = function(){
switch(arguments.length){
case 0:
return G__9508__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9508;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__9490 = this;
var node__9491 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9490.right))
{return (new cljs.core.RedNode(this__9490.key,this__9490.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9490.left,null)),this__9490.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9490.left))
{return (new cljs.core.RedNode(this__9490.left.key,this__9490.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9490.left.left,null)),(new cljs.core.BlackNode(this__9490.key,this__9490.val,this__9490.left.right,this__9490.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9491,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__9492 = this;
var node__9493 = this;
return (new cljs.core.BlackNode(this__9492.key,this__9492.val,this__9492.left,this__9492.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9494 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9495 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9496 = this;
return cljs.core.list.call(null,this__9496.key,this__9496.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9497 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9498 = this;
return this__9498.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9499 = this;
return cljs.core.PersistentVector.fromArray([this__9499.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9500 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__9500.key,this__9500.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9501 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9502 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__9502.key,this__9502.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9503 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9504 = this;
if((n === 0))
{return this__9504.key;
} else
{if((n === 1))
{return this__9504.val;
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
var this__9505 = this;
if((n === 0))
{return this__9505.key;
} else
{if((n === 1))
{return this__9505.val;
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
var this__9506 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__9512 = comp.call(null,k,tree.key);
if((c__9512 === 0))
{(found[0] = tree);
return null;
} else
{if((c__9512 < 0))
{var ins__9513 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__9513 == null)))
{return tree.add_left(ins__9513);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__9514 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__9514 == null)))
{return tree.add_right(ins__9514);
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
{var app__9517 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__9517))
{return (new cljs.core.RedNode(app__9517.key,app__9517.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__9517.left,null)),(new cljs.core.RedNode(right.key,right.val,app__9517.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__9517,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__9518 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__9518))
{return (new cljs.core.RedNode(app__9518.key,app__9518.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__9518.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__9518.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__9518,right.right,null)));
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
{var c__9524 = comp.call(null,k,tree.key);
if((c__9524 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__9524 < 0))
{var del__9525 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____9526 = !((del__9525 == null));
if(or__3824__auto____9526)
{return or__3824__auto____9526;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__9525,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__9525,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__9527 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____9528 = !((del__9527 == null));
if(or__3824__auto____9528)
{return or__3824__auto____9528;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__9527);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__9527,null));
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
var tk__9531 = tree.key;
var c__9532 = comp.call(null,k,tk__9531);
if((c__9532 === 0))
{return tree.replace(tk__9531,v,tree.left,tree.right);
} else
{if((c__9532 < 0))
{return tree.replace(tk__9531,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__9531,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
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
var this__9535 = this;
var h__2153__auto____9536 = this__9535.__hash;
if(!((h__2153__auto____9536 == null)))
{return h__2153__auto____9536;
} else
{var h__2153__auto____9537 = cljs.core.hash_imap.call(null,coll);
this__9535.__hash = h__2153__auto____9537;
return h__2153__auto____9537;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9538 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9539 = this;
var n__9540 = coll.entry_at(k);
if(!((n__9540 == null)))
{return n__9540.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9541 = this;
var found__9542 = [null];
var t__9543 = cljs.core.tree_map_add.call(null,this__9541.comp,this__9541.tree,k,v,found__9542);
if((t__9543 == null))
{var found_node__9544 = cljs.core.nth.call(null,found__9542,0);
if(cljs.core._EQ_.call(null,v,found_node__9544.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9541.comp,cljs.core.tree_map_replace.call(null,this__9541.comp,this__9541.tree,k,v),this__9541.cnt,this__9541.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9541.comp,t__9543.blacken(),(this__9541.cnt + 1),this__9541.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9545 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__9579 = null;
var G__9579__2 = (function (this_sym9546,k){
var this__9548 = this;
var this_sym9546__9549 = this;
var coll__9550 = this_sym9546__9549;
return coll__9550.cljs$core$ILookup$_lookup$arity$2(coll__9550,k);
});
var G__9579__3 = (function (this_sym9547,k,not_found){
var this__9548 = this;
var this_sym9547__9551 = this;
var coll__9552 = this_sym9547__9551;
return coll__9552.cljs$core$ILookup$_lookup$arity$3(coll__9552,k,not_found);
});
G__9579 = function(this_sym9547,k,not_found){
switch(arguments.length){
case 2:
return G__9579__2.call(this,this_sym9547,k);
case 3:
return G__9579__3.call(this,this_sym9547,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9579;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym9533,args9534){
var this__9553 = this;
return this_sym9533.call.apply(this_sym9533,[this_sym9533].concat(args9534.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9554 = this;
if(!((this__9554.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__9554.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9555 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9556 = this;
if((this__9556.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9556.tree,false,this__9556.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__9557 = this;
var this__9558 = this;
return cljs.core.pr_str.call(null,this__9558);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__9559 = this;
var coll__9560 = this;
var t__9561 = this__9559.tree;
while(true){
if(!((t__9561 == null)))
{var c__9562 = this__9559.comp.call(null,k,t__9561.key);
if((c__9562 === 0))
{return t__9561;
} else
{if((c__9562 < 0))
{{
var G__9580 = t__9561.left;
t__9561 = G__9580;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__9581 = t__9561.right;
t__9561 = G__9581;
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
var this__9563 = this;
if((this__9563.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9563.tree,ascending_QMARK_,this__9563.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9564 = this;
if((this__9564.cnt > 0))
{var stack__9565 = null;
var t__9566 = this__9564.tree;
while(true){
if(!((t__9566 == null)))
{var c__9567 = this__9564.comp.call(null,k,t__9566.key);
if((c__9567 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__9565,t__9566),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__9567 < 0))
{{
var G__9582 = cljs.core.conj.call(null,stack__9565,t__9566);
var G__9583 = t__9566.left;
stack__9565 = G__9582;
t__9566 = G__9583;
continue;
}
} else
{{
var G__9584 = stack__9565;
var G__9585 = t__9566.right;
stack__9565 = G__9584;
t__9566 = G__9585;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__9567 > 0))
{{
var G__9586 = cljs.core.conj.call(null,stack__9565,t__9566);
var G__9587 = t__9566.right;
stack__9565 = G__9586;
t__9566 = G__9587;
continue;
}
} else
{{
var G__9588 = stack__9565;
var G__9589 = t__9566.left;
stack__9565 = G__9588;
t__9566 = G__9589;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__9565 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__9565,ascending_QMARK_,-1,null));
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
var this__9568 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9569 = this;
return this__9569.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9570 = this;
if((this__9570.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9570.tree,true,this__9570.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9571 = this;
return this__9571.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9572 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9573 = this;
return (new cljs.core.PersistentTreeMap(this__9573.comp,this__9573.tree,this__9573.cnt,meta,this__9573.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9574 = this;
return this__9574.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9575 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__9575.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9576 = this;
var found__9577 = [null];
var t__9578 = cljs.core.tree_map_remove.call(null,this__9576.comp,this__9576.tree,k,found__9577);
if((t__9578 == null))
{if((cljs.core.nth.call(null,found__9577,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9576.comp,null,0,this__9576.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9576.comp,t__9578.blacken(),(this__9576.cnt - 1),this__9576.meta,null));
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
var in__9592 = cljs.core.seq.call(null,keyvals);
var out__9593 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__9592)
{{
var G__9594 = cljs.core.nnext.call(null,in__9592);
var G__9595 = cljs.core.assoc_BANG_.call(null,out__9593,cljs.core.first.call(null,in__9592),cljs.core.second.call(null,in__9592));
in__9592 = G__9594;
out__9593 = G__9595;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9593);
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
hash_map.cljs$lang$applyTo = (function (arglist__9596){
var keyvals = cljs.core.seq(arglist__9596);;
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
array_map.cljs$lang$applyTo = (function (arglist__9597){
var keyvals = cljs.core.seq(arglist__9597);;
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
var in__9600 = cljs.core.seq.call(null,keyvals);
var out__9601 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__9600)
{{
var G__9602 = cljs.core.nnext.call(null,in__9600);
var G__9603 = cljs.core.assoc.call(null,out__9601,cljs.core.first.call(null,in__9600),cljs.core.second.call(null,in__9600));
in__9600 = G__9602;
out__9601 = G__9603;
continue;
}
} else
{return out__9601;
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
sorted_map.cljs$lang$applyTo = (function (arglist__9604){
var keyvals = cljs.core.seq(arglist__9604);;
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
var in__9607 = cljs.core.seq.call(null,keyvals);
var out__9608 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__9607)
{{
var G__9609 = cljs.core.nnext.call(null,in__9607);
var G__9610 = cljs.core.assoc.call(null,out__9608,cljs.core.first.call(null,in__9607),cljs.core.second.call(null,in__9607));
in__9607 = G__9609;
out__9608 = G__9610;
continue;
}
} else
{return out__9608;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__9611){
var comparator = cljs.core.first(arglist__9611);
var keyvals = cljs.core.rest(arglist__9611);
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
{return cljs.core.reduce.call(null,(function (p1__9612_SHARP_,p2__9613_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____9615 = p1__9612_SHARP_;
if(cljs.core.truth_(or__3824__auto____9615))
{return or__3824__auto____9615;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__9613_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__9616){
var maps = cljs.core.seq(arglist__9616);;
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
{var merge_entry__9624 = (function (m,e){
var k__9622 = cljs.core.first.call(null,e);
var v__9623 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__9622))
{return cljs.core.assoc.call(null,m,k__9622,f.call(null,cljs.core._lookup.call(null,m,k__9622,null),v__9623));
} else
{return cljs.core.assoc.call(null,m,k__9622,v__9623);
}
});
var merge2__9626 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__9624,(function (){var or__3824__auto____9625 = m1;
if(cljs.core.truth_(or__3824__auto____9625))
{return or__3824__auto____9625;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__9626,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__9627){
var f = cljs.core.first(arglist__9627);
var maps = cljs.core.rest(arglist__9627);
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
var ret__9632 = cljs.core.ObjMap.EMPTY;
var keys__9633 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__9633)
{var key__9634 = cljs.core.first.call(null,keys__9633);
var entry__9635 = cljs.core._lookup.call(null,map,key__9634,"\uFDD0'user/not-found");
{
var G__9636 = ((cljs.core.not_EQ_.call(null,entry__9635,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__9632,key__9634,entry__9635):ret__9632);
var G__9637 = cljs.core.next.call(null,keys__9633);
ret__9632 = G__9636;
keys__9633 = G__9637;
continue;
}
} else
{return ret__9632;
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
var this__9641 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__9641.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9642 = this;
var h__2153__auto____9643 = this__9642.__hash;
if(!((h__2153__auto____9643 == null)))
{return h__2153__auto____9643;
} else
{var h__2153__auto____9644 = cljs.core.hash_iset.call(null,coll);
this__9642.__hash = h__2153__auto____9644;
return h__2153__auto____9644;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9645 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9646 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9646.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__9667 = null;
var G__9667__2 = (function (this_sym9647,k){
var this__9649 = this;
var this_sym9647__9650 = this;
var coll__9651 = this_sym9647__9650;
return coll__9651.cljs$core$ILookup$_lookup$arity$2(coll__9651,k);
});
var G__9667__3 = (function (this_sym9648,k,not_found){
var this__9649 = this;
var this_sym9648__9652 = this;
var coll__9653 = this_sym9648__9652;
return coll__9653.cljs$core$ILookup$_lookup$arity$3(coll__9653,k,not_found);
});
G__9667 = function(this_sym9648,k,not_found){
switch(arguments.length){
case 2:
return G__9667__2.call(this,this_sym9648,k);
case 3:
return G__9667__3.call(this,this_sym9648,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9667;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym9639,args9640){
var this__9654 = this;
return this_sym9639.call.apply(this_sym9639,[this_sym9639].concat(args9640.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9655 = this;
return (new cljs.core.PersistentHashSet(this__9655.meta,cljs.core.assoc.call(null,this__9655.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__9656 = this;
var this__9657 = this;
return cljs.core.pr_str.call(null,this__9657);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9658 = this;
return cljs.core.keys.call(null,this__9658.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9659 = this;
return (new cljs.core.PersistentHashSet(this__9659.meta,cljs.core.dissoc.call(null,this__9659.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9660 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9661 = this;
var and__3822__auto____9662 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____9662)
{var and__3822__auto____9663 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____9663)
{return cljs.core.every_QMARK_.call(null,(function (p1__9638_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9638_SHARP_);
}),other);
} else
{return and__3822__auto____9663;
}
} else
{return and__3822__auto____9662;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9664 = this;
return (new cljs.core.PersistentHashSet(meta,this__9664.hash_map,this__9664.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9665 = this;
return this__9665.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9666 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__9666.meta);
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
var G__9685 = null;
var G__9685__2 = (function (this_sym9671,k){
var this__9673 = this;
var this_sym9671__9674 = this;
var tcoll__9675 = this_sym9671__9674;
if((cljs.core._lookup.call(null,this__9673.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__9685__3 = (function (this_sym9672,k,not_found){
var this__9673 = this;
var this_sym9672__9676 = this;
var tcoll__9677 = this_sym9672__9676;
if((cljs.core._lookup.call(null,this__9673.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__9685 = function(this_sym9672,k,not_found){
switch(arguments.length){
case 2:
return G__9685__2.call(this,this_sym9672,k);
case 3:
return G__9685__3.call(this,this_sym9672,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9685;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym9669,args9670){
var this__9678 = this;
return this_sym9669.call.apply(this_sym9669,[this_sym9669].concat(args9670.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__9679 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__9680 = this;
if((cljs.core._lookup.call(null,this__9680.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9681 = this;
return cljs.core.count.call(null,this__9681.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__9682 = this;
this__9682.transient_map = cljs.core.dissoc_BANG_.call(null,this__9682.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9683 = this;
this__9683.transient_map = cljs.core.assoc_BANG_.call(null,this__9683.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9684 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__9684.transient_map),null));
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
var this__9688 = this;
var h__2153__auto____9689 = this__9688.__hash;
if(!((h__2153__auto____9689 == null)))
{return h__2153__auto____9689;
} else
{var h__2153__auto____9690 = cljs.core.hash_iset.call(null,coll);
this__9688.__hash = h__2153__auto____9690;
return h__2153__auto____9690;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9691 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9692 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9692.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__9718 = null;
var G__9718__2 = (function (this_sym9693,k){
var this__9695 = this;
var this_sym9693__9696 = this;
var coll__9697 = this_sym9693__9696;
return coll__9697.cljs$core$ILookup$_lookup$arity$2(coll__9697,k);
});
var G__9718__3 = (function (this_sym9694,k,not_found){
var this__9695 = this;
var this_sym9694__9698 = this;
var coll__9699 = this_sym9694__9698;
return coll__9699.cljs$core$ILookup$_lookup$arity$3(coll__9699,k,not_found);
});
G__9718 = function(this_sym9694,k,not_found){
switch(arguments.length){
case 2:
return G__9718__2.call(this,this_sym9694,k);
case 3:
return G__9718__3.call(this,this_sym9694,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9718;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym9686,args9687){
var this__9700 = this;
return this_sym9686.call.apply(this_sym9686,[this_sym9686].concat(args9687.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9701 = this;
return (new cljs.core.PersistentTreeSet(this__9701.meta,cljs.core.assoc.call(null,this__9701.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9702 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__9702.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__9703 = this;
var this__9704 = this;
return cljs.core.pr_str.call(null,this__9704);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__9705 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__9705.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9706 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__9706.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__9707 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9708 = this;
return cljs.core._comparator.call(null,this__9708.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9709 = this;
return cljs.core.keys.call(null,this__9709.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9710 = this;
return (new cljs.core.PersistentTreeSet(this__9710.meta,cljs.core.dissoc.call(null,this__9710.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9711 = this;
return cljs.core.count.call(null,this__9711.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9712 = this;
var and__3822__auto____9713 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____9713)
{var and__3822__auto____9714 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____9714)
{return cljs.core.every_QMARK_.call(null,(function (p1__9668_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9668_SHARP_);
}),other);
} else
{return and__3822__auto____9714;
}
} else
{return and__3822__auto____9713;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9715 = this;
return (new cljs.core.PersistentTreeSet(meta,this__9715.tree_map,this__9715.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9716 = this;
return this__9716.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9717 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__9717.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map.call(null),0));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in__9721 = cljs.core.seq.call(null,coll);
var out__9722 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__9721))
{{
var G__9723 = cljs.core.next.call(null,in__9721);
var G__9724 = cljs.core.conj_BANG_.call(null,out__9722,cljs.core.first.call(null,in__9721));
in__9721 = G__9723;
out__9722 = G__9724;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9722);
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
sorted_set.cljs$lang$applyTo = (function (arglist__9725){
var keys = cljs.core.seq(arglist__9725);;
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__9727){
var comparator = cljs.core.first(arglist__9727);
var keys = cljs.core.rest(arglist__9727);
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
{var n__9733 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____9734 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____9734))
{var e__9735 = temp__3971__auto____9734;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__9735));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__9733,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__9726_SHARP_){
var temp__3971__auto____9736 = cljs.core.find.call(null,smap,p1__9726_SHARP_);
if(cljs.core.truth_(temp__3971__auto____9736))
{var e__9737 = temp__3971__auto____9736;
return cljs.core.second.call(null,e__9737);
} else
{return p1__9726_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__9767 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__9760,seen){
while(true){
var vec__9761__9762 = p__9760;
var f__9763 = cljs.core.nth.call(null,vec__9761__9762,0,null);
var xs__9764 = vec__9761__9762;
var temp__3974__auto____9765 = cljs.core.seq.call(null,xs__9764);
if(temp__3974__auto____9765)
{var s__9766 = temp__3974__auto____9765;
if(cljs.core.contains_QMARK_.call(null,seen,f__9763))
{{
var G__9768 = cljs.core.rest.call(null,s__9766);
var G__9769 = seen;
p__9760 = G__9768;
seen = G__9769;
continue;
}
} else
{return cljs.core.cons.call(null,f__9763,step.call(null,cljs.core.rest.call(null,s__9766),cljs.core.conj.call(null,seen,f__9763)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__9767.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__9772 = cljs.core.PersistentVector.EMPTY;
var s__9773 = s;
while(true){
if(cljs.core.next.call(null,s__9773))
{{
var G__9774 = cljs.core.conj.call(null,ret__9772,cljs.core.first.call(null,s__9773));
var G__9775 = cljs.core.next.call(null,s__9773);
ret__9772 = G__9774;
s__9773 = G__9775;
continue;
}
} else
{return cljs.core.seq.call(null,ret__9772);
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
{if((function (){var or__3824__auto____9778 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9778)
{return or__3824__auto____9778;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9779 = x.lastIndexOf("/");
if((i__9779 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__9779 + 1));
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
if((function (){var or__3824__auto____9782 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9782)
{return or__3824__auto____9782;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9783 = x.lastIndexOf("/");
if((i__9783 > -1))
{return cljs.core.subs.call(null,x,2,i__9783);
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
var map__9790 = cljs.core.ObjMap.EMPTY;
var ks__9791 = cljs.core.seq.call(null,keys);
var vs__9792 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____9793 = ks__9791;
if(and__3822__auto____9793)
{return vs__9792;
} else
{return and__3822__auto____9793;
}
})())
{{
var G__9794 = cljs.core.assoc.call(null,map__9790,cljs.core.first.call(null,ks__9791),cljs.core.first.call(null,vs__9792));
var G__9795 = cljs.core.next.call(null,ks__9791);
var G__9796 = cljs.core.next.call(null,vs__9792);
map__9790 = G__9794;
ks__9791 = G__9795;
vs__9792 = G__9796;
continue;
}
} else
{return map__9790;
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
var G__9799__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9784_SHARP_,p2__9785_SHARP_){
return max_key.call(null,k,p1__9784_SHARP_,p2__9785_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__9799 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9799__delegate.call(this, k, x, y, more);
};
G__9799.cljs$lang$maxFixedArity = 3;
G__9799.cljs$lang$applyTo = (function (arglist__9800){
var k = cljs.core.first(arglist__9800);
var x = cljs.core.first(cljs.core.next(arglist__9800));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9800)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9800)));
return G__9799__delegate(k, x, y, more);
});
G__9799.cljs$lang$arity$variadic = G__9799__delegate;
return G__9799;
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
var G__9801__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9797_SHARP_,p2__9798_SHARP_){
return min_key.call(null,k,p1__9797_SHARP_,p2__9798_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__9801 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9801__delegate.call(this, k, x, y, more);
};
G__9801.cljs$lang$maxFixedArity = 3;
G__9801.cljs$lang$applyTo = (function (arglist__9802){
var k = cljs.core.first(arglist__9802);
var x = cljs.core.first(cljs.core.next(arglist__9802));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9802)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9802)));
return G__9801__delegate(k, x, y, more);
});
G__9801.cljs$lang$arity$variadic = G__9801__delegate;
return G__9801;
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
var temp__3974__auto____9805 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9805)
{var s__9806 = temp__3974__auto____9805;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__9806),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__9806)));
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
var temp__3974__auto____9809 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9809)
{var s__9810 = temp__3974__auto____9809;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__9810))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9810),take_while.call(null,pred,cljs.core.rest.call(null,s__9810)));
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
var comp__9812 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__9812.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__9824 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____9825 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____9825))
{var vec__9826__9827 = temp__3974__auto____9825;
var e__9828 = cljs.core.nth.call(null,vec__9826__9827,0,null);
var s__9829 = vec__9826__9827;
if(cljs.core.truth_(include__9824.call(null,e__9828)))
{return s__9829;
} else
{return cljs.core.next.call(null,s__9829);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9824,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9830 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____9830))
{var vec__9831__9832 = temp__3974__auto____9830;
var e__9833 = cljs.core.nth.call(null,vec__9831__9832,0,null);
var s__9834 = vec__9831__9832;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__9833))?s__9834:cljs.core.next.call(null,s__9834)));
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
var include__9846 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____9847 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____9847))
{var vec__9848__9849 = temp__3974__auto____9847;
var e__9850 = cljs.core.nth.call(null,vec__9848__9849,0,null);
var s__9851 = vec__9848__9849;
if(cljs.core.truth_(include__9846.call(null,e__9850)))
{return s__9851;
} else
{return cljs.core.next.call(null,s__9851);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9846,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9852 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____9852))
{var vec__9853__9854 = temp__3974__auto____9852;
var e__9855 = cljs.core.nth.call(null,vec__9853__9854,0,null);
var s__9856 = vec__9853__9854;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__9855))?s__9856:cljs.core.next.call(null,s__9856)));
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
var this__9857 = this;
var h__2153__auto____9858 = this__9857.__hash;
if(!((h__2153__auto____9858 == null)))
{return h__2153__auto____9858;
} else
{var h__2153__auto____9859 = cljs.core.hash_coll.call(null,rng);
this__9857.__hash = h__2153__auto____9859;
return h__2153__auto____9859;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__9860 = this;
if((this__9860.step > 0))
{if(((this__9860.start + this__9860.step) < this__9860.end))
{return (new cljs.core.Range(this__9860.meta,(this__9860.start + this__9860.step),this__9860.end,this__9860.step,null));
} else
{return null;
}
} else
{if(((this__9860.start + this__9860.step) > this__9860.end))
{return (new cljs.core.Range(this__9860.meta,(this__9860.start + this__9860.step),this__9860.end,this__9860.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__9861 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__9862 = this;
var this__9863 = this;
return cljs.core.pr_str.call(null,this__9863);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__9864 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__9865 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__9866 = this;
if((this__9866.step > 0))
{if((this__9866.start < this__9866.end))
{return rng;
} else
{return null;
}
} else
{if((this__9866.start > this__9866.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__9867 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__9867.end - this__9867.start) / this__9867.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__9868 = this;
return this__9868.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__9869 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__9869.meta,(this__9869.start + this__9869.step),this__9869.end,this__9869.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__9870 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__9871 = this;
return (new cljs.core.Range(meta,this__9871.start,this__9871.end,this__9871.step,this__9871.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__9872 = this;
return this__9872.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__9873 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9873.start + (n * this__9873.step));
} else
{if((function (){var and__3822__auto____9874 = (this__9873.start > this__9873.end);
if(and__3822__auto____9874)
{return (this__9873.step === 0);
} else
{return and__3822__auto____9874;
}
})())
{return this__9873.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__9875 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9875.start + (n * this__9875.step));
} else
{if((function (){var and__3822__auto____9876 = (this__9875.start > this__9875.end);
if(and__3822__auto____9876)
{return (this__9875.step === 0);
} else
{return and__3822__auto____9876;
}
})())
{return this__9875.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__9877 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9877.meta);
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
var temp__3974__auto____9880 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9880)
{var s__9881 = temp__3974__auto____9880;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__9881),take_nth.call(null,n,cljs.core.drop.call(null,n,s__9881)));
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
var temp__3974__auto____9888 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9888)
{var s__9889 = temp__3974__auto____9888;
var fst__9890 = cljs.core.first.call(null,s__9889);
var fv__9891 = f.call(null,fst__9890);
var run__9892 = cljs.core.cons.call(null,fst__9890,cljs.core.take_while.call(null,(function (p1__9882_SHARP_){
return cljs.core._EQ_.call(null,fv__9891,f.call(null,p1__9882_SHARP_));
}),cljs.core.next.call(null,s__9889)));
return cljs.core.cons.call(null,run__9892,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__9892),s__9889))));
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
var temp__3971__auto____9907 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____9907)
{var s__9908 = temp__3971__auto____9907;
return reductions.call(null,f,cljs.core.first.call(null,s__9908),cljs.core.rest.call(null,s__9908));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9909 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9909)
{var s__9910 = temp__3974__auto____9909;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__9910)),cljs.core.rest.call(null,s__9910));
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
var G__9913 = null;
var G__9913__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__9913__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__9913__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__9913__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__9913__4 = (function() { 
var G__9914__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__9914 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9914__delegate.call(this, x, y, z, args);
};
G__9914.cljs$lang$maxFixedArity = 3;
G__9914.cljs$lang$applyTo = (function (arglist__9915){
var x = cljs.core.first(arglist__9915);
var y = cljs.core.first(cljs.core.next(arglist__9915));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9915)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9915)));
return G__9914__delegate(x, y, z, args);
});
G__9914.cljs$lang$arity$variadic = G__9914__delegate;
return G__9914;
})()
;
G__9913 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9913__0.call(this);
case 1:
return G__9913__1.call(this,x);
case 2:
return G__9913__2.call(this,x,y);
case 3:
return G__9913__3.call(this,x,y,z);
default:
return G__9913__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9913.cljs$lang$maxFixedArity = 3;
G__9913.cljs$lang$applyTo = G__9913__4.cljs$lang$applyTo;
return G__9913;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__9916 = null;
var G__9916__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__9916__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__9916__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__9916__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__9916__4 = (function() { 
var G__9917__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__9917 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9917__delegate.call(this, x, y, z, args);
};
G__9917.cljs$lang$maxFixedArity = 3;
G__9917.cljs$lang$applyTo = (function (arglist__9918){
var x = cljs.core.first(arglist__9918);
var y = cljs.core.first(cljs.core.next(arglist__9918));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9918)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9918)));
return G__9917__delegate(x, y, z, args);
});
G__9917.cljs$lang$arity$variadic = G__9917__delegate;
return G__9917;
})()
;
G__9916 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9916__0.call(this);
case 1:
return G__9916__1.call(this,x);
case 2:
return G__9916__2.call(this,x,y);
case 3:
return G__9916__3.call(this,x,y,z);
default:
return G__9916__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9916.cljs$lang$maxFixedArity = 3;
G__9916.cljs$lang$applyTo = G__9916__4.cljs$lang$applyTo;
return G__9916;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__9919 = null;
var G__9919__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__9919__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__9919__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__9919__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__9919__4 = (function() { 
var G__9920__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__9920 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9920__delegate.call(this, x, y, z, args);
};
G__9920.cljs$lang$maxFixedArity = 3;
G__9920.cljs$lang$applyTo = (function (arglist__9921){
var x = cljs.core.first(arglist__9921);
var y = cljs.core.first(cljs.core.next(arglist__9921));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9921)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9921)));
return G__9920__delegate(x, y, z, args);
});
G__9920.cljs$lang$arity$variadic = G__9920__delegate;
return G__9920;
})()
;
G__9919 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9919__0.call(this);
case 1:
return G__9919__1.call(this,x);
case 2:
return G__9919__2.call(this,x,y);
case 3:
return G__9919__3.call(this,x,y,z);
default:
return G__9919__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9919.cljs$lang$maxFixedArity = 3;
G__9919.cljs$lang$applyTo = G__9919__4.cljs$lang$applyTo;
return G__9919;
})()
});
var juxt__4 = (function() { 
var G__9922__delegate = function (f,g,h,fs){
var fs__9912 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__9923 = null;
var G__9923__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__9893_SHARP_,p2__9894_SHARP_){
return cljs.core.conj.call(null,p1__9893_SHARP_,p2__9894_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__9912);
});
var G__9923__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__9895_SHARP_,p2__9896_SHARP_){
return cljs.core.conj.call(null,p1__9895_SHARP_,p2__9896_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__9912);
});
var G__9923__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__9897_SHARP_,p2__9898_SHARP_){
return cljs.core.conj.call(null,p1__9897_SHARP_,p2__9898_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__9912);
});
var G__9923__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__9899_SHARP_,p2__9900_SHARP_){
return cljs.core.conj.call(null,p1__9899_SHARP_,p2__9900_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__9912);
});
var G__9923__4 = (function() { 
var G__9924__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__9901_SHARP_,p2__9902_SHARP_){
return cljs.core.conj.call(null,p1__9901_SHARP_,cljs.core.apply.call(null,p2__9902_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__9912);
};
var G__9924 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9924__delegate.call(this, x, y, z, args);
};
G__9924.cljs$lang$maxFixedArity = 3;
G__9924.cljs$lang$applyTo = (function (arglist__9925){
var x = cljs.core.first(arglist__9925);
var y = cljs.core.first(cljs.core.next(arglist__9925));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9925)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9925)));
return G__9924__delegate(x, y, z, args);
});
G__9924.cljs$lang$arity$variadic = G__9924__delegate;
return G__9924;
})()
;
G__9923 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9923__0.call(this);
case 1:
return G__9923__1.call(this,x);
case 2:
return G__9923__2.call(this,x,y);
case 3:
return G__9923__3.call(this,x,y,z);
default:
return G__9923__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9923.cljs$lang$maxFixedArity = 3;
G__9923.cljs$lang$applyTo = G__9923__4.cljs$lang$applyTo;
return G__9923;
})()
};
var G__9922 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9922__delegate.call(this, f, g, h, fs);
};
G__9922.cljs$lang$maxFixedArity = 3;
G__9922.cljs$lang$applyTo = (function (arglist__9926){
var f = cljs.core.first(arglist__9926);
var g = cljs.core.first(cljs.core.next(arglist__9926));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9926)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9926)));
return G__9922__delegate(f, g, h, fs);
});
G__9922.cljs$lang$arity$variadic = G__9922__delegate;
return G__9922;
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
var G__9929 = cljs.core.next.call(null,coll);
coll = G__9929;
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
if(cljs.core.truth_((function (){var and__3822__auto____9928 = cljs.core.seq.call(null,coll);
if(and__3822__auto____9928)
{return (n > 0);
} else
{return and__3822__auto____9928;
}
})()))
{{
var G__9930 = (n - 1);
var G__9931 = cljs.core.next.call(null,coll);
n = G__9930;
coll = G__9931;
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
var matches__9933 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__9933),s))
{if((cljs.core.count.call(null,matches__9933) === 1))
{return cljs.core.first.call(null,matches__9933);
} else
{return cljs.core.vec.call(null,matches__9933);
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
var matches__9935 = re.exec(s);
if((matches__9935 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__9935) === 1))
{return cljs.core.first.call(null,matches__9935);
} else
{return cljs.core.vec.call(null,matches__9935);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__9940 = cljs.core.re_find.call(null,re,s);
var match_idx__9941 = s.search(re);
var match_str__9942 = ((cljs.core.coll_QMARK_.call(null,match_data__9940))?cljs.core.first.call(null,match_data__9940):match_data__9940);
var post_match__9943 = cljs.core.subs.call(null,s,(match_idx__9941 + cljs.core.count.call(null,match_str__9942)));
if(cljs.core.truth_(match_data__9940))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__9940,re_seq.call(null,re,post_match__9943));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__9950__9951 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___9952 = cljs.core.nth.call(null,vec__9950__9951,0,null);
var flags__9953 = cljs.core.nth.call(null,vec__9950__9951,1,null);
var pattern__9954 = cljs.core.nth.call(null,vec__9950__9951,2,null);
return (new RegExp(pattern__9954,flags__9953));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__9944_SHARP_){
return print_one.call(null,p1__9944_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____9964 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____9964))
{var and__3822__auto____9968 = (function (){var G__9965__9966 = obj;
if(G__9965__9966)
{if((function (){var or__3824__auto____9967 = (G__9965__9966.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____9967)
{return or__3824__auto____9967;
} else
{return G__9965__9966.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__9965__9966.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9965__9966);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9965__9966);
}
})();
if(cljs.core.truth_(and__3822__auto____9968))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____9968;
}
} else
{return and__3822__auto____9964;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____9969 = !((obj == null));
if(and__3822__auto____9969)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____9969;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__9970__9971 = obj;
if(G__9970__9971)
{if((function (){var or__3824__auto____9972 = (G__9970__9971.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____9972)
{return or__3824__auto____9972;
} else
{return G__9970__9971.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__9970__9971.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__9970__9971);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__9970__9971);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__9987 = cljs.core.first.call(null,objs);
var sb__9988 = (new goog.string.StringBuffer());
var G__9989__9990 = cljs.core.seq.call(null,objs);
if(G__9989__9990)
{var obj__9991 = cljs.core.first.call(null,G__9989__9990);
var G__9989__9992 = G__9989__9990;
while(true){
if((obj__9991 === first_obj__9987))
{} else
{sb__9988.append(" ");
}
var G__9993__9994 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__9991,opts));
if(G__9993__9994)
{var string__9995 = cljs.core.first.call(null,G__9993__9994);
var G__9993__9996 = G__9993__9994;
while(true){
sb__9988.append(string__9995);
var temp__3974__auto____9997 = cljs.core.next.call(null,G__9993__9996);
if(temp__3974__auto____9997)
{var G__9993__9998 = temp__3974__auto____9997;
{
var G__10001 = cljs.core.first.call(null,G__9993__9998);
var G__10002 = G__9993__9998;
string__9995 = G__10001;
G__9993__9996 = G__10002;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____9999 = cljs.core.next.call(null,G__9989__9992);
if(temp__3974__auto____9999)
{var G__9989__10000 = temp__3974__auto____9999;
{
var G__10003 = cljs.core.first.call(null,G__9989__10000);
var G__10004 = G__9989__10000;
obj__9991 = G__10003;
G__9989__9992 = G__10004;
continue;
}
} else
{}
break;
}
} else
{}
return sb__9988;
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
var sb__10006 = cljs.core.pr_sb.call(null,objs,opts);
sb__10006.append("\n");
return [cljs.core.str(sb__10006)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__10020 = cljs.core.first.call(null,objs);
var G__10021__10022 = cljs.core.seq.call(null,objs);
if(G__10021__10022)
{var obj__10023 = cljs.core.first.call(null,G__10021__10022);
var G__10021__10024 = G__10021__10022;
while(true){
if((obj__10023 === first_obj__10020))
{} else
{cljs.core.string_print.call(null," ");
}
var G__10025__10026 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__10023,opts));
if(G__10025__10026)
{var string__10027 = cljs.core.first.call(null,G__10025__10026);
var G__10025__10028 = G__10025__10026;
while(true){
cljs.core.string_print.call(null,string__10027);
var temp__3974__auto____10029 = cljs.core.next.call(null,G__10025__10028);
if(temp__3974__auto____10029)
{var G__10025__10030 = temp__3974__auto____10029;
{
var G__10033 = cljs.core.first.call(null,G__10025__10030);
var G__10034 = G__10025__10030;
string__10027 = G__10033;
G__10025__10028 = G__10034;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____10031 = cljs.core.next.call(null,G__10021__10024);
if(temp__3974__auto____10031)
{var G__10021__10032 = temp__3974__auto____10031;
{
var G__10035 = cljs.core.first.call(null,G__10021__10032);
var G__10036 = G__10021__10032;
obj__10023 = G__10035;
G__10021__10024 = G__10036;
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
pr_str.cljs$lang$applyTo = (function (arglist__10037){
var objs = cljs.core.seq(arglist__10037);;
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
prn_str.cljs$lang$applyTo = (function (arglist__10038){
var objs = cljs.core.seq(arglist__10038);;
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
pr.cljs$lang$applyTo = (function (arglist__10039){
var objs = cljs.core.seq(arglist__10039);;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__10040){
var objs = cljs.core.seq(arglist__10040);;
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
print_str.cljs$lang$applyTo = (function (arglist__10041){
var objs = cljs.core.seq(arglist__10041);;
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
println.cljs$lang$applyTo = (function (arglist__10042){
var objs = cljs.core.seq(arglist__10042);;
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
println_str.cljs$lang$applyTo = (function (arglist__10043){
var objs = cljs.core.seq(arglist__10043);;
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
prn.cljs$lang$applyTo = (function (arglist__10044){
var objs = cljs.core.seq(arglist__10044);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10045 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10045,"{",", ","}",opts,coll);
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
var pr_pair__10046 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10046,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10047 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10047,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____10048 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____10048))
{var nspc__10049 = temp__3974__auto____10048;
return [cljs.core.str(nspc__10049),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____10050 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____10050))
{var nspc__10051 = temp__3974__auto____10050;
return [cljs.core.str(nspc__10051),cljs.core.str("/")].join('');
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
var pr_pair__10052 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10052,"{",", ","}",opts,coll);
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
var normalize__10054 = (function (n,len){
var ns__10053 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__10053) < len))
{{
var G__10056 = [cljs.core.str("0"),cljs.core.str(ns__10053)].join('');
ns__10053 = G__10056;
continue;
}
} else
{return ns__10053;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__10054.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__10054.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__10054.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__10054.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__10054.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__10054.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
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
var pr_pair__10055 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10055,"{",", ","}",opts,coll);
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
var this__10057 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__10058 = this;
var G__10059__10060 = cljs.core.seq.call(null,this__10058.watches);
if(G__10059__10060)
{var G__10062__10064 = cljs.core.first.call(null,G__10059__10060);
var vec__10063__10065 = G__10062__10064;
var key__10066 = cljs.core.nth.call(null,vec__10063__10065,0,null);
var f__10067 = cljs.core.nth.call(null,vec__10063__10065,1,null);
var G__10059__10068 = G__10059__10060;
var G__10062__10069 = G__10062__10064;
var G__10059__10070 = G__10059__10068;
while(true){
var vec__10071__10072 = G__10062__10069;
var key__10073 = cljs.core.nth.call(null,vec__10071__10072,0,null);
var f__10074 = cljs.core.nth.call(null,vec__10071__10072,1,null);
var G__10059__10075 = G__10059__10070;
f__10074.call(null,key__10073,this$,oldval,newval);
var temp__3974__auto____10076 = cljs.core.next.call(null,G__10059__10075);
if(temp__3974__auto____10076)
{var G__10059__10077 = temp__3974__auto____10076;
{
var G__10084 = cljs.core.first.call(null,G__10059__10077);
var G__10085 = G__10059__10077;
G__10062__10069 = G__10084;
G__10059__10070 = G__10085;
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
var this__10078 = this;
return this$.watches = cljs.core.assoc.call(null,this__10078.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__10079 = this;
return this$.watches = cljs.core.dissoc.call(null,this__10079.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__10080 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__10080.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__10081 = this;
return this__10081.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__10082 = this;
return this__10082.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__10083 = this;
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
var G__10097__delegate = function (x,p__10086){
var map__10092__10093 = p__10086;
var map__10092__10094 = ((cljs.core.seq_QMARK_.call(null,map__10092__10093))?cljs.core.apply.call(null,cljs.core.hash_map,map__10092__10093):map__10092__10093);
var validator__10095 = cljs.core._lookup.call(null,map__10092__10094,"\uFDD0'validator",null);
var meta__10096 = cljs.core._lookup.call(null,map__10092__10094,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__10096,validator__10095,null));
};
var G__10097 = function (x,var_args){
var p__10086 = null;
if (goog.isDef(var_args)) {
  p__10086 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10097__delegate.call(this, x, p__10086);
};
G__10097.cljs$lang$maxFixedArity = 1;
G__10097.cljs$lang$applyTo = (function (arglist__10098){
var x = cljs.core.first(arglist__10098);
var p__10086 = cljs.core.rest(arglist__10098);
return G__10097__delegate(x, p__10086);
});
G__10097.cljs$lang$arity$variadic = G__10097__delegate;
return G__10097;
})()
;
atom = function(x,var_args){
var p__10086 = var_args;
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
var temp__3974__auto____10102 = a.validator;
if(cljs.core.truth_(temp__3974__auto____10102))
{var validate__10103 = temp__3974__auto____10102;
if(cljs.core.truth_(validate__10103.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6394))))].join('')));
}
} else
{}
var old_value__10104 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__10104,new_value);
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
var G__10105__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__10105 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10105__delegate.call(this, a, f, x, y, z, more);
};
G__10105.cljs$lang$maxFixedArity = 5;
G__10105.cljs$lang$applyTo = (function (arglist__10106){
var a = cljs.core.first(arglist__10106);
var f = cljs.core.first(cljs.core.next(arglist__10106));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10106)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10106))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10106)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10106)))));
return G__10105__delegate(a, f, x, y, z, more);
});
G__10105.cljs$lang$arity$variadic = G__10105__delegate;
return G__10105;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__10107){
var iref = cljs.core.first(arglist__10107);
var f = cljs.core.first(cljs.core.next(arglist__10107));
var args = cljs.core.rest(cljs.core.next(arglist__10107));
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
var this__10108 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__10108.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__10109 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__10109.state,(function (p__10110){
var curr_state__10111 = p__10110;
var curr_state__10112 = ((cljs.core.seq_QMARK_.call(null,curr_state__10111))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__10111):curr_state__10111);
var done__10113 = cljs.core._lookup.call(null,curr_state__10112,"\uFDD0'done",null);
if(cljs.core.truth_(done__10113))
{return curr_state__10112;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__10109.f.call(null)});
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
var map__10134__10135 = options;
var map__10134__10136 = ((cljs.core.seq_QMARK_.call(null,map__10134__10135))?cljs.core.apply.call(null,cljs.core.hash_map,map__10134__10135):map__10134__10135);
var keywordize_keys__10137 = cljs.core._lookup.call(null,map__10134__10136,"\uFDD0'keywordize-keys",null);
var keyfn__10138 = (cljs.core.truth_(keywordize_keys__10137)?cljs.core.keyword:cljs.core.str);
var f__10153 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2427__auto____10152 = (function iter__10146(s__10147){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10147__10150 = s__10147;
while(true){
if(cljs.core.seq.call(null,s__10147__10150))
{var k__10151 = cljs.core.first.call(null,s__10147__10150);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__10138.call(null,k__10151),thisfn.call(null,(x[k__10151]))], true),iter__10146.call(null,cljs.core.rest.call(null,s__10147__10150)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2427__auto____10152.call(null,cljs.core.js_keys.call(null,x));
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
return f__10153.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__10154){
var x = cljs.core.first(arglist__10154);
var options = cljs.core.rest(arglist__10154);
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
var mem__10159 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__10163__delegate = function (args){
var temp__3971__auto____10160 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__10159),args,null);
if(cljs.core.truth_(temp__3971__auto____10160))
{var v__10161 = temp__3971__auto____10160;
return v__10161;
} else
{var ret__10162 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__10159,cljs.core.assoc,args,ret__10162);
return ret__10162;
}
};
var G__10163 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10163__delegate.call(this, args);
};
G__10163.cljs$lang$maxFixedArity = 0;
G__10163.cljs$lang$applyTo = (function (arglist__10164){
var args = cljs.core.seq(arglist__10164);;
return G__10163__delegate(args);
});
G__10163.cljs$lang$arity$variadic = G__10163__delegate;
return G__10163;
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
var ret__10166 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__10166))
{{
var G__10167 = ret__10166;
f = G__10167;
continue;
}
} else
{return ret__10166;
}
break;
}
});
var trampoline__2 = (function() { 
var G__10168__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__10168 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10168__delegate.call(this, f, args);
};
G__10168.cljs$lang$maxFixedArity = 1;
G__10168.cljs$lang$applyTo = (function (arglist__10169){
var f = cljs.core.first(arglist__10169);
var args = cljs.core.rest(arglist__10169);
return G__10168__delegate(f, args);
});
G__10168.cljs$lang$arity$variadic = G__10168__delegate;
return G__10168;
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
var k__10171 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__10171,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__10171,cljs.core.PersistentVector.EMPTY),x));
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
var or__3824__auto____10180 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____10180)
{return or__3824__auto____10180;
} else
{var or__3824__auto____10181 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____10181)
{return or__3824__auto____10181;
} else
{var and__3822__auto____10182 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____10182)
{var and__3822__auto____10183 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____10183)
{var and__3822__auto____10184 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____10184)
{var ret__10185 = true;
var i__10186 = 0;
while(true){
if((function (){var or__3824__auto____10187 = cljs.core.not.call(null,ret__10185);
if(or__3824__auto____10187)
{return or__3824__auto____10187;
} else
{return (i__10186 === cljs.core.count.call(null,parent));
}
})())
{return ret__10185;
} else
{{
var G__10188 = isa_QMARK_.call(null,h,child.call(null,i__10186),parent.call(null,i__10186));
var G__10189 = (i__10186 + 1);
ret__10185 = G__10188;
i__10186 = G__10189;
continue;
}
}
break;
}
} else
{return and__3822__auto____10184;
}
} else
{return and__3822__auto____10183;
}
} else
{return and__3822__auto____10182;
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
var tp__10198 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__10199 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__10200 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__10201 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____10202 = ((cljs.core.contains_QMARK_.call(null,tp__10198.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__10200.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__10200.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__10198,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__10201.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__10199,parent,ta__10200),"\uFDD0'descendants":tf__10201.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__10200,tag,td__10199)});
})());
if(cljs.core.truth_(or__3824__auto____10202))
{return or__3824__auto____10202;
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
var parentMap__10207 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__10208 = (cljs.core.truth_(parentMap__10207.call(null,tag))?cljs.core.disj.call(null,parentMap__10207.call(null,tag),parent):cljs.core.set([]));
var newParents__10209 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__10208))?cljs.core.assoc.call(null,parentMap__10207,tag,childsParents__10208):cljs.core.dissoc.call(null,parentMap__10207,tag));
var deriv_seq__10210 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__10190_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__10190_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__10190_SHARP_),cljs.core.second.call(null,p1__10190_SHARP_)));
}),cljs.core.seq.call(null,newParents__10209)));
if(cljs.core.contains_QMARK_.call(null,parentMap__10207.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__10191_SHARP_,p2__10192_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__10191_SHARP_,p2__10192_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__10210));
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
var xprefs__10218 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____10220 = (cljs.core.truth_((function (){var and__3822__auto____10219 = xprefs__10218;
if(cljs.core.truth_(and__3822__auto____10219))
{return xprefs__10218.call(null,y);
} else
{return and__3822__auto____10219;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____10220))
{return or__3824__auto____10220;
} else
{var or__3824__auto____10222 = (function (){var ps__10221 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__10221) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__10221),prefer_table)))
{} else
{}
{
var G__10225 = cljs.core.rest.call(null,ps__10221);
ps__10221 = G__10225;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____10222))
{return or__3824__auto____10222;
} else
{var or__3824__auto____10224 = (function (){var ps__10223 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__10223) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__10223),y,prefer_table)))
{} else
{}
{
var G__10226 = cljs.core.rest.call(null,ps__10223);
ps__10223 = G__10226;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____10224))
{return or__3824__auto____10224;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____10228 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____10228))
{return or__3824__auto____10228;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__10246 = cljs.core.reduce.call(null,(function (be,p__10238){
var vec__10239__10240 = p__10238;
var k__10241 = cljs.core.nth.call(null,vec__10239__10240,0,null);
var ___10242 = cljs.core.nth.call(null,vec__10239__10240,1,null);
var e__10243 = vec__10239__10240;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__10241))
{var be2__10245 = (cljs.core.truth_((function (){var or__3824__auto____10244 = (be == null);
if(or__3824__auto____10244)
{return or__3824__auto____10244;
} else
{return cljs.core.dominates.call(null,k__10241,cljs.core.first.call(null,be),prefer_table);
}
})())?e__10243:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__10245),k__10241,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__10241),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__10245)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__10245;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__10246))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__10246));
return cljs.core.second.call(null,best_entry__10246);
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
if((function (){var and__3822__auto____10250 = mf;
if(and__3822__auto____10250)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____10250;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{return (function (){var or__3824__auto____10251 = (cljs.core._reset[goog.typeOf(mf)]);
if(or__3824__auto____10251)
{return or__3824__auto____10251;
} else
{var or__3824__auto____10252 = (cljs.core._reset["_"]);
if(or__3824__auto____10252)
{return or__3824__auto____10252;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____10256 = mf;
if(and__3822__auto____10256)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____10256;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{return (function (){var or__3824__auto____10257 = (cljs.core._add_method[goog.typeOf(mf)]);
if(or__3824__auto____10257)
{return or__3824__auto____10257;
} else
{var or__3824__auto____10258 = (cljs.core._add_method["_"]);
if(or__3824__auto____10258)
{return or__3824__auto____10258;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____10262 = mf;
if(and__3822__auto____10262)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____10262;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____10263 = (cljs.core._remove_method[goog.typeOf(mf)]);
if(or__3824__auto____10263)
{return or__3824__auto____10263;
} else
{var or__3824__auto____10264 = (cljs.core._remove_method["_"]);
if(or__3824__auto____10264)
{return or__3824__auto____10264;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____10268 = mf;
if(and__3822__auto____10268)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____10268;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3824__auto____10269 = (cljs.core._prefer_method[goog.typeOf(mf)]);
if(or__3824__auto____10269)
{return or__3824__auto____10269;
} else
{var or__3824__auto____10270 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____10270)
{return or__3824__auto____10270;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____10274 = mf;
if(and__3822__auto____10274)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____10274;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____10275 = (cljs.core._get_method[goog.typeOf(mf)]);
if(or__3824__auto____10275)
{return or__3824__auto____10275;
} else
{var or__3824__auto____10276 = (cljs.core._get_method["_"]);
if(or__3824__auto____10276)
{return or__3824__auto____10276;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____10280 = mf;
if(and__3822__auto____10280)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____10280;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{return (function (){var or__3824__auto____10281 = (cljs.core._methods[goog.typeOf(mf)]);
if(or__3824__auto____10281)
{return or__3824__auto____10281;
} else
{var or__3824__auto____10282 = (cljs.core._methods["_"]);
if(or__3824__auto____10282)
{return or__3824__auto____10282;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____10286 = mf;
if(and__3822__auto____10286)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____10286;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{return (function (){var or__3824__auto____10287 = (cljs.core._prefers[goog.typeOf(mf)]);
if(or__3824__auto____10287)
{return or__3824__auto____10287;
} else
{var or__3824__auto____10288 = (cljs.core._prefers["_"]);
if(or__3824__auto____10288)
{return or__3824__auto____10288;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____10292 = mf;
if(and__3822__auto____10292)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____10292;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{return (function (){var or__3824__auto____10293 = (cljs.core._dispatch[goog.typeOf(mf)]);
if(or__3824__auto____10293)
{return or__3824__auto____10293;
} else
{var or__3824__auto____10294 = (cljs.core._dispatch["_"]);
if(or__3824__auto____10294)
{return or__3824__auto____10294;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
void 0;cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__10297 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__10298 = cljs.core._get_method.call(null,mf,dispatch_val__10297);
if(cljs.core.truth_(target_fn__10298))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__10297)].join('')));
}
return cljs.core.apply.call(null,target_fn__10298,args);
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
var this__10299 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__10300 = this;
cljs.core.swap_BANG_.call(null,this__10300.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10300.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10300.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10300.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__10301 = this;
cljs.core.swap_BANG_.call(null,this__10301.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__10301.method_cache,this__10301.method_table,this__10301.cached_hierarchy,this__10301.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__10302 = this;
cljs.core.swap_BANG_.call(null,this__10302.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__10302.method_cache,this__10302.method_table,this__10302.cached_hierarchy,this__10302.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__10303 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__10303.cached_hierarchy),cljs.core.deref.call(null,this__10303.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__10303.method_cache,this__10303.method_table,this__10303.cached_hierarchy,this__10303.hierarchy);
}
var temp__3971__auto____10304 = cljs.core.deref.call(null,this__10303.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____10304))
{var target_fn__10305 = temp__3971__auto____10304;
return target_fn__10305;
} else
{var temp__3971__auto____10306 = cljs.core.find_and_cache_best_method.call(null,this__10303.name,dispatch_val,this__10303.hierarchy,this__10303.method_table,this__10303.prefer_table,this__10303.method_cache,this__10303.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____10306))
{var target_fn__10307 = temp__3971__auto____10306;
return target_fn__10307;
} else
{return cljs.core.deref.call(null,this__10303.method_table).call(null,this__10303.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__10308 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__10308.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__10308.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__10308.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__10308.method_cache,this__10308.method_table,this__10308.cached_hierarchy,this__10308.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__10309 = this;
return cljs.core.deref.call(null,this__10309.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__10310 = this;
return cljs.core.deref.call(null,this__10310.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__10311 = this;
return cljs.core.do_dispatch.call(null,mf,this__10311.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__10313__delegate = function (_,args){
var self__10312 = this;
return cljs.core._dispatch.call(null,self__10312,args);
};
var G__10313 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10313__delegate.call(this, _, args);
};
G__10313.cljs$lang$maxFixedArity = 1;
G__10313.cljs$lang$applyTo = (function (arglist__10314){
var _ = cljs.core.first(arglist__10314);
var args = cljs.core.rest(arglist__10314);
return G__10313__delegate(_, args);
});
G__10313.cljs$lang$arity$variadic = G__10313__delegate;
return G__10313;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__10315 = this;
return cljs.core._dispatch.call(null,self__10315,args);
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
var this__10316 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_10318,_){
var this__10317 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__10317.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__10319 = this;
return (this__10319.uuid === other.uuid);
});
cljs.core.UUID.prototype.toString = (function (){
var this__10320 = this;
var this__10321 = this;
return cljs.core.pr_str.call(null,this__10321);
});
cljs.core.UUID;
