import{g as T,ae as _,af as j,ag as F,r as o,ah as L,a as e,ai as M,Z as k,T as R,aj as B,ak as E,al as W,am as z,j as g,an as N}from"./sanity-167d7aa5.js";const O=(t,n)=>({title:g("em",{children:["No schema found for type ",e("code",{children:n})]}),subtitle:g("em",{children:["Document: ",e("code",{children:t})]}),media:()=>e(N,{})});function U(t){const{layout:n,value:a}=t;return e(k,{...O(a._id,a._type),layout:n})}function p(t,n,a){return t===!1?!1:t||n&&n.icon||a||!1}function q(t){const{icon:n,id:a,layout:i="default",pressed:P,schemaType:s,selected:r,title:u,value:c,margin:I,marginBottom:v,marginTop:y}=t,C=T(),l=_(),{ChildLink:d}=j(),m=F(a),f=!!(s&&s.name&&C.get(s.name)),[S,h]=o.useState(!1),b=o.useMemo(()=>c&&L(c)?!s||!f?e(U,{value:c}):e(M,{documentPreviewStore:l,icon:p(n,s,W),layout:i,schemaType:s,value:c,presence:m}):e(k,{status:e(R,{muted:!0,children:e(B,{})}),icon:p(n,s,z),layout:i,title:u}),[l,f,n,i,s,u,c,m]),w=o.useMemo(()=>function(D){return e(d,{...D,childId:a})},[d,a]),x=o.useCallback(()=>h(!0),[]);return o.useEffect(()=>h(!1),[r]),e(E,{__unstable_focusRing:!0,as:w,"data-as":"a","data-ui":"PaneItem",margin:I,marginBottom:v,marginTop:y,onClick:x,padding:2,pressed:P,radius:2,selected:r||S,sizing:"border",tabIndex:-1,tone:"inherit",children:b})}export{q as P};
