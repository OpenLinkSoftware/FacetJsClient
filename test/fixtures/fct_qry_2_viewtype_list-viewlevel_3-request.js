export default 
`<?xml version="1.0" encoding="UTF-8" ?>
<query inference="" invfp="IFP_OFF" same-as="SAME_AS_OFF" view3="" s-term="" c-term="" agg="" limit="20">
  <!-- Nesting level 1: implied variable ?s1 -->  
  <text>
  linked+data
  </text>
  <class iri="http://www.openlinksw.com/schemas/twitter#Tweet" />
  <property iri="http://schema.org/mentions">
    <!-- Nesting level 2: implied variable ?s2 -->  
    <property iri="http://www.openlinksw.com/schemas/twitter#follows">
      <!-- Nesting level 3: implied variable ?s3 -->  
      <view type="list" limit="20" offset="0" />
    </property>
  </property>
</query>
`