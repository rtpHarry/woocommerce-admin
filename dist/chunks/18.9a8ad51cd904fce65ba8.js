(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[18],{710:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return N}));var a=r(14),o=r.n(a),n=r(13),c=r.n(n),i=r(16),l=r.n(i),u=r(17),s=r.n(u),m=r(6),d=r.n(m),p=r(0),b=r(1),f=r.n(b),y=r(747),_=r(723),v=r(10),O=r.n(v),j=r(3),h=r(2),g=r(68),w=r(274),R=r(33),S=r(32),C=r(35),q=r(728),k=r(718);r(881);function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=d()(e);if(t){var o=d()(this).constructor;r=Reflect.construct(a,arguments,o)}else r=a.apply(this,arguments);return s()(this,r)}}var E=function(e){l()(r,e);var t=D(r);function r(){var e;return o()(this,r),(e=t.call(this)).getHeadersContent=e.getHeadersContent.bind(O()(e)),e.getRowsContent=e.getRowsContent.bind(O()(e)),e.getSummary=e.getSummary.bind(O()(e)),e}return c()(r,[{key:"getHeadersContent",value:function(){return[{label:Object(j.__)("Date","woocommerce-admin"),key:"date",required:!0,defaultSort:!0,isLeftAligned:!0,isSortable:!0},{label:Object(j.__)("Order #","woocommerce-admin"),screenReaderLabel:Object(j.__)("Order Number","woocommerce-admin"),key:"order_number",required:!0},{label:Object(j.__)("Status","woocommerce-admin"),key:"status",required:!1,isSortable:!1},{label:Object(j.__)("Customer","woocommerce-admin"),key:"customer_id",required:!1,isSortable:!1},{label:Object(j.__)("Product(s)","woocommerce-admin"),screenReaderLabel:Object(j.__)("Products","woocommerce-admin"),key:"products",required:!1,isSortable:!1},{label:Object(j.__)("Items Sold","woocommerce-admin"),key:"num_items_sold",required:!1,isSortable:!0,isNumeric:!0},{label:Object(j.__)("Coupon(s)","woocommerce-admin"),screenReaderLabel:Object(j.__)("Coupons","woocommerce-admin"),key:"coupons",required:!1,isSortable:!1},{label:Object(j.__)("Net Sales","woocommerce-admin"),screenReaderLabel:Object(j.__)("Net Sales","woocommerce-admin"),key:"net_total",required:!0,isSortable:!0,isNumeric:!0}]}},{key:"getCustomerName",value:function(e){var t=e||{},r=t.first_name,a=t.last_name;return r||a?[r,a].join(" "):""}},{key:"getRowsContent",value:function(e){var t=this,r=this.props.query,a=Object(S.getPersistedQuery)(r),o=Object(R.g)("dateFormat",C.defaultTableDateFormat),n=this.context,c=n.render,i=n.getCurrencyConfig;return Object(h.map)(e,(function(e){var r=e.currency,n=e.date_created,l=e.net_total,u=e.num_items_sold,s=e.order_id,m=e.order_number,d=e.parent_id,b=e.status,f=e.extended_info||{},y=f.coupons,_=f.customer,v=f.products.sort((function(e,t){return t.quantity-e.quantity})).map((function(e){return{label:e.name,quantity:e.quantity,href:Object(S.getNewPath)(a,"/analytics/products",{filter:"single_product",products:e.id})}})),O=y.map((function(e){return{label:e.code,href:Object(S.getNewPath)(a,"/analytics/coupons",{filter:"single_coupon",coupons:e.id})}}));return[{display:Object(p.createElement)(g.Date,{date:n,visibleFormat:o}),value:n},{display:Object(p.createElement)(g.Link,{href:"post.php?post="+(d||s)+"&action=edit"+(d?"#order_refunds":""),type:"wp-admin"},m),value:m},{display:Object(p.createElement)(g.OrderStatus,{className:"woocommerce-orders-table__status",order:{status:b},orderStatusMap:Object(R.g)("orderStatuses",{})}),value:b},{display:t.getCustomerName(_),value:t.getCustomerName(_)},{display:t.renderList(v.length?[v[0]]:[],v.map((function(e){return{label:Object(j.sprintf)(Object(j.__)("%s× %s","woocommerce-admin"),e.quantity,e.label),href:e.href}}))),value:v.map((function(e){var t=e.quantity,r=e.label;return Object(j.sprintf)(Object(j.__)("%s× %s","woocommerce-admin"),t,r)})).join(", ")},{display:Object(w.formatValue)(i(),"number",u),value:u},{display:t.renderList(O.length?[O[0]]:[],O),value:O.map((function(e){return e.label})).join(", ")},{display:c(l,r),value:l}]}))}},{key:"getSummary",value:function(e){var t=e.orders_count,r=void 0===t?0:t,a=e.total_customers,o=void 0===a?0:a,n=e.products,c=void 0===n?0:n,i=e.num_items_sold,l=void 0===i?0:i,u=e.coupons_count,s=void 0===u?0:u,m=e.net_revenue,d=void 0===m?0:m,p=this.context,b=p.formatAmount,f=(0,p.getCurrencyConfig)();return[{label:Object(j._n)("order","orders",r,"woocommerce-admin"),value:Object(w.formatValue)(f,"number",r)},{label:Object(j._n)(" customer"," customers",o,"woocommerce-admin"),value:Object(w.formatValue)(f,"number",o)},{label:Object(j._n)("product","products",c,"woocommerce-admin"),value:Object(w.formatValue)(f,"number",c)},{label:Object(j._n)("item sold","items sold",l,"woocommerce-admin"),value:Object(w.formatValue)(f,"number",l)},{label:Object(j._n)("coupon","coupons",s,"woocommerce-admin"),value:Object(w.formatValue)(f,"number",s)},{label:Object(j.__)("net sales","woocommerce-admin"),value:b(d)}]}},{key:"renderLinks",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e,t){return Object(p.createElement)(g.Link,{href:e.href,key:t,type:"wc-admin"},e.label)}))}},{key:"renderList",value:function(e,t){return Object(p.createElement)(p.Fragment,null,this.renderLinks(e),t.length>1&&Object(p.createElement)(g.ViewMoreList,{items:this.renderLinks(t)}))}},{key:"render",value:function(){var e=this.props,t=e.query,r=e.filters,a=e.advancedFilters;return Object(p.createElement)(q.a,{endpoint:"orders",getHeadersContent:this.getHeadersContent,getRowsContent:this.getRowsContent,getSummary:this.getSummary,summaryFields:["orders_count","total_customers","products","num_items_sold","coupons_count","net_revenue"],query:t,tableQuery:{extended_info:!0},title:Object(j.__)("Orders","woocommerce-admin"),columnPrefsKey:"orders_report_columns",filters:r,advancedFilters:a})}}]),r}(p.Component);E.contextType=k.a;var P=E,x=r(722),F=r(724),T=r(725);function A(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=d()(e);if(t){var o=d()(this).constructor;r=Reflect.construct(a,arguments,o)}else r=a.apply(this,arguments);return s()(this,r)}}var N=function(e){l()(r,e);var t=A(r);function r(){return o()(this,r),t.apply(this,arguments)}return c()(r,[{key:"render",value:function(){var e=this.props,t=e.path,r=e.query;return Object(p.createElement)(p.Fragment,null,Object(p.createElement)(T.a,{query:r,path:t,filters:y.c,advancedFilters:y.a,report:"orders"}),Object(p.createElement)(F.a,{charts:y.b,endpoint:"orders",query:r,selectedChart:Object(_.a)(r.chart,y.b),filters:y.c,advancedFilters:y.a}),Object(p.createElement)(x.a,{charts:y.b,endpoint:"orders",path:t,query:r,selectedChart:Object(_.a)(r.chart,y.b),filters:y.c,advancedFilters:y.a}),Object(p.createElement)(P,{query:r,filters:y.c,advancedFilters:y.a}))}}]),r}(p.Component);N.propTypes={path:f.a.string.isRequired,query:f.a.object.isRequired}},720:function(e,t,r){"use strict";r.d(t,"e",(function(){return s})),r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return p})),r.d(t,"d",(function(){return b})),r.d(t,"f",(function(){return f})),r.d(t,"g",(function(){return y}));var a=r(36),o=r(42),n=r.n(o),c=r(2),i=r(32),l=r(41),u=r(721);function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.identity;return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",o=arguments.length>1?arguments[1]:void 0,c="function"==typeof e?e(o):e,l=Object(i.getIdsFromQuery)(r);if(l.length<1)return Promise.resolve([]);var u={include:l.join(","),per_page:l.length};return n()({path:Object(a.addQueryArgs)(c,u)}).then((function(e){return e.map(t)}))}}var m=s(l.NAMESPACE+"/products/categories",(function(e){return{key:e.id,label:e.name}})),d=s(l.NAMESPACE+"/coupons",(function(e){return{key:e.id,label:e.code}})),p=s(l.NAMESPACE+"/customers",(function(e){return{key:e.id,label:e.name}})),b=s(l.NAMESPACE+"/products",(function(e){return{key:e.id,label:e.name}})),f=s(l.NAMESPACE+"/taxes",(function(e){return{key:e.id,label:Object(u.a)(e)}})),y=s((function(e){return l.NAMESPACE+"/products/".concat(e.products,"/variations")}),(function(e){return{key:e.id,label:e.attributes.map((function(e){return e.option})).join(", ")}}))},721:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var a=r(3);function o(e){return[e.country,e.state,e.name||Object(a.__)("TAX","woocommerce-admin"),e.priority].map((function(e){return e.toString().toUpperCase().trim()})).filter(Boolean).join("-")}},722:function(e,t,r){"use strict";var a=r(5),o=r.n(a),n=r(14),c=r.n(n),i=r(13),l=r.n(i),u=r(16),s=r.n(u),m=r(17),d=r.n(m),p=r(6),b=r.n(p),f=r(0),y=r(3),_=r(270),v=r(137),O=r(24),j=r(2),h=r(1),g=r.n(h),w=r(68),R=r(41),S=r(35),C=r(718),q=r(719),k=r(32);function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=b()(e);if(t){var o=b()(this).constructor;r=Reflect.construct(a,arguments,o)}else r=a.apply(this,arguments);return d()(this,r)}}var x=function(e){s()(r,e);var t=P(r);function r(){return c()(this,r),t.apply(this,arguments)}return l()(r,[{key:"shouldComponentUpdate",value:function(e){return e.isRequesting!==this.props.isRequesting||e.primaryData.isRequesting!==this.props.primaryData.isRequesting||e.secondaryData.isRequesting!==this.props.secondaryData.isRequesting||!Object(j.isEqual)(e.query,this.props.query)}},{key:"getItemChartData",value:function(){var e=this.props,t=e.primaryData,r=e.selectedChart;return t.data.intervals.map((function(e){var t={};return e.subtotals.segments.forEach((function(e){if(e.segment_label){var a=t[e.segment_label]?e.segment_label+" (#"+e.segment_id+")":e.segment_label;t[e.segment_id]={label:a,value:e.subtotals[r.key]||0}}})),E({date:Object(v.a)("Y-m-d\\TH:i:s",e.date_start)},t)}))}},{key:"getTimeChartData",value:function(){var e=this.props,t=e.query,r=e.primaryData,a=e.secondaryData,o=e.selectedChart,n=e.defaultDateRange,c=Object(S.getIntervalForQuery)(t),i=Object(S.getCurrentDates)(t,n),l=i.primary,u=i.secondary;return r.data.intervals.map((function(e,r){var n=Object(S.getPreviousDate)(e.date_start,l.after,u.after,t.compare,c),i=a.data.intervals[r];return{date:Object(v.a)("Y-m-d\\TH:i:s",e.date_start),primary:{label:"".concat(l.label," (").concat(l.range,")"),labelDate:e.date_start,value:e.subtotals[o.key]||0},secondary:{label:"".concat(u.label," (").concat(u.range,")"),labelDate:n.format("YYYY-MM-DD HH:mm:ss"),value:i&&i.subtotals[o.key]||0}}}))}},{key:"getTimeChartTotals",value:function(){var e=this.props,t=e.primaryData,r=e.secondaryData,a=e.selectedChart;return{primary:Object(j.get)(t,["data","totals",a.key],null),secondary:Object(j.get)(r,["data","totals",a.key],null)}}},{key:"renderChart",value:function(e,t,r,a){var o=this.props,n=o.emptySearchResults,c=o.filterParam,i=o.interactiveLegend,l=o.itemsLabel,u=o.legendPosition,s=o.path,m=o.query,d=o.selectedChart,p=o.showHeaderControls,b=o.primaryData,_=Object(S.getIntervalForQuery)(m),v=Object(S.getAllowedIntervalsForQuery)(m),O=Object(S.getDateFormatsForInterval)(_,b.data.intervals.length),j=n?Object(y.__)("No data for the current search","woocommerce-admin"):Object(y.__)("No data for the selected date range","woocommerce-admin"),h=this.context,g=h.formatAmount,C=h.getCurrencyConfig;return Object(f.createElement)(w.Chart,{allowedIntervals:v,data:r,dateParser:"%Y-%m-%dT%H:%M:%S",emptyMessage:j,filterParam:c,interactiveLegend:i,interval:_,isRequesting:t,itemsLabel:l,legendPosition:u,legendTotals:a,mode:e,path:s,query:m,screenReaderFormat:O.screenReaderFormat,showHeaderControls:p,title:d.label,tooltipLabelFormat:O.tooltipLabelFormat,tooltipTitle:"time-comparison"===e&&d.label||null,tooltipValueFormat:Object(R.getTooltipValueFormat)(d.type,g),chartType:Object(S.getChartTypeForQuery)(m),valueType:d.type,xFormat:O.xFormat,x2Format:O.x2Format,currency:C()})}},{key:"renderItemComparison",value:function(){var e=this.props,t=e.isRequesting,r=e.primaryData;if(r.isError)return Object(f.createElement)(q.a,{isError:!0});var a=t||r.isRequesting,o=this.getItemChartData();return this.renderChart("item-comparison",a,o)}},{key:"renderTimeComparison",value:function(){var e=this.props,t=e.isRequesting,r=e.primaryData,a=e.secondaryData;if(!r||r.isError||a.isError)return Object(f.createElement)(q.a,{isError:!0});var o=t||r.isRequesting||a.isRequesting,n=this.getTimeChartData(),c=this.getTimeChartTotals();return this.renderChart("time-comparison",o,n,c)}},{key:"render",value:function(){return"item-comparison"===this.props.mode?this.renderItemComparison():this.renderTimeComparison()}}]),r}(f.Component);x.contextType=C.a,x.propTypes={filters:g.a.array,isRequesting:g.a.bool,itemsLabel:g.a.string,limitProperties:g.a.array,mode:g.a.string,path:g.a.string.isRequired,primaryData:g.a.object,query:g.a.object.isRequired,secondaryData:g.a.object,selectedChart:g.a.shape({key:g.a.string.isRequired,label:g.a.string.isRequired,order:g.a.oneOf(["asc","desc"]),orderby:g.a.string,type:g.a.oneOf(["average","number","currency"]).isRequired}).isRequired},x.defaultProps={isRequesting:!1,primaryData:{data:{intervals:[]},isError:!1,isRequesting:!1},secondaryData:{data:{intervals:[]},isError:!1,isRequesting:!1}};t.a=Object(_.a)(Object(O.withSelect)((function(e,t){var r=t.charts,a=t.endpoint,o=t.filters,n=t.isRequesting,c=t.limitProperties,i=t.query,l=t.advancedFilters,u=c||[a],s=function e(t,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t||0===t.length)return null;var o=t.slice(0),n=o.pop();if(n.showFilters(r,a)){var c=Object(k.flattenFilters)(n.filters),i=r[n.param]||n.defaultValue||"all";return Object(j.find)(c,{value:i})}return e(o,r,a)}(o,i),m=Object(j.get)(s,["settings","param"]),d=t.mode||function(e,t){if(e&&t){var r=Object(j.get)(e,["settings","param"]);if(!r||Object.keys(t).includes(r))return Object(j.get)(e,["chartMode"])}return null}(s,i)||"time-comparison",p=e(R.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings").woocommerce_default_date_range,b={mode:d,filterParam:m,defaultDateRange:p};if(n)return b;var f=u.some((function(e){return i[e]&&i[e].length}));if(i.search&&!f)return E(E({},b),{},{emptySearchResults:!0});var y=r&&r.map((function(e){return e.key})),_=Object(R.getReportChartData)({endpoint:a,dataType:"primary",query:i,select:e,limitBy:u,filters:o,advancedFilters:l,defaultDateRange:p,fields:y});if("item-comparison"===d)return E(E({},b),{},{primaryData:_});var v=Object(R.getReportChartData)({endpoint:a,dataType:"secondary",query:i,select:e,limitBy:u,filters:o,advancedFilters:l,defaultDateRange:p,fields:y});return E(E({},b),{},{primaryData:_,secondaryData:v})})))(x)},723:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var a=r(2);function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=Object(a.find)(t,{key:e});return r||t[0]}},724:function(e,t,r){"use strict";var a=r(14),o=r.n(a),n=r(13),c=r.n(n),i=r(16),l=r.n(i),u=r(17),s=r.n(u),m=r(6),d=r.n(m),p=r(0),b=r(3),f=r(270),y=r(24),_=r(1),v=r.n(_),O=r(32),j=r(68),h=r(274),g=r(41),w=r(35),R=r(61),S=r(719),C=r(718);function q(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=d()(e);if(t){var o=d()(this).constructor;r=Reflect.construct(a,arguments,o)}else r=a.apply(this,arguments);return s()(this,r)}}var k=function(e){l()(r,e);var t=q(r);function r(){return o()(this,r),t.apply(this,arguments)}return c()(r,[{key:"formatVal",value:function(e,t){var r=this.context,a=r.formatAmount,o=r.getCurrencyConfig;return"currency"===t?a(e):Object(h.formatValue)(o(),t,e)}},{key:"getValues",value:function(e,t){var r=this.props,a=r.emptySearchResults,o=r.summaryData.totals,n=o.primary?o.primary[e]:0,c=o.secondary?o.secondary[e]:0,i=a?0:n,l=a?0:c;return{delta:Object(h.calculateDelta)(i,l),prevValue:this.formatVal(l,t),value:this.formatVal(i,t)}}},{key:"render",value:function(){var e=this,t=this.props,r=t.charts,a=t.query,o=t.selectedChart,n=t.summaryData,c=t.endpoint,i=t.report,l=t.defaultDateRange,u=n.isError,s=n.isRequesting;if(u)return Object(p.createElement)(S.a,{isError:!0});if(s)return Object(p.createElement)(j.SummaryListPlaceholder,{numberOfItems:r.length});var m=Object(w.getDateParamsFromQuery)(a,l).compare;return Object(p.createElement)(j.SummaryList,null,(function(t){var a=t.onToggle;return r.map((function(t){var r=t.key,n=t.order,l=t.orderby,u=t.label,s=t.type,d={chart:r};l&&(d.orderby=l),n&&(d.order=n);var f=Object(O.getNewPath)(d),y=o.key===r,_=e.getValues(r,s),v=_.delta,h=_.prevValue,g=_.value;return Object(p.createElement)(j.SummaryNumber,{key:r,delta:v,href:f,label:u,prevLabel:"previous_period"===m?Object(b.__)("Previous Period:","woocommerce-admin"):Object(b.__)("Previous Year:","woocommerce-admin"),prevValue:h,selected:y,value:g,onLinkClickCallback:function(){a&&a(),Object(R.recordEvent)("analytics_chart_tab_click",{report:i||c,key:r})}})}))}))}}]),r}(p.Component);k.propTypes={charts:v.a.array.isRequired,endpoint:v.a.string.isRequired,limitProperties:v.a.array,query:v.a.object.isRequired,selectedChart:v.a.shape({key:v.a.string.isRequired,label:v.a.string.isRequired,order:v.a.oneOf(["asc","desc"]),orderby:v.a.string,type:v.a.oneOf(["average","number","currency"]).isRequired}).isRequired,summaryData:v.a.object,report:v.a.string},k.defaultProps={summaryData:{totals:{primary:{},secondary:{}},isError:!1}},k.contextType=C.a,t.a=Object(f.a)(Object(y.withSelect)((function(e,t){var r=t.charts,a=t.endpoint,o=t.limitProperties,n=t.query,c=t.filters,i=t.advancedFilters,l=o||[a],u=l.some((function(e){return n[e]&&n[e].length}));if(n.search&&!u)return{emptySearchResults:!0};var s=r&&r.map((function(e){return e.key})),m=e(g.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings").woocommerce_default_date_range;return{summaryData:Object(g.getSummaryNumbers)({endpoint:a,query:n,select:e,limitBy:l,filters:c,advancedFilters:i,defaultDateRange:m,fields:s}),defaultDateRange:m}})))(k)},747:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return l})),r.d(t,"a",(function(){return u}));var a=r(3),o=r(49),n=r(33),c=r(720),i=Object(o.applyFilters)("woocommerce_admin_orders_report_charts",[{key:"orders_count",label:Object(a.__)("Orders","woocommerce-admin"),type:"number"},{key:"net_revenue",label:Object(a.__)("Net Sales","woocommerce-admin"),order:"desc",orderby:"net_total",type:"currency"},{key:"avg_order_value",label:Object(a.__)("Average Order Value","woocommerce-admin"),type:"currency"},{key:"avg_items_per_order",label:Object(a.__)("Average Items Per Order","woocommerce-admin"),order:"desc",orderby:"num_items_sold",type:"average"}]),l=Object(o.applyFilters)("woocommerce_admin_orders_report_filters",[{label:Object(a.__)("Show","woocommerce-admin"),staticParams:["chartType","paged","per_page"],param:"filter",showFilters:function(){return!0},filters:[{label:Object(a.__)("All Orders","woocommerce-admin"),value:"all"},{label:Object(a.__)("Advanced Filters","woocommerce-admin"),value:"advanced"}]}]),u=Object(o.applyFilters)("woocommerce_admin_orders_report_advanced_filters",{title:Object(a._x)("Orders Match {{select /}} Filters","A sentence describing filters for Orders. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ","woocommerce-admin"),filters:{status:{labels:{add:Object(a.__)("Order Status","woocommerce-admin"),remove:Object(a.__)("Remove order status filter","woocommerce-admin"),rule:Object(a.__)("Select an order status filter match","woocommerce-admin"),title:Object(a.__)("{{title}}Order Status{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(a.__)("Select an order status","woocommerce-admin")},rules:[{value:"is",label:Object(a._x)("Is","order status","woocommerce-admin")},{value:"is_not",label:Object(a._x)("Is Not","order status","woocommerce-admin")}],input:{component:"SelectControl",options:Object.keys(n.d).map((function(e){return{value:e,label:n.d[e]}}))}},product:{labels:{add:Object(a.__)("Products","woocommerce-admin"),placeholder:Object(a.__)("Search products","woocommerce-admin"),remove:Object(a.__)("Remove products filter","woocommerce-admin"),rule:Object(a.__)("Select a product filter match","woocommerce-admin"),title:Object(a.__)("{{title}}Product{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(a.__)("Select products","woocommerce-admin")},rules:[{value:"includes",label:Object(a._x)("Includes","products","woocommerce-admin")},{value:"excludes",label:Object(a._x)("Excludes","products","woocommerce-admin")}],input:{component:"Search",type:"products",getLabels:c.d}},coupon:{labels:{add:Object(a.__)("Coupon Codes","woocommerce-admin"),placeholder:Object(a.__)("Search coupons","woocommerce-admin"),remove:Object(a.__)("Remove coupon filter","woocommerce-admin"),rule:Object(a.__)("Select a coupon filter match","woocommerce-admin"),title:Object(a.__)("{{title}}Coupon Code{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(a.__)("Select coupon codes","woocommerce-admin")},rules:[{value:"includes",label:Object(a._x)("Includes","coupon code","woocommerce-admin")},{value:"excludes",label:Object(a._x)("Excludes","coupon code","woocommerce-admin")}],input:{component:"Search",type:"coupons",getLabels:c.b}},customer_type:{labels:{add:Object(a.__)("Customer Type","woocommerce-admin"),remove:Object(a.__)("Remove customer filter","woocommerce-admin"),rule:Object(a.__)("Select a customer filter match","woocommerce-admin"),title:Object(a.__)("{{title}}Customer is{{/title}} {{filter /}}","woocommerce-admin"),filter:Object(a.__)("Select a customer type","woocommerce-admin")},input:{component:"SelectControl",options:[{value:"new",label:Object(a.__)("New","woocommerce-admin")},{value:"returning",label:Object(a.__)("Returning","woocommerce-admin")}],defaultOption:"new"}},refunds:{labels:{add:Object(a.__)("Refunds","woocommerce-admin"),remove:Object(a.__)("Remove refunds filter","woocommerce-admin"),rule:Object(a.__)("Select a refund filter match","woocommerce-admin"),title:Object(a.__)("{{title}}Refunds{{/title}} {{filter /}}","woocommerce-admin"),filter:Object(a.__)("Select a refund type","woocommerce-admin")},input:{component:"SelectControl",options:[{value:"all",label:Object(a.__)("All","woocommerce-admin")},{value:"partial",label:Object(a.__)("Partially refunded","woocommerce-admin")},{value:"full",label:Object(a.__)("Fully refunded","woocommerce-admin")},{value:"none",label:Object(a.__)("None","woocommerce-admin")}],defaultOption:"all"}},tax_rate:{labels:{add:Object(a.__)("Tax Rates","woocommerce-admin"),placeholder:Object(a.__)("Search tax rates","woocommerce-admin"),remove:Object(a.__)("Remove tax rate filter","woocommerce-admin"),rule:Object(a.__)("Select a tax rate filter match","woocommerce-admin"),title:Object(a.__)("{{title}}Tax Rate{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(a.__)("Select tax rates","woocommerce-admin")},rules:[{value:"includes",label:Object(a._x)("Includes","tax rate","woocommerce-admin")},{value:"excludes",label:Object(a._x)("Excludes","tax rate","woocommerce-admin")}],input:{component:"Search",type:"taxes",getLabels:c.f}},attribute:{allowMultiple:!0,labels:{add:Object(a.__)("Attribute","woocommerce-admin"),placeholder:Object(a.__)("Search attributes","woocommerce-admin"),remove:Object(a.__)("Remove attribute filter","woocommerce-admin"),rule:Object(a.__)("Select a product attribute filter match","woocommerce-admin"),title:Object(a.__)("{{title}}Attribute{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(a.__)("Select attributes","woocommerce-admin")},rules:[{value:"is",label:Object(a._x)("Is","product attribute","woocommerce-admin")},{value:"is_not",label:Object(a._x)("Is Not","product attribute","woocommerce-admin")}],input:{component:"ProductAttribute"}}}})},881:function(e,t,r){}}]);