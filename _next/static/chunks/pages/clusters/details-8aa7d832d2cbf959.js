(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[205],{50068:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/clusters/details",function(){return t(30948)}])},32890:function(e,s,t){"use strict";t.d(s,{X:function(){return ErrorPageContainer}});var i=t(85893),n=t(38679);let ErrorPageContainer=e=>{let{children:s,css:t={}}=e;return(0,i.jsxs)(n.W2,{css:{borderRadius:0,marginTop:"$7xl",...t},children:[(0,i.jsx)(n.xv,{variant:"h4",children:"Error \uD83D\uDE25"}),(0,i.jsx)(n.xv,{variant:"body",children:s})]})}},30948:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return details}});var i=t(85893),n=t(38679),l=t(11163),r=t.n(l),a=t(87708),o=t(30272),d=t(30120),c=t(17666),u=t(63645),x=t(71993),h=t(2954),v=t(94736),p=t(33047);let g=[{accessorKey:"address",header:"Address"},{accessorKey:"status",header:"Status",sortable:!0},{accessorKey:"effectivenessDisplay",header:(0,i.jsxs)(n.kC,{css:{alignItems:"center",gap:"$xxs"},children:["Effectiveness",(0,i.jsx)(p.M,{content:"This score indicates the overall effectiveness of the Ethereum staking validator, gauging its performance based on the inclusion of attestations over its entire operational period."})]}),sortable:!0,sortAccessor:e=>e.effectiveness},{accessorKey:"withdrawalAddress",header:"Withdrawal Address"},{accessorKey:"feeRecipient",header:"Fee Recipient"}],ValidatorsTable=e=>{let{validators:s,currentAccount:t}=e,l=(0,c.Z)(s.flatMap(e=>[e.withdrawalAddress,e.feeRecipient])),CurrentAccountCell=e=>{let{address:s,index:t}=e;return(0,i.jsxs)(n.xv,{size:"4",color:"obolGreen",css:{display:"flex",alignItems:"center",justifyContent:"start",gap:"xxxs"},children:[(0,i.jsxs)(n.kC,{direction:"column",css:{mr:"$xxs",fontWeight:"$bold"},children:[l[t]&&(0,i.jsxs)(i.Fragment,{children:[l[t],(0,i.jsx)("br",{})]}),(0,i.jsx)(n.dh,{css:{fontWeight:"bold",color:"$obolGreen",width:"120px !important"},value:(0,o.zN)(s,[0,6],5),readOnly:!0})]}),(0,i.jsx)(u.Z,{address:s})]})},NonCurrentAccountCell=e=>{let{address:s,index:t}=e;return l[t]?(0,i.jsxs)(i.Fragment,{children:[l[t],(0,i.jsx)("br",{}),(0,i.jsxs)(n.xu,{css:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,i.jsx)(n.dh,{value:s,readOnly:!0,css:{mr:"$xxs",color:"$obolGreen",width:"120px !important"}}),(0,i.jsx)(u.Z,{address:s})]})]}):(0,i.jsxs)(n.xu,{css:{display:"flex",alignItems:"center",justifyContent:"start"},children:[(0,i.jsx)(n.dh,{value:(0,o.zN)(s,[0,6],5),readOnly:!0,css:{mr:"$xxs",color:"$obolGreen",width:"120px !important"}}),(0,i.jsx)(u.Z,{address:s})]})};return(0,i.jsx)(v.g_,{css:{".table-container":{"@sm":{width:"900px"}}},children:(0,i.jsx)(n.Nk,{tabs:[{title:"Validators",tableProps:{columns:g,rows:s.map((e,s)=>({address:(0,i.jsxs)(n.xu,{css:{display:"flex",alignItems:"center",justifyContent:"start"},children:[(0,i.jsx)(n.dh,{value:(0,o.zN)(e.address,[0,6],5),readOnly:!0,css:{mr:"$xxs",color:"$obolGreen",width:"120px !important"}}),(0,i.jsx)(x.j,{link:"".concat(h.q2,"/validator/").concat(e.address)})]}),status:e.status||"Pending",effectiveness:e.effectiveness,effectivenessDisplay:e.effectivenessDisplay,withdrawalAddress:(0,o.qF)(t,e.withdrawalAddress)?(0,i.jsx)(CurrentAccountCell,{address:e.withdrawalAddress,index:s}):(0,i.jsx)(NonCurrentAccountCell,{address:e.withdrawalAddress,index:s}),feeRecipient:(0,o.qF)(t,e.feeRecipient)?(0,i.jsx)(CurrentAccountCell,{address:e.feeRecipient,index:s+1}):(0,i.jsx)(NonCurrentAccountCell,{address:e.feeRecipient,index:s+1})}))}}]})})},f=(0,n.zo)(n.kC,{flexDirection:"column",width:"auto",gap:"$2xl",px:"10%",py:"$5xl","@sm":{px:"10%",pb:"$5xl",pt:"$xl"}});var m=t(67294),j=t(19485);let TransactionSection=e=>{let{icon:s,heading:t,children:l}=e;return(0,i.jsxs)(n.mh,{children:[(0,i.jsxs)(n.xu,{children:["successfully"===s&&(0,i.jsx)(n.nQ,{}),"loading"===s&&(0,i.jsx)(n.ZG,{}),"exiting"===s&&(0,i.jsx)(n.lR,{})]}),(0,i.jsx)(n.xu,{css:{display:"flex",fd:"column",gap:"$sm"},children:(0,i.jsxs)(n.xu,{css:{display:"flex",fd:"column",gap:"$xs"},children:[(0,i.jsx)(n.xv,{variant:"body",css:{color:"white"},children:t}),l]})})]})},ExitClusterSection=e=>{let{clusterStatus:s,handleOnExit:t,txHash:l}=e;return"exiting"===s?(0,i.jsxs)(TransactionSection,{icon:"exiting",heading:"Cluster is exiting",children:[(0,i.jsxs)(n.rU,{css:{fontSize:"$4",fontWeight:"$normal"},target:"_blank",href:"https://".concat(h.pn,".beaconchain.io/tx/").concat(l),children:["Check Status on Beaconchain",(0,i.jsx)(n._j,{size:"sm"})]}),(0,i.jsxs)(n.rU,{css:{fontSize:"$4",fontWeight:"$normal"},target:"_blank",href:"https://docs.obol.tech/docs/start/quickstart-exit",children:["Learn More",(0,i.jsx)(n.ZJ,{size:"sm"})]})]}):"exited"===s?(0,i.jsxs)(n.kC,{direction:"column",css:{gap:"$sm"},children:[(0,i.jsx)(TransactionSection,{icon:"successfully",heading:"Cluster is successfully exited"}),(0,i.jsx)(n.xv,{variant:"body",children:"Calling Waterfall Funds pushes the principal ETH to the Withdrawal Address and accrued rewards to the splitter contract."})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.xv,{variant:"body",children:"Exit all validators in this cluster."}),(0,i.jsx)(n.xv,{variant:"body",children:"This cluster will no longer earn rewards."}),(0,i.jsx)(n.xv,{variant:"body",children:"Upon exiting the cluster you will be able to withdraw the original principal & claim all rewards."}),(0,i.jsx)(n.zx,{color:"primary",type:"button",css:{width:"auto"},disabled:"active"!==s,onClick:()=>t(),children:"Exit Cluster"})]})},DistributeEth=e=>{var s;let{userBalance:t,distributeAndClaimStatus:l,splitRecipients:r,clusterStatus:o,handleOnDistributeAndWithdrawUserFunds:d,handleOnExit:c}=e,{account:u}=(0,a.kR)(),x=(null==l?void 0:l.loading)?{variant:"tx"}:{},p="string"==typeof(null==l?void 0:l.txHash)?null==l?void 0:l.txHash:null==l?void 0:null===(s=l.txHash)||void 0===s?void 0:s.transactionHash,g=null==r?void 0:r.some(e=>{var s;return(null===(s=e.recipient.address)||void 0===s?void 0:s.toLowerCase())===(null==u?void 0:u.toLowerCase())}),f=!(0,j.isAddress)(u)||!!t.error||!t.balance||t.balance&&0===parseFloat(t.balance)||(null==l?void 0:l.completed)||!(null==r?void 0:r.some(e=>e.recipient.address.toLowerCase()===(null==u?void 0:u.toLowerCase())))&&!t.isPrincipalConnected;return console.log(t,"userBalance"),(0,i.jsxs)(n.kC,{css:{gap:"$lg","@sm":{flexDirection:"column",gap:"$md",alignItems:"flex-start",justifyContent:"flex-start",gridColumn:"span 2"}},children:[(0,i.jsxs)(n.W2,{css:{gap:"$lg",alignItems:"flex-start",justifyContent:"flex-start",gridColumn:"span 1"},children:[(0,i.jsx)(n.kC,{css:{justifyContent:"space-between",alignItems:"center"},children:(0,i.jsx)(n.xv,{variant:"h4",children:"Exit Cluster"})}),(0,i.jsx)(ExitClusterSection,{clusterStatus:o,handleOnExit:c,txHash:p})]}),(g||t.isPrincipalConnected||(null==l?void 0:l.completed)&&l.txHash)&&(0,v.cr)("showClaimSection")&&(0,i.jsxs)(n.W2,{css:{gap:"$lg",alignItems:"flex-start",justifyContent:"flex-start",gridColumn:"span 1"},children:[(0,i.jsx)(n.kC,{direction:"column",children:(0,i.jsx)(n.xv,{variant:"h4",children:"Claim ETH"})}),(0,i.jsxs)(n.kC,{css:{alignItems:"center",gap:"$xxxs"},children:[(0,i.jsx)(n.xv,{css:{textTransform:"uppercase"},variant:"subline",color:"body",children:"Claimable"}),(0,i.jsx)(n.KZ,{content:"Your total amount of ETH claimable from the split",children:(0,i.jsx)(n.xu,{css:{display:"flex"},children:(0,i.jsx)(n.by,{})})})]}),(0,i.jsxs)(n.kC,{css:{gap:"$xxs",alignItems:"center"},children:[(0,i.jsx)(n.Ee,{src:"/assets/eth-icon.png",alt:"eth",width:24,height:24}),(0,i.jsx)(n.xv,{css:{textTransform:"uppercase"},variant:"h5",children:parseFloat(t.balance).toFixed(2)||"0.00"})]}),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v.fl,{...x,color:"primary",type:"button",css:{width:"auto"},disabled:f,onClick:()=>d(),fullWidth:!0,children:(null==l?void 0:l.loading)?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.yC,{}),"Transaction in progress"]}):(0,i.jsx)(i.Fragment,{children:" Claim ETH"})}),(null==l?void 0:l.completed)&&(0,i.jsx)(TransactionSection,{icon:"successfully",heading:"Successfully claimed ETH",children:(0,i.jsxs)(n.rU,{css:{fontSize:"$4",fontWeight:"$normal"},target:"_blank",href:"https://".concat(h.pn,".etherscan.io/tx/").concat(p),children:["View on Etherscan",(0,i.jsx)(n._j,{size:"sm"})]})}),!g&&!t.isPrincipalConnected&&(0,i.jsx)(n.xv,{variant:"metadata",color:"test",children:"You are not a recipient of this split and cannot claim"})]})]})]})};var C=t(71005),b=t(37029),w=t(55424);let ClusterDetailsContainer=e=>{var s,t,l,o,c,u,x,p;let{clusterDefinition:g,validators:j,currentAccount:y,clusterStatus:_}=e,{provider:k}=(0,a.kR)(),{chainId:$,address:S}=(0,w.m)(),E=r().query.lockHash,[A,T]=(0,m.useState)(),R=(null==g?void 0:g.fee_recipient_address)||((null==g?void 0:g.validators)?null==g?void 0:null===(s=g.validators[0])||void 0===s?void 0:s.fee_recipient_address:null),D=(null==g?void 0:g.withdrawal_address)||((null==g?void 0:g.validators)?null==g?void 0:null===(t=g.validators[0])||void 0===t?void 0:t.withdrawal_address:null),{metadata:F,isLoading:H}=(0,a.DS)(R),W=(0,m.useMemo)(()=>({accounts:null==F?void 0:F.recipientsSorted[0],percentAllocations:null==F?void 0:F.recipientsSorted[1],distributorFee:h.Uu,split:R}),[F,R]),z=(0,a.PP)(S,W,D),{isVerifiedSplitter:L}=(0,a.Gc)(R,D,32*g.num_validators);if((null==F?void 0:null===(l=F.recipients)||void 0===l?void 0:l.length)>0&&!L)return(0,i.jsxs)(n.kC,{direction:"column",css:{alignItems:"center",gap:"$md"},children:[(0,i.jsx)(n.xv,{size:"5",children:"Error: unverified splitter contracts."}),(0,i.jsx)(n.zx,{as:"a",href:"/",children:"Return to start"})]});let I=null==F?void 0:null===(c=F.recipients)||void 0===c?void 0:null===(o=c.find(e=>e.recipient.address===S))||void 0===o?void 0:o.percentAllocation,N=Number(null==z?void 0:z.owrBalance)*(I/100);N>0&&!isNaN(N)&&(null==z?void 0:z.balance)==null&&(z.balance=N.toString());let handleOnDistributeAndWithdrawUserFunds=async()=>{T(e=>({...e,loading:!0})),D===R?(0,C.Vx)(S,W,k.getSigner(0),C.Ap).then(e=>{console.log("withdraw tx",e),T(s=>({...s,loading:!1,txHash:e,completed:!0}))}).catch(e=>{T(s=>({...s,loading:!1,errorMessage:e.message})),console.log("error",e)}):"0"!==z.owrBalance?(0,C.E4)(S,D,W,k.getSigner(0),C.Ap).then(e=>{console.log("withdraw tx",e),T(s=>({...s,loading:!1,txHash:e,completed:!0}))}).catch(e=>{T(s=>({...s,loading:!1,errorMessage:e.message})),console.log("error",e)}):(console.log("handleOnWithdrawFunds with OWR already distributed"),(0,C.h_)({chainId:$,provider:k,address:S}).then(e=>{console.log("withdraw tx",e),T(s=>({...s,loading:!1,txHash:e,completed:!0}))}).catch(e=>{T(s=>({...s,loading:!1,errorMessage:e.message})),console.log("error",e)}))};return console.log(F),(0,i.jsxs)(f,{children:[(0,i.jsxs)(n.kC,{direction:"column",css:{gap:"$xxs"},children:[(0,i.jsx)(n.xv,{variant:"h3",children:null==g?void 0:g.name}),(0,i.jsx)(n.xv,{variant:"metadata",color:"body",children:"Created ".concat(d.ou.fromISO(null==g?void 0:g.timestamp).toRelativeCalendar()," on ").concat(d.ou.fromISO(null==g?void 0:g.timestamp).toFormat("yyyy LLL dd"))})]}),(0,i.jsxs)(n.kC,{css:{gap:"$lg","@sm":{flexDirection:"column"}},children:[_?(0,i.jsx)(n.gK,{heading:"Cluster Status",status:_,tooltipContent:"The cluster aggregate status"}):(0,i.jsx)(n.gK,{heading:"Cluster Status",content:"Loading...",tooltipContent:"The cluster aggregate status"}),(0,i.jsx)(n.gK,{heading:"Operators",content:(null==g?void 0:null===(u=g.operators)||void 0===u?void 0:u.length)||"0",tooltipContent:"The number of cluster operators"}),(0,i.jsx)(n.gK,{heading:"Validators",content:(null==j?void 0:j.length)||"0",tooltipContent:"The number of cluster validators"})]}),(null==g?void 0:null===(x=g.operators)||void 0===x?void 0:x.length)>0&&(0,i.jsx)(v.Dq,{operators:g.operators,currentAccount:y,creatorAddress:g.creator.address}),(null==j?void 0:j.length)>0?(0,i.jsx)(ValidatorsTable,{validators:j.map((e,s)=>({id:s.toString(),...e}))}):(0,i.jsxs)(n.W2,{css:{gap:"$lg",alignItems:"flex-start"},children:[(0,i.jsx)(n.sQ,{heading:"Distributed Key Generation is incomplete"}),(0,i.jsx)(n.zx,{as:"a",href:"/dv?configHash=".concat(g.config_hash),target:"_blank",children:"Complete DKG"})]}),(0,v.cr)("showSplitRewardTable")&&(null==F?void 0:null===(p=F.recipients)||void 0===p?void 0:p.length)>0&&S?(0,i.jsx)(b.pc,{recipients:null==F?void 0:F.recipients,validatorsSize:null==j?void 0:j.length,type:R===D?"Principal & Rewards":"Rewards"}):H&&(0,i.jsx)(n.xv,{variant:"subline",children:"Loading split table information..."}),(null==j?void 0:j.length)>0&&(0,i.jsx)(DistributeEth,{feeRecipientAddress:g.fee_recipient_address,handleOnDistributeAndWithdrawUserFunds:handleOnDistributeAndWithdrawUserFunds,handleOnExit:()=>{r().push({pathname:"/clusters/exit",query:{ctaRouteValue:E}})},userBalance:z,distributeAndClaimStatus:A,splitRecipients:null==F?void 0:F.recipients,clusterStatus:_})]})};var y=t(32890),details=()=>{var e,s,t,r;let d=(0,l.useRouter)(),{account:c}=(0,a.kR)(),u=(0,o.xs)(d,"lockHash");console.log("lockHash",u);let{data:x,isLoading:h,error:v}=(0,a.sh)(u);if(u&&!x&&!h||!u||!h&&!x)return(0,i.jsx)(y.X,{children:(null==v?void 0:null===(s=v.response)||void 0===s?void 0:null===(e=s.data)||void 0===e?void 0:e.message)||"Error: No details information provided, please double check the\n            link you followed or return to the home page."});if(v&&!x)return(0,i.jsx)(y.X,{children:null==v?void 0:null===(r=v.response)||void 0===r?void 0:null===(t=r.data)||void 0===t?void 0:t.message});if(h)return(0,i.jsxs)(f,{children:[(0,i.jsx)(n.xv,{variant:"subline",children:"Loading cluster data..."}),";"]});let p=null==x?void 0:x.distributed_validators.map((e,s)=>({status:e.isLoadingValidatorStatus?(0,i.jsx)(n.xv,{children:"Loading ..."}):(0,i.jsx)(n.HV,{status:e.status,textVariant:"metricStatusCell"}),effectivenessDisplay:e.isLoadingValidatorEffectiveness?(0,i.jsx)(n.xv,{children:"Loading ..."}):e.effectiveness?(0,i.jsxs)(n.kC,{css:{gap:"$xs",alignItems:"center"},children:[(0,i.jsx)(n.RV,{}),(0,i.jsx)(n.xv,{variant:"metricStatusCell",css:{textTransform:"capitalize",color:"$obolGreen"},children:"".concat((100*e.effectiveness).toFixed(2)," %")})]}):"",effectiveness:e.effectiveness?(100*e.effectiveness).toFixed(2):"",address:e.distributed_public_key,withdrawalAddress:(null==x?void 0:x.cluster_definition.validators)?null==x?void 0:x.cluster_definition.validators[s].withdrawal_address:null==x?void 0:x.cluster_definition.withdrawal_address,feeRecipient:(null==x?void 0:x.cluster_definition.validators)?null==x?void 0:x.cluster_definition.validators[s].fee_recipient_address:null==x?void 0:x.cluster_definition.fee_recipient_address}));return(0,i.jsx)(ClusterDetailsContainer,{clusterDefinition:x.cluster_definition,validators:p,currentAccount:c,clusterStatus:x.distributed_validators.some(e=>e.isLoadingValidatorStatus)?null:(0,o.Uq)(x)})}}},function(e){e.O(0,[120,774,888,179],function(){return e(e.s=50068)}),_N_E=e.O()}]);