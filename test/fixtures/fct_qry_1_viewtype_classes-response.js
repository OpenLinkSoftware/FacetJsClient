export default `
<fct:facets xmlns:fct="http://openlinksw.com/services/facets/1.0/">
<fct:sparql>     select ?s1c as ?c1 count (distinct ?s1) as ?c2  where  { quad map virtrdf:DefaultQuadMap { graph ?g {  ?s1 ?s1textp ?o1 . ?o1 bif:contains  &#39;(DATA AND LINKED)&#39;  . } }  ?s1 a ?s1c . } group by ?s1c order by desc 2 limit 20  offset 0 </fct:sparql>
<fct:time>90</fct:time>
<fct:complete>yes</fct:complete>
<fct:timeout>8000</fct:timeout>
<fct:db-activity> 34.52K rnd  165.4K seq     32K same seg   1.558K same pg    516 same par      0 disk      0 spec disk      0B /      0 messages    390 fork</fct:db-activity>
 <fct:result type="classes">
  <fct:row>
    <fct:column datatype="uri" shortform="opltw:Tweet"><![CDATA[http://www.openlinksw.com/schemas/twitter#Tweet]]></fct:column>
    <fct:column><![CDATA[Tweet]]></fct:column>
    <fct:column><![CDATA[4502]]></fct:column>
  </fct:row>
  <fct:row>
    <fct:column datatype="uri" shortform="rdf:Statement"><![CDATA[http://www.w3.org/1999/02/22-rdf-syntax-ns#Statement]]></fct:column>
    <fct:column><![CDATA[Statement]]></fct:column>
    <fct:column><![CDATA[464]]></fct:column>
  </fct:row>
  <fct:row>
    <fct:column datatype="uri" shortform="oa:Annotation"><![CDATA[http://www.w3.org/ns/oa#Annotation]]></fct:column>
    <fct:column><![CDATA[Annotation]]></fct:column>
    <fct:column><![CDATA[296]]></fct:column>
  </fct:row>
  <fct:row>
    <fct:column datatype="uri" shortform="schema:CreativeWork"><![CDATA[http://schema.org/CreativeWork]]></fct:column>
    <fct:column><![CDATA[CreativeWork]]></fct:column>
    <fct:column><![CDATA[276]]></fct:column>
  </fct:row>
  <fct:row>
    <fct:column datatype="uri" shortform="fam:EntityAnnotation"><![CDATA[http://vocab.fusepool.info/fam#EntityAnnotation]]></fct:column>
    <fct:column />
    <fct:column><![CDATA[271]]></fct:column>
  </fct:row>
  <fct:row>
    <fct:column datatype="uri" shortform="foaf:Document"><![CDATA[http://xmlns.com/foaf/0.1/Document]]></fct:column>
    <fct:column><![CDATA[document]]></fct:column>
    <fct:column><![CDATA[270]]></fct:column>
  </fct:row>
  <fct:row>
    <fct:column datatype="uri" shortform="opltw:User"><![CDATA[http://www.openlinksw.com/schemas/twitter#User]]></fct:column>
    <fct:column><![CDATA[Twitter user]]></fct:column>
    <fct:column><![CDATA[251]]></fct:column>
  </fct:row>
  <fct:row>
    <fct:column datatype="uri" shortform="nif:String"><![CDATA[http://persistence.uni-leipzig.org/nlp2rdf/ontologies/nif-core#String]]></fct:column>
    <fct:column />
    <fct:column><![CDATA[233]]></fct:column>
  </fct:row>
  <fct:row>
    <fct:column datatype="uri" shortform="fam:NifSelector"><![CDATA[http://vocab.fusepool.info/fam#NifSelector]]></fct:column>
    <fct:column />
    <fct:column><![CDATA[233]]></fct:column>
  </fct:row>
  <fct:row>
    <fct:column datatype="uri" shortform="bibo:Slideshow"><![CDATA[http://purl.org/ontology/bibo/Slideshow]]></fct:column>
    <fct:column><![CDATA[Slideshow]]></fct:column>
    <fct:column><![CDATA[216]]></fct:column>
  </fct:row>
  <fct:row>
    <fct:column datatype="uri" shortform="sioc:Item"><![CDATA[http://rdfs.org/sioc/ns#Item]]></fct:column>
    <fct:column><![CDATA[Item]]></fct:column>
    <fct:column><![CDATA[203]]></fct:column>
  </fct:row>
  <fct:row>
    <fct:column datatype="uri" shortform="rss:item"><![CDATA[http://purl.org/rss/1.0/item]]></fct:column>
    <fct:column />
    <fct:column><![CDATA[177]]></fct:column>
  </fct:row>
  <fct:row>
    <fct:column datatype="uri" shortform="nif:Context"><![CDATA[http://persistence.uni-leipzig.org/nlp2rdf/ontologies/nif-core#Context]]></fct:column>
    <fct:column />
    <fct:column><![CDATA[147]]></fct:column>
  </fct:row>
  <fct:row>
    <fct:column datatype="uri" shortform="rdfs:Resource"><![CDATA[http://www.w3.org/2000/01/rdf-schema#Resource]]></fct:column>
    <fct:column><![CDATA[Resource]]></fct:column>
    <fct:column><![CDATA[139]]></fct:column>
  </fct:row>
  <fct:row>
    <fct:column datatype="uri" shortform="schema:TechArticle"><![CDATA[http://schema.org/TechArticle]]></fct:column>
    <fct:column><![CDATA[TechArticle]]></fct:column>
    <fct:column><![CDATA[130]]></fct:column>
  </fct:row>
  <fct:row>
    <fct:column datatype="uri" shortform="schema:WebPage"><![CDATA[http://schema.org/WebPage]]></fct:column>
    <fct:column><![CDATA[WebPage]]></fct:column>
    <fct:column><![CDATA[129]]></fct:column>
  </fct:row>
  <fct:row>
    <fct:column datatype="uri" shortform="opl:NamedEntity"><![CDATA[http://www.openlinksw.com/schema/attribution#NamedEntity]]></fct:column>
    <fct:column><![CDATA[NamedEntity]]></fct:column>
    <fct:column><![CDATA[125]]></fct:column>
  </fct:row>
  <fct:row>
    <fct:column datatype="uri" shortform="owl:Thing"><![CDATA[http://www.w3.org/2002/07/owl#Thing]]></fct:column>
    <fct:column><![CDATA[Thing]]></fct:column>
    <fct:column><![CDATA[103]]></fct:column>
  </fct:row>
  <fct:row>
    <fct:column datatype="uri" shortform="http://ontologycentr.../vocab#Organization"><![CDATA[http://ontologycentral.com/2010/05/cb/vocab#Organization]]></fct:column>
    <fct:column />
    <fct:column><![CDATA[97]]></fct:column>
  </fct:row>
  <fct:row>
    <fct:column datatype="uri" shortform="http://ontologycentr...OrganizationSummary"><![CDATA[http://ontologycentral.com/2010/05/cb/vocab#OrganizationSummary]]></fct:column>
    <fct:column />
    <fct:column><![CDATA[97]]></fct:column>
  </fct:row>
 </fct:result>
</fct:facets>
`