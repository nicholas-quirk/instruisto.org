(ns instruisto.introduction
  (:require [goog.net.XhrIo :as xhr]
            [domina :as d]
            [domina.events :as events]
            [instruisto.effects :as effects]))

(def introduction-map {
  :what {
    :title "What?"
    :body "Esperanto is the most popular constructed international auxiliary language. It was created in 1887 by L. L. Zamenhof, a Polish doctor and linguist. The language is heavily influenced by Romance, Germanic and Slavic languages. If you already speak a European language then learning Esperanto is relatively easy. The language consists of regular verbs and a prefix/suffix system for word building. By knowing only a couple hundred root words and all the prefixes and suffixes, your vocabulary can increase by ten fold."
    :next "why"}
  :why {
    :title "Why?"
    :body "Esperanto was created in a region of Poland where there were many languages spoken. Zamenhof understood that distrust and hatred between groups of people started with miscommunication. If people could all speak a common language, that was independent of any group or region, then all parties would be on equal grounds. Neither person communicating would be inferior to the other."
    :next "who"} 
  :who {
    :title "Who?"
    :body "Exact number of Esperanto speakers is unknown since the language has no homeland. Numbers show anywhere between 10,000 – 2,000,000 L2 speakers. Regardless of the number of speakers, Esperanto is an active language with the World Congress of Esperanto held annually. There is a thriving community of Esperanto speakers producing music, books, pod-casts and websites around the language. Even if you don't become a fluent Esperanto speaker, learning the language will prime you when learning another foreign language."
    :next "what"}})

(defn load-next-section [m]
  (let [entry-map (if (nil? m) (get introduction-map (keyword (d/attr (d/by-id "introduction-link") "title"))) m)
        elem-title (d/by-id "introduction-title")
        elem-body (d/by-id "introduction-body")
        elem-link (d/by-id "introduction-link")]
    (d/set-text! elem-title (:title entry-map))
    (d/set-text! elem-body (:body entry-map))
    (d/set-attr! elem-link "title" (:next entry-map))))

(defn start-introduction []
  (load-next-section (:what introduction-map))
  (events/unlisten! (d/by-id "introduction-link"))
  (events/listen! (d/by-id "introduction-link")
                  :click
                  (fn [event]
                     (events/stop-propagation event)
                     (events/prevent-default event)
                     (load-next-section nil))))
