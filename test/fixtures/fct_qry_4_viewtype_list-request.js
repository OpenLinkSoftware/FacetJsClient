export default `
<?xml version="1.0"?>
<query xmlns="http://openlinksw.com/services/facets/1.0">
  <text>linked+data</text>
  <property-of iri="http://www.openlinksw.com/schemas/twitter#madeTweet">
      <value datatype="uri">https://twitter.com/psychemedia#this</value>
  </property-of>
  <view type="list" limit="100" />
</query>
`