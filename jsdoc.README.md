# FacetJsClient - API

2021-Feb-09  
CMSB

A Javascript client for the [Virtuoso Faceted Browsing Service](http://vos.openlinksw.com/owiki/wiki/VOS/VirtuosoFacetsWebService).

FacetJsClient is a Javascript interface to Virtuoso's /fct/service. It aims to be a client library with no UI dependencies with a view to it being usable by any UI framework. [FacetReactClient](https://github.com/cblakeley/FacetReactClient) provides a React-based UI to the Virtuoso Faceted Browsing Service, using FacetJsClient for its underpinnings.

See also:
  * Source code: [GitHub: FacetJsClient](https://github.com/cblakeley/FacetJsClient/tree/develop)

## General Approach

The client library includes two main classes: `FctQuery` and `FctResult`.

`FctQuery` builds an XML request body for execution by `/fct/service`. The XML request payload is described by [Faceted Browsing Service](http://vos.openlinksw.com/owiki/wiki/VOS/VirtuosoFacetsWebService). Different elements and attributes of the XML payload are created, read, updated or deleted by various `FctQuery` methods and accessors. The general approach is to use JQuery for manipulating the input XML. To submit the XML request and execute the contained query, use `FctQuery#execute`. On successful execution, `FctQuery#execute` returns a `FctResult` object.

`FctResult` holds the XML response in property `xml`. Rather than use JQuery to retrieve values from the XML, the response is also converted to a Javascript object using [JXON](https://developer.mozilla.org/en-US/docs/Archive/JXON), to allow for easy consumption by a JS client application. This Javascript object is accessible through property `json`. Different properties of the Javascript object, corresponding to different XML elements in the XML response, can be retrieved through various `FctResult` accessors.

`FctQuery#execute` actually returns a Promise which, when fulfilled, returns a `FctResult`. To trigger `FctQuery#execute` from an event handler, use something like:

```
$('button').on('click', function() {
      fctQuery.execute()      
       .then(fctResult => {
         ... display the query result ...
       })
       .catch(err => {
         $('.fct_qry_status')
           .text('The Facet query failed: ' + err.message)
           .addClass('error');
       })
    })
```

## Sparql Query Generation

Examples of Facet input XML and the corresponding generated SPARQL queries are shown below. Each nesting level in the input XML introduces a new SPARQL variable: `?s1`, `?s2` ... `?sN`, where N corresponds to the nesting level.

`?s1` identifies the set of matching entities found by the faceted search. The other `?sN` (N > 1) express the faceted search filter criteria, but aren't the primary entities being searched for.

### Example 1

**Input XML**

```
<?xml version="1.0"?>
<query xmlns="http://openlinksw.com/services/facets/1.0">
  <!-- Nesting level 1: implied variable ?s1 -->
  <class iri="http://xmlns.com/foaf/0.1/Person" />
  <property iri="http://xmlns.com/foaf/0.1/knows">
    <-- Nesting level 2: Implied variable ?s2 -->
    <property iri="http://xmlns.com/foaf/0.1/name">
       <-- Nesting level 3: Implied variable ?s3 -->
      <value>"Kingsley Idehen"</value>
    </property>
  </property>
  <view type="list" limit="100" />
</query>
```

**Query meta graph**

![meta-graph-1](img/meta-graph-1.png)

**Generated SPARQL query**

```
select ?s1 as ?c1  where  
{
  ?s1 a <http://xmlns.com/foaf/0.1/Person> . 
  ?s1 <http://xmlns.com/foaf/0.1/knows> ?s2 . 
  ?s2 <http://xmlns.com/foaf/0.1/name> ?s3 . 
  filter (?s3 = "Kingsley Idehen") . 
} 
group by (?s1) 
order by desc (<LONG::IRI_RANK> (?s1))  
limit 100
```

### Example 2

**Input XML**

```
<?xml version="1.0"?>
<query xmlns="http://openlinksw.com/services/facets/1.0">
  <!-- Nesting level 1: implied variable ?s1 -->
  <class iri="http://xmlns.com/foaf/0.1/Person" />
  <property-of iri="http://xmlns.com/foaf/0.1/knows">	
    <-- Nesting level 2: Implied variable ?s2 -->
    <property iri="http://xmlns.com/foaf/0.1/name">	
      <-- Nesting level 3: Implied variable ?s3 -->
      <value>"Melvin Carvalho"</value>
    </property>
  </property-of>
  <view type="list" limit="100" />
</query>
```

**Query meta graph**

![meta-graph-2](img/meta-graph-2.png)

**Generated SPARQL query**

```
select ?s1 as ?c1
where
{
  ?s1 a <http://xmlns.com/foaf/0.1/Person> . 
  ?s2 <http://xmlns.com/foaf/0.1/knows> ?s1 . 
  ?s2 <http://xmlns.com/foaf/0.1/name> ?s3 . 
  filter (?s3 = "Melvin Carvalho") . 
} 
group by (?s1) 
order by desc (<LONG::IRI_RANK> (?s1))  
limit 100
```

### Example 3

**Input XML**

```
<?xml version="1.0"?>
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
      <class iri="http://schema.org/Product" />
      <property iri="http://schema.org/material">
        <!-- Nesting level 4: implied variable ?s5 -->
        <value>"asbestos"</value>
      </property>
    </property>
  </property>
  <view type="list" limit="100" />
</query>
```

**Query meta graph**

![meta-graph-3](img/meta-graph-3.png)

**Generated SPARQL query**

```
select ?s1 as ?c1  where  {
  ?s1 a <http://schema.org/Business> . 
  ?s1 <http://schema.org/makesOffer> ?s2 . 
  ?s2 <http://schema.org/businessFunction> ?s3 . 
  filter (?s3 = <http://purl.org/goodrelations/v1#Dispose>) . 
  ?s2 <http://schema.org/itemOffered> ?s4 .
  ?s4 a <http://schema.org/Product> . 
  ?s4 <http://schema.org/material> ?s5 . 
  filter (?s5 = "asbestos") . 
} 
group by (?s1) 
order by desc (<LONG::IRI_RANK> (?s1))  
limit 100 
```

## DTD for the Facet Service Input XML
```
effect of constraining the entity's URI to the specified value.
```

## Facet Input XML Notes

### View Element

As already mentioned, each nesting level in the input XML introduces a new SPARQL variable: `?s1`, `?s2` ... `?sN`, where N corresponds to the nesting level. A `<query>`, `<property>` or `<property-of>` element equates to a subject-arc pair:

<code>s<sub>N</sub></code> -- (query) -->    
<code>s<sub>N</sub></code> -- (property) -->   
<code>s<sub>N</sub></code> -- (property-of) -->  

in the 'metagraph' described by the Facet input XML.

The single `<view>` element allowed in the input XML can be a child of `<query>`, `<property>` or `<property-of>`. The position of the `<view>` element implicitly specifies which <code>s<sub>N</sub></code> is presented in the result set by causing the Facet server to adjust the select list of the query described by the XML. The result set can then serve as a 'pick list' for setting filters on <code>s<sub>N</sub></code> to further refine the search for the set of entities identified by <code>s<sub>1</sub></code>. The result set, when seen as a 'pick list', comprises sets of property values from which a user can choose to constrain a property to a particular value or range, to narrow a search. The position of the `<view>` element then also identifies the <code>s<sub>N</sub></code> that should have the current focus in the Facet UI when adding or removing filters, i.e. which subject node any filters added will be applied to.

