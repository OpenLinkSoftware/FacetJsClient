export default `
<fct:facets xmlns:fct="http://openlinksw.com/services/facets/1.0/">
<fct:sparql>     select ?s1 as ?c1, (bif:search_excerpt (bif:vector (&#39;DATA&#39;, &#39;LINKED&#39;), ?o1)) as ?c2, ?sc, ?rank, ?g where {{{ select ?s1, (?sc * 3e-1) as ?sc, ?o1, (sql:rnk_scale (&lt;LONG::IRI_RANK&gt; (?s1))) as ?rank, ?g where  { quad map virtrdf:DefaultQuadMap { graph ?g {  ?s1 ?s1textp ?o1 . ?o1 bif:contains  &#39;(DATA AND LINKED)&#39;  option (score ?sc)  . } }  } order by desc (?sc * 3e-1 + sql:rnk_scale (&lt;LONG::IRI_RANK&gt; (?s1)))  limit 20  offset 0 }}}</fct:sparql>
<fct:time>186</fct:time>
<fct:complete>yes</fct:complete>
<fct:timeout>8000</fct:timeout>
<fct:db-activity> 11.28K rnd  5.489K seq  5.675K same seg     476 same pg     86 same par      0 disk      0 spec disk      0B /      0 messages      0 fork</fct:db-activity>
 <fct:result type="text">
  <fct:row>
    <fct:column trank="trank"><![CDATA[13.2]]></fct:column>
    <fct:column erank="erank"><![CDATA[5.881291583872891e-14]]></fct:column>
    <fct:column graph="g"><![CDATA[http://id.loc.gov/resources/works/13273056.html]]></fct:column>
    <fct:column datatype="uri" shortform="proxy:entity/http/id...works/13273056.html"><![CDATA[http://linkeddata.uriburner.com/about/id/entity/http/id.loc.gov/resources/works/13273056.html]]></fct:column>
    <fct:column><![CDATA[ - LC Linked Data Service: Authorities and Vocabularies | Library of Congress]]></fct:column>
    <fct:column><![CDATA[, LC &lt;b&gt;Linked&lt;/b&gt; &lt;b&gt;Data&lt;/b&gt; Service, &lt;b&gt;linked&lt;/b&gt; &lt;b&gt;data&lt;/b&gt;, Library of Congress Subject Headings, subject headings, lcsh, id. gov, &lt;b&gt;linked&lt;/b&gt; &lt;b&gt;data&lt;/b&gt;, authorities, standards, vocabularies.]]></fct:column>
  </fct:row>
  <fct:row>
    <fct:column trank="trank"><![CDATA[13.2]]></fct:column>
    <fct:column erank="erank"><![CDATA[5.881291583872891e-14]]></fct:column>
    <fct:column graph="g"><![CDATA[http://dbpedia.org/resource/Linked_data]]></fct:column>
    <fct:column datatype="uri" shortform="dbpedia:Linked_data"><![CDATA[http://dbpedia.org/resource/Linked_data]]></fct:column>
    <fct:column><![CDATA[Linked data]]></fct:column>
    <fct:column><![CDATA[&lt;b&gt;Linked&lt;/b&gt; Open &lt;b&gt;Data&lt;/b&gt; is &lt;b&gt;Linked&lt;/b&gt; &lt;b&gt;Data&lt;/b&gt; which is released under an open licence, which does not impede its reuse for...]]></fct:column>
  </fct:row>
  <fct:row>
    <fct:column trank="trank"><![CDATA[13.2]]></fct:column>
    <fct:column erank="erank"><![CDATA[5.881291583872891e-14]]></fct:column>
    <fct:column graph="g"><![CDATA[http://openorg.ecs.soton.ac.uk/wiki/Linked_Data_Basics_for_Techies]]></fct:column>
    <fct:column datatype="uri" shortform="proxy:entity/http/op...for_Techies#Context"><![CDATA[http://linkeddata.uriburner.com/about/id/entity/http/openorg.ecs.soton.ac.uk/wiki/Linked_Data_Basics_for_Techies#Context]]></fct:column>
    <fct:column />
    <fct:column><![CDATA[&lt;b&gt;Linked&lt;/b&gt; &lt;b&gt;Data&lt;/b&gt; Basics for Techies OpenOrg http:. uk wiki &lt;b&gt;Linked&lt;/b&gt; &lt;b&gt;Data&lt;/b&gt; Basics for Techies content TED talks &lt;b&gt;Linked&lt;/b&gt; &lt;b&gt;Data&lt;/b&gt; Open &lt;b&gt;Data&lt;/b&gt; Tim Berners Lee Why Should I... uk wiki &lt;b&gt;Linked&lt;/b&gt; &lt;b&gt;Data&lt;/b&gt; Basics for Techies In computing, &lt;b&gt;linked&lt;/b&gt; &lt;b&gt;data&lt;/b&gt; often capitalized as...]]></fct:column>
  </fct:row>
  <fct:row>
    <fct:column trank="trank"><![CDATA[13.2]]></fct:column>
    <fct:column erank="erank"><![CDATA[5.881291583872891e-14]]></fct:column>
    <fct:column graph="g"><![CDATA[http://query.linkeddatafragments.org/]]></fct:column>
    <fct:column datatype="uri" shortform="proxy:entity/http/qu...gments.org/#Context"><![CDATA[http://linkeddata.uriburner.com/about/id/entity/http/query.linkeddatafragments.org/#Context]]></fct:column>
    <fct:column />
    <fct:column><![CDATA[&lt;b&gt;Linked&lt;/b&gt; &lt;b&gt;Data&lt;/b&gt; Fragments client http:. rg content &lt;b&gt;Linked&lt;/b&gt; &lt;b&gt;Data&lt;/b&gt; Ghent University Source code http: query. rg In computing, &lt;b&gt;linked&lt;/b&gt; &lt;b&gt;data&lt;/b&gt; often capitalized as &lt;b&gt;Linked&lt;/b&gt; &lt;b&gt;Data&lt;/b&gt; is a method of publishing structured &lt;b&gt;data&lt;/b&gt; so...]]></fct:column>
  </fct:row>
  <fct:row>
    <fct:column trank="trank"><![CDATA[12.6]]></fct:column>
    <fct:column erank="erank"><![CDATA[5.881291583872891e-14]]></fct:column>
    <fct:column graph="g"><![CDATA[urn:kidehen:linkeddata:tutorials]]></fct:column>
    <fct:column datatype="uri" shortform="http://kingsley.ideh...ls/illustration.ttl"><![CDATA[http://kingsley.idehen.net/DAV/home/kidehen/Public/Linked%20Data%20Documents/Tutorials/illustration.ttl]]></fct:column>
    <fct:column><![CDATA[Linked Data Network (e.g., Linked Open Data Cloud) Illustration]]></fct:column>
    <fct:column><![CDATA[&lt;b&gt;Linked&lt;/b&gt; &lt;b&gt;Data&lt;/b&gt; Network... , &lt;b&gt;Linked&lt;/b&gt; Open &lt;b&gt;Data&lt;/b&gt; Cloud Illustration.]]></fct:column>
  </fct:row>
  <fct:row>
    <fct:column trank="trank"><![CDATA[12]]></fct:column>
    <fct:column erank="erank"><![CDATA[5.881291583872891e-14]]></fct:column>
    <fct:column graph="g"><![CDATA[https://twitter.com/kidehen/]]></fct:column>
    <fct:column datatype="uri" shortform="proxy:entity/https/t...er.com/linkeddatanl"><![CDATA[http://linkeddata.uriburner.com/about/id/entity/https/twitter.com/linkeddatanl]]></fct:column>
    <fct:column><![CDATA[pldn]]></fct:column>
    <fct:column><![CDATA[&lt;b&gt;Linked&lt;/b&gt; &lt;b&gt;Data&lt;/b&gt; Platform Netherlands is a meeting place for &lt;b&gt;linked&lt;/b&gt; &lt;b&gt;data&lt;/b&gt; experts and a guide for those... in &lt;b&gt;linked&lt;/b&gt; &lt;b&gt;data&lt;/b&gt;.]]></fct:column>
  </fct:row>
  <fct:row>
    <fct:column trank="trank"><![CDATA[12]]></fct:column>
    <fct:column erank="erank"><![CDATA[5.881291583872891e-14]]></fct:column>
    <fct:column graph="g"><![CDATA[https://www.oclc.org/research/themes/data-science/linkeddata/linked-data-prototype.html]]></fct:column>
    <fct:column datatype="uri" shortform="https://linkeddata.u...totype.html#Context"><![CDATA[https://linkeddata.uriburner.com/about/id/entity/https/www.oclc.org/research/themes/data-science/linkeddata/linked-data-prototype.html#Context]]></fct:column>
    <fct:column />
    <fct:column><![CDATA[&lt;b&gt;Linked&lt;/b&gt; &lt;b&gt;Data&lt;/b&gt; Prototype https:. org research themes &lt;b&gt;data&lt;/b&gt; science &lt;b&gt;linked&lt;/b&gt; &lt;b&gt;data&lt;/b&gt; prototype. tml content &lt;b&gt;Linked&lt;/b&gt; &lt;b&gt;Data&lt;/b&gt; Harvard University Princeton University American University Yale University...]]></fct:column>
  </fct:row>
  <fct:row>
    <fct:column trank="trank"><![CDATA[11.4]]></fct:column>
    <fct:column erank="erank"><![CDATA[5.881291583872891e-14]]></fct:column>
    <fct:column graph="g"><![CDATA[https://ruben.verborgh.org/blog/2019/06/17/shaping-linked-data-apps/]]></fct:column>
    <fct:column datatype="uri" shortform="https://linkeddata.u...-data-apps/#Context"><![CDATA[https://linkeddata.uriburner.com/about/id/entity/https/ruben.verborgh.org/blog/2019/06/17/shaping-linked-data-apps/#Context]]></fct:column>
    <fct:column />
    <fct:column><![CDATA[Shaping &lt;b&gt;Linked&lt;/b&gt; &lt;b&gt;Data&lt;/b&gt; apps Ruben Verborgh https:. org blog 2019 06 17 shaping &lt;b&gt;linked&lt;/b&gt; &lt;b&gt;data&lt;/b&gt; apps content Ed Sheeran &lt;b&gt;Linked&lt;/b&gt; &lt;b&gt;Data&lt;/b&gt; In essence Semantic Web Tim... Lee Shaping &lt;b&gt;Linked&lt;/b&gt; &lt;b&gt;Data&lt;/b&gt; apps https: ruben. org blog 2019 06 17 shaping &lt;b&gt;linked&lt;/b&gt; &lt;b&gt;data&lt;/b&gt; apps Ever...]]></fct:column>
  </fct:row>
  <fct:row>
    <fct:column trank="trank"><![CDATA[10.8]]></fct:column>
    <fct:column erank="erank"><![CDATA[5.881291583872891e-14]]></fct:column>
    <fct:column graph="g"><![CDATA[http://www.openlinksw.com/DAV/oplweb3/data/urn-webdev-virtuoso.ttl]]></fct:column>
    <fct:column datatype="uri" shortform="http://data.openlink...nerationAnswer#this"><![CDATA[http://data.openlinksw.com/oplweb/faq/Virtuoso/VirtRdb2RDFViewsGenerationAnswer#this]]></fct:column>
    <fct:column />
    <fct:column><![CDATA[See example of One Click &lt;b&gt;Linked&lt;/b&gt; &lt;b&gt;Data&lt;/b&gt; Generation Deployment of &lt;b&gt;Linked&lt;/b&gt; &lt;b&gt;Data&lt;/b&gt; Views over Relational &lt;b&gt;Data&lt;/b&gt;...]]></fct:column>
  </fct:row>
  <fct:row>
    <fct:column trank="trank"><![CDATA[10.8]]></fct:column>
    <fct:column erank="erank"><![CDATA[5.881291583872891e-14]]></fct:column>
    <fct:column graph="g"><![CDATA[urn:uda:site:turtle:data]]></fct:column>
    <fct:column datatype="uri" shortform="http://data.openlink...nerationAnswer#this"><![CDATA[http://data.openlinksw.com/oplweb/faq/Virtuoso/VirtRdb2RDFViewsGenerationAnswer#this]]></fct:column>
    <fct:column />
    <fct:column><![CDATA[See example of One Click &lt;b&gt;Linked&lt;/b&gt; &lt;b&gt;Data&lt;/b&gt; Generation Deployment of &lt;b&gt;Linked&lt;/b&gt; &lt;b&gt;Data&lt;/b&gt; Views over Relational &lt;b&gt;Data&lt;/b&gt;...]]></fct:column>
  </fct:row>
  <fct:row>
    <fct:column trank="trank"><![CDATA[10.2]]></fct:column>
    <fct:column erank="erank"><![CDATA[5.881291583872891e-14]]></fct:column>
    <fct:column graph="g"><![CDATA[http://www.slideshare.net/onlyjiny]]></fct:column>
    <fct:column datatype="uri" shortform="https://linkeddata.u...ata-recommendations"><![CDATA[https://linkeddata.uriburner.com/about/id/entity/https/www.slideshare.net/onlyjiny/lodlinked-open-data-recommendations]]></fct:column>
    <fct:column><![CDATA[Presentation:[2015-02-02 22:29:47] LOD(Linked Open Data) Recommendations]]></fct:column>
    <fct:column><![CDATA[LODAC &lt;b&gt;Linked&lt;/b&gt; Open &lt;b&gt;Data&lt;/b&gt; Annual Conference 2015. LOD &lt;b&gt;Linked&lt;/b&gt; Open &lt;b&gt;Data&lt;/b&gt; recommendations.]]></fct:column>
  </fct:row>
  <fct:row>
    <fct:column trank="trank"><![CDATA[10.2]]></fct:column>
    <fct:column erank="erank"><![CDATA[5.881291583872891e-14]]></fct:column>
    <fct:column graph="g"><![CDATA[https://www.w3.org/DesignIssues/Footprints.html]]></fct:column>
    <fct:column datatype="uri" shortform="https://linkeddata.u...prints.html#Context"><![CDATA[https://linkeddata.uriburner.com/about/id/entity/https/www.w3.org/DesignIssues/Footprints.html#Context]]></fct:column>
    <fct:column />
    <fct:column><![CDATA[&lt;b&gt;Linked&lt;/b&gt; &lt;b&gt;Data&lt;/b&gt; Footprints Design Issues https:. html content &lt;b&gt;Linked&lt;/b&gt; &lt;b&gt;Data&lt;/b&gt; RDF Schema RDF schema &lt;b&gt;Linked&lt;/b&gt; Open &lt;b&gt;Data&lt;/b&gt; Tim Berners Lee Berners Design Webdesign... html &lt;b&gt;Linked&lt;/b&gt; Open &lt;b&gt;Data&lt;/b&gt; LOD bezeichnet im World Wide Web frei verf gbare Daten, die per...]]></fct:column>
  </fct:row>
  <fct:row>
    <fct:column trank="trank"><![CDATA[10.2]]></fct:column>
    <fct:column erank="erank"><![CDATA[5.881291583872891e-14]]></fct:column>
    <fct:column graph="g"><![CDATA[https://github.com/zazuko]]></fct:column>
    <fct:column datatype="uri" shortform="https://linkeddata.u....com/zazuko#Context"><![CDATA[https://linkeddata.uriburner.com/about/id/entity/https/github.com/zazuko#Context]]></fct:column>
    <fct:column />
    <fct:column><![CDATA[d3 sparql &lt;b&gt;Linked&lt;/b&gt; Open &lt;b&gt;Data&lt;/b&gt; &lt;b&gt;Linked&lt;/b&gt; &lt;b&gt;Data&lt;/b&gt; Code review Project management api testing dsl blv tierseuchen ld... graph store barnard59 main absolute url alod &lt;b&gt;data&lt;/b&gt; barnard59 barnard59 base barnard59 core barnard59... at cotton candy &lt;b&gt;data&lt;/b&gt;.]]></fct:column>
  </fct:row>
  <fct:row>
    <fct:column trank="trank"><![CDATA[9.6]]></fct:column>
    <fct:column erank="erank"><![CDATA[5.881291583872891e-14]]></fct:column>
    <fct:column graph="g"><![CDATA[https://ruben.verborgh.org/blog/2014/06/30/a-hands-on-linked-data-book-for-people/]]></fct:column>
    <fct:column datatype="uri" shortform="http://linkeddata.ur...298090461877ff87284"><![CDATA[http://linkeddata.uriburner.com/proxy-iri/25695d886f9d63b7c8bfe298090461877ff87284]]></fct:column>
    <fct:column><![CDATA[Embedded RDFa Statement 24]]></fct:column>
    <fct:column><![CDATA[Our new book gets metadata practitioners started with &lt;b&gt;Linked&lt;/b&gt; &lt;b&gt;Data&lt;/b&gt; The &lt;b&gt;Linked&lt;/b&gt; &lt;b&gt;Data&lt;/b&gt; hype is surrounded by... eds of people who just want to publish their &lt;b&gt;data&lt;/b&gt;.]]></fct:column>
  </fct:row>
  <fct:row>
    <fct:column trank="trank"><![CDATA[9.6]]></fct:column>
    <fct:column erank="erank"><![CDATA[5.881291583872891e-14]]></fct:column>
    <fct:column graph="g"><![CDATA[https://ruben.verborgh.org/blog/2014/06/30/a-hands-on-linked-data-book-for-people/]]></fct:column>
    <fct:column datatype="uri" shortform="https://ruben.verbor...ta-book-for-people/"><![CDATA[https://ruben.verborgh.org/blog/2014/06/30/a-hands-on-linked-data-book-for-people/]]></fct:column>
    <fct:column><![CDATA[A hands-on Linked Data book for people]]></fct:column>
    <fct:column><![CDATA[Our new book gets metadata practitioners started with &lt;b&gt;Linked&lt;/b&gt; &lt;b&gt;Data&lt;/b&gt; The &lt;b&gt;Linked&lt;/b&gt; &lt;b&gt;Data&lt;/b&gt; hype is surrounded by... eds of people who just want to publish their &lt;b&gt;data&lt;/b&gt;.]]></fct:column>
  </fct:row>
  <fct:row>
    <fct:column trank="trank"><![CDATA[9.6]]></fct:column>
    <fct:column erank="erank"><![CDATA[5.881291583872891e-14]]></fct:column>
    <fct:column graph="g"><![CDATA[https://www.slideshare.net/olafhartig/querying-linked-data-with-sparql]]></fct:column>
    <fct:column datatype="uri" shortform="https://linkeddata.u...with-sparql#Context"><![CDATA[https://linkeddata.uriburner.com/about/id/entity/https/www.slideshare.net/olafhartig/querying-linked-data-with-sparql#Context]]></fct:column>
    <fct:column />
    <fct:column><![CDATA[Presentation: 2009 10 25 10:33:49 Querying &lt;b&gt;Linked&lt;/b&gt; &lt;b&gt;Data&lt;/b&gt; with SPARQL Querying &lt;b&gt;Linked&lt;/b&gt; &lt;b&gt;Data&lt;/b&gt; with SPARQL This... was part of our How to consume &lt;b&gt;Linked&lt;/b&gt; &lt;b&gt;Data&lt;/b&gt; tutorial at the International Semantic Web Conference ISWC , Oct. ... &lt;b&gt;data&lt;/b&gt; with sparql content 1...]]></fct:column>
  </fct:row>
  <fct:row>
    <fct:column trank="trank"><![CDATA[9.6]]></fct:column>
    <fct:column erank="erank"><![CDATA[5.881291583872891e-14]]></fct:column>
    <fct:column graph="g"><![CDATA[https://www.slideshare.net/joshsh/the-state-of-the-art-in-linked-data]]></fct:column>
    <fct:column datatype="uri" shortform="https://linkeddata.u...linked-data#Context"><![CDATA[https://linkeddata.uriburner.com/about/id/entity/https/www.slideshare.net/joshsh/the-state-of-the-art-in-linked-data#Context]]></fct:column>
    <fct:column />
    <fct:column><![CDATA[... 2010 02 16 12:20:44 The state of the art in &lt;b&gt;Linked&lt;/b&gt; &lt;b&gt;Data&lt;/b&gt; The state of the art in &lt;b&gt;Linked&lt;/b&gt; &lt;b&gt;Data&lt;/b&gt; A literature survey... &lt;b&gt;Linked&lt;/b&gt; &lt;b&gt;Data&lt;/b&gt; for a spring 2009 class at the Tetherless World Constellation. net joshsh the state of the art in &lt;b&gt;linked&lt;/b&gt; &lt;b&gt;data&lt;/b&gt; content 1 &lt;b&gt;Data&lt;/b&gt;...]]></fct:column>
  </fct:row>
  <fct:row>
    <fct:column trank="trank"><![CDATA[9]]></fct:column>
    <fct:column erank="erank"><![CDATA[5.881291583872891e-14]]></fct:column>
    <fct:column graph="g"><![CDATA[http://www.slideshare.net/kidehen]]></fct:column>
    <fct:column datatype="uri" shortform="https://linkeddata.u...-portability-access"><![CDATA[https://linkeddata.uriburner.com/about/id/entity/https/www.slideshare.net/kidehen/linked-data-spaces-data-portability-access]]></fct:column>
    <fct:column><![CDATA[Presentation:[2010-01-12 13:44:17] Linked Data Spaces, Data Portability &amp;amp; Access]]></fct:column>
    <fct:column><![CDATA[&lt;b&gt;Linked&lt;/b&gt; &lt;b&gt;Data&lt;/b&gt; Spaces, &lt;b&gt;Data&lt;/b&gt; Portability Access.]]></fct:column>
  </fct:row>
  <fct:row>
    <fct:column trank="trank"><![CDATA[9]]></fct:column>
    <fct:column erank="erank"><![CDATA[5.881291583872891e-14]]></fct:column>
    <fct:column graph="g"><![CDATA[http://www.slideshare.net/kidehen]]></fct:column>
    <fct:column datatype="uri" shortform="proxy:entity/https/w...-portability-access"><![CDATA[http://linkeddata.uriburner.com/about/id/entity/https/www.slideshare.net/kidehen/linked-data-spaces-data-portability-access]]></fct:column>
    <fct:column><![CDATA[Presentation:[2010-01-12 13:44:17] Linked Data Spaces, Data Portability &amp;amp; Access]]></fct:column>
    <fct:column><![CDATA[&lt;b&gt;Linked&lt;/b&gt; &lt;b&gt;Data&lt;/b&gt; Spaces, &lt;b&gt;Data&lt;/b&gt; Portability Access.]]></fct:column>
  </fct:row>
  <fct:row>
    <fct:column trank="trank"><![CDATA[9]]></fct:column>
    <fct:column erank="erank"><![CDATA[5.881291583872891e-14]]></fct:column>
    <fct:column graph="g"><![CDATA[http://www.slideshare.net/semwebcompany]]></fct:column>
    <fct:column datatype="uri" shortform="https://linkeddata.u...inked-data-big-data"><![CDATA[https://linkeddata.uriburner.com/about/id/entity/https/www.slideshare.net/semwebcompany/linked-data-big-data]]></fct:column>
    <fct:column><![CDATA[Presentation:[2012-07-20 05:09:32] Linked data   big data]]></fct:column>
    <fct:column><![CDATA[&lt;b&gt;Linked&lt;/b&gt; &lt;b&gt;data&lt;/b&gt; big &lt;b&gt;data&lt;/b&gt;.]]></fct:column>
  </fct:row>
 </fct:result>
</fct:facets>
`