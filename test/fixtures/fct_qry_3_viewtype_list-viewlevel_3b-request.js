export default 
`<?xml version="1.0"?>
<query xmlns="http://openlinksw.com/services/facets/1.0">
  <!-- Nesting level 1: implied variable ?s1 -->
  <class iri="http://schema.org/Business" />
  <property iri="http://schema.org/makesOffer">
    <!-- Nesting level 2: implied variable ?s2 -->
    <property iri="http://schema.org/businessFunction">
      <!-- Nesting level 3.1: implied variable ?s3 -->
      <value datatype="uri">http://purl.org/goodrelations/v1#Dispose</value>
    </property>
    <property iri="http://schema.org/itemOffered">
      <!-- Nesting level 3.2: implied variable ?s4 -->
      <view type="list" limit="100" />
      <class iri="http://schema.org/Product" />
      <property iri="http://schema.org/material">
        <!-- Nesting level 4: implied variable ?s5 -->
        <value>asbestos</value>
      </property>
    </property>
  </property>
</query>
`