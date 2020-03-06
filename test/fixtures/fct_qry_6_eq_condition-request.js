export default `
  <?xml version="1.0"?>
  <query xmlns="http://openlinksw.com/services/facets/1.0">
    <text property="http://www.openlinksw.com/ski_resorts/schema#description">skiing</text>
    <property iri="http://www.openlinksw.com/ski_resorts/schema#advanced_slopes">
      <cond type="eq" neg="" xml:lang="" datatype="http://www.w3.org/2001/XMLSchema#integer">27</cond>
    </property>
    <view type="list" limit="50" offset="0">
    </view>
  </query>
`
