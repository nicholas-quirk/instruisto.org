(ns instruisto.prefix
  (:require [goog.net.XhrIo :as xhr]
            [domina :as d]
            [domina.events :as events]
            [instruisto.effects :as effects]))

(def prefix-map {
  :prefix {
    :title "Prefix System"
    :body "Remember the word malgrandajn in the plurals review section? Malgranda doesn't mean big and bad, mal is a prefix that negates a root word. Like in English where you might use un- to denote the opposite of something ie. tie or untie. The meat and potatoes of Esperanto are the prefix and suffix system it uses. By knowing one word, in this case granda which means large, with only the addition of mal-, malgranda means small. You may see the power of Esperanto is knowing a limited set of root words, but with added prefixes and suffixes your vocabulary can increased ten fold. Master these, and you'll have a considerable amount of Esperanto under your belt."
    :next ""}})

(defn load-next-section [m]
  (let [entry-map (if (nil? m) (get prefix-map (keyword (d/attr (d/by-id "prefix-link") "title"))) m)
        elem-title (d/by-id "prefix-title")
        elem-body (d/by-id "prefix-body")
        elem-link (d/by-id "prefix-link")]
    (d/set-text! elem-title (:title entry-map))
    (d/set-text! elem-body (:body entry-map))
    (d/set-attr! elem-link "title" (:next entry-map))))

(defn start-prefix []
  (load-next-section (:prefix prefix-map))
  (events/unlisten! (d/by-id "prefix-link"))
  (events/listen! (d/by-id "prefix-link")
                  :click
                  (fn [event]
                     (events/stop-propagation event)
                     (events/prevent-default event)
                     (load-next-section nil))))
