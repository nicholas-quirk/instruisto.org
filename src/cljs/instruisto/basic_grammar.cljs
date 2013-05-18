(ns instruisto.basic-grammar
  (:require
          [goog.net.XhrIo :as xhr]
          [domina :as d]
          [domina.events :as events]
          [instruisto.effects :as effects]))

(def basic-grammar-map {
  :noun {
    :title "Nouns (Substantivoj)" 
    :body "hundo, tablo, birdo, koloro \u000D\u000A\u000D\u000AJust by reading these words aloud, you probably already know what they are. They are dog, table, bird and color respectively. You may have also noticed they all end in -o. This isn't a coincidence. All nouns (persons, places and things) end in -o." 
    :next "adj"}
  :adj {
    :title "Adjectives (Adjektivoj)"
    :body "bela, granda, interesa, longa \u000D\u000A\u000D\u000AAdjectives follow a similar rule as nouns, but all adjectives end in -a. I'm sure you already guessed that the words are beautiful, large, interesting, and long." 
    :next "verb"} 
  :verb {
    :title "Verbs (Verboj)" 
    :body "Verbs in any language are more complex than nouns or adjectives. Without verbs, nothing would get done. But we also need to know when something is done. Esperanto follows verb conjugation like in Romance languages, but all verbs are regular. There are no exceptions! The infinitive ending for verbs is -i, i.e. esti = to be."
    :next "verb-tense"}
  :verb-tense {
    :title "Verb Tenses"
    :body "If esti means to be, we need a way of expressing verb tense (past, present and future). The verb endings for these are -is, -as and -os respectively.\u000D\u000A\u000D\u000AMi estis = I was \u000D\u000A\u000D\u000AMi estas = I am \u000D\u000A\u000D\u000AMi estos = I will be"
    :next "verb-conditional"}
  :verb-conditional {
    :title "Verb Conditional"
    :body "The word 'would' is considered fluff in English when compared to Esperanto. Would proceeds a verb, and thus can be part of the verb itself. We use the ending -us to indicate when we would have something happen.\u000D\u000A\u000D\u000AEstus bone. = It would be good. \u000D\u000A\u000D\u000AEstus bone, se vi learnus Esperanton. = If would be good, if you would learn Esperanto. Note: Esperanton is not a typo. Stay tuned."
    :next "verb-imperative"}
  :verb-imperative {
    :title "Verb Imperative"
    :body "Sometimes you just want to yell at someone to do something. In this instance we have the -u ending. This is useful for when you want to use a command.\u000D\u000A\u000D\u000AKantu! = Sing! \u000D\u000A\u000D\u000AKuru! = Run! \u000D\u000A\u000D\u000AEstu silenta! = Be quiet!"
    :next "adverb" }
  :adverb {
    :title "Adverbs (Adverboj)"
    :body "Adverbs describe verbs. Adverbs in English tend to end in -ly. In Esperanto you can turn a word into an adverb by adding the -e ending.\u000D\u000A\u000D\u000AThe adjectives bela, granda, interesa and longa used earlier are bele, grande, interese and longe in their adverb form.\u000D\u000A\u000D\u000AAdverbs precede verbs, so you might say something like 'Mi rapide legis libron.', which means 'I quickly read the book.'"
    :next "object"} 
  :object {
    :title "Object (Objekto)"
    :body "The -n ending is used to mark the object of a sentenace. Remember back to the sentence \"Estus bone, se vi learnus Esperanton.\", here the word Esperanto is the object and takes the -n ending. This can take sometime to grasp for an English speaker, because the subject and object of a sentence is determined by word order. Generally, a verb proceeds an object. The easiest way to remember the rules are:\u000D\u000A\u000D\u000AWho (or what) is doing the action? That's the subject.\u000D\u000A\u000D\u000AWho (or what) is on the other end of the action, \"receiving\" it? That's the object.\u000D\u000A\u000D\u000AMi vidas vin. = I see you.\u000D\u000A\u000D\u000AMin vidas vi. = You see me."
    :next "noun"
    }})

(defn load-next-grammar-section [m]
  (let [entry-map (if (nil? m) (get basic-grammar-map (keyword (d/attr (d/by-id "basic-grammar-link") "title"))) m)
        elem-title (d/by-id "basic-grammar-title")
        elem-body (d/by-id "basic-grammar-body")
        elem-link (d/by-id "basic-grammar-link")]
    (d/set-text! elem-title (:title entry-map))
    (d/set-text! elem-body (:body entry-map))
    (d/set-attr! elem-link "title" (:next entry-map))))

(defn start-basic-grammar []
  (load-next-grammar-section (:noun basic-grammar-map))
  (events/unlisten! (d/by-id "basic-grammar-link"))
  (events/listen! (d/by-id "basic-grammar-link")
                  :click
                  (fn [event]
                    (events/stop-propagation event)
                    (events/prevent-default event)
                    (load-next-grammar-section nil))))
