# Recipe Keeper


### About

Welcome to your Recipe Keeper! A single page application built with Angular and a Rails API. Recipe Keeper allows you to view recipes, ingredients, and add your own, as well as discover a recipe you might not know about.


### Dependencies

The Rails API was built using Rails 5.0.0.1, and a sqlite3 database. It requires the  active_model_serializers gem for serialization, as well as the angular-rails-templates gem for front end functionality.


### Installation

To get started, clone this repository and run ```bundle install```, followed by ```rake db:migrate``` to set up the database. Finally, run ```rake db:seed``` to seed your database with some recipes and ingredients to start.

Then, run your local server with ```rails s``` and navigate to localhost:3000 in your web browser.


###Contributors:

 Pull requests are welcome.  Contributors, please adhere to the [Contributor Covenant code of conduct](http://contributor-covenant.org/).


###License:

The MIT License (MIT)

Copyright (c) 2016 Lindsey Wells

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
