(defproject instruisto "0.1.0-SNAPSHOT"
  
  :description "FIXME: write description"
  
  :url "http://example.com/FIXME"
  
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  
  :min-lein-version "2.0.0"

  :dependencies [[org.clojure/clojure "1.4.0"]
                 [domina "1.0.0"]
                 [compojure "1.1.0"]
                 [ring "1.0.2"]
                 [enfocus "1.0.1"]]
  
  :ring {:handler instruisto.server/app}
  
  :source-paths ["src/clj"]
  
  :plugins [[lein-cljsbuild "0.2.9"]
            [lein-light "0.0.4"]]
  
  :cljsbuild {:builds [{:source-path "src/cljs"
                        :compiler {:output-to "resources/public/instruisto.js"
                                   :optimizations :whitespace
                                   :pretty-print true }}]}

  :main instruisto.server)
