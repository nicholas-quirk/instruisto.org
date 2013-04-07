(ns instruisto.particle-review
  (:require [goog.net.XhrIo :as xhr]
            [goog.fx.DragDrop :as _]
            [goog.fx :as fx]
            [goog.fx.dom :as fx-dom]
            [goog.events :as goog-events]
            [domina :as d]
            [domina.events :as events]
            [instruisto.effects :as effects]))

(defn drag-drop-action [event]
  (let [drag-data (.-data (.-dragSourceItem event)) drop-data (.-data (.-dropTargetItem event))]
    (== drag-data drop-data (d/set-text! (d/by-id "particle-trans") drag-data)) nil))

(defn init-drag-drop [drag-id drop-id data]
    (let [drag (goog.fx.DragDrop. (d/by-id drag-id) data)]
    (.addTarget drag (goog.fx.DragDrop. (d/by-id drop-id) data))
    (goog-events/listen drag "dragover" drag-drop-action)
    (. drag (init))))

(defn start-particle-review []
  (init-drag-drop "particle-ant-end-drag" "particle-skrib-drop" "writing")
  (init-drag-drop "particle-int-end-drag" "particle-skrib-drop" "having written")
  (init-drag-drop "particle-ont-end-drag" "particle-skrib-drop" "going to write")
  (init-drag-drop "particle-at-end-drag" "particle-skrib-drop" "begin writen")
  (init-drag-drop "particle-it-end-drag" "particle-skrib-drop" "having been written")
  (init-drag-drop "particle-ot-end-drag" "particle-skrib-drop" "going to be written")
  (init-drag-drop "particle-ant-end-drag" "particle-konstru-drop" "building")
  (init-drag-drop "particle-int-end-drag" "particle-konstru-drop" "having built")
  (init-drag-drop "particle-ont-end-drag" "particle-konstru-drop" "going to build")
  (init-drag-drop "particle-at-end-drag" "particle-konstru-drop" "being built")
  (init-drag-drop "particle-it-end-drag" "particle-konstru-drop" "having been built")
  (init-drag-drop "particle-ot-end-drag" "particle-konstru-drop" "going to be built"))