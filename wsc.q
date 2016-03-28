/.z.ws:{show .j.k -9!x};
/.z.ws:{neg[.z.w].Q.s value x};
/.z.ws:{neg[.z.w]@[.Q.s value@;x;{"'",x,"\n"}]};

dataformat:{`fname`data!(x;y)};
evaluate:{dataformat[x`fname;?[1 = count x;(value x`fname);(value x`fname) @ (x _ `fname)]]};
.z.ws:{neg[.z.w] -8!.j.j @[evaluate;.j.k -9!x;{'"error: ",x}]};

/all functions are of form fn[] or fn[()!()]
gettbl:{ (value x`arg1)["i"$x`arg2] };
