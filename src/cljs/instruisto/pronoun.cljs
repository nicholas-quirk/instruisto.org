(ns instruisto.pronoun
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
  (d/set-text! (d/by-id "pronoun-title") (str (d/text (.-element (.-dragSourceItem event))) " -> " (d/text (.-element (.-dropTargetItem event)))))
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
  (d/set-styles! (d/by-id "pronoun_def_ordered") {:display "none"})
  (d/set-styles! (d/by-id "pronoun-start-link") {:display "none"})
  (d/set-styles! (d/by-id "pronoun_def_random") {:display ""}))

(defn start-pronoun []
  (init-drag-drop "pronoun-i-drag" "pronoun-i-drop" "i")
  (init-drag-drop "pronoun-you-drag" "pronoun-you-drop" "you")
  (init-drag-drop "pronoun-he-drag" "pronoun-he-drop" "he")
  (init-drag-drop "pronoun-she-drag" "pronoun-she-drop" "she")
  (init-drag-drop "pronoun-they-drag" "pronoun-they-drop" "they")
  (init-drag-drop "pronoun-it-drag" "pronoun-it-drop" "it")
  (init-drag-drop "pronoun-one-drag" "pronoun-one-drop" "one")
  (init-drag-drop "pronoun-my-drag" "pronoun-my-drop" "my")
  (init-drag-drop "pronoun-yours-drag" "pronoun-yours-drop" "yours")
  (init-drag-drop "pronoun-his-drag" "pronoun-his-drop" "his")
  (init-drag-drop "pronoun-hers-drag" "pronoun-hers-drop" "hers")
  (init-drag-drop "pronoun-their-drag" "pronoun-their-drop" "their")
  (init-drag-drop "pronoun-its-drag" "pronoun-its-drop" "its")
  (init-drag-drop "pronoun-ones-drag" "pronoun-ones-drop" "ones")
  (events/unlisten! (d/by-id "pronoun-start-link"))
  (events/listen! (d/by-id "pronoun-start-link")
                  :click
                  (fn [event]
                     (events/stop-propagation event)
                     (events/prevent-default event)
                     (start-review))))