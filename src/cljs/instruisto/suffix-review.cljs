(ns instruisto.suffix-review
  (:require [goog.net.XhrIo :as xhr]
            [goog.fx.DragDrop :as _]
            [goog.fx :as fx]
            [goog.fx.dom :as fx-dom]
            [goog.events :as goog-events]
            [domina :as d]
            [domina.events :as events]
            [instruisto.effects :as effects]))

(defn highlight-remove-display [event]
  (effects/drop-drop-correct 
          (.-id 
            (.-element 
              (.-dragSourceItem event))) 
          (.-id (.-element (.-dropTargetItem event))))
  (d/set-text! (d/by-id "suffix-review-title") (str (d/text (.-element (.-dragSourceItem event))) " " (d/text (.-element (.-dropTargetItem event)))))
  (d/destroy! (.-element (.-dropTargetItem event)))
  (d/destroy! (.-element (.-dragSourceItem event))))

(defn drag-drop-action [event]
  (let [drag-data (.-data (.-dragSourceItem event)) drop-data (.-data (.-dropTargetItem event))]
    (== drag-data drop-data (highlight-remove-display event) nil)))

(defn init-drag-drop [drag-id drop-id data]
    (let [drag (goog.fx.DragDrop. (d/by-id drag-id) data)]
    (.addTarget drag (goog.fx.DragDrop. (d/by-id drop-id) data))
    (goog-events/listen drag "dragover" drag-drop-action)
    (. drag (init))))

(defn start-review []
  (d/set-styles! (d/by-id "suffix_def_ordered") {:display "none"})
  (d/set-styles! (d/by-id "suffix-start-link") {:display "none"})
  (d/set-styles! (d/by-id "suffix_def_random") {:display ""}))

(defn start-suffix-review []
  (init-drag-drop "suffix-acx-drag" "suffix-acx-drop" "acx")
  (init-drag-drop "suffix-ad-drag" "suffix-ad-drop" "ad")
  (init-drag-drop "suffix-ajx-drag" "suffix-ajx-drop" "ajx")
  (init-drag-drop "suffix-an-drag" "suffix-an-drop" "an")
  (init-drag-drop "suffix-ar-drag" "suffix-ar-drop" "ar")
  (init-drag-drop "suffix-ebl-drag" "suffix-ebl-drop" "ebl")
  (init-drag-drop "suffix-ec-drag" "suffix-ec-drop" "ec")
  (init-drag-drop "suffix-eg-drag" "suffix-eg-drop" "eg")
  (init-drag-drop "suffix-ej-drag" "suffix-ej-drop" "ej")
  (init-drag-drop "suffix-em-drag" "suffix-em-drop" "em")
  (init-drag-drop "suffix-end-drag" "suffix-end-drop" "end")
  (init-drag-drop "suffix-er-drag" "suffix-er-drop" "er")
  (init-drag-drop "suffix-estr-drag" "suffix-estr-drop" "estr")
  (init-drag-drop "suffix-et-drag" "suffix-et-drop" "et")
  (init-drag-drop "suffix-id-drag" "suffix-id-drop" "id")
  (init-drag-drop "suffix-ig-drag" "suffix-ig-drop" "ig")
  (init-drag-drop "suffix-igx-drag" "suffix-igx-drop" "igx")
  (init-drag-drop "suffix-il-drag" "suffix-il-drop" "il")
  (init-drag-drop "suffix-in-drag" "suffix-in-drop" "in")
  (init-drag-drop "suffix-ind-drag" "suffix-ind-drop" "ind")
  (init-drag-drop "suffix-ing-drag" "suffix-ing-drop" "ing")
  (init-drag-drop "suffix-ism-drag" "suffix-ism-drop" "ism")
  (init-drag-drop "suffix-ist-drag" "suffix-ist-drop" "ist")
  (init-drag-drop "suffix-obl-drag" "suffix-obl-drop" "obl")
  (init-drag-drop "suffix-on-drag" "suffix-on-drop" "on")
  (init-drag-drop "suffix-op-drag" "suffix-op-drop" "op")
  (init-drag-drop "suffix-uj-drag" "suffix-uj-drop" "uj")
  (init-drag-drop "suffix-ul-drag" "suffix-ul-drop" "ul")
  (init-drag-drop "suffix-um-drag" "suffix-um-drop" "um") 
  (init-drag-drop "suffix-cxj-drag" "suffix-cxj-drop" "cxj")
  (init-drag-drop "suffix-nj-drag" "suffix-nj-drop" "nj")
  (events/unlisten! (d/by-id "suffix-start-link"))
  (events/listen! (d/by-id "suffix-start-link")
                  :click
                  (fn [event]
                    (events/stop-propagation event)
                    (events/prevent-default event)
                    (start-review))))