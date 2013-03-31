(ns instruisto.suffix
  (:require [goog.net.XhrIo :as xhr]
            [domina :as d]
            [domina.events :as events]
            [instruisto.effects :as effects]))

(def suffix-map {
  :suffix {
    :title "Suffix System"
    :body "The suffix system is the same as the prefix system, in that it transforms root words to other forms of the same word. There are roughly 4 times as many suffixes as prefixes. Just like the prefixes, the suffixes require mastery in order to fully understand Esperanto."
    :next ""}})

(defn load-next-section [m]
  (let [entry-map (if (nil? m) (get suffix-map (keyword (d/attr (d/by-id "suffix-link") "title"))) m)
        elem-title (d/by-id "suffix-title")
        elem-body (d/by-id "suffix-body")
        elem-link (d/by-id "suffix-link")]
    (d/set-text! elem-title (:title entry-map))
    (d/set-text! elem-body (:body entry-map))
    (d/set-attr! elem-link "title" (:next entry-map))))

(defn start-suffix []
  (load-next-section (:suffix suffix-map))
  (events/unlisten! (d/by-id "suffix-link"))
  (events/listen! (d/by-id "suffix-link")
                  :click
                  (fn [event]
                    (events/stop-propagation event)
                    (events/prevent-default event)
                    (load-next-section nil))))
