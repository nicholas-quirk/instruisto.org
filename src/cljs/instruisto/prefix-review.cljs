(ns instruisto.prefix-review
  (:require [goog.net.XhrIo :as xhr]
            [goog.fx.DragDrop :as _]
            [goog.fx :as fx]
            [goog.fx.dom :as fx-dom]
            [goog.events :as goog-events]
            [domina :as d]
            [domina.events :as events]
            [instruisto.effects :as effects]))

(defn drop-drop-correct [source-id target-id]
  (d/add-class! (d/by-id source-id) "highlight_correct")
  (d/add-class! (d/by-id target-id) "highlight_correct"))

(defn drag-drop-action [event]
  (let [drag-data (.-data (.-dragSourceItem event)) drop-data (.-data (.-dropTargetItem event))]
    (== drag-data drop-data (drop-drop-correct (.-id (.-element (.-dragSourceItem event))) (.-id (.-element (.-dropTargetItem event)))) nil)))

(defn init-drag-drop [drag-id drop-id data]
    (let [drag (goog.fx.DragDrop. (d/by-id drag-id) data)]
    (.addTarget drag (goog.fx.DragDrop. (d/by-id drop-id) data))
    (goog-events/listen drag "dragover" drag-drop-action)
    (. drag (init))))

(defn start-review []
  (d/set-styles! (d/by-id "prefix_def_ordered")  {:display "none"})
  (d/set-styles! (d/by-id "prefix-start-link")  {:display "none"})
  (d/set-styles! (d/by-id "prefix_def_random")  {:display ""}))

(defn start-prefix-review []
  (init-drag-drop "prefix-bo-drag" "prefix-bo-drop" "bo")
  (init-drag-drop "prefix-dis-drag" "prefix-dis-drop" "dis")
  (init-drag-drop "prefix-ek-drag" "prefix-ek-drop" "ek")
  (init-drag-drop "prefix-eks-drag" "prefix-eks-drop" "eks")
  (init-drag-drop "prefix-fi-drag" "prefix-fi-drop" "fi")
  (init-drag-drop "prefix-ge-drag" "prefix-ge-drop" "ge")
  (init-drag-drop "prefix-mal-drag" "prefix-mal-drop" "mal")
  (init-drag-drop "prefix-mis-drag" "prefix-mis-drop" "mis")
  (init-drag-drop "prefix-pra-drag" "prefix-pra-drop" "pra")
  (init-drag-drop "prefix-re-drag" "prefix-re-drop" "re")
  
  (events/unlisten! (d/by-id "prefix-start-link"))
  (events/listen! (d/by-id "prefix-start-link")
                  :click
                  (fn [event]
                     (events/stop-propagation event)
                     (events/prevent-default event)
                     (start-review)))
  
  )