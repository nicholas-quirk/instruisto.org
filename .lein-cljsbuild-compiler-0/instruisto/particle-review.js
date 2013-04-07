goog.provide('instruisto.particle_review');
goog.require('cljs.core');
goog.require('instruisto.effects');
goog.require('domina.events');
goog.require('domina');
goog.require('goog.events');
goog.require('goog.fx.dom');
goog.require('goog.fx');
goog.require('goog.fx.DragDrop');
goog.require('goog.net.XhrIo');
instruisto.particle_review.drag_drop_action = (function drag_drop_action(event){
var drag_data__54166 = event.dragSourceItem.data;
var drop_data__54167 = event.dropTargetItem.data;
var and__3822__auto____54168 = (drag_data__54166 === drop_data__54167);
if(and__3822__auto____54168)
{(drop_data__54167 === domina.set_text_BANG_.call(null,domina.by_id.call(null,"particle-trans"),drag_data__54166));
} else
{and__3822__auto____54168;
}
return null;
});
instruisto.particle_review.init_drag_drop = (function init_drag_drop(drag_id,drop_id,data){
var drag__54170 = (new goog.fx.DragDrop(domina.by_id.call(null,drag_id),data));
drag__54170.addTarget((new goog.fx.DragDrop(domina.by_id.call(null,drop_id),data)));
goog.events.listen(drag__54170,"dragover",instruisto.particle_review.drag_drop_action);
return drag__54170.init();
});
instruisto.particle_review.start_particle_review = (function start_particle_review(){
instruisto.particle_review.init_drag_drop.call(null,"particle-ant-end-drag","particle-skrib-drop","writing");
instruisto.particle_review.init_drag_drop.call(null,"particle-int-end-drag","particle-skrib-drop","having written");
instruisto.particle_review.init_drag_drop.call(null,"particle-ont-end-drag","particle-skrib-drop","going to write");
instruisto.particle_review.init_drag_drop.call(null,"particle-at-end-drag","particle-skrib-drop","begin writen");
instruisto.particle_review.init_drag_drop.call(null,"particle-it-end-drag","particle-skrib-drop","having been written");
instruisto.particle_review.init_drag_drop.call(null,"particle-ot-end-drag","particle-skrib-drop","going to be written");
instruisto.particle_review.init_drag_drop.call(null,"particle-ant-end-drag","particle-konstru-drop","building");
instruisto.particle_review.init_drag_drop.call(null,"particle-int-end-drag","particle-konstru-drop","having built");
instruisto.particle_review.init_drag_drop.call(null,"particle-ont-end-drag","particle-konstru-drop","going to build");
instruisto.particle_review.init_drag_drop.call(null,"particle-at-end-drag","particle-konstru-drop","being built");
instruisto.particle_review.init_drag_drop.call(null,"particle-it-end-drag","particle-konstru-drop","having been built");
return instruisto.particle_review.init_drag_drop.call(null,"particle-ot-end-drag","particle-konstru-drop","going to be built");
});
