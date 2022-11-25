(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{284:function(a,s,e){"use strict";e.r(s);var t=e(13),n=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"configurations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configurations"}},[a._v("#")]),a._v(" Configurations")]),a._v(" "),s("p",[a._v("Just about every Rails application will interact with a database. You can connect to the database by setting an environment variable "),s("code",[a._v("ENV['DATABASE_URL']")]),a._v("or by using a configuration file called "),s("code",[a._v("config/database.yml")]),a._v(".")]),a._v(" "),s("p",[a._v("Since there are two ways to configure your connection (using "),s("code",[a._v("config/database.yml")]),a._v(" or using an environment variable) it is important to understand how they can interact.")]),a._v(" "),s("p",[a._v("If you have an empty "),s("code",[a._v("config/database.yml")]),a._v(" file but your "),s("code",[a._v("ENV['DATABASE_URL']")]),a._v(" is present, then Rails will connect to the database via your environment variable")]),a._v(" "),s("p",[a._v("If you have a "),s("code",[a._v("config/database.yml")]),a._v("but no "),s("code",[a._v("ENV['DATABASE_URL']")]),a._v("then this file will be used to connect to your database")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("DATABASE.YML")]),a._v(" "),s("p",[a._v("The "),s("code",[a._v("config/database.yml")]),a._v(" file contains sections for three different environments in which Rails can run by default:")]),a._v(" "),s("ul",[s("li",[a._v("The "),s("code",[a._v("development")]),a._v(" environment is used on your development/local computer as you interact manually with the application.")]),a._v(" "),s("li",[a._v("The "),s("code",[a._v("test")]),a._v(" environment is used when running automated tests.")]),a._v(" "),s("li",[a._v("The "),s("code",[a._v("production")]),a._v(" environment is used when you deploy your application for the world to use.")])]),a._v(" "),s("p",[a._v("If you wish, you can manually specify a URL inside of your "),s("code",[a._v("config/database.yml")])]),a._v(" "),s("div",{staticClass:"language-ruby line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[a._v("development"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token symbol"}},[a._v("url")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" postgresql"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("localhost"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("blog_development"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),a._v("pool"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("The "),s("code",[a._v("config/database.yml")]),a._v("file can contain ERB tags "),s("code",[a._v("<%= %>")]),a._v(". Anything in the tags will be evaluated as Ruby code. You can use this to pull out data from an environment variable or to perform calculations to generate the needed connection information.")]),a._v(" "),s("p",[a._v("You don't have to update the database configurations manually. If you look at the options of the application generator, you will see that one of the options is named "),s("code",[a._v("--database")]),a._v(". This option allows you to choose an adapter from a list of the most used relational databases. You can even run the generator repeatedly: "),s("code",[a._v("cd .. && rails new blog --database=mysql")]),a._v(". When you confirm the overwriting of the "),s("code",[a._v("config/database.yml")]),a._v("file, your application will be configured for MySQL instead of SQLite. Detailed examples of the common database connections  are below.")])]),a._v(" "),s("li",[s("p",[a._v("Configuring SQLite3 database")]),a._v(" "),s("p",[a._v("Rails comes with built-in support for "),s("a",{attrs:{href:"http://www.sqlite.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("SQLite3"),s("OutboundLink")],1),a._v(", which is a lightweight serverless database application. While a busy production environment may overload SQLite, it works well for development and testing. Rails defaults to using an SQLite database when creating a new project, but you can always change it later.")]),a._v(" "),s("p",[a._v("Here's the section of the default configuration file ("),s("code",[a._v("config/database.yml")]),a._v(") with connection information for the development environment:")]),a._v(" "),s("div",{staticClass:"language-ruby line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[a._v("development"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token symbol"}},[a._v("adapter")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" sqlite3\n  "),s("span",{pre:!0,attrs:{class:"token symbol"}},[a._v("database")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" db"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("development"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("sqlite3\n  "),s("span",{pre:!0,attrs:{class:"token symbol"}},[a._v("pool")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token symbol"}},[a._v("timeout")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5000")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])])]),a._v(" "),s("li",[s("p",[a._v("Configuring MySQL or MariaDB Database")]),a._v(" "),s("p",[a._v("If you choose to use MySQL or MariaDB instead of the shipped SQLite3 database, your "),s("code",[a._v("config/database.yml")]),a._v("will look a little different. Here's the development section:")]),a._v(" "),s("div",{staticClass:"language-ruby line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[a._v("development"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token symbol"}},[a._v("adapter")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" mysql2\n  "),s("span",{pre:!0,attrs:{class:"token symbol"}},[a._v("encoding")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" utf8mb4\n  "),s("span",{pre:!0,attrs:{class:"token symbol"}},[a._v("database")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" blog_development\n  "),s("span",{pre:!0,attrs:{class:"token symbol"}},[a._v("pool")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token symbol"}},[a._v("username")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" root\n  "),s("span",{pre:!0,attrs:{class:"token symbol"}},[a._v("password")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token symbol"}},[a._v("socket")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("tmp"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("mysql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("sock\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("p",[a._v("If your development database has a root user with an empty password, this configuration should work for you. Otherwise, change the username and password in the "),s("code",[a._v("development")]),a._v("\n section as appropriate.")]),a._v(" "),s("p",[a._v("Advisory Locks are enabled by default on MySQL and are used to make database migrations concurrent safe. You can disable advisory locks by setting "),s("code",[a._v("advisory_locks")]),a._v(" to "),s("code",[a._v("false")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-ruby line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[a._v("production"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token symbol"}},[a._v("adapter")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" mysql2\n  "),s("span",{pre:!0,attrs:{class:"token symbol"}},[a._v("advisory_locks")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])])]),a._v(" "),s("li",[s("p",[a._v("Configuring  PostgreSQL Database")]),a._v(" "),s("p",[a._v("Finally, you’ll want to install the pg gem so that you can interface with Postgres from Ruby code. To do so:")]),a._v(" "),s("div",{staticClass:"language-ruby line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[a._v("gem install pg\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("To create a Rails app configured for Postgres, run this command:")]),a._v(" "),s("div",{staticClass:"language-ruby line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[a._v("rails "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" myapp "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("database"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("postgresql\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("the config generated will be like :")]),a._v(" "),s("div",{staticClass:"language-ruby line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[a._v("default"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("default\n  "),s("span",{pre:!0,attrs:{class:"token symbol"}},[a._v("adapter")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" postgresql\n  "),s("span",{pre:!0,attrs:{class:"token symbol"}},[a._v("encoding")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" unicode\n  "),s("span",{pre:!0,attrs:{class:"token symbol"}},[a._v("pool")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token symbol"}},[a._v("host")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" localhost\n  "),s("span",{pre:!0,attrs:{class:"token symbol"}},[a._v("port")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5432")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token symbol"}},[a._v("development")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v("default\n  "),s("span",{pre:!0,attrs:{class:"token symbol"}},[a._v("database")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" app_dev\n  "),s("span",{pre:!0,attrs:{class:"token symbol"}},[a._v("username")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" myapp\n  "),s("span",{pre:!0,attrs:{class:"token symbol"}},[a._v("password")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" password1\n\n"),s("span",{pre:!0,attrs:{class:"token symbol"}},[a._v("test")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v("default\n  "),s("span",{pre:!0,attrs:{class:"token symbol"}},[a._v("database")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" app_test\n  "),s("span",{pre:!0,attrs:{class:"token symbol"}},[a._v("username")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" myapp\n  "),s("span",{pre:!0,attrs:{class:"token symbol"}},[a._v("password")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" password1\n\n"),s("span",{pre:!0,attrs:{class:"token symbol"}},[a._v("production")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v("default\n  "),s("span",{pre:!0,attrs:{class:"token symbol"}},[a._v("database")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" app_production\n  "),s("span",{pre:!0,attrs:{class:"token symbol"}},[a._v("username")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" app\n  "),s("span",{pre:!0,attrs:{class:"token symbol"}},[a._v("password")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" password1\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br")])])]),a._v(" "),s("li",[s("p",[a._v("configuring mongoDB")]),a._v(" "),s("p",[a._v("Create a new rails application to use Ruby MongoDB. Make sure that you add –skip-active-record.")]),a._v(" "),s("div",{staticClass:"language-ruby line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[a._v("rails "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" my_mongo_app "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("skip"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("active"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("record\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("If you notice, there is no "),s("em",[a._v("database.yml")]),a._v(" and no "),s("em",[a._v("sqlite3")]),a._v(" gem is added automatically. Now we have to add two gems which will be a bridge for us between Rails and MongoDB.")]),a._v(" "),s("p",[a._v("Add the following gems to "),s("em",[a._v("Gemfile")]),a._v(".")]),a._v(" "),s("div",{staticClass:"language-ruby line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[a._v("gem "),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'mongoid'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'~> 6.0'")])]),a._v("\ngem "),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'bson_ext'")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("Now do "),s("em",[a._v("bundle install")]),a._v(". Now we have to generate "),s("em",[a._v("mongoid.yml")]),a._v(" file which is similar to "),s("em",[a._v("database.yml")]),a._v(" file for us.")]),a._v(" "),s("p",[a._v("Run the following command to generate MongoDB configuration files.")]),a._v(" "),s("div",{staticClass:"language-ruby line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[a._v("rails g mongoid"),s("span",{pre:!0,attrs:{class:"token symbol"}},[a._v(":config")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("Now update "),s("em",[a._v("mongoid.yml")]),a._v("  file based on your MongoDB configurations and create a database with "),s("em",[a._v("rake db:create")])])])]),a._v(" "),s("p",[s("strong",[a._v("Creating Database")])]),a._v(" "),s("p",[a._v("Once the configuration is set you can create database with following commands")]),a._v(" "),s("div",{staticClass:"language-ruby line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[a._v("bin"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("rails db"),s("span",{pre:!0,attrs:{class:"token symbol"}},[a._v(":create")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);