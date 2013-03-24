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
var G__6559__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__6559 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6559__delegate.call(this, array, i, idxs);
};
G__6559.cljs$lang$maxFixedArity = 2;
G__6559.cljs$lang$applyTo = (function (arglist__6560){
var array = cljs.core.first(arglist__6560);
var i = cljs.core.first(cljs.core.next(arglist__6560));
var idxs = cljs.core.rest(cljs.core.next(arglist__6560));
return G__6559__delegate(array, i, idxs);
});
G__6559.cljs$lang$arity$variadic = G__6559__delegate;
return G__6559;
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
if((function (){var and__3822__auto____6624 = this$;
if(and__3822__auto____6624)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____6624;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{return (function (){var or__3824__auto____6625 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6625)
{return or__3824__auto____6625;
} else
{var or__3824__auto____6626 = (cljs.core._invoke["_"]);
if(or__3824__auto____6626)
{return or__3824__auto____6626;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____6627 = this$;
if(and__3822__auto____6627)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____6627;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{return (function (){var or__3824__auto____6628 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6628)
{return or__3824__auto____6628;
} else
{var or__3824__auto____6629 = (cljs.core._invoke["_"]);
if(or__3824__auto____6629)
{return or__3824__auto____6629;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____6630 = this$;
if(and__3822__auto____6630)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____6630;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{return (function (){var or__3824__auto____6631 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6631)
{return or__3824__auto____6631;
} else
{var or__3824__auto____6632 = (cljs.core._invoke["_"]);
if(or__3824__auto____6632)
{return or__3824__auto____6632;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____6633 = this$;
if(and__3822__auto____6633)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____6633;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{return (function (){var or__3824__auto____6634 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6634)
{return or__3824__auto____6634;
} else
{var or__3824__auto____6635 = (cljs.core._invoke["_"]);
if(or__3824__auto____6635)
{return or__3824__auto____6635;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____6636 = this$;
if(and__3822__auto____6636)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____6636;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{return (function (){var or__3824__auto____6637 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6637)
{return or__3824__auto____6637;
} else
{var or__3824__auto____6638 = (cljs.core._invoke["_"]);
if(or__3824__auto____6638)
{return or__3824__auto____6638;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____6639 = this$;
if(and__3822__auto____6639)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____6639;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{return (function (){var or__3824__auto____6640 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6640)
{return or__3824__auto____6640;
} else
{var or__3824__auto____6641 = (cljs.core._invoke["_"]);
if(or__3824__auto____6641)
{return or__3824__auto____6641;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____6642 = this$;
if(and__3822__auto____6642)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____6642;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3824__auto____6643 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6643)
{return or__3824__auto____6643;
} else
{var or__3824__auto____6644 = (cljs.core._invoke["_"]);
if(or__3824__auto____6644)
{return or__3824__auto____6644;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____6645 = this$;
if(and__3822__auto____6645)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____6645;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3824__auto____6646 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6646)
{return or__3824__auto____6646;
} else
{var or__3824__auto____6647 = (cljs.core._invoke["_"]);
if(or__3824__auto____6647)
{return or__3824__auto____6647;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____6648 = this$;
if(and__3822__auto____6648)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____6648;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3824__auto____6649 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6649)
{return or__3824__auto____6649;
} else
{var or__3824__auto____6650 = (cljs.core._invoke["_"]);
if(or__3824__auto____6650)
{return or__3824__auto____6650;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____6651 = this$;
if(and__3822__auto____6651)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____6651;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3824__auto____6652 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6652)
{return or__3824__auto____6652;
} else
{var or__3824__auto____6653 = (cljs.core._invoke["_"]);
if(or__3824__auto____6653)
{return or__3824__auto____6653;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____6654 = this$;
if(and__3822__auto____6654)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____6654;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3824__auto____6655 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6655)
{return or__3824__auto____6655;
} else
{var or__3824__auto____6656 = (cljs.core._invoke["_"]);
if(or__3824__auto____6656)
{return or__3824__auto____6656;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____6657 = this$;
if(and__3822__auto____6657)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____6657;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3824__auto____6658 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6658)
{return or__3824__auto____6658;
} else
{var or__3824__auto____6659 = (cljs.core._invoke["_"]);
if(or__3824__auto____6659)
{return or__3824__auto____6659;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____6660 = this$;
if(and__3822__auto____6660)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____6660;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____6663 = this$;
if(and__3822__auto____6663)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____6663;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____6666 = this$;
if(and__3822__auto____6666)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____6666;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____6669 = this$;
if(and__3822__auto____6669)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____6669;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____6672 = this$;
if(and__3822__auto____6672)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____6672;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____6675 = this$;
if(and__3822__auto____6675)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____6675;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____6678 = this$;
if(and__3822__auto____6678)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____6678;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____6681 = this$;
if(and__3822__auto____6681)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____6681;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____6684 = this$;
if(and__3822__auto____6684)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____6684;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
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
if((function (){var and__3822__auto____6690 = coll;
if(and__3822__auto____6690)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____6690;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{return (function (){var or__3824__auto____6691 = (cljs.core._count[goog.typeOf(coll)]);
if(or__3824__auto____6691)
{return or__3824__auto____6691;
} else
{var or__3824__auto____6692 = (cljs.core._count["_"]);
if(or__3824__auto____6692)
{return or__3824__auto____6692;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____6696 = coll;
if(and__3822__auto____6696)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____6696;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (function (){var or__3824__auto____6697 = (cljs.core._empty[goog.typeOf(coll)]);
if(or__3824__auto____6697)
{return or__3824__auto____6697;
} else
{var or__3824__auto____6698 = (cljs.core._empty["_"]);
if(or__3824__auto____6698)
{return or__3824__auto____6698;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____6702 = coll;
if(and__3822__auto____6702)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____6702;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{return (function (){var or__3824__auto____6703 = (cljs.core._conj[goog.typeOf(coll)]);
if(or__3824__auto____6703)
{return or__3824__auto____6703;
} else
{var or__3824__auto____6704 = (cljs.core._conj["_"]);
if(or__3824__auto____6704)
{return or__3824__auto____6704;
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
if((function (){var and__3822__auto____6711 = coll;
if(and__3822__auto____6711)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____6711;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return (function (){var or__3824__auto____6712 = (cljs.core._nth[goog.typeOf(coll)]);
if(or__3824__auto____6712)
{return or__3824__auto____6712;
} else
{var or__3824__auto____6713 = (cljs.core._nth["_"]);
if(or__3824__auto____6713)
{return or__3824__auto____6713;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____6714 = coll;
if(and__3822__auto____6714)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____6714;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{return (function (){var or__3824__auto____6715 = (cljs.core._nth[goog.typeOf(coll)]);
if(or__3824__auto____6715)
{return or__3824__auto____6715;
} else
{var or__3824__auto____6716 = (cljs.core._nth["_"]);
if(or__3824__auto____6716)
{return or__3824__auto____6716;
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
if((function (){var and__3822__auto____6720 = coll;
if(and__3822__auto____6720)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____6720;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____6721 = (cljs.core._first[goog.typeOf(coll)]);
if(or__3824__auto____6721)
{return or__3824__auto____6721;
} else
{var or__3824__auto____6722 = (cljs.core._first["_"]);
if(or__3824__auto____6722)
{return or__3824__auto____6722;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____6726 = coll;
if(and__3822__auto____6726)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____6726;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{return (function (){var or__3824__auto____6727 = (cljs.core._rest[goog.typeOf(coll)]);
if(or__3824__auto____6727)
{return or__3824__auto____6727;
} else
{var or__3824__auto____6728 = (cljs.core._rest["_"]);
if(or__3824__auto____6728)
{return or__3824__auto____6728;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____6732 = coll;
if(and__3822__auto____6732)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____6732;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{return (function (){var or__3824__auto____6733 = (cljs.core._next[goog.typeOf(coll)]);
if(or__3824__auto____6733)
{return or__3824__auto____6733;
} else
{var or__3824__auto____6734 = (cljs.core._next["_"]);
if(or__3824__auto____6734)
{return or__3824__auto____6734;
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
if((function (){var and__3822__auto____6741 = o;
if(and__3822__auto____6741)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____6741;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{return (function (){var or__3824__auto____6742 = (cljs.core._lookup[goog.typeOf(o)]);
if(or__3824__auto____6742)
{return or__3824__auto____6742;
} else
{var or__3824__auto____6743 = (cljs.core._lookup["_"]);
if(or__3824__auto____6743)
{return or__3824__auto____6743;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____6744 = o;
if(and__3822__auto____6744)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____6744;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{return (function (){var or__3824__auto____6745 = (cljs.core._lookup[goog.typeOf(o)]);
if(or__3824__auto____6745)
{return or__3824__auto____6745;
} else
{var or__3824__auto____6746 = (cljs.core._lookup["_"]);
if(or__3824__auto____6746)
{return or__3824__auto____6746;
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
if((function (){var and__3822__auto____6750 = coll;
if(and__3822__auto____6750)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____6750;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{return (function (){var or__3824__auto____6751 = (cljs.core._contains_key_QMARK_[goog.typeOf(coll)]);
if(or__3824__auto____6751)
{return or__3824__auto____6751;
} else
{var or__3824__auto____6752 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____6752)
{return or__3824__auto____6752;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____6756 = coll;
if(and__3822__auto____6756)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____6756;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{return (function (){var or__3824__auto____6757 = (cljs.core._assoc[goog.typeOf(coll)]);
if(or__3824__auto____6757)
{return or__3824__auto____6757;
} else
{var or__3824__auto____6758 = (cljs.core._assoc["_"]);
if(or__3824__auto____6758)
{return or__3824__auto____6758;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
void 0;void 0;cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____6762 = coll;
if(and__3822__auto____6762)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____6762;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{return (function (){var or__3824__auto____6763 = (cljs.core._dissoc[goog.typeOf(coll)]);
if(or__3824__auto____6763)
{return or__3824__auto____6763;
} else
{var or__3824__auto____6764 = (cljs.core._dissoc["_"]);
if(or__3824__auto____6764)
{return or__3824__auto____6764;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
void 0;void 0;cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____6768 = coll;
if(and__3822__auto____6768)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____6768;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{return (function (){var or__3824__auto____6769 = (cljs.core._key[goog.typeOf(coll)]);
if(or__3824__auto____6769)
{return or__3824__auto____6769;
} else
{var or__3824__auto____6770 = (cljs.core._key["_"]);
if(or__3824__auto____6770)
{return or__3824__auto____6770;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____6774 = coll;
if(and__3822__auto____6774)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____6774;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{return (function (){var or__3824__auto____6775 = (cljs.core._val[goog.typeOf(coll)]);
if(or__3824__auto____6775)
{return or__3824__auto____6775;
} else
{var or__3824__auto____6776 = (cljs.core._val["_"]);
if(or__3824__auto____6776)
{return or__3824__auto____6776;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____6780 = coll;
if(and__3822__auto____6780)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____6780;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{return (function (){var or__3824__auto____6781 = (cljs.core._disjoin[goog.typeOf(coll)]);
if(or__3824__auto____6781)
{return or__3824__auto____6781;
} else
{var or__3824__auto____6782 = (cljs.core._disjoin["_"]);
if(or__3824__auto____6782)
{return or__3824__auto____6782;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
void 0;void 0;cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____6786 = coll;
if(and__3822__auto____6786)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____6786;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{return (function (){var or__3824__auto____6787 = (cljs.core._peek[goog.typeOf(coll)]);
if(or__3824__auto____6787)
{return or__3824__auto____6787;
} else
{var or__3824__auto____6788 = (cljs.core._peek["_"]);
if(or__3824__auto____6788)
{return or__3824__auto____6788;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____6792 = coll;
if(and__3822__auto____6792)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____6792;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{return (function (){var or__3824__auto____6793 = (cljs.core._pop[goog.typeOf(coll)]);
if(or__3824__auto____6793)
{return or__3824__auto____6793;
} else
{var or__3824__auto____6794 = (cljs.core._pop["_"]);
if(or__3824__auto____6794)
{return or__3824__auto____6794;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____6798 = coll;
if(and__3822__auto____6798)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____6798;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{return (function (){var or__3824__auto____6799 = (cljs.core._assoc_n[goog.typeOf(coll)]);
if(or__3824__auto____6799)
{return or__3824__auto____6799;
} else
{var or__3824__auto____6800 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____6800)
{return or__3824__auto____6800;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
void 0;void 0;cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____6804 = o;
if(and__3822__auto____6804)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____6804;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{return (function (){var or__3824__auto____6805 = (cljs.core._deref[goog.typeOf(o)]);
if(or__3824__auto____6805)
{return or__3824__auto____6805;
} else
{var or__3824__auto____6806 = (cljs.core._deref["_"]);
if(or__3824__auto____6806)
{return or__3824__auto____6806;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____6810 = o;
if(and__3822__auto____6810)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____6810;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{return (function (){var or__3824__auto____6811 = (cljs.core._deref_with_timeout[goog.typeOf(o)]);
if(or__3824__auto____6811)
{return or__3824__auto____6811;
} else
{var or__3824__auto____6812 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____6812)
{return or__3824__auto____6812;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
void 0;void 0;cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____6816 = o;
if(and__3822__auto____6816)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____6816;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{return (function (){var or__3824__auto____6817 = (cljs.core._meta[goog.typeOf(o)]);
if(or__3824__auto____6817)
{return or__3824__auto____6817;
} else
{var or__3824__auto____6818 = (cljs.core._meta["_"]);
if(or__3824__auto____6818)
{return or__3824__auto____6818;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____6822 = o;
if(and__3822__auto____6822)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____6822;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{return (function (){var or__3824__auto____6823 = (cljs.core._with_meta[goog.typeOf(o)]);
if(or__3824__auto____6823)
{return or__3824__auto____6823;
} else
{var or__3824__auto____6824 = (cljs.core._with_meta["_"]);
if(or__3824__auto____6824)
{return or__3824__auto____6824;
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
if((function (){var and__3822__auto____6831 = coll;
if(and__3822__auto____6831)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____6831;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{return (function (){var or__3824__auto____6832 = (cljs.core._reduce[goog.typeOf(coll)]);
if(or__3824__auto____6832)
{return or__3824__auto____6832;
} else
{var or__3824__auto____6833 = (cljs.core._reduce["_"]);
if(or__3824__auto____6833)
{return or__3824__auto____6833;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____6834 = coll;
if(and__3822__auto____6834)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____6834;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{return (function (){var or__3824__auto____6835 = (cljs.core._reduce[goog.typeOf(coll)]);
if(or__3824__auto____6835)
{return or__3824__auto____6835;
} else
{var or__3824__auto____6836 = (cljs.core._reduce["_"]);
if(or__3824__auto____6836)
{return or__3824__auto____6836;
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
if((function (){var and__3822__auto____6840 = coll;
if(and__3822__auto____6840)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____6840;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{return (function (){var or__3824__auto____6841 = (cljs.core._kv_reduce[goog.typeOf(coll)]);
if(or__3824__auto____6841)
{return or__3824__auto____6841;
} else
{var or__3824__auto____6842 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____6842)
{return or__3824__auto____6842;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
void 0;void 0;cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____6846 = o;
if(and__3822__auto____6846)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____6846;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{return (function (){var or__3824__auto____6847 = (cljs.core._equiv[goog.typeOf(o)]);
if(or__3824__auto____6847)
{return or__3824__auto____6847;
} else
{var or__3824__auto____6848 = (cljs.core._equiv["_"]);
if(or__3824__auto____6848)
{return or__3824__auto____6848;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
void 0;void 0;cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____6852 = o;
if(and__3822__auto____6852)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____6852;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{return (function (){var or__3824__auto____6853 = (cljs.core._hash[goog.typeOf(o)]);
if(or__3824__auto____6853)
{return or__3824__auto____6853;
} else
{var or__3824__auto____6854 = (cljs.core._hash["_"]);
if(or__3824__auto____6854)
{return or__3824__auto____6854;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____6858 = o;
if(and__3822__auto____6858)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____6858;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{return (function (){var or__3824__auto____6859 = (cljs.core._seq[goog.typeOf(o)]);
if(or__3824__auto____6859)
{return or__3824__auto____6859;
} else
{var or__3824__auto____6860 = (cljs.core._seq["_"]);
if(or__3824__auto____6860)
{return or__3824__auto____6860;
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
if((function (){var and__3822__auto____6864 = coll;
if(and__3822__auto____6864)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____6864;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{return (function (){var or__3824__auto____6865 = (cljs.core._rseq[goog.typeOf(coll)]);
if(or__3824__auto____6865)
{return or__3824__auto____6865;
} else
{var or__3824__auto____6866 = (cljs.core._rseq["_"]);
if(or__3824__auto____6866)
{return or__3824__auto____6866;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____6870 = coll;
if(and__3822__auto____6870)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____6870;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{return (function (){var or__3824__auto____6871 = (cljs.core._sorted_seq[goog.typeOf(coll)]);
if(or__3824__auto____6871)
{return or__3824__auto____6871;
} else
{var or__3824__auto____6872 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____6872)
{return or__3824__auto____6872;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____6876 = coll;
if(and__3822__auto____6876)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____6876;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{return (function (){var or__3824__auto____6877 = (cljs.core._sorted_seq_from[goog.typeOf(coll)]);
if(or__3824__auto____6877)
{return or__3824__auto____6877;
} else
{var or__3824__auto____6878 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____6878)
{return or__3824__auto____6878;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____6882 = coll;
if(and__3822__auto____6882)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____6882;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{return (function (){var or__3824__auto____6883 = (cljs.core._entry_key[goog.typeOf(coll)]);
if(or__3824__auto____6883)
{return or__3824__auto____6883;
} else
{var or__3824__auto____6884 = (cljs.core._entry_key["_"]);
if(or__3824__auto____6884)
{return or__3824__auto____6884;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____6888 = coll;
if(and__3822__auto____6888)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____6888;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{return (function (){var or__3824__auto____6889 = (cljs.core._comparator[goog.typeOf(coll)]);
if(or__3824__auto____6889)
{return or__3824__auto____6889;
} else
{var or__3824__auto____6890 = (cljs.core._comparator["_"]);
if(or__3824__auto____6890)
{return or__3824__auto____6890;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____6894 = o;
if(and__3822__auto____6894)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____6894;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{return (function (){var or__3824__auto____6895 = (cljs.core._pr_seq[goog.typeOf(o)]);
if(or__3824__auto____6895)
{return or__3824__auto____6895;
} else
{var or__3824__auto____6896 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____6896)
{return or__3824__auto____6896;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
void 0;void 0;cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____6900 = d;
if(and__3822__auto____6900)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____6900;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{return (function (){var or__3824__auto____6901 = (cljs.core._realized_QMARK_[goog.typeOf(d)]);
if(or__3824__auto____6901)
{return or__3824__auto____6901;
} else
{var or__3824__auto____6902 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____6902)
{return or__3824__auto____6902;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
void 0;void 0;cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____6906 = this$;
if(and__3822__auto____6906)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____6906;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{return (function (){var or__3824__auto____6907 = (cljs.core._notify_watches[goog.typeOf(this$)]);
if(or__3824__auto____6907)
{return or__3824__auto____6907;
} else
{var or__3824__auto____6908 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____6908)
{return or__3824__auto____6908;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____6912 = this$;
if(and__3822__auto____6912)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____6912;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{return (function (){var or__3824__auto____6913 = (cljs.core._add_watch[goog.typeOf(this$)]);
if(or__3824__auto____6913)
{return or__3824__auto____6913;
} else
{var or__3824__auto____6914 = (cljs.core._add_watch["_"]);
if(or__3824__auto____6914)
{return or__3824__auto____6914;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____6918 = this$;
if(and__3822__auto____6918)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____6918;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{return (function (){var or__3824__auto____6919 = (cljs.core._remove_watch[goog.typeOf(this$)]);
if(or__3824__auto____6919)
{return or__3824__auto____6919;
} else
{var or__3824__auto____6920 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____6920)
{return or__3824__auto____6920;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
void 0;void 0;cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____6924 = coll;
if(and__3822__auto____6924)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____6924;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{return (function (){var or__3824__auto____6925 = (cljs.core._as_transient[goog.typeOf(coll)]);
if(or__3824__auto____6925)
{return or__3824__auto____6925;
} else
{var or__3824__auto____6926 = (cljs.core._as_transient["_"]);
if(or__3824__auto____6926)
{return or__3824__auto____6926;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____6930 = tcoll;
if(and__3822__auto____6930)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____6930;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{return (function (){var or__3824__auto____6931 = (cljs.core._conj_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6931)
{return or__3824__auto____6931;
} else
{var or__3824__auto____6932 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____6932)
{return or__3824__auto____6932;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____6936 = tcoll;
if(and__3822__auto____6936)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____6936;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3824__auto____6937 = (cljs.core._persistent_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6937)
{return or__3824__auto____6937;
} else
{var or__3824__auto____6938 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____6938)
{return or__3824__auto____6938;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____6942 = tcoll;
if(and__3822__auto____6942)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____6942;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{return (function (){var or__3824__auto____6943 = (cljs.core._assoc_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6943)
{return or__3824__auto____6943;
} else
{var or__3824__auto____6944 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____6944)
{return or__3824__auto____6944;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
void 0;void 0;cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____6948 = tcoll;
if(and__3822__auto____6948)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____6948;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{return (function (){var or__3824__auto____6949 = (cljs.core._dissoc_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6949)
{return or__3824__auto____6949;
} else
{var or__3824__auto____6950 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____6950)
{return or__3824__auto____6950;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
void 0;void 0;cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____6954 = tcoll;
if(and__3822__auto____6954)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____6954;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{return (function (){var or__3824__auto____6955 = (cljs.core._assoc_n_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6955)
{return or__3824__auto____6955;
} else
{var or__3824__auto____6956 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____6956)
{return or__3824__auto____6956;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____6960 = tcoll;
if(and__3822__auto____6960)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____6960;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3824__auto____6961 = (cljs.core._pop_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6961)
{return or__3824__auto____6961;
} else
{var or__3824__auto____6962 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____6962)
{return or__3824__auto____6962;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____6966 = tcoll;
if(and__3822__auto____6966)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____6966;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{return (function (){var or__3824__auto____6967 = (cljs.core._disjoin_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6967)
{return or__3824__auto____6967;
} else
{var or__3824__auto____6968 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____6968)
{return or__3824__auto____6968;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
void 0;void 0;cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____6972 = x;
if(and__3822__auto____6972)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____6972;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{return (function (){var or__3824__auto____6973 = (cljs.core._compare[goog.typeOf(x)]);
if(or__3824__auto____6973)
{return or__3824__auto____6973;
} else
{var or__3824__auto____6974 = (cljs.core._compare["_"]);
if(or__3824__auto____6974)
{return or__3824__auto____6974;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
void 0;void 0;cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____6978 = coll;
if(and__3822__auto____6978)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____6978;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____6979 = (cljs.core._drop_first[goog.typeOf(coll)]);
if(or__3824__auto____6979)
{return or__3824__auto____6979;
} else
{var or__3824__auto____6980 = (cljs.core._drop_first["_"]);
if(or__3824__auto____6980)
{return or__3824__auto____6980;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____6984 = coll;
if(and__3822__auto____6984)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____6984;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____6985 = (cljs.core._chunked_first[goog.typeOf(coll)]);
if(or__3824__auto____6985)
{return or__3824__auto____6985;
} else
{var or__3824__auto____6986 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____6986)
{return or__3824__auto____6986;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____6990 = coll;
if(and__3822__auto____6990)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____6990;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{return (function (){var or__3824__auto____6991 = (cljs.core._chunked_rest[goog.typeOf(coll)]);
if(or__3824__auto____6991)
{return or__3824__auto____6991;
} else
{var or__3824__auto____6992 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____6992)
{return or__3824__auto____6992;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____6996 = coll;
if(and__3822__auto____6996)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____6996;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{return (function (){var or__3824__auto____6997 = (cljs.core._chunked_next[goog.typeOf(coll)]);
if(or__3824__auto____6997)
{return or__3824__auto____6997;
} else
{var or__3824__auto____6998 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____6998)
{return or__3824__auto____6998;
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
var or__3824__auto____7000 = (x === y);
if(or__3824__auto____7000)
{return or__3824__auto____7000;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__7001__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__7002 = y;
var G__7003 = cljs.core.first.call(null,more);
var G__7004 = cljs.core.next.call(null,more);
x = G__7002;
y = G__7003;
more = G__7004;
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
var G__7001 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7001__delegate.call(this, x, y, more);
};
G__7001.cljs$lang$maxFixedArity = 2;
G__7001.cljs$lang$applyTo = (function (arglist__7005){
var x = cljs.core.first(arglist__7005);
var y = cljs.core.first(cljs.core.next(arglist__7005));
var more = cljs.core.rest(cljs.core.next(arglist__7005));
return G__7001__delegate(x, y, more);
});
G__7001.cljs$lang$arity$variadic = G__7001__delegate;
return G__7001;
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
var G__7006 = null;
var G__7006__2 = (function (o,k){
return null;
});
var G__7006__3 = (function (o,k,not_found){
return not_found;
});
G__7006 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__7006__2.call(this,o,k);
case 3:
return G__7006__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7006;
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
var G__7007 = null;
var G__7007__2 = (function (_,f){
return f.call(null);
});
var G__7007__3 = (function (_,f,start){
return start;
});
G__7007 = function(_,f,start){
switch(arguments.length){
case 2:
return G__7007__2.call(this,_,f);
case 3:
return G__7007__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7007;
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
var G__7008 = null;
var G__7008__2 = (function (_,n){
return null;
});
var G__7008__3 = (function (_,n,not_found){
return not_found;
});
G__7008 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__7008__2.call(this,_,n);
case 3:
return G__7008__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7008;
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
var cnt__7021 = cljs.core._count.call(null,cicoll);
if((cnt__7021 === 0))
{return f.call(null);
} else
{var val__7022 = cljs.core._nth.call(null,cicoll,0);
var n__7023 = 1;
while(true){
if((n__7023 < cnt__7021))
{var nval__7024 = f.call(null,val__7022,cljs.core._nth.call(null,cicoll,n__7023));
if(cljs.core.reduced_QMARK_.call(null,nval__7024))
{return cljs.core.deref.call(null,nval__7024);
} else
{{
var G__7033 = nval__7024;
var G__7034 = (n__7023 + 1);
val__7022 = G__7033;
n__7023 = G__7034;
continue;
}
}
} else
{return val__7022;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__7025 = cljs.core._count.call(null,cicoll);
var val__7026 = val;
var n__7027 = 0;
while(true){
if((n__7027 < cnt__7025))
{var nval__7028 = f.call(null,val__7026,cljs.core._nth.call(null,cicoll,n__7027));
if(cljs.core.reduced_QMARK_.call(null,nval__7028))
{return cljs.core.deref.call(null,nval__7028);
} else
{{
var G__7035 = nval__7028;
var G__7036 = (n__7027 + 1);
val__7026 = G__7035;
n__7027 = G__7036;
continue;
}
}
} else
{return val__7026;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__7029 = cljs.core._count.call(null,cicoll);
var val__7030 = val;
var n__7031 = idx;
while(true){
if((n__7031 < cnt__7029))
{var nval__7032 = f.call(null,val__7030,cljs.core._nth.call(null,cicoll,n__7031));
if(cljs.core.reduced_QMARK_.call(null,nval__7032))
{return cljs.core.deref.call(null,nval__7032);
} else
{{
var G__7037 = nval__7032;
var G__7038 = (n__7031 + 1);
val__7030 = G__7037;
n__7031 = G__7038;
continue;
}
}
} else
{return val__7030;
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
var cnt__7051 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__7052 = (arr[0]);
var n__7053 = 1;
while(true){
if((n__7053 < cnt__7051))
{var nval__7054 = f.call(null,val__7052,(arr[n__7053]));
if(cljs.core.reduced_QMARK_.call(null,nval__7054))
{return cljs.core.deref.call(null,nval__7054);
} else
{{
var G__7063 = nval__7054;
var G__7064 = (n__7053 + 1);
val__7052 = G__7063;
n__7053 = G__7064;
continue;
}
}
} else
{return val__7052;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__7055 = arr.length;
var val__7056 = val;
var n__7057 = 0;
while(true){
if((n__7057 < cnt__7055))
{var nval__7058 = f.call(null,val__7056,(arr[n__7057]));
if(cljs.core.reduced_QMARK_.call(null,nval__7058))
{return cljs.core.deref.call(null,nval__7058);
} else
{{
var G__7065 = nval__7058;
var G__7066 = (n__7057 + 1);
val__7056 = G__7065;
n__7057 = G__7066;
continue;
}
}
} else
{return val__7056;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__7059 = arr.length;
var val__7060 = val;
var n__7061 = idx;
while(true){
if((n__7061 < cnt__7059))
{var nval__7062 = f.call(null,val__7060,(arr[n__7061]));
if(cljs.core.reduced_QMARK_.call(null,nval__7062))
{return cljs.core.deref.call(null,nval__7062);
} else
{{
var G__7067 = nval__7062;
var G__7068 = (n__7061 + 1);
val__7060 = G__7067;
n__7061 = G__7068;
continue;
}
}
} else
{return val__7060;
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
var this__7069 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__7070 = this;
if(((this__7070.i + 1) < this__7070.a.length))
{return (new cljs.core.IndexedSeq(this__7070.a,(this__7070.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7071 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__7072 = this;
var c__7073 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__7073 > 0))
{return (new cljs.core.RSeq(coll,(c__7073 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__7074 = this;
var this__7075 = this;
return cljs.core.pr_str.call(null,this__7075);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__7076 = this;
if(cljs.core.counted_QMARK_.call(null,this__7076.a))
{return cljs.core.ci_reduce.call(null,this__7076.a,f,(this__7076.a[this__7076.i]),(this__7076.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__7076.a[this__7076.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7077 = this;
if(cljs.core.counted_QMARK_.call(null,this__7077.a))
{return cljs.core.ci_reduce.call(null,this__7077.a,f,start,this__7077.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__7078 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7079 = this;
return (this__7079.a.length - this__7079.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__7080 = this;
return (this__7080.a[this__7080.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__7081 = this;
if(((this__7081.i + 1) < this__7081.a.length))
{return (new cljs.core.IndexedSeq(this__7081.a,(this__7081.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7082 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__7083 = this;
var i__7084 = (n + this__7083.i);
if((i__7084 < this__7083.a.length))
{return (this__7083.a[i__7084]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__7085 = this;
var i__7086 = (n + this__7085.i);
if((i__7086 < this__7085.a.length))
{return (this__7085.a[i__7086]);
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
var G__7087 = null;
var G__7087__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__7087__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__7087 = function(array,f,start){
switch(arguments.length){
case 2:
return G__7087__2.call(this,array,f);
case 3:
return G__7087__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7087;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__7088 = null;
var G__7088__2 = (function (array,k){
return (array[k]);
});
var G__7088__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__7088 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__7088__2.call(this,array,k);
case 3:
return G__7088__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7088;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__7089 = null;
var G__7089__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__7089__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__7089 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__7089__2.call(this,array,n);
case 3:
return G__7089__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7089;
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
var this__7090 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7091 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__7092 = this;
var this__7093 = this;
return cljs.core.pr_str.call(null,this__7093);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7094 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7095 = this;
return (this__7095.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7096 = this;
return cljs.core._nth.call(null,this__7096.ci,this__7096.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7097 = this;
if((this__7097.i > 0))
{return (new cljs.core.RSeq(this__7097.ci,(this__7097.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7098 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__7099 = this;
return (new cljs.core.RSeq(this__7099.ci,this__7099.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7100 = this;
return this__7100.meta;
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
{if((function (){var G__7104__7105 = coll;
if(G__7104__7105)
{if((function (){var or__3824__auto____7106 = (G__7104__7105.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____7106)
{return or__3824__auto____7106;
} else
{return G__7104__7105.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__7104__7105.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__7104__7105);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__7104__7105);
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
{if((function (){var G__7111__7112 = coll;
if(G__7111__7112)
{if((function (){var or__3824__auto____7113 = (G__7111__7112.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7113)
{return or__3824__auto____7113;
} else
{return G__7111__7112.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7111__7112.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7111__7112);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7111__7112);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__7114 = cljs.core.seq.call(null,coll);
if((s__7114 == null))
{return null;
} else
{return cljs.core._first.call(null,s__7114);
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
{if((function (){var G__7119__7120 = coll;
if(G__7119__7120)
{if((function (){var or__3824__auto____7121 = (G__7119__7120.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7121)
{return or__3824__auto____7121;
} else
{return G__7119__7120.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7119__7120.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7119__7120);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7119__7120);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__7122 = cljs.core.seq.call(null,coll);
if(!((s__7122 == null)))
{return cljs.core._rest.call(null,s__7122);
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
{if((function (){var G__7126__7127 = coll;
if(G__7126__7127)
{if((function (){var or__3824__auto____7128 = (G__7126__7127.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____7128)
{return or__3824__auto____7128;
} else
{return G__7126__7127.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__7126__7127.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__7126__7127);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__7126__7127);
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
var sn__7130 = cljs.core.next.call(null,s);
if(!((sn__7130 == null)))
{{
var G__7131 = sn__7130;
s = G__7131;
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
var G__7132__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__7133 = conj.call(null,coll,x);
var G__7134 = cljs.core.first.call(null,xs);
var G__7135 = cljs.core.next.call(null,xs);
coll = G__7133;
x = G__7134;
xs = G__7135;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__7132 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7132__delegate.call(this, coll, x, xs);
};
G__7132.cljs$lang$maxFixedArity = 2;
G__7132.cljs$lang$applyTo = (function (arglist__7136){
var coll = cljs.core.first(arglist__7136);
var x = cljs.core.first(cljs.core.next(arglist__7136));
var xs = cljs.core.rest(cljs.core.next(arglist__7136));
return G__7132__delegate(coll, x, xs);
});
G__7132.cljs$lang$arity$variadic = G__7132__delegate;
return G__7132;
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
var s__7139 = cljs.core.seq.call(null,coll);
var acc__7140 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__7139))
{return (acc__7140 + cljs.core._count.call(null,s__7139));
} else
{{
var G__7141 = cljs.core.next.call(null,s__7139);
var G__7142 = (acc__7140 + 1);
s__7139 = G__7141;
acc__7140 = G__7142;
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
{if((function (){var G__7149__7150 = coll;
if(G__7149__7150)
{if((function (){var or__3824__auto____7151 = (G__7149__7150.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7151)
{return or__3824__auto____7151;
} else
{return G__7149__7150.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7149__7150.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7149__7150);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7149__7150);
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
{if((function (){var G__7152__7153 = coll;
if(G__7152__7153)
{if((function (){var or__3824__auto____7154 = (G__7152__7153.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7154)
{return or__3824__auto____7154;
} else
{return G__7152__7153.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7152__7153.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7152__7153);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7152__7153);
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
var G__7157__delegate = function (coll,k,v,kvs){
while(true){
var ret__7156 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__7158 = ret__7156;
var G__7159 = cljs.core.first.call(null,kvs);
var G__7160 = cljs.core.second.call(null,kvs);
var G__7161 = cljs.core.nnext.call(null,kvs);
coll = G__7158;
k = G__7159;
v = G__7160;
kvs = G__7161;
continue;
}
} else
{return ret__7156;
}
break;
}
};
var G__7157 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7157__delegate.call(this, coll, k, v, kvs);
};
G__7157.cljs$lang$maxFixedArity = 3;
G__7157.cljs$lang$applyTo = (function (arglist__7162){
var coll = cljs.core.first(arglist__7162);
var k = cljs.core.first(cljs.core.next(arglist__7162));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7162)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7162)));
return G__7157__delegate(coll, k, v, kvs);
});
G__7157.cljs$lang$arity$variadic = G__7157__delegate;
return G__7157;
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
var G__7165__delegate = function (coll,k,ks){
while(true){
var ret__7164 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__7166 = ret__7164;
var G__7167 = cljs.core.first.call(null,ks);
var G__7168 = cljs.core.next.call(null,ks);
coll = G__7166;
k = G__7167;
ks = G__7168;
continue;
}
} else
{return ret__7164;
}
break;
}
};
var G__7165 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7165__delegate.call(this, coll, k, ks);
};
G__7165.cljs$lang$maxFixedArity = 2;
G__7165.cljs$lang$applyTo = (function (arglist__7169){
var coll = cljs.core.first(arglist__7169);
var k = cljs.core.first(cljs.core.next(arglist__7169));
var ks = cljs.core.rest(cljs.core.next(arglist__7169));
return G__7165__delegate(coll, k, ks);
});
G__7165.cljs$lang$arity$variadic = G__7165__delegate;
return G__7165;
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
if((function (){var G__7173__7174 = o;
if(G__7173__7174)
{if((function (){var or__3824__auto____7175 = (G__7173__7174.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____7175)
{return or__3824__auto____7175;
} else
{return G__7173__7174.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__7173__7174.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__7173__7174);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__7173__7174);
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
var G__7178__delegate = function (coll,k,ks){
while(true){
var ret__7177 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__7179 = ret__7177;
var G__7180 = cljs.core.first.call(null,ks);
var G__7181 = cljs.core.next.call(null,ks);
coll = G__7179;
k = G__7180;
ks = G__7181;
continue;
}
} else
{return ret__7177;
}
break;
}
};
var G__7178 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7178__delegate.call(this, coll, k, ks);
};
G__7178.cljs$lang$maxFixedArity = 2;
G__7178.cljs$lang$applyTo = (function (arglist__7182){
var coll = cljs.core.first(arglist__7182);
var k = cljs.core.first(cljs.core.next(arglist__7182));
var ks = cljs.core.rest(cljs.core.next(arglist__7182));
return G__7178__delegate(coll, k, ks);
});
G__7178.cljs$lang$arity$variadic = G__7178__delegate;
return G__7178;
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
var h__7184 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__7184);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__7184;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__7186 = (cljs.core.string_hash_cache[k]);
if(!((h__7186 == null)))
{return h__7186;
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
if((function (){var and__3822__auto____7188 = goog.isString(o);
if(and__3822__auto____7188)
{return check_cache;
} else
{return and__3822__auto____7188;
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
{var G__7192__7193 = x;
if(G__7192__7193)
{if((function (){var or__3824__auto____7194 = (G__7192__7193.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____7194)
{return or__3824__auto____7194;
} else
{return G__7192__7193.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__7192__7193.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__7192__7193);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__7192__7193);
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
{var G__7198__7199 = x;
if(G__7198__7199)
{if((function (){var or__3824__auto____7200 = (G__7198__7199.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____7200)
{return or__3824__auto____7200;
} else
{return G__7198__7199.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__7198__7199.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__7198__7199);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__7198__7199);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__7204__7205 = x;
if(G__7204__7205)
{if((function (){var or__3824__auto____7206 = (G__7204__7205.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____7206)
{return or__3824__auto____7206;
} else
{return G__7204__7205.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__7204__7205.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__7204__7205);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__7204__7205);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__7210__7211 = x;
if(G__7210__7211)
{if((function (){var or__3824__auto____7212 = (G__7210__7211.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____7212)
{return or__3824__auto____7212;
} else
{return G__7210__7211.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__7210__7211.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__7210__7211);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__7210__7211);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__7216__7217 = x;
if(G__7216__7217)
{if((function (){var or__3824__auto____7218 = (G__7216__7217.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____7218)
{return or__3824__auto____7218;
} else
{return G__7216__7217.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__7216__7217.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__7216__7217);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__7216__7217);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__7222__7223 = x;
if(G__7222__7223)
{if((function (){var or__3824__auto____7224 = (G__7222__7223.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7224)
{return or__3824__auto____7224;
} else
{return G__7222__7223.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7222__7223.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7222__7223);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7222__7223);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__7228__7229 = x;
if(G__7228__7229)
{if((function (){var or__3824__auto____7230 = (G__7228__7229.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7230)
{return or__3824__auto____7230;
} else
{return G__7228__7229.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7228__7229.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7228__7229);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7228__7229);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__7234__7235 = x;
if(G__7234__7235)
{if((function (){var or__3824__auto____7236 = (G__7234__7235.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____7236)
{return or__3824__auto____7236;
} else
{return G__7234__7235.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__7234__7235.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__7234__7235);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__7234__7235);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__7240__7241 = x;
if(G__7240__7241)
{if((function (){var or__3824__auto____7242 = (G__7240__7241.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____7242)
{return or__3824__auto____7242;
} else
{return G__7240__7241.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__7240__7241.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__7240__7241);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__7240__7241);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__7246__7247 = x;
if(G__7246__7247)
{if(cljs.core.truth_((function (){var or__3824__auto____7248 = null;
if(cljs.core.truth_(or__3824__auto____7248))
{return or__3824__auto____7248;
} else
{return G__7246__7247.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__7246__7247.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__7246__7247);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__7246__7247);
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
var G__7249__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__7249 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7249__delegate.call(this, keyvals);
};
G__7249.cljs$lang$maxFixedArity = 0;
G__7249.cljs$lang$applyTo = (function (arglist__7250){
var keyvals = cljs.core.seq(arglist__7250);;
return G__7249__delegate(keyvals);
});
G__7249.cljs$lang$arity$variadic = G__7249__delegate;
return G__7249;
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
var keys__7252 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__7252.push(key);
}));
return keys__7252;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__7256 = i;
var j__7257 = j;
var len__7258 = len;
while(true){
if((len__7258 === 0))
{return to;
} else
{(to[j__7257] = (from[i__7256]));
{
var G__7259 = (i__7256 + 1);
var G__7260 = (j__7257 + 1);
var G__7261 = (len__7258 - 1);
i__7256 = G__7259;
j__7257 = G__7260;
len__7258 = G__7261;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__7265 = (i + (len - 1));
var j__7266 = (j + (len - 1));
var len__7267 = len;
while(true){
if((len__7267 === 0))
{return to;
} else
{(to[j__7266] = (from[i__7265]));
{
var G__7268 = (i__7265 - 1);
var G__7269 = (j__7266 - 1);
var G__7270 = (len__7267 - 1);
i__7265 = G__7268;
j__7266 = G__7269;
len__7267 = G__7270;
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
{var G__7274__7275 = s;
if(G__7274__7275)
{if((function (){var or__3824__auto____7276 = (G__7274__7275.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7276)
{return or__3824__auto____7276;
} else
{return G__7274__7275.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7274__7275.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7274__7275);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7274__7275);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__7280__7281 = s;
if(G__7280__7281)
{if((function (){var or__3824__auto____7282 = (G__7280__7281.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____7282)
{return or__3824__auto____7282;
} else
{return G__7280__7281.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__7280__7281.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__7280__7281);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__7280__7281);
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
var and__3822__auto____7285 = goog.isString(x);
if(and__3822__auto____7285)
{return !((function (){var or__3824__auto____7286 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____7286)
{return or__3824__auto____7286;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____7285;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____7288 = goog.isString(x);
if(and__3822__auto____7288)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____7288;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____7290 = goog.isString(x);
if(and__3822__auto____7290)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____7290;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____7295 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____7295)
{return or__3824__auto____7295;
} else
{var G__7296__7297 = f;
if(G__7296__7297)
{if((function (){var or__3824__auto____7298 = (G__7296__7297.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____7298)
{return or__3824__auto____7298;
} else
{return G__7296__7297.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__7296__7297.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__7296__7297);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__7296__7297);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____7300 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____7300)
{return (n == n.toFixed());
} else
{return and__3822__auto____7300;
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
if(cljs.core.truth_((function (){var and__3822__auto____7303 = coll;
if(cljs.core.truth_(and__3822__auto____7303))
{var and__3822__auto____7304 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____7304)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____7304;
}
} else
{return and__3822__auto____7303;
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
var G__7313__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__7309 = cljs.core.set([y,x]);
var xs__7310 = more;
while(true){
var x__7311 = cljs.core.first.call(null,xs__7310);
var etc__7312 = cljs.core.next.call(null,xs__7310);
if(cljs.core.truth_(xs__7310))
{if(cljs.core.contains_QMARK_.call(null,s__7309,x__7311))
{return false;
} else
{{
var G__7314 = cljs.core.conj.call(null,s__7309,x__7311);
var G__7315 = etc__7312;
s__7309 = G__7314;
xs__7310 = G__7315;
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
var G__7313 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7313__delegate.call(this, x, y, more);
};
G__7313.cljs$lang$maxFixedArity = 2;
G__7313.cljs$lang$applyTo = (function (arglist__7316){
var x = cljs.core.first(arglist__7316);
var y = cljs.core.first(cljs.core.next(arglist__7316));
var more = cljs.core.rest(cljs.core.next(arglist__7316));
return G__7313__delegate(x, y, more);
});
G__7313.cljs$lang$arity$variadic = G__7313__delegate;
return G__7313;
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
{if((function (){var G__7320__7321 = x;
if(G__7320__7321)
{if(cljs.core.truth_((function (){var or__3824__auto____7322 = null;
if(cljs.core.truth_(or__3824__auto____7322))
{return or__3824__auto____7322;
} else
{return G__7320__7321.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__7320__7321.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__7320__7321);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__7320__7321);
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
var xl__7327 = cljs.core.count.call(null,xs);
var yl__7328 = cljs.core.count.call(null,ys);
if((xl__7327 < yl__7328))
{return -1;
} else
{if((xl__7327 > yl__7328))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__7327,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__7329 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____7330 = (d__7329 === 0);
if(and__3822__auto____7330)
{return ((n + 1) < len);
} else
{return and__3822__auto____7330;
}
})())
{{
var G__7331 = xs;
var G__7332 = ys;
var G__7333 = len;
var G__7334 = (n + 1);
xs = G__7331;
ys = G__7332;
len = G__7333;
n = G__7334;
continue;
}
} else
{return d__7329;
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
var r__7336 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__7336))
{return r__7336;
} else
{if(cljs.core.truth_(r__7336))
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
{var a__7338 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__7338,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__7338);
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
var temp__3971__auto____7344 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____7344)
{var s__7345 = temp__3971__auto____7344;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__7345),cljs.core.next.call(null,s__7345));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__7346 = val;
var coll__7347 = cljs.core.seq.call(null,coll);
while(true){
if(coll__7347)
{var nval__7348 = f.call(null,val__7346,cljs.core.first.call(null,coll__7347));
if(cljs.core.reduced_QMARK_.call(null,nval__7348))
{return cljs.core.deref.call(null,nval__7348);
} else
{{
var G__7349 = nval__7348;
var G__7350 = cljs.core.next.call(null,coll__7347);
val__7346 = G__7349;
coll__7347 = G__7350;
continue;
}
}
} else
{return val__7346;
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
var a__7352 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__7352);
return cljs.core.vec.call(null,a__7352);
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
if((function (){var G__7359__7360 = coll;
if(G__7359__7360)
{if((function (){var or__3824__auto____7361 = (G__7359__7360.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7361)
{return or__3824__auto____7361;
} else
{return G__7359__7360.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7359__7360.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7359__7360);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7359__7360);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__7362__7363 = coll;
if(G__7362__7363)
{if((function (){var or__3824__auto____7364 = (G__7362__7363.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7364)
{return or__3824__auto____7364;
} else
{return G__7362__7363.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7362__7363.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7362__7363);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7362__7363);
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
var this__7365 = this;
return this__7365.val;
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
var G__7366__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__7366 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7366__delegate.call(this, x, y, more);
};
G__7366.cljs$lang$maxFixedArity = 2;
G__7366.cljs$lang$applyTo = (function (arglist__7367){
var x = cljs.core.first(arglist__7367);
var y = cljs.core.first(cljs.core.next(arglist__7367));
var more = cljs.core.rest(cljs.core.next(arglist__7367));
return G__7366__delegate(x, y, more);
});
G__7366.cljs$lang$arity$variadic = G__7366__delegate;
return G__7366;
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
var G__7368__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__7368 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7368__delegate.call(this, x, y, more);
};
G__7368.cljs$lang$maxFixedArity = 2;
G__7368.cljs$lang$applyTo = (function (arglist__7369){
var x = cljs.core.first(arglist__7369);
var y = cljs.core.first(cljs.core.next(arglist__7369));
var more = cljs.core.rest(cljs.core.next(arglist__7369));
return G__7368__delegate(x, y, more);
});
G__7368.cljs$lang$arity$variadic = G__7368__delegate;
return G__7368;
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
var G__7370__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__7370 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7370__delegate.call(this, x, y, more);
};
G__7370.cljs$lang$maxFixedArity = 2;
G__7370.cljs$lang$applyTo = (function (arglist__7371){
var x = cljs.core.first(arglist__7371);
var y = cljs.core.first(cljs.core.next(arglist__7371));
var more = cljs.core.rest(cljs.core.next(arglist__7371));
return G__7370__delegate(x, y, more);
});
G__7370.cljs$lang$arity$variadic = G__7370__delegate;
return G__7370;
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
var G__7372__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__7372 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7372__delegate.call(this, x, y, more);
};
G__7372.cljs$lang$maxFixedArity = 2;
G__7372.cljs$lang$applyTo = (function (arglist__7373){
var x = cljs.core.first(arglist__7373);
var y = cljs.core.first(cljs.core.next(arglist__7373));
var more = cljs.core.rest(cljs.core.next(arglist__7373));
return G__7372__delegate(x, y, more);
});
G__7372.cljs$lang$arity$variadic = G__7372__delegate;
return G__7372;
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
var G__7374__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__7375 = y;
var G__7376 = cljs.core.first.call(null,more);
var G__7377 = cljs.core.next.call(null,more);
x = G__7375;
y = G__7376;
more = G__7377;
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
var G__7374 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7374__delegate.call(this, x, y, more);
};
G__7374.cljs$lang$maxFixedArity = 2;
G__7374.cljs$lang$applyTo = (function (arglist__7378){
var x = cljs.core.first(arglist__7378);
var y = cljs.core.first(cljs.core.next(arglist__7378));
var more = cljs.core.rest(cljs.core.next(arglist__7378));
return G__7374__delegate(x, y, more);
});
G__7374.cljs$lang$arity$variadic = G__7374__delegate;
return G__7374;
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
var G__7379__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__7380 = y;
var G__7381 = cljs.core.first.call(null,more);
var G__7382 = cljs.core.next.call(null,more);
x = G__7380;
y = G__7381;
more = G__7382;
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
var G__7379 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7379__delegate.call(this, x, y, more);
};
G__7379.cljs$lang$maxFixedArity = 2;
G__7379.cljs$lang$applyTo = (function (arglist__7383){
var x = cljs.core.first(arglist__7383);
var y = cljs.core.first(cljs.core.next(arglist__7383));
var more = cljs.core.rest(cljs.core.next(arglist__7383));
return G__7379__delegate(x, y, more);
});
G__7379.cljs$lang$arity$variadic = G__7379__delegate;
return G__7379;
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
var G__7384__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__7385 = y;
var G__7386 = cljs.core.first.call(null,more);
var G__7387 = cljs.core.next.call(null,more);
x = G__7385;
y = G__7386;
more = G__7387;
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
var G__7384 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7384__delegate.call(this, x, y, more);
};
G__7384.cljs$lang$maxFixedArity = 2;
G__7384.cljs$lang$applyTo = (function (arglist__7388){
var x = cljs.core.first(arglist__7388);
var y = cljs.core.first(cljs.core.next(arglist__7388));
var more = cljs.core.rest(cljs.core.next(arglist__7388));
return G__7384__delegate(x, y, more);
});
G__7384.cljs$lang$arity$variadic = G__7384__delegate;
return G__7384;
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
var G__7389__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__7390 = y;
var G__7391 = cljs.core.first.call(null,more);
var G__7392 = cljs.core.next.call(null,more);
x = G__7390;
y = G__7391;
more = G__7392;
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
var G__7389 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7389__delegate.call(this, x, y, more);
};
G__7389.cljs$lang$maxFixedArity = 2;
G__7389.cljs$lang$applyTo = (function (arglist__7393){
var x = cljs.core.first(arglist__7393);
var y = cljs.core.first(cljs.core.next(arglist__7393));
var more = cljs.core.rest(cljs.core.next(arglist__7393));
return G__7389__delegate(x, y, more);
});
G__7389.cljs$lang$arity$variadic = G__7389__delegate;
return G__7389;
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
var G__7394__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__7394 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7394__delegate.call(this, x, y, more);
};
G__7394.cljs$lang$maxFixedArity = 2;
G__7394.cljs$lang$applyTo = (function (arglist__7395){
var x = cljs.core.first(arglist__7395);
var y = cljs.core.first(cljs.core.next(arglist__7395));
var more = cljs.core.rest(cljs.core.next(arglist__7395));
return G__7394__delegate(x, y, more);
});
G__7394.cljs$lang$arity$variadic = G__7394__delegate;
return G__7394;
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
var G__7396__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__7396 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7396__delegate.call(this, x, y, more);
};
G__7396.cljs$lang$maxFixedArity = 2;
G__7396.cljs$lang$applyTo = (function (arglist__7397){
var x = cljs.core.first(arglist__7397);
var y = cljs.core.first(cljs.core.next(arglist__7397));
var more = cljs.core.rest(cljs.core.next(arglist__7397));
return G__7396__delegate(x, y, more);
});
G__7396.cljs$lang$arity$variadic = G__7396__delegate;
return G__7396;
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
var rem__7399 = (n % d);
return cljs.core.fix.call(null,((n - rem__7399) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__7401 = cljs.core.quot.call(null,n,d);
return (n - (d * q__7401));
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
var v__7404 = (v - ((v >> 1) & 1431655765));
var v__7405 = ((v__7404 & 858993459) + ((v__7404 >> 2) & 858993459));
return ((((v__7405 + (v__7405 >> 4)) & 252645135) * 16843009) >> 24);
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
var G__7406__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__7407 = y;
var G__7408 = cljs.core.first.call(null,more);
var G__7409 = cljs.core.next.call(null,more);
x = G__7407;
y = G__7408;
more = G__7409;
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
var G__7406 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7406__delegate.call(this, x, y, more);
};
G__7406.cljs$lang$maxFixedArity = 2;
G__7406.cljs$lang$applyTo = (function (arglist__7410){
var x = cljs.core.first(arglist__7410);
var y = cljs.core.first(cljs.core.next(arglist__7410));
var more = cljs.core.rest(cljs.core.next(arglist__7410));
return G__7406__delegate(x, y, more);
});
G__7406.cljs$lang$arity$variadic = G__7406__delegate;
return G__7406;
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
var n__7414 = n;
var xs__7415 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7416 = xs__7415;
if(and__3822__auto____7416)
{return (n__7414 > 0);
} else
{return and__3822__auto____7416;
}
})()))
{{
var G__7417 = (n__7414 - 1);
var G__7418 = cljs.core.next.call(null,xs__7415);
n__7414 = G__7417;
xs__7415 = G__7418;
continue;
}
} else
{return xs__7415;
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
var G__7419__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7420 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__7421 = cljs.core.next.call(null,more);
sb = G__7420;
more = G__7421;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__7419 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7419__delegate.call(this, x, ys);
};
G__7419.cljs$lang$maxFixedArity = 1;
G__7419.cljs$lang$applyTo = (function (arglist__7422){
var x = cljs.core.first(arglist__7422);
var ys = cljs.core.rest(arglist__7422);
return G__7419__delegate(x, ys);
});
G__7419.cljs$lang$arity$variadic = G__7419__delegate;
return G__7419;
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
var G__7423__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7424 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__7425 = cljs.core.next.call(null,more);
sb = G__7424;
more = G__7425;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__7423 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7423__delegate.call(this, x, ys);
};
G__7423.cljs$lang$maxFixedArity = 1;
G__7423.cljs$lang$applyTo = (function (arglist__7426){
var x = cljs.core.first(arglist__7426);
var ys = cljs.core.rest(arglist__7426);
return G__7423__delegate(x, ys);
});
G__7423.cljs$lang$arity$variadic = G__7423__delegate;
return G__7423;
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__7429 = cljs.core.seq.call(null,x);
var ys__7430 = cljs.core.seq.call(null,y);
while(true){
if((xs__7429 == null))
{return (ys__7430 == null);
} else
{if((ys__7430 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__7429),cljs.core.first.call(null,ys__7430)))
{{
var G__7431 = cljs.core.next.call(null,xs__7429);
var G__7432 = cljs.core.next.call(null,ys__7430);
xs__7429 = G__7431;
ys__7430 = G__7432;
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
return cljs.core.reduce.call(null,(function (p1__7433_SHARP_,p2__7434_SHARP_){
return cljs.core.hash_combine.call(null,p1__7433_SHARP_,cljs.core.hash.call(null,p2__7434_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
void 0;
void 0;
cljs.core.hash_imap = (function hash_imap(m){
var h__7438 = 0;
var s__7439 = cljs.core.seq.call(null,m);
while(true){
if(s__7439)
{var e__7440 = cljs.core.first.call(null,s__7439);
{
var G__7441 = ((h__7438 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__7440)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__7440)))) % 4503599627370496);
var G__7442 = cljs.core.next.call(null,s__7439);
h__7438 = G__7441;
s__7439 = G__7442;
continue;
}
} else
{return h__7438;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__7446 = 0;
var s__7447 = cljs.core.seq.call(null,s);
while(true){
if(s__7447)
{var e__7448 = cljs.core.first.call(null,s__7447);
{
var G__7449 = ((h__7446 + cljs.core.hash.call(null,e__7448)) % 4503599627370496);
var G__7450 = cljs.core.next.call(null,s__7447);
h__7446 = G__7449;
s__7447 = G__7450;
continue;
}
} else
{return h__7446;
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
var G__7471__7472 = cljs.core.seq.call(null,fn_map);
if(G__7471__7472)
{var G__7474__7476 = cljs.core.first.call(null,G__7471__7472);
var vec__7475__7477 = G__7474__7476;
var key_name__7478 = cljs.core.nth.call(null,vec__7475__7477,0,null);
var f__7479 = cljs.core.nth.call(null,vec__7475__7477,1,null);
var G__7471__7480 = G__7471__7472;
var G__7474__7481 = G__7474__7476;
var G__7471__7482 = G__7471__7480;
while(true){
var vec__7483__7484 = G__7474__7481;
var key_name__7485 = cljs.core.nth.call(null,vec__7483__7484,0,null);
var f__7486 = cljs.core.nth.call(null,vec__7483__7484,1,null);
var G__7471__7487 = G__7471__7482;
var str_name__7488 = cljs.core.name.call(null,key_name__7485);
(obj[str_name__7488] = f__7486);
var temp__3974__auto____7489 = cljs.core.next.call(null,G__7471__7487);
if(temp__3974__auto____7489)
{var G__7471__7490 = temp__3974__auto____7489;
{
var G__7491 = cljs.core.first.call(null,G__7471__7490);
var G__7492 = G__7471__7490;
G__7474__7481 = G__7491;
G__7471__7482 = G__7492;
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
var this__7493 = this;
var h__2153__auto____7494 = this__7493.__hash;
if(!((h__2153__auto____7494 == null)))
{return h__2153__auto____7494;
} else
{var h__2153__auto____7495 = cljs.core.hash_coll.call(null,coll);
this__7493.__hash = h__2153__auto____7495;
return h__2153__auto____7495;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7496 = this;
if((this__7496.count === 1))
{return null;
} else
{return this__7496.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7497 = this;
return (new cljs.core.List(this__7497.meta,o,coll,(this__7497.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__7498 = this;
var this__7499 = this;
return cljs.core.pr_str.call(null,this__7499);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7500 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7501 = this;
return this__7501.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7502 = this;
return this__7502.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7503 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7504 = this;
return this__7504.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7505 = this;
if((this__7505.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__7505.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7506 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7507 = this;
return (new cljs.core.List(meta,this__7507.first,this__7507.rest,this__7507.count,this__7507.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7508 = this;
return this__7508.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7509 = this;
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
var this__7510 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7511 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7512 = this;
return (new cljs.core.List(this__7512.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__7513 = this;
var this__7514 = this;
return cljs.core.pr_str.call(null,this__7514);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7515 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7516 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7517 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7518 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7519 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7520 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7521 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7522 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7523 = this;
return this__7523.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7524 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__7528__7529 = coll;
if(G__7528__7529)
{if((function (){var or__3824__auto____7530 = (G__7528__7529.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____7530)
{return or__3824__auto____7530;
} else
{return G__7528__7529.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__7528__7529.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7528__7529);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7528__7529);
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
var G__7531__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__7531 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7531__delegate.call(this, x, y, z, items);
};
G__7531.cljs$lang$maxFixedArity = 3;
G__7531.cljs$lang$applyTo = (function (arglist__7532){
var x = cljs.core.first(arglist__7532);
var y = cljs.core.first(cljs.core.next(arglist__7532));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7532)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7532)));
return G__7531__delegate(x, y, z, items);
});
G__7531.cljs$lang$arity$variadic = G__7531__delegate;
return G__7531;
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
var this__7533 = this;
var h__2153__auto____7534 = this__7533.__hash;
if(!((h__2153__auto____7534 == null)))
{return h__2153__auto____7534;
} else
{var h__2153__auto____7535 = cljs.core.hash_coll.call(null,coll);
this__7533.__hash = h__2153__auto____7535;
return h__2153__auto____7535;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7536 = this;
if((this__7536.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__7536.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7537 = this;
return (new cljs.core.Cons(null,o,coll,this__7537.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__7538 = this;
var this__7539 = this;
return cljs.core.pr_str.call(null,this__7539);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7540 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7541 = this;
return this__7541.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7542 = this;
if((this__7542.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__7542.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7543 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7544 = this;
return (new cljs.core.Cons(meta,this__7544.first,this__7544.rest,this__7544.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7545 = this;
return this__7545.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7546 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7546.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____7551 = (coll == null);
if(or__3824__auto____7551)
{return or__3824__auto____7551;
} else
{var G__7552__7553 = coll;
if(G__7552__7553)
{if((function (){var or__3824__auto____7554 = (G__7552__7553.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7554)
{return or__3824__auto____7554;
} else
{return G__7552__7553.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7552__7553.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7552__7553);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7552__7553);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__7558__7559 = x;
if(G__7558__7559)
{if((function (){var or__3824__auto____7560 = (G__7558__7559.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____7560)
{return or__3824__auto____7560;
} else
{return G__7558__7559.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__7558__7559.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7558__7559);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7558__7559);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__7561 = null;
var G__7561__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__7561__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__7561 = function(string,f,start){
switch(arguments.length){
case 2:
return G__7561__2.call(this,string,f);
case 3:
return G__7561__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7561;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__7562 = null;
var G__7562__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__7562__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__7562 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__7562__2.call(this,string,k);
case 3:
return G__7562__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7562;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__7563 = null;
var G__7563__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__7563__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__7563 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__7563__2.call(this,string,n);
case 3:
return G__7563__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7563;
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
cljs.core.Keyword.prototype.call = (function (this_sym7566,coll){
var this__7567 = this;
var this_sym7566__7568 = this;
var ___7569 = this_sym7566__7568;
if((coll == null))
{return null;
} else
{var strobj__7570 = coll.strobj;
if((strobj__7570 == null))
{return cljs.core._lookup.call(null,coll,this__7567.k,null);
} else
{return (strobj__7570[this__7567.k]);
}
}
});
cljs.core.Keyword.prototype.apply = (function (this_sym7564,args7565){
var this__7571 = this;
return this_sym7564.call.apply(this_sym7564,[this_sym7564].concat(args7565.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__7580 = null;
var G__7580__2 = (function (this_sym7574,coll){
var this_sym7574__7576 = this;
var this__7577 = this_sym7574__7576;
return cljs.core._lookup.call(null,coll,this__7577.toString(),null);
});
var G__7580__3 = (function (this_sym7575,coll,not_found){
var this_sym7575__7578 = this;
var this__7579 = this_sym7575__7578;
return cljs.core._lookup.call(null,coll,this__7579.toString(),not_found);
});
G__7580 = function(this_sym7575,coll,not_found){
switch(arguments.length){
case 2:
return G__7580__2.call(this,this_sym7575,coll);
case 3:
return G__7580__3.call(this,this_sym7575,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7580;
})()
;
String.prototype.apply = (function (this_sym7572,args7573){
return this_sym7572.call.apply(this_sym7572,[this_sym7572].concat(args7573.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__7582 = lazy_seq.x;
if(lazy_seq.realized)
{return x__7582;
} else
{lazy_seq.x = x__7582.call(null);
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
var this__7583 = this;
var h__2153__auto____7584 = this__7583.__hash;
if(!((h__2153__auto____7584 == null)))
{return h__2153__auto____7584;
} else
{var h__2153__auto____7585 = cljs.core.hash_coll.call(null,coll);
this__7583.__hash = h__2153__auto____7585;
return h__2153__auto____7585;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7586 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7587 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__7588 = this;
var this__7589 = this;
return cljs.core.pr_str.call(null,this__7589);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7590 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7591 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7592 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7593 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7594 = this;
return (new cljs.core.LazySeq(meta,this__7594.realized,this__7594.x,this__7594.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7595 = this;
return this__7595.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7596 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7596.meta);
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
var this__7597 = this;
return this__7597.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__7598 = this;
var ___7599 = this;
(this__7598.buf[this__7598.end] = o);
return this__7598.end = (this__7598.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__7600 = this;
var ___7601 = this;
var ret__7602 = (new cljs.core.ArrayChunk(this__7600.buf,0,this__7600.end));
this__7600.buf = null;
return ret__7602;
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
var this__7603 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__7603.arr[this__7603.off]),(this__7603.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7604 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__7604.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__7605 = this;
if((this__7605.off === this__7605.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__7605.arr,(this__7605.off + 1),this__7605.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__7606 = this;
return (this__7606.arr[(this__7606.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__7607 = this;
if((function (){var and__3822__auto____7608 = (i >= 0);
if(and__3822__auto____7608)
{return (i < (this__7607.end - this__7607.off));
} else
{return and__3822__auto____7608;
}
})())
{return (this__7607.arr[(this__7607.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7609 = this;
return (this__7609.end - this__7609.off);
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
var this__7610 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7611 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7612 = this;
return cljs.core._nth.call(null,this__7612.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7613 = this;
if((cljs.core._count.call(null,this__7613.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__7613.chunk),this__7613.more,this__7613.meta));
} else
{if((this__7613.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__7613.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__7614 = this;
if((this__7614.more == null))
{return null;
} else
{return this__7614.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7615 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__7616 = this;
return (new cljs.core.ChunkedCons(this__7616.chunk,this__7616.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7617 = this;
return this__7617.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__7618 = this;
return this__7618.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__7619 = this;
if((this__7619.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__7619.more;
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
if((function (){var G__7623__7624 = s;
if(G__7623__7624)
{if(cljs.core.truth_((function (){var or__3824__auto____7625 = null;
if(cljs.core.truth_(or__3824__auto____7625))
{return or__3824__auto____7625;
} else
{return G__7623__7624.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__7623__7624.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__7623__7624);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__7623__7624);
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
var ary__7628 = [];
var s__7629 = s;
while(true){
if(cljs.core.seq.call(null,s__7629))
{ary__7628.push(cljs.core.first.call(null,s__7629));
{
var G__7630 = cljs.core.next.call(null,s__7629);
s__7629 = G__7630;
continue;
}
} else
{return ary__7628;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__7634 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__7635 = 0;
var xs__7636 = cljs.core.seq.call(null,coll);
while(true){
if(xs__7636)
{(ret__7634[i__7635] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__7636)));
{
var G__7637 = (i__7635 + 1);
var G__7638 = cljs.core.next.call(null,xs__7636);
i__7635 = G__7637;
xs__7636 = G__7638;
continue;
}
} else
{}
break;
}
return ret__7634;
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
var a__7646 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7647 = cljs.core.seq.call(null,init_val_or_seq);
var i__7648 = 0;
var s__7649 = s__7647;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7650 = s__7649;
if(and__3822__auto____7650)
{return (i__7648 < size);
} else
{return and__3822__auto____7650;
}
})()))
{(a__7646[i__7648] = cljs.core.first.call(null,s__7649));
{
var G__7653 = (i__7648 + 1);
var G__7654 = cljs.core.next.call(null,s__7649);
i__7648 = G__7653;
s__7649 = G__7654;
continue;
}
} else
{return a__7646;
}
break;
}
} else
{var n__2492__auto____7651 = size;
var i__7652 = 0;
while(true){
if((i__7652 < n__2492__auto____7651))
{(a__7646[i__7652] = init_val_or_seq);
{
var G__7655 = (i__7652 + 1);
i__7652 = G__7655;
continue;
}
} else
{}
break;
}
return a__7646;
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
var a__7663 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7664 = cljs.core.seq.call(null,init_val_or_seq);
var i__7665 = 0;
var s__7666 = s__7664;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7667 = s__7666;
if(and__3822__auto____7667)
{return (i__7665 < size);
} else
{return and__3822__auto____7667;
}
})()))
{(a__7663[i__7665] = cljs.core.first.call(null,s__7666));
{
var G__7670 = (i__7665 + 1);
var G__7671 = cljs.core.next.call(null,s__7666);
i__7665 = G__7670;
s__7666 = G__7671;
continue;
}
} else
{return a__7663;
}
break;
}
} else
{var n__2492__auto____7668 = size;
var i__7669 = 0;
while(true){
if((i__7669 < n__2492__auto____7668))
{(a__7663[i__7669] = init_val_or_seq);
{
var G__7672 = (i__7669 + 1);
i__7669 = G__7672;
continue;
}
} else
{}
break;
}
return a__7663;
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
var a__7680 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7681 = cljs.core.seq.call(null,init_val_or_seq);
var i__7682 = 0;
var s__7683 = s__7681;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7684 = s__7683;
if(and__3822__auto____7684)
{return (i__7682 < size);
} else
{return and__3822__auto____7684;
}
})()))
{(a__7680[i__7682] = cljs.core.first.call(null,s__7683));
{
var G__7687 = (i__7682 + 1);
var G__7688 = cljs.core.next.call(null,s__7683);
i__7682 = G__7687;
s__7683 = G__7688;
continue;
}
} else
{return a__7680;
}
break;
}
} else
{var n__2492__auto____7685 = size;
var i__7686 = 0;
while(true){
if((i__7686 < n__2492__auto____7685))
{(a__7680[i__7686] = init_val_or_seq);
{
var G__7689 = (i__7686 + 1);
i__7686 = G__7689;
continue;
}
} else
{}
break;
}
return a__7680;
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
{var s__7694 = s;
var i__7695 = n;
var sum__7696 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7697 = (i__7695 > 0);
if(and__3822__auto____7697)
{return cljs.core.seq.call(null,s__7694);
} else
{return and__3822__auto____7697;
}
})()))
{{
var G__7698 = cljs.core.next.call(null,s__7694);
var G__7699 = (i__7695 - 1);
var G__7700 = (sum__7696 + 1);
s__7694 = G__7698;
i__7695 = G__7699;
sum__7696 = G__7700;
continue;
}
} else
{return sum__7696;
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
var s__7705 = cljs.core.seq.call(null,x);
if(s__7705)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__7705))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__7705),concat.call(null,cljs.core.chunk_rest.call(null,s__7705),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__7705),concat.call(null,cljs.core.rest.call(null,s__7705),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__7709__delegate = function (x,y,zs){
var cat__7708 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__7707 = cljs.core.seq.call(null,xys);
if(xys__7707)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__7707))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__7707),cat.call(null,cljs.core.chunk_rest.call(null,xys__7707),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__7707),cat.call(null,cljs.core.rest.call(null,xys__7707),zs));
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
return cat__7708.call(null,concat.call(null,x,y),zs);
};
var G__7709 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7709__delegate.call(this, x, y, zs);
};
G__7709.cljs$lang$maxFixedArity = 2;
G__7709.cljs$lang$applyTo = (function (arglist__7710){
var x = cljs.core.first(arglist__7710);
var y = cljs.core.first(cljs.core.next(arglist__7710));
var zs = cljs.core.rest(cljs.core.next(arglist__7710));
return G__7709__delegate(x, y, zs);
});
G__7709.cljs$lang$arity$variadic = G__7709__delegate;
return G__7709;
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
var G__7711__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__7711 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7711__delegate.call(this, a, b, c, d, more);
};
G__7711.cljs$lang$maxFixedArity = 4;
G__7711.cljs$lang$applyTo = (function (arglist__7712){
var a = cljs.core.first(arglist__7712);
var b = cljs.core.first(cljs.core.next(arglist__7712));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7712)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7712))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7712))));
return G__7711__delegate(a, b, c, d, more);
});
G__7711.cljs$lang$arity$variadic = G__7711__delegate;
return G__7711;
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
var args__7754 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__7755 = cljs.core._first.call(null,args__7754);
var args__7756 = cljs.core._rest.call(null,args__7754);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__7755);
} else
{return f.call(null,a__7755);
}
} else
{var b__7757 = cljs.core._first.call(null,args__7756);
var args__7758 = cljs.core._rest.call(null,args__7756);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__7755,b__7757);
} else
{return f.call(null,a__7755,b__7757);
}
} else
{var c__7759 = cljs.core._first.call(null,args__7758);
var args__7760 = cljs.core._rest.call(null,args__7758);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__7755,b__7757,c__7759);
} else
{return f.call(null,a__7755,b__7757,c__7759);
}
} else
{var d__7761 = cljs.core._first.call(null,args__7760);
var args__7762 = cljs.core._rest.call(null,args__7760);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__7755,b__7757,c__7759,d__7761);
} else
{return f.call(null,a__7755,b__7757,c__7759,d__7761);
}
} else
{var e__7763 = cljs.core._first.call(null,args__7762);
var args__7764 = cljs.core._rest.call(null,args__7762);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__7755,b__7757,c__7759,d__7761,e__7763);
} else
{return f.call(null,a__7755,b__7757,c__7759,d__7761,e__7763);
}
} else
{var f__7765 = cljs.core._first.call(null,args__7764);
var args__7766 = cljs.core._rest.call(null,args__7764);
if((argc === 6))
{if(f__7765.cljs$lang$arity$6)
{return f__7765.cljs$lang$arity$6(a__7755,b__7757,c__7759,d__7761,e__7763,f__7765);
} else
{return f__7765.call(null,a__7755,b__7757,c__7759,d__7761,e__7763,f__7765);
}
} else
{var g__7767 = cljs.core._first.call(null,args__7766);
var args__7768 = cljs.core._rest.call(null,args__7766);
if((argc === 7))
{if(f__7765.cljs$lang$arity$7)
{return f__7765.cljs$lang$arity$7(a__7755,b__7757,c__7759,d__7761,e__7763,f__7765,g__7767);
} else
{return f__7765.call(null,a__7755,b__7757,c__7759,d__7761,e__7763,f__7765,g__7767);
}
} else
{var h__7769 = cljs.core._first.call(null,args__7768);
var args__7770 = cljs.core._rest.call(null,args__7768);
if((argc === 8))
{if(f__7765.cljs$lang$arity$8)
{return f__7765.cljs$lang$arity$8(a__7755,b__7757,c__7759,d__7761,e__7763,f__7765,g__7767,h__7769);
} else
{return f__7765.call(null,a__7755,b__7757,c__7759,d__7761,e__7763,f__7765,g__7767,h__7769);
}
} else
{var i__7771 = cljs.core._first.call(null,args__7770);
var args__7772 = cljs.core._rest.call(null,args__7770);
if((argc === 9))
{if(f__7765.cljs$lang$arity$9)
{return f__7765.cljs$lang$arity$9(a__7755,b__7757,c__7759,d__7761,e__7763,f__7765,g__7767,h__7769,i__7771);
} else
{return f__7765.call(null,a__7755,b__7757,c__7759,d__7761,e__7763,f__7765,g__7767,h__7769,i__7771);
}
} else
{var j__7773 = cljs.core._first.call(null,args__7772);
var args__7774 = cljs.core._rest.call(null,args__7772);
if((argc === 10))
{if(f__7765.cljs$lang$arity$10)
{return f__7765.cljs$lang$arity$10(a__7755,b__7757,c__7759,d__7761,e__7763,f__7765,g__7767,h__7769,i__7771,j__7773);
} else
{return f__7765.call(null,a__7755,b__7757,c__7759,d__7761,e__7763,f__7765,g__7767,h__7769,i__7771,j__7773);
}
} else
{var k__7775 = cljs.core._first.call(null,args__7774);
var args__7776 = cljs.core._rest.call(null,args__7774);
if((argc === 11))
{if(f__7765.cljs$lang$arity$11)
{return f__7765.cljs$lang$arity$11(a__7755,b__7757,c__7759,d__7761,e__7763,f__7765,g__7767,h__7769,i__7771,j__7773,k__7775);
} else
{return f__7765.call(null,a__7755,b__7757,c__7759,d__7761,e__7763,f__7765,g__7767,h__7769,i__7771,j__7773,k__7775);
}
} else
{var l__7777 = cljs.core._first.call(null,args__7776);
var args__7778 = cljs.core._rest.call(null,args__7776);
if((argc === 12))
{if(f__7765.cljs$lang$arity$12)
{return f__7765.cljs$lang$arity$12(a__7755,b__7757,c__7759,d__7761,e__7763,f__7765,g__7767,h__7769,i__7771,j__7773,k__7775,l__7777);
} else
{return f__7765.call(null,a__7755,b__7757,c__7759,d__7761,e__7763,f__7765,g__7767,h__7769,i__7771,j__7773,k__7775,l__7777);
}
} else
{var m__7779 = cljs.core._first.call(null,args__7778);
var args__7780 = cljs.core._rest.call(null,args__7778);
if((argc === 13))
{if(f__7765.cljs$lang$arity$13)
{return f__7765.cljs$lang$arity$13(a__7755,b__7757,c__7759,d__7761,e__7763,f__7765,g__7767,h__7769,i__7771,j__7773,k__7775,l__7777,m__7779);
} else
{return f__7765.call(null,a__7755,b__7757,c__7759,d__7761,e__7763,f__7765,g__7767,h__7769,i__7771,j__7773,k__7775,l__7777,m__7779);
}
} else
{var n__7781 = cljs.core._first.call(null,args__7780);
var args__7782 = cljs.core._rest.call(null,args__7780);
if((argc === 14))
{if(f__7765.cljs$lang$arity$14)
{return f__7765.cljs$lang$arity$14(a__7755,b__7757,c__7759,d__7761,e__7763,f__7765,g__7767,h__7769,i__7771,j__7773,k__7775,l__7777,m__7779,n__7781);
} else
{return f__7765.call(null,a__7755,b__7757,c__7759,d__7761,e__7763,f__7765,g__7767,h__7769,i__7771,j__7773,k__7775,l__7777,m__7779,n__7781);
}
} else
{var o__7783 = cljs.core._first.call(null,args__7782);
var args__7784 = cljs.core._rest.call(null,args__7782);
if((argc === 15))
{if(f__7765.cljs$lang$arity$15)
{return f__7765.cljs$lang$arity$15(a__7755,b__7757,c__7759,d__7761,e__7763,f__7765,g__7767,h__7769,i__7771,j__7773,k__7775,l__7777,m__7779,n__7781,o__7783);
} else
{return f__7765.call(null,a__7755,b__7757,c__7759,d__7761,e__7763,f__7765,g__7767,h__7769,i__7771,j__7773,k__7775,l__7777,m__7779,n__7781,o__7783);
}
} else
{var p__7785 = cljs.core._first.call(null,args__7784);
var args__7786 = cljs.core._rest.call(null,args__7784);
if((argc === 16))
{if(f__7765.cljs$lang$arity$16)
{return f__7765.cljs$lang$arity$16(a__7755,b__7757,c__7759,d__7761,e__7763,f__7765,g__7767,h__7769,i__7771,j__7773,k__7775,l__7777,m__7779,n__7781,o__7783,p__7785);
} else
{return f__7765.call(null,a__7755,b__7757,c__7759,d__7761,e__7763,f__7765,g__7767,h__7769,i__7771,j__7773,k__7775,l__7777,m__7779,n__7781,o__7783,p__7785);
}
} else
{var q__7787 = cljs.core._first.call(null,args__7786);
var args__7788 = cljs.core._rest.call(null,args__7786);
if((argc === 17))
{if(f__7765.cljs$lang$arity$17)
{return f__7765.cljs$lang$arity$17(a__7755,b__7757,c__7759,d__7761,e__7763,f__7765,g__7767,h__7769,i__7771,j__7773,k__7775,l__7777,m__7779,n__7781,o__7783,p__7785,q__7787);
} else
{return f__7765.call(null,a__7755,b__7757,c__7759,d__7761,e__7763,f__7765,g__7767,h__7769,i__7771,j__7773,k__7775,l__7777,m__7779,n__7781,o__7783,p__7785,q__7787);
}
} else
{var r__7789 = cljs.core._first.call(null,args__7788);
var args__7790 = cljs.core._rest.call(null,args__7788);
if((argc === 18))
{if(f__7765.cljs$lang$arity$18)
{return f__7765.cljs$lang$arity$18(a__7755,b__7757,c__7759,d__7761,e__7763,f__7765,g__7767,h__7769,i__7771,j__7773,k__7775,l__7777,m__7779,n__7781,o__7783,p__7785,q__7787,r__7789);
} else
{return f__7765.call(null,a__7755,b__7757,c__7759,d__7761,e__7763,f__7765,g__7767,h__7769,i__7771,j__7773,k__7775,l__7777,m__7779,n__7781,o__7783,p__7785,q__7787,r__7789);
}
} else
{var s__7791 = cljs.core._first.call(null,args__7790);
var args__7792 = cljs.core._rest.call(null,args__7790);
if((argc === 19))
{if(f__7765.cljs$lang$arity$19)
{return f__7765.cljs$lang$arity$19(a__7755,b__7757,c__7759,d__7761,e__7763,f__7765,g__7767,h__7769,i__7771,j__7773,k__7775,l__7777,m__7779,n__7781,o__7783,p__7785,q__7787,r__7789,s__7791);
} else
{return f__7765.call(null,a__7755,b__7757,c__7759,d__7761,e__7763,f__7765,g__7767,h__7769,i__7771,j__7773,k__7775,l__7777,m__7779,n__7781,o__7783,p__7785,q__7787,r__7789,s__7791);
}
} else
{var t__7793 = cljs.core._first.call(null,args__7792);
var args__7794 = cljs.core._rest.call(null,args__7792);
if((argc === 20))
{if(f__7765.cljs$lang$arity$20)
{return f__7765.cljs$lang$arity$20(a__7755,b__7757,c__7759,d__7761,e__7763,f__7765,g__7767,h__7769,i__7771,j__7773,k__7775,l__7777,m__7779,n__7781,o__7783,p__7785,q__7787,r__7789,s__7791,t__7793);
} else
{return f__7765.call(null,a__7755,b__7757,c__7759,d__7761,e__7763,f__7765,g__7767,h__7769,i__7771,j__7773,k__7775,l__7777,m__7779,n__7781,o__7783,p__7785,q__7787,r__7789,s__7791,t__7793);
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
var fixed_arity__7809 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7810 = cljs.core.bounded_count.call(null,args,(fixed_arity__7809 + 1));
if((bc__7810 <= fixed_arity__7809))
{return cljs.core.apply_to.call(null,f,bc__7810,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__7811 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__7812 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7813 = cljs.core.bounded_count.call(null,arglist__7811,(fixed_arity__7812 + 1));
if((bc__7813 <= fixed_arity__7812))
{return cljs.core.apply_to.call(null,f,bc__7813,arglist__7811);
} else
{return f.cljs$lang$applyTo(arglist__7811);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7811));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__7814 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__7815 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7816 = cljs.core.bounded_count.call(null,arglist__7814,(fixed_arity__7815 + 1));
if((bc__7816 <= fixed_arity__7815))
{return cljs.core.apply_to.call(null,f,bc__7816,arglist__7814);
} else
{return f.cljs$lang$applyTo(arglist__7814);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7814));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__7817 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__7818 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7819 = cljs.core.bounded_count.call(null,arglist__7817,(fixed_arity__7818 + 1));
if((bc__7819 <= fixed_arity__7818))
{return cljs.core.apply_to.call(null,f,bc__7819,arglist__7817);
} else
{return f.cljs$lang$applyTo(arglist__7817);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7817));
}
});
var apply__6 = (function() { 
var G__7823__delegate = function (f,a,b,c,d,args){
var arglist__7820 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__7821 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7822 = cljs.core.bounded_count.call(null,arglist__7820,(fixed_arity__7821 + 1));
if((bc__7822 <= fixed_arity__7821))
{return cljs.core.apply_to.call(null,f,bc__7822,arglist__7820);
} else
{return f.cljs$lang$applyTo(arglist__7820);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7820));
}
};
var G__7823 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__7823__delegate.call(this, f, a, b, c, d, args);
};
G__7823.cljs$lang$maxFixedArity = 5;
G__7823.cljs$lang$applyTo = (function (arglist__7824){
var f = cljs.core.first(arglist__7824);
var a = cljs.core.first(cljs.core.next(arglist__7824));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7824)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7824))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7824)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7824)))));
return G__7823__delegate(f, a, b, c, d, args);
});
G__7823.cljs$lang$arity$variadic = G__7823__delegate;
return G__7823;
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
vary_meta.cljs$lang$applyTo = (function (arglist__7825){
var obj = cljs.core.first(arglist__7825);
var f = cljs.core.first(cljs.core.next(arglist__7825));
var args = cljs.core.rest(cljs.core.next(arglist__7825));
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
var G__7826__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__7826 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7826__delegate.call(this, x, y, more);
};
G__7826.cljs$lang$maxFixedArity = 2;
G__7826.cljs$lang$applyTo = (function (arglist__7827){
var x = cljs.core.first(arglist__7827);
var y = cljs.core.first(cljs.core.next(arglist__7827));
var more = cljs.core.rest(cljs.core.next(arglist__7827));
return G__7826__delegate(x, y, more);
});
G__7826.cljs$lang$arity$variadic = G__7826__delegate;
return G__7826;
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
var G__7828 = pred;
var G__7829 = cljs.core.next.call(null,coll);
pred = G__7828;
coll = G__7829;
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
{var or__3824__auto____7831 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____7831))
{return or__3824__auto____7831;
} else
{{
var G__7832 = pred;
var G__7833 = cljs.core.next.call(null,coll);
pred = G__7832;
coll = G__7833;
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
var G__7834 = null;
var G__7834__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__7834__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__7834__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__7834__3 = (function() { 
var G__7835__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__7835 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7835__delegate.call(this, x, y, zs);
};
G__7835.cljs$lang$maxFixedArity = 2;
G__7835.cljs$lang$applyTo = (function (arglist__7836){
var x = cljs.core.first(arglist__7836);
var y = cljs.core.first(cljs.core.next(arglist__7836));
var zs = cljs.core.rest(cljs.core.next(arglist__7836));
return G__7835__delegate(x, y, zs);
});
G__7835.cljs$lang$arity$variadic = G__7835__delegate;
return G__7835;
})()
;
G__7834 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__7834__0.call(this);
case 1:
return G__7834__1.call(this,x);
case 2:
return G__7834__2.call(this,x,y);
default:
return G__7834__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__7834.cljs$lang$maxFixedArity = 2;
G__7834.cljs$lang$applyTo = G__7834__3.cljs$lang$applyTo;
return G__7834;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__7837__delegate = function (args){
return x;
};
var G__7837 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7837__delegate.call(this, args);
};
G__7837.cljs$lang$maxFixedArity = 0;
G__7837.cljs$lang$applyTo = (function (arglist__7838){
var args = cljs.core.seq(arglist__7838);;
return G__7837__delegate(args);
});
G__7837.cljs$lang$arity$variadic = G__7837__delegate;
return G__7837;
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
var G__7845 = null;
var G__7845__0 = (function (){
return f.call(null,g.call(null));
});
var G__7845__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__7845__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__7845__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__7845__4 = (function() { 
var G__7846__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__7846 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7846__delegate.call(this, x, y, z, args);
};
G__7846.cljs$lang$maxFixedArity = 3;
G__7846.cljs$lang$applyTo = (function (arglist__7847){
var x = cljs.core.first(arglist__7847);
var y = cljs.core.first(cljs.core.next(arglist__7847));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7847)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7847)));
return G__7846__delegate(x, y, z, args);
});
G__7846.cljs$lang$arity$variadic = G__7846__delegate;
return G__7846;
})()
;
G__7845 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7845__0.call(this);
case 1:
return G__7845__1.call(this,x);
case 2:
return G__7845__2.call(this,x,y);
case 3:
return G__7845__3.call(this,x,y,z);
default:
return G__7845__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7845.cljs$lang$maxFixedArity = 3;
G__7845.cljs$lang$applyTo = G__7845__4.cljs$lang$applyTo;
return G__7845;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__7848 = null;
var G__7848__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__7848__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__7848__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__7848__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__7848__4 = (function() { 
var G__7849__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__7849 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7849__delegate.call(this, x, y, z, args);
};
G__7849.cljs$lang$maxFixedArity = 3;
G__7849.cljs$lang$applyTo = (function (arglist__7850){
var x = cljs.core.first(arglist__7850);
var y = cljs.core.first(cljs.core.next(arglist__7850));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7850)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7850)));
return G__7849__delegate(x, y, z, args);
});
G__7849.cljs$lang$arity$variadic = G__7849__delegate;
return G__7849;
})()
;
G__7848 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7848__0.call(this);
case 1:
return G__7848__1.call(this,x);
case 2:
return G__7848__2.call(this,x,y);
case 3:
return G__7848__3.call(this,x,y,z);
default:
return G__7848__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7848.cljs$lang$maxFixedArity = 3;
G__7848.cljs$lang$applyTo = G__7848__4.cljs$lang$applyTo;
return G__7848;
})()
});
var comp__4 = (function() { 
var G__7851__delegate = function (f1,f2,f3,fs){
var fs__7842 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__7852__delegate = function (args){
var ret__7843 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__7842),args);
var fs__7844 = cljs.core.next.call(null,fs__7842);
while(true){
if(fs__7844)
{{
var G__7853 = cljs.core.first.call(null,fs__7844).call(null,ret__7843);
var G__7854 = cljs.core.next.call(null,fs__7844);
ret__7843 = G__7853;
fs__7844 = G__7854;
continue;
}
} else
{return ret__7843;
}
break;
}
};
var G__7852 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7852__delegate.call(this, args);
};
G__7852.cljs$lang$maxFixedArity = 0;
G__7852.cljs$lang$applyTo = (function (arglist__7855){
var args = cljs.core.seq(arglist__7855);;
return G__7852__delegate(args);
});
G__7852.cljs$lang$arity$variadic = G__7852__delegate;
return G__7852;
})()
;
};
var G__7851 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7851__delegate.call(this, f1, f2, f3, fs);
};
G__7851.cljs$lang$maxFixedArity = 3;
G__7851.cljs$lang$applyTo = (function (arglist__7856){
var f1 = cljs.core.first(arglist__7856);
var f2 = cljs.core.first(cljs.core.next(arglist__7856));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7856)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7856)));
return G__7851__delegate(f1, f2, f3, fs);
});
G__7851.cljs$lang$arity$variadic = G__7851__delegate;
return G__7851;
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
var G__7857__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__7857 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7857__delegate.call(this, args);
};
G__7857.cljs$lang$maxFixedArity = 0;
G__7857.cljs$lang$applyTo = (function (arglist__7858){
var args = cljs.core.seq(arglist__7858);;
return G__7857__delegate(args);
});
G__7857.cljs$lang$arity$variadic = G__7857__delegate;
return G__7857;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__7859__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__7859 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7859__delegate.call(this, args);
};
G__7859.cljs$lang$maxFixedArity = 0;
G__7859.cljs$lang$applyTo = (function (arglist__7860){
var args = cljs.core.seq(arglist__7860);;
return G__7859__delegate(args);
});
G__7859.cljs$lang$arity$variadic = G__7859__delegate;
return G__7859;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__7861__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__7861 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7861__delegate.call(this, args);
};
G__7861.cljs$lang$maxFixedArity = 0;
G__7861.cljs$lang$applyTo = (function (arglist__7862){
var args = cljs.core.seq(arglist__7862);;
return G__7861__delegate(args);
});
G__7861.cljs$lang$arity$variadic = G__7861__delegate;
return G__7861;
})()
;
});
var partial__5 = (function() { 
var G__7863__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__7864__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__7864 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7864__delegate.call(this, args);
};
G__7864.cljs$lang$maxFixedArity = 0;
G__7864.cljs$lang$applyTo = (function (arglist__7865){
var args = cljs.core.seq(arglist__7865);;
return G__7864__delegate(args);
});
G__7864.cljs$lang$arity$variadic = G__7864__delegate;
return G__7864;
})()
;
};
var G__7863 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7863__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__7863.cljs$lang$maxFixedArity = 4;
G__7863.cljs$lang$applyTo = (function (arglist__7866){
var f = cljs.core.first(arglist__7866);
var arg1 = cljs.core.first(cljs.core.next(arglist__7866));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7866)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7866))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7866))));
return G__7863__delegate(f, arg1, arg2, arg3, more);
});
G__7863.cljs$lang$arity$variadic = G__7863__delegate;
return G__7863;
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
var G__7867 = null;
var G__7867__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__7867__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__7867__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__7867__4 = (function() { 
var G__7868__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__7868 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7868__delegate.call(this, a, b, c, ds);
};
G__7868.cljs$lang$maxFixedArity = 3;
G__7868.cljs$lang$applyTo = (function (arglist__7869){
var a = cljs.core.first(arglist__7869);
var b = cljs.core.first(cljs.core.next(arglist__7869));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7869)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7869)));
return G__7868__delegate(a, b, c, ds);
});
G__7868.cljs$lang$arity$variadic = G__7868__delegate;
return G__7868;
})()
;
G__7867 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__7867__1.call(this,a);
case 2:
return G__7867__2.call(this,a,b);
case 3:
return G__7867__3.call(this,a,b,c);
default:
return G__7867__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7867.cljs$lang$maxFixedArity = 3;
G__7867.cljs$lang$applyTo = G__7867__4.cljs$lang$applyTo;
return G__7867;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__7870 = null;
var G__7870__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7870__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__7870__4 = (function() { 
var G__7871__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__7871 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7871__delegate.call(this, a, b, c, ds);
};
G__7871.cljs$lang$maxFixedArity = 3;
G__7871.cljs$lang$applyTo = (function (arglist__7872){
var a = cljs.core.first(arglist__7872);
var b = cljs.core.first(cljs.core.next(arglist__7872));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7872)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7872)));
return G__7871__delegate(a, b, c, ds);
});
G__7871.cljs$lang$arity$variadic = G__7871__delegate;
return G__7871;
})()
;
G__7870 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7870__2.call(this,a,b);
case 3:
return G__7870__3.call(this,a,b,c);
default:
return G__7870__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7870.cljs$lang$maxFixedArity = 3;
G__7870.cljs$lang$applyTo = G__7870__4.cljs$lang$applyTo;
return G__7870;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__7873 = null;
var G__7873__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7873__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__7873__4 = (function() { 
var G__7874__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__7874 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7874__delegate.call(this, a, b, c, ds);
};
G__7874.cljs$lang$maxFixedArity = 3;
G__7874.cljs$lang$applyTo = (function (arglist__7875){
var a = cljs.core.first(arglist__7875);
var b = cljs.core.first(cljs.core.next(arglist__7875));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7875)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7875)));
return G__7874__delegate(a, b, c, ds);
});
G__7874.cljs$lang$arity$variadic = G__7874__delegate;
return G__7874;
})()
;
G__7873 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7873__2.call(this,a,b);
case 3:
return G__7873__3.call(this,a,b,c);
default:
return G__7873__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7873.cljs$lang$maxFixedArity = 3;
G__7873.cljs$lang$applyTo = G__7873__4.cljs$lang$applyTo;
return G__7873;
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
var mapi__7891 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7899 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7899)
{var s__7900 = temp__3974__auto____7899;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7900))
{var c__7901 = cljs.core.chunk_first.call(null,s__7900);
var size__7902 = cljs.core.count.call(null,c__7901);
var b__7903 = cljs.core.chunk_buffer.call(null,size__7902);
var n__2492__auto____7904 = size__7902;
var i__7905 = 0;
while(true){
if((i__7905 < n__2492__auto____7904))
{cljs.core.chunk_append.call(null,b__7903,f.call(null,(idx + i__7905),cljs.core._nth.call(null,c__7901,i__7905)));
{
var G__7906 = (i__7905 + 1);
i__7905 = G__7906;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7903),mapi.call(null,(idx + size__7902),cljs.core.chunk_rest.call(null,s__7900)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__7900)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__7900)));
}
} else
{return null;
}
}),null));
});
return mapi__7891.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7916 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7916)
{var s__7917 = temp__3974__auto____7916;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7917))
{var c__7918 = cljs.core.chunk_first.call(null,s__7917);
var size__7919 = cljs.core.count.call(null,c__7918);
var b__7920 = cljs.core.chunk_buffer.call(null,size__7919);
var n__2492__auto____7921 = size__7919;
var i__7922 = 0;
while(true){
if((i__7922 < n__2492__auto____7921))
{var x__7923 = f.call(null,cljs.core._nth.call(null,c__7918,i__7922));
if((x__7923 == null))
{} else
{cljs.core.chunk_append.call(null,b__7920,x__7923);
}
{
var G__7925 = (i__7922 + 1);
i__7922 = G__7925;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7920),keep.call(null,f,cljs.core.chunk_rest.call(null,s__7917)));
} else
{var x__7924 = f.call(null,cljs.core.first.call(null,s__7917));
if((x__7924 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__7917));
} else
{return cljs.core.cons.call(null,x__7924,keep.call(null,f,cljs.core.rest.call(null,s__7917)));
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
var keepi__7951 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7961 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7961)
{var s__7962 = temp__3974__auto____7961;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7962))
{var c__7963 = cljs.core.chunk_first.call(null,s__7962);
var size__7964 = cljs.core.count.call(null,c__7963);
var b__7965 = cljs.core.chunk_buffer.call(null,size__7964);
var n__2492__auto____7966 = size__7964;
var i__7967 = 0;
while(true){
if((i__7967 < n__2492__auto____7966))
{var x__7968 = f.call(null,(idx + i__7967),cljs.core._nth.call(null,c__7963,i__7967));
if((x__7968 == null))
{} else
{cljs.core.chunk_append.call(null,b__7965,x__7968);
}
{
var G__7970 = (i__7967 + 1);
i__7967 = G__7970;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7965),keepi.call(null,(idx + size__7964),cljs.core.chunk_rest.call(null,s__7962)));
} else
{var x__7969 = f.call(null,idx,cljs.core.first.call(null,s__7962));
if((x__7969 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__7962));
} else
{return cljs.core.cons.call(null,x__7969,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__7962)));
}
}
} else
{return null;
}
}),null));
});
return keepi__7951.call(null,0,coll);
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8056 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____8056))
{return p.call(null,y);
} else
{return and__3822__auto____8056;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8057 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____8057))
{var and__3822__auto____8058 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____8058))
{return p.call(null,z);
} else
{return and__3822__auto____8058;
}
} else
{return and__3822__auto____8057;
}
})());
});
var ep1__4 = (function() { 
var G__8127__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8059 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8059))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____8059;
}
})());
};
var G__8127 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8127__delegate.call(this, x, y, z, args);
};
G__8127.cljs$lang$maxFixedArity = 3;
G__8127.cljs$lang$applyTo = (function (arglist__8128){
var x = cljs.core.first(arglist__8128);
var y = cljs.core.first(cljs.core.next(arglist__8128));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8128)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8128)));
return G__8127__delegate(x, y, z, args);
});
G__8127.cljs$lang$arity$variadic = G__8127__delegate;
return G__8127;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8071 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8071))
{return p2.call(null,x);
} else
{return and__3822__auto____8071;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8072 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8072))
{var and__3822__auto____8073 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8073))
{var and__3822__auto____8074 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8074))
{return p2.call(null,y);
} else
{return and__3822__auto____8074;
}
} else
{return and__3822__auto____8073;
}
} else
{return and__3822__auto____8072;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8075 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8075))
{var and__3822__auto____8076 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8076))
{var and__3822__auto____8077 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____8077))
{var and__3822__auto____8078 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8078))
{var and__3822__auto____8079 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8079))
{return p2.call(null,z);
} else
{return and__3822__auto____8079;
}
} else
{return and__3822__auto____8078;
}
} else
{return and__3822__auto____8077;
}
} else
{return and__3822__auto____8076;
}
} else
{return and__3822__auto____8075;
}
})());
});
var ep2__4 = (function() { 
var G__8129__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8080 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8080))
{return cljs.core.every_QMARK_.call(null,(function (p1__7926_SHARP_){
var and__3822__auto____8081 = p1.call(null,p1__7926_SHARP_);
if(cljs.core.truth_(and__3822__auto____8081))
{return p2.call(null,p1__7926_SHARP_);
} else
{return and__3822__auto____8081;
}
}),args);
} else
{return and__3822__auto____8080;
}
})());
};
var G__8129 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8129__delegate.call(this, x, y, z, args);
};
G__8129.cljs$lang$maxFixedArity = 3;
G__8129.cljs$lang$applyTo = (function (arglist__8130){
var x = cljs.core.first(arglist__8130);
var y = cljs.core.first(cljs.core.next(arglist__8130));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8130)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8130)));
return G__8129__delegate(x, y, z, args);
});
G__8129.cljs$lang$arity$variadic = G__8129__delegate;
return G__8129;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8100 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8100))
{var and__3822__auto____8101 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8101))
{return p3.call(null,x);
} else
{return and__3822__auto____8101;
}
} else
{return and__3822__auto____8100;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8102 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8102))
{var and__3822__auto____8103 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8103))
{var and__3822__auto____8104 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____8104))
{var and__3822__auto____8105 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8105))
{var and__3822__auto____8106 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8106))
{return p3.call(null,y);
} else
{return and__3822__auto____8106;
}
} else
{return and__3822__auto____8105;
}
} else
{return and__3822__auto____8104;
}
} else
{return and__3822__auto____8103;
}
} else
{return and__3822__auto____8102;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8107 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8107))
{var and__3822__auto____8108 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8108))
{var and__3822__auto____8109 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____8109))
{var and__3822__auto____8110 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8110))
{var and__3822__auto____8111 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8111))
{var and__3822__auto____8112 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____8112))
{var and__3822__auto____8113 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____8113))
{var and__3822__auto____8114 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____8114))
{return p3.call(null,z);
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
} else
{return and__3822__auto____8110;
}
} else
{return and__3822__auto____8109;
}
} else
{return and__3822__auto____8108;
}
} else
{return and__3822__auto____8107;
}
})());
});
var ep3__4 = (function() { 
var G__8131__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8115 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8115))
{return cljs.core.every_QMARK_.call(null,(function (p1__7927_SHARP_){
var and__3822__auto____8116 = p1.call(null,p1__7927_SHARP_);
if(cljs.core.truth_(and__3822__auto____8116))
{var and__3822__auto____8117 = p2.call(null,p1__7927_SHARP_);
if(cljs.core.truth_(and__3822__auto____8117))
{return p3.call(null,p1__7927_SHARP_);
} else
{return and__3822__auto____8117;
}
} else
{return and__3822__auto____8116;
}
}),args);
} else
{return and__3822__auto____8115;
}
})());
};
var G__8131 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8131__delegate.call(this, x, y, z, args);
};
G__8131.cljs$lang$maxFixedArity = 3;
G__8131.cljs$lang$applyTo = (function (arglist__8132){
var x = cljs.core.first(arglist__8132);
var y = cljs.core.first(cljs.core.next(arglist__8132));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8132)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8132)));
return G__8131__delegate(x, y, z, args);
});
G__8131.cljs$lang$arity$variadic = G__8131__delegate;
return G__8131;
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
var G__8133__delegate = function (p1,p2,p3,ps){
var ps__8118 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__7928_SHARP_){
return p1__7928_SHARP_.call(null,x);
}),ps__8118);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__7929_SHARP_){
var and__3822__auto____8123 = p1__7929_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____8123))
{return p1__7929_SHARP_.call(null,y);
} else
{return and__3822__auto____8123;
}
}),ps__8118);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__7930_SHARP_){
var and__3822__auto____8124 = p1__7930_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____8124))
{var and__3822__auto____8125 = p1__7930_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____8125))
{return p1__7930_SHARP_.call(null,z);
} else
{return and__3822__auto____8125;
}
} else
{return and__3822__auto____8124;
}
}),ps__8118);
});
var epn__4 = (function() { 
var G__8134__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8126 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8126))
{return cljs.core.every_QMARK_.call(null,(function (p1__7931_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__7931_SHARP_,args);
}),ps__8118);
} else
{return and__3822__auto____8126;
}
})());
};
var G__8134 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8134__delegate.call(this, x, y, z, args);
};
G__8134.cljs$lang$maxFixedArity = 3;
G__8134.cljs$lang$applyTo = (function (arglist__8135){
var x = cljs.core.first(arglist__8135);
var y = cljs.core.first(cljs.core.next(arglist__8135));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8135)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8135)));
return G__8134__delegate(x, y, z, args);
});
G__8134.cljs$lang$arity$variadic = G__8134__delegate;
return G__8134;
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
var G__8133 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8133__delegate.call(this, p1, p2, p3, ps);
};
G__8133.cljs$lang$maxFixedArity = 3;
G__8133.cljs$lang$applyTo = (function (arglist__8136){
var p1 = cljs.core.first(arglist__8136);
var p2 = cljs.core.first(cljs.core.next(arglist__8136));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8136)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8136)));
return G__8133__delegate(p1, p2, p3, ps);
});
G__8133.cljs$lang$arity$variadic = G__8133__delegate;
return G__8133;
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
var or__3824__auto____8217 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____8217))
{return or__3824__auto____8217;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____8218 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____8218))
{return or__3824__auto____8218;
} else
{var or__3824__auto____8219 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____8219))
{return or__3824__auto____8219;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__8288__delegate = function (x,y,z,args){
var or__3824__auto____8220 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8220))
{return or__3824__auto____8220;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__8288 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8288__delegate.call(this, x, y, z, args);
};
G__8288.cljs$lang$maxFixedArity = 3;
G__8288.cljs$lang$applyTo = (function (arglist__8289){
var x = cljs.core.first(arglist__8289);
var y = cljs.core.first(cljs.core.next(arglist__8289));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8289)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8289)));
return G__8288__delegate(x, y, z, args);
});
G__8288.cljs$lang$arity$variadic = G__8288__delegate;
return G__8288;
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
var or__3824__auto____8232 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8232))
{return or__3824__auto____8232;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____8233 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8233))
{return or__3824__auto____8233;
} else
{var or__3824__auto____8234 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8234))
{return or__3824__auto____8234;
} else
{var or__3824__auto____8235 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8235))
{return or__3824__auto____8235;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____8236 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8236))
{return or__3824__auto____8236;
} else
{var or__3824__auto____8237 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8237))
{return or__3824__auto____8237;
} else
{var or__3824__auto____8238 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____8238))
{return or__3824__auto____8238;
} else
{var or__3824__auto____8239 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8239))
{return or__3824__auto____8239;
} else
{var or__3824__auto____8240 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8240))
{return or__3824__auto____8240;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__8290__delegate = function (x,y,z,args){
var or__3824__auto____8241 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8241))
{return or__3824__auto____8241;
} else
{return cljs.core.some.call(null,(function (p1__7971_SHARP_){
var or__3824__auto____8242 = p1.call(null,p1__7971_SHARP_);
if(cljs.core.truth_(or__3824__auto____8242))
{return or__3824__auto____8242;
} else
{return p2.call(null,p1__7971_SHARP_);
}
}),args);
}
};
var G__8290 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8290__delegate.call(this, x, y, z, args);
};
G__8290.cljs$lang$maxFixedArity = 3;
G__8290.cljs$lang$applyTo = (function (arglist__8291){
var x = cljs.core.first(arglist__8291);
var y = cljs.core.first(cljs.core.next(arglist__8291));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8291)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8291)));
return G__8290__delegate(x, y, z, args);
});
G__8290.cljs$lang$arity$variadic = G__8290__delegate;
return G__8290;
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
var or__3824__auto____8261 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8261))
{return or__3824__auto____8261;
} else
{var or__3824__auto____8262 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8262))
{return or__3824__auto____8262;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____8263 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8263))
{return or__3824__auto____8263;
} else
{var or__3824__auto____8264 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8264))
{return or__3824__auto____8264;
} else
{var or__3824__auto____8265 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____8265))
{return or__3824__auto____8265;
} else
{var or__3824__auto____8266 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8266))
{return or__3824__auto____8266;
} else
{var or__3824__auto____8267 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8267))
{return or__3824__auto____8267;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____8268 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8268))
{return or__3824__auto____8268;
} else
{var or__3824__auto____8269 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8269))
{return or__3824__auto____8269;
} else
{var or__3824__auto____8270 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____8270))
{return or__3824__auto____8270;
} else
{var or__3824__auto____8271 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8271))
{return or__3824__auto____8271;
} else
{var or__3824__auto____8272 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8272))
{return or__3824__auto____8272;
} else
{var or__3824__auto____8273 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____8273))
{return or__3824__auto____8273;
} else
{var or__3824__auto____8274 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____8274))
{return or__3824__auto____8274;
} else
{var or__3824__auto____8275 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____8275))
{return or__3824__auto____8275;
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
var G__8292__delegate = function (x,y,z,args){
var or__3824__auto____8276 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8276))
{return or__3824__auto____8276;
} else
{return cljs.core.some.call(null,(function (p1__7972_SHARP_){
var or__3824__auto____8277 = p1.call(null,p1__7972_SHARP_);
if(cljs.core.truth_(or__3824__auto____8277))
{return or__3824__auto____8277;
} else
{var or__3824__auto____8278 = p2.call(null,p1__7972_SHARP_);
if(cljs.core.truth_(or__3824__auto____8278))
{return or__3824__auto____8278;
} else
{return p3.call(null,p1__7972_SHARP_);
}
}
}),args);
}
};
var G__8292 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8292__delegate.call(this, x, y, z, args);
};
G__8292.cljs$lang$maxFixedArity = 3;
G__8292.cljs$lang$applyTo = (function (arglist__8293){
var x = cljs.core.first(arglist__8293);
var y = cljs.core.first(cljs.core.next(arglist__8293));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8293)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8293)));
return G__8292__delegate(x, y, z, args);
});
G__8292.cljs$lang$arity$variadic = G__8292__delegate;
return G__8292;
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
var G__8294__delegate = function (p1,p2,p3,ps){
var ps__8279 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__7973_SHARP_){
return p1__7973_SHARP_.call(null,x);
}),ps__8279);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__7974_SHARP_){
var or__3824__auto____8284 = p1__7974_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____8284))
{return or__3824__auto____8284;
} else
{return p1__7974_SHARP_.call(null,y);
}
}),ps__8279);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__7975_SHARP_){
var or__3824__auto____8285 = p1__7975_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____8285))
{return or__3824__auto____8285;
} else
{var or__3824__auto____8286 = p1__7975_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____8286))
{return or__3824__auto____8286;
} else
{return p1__7975_SHARP_.call(null,z);
}
}
}),ps__8279);
});
var spn__4 = (function() { 
var G__8295__delegate = function (x,y,z,args){
var or__3824__auto____8287 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8287))
{return or__3824__auto____8287;
} else
{return cljs.core.some.call(null,(function (p1__7976_SHARP_){
return cljs.core.some.call(null,p1__7976_SHARP_,args);
}),ps__8279);
}
};
var G__8295 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8295__delegate.call(this, x, y, z, args);
};
G__8295.cljs$lang$maxFixedArity = 3;
G__8295.cljs$lang$applyTo = (function (arglist__8296){
var x = cljs.core.first(arglist__8296);
var y = cljs.core.first(cljs.core.next(arglist__8296));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8296)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8296)));
return G__8295__delegate(x, y, z, args);
});
G__8295.cljs$lang$arity$variadic = G__8295__delegate;
return G__8295;
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
var G__8294 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8294__delegate.call(this, p1, p2, p3, ps);
};
G__8294.cljs$lang$maxFixedArity = 3;
G__8294.cljs$lang$applyTo = (function (arglist__8297){
var p1 = cljs.core.first(arglist__8297);
var p2 = cljs.core.first(cljs.core.next(arglist__8297));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8297)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8297)));
return G__8294__delegate(p1, p2, p3, ps);
});
G__8294.cljs$lang$arity$variadic = G__8294__delegate;
return G__8294;
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
var temp__3974__auto____8316 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8316)
{var s__8317 = temp__3974__auto____8316;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8317))
{var c__8318 = cljs.core.chunk_first.call(null,s__8317);
var size__8319 = cljs.core.count.call(null,c__8318);
var b__8320 = cljs.core.chunk_buffer.call(null,size__8319);
var n__2492__auto____8321 = size__8319;
var i__8322 = 0;
while(true){
if((i__8322 < n__2492__auto____8321))
{cljs.core.chunk_append.call(null,b__8320,f.call(null,cljs.core._nth.call(null,c__8318,i__8322)));
{
var G__8334 = (i__8322 + 1);
i__8322 = G__8334;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8320),map.call(null,f,cljs.core.chunk_rest.call(null,s__8317)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__8317)),map.call(null,f,cljs.core.rest.call(null,s__8317)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8323 = cljs.core.seq.call(null,c1);
var s2__8324 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____8325 = s1__8323;
if(and__3822__auto____8325)
{return s2__8324;
} else
{return and__3822__auto____8325;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8323),cljs.core.first.call(null,s2__8324)),map.call(null,f,cljs.core.rest.call(null,s1__8323),cljs.core.rest.call(null,s2__8324)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8326 = cljs.core.seq.call(null,c1);
var s2__8327 = cljs.core.seq.call(null,c2);
var s3__8328 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____8329 = s1__8326;
if(and__3822__auto____8329)
{var and__3822__auto____8330 = s2__8327;
if(and__3822__auto____8330)
{return s3__8328;
} else
{return and__3822__auto____8330;
}
} else
{return and__3822__auto____8329;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8326),cljs.core.first.call(null,s2__8327),cljs.core.first.call(null,s3__8328)),map.call(null,f,cljs.core.rest.call(null,s1__8326),cljs.core.rest.call(null,s2__8327),cljs.core.rest.call(null,s3__8328)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__8335__delegate = function (f,c1,c2,c3,colls){
var step__8333 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8332 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8332))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__8332),step.call(null,map.call(null,cljs.core.rest,ss__8332)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__8137_SHARP_){
return cljs.core.apply.call(null,f,p1__8137_SHARP_);
}),step__8333.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__8335 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8335__delegate.call(this, f, c1, c2, c3, colls);
};
G__8335.cljs$lang$maxFixedArity = 4;
G__8335.cljs$lang$applyTo = (function (arglist__8336){
var f = cljs.core.first(arglist__8336);
var c1 = cljs.core.first(cljs.core.next(arglist__8336));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8336)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8336))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8336))));
return G__8335__delegate(f, c1, c2, c3, colls);
});
G__8335.cljs$lang$arity$variadic = G__8335__delegate;
return G__8335;
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
{var temp__3974__auto____8339 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8339)
{var s__8340 = temp__3974__auto____8339;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__8340),take.call(null,(n - 1),cljs.core.rest.call(null,s__8340)));
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
var step__8346 = (function (n,coll){
while(true){
var s__8344 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____8345 = (n > 0);
if(and__3822__auto____8345)
{return s__8344;
} else
{return and__3822__auto____8345;
}
})()))
{{
var G__8347 = (n - 1);
var G__8348 = cljs.core.rest.call(null,s__8344);
n = G__8347;
coll = G__8348;
continue;
}
} else
{return s__8344;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__8346.call(null,n,coll);
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
var s__8351 = cljs.core.seq.call(null,coll);
var lead__8352 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__8352)
{{
var G__8353 = cljs.core.next.call(null,s__8351);
var G__8354 = cljs.core.next.call(null,lead__8352);
s__8351 = G__8353;
lead__8352 = G__8354;
continue;
}
} else
{return s__8351;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__8360 = (function (pred,coll){
while(true){
var s__8358 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____8359 = s__8358;
if(and__3822__auto____8359)
{return pred.call(null,cljs.core.first.call(null,s__8358));
} else
{return and__3822__auto____8359;
}
})()))
{{
var G__8361 = pred;
var G__8362 = cljs.core.rest.call(null,s__8358);
pred = G__8361;
coll = G__8362;
continue;
}
} else
{return s__8358;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__8360.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8365 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8365)
{var s__8366 = temp__3974__auto____8365;
return cljs.core.concat.call(null,s__8366,cycle.call(null,s__8366));
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
var s1__8371 = cljs.core.seq.call(null,c1);
var s2__8372 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____8373 = s1__8371;
if(and__3822__auto____8373)
{return s2__8372;
} else
{return and__3822__auto____8373;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__8371),cljs.core.cons.call(null,cljs.core.first.call(null,s2__8372),interleave.call(null,cljs.core.rest.call(null,s1__8371),cljs.core.rest.call(null,s2__8372))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__8375__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8374 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8374))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__8374),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__8374)));
} else
{return null;
}
}),null));
};
var G__8375 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8375__delegate.call(this, c1, c2, colls);
};
G__8375.cljs$lang$maxFixedArity = 2;
G__8375.cljs$lang$applyTo = (function (arglist__8376){
var c1 = cljs.core.first(arglist__8376);
var c2 = cljs.core.first(cljs.core.next(arglist__8376));
var colls = cljs.core.rest(cljs.core.next(arglist__8376));
return G__8375__delegate(c1, c2, colls);
});
G__8375.cljs$lang$arity$variadic = G__8375__delegate;
return G__8375;
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
var cat__8386 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____8384 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____8384)
{var coll__8385 = temp__3971__auto____8384;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__8385),cat.call(null,cljs.core.rest.call(null,coll__8385),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__8386.call(null,null,colls);
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
var G__8387__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__8387 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8387__delegate.call(this, f, coll, colls);
};
G__8387.cljs$lang$maxFixedArity = 2;
G__8387.cljs$lang$applyTo = (function (arglist__8388){
var f = cljs.core.first(arglist__8388);
var coll = cljs.core.first(cljs.core.next(arglist__8388));
var colls = cljs.core.rest(cljs.core.next(arglist__8388));
return G__8387__delegate(f, coll, colls);
});
G__8387.cljs$lang$arity$variadic = G__8387__delegate;
return G__8387;
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
var temp__3974__auto____8398 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8398)
{var s__8399 = temp__3974__auto____8398;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8399))
{var c__8400 = cljs.core.chunk_first.call(null,s__8399);
var size__8401 = cljs.core.count.call(null,c__8400);
var b__8402 = cljs.core.chunk_buffer.call(null,size__8401);
var n__2492__auto____8403 = size__8401;
var i__8404 = 0;
while(true){
if((i__8404 < n__2492__auto____8403))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__8400,i__8404))))
{cljs.core.chunk_append.call(null,b__8402,cljs.core._nth.call(null,c__8400,i__8404));
} else
{}
{
var G__8407 = (i__8404 + 1);
i__8404 = G__8407;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8402),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__8399)));
} else
{var f__8405 = cljs.core.first.call(null,s__8399);
var r__8406 = cljs.core.rest.call(null,s__8399);
if(cljs.core.truth_(pred.call(null,f__8405)))
{return cljs.core.cons.call(null,f__8405,filter.call(null,pred,r__8406));
} else
{return filter.call(null,pred,r__8406);
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
var walk__8410 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__8410.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__8408_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__8408_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__8414__8415 = to;
if(G__8414__8415)
{if((function (){var or__3824__auto____8416 = (G__8414__8415.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3824__auto____8416)
{return or__3824__auto____8416;
} else
{return G__8414__8415.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__8414__8415.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__8414__8415);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__8414__8415);
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
var G__8417__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__8417 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8417__delegate.call(this, f, c1, c2, c3, colls);
};
G__8417.cljs$lang$maxFixedArity = 4;
G__8417.cljs$lang$applyTo = (function (arglist__8418){
var f = cljs.core.first(arglist__8418);
var c1 = cljs.core.first(cljs.core.next(arglist__8418));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8418)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8418))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8418))));
return G__8417__delegate(f, c1, c2, c3, colls);
});
G__8417.cljs$lang$arity$variadic = G__8417__delegate;
return G__8417;
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
var temp__3974__auto____8425 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8425)
{var s__8426 = temp__3974__auto____8425;
var p__8427 = cljs.core.take.call(null,n,s__8426);
if((n === cljs.core.count.call(null,p__8427)))
{return cljs.core.cons.call(null,p__8427,partition.call(null,n,step,cljs.core.drop.call(null,step,s__8426)));
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
var temp__3974__auto____8428 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8428)
{var s__8429 = temp__3974__auto____8428;
var p__8430 = cljs.core.take.call(null,n,s__8429);
if((n === cljs.core.count.call(null,p__8430)))
{return cljs.core.cons.call(null,p__8430,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__8429)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__8430,pad)));
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
var sentinel__8435 = cljs.core.lookup_sentinel;
var m__8436 = m;
var ks__8437 = cljs.core.seq.call(null,ks);
while(true){
if(ks__8437)
{var m__8438 = cljs.core._lookup.call(null,m__8436,cljs.core.first.call(null,ks__8437),sentinel__8435);
if((sentinel__8435 === m__8438))
{return not_found;
} else
{{
var G__8439 = sentinel__8435;
var G__8440 = m__8438;
var G__8441 = cljs.core.next.call(null,ks__8437);
sentinel__8435 = G__8439;
m__8436 = G__8440;
ks__8437 = G__8441;
continue;
}
}
} else
{return m__8436;
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
cljs.core.assoc_in = (function assoc_in(m,p__8442,v){
var vec__8447__8448 = p__8442;
var k__8449 = cljs.core.nth.call(null,vec__8447__8448,0,null);
var ks__8450 = cljs.core.nthnext.call(null,vec__8447__8448,1);
if(cljs.core.truth_(ks__8450))
{return cljs.core.assoc.call(null,m,k__8449,assoc_in.call(null,cljs.core._lookup.call(null,m,k__8449,null),ks__8450,v));
} else
{return cljs.core.assoc.call(null,m,k__8449,v);
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
var update_in__delegate = function (m,p__8451,f,args){
var vec__8456__8457 = p__8451;
var k__8458 = cljs.core.nth.call(null,vec__8456__8457,0,null);
var ks__8459 = cljs.core.nthnext.call(null,vec__8456__8457,1);
if(cljs.core.truth_(ks__8459))
{return cljs.core.assoc.call(null,m,k__8458,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__8458,null),ks__8459,f,args));
} else
{return cljs.core.assoc.call(null,m,k__8458,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__8458,null),args));
}
};
var update_in = function (m,p__8451,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__8451, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__8460){
var m = cljs.core.first(arglist__8460);
var p__8451 = cljs.core.first(cljs.core.next(arglist__8460));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8460)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8460)));
return update_in__delegate(m, p__8451, f, args);
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
var this__8463 = this;
var h__2153__auto____8464 = this__8463.__hash;
if(!((h__2153__auto____8464 == null)))
{return h__2153__auto____8464;
} else
{var h__2153__auto____8465 = cljs.core.hash_coll.call(null,coll);
this__8463.__hash = h__2153__auto____8465;
return h__2153__auto____8465;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8466 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8467 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8468 = this;
var new_array__8469 = this__8468.array.slice();
(new_array__8469[k] = v);
return (new cljs.core.Vector(this__8468.meta,new_array__8469,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__8500 = null;
var G__8500__2 = (function (this_sym8470,k){
var this__8472 = this;
var this_sym8470__8473 = this;
var coll__8474 = this_sym8470__8473;
return coll__8474.cljs$core$ILookup$_lookup$arity$2(coll__8474,k);
});
var G__8500__3 = (function (this_sym8471,k,not_found){
var this__8472 = this;
var this_sym8471__8475 = this;
var coll__8476 = this_sym8471__8475;
return coll__8476.cljs$core$ILookup$_lookup$arity$3(coll__8476,k,not_found);
});
G__8500 = function(this_sym8471,k,not_found){
switch(arguments.length){
case 2:
return G__8500__2.call(this,this_sym8471,k);
case 3:
return G__8500__3.call(this,this_sym8471,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8500;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym8461,args8462){
var this__8477 = this;
return this_sym8461.call.apply(this_sym8461,[this_sym8461].concat(args8462.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8478 = this;
var new_array__8479 = this__8478.array.slice();
new_array__8479.push(o);
return (new cljs.core.Vector(this__8478.meta,new_array__8479,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__8480 = this;
var this__8481 = this;
return cljs.core.pr_str.call(null,this__8481);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8482 = this;
return cljs.core.ci_reduce.call(null,this__8482.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8483 = this;
return cljs.core.ci_reduce.call(null,this__8483.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8484 = this;
if((this__8484.array.length > 0))
{var vector_seq__8485 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__8484.array.length))
{return cljs.core.cons.call(null,(this__8484.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__8485.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8486 = this;
return this__8486.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8487 = this;
var count__8488 = this__8487.array.length;
if((count__8488 > 0))
{return (this__8487.array[(count__8488 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8489 = this;
if((this__8489.array.length > 0))
{var new_array__8490 = this__8489.array.slice();
new_array__8490.pop();
return (new cljs.core.Vector(this__8489.meta,new_array__8490,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8491 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8492 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8493 = this;
return (new cljs.core.Vector(meta,this__8493.array,this__8493.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8494 = this;
return this__8494.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8495 = this;
if((function (){var and__3822__auto____8496 = (0 <= n);
if(and__3822__auto____8496)
{return (n < this__8495.array.length);
} else
{return and__3822__auto____8496;
}
})())
{return (this__8495.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8497 = this;
if((function (){var and__3822__auto____8498 = (0 <= n);
if(and__3822__auto____8498)
{return (n < this__8497.array.length);
} else
{return and__3822__auto____8498;
}
})())
{return (this__8497.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8499 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8499.meta);
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
var cnt__8502 = pv.cnt;
if((cnt__8502 < 32))
{return 0;
} else
{return (((cnt__8502 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__8508 = level;
var ret__8509 = node;
while(true){
if((ll__8508 === 0))
{return ret__8509;
} else
{var embed__8510 = ret__8509;
var r__8511 = cljs.core.pv_fresh_node.call(null,edit);
var ___8512 = cljs.core.pv_aset.call(null,r__8511,0,embed__8510);
{
var G__8513 = (ll__8508 - 5);
var G__8514 = r__8511;
ll__8508 = G__8513;
ret__8509 = G__8514;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__8520 = cljs.core.pv_clone_node.call(null,parent);
var subidx__8521 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__8520,subidx__8521,tailnode);
return ret__8520;
} else
{var child__8522 = cljs.core.pv_aget.call(null,parent,subidx__8521);
if(!((child__8522 == null)))
{var node_to_insert__8523 = push_tail.call(null,pv,(level - 5),child__8522,tailnode);
cljs.core.pv_aset.call(null,ret__8520,subidx__8521,node_to_insert__8523);
return ret__8520;
} else
{var node_to_insert__8524 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__8520,subidx__8521,node_to_insert__8524);
return ret__8520;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____8528 = (0 <= i);
if(and__3822__auto____8528)
{return (i < pv.cnt);
} else
{return and__3822__auto____8528;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__8529 = pv.root;
var level__8530 = pv.shift;
while(true){
if((level__8530 > 0))
{{
var G__8531 = cljs.core.pv_aget.call(null,node__8529,((i >>> level__8530) & 31));
var G__8532 = (level__8530 - 5);
node__8529 = G__8531;
level__8530 = G__8532;
continue;
}
} else
{return node__8529.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__8535 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__8535,(i & 31),val);
return ret__8535;
} else
{var subidx__8536 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8535,subidx__8536,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8536),i,val));
return ret__8535;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__8542 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8543 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8542));
if((function (){var and__3822__auto____8544 = (new_child__8543 == null);
if(and__3822__auto____8544)
{return (subidx__8542 === 0);
} else
{return and__3822__auto____8544;
}
})())
{return null;
} else
{var ret__8545 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8545,subidx__8542,new_child__8543);
return ret__8545;
}
} else
{if((subidx__8542 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__8546 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8546,subidx__8542,null);
return ret__8546;
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
var this__8549 = this;
return (new cljs.core.TransientVector(this__8549.cnt,this__8549.shift,cljs.core.tv_editable_root.call(null,this__8549.root),cljs.core.tv_editable_tail.call(null,this__8549.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8550 = this;
var h__2153__auto____8551 = this__8550.__hash;
if(!((h__2153__auto____8551 == null)))
{return h__2153__auto____8551;
} else
{var h__2153__auto____8552 = cljs.core.hash_coll.call(null,coll);
this__8550.__hash = h__2153__auto____8552;
return h__2153__auto____8552;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8553 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8554 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8555 = this;
if((function (){var and__3822__auto____8556 = (0 <= k);
if(and__3822__auto____8556)
{return (k < this__8555.cnt);
} else
{return and__3822__auto____8556;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__8557 = this__8555.tail.slice();
(new_tail__8557[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__8555.meta,this__8555.cnt,this__8555.shift,this__8555.root,new_tail__8557,null));
} else
{return (new cljs.core.PersistentVector(this__8555.meta,this__8555.cnt,this__8555.shift,cljs.core.do_assoc.call(null,coll,this__8555.shift,this__8555.root,k,v),this__8555.tail,null));
}
} else
{if((k === this__8555.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__8555.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__8605 = null;
var G__8605__2 = (function (this_sym8558,k){
var this__8560 = this;
var this_sym8558__8561 = this;
var coll__8562 = this_sym8558__8561;
return coll__8562.cljs$core$ILookup$_lookup$arity$2(coll__8562,k);
});
var G__8605__3 = (function (this_sym8559,k,not_found){
var this__8560 = this;
var this_sym8559__8563 = this;
var coll__8564 = this_sym8559__8563;
return coll__8564.cljs$core$ILookup$_lookup$arity$3(coll__8564,k,not_found);
});
G__8605 = function(this_sym8559,k,not_found){
switch(arguments.length){
case 2:
return G__8605__2.call(this,this_sym8559,k);
case 3:
return G__8605__3.call(this,this_sym8559,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8605;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym8547,args8548){
var this__8565 = this;
return this_sym8547.call.apply(this_sym8547,[this_sym8547].concat(args8548.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__8566 = this;
var step_init__8567 = [0,init];
var i__8568 = 0;
while(true){
if((i__8568 < this__8566.cnt))
{var arr__8569 = cljs.core.array_for.call(null,v,i__8568);
var len__8570 = arr__8569.length;
var init__8574 = (function (){var j__8571 = 0;
var init__8572 = (step_init__8567[1]);
while(true){
if((j__8571 < len__8570))
{var init__8573 = f.call(null,init__8572,(j__8571 + i__8568),(arr__8569[j__8571]));
if(cljs.core.reduced_QMARK_.call(null,init__8573))
{return init__8573;
} else
{{
var G__8606 = (j__8571 + 1);
var G__8607 = init__8573;
j__8571 = G__8606;
init__8572 = G__8607;
continue;
}
}
} else
{(step_init__8567[0] = len__8570);
(step_init__8567[1] = init__8572);
return init__8572;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__8574))
{return cljs.core.deref.call(null,init__8574);
} else
{{
var G__8608 = (i__8568 + (step_init__8567[0]));
i__8568 = G__8608;
continue;
}
}
} else
{return (step_init__8567[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8575 = this;
if(((this__8575.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__8576 = this__8575.tail.slice();
new_tail__8576.push(o);
return (new cljs.core.PersistentVector(this__8575.meta,(this__8575.cnt + 1),this__8575.shift,this__8575.root,new_tail__8576,null));
} else
{var root_overflow_QMARK___8577 = ((this__8575.cnt >>> 5) > (1 << this__8575.shift));
var new_shift__8578 = ((root_overflow_QMARK___8577)?(this__8575.shift + 5):this__8575.shift);
var new_root__8580 = ((root_overflow_QMARK___8577)?(function (){var n_r__8579 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__8579,0,this__8575.root);
cljs.core.pv_aset.call(null,n_r__8579,1,cljs.core.new_path.call(null,null,this__8575.shift,(new cljs.core.VectorNode(null,this__8575.tail))));
return n_r__8579;
})():cljs.core.push_tail.call(null,coll,this__8575.shift,this__8575.root,(new cljs.core.VectorNode(null,this__8575.tail))));
return (new cljs.core.PersistentVector(this__8575.meta,(this__8575.cnt + 1),new_shift__8578,new_root__8580,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__8581 = this;
if((this__8581.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__8581.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__8582 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__8583 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__8584 = this;
var this__8585 = this;
return cljs.core.pr_str.call(null,this__8585);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8586 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8587 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8588 = this;
if((this__8588.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8589 = this;
return this__8589.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8590 = this;
if((this__8590.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__8590.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8591 = this;
if((this__8591.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8591.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8591.meta);
} else
{if((1 < (this__8591.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__8591.meta,(this__8591.cnt - 1),this__8591.shift,this__8591.root,this__8591.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__8592 = cljs.core.array_for.call(null,coll,(this__8591.cnt - 2));
var nr__8593 = cljs.core.pop_tail.call(null,coll,this__8591.shift,this__8591.root);
var new_root__8594 = (((nr__8593 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__8593);
var cnt_1__8595 = (this__8591.cnt - 1);
if((function (){var and__3822__auto____8596 = (5 < this__8591.shift);
if(and__3822__auto____8596)
{return (cljs.core.pv_aget.call(null,new_root__8594,1) == null);
} else
{return and__3822__auto____8596;
}
})())
{return (new cljs.core.PersistentVector(this__8591.meta,cnt_1__8595,(this__8591.shift - 5),cljs.core.pv_aget.call(null,new_root__8594,0),new_tail__8592,null));
} else
{return (new cljs.core.PersistentVector(this__8591.meta,cnt_1__8595,this__8591.shift,new_root__8594,new_tail__8592,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8597 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8598 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8599 = this;
return (new cljs.core.PersistentVector(meta,this__8599.cnt,this__8599.shift,this__8599.root,this__8599.tail,this__8599.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8600 = this;
return this__8600.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8601 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8602 = this;
if((function (){var and__3822__auto____8603 = (0 <= n);
if(and__3822__auto____8603)
{return (n < this__8602.cnt);
} else
{return and__3822__auto____8603;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8604 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8604.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__8609 = xs.length;
var xs__8610 = (((no_clone === true))?xs:xs.slice());
if((l__8609 < 32))
{return (new cljs.core.PersistentVector(null,l__8609,5,cljs.core.PersistentVector.EMPTY_NODE,xs__8610,null));
} else
{var node__8611 = xs__8610.slice(0,32);
var v__8612 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__8611,null));
var i__8613 = 32;
var out__8614 = cljs.core._as_transient.call(null,v__8612);
while(true){
if((i__8613 < l__8609))
{{
var G__8615 = (i__8613 + 1);
var G__8616 = cljs.core.conj_BANG_.call(null,out__8614,(xs__8610[i__8613]));
i__8613 = G__8615;
out__8614 = G__8616;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8614);
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
vector.cljs$lang$applyTo = (function (arglist__8617){
var args = cljs.core.seq(arglist__8617);;
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
var this__8618 = this;
if(((this__8618.off + 1) < this__8618.node.length))
{var s__8619 = cljs.core.chunked_seq.call(null,this__8618.vec,this__8618.node,this__8618.i,(this__8618.off + 1));
if((s__8619 == null))
{return null;
} else
{return s__8619;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8620 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8621 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8622 = this;
return (this__8622.node[this__8622.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8623 = this;
if(((this__8623.off + 1) < this__8623.node.length))
{var s__8624 = cljs.core.chunked_seq.call(null,this__8623.vec,this__8623.node,this__8623.i,(this__8623.off + 1));
if((s__8624 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8624;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__8625 = this;
var l__8626 = this__8625.node.length;
var s__8627 = ((((this__8625.i + l__8626) < cljs.core._count.call(null,this__8625.vec)))?cljs.core.chunked_seq.call(null,this__8625.vec,(this__8625.i + l__8626),0):null);
if((s__8627 == null))
{return null;
} else
{return s__8627;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8628 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__8629 = this;
return cljs.core.chunked_seq.call(null,this__8629.vec,this__8629.node,this__8629.i,this__8629.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__8630 = this;
return this__8630.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8631 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8631.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__8632 = this;
return cljs.core.array_chunk.call(null,this__8632.node,this__8632.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__8633 = this;
var l__8634 = this__8633.node.length;
var s__8635 = ((((this__8633.i + l__8634) < cljs.core._count.call(null,this__8633.vec)))?cljs.core.chunked_seq.call(null,this__8633.vec,(this__8633.i + l__8634),0):null);
if((s__8635 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8635;
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
var this__8638 = this;
var h__2153__auto____8639 = this__8638.__hash;
if(!((h__2153__auto____8639 == null)))
{return h__2153__auto____8639;
} else
{var h__2153__auto____8640 = cljs.core.hash_coll.call(null,coll);
this__8638.__hash = h__2153__auto____8640;
return h__2153__auto____8640;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8641 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8642 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__8643 = this;
var v_pos__8644 = (this__8643.start + key);
return (new cljs.core.Subvec(this__8643.meta,cljs.core._assoc.call(null,this__8643.v,v_pos__8644,val),this__8643.start,((this__8643.end > (v_pos__8644 + 1)) ? this__8643.end : (v_pos__8644 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__8670 = null;
var G__8670__2 = (function (this_sym8645,k){
var this__8647 = this;
var this_sym8645__8648 = this;
var coll__8649 = this_sym8645__8648;
return coll__8649.cljs$core$ILookup$_lookup$arity$2(coll__8649,k);
});
var G__8670__3 = (function (this_sym8646,k,not_found){
var this__8647 = this;
var this_sym8646__8650 = this;
var coll__8651 = this_sym8646__8650;
return coll__8651.cljs$core$ILookup$_lookup$arity$3(coll__8651,k,not_found);
});
G__8670 = function(this_sym8646,k,not_found){
switch(arguments.length){
case 2:
return G__8670__2.call(this,this_sym8646,k);
case 3:
return G__8670__3.call(this,this_sym8646,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8670;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym8636,args8637){
var this__8652 = this;
return this_sym8636.call.apply(this_sym8636,[this_sym8636].concat(args8637.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8653 = this;
return (new cljs.core.Subvec(this__8653.meta,cljs.core._assoc_n.call(null,this__8653.v,this__8653.end,o),this__8653.start,(this__8653.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__8654 = this;
var this__8655 = this;
return cljs.core.pr_str.call(null,this__8655);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__8656 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__8657 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8658 = this;
var subvec_seq__8659 = (function subvec_seq(i){
if((i === this__8658.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__8658.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__8659.call(null,this__8658.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8660 = this;
return (this__8660.end - this__8660.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8661 = this;
return cljs.core._nth.call(null,this__8661.v,(this__8661.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8662 = this;
if((this__8662.start === this__8662.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__8662.meta,this__8662.v,this__8662.start,(this__8662.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8663 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8664 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8665 = this;
return (new cljs.core.Subvec(meta,this__8665.v,this__8665.start,this__8665.end,this__8665.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8666 = this;
return this__8666.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8667 = this;
return cljs.core._nth.call(null,this__8667.v,(this__8667.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8668 = this;
return cljs.core._nth.call(null,this__8668.v,(this__8668.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8669 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8669.meta);
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
var ret__8672 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__8672,0,tl.length);
return ret__8672;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__8676 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__8677 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8676,subidx__8677,(((level === 5))?tail_node:(function (){var child__8678 = cljs.core.pv_aget.call(null,ret__8676,subidx__8677);
if(!((child__8678 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__8678,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__8676;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__8683 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__8684 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8685 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__8683,subidx__8684));
if((function (){var and__3822__auto____8686 = (new_child__8685 == null);
if(and__3822__auto____8686)
{return (subidx__8684 === 0);
} else
{return and__3822__auto____8686;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__8683,subidx__8684,new_child__8685);
return node__8683;
}
} else
{if((subidx__8684 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__8683,subidx__8684,null);
return node__8683;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____8691 = (0 <= i);
if(and__3822__auto____8691)
{return (i < tv.cnt);
} else
{return and__3822__auto____8691;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__8692 = tv.root;
var node__8693 = root__8692;
var level__8694 = tv.shift;
while(true){
if((level__8694 > 0))
{{
var G__8695 = cljs.core.tv_ensure_editable.call(null,root__8692.edit,cljs.core.pv_aget.call(null,node__8693,((i >>> level__8694) & 31)));
var G__8696 = (level__8694 - 5);
node__8693 = G__8695;
level__8694 = G__8696;
continue;
}
} else
{return node__8693.arr;
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
var G__8736 = null;
var G__8736__2 = (function (this_sym8699,k){
var this__8701 = this;
var this_sym8699__8702 = this;
var coll__8703 = this_sym8699__8702;
return coll__8703.cljs$core$ILookup$_lookup$arity$2(coll__8703,k);
});
var G__8736__3 = (function (this_sym8700,k,not_found){
var this__8701 = this;
var this_sym8700__8704 = this;
var coll__8705 = this_sym8700__8704;
return coll__8705.cljs$core$ILookup$_lookup$arity$3(coll__8705,k,not_found);
});
G__8736 = function(this_sym8700,k,not_found){
switch(arguments.length){
case 2:
return G__8736__2.call(this,this_sym8700,k);
case 3:
return G__8736__3.call(this,this_sym8700,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8736;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym8697,args8698){
var this__8706 = this;
return this_sym8697.call.apply(this_sym8697,[this_sym8697].concat(args8698.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8707 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8708 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8709 = this;
if(this__8709.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8710 = this;
if((function (){var and__3822__auto____8711 = (0 <= n);
if(and__3822__auto____8711)
{return (n < this__8710.cnt);
} else
{return and__3822__auto____8711;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8712 = this;
if(this__8712.root.edit)
{return this__8712.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__8713 = this;
if(this__8713.root.edit)
{if((function (){var and__3822__auto____8714 = (0 <= n);
if(and__3822__auto____8714)
{return (n < this__8713.cnt);
} else
{return and__3822__auto____8714;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__8713.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__8719 = (function go(level,node){
var node__8717 = cljs.core.tv_ensure_editable.call(null,this__8713.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__8717,(n & 31),val);
return node__8717;
} else
{var subidx__8718 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__8717,subidx__8718,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__8717,subidx__8718)));
return node__8717;
}
}).call(null,this__8713.shift,this__8713.root);
this__8713.root = new_root__8719;
return tcoll;
}
} else
{if((n === this__8713.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__8713.cnt)].join('')));
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
var this__8720 = this;
if(this__8720.root.edit)
{if((this__8720.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8720.cnt))
{this__8720.cnt = 0;
return tcoll;
} else
{if((((this__8720.cnt - 1) & 31) > 0))
{this__8720.cnt = (this__8720.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__8721 = cljs.core.editable_array_for.call(null,tcoll,(this__8720.cnt - 2));
var new_root__8723 = (function (){var nr__8722 = cljs.core.tv_pop_tail.call(null,tcoll,this__8720.shift,this__8720.root);
if(!((nr__8722 == null)))
{return nr__8722;
} else
{return (new cljs.core.VectorNode(this__8720.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____8724 = (5 < this__8720.shift);
if(and__3822__auto____8724)
{return (cljs.core.pv_aget.call(null,new_root__8723,1) == null);
} else
{return and__3822__auto____8724;
}
})())
{var new_root__8725 = cljs.core.tv_ensure_editable.call(null,this__8720.root.edit,cljs.core.pv_aget.call(null,new_root__8723,0));
this__8720.root = new_root__8725;
this__8720.shift = (this__8720.shift - 5);
this__8720.cnt = (this__8720.cnt - 1);
this__8720.tail = new_tail__8721;
return tcoll;
} else
{this__8720.root = new_root__8723;
this__8720.cnt = (this__8720.cnt - 1);
this__8720.tail = new_tail__8721;
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
var this__8726 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8727 = this;
if(this__8727.root.edit)
{if(((this__8727.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__8727.tail[(this__8727.cnt & 31)] = o);
this__8727.cnt = (this__8727.cnt + 1);
return tcoll;
} else
{var tail_node__8728 = (new cljs.core.VectorNode(this__8727.root.edit,this__8727.tail));
var new_tail__8729 = cljs.core.make_array.call(null,32);
(new_tail__8729[0] = o);
this__8727.tail = new_tail__8729;
if(((this__8727.cnt >>> 5) > (1 << this__8727.shift)))
{var new_root_array__8730 = cljs.core.make_array.call(null,32);
var new_shift__8731 = (this__8727.shift + 5);
(new_root_array__8730[0] = this__8727.root);
(new_root_array__8730[1] = cljs.core.new_path.call(null,this__8727.root.edit,this__8727.shift,tail_node__8728));
this__8727.root = (new cljs.core.VectorNode(this__8727.root.edit,new_root_array__8730));
this__8727.shift = new_shift__8731;
this__8727.cnt = (this__8727.cnt + 1);
return tcoll;
} else
{var new_root__8732 = cljs.core.tv_push_tail.call(null,tcoll,this__8727.shift,this__8727.root,tail_node__8728);
this__8727.root = new_root__8732;
this__8727.cnt = (this__8727.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8733 = this;
if(this__8733.root.edit)
{this__8733.root.edit = null;
var len__8734 = (this__8733.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__8735 = cljs.core.make_array.call(null,len__8734);
cljs.core.array_copy.call(null,this__8733.tail,0,trimmed_tail__8735,0,len__8734);
return (new cljs.core.PersistentVector(null,this__8733.cnt,this__8733.shift,this__8733.root,trimmed_tail__8735,null));
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
var this__8737 = this;
var h__2153__auto____8738 = this__8737.__hash;
if(!((h__2153__auto____8738 == null)))
{return h__2153__auto____8738;
} else
{var h__2153__auto____8739 = cljs.core.hash_coll.call(null,coll);
this__8737.__hash = h__2153__auto____8739;
return h__2153__auto____8739;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8740 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__8741 = this;
var this__8742 = this;
return cljs.core.pr_str.call(null,this__8742);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8743 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8744 = this;
return cljs.core._first.call(null,this__8744.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8745 = this;
var temp__3971__auto____8746 = cljs.core.next.call(null,this__8745.front);
if(temp__3971__auto____8746)
{var f1__8747 = temp__3971__auto____8746;
return (new cljs.core.PersistentQueueSeq(this__8745.meta,f1__8747,this__8745.rear,null));
} else
{if((this__8745.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__8745.meta,this__8745.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8748 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8749 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__8749.front,this__8749.rear,this__8749.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8750 = this;
return this__8750.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8751 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8751.meta);
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
var this__8752 = this;
var h__2153__auto____8753 = this__8752.__hash;
if(!((h__2153__auto____8753 == null)))
{return h__2153__auto____8753;
} else
{var h__2153__auto____8754 = cljs.core.hash_coll.call(null,coll);
this__8752.__hash = h__2153__auto____8754;
return h__2153__auto____8754;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8755 = this;
if(cljs.core.truth_(this__8755.front))
{return (new cljs.core.PersistentQueue(this__8755.meta,(this__8755.count + 1),this__8755.front,cljs.core.conj.call(null,(function (){var or__3824__auto____8756 = this__8755.rear;
if(cljs.core.truth_(or__3824__auto____8756))
{return or__3824__auto____8756;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__8755.meta,(this__8755.count + 1),cljs.core.conj.call(null,this__8755.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__8757 = this;
var this__8758 = this;
return cljs.core.pr_str.call(null,this__8758);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8759 = this;
var rear__8760 = cljs.core.seq.call(null,this__8759.rear);
if(cljs.core.truth_((function (){var or__3824__auto____8761 = this__8759.front;
if(cljs.core.truth_(or__3824__auto____8761))
{return or__3824__auto____8761;
} else
{return rear__8760;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__8759.front,cljs.core.seq.call(null,rear__8760),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8762 = this;
return this__8762.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8763 = this;
return cljs.core._first.call(null,this__8763.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8764 = this;
if(cljs.core.truth_(this__8764.front))
{var temp__3971__auto____8765 = cljs.core.next.call(null,this__8764.front);
if(temp__3971__auto____8765)
{var f1__8766 = temp__3971__auto____8765;
return (new cljs.core.PersistentQueue(this__8764.meta,(this__8764.count - 1),f1__8766,this__8764.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__8764.meta,(this__8764.count - 1),cljs.core.seq.call(null,this__8764.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8767 = this;
return cljs.core.first.call(null,this__8767.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8768 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8769 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8770 = this;
return (new cljs.core.PersistentQueue(meta,this__8770.count,this__8770.front,this__8770.rear,this__8770.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8771 = this;
return this__8771.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8772 = this;
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
var this__8773 = this;
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
var len__8776 = array.length;
var i__8777 = 0;
while(true){
if((i__8777 < len__8776))
{if((k === (array[i__8777])))
{return i__8777;
} else
{{
var G__8778 = (i__8777 + incr);
i__8777 = G__8778;
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
var a__8781 = cljs.core.hash.call(null,a);
var b__8782 = cljs.core.hash.call(null,b);
if((a__8781 < b__8782))
{return -1;
} else
{if((a__8781 > b__8782))
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
var ks__8790 = m.keys;
var len__8791 = ks__8790.length;
var so__8792 = m.strobj;
var out__8793 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__8794 = 0;
var out__8795 = cljs.core.transient$.call(null,out__8793);
while(true){
if((i__8794 < len__8791))
{var k__8796 = (ks__8790[i__8794]);
{
var G__8797 = (i__8794 + 1);
var G__8798 = cljs.core.assoc_BANG_.call(null,out__8795,k__8796,(so__8792[k__8796]));
i__8794 = G__8797;
out__8795 = G__8798;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__8795,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__8804 = {};
var l__8805 = ks.length;
var i__8806 = 0;
while(true){
if((i__8806 < l__8805))
{var k__8807 = (ks[i__8806]);
(new_obj__8804[k__8807] = (obj[k__8807]));
{
var G__8808 = (i__8806 + 1);
i__8806 = G__8808;
continue;
}
} else
{}
break;
}
return new_obj__8804;
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
var this__8811 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8812 = this;
var h__2153__auto____8813 = this__8812.__hash;
if(!((h__2153__auto____8813 == null)))
{return h__2153__auto____8813;
} else
{var h__2153__auto____8814 = cljs.core.hash_imap.call(null,coll);
this__8812.__hash = h__2153__auto____8814;
return h__2153__auto____8814;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8815 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8816 = this;
if((function (){var and__3822__auto____8817 = goog.isString(k);
if(and__3822__auto____8817)
{return !((cljs.core.scan_array.call(null,1,k,this__8816.keys) == null));
} else
{return and__3822__auto____8817;
}
})())
{return (this__8816.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8818 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____8819 = (this__8818.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____8819)
{return or__3824__auto____8819;
} else
{return (this__8818.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__8818.keys) == null)))
{var new_strobj__8820 = cljs.core.obj_clone.call(null,this__8818.strobj,this__8818.keys);
(new_strobj__8820[k] = v);
return (new cljs.core.ObjMap(this__8818.meta,this__8818.keys,new_strobj__8820,(this__8818.update_count + 1),null));
} else
{var new_strobj__8821 = cljs.core.obj_clone.call(null,this__8818.strobj,this__8818.keys);
var new_keys__8822 = this__8818.keys.slice();
(new_strobj__8821[k] = v);
new_keys__8822.push(k);
return (new cljs.core.ObjMap(this__8818.meta,new_keys__8822,new_strobj__8821,(this__8818.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8823 = this;
if((function (){var and__3822__auto____8824 = goog.isString(k);
if(and__3822__auto____8824)
{return !((cljs.core.scan_array.call(null,1,k,this__8823.keys) == null));
} else
{return and__3822__auto____8824;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__8846 = null;
var G__8846__2 = (function (this_sym8825,k){
var this__8827 = this;
var this_sym8825__8828 = this;
var coll__8829 = this_sym8825__8828;
return coll__8829.cljs$core$ILookup$_lookup$arity$2(coll__8829,k);
});
var G__8846__3 = (function (this_sym8826,k,not_found){
var this__8827 = this;
var this_sym8826__8830 = this;
var coll__8831 = this_sym8826__8830;
return coll__8831.cljs$core$ILookup$_lookup$arity$3(coll__8831,k,not_found);
});
G__8846 = function(this_sym8826,k,not_found){
switch(arguments.length){
case 2:
return G__8846__2.call(this,this_sym8826,k);
case 3:
return G__8846__3.call(this,this_sym8826,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8846;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym8809,args8810){
var this__8832 = this;
return this_sym8809.call.apply(this_sym8809,[this_sym8809].concat(args8810.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8833 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__8834 = this;
var this__8835 = this;
return cljs.core.pr_str.call(null,this__8835);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8836 = this;
if((this__8836.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__8799_SHARP_){
return cljs.core.vector.call(null,p1__8799_SHARP_,(this__8836.strobj[p1__8799_SHARP_]));
}),this__8836.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8837 = this;
return this__8837.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8838 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8839 = this;
return (new cljs.core.ObjMap(meta,this__8839.keys,this__8839.strobj,this__8839.update_count,this__8839.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8840 = this;
return this__8840.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8841 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__8841.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8842 = this;
if((function (){var and__3822__auto____8843 = goog.isString(k);
if(and__3822__auto____8843)
{return !((cljs.core.scan_array.call(null,1,k,this__8842.keys) == null));
} else
{return and__3822__auto____8843;
}
})())
{var new_keys__8844 = this__8842.keys.slice();
var new_strobj__8845 = cljs.core.obj_clone.call(null,this__8842.strobj,this__8842.keys);
new_keys__8844.splice(cljs.core.scan_array.call(null,1,k,new_keys__8844),1);
cljs.core.js_delete.call(null,new_strobj__8845,k);
return (new cljs.core.ObjMap(this__8842.meta,new_keys__8844,new_strobj__8845,(this__8842.update_count + 1),null));
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
var this__8850 = this;
var h__2153__auto____8851 = this__8850.__hash;
if(!((h__2153__auto____8851 == null)))
{return h__2153__auto____8851;
} else
{var h__2153__auto____8852 = cljs.core.hash_imap.call(null,coll);
this__8850.__hash = h__2153__auto____8852;
return h__2153__auto____8852;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8853 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8854 = this;
var bucket__8855 = (this__8854.hashobj[cljs.core.hash.call(null,k)]);
var i__8856 = (cljs.core.truth_(bucket__8855)?cljs.core.scan_array.call(null,2,k,bucket__8855):null);
if(cljs.core.truth_(i__8856))
{return (bucket__8855[(i__8856 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8857 = this;
var h__8858 = cljs.core.hash.call(null,k);
var bucket__8859 = (this__8857.hashobj[h__8858]);
if(cljs.core.truth_(bucket__8859))
{var new_bucket__8860 = bucket__8859.slice();
var new_hashobj__8861 = goog.object.clone(this__8857.hashobj);
(new_hashobj__8861[h__8858] = new_bucket__8860);
var temp__3971__auto____8862 = cljs.core.scan_array.call(null,2,k,new_bucket__8860);
if(cljs.core.truth_(temp__3971__auto____8862))
{var i__8863 = temp__3971__auto____8862;
(new_bucket__8860[(i__8863 + 1)] = v);
return (new cljs.core.HashMap(this__8857.meta,this__8857.count,new_hashobj__8861,null));
} else
{new_bucket__8860.push(k,v);
return (new cljs.core.HashMap(this__8857.meta,(this__8857.count + 1),new_hashobj__8861,null));
}
} else
{var new_hashobj__8864 = goog.object.clone(this__8857.hashobj);
(new_hashobj__8864[h__8858] = [k,v]);
return (new cljs.core.HashMap(this__8857.meta,(this__8857.count + 1),new_hashobj__8864,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8865 = this;
var bucket__8866 = (this__8865.hashobj[cljs.core.hash.call(null,k)]);
var i__8867 = (cljs.core.truth_(bucket__8866)?cljs.core.scan_array.call(null,2,k,bucket__8866):null);
if(cljs.core.truth_(i__8867))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__8892 = null;
var G__8892__2 = (function (this_sym8868,k){
var this__8870 = this;
var this_sym8868__8871 = this;
var coll__8872 = this_sym8868__8871;
return coll__8872.cljs$core$ILookup$_lookup$arity$2(coll__8872,k);
});
var G__8892__3 = (function (this_sym8869,k,not_found){
var this__8870 = this;
var this_sym8869__8873 = this;
var coll__8874 = this_sym8869__8873;
return coll__8874.cljs$core$ILookup$_lookup$arity$3(coll__8874,k,not_found);
});
G__8892 = function(this_sym8869,k,not_found){
switch(arguments.length){
case 2:
return G__8892__2.call(this,this_sym8869,k);
case 3:
return G__8892__3.call(this,this_sym8869,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8892;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym8848,args8849){
var this__8875 = this;
return this_sym8848.call.apply(this_sym8848,[this_sym8848].concat(args8849.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8876 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__8877 = this;
var this__8878 = this;
return cljs.core.pr_str.call(null,this__8878);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8879 = this;
if((this__8879.count > 0))
{var hashes__8880 = cljs.core.js_keys.call(null,this__8879.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__8847_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__8879.hashobj[p1__8847_SHARP_])));
}),hashes__8880);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8881 = this;
return this__8881.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8882 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8883 = this;
return (new cljs.core.HashMap(meta,this__8883.count,this__8883.hashobj,this__8883.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8884 = this;
return this__8884.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8885 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__8885.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8886 = this;
var h__8887 = cljs.core.hash.call(null,k);
var bucket__8888 = (this__8886.hashobj[h__8887]);
var i__8889 = (cljs.core.truth_(bucket__8888)?cljs.core.scan_array.call(null,2,k,bucket__8888):null);
if(cljs.core.not.call(null,i__8889))
{return coll;
} else
{var new_hashobj__8890 = goog.object.clone(this__8886.hashobj);
if((3 > bucket__8888.length))
{cljs.core.js_delete.call(null,new_hashobj__8890,h__8887);
} else
{var new_bucket__8891 = bucket__8888.slice();
new_bucket__8891.splice(i__8889,2);
(new_hashobj__8890[h__8887] = new_bucket__8891);
}
return (new cljs.core.HashMap(this__8886.meta,(this__8886.count - 1),new_hashobj__8890,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__8893 = ks.length;
var i__8894 = 0;
var out__8895 = cljs.core.HashMap.EMPTY;
while(true){
if((i__8894 < len__8893))
{{
var G__8896 = (i__8894 + 1);
var G__8897 = cljs.core.assoc.call(null,out__8895,(ks[i__8894]),(vs[i__8894]));
i__8894 = G__8896;
out__8895 = G__8897;
continue;
}
} else
{return out__8895;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__8901 = m.arr;
var len__8902 = arr__8901.length;
var i__8903 = 0;
while(true){
if((len__8902 <= i__8903))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__8901[i__8903]),k))
{return i__8903;
} else
{if("\uFDD0'else")
{{
var G__8904 = (i__8903 + 2);
i__8903 = G__8904;
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
var this__8907 = this;
return (new cljs.core.TransientArrayMap({},this__8907.arr.length,this__8907.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8908 = this;
var h__2153__auto____8909 = this__8908.__hash;
if(!((h__2153__auto____8909 == null)))
{return h__2153__auto____8909;
} else
{var h__2153__auto____8910 = cljs.core.hash_imap.call(null,coll);
this__8908.__hash = h__2153__auto____8910;
return h__2153__auto____8910;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8911 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8912 = this;
var idx__8913 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8913 === -1))
{return not_found;
} else
{return (this__8912.arr[(idx__8913 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8914 = this;
var idx__8915 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8915 === -1))
{if((this__8914.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__8914.meta,(this__8914.cnt + 1),(function (){var G__8916__8917 = this__8914.arr.slice();
G__8916__8917.push(k);
G__8916__8917.push(v);
return G__8916__8917;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__8914.arr[(idx__8915 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__8914.meta,this__8914.cnt,(function (){var G__8918__8919 = this__8914.arr.slice();
(G__8918__8919[(idx__8915 + 1)] = v);
return G__8918__8919;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8920 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__8952 = null;
var G__8952__2 = (function (this_sym8921,k){
var this__8923 = this;
var this_sym8921__8924 = this;
var coll__8925 = this_sym8921__8924;
return coll__8925.cljs$core$ILookup$_lookup$arity$2(coll__8925,k);
});
var G__8952__3 = (function (this_sym8922,k,not_found){
var this__8923 = this;
var this_sym8922__8926 = this;
var coll__8927 = this_sym8922__8926;
return coll__8927.cljs$core$ILookup$_lookup$arity$3(coll__8927,k,not_found);
});
G__8952 = function(this_sym8922,k,not_found){
switch(arguments.length){
case 2:
return G__8952__2.call(this,this_sym8922,k);
case 3:
return G__8952__3.call(this,this_sym8922,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8952;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym8905,args8906){
var this__8928 = this;
return this_sym8905.call.apply(this_sym8905,[this_sym8905].concat(args8906.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__8929 = this;
var len__8930 = this__8929.arr.length;
var i__8931 = 0;
var init__8932 = init;
while(true){
if((i__8931 < len__8930))
{var init__8933 = f.call(null,init__8932,(this__8929.arr[i__8931]),(this__8929.arr[(i__8931 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__8933))
{return cljs.core.deref.call(null,init__8933);
} else
{{
var G__8953 = (i__8931 + 2);
var G__8954 = init__8933;
i__8931 = G__8953;
init__8932 = G__8954;
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
var this__8934 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__8935 = this;
var this__8936 = this;
return cljs.core.pr_str.call(null,this__8936);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8937 = this;
if((this__8937.cnt > 0))
{var len__8938 = this__8937.arr.length;
var array_map_seq__8939 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__8938))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__8937.arr[i]),(this__8937.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__8939.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8940 = this;
return this__8940.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8941 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8942 = this;
return (new cljs.core.PersistentArrayMap(meta,this__8942.cnt,this__8942.arr,this__8942.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8943 = this;
return this__8943.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8944 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8944.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8945 = this;
var idx__8946 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8946 >= 0))
{var len__8947 = this__8945.arr.length;
var new_len__8948 = (len__8947 - 2);
if((new_len__8948 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__8949 = cljs.core.make_array.call(null,new_len__8948);
var s__8950 = 0;
var d__8951 = 0;
while(true){
if((s__8950 >= len__8947))
{return (new cljs.core.PersistentArrayMap(this__8945.meta,(this__8945.cnt - 1),new_arr__8949,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__8945.arr[s__8950])))
{{
var G__8955 = (s__8950 + 2);
var G__8956 = d__8951;
s__8950 = G__8955;
d__8951 = G__8956;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__8949[d__8951] = (this__8945.arr[s__8950]));
(new_arr__8949[(d__8951 + 1)] = (this__8945.arr[(s__8950 + 1)]));
{
var G__8957 = (s__8950 + 2);
var G__8958 = (d__8951 + 2);
s__8950 = G__8957;
d__8951 = G__8958;
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
var len__8959 = cljs.core.count.call(null,ks);
var i__8960 = 0;
var out__8961 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__8960 < len__8959))
{{
var G__8962 = (i__8960 + 1);
var G__8963 = cljs.core.assoc_BANG_.call(null,out__8961,(ks[i__8960]),(vs[i__8960]));
i__8960 = G__8962;
out__8961 = G__8963;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8961);
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
var this__8964 = this;
if(cljs.core.truth_(this__8964.editable_QMARK_))
{var idx__8965 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__8965 >= 0))
{(this__8964.arr[idx__8965] = (this__8964.arr[(this__8964.len - 2)]));
(this__8964.arr[(idx__8965 + 1)] = (this__8964.arr[(this__8964.len - 1)]));
var G__8966__8967 = this__8964.arr;
G__8966__8967.pop();
G__8966__8967.pop();
G__8966__8967;
this__8964.len = (this__8964.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__8968 = this;
if(cljs.core.truth_(this__8968.editable_QMARK_))
{var idx__8969 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__8969 === -1))
{if(((this__8968.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__8968.len = (this__8968.len + 2);
this__8968.arr.push(key);
this__8968.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__8968.len,this__8968.arr),key,val);
}
} else
{if((val === (this__8968.arr[(idx__8969 + 1)])))
{return tcoll;
} else
{(this__8968.arr[(idx__8969 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8970 = this;
if(cljs.core.truth_(this__8970.editable_QMARK_))
{if((function (){var G__8971__8972 = o;
if(G__8971__8972)
{if((function (){var or__3824__auto____8973 = (G__8971__8972.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____8973)
{return or__3824__auto____8973;
} else
{return G__8971__8972.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__8971__8972.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8971__8972);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8971__8972);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__8974 = cljs.core.seq.call(null,o);
var tcoll__8975 = tcoll;
while(true){
var temp__3971__auto____8976 = cljs.core.first.call(null,es__8974);
if(cljs.core.truth_(temp__3971__auto____8976))
{var e__8977 = temp__3971__auto____8976;
{
var G__8983 = cljs.core.next.call(null,es__8974);
var G__8984 = tcoll__8975.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__8975,cljs.core.key.call(null,e__8977),cljs.core.val.call(null,e__8977));
es__8974 = G__8983;
tcoll__8975 = G__8984;
continue;
}
} else
{return tcoll__8975;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8978 = this;
if(cljs.core.truth_(this__8978.editable_QMARK_))
{this__8978.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__8978.len,2),this__8978.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__8979 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__8980 = this;
if(cljs.core.truth_(this__8980.editable_QMARK_))
{var idx__8981 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__8981 === -1))
{return not_found;
} else
{return (this__8980.arr[(idx__8981 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__8982 = this;
if(cljs.core.truth_(this__8982.editable_QMARK_))
{return cljs.core.quot.call(null,this__8982.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
void 0;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__8987 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__8988 = 0;
while(true){
if((i__8988 < len))
{{
var G__8989 = cljs.core.assoc_BANG_.call(null,out__8987,(arr[i__8988]),(arr[(i__8988 + 1)]));
var G__8990 = (i__8988 + 2);
out__8987 = G__8989;
i__8988 = G__8990;
continue;
}
} else
{return out__8987;
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
var G__8995__8996 = arr.slice();
(G__8995__8996[i] = a);
return G__8995__8996;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__8997__8998 = arr.slice();
(G__8997__8998[i] = a);
(G__8997__8998[j] = b);
return G__8997__8998;
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
var new_arr__9000 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__9000,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__9000,(2 * i),(new_arr__9000.length - (2 * i)));
return new_arr__9000;
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
var editable__9003 = inode.ensure_editable(edit);
(editable__9003.arr[i] = a);
return editable__9003;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__9004 = inode.ensure_editable(edit);
(editable__9004.arr[i] = a);
(editable__9004.arr[j] = b);
return editable__9004;
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
var len__9011 = arr.length;
var i__9012 = 0;
var init__9013 = init;
while(true){
if((i__9012 < len__9011))
{var init__9016 = (function (){var k__9014 = (arr[i__9012]);
if(!((k__9014 == null)))
{return f.call(null,init__9013,k__9014,(arr[(i__9012 + 1)]));
} else
{var node__9015 = (arr[(i__9012 + 1)]);
if(!((node__9015 == null)))
{return node__9015.kv_reduce(f,init__9013);
} else
{return init__9013;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__9016))
{return cljs.core.deref.call(null,init__9016);
} else
{{
var G__9017 = (i__9012 + 2);
var G__9018 = init__9016;
i__9012 = G__9017;
init__9013 = G__9018;
continue;
}
}
} else
{return init__9013;
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
var this__9019 = this;
var inode__9020 = this;
if((this__9019.bitmap === bit))
{return null;
} else
{var editable__9021 = inode__9020.ensure_editable(e);
var earr__9022 = editable__9021.arr;
var len__9023 = earr__9022.length;
editable__9021.bitmap = (bit ^ editable__9021.bitmap);
cljs.core.array_copy.call(null,earr__9022,(2 * (i + 1)),earr__9022,(2 * i),(len__9023 - (2 * (i + 1))));
(earr__9022[(len__9023 - 2)] = null);
(earr__9022[(len__9023 - 1)] = null);
return editable__9021;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9024 = this;
var inode__9025 = this;
var bit__9026 = (1 << ((hash >>> shift) & 0x01f));
var idx__9027 = cljs.core.bitmap_indexed_node_index.call(null,this__9024.bitmap,bit__9026);
if(((this__9024.bitmap & bit__9026) === 0))
{var n__9028 = cljs.core.bit_count.call(null,this__9024.bitmap);
if(((2 * n__9028) < this__9024.arr.length))
{var editable__9029 = inode__9025.ensure_editable(edit);
var earr__9030 = editable__9029.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__9030,(2 * idx__9027),earr__9030,(2 * (idx__9027 + 1)),(2 * (n__9028 - idx__9027)));
(earr__9030[(2 * idx__9027)] = key);
(earr__9030[((2 * idx__9027) + 1)] = val);
editable__9029.bitmap = (editable__9029.bitmap | bit__9026);
return editable__9029;
} else
{if((n__9028 >= 16))
{var nodes__9031 = cljs.core.make_array.call(null,32);
var jdx__9032 = ((hash >>> shift) & 0x01f);
(nodes__9031[jdx__9032] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__9033 = 0;
var j__9034 = 0;
while(true){
if((i__9033 < 32))
{if((((this__9024.bitmap >>> i__9033) & 1) === 0))
{{
var G__9087 = (i__9033 + 1);
var G__9088 = j__9034;
i__9033 = G__9087;
j__9034 = G__9088;
continue;
}
} else
{(nodes__9031[i__9033] = ((!(((this__9024.arr[j__9034]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__9024.arr[j__9034])),(this__9024.arr[j__9034]),(this__9024.arr[(j__9034 + 1)]),added_leaf_QMARK_):(this__9024.arr[(j__9034 + 1)])));
{
var G__9089 = (i__9033 + 1);
var G__9090 = (j__9034 + 2);
i__9033 = G__9089;
j__9034 = G__9090;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__9028 + 1),nodes__9031));
} else
{if("\uFDD0'else")
{var new_arr__9035 = cljs.core.make_array.call(null,(2 * (n__9028 + 4)));
cljs.core.array_copy.call(null,this__9024.arr,0,new_arr__9035,0,(2 * idx__9027));
(new_arr__9035[(2 * idx__9027)] = key);
(new_arr__9035[((2 * idx__9027) + 1)] = val);
cljs.core.array_copy.call(null,this__9024.arr,(2 * idx__9027),new_arr__9035,(2 * (idx__9027 + 1)),(2 * (n__9028 - idx__9027)));
added_leaf_QMARK_.val = true;
var editable__9036 = inode__9025.ensure_editable(edit);
editable__9036.arr = new_arr__9035;
editable__9036.bitmap = (editable__9036.bitmap | bit__9026);
return editable__9036;
} else
{return null;
}
}
}
} else
{var key_or_nil__9037 = (this__9024.arr[(2 * idx__9027)]);
var val_or_node__9038 = (this__9024.arr[((2 * idx__9027) + 1)]);
if((key_or_nil__9037 == null))
{var n__9039 = val_or_node__9038.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9039 === val_or_node__9038))
{return inode__9025;
} else
{return cljs.core.edit_and_set.call(null,inode__9025,edit,((2 * idx__9027) + 1),n__9039);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9037))
{if((val === val_or_node__9038))
{return inode__9025;
} else
{return cljs.core.edit_and_set.call(null,inode__9025,edit,((2 * idx__9027) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__9025,edit,(2 * idx__9027),null,((2 * idx__9027) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__9037,val_or_node__9038,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__9040 = this;
var inode__9041 = this;
return cljs.core.create_inode_seq.call(null,this__9040.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9042 = this;
var inode__9043 = this;
var bit__9044 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9042.bitmap & bit__9044) === 0))
{return inode__9043;
} else
{var idx__9045 = cljs.core.bitmap_indexed_node_index.call(null,this__9042.bitmap,bit__9044);
var key_or_nil__9046 = (this__9042.arr[(2 * idx__9045)]);
var val_or_node__9047 = (this__9042.arr[((2 * idx__9045) + 1)]);
if((key_or_nil__9046 == null))
{var n__9048 = val_or_node__9047.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__9048 === val_or_node__9047))
{return inode__9043;
} else
{if(!((n__9048 == null)))
{return cljs.core.edit_and_set.call(null,inode__9043,edit,((2 * idx__9045) + 1),n__9048);
} else
{if((this__9042.bitmap === bit__9044))
{return null;
} else
{if("\uFDD0'else")
{return inode__9043.edit_and_remove_pair(edit,bit__9044,idx__9045);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9046))
{(removed_leaf_QMARK_[0] = true);
return inode__9043.edit_and_remove_pair(edit,bit__9044,idx__9045);
} else
{if("\uFDD0'else")
{return inode__9043;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__9049 = this;
var inode__9050 = this;
if((e === this__9049.edit))
{return inode__9050;
} else
{var n__9051 = cljs.core.bit_count.call(null,this__9049.bitmap);
var new_arr__9052 = cljs.core.make_array.call(null,(((n__9051 < 0))?4:(2 * (n__9051 + 1))));
cljs.core.array_copy.call(null,this__9049.arr,0,new_arr__9052,0,(2 * n__9051));
return (new cljs.core.BitmapIndexedNode(e,this__9049.bitmap,new_arr__9052));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__9053 = this;
var inode__9054 = this;
return cljs.core.inode_kv_reduce.call(null,this__9053.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9055 = this;
var inode__9056 = this;
var bit__9057 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9055.bitmap & bit__9057) === 0))
{return not_found;
} else
{var idx__9058 = cljs.core.bitmap_indexed_node_index.call(null,this__9055.bitmap,bit__9057);
var key_or_nil__9059 = (this__9055.arr[(2 * idx__9058)]);
var val_or_node__9060 = (this__9055.arr[((2 * idx__9058) + 1)]);
if((key_or_nil__9059 == null))
{return val_or_node__9060.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9059))
{return cljs.core.PersistentVector.fromArray([key_or_nil__9059,val_or_node__9060], true);
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
var this__9061 = this;
var inode__9062 = this;
var bit__9063 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9061.bitmap & bit__9063) === 0))
{return inode__9062;
} else
{var idx__9064 = cljs.core.bitmap_indexed_node_index.call(null,this__9061.bitmap,bit__9063);
var key_or_nil__9065 = (this__9061.arr[(2 * idx__9064)]);
var val_or_node__9066 = (this__9061.arr[((2 * idx__9064) + 1)]);
if((key_or_nil__9065 == null))
{var n__9067 = val_or_node__9066.inode_without((shift + 5),hash,key);
if((n__9067 === val_or_node__9066))
{return inode__9062;
} else
{if(!((n__9067 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__9061.bitmap,cljs.core.clone_and_set.call(null,this__9061.arr,((2 * idx__9064) + 1),n__9067)));
} else
{if((this__9061.bitmap === bit__9063))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__9061.bitmap ^ bit__9063),cljs.core.remove_pair.call(null,this__9061.arr,idx__9064)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9065))
{return (new cljs.core.BitmapIndexedNode(null,(this__9061.bitmap ^ bit__9063),cljs.core.remove_pair.call(null,this__9061.arr,idx__9064)));
} else
{if("\uFDD0'else")
{return inode__9062;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9068 = this;
var inode__9069 = this;
var bit__9070 = (1 << ((hash >>> shift) & 0x01f));
var idx__9071 = cljs.core.bitmap_indexed_node_index.call(null,this__9068.bitmap,bit__9070);
if(((this__9068.bitmap & bit__9070) === 0))
{var n__9072 = cljs.core.bit_count.call(null,this__9068.bitmap);
if((n__9072 >= 16))
{var nodes__9073 = cljs.core.make_array.call(null,32);
var jdx__9074 = ((hash >>> shift) & 0x01f);
(nodes__9073[jdx__9074] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__9075 = 0;
var j__9076 = 0;
while(true){
if((i__9075 < 32))
{if((((this__9068.bitmap >>> i__9075) & 1) === 0))
{{
var G__9091 = (i__9075 + 1);
var G__9092 = j__9076;
i__9075 = G__9091;
j__9076 = G__9092;
continue;
}
} else
{(nodes__9073[i__9075] = ((!(((this__9068.arr[j__9076]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__9068.arr[j__9076])),(this__9068.arr[j__9076]),(this__9068.arr[(j__9076 + 1)]),added_leaf_QMARK_):(this__9068.arr[(j__9076 + 1)])));
{
var G__9093 = (i__9075 + 1);
var G__9094 = (j__9076 + 2);
i__9075 = G__9093;
j__9076 = G__9094;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__9072 + 1),nodes__9073));
} else
{var new_arr__9077 = cljs.core.make_array.call(null,(2 * (n__9072 + 1)));
cljs.core.array_copy.call(null,this__9068.arr,0,new_arr__9077,0,(2 * idx__9071));
(new_arr__9077[(2 * idx__9071)] = key);
(new_arr__9077[((2 * idx__9071) + 1)] = val);
cljs.core.array_copy.call(null,this__9068.arr,(2 * idx__9071),new_arr__9077,(2 * (idx__9071 + 1)),(2 * (n__9072 - idx__9071)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__9068.bitmap | bit__9070),new_arr__9077));
}
} else
{var key_or_nil__9078 = (this__9068.arr[(2 * idx__9071)]);
var val_or_node__9079 = (this__9068.arr[((2 * idx__9071) + 1)]);
if((key_or_nil__9078 == null))
{var n__9080 = val_or_node__9079.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9080 === val_or_node__9079))
{return inode__9069;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__9068.bitmap,cljs.core.clone_and_set.call(null,this__9068.arr,((2 * idx__9071) + 1),n__9080)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9078))
{if((val === val_or_node__9079))
{return inode__9069;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__9068.bitmap,cljs.core.clone_and_set.call(null,this__9068.arr,((2 * idx__9071) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__9068.bitmap,cljs.core.clone_and_set.call(null,this__9068.arr,(2 * idx__9071),null,((2 * idx__9071) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__9078,val_or_node__9079,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9081 = this;
var inode__9082 = this;
var bit__9083 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9081.bitmap & bit__9083) === 0))
{return not_found;
} else
{var idx__9084 = cljs.core.bitmap_indexed_node_index.call(null,this__9081.bitmap,bit__9083);
var key_or_nil__9085 = (this__9081.arr[(2 * idx__9084)]);
var val_or_node__9086 = (this__9081.arr[((2 * idx__9084) + 1)]);
if((key_or_nil__9085 == null))
{return val_or_node__9086.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9085))
{return val_or_node__9086;
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
var arr__9102 = array_node.arr;
var len__9103 = (2 * (array_node.cnt - 1));
var new_arr__9104 = cljs.core.make_array.call(null,len__9103);
var i__9105 = 0;
var j__9106 = 1;
var bitmap__9107 = 0;
while(true){
if((i__9105 < len__9103))
{if((function (){var and__3822__auto____9108 = !((i__9105 === idx));
if(and__3822__auto____9108)
{return !(((arr__9102[i__9105]) == null));
} else
{return and__3822__auto____9108;
}
})())
{(new_arr__9104[j__9106] = (arr__9102[i__9105]));
{
var G__9109 = (i__9105 + 1);
var G__9110 = (j__9106 + 2);
var G__9111 = (bitmap__9107 | (1 << i__9105));
i__9105 = G__9109;
j__9106 = G__9110;
bitmap__9107 = G__9111;
continue;
}
} else
{{
var G__9112 = (i__9105 + 1);
var G__9113 = j__9106;
var G__9114 = bitmap__9107;
i__9105 = G__9112;
j__9106 = G__9113;
bitmap__9107 = G__9114;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__9107,new_arr__9104));
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
var this__9115 = this;
var inode__9116 = this;
var idx__9117 = ((hash >>> shift) & 0x01f);
var node__9118 = (this__9115.arr[idx__9117]);
if((node__9118 == null))
{var editable__9119 = cljs.core.edit_and_set.call(null,inode__9116,edit,idx__9117,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__9119.cnt = (editable__9119.cnt + 1);
return editable__9119;
} else
{var n__9120 = node__9118.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9120 === node__9118))
{return inode__9116;
} else
{return cljs.core.edit_and_set.call(null,inode__9116,edit,idx__9117,n__9120);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__9121 = this;
var inode__9122 = this;
return cljs.core.create_array_node_seq.call(null,this__9121.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9123 = this;
var inode__9124 = this;
var idx__9125 = ((hash >>> shift) & 0x01f);
var node__9126 = (this__9123.arr[idx__9125]);
if((node__9126 == null))
{return inode__9124;
} else
{var n__9127 = node__9126.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__9127 === node__9126))
{return inode__9124;
} else
{if((n__9127 == null))
{if((this__9123.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__9124,edit,idx__9125);
} else
{var editable__9128 = cljs.core.edit_and_set.call(null,inode__9124,edit,idx__9125,n__9127);
editable__9128.cnt = (editable__9128.cnt - 1);
return editable__9128;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__9124,edit,idx__9125,n__9127);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__9129 = this;
var inode__9130 = this;
if((e === this__9129.edit))
{return inode__9130;
} else
{return (new cljs.core.ArrayNode(e,this__9129.cnt,this__9129.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__9131 = this;
var inode__9132 = this;
var len__9133 = this__9131.arr.length;
var i__9134 = 0;
var init__9135 = init;
while(true){
if((i__9134 < len__9133))
{var node__9136 = (this__9131.arr[i__9134]);
if(!((node__9136 == null)))
{var init__9137 = node__9136.kv_reduce(f,init__9135);
if(cljs.core.reduced_QMARK_.call(null,init__9137))
{return cljs.core.deref.call(null,init__9137);
} else
{{
var G__9156 = (i__9134 + 1);
var G__9157 = init__9137;
i__9134 = G__9156;
init__9135 = G__9157;
continue;
}
}
} else
{return null;
}
} else
{return init__9135;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9138 = this;
var inode__9139 = this;
var idx__9140 = ((hash >>> shift) & 0x01f);
var node__9141 = (this__9138.arr[idx__9140]);
if(!((node__9141 == null)))
{return node__9141.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__9142 = this;
var inode__9143 = this;
var idx__9144 = ((hash >>> shift) & 0x01f);
var node__9145 = (this__9142.arr[idx__9144]);
if(!((node__9145 == null)))
{var n__9146 = node__9145.inode_without((shift + 5),hash,key);
if((n__9146 === node__9145))
{return inode__9143;
} else
{if((n__9146 == null))
{if((this__9142.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__9143,null,idx__9144);
} else
{return (new cljs.core.ArrayNode(null,(this__9142.cnt - 1),cljs.core.clone_and_set.call(null,this__9142.arr,idx__9144,n__9146)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__9142.cnt,cljs.core.clone_and_set.call(null,this__9142.arr,idx__9144,n__9146)));
} else
{return null;
}
}
}
} else
{return inode__9143;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9147 = this;
var inode__9148 = this;
var idx__9149 = ((hash >>> shift) & 0x01f);
var node__9150 = (this__9147.arr[idx__9149]);
if((node__9150 == null))
{return (new cljs.core.ArrayNode(null,(this__9147.cnt + 1),cljs.core.clone_and_set.call(null,this__9147.arr,idx__9149,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__9151 = node__9150.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9151 === node__9150))
{return inode__9148;
} else
{return (new cljs.core.ArrayNode(null,this__9147.cnt,cljs.core.clone_and_set.call(null,this__9147.arr,idx__9149,n__9151)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9152 = this;
var inode__9153 = this;
var idx__9154 = ((hash >>> shift) & 0x01f);
var node__9155 = (this__9152.arr[idx__9154]);
if(!((node__9155 == null)))
{return node__9155.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__9160 = (2 * cnt);
var i__9161 = 0;
while(true){
if((i__9161 < lim__9160))
{if(cljs.core.key_test.call(null,key,(arr[i__9161])))
{return i__9161;
} else
{{
var G__9162 = (i__9161 + 2);
i__9161 = G__9162;
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
var this__9163 = this;
var inode__9164 = this;
if((hash === this__9163.collision_hash))
{var idx__9165 = cljs.core.hash_collision_node_find_index.call(null,this__9163.arr,this__9163.cnt,key);
if((idx__9165 === -1))
{if((this__9163.arr.length > (2 * this__9163.cnt)))
{var editable__9166 = cljs.core.edit_and_set.call(null,inode__9164,edit,(2 * this__9163.cnt),key,((2 * this__9163.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__9166.cnt = (editable__9166.cnt + 1);
return editable__9166;
} else
{var len__9167 = this__9163.arr.length;
var new_arr__9168 = cljs.core.make_array.call(null,(len__9167 + 2));
cljs.core.array_copy.call(null,this__9163.arr,0,new_arr__9168,0,len__9167);
(new_arr__9168[len__9167] = key);
(new_arr__9168[(len__9167 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__9164.ensure_editable_array(edit,(this__9163.cnt + 1),new_arr__9168);
}
} else
{if(((this__9163.arr[(idx__9165 + 1)]) === val))
{return inode__9164;
} else
{return cljs.core.edit_and_set.call(null,inode__9164,edit,(idx__9165 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__9163.collision_hash >>> shift) & 0x01f)),[null,inode__9164,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__9169 = this;
var inode__9170 = this;
return cljs.core.create_inode_seq.call(null,this__9169.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9171 = this;
var inode__9172 = this;
var idx__9173 = cljs.core.hash_collision_node_find_index.call(null,this__9171.arr,this__9171.cnt,key);
if((idx__9173 === -1))
{return inode__9172;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__9171.cnt === 1))
{return null;
} else
{var editable__9174 = inode__9172.ensure_editable(edit);
var earr__9175 = editable__9174.arr;
(earr__9175[idx__9173] = (earr__9175[((2 * this__9171.cnt) - 2)]));
(earr__9175[(idx__9173 + 1)] = (earr__9175[((2 * this__9171.cnt) - 1)]));
(earr__9175[((2 * this__9171.cnt) - 1)] = null);
(earr__9175[((2 * this__9171.cnt) - 2)] = null);
editable__9174.cnt = (editable__9174.cnt - 1);
return editable__9174;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__9176 = this;
var inode__9177 = this;
if((e === this__9176.edit))
{return inode__9177;
} else
{var new_arr__9178 = cljs.core.make_array.call(null,(2 * (this__9176.cnt + 1)));
cljs.core.array_copy.call(null,this__9176.arr,0,new_arr__9178,0,(2 * this__9176.cnt));
return (new cljs.core.HashCollisionNode(e,this__9176.collision_hash,this__9176.cnt,new_arr__9178));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__9179 = this;
var inode__9180 = this;
return cljs.core.inode_kv_reduce.call(null,this__9179.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9181 = this;
var inode__9182 = this;
var idx__9183 = cljs.core.hash_collision_node_find_index.call(null,this__9181.arr,this__9181.cnt,key);
if((idx__9183 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__9181.arr[idx__9183])))
{return cljs.core.PersistentVector.fromArray([(this__9181.arr[idx__9183]),(this__9181.arr[(idx__9183 + 1)])], true);
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
var this__9184 = this;
var inode__9185 = this;
var idx__9186 = cljs.core.hash_collision_node_find_index.call(null,this__9184.arr,this__9184.cnt,key);
if((idx__9186 === -1))
{return inode__9185;
} else
{if((this__9184.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__9184.collision_hash,(this__9184.cnt - 1),cljs.core.remove_pair.call(null,this__9184.arr,cljs.core.quot.call(null,idx__9186,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9187 = this;
var inode__9188 = this;
if((hash === this__9187.collision_hash))
{var idx__9189 = cljs.core.hash_collision_node_find_index.call(null,this__9187.arr,this__9187.cnt,key);
if((idx__9189 === -1))
{var len__9190 = this__9187.arr.length;
var new_arr__9191 = cljs.core.make_array.call(null,(len__9190 + 2));
cljs.core.array_copy.call(null,this__9187.arr,0,new_arr__9191,0,len__9190);
(new_arr__9191[len__9190] = key);
(new_arr__9191[(len__9190 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__9187.collision_hash,(this__9187.cnt + 1),new_arr__9191));
} else
{if(cljs.core._EQ_.call(null,(this__9187.arr[idx__9189]),val))
{return inode__9188;
} else
{return (new cljs.core.HashCollisionNode(null,this__9187.collision_hash,this__9187.cnt,cljs.core.clone_and_set.call(null,this__9187.arr,(idx__9189 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__9187.collision_hash >>> shift) & 0x01f)),[null,inode__9188])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9192 = this;
var inode__9193 = this;
var idx__9194 = cljs.core.hash_collision_node_find_index.call(null,this__9192.arr,this__9192.cnt,key);
if((idx__9194 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__9192.arr[idx__9194])))
{return (this__9192.arr[(idx__9194 + 1)]);
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
var this__9195 = this;
var inode__9196 = this;
if((e === this__9195.edit))
{this__9195.arr = array;
this__9195.cnt = count;
return inode__9196;
} else
{return (new cljs.core.HashCollisionNode(this__9195.edit,this__9195.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__9201 = cljs.core.hash.call(null,key1);
if((key1hash__9201 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__9201,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___9202 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__9201,key1,val1,added_leaf_QMARK___9202).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___9202);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__9203 = cljs.core.hash.call(null,key1);
if((key1hash__9203 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__9203,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___9204 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__9203,key1,val1,added_leaf_QMARK___9204).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___9204);
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
var this__9205 = this;
var h__2153__auto____9206 = this__9205.__hash;
if(!((h__2153__auto____9206 == null)))
{return h__2153__auto____9206;
} else
{var h__2153__auto____9207 = cljs.core.hash_coll.call(null,coll);
this__9205.__hash = h__2153__auto____9207;
return h__2153__auto____9207;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9208 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__9209 = this;
var this__9210 = this;
return cljs.core.pr_str.call(null,this__9210);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9211 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9212 = this;
if((this__9212.s == null))
{return cljs.core.PersistentVector.fromArray([(this__9212.nodes[this__9212.i]),(this__9212.nodes[(this__9212.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__9212.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9213 = this;
if((this__9213.s == null))
{return cljs.core.create_inode_seq.call(null,this__9213.nodes,(this__9213.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__9213.nodes,this__9213.i,cljs.core.next.call(null,this__9213.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9214 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9215 = this;
return (new cljs.core.NodeSeq(meta,this__9215.nodes,this__9215.i,this__9215.s,this__9215.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9216 = this;
return this__9216.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9217 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9217.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__9224 = nodes.length;
var j__9225 = i;
while(true){
if((j__9225 < len__9224))
{if(!(((nodes[j__9225]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__9225,null,null));
} else
{var temp__3971__auto____9226 = (nodes[(j__9225 + 1)]);
if(cljs.core.truth_(temp__3971__auto____9226))
{var node__9227 = temp__3971__auto____9226;
var temp__3971__auto____9228 = node__9227.inode_seq();
if(cljs.core.truth_(temp__3971__auto____9228))
{var node_seq__9229 = temp__3971__auto____9228;
return (new cljs.core.NodeSeq(null,nodes,(j__9225 + 2),node_seq__9229,null));
} else
{{
var G__9230 = (j__9225 + 2);
j__9225 = G__9230;
continue;
}
}
} else
{{
var G__9231 = (j__9225 + 2);
j__9225 = G__9231;
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
var this__9232 = this;
var h__2153__auto____9233 = this__9232.__hash;
if(!((h__2153__auto____9233 == null)))
{return h__2153__auto____9233;
} else
{var h__2153__auto____9234 = cljs.core.hash_coll.call(null,coll);
this__9232.__hash = h__2153__auto____9234;
return h__2153__auto____9234;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9235 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__9236 = this;
var this__9237 = this;
return cljs.core.pr_str.call(null,this__9237);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9238 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9239 = this;
return cljs.core.first.call(null,this__9239.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9240 = this;
return cljs.core.create_array_node_seq.call(null,null,this__9240.nodes,this__9240.i,cljs.core.next.call(null,this__9240.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9241 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9242 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__9242.nodes,this__9242.i,this__9242.s,this__9242.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9243 = this;
return this__9243.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9244 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9244.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__9251 = nodes.length;
var j__9252 = i;
while(true){
if((j__9252 < len__9251))
{var temp__3971__auto____9253 = (nodes[j__9252]);
if(cljs.core.truth_(temp__3971__auto____9253))
{var nj__9254 = temp__3971__auto____9253;
var temp__3971__auto____9255 = nj__9254.inode_seq();
if(cljs.core.truth_(temp__3971__auto____9255))
{var ns__9256 = temp__3971__auto____9255;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__9252 + 1),ns__9256,null));
} else
{{
var G__9257 = (j__9252 + 1);
j__9252 = G__9257;
continue;
}
}
} else
{{
var G__9258 = (j__9252 + 1);
j__9252 = G__9258;
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
var this__9261 = this;
return (new cljs.core.TransientHashMap({},this__9261.root,this__9261.cnt,this__9261.has_nil_QMARK_,this__9261.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9262 = this;
var h__2153__auto____9263 = this__9262.__hash;
if(!((h__2153__auto____9263 == null)))
{return h__2153__auto____9263;
} else
{var h__2153__auto____9264 = cljs.core.hash_imap.call(null,coll);
this__9262.__hash = h__2153__auto____9264;
return h__2153__auto____9264;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9265 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9266 = this;
if((k == null))
{if(this__9266.has_nil_QMARK_)
{return this__9266.nil_val;
} else
{return not_found;
}
} else
{if((this__9266.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__9266.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9267 = this;
if((k == null))
{if((function (){var and__3822__auto____9268 = this__9267.has_nil_QMARK_;
if(and__3822__auto____9268)
{return (v === this__9267.nil_val);
} else
{return and__3822__auto____9268;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9267.meta,((this__9267.has_nil_QMARK_)?this__9267.cnt:(this__9267.cnt + 1)),this__9267.root,true,v,null));
}
} else
{var added_leaf_QMARK___9269 = (new cljs.core.Box(false));
var new_root__9270 = (((this__9267.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9267.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___9269);
if((new_root__9270 === this__9267.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9267.meta,((added_leaf_QMARK___9269.val)?(this__9267.cnt + 1):this__9267.cnt),new_root__9270,this__9267.has_nil_QMARK_,this__9267.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9271 = this;
if((k == null))
{return this__9271.has_nil_QMARK_;
} else
{if((this__9271.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__9271.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__9294 = null;
var G__9294__2 = (function (this_sym9272,k){
var this__9274 = this;
var this_sym9272__9275 = this;
var coll__9276 = this_sym9272__9275;
return coll__9276.cljs$core$ILookup$_lookup$arity$2(coll__9276,k);
});
var G__9294__3 = (function (this_sym9273,k,not_found){
var this__9274 = this;
var this_sym9273__9277 = this;
var coll__9278 = this_sym9273__9277;
return coll__9278.cljs$core$ILookup$_lookup$arity$3(coll__9278,k,not_found);
});
G__9294 = function(this_sym9273,k,not_found){
switch(arguments.length){
case 2:
return G__9294__2.call(this,this_sym9273,k);
case 3:
return G__9294__3.call(this,this_sym9273,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9294;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym9259,args9260){
var this__9279 = this;
return this_sym9259.call.apply(this_sym9259,[this_sym9259].concat(args9260.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9280 = this;
var init__9281 = ((this__9280.has_nil_QMARK_)?f.call(null,init,null,this__9280.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__9281))
{return cljs.core.deref.call(null,init__9281);
} else
{if(!((this__9280.root == null)))
{return this__9280.root.kv_reduce(f,init__9281);
} else
{if("\uFDD0'else")
{return init__9281;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9282 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__9283 = this;
var this__9284 = this;
return cljs.core.pr_str.call(null,this__9284);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9285 = this;
if((this__9285.cnt > 0))
{var s__9286 = ((!((this__9285.root == null)))?this__9285.root.inode_seq():null);
if(this__9285.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__9285.nil_val], true),s__9286);
} else
{return s__9286;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9287 = this;
return this__9287.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9288 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9289 = this;
return (new cljs.core.PersistentHashMap(meta,this__9289.cnt,this__9289.root,this__9289.has_nil_QMARK_,this__9289.nil_val,this__9289.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9290 = this;
return this__9290.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9291 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__9291.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9292 = this;
if((k == null))
{if(this__9292.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__9292.meta,(this__9292.cnt - 1),this__9292.root,false,null,null));
} else
{return coll;
}
} else
{if((this__9292.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__9293 = this__9292.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__9293 === this__9292.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9292.meta,(this__9292.cnt - 1),new_root__9293,this__9292.has_nil_QMARK_,this__9292.nil_val,null));
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
var len__9295 = ks.length;
var i__9296 = 0;
var out__9297 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__9296 < len__9295))
{{
var G__9298 = (i__9296 + 1);
var G__9299 = cljs.core.assoc_BANG_.call(null,out__9297,(ks[i__9296]),(vs[i__9296]));
i__9296 = G__9298;
out__9297 = G__9299;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9297);
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
var this__9300 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9301 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__9302 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9303 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__9304 = this;
if((k == null))
{if(this__9304.has_nil_QMARK_)
{return this__9304.nil_val;
} else
{return null;
}
} else
{if((this__9304.root == null))
{return null;
} else
{return this__9304.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__9305 = this;
if((k == null))
{if(this__9305.has_nil_QMARK_)
{return this__9305.nil_val;
} else
{return not_found;
}
} else
{if((this__9305.root == null))
{return not_found;
} else
{return this__9305.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9306 = this;
if(this__9306.edit)
{return this__9306.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__9307 = this;
var tcoll__9308 = this;
if(this__9307.edit)
{if((function (){var G__9309__9310 = o;
if(G__9309__9310)
{if((function (){var or__3824__auto____9311 = (G__9309__9310.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____9311)
{return or__3824__auto____9311;
} else
{return G__9309__9310.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__9309__9310.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9309__9310);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9309__9310);
}
})())
{return tcoll__9308.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__9312 = cljs.core.seq.call(null,o);
var tcoll__9313 = tcoll__9308;
while(true){
var temp__3971__auto____9314 = cljs.core.first.call(null,es__9312);
if(cljs.core.truth_(temp__3971__auto____9314))
{var e__9315 = temp__3971__auto____9314;
{
var G__9326 = cljs.core.next.call(null,es__9312);
var G__9327 = tcoll__9313.assoc_BANG_(cljs.core.key.call(null,e__9315),cljs.core.val.call(null,e__9315));
es__9312 = G__9326;
tcoll__9313 = G__9327;
continue;
}
} else
{return tcoll__9313;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__9316 = this;
var tcoll__9317 = this;
if(this__9316.edit)
{if((k == null))
{if((this__9316.nil_val === v))
{} else
{this__9316.nil_val = v;
}
if(this__9316.has_nil_QMARK_)
{} else
{this__9316.count = (this__9316.count + 1);
this__9316.has_nil_QMARK_ = true;
}
return tcoll__9317;
} else
{var added_leaf_QMARK___9318 = (new cljs.core.Box(false));
var node__9319 = (((this__9316.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9316.root).inode_assoc_BANG_(this__9316.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___9318);
if((node__9319 === this__9316.root))
{} else
{this__9316.root = node__9319;
}
if(added_leaf_QMARK___9318.val)
{this__9316.count = (this__9316.count + 1);
} else
{}
return tcoll__9317;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__9320 = this;
var tcoll__9321 = this;
if(this__9320.edit)
{if((k == null))
{if(this__9320.has_nil_QMARK_)
{this__9320.has_nil_QMARK_ = false;
this__9320.nil_val = null;
this__9320.count = (this__9320.count - 1);
return tcoll__9321;
} else
{return tcoll__9321;
}
} else
{if((this__9320.root == null))
{return tcoll__9321;
} else
{var removed_leaf_QMARK___9322 = (new cljs.core.Box(false));
var node__9323 = this__9320.root.inode_without_BANG_(this__9320.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___9322);
if((node__9323 === this__9320.root))
{} else
{this__9320.root = node__9323;
}
if(cljs.core.truth_((removed_leaf_QMARK___9322[0])))
{this__9320.count = (this__9320.count - 1);
} else
{}
return tcoll__9321;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__9324 = this;
var tcoll__9325 = this;
if(this__9324.edit)
{this__9324.edit = null;
return (new cljs.core.PersistentHashMap(null,this__9324.count,this__9324.root,this__9324.has_nil_QMARK_,this__9324.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__9330 = node;
var stack__9331 = stack;
while(true){
if(!((t__9330 == null)))
{{
var G__9332 = ((ascending_QMARK_)?t__9330.left:t__9330.right);
var G__9333 = cljs.core.conj.call(null,stack__9331,t__9330);
t__9330 = G__9332;
stack__9331 = G__9333;
continue;
}
} else
{return stack__9331;
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
var this__9334 = this;
var h__2153__auto____9335 = this__9334.__hash;
if(!((h__2153__auto____9335 == null)))
{return h__2153__auto____9335;
} else
{var h__2153__auto____9336 = cljs.core.hash_coll.call(null,coll);
this__9334.__hash = h__2153__auto____9336;
return h__2153__auto____9336;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9337 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__9338 = this;
var this__9339 = this;
return cljs.core.pr_str.call(null,this__9339);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9340 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9341 = this;
if((this__9341.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__9341.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__9342 = this;
return cljs.core.peek.call(null,this__9342.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__9343 = this;
var t__9344 = cljs.core.first.call(null,this__9343.stack);
var next_stack__9345 = cljs.core.tree_map_seq_push.call(null,((this__9343.ascending_QMARK_)?t__9344.right:t__9344.left),cljs.core.next.call(null,this__9343.stack),this__9343.ascending_QMARK_);
if(!((next_stack__9345 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__9345,this__9343.ascending_QMARK_,(this__9343.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9346 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9347 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__9347.stack,this__9347.ascending_QMARK_,this__9347.cnt,this__9347.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9348 = this;
return this__9348.meta;
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
{if((function (){var and__3822__auto____9350 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____9350)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____9350;
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
{if((function (){var and__3822__auto____9352 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____9352)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____9352;
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
var init__9356 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__9356))
{return cljs.core.deref.call(null,init__9356);
} else
{var init__9357 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__9356):init__9356);
if(cljs.core.reduced_QMARK_.call(null,init__9357))
{return cljs.core.deref.call(null,init__9357);
} else
{var init__9358 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__9357):init__9357);
if(cljs.core.reduced_QMARK_.call(null,init__9358))
{return cljs.core.deref.call(null,init__9358);
} else
{return init__9358;
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
var this__9361 = this;
var h__2153__auto____9362 = this__9361.__hash;
if(!((h__2153__auto____9362 == null)))
{return h__2153__auto____9362;
} else
{var h__2153__auto____9363 = cljs.core.hash_coll.call(null,coll);
this__9361.__hash = h__2153__auto____9363;
return h__2153__auto____9363;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9364 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9365 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9366 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__9366.key,this__9366.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__9414 = null;
var G__9414__2 = (function (this_sym9367,k){
var this__9369 = this;
var this_sym9367__9370 = this;
var node__9371 = this_sym9367__9370;
return node__9371.cljs$core$ILookup$_lookup$arity$2(node__9371,k);
});
var G__9414__3 = (function (this_sym9368,k,not_found){
var this__9369 = this;
var this_sym9368__9372 = this;
var node__9373 = this_sym9368__9372;
return node__9373.cljs$core$ILookup$_lookup$arity$3(node__9373,k,not_found);
});
G__9414 = function(this_sym9368,k,not_found){
switch(arguments.length){
case 2:
return G__9414__2.call(this,this_sym9368,k);
case 3:
return G__9414__3.call(this,this_sym9368,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9414;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym9359,args9360){
var this__9374 = this;
return this_sym9359.call.apply(this_sym9359,[this_sym9359].concat(args9360.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9375 = this;
return cljs.core.PersistentVector.fromArray([this__9375.key,this__9375.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9376 = this;
return this__9376.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9377 = this;
return this__9377.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__9378 = this;
var node__9379 = this;
return ins.balance_right(node__9379);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__9380 = this;
var node__9381 = this;
return (new cljs.core.RedNode(this__9380.key,this__9380.val,this__9380.left,this__9380.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__9382 = this;
var node__9383 = this;
return cljs.core.balance_right_del.call(null,this__9382.key,this__9382.val,this__9382.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__9384 = this;
var node__9385 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__9386 = this;
var node__9387 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__9387,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__9388 = this;
var node__9389 = this;
return cljs.core.balance_left_del.call(null,this__9388.key,this__9388.val,del,this__9388.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__9390 = this;
var node__9391 = this;
return ins.balance_left(node__9391);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__9392 = this;
var node__9393 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__9393,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__9415 = null;
var G__9415__0 = (function (){
var this__9394 = this;
var this__9396 = this;
return cljs.core.pr_str.call(null,this__9396);
});
G__9415 = function(){
switch(arguments.length){
case 0:
return G__9415__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9415;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__9397 = this;
var node__9398 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9398,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__9399 = this;
var node__9400 = this;
return node__9400;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9401 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9402 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9403 = this;
return cljs.core.list.call(null,this__9403.key,this__9403.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9404 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9405 = this;
return this__9405.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9406 = this;
return cljs.core.PersistentVector.fromArray([this__9406.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9407 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__9407.key,this__9407.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9408 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9409 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__9409.key,this__9409.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9410 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9411 = this;
if((n === 0))
{return this__9411.key;
} else
{if((n === 1))
{return this__9411.val;
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
var this__9412 = this;
if((n === 0))
{return this__9412.key;
} else
{if((n === 1))
{return this__9412.val;
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
var this__9413 = this;
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
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9421 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9422 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9423 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__9423.key,this__9423.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__9471 = null;
var G__9471__2 = (function (this_sym9424,k){
var this__9426 = this;
var this_sym9424__9427 = this;
var node__9428 = this_sym9424__9427;
return node__9428.cljs$core$ILookup$_lookup$arity$2(node__9428,k);
});
var G__9471__3 = (function (this_sym9425,k,not_found){
var this__9426 = this;
var this_sym9425__9429 = this;
var node__9430 = this_sym9425__9429;
return node__9430.cljs$core$ILookup$_lookup$arity$3(node__9430,k,not_found);
});
G__9471 = function(this_sym9425,k,not_found){
switch(arguments.length){
case 2:
return G__9471__2.call(this,this_sym9425,k);
case 3:
return G__9471__3.call(this,this_sym9425,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9471;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym9416,args9417){
var this__9431 = this;
return this_sym9416.call.apply(this_sym9416,[this_sym9416].concat(args9417.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9432 = this;
return cljs.core.PersistentVector.fromArray([this__9432.key,this__9432.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9433 = this;
return this__9433.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9434 = this;
return this__9434.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__9435 = this;
var node__9436 = this;
return (new cljs.core.RedNode(this__9435.key,this__9435.val,this__9435.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__9437 = this;
var node__9438 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__9439 = this;
var node__9440 = this;
return (new cljs.core.RedNode(this__9439.key,this__9439.val,this__9439.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__9441 = this;
var node__9442 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__9443 = this;
var node__9444 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__9444,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__9445 = this;
var node__9446 = this;
return (new cljs.core.RedNode(this__9445.key,this__9445.val,del,this__9445.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__9447 = this;
var node__9448 = this;
return (new cljs.core.RedNode(this__9447.key,this__9447.val,ins,this__9447.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__9449 = this;
var node__9450 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9449.left))
{return (new cljs.core.RedNode(this__9449.key,this__9449.val,this__9449.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__9449.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9449.right))
{return (new cljs.core.RedNode(this__9449.right.key,this__9449.right.val,(new cljs.core.BlackNode(this__9449.key,this__9449.val,this__9449.left,this__9449.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__9449.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__9450,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__9472 = null;
var G__9472__0 = (function (){
var this__9451 = this;
var this__9453 = this;
return cljs.core.pr_str.call(null,this__9453);
});
G__9472 = function(){
switch(arguments.length){
case 0:
return G__9472__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9472;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__9454 = this;
var node__9455 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9454.right))
{return (new cljs.core.RedNode(this__9454.key,this__9454.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9454.left,null)),this__9454.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9454.left))
{return (new cljs.core.RedNode(this__9454.left.key,this__9454.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9454.left.left,null)),(new cljs.core.BlackNode(this__9454.key,this__9454.val,this__9454.left.right,this__9454.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9455,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__9456 = this;
var node__9457 = this;
return (new cljs.core.BlackNode(this__9456.key,this__9456.val,this__9456.left,this__9456.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9458 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9459 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9460 = this;
return cljs.core.list.call(null,this__9460.key,this__9460.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9461 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9462 = this;
return this__9462.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9463 = this;
return cljs.core.PersistentVector.fromArray([this__9463.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9464 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__9464.key,this__9464.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9465 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9466 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__9466.key,this__9466.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9467 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9468 = this;
if((n === 0))
{return this__9468.key;
} else
{if((n === 1))
{return this__9468.val;
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
var this__9469 = this;
if((n === 0))
{return this__9469.key;
} else
{if((n === 1))
{return this__9469.val;
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
var this__9470 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__9476 = comp.call(null,k,tree.key);
if((c__9476 === 0))
{(found[0] = tree);
return null;
} else
{if((c__9476 < 0))
{var ins__9477 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__9477 == null)))
{return tree.add_left(ins__9477);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__9478 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__9478 == null)))
{return tree.add_right(ins__9478);
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
{var app__9481 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__9481))
{return (new cljs.core.RedNode(app__9481.key,app__9481.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__9481.left,null)),(new cljs.core.RedNode(right.key,right.val,app__9481.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__9481,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__9482 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__9482))
{return (new cljs.core.RedNode(app__9482.key,app__9482.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__9482.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__9482.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__9482,right.right,null)));
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
{var c__9488 = comp.call(null,k,tree.key);
if((c__9488 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__9488 < 0))
{var del__9489 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____9490 = !((del__9489 == null));
if(or__3824__auto____9490)
{return or__3824__auto____9490;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__9489,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__9489,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__9491 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____9492 = !((del__9491 == null));
if(or__3824__auto____9492)
{return or__3824__auto____9492;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__9491);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__9491,null));
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
var tk__9495 = tree.key;
var c__9496 = comp.call(null,k,tk__9495);
if((c__9496 === 0))
{return tree.replace(tk__9495,v,tree.left,tree.right);
} else
{if((c__9496 < 0))
{return tree.replace(tk__9495,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__9495,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
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
var this__9499 = this;
var h__2153__auto____9500 = this__9499.__hash;
if(!((h__2153__auto____9500 == null)))
{return h__2153__auto____9500;
} else
{var h__2153__auto____9501 = cljs.core.hash_imap.call(null,coll);
this__9499.__hash = h__2153__auto____9501;
return h__2153__auto____9501;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9502 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9503 = this;
var n__9504 = coll.entry_at(k);
if(!((n__9504 == null)))
{return n__9504.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9505 = this;
var found__9506 = [null];
var t__9507 = cljs.core.tree_map_add.call(null,this__9505.comp,this__9505.tree,k,v,found__9506);
if((t__9507 == null))
{var found_node__9508 = cljs.core.nth.call(null,found__9506,0);
if(cljs.core._EQ_.call(null,v,found_node__9508.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9505.comp,cljs.core.tree_map_replace.call(null,this__9505.comp,this__9505.tree,k,v),this__9505.cnt,this__9505.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9505.comp,t__9507.blacken(),(this__9505.cnt + 1),this__9505.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9509 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__9543 = null;
var G__9543__2 = (function (this_sym9510,k){
var this__9512 = this;
var this_sym9510__9513 = this;
var coll__9514 = this_sym9510__9513;
return coll__9514.cljs$core$ILookup$_lookup$arity$2(coll__9514,k);
});
var G__9543__3 = (function (this_sym9511,k,not_found){
var this__9512 = this;
var this_sym9511__9515 = this;
var coll__9516 = this_sym9511__9515;
return coll__9516.cljs$core$ILookup$_lookup$arity$3(coll__9516,k,not_found);
});
G__9543 = function(this_sym9511,k,not_found){
switch(arguments.length){
case 2:
return G__9543__2.call(this,this_sym9511,k);
case 3:
return G__9543__3.call(this,this_sym9511,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9543;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym9497,args9498){
var this__9517 = this;
return this_sym9497.call.apply(this_sym9497,[this_sym9497].concat(args9498.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9518 = this;
if(!((this__9518.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__9518.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9519 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9520 = this;
if((this__9520.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9520.tree,false,this__9520.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__9521 = this;
var this__9522 = this;
return cljs.core.pr_str.call(null,this__9522);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__9523 = this;
var coll__9524 = this;
var t__9525 = this__9523.tree;
while(true){
if(!((t__9525 == null)))
{var c__9526 = this__9523.comp.call(null,k,t__9525.key);
if((c__9526 === 0))
{return t__9525;
} else
{if((c__9526 < 0))
{{
var G__9544 = t__9525.left;
t__9525 = G__9544;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__9545 = t__9525.right;
t__9525 = G__9545;
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
var this__9527 = this;
if((this__9527.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9527.tree,ascending_QMARK_,this__9527.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9528 = this;
if((this__9528.cnt > 0))
{var stack__9529 = null;
var t__9530 = this__9528.tree;
while(true){
if(!((t__9530 == null)))
{var c__9531 = this__9528.comp.call(null,k,t__9530.key);
if((c__9531 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__9529,t__9530),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__9531 < 0))
{{
var G__9546 = cljs.core.conj.call(null,stack__9529,t__9530);
var G__9547 = t__9530.left;
stack__9529 = G__9546;
t__9530 = G__9547;
continue;
}
} else
{{
var G__9548 = stack__9529;
var G__9549 = t__9530.right;
stack__9529 = G__9548;
t__9530 = G__9549;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__9531 > 0))
{{
var G__9550 = cljs.core.conj.call(null,stack__9529,t__9530);
var G__9551 = t__9530.right;
stack__9529 = G__9550;
t__9530 = G__9551;
continue;
}
} else
{{
var G__9552 = stack__9529;
var G__9553 = t__9530.left;
stack__9529 = G__9552;
t__9530 = G__9553;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__9529 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__9529,ascending_QMARK_,-1,null));
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
var this__9532 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9533 = this;
return this__9533.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9534 = this;
if((this__9534.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9534.tree,true,this__9534.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9535 = this;
return this__9535.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9536 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9537 = this;
return (new cljs.core.PersistentTreeMap(this__9537.comp,this__9537.tree,this__9537.cnt,meta,this__9537.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9538 = this;
return this__9538.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9539 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__9539.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9540 = this;
var found__9541 = [null];
var t__9542 = cljs.core.tree_map_remove.call(null,this__9540.comp,this__9540.tree,k,found__9541);
if((t__9542 == null))
{if((cljs.core.nth.call(null,found__9541,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9540.comp,null,0,this__9540.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9540.comp,t__9542.blacken(),(this__9540.cnt - 1),this__9540.meta,null));
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
var in__9556 = cljs.core.seq.call(null,keyvals);
var out__9557 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__9556)
{{
var G__9558 = cljs.core.nnext.call(null,in__9556);
var G__9559 = cljs.core.assoc_BANG_.call(null,out__9557,cljs.core.first.call(null,in__9556),cljs.core.second.call(null,in__9556));
in__9556 = G__9558;
out__9557 = G__9559;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9557);
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
hash_map.cljs$lang$applyTo = (function (arglist__9560){
var keyvals = cljs.core.seq(arglist__9560);;
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
array_map.cljs$lang$applyTo = (function (arglist__9561){
var keyvals = cljs.core.seq(arglist__9561);;
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
var in__9564 = cljs.core.seq.call(null,keyvals);
var out__9565 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__9564)
{{
var G__9566 = cljs.core.nnext.call(null,in__9564);
var G__9567 = cljs.core.assoc.call(null,out__9565,cljs.core.first.call(null,in__9564),cljs.core.second.call(null,in__9564));
in__9564 = G__9566;
out__9565 = G__9567;
continue;
}
} else
{return out__9565;
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
sorted_map.cljs$lang$applyTo = (function (arglist__9568){
var keyvals = cljs.core.seq(arglist__9568);;
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
var in__9571 = cljs.core.seq.call(null,keyvals);
var out__9572 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__9571)
{{
var G__9573 = cljs.core.nnext.call(null,in__9571);
var G__9574 = cljs.core.assoc.call(null,out__9572,cljs.core.first.call(null,in__9571),cljs.core.second.call(null,in__9571));
in__9571 = G__9573;
out__9572 = G__9574;
continue;
}
} else
{return out__9572;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__9575){
var comparator = cljs.core.first(arglist__9575);
var keyvals = cljs.core.rest(arglist__9575);
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
{return cljs.core.reduce.call(null,(function (p1__9576_SHARP_,p2__9577_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____9579 = p1__9576_SHARP_;
if(cljs.core.truth_(or__3824__auto____9579))
{return or__3824__auto____9579;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__9577_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__9580){
var maps = cljs.core.seq(arglist__9580);;
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
{var merge_entry__9588 = (function (m,e){
var k__9586 = cljs.core.first.call(null,e);
var v__9587 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__9586))
{return cljs.core.assoc.call(null,m,k__9586,f.call(null,cljs.core._lookup.call(null,m,k__9586,null),v__9587));
} else
{return cljs.core.assoc.call(null,m,k__9586,v__9587);
}
});
var merge2__9590 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__9588,(function (){var or__3824__auto____9589 = m1;
if(cljs.core.truth_(or__3824__auto____9589))
{return or__3824__auto____9589;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__9590,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__9591){
var f = cljs.core.first(arglist__9591);
var maps = cljs.core.rest(arglist__9591);
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
var ret__9596 = cljs.core.ObjMap.EMPTY;
var keys__9597 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__9597)
{var key__9598 = cljs.core.first.call(null,keys__9597);
var entry__9599 = cljs.core._lookup.call(null,map,key__9598,"\uFDD0'user/not-found");
{
var G__9600 = ((cljs.core.not_EQ_.call(null,entry__9599,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__9596,key__9598,entry__9599):ret__9596);
var G__9601 = cljs.core.next.call(null,keys__9597);
ret__9596 = G__9600;
keys__9597 = G__9601;
continue;
}
} else
{return ret__9596;
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
var this__9605 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__9605.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9606 = this;
var h__2153__auto____9607 = this__9606.__hash;
if(!((h__2153__auto____9607 == null)))
{return h__2153__auto____9607;
} else
{var h__2153__auto____9608 = cljs.core.hash_iset.call(null,coll);
this__9606.__hash = h__2153__auto____9608;
return h__2153__auto____9608;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9609 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9610 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9610.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__9631 = null;
var G__9631__2 = (function (this_sym9611,k){
var this__9613 = this;
var this_sym9611__9614 = this;
var coll__9615 = this_sym9611__9614;
return coll__9615.cljs$core$ILookup$_lookup$arity$2(coll__9615,k);
});
var G__9631__3 = (function (this_sym9612,k,not_found){
var this__9613 = this;
var this_sym9612__9616 = this;
var coll__9617 = this_sym9612__9616;
return coll__9617.cljs$core$ILookup$_lookup$arity$3(coll__9617,k,not_found);
});
G__9631 = function(this_sym9612,k,not_found){
switch(arguments.length){
case 2:
return G__9631__2.call(this,this_sym9612,k);
case 3:
return G__9631__3.call(this,this_sym9612,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9631;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym9603,args9604){
var this__9618 = this;
return this_sym9603.call.apply(this_sym9603,[this_sym9603].concat(args9604.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9619 = this;
return (new cljs.core.PersistentHashSet(this__9619.meta,cljs.core.assoc.call(null,this__9619.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__9620 = this;
var this__9621 = this;
return cljs.core.pr_str.call(null,this__9621);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9622 = this;
return cljs.core.keys.call(null,this__9622.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9623 = this;
return (new cljs.core.PersistentHashSet(this__9623.meta,cljs.core.dissoc.call(null,this__9623.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9624 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9625 = this;
var and__3822__auto____9626 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____9626)
{var and__3822__auto____9627 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____9627)
{return cljs.core.every_QMARK_.call(null,(function (p1__9602_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9602_SHARP_);
}),other);
} else
{return and__3822__auto____9627;
}
} else
{return and__3822__auto____9626;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9628 = this;
return (new cljs.core.PersistentHashSet(meta,this__9628.hash_map,this__9628.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9629 = this;
return this__9629.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9630 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__9630.meta);
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
var G__9649 = null;
var G__9649__2 = (function (this_sym9635,k){
var this__9637 = this;
var this_sym9635__9638 = this;
var tcoll__9639 = this_sym9635__9638;
if((cljs.core._lookup.call(null,this__9637.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__9649__3 = (function (this_sym9636,k,not_found){
var this__9637 = this;
var this_sym9636__9640 = this;
var tcoll__9641 = this_sym9636__9640;
if((cljs.core._lookup.call(null,this__9637.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__9649 = function(this_sym9636,k,not_found){
switch(arguments.length){
case 2:
return G__9649__2.call(this,this_sym9636,k);
case 3:
return G__9649__3.call(this,this_sym9636,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9649;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym9633,args9634){
var this__9642 = this;
return this_sym9633.call.apply(this_sym9633,[this_sym9633].concat(args9634.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__9643 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__9644 = this;
if((cljs.core._lookup.call(null,this__9644.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9645 = this;
return cljs.core.count.call(null,this__9645.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__9646 = this;
this__9646.transient_map = cljs.core.dissoc_BANG_.call(null,this__9646.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9647 = this;
this__9647.transient_map = cljs.core.assoc_BANG_.call(null,this__9647.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9648 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__9648.transient_map),null));
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
var this__9652 = this;
var h__2153__auto____9653 = this__9652.__hash;
if(!((h__2153__auto____9653 == null)))
{return h__2153__auto____9653;
} else
{var h__2153__auto____9654 = cljs.core.hash_iset.call(null,coll);
this__9652.__hash = h__2153__auto____9654;
return h__2153__auto____9654;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9655 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9656 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9656.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__9682 = null;
var G__9682__2 = (function (this_sym9657,k){
var this__9659 = this;
var this_sym9657__9660 = this;
var coll__9661 = this_sym9657__9660;
return coll__9661.cljs$core$ILookup$_lookup$arity$2(coll__9661,k);
});
var G__9682__3 = (function (this_sym9658,k,not_found){
var this__9659 = this;
var this_sym9658__9662 = this;
var coll__9663 = this_sym9658__9662;
return coll__9663.cljs$core$ILookup$_lookup$arity$3(coll__9663,k,not_found);
});
G__9682 = function(this_sym9658,k,not_found){
switch(arguments.length){
case 2:
return G__9682__2.call(this,this_sym9658,k);
case 3:
return G__9682__3.call(this,this_sym9658,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9682;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym9650,args9651){
var this__9664 = this;
return this_sym9650.call.apply(this_sym9650,[this_sym9650].concat(args9651.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9665 = this;
return (new cljs.core.PersistentTreeSet(this__9665.meta,cljs.core.assoc.call(null,this__9665.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9666 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__9666.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__9667 = this;
var this__9668 = this;
return cljs.core.pr_str.call(null,this__9668);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__9669 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__9669.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9670 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__9670.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__9671 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9672 = this;
return cljs.core._comparator.call(null,this__9672.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9673 = this;
return cljs.core.keys.call(null,this__9673.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9674 = this;
return (new cljs.core.PersistentTreeSet(this__9674.meta,cljs.core.dissoc.call(null,this__9674.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9675 = this;
return cljs.core.count.call(null,this__9675.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9676 = this;
var and__3822__auto____9677 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____9677)
{var and__3822__auto____9678 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____9678)
{return cljs.core.every_QMARK_.call(null,(function (p1__9632_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9632_SHARP_);
}),other);
} else
{return and__3822__auto____9678;
}
} else
{return and__3822__auto____9677;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9679 = this;
return (new cljs.core.PersistentTreeSet(meta,this__9679.tree_map,this__9679.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9680 = this;
return this__9680.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9681 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__9681.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map.call(null),0));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in__9685 = cljs.core.seq.call(null,coll);
var out__9686 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__9685))
{{
var G__9687 = cljs.core.next.call(null,in__9685);
var G__9688 = cljs.core.conj_BANG_.call(null,out__9686,cljs.core.first.call(null,in__9685));
in__9685 = G__9687;
out__9686 = G__9688;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9686);
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
sorted_set.cljs$lang$applyTo = (function (arglist__9689){
var keys = cljs.core.seq(arglist__9689);;
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__9691){
var comparator = cljs.core.first(arglist__9691);
var keys = cljs.core.rest(arglist__9691);
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
{var n__9697 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____9698 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____9698))
{var e__9699 = temp__3971__auto____9698;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__9699));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__9697,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__9690_SHARP_){
var temp__3971__auto____9700 = cljs.core.find.call(null,smap,p1__9690_SHARP_);
if(cljs.core.truth_(temp__3971__auto____9700))
{var e__9701 = temp__3971__auto____9700;
return cljs.core.second.call(null,e__9701);
} else
{return p1__9690_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__9731 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__9724,seen){
while(true){
var vec__9725__9726 = p__9724;
var f__9727 = cljs.core.nth.call(null,vec__9725__9726,0,null);
var xs__9728 = vec__9725__9726;
var temp__3974__auto____9729 = cljs.core.seq.call(null,xs__9728);
if(temp__3974__auto____9729)
{var s__9730 = temp__3974__auto____9729;
if(cljs.core.contains_QMARK_.call(null,seen,f__9727))
{{
var G__9732 = cljs.core.rest.call(null,s__9730);
var G__9733 = seen;
p__9724 = G__9732;
seen = G__9733;
continue;
}
} else
{return cljs.core.cons.call(null,f__9727,step.call(null,cljs.core.rest.call(null,s__9730),cljs.core.conj.call(null,seen,f__9727)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__9731.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__9736 = cljs.core.PersistentVector.EMPTY;
var s__9737 = s;
while(true){
if(cljs.core.next.call(null,s__9737))
{{
var G__9738 = cljs.core.conj.call(null,ret__9736,cljs.core.first.call(null,s__9737));
var G__9739 = cljs.core.next.call(null,s__9737);
ret__9736 = G__9738;
s__9737 = G__9739;
continue;
}
} else
{return cljs.core.seq.call(null,ret__9736);
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
{if((function (){var or__3824__auto____9742 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9742)
{return or__3824__auto____9742;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9743 = x.lastIndexOf("/");
if((i__9743 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__9743 + 1));
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
if((function (){var or__3824__auto____9746 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9746)
{return or__3824__auto____9746;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9747 = x.lastIndexOf("/");
if((i__9747 > -1))
{return cljs.core.subs.call(null,x,2,i__9747);
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
var map__9754 = cljs.core.ObjMap.EMPTY;
var ks__9755 = cljs.core.seq.call(null,keys);
var vs__9756 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____9757 = ks__9755;
if(and__3822__auto____9757)
{return vs__9756;
} else
{return and__3822__auto____9757;
}
})())
{{
var G__9758 = cljs.core.assoc.call(null,map__9754,cljs.core.first.call(null,ks__9755),cljs.core.first.call(null,vs__9756));
var G__9759 = cljs.core.next.call(null,ks__9755);
var G__9760 = cljs.core.next.call(null,vs__9756);
map__9754 = G__9758;
ks__9755 = G__9759;
vs__9756 = G__9760;
continue;
}
} else
{return map__9754;
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
var G__9763__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9748_SHARP_,p2__9749_SHARP_){
return max_key.call(null,k,p1__9748_SHARP_,p2__9749_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__9763 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9763__delegate.call(this, k, x, y, more);
};
G__9763.cljs$lang$maxFixedArity = 3;
G__9763.cljs$lang$applyTo = (function (arglist__9764){
var k = cljs.core.first(arglist__9764);
var x = cljs.core.first(cljs.core.next(arglist__9764));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9764)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9764)));
return G__9763__delegate(k, x, y, more);
});
G__9763.cljs$lang$arity$variadic = G__9763__delegate;
return G__9763;
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
var G__9765__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9761_SHARP_,p2__9762_SHARP_){
return min_key.call(null,k,p1__9761_SHARP_,p2__9762_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__9765 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9765__delegate.call(this, k, x, y, more);
};
G__9765.cljs$lang$maxFixedArity = 3;
G__9765.cljs$lang$applyTo = (function (arglist__9766){
var k = cljs.core.first(arglist__9766);
var x = cljs.core.first(cljs.core.next(arglist__9766));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9766)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9766)));
return G__9765__delegate(k, x, y, more);
});
G__9765.cljs$lang$arity$variadic = G__9765__delegate;
return G__9765;
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
var temp__3974__auto____9769 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9769)
{var s__9770 = temp__3974__auto____9769;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__9770),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__9770)));
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
var temp__3974__auto____9773 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9773)
{var s__9774 = temp__3974__auto____9773;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__9774))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9774),take_while.call(null,pred,cljs.core.rest.call(null,s__9774)));
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
var comp__9776 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__9776.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__9788 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____9789 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____9789))
{var vec__9790__9791 = temp__3974__auto____9789;
var e__9792 = cljs.core.nth.call(null,vec__9790__9791,0,null);
var s__9793 = vec__9790__9791;
if(cljs.core.truth_(include__9788.call(null,e__9792)))
{return s__9793;
} else
{return cljs.core.next.call(null,s__9793);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9788,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9794 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____9794))
{var vec__9795__9796 = temp__3974__auto____9794;
var e__9797 = cljs.core.nth.call(null,vec__9795__9796,0,null);
var s__9798 = vec__9795__9796;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__9797))?s__9798:cljs.core.next.call(null,s__9798)));
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
var include__9810 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____9811 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____9811))
{var vec__9812__9813 = temp__3974__auto____9811;
var e__9814 = cljs.core.nth.call(null,vec__9812__9813,0,null);
var s__9815 = vec__9812__9813;
if(cljs.core.truth_(include__9810.call(null,e__9814)))
{return s__9815;
} else
{return cljs.core.next.call(null,s__9815);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9810,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9816 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____9816))
{var vec__9817__9818 = temp__3974__auto____9816;
var e__9819 = cljs.core.nth.call(null,vec__9817__9818,0,null);
var s__9820 = vec__9817__9818;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__9819))?s__9820:cljs.core.next.call(null,s__9820)));
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
var this__9821 = this;
var h__2153__auto____9822 = this__9821.__hash;
if(!((h__2153__auto____9822 == null)))
{return h__2153__auto____9822;
} else
{var h__2153__auto____9823 = cljs.core.hash_coll.call(null,rng);
this__9821.__hash = h__2153__auto____9823;
return h__2153__auto____9823;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__9824 = this;
if((this__9824.step > 0))
{if(((this__9824.start + this__9824.step) < this__9824.end))
{return (new cljs.core.Range(this__9824.meta,(this__9824.start + this__9824.step),this__9824.end,this__9824.step,null));
} else
{return null;
}
} else
{if(((this__9824.start + this__9824.step) > this__9824.end))
{return (new cljs.core.Range(this__9824.meta,(this__9824.start + this__9824.step),this__9824.end,this__9824.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__9825 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__9826 = this;
var this__9827 = this;
return cljs.core.pr_str.call(null,this__9827);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__9828 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__9829 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__9830 = this;
if((this__9830.step > 0))
{if((this__9830.start < this__9830.end))
{return rng;
} else
{return null;
}
} else
{if((this__9830.start > this__9830.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__9831 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__9831.end - this__9831.start) / this__9831.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__9832 = this;
return this__9832.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__9833 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__9833.meta,(this__9833.start + this__9833.step),this__9833.end,this__9833.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__9834 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__9835 = this;
return (new cljs.core.Range(meta,this__9835.start,this__9835.end,this__9835.step,this__9835.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__9836 = this;
return this__9836.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__9837 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9837.start + (n * this__9837.step));
} else
{if((function (){var and__3822__auto____9838 = (this__9837.start > this__9837.end);
if(and__3822__auto____9838)
{return (this__9837.step === 0);
} else
{return and__3822__auto____9838;
}
})())
{return this__9837.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__9839 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9839.start + (n * this__9839.step));
} else
{if((function (){var and__3822__auto____9840 = (this__9839.start > this__9839.end);
if(and__3822__auto____9840)
{return (this__9839.step === 0);
} else
{return and__3822__auto____9840;
}
})())
{return this__9839.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__9841 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9841.meta);
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
var temp__3974__auto____9844 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9844)
{var s__9845 = temp__3974__auto____9844;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__9845),take_nth.call(null,n,cljs.core.drop.call(null,n,s__9845)));
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
var temp__3974__auto____9852 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9852)
{var s__9853 = temp__3974__auto____9852;
var fst__9854 = cljs.core.first.call(null,s__9853);
var fv__9855 = f.call(null,fst__9854);
var run__9856 = cljs.core.cons.call(null,fst__9854,cljs.core.take_while.call(null,(function (p1__9846_SHARP_){
return cljs.core._EQ_.call(null,fv__9855,f.call(null,p1__9846_SHARP_));
}),cljs.core.next.call(null,s__9853)));
return cljs.core.cons.call(null,run__9856,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__9856),s__9853))));
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
var temp__3971__auto____9871 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____9871)
{var s__9872 = temp__3971__auto____9871;
return reductions.call(null,f,cljs.core.first.call(null,s__9872),cljs.core.rest.call(null,s__9872));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9873 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9873)
{var s__9874 = temp__3974__auto____9873;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__9874)),cljs.core.rest.call(null,s__9874));
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
var G__9877 = null;
var G__9877__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__9877__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__9877__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__9877__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__9877__4 = (function() { 
var G__9878__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__9878 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9878__delegate.call(this, x, y, z, args);
};
G__9878.cljs$lang$maxFixedArity = 3;
G__9878.cljs$lang$applyTo = (function (arglist__9879){
var x = cljs.core.first(arglist__9879);
var y = cljs.core.first(cljs.core.next(arglist__9879));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9879)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9879)));
return G__9878__delegate(x, y, z, args);
});
G__9878.cljs$lang$arity$variadic = G__9878__delegate;
return G__9878;
})()
;
G__9877 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9877__0.call(this);
case 1:
return G__9877__1.call(this,x);
case 2:
return G__9877__2.call(this,x,y);
case 3:
return G__9877__3.call(this,x,y,z);
default:
return G__9877__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9877.cljs$lang$maxFixedArity = 3;
G__9877.cljs$lang$applyTo = G__9877__4.cljs$lang$applyTo;
return G__9877;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__9880 = null;
var G__9880__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__9880__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__9880__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__9880__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__9880__4 = (function() { 
var G__9881__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__9881 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9881__delegate.call(this, x, y, z, args);
};
G__9881.cljs$lang$maxFixedArity = 3;
G__9881.cljs$lang$applyTo = (function (arglist__9882){
var x = cljs.core.first(arglist__9882);
var y = cljs.core.first(cljs.core.next(arglist__9882));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9882)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9882)));
return G__9881__delegate(x, y, z, args);
});
G__9881.cljs$lang$arity$variadic = G__9881__delegate;
return G__9881;
})()
;
G__9880 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9880__0.call(this);
case 1:
return G__9880__1.call(this,x);
case 2:
return G__9880__2.call(this,x,y);
case 3:
return G__9880__3.call(this,x,y,z);
default:
return G__9880__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9880.cljs$lang$maxFixedArity = 3;
G__9880.cljs$lang$applyTo = G__9880__4.cljs$lang$applyTo;
return G__9880;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__9883 = null;
var G__9883__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__9883__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__9883__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__9883__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__9883__4 = (function() { 
var G__9884__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__9884 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9884__delegate.call(this, x, y, z, args);
};
G__9884.cljs$lang$maxFixedArity = 3;
G__9884.cljs$lang$applyTo = (function (arglist__9885){
var x = cljs.core.first(arglist__9885);
var y = cljs.core.first(cljs.core.next(arglist__9885));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9885)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9885)));
return G__9884__delegate(x, y, z, args);
});
G__9884.cljs$lang$arity$variadic = G__9884__delegate;
return G__9884;
})()
;
G__9883 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9883__0.call(this);
case 1:
return G__9883__1.call(this,x);
case 2:
return G__9883__2.call(this,x,y);
case 3:
return G__9883__3.call(this,x,y,z);
default:
return G__9883__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9883.cljs$lang$maxFixedArity = 3;
G__9883.cljs$lang$applyTo = G__9883__4.cljs$lang$applyTo;
return G__9883;
})()
});
var juxt__4 = (function() { 
var G__9886__delegate = function (f,g,h,fs){
var fs__9876 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__9887 = null;
var G__9887__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__9857_SHARP_,p2__9858_SHARP_){
return cljs.core.conj.call(null,p1__9857_SHARP_,p2__9858_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__9876);
});
var G__9887__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__9859_SHARP_,p2__9860_SHARP_){
return cljs.core.conj.call(null,p1__9859_SHARP_,p2__9860_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__9876);
});
var G__9887__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__9861_SHARP_,p2__9862_SHARP_){
return cljs.core.conj.call(null,p1__9861_SHARP_,p2__9862_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__9876);
});
var G__9887__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__9863_SHARP_,p2__9864_SHARP_){
return cljs.core.conj.call(null,p1__9863_SHARP_,p2__9864_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__9876);
});
var G__9887__4 = (function() { 
var G__9888__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__9865_SHARP_,p2__9866_SHARP_){
return cljs.core.conj.call(null,p1__9865_SHARP_,cljs.core.apply.call(null,p2__9866_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__9876);
};
var G__9888 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9888__delegate.call(this, x, y, z, args);
};
G__9888.cljs$lang$maxFixedArity = 3;
G__9888.cljs$lang$applyTo = (function (arglist__9889){
var x = cljs.core.first(arglist__9889);
var y = cljs.core.first(cljs.core.next(arglist__9889));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9889)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9889)));
return G__9888__delegate(x, y, z, args);
});
G__9888.cljs$lang$arity$variadic = G__9888__delegate;
return G__9888;
})()
;
G__9887 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9887__0.call(this);
case 1:
return G__9887__1.call(this,x);
case 2:
return G__9887__2.call(this,x,y);
case 3:
return G__9887__3.call(this,x,y,z);
default:
return G__9887__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9887.cljs$lang$maxFixedArity = 3;
G__9887.cljs$lang$applyTo = G__9887__4.cljs$lang$applyTo;
return G__9887;
})()
};
var G__9886 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9886__delegate.call(this, f, g, h, fs);
};
G__9886.cljs$lang$maxFixedArity = 3;
G__9886.cljs$lang$applyTo = (function (arglist__9890){
var f = cljs.core.first(arglist__9890);
var g = cljs.core.first(cljs.core.next(arglist__9890));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9890)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9890)));
return G__9886__delegate(f, g, h, fs);
});
G__9886.cljs$lang$arity$variadic = G__9886__delegate;
return G__9886;
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
var G__9893 = cljs.core.next.call(null,coll);
coll = G__9893;
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
if(cljs.core.truth_((function (){var and__3822__auto____9892 = cljs.core.seq.call(null,coll);
if(and__3822__auto____9892)
{return (n > 0);
} else
{return and__3822__auto____9892;
}
})()))
{{
var G__9894 = (n - 1);
var G__9895 = cljs.core.next.call(null,coll);
n = G__9894;
coll = G__9895;
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
var matches__9897 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__9897),s))
{if((cljs.core.count.call(null,matches__9897) === 1))
{return cljs.core.first.call(null,matches__9897);
} else
{return cljs.core.vec.call(null,matches__9897);
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
var matches__9899 = re.exec(s);
if((matches__9899 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__9899) === 1))
{return cljs.core.first.call(null,matches__9899);
} else
{return cljs.core.vec.call(null,matches__9899);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__9904 = cljs.core.re_find.call(null,re,s);
var match_idx__9905 = s.search(re);
var match_str__9906 = ((cljs.core.coll_QMARK_.call(null,match_data__9904))?cljs.core.first.call(null,match_data__9904):match_data__9904);
var post_match__9907 = cljs.core.subs.call(null,s,(match_idx__9905 + cljs.core.count.call(null,match_str__9906)));
if(cljs.core.truth_(match_data__9904))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__9904,re_seq.call(null,re,post_match__9907));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__9914__9915 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___9916 = cljs.core.nth.call(null,vec__9914__9915,0,null);
var flags__9917 = cljs.core.nth.call(null,vec__9914__9915,1,null);
var pattern__9918 = cljs.core.nth.call(null,vec__9914__9915,2,null);
return (new RegExp(pattern__9918,flags__9917));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__9908_SHARP_){
return print_one.call(null,p1__9908_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____9928 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____9928))
{var and__3822__auto____9932 = (function (){var G__9929__9930 = obj;
if(G__9929__9930)
{if((function (){var or__3824__auto____9931 = (G__9929__9930.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____9931)
{return or__3824__auto____9931;
} else
{return G__9929__9930.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__9929__9930.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9929__9930);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9929__9930);
}
})();
if(cljs.core.truth_(and__3822__auto____9932))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____9932;
}
} else
{return and__3822__auto____9928;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____9933 = !((obj == null));
if(and__3822__auto____9933)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____9933;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__9934__9935 = obj;
if(G__9934__9935)
{if((function (){var or__3824__auto____9936 = (G__9934__9935.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____9936)
{return or__3824__auto____9936;
} else
{return G__9934__9935.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__9934__9935.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__9934__9935);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__9934__9935);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__9951 = cljs.core.first.call(null,objs);
var sb__9952 = (new goog.string.StringBuffer());
var G__9953__9954 = cljs.core.seq.call(null,objs);
if(G__9953__9954)
{var obj__9955 = cljs.core.first.call(null,G__9953__9954);
var G__9953__9956 = G__9953__9954;
while(true){
if((obj__9955 === first_obj__9951))
{} else
{sb__9952.append(" ");
}
var G__9957__9958 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__9955,opts));
if(G__9957__9958)
{var string__9959 = cljs.core.first.call(null,G__9957__9958);
var G__9957__9960 = G__9957__9958;
while(true){
sb__9952.append(string__9959);
var temp__3974__auto____9961 = cljs.core.next.call(null,G__9957__9960);
if(temp__3974__auto____9961)
{var G__9957__9962 = temp__3974__auto____9961;
{
var G__9965 = cljs.core.first.call(null,G__9957__9962);
var G__9966 = G__9957__9962;
string__9959 = G__9965;
G__9957__9960 = G__9966;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____9963 = cljs.core.next.call(null,G__9953__9956);
if(temp__3974__auto____9963)
{var G__9953__9964 = temp__3974__auto____9963;
{
var G__9967 = cljs.core.first.call(null,G__9953__9964);
var G__9968 = G__9953__9964;
obj__9955 = G__9967;
G__9953__9956 = G__9968;
continue;
}
} else
{}
break;
}
} else
{}
return sb__9952;
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
var sb__9970 = cljs.core.pr_sb.call(null,objs,opts);
sb__9970.append("\n");
return [cljs.core.str(sb__9970)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__9984 = cljs.core.first.call(null,objs);
var G__9985__9986 = cljs.core.seq.call(null,objs);
if(G__9985__9986)
{var obj__9987 = cljs.core.first.call(null,G__9985__9986);
var G__9985__9988 = G__9985__9986;
while(true){
if((obj__9987 === first_obj__9984))
{} else
{cljs.core.string_print.call(null," ");
}
var G__9989__9990 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__9987,opts));
if(G__9989__9990)
{var string__9991 = cljs.core.first.call(null,G__9989__9990);
var G__9989__9992 = G__9989__9990;
while(true){
cljs.core.string_print.call(null,string__9991);
var temp__3974__auto____9993 = cljs.core.next.call(null,G__9989__9992);
if(temp__3974__auto____9993)
{var G__9989__9994 = temp__3974__auto____9993;
{
var G__9997 = cljs.core.first.call(null,G__9989__9994);
var G__9998 = G__9989__9994;
string__9991 = G__9997;
G__9989__9992 = G__9998;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____9995 = cljs.core.next.call(null,G__9985__9988);
if(temp__3974__auto____9995)
{var G__9985__9996 = temp__3974__auto____9995;
{
var G__9999 = cljs.core.first.call(null,G__9985__9996);
var G__10000 = G__9985__9996;
obj__9987 = G__9999;
G__9985__9988 = G__10000;
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
pr_str.cljs$lang$applyTo = (function (arglist__10001){
var objs = cljs.core.seq(arglist__10001);;
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
prn_str.cljs$lang$applyTo = (function (arglist__10002){
var objs = cljs.core.seq(arglist__10002);;
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
pr.cljs$lang$applyTo = (function (arglist__10003){
var objs = cljs.core.seq(arglist__10003);;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__10004){
var objs = cljs.core.seq(arglist__10004);;
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
print_str.cljs$lang$applyTo = (function (arglist__10005){
var objs = cljs.core.seq(arglist__10005);;
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
println.cljs$lang$applyTo = (function (arglist__10006){
var objs = cljs.core.seq(arglist__10006);;
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
println_str.cljs$lang$applyTo = (function (arglist__10007){
var objs = cljs.core.seq(arglist__10007);;
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
prn.cljs$lang$applyTo = (function (arglist__10008){
var objs = cljs.core.seq(arglist__10008);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10009 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10009,"{",", ","}",opts,coll);
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
var pr_pair__10010 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10010,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10011 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10011,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____10012 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____10012))
{var nspc__10013 = temp__3974__auto____10012;
return [cljs.core.str(nspc__10013),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____10014 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____10014))
{var nspc__10015 = temp__3974__auto____10014;
return [cljs.core.str(nspc__10015),cljs.core.str("/")].join('');
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
var pr_pair__10016 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10016,"{",", ","}",opts,coll);
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
var normalize__10018 = (function (n,len){
var ns__10017 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__10017) < len))
{{
var G__10020 = [cljs.core.str("0"),cljs.core.str(ns__10017)].join('');
ns__10017 = G__10020;
continue;
}
} else
{return ns__10017;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__10018.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__10018.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__10018.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__10018.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__10018.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__10018.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
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
var pr_pair__10019 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10019,"{",", ","}",opts,coll);
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
var this__10021 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__10022 = this;
var G__10023__10024 = cljs.core.seq.call(null,this__10022.watches);
if(G__10023__10024)
{var G__10026__10028 = cljs.core.first.call(null,G__10023__10024);
var vec__10027__10029 = G__10026__10028;
var key__10030 = cljs.core.nth.call(null,vec__10027__10029,0,null);
var f__10031 = cljs.core.nth.call(null,vec__10027__10029,1,null);
var G__10023__10032 = G__10023__10024;
var G__10026__10033 = G__10026__10028;
var G__10023__10034 = G__10023__10032;
while(true){
var vec__10035__10036 = G__10026__10033;
var key__10037 = cljs.core.nth.call(null,vec__10035__10036,0,null);
var f__10038 = cljs.core.nth.call(null,vec__10035__10036,1,null);
var G__10023__10039 = G__10023__10034;
f__10038.call(null,key__10037,this$,oldval,newval);
var temp__3974__auto____10040 = cljs.core.next.call(null,G__10023__10039);
if(temp__3974__auto____10040)
{var G__10023__10041 = temp__3974__auto____10040;
{
var G__10048 = cljs.core.first.call(null,G__10023__10041);
var G__10049 = G__10023__10041;
G__10026__10033 = G__10048;
G__10023__10034 = G__10049;
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
var this__10042 = this;
return this$.watches = cljs.core.assoc.call(null,this__10042.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__10043 = this;
return this$.watches = cljs.core.dissoc.call(null,this__10043.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__10044 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__10044.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__10045 = this;
return this__10045.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__10046 = this;
return this__10046.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__10047 = this;
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
var G__10061__delegate = function (x,p__10050){
var map__10056__10057 = p__10050;
var map__10056__10058 = ((cljs.core.seq_QMARK_.call(null,map__10056__10057))?cljs.core.apply.call(null,cljs.core.hash_map,map__10056__10057):map__10056__10057);
var validator__10059 = cljs.core._lookup.call(null,map__10056__10058,"\uFDD0'validator",null);
var meta__10060 = cljs.core._lookup.call(null,map__10056__10058,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__10060,validator__10059,null));
};
var G__10061 = function (x,var_args){
var p__10050 = null;
if (goog.isDef(var_args)) {
  p__10050 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10061__delegate.call(this, x, p__10050);
};
G__10061.cljs$lang$maxFixedArity = 1;
G__10061.cljs$lang$applyTo = (function (arglist__10062){
var x = cljs.core.first(arglist__10062);
var p__10050 = cljs.core.rest(arglist__10062);
return G__10061__delegate(x, p__10050);
});
G__10061.cljs$lang$arity$variadic = G__10061__delegate;
return G__10061;
})()
;
atom = function(x,var_args){
var p__10050 = var_args;
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
var temp__3974__auto____10066 = a.validator;
if(cljs.core.truth_(temp__3974__auto____10066))
{var validate__10067 = temp__3974__auto____10066;
if(cljs.core.truth_(validate__10067.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6394))))].join('')));
}
} else
{}
var old_value__10068 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__10068,new_value);
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
var G__10069__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__10069 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10069__delegate.call(this, a, f, x, y, z, more);
};
G__10069.cljs$lang$maxFixedArity = 5;
G__10069.cljs$lang$applyTo = (function (arglist__10070){
var a = cljs.core.first(arglist__10070);
var f = cljs.core.first(cljs.core.next(arglist__10070));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10070)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10070))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10070)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10070)))));
return G__10069__delegate(a, f, x, y, z, more);
});
G__10069.cljs$lang$arity$variadic = G__10069__delegate;
return G__10069;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__10071){
var iref = cljs.core.first(arglist__10071);
var f = cljs.core.first(cljs.core.next(arglist__10071));
var args = cljs.core.rest(cljs.core.next(arglist__10071));
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
var this__10072 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__10072.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__10073 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__10073.state,(function (p__10074){
var curr_state__10075 = p__10074;
var curr_state__10076 = ((cljs.core.seq_QMARK_.call(null,curr_state__10075))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__10075):curr_state__10075);
var done__10077 = cljs.core._lookup.call(null,curr_state__10076,"\uFDD0'done",null);
if(cljs.core.truth_(done__10077))
{return curr_state__10076;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__10073.f.call(null)});
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
var map__10098__10099 = options;
var map__10098__10100 = ((cljs.core.seq_QMARK_.call(null,map__10098__10099))?cljs.core.apply.call(null,cljs.core.hash_map,map__10098__10099):map__10098__10099);
var keywordize_keys__10101 = cljs.core._lookup.call(null,map__10098__10100,"\uFDD0'keywordize-keys",null);
var keyfn__10102 = (cljs.core.truth_(keywordize_keys__10101)?cljs.core.keyword:cljs.core.str);
var f__10117 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2427__auto____10116 = (function iter__10110(s__10111){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10111__10114 = s__10111;
while(true){
if(cljs.core.seq.call(null,s__10111__10114))
{var k__10115 = cljs.core.first.call(null,s__10111__10114);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__10102.call(null,k__10115),thisfn.call(null,(x[k__10115]))], true),iter__10110.call(null,cljs.core.rest.call(null,s__10111__10114)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2427__auto____10116.call(null,cljs.core.js_keys.call(null,x));
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
return f__10117.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__10118){
var x = cljs.core.first(arglist__10118);
var options = cljs.core.rest(arglist__10118);
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
var mem__10123 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__10127__delegate = function (args){
var temp__3971__auto____10124 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__10123),args,null);
if(cljs.core.truth_(temp__3971__auto____10124))
{var v__10125 = temp__3971__auto____10124;
return v__10125;
} else
{var ret__10126 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__10123,cljs.core.assoc,args,ret__10126);
return ret__10126;
}
};
var G__10127 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10127__delegate.call(this, args);
};
G__10127.cljs$lang$maxFixedArity = 0;
G__10127.cljs$lang$applyTo = (function (arglist__10128){
var args = cljs.core.seq(arglist__10128);;
return G__10127__delegate(args);
});
G__10127.cljs$lang$arity$variadic = G__10127__delegate;
return G__10127;
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
var ret__10130 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__10130))
{{
var G__10131 = ret__10130;
f = G__10131;
continue;
}
} else
{return ret__10130;
}
break;
}
});
var trampoline__2 = (function() { 
var G__10132__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__10132 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10132__delegate.call(this, f, args);
};
G__10132.cljs$lang$maxFixedArity = 1;
G__10132.cljs$lang$applyTo = (function (arglist__10133){
var f = cljs.core.first(arglist__10133);
var args = cljs.core.rest(arglist__10133);
return G__10132__delegate(f, args);
});
G__10132.cljs$lang$arity$variadic = G__10132__delegate;
return G__10132;
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
var k__10135 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__10135,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__10135,cljs.core.PersistentVector.EMPTY),x));
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
var or__3824__auto____10144 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____10144)
{return or__3824__auto____10144;
} else
{var or__3824__auto____10145 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____10145)
{return or__3824__auto____10145;
} else
{var and__3822__auto____10146 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____10146)
{var and__3822__auto____10147 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____10147)
{var and__3822__auto____10148 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____10148)
{var ret__10149 = true;
var i__10150 = 0;
while(true){
if((function (){var or__3824__auto____10151 = cljs.core.not.call(null,ret__10149);
if(or__3824__auto____10151)
{return or__3824__auto____10151;
} else
{return (i__10150 === cljs.core.count.call(null,parent));
}
})())
{return ret__10149;
} else
{{
var G__10152 = isa_QMARK_.call(null,h,child.call(null,i__10150),parent.call(null,i__10150));
var G__10153 = (i__10150 + 1);
ret__10149 = G__10152;
i__10150 = G__10153;
continue;
}
}
break;
}
} else
{return and__3822__auto____10148;
}
} else
{return and__3822__auto____10147;
}
} else
{return and__3822__auto____10146;
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
var tp__10162 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__10163 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__10164 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__10165 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____10166 = ((cljs.core.contains_QMARK_.call(null,tp__10162.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__10164.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__10164.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__10162,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__10165.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__10163,parent,ta__10164),"\uFDD0'descendants":tf__10165.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__10164,tag,td__10163)});
})());
if(cljs.core.truth_(or__3824__auto____10166))
{return or__3824__auto____10166;
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
var parentMap__10171 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__10172 = (cljs.core.truth_(parentMap__10171.call(null,tag))?cljs.core.disj.call(null,parentMap__10171.call(null,tag),parent):cljs.core.set([]));
var newParents__10173 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__10172))?cljs.core.assoc.call(null,parentMap__10171,tag,childsParents__10172):cljs.core.dissoc.call(null,parentMap__10171,tag));
var deriv_seq__10174 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__10154_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__10154_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__10154_SHARP_),cljs.core.second.call(null,p1__10154_SHARP_)));
}),cljs.core.seq.call(null,newParents__10173)));
if(cljs.core.contains_QMARK_.call(null,parentMap__10171.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__10155_SHARP_,p2__10156_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__10155_SHARP_,p2__10156_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__10174));
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
var xprefs__10182 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____10184 = (cljs.core.truth_((function (){var and__3822__auto____10183 = xprefs__10182;
if(cljs.core.truth_(and__3822__auto____10183))
{return xprefs__10182.call(null,y);
} else
{return and__3822__auto____10183;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____10184))
{return or__3824__auto____10184;
} else
{var or__3824__auto____10186 = (function (){var ps__10185 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__10185) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__10185),prefer_table)))
{} else
{}
{
var G__10189 = cljs.core.rest.call(null,ps__10185);
ps__10185 = G__10189;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____10186))
{return or__3824__auto____10186;
} else
{var or__3824__auto____10188 = (function (){var ps__10187 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__10187) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__10187),y,prefer_table)))
{} else
{}
{
var G__10190 = cljs.core.rest.call(null,ps__10187);
ps__10187 = G__10190;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____10188))
{return or__3824__auto____10188;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____10192 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____10192))
{return or__3824__auto____10192;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__10210 = cljs.core.reduce.call(null,(function (be,p__10202){
var vec__10203__10204 = p__10202;
var k__10205 = cljs.core.nth.call(null,vec__10203__10204,0,null);
var ___10206 = cljs.core.nth.call(null,vec__10203__10204,1,null);
var e__10207 = vec__10203__10204;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__10205))
{var be2__10209 = (cljs.core.truth_((function (){var or__3824__auto____10208 = (be == null);
if(or__3824__auto____10208)
{return or__3824__auto____10208;
} else
{return cljs.core.dominates.call(null,k__10205,cljs.core.first.call(null,be),prefer_table);
}
})())?e__10207:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__10209),k__10205,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__10205),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__10209)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__10209;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__10210))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__10210));
return cljs.core.second.call(null,best_entry__10210);
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
if((function (){var and__3822__auto____10214 = mf;
if(and__3822__auto____10214)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____10214;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{return (function (){var or__3824__auto____10215 = (cljs.core._reset[goog.typeOf(mf)]);
if(or__3824__auto____10215)
{return or__3824__auto____10215;
} else
{var or__3824__auto____10216 = (cljs.core._reset["_"]);
if(or__3824__auto____10216)
{return or__3824__auto____10216;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____10220 = mf;
if(and__3822__auto____10220)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____10220;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{return (function (){var or__3824__auto____10221 = (cljs.core._add_method[goog.typeOf(mf)]);
if(or__3824__auto____10221)
{return or__3824__auto____10221;
} else
{var or__3824__auto____10222 = (cljs.core._add_method["_"]);
if(or__3824__auto____10222)
{return or__3824__auto____10222;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____10226 = mf;
if(and__3822__auto____10226)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____10226;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____10227 = (cljs.core._remove_method[goog.typeOf(mf)]);
if(or__3824__auto____10227)
{return or__3824__auto____10227;
} else
{var or__3824__auto____10228 = (cljs.core._remove_method["_"]);
if(or__3824__auto____10228)
{return or__3824__auto____10228;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____10232 = mf;
if(and__3822__auto____10232)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____10232;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3824__auto____10233 = (cljs.core._prefer_method[goog.typeOf(mf)]);
if(or__3824__auto____10233)
{return or__3824__auto____10233;
} else
{var or__3824__auto____10234 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____10234)
{return or__3824__auto____10234;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____10238 = mf;
if(and__3822__auto____10238)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____10238;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____10239 = (cljs.core._get_method[goog.typeOf(mf)]);
if(or__3824__auto____10239)
{return or__3824__auto____10239;
} else
{var or__3824__auto____10240 = (cljs.core._get_method["_"]);
if(or__3824__auto____10240)
{return or__3824__auto____10240;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____10244 = mf;
if(and__3822__auto____10244)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____10244;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{return (function (){var or__3824__auto____10245 = (cljs.core._methods[goog.typeOf(mf)]);
if(or__3824__auto____10245)
{return or__3824__auto____10245;
} else
{var or__3824__auto____10246 = (cljs.core._methods["_"]);
if(or__3824__auto____10246)
{return or__3824__auto____10246;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____10250 = mf;
if(and__3822__auto____10250)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____10250;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{return (function (){var or__3824__auto____10251 = (cljs.core._prefers[goog.typeOf(mf)]);
if(or__3824__auto____10251)
{return or__3824__auto____10251;
} else
{var or__3824__auto____10252 = (cljs.core._prefers["_"]);
if(or__3824__auto____10252)
{return or__3824__auto____10252;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____10256 = mf;
if(and__3822__auto____10256)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____10256;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{return (function (){var or__3824__auto____10257 = (cljs.core._dispatch[goog.typeOf(mf)]);
if(or__3824__auto____10257)
{return or__3824__auto____10257;
} else
{var or__3824__auto____10258 = (cljs.core._dispatch["_"]);
if(or__3824__auto____10258)
{return or__3824__auto____10258;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
void 0;cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__10261 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__10262 = cljs.core._get_method.call(null,mf,dispatch_val__10261);
if(cljs.core.truth_(target_fn__10262))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__10261)].join('')));
}
return cljs.core.apply.call(null,target_fn__10262,args);
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
var this__10263 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__10264 = this;
cljs.core.swap_BANG_.call(null,this__10264.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10264.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10264.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10264.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__10265 = this;
cljs.core.swap_BANG_.call(null,this__10265.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__10265.method_cache,this__10265.method_table,this__10265.cached_hierarchy,this__10265.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__10266 = this;
cljs.core.swap_BANG_.call(null,this__10266.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__10266.method_cache,this__10266.method_table,this__10266.cached_hierarchy,this__10266.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__10267 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__10267.cached_hierarchy),cljs.core.deref.call(null,this__10267.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__10267.method_cache,this__10267.method_table,this__10267.cached_hierarchy,this__10267.hierarchy);
}
var temp__3971__auto____10268 = cljs.core.deref.call(null,this__10267.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____10268))
{var target_fn__10269 = temp__3971__auto____10268;
return target_fn__10269;
} else
{var temp__3971__auto____10270 = cljs.core.find_and_cache_best_method.call(null,this__10267.name,dispatch_val,this__10267.hierarchy,this__10267.method_table,this__10267.prefer_table,this__10267.method_cache,this__10267.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____10270))
{var target_fn__10271 = temp__3971__auto____10270;
return target_fn__10271;
} else
{return cljs.core.deref.call(null,this__10267.method_table).call(null,this__10267.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__10272 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__10272.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__10272.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__10272.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__10272.method_cache,this__10272.method_table,this__10272.cached_hierarchy,this__10272.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__10273 = this;
return cljs.core.deref.call(null,this__10273.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__10274 = this;
return cljs.core.deref.call(null,this__10274.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__10275 = this;
return cljs.core.do_dispatch.call(null,mf,this__10275.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__10277__delegate = function (_,args){
var self__10276 = this;
return cljs.core._dispatch.call(null,self__10276,args);
};
var G__10277 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10277__delegate.call(this, _, args);
};
G__10277.cljs$lang$maxFixedArity = 1;
G__10277.cljs$lang$applyTo = (function (arglist__10278){
var _ = cljs.core.first(arglist__10278);
var args = cljs.core.rest(arglist__10278);
return G__10277__delegate(_, args);
});
G__10277.cljs$lang$arity$variadic = G__10277__delegate;
return G__10277;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__10279 = this;
return cljs.core._dispatch.call(null,self__10279,args);
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
var this__10280 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_10282,_){
var this__10281 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__10281.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__10283 = this;
return (this__10283.uuid === other.uuid);
});
cljs.core.UUID.prototype.toString = (function (){
var this__10284 = this;
var this__10285 = this;
return cljs.core.pr_str.call(null,this__10285);
});
cljs.core.UUID;
