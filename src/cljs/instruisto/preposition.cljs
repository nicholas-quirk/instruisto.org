(ns instruisto.preposition
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
  (d/set-text! (d/by-id "preposition-review-title") (str (d/text (.-element (.-dragSourceItem event))) " -> " (d/text (.-element (.-dropTargetItem event)))))
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
  (d/set-styles! (d/by-id "preposition_def_ordered") {:display "none"})
  (d/set-styles! (d/by-id "preposition-start-link") {:display "none"})
  (d/set-styles! (d/by-id "preposition_def_random") {:display ""}))

(defn start-preposition []
  (init-drag-drop "preposition-al-drag" "preposition-al-drop" "al")
  (init-drag-drop "preposition-anstataux-drag" "preposition-anstataux-drop" "anstataux")
  (init-drag-drop "preposition-antaux-drag" "preposition-antaux-drop" "antaux")
  (init-drag-drop "preposition-apud-drag" "preposition-apud-drop" "apud")
  (init-drag-drop "preposition-cxe-drag" "preposition-cxe-drop" "cxe")
  (init-drag-drop "preposition-cxirkaux-drag" "preposition-cxirkaux-drop" "cxirkaux")
  (init-drag-drop "preposition-da-drag" "preposition-da-drop" "da")
  (init-drag-drop "preposition-de-drag" "preposition-de-drop" "de")
  (init-drag-drop "preposition-dum-drag" "preposition-dum-drop" "dum")
  (init-drag-drop "preposition-ekster-drag" "preposition-ekster-drop" "ekster")
  (init-drag-drop "preposition-el-drag" "preposition-el-drop" "el")
  (init-drag-drop "preposition-en-drag" "preposition-en-drop" "en")
  (init-drag-drop "preposition-gxis-drag" "preposition-gxis-drop" "gxis")
  (init-drag-drop "preposition-inter-drag" "preposition-inter-drop" "inter")
  (init-drag-drop "preposition-je-drag" "preposition-je-drop" "je")
  (init-drag-drop "preposition-kontraux-drag" "preposition-kontraux-drop" "kontraux")
  (init-drag-drop "preposition-krom-drag" "preposition-krom-drop" "krom")
  (init-drag-drop "preposition-kun-drag" "preposition-kun-drop" "kun")
  (init-drag-drop "preposition-laux-drag" "preposition-laux-drop" "laux")
  (init-drag-drop "preposition-malgraux-drag" "preposition-malgraux-drop" "malgraux")
  (init-drag-drop "preposition-per-drag" "preposition-per-drop" "per")
  (init-drag-drop "preposition-por-drag" "preposition-por-drop" "por")
  (init-drag-drop "preposition-po-drag" "preposition-po-drop" "po")
  (init-drag-drop "preposition-post-drag" "preposition-post-drop" "post")
  (init-drag-drop "preposition-preter-drag" "preposition-preter-drop" "preter")
  (init-drag-drop "preposition-pri-drag" "preposition-pri-drop" "pri")
  (init-drag-drop "preposition-pro-drag" "preposition-pro-drop" "pro")
  (init-drag-drop "preposition-sen-drag" "preposition-sen-drop" "sen")
  (init-drag-drop "preposition-sub-drag" "preposition-sub-drop" "sub")
  (init-drag-drop "preposition-super-drag" "preposition-super-drop" "super")
  (init-drag-drop "preposition-sur-drag" "preposition-sur-drop" "sur")
  (init-drag-drop "preposition-tra-drag" "preposition-tra-drop" "tra")
  (init-drag-drop "preposition-trans-drag" "preposition-trans-drop" "trans")
  (events/unlisten! (d/by-id "preposition-start-link"))
  (events/listen! (d/by-id "preposition-start-link")
                  :click
                  (fn [event]
                     (events/stop-propagation event)
                     (events/prevent-default event)
                     (start-review))))
