(ns instruisto.routes
  (:use compojure.core
        hiccup.core
        hiccup.form-helpers)
  (:require [compojure.route :as route]
            [ring.util.response :as response]))

(defroutes main-routes
  (GET "/" [] (response/file-response "index.html" {:root "resources/public"}))
  (route/resources "/"))
