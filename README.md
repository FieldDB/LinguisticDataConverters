[![Build Status](https://travis-ci.org/OpenSourceFieldlinguistics/LinguisticDataConverters.png)](https://travis-ci.org/OpenSourceFieldlinguistics/LinguisticDataConverters)

# Linguistic Data Converters

A library of Javascript converters which can be used by any web app or web site or web service to convert between different linguistic data (often IGT Interlinear Glossed Text) formats.


A separate software component for translating linguistic data structures which can be used in web services or client side apps.

* LingSync
* OnlineLinguisticDatabase
* ELAN
* Praat
* FLEx
* ATLAS http://arxiv.org/pdf/cs/0007022v1.pdf
* XMLIGT


# (Re-) Using 

You can use this library in 3 (or more) ways:

## In the browser
### Bower

You can use the fielddb library in any framework or javascript codebase by running bower install.

```bash
$ bower install linguistic-data-converters --save
```

### Zip downloading
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/OpenSourceFieldlinguistics/LinguisticDataConverters/master/dist/LinguisticDataConverters.min.js
[max]: https://raw.github.com/OpenSourceFieldlinguistics/LinguisticDataConverters/master/dist/LinguisticDataConverters.js

In your web page:

```html
<script src="dist/LinguisticDataConverters.min.js"></script>
<script>
var output = asEOPASXML(input); // "asEOPASXML"
</script>
```

In your code, you can attach LinguisticDataConverters's methods to any object.

```html
<script>
var exports = YourAwesomeLinguisticsAppThingy.utils;
</script>
<script src="dist/LinguisticDataConverters.min.js"></script>
<script>
var output = YourAwesomeLinguisticsAppThingy.utils.asEOPASXML(input); // "asEOPASXML"
</script>
```

## Node.js

Most of these models are built to be shared by FielDB webservices. details to come.

To use this library in node, use npm

```bash
$ npm install linguistic-data-converters
```

```javascript
var LinguisticDataConverters = require('linguistic-data-converters');
```


## CouchDB

Most of these map reduces run in couchdb databases.

To use this library in couchapp, use erica

```bash
$ erica push https://username:userspassword@corpus.example.org/yourusername-yourdatabase
```


# How does this work

We made this video a while back for an instructor which shows how to make custom data converters.

https://youtu.be/t7l_2GRumLs

Each time we find format we like, we add another map reduce that users can customize. 

Unlike normal web apps or web sites where the data manipulation logic is part of the server side, FieldDB's data manipulation is in a seperate component (this repository) that means that it doesn't require help from the FieldDB team to create or deploy new webservices for your corpus. Each corpus team can make their own web services, without our help or supervision (You do need to know how to make couchdb map reduces http://www.slideshare.net/okurow/couchdb-mapreduce-13321353 but at least you dont need us to be able to experiment and deploy your webservices at your leisure)

This search in the issue tracker might help you find more information about exports we have added to the list for FieldDB interoperateability.
https://github.com/OpenSourceFieldlinguistics/FieldDB/search?q=export&type=Issues&utf8=%E2%9C%93

The map reduces look like this to power uesrs (RAs, TAs, computer science/ computational linguistics students)
![screen shot 2015-03-20 at 11 12 31 am](https://cloud.githubusercontent.com/assets/196199/6745942/1cf76836-cef2-11e4-8a87-657fa70d5203.png)

Like this to machines (web apps, REST clients, mobile clients, Java programs, Python scripts, etc)
![screen shot 2015-03-20 at 11 13 47 am](https://cloud.githubusercontent.com/assets/196199/6745949/35969c72-cef2-11e4-8068-b85eb5e0182f.png)

Like this to developers (Javascript developers)
![screen shot 2015-03-20 at 11 16 14 am](https://cloud.githubusercontent.com/assets/196199/6745962/929ad884-cef2-11e4-98f9-bc159e277d78.png)



## Examples

You can find more examples on how to use each component/directive in the specs directory.


Praat -> IGT:

This also uses the Praat TextGrid as JSON/XML library https://github.com/OpenSourceFieldlinguistics/PraatTextGridJS.


```bash
$ npm install textgrid --save
```


```javascript
var TextGrid = require('textgrid');

for (var input in files) {
	output = TextGrid.textgridToIGT(input);
}
```


FieldDB -> Praat:

This also uses the Praat TextGrid as JSON/XML library https://github.com/OpenSourceFieldlinguistics/PraatTextGridJS.


```bash
$ npm install textgrid --save
```


```javascript
var audiointervals = require('linguistic-data-converters/views/audiointervals/map.js');
var TextGrid = require('textgrid');

for (var input in docs) {
	output = TextGrid.audioIntervalsToTextGrid(audiointervals(input));
}
```



FieldDB -> JSON:


```javascript
var asFieldDBJson = require('linguistic-data-converters/views/datums/map.js');

for (var input in docs) {
	output = asFieldDBJson(input);
}
```


FieldDB -> EOPAS XML:


```javascript
var asEOPASXML = require('linguistic-data-converters/views/export_eopas_xml/map.js');

for (var input in docs) {
	output = asEOPASXML(input);
}
```


FieldDB -> RDF word list:


```javascript
var asRDFWordList = require('linguistic-data-converters/views/word_list_rdf/map.js');

for (var input in docs) {
	output = asRDFWordList(input);
}
```



## Contributing

Get the source code from https://github.com/OpenSourceFieldlinguistics/linguisticdataconverters

* [Signup for a GitHub account](https://github.com/signup/free) (GitHub is free for OpenSource)
* Click on the "Fork" button to create your own copy.
* Leave us a note in our [issue tracker](https://github.com/OpenSourceFieldlinguistics/FieldDB/issues) to tell us a bit about the bug/feature you want to work on.
* You can [follow the 4 GitHub Help Tutorials](http://help.github.com/) to install and use Git on your computer.
* You can watch the videos on [YouTube dev playlist](https://www.youtube.com/playlist?list=PLUrH6CNxFDrO3zLHtHAMW-8u_v7TSvE-H) and/or in the [Developer's Blog](https://wwwdev.lingsync.org/dev.html) to find out how the codebase works, and to find where is the code that you want to edit. You might also like the [user tutorial screencasts](https://www.youtube.com/playlist?list=PLUrH6CNxFDrMtraL8hTLbLsQwdw1117FT) to see how the app is supposed to behave. Feel free to ask us questions in our [issue tracker](https://github.com/OpenSourceFieldlinguistics/FieldDB/issues), we're friendly and welcome Open Source newbies.
* Edit the code on your computer, commit it referencing the issue #xx you created ($ git commit -m "fixes #xxxx i changed blah blah...") and push to your origin ($ git push origin master).
* Run the tests `$ npm test`
* Click on the "Pull Request" button, and leave us a note about what you changed. We will look at your changes and help you bring them into the project!
* Feel the glow of contributing to OpenSource :)
https://github.com/OpenSourceFieldlinguistics/fielddb/milestones?state=closed

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using the above command lines.



## Release History

For up-to-date details see the milestones https://github.com/OpenSourceFieldlinguistics/fielddb/milestones?state=closed

* March 2015 moved to a seperate repository to make more accessible for other devs
* December 2014 added support for experimental data exports
* December 2013 added support for chronological export
* January 2013 became online by default (so that students wouldnt have to learn how to use the sync buttons)
* August 2012 launched at the CAML workshop [videos](https://www.youtube.com/watch?v=eRTHu-5KvSQ&index=23&list=PLUrH6CNxFDrMtraL8hTLbLsQwdw1117FT) 


## License
Copyright (c) 2013-2014 FieldDB Contributors
Licensed under the Apache 2.0 license.
