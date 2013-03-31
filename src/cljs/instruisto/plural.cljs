(ns instruisto.plural
  (:require [goog.net.XhrIo :as xhr]
            [domina :as d]
            [domina.events :as events]
            [instruisto.effects :as effects]))

(def plural-map {
  :plural {
    :title "Plural ending -j"
    :body "To make a word in Esperanto plural, you only need to add the ending -j. \u000D\u000A\u000D\u000Akato = cat, katoj = cats \u000D\u000A\u000D\u000Ahundo = dog, hundoj = dogs"
    :next "plural-adj"}
  :plural-adj {
    :title "Plural Adjectives"
    :body "If there is an adjective associated with a noun, then the adjective must also take the plural ending. \u000D\u000A\u000D\u000Agrandaj katoj = big cats \u000D\u000A\u000D\u000Aaltaj hundoj = tall dogs"
    :next "plural-adj-obj"} 
  :plural-adj-obj {
    :title "Plural Adjectives and Objects"
    :body "Whenever a noun takes the object ending -n, so too must the adjective. For example, Mi amas liberan libron = I love a free book. As we have already learned plural nouns make their adjectives plural also. When this happens the -n still comes last. Thus, Mi amas liberajn librojn = I love free books."
    :next "plural"}})

(defn load-next-section [m]
  (let [entry-map (if (nil? m) (get plural-map (keyword (d/attr (d/by-id "plural-link") "title"))) m)
        elem-title (d/by-id "plural-title")
        elem-body (d/by-id "plural-body")
        elem-link (d/by-id "plural-link")]
    (d/set-text! elem-title (:title entry-map))
    (d/set-text! elem-body (:body entry-map))
    (d/set-attr! elem-link "title" (:next entry-map))))

(defn start-plural []
  (load-next-section (:plural plural-map))
  (events/unlisten! (d/by-id "plural-link"))
  (events/listen! (d/by-id "plural-link")
                  :click
                  (fn [event]
                    (events/stop-propagation event)
                    (events/prevent-default event)
                    (load-next-section nil))))
