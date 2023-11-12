## hoduno 
 # Data model names description :
 A brief description of hoduno DB model namings.
 <br/>
*  `Single` :  A single Question or Answer object,  with Value, Caption and Image properties.
*  `Item` :  A single Qs/As object, with multiple `Single` objects, and some other properties.
*  `Case` : An under construction `Title`. To be used in <u>**hoduno STUDIO**</u>.
*  `Title` : Set of `Item`s, packed with packaging and behavioral data fields, has maker name, category and full set of other properties. `Title` is a general entity, with no specific owner. 
* `Fruit` : A unique entity with a uid property, a `Title` with a specific owner.
* `Publish` : A package of one or more `Title`s with dedicated count, price, and Publisher name.
The <u>**hoduno PUBLISHER**</u> is the app for working with this entity.